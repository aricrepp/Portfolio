import Pi from"https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},Qi=[],mn=()=>{},ud=()=>!1,ro=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ul=n=>n.startsWith("onUpdate:"),xt=Object.assign,fl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},fd=Object.prototype.hasOwnProperty,Qe=(n,e)=>fd.call(n,e),He=Array.isArray,er=n=>so(n)==="[object Map]",Ju=n=>so(n)==="[object Set]",Ve=n=>typeof n=="function",ht=n=>typeof n=="string",ri=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Qu=n=>(st(n)||Ve(n))&&Ve(n.then)&&Ve(n.catch),ef=Object.prototype.toString,so=n=>ef.call(n),hd=n=>so(n).slice(8,-1),tf=n=>so(n)==="[object Object]",hl=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Rr=cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},dd=/-(\w)/g,Ti=oo(n=>n.replace(dd,(e,t)=>t?t.toUpperCase():"")),pd=/\B([A-Z])/g,Ri=oo(n=>n.replace(pd,"-$1").toLowerCase()),nf=oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),wo=oo(n=>n?`on${nf(n)}`:""),ti=(n,e)=>!Object.is(n,e),Ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},md=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let nc;const sf=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?xd(i):dl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ht(n)||st(n))return n}const gd=/;(?![^(]*\))/g,_d=/:([^]+)/,vd=/\/\*[^]*?\*\//g;function xd(n){const e={};return n.replace(vd,"").split(gd).forEach(t=>{if(t){const i=t.split(_d);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pl(n){let e="";if(ht(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=pl(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sd=cl(Md);function of(n){return!!n||n===""}const af=n=>!!(n&&n.__v_isRef===!0),lf=n=>ht(n)?n:n==null?"":He(n)||st(n)&&(n.toString===ef||!Ve(n.toString))?af(n)?lf(n.value):JSON.stringify(n,cf,2):String(n),cf=(n,e)=>af(e)?cf(n,e.value):er(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Co(i,s)+" =>"]=r,t),{})}:Ju(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Co(t))}:ri(e)?Co(e):st(e)&&!He(e)&&!tf(e)?String(e):e,Co=(n,e="")=>{var t;return ri(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class yd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ed(){return Ht}let nt;const Po=new WeakSet;class uf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Po.has(this)&&(Po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ic(this),df(this);const e=nt,t=tn;nt=this,tn=!0;try{return this.fn()}finally{pf(this),nt=e,tn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)_l(e);this.deps=this.depsTail=void 0,ic(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pa(this)&&this.run()}get dirty(){return pa(this)}}let ff=0,Cr;function hf(n){n.flags|=8,n.next=Cr,Cr=n}function ml(){ff++}function gl(){if(--ff>0)return;let n;for(;Cr;){let e=Cr;for(Cr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function df(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pf(n,e=!1){let t,i=n.depsTail,r=i;for(;r;){const s=r.prevDep;r.version===-1?(r===i&&(i=s),_l(r,e),Td(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=t,n.depsTail=i}function pa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function mf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===zr))return;n.globalVersion=zr;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!pa(n)){n.flags&=-3;return}const t=nt,i=tn;nt=n,tn=!0;try{df(n);const r=n.fn(n._value);(e.version===0||ti(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{nt=t,tn=i,pf(n,!0),n.flags&=-3}}function _l(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i),!t.subs)if(t.computed){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)_l(s,!0)}else t.map&&!e&&(t.map.delete(t.key),t.map.size||Ys.delete(t.target))}function Td(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let tn=!0;const gf=[];function si(){gf.push(tn),tn=!1}function oi(){const n=gf.pop();tn=n===void 0?!0:n}function ic(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=nt;nt=void 0;try{e()}finally{nt=t}}}let zr=0;class bd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!nt||!tn||nt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==nt)t=this.activeLink=new bd(nt,this),nt.deps?(t.prevDep=nt.depsTail,nt.depsTail.nextDep=t,nt.depsTail=t):nt.deps=nt.depsTail=t,nt.flags&4&&_f(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=nt.depsTail,t.nextDep=void 0,nt.depsTail.nextDep=t,nt.depsTail=t,nt.deps===t&&(nt.deps=i)}return t}trigger(e){this.version++,zr++,this.notify(e)}notify(e){ml();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gl()}}}function _f(n){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_f(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}const Ys=new WeakMap,Ei=Symbol(""),ma=Symbol(""),Hr=Symbol("");function Tt(n,e,t){if(tn&&nt){let i=Ys.get(n);i||Ys.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new vl),r.target=n,r.map=i,r.key=t),r.track()}}function Ln(n,e,t,i,r,s){const a=Ys.get(n);if(!a){zr++;return}const o=l=>{l&&l.trigger()};if(ml(),e==="clear")a.forEach(o);else{const l=He(n),c=l&&hl(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Hr||!ri(h)&&h>=u)&&o(f)})}else switch(t!==void 0&&o(a.get(t)),c&&o(a.get(Hr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Ei)),er(n)&&o(a.get(ma)));break;case"delete":l||(o(a.get(Ei)),er(n)&&o(a.get(ma)));break;case"set":er(n)&&o(a.get(Ei));break}}gl()}function Li(n){const e=$e(n);return e===n?e:(Tt(e,"iterate",Hr),nn(n)?e:e.map(Rt))}function xl(n){return Tt(n=$e(n),"iterate",Hr),n}const Ad={__proto__:null,[Symbol.iterator](){return Lo(this,Symbol.iterator,Rt)},concat(...n){return Li(this).concat(...n.map(e=>He(e)?Li(e):e))},entries(){return Lo(this,"entries",n=>(n[1]=Rt(n[1]),n))},every(n,e){return xn(this,"every",n,e,void 0,arguments)},filter(n,e){return xn(this,"filter",n,e,t=>t.map(Rt),arguments)},find(n,e){return xn(this,"find",n,e,Rt,arguments)},findIndex(n,e){return xn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return xn(this,"findLast",n,e,Rt,arguments)},findLastIndex(n,e){return xn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return xn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Do(this,"includes",n)},indexOf(...n){return Do(this,"indexOf",n)},join(n){return Li(this).join(n)},lastIndexOf(...n){return Do(this,"lastIndexOf",n)},map(n,e){return xn(this,"map",n,e,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...e){return rc(this,"reduce",n,e)},reduceRight(n,...e){return rc(this,"reduceRight",n,e)},shift(){return vr(this,"shift")},some(n,e){return xn(this,"some",n,e,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return Li(this).toReversed()},toSorted(n){return Li(this).toSorted(n)},toSpliced(...n){return Li(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return Lo(this,"values",Rt)}};function Lo(n,e,t){const i=xl(n),r=i[e]();return i!==n&&!nn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const wd=Array.prototype;function xn(n,e,t,i,r,s){const a=xl(n),o=a!==n&&!nn(n),l=a[e];if(l!==wd[e]){const f=l.apply(n,s);return o?Rt(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Rt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function rc(n,e,t,i){const r=xl(n);let s=t;return r!==n&&(nn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Rt(o),l,n)}),r[e](s,...i)}function Do(n,e,t){const i=$e(n);Tt(i,"iterate",Hr);const r=i[e](...t);return(r===-1||r===!1)&&El(t[0])?(t[0]=$e(t[0]),i[e](...t)):r}function vr(n,e,t=[]){si(),ml();const i=$e(n)[e].apply(n,t);return gl(),oi(),i}const Rd=cl("__proto__,__v_isRef,__isVue"),vf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ri));function Cd(n){ri(n)||(n=String(n));const e=$e(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class xf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Gd:Ef:s?yf:Sf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=Ad[t]))return l;if(t==="hasOwnProperty")return Cd}const o=Reflect.get(e,t,Et(e)?e:i);return(ri(t)?vf.has(t):Rd(t))||(r||Tt(e,"get",t),s)?o:Et(o)?a&&hl(t)?o:o.value:st(o)?r?bf(o):lo(o):o}}class Mf extends xf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=bi(s);if(!nn(i)&&!bi(i)&&(s=$e(s),i=$e(i)),!He(e)&&Et(s)&&!Et(i))return l?!1:(s.value=i,!0)}const a=He(e)&&hl(t)?Number(t)<e.length:Qe(e,t),o=Reflect.set(e,t,i,Et(e)?e:r);return e===$e(r)&&(a?ti(i,s)&&Ln(e,"set",t,i):Ln(e,"add",t,i)),o}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ln(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ri(t)||!vf.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",He(e)?"length":Ei),Reflect.ownKeys(e)}}class Pd extends xf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ld=new Mf,Dd=new Pd,Id=new Mf(!0);const Ml=n=>n,ao=n=>Reflect.getPrototypeOf(n);function ss(n,e,t=!1,i=!1){n=n.__v_raw;const r=$e(n),s=$e(e);t||(ti(e,s)&&Tt(r,"get",e),Tt(r,"get",s));const{has:a}=ao(r),o=i?Ml:t?Tl:Rt;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function os(n,e=!1){const t=this.__v_raw,i=$e(t),r=$e(n);return e||(ti(n,r)&&Tt(i,"has",n),Tt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function as(n,e=!1){return n=n.__v_raw,!e&&Tt($e(n),"iterate",Ei),Reflect.get(n,"size",n)}function sc(n,e=!1){!e&&!nn(n)&&!bi(n)&&(n=$e(n));const t=$e(this);return ao(t).has.call(t,n)||(t.add(n),Ln(t,"add",n,n)),this}function oc(n,e,t=!1){!t&&!nn(e)&&!bi(e)&&(e=$e(e));const i=$e(this),{has:r,get:s}=ao(i);let a=r.call(i,n);a||(n=$e(n),a=r.call(i,n));const o=s.call(i,n);return i.set(n,e),a?ti(e,o)&&Ln(i,"set",n,e):Ln(i,"add",n,e),this}function ac(n){const e=$e(this),{has:t,get:i}=ao(e);let r=t.call(e,n);r||(n=$e(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Ln(e,"delete",n,void 0),s}function lc(){const n=$e(this),e=n.size!==0,t=n.clear();return e&&Ln(n,"clear",void 0,void 0),t}function ls(n,e){return function(i,r){const s=this,a=s.__v_raw,o=$e(a),l=e?Ml:n?Tl:Rt;return!n&&Tt(o,"iterate",Ei),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function cs(n,e,t){return function(...i){const r=this.__v_raw,s=$e(r),a=er(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Ml:e?Tl:Rt;return!e&&Tt(s,"iterate",l?ma:Ei),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Bn(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ud(){const n={get(s){return ss(this,s)},get size(){return as(this)},has:os,add:sc,set:oc,delete:ac,clear:lc,forEach:ls(!1,!1)},e={get(s){return ss(this,s,!1,!0)},get size(){return as(this)},has:os,add(s){return sc.call(this,s,!0)},set(s,a){return oc.call(this,s,a,!0)},delete:ac,clear:lc,forEach:ls(!1,!0)},t={get(s){return ss(this,s,!0)},get size(){return as(this,!0)},has(s){return os.call(this,s,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:ls(!0,!1)},i={get(s){return ss(this,s,!0,!0)},get size(){return as(this,!0)},has(s){return os.call(this,s,!0)},add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cs(s,!1,!1),t[s]=cs(s,!0,!1),e[s]=cs(s,!1,!0),i[s]=cs(s,!0,!0)}),[n,t,e,i]}const[Nd,Fd,Od,Bd]=Ud();function Sl(n,e){const t=e?n?Bd:Od:n?Fd:Nd;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const zd={get:Sl(!1,!1)},Hd={get:Sl(!1,!0)},Vd={get:Sl(!0,!1)};const Sf=new WeakMap,yf=new WeakMap,Ef=new WeakMap,Gd=new WeakMap;function kd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wd(n){return n.__v_skip||!Object.isExtensible(n)?0:kd(hd(n))}function lo(n){return bi(n)?n:yl(n,!1,Ld,zd,Sf)}function Tf(n){return yl(n,!1,Id,Hd,yf)}function bf(n){return yl(n,!0,Dd,Vd,Ef)}function yl(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Wd(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Pr(n){return bi(n)?Pr(n.__v_raw):!!(n&&n.__v_isReactive)}function bi(n){return!!(n&&n.__v_isReadonly)}function nn(n){return!!(n&&n.__v_isShallow)}function El(n){return n?!!n.__v_raw:!1}function $e(n){const e=n&&n.__v_raw;return e?$e(e):n}function Xd(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&rf(n,"__v_skip",!0),n}const Rt=n=>st(n)?lo(n):n,Tl=n=>st(n)?bf(n):n;function Et(n){return n?n.__v_isRef===!0:!1}function ga(n){return Af(n,!1)}function an(n){return Af(n,!0)}function Af(n,e){return Et(n)?n:new qd(n,e)}class qd{constructor(e,t){this.dep=new vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:$e(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||nn(e)||bi(e);e=i?e:$e(e),ti(e,t)&&(this._rawValue=e,this._value=i?e:Rt(e),this.dep.trigger())}}function Jn(n){return Et(n)?n.value:n}const Yd={get:(n,e,t)=>e==="__v_raw"?n:Jn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function wf(n){return Pr(n)?n:new Proxy(n,Yd)}class $d{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zr-1,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&nt!==this)return hf(this),!0}get value(){const e=this.dep.track();return mf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Kd(n,e,t=!1){let i,r;return Ve(n)?i=n:(i=n.get,r=n.set),new $d(i,r,t)}const us={},$s=new WeakMap;let _i;function jd(n,e=!1,t=_i){if(t){let i=$s.get(t);i||$s.set(t,i=[]),i.push(n)}}function Zd(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:nn(S)||r===!1||r===0?jn(S,1):jn(S);let u,f,h,d,y=!1,M=!1;if(Et(n)?(f=()=>n.value,y=nn(n)):Pr(n)?(f=()=>c(n),y=!0):He(n)?(M=!0,y=n.some(S=>Pr(S)||nn(S)),f=()=>n.map(S=>{if(Et(S))return S.value;if(Pr(S))return c(S);if(Ve(S))return l?l(S,2):S()})):Ve(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){si();try{h()}finally{oi()}}const S=_i;_i=u;try{return l?l(n,3,[d]):n(d)}finally{_i=S}}:f=mn,e&&r){const S=f,I=r===!0?1/0:r;f=()=>jn(S(),I)}const m=Ed(),p=()=>{u.stop(),m&&fl(m.effects,u)};if(s&&e){const S=e;e=(...I)=>{S(...I),p()}}let v=M?new Array(n.length).fill(us):us;const g=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const I=u.run();if(r||y||(M?I.some((A,R)=>ti(A,v[R])):ti(I,v))){h&&h();const A=_i;_i=u;try{const R=[I,v===us?void 0:M&&v[0]===us?[]:v,d];l?l(e,3,R):e(...R),v=I}finally{_i=A}}}else u.run()};return o&&o(g),u=new uf(f),u.scheduler=a?()=>a(g,!1):g,d=S=>jd(S,!1,u),h=u.onStop=()=>{const S=$s.get(u);if(S){if(l)l(S,4);else for(const I of S)I();$s.delete(u)}},e?i?g(!0):v=u.run():a?a(g.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function jn(n,e=1/0,t){if(e<=0||!st(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Et(n))jn(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)jn(n[i],e,t);else if(Ju(n)||er(n))n.forEach(i=>{jn(i,e,t)});else if(tf(n)){for(const i in n)jn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&jn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,e,t,i){try{return i?n(...i):n()}catch(r){co(r,e,t)}}function _n(n,e,t,i){if(Ve(n)){const r=jr(n,e,t,i);return r&&Qu(r)&&r.catch(s=>{co(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(_n(n[s],e,t,i));return r}}function co(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){si(),jr(s,null,10,[n,l,c]),oi();return}}Jd(n,t,r,i,a)}function Jd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}let Vr=!1,_a=!1;const Ct=[];let ln=0;const tr=[];let qn=null,Ki=0;const Rf=Promise.resolve();let bl=null;function Cf(n){const e=bl||Rf;return n?e.then(this?n.bind(this):n):e}function Qd(n){let e=Vr?ln+1:0,t=Ct.length;for(;e<t;){const i=e+t>>>1,r=Ct[i],s=Gr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Al(n){if(!(n.flags&1)){const e=Gr(n),t=Ct[Ct.length-1];!t||!(n.flags&2)&&e>=Gr(t)?Ct.push(n):Ct.splice(Qd(e),0,n),n.flags|=1,Pf()}}function Pf(){!Vr&&!_a&&(_a=!0,bl=Rf.then(Df))}function ep(n){He(n)?tr.push(...n):qn&&n.id===-1?qn.splice(Ki+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),Pf()}function cc(n,e,t=Vr?ln+1:0){for(;t<Ct.length;t++){const i=Ct[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ct.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Lf(n){if(tr.length){const e=[...new Set(tr)].sort((t,i)=>Gr(t)-Gr(i));if(tr.length=0,qn){qn.push(...e);return}for(qn=e,Ki=0;Ki<qn.length;Ki++){const t=qn[Ki];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}qn=null,Ki=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Df(n){_a=!1,Vr=!0;try{for(ln=0;ln<Ct.length;ln++){const e=Ct[ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ln<Ct.length;ln++){const e=Ct[ln];e&&(e.flags&=-2)}ln=0,Ct.length=0,Lf(),Vr=!1,bl=null,(Ct.length||tr.length)&&Df()}}let pn=null,If=null;function Ks(n){const e=pn;return pn=n,If=n&&n.type.__scopeId||null,e}function Uf(n,e=pn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_c(-1);const s=Ks(e);let a;try{a=n(...r)}finally{Ks(s),i._d&&_c(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(si(),_n(l,t,8,[n.el,o,n,e]),oi())}}const tp=Symbol("_vte"),np=n=>n.__isTeleport;function wl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,wl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rl(n,e){return Ve(n)?xt({name:n.name},e,{setup:n}):n}function Nf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function va(n,e,t,i,r=!1){if(He(n)){n.forEach((y,M)=>va(y,e&&(He(e)?e[M]:e),t,i,r));return}if(Lr(i)&&!r)return;const s=i.shapeFlag&4?Dl(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=$e(f),d=f===it?()=>!1:y=>Qe(h,y);if(c!=null&&c!==l&&(ht(c)?(u[c]=null,d(c)&&(f[c]=null)):Et(c)&&(c.value=null)),Ve(l))jr(l,o,12,[a,u]);else{const y=ht(l),M=Et(l);if(y||M){const m=()=>{if(n.f){const p=y?d(l)?f[l]:u[l]:l.value;r?He(p)&&fl(p,s):He(p)?p.includes(s)||p.push(s):y?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else y?(u[l]=a,d(l)&&(f[l]=a)):M&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,zt(m,t)):m()}}}const Lr=n=>!!n.type.__asyncLoader,Ff=n=>n.type.__isKeepAlive;function ip(n,e){Of(n,"a",e)}function rp(n,e){Of(n,"da",e)}function Of(n,e,t=Lt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ff(r.parent.vnode)&&sp(i,e,t,r),r=r.parent}}function sp(n,e,t,i){const r=uo(e,n,i,!0);Hf(()=>{fl(i[e],r)},t)}function uo(n,e,t=Lt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{si();const o=Zr(t),l=_n(e,t,n,a);return o(),oi(),l});return i?r.unshift(s):r.push(s),s}}const Nn=n=>(e,t=Lt)=>{(!go||n==="sp")&&uo(n,(...i)=>e(...i),t)},op=Nn("bm"),Bf=Nn("m"),ap=Nn("bu"),lp=Nn("u"),zf=Nn("bum"),Hf=Nn("um"),cp=Nn("sp"),up=Nn("rtg"),fp=Nn("rtc");function hp(n,e=Lt){uo("ec",n,e)}const dp=Symbol.for("v-ndc"),xa=n=>n?oh(n)?Dl(n):xa(n.parent):null,Dr=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>xa(n.parent),$root:n=>xa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Cl(n),$forceUpdate:n=>n.f||(n.f=()=>{Al(n.update)}),$nextTick:n=>n.n||(n.n=Cf.bind(n.proxy)),$watch:n=>Up.bind(n)}),Io=(n,e)=>n!==it&&!n.__isScriptSetup&&Qe(n,e),pp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Io(i,e))return a[e]=1,i[e];if(r!==it&&Qe(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Qe(c,e))return a[e]=3,s[e];if(t!==it&&Qe(t,e))return a[e]=4,t[e];Ma&&(a[e]=0)}}const u=Dr[e];let f,h;if(u)return e==="$attrs"&&Tt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==it&&Qe(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Qe(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Io(r,e)?(r[e]=t,!0):i!==it&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==it&&Qe(n,a)||Io(e,a)||(o=s[0])&&Qe(o,a)||Qe(i,a)||Qe(Dr,a)||Qe(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function uc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ma=!0;function mp(n){const e=Cl(n),t=n.proxy,i=n.ctx;Ma=!1,e.beforeCreate&&fc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:y,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:g,unmounted:S,render:I,renderTracked:A,renderTriggered:R,errorCaptured:P,serverPrefetch:E,expose:x,inheritAttrs:L,components:F,directives:N,filters:z}=e;if(c&&gp(c,i,null),a)for(const J in a){const G=a[J];Ve(G)&&(i[J]=G.bind(t))}if(r){const J=r.call(t,t);st(J)&&(n.data=lo(J))}if(Ma=!0,s)for(const J in s){const G=s[J],ce=Ve(G)?G.bind(t,t):Ve(G.get)?G.get.bind(t,t):mn,ge=!Ve(G)&&Ve(G.set)?G.set.bind(t):mn,pe=Vt({get:ce,set:ge});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Ae=>pe.value=Ae})}if(o)for(const J in o)Vf(o[J],i,t,J);if(l){const J=Ve(l)?l.call(t):l;Reflect.ownKeys(J).forEach(G=>{Fs(G,J[G])})}u&&fc(u,n,"c");function k(J,G){He(G)?G.forEach(ce=>J(ce.bind(t))):G&&J(G.bind(t))}if(k(op,f),k(Bf,h),k(ap,d),k(lp,y),k(ip,M),k(rp,m),k(hp,P),k(fp,A),k(up,R),k(zf,v),k(Hf,S),k(cp,E),He(x))if(x.length){const J=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(J,G,{get:()=>t[G],set:ce=>t[G]=ce})})}else n.exposed||(n.exposed={});I&&n.render===mn&&(n.render=I),L!=null&&(n.inheritAttrs=L),F&&(n.components=F),N&&(n.directives=N),E&&Nf(n)}function gp(n,e,t=mn){He(n)&&(n=Sa(n));for(const i in n){const r=n[i];let s;st(r)?"default"in r?s=Dn(r.from||i,r.default,!0):s=Dn(r.from||i):s=Dn(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function fc(n,e,t){_n(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vf(n,e,t,i){let r=i.includes(".")?th(t,i):()=>t[i];if(ht(n)){const s=e[n];Ve(s)&&Os(r,s)}else if(Ve(n))Os(r,n.bind(t));else if(st(n))if(He(n))n.forEach(s=>Vf(s,e,t,i));else{const s=Ve(n.handler)?n.handler.bind(t):e[n.handler];Ve(s)&&Os(r,s,n)}}function Cl(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>js(l,c,a,!0)),js(l,e,a)),st(e)&&s.set(e,l),l}function js(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&js(n,s,t,!0),r&&r.forEach(a=>js(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=_p[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const _p={data:hc,props:dc,emits:dc,methods:Ar,computed:Ar,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Ar,directives:Ar,watch:xp,provide:hc,inject:vp};function hc(n,e){return e?n?function(){return xt(Ve(n)?n.call(this,this):n,Ve(e)?e.call(this,this):e)}:e:n}function vp(n,e){return Ar(Sa(n),Sa(e))}function Sa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ar(n,e){return n?xt(Object.create(null),n,e):e}function dc(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:xt(Object.create(null),uc(n),uc(e??{})):e}function xp(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const i in e)t[i]=bt(n[i],e[i]);return t}function Gf(){return{app:null,config:{isNativeTag:ud,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mp=0;function Sp(n,e){return function(i,r=null){Ve(i)||(i=xt({},i)),r!=null&&!st(r)&&(r=null);const s=Gf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Mp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:nm,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ve(u.install)?(a.add(u),u.install(c,...f)):Ve(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||yt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Dl(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(_n(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=nr;nr=c;try{return u()}finally{nr=f}}};return c}}let nr=null;function Fs(n,e){if(Lt){let t=Lt.provides;const i=Lt.parent&&Lt.parent.provides;i===t&&(t=Lt.provides=Object.create(i)),t[n]=e}}function Dn(n,e,t=!1){const i=Lt||pn;if(i||nr){const r=nr?nr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ve(e)?e.call(i&&i.proxy):e}}const kf={},Wf=()=>Object.create(kf),Xf=n=>Object.getPrototypeOf(n)===kf;function yp(n,e,t,i=!1){const r={},s=Wf();n.propsDefaults=Object.create(null),qf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Tf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Ep(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=$e(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(fo(n.emitsOptions,h))continue;const d=e[h];if(l)if(Qe(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const y=Ti(h);r[y]=ya(l,o,y,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{qf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Ri(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=ya(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Ln(n.attrs,"set","")}function qf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Rr(l))continue;const c=e[l];let u;r&&Qe(r,u=Ti(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:fo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=$e(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=ya(r,l,f,c[f],n,!Qe(c,f))}}return a}function ya(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Zr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ri(t))&&(i=!0))}return i}const Tp=new WeakMap;function Yf(n,e,t=!1){const i=t?Tp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ve(n)){const u=f=>{l=!0;const[h,d]=Yf(f,e,!0);xt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Qi),Qi;if(He(s))for(let u=0;u<s.length;u++){const f=Ti(s[u]);pc(f)&&(a[f]=it)}else if(s)for(const u in s){const f=Ti(u);if(pc(f)){const h=s[u],d=a[f]=He(h)||Ve(h)?{type:h}:xt({},h),y=d.type;let M=!1,m=!0;if(He(y))for(let p=0;p<y.length;++p){const v=y[p],g=Ve(v)&&v.name;if(g==="Boolean"){M=!0;break}else g==="String"&&(m=!1)}else M=Ve(y)&&y.name==="Boolean";d[0]=M,d[1]=m,(M||Qe(d,"default"))&&o.push(f)}}const c=[a,o];return st(n)&&i.set(n,c),c}function pc(n){return n[0]!=="$"&&!Rr(n)}const $f=n=>n[0]==="_"||n==="$stable",Pl=n=>He(n)?n.map(fn):[fn(n)],bp=(n,e,t)=>{if(e._n)return e;const i=Uf((...r)=>Pl(e(...r)),t);return i._c=!1,i},Kf=(n,e,t)=>{const i=n._ctx;for(const r in n){if($f(r))continue;const s=n[r];if(Ve(s))e[r]=bp(r,s,i);else if(s!=null){const a=Pl(s);e[r]=()=>a}}},jf=(n,e)=>{const t=Pl(e);n.slots.default=()=>t},Zf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Ap=(n,e,t)=>{const i=n.slots=Wf();if(n.vnode.shapeFlag&32){const r=e._;r?(Zf(i,e,t),t&&rf(i,"_",r,!0)):Kf(e,i)}else e&&jf(n,e)},wp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Zf(r,e,t):(s=!e.$stable,Kf(e,r)),a=e}else e&&(jf(n,e),a={default:1});if(s)for(const o in r)!$f(o)&&a[o]==null&&delete r[o]},zt=Vp;function Rp(n){return Cp(n)}function Cp(n,e){const t=sf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=mn,insertStaticContent:y}=n,M=(w,C,V,q=null,te=null,ee=null,se=void 0,b=null,_=!!C.dynamicChildren)=>{if(w===C)return;w&&!xr(w,C)&&(q=O(w),Ae(w,te,ee,!0),w=null),C.patchFlag===-2&&(_=!1,C.dynamicChildren=null);const{type:U,ref:K,shapeFlag:W}=C;switch(U){case ho:m(w,C,V,q);break;case kr:p(w,C,V,q);break;case Bs:w==null&&v(C,V,q,se);break;case un:F(w,C,V,q,te,ee,se,b,_);break;default:W&1?I(w,C,V,q,te,ee,se,b,_):W&6?N(w,C,V,q,te,ee,se,b,_):(W&64||W&128)&&U.process(w,C,V,q,te,ee,se,b,_,fe)}K!=null&&te&&va(K,w&&w.ref,ee,C||w,!C)},m=(w,C,V,q)=>{if(w==null)i(C.el=o(C.children),V,q);else{const te=C.el=w.el;C.children!==w.children&&c(te,C.children)}},p=(w,C,V,q)=>{w==null?i(C.el=l(C.children||""),V,q):C.el=w.el},v=(w,C,V,q)=>{[w.el,w.anchor]=y(w.children,C,V,q,w.el,w.anchor)},g=({el:w,anchor:C},V,q)=>{let te;for(;w&&w!==C;)te=h(w),i(w,V,q),w=te;i(C,V,q)},S=({el:w,anchor:C})=>{let V;for(;w&&w!==C;)V=h(w),r(w),w=V;r(C)},I=(w,C,V,q,te,ee,se,b,_)=>{C.type==="svg"?se="svg":C.type==="math"&&(se="mathml"),w==null?A(C,V,q,te,ee,se,b,_):E(w,C,te,ee,se,b,_)},A=(w,C,V,q,te,ee,se,b)=>{let _,U;const{props:K,shapeFlag:W,transition:Y,dirs:de}=w;if(_=w.el=a(w.type,ee,K&&K.is,K),W&8?u(_,w.children):W&16&&P(w.children,_,null,q,te,Uo(w,ee),se,b),de&&ci(w,null,q,"created"),R(_,w,w.scopeId,se,q),K){for(const me in K)me!=="value"&&!Rr(me)&&s(_,me,null,K[me],ee,q);"value"in K&&s(_,"value",null,K.value,ee),(U=K.onVnodeBeforeMount)&&on(U,q,w)}de&&ci(w,null,q,"beforeMount");const ae=Pp(te,Y);ae&&Y.beforeEnter(_),i(_,C,V),((U=K&&K.onVnodeMounted)||ae||de)&&zt(()=>{U&&on(U,q,w),ae&&Y.enter(_),de&&ci(w,null,q,"mounted")},te)},R=(w,C,V,q,te)=>{if(V&&d(w,V),q)for(let ee=0;ee<q.length;ee++)d(w,q[ee]);if(te){let ee=te.subTree;if(C===ee||ih(ee.type)&&(ee.ssContent===C||ee.ssFallback===C)){const se=te.vnode;R(w,se,se.scopeId,se.slotScopeIds,te.parent)}}},P=(w,C,V,q,te,ee,se,b,_=0)=>{for(let U=_;U<w.length;U++){const K=w[U]=b?Yn(w[U]):fn(w[U]);M(null,K,C,V,q,te,ee,se,b)}},E=(w,C,V,q,te,ee,se)=>{const b=C.el=w.el;let{patchFlag:_,dynamicChildren:U,dirs:K}=C;_|=w.patchFlag&16;const W=w.props||it,Y=C.props||it;let de;if(V&&ui(V,!1),(de=Y.onVnodeBeforeUpdate)&&on(de,V,C,w),K&&ci(C,w,V,"beforeUpdate"),V&&ui(V,!0),(W.innerHTML&&Y.innerHTML==null||W.textContent&&Y.textContent==null)&&u(b,""),U?x(w.dynamicChildren,U,b,V,q,Uo(C,te),ee):se||G(w,C,b,null,V,q,Uo(C,te),ee,!1),_>0){if(_&16)L(b,W,Y,V,te);else if(_&2&&W.class!==Y.class&&s(b,"class",null,Y.class,te),_&4&&s(b,"style",W.style,Y.style,te),_&8){const ae=C.dynamicProps;for(let me=0;me<ae.length;me++){const Ee=ae[me],he=W[Ee],Me=Y[Ee];(Me!==he||Ee==="value")&&s(b,Ee,he,Me,te,V)}}_&1&&w.children!==C.children&&u(b,C.children)}else!se&&U==null&&L(b,W,Y,V,te);((de=Y.onVnodeUpdated)||K)&&zt(()=>{de&&on(de,V,C,w),K&&ci(C,w,V,"updated")},q)},x=(w,C,V,q,te,ee,se)=>{for(let b=0;b<C.length;b++){const _=w[b],U=C[b],K=_.el&&(_.type===un||!xr(_,U)||_.shapeFlag&70)?f(_.el):V;M(_,U,K,null,q,te,ee,se,!0)}},L=(w,C,V,q,te)=>{if(C!==V){if(C!==it)for(const ee in C)!Rr(ee)&&!(ee in V)&&s(w,ee,C[ee],null,te,q);for(const ee in V){if(Rr(ee))continue;const se=V[ee],b=C[ee];se!==b&&ee!=="value"&&s(w,ee,b,se,te,q)}"value"in V&&s(w,"value",C.value,V.value,te)}},F=(w,C,V,q,te,ee,se,b,_)=>{const U=C.el=w?w.el:o(""),K=C.anchor=w?w.anchor:o("");let{patchFlag:W,dynamicChildren:Y,slotScopeIds:de}=C;de&&(b=b?b.concat(de):de),w==null?(i(U,V,q),i(K,V,q),P(C.children||[],V,K,te,ee,se,b,_)):W>0&&W&64&&Y&&w.dynamicChildren?(x(w.dynamicChildren,Y,V,te,ee,se,b),(C.key!=null||te&&C===te.subTree)&&Jf(w,C,!0)):G(w,C,V,K,te,ee,se,b,_)},N=(w,C,V,q,te,ee,se,b,_)=>{C.slotScopeIds=b,w==null?C.shapeFlag&512?te.ctx.activate(C,V,q,se,_):z(C,V,q,te,ee,se,_):j(w,C,_)},z=(w,C,V,q,te,ee,se)=>{const b=w.component=jp(w,q,te);if(Ff(w)&&(b.ctx.renderer=fe),Zp(b,!1,se),b.asyncDep){if(te&&te.registerDep(b,k,se),!w.el){const _=b.subTree=yt(kr);p(null,_,C,V)}}else k(b,w,C,V,te,ee,se)},j=(w,C,V)=>{const q=C.component=w.component;if(zp(w,C,V))if(q.asyncDep&&!q.asyncResolved){J(q,C,V);return}else q.next=C,q.update();else C.el=w.el,q.vnode=C},k=(w,C,V,q,te,ee,se)=>{const b=()=>{if(w.isMounted){let{next:W,bu:Y,u:de,parent:ae,vnode:me}=w;{const Le=Qf(w);if(Le){W&&(W.el=me.el,J(w,W,se)),Le.asyncDep.then(()=>{w.isUnmounted||b()});return}}let Ee=W,he;ui(w,!1),W?(W.el=me.el,J(w,W,se)):W=me,Y&&Ro(Y),(he=W.props&&W.props.onVnodeBeforeUpdate)&&on(he,ae,W,me),ui(w,!0);const Me=No(w),Oe=w.subTree;w.subTree=Me,M(Oe,Me,f(Oe.el),O(Oe),w,te,ee),W.el=Me.el,Ee===null&&Hp(w,Me.el),de&&zt(de,te),(he=W.props&&W.props.onVnodeUpdated)&&zt(()=>on(he,ae,W,me),te)}else{let W;const{el:Y,props:de}=C,{bm:ae,m:me,parent:Ee,root:he,type:Me}=w,Oe=Lr(C);if(ui(w,!1),ae&&Ro(ae),!Oe&&(W=de&&de.onVnodeBeforeMount)&&on(W,Ee,C),ui(w,!0),Y&&D){const Le=()=>{w.subTree=No(w),D(Y,w.subTree,w,te,null)};Oe&&Me.__asyncHydrate?Me.__asyncHydrate(Y,w,Le):Le()}else{he.ce&&he.ce._injectChildStyle(Me);const Le=w.subTree=No(w);M(null,Le,V,q,w,te,ee),C.el=Le.el}if(me&&zt(me,te),!Oe&&(W=de&&de.onVnodeMounted)){const Le=C;zt(()=>on(W,Ee,Le),te)}(C.shapeFlag&256||Ee&&Lr(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&w.a&&zt(w.a,te),w.isMounted=!0,C=V=q=null}};w.scope.on();const _=w.effect=new uf(b);w.scope.off();const U=w.update=_.run.bind(_),K=w.job=_.runIfDirty.bind(_);K.i=w,K.id=w.uid,_.scheduler=()=>Al(K),ui(w,!0),U()},J=(w,C,V)=>{C.component=w;const q=w.vnode.props;w.vnode=C,w.next=null,Ep(w,C.props,q,V),wp(w,C.children,V),si(),cc(w),oi()},G=(w,C,V,q,te,ee,se,b,_=!1)=>{const U=w&&w.children,K=w?w.shapeFlag:0,W=C.children,{patchFlag:Y,shapeFlag:de}=C;if(Y>0){if(Y&128){ge(U,W,V,q,te,ee,se,b,_);return}else if(Y&256){ce(U,W,V,q,te,ee,se,b,_);return}}de&8?(K&16&&_e(U,te,ee),W!==U&&u(V,W)):K&16?de&16?ge(U,W,V,q,te,ee,se,b,_):_e(U,te,ee,!0):(K&8&&u(V,""),de&16&&P(W,V,q,te,ee,se,b,_))},ce=(w,C,V,q,te,ee,se,b,_)=>{w=w||Qi,C=C||Qi;const U=w.length,K=C.length,W=Math.min(U,K);let Y;for(Y=0;Y<W;Y++){const de=C[Y]=_?Yn(C[Y]):fn(C[Y]);M(w[Y],de,V,null,te,ee,se,b,_)}U>K?_e(w,te,ee,!0,!1,W):P(C,V,q,te,ee,se,b,_,W)},ge=(w,C,V,q,te,ee,se,b,_)=>{let U=0;const K=C.length;let W=w.length-1,Y=K-1;for(;U<=W&&U<=Y;){const de=w[U],ae=C[U]=_?Yn(C[U]):fn(C[U]);if(xr(de,ae))M(de,ae,V,null,te,ee,se,b,_);else break;U++}for(;U<=W&&U<=Y;){const de=w[W],ae=C[Y]=_?Yn(C[Y]):fn(C[Y]);if(xr(de,ae))M(de,ae,V,null,te,ee,se,b,_);else break;W--,Y--}if(U>W){if(U<=Y){const de=Y+1,ae=de<K?C[de].el:q;for(;U<=Y;)M(null,C[U]=_?Yn(C[U]):fn(C[U]),V,ae,te,ee,se,b,_),U++}}else if(U>Y)for(;U<=W;)Ae(w[U],te,ee,!0),U++;else{const de=U,ae=U,me=new Map;for(U=ae;U<=Y;U++){const Ue=C[U]=_?Yn(C[U]):fn(C[U]);Ue.key!=null&&me.set(Ue.key,U)}let Ee,he=0;const Me=Y-ae+1;let Oe=!1,Le=0;const Te=new Array(Me);for(U=0;U<Me;U++)Te[U]=0;for(U=de;U<=W;U++){const Ue=w[U];if(he>=Me){Ae(Ue,te,ee,!0);continue}let Xe;if(Ue.key!=null)Xe=me.get(Ue.key);else for(Ee=ae;Ee<=Y;Ee++)if(Te[Ee-ae]===0&&xr(Ue,C[Ee])){Xe=Ee;break}Xe===void 0?Ae(Ue,te,ee,!0):(Te[Xe-ae]=U+1,Xe>=Le?Le=Xe:Oe=!0,M(Ue,C[Xe],V,null,te,ee,se,b,_),he++)}const Be=Oe?Lp(Te):Qi;for(Ee=Be.length-1,U=Me-1;U>=0;U--){const Ue=ae+U,Xe=C[Ue],B=Ue+1<K?C[Ue+1].el:q;Te[U]===0?M(null,Xe,V,B,te,ee,se,b,_):Oe&&(Ee<0||U!==Be[Ee]?pe(Xe,V,B,2):Ee--)}}},pe=(w,C,V,q,te=null)=>{const{el:ee,type:se,transition:b,children:_,shapeFlag:U}=w;if(U&6){pe(w.component.subTree,C,V,q);return}if(U&128){w.suspense.move(C,V,q);return}if(U&64){se.move(w,C,V,fe);return}if(se===un){i(ee,C,V);for(let W=0;W<_.length;W++)pe(_[W],C,V,q);i(w.anchor,C,V);return}if(se===Bs){g(w,C,V);return}if(q!==2&&U&1&&b)if(q===0)b.beforeEnter(ee),i(ee,C,V),zt(()=>b.enter(ee),te);else{const{leave:W,delayLeave:Y,afterLeave:de}=b,ae=()=>i(ee,C,V),me=()=>{W(ee,()=>{ae(),de&&de()})};Y?Y(ee,ae,me):me()}else i(ee,C,V)},Ae=(w,C,V,q=!1,te=!1)=>{const{type:ee,props:se,ref:b,children:_,dynamicChildren:U,shapeFlag:K,patchFlag:W,dirs:Y,cacheIndex:de}=w;if(W===-2&&(te=!1),b!=null&&va(b,null,V,w,!0),de!=null&&(C.renderCache[de]=void 0),K&256){C.ctx.deactivate(w);return}const ae=K&1&&Y,me=!Lr(w);let Ee;if(me&&(Ee=se&&se.onVnodeBeforeUnmount)&&on(Ee,C,w),K&6)ue(w.component,V,q);else{if(K&128){w.suspense.unmount(V,q);return}ae&&ci(w,null,C,"beforeUnmount"),K&64?w.type.remove(w,C,V,fe,q):U&&!U.hasOnce&&(ee!==un||W>0&&W&64)?_e(U,C,V,!1,!0):(ee===un&&W&384||!te&&K&16)&&_e(_,C,V),q&&Re(w)}(me&&(Ee=se&&se.onVnodeUnmounted)||ae)&&zt(()=>{Ee&&on(Ee,C,w),ae&&ci(w,null,C,"unmounted")},V)},Re=w=>{const{type:C,el:V,anchor:q,transition:te}=w;if(C===un){ne(V,q);return}if(C===Bs){S(w);return}const ee=()=>{r(V),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(w.shapeFlag&1&&te&&!te.persisted){const{leave:se,delayLeave:b}=te,_=()=>se(V,ee);b?b(w.el,ee,_):_()}else ee()},ne=(w,C)=>{let V;for(;w!==C;)V=h(w),r(w),w=V;r(C)},ue=(w,C,V)=>{const{bum:q,scope:te,job:ee,subTree:se,um:b,m:_,a:U}=w;mc(_),mc(U),q&&Ro(q),te.stop(),ee&&(ee.flags|=8,Ae(se,w,C,V)),b&&zt(b,C),zt(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},_e=(w,C,V,q=!1,te=!1,ee=0)=>{for(let se=ee;se<w.length;se++)Ae(w[se],C,V,q,te)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=h(w.anchor||w.el),V=C&&C[tp];return V?h(V):C};let ie=!1;const re=(w,C,V)=>{w==null?C._vnode&&Ae(C._vnode,null,null,!0):M(C._vnode||null,w,C,null,null,null,V),C._vnode=w,ie||(ie=!0,cc(),Lf(),ie=!1)},fe={p:M,um:Ae,m:pe,r:Re,mt:z,mc:P,pc:G,pbc:x,n:O,o:n};let we,D;return{render:re,hydrate:we,createApp:Sp(re,we)}}function Uo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ui({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Pp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Jf(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Yn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Jf(a,o)),o.type===ho&&(o.el=a.el)}}function Lp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Qf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qf(e)}function mc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Dp=Symbol.for("v-scx"),Ip=()=>Dn(Dp);function Os(n,e,t){return eh(n,e,t)}function eh(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=xt({},t);let l;if(go)if(s==="sync"){const h=Ip();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||i)o.once=!0;else{const h=()=>{};return h.stop=mn,h.resume=mn,h.pause=mn,h}const c=Lt;o.call=(h,d,y)=>_n(h,c,d,y);let u=!1;s==="post"?o.scheduler=h=>{zt(h,c&&c.suspense)}:s!=="sync"&&(u=!0,o.scheduler=(h,d)=>{d?h():Al(h)}),o.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Zd(n,e,o);return l&&l.push(f),f}function Up(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?th(i,n):()=>i[n]:n.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,t=e);const a=Zr(this),o=eh(r,s.bind(i),t);return a(),o}function th(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Np=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ti(e)}Modifiers`]||n[`${Ri(e)}Modifiers`];function Fp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&Np(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ht(u)?u.trim():u)),a.number&&(r=t.map(md)));let o,l=i[o=wo(e)]||i[o=wo(Ti(e))];!l&&s&&(l=i[o=wo(Ri(e))]),l&&_n(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,_n(c,n,6,r)}}function nh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ve(n)){const l=c=>{const u=nh(c,e,!0);u&&(o=!0,xt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(st(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>a[l]=null):xt(a,s),st(n)&&i.set(n,a),a)}function fo(n,e){return!n||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Ri(e))||Qe(n,e))}function No(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:y,inheritAttrs:M}=n,m=Ks(n);let p,v;try{if(t.shapeFlag&4){const S=r||i,I=S;p=fn(c.call(I,S,u,f,d,h,y)),v=o}else{const S=e;p=fn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),v=e.props?o:Op(o)}}catch(S){Ir.length=0,co(S,n,1),p=yt(kr)}let g=p;if(v&&M!==!1){const S=Object.keys(v),{shapeFlag:I}=g;S.length&&I&7&&(s&&S.some(ul)&&(v=Bp(v,s)),g=ar(g,v,!1,!0))}return t.dirs&&(g=ar(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&wl(g,t.transition),p=g,Ks(m),p}const Op=n=>{let e;for(const t in n)(t==="class"||t==="style"||ro(t))&&((e||(e={}))[t]=n[t]);return e},Bp=(n,e)=>{const t={};for(const i in n)(!ul(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function zp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!fo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?gc(i,a,c):!0:!!a;return!1}function gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!fo(t,s))return!0}return!1}function Hp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ih=n=>n.__isSuspense;function Vp(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):ep(n)}const un=Symbol.for("v-fgt"),ho=Symbol.for("v-txt"),kr=Symbol.for("v-cmt"),Bs=Symbol.for("v-stc"),Ir=[];let Gt=null;function po(n=!1){Ir.push(Gt=n?null:[])}function Gp(){Ir.pop(),Gt=Ir[Ir.length-1]||null}let Wr=1;function _c(n){Wr+=n,n<0&&Gt&&(Gt.hasOnce=!0)}function kp(n){return n.dynamicChildren=Wr>0?Gt||Qi:null,Gp(),Wr>0&&Gt&&Gt.push(n),n}function mo(n,e,t,i,r,s){return kp(ir(n,e,t,i,r,s,!0))}function Ea(n){return n?n.__v_isVNode===!0:!1}function xr(n,e){return n.type===e.type&&n.key===e.key}const rh=({key:n})=>n??null,zs=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ht(n)||Et(n)||Ve(n)?{i:pn,r:n,k:e,f:!!t}:n:null);function ir(n,e=null,t=null,i=0,r=null,s=n===un?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rh(e),ref:e&&zs(e),scopeId:If,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return o?(Ll(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),Wr>0&&!a&&Gt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gt.push(l),l}const yt=Wp;function Wp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===dp)&&(n=kr),Ea(n)){const o=ar(n,e,!0);return t&&Ll(o,t),Wr>0&&!s&&Gt&&(o.shapeFlag&6?Gt[Gt.indexOf(n)]=o:Gt.push(o)),o.patchFlag=-2,o}if(tm(n)&&(n=n.__vccOpts),e){e=Xp(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=pl(o)),st(l)&&(El(l)&&!He(l)&&(l=xt({},l)),e.style=dl(l))}const a=ht(n)?1:ih(n)?128:np(n)?64:st(n)?4:Ve(n)?2:0;return ir(n,e,t,i,r,a,s,!0)}function Xp(n){return n?El(n)||Xf(n)?xt({},n):n:null}function ar(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Yp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rh(c),ref:e&&e.ref?t&&s?He(s)?s.concat(zs(e)):[s,zs(e)]:zs(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ar(n.ssContent),ssFallback:n.ssFallback&&ar(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&wl(u,l.clone(u)),u}function sh(n=" ",e=0){return yt(ho,null,n,e)}function qp(n,e){const t=yt(Bs,null,n);return t.staticCount=e,t}function fn(n){return n==null||typeof n=="boolean"?yt(kr):He(n)?yt(un,null,n.slice()):typeof n=="object"?Yn(n):yt(ho,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ar(n)}function Ll(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ll(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Xf(e)?e._ctx=pn:r===3&&pn&&(pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:pn},t=32):(e=String(e),i&64?(t=16,e=[sh(e)]):t=8);n.children=e,n.shapeFlag|=t}function Yp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pl([e.class,i.class]));else if(r==="style")e.style=dl([e.style,i.style]);else if(ro(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function on(n,e,t,i=null){_n(n,e,7,[t,i])}const $p=Gf();let Kp=0;function jp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||$p,s={uid:Kp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yf(i,r),emitsOptions:nh(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fp.bind(null,s),n.ce&&n.ce(s),s}let Lt=null,Zs,Ta;{const n=sf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Zs=e("__VUE_INSTANCE_SETTERS__",t=>Lt=t),Ta=e("__VUE_SSR_SETTERS__",t=>go=t)}const Zr=n=>{const e=Lt;return Zs(n),n.scope.on(),()=>{n.scope.off(),Zs(e)}},vc=()=>{Lt&&Lt.scope.off(),Zs(null)};function oh(n){return n.vnode.shapeFlag&4}let go=!1;function Zp(n,e=!1,t=!1){e&&Ta(e);const{props:i,children:r}=n.vnode,s=oh(n);yp(n,i,s,e),Ap(n,r,t);const a=s?Jp(n,e):void 0;return e&&Ta(!1),a}function Jp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pp);const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?em(n):null,s=Zr(n);si();const a=jr(i,n,0,[n.props,r]);if(oi(),s(),Qu(a)){if(Lr(n)||Nf(n),a.then(vc,vc),e)return a.then(o=>{xc(n,o,e)}).catch(o=>{co(o,n,0)});n.asyncDep=a}else xc(n,a,e)}else ah(n,e)}function xc(n,e,t){Ve(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=wf(e)),ah(n,t)}let Mc;function ah(n,e,t){const i=n.type;if(!n.render){if(!e&&Mc&&!i.render){const r=i.template||Cl(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=xt(xt({isCustomElement:s,delimiters:o},a),l);i.render=Mc(r,c)}}n.render=i.render||mn}{const r=Zr(n);si();try{mp(n)}finally{oi(),r()}}}const Qp={get(n,e){return Tt(n,"get",""),n[e]}};function em(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Qp),slots:n.slots,emit:n.emit,expose:e}}function Dl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wf(Xd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Dr)return Dr[t](n)},has(e,t){return t in e||t in Dr}})):n.proxy}function tm(n){return Ve(n)&&"__vccOpts"in n}const Vt=(n,e)=>Kd(n,e,go);function lh(n,e,t){const i=arguments.length;return i===2?st(e)&&!He(e)?Ea(e)?yt(n,null,[e]):yt(n,e):yt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ea(t)&&(t=[t]),yt(n,e,t))}const nm="3.5.8";/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ba;const Sc=typeof window<"u"&&window.trustedTypes;if(Sc)try{ba=Sc.createPolicy("vue",{createHTML:n=>n})}catch{}const ch=ba?n=>ba.createHTML(n):n=>n,im="http://www.w3.org/2000/svg",rm="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,yc=wn&&wn.createElement("template"),sm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?wn.createElementNS(im,n):e==="mathml"?wn.createElementNS(rm,n):t?wn.createElement(n,{is:t}):wn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>wn.createTextNode(n),createComment:n=>wn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>wn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{yc.innerHTML=ch(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=yc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},om=Symbol("_vtc");function am(n,e,t){const i=n[om];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ec=Symbol("_vod"),lm=Symbol("_vsh"),cm=Symbol(""),um=/(^|;)\s*display\s*:/;function fm(n,e,t){const i=n.style,r=ht(t);let s=!1;if(t&&!r){if(e)if(ht(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Hs(i,o,"")}else for(const a in e)t[a]==null&&Hs(i,a,"");for(const a in t)a==="display"&&(s=!0),Hs(i,a,t[a])}else if(r){if(e!==t){const a=i[cm];a&&(t+=";"+a),i.cssText=t,s=um.test(t)}}else e&&n.removeAttribute("style");Ec in n&&(n[Ec]=s?i.display:"",n[lm]&&(i.display="none"))}const Tc=/\s*!important$/;function Hs(n,e,t){if(He(t))t.forEach(i=>Hs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=hm(n,e);Tc.test(t)?n.setProperty(Ri(i),t.replace(Tc,""),"important"):n[i]=t}}const bc=["Webkit","Moz","ms"],Fo={};function hm(n,e){const t=Fo[e];if(t)return t;let i=Ti(e);if(i!=="filter"&&i in n)return Fo[e]=i;i=nf(i);for(let r=0;r<bc.length;r++){const s=bc[r]+i;if(s in n)return Fo[e]=s}return e}const Ac="http://www.w3.org/1999/xlink";function wc(n,e,t,i,r,s=Sd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ac,e.slice(6,e.length)):n.setAttributeNS(Ac,e,t):t==null||s&&!of(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ri(t)?String(t):t)}function dm(n,e,t,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ch(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,o=t==null?n.type==="checkbox"?"on":"":String(t);(a!==o||!("_value"in n))&&(n.value=o),t==null&&n.removeAttribute(e),n._value=t;return}let s=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=of(t):t==null&&a==="string"?(t="",s=!0):a==="number"&&(t=0,s=!0)}try{n[e]=t}catch{}s&&n.removeAttribute(e)}function pm(n,e,t,i){n.addEventListener(e,t,i)}function mm(n,e,t,i){n.removeEventListener(e,t,i)}const Rc=Symbol("_vei");function gm(n,e,t,i,r=null){const s=n[Rc]||(n[Rc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=_m(e);if(i){const c=s[e]=Mm(i,r);pm(n,o,c,l)}else a&&(mm(n,o,a,l),s[e]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function _m(n){let e;if(Cc.test(n)){e={};let i;for(;i=n.match(Cc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ri(n.slice(2)),e]}let Oo=0;const vm=Promise.resolve(),xm=()=>Oo||(vm.then(()=>Oo=0),Oo=Date.now());function Mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;_n(Sm(i,t.value),e,5,[i])};return t.value=n,t.attached=xm(),t}function Sm(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ym=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?am(n,i,a):e==="style"?fm(n,t,i):ro(e)?ul(e)||gm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Em(n,e,i,a))?(dm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wc(n,e,i,a,s,e!=="value")):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),wc(n,e,i,a))};function Em(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pc(e)&&Ve(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pc(e)&&ht(t)?!1:!!(e in n||n._isVueCE&&(/[A-Z]/.test(e)||!ht(t)))}const Tm=xt({patchProp:ym},sm);let Lc;function bm(){return Lc||(Lc=Rp(Tm))}const Am=(...n)=>{const e=bm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Rm(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,wm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function wm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Rm(n){return ht(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ji=typeof document<"u";function uh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&uh(n.default)}const tt=Object.assign;function Bo(n,e){const t={};for(const i in e){const r=e[i];t[i]=rn(r)?r.map(n):n(r)}return t}const Ur=()=>{},rn=Array.isArray,fh=/#/g,Pm=/&/g,Lm=/\//g,Dm=/=/g,Im=/\?/g,hh=/\+/g,Um=/%5B/g,Nm=/%5D/g,dh=/%5E/g,Fm=/%60/g,ph=/%7B/g,Om=/%7C/g,mh=/%7D/g,Bm=/%20/g;function Il(n){return encodeURI(""+n).replace(Om,"|").replace(Um,"[").replace(Nm,"]")}function zm(n){return Il(n).replace(ph,"{").replace(mh,"}").replace(dh,"^")}function Aa(n){return Il(n).replace(hh,"%2B").replace(Bm,"+").replace(fh,"%23").replace(Pm,"%26").replace(Fm,"`").replace(ph,"{").replace(mh,"}").replace(dh,"^")}function Hm(n){return Aa(n).replace(Dm,"%3D")}function Vm(n){return Il(n).replace(fh,"%23").replace(Im,"%3F")}function Gm(n){return n==null?"":Vm(n).replace(Lm,"%2F")}function Xr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const km=/\/$/,Wm=n=>n.replace(km,"");function zo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=$m(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Xr(a)}}function Xm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Dc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function qm(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&lr(e.matched[i],t.matched[r])&&gh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function lr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Ym(n[t],e[t]))return!1;return!0}function Ym(n,e){return rn(n)?Ic(n,e):rn(e)?Ic(e,n):n===e}function Ic(n,e){return rn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function $m(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qr;(function(n){n.pop="pop",n.push="push"})(qr||(qr={}));var Nr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Nr||(Nr={}));function Km(n){if(!n)if(ji){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Wm(n)}const jm=/^[^#]+#/;function Zm(n,e){return n.replace(jm,"#")+e}function Jm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const _o=()=>({left:window.scrollX,top:window.scrollY});function Qm(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Jm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uc(n,e){return(history.state?history.state.position-e:-1)+n}const wa=new Map;function eg(n,e){wa.set(n,e)}function tg(n){const e=wa.get(n);return wa.delete(n),e}let ng=()=>location.protocol+"//"+location.host;function _h(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Dc(l,"")}return Dc(t,n)+i+r}function ig(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=_h(n,location),y=t.value,M=e.value;let m=0;if(h){if(t.value=d,e.value=h,a&&a===y){a=null;return}m=M?h.position-M.position:0}else i(d);r.forEach(p=>{p(t.value,y,{delta:m,type:qr.pop,direction:m?m>0?Nr.forward:Nr.back:Nr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const y=r.indexOf(h);y>-1&&r.splice(y,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:_o()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Nc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?_o():null}}function rg(n){const{history:e,location:t}=window,i={value:_h(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ng()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){const u=tt({},e.state,Nc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:_o()});s(u.current,u,!0);const f=tt({},Nc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function sg(n){n=Km(n);const e=rg(n),t=ig(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:Zm.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function og(n){return typeof n=="string"||n&&typeof n=="object"}function vh(n){return typeof n=="string"||typeof n=="symbol"}const xh=Symbol("");var Fc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fc||(Fc={}));function cr(n,e){return tt(new Error,{type:n,[xh]:!0},e)}function Mn(n,e){return n instanceof Error&&xh in n&&(e==null||!!(n.type&e))}const Oc="[^/]+?",ag={sensitive:!1,strict:!1,start:!0,end:!0},lg=/[.+*?^${}()[\]/\\]/g;function cg(n,e){const t=tt({},ag,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(lg,"\\$&"),d+=40;else if(h.type===1){const{value:y,repeatable:M,optional:m,regexp:p}=h;s.push({name:y,repeatable:M,optional:m});const v=p||Oc;if(v!==Oc){d+=10;try{new RegExp(`(${v})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${v}): `+S.message)}}let g=M?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,d+=20,m&&(d+=-8),M&&(d+=-20),v===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",y=s[h-1];f[y.name]=d&&y.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:y,repeatable:M,optional:m}=d,p=y in c?c[y]:"";if(rn(p)&&!M)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const v=rn(p)?p.join("/"):p;if(!v)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=v}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function ug(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Mh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ug(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Bc(i))return 1;if(Bc(r))return-1}return r.length-i.length}function Bc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const fg={type:0,value:""},hg=/[a-zA-Z0-9_]/;function dg(n){if(!n)return[[]];if(n==="/")return[[fg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:hg.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function pg(n,e,t){const i=cg(dg(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function mg(n,e){const t=[],i=new Map;e=Gc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const y=!d,M=Hc(f);M.aliasOf=d&&d.record;const m=Gc(e,f),p=[M];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of S)p.push(Hc(tt({},M,{components:d?d.record.components:M.components,path:I,aliasOf:d?d.record:M})))}let v,g;for(const S of p){const{path:I}=S;if(h&&I[0]!=="/"){const A=h.record.path,R=A[A.length-1]==="/"?"":"/";S.path=h.record.path+(I&&R+I)}if(v=pg(S,h,m),d?d.alias.push(v):(g=g||v,g!==v&&g.alias.push(v),y&&f.name&&!Vc(v)&&a(f.name)),Sh(v)&&l(v),M.children){const A=M.children;for(let R=0;R<A.length;R++)s(A[R],v,d&&d.children[R])}d=d||v}return g?()=>{a(g)}:Ur}function a(f){if(vh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=vg(f,t);t.splice(h,0,f),f.record.name&&!Vc(f)&&i.set(f.record.name,f)}function c(f,h){let d,y={},M,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw cr(1,{location:f});m=d.record.name,y=tt(zc(h.params,d.keys.filter(g=>!g.optional).concat(d.parent?d.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&zc(f.params,d.keys.map(g=>g.name))),M=d.stringify(y)}else if(f.path!=null)M=f.path,d=t.find(g=>g.re.test(M)),d&&(y=d.parse(M),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(g=>g.re.test(h.path)),!d)throw cr(1,{location:f,currentLocation:h});m=d.record.name,y=tt({},h.params,f.params),M=d.stringify(y)}const p=[];let v=d;for(;v;)p.unshift(v.record),v=v.parent;return{name:m,path:M,params:y,matched:p,meta:_g(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function zc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Hc(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:gg(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function gg(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Vc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function _g(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function Gc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function vg(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Mh(n,e[s])<0?i=s:t=s+1}const r=xg(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function xg(n){let e=n;for(;e=e.parent;)if(Sh(e)&&Mh(n,e)===0)return e}function Sh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Mg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(hh," "),a=s.indexOf("="),o=Xr(a<0?s:s.slice(0,a)),l=a<0?null:Xr(s.slice(a+1));if(o in e){let c=e[o];rn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function kc(n){let e="";for(let t in n){const i=n[t];if(t=Hm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(rn(i)?i.map(s=>s&&Aa(s)):[i&&Aa(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Sg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=rn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const yg=Symbol(""),Wc=Symbol(""),Ul=Symbol(""),yh=Symbol(""),Ra=Symbol("");function Mr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function $n(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(cr(4,{from:t,to:e})):h instanceof Error?l(h):og(h)?l(cr(2,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Ho(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(uh(l)){const u=(l.__vccOpts||l)[e];u&&s.push($n(u,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Cm(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&$n(d,t,i,a,o,r)()}))}}return s}function Xc(n){const e=Dn(Ul),t=Dn(yh),i=Vt(()=>{const l=Jn(n.to);return e.resolve(l)}),r=Vt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(lr.bind(null,u));if(h>-1)return h;const d=qc(l[c-2]);return c>1&&qc(u)===d&&f[f.length-1].path!==d?f.findIndex(lr.bind(null,l[c-2])):h}),s=Vt(()=>r.value>-1&&bg(t.params,i.value.params)),a=Vt(()=>r.value>-1&&r.value===t.matched.length-1&&gh(t.params,i.value.params));function o(l={}){return Tg(l)?e[Jn(n.replace)?"replace":"push"](Jn(n.to)).catch(Ur):Promise.resolve()}return{route:i,href:Vt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Eg=Rl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xc,setup(n,{slots:e}){const t=lo(Xc(n)),{options:i}=Dn(Ul),r=Vt(()=>({[Yc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Yc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:lh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Eh=Eg;function Tg(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function bg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!rn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function qc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Yc=(n,e,t)=>n??e??t,Ag=Rl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Dn(Ra),r=Vt(()=>n.route||i.value),s=Dn(Wc,0),a=Vt(()=>{let c=Jn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Vt(()=>r.value.matched[a.value]);Fs(Wc,Vt(()=>a.value+1)),Fs(yg,o),Fs(Ra,r);const l=ga();return Os(()=>[l.value,o.value,n.name],([c,u,f],[h,d,y])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!lr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(M=>M(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return $c(t.default,{Component:h,route:c});const d=f.props[u],y=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=lh(h,tt({},y,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return $c(t.default,{Component:m,route:c})||m}}});function $c(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Th=Ag;function wg(n){const e=mg(n.routes,n),t=n.parseQuery||Mg,i=n.stringifyQuery||kc,r=n.history,s=Mr(),a=Mr(),o=Mr(),l=an(zn);let c=zn;ji&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Bo.bind(null,O=>""+O),f=Bo.bind(null,Gm),h=Bo.bind(null,Xr);function d(O,ie){let re,fe;return vh(O)?(re=e.getRecordMatcher(O),fe=ie):fe=O,e.addRoute(fe,re)}function y(O){const ie=e.getRecordMatcher(O);ie&&e.removeRoute(ie)}function M(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,ie){if(ie=tt({},ie||l.value),typeof O=="string"){const C=zo(t,O,ie.path),V=e.resolve({path:C.path},ie),q=r.createHref(C.fullPath);return tt(C,V,{params:h(V.params),hash:Xr(C.hash),redirectedFrom:void 0,href:q})}let re;if(O.path!=null)re=tt({},O,{path:zo(t,O.path,ie.path).path});else{const C=tt({},O.params);for(const V in C)C[V]==null&&delete C[V];re=tt({},O,{params:f(C)}),ie.params=f(ie.params)}const fe=e.resolve(re,ie),we=O.hash||"";fe.params=u(h(fe.params));const D=Xm(i,tt({},O,{hash:zm(we),path:fe.path})),w=r.createHref(D);return tt({fullPath:D,hash:we,query:i===kc?Sg(O.query):O.query||{}},fe,{redirectedFrom:void 0,href:w})}function v(O){return typeof O=="string"?zo(t,O,l.value.path):tt({},O)}function g(O,ie){if(c!==O)return cr(8,{from:ie,to:O})}function S(O){return R(O)}function I(O){return S(tt(v(O),{replace:!0}))}function A(O){const ie=O.matched[O.matched.length-1];if(ie&&ie.redirect){const{redirect:re}=ie;let fe=typeof re=="function"?re(O):re;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=v(fe):{path:fe},fe.params={}),tt({query:O.query,hash:O.hash,params:fe.path!=null?{}:O.params},fe)}}function R(O,ie){const re=c=p(O),fe=l.value,we=O.state,D=O.force,w=O.replace===!0,C=A(re);if(C)return R(tt(v(C),{state:typeof C=="object"?tt({},we,C.state):we,force:D,replace:w}),ie||re);const V=re;V.redirectedFrom=ie;let q;return!D&&qm(i,fe,re)&&(q=cr(16,{to:V,from:fe}),pe(fe,fe,!0,!1)),(q?Promise.resolve(q):x(V,fe)).catch(te=>Mn(te)?Mn(te,2)?te:ge(te):G(te,V,fe)).then(te=>{if(te){if(Mn(te,2))return R(tt({replace:w},v(te.to),{state:typeof te.to=="object"?tt({},we,te.to.state):we,force:D}),ie||V)}else te=F(V,fe,!0,w,we);return L(V,fe,te),te})}function P(O,ie){const re=g(O,ie);return re?Promise.reject(re):Promise.resolve()}function E(O){const ie=ne.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(O):O()}function x(O,ie){let re;const[fe,we,D]=Rg(O,ie);re=Ho(fe.reverse(),"beforeRouteLeave",O,ie);for(const C of fe)C.leaveGuards.forEach(V=>{re.push($n(V,O,ie))});const w=P.bind(null,O,ie);return re.push(w),_e(re).then(()=>{re=[];for(const C of s.list())re.push($n(C,O,ie));return re.push(w),_e(re)}).then(()=>{re=Ho(we,"beforeRouteUpdate",O,ie);for(const C of we)C.updateGuards.forEach(V=>{re.push($n(V,O,ie))});return re.push(w),_e(re)}).then(()=>{re=[];for(const C of D)if(C.beforeEnter)if(rn(C.beforeEnter))for(const V of C.beforeEnter)re.push($n(V,O,ie));else re.push($n(C.beforeEnter,O,ie));return re.push(w),_e(re)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),re=Ho(D,"beforeRouteEnter",O,ie,E),re.push(w),_e(re))).then(()=>{re=[];for(const C of a.list())re.push($n(C,O,ie));return re.push(w),_e(re)}).catch(C=>Mn(C,8)?C:Promise.reject(C))}function L(O,ie,re){o.list().forEach(fe=>E(()=>fe(O,ie,re)))}function F(O,ie,re,fe,we){const D=g(O,ie);if(D)return D;const w=ie===zn,C=ji?history.state:{};re&&(fe||w?r.replace(O.fullPath,tt({scroll:w&&C&&C.scroll},we)):r.push(O.fullPath,we)),l.value=O,pe(O,ie,re,w),ge()}let N;function z(){N||(N=r.listen((O,ie,re)=>{if(!ue.listening)return;const fe=p(O),we=A(fe);if(we){R(tt(we,{replace:!0}),fe).catch(Ur);return}c=fe;const D=l.value;ji&&eg(Uc(D.fullPath,re.delta),_o()),x(fe,D).catch(w=>Mn(w,12)?w:Mn(w,2)?(R(w.to,fe).then(C=>{Mn(C,20)&&!re.delta&&re.type===qr.pop&&r.go(-1,!1)}).catch(Ur),Promise.reject()):(re.delta&&r.go(-re.delta,!1),G(w,fe,D))).then(w=>{w=w||F(fe,D,!1),w&&(re.delta&&!Mn(w,8)?r.go(-re.delta,!1):re.type===qr.pop&&Mn(w,20)&&r.go(-1,!1)),L(fe,D,w)}).catch(Ur)}))}let j=Mr(),k=Mr(),J;function G(O,ie,re){ge(O);const fe=k.list();return fe.length?fe.forEach(we=>we(O,ie,re)):console.error(O),Promise.reject(O)}function ce(){return J&&l.value!==zn?Promise.resolve():new Promise((O,ie)=>{j.add([O,ie])})}function ge(O){return J||(J=!O,z(),j.list().forEach(([ie,re])=>O?re(O):ie()),j.reset()),O}function pe(O,ie,re,fe){const{scrollBehavior:we}=n;if(!ji||!we)return Promise.resolve();const D=!re&&tg(Uc(O.fullPath,0))||(fe||!re)&&history.state&&history.state.scroll||null;return Cf().then(()=>we(O,ie,D)).then(w=>w&&Qm(w)).catch(w=>G(w,O,ie))}const Ae=O=>r.go(O);let Re;const ne=new Set,ue={currentRoute:l,listening:!0,addRoute:d,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:M,resolve:p,options:n,push:S,replace:I,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:k.add,isReady:ce,install(O){const ie=this;O.component("RouterLink",Eh),O.component("RouterView",Th),O.config.globalProperties.$router=ie,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(l)}),ji&&!Re&&l.value===zn&&(Re=!0,S(r.location).catch(we=>{}));const re={};for(const we in zn)Object.defineProperty(re,we,{get:()=>l.value[we],enumerable:!0});O.provide(Ul,ie),O.provide(yh,Tf(re)),O.provide(Ra,l);const fe=O.unmount;ne.add(O),O.unmount=function(){ne.delete(O),ne.size<1&&(c=zn,N&&N(),N=null,l.value=zn,Re=!1,J=!1),fe()}}};function _e(O){return O.reduce((ie,re)=>ie.then(()=>E(re)),Promise.resolve())}return ue}function Rg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>lr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>lr(c,l))||r.push(l))}return[t,i,r]}const Cg={class:"wrapper"},Pg={__name:"App",setup(n){return(e,t)=>(po(),mo(un,null,[ir("header",null,[ir("div",Cg,[ir("nav",null,[yt(Jn(Eh),{to:"/"},{default:Uf(()=>t[0]||(t[0]=[sh("Home")])),_:1})])])]),yt(Jn(Th))],64))}},Lg="modulepreload",Dg=function(n){return"/portfolio/"+n},Kc={},Ig=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Dg(l),l in Kc)return;Kc[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Lg,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nl="168",Ug=0,jc=1,Ng=2,bh=1,Fg=2,An=3,ni=0,Ut=1,Rn=2,Qn=0,rr=1,Zc=2,Jc=3,Qc=4,Og=5,xi=100,Bg=101,zg=102,Hg=103,Vg=104,Gg=200,kg=201,Wg=202,Xg=203,Ca=204,Pa=205,qg=206,Yg=207,$g=208,Kg=209,jg=210,Zg=211,Jg=212,Qg=213,e_=214,t_=0,n_=1,i_=2,Js=3,r_=4,s_=5,o_=6,a_=7,Ah=0,l_=1,c_=2,ei=0,u_=1,f_=2,h_=3,d_=4,p_=5,m_=6,g_=7,wh=300,ur=301,fr=302,La=303,Da=304,vo=306,Ia=1e3,Si=1001,Ua=1002,Yt=1003,__=1004,fs=1005,Qt=1006,Vo=1007,yi=1008,In=1009,Rh=1010,Ch=1011,Yr=1012,Fl=1013,Ai=1014,Cn=1015,Jr=1016,Ol=1017,Bl=1018,hr=1020,Ph=35902,Lh=1021,Dh=1022,en=1023,Ih=1024,Uh=1025,sr=1026,dr=1027,Nh=1028,zl=1029,Fh=1030,Hl=1031,Vl=1033,Vs=33776,Gs=33777,ks=33778,Ws=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,Ha=37492,Va=37496,Ga=37808,ka=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,Ka=37815,ja=37816,Za=37817,Ja=37818,Qa=37819,el=37820,tl=37821,Xs=36492,nl=36494,il=36495,Oh=36283,rl=36284,sl=36285,ol=36286,v_=3200,x_=3201,Bh=0,M_=1,Zn="",cn="srgb",ai="srgb-linear",Gl="display-p3",xo="display-p3-linear",Qs="linear",rt="srgb",eo="rec709",to="p3",Di=7680,eu=519,S_=512,y_=513,E_=514,zh=515,T_=516,b_=517,A_=518,w_=519,tu=35044,hs=35048,nu="300 es",Pn=2e3,no=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const Fr=Math.PI/180,$r=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Pt(n,e,t){return Math.max(e,Math.min(t,n))}function kl(n,e){return(n%e+e)%e}function R_(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function C_(n,e,t){return n!==e?(t-n)/(e-n):0}function Or(n,e,t){return(1-t)*n+t*e}function P_(n,e,t,i){return Or(n,e,1-Math.exp(-t*i))}function L_(n,e=1){return e-Math.abs(kl(n,e*2)-e)}function D_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function I_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function U_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function N_(n,e){return n+Math.random()*(e-n)}function F_(n){return n*(.5-Math.random())}function O_(n){n!==void 0&&(iu=n);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B_(n){return n*Fr}function z_(n){return n*$r}function H_(n){return(n&n-1)===0&&n!==0}function V_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function G_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function k_(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),y=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*y,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*y,o*c);break;case"ZYZ":n.set(l*y,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function At(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const W_={DEG2RAD:Fr,RAD2DEG:$r,generateUUID:gr,clamp:Pt,euclideanModulo:kl,mapLinear:R_,inverseLerp:C_,lerp:Or,damp:P_,pingpong:L_,smoothstep:D_,smootherstep:I_,randInt:U_,randFloat:N_,randFloatSpread:F_,seededRandom:O_,degToRad:B_,radToDeg:z_,isPowerOfTwo:H_,ceilPowerOfTwo:V_,floorPowerOfTwo:G_,setQuaternionFromProperEuler:k_,normalize:At,denormalize:Zi};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],y=i[8],M=r[0],m=r[3],p=r[6],v=r[1],g=r[4],S=r[7],I=r[2],A=r[5],R=r[8];return s[0]=a*M+o*v+l*I,s[3]=a*m+o*g+l*A,s[6]=a*p+o*S+l*R,s[1]=c*M+u*v+f*I,s[4]=c*m+u*g+f*A,s[7]=c*p+u*S+f*R,s[2]=h*M+d*v+y*I,s[5]=h*m+d*g+y*A,s[8]=h*p+d*S+y*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,y=t*f+i*h+r*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/y;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new ke;function Hh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Kr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function X_(){const n=Kr("canvas");return n.style.display="block",n}const ru={};function Br(n){n in ru||(ru[n]=!0,console.warn(n))}function q_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const su=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Sr={[ai]:{transfer:Qs,primaries:eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[cn]:{transfer:rt,primaries:eo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[xo]:{transfer:Qs,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(ou),fromReference:n=>n.applyMatrix3(su)},[Gl]:{transfer:rt,primaries:to,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(ou),fromReference:n=>n.applyMatrix3(su).convertLinearToSRGB()}},Y_=new Set([ai,xo]),et={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Y_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Sr[e].toReference,r=Sr[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Sr[n].primaries},getTransfer:function(n){return n===Zn?Qs:Sr[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Sr[e].luminanceCoefficients)}};function or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class $_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=Kr("canvas")),Ii.width=e.width,Ii.height=e.height;const i=Ii.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=or(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(or(t[i]/255)*255):t[i]=or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Wo(r[a].image)):s.push(Wo(r[a]))}else s=Wo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j_=0;class Dt extends mr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Si,r=Si,s=Qt,a=yi,o=en,l=In,c=Dt.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=gr(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=wh;Dt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],y=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(y+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,S=(d+1)/2,I=(p+1)/2,A=(u+h)/4,R=(f+M)/4,P=(y+m)/4;return g>S&&g>I?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=R/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-y)*(m-y)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(f-M)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Z_ extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Z_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gh extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],y=s[a+2],M=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=y,e[t+3]=M;return}if(f!==M||l!==h||c!==d||u!==y){let m=1-o;const p=l*h+c*d+u*y+f*M,v=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const I=Math.sqrt(g),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const S=o*v;if(l=l*m+h*S,c=c*m+d*S,u=u*m+y*S,f=f*m+M*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],y=s[a+3];return e[t]=o*y+u*f+l*d-c*h,e[t+1]=l*y+u*h+c*f-o*d,e[t+2]=c*y+u*d+o*h-l*f,e[t+3]=u*y-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*y,this._y=c*d*f-h*u*y,this._z=c*u*y+h*d*f,this._w=c*u*f-h*d*y;break;case"YXZ":this._x=h*u*f+c*d*y,this._y=c*d*f-h*u*y,this._z=c*u*y-h*d*f,this._w=c*u*f+h*d*y;break;case"ZXY":this._x=h*u*f-c*d*y,this._y=c*d*f+h*u*y,this._z=c*u*y+h*d*f,this._w=c*u*f-h*d*y;break;case"ZYX":this._x=h*u*f-c*d*y,this._y=c*d*f+h*u*y,this._z=c*u*y-h*d*f,this._w=c*u*f+h*d*y;break;case"YZX":this._x=h*u*f+c*d*y,this._y=c*d*f+h*u*y,this._z=c*u*y-h*d*f,this._w=c*u*f-h*d*y;break;case"XZY":this._x=h*u*f-c*d*y,this._y=c*d*f-h*u*y,this._z=c*u*y+h*d*f,this._w=c*u*f+h*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new $,au=new Qr;class es{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(s,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ds.copy(i.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ps.subVectors(this.max,yr),Ui.subVectors(e.a,yr),Ni.subVectors(e.b,yr),Fi.subVectors(e.c,yr),Hn.subVectors(Ni,Ui),Vn.subVectors(Fi,Ni),fi.subVectors(Ui,Fi);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-fi.z,fi.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,fi.z,0,-fi.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-fi.y,fi.x,0];return!qo(t,Ui,Ni,Fi,ps)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Ui,Ni,Fi,ps))?!1:(ms.crossVectors(Hn,Vn),t=[ms.x,ms.y,ms.z],qo(t,Ui,Ni,Fi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new $,new $,new $,new $,new $,new $,new $,new $],jt=new $,ds=new es,Ui=new $,Ni=new $,Fi=new $,Hn=new $,Vn=new $,fi=new $,yr=new $,ps=new $,ms=new $,hi=new $;function qo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Q_=new es,Er=new $,Yo=new $;class Mo{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Er,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(Yo)),this.expandByPoint(Er.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new $,$o=new $,gs=new $,Gn=new $,Ko=new $,_s=new $,jo=new $;class kh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){$o.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gs),o=Gn.dot(this.direction),l=-Gn.dot(gs),c=Gn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,y;if(u>0)if(f=a*l-o,h=a*o-l,y=s*u,f>=0)if(h>=-y)if(h<=y){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy($o).addScaledVector(gs,h),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const i=yn.dot(this.direction),r=yn.dot(yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,r,s){Ko.subVectors(t,e),_s.subVectors(i,e),jo.crossVectors(Ko,_s);let a=this.direction.dot(jo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(_s.crossVectors(Gn,_s));if(l<0)return null;const c=o*this.direction.dot(Ko.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(jo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,y,M,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,y,M,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,y,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=y,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),s=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,y=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+y*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=y+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,y=c*u,M=c*f;t[0]=h+M*o,t[4]=y*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-y,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,y=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=y+d*o,t[1]=d+y*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,y=o*u,M=o*f;t[0]=l*u,t[4]=y*c-d,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=d*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,y=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=y*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+y,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,d=a*c,y=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-y,t[2]=y*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),kn.crossVectors(i,Ot),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),kn.crossVectors(i,Ot)),kn.normalize(),vs.crossVectors(Ot,kn),r[0]=kn.x,r[4]=vs.x,r[8]=Ot.x,r[1]=kn.y,r[5]=vs.y,r[9]=Ot.y,r[2]=kn.z,r[6]=vs.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],y=i[2],M=i[6],m=i[10],p=i[14],v=i[3],g=i[7],S=i[11],I=i[15],A=r[0],R=r[4],P=r[8],E=r[12],x=r[1],L=r[5],F=r[9],N=r[13],z=r[2],j=r[6],k=r[10],J=r[14],G=r[3],ce=r[7],ge=r[11],pe=r[15];return s[0]=a*A+o*x+l*z+c*G,s[4]=a*R+o*L+l*j+c*ce,s[8]=a*P+o*F+l*k+c*ge,s[12]=a*E+o*N+l*J+c*pe,s[1]=u*A+f*x+h*z+d*G,s[5]=u*R+f*L+h*j+d*ce,s[9]=u*P+f*F+h*k+d*ge,s[13]=u*E+f*N+h*J+d*pe,s[2]=y*A+M*x+m*z+p*G,s[6]=y*R+M*L+m*j+p*ce,s[10]=y*P+M*F+m*k+p*ge,s[14]=y*E+M*N+m*J+p*pe,s[3]=v*A+g*x+S*z+I*G,s[7]=v*R+g*L+S*j+I*ce,s[11]=v*P+g*F+S*k+I*ge,s[15]=v*E+g*N+S*J+I*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],y=e[3],M=e[7],m=e[11],p=e[15];return y*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+M*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],y=e[12],M=e[13],m=e[14],p=e[15],v=f*m*c-M*h*c+M*l*d-o*m*d-f*l*p+o*h*p,g=y*h*c-u*m*c-y*l*d+a*m*d+u*l*p-a*h*p,S=u*M*c-y*f*c+y*o*d-a*M*d-u*o*p+a*f*p,I=y*f*l-u*M*l-y*o*h+a*M*h+u*o*m-a*f*m,A=t*v+i*g+r*S+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(M*h*s-f*m*s-M*r*d+i*m*d+f*r*p-i*h*p)*R,e[2]=(o*m*s-M*l*s+M*r*c-i*m*c-o*r*p+i*l*p)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*R,e[4]=g*R,e[5]=(u*m*s-y*h*s+y*r*d-t*m*d-u*r*p+t*h*p)*R,e[6]=(y*l*s-a*m*s-y*r*c+t*m*c+a*r*p-t*l*p)*R,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*R,e[8]=S*R,e[9]=(y*f*s-u*M*s-y*i*d+t*M*d+u*i*p-t*f*p)*R,e[10]=(a*M*s-y*o*s+y*i*c-t*M*c-a*i*p+t*o*p)*R,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*R,e[12]=I*R,e[13]=(u*M*r-y*f*r+y*i*h-t*M*h-u*i*m+t*f*m)*R,e[14]=(y*o*r-a*M*r-y*i*l+t*M*l+a*i*m-t*o*m)*R,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,y=s*f,M=a*u,m=a*f,p=o*f,v=l*c,g=l*u,S=l*f,I=i.x,A=i.y,R=i.z;return r[0]=(1-(M+p))*I,r[1]=(d+S)*I,r[2]=(y-g)*I,r[3]=0,r[4]=(d-S)*A,r[5]=(1-(h+p))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(y+g)*R,r[9]=(m-v)*R,r[10]=(1-(h+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Oi.set(r[0],r[1],r[2]).length();const a=Oi.set(r[4],r[5],r[6]).length(),o=Oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zt.copy(this);const c=1/s,u=1/a,f=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=f,Zt.elements[9]*=f,Zt.elements[10]*=f,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Pn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,y;if(o===Pn)d=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===no)d=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,d=(i+r)*u;let y,M;if(o===Pn)y=(a+s)*f,M=-2*f;else if(o===no)y=s*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new $,Zt=new ft,e0=new $(0,0,0),t0=new $(1,1,1),kn=new $,vs=new $,Ot=new $,lu=new ft,cu=new Qr;class Un{constructor(e=0,t=0,i=0,r=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Wl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const uu=new $,Bi=new Qr,En=new ft,xs=new $,Tr=new $,i0=new $,r0=new Qr,fu=new $(1,0,0),hu=new $(0,1,0),du=new $(0,0,1),pu={type:"added"},s0={type:"removed"},zi={type:"childadded",child:null},Zo={type:"childremoved",child:null};class kt extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new $,t=new Un,i=new Qr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ke}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(fu,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(du,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fu,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xs.copy(e):xs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Tr,xs,this.up):En.lookAt(xs,Tr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(En),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),Zo.child=e,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new $(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new $,Tn=new $,Jo=new $,bn=new $,Hi=new $,Vi=new $,mu=new $,Qo=new $,ea=new $,ta=new $;class dn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jt.subVectors(e,t),r.cross(Jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jt.subVectors(r,t),Tn.subVectors(i,t),Jo.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(Tn),l=Jt.dot(Jo),c=Tn.dot(Tn),u=Tn.dot(Jo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,y=(a*u-o*l)*h;return s.set(1-d-y,y,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static isFrontFacing(e,t,i,r){return Jt.subVectors(i,t),Tn.subVectors(e,t),Jt.cross(Tn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),Jt.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Hi.subVectors(r,i),Vi.subVectors(s,i),Qo.subVectors(e,i);const l=Hi.dot(Qo),c=Vi.dot(Qo);if(l<=0&&c<=0)return t.copy(i);ea.subVectors(e,r);const u=Hi.dot(ea),f=Vi.dot(ea);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Hi,a);ta.subVectors(e,s);const d=Hi.dot(ta),y=Vi.dot(ta);if(y>=0&&d<=y)return t.copy(s);const M=d*c-l*y;if(M<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(i).addScaledVector(Vi,o);const m=u*y-d*f;if(m<=0&&f-u>=0&&d-y>=0)return mu.subVectors(s,r),o=(f-u)/(f-u+(d-y)),t.copy(r).addScaledVector(mu,o);const p=1/(m+M+h);return a=M*p,o=h*p,t.copy(i).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=kl(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Wh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return et.fromWorkingColorSpace(St.copy(this),e),Math.round(Pt(St.r*255,0,255))*65536+Math.round(Pt(St.g*255,0,255))*256+Math.round(Pt(St.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=cn){et.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Ms);const i=Or(Wn.h,Ms.h,t),r=Or(Wn.s,Ms.s,t),s=Or(Wn.l,Ms.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new qe;qe.NAMES=Wh;let o0=0;class ts extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=rr,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xl extends ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new $,Ss=new We;class It{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Br("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class Xh extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qh extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}}let a0=0;const Xt=new ft,ia=new kt,Gi=new $,Bt=new es,br=new es,mt=new $;class Fn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hh(e)?qh:Xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Bt.min,br.min),Bt.expandByPoint(mt),mt.addVectors(Bt.max,br.max),Bt.expandByPoint(mt)):(Bt.expandByPoint(br.min),Bt.expandByPoint(br.max))}Bt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),mt.add(Gi)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new $,l[P]=new $;const c=new $,u=new $,f=new $,h=new We,d=new We,y=new We,M=new $,m=new $;function p(P,E,x){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,E),y.fromBufferAttribute(s,x),u.sub(c),f.sub(c),d.sub(h),y.sub(h);const L=1/(d.x*y.y-y.x*d.y);isFinite(L)&&(M.copy(u).multiplyScalar(y.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-y.x).multiplyScalar(L),o[P].add(M),o[E].add(M),o[x].add(M),l[P].add(m),l[E].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const x=v[P],L=x.start,F=x.count;for(let N=L,z=L+F;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new $,S=new $,I=new $,A=new $;function R(P){I.fromBufferAttribute(r,P),A.copy(I);const E=o[P];g.copy(E),g.sub(I.multiplyScalar(I.dot(E))).normalize(),S.crossVectors(A,E);const L=S.dot(l[P])<0?-1:1;a.setXYZW(P,g.x,g.y,g.z,L)}for(let P=0,E=v.length;P<E;++P){const x=v[P],L=x.start,F=x.count;for(let N=L,z=L+F;N<z;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,d=e.count;h<d;h+=3){const y=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,y=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let p=0;p<u;p++)h[y++]=c[d++]}return new It(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new ft,di=new kh,ys=new Mo,_u=new $,ki=new $,Wi=new $,Xi=new $,ra=new $,Es=new $,Ts=new We,bs=new We,As=new We,vu=new $,xu=new $,Mu=new $,ws=new $,Rs=new $;class $t extends kt{constructor(e=new Fn,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ra.fromBufferAttribute(f,e),a?Es.addScaledVector(ra,u):Es.addScaledVector(ra.sub(t),u))}t.add(Es)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ys.containsPoint(di.origin)===!1&&(di.intersectSphere(ys,_u)===null||di.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(s).invert(),di.copy(e.ray).applyMatrix4(gu),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=h.length;y<M;y++){const m=h[y],p=a[m.materialIndex],v=Math.max(m.start,d.start),g=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,I=g;S<I;S+=3){const A=o.getX(S),R=o.getX(S+1),P=o.getX(S+2);r=Cs(this,p,e,i,c,u,f,A,R,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=y,p=M;m<p;m+=3){const v=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Cs(this,a,e,i,c,u,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,M=h.length;y<M;y++){const m=h[y],p=a[m.materialIndex],v=Math.max(m.start,d.start),g=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,I=g;S<I;S+=3){const A=S,R=S+1,P=S+2;r=Cs(this,p,e,i,c,u,f,A,R,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const y=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=y,p=M;m<p;m+=3){const v=m,g=m+1,S=m+2;r=Cs(this,a,e,i,c,u,f,v,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function l0(n,e,t,i,r,s,a,o){let l;if(e.side===Ut?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ni,o),l===null)return null;Rs.copy(o),Rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Rs);return c<t.near||c>t.far?null:{distance:c,point:Rs.clone(),object:n}}function Cs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,ki),n.getVertexPosition(l,Wi),n.getVertexPosition(c,Xi);const u=l0(n,e,t,i,ki,Wi,Xi,ws);if(u){r&&(Ts.fromBufferAttribute(r,o),bs.fromBufferAttribute(r,l),As.fromBufferAttribute(r,c),u.uv=dn.getInterpolation(ws,ki,Wi,Xi,Ts,bs,As,new We)),s&&(Ts.fromBufferAttribute(s,o),bs.fromBufferAttribute(s,l),As.fromBufferAttribute(s,c),u.uv1=dn.getInterpolation(ws,ki,Wi,Xi,Ts,bs,As,new We)),a&&(vu.fromBufferAttribute(a,o),xu.fromBufferAttribute(a,l),Mu.fromBufferAttribute(a,c),u.normal=dn.getInterpolation(ws,ki,Wi,Xi,vu,xu,Mu,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};dn.getNormal(ki,Wi,Xi,f.normal),u.face=f}return u}class ns extends Fn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;y("z","y","x",-1,-1,i,t,e,a,s,0),y("z","y","x",1,-1,i,t,-e,a,s,1),y("x","z","y",1,1,e,i,t,r,a,2),y("x","z","y",1,-1,e,i,-t,r,a,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function y(M,m,p,v,g,S,I,A,R,P,E){const x=S/R,L=I/P,F=S/2,N=I/2,z=A/2,j=R+1,k=P+1;let J=0,G=0;const ce=new $;for(let ge=0;ge<k;ge++){const pe=ge*L-N;for(let Ae=0;Ae<j;Ae++){const Re=Ae*x-F;ce[M]=Re*v,ce[m]=pe*g,ce[p]=z,c.push(ce.x,ce.y,ce.z),ce[M]=0,ce[m]=0,ce[p]=A>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Ae/R),f.push(1-ge/P),J+=1}}for(let ge=0;ge<P;ge++)for(let pe=0;pe<R;pe++){const Ae=h+pe+j*ge,Re=h+pe+j*(ge+1),ne=h+(pe+1)+j*(ge+1),ue=h+(pe+1)+j*ge;l.push(Ae,Re,ue),l.push(Re,ne,ue),G+=6}o.addGroup(d,G,E),d+=G,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function wt(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const r in i)e[r]=i[r]}return e}function c0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const u0={clone:pr,merge:wt};var f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=h0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=c0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $h extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new $,Su=new We,yu=new We;class qt extends $h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Su,yu),t.subVectors(yu,Su)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class d0 extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const s=new qt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const a=new qt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new qt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const l=new qt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new qt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Kh extends Dt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p0 extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ns(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:Qn});s.uniforms.tEquirect.value=t;const a=new $t(r,s),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Qt),new d0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const sa=new $,m0=new $,g0=new ke;class Kn{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sa.subVectors(i,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||g0.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Mo,Ps=new $;class jh{constructor(e=new Kn,t=new Kn,i=new Kn,r=new Kn,s=new Kn,a=new Kn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],y=r[9],M=r[10],m=r[11],p=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-d,S-p).normalize(),i[1].setComponents(l+s,h+c,m+d,S+p).normalize(),i[2].setComponents(l+a,h+u,m+y,S+v).normalize(),i[3].setComponents(l-a,h-u,m-y,S-v).normalize(),i[4].setComponents(l-o,h-f,m-M,S-g).normalize(),t===Pn)i[5].setComponents(l+o,h+f,m+M,S+g).normalize();else if(t===no)i[5].setComponents(o,f,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ps.x=r.normal.x>0?e.max.x:e.min.x,Ps.y=r.normal.y>0?e.max.y:e.min.y,Ps.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function _0(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(c,o),f.count===-1&&h.length===0&&n.bufferSubData(c,0,u),h.length!==0){for(let d=0,y=h.length;d<y;d++){const M=h[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class So extends Fn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],y=[],M=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let g=0;g<c;g++){const S=g*f-s;y.push(S,-v,0),M.push(0,0,1),m.push(g/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const g=v+c*p,S=v+c*(p+1),I=v+1+c*(p+1),A=v+1+c*p;d.push(g,S,A),d.push(S,I,A)}this.setIndex(d),this.setAttribute("position",new gn(y,3)),this.setAttribute("normal",new gn(M,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
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
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k0=`vec3 transformedNormal = objectNormal;
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
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
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
#endif`,t1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s1=`#ifdef USE_GRADIENTMAP
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
}`,o1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c1=`uniform bool receiveShadow;
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
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,f1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m1=`PhysicalMaterial material;
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
#endif`,g1=`struct PhysicalMaterial {
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
}`,_1=`
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
#endif`,v1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
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
#endif`,U1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H1=`#ifdef USE_NORMALMAP
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
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
}`,bv=`#define DISTANCE
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
}`,Av=`#define DISTANCE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Lv=`#include <common>
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
}`,Dv=`uniform vec3 diffuse;
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
}`,Iv=`#define LAMBERT
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
}`,Uv=`#define LAMBERT
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
}`,Nv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,zv=`#define PHONG
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
}`,Hv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
}`,kv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,$v=`uniform vec3 color;
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
}`,Kv=`uniform float rotation;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:y0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:b0,batching_pars_vertex:A0,batching_vertex:w0,begin_vertex:R0,beginnormal_vertex:C0,bsdfs:P0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:B0,color_pars_vertex:z0,color_vertex:H0,common:V0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:k0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:j0,envmap_common_pars_fragment:Z0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:u1,envmap_vertex:e1,fog_vertex:t1,fog_pars_vertex:n1,fog_fragment:i1,fog_pars_fragment:r1,gradientmap_pars_fragment:s1,lightmap_pars_fragment:o1,lights_lambert_fragment:a1,lights_lambert_pars_fragment:l1,lights_pars_begin:c1,lights_toon_fragment:f1,lights_toon_pars_fragment:h1,lights_phong_fragment:d1,lights_phong_pars_fragment:p1,lights_physical_fragment:m1,lights_physical_pars_fragment:g1,lights_fragment_begin:_1,lights_fragment_maps:v1,lights_fragment_end:x1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:S1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:E1,map_fragment:T1,map_pars_fragment:b1,map_particle_fragment:A1,map_particle_pars_fragment:w1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:C1,morphinstance_vertex:P1,morphcolor_vertex:L1,morphnormal_vertex:D1,morphtarget_pars_vertex:I1,morphtarget_vertex:U1,normal_fragment_begin:N1,normal_fragment_maps:F1,normal_pars_fragment:O1,normal_pars_vertex:B1,normal_vertex:z1,normalmap_pars_fragment:H1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:G1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:W1,opaque_fragment:X1,packing:q1,premultiplied_alpha_fragment:Y1,project_vertex:$1,dithering_fragment:K1,dithering_pars_fragment:j1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:J1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:ev,shadowmap_vertex:tv,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:rv,skinning_vertex:sv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:uv,transmission_fragment:fv,transmission_pars_fragment:hv,uv_pars_fragment:dv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:_v,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:Mv,cube_vert:Sv,cube_frag:yv,depth_vert:Ev,depth_frag:Tv,distanceRGBA_vert:bv,distanceRGBA_frag:Av,equirect_vert:wv,equirect_frag:Rv,linedashed_vert:Cv,linedashed_frag:Pv,meshbasic_vert:Lv,meshbasic_frag:Dv,meshlambert_vert:Iv,meshlambert_frag:Uv,meshmatcap_vert:Nv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:Hv,meshphysical_vert:Vv,meshphysical_frag:Gv,meshtoon_vert:kv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:$v,sprite_vert:Kv,sprite_frag:jv},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hn={basic:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:wt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:wt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:wt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:wt([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:wt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:wt([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:wt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:wt([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:wt([ye.common,ye.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:wt([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};hn.physical={uniforms:wt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ls={r:0,b:0,g:0},mi=new Un,Zv=new ft;function Jv(n,e,t,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function y(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?t:e).get(g)),g}function M(v){let g=!1;const S=y(v);S===null?p(o,l):S&&S.isColor&&(p(S,1),g=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,g){const S=y(g);S&&(S.isCubeTexture||S.mapping===vo)?(u===void 0&&(u=new $t(new ns(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:pr(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mi.copy(g.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zv.makeRotationFromEuler(mi)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,(f!==S||h!==S.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new $t(new So(2,2),new ii({name:"BackgroundMaterial",uniforms:pr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,g){v.getRGB(Ls,Yh(n)),i.buffers.color.setClear(Ls.r,Ls.g,Ls.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:M,addToRenderList:m}}function Qv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(x,L,F,N,z){let j=!1;const k=f(N,F,L);s!==k&&(s=k,c(s.object)),j=d(x,N,F,z),j&&y(x,N,F,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(x,L,F,N),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function f(x,L,F){const N=F.wireframe===!0;let z=i[x.id];z===void 0&&(z={},i[x.id]=z);let j=z[L.id];j===void 0&&(j={},z[L.id]=j);let k=j[N];return k===void 0&&(k=h(l()),j[N]=k),k}function h(x){const L=[],F=[],N=[];for(let z=0;z<t;z++)L[z]=0,F[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:N,object:x,attributes:{},index:null}}function d(x,L,F,N){const z=s.attributes,j=L.attributes;let k=0;const J=F.getAttributes();for(const G in J)if(J[G].location>=0){const ge=z[G];let pe=j[G];if(pe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),ge===void 0||ge.attribute!==pe||pe&&ge.data!==pe.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function y(x,L,F,N){const z={},j=L.attributes;let k=0;const J=F.getAttributes();for(const G in J)if(J[G].location>=0){let ge=j[G];ge===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));const pe={};pe.attribute=ge,ge&&ge.data&&(pe.data=ge.data),z[G]=pe,k++}s.attributes=z,s.attributesNum=k,s.index=N}function M(){const x=s.newAttributes;for(let L=0,F=x.length;L<F;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const F=s.newAttributes,N=s.enabledAttributes,z=s.attributeDivisors;F[x]=1,N[x]===0&&(n.enableVertexAttribArray(x),N[x]=1),z[x]!==L&&(n.vertexAttribDivisor(x,L),z[x]=L)}function v(){const x=s.newAttributes,L=s.enabledAttributes;for(let F=0,N=L.length;F<N;F++)L[F]!==x[F]&&(n.disableVertexAttribArray(F),L[F]=0)}function g(x,L,F,N,z,j,k){k===!0?n.vertexAttribIPointer(x,L,F,z,j):n.vertexAttribPointer(x,L,F,N,z,j)}function S(x,L,F,N){M();const z=N.attributes,j=F.getAttributes(),k=L.defaultAttributeValues;for(const J in j){const G=j[J];if(G.location>=0){let ce=z[J];if(ce===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const ge=ce.normalized,pe=ce.itemSize,Ae=e.get(ce);if(Ae===void 0)continue;const Re=Ae.buffer,ne=Ae.type,ue=Ae.bytesPerElement,_e=ne===n.INT||ne===n.UNSIGNED_INT||ce.gpuType===Fl;if(ce.isInterleavedBufferAttribute){const O=ce.data,ie=O.stride,re=ce.offset;if(O.isInstancedInterleavedBuffer){for(let fe=0;fe<G.locationSize;fe++)p(G.location+fe,O.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let fe=0;fe<G.locationSize;fe++)g(G.location+fe,pe/G.locationSize,ne,ge,ie*ue,(re+pe/G.locationSize*fe)*ue,_e)}else{if(ce.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)p(G.location+O,ce.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let O=0;O<G.locationSize;O++)m(G.location+O);n.bindBuffer(n.ARRAY_BUFFER,Re);for(let O=0;O<G.locationSize;O++)g(G.location+O,pe/G.locationSize,ne,ge,pe*ue,pe/G.locationSize*O*ue,_e)}}else if(k!==void 0){const ge=k[J];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(G.location,ge);break;case 3:n.vertexAttrib3fv(G.location,ge);break;case 4:n.vertexAttrib4fv(G.location,ge);break;default:n.vertexAttrib1fv(G.location,ge)}}}}v()}function I(){P();for(const x in i){const L=i[x];for(const F in L){const N=L[F];for(const z in N)u(N[z].object),delete N[z];delete L[F]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const F in L){const N=L[F];for(const z in N)u(N[z].object),delete N[z];delete L[F]}delete i[x.id]}function R(x){for(const L in i){const F=i[L];if(F[x.id]===void 0)continue;const N=F[x.id];for(const z in N)u(N[z].object),delete N[z];delete F[x.id]}}function P(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:m,disableUnusedAttributes:v}}function ex(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let y=0;y<f;y++)d+=u[y];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<c.length;y++)a(c[y],u[y],h[y]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let y=0;for(let M=0;M<f;M++)y+=u[M];for(let M=0;M<h.length;M++)t.update(y,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function tx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==en&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!R)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=d>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:y,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:S,maxSamples:I}}function nx(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Kn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const y=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||y===null||y.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let S=p.clippingState||null;l.value=S,S=u(y,h,g,d);for(let I=0;I!==g;++I)S[I]=t[I];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,y){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,y!==!0||m===null){const p=d+M*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,S=d;g!==M;++g,S+=4)a.copy(f[g]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function ix(n){let e=new WeakMap;function t(a,o){return o===La?a.mapping=ur:o===Da&&(a.mapping=fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===La||o===Da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new p0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rx extends $h{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Eu=[.125,.215,.35,.446,.526,.582],Mi=20,oa=new rx,Tu=new qe;let aa=null,la=0,ca=0,ua=!1;const vi=(1+Math.sqrt(5))/2,$i=1/vi,bu=[new $(-vi,$i,0),new $(vi,$i,0),new $(-$i,0,vi),new $($i,0,vi),new $(0,vi,-$i),new $(0,vi,$i),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ua,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Jr,format:en,colorSpace:ai,depthBuffer:!1},r=wu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(s)),this._blurMaterial=ox(s,e,t)}return r}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new qt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Tu),u.toneMapping=ei,u.autoClear=!1;const d=new Xl({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),y=new $t(new ns,d);let M=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,M=!0):(d.color.copy(Tu),M=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const g=this._cubeSize;Ds(r,v*g,p>2?g:0,g,g),u.setRenderTarget(r),M&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ur||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new $t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=bu[(r-s-1)%bu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new $t(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),M=s/y,m=isFinite(s)?1+Math.floor(u*M):Mi;m>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let v=0;for(let R=0;R<Mi;++R){const P=R/M,E=Math.exp(-P*P/2);p.push(E),R===0?v+=E:R<m&&(v+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=y,h.mipInt.value=g-i;const S=this._sizeLods[r],I=3*S*(r>g-Ji?r-g+Ji:0),A=4*(this._cubeSize-S);Ds(t,I,A,3*S,2*S),l.setRenderTarget(t),l.render(f,oa)}}function sx(n){const e=[],t=[],i=[];let r=n;const s=n-Ji+1+Eu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ji?l=Eu[a-n+Ji-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,y=6,M=3,m=2,p=1,v=new Float32Array(M*y*d),g=new Float32Array(m*y*d),S=new Float32Array(p*y*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,P=A>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(E,M*y*A),g.set(h,m*y*A);const x=[A,A,A,A,A,A];S.set(x,p*y*A)}const I=new Fn;I.setAttribute("position",new It(v,M)),I.setAttribute("uv",new It(g,m)),I.setAttribute("faceIndex",new It(S,p)),e.push(I),r>Ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wu(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ox(n,e,t){const i=new Float32Array(Mi),r=new $(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ru(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Cu(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function ax(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===La||l===Da,u=l===ur||l===fr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Au(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Au(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function lx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const M=h.morphAttributes[y];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const y in h)e.update(h[y],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const y in d){const M=d[y];for(let m=0,p=M.length;m<p;m++)e.update(M[m],n.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,y=f.attributes.position;let M=0;if(d!==null){const v=d.array;M=d.version;for(let g=0,S=v.length;g<S;g+=3){const I=v[g+0],A=v[g+1],R=v[g+2];h.push(I,A,A,R,R,I)}}else if(y!==void 0){const v=y.array;M=y.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const I=g+0,A=g+1,R=g+2;h.push(I,A,A,R,R,I)}}else return;const m=new(Hh(h)?qh:Xh)(h,1);m.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ux(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,y){y!==0&&(n.drawElementsInstanced(i,d,s,h*a,y),t.update(d,i,y))}function u(h,d,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,y);let m=0;for(let p=0;p<y;p++)m+=d[p];t.update(m,i,1)}function f(h,d,y,M){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,M,0,y);let p=0;for(let v=0;v<y;v++)p+=d[v];for(let v=0;v<M.length;v++)t.update(p,i,M[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function fx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hx(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let g=0;d===!0&&(g=1),y===!0&&(g=2),M===!0&&(g=3);let S=o.attributes.position.count*g,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*I*4*f),R=new Gh(A,S,I,f);R.type=Cn,R.needsUpdate=!0;const P=g*4;for(let x=0;x<f;x++){const L=m[x],F=p[x],N=v[x],z=S*I*4*x;for(let j=0;j<L.count;j++){const k=j*P;d===!0&&(r.fromBufferAttribute(L,j),A[z+k+0]=r.x,A[z+k+1]=r.y,A[z+k+2]=r.z,A[z+k+3]=0),y===!0&&(r.fromBufferAttribute(F,j),A[z+k+4]=r.x,A[z+k+5]=r.y,A[z+k+6]=r.z,A[z+k+7]=0),M===!0&&(r.fromBufferAttribute(N,j),A[z+k+8]=r.x,A[z+k+9]=r.y,A[z+k+10]=r.z,A[z+k+11]=N.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new We(S,I)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const y=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function dx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Jh extends Dt{constructor(e,t,i,r,s,a,o,l,c,u=sr){if(u!==sr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===sr&&(i=Ai),i===void 0&&u===dr&&(i=hr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qh=new Dt,Pu=new Jh(1,1),ed=new Gh,td=new J_,nd=new Kh,Lu=[],Du=[],Iu=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lu[r];if(s===void 0&&(s=new Float32Array(r),Lu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yo(n,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function px(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function gx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function _x(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),pt(t,i)}}function xx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),pt(t,i)}}function Mx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Iu.set(i),n.uniformMatrix4fv(this.addr,!1,Iu),pt(t,i)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function bx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Pu.compareFunction=zh,s=Pu):s=Qh,t.setTexture2D(e||s,r)}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||td,r)}function Lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||nd,r)}function Dx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ed,r)}function Ix(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return vx;case 35675:return xx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return yx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return bx;case 36294:return Ax;case 36295:return wx;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Dx}}function Ux(n,e){n.uniform1fv(this.addr,e)}function Nx(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function Fx(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function Ox(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function Bx(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zx(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hx(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Vx(n,e){n.uniform1iv(this.addr,e)}function Gx(n,e){n.uniform2iv(this.addr,e)}function kx(n,e){n.uniform3iv(this.addr,e)}function Wx(n,e){n.uniform4iv(this.addr,e)}function Xx(n,e){n.uniform1uiv(this.addr,e)}function qx(n,e){n.uniform2uiv(this.addr,e)}function Yx(n,e){n.uniform3uiv(this.addr,e)}function $x(n,e){n.uniform4uiv(this.addr,e)}function Kx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Qh,s[a])}function jx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||td,s[a])}function Zx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||nd,s[a])}function Jx(n,e,t){const i=this.cache,r=e.length,s=yo(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ed,s[a])}function Qx(n){switch(n){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return kx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Jx}}class eM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}}class tM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}}class nM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function iM(n,e,t){const i=n.name,r=i.length;for(fa.lastIndex=0;;){const s=fa.exec(i),a=fa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fu(t,c===void 0?new eM(o,n,e):new tM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new nM(o),Fu(t,f)),t=f}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);iM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ou(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const rM=37297;let sM=0;function oM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function aM(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===to&&t===eo?i="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(i="LinearSRGBToLinearDisplayP3"),n){case ai:case xo:return[i,"LinearTransferOETF"];case cn:case Gl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Bu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oM(n.getShaderSource(e),a)}else return r}function lM(n,e){const t=aM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function cM(n,e){let t;switch(e){case u_:t="Linear";break;case f_:t="Reinhard";break;case h_:t="Cineon";break;case d_:t="ACESFilmic";break;case m_:t="AgX";break;case g_:t="Neutral";break;case p_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Is=new $;function uM(){et.getLuminanceCoefficients(Is);const n=Is.x.toFixed(4),e=Is.y.toFixed(4),t=Is.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function hM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function wr(n){return n!==""}function zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(n){return n.replace(pM,gM)}const mM=new Map;function gM(n,e){let t=Ge[e];if(t===void 0){const i=mM.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace(_M,vM)}function vM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function xM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function MM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case fr:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function SM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case fr:e="ENVMAP_MODE_REFRACTION";break}return e}function yM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ah:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function EM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function TM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=xM(t),c=MM(t),u=SM(t),f=yM(t),h=EM(t),d=fM(t),y=hM(s),M=r.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(wr).join(`
`),p.length>0&&(p+=`
`)):(m=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),p=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ei?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,lM("linearToOutputTexel",t.outputColorSpace),uM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),a=al(a),a=zu(a,t),a=Hu(a,t),o=al(o),o=zu(o,t),o=Hu(o,t),a=Vu(a),o=Vu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const g=v+m+a,S=v+p+o,I=Ou(r,r.VERTEX_SHADER,g),A=Ou(r,r.FRAGMENT_SHADER,S);r.attachShader(M,I),r.attachShader(M,A),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(L){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(M).trim(),N=r.getShaderInfoLog(I).trim(),z=r.getShaderInfoLog(A).trim();let j=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,I,A);else{const J=Bu(r,I,"vertex"),G=Bu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+J+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||z==="")&&(k=!1);k&&(L.diagnostics={runnable:j,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(I),r.deleteShader(A),P=new qs(r,M),E=dM(r,M)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,rM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=A,this}let bM=0;class AM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new wM(e),t.set(e,i)),i}}class wM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function RM(n,e,t,i,r,s,a){const o=new Wl,l=new AM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,L,F,N){const z=F.fog,j=N.geometry,k=E.isMeshStandardMaterial?F.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),G=J&&J.mapping===vo?J.image.height:null,ce=y[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=ge!==void 0?ge.length:0;let Ae=0;j.morphAttributes.position!==void 0&&(Ae=1),j.morphAttributes.normal!==void 0&&(Ae=2),j.morphAttributes.color!==void 0&&(Ae=3);let Re,ne,ue,_e;if(ce){const Ke=hn[ce];Re=Ke.vertexShader,ne=Ke.fragmentShader}else Re=E.vertexShader,ne=E.fragmentShader,l.update(E),ue=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const O=n.getRenderTarget(),ie=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,fe=!!E.map,we=!!E.matcap,D=!!J,w=!!E.aoMap,C=!!E.lightMap,V=!!E.bumpMap,q=!!E.normalMap,te=!!E.displacementMap,ee=!!E.emissiveMap,se=!!E.metalnessMap,b=!!E.roughnessMap,_=E.anisotropy>0,U=E.clearcoat>0,K=E.dispersion>0,W=E.iridescence>0,Y=E.sheen>0,de=E.transmission>0,ae=_&&!!E.anisotropyMap,me=U&&!!E.clearcoatMap,Ee=U&&!!E.clearcoatNormalMap,he=U&&!!E.clearcoatRoughnessMap,Me=W&&!!E.iridescenceMap,Oe=W&&!!E.iridescenceThicknessMap,Le=Y&&!!E.sheenColorMap,Te=Y&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Ue=!!E.specularColorMap,Xe=!!E.specularIntensityMap,B=de&&!!E.transmissionMap,ve=de&&!!E.thicknessMap,oe=!!E.gradientMap,le=!!E.alphaMap,Se=E.alphaTest>0,Ne=!!E.alphaHash,Ye=!!E.extensions;let lt=ei;E.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(lt=n.toneMapping);const _t={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Re,fragmentShader:ne,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:ie,instancingColor:ie&&N.instanceColor!==null,instancingMorph:ie&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ai,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:we,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:G,aoMap:w,lightMap:C,bumpMap:V,normalMap:q,displacementMap:h&&te,emissiveMap:ee,normalMapObjectSpace:q&&E.normalMapType===M_,normalMapTangentSpace:q&&E.normalMapType===Bh,metalnessMap:se,roughnessMap:b,anisotropy:_,anisotropyMap:ae,clearcoat:U,clearcoatMap:me,clearcoatNormalMap:Ee,clearcoatRoughnessMap:he,dispersion:K,iridescence:W,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:Te,specularMap:Be,specularColorMap:Ue,specularIntensityMap:Xe,transmission:de,transmissionMap:B,thicknessMap:ve,gradientMap:oe,opaque:E.transparent===!1&&E.blending===rr&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:Se,alphaHash:Ne,combine:E.combine,mapUv:fe&&M(E.map.channel),aoMapUv:w&&M(E.aoMap.channel),lightMapUv:C&&M(E.lightMap.channel),bumpMapUv:V&&M(E.bumpMap.channel),normalMapUv:q&&M(E.normalMap.channel),displacementMapUv:te&&M(E.displacementMap.channel),emissiveMapUv:ee&&M(E.emissiveMap.channel),metalnessMapUv:se&&M(E.metalnessMap.channel),roughnessMapUv:b&&M(E.roughnessMap.channel),anisotropyMapUv:ae&&M(E.anisotropyMap.channel),clearcoatMapUv:me&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Te&&M(E.sheenRoughnessMap.channel),specularMapUv:Be&&M(E.specularMap.channel),specularColorMapUv:Ue&&M(E.specularColorMap.channel),specularIntensityMapUv:Xe&&M(E.specularIntensityMap.channel),transmissionMapUv:B&&M(E.transmissionMap.channel),thicknessMapUv:ve&&M(E.thicknessMap.channel),alphaMapUv:le&&M(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(q||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(fe||le),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ae,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Rn,flipSided:E.side===Ut,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)x.push(L),x.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(x,E),g(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function v(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function g(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),E.push(o.mask)}function S(E){const x=y[E.type];let L;if(x){const F=hn[x];L=u0.clone(F.uniforms)}else L=E.uniforms;return L}function I(E,x){let L;for(let F=0,N=u.length;F<N;F++){const z=u[F];if(z.cacheKey===x){L=z,++L.usedTimes;break}}return L===void 0&&(L=new TM(n,x,E,s),u.push(L)),L}function A(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function CM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function PM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Wu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,y,M,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:y,renderOrder:f.renderOrder,z:M,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=y,p.renderOrder=f.renderOrder,p.z=M,p.group=m),e++,p}function o(f,h,d,y,M,m){const p=a(f,h,d,y,M,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,y,M,m){const p=a(f,h,d,y,M,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||PM),i.length>1&&i.sort(h||ku),r.length>1&&r.sort(h||ku)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function LM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Wu,n.set(i,[a])):r>=s.length?(a=new Wu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function DM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new qe};break;case"SpotLight":t={position:new $,direction:new $,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function IM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let UM=0;function NM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FM(n){const e=new DM,t=IM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new ft,a=new ft;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,y=0,M=0,m=0,p=0,v=0,g=0,S=0,I=0,A=0,R=0;c.sort(NM);for(let E=0,x=c.length;E<x;E++){const L=c[E],F=L.color,N=L.intensity,z=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*N,f+=F.g*N,h+=F.b*N;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],N);R++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=L.shadow.matrix,v++}i.directional[d]=k,d++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=z,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[M]=k;const J=L.shadow;if(L.map&&(i.spotLightMap[I]=L.map,I++,J.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[M]=J.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=j,S++}M++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,i.pointShadow[y]=G,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=L.shadow.matrix,g++}i.point[y]=k,y++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(N),k.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[p]=k,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==y||P.spotLength!==M||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==g||P.numSpotShadows!==S||P.numSpotMaps!==I||P.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=M,i.rectArea.length=m,i.point.length=y,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,P.directionalLength=d,P.pointLength=y,P.spotLength=M,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=g,P.numSpotShadows=S,P.numSpotMaps=I,P.numLightProbes=R,i.version=UM++)}function l(c,u){let f=0,h=0,d=0,y=0,M=0;const m=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const g=c[p];if(g.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(g.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(g.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),y++}else if(g.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:o,setupView:l,state:i}}function Xu(n){const e=new FM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function OM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Xu(n),e.set(r,[o])):s>=a.length?(o=new Xu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class BM extends ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
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
}`;function GM(n,e,t){let i=new jh;const r=new We,s=new We,a=new gt,o=new BM({depthPacking:x_}),l=new zM,c={},u=t.maxTextureSize,f={[ni]:Ut,[Ut]:ni,[Rn]:Rn},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:HM,fragmentShader:VM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const y=new Fn;y.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new $t(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=p!==An&&this.type===An,z=p===An&&this.type!==An;for(let j=0,k=A.length;j<k;j++){const J=A[j],G=J.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ce=G.getFrameExtents();if(r.multiply(ce),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,G.mapSize.y=s.y)),G.map===null||N===!0||z===!0){const pe=this.type!==An?{minFilter:Yt,magFilter:Yt}:{};G.map!==null&&G.map.dispose(),G.map=new wi(r.x,r.y,pe),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ge=G.getViewportCount();for(let pe=0;pe<ge;pe++){const Ae=G.getViewport(pe);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),F.viewport(a),G.updateMatrices(J,pe),i=G.getFrustum(),S(R,P,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===An&&v(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,L)};function v(A,R){const P=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,P,h,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,P,d,M,null)}function g(A,R,P,E){let x=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)x=L;else if(x=P.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const F=x.uuid,N=R.uuid;let z=c[F];z===void 0&&(z={},c[F]=z);let j=z[N];j===void 0&&(j=x.clone(),z[N]=j,R.addEventListener("dispose",I)),x=j}if(x.visible=R.visible,x.wireframe=R.wireframe,E===An?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=n.properties.get(x);F.light=P}return x}function S(A,R,P,E,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),z=A.material;if(Array.isArray(z)){const j=N.groups;for(let k=0,J=j.length;k<J;k++){const G=j[k],ce=z[G.materialIndex];if(ce&&ce.visible){const ge=g(A,ce,E,x);A.onBeforeShadow(n,A,R,P,N,ge,G),n.renderBufferDirect(P,null,N,ge,A,G),A.onAfterShadow(n,A,R,P,N,ge,G)}}}else if(z.visible){const j=g(A,z,E,x);A.onBeforeShadow(n,A,R,P,N,j,null),n.renderBufferDirect(P,null,N,j,A,null),A.onAfterShadow(n,A,R,P,N,j,null)}}const F=A.children;for(let N=0,z=F.length;N<z;N++)S(F[N],R,P,E,x)}function I(A){A.target.removeEventListener("dispose",I);for(const P in c){const E=c[P],x=A.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function kM(n){function e(){let B=!1;const ve=new gt;let oe=null;const le=new gt(0,0,0,0);return{setMask:function(Se){oe!==Se&&!B&&(n.colorMask(Se,Se,Se,Se),oe=Se)},setLocked:function(Se){B=Se},setClear:function(Se,Ne,Ye,lt,_t){_t===!0&&(Se*=lt,Ne*=lt,Ye*=lt),ve.set(Se,Ne,Ye,lt),le.equals(ve)===!1&&(n.clearColor(Se,Ne,Ye,lt),le.copy(ve))},reset:function(){B=!1,oe=null,le.set(-1,0,0,0)}}}function t(){let B=!1,ve=null,oe=null,le=null;return{setTest:function(Se){Se?_e(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!B&&(n.depthMask(Se),ve=Se)},setFunc:function(Se){if(oe!==Se){switch(Se){case t_:n.depthFunc(n.NEVER);break;case n_:n.depthFunc(n.ALWAYS);break;case i_:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case r_:n.depthFunc(n.EQUAL);break;case s_:n.depthFunc(n.GEQUAL);break;case o_:n.depthFunc(n.GREATER);break;case a_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Se}},setLocked:function(Se){B=Se},setClear:function(Se){le!==Se&&(n.clearDepth(Se),le=Se)},reset:function(){B=!1,ve=null,oe=null,le=null}}}function i(){let B=!1,ve=null,oe=null,le=null,Se=null,Ne=null,Ye=null,lt=null,_t=null;return{setTest:function(Ke){B||(Ke?_e(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(Ke){ve!==Ke&&!B&&(n.stencilMask(Ke),ve=Ke)},setFunc:function(Ke,vn,sn){(oe!==Ke||le!==vn||Se!==sn)&&(n.stencilFunc(Ke,vn,sn),oe=Ke,le=vn,Se=sn)},setOp:function(Ke,vn,sn){(Ne!==Ke||Ye!==vn||lt!==sn)&&(n.stencilOp(Ke,vn,sn),Ne=Ke,Ye=vn,lt=sn)},setLocked:function(Ke){B=Ke},setClear:function(Ke){_t!==Ke&&(n.clearStencil(Ke),_t=Ke)},reset:function(){B=!1,ve=null,oe=null,le=null,Se=null,Ne=null,Ye=null,lt=null,_t=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,y=!1,M=null,m=null,p=null,v=null,g=null,S=null,I=null,A=new qe(0,0,0),R=0,P=!1,E=null,x=null,L=null,F=null,N=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,k=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),j=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),j=k>=2);let G=null,ce={};const ge=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Ae=new gt().fromArray(ge),Re=new gt().fromArray(pe);function ne(B,ve,oe,le){const Se=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(B,Ne),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<oe;Ye++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ve+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return Ne}const ue={};ue[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),_e(n.DEPTH_TEST),s.setFunc(Js),V(!1),q(jc),_e(n.CULL_FACE),w(Qn);function _e(B){c[B]!==!0&&(n.enable(B),c[B]=!0)}function O(B){c[B]!==!1&&(n.disable(B),c[B]=!1)}function ie(B,ve){return u[B]!==ve?(n.bindFramebuffer(B,ve),u[B]=ve,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function re(B,ve){let oe=h,le=!1;if(B){oe=f.get(ve),oe===void 0&&(oe=[],f.set(ve,oe));const Se=B.textures;if(oe.length!==Se.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,Ye=Se.length;Ne<Ye;Ne++)oe[Ne]=n.COLOR_ATTACHMENT0+Ne;oe.length=Se.length,le=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,le=!0);le&&n.drawBuffers(oe)}function fe(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const we={[xi]:n.FUNC_ADD,[Bg]:n.FUNC_SUBTRACT,[zg]:n.FUNC_REVERSE_SUBTRACT};we[Hg]=n.MIN,we[Vg]=n.MAX;const D={[Gg]:n.ZERO,[kg]:n.ONE,[Wg]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[jg]:n.SRC_ALPHA_SATURATE,[$g]:n.DST_COLOR,[qg]:n.DST_ALPHA,[Xg]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Kg]:n.ONE_MINUS_DST_COLOR,[Yg]:n.ONE_MINUS_DST_ALPHA,[Zg]:n.CONSTANT_COLOR,[Jg]:n.ONE_MINUS_CONSTANT_COLOR,[Qg]:n.CONSTANT_ALPHA,[e_]:n.ONE_MINUS_CONSTANT_ALPHA};function w(B,ve,oe,le,Se,Ne,Ye,lt,_t,Ke){if(B===Qn){y===!0&&(O(n.BLEND),y=!1);return}if(y===!1&&(_e(n.BLEND),y=!0),B!==Og){if(B!==M||Ke!==P){if((m!==xi||g!==xi)&&(n.blendEquation(n.FUNC_ADD),m=xi,g=xi),Ke)switch(B){case rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,v=null,S=null,I=null,A.set(0,0,0),R=0,M=B,P=Ke}return}Se=Se||ve,Ne=Ne||oe,Ye=Ye||le,(ve!==m||Se!==g)&&(n.blendEquationSeparate(we[ve],we[Se]),m=ve,g=Se),(oe!==p||le!==v||Ne!==S||Ye!==I)&&(n.blendFuncSeparate(D[oe],D[le],D[Ne],D[Ye]),p=oe,v=le,S=Ne,I=Ye),(lt.equals(A)===!1||_t!==R)&&(n.blendColor(lt.r,lt.g,lt.b,_t),A.copy(lt),R=_t),M=B,P=!1}function C(B,ve){B.side===Rn?O(n.CULL_FACE):_e(n.CULL_FACE);let oe=B.side===Ut;ve&&(oe=!oe),V(oe),B.blending===rr&&B.transparent===!1?w(Qn):w(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const le=B.stencilWrite;a.setTest(le),le&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function V(B){E!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),E=B)}function q(B){B!==Ug?(_e(n.CULL_FACE),B!==x&&(B===jc?n.cullFace(n.BACK):B===Ng?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),x=B}function te(B){B!==L&&(j&&n.lineWidth(B),L=B)}function ee(B,ve,oe){B?(_e(n.POLYGON_OFFSET_FILL),(F!==ve||N!==oe)&&(n.polygonOffset(ve,oe),F=ve,N=oe)):O(n.POLYGON_OFFSET_FILL)}function se(B){B?_e(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function b(B){B===void 0&&(B=n.TEXTURE0+z-1),G!==B&&(n.activeTexture(B),G=B)}function _(B,ve,oe){oe===void 0&&(G===null?oe=n.TEXTURE0+z-1:oe=G);let le=ce[oe];le===void 0&&(le={type:void 0,texture:void 0},ce[oe]=le),(le.type!==B||le.texture!==ve)&&(G!==oe&&(n.activeTexture(oe),G=oe),n.bindTexture(B,ve||ue[B]),le.type=B,le.texture=ve)}function U(){const B=ce[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(B){Ae.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ae.copy(B))}function Te(B){Re.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Re.copy(B))}function Be(B,ve){let oe=l.get(ve);oe===void 0&&(oe=new WeakMap,l.set(ve,oe));let le=oe.get(B);le===void 0&&(le=n.getUniformBlockIndex(ve,B.name),oe.set(B,le))}function Ue(B,ve){const le=l.get(ve).get(B);o.get(ve)!==le&&(n.uniformBlockBinding(ve,le,B.__bindingPointIndex),o.set(ve,le))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,ce={},u={},f=new WeakMap,h=[],d=null,y=!1,M=null,m=null,p=null,v=null,g=null,S=null,I=null,A=new qe(0,0,0),R=0,P=!1,E=null,x=null,L=null,F=null,N=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:_e,disable:O,bindFramebuffer:ie,drawBuffers:re,useProgram:fe,setBlending:w,setMaterial:C,setFlipSided:V,setCullFace:q,setLineWidth:te,setPolygonOffset:ee,setScissorTest:se,activeTexture:b,bindTexture:_,unbindTexture:U,compressedTexImage2D:K,compressedTexImage3D:W,texImage2D:Me,texImage3D:Oe,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:Ee,texStorage3D:he,texSubImage2D:Y,texSubImage3D:de,compressedTexSubImage2D:ae,compressedTexSubImage3D:me,scissor:Le,viewport:Te,reset:Xe}}function qu(n,e,t,i){const r=WM(i);switch(t){case Lh:return n*e;case Ih:return n*e;case Uh:return n*e*2;case Nh:return n*e/r.components*r.byteLength;case zl:return n*e/r.components*r.byteLength;case Fh:return n*e*2/r.components*r.byteLength;case Hl:return n*e*2/r.components*r.byteLength;case Dh:return n*e*3/r.components*r.byteLength;case en:return n*e*4/r.components*r.byteLength;case Vl:return n*e*4/r.components*r.byteLength;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ks:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(n,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(n,8)*Math.max(e,8)/2;case za:case Ha:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Xs:case nl:case il:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Oh:case rl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sl:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WM(n){switch(n){case In:case Rh:return{byteLength:1,components:1};case Yr:case Ch:case Jr:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case Ai:case Fl:case Cn:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function XM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,_){return d?new OffscreenCanvas(b,_):Kr("canvas")}function M(b,_,U){let K=1;const W=se(b);if((W.width>U||W.height>U)&&(K=U/Math.max(W.width,W.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*W.width),de=Math.floor(K*W.height);f===void 0&&(f=y(Y,de));const ae=_?y(Y,de):f;return ae.width=Y,ae.height=de,ae.getContext("2d").drawImage(b,0,0,Y,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+Y+"x"+de+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Yt&&b.minFilter!==Qt}function p(b){n.generateMipmap(b)}function v(b,_,U,K,W=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=_;if(_===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),_===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.RG8UI),U===n.UNSIGNED_SHORT&&(Y=n.RG16UI),U===n.UNSIGNED_INT&&(Y=n.RG32UI),U===n.BYTE&&(Y=n.RG8I),U===n.SHORT&&(Y=n.RG16I),U===n.INT&&(Y=n.RG32I)),_===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),_===n.RGBA){const de=W?Qs:et.getTransfer(K);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=de===rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function g(b,_){let U;return b?_===null||_===Ai||_===hr?U=n.DEPTH24_STENCIL8:_===Cn?U=n.DEPTH32F_STENCIL8:_===Yr&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===hr?U=n.DEPTH_COMPONENT24:_===Cn?U=n.DEPTH_COMPONENT32F:_===Yr&&(U=n.DEPTH_COMPONENT16),U}function S(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yt&&b.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function I(b){const _=b.target;_.removeEventListener("dispose",I),R(_),_.isVideoTexture&&u.delete(_)}function A(b){const _=b.target;_.removeEventListener("dispose",A),E(_)}function R(b){const _=i.get(b);if(_.__webglInit===void 0)return;const U=b.source,K=h.get(U);if(K){const W=K[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&P(b),Object.keys(K).length===0&&h.delete(U)}i.remove(b)}function P(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const U=b.source,K=h.get(U);delete K[_.__cacheKey],a.memory.textures--}function E(b){const _=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let W=0;W<_.__webglFramebuffer[K].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[K][W]);else n.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)n.deleteFramebuffer(_.__webglFramebuffer[K]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=b.textures;for(let K=0,W=U.length;K<W;K++){const Y=i.get(U[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(U[K])}i.remove(b)}let x=0;function L(){x=0}function F(){const b=x;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),x+=1,b}function N(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function z(b,_){const U=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(U,b,_);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+_)}function j(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Re(U,b,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+_)}function k(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Re(U,b,_);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+_)}function J(b,_){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ne(U,b,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+_)}const G={[Ia]:n.REPEAT,[Si]:n.CLAMP_TO_EDGE,[Ua]:n.MIRRORED_REPEAT},ce={[Yt]:n.NEAREST,[__]:n.NEAREST_MIPMAP_NEAREST,[fs]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ge={[S_]:n.NEVER,[w_]:n.ALWAYS,[y_]:n.LESS,[zh]:n.LEQUAL,[E_]:n.EQUAL,[A_]:n.GEQUAL,[T_]:n.GREATER,[b_]:n.NOTEQUAL};function pe(b,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Vo||_.magFilter===fs||_.magFilter===yi||_.minFilter===Qt||_.minFilter===Vo||_.minFilter===fs||_.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,G[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,G[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,G[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ce[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==fs&&_.minFilter!==yi||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ae(b,_){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",I));const K=_.source;let W=h.get(K);W===void 0&&(W={},h.set(K,W));const Y=N(_);if(Y!==b.__cacheKey){W[Y]===void 0&&(W[Y]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[Y].usedTimes++;const de=W[b.__cacheKey];de!==void 0&&(W[b.__cacheKey].usedTimes--,de.usedTimes===0&&P(_)),b.__cacheKey=Y,b.__webglTexture=W[Y].texture}return U}function Re(b,_,U){let K=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=n.TEXTURE_3D);const W=Ae(b,_),Y=_.source;t.bindTexture(K,b.__webglTexture,n.TEXTURE0+U);const de=i.get(Y);if(Y.version!==de.__version||W===!0){t.activeTexture(n.TEXTURE0+U);const ae=et.getPrimaries(et.workingColorSpace),me=_.colorSpace===Zn?null:et.getPrimaries(_.colorSpace),Ee=_.colorSpace===Zn||ae===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let he=M(_.image,!1,r.maxTextureSize);he=ee(_,he);const Me=s.convert(_.format,_.colorSpace),Oe=s.convert(_.type);let Le=v(_.internalFormat,Me,Oe,_.colorSpace,_.isVideoTexture);pe(K,_);let Te;const Be=_.mipmaps,Ue=_.isVideoTexture!==!0,Xe=de.__version===void 0||W===!0,B=Y.dataReady,ve=S(_,he);if(_.isDepthTexture)Le=g(_.format===dr,_.type),Xe&&(Ue?t.texStorage2D(n.TEXTURE_2D,1,Le,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Le,he.width,he.height,0,Me,Oe,null));else if(_.isDataTexture)if(Be.length>0){Ue&&Xe&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Be[0].width,Be[0].height);for(let oe=0,le=Be.length;oe<le;oe++)Te=Be[oe],Ue?B&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,Me,Oe,Te.data):t.texImage2D(n.TEXTURE_2D,oe,Le,Te.width,Te.height,0,Me,Oe,Te.data);_.generateMipmaps=!1}else Ue?(Xe&&t.texStorage2D(n.TEXTURE_2D,ve,Le,he.width,he.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Me,Oe,he.data)):t.texImage2D(n.TEXTURE_2D,0,Le,he.width,he.height,0,Me,Oe,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,Be[0].width,Be[0].height,he.depth);for(let oe=0,le=Be.length;oe<le;oe++)if(Te=Be[oe],_.format!==en)if(Me!==null)if(Ue){if(B)if(_.layerUpdates.size>0){const Se=qu(Te.width,Te.height,_.format,_.type);for(const Ne of _.layerUpdates){const Ye=Te.data.subarray(Ne*Se/Te.data.BYTES_PER_ELEMENT,(Ne+1)*Se/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Ne,Te.width,Te.height,1,Me,Ye,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,he.depth,Me,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Le,Te.width,Te.height,he.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Te.width,Te.height,he.depth,Me,Oe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Le,Te.width,Te.height,he.depth,0,Me,Oe,Te.data)}else{Ue&&Xe&&t.texStorage2D(n.TEXTURE_2D,ve,Le,Be[0].width,Be[0].height);for(let oe=0,le=Be.length;oe<le;oe++)Te=Be[oe],_.format!==en?Me!==null?Ue?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,Me,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?B&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Te.width,Te.height,Me,Oe,Te.data):t.texImage2D(n.TEXTURE_2D,oe,Le,Te.width,Te.height,0,Me,Oe,Te.data)}else if(_.isDataArrayTexture)if(Ue){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Le,he.width,he.height,he.depth),B)if(_.layerUpdates.size>0){const oe=qu(he.width,he.height,_.format,_.type);for(const le of _.layerUpdates){const Se=he.data.subarray(le*oe/he.data.BYTES_PER_ELEMENT,(le+1)*oe/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,he.width,he.height,1,Me,Oe,Se)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Oe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,he.width,he.height,he.depth,0,Me,Oe,he.data);else if(_.isData3DTexture)Ue?(Xe&&t.texStorage3D(n.TEXTURE_3D,ve,Le,he.width,he.height,he.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Oe,he.data)):t.texImage3D(n.TEXTURE_3D,0,Le,he.width,he.height,he.depth,0,Me,Oe,he.data);else if(_.isFramebufferTexture){if(Xe)if(Ue)t.texStorage2D(n.TEXTURE_2D,ve,Le,he.width,he.height);else{let oe=he.width,le=he.height;for(let Se=0;Se<ve;Se++)t.texImage2D(n.TEXTURE_2D,Se,Le,oe,le,0,Me,Oe,null),oe>>=1,le>>=1}}else if(Be.length>0){if(Ue&&Xe){const oe=se(Be[0]);t.texStorage2D(n.TEXTURE_2D,ve,Le,oe.width,oe.height)}for(let oe=0,le=Be.length;oe<le;oe++)Te=Be[oe],Ue?B&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me,Oe,Te):t.texImage2D(n.TEXTURE_2D,oe,Le,Me,Oe,Te);_.generateMipmaps=!1}else if(Ue){if(Xe){const oe=se(he);t.texStorage2D(n.TEXTURE_2D,ve,Le,oe.width,oe.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me,Oe,he)}else t.texImage2D(n.TEXTURE_2D,0,Le,Me,Oe,he);m(_)&&p(K),de.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ne(b,_,U){if(_.image.length!==6)return;const K=Ae(b,_),W=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const Y=i.get(W);if(W.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+U);const de=et.getPrimaries(et.workingColorSpace),ae=_.colorSpace===Zn?null:et.getPrimaries(_.colorSpace),me=_.colorSpace===Zn||de===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let le=0;le<6;le++)!Ee&&!he?Me[le]=M(_.image[le],!0,r.maxCubemapSize):Me[le]=he?_.image[le].image:_.image[le],Me[le]=ee(_,Me[le]);const Oe=Me[0],Le=s.convert(_.format,_.colorSpace),Te=s.convert(_.type),Be=v(_.internalFormat,Le,Te,_.colorSpace),Ue=_.isVideoTexture!==!0,Xe=Y.__version===void 0||K===!0,B=W.dataReady;let ve=S(_,Oe);pe(n.TEXTURE_CUBE_MAP,_);let oe;if(Ee){Ue&&Xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Be,Oe.width,Oe.height);for(let le=0;le<6;le++){oe=Me[le].mipmaps;for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];_.format!==en?Le!==null?Ue?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ne.width,Ne.height,Le,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Be,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,0,0,Ne.width,Ne.height,Le,Te,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se,Be,Ne.width,Ne.height,0,Le,Te,Ne.data)}}}else{if(oe=_.mipmaps,Ue&&Xe){oe.length>0&&ve++;const le=se(Me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Be,le.width,le.height)}for(let le=0;le<6;le++)if(he){Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Me[le].width,Me[le].height,Le,Te,Me[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Me[le].width,Me[le].height,0,Le,Te,Me[le].data);for(let Se=0;Se<oe.length;Se++){const Ye=oe[Se].image[le].image;Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Ye.width,Ye.height,Le,Te,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Be,Ye.width,Ye.height,0,Le,Te,Ye.data)}}else{Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,Te,Me[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Be,Le,Te,Me[le]);for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];Ue?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,0,0,Le,Te,Ne.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se+1,Be,Le,Te,Ne.image[le])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),Y.__version=W.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ue(b,_,U,K,W,Y){const de=s.convert(U.format,U.colorSpace),ae=s.convert(U.type),me=v(U.internalFormat,de,ae,U.colorSpace);if(!i.get(_).__hasExternalTextures){const he=Math.max(1,_.width>>Y),Me=Math.max(1,_.height>>Y);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,Y,me,he,Me,_.depth,0,de,ae,null):t.texImage2D(W,Y,me,he,Me,0,de,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,W,i.get(U).__webglTexture,0,V(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,W,i.get(U).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(b,_,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const K=_.depthTexture,W=K&&K.isDepthTexture?K.type:null,Y=g(_.stencilBuffer,W),de=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=V(_);q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Y,_.width,_.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{const K=_.textures;for(let W=0;W<K.length;W++){const Y=K[W],de=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),me=v(Y.internalFormat,de,ae,Y.colorSpace),Ee=V(_);U&&q(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,me,_.width,_.height):q(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,me,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,me,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const K=i.get(_.depthTexture).__webglTexture,W=V(_);if(_.depthTexture.format===sr)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(_.depthTexture.format===dr)q(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ie(b){const _=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",W)};K.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=K}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");O(_.__webglFramebuffer,b)}else if(U){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=n.createRenderbuffer(),_e(_.__webglDepthbuffer[K],b,!1);else{const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),_e(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(b,_,U){const K=i.get(b);_!==void 0&&ue(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ie(b)}function fe(b){const _=b.texture,U=i.get(b),K=i.get(_);b.addEventListener("dispose",A);const W=b.textures,Y=b.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=_.version,a.memory.textures++),Y){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let me=0;me<_.mipmaps.length;me++)U.__webglFramebuffer[ae][me]=n.createFramebuffer()}else U.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)U.__webglFramebuffer[ae]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(de)for(let ae=0,me=W.length;ae<me;ae++){const Ee=i.get(W[ae]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&q(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<W.length;ae++){const me=W[ae];U.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);const Ee=s.convert(me.format,me.colorSpace),he=s.convert(me.type),Me=v(me.internalFormat,Ee,he,me.colorSpace,b.isXRRenderTarget===!0),Oe=V(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,Me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),pe(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ue(U.__webglFramebuffer[ae][me],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else ue(U.__webglFramebuffer[ae],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let ae=0,me=W.length;ae<me;ae++){const Ee=W[ae],he=i.get(Ee);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),pe(n.TEXTURE_2D,Ee),ue(U.__webglFramebuffer,b,Ee,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Ee)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),pe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)ue(U.__webglFramebuffer[me],b,_,n.COLOR_ATTACHMENT0,ae,me);else ue(U.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,ae,0);m(_)&&p(ae),t.unbindTexture()}b.depthBuffer&&ie(b)}function we(b){const _=b.textures;for(let U=0,K=_.length;U<K;U++){const W=_[U];if(m(W)){const Y=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(W).__webglTexture;t.bindTexture(Y,de),p(Y),t.unbindTexture()}}}const D=[],w=[];function C(b){if(b.samples>0){if(q(b)===!1){const _=b.textures,U=b.width,K=b.height;let W=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),ae=_.length>1;if(ae)for(let me=0;me<_.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<_.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ee=i.get(_[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,U,K,0,0,U,K,W,n.NEAREST),l===!0&&(D.length=0,w.length=0,D.push(n.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(Y),w.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,w)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let me=0;me<_.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const Ee=i.get(_[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function V(b){return Math.min(r.maxSamples,b.samples)}function q(b){const _=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function te(b){const _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function ee(b,_){const U=b.colorSpace,K=b.format,W=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==ai&&U!==Zn&&(et.getTransfer(U)===rt?(K!==en||W!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=q}function qM(n,e){function t(i,r=Zn){let s;const a=et.getTransfer(r);if(i===In)return n.UNSIGNED_BYTE;if(i===Ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rh)return n.BYTE;if(i===Ch)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===Lh)return n.ALPHA;if(i===Dh)return n.RGB;if(i===en)return n.RGBA;if(i===Ih)return n.LUMINANCE;if(i===Uh)return n.LUMINANCE_ALPHA;if(i===sr)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Nh)return n.RED;if(i===zl)return n.RED_INTEGER;if(i===Fh)return n.RG;if(i===Hl)return n.RG_INTEGER;if(i===Vl)return n.RGBA_INTEGER;if(i===Vs||i===Gs||i===ks||i===Ws)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Fa||i===Oa||i===Ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===za||i===Ha||i===Va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===za||i===Ha)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Va)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ga||i===ka||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ka||i===ja||i===Za||i===Ja||i===Qa||i===el||i===tl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ga)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ka)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ya)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$a)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ka)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ja)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Za)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ja)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qa)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===el)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tl)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xs||i===nl||i===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xs)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oh||i===rl||i===sl||i===ol)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class YM extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Us extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $M={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,y=.005;c.inputState.pinching&&h>d+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($M)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jM=`
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

}`;class ZM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ii({vertexShader:KM,fragmentShader:jM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $t(new So(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JM extends mr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,y=null;const M=new ZM,m=t.getContextAttributes();let p=null,v=null;const g=[],S=[],I=new We;let A=null;const R=new qt;R.layers.enable(1),R.viewport=new gt;const P=new qt;P.layers.enable(2),P.viewport=new gt;const E=[R,P],x=new YM;x.layers.enable(1),x.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=g[ne];return ue===void 0&&(ue=new ha,g[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=g[ne];return ue===void 0&&(ue=new ha,g[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=g[ne];return ue===void 0&&(ue=new ha,g[ne]=ue),ue.getHandSpace()};function N(ne){const ue=S.indexOf(ne.inputSource);if(ue===-1)return;const _e=g[ue];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,c||a),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let ne=0;ne<g.length;ne++){const ue=S[ne];ue!==null&&(S[ne]=null,g[ne].disconnect(ue))}L=null,F=null,M.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,v=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wi(d.framebufferWidth,d.framebufferHeight,{format:en,type:In,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,_e=null,O=null;m.depth&&(O=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?dr:sr,_e=m.stencil?hr:Ai);const ie={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new wi(h.textureWidth,h.textureHeight,{format:en,type:In,depthTexture:new Jh(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(ne){for(let ue=0;ue<ne.removed.length;ue++){const _e=ne.removed[ue],O=S.indexOf(_e);O>=0&&(S[O]=null,g[O].disconnect(_e))}for(let ue=0;ue<ne.added.length;ue++){const _e=ne.added[ue];let O=S.indexOf(_e);if(O===-1){for(let re=0;re<g.length;re++)if(re>=S.length){S.push(_e),O=re;break}else if(S[re]===null){S[re]=_e,O=re;break}if(O===-1)break}const ie=g[O];ie&&ie.connect(_e)}}const k=new $,J=new $;function G(ne,ue,_e){k.setFromMatrixPosition(ue.matrixWorld),J.setFromMatrixPosition(_e.matrixWorld);const O=k.distanceTo(J),ie=ue.projectionMatrix.elements,re=_e.projectionMatrix.elements,fe=ie[14]/(ie[10]-1),we=ie[14]/(ie[10]+1),D=(ie[9]+1)/ie[5],w=(ie[9]-1)/ie[5],C=(ie[8]-1)/ie[0],V=(re[8]+1)/re[0],q=fe*C,te=fe*V,ee=O/(-C+V),se=ee*-C;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ie[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const b=fe+ee,_=we+ee,U=q-se,K=te+(O-se),W=D*we/_*b,Y=w*we/_*b;ne.projectionMatrix.makePerspective(U,K,W,Y,b,_),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ue=ne.near,_e=ne.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),x.near=P.near=R.near=ue,x.far=P.far=R.far=_e,(L!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,F=x.far);const O=ne.parent,ie=x.cameras;ce(x,O);for(let re=0;re<ie.length;re++)ce(ie[re],O);ie.length===2?G(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),ge(ne,x,O)};function ge(ne,ue,_e){_e===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=$r*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let pe=null;function Ae(ne,ue){if(u=ue.getViewerPose(c||a),y=ue,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let O=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,O=!0);for(let re=0;re<_e.length;re++){const fe=_e[re];let we=null;if(d!==null)we=d.getViewport(fe);else{const w=f.getViewSubImage(h,fe);we=w.viewport,re===0&&(e.setRenderTargetTextures(v,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(v))}let D=E[re];D===void 0&&(D=new qt,D.layers.enable(re),D.viewport=new gt,E[re]=D),D.matrix.fromArray(fe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(fe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(we.x,we.y,we.width,we.height),re===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),O===!0&&x.cameras.push(D)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const re=f.getDepthInformation(_e[0]);re&&re.isValid&&re.texture&&M.init(e,re,r.renderState)}}for(let _e=0;_e<g.length;_e++){const O=S[_e],ie=g[_e];O!==null&&ie!==void 0&&ie.update(O,ue,c||a)}pe&&pe(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Re=new Zh;Re.setAnimationLoop(Ae),this.setAnimationLoop=function(ne){pe=ne},this.dispose=function(){}}}const gi=new Un,QM=new ft;function eS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,g,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),y(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,g):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),g=v.envMap,S=v.envMapRotation;g&&(m.envMap.value=g,gi.copy(S),gi.x*=-1,gi.y*=-1,gi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(gi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=g*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function c(v,g){let S=r[v.id];S===void 0&&(y(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const I=g.program;i.updateUBOMapping(v,I);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const g=f();v.__bindingPointIndex=g;const S=n.createBuffer(),I=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],S=v.uniforms,I=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let A=0,R=S.length;A<R;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,x=P.length;E<x;E++){const L=P[E];if(d(L,A,E,I)===!0){const F=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let j=0;j<N.length;j++){const k=N[j],J=M(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,F+z,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,g,S,I){const A=v.value,R=g+"_"+S;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{const P=I[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function y(v){const g=v.uniforms;let S=0;const I=16;for(let R=0,P=g.length;R<P;R++){const E=Array.isArray(g[R])?g[R]:[g[R]];for(let x=0,L=E.length;x<L;x++){const F=E[x],N=Array.isArray(F.value)?F.value:[F.value];for(let z=0,j=N.length;z<j;z++){const k=N[z],J=M(k),G=S%I,ce=G%J.boundary,ge=G+ce;S+=ce,ge!==0&&I-ge<J.storage&&(S+=I-ge),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=J.storage}}}const A=S%I;return A>0&&(S+=I-A),v.__size=S,v.__cache={},this}function M(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function p(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class nS{constructor(e={}){const{canvas:t=X_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),y=new Int32Array(4);let M=null,m=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=ei,this.toneMappingExposure=1;const g=this;let S=!1,I=0,A=0,R=null,P=-1,E=null;const x=new gt,L=new gt;let F=null;const N=new qe(0);let z=0,j=t.width,k=t.height,J=1,G=null,ce=null;const ge=new gt(0,0,j,k),pe=new gt(0,0,j,k);let Ae=!1;const Re=new jh;let ne=!1,ue=!1;const _e=new ft,O=new $,ie=new gt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function we(){return R===null?J:1}let D=i;function w(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Se,!1),D===null){const H="webgl2";if(D=w(H,T),D===null)throw w(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let C,V,q,te,ee,se,b,_,U,K,W,Y,de,ae,me,Ee,he,Me,Oe,Le,Te,Be,Ue,Xe;function B(){C=new lx(D),C.init(),Be=new qM(D,C),V=new tx(D,C,e,Be),q=new kM(D),te=new fx(D),ee=new CM,se=new XM(D,C,q,ee,V,Be,te),b=new ix(g),_=new ax(g),U=new _0(D),Ue=new Qv(D,U),K=new cx(D,U,te,Ue),W=new dx(D,K,U,te),Oe=new hx(D,V,se),Ee=new nx(ee),Y=new RM(g,b,_,C,V,Ue,Ee),de=new eS(g,ee),ae=new LM,me=new OM(C),Me=new Jv(g,b,_,q,W,h,l),he=new GM(g,W,V),Xe=new tS(D,te,V,q),Le=new ex(D,C,te),Te=new ux(D,C,te),te.programs=Y.programs,g.capabilities=V,g.extensions=C,g.properties=ee,g.renderLists=ae,g.shadowMap=he,g.state=q,g.info=te}B();const ve=new JM(g,D);this.xr=ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=C.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=C.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(j,k,!1))},this.getSize=function(T){return T.set(j,k)},this.setSize=function(T,H,Z=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,k=H,t.width=Math.floor(T*J),t.height=Math.floor(H*J),Z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(j*J,k*J).floor()},this.setDrawingBufferSize=function(T,H,Z){j=T,k=H,J=Z,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,H,Z,Q){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,H,Z,Q),q.viewport(x.copy(ge).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,H,Z,Q){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,H,Z,Q),q.scissor(L.copy(pe).multiplyScalar(J).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){q.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(T=!0,H=!0,Z=!0){let Q=0;if(T){let X=!1;if(R!==null){const xe=R.texture.format;X=xe===Vl||xe===Hl||xe===zl}if(X){const xe=R.texture.type,be=xe===In||xe===Ai||xe===Yr||xe===hr||xe===Ol||xe===Bl,Ce=Me.getClearColor(),Pe=Me.getClearAlpha(),Fe=Ce.r,ze=Ce.g,De=Ce.b;be?(d[0]=Fe,d[1]=ze,d[2]=De,d[3]=Pe,D.clearBufferuiv(D.COLOR,0,d)):(y[0]=Fe,y[1]=ze,y[2]=De,y[3]=Pe,D.clearBufferiv(D.COLOR,0,y))}else Q|=D.COLOR_BUFFER_BIT}H&&(Q|=D.DEPTH_BUFFER_BIT),Z&&(Q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ae.dispose(),me.dispose(),ee.dispose(),b.dispose(),_.dispose(),W.dispose(),Ue.dispose(),Xe.dispose(),Y.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",sn),ve.removeEventListener("sessionend",Kl),li.stop()};function oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=te.autoReset,H=he.enabled,Z=he.autoUpdate,Q=he.needsUpdate,X=he.type;B(),te.autoReset=T,he.enabled=H,he.autoUpdate=Z,he.needsUpdate=Q,he.type=X}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ne(T){const H=T.target;H.removeEventListener("dispose",Ne),Ye(H)}function Ye(T){lt(T),ee.remove(T)}function lt(T){const H=ee.get(T).programs;H!==void 0&&(H.forEach(function(Z){Y.releaseProgram(Z)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,Q,X,xe){H===null&&(H=re);const be=X.isMesh&&X.matrixWorld.determinant()<0,Ce=od(T,H,Z,Q,X);q.setMaterial(Q,be);let Pe=Z.index,Fe=1;if(Q.wireframe===!0){if(Pe=K.getWireframeAttribute(Z),Pe===void 0)return;Fe=2}const ze=Z.drawRange,De=Z.attributes.position;let je=ze.start*Fe,ot=(ze.start+ze.count)*Fe;xe!==null&&(je=Math.max(je,xe.start*Fe),ot=Math.min(ot,(xe.start+xe.count)*Fe)),Pe!==null?(je=Math.max(je,0),ot=Math.min(ot,Pe.count)):De!=null&&(je=Math.max(je,0),ot=Math.min(ot,De.count));const at=ot-je;if(at<0||at===1/0)return;Ue.setup(X,Q,Ce,Z,Pe);let Nt,Ze=Le;if(Pe!==null&&(Nt=U.get(Pe),Ze=Te,Ze.setIndex(Nt)),X.isMesh)Q.wireframe===!0?(q.setLineWidth(Q.wireframeLinewidth*we()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(X.isLine){let Ie=Q.linewidth;Ie===void 0&&(Ie=1),q.setLineWidth(Ie*we()),X.isLineSegments?Ze.setMode(D.LINES):X.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else X.isPoints?Ze.setMode(D.POINTS):X.isSprite&&Ze.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ze.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))Ze.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ie=X._multiDrawStarts,vt=X._multiDrawCounts,Je=X._multiDrawCount,Kt=Pe?U.get(Pe).bytesPerElement:1,Ci=ee.get(Q).currentProgram.getUniforms();for(let Ft=0;Ft<Je;Ft++)Ci.setValue(D,"_gl_DrawID",Ft),Ze.render(Ie[Ft]/Kt,vt[Ft])}else if(X.isInstancedMesh)Ze.renderInstances(je,at,X.count);else if(Z.isInstancedBufferGeometry){const Ie=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,vt=Math.min(Z.instanceCount,Ie);Ze.renderInstances(je,at,vt)}else Ze.render(je,at)};function _t(T,H,Z){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=Ut,T.needsUpdate=!0,rs(T,H,Z),T.side=ni,T.needsUpdate=!0,rs(T,H,Z),T.side=Rn):rs(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),m=me.get(Z),m.init(H),v.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const Q=new Set;return T.traverse(function(X){const xe=X.material;if(xe)if(Array.isArray(xe))for(let be=0;be<xe.length;be++){const Ce=xe[be];_t(Ce,Z,X),Q.add(Ce)}else _t(xe,Z,X),Q.add(xe)}),v.pop(),m=null,Q},this.compileAsync=function(T,H,Z=null){const Q=this.compile(T,H,Z);return new Promise(X=>{function xe(){if(Q.forEach(function(be){ee.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){X(T);return}setTimeout(xe,10)}C.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ke=null;function vn(T){Ke&&Ke(T)}function sn(){li.stop()}function Kl(){li.start()}const li=new Zh;li.setAnimationLoop(vn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){Ke=T,ve.setAnimationLoop(T),T===null?li.stop():li.start()},ve.addEventListener("sessionstart",sn),ve.addEventListener("sessionend",Kl),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,H,R),m=me.get(T,v.length),m.init(H),v.push(m),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Re.setFromProjectionMatrix(_e),ue=this.localClippingEnabled,ne=Ee.init(this.clippingPlanes,ue),M=ae.get(T,p.length),M.init(),p.push(M),ve.enabled===!0&&ve.isPresenting===!0){const xe=g.xr.getDepthSensingMesh();xe!==null&&Eo(xe,H,-1/0,g.sortObjects)}Eo(T,H,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(G,ce),fe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,fe&&Me.addToRenderList(M,T),this.info.render.frame++,ne===!0&&Ee.beginShadows();const Z=m.state.shadowsArray;he.render(Z,T,H),ne===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=M.opaque,X=M.transmissive;if(m.setupLights(),H.isArrayCamera){const xe=H.cameras;if(X.length>0)for(let be=0,Ce=xe.length;be<Ce;be++){const Pe=xe[be];Zl(Q,X,T,Pe)}fe&&Me.render(T);for(let be=0,Ce=xe.length;be<Ce;be++){const Pe=xe[be];jl(M,T,Pe,Pe.viewport)}}else X.length>0&&Zl(Q,X,T,H),fe&&Me.render(T),jl(M,T,H);R!==null&&(se.updateMultisampleRenderTarget(R),se.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(g,T,H),Ue.resetDefaultState(),P=-1,E=null,v.pop(),v.length>0?(m=v[v.length-1],ne===!0&&Ee.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function Eo(T,H,Z,Q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Re.intersectsSprite(T)){Q&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(_e);const be=W.update(T),Ce=T.material;Ce.visible&&M.push(T,be,Ce,Z,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Re.intersectsObject(T))){const be=W.update(T),Ce=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ie.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ie.copy(be.boundingSphere.center)),ie.applyMatrix4(T.matrixWorld).applyMatrix4(_e)),Array.isArray(Ce)){const Pe=be.groups;for(let Fe=0,ze=Pe.length;Fe<ze;Fe++){const De=Pe[Fe],je=Ce[De.materialIndex];je&&je.visible&&M.push(T,be,je,Z,ie.z,De)}}else Ce.visible&&M.push(T,be,Ce,Z,ie.z,null)}}const xe=T.children;for(let be=0,Ce=xe.length;be<Ce;be++)Eo(xe[be],H,Z,Q)}function jl(T,H,Z,Q){const X=T.opaque,xe=T.transmissive,be=T.transparent;m.setupLightsView(Z),ne===!0&&Ee.setGlobalState(g.clippingPlanes,Z),Q&&q.viewport(x.copy(Q)),X.length>0&&is(X,H,Z),xe.length>0&&is(xe,H,Z),be.length>0&&is(be,H,Z),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Zl(T,H,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new wi(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Jr:In,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const xe=m.state.transmissionRenderTarget[Q.id],be=Q.viewport||x;xe.setSize(be.z,be.w);const Ce=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(N),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear(),fe&&Me.render(Z);const Pe=g.toneMapping;g.toneMapping=ei;const Fe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ne===!0&&Ee.setGlobalState(g.clippingPlanes,Q),is(T,Z,Q),se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe),C.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let De=0,je=H.length;De<je;De++){const ot=H[De],at=ot.object,Nt=ot.geometry,Ze=ot.material,Ie=ot.group;if(Ze.side===Rn&&at.layers.test(Q.layers)){const vt=Ze.side;Ze.side=Ut,Ze.needsUpdate=!0,Jl(at,Z,Q,Nt,Ze,Ie),Ze.side=vt,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe))}g.setRenderTarget(Ce),g.setClearColor(N,z),Fe!==void 0&&(Q.viewport=Fe),g.toneMapping=Pe}function is(T,H,Z){const Q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const be=T[X],Ce=be.object,Pe=be.geometry,Fe=Q===null?be.material:Q,ze=be.group;Ce.layers.test(Z.layers)&&Jl(Ce,H,Z,Pe,Fe,ze)}}function Jl(T,H,Z,Q,X,xe){T.onBeforeRender(g,H,Z,Q,X,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(g,H,Z,Q,T,xe),X.transparent===!0&&X.side===Rn&&X.forceSinglePass===!1?(X.side=Ut,X.needsUpdate=!0,g.renderBufferDirect(Z,H,Q,X,T,xe),X.side=ni,X.needsUpdate=!0,g.renderBufferDirect(Z,H,Q,X,T,xe),X.side=Rn):g.renderBufferDirect(Z,H,Q,X,T,xe),T.onAfterRender(g,H,Z,Q,X,xe)}function rs(T,H,Z){H.isScene!==!0&&(H=re);const Q=ee.get(T),X=m.state.lights,xe=m.state.shadowsArray,be=X.state.version,Ce=Y.getParameters(T,X.state,xe,H,Z),Pe=Y.getProgramCacheKey(Ce);let Fe=Q.programs;Q.environment=T.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(T.isMeshStandardMaterial?_:b).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Ne),Fe=new Map,Q.programs=Fe);let ze=Fe.get(Pe);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===be)return ec(T,Ce),ze}else Ce.uniforms=Y.getUniforms(T),T.onBeforeCompile(Ce,g),ze=Y.acquireProgram(Ce,Pe),Fe.set(Pe,ze),Q.uniforms=Ce.uniforms;const De=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=Ee.uniform),ec(T,Ce),Q.needsLights=ld(T),Q.lightsStateVersion=be,Q.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Ql(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=qs.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ec(T,H){const Z=ee.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function od(T,H,Z,Q,X){H.isScene!==!0&&(H=re),se.resetTextureUnits();const xe=H.fog,be=Q.isMeshStandardMaterial?H.environment:null,Ce=R===null?g.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ai,Pe=(Q.isMeshStandardMaterial?_:b).get(Q.envMap||be),Fe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),De=!!Z.morphAttributes.position,je=!!Z.morphAttributes.normal,ot=!!Z.morphAttributes.color;let at=ei;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(at=g.toneMapping);const Nt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ze=Nt!==void 0?Nt.length:0,Ie=ee.get(Q),vt=m.state.lights;if(ne===!0&&(ue===!0||T!==E)){const Wt=T===E&&Q.id===P;Ee.setState(Q,T,Wt)}let Je=!1;Q.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==vt.state.version||Ie.outputColorSpace!==Ce||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==Pe||Q.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ee.numPlanes||Ie.numIntersection!==Ee.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==ze||Ie.morphTargets!==De||Ie.morphNormals!==je||Ie.morphColors!==ot||Ie.toneMapping!==at||Ie.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ie.__version=Q.version);let Kt=Ie.currentProgram;Je===!0&&(Kt=rs(Q,H,X));let Ci=!1,Ft=!1,To=!1;const ct=Kt.getUniforms(),On=Ie.uniforms;if(q.useProgram(Kt.program)&&(Ci=!0,Ft=!0,To=!0),Q.id!==P&&(P=Q.id,Ft=!0),Ci||E!==T){ct.setValue(D,"projectionMatrix",T.projectionMatrix),ct.setValue(D,"viewMatrix",T.matrixWorldInverse);const Wt=ct.map.cameraPosition;Wt!==void 0&&Wt.setValue(D,O.setFromMatrixPosition(T.matrixWorld)),V.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ct.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,Ft=!0,To=!0)}if(X.isSkinnedMesh){ct.setOptional(D,X,"bindMatrix"),ct.setOptional(D,X,"bindMatrixInverse");const Wt=X.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(D,"boneTexture",Wt.boneTexture,se))}X.isBatchedMesh&&(ct.setOptional(D,X,"batchingTexture"),ct.setValue(D,"batchingTexture",X._matricesTexture,se),ct.setOptional(D,X,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",X._indirectTexture,se),ct.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",X._colorsTexture,se));const bo=Z.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&Oe.update(X,Z,Kt),(Ft||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,ct.setValue(D,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(On.envMap.value=Pe,On.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(On.envMapIntensity.value=H.environmentIntensity),Ft&&(ct.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ie.needsLights&&ad(On,To),xe&&Q.fog===!0&&de.refreshFogUniforms(On,xe),de.refreshMaterialUniforms(On,Q,J,k,m.state.transmissionRenderTarget[T.id]),qs.upload(D,Ql(Ie),On,se)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(qs.upload(D,Ql(Ie),On,se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ct.setValue(D,"center",X.center),ct.setValue(D,"modelViewMatrix",X.modelViewMatrix),ct.setValue(D,"normalMatrix",X.normalMatrix),ct.setValue(D,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Wt=Q.uniformsGroups;for(let Ao=0,cd=Wt.length;Ao<cd;Ao++){const tc=Wt[Ao];Xe.update(tc,Kt),Xe.bind(tc,Kt)}}return Kt}function ad(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ld(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,H,Z){ee.get(T.texture).__webglTexture=H,ee.get(T.depthTexture).__webglTexture=Z;const Q=ee.get(T);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const Z=ee.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Z=0){R=T,I=H,A=Z;let Q=!0,X=null,xe=!1,be=!1;if(T){const Pe=ee.get(T);if(Pe.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(D.FRAMEBUFFER,null),Q=!1;else if(Pe.__webglFramebuffer===void 0)se.setupRenderTarget(T);else if(Pe.__hasExternalTextures)se.rebindTextures(T,ee.get(T.texture).__webglTexture,ee.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const De=T.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&ee.has(De)&&(T.width!==De.image.width||T.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(be=!0);const ze=ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?X=ze[H][Z]:X=ze[H],xe=!0):T.samples>0&&se.useMultisampledRTT(T)===!1?X=ee.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Z]:X=ze,x.copy(T.viewport),L.copy(T.scissor),F=T.scissorTest}else x.copy(ge).multiplyScalar(J).floor(),L.copy(pe).multiplyScalar(J).floor(),F=Ae;if(q.bindFramebuffer(D.FRAMEBUFFER,X)&&Q&&q.drawBuffers(T,X),q.viewport(x),q.scissor(L),q.setScissorTest(F),xe){const Pe=ee.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,Z)}else if(be){const Pe=ee.get(T.texture),Fe=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,Z||0,Fe)}P=-1},this.readRenderTargetPixels=function(T,H,Z,Q,X,xe,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){q.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Pe=T.texture,Fe=Pe.format,ze=Pe.type;if(!V.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!V.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Q&&Z>=0&&Z<=T.height-X&&D.readPixels(H,Z,Q,X,Be.convert(Fe),Be.convert(ze),xe)}finally{const Pe=R!==null?ee.get(R).__webglFramebuffer:null;q.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,Q,X,xe,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){q.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Pe=T.texture,Fe=Pe.format,ze=Pe.type;if(!V.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!V.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Q&&Z>=0&&Z<=T.height-X){const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(H,Z,Q,X,Be.convert(Fe),Be.convert(ze),0),D.flush();const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await q_(D,je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe)}finally{D.deleteBuffer(De),D.deleteSync(je)}return xe}}finally{const Pe=R!==null?ee.get(R).__webglFramebuffer:null;q.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(T,H=null,Z=0){T.isTexture!==!0&&(Br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);const Q=Math.pow(2,-Z),X=Math.floor(T.image.width*Q),xe=Math.floor(T.image.height*Q),be=H!==null?H.x:0,Ce=H!==null?H.y:0;se.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,be,Ce,X,xe),q.unbindTexture()},this.copyTextureToTexture=function(T,H,Z=null,Q=null,X=0){T.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,T=arguments[1],H=arguments[2],X=arguments[3]||0,Z=null);let xe,be,Ce,Pe,Fe,ze;Z!==null?(xe=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ce=Z.min.x,Pe=Z.min.y):(xe=T.image.width,be=T.image.height,Ce=0,Pe=0),Q!==null?(Fe=Q.x,ze=Q.y):(Fe=0,ze=0);const De=Be.convert(H.format),je=Be.convert(H.type);se.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const ot=D.getParameter(D.UNPACK_ROW_LENGTH),at=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Nt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES),vt=T.isCompressedTexture?T.mipmaps[X]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,Fe,ze,xe,be,De,je,vt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,Fe,ze,vt.width,vt.height,De,vt.data):D.texSubImage2D(D.TEXTURE_2D,X,Fe,ze,xe,be,De,je,vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),X===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Z=null,Q=null,X=0){T.isTexture!==!0&&(Br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,Q=arguments[1]||null,T=arguments[2],H=arguments[3],X=arguments[4]||0);let xe,be,Ce,Pe,Fe,ze,De,je,ot;const at=T.isCompressedTexture?T.mipmaps[X]:T.image;Z!==null?(xe=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Ce=Z.max.z-Z.min.z,Pe=Z.min.x,Fe=Z.min.y,ze=Z.min.z):(xe=at.width,be=at.height,Ce=at.depth,Pe=0,Fe=0,ze=0),Q!==null?(De=Q.x,je=Q.y,ot=Q.z):(De=0,je=0,ot=0);const Nt=Be.convert(H.format),Ze=Be.convert(H.type);let Ie;if(H.isData3DTexture)se.setTexture3D(H,0),Ie=D.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)se.setTexture2DArray(H,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),Je=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kt=D.getParameter(D.UNPACK_SKIP_PIXELS),Ci=D.getParameter(D.UNPACK_SKIP_ROWS),Ft=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Ie,X,De,je,ot,xe,be,Ce,Nt,Ze,at.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,X,De,je,ot,xe,be,Ce,Nt,at.data):D.texSubImage3D(Ie,X,De,je,ot,xe,be,Ce,Nt,Ze,at),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ci),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft),X===0&&H.generateMipmaps&&D.generateMipmap(Ie),q.unbindTexture()},this.initRenderTarget=function(T){ee.get(T).__webglFramebuffer===void 0&&se.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?se.setTextureCube(T,0):T.isData3DTexture?se.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?se.setTexture2DArray(T,0):se.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,q.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Gl?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===xo?"display-p3":"srgb"}}class iS extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yl extends Fn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new gn(s,3)),this.setAttribute("normal",new gn(s.slice(),3)),this.setAttribute("uv",new gn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const g=new $,S=new $,I=new $;for(let A=0;A<t.length;A+=3)d(t[A+0],g),d(t[A+1],S),d(t[A+2],I),l(g,S,I,v)}function l(v,g,S,I){const A=I+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const E=v.clone().lerp(S,P/A),x=g.clone().lerp(S,P/A),L=A-P;for(let F=0;F<=L;F++)F===0&&P===A?R[P][F]=E:R[P][F]=E.clone().lerp(x,F/L)}for(let P=0;P<A;P++)for(let E=0;E<2*(A-P)-1;E++){const x=Math.floor(E/2);E%2===0?(h(R[P][x+1]),h(R[P+1][x]),h(R[P][x])):(h(R[P][x+1]),h(R[P+1][x+1]),h(R[P+1][x]))}}function c(v){const g=new $;for(let S=0;S<s.length;S+=3)g.x=s[S+0],g.y=s[S+1],g.z=s[S+2],g.normalize().multiplyScalar(v),s[S+0]=g.x,s[S+1]=g.y,s[S+2]=g.z}function u(){const v=new $;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const S=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;a.push(S,1-I)}y(),f()}function f(){for(let v=0;v<a.length;v+=6){const g=a[v+0],S=a[v+2],I=a[v+4],A=Math.max(g,S,I),R=Math.min(g,S,I);A>.9&&R<.1&&(g<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),I<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function d(v,g){const S=v*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function y(){const v=new $,g=new $,S=new $,I=new $,A=new We,R=new We,P=new We;for(let E=0,x=0;E<s.length;E+=9,x+=6){v.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),S.set(s[E+6],s[E+7],s[E+8]),A.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),I.copy(v).add(g).add(S).divideScalar(3);const L=m(I);M(A,x+0,v,L),M(R,x+2,g,L),M(P,x+4,S,L)}}function M(v,g,S,I){I<0&&v.x===1&&(a[g]=v.x-1),S.x===0&&S.z===0&&(a[g]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.vertices,e.indices,e.radius,e.details)}}class io extends Yl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new io(e.radius,e.detail)}}class Yu extends ts{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const $u={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class rS{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],y=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return y}return null}}}const sS=new rS;class $l{constructor(e){this.manager=e!==void 0?e:sS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$l.DEFAULT_MATERIAL_NAME="__DEFAULT";class oS extends $l{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=$u.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Kr("img");function l(){u(),$u.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class da extends $l{constructor(e){super(e)}load(e,t,i,r){const s=new Dt,a=new oS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class aS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ku(){return(typeof performance>"u"?Date:performance).now()}const ju=new ft;class lS{constructor(e,t,i=0,r=1/0){this.ray=new kh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Wl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ju.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ju),this}intersectObject(e,t=!0,i=[]){return ll(e,this,i,t),i.sort(Zu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ll(e[r],this,i,t);return i.sort(Zu),i}}function Zu(n,e){return n.distance-e.distance}function ll(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)ll(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);class cS extends $t{constructor(e,t,i=!1,r=!1,s=1e4){const a=new Fn;super(a,t),this.isMarchingCubes=!0;const o=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(v){this.resolution=v,this.isolation=80,this.size=v,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=s*3;this.positionArray=new Float32Array(g*3);const S=new It(this.positionArray,3);S.setUsage(hs),a.setAttribute("position",S),this.normalArray=new Float32Array(g*3);const I=new It(this.normalArray,3);if(I.setUsage(hs),a.setAttribute("normal",I),this.enableUvs){this.uvArray=new Float32Array(g*2);const A=new It(this.uvArray,2);A.setUsage(hs),a.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const A=new It(this.colorArray,3);A.setUsage(hs),a.setAttribute("color",A)}a.boundingSphere=new Mo(new $,1)};function f(v,g,S){return v+(g-v)*S}function h(v,g,S,I,A,R,P,E,x,L){const F=(S-P)/(E-P),N=o.normal_cache;l[g+0]=I+F*o.delta,l[g+1]=A,l[g+2]=R,c[g+0]=f(N[v+0],N[v+3],F),c[g+1]=f(N[v+1],N[v+4],F),c[g+2]=f(N[v+2],N[v+5],F),u[g+0]=f(o.palette[x*3+0],o.palette[L*3+0],F),u[g+1]=f(o.palette[x*3+1],o.palette[L*3+1],F),u[g+2]=f(o.palette[x*3+2],o.palette[L*3+2],F)}function d(v,g,S,I,A,R,P,E,x,L){const F=(S-P)/(E-P),N=o.normal_cache;l[g+0]=I,l[g+1]=A+F*o.delta,l[g+2]=R;const z=v+o.yd*3;c[g+0]=f(N[v+0],N[z+0],F),c[g+1]=f(N[v+1],N[z+1],F),c[g+2]=f(N[v+2],N[z+2],F),u[g+0]=f(o.palette[x*3+0],o.palette[L*3+0],F),u[g+1]=f(o.palette[x*3+1],o.palette[L*3+1],F),u[g+2]=f(o.palette[x*3+2],o.palette[L*3+2],F)}function y(v,g,S,I,A,R,P,E,x,L){const F=(S-P)/(E-P),N=o.normal_cache;l[g+0]=I,l[g+1]=A,l[g+2]=R+F*o.delta;const z=v+o.zd*3;c[g+0]=f(N[v+0],N[z+0],F),c[g+1]=f(N[v+1],N[z+1],F),c[g+2]=f(N[v+2],N[z+2],F),u[g+0]=f(o.palette[x*3+0],o.palette[L*3+0],F),u[g+1]=f(o.palette[x*3+1],o.palette[L*3+1],F),u[g+2]=f(o.palette[x*3+2],o.palette[L*3+2],F)}function M(v){const g=v*3;o.normal_cache[g]===0&&(o.normal_cache[g+0]=o.field[v-1]-o.field[v+1],o.normal_cache[g+1]=o.field[v-o.yd]-o.field[v+o.yd],o.normal_cache[g+2]=o.field[v-o.zd]-o.field[v+o.zd])}function m(v,g,S,I,A){const R=I+1,P=I+o.yd,E=I+o.zd,x=R+o.yd,L=R+o.zd,F=I+o.yd+o.zd,N=R+o.yd+o.zd;let z=0;const j=o.field[I],k=o.field[R],J=o.field[P],G=o.field[x],ce=o.field[E],ge=o.field[L],pe=o.field[F],Ae=o.field[N];j<A&&(z|=1),k<A&&(z|=2),J<A&&(z|=8),G<A&&(z|=4),ce<A&&(z|=16),ge<A&&(z|=32),pe<A&&(z|=128),Ae<A&&(z|=64);const Re=uS[z];if(Re===0)return 0;const ne=o.delta,ue=v+ne,_e=g+ne,O=S+ne;Re&1&&(M(I),M(R),h(I*3,0,A,v,g,S,j,k,I,R)),Re&2&&(M(R),M(x),d(R*3,3,A,ue,g,S,k,G,R,x)),Re&4&&(M(P),M(x),h(P*3,6,A,v,_e,S,J,G,P,x)),Re&8&&(M(I),M(P),d(I*3,9,A,v,g,S,j,J,I,P)),Re&16&&(M(E),M(L),h(E*3,12,A,v,g,O,ce,ge,E,L)),Re&32&&(M(L),M(N),d(L*3,15,A,ue,g,O,ge,Ae,L,N)),Re&64&&(M(F),M(N),h(F*3,18,A,v,_e,O,pe,Ae,F,N)),Re&128&&(M(E),M(F),d(E*3,21,A,v,g,O,ce,pe,E,F)),Re&256&&(M(I),M(E),y(I*3,24,A,v,g,S,j,ce,I,E)),Re&512&&(M(R),M(L),y(R*3,27,A,ue,g,S,k,ge,R,L)),Re&1024&&(M(x),M(N),y(x*3,30,A,ue,_e,S,G,Ae,x,N)),Re&2048&&(M(P),M(F),y(P*3,33,A,v,_e,S,J,pe,P,F)),z<<=4;let ie,re,fe,we=0,D=0;for(;Ns[z+D]!=-1;)ie=z+D,re=ie+1,fe=ie+2,p(l,c,u,3*Ns[ie],3*Ns[re],3*Ns[fe]),D+=3,we++;return we}function p(v,g,S,I,A,R){const P=o.count*3;if(o.positionArray[P+0]=v[I],o.positionArray[P+1]=v[I+1],o.positionArray[P+2]=v[I+2],o.positionArray[P+3]=v[A],o.positionArray[P+4]=v[A+1],o.positionArray[P+5]=v[A+2],o.positionArray[P+6]=v[R],o.positionArray[P+7]=v[R+1],o.positionArray[P+8]=v[R+2],o.material.flatShading===!0){const E=(g[I+0]+g[A+0]+g[R+0])/3,x=(g[I+1]+g[A+1]+g[R+1])/3,L=(g[I+2]+g[A+2]+g[R+2])/3;o.normalArray[P+0]=E,o.normalArray[P+1]=x,o.normalArray[P+2]=L,o.normalArray[P+3]=E,o.normalArray[P+4]=x,o.normalArray[P+5]=L,o.normalArray[P+6]=E,o.normalArray[P+7]=x,o.normalArray[P+8]=L}else o.normalArray[P+0]=g[I+0],o.normalArray[P+1]=g[I+1],o.normalArray[P+2]=g[I+2],o.normalArray[P+3]=g[A+0],o.normalArray[P+4]=g[A+1],o.normalArray[P+5]=g[A+2],o.normalArray[P+6]=g[R+0],o.normalArray[P+7]=g[R+1],o.normalArray[P+8]=g[R+2];if(o.enableUvs){const E=o.count*2;o.uvArray[E+0]=v[I+0],o.uvArray[E+1]=v[I+2],o.uvArray[E+2]=v[A+0],o.uvArray[E+3]=v[A+2],o.uvArray[E+4]=v[R+0],o.uvArray[E+5]=v[R+2]}o.enableColors&&(o.colorArray[P+0]=S[I+0],o.colorArray[P+1]=S[I+1],o.colorArray[P+2]=S[I+2],o.colorArray[P+3]=S[A+0],o.colorArray[P+4]=S[A+1],o.colorArray[P+5]=S[A+2],o.colorArray[P+6]=S[R+0],o.colorArray[P+7]=S[R+1],o.colorArray[P+8]=S[R+2]),o.count+=3}this.addBall=function(v,g,S,I,A,R){const P=Math.sign(I);I=Math.abs(I);const E=R!=null;let x=new qe(v,g,S);if(E)try{x=R instanceof qe?R:Array.isArray(R)?new qe(Math.min(Math.abs(R[0]),1),Math.min(Math.abs(R[1]),1),Math.min(Math.abs(R[2]),1)):new qe(R)}catch{x=new qe(v,g,S)}const L=this.size*Math.sqrt(I/A),F=S*this.size,N=g*this.size,z=v*this.size;let j=Math.floor(F-L);j<1&&(j=1);let k=Math.floor(F+L);k>this.size-1&&(k=this.size-1);let J=Math.floor(N-L);J<1&&(J=1);let G=Math.floor(N+L);G>this.size-1&&(G=this.size-1);let ce=Math.floor(z-L);ce<1&&(ce=1);let ge=Math.floor(z+L);ge>this.size-1&&(ge=this.size-1);let pe,Ae,Re,ne,ue,_e,O,ie,re,fe,we;for(Re=j;Re<k;Re++)for(ue=this.size2*Re,ie=Re/this.size-S,re=ie*ie,Ae=J;Ae<G;Ae++)for(ne=ue+this.size*Ae,O=Ae/this.size-g,fe=O*O,pe=ce;pe<ge;pe++)if(_e=pe/this.size-v,we=I/(1e-6+_e*_e+fe+re)-A,we>0){this.field[ne+pe]+=we*P;const D=Math.sqrt((pe-z)*(pe-z)+(Ae-N)*(Ae-N)+(Re-F)*(Re-F))/L,w=1-D*D*D*(D*(D*6-15)+10);this.palette[(ne+pe)*3+0]+=x.r*w,this.palette[(ne+pe)*3+1]+=x.g*w,this.palette[(ne+pe)*3+2]+=x.b*w}},this.addPlaneX=function(v,g){const S=this.size,I=this.yd,A=this.zd,R=this.field;let P,E,x,L,F,N,z,j=S*Math.sqrt(v/g);for(j>S&&(j=S),P=0;P<j;P++)if(N=P/S,L=N*N,F=v/(1e-4+L)-g,F>0)for(E=0;E<S;E++)for(z=P+E*I,x=0;x<S;x++)R[A*x+z]+=F},this.addPlaneY=function(v,g){const S=this.size,I=this.yd,A=this.zd,R=this.field;let P,E,x,L,F,N,z,j,k=S*Math.sqrt(v/g);for(k>S&&(k=S),E=0;E<k;E++)if(N=E/S,L=N*N,F=v/(1e-4+L)-g,F>0)for(z=E*I,P=0;P<S;P++)for(j=z+P,x=0;x<S;x++)R[A*x+j]+=F},this.addPlaneZ=function(v,g){const S=this.size,I=this.yd,A=this.zd,R=this.field;let P,E,x,L,F,N,z,j,k=S*Math.sqrt(v/g);for(k>S&&(k=S),x=0;x<k;x++)if(N=x/S,L=N*N,F=v/(1e-4+L)-g,F>0)for(z=A*x,E=0;E<S;E++)for(j=z+E*I,P=0;P<S;P++)R[j+P]+=F},this.setCell=function(v,g,S,I){const A=this.size2*S+this.size*g+v;this.field[A]=I},this.getCell=function(v,g,S){const I=this.size2*S+this.size*g+v;return this.field[I]},this.blur=function(v=1){const g=this.field,S=g.slice(),I=this.size,A=this.size2;for(let R=0;R<I;R++)for(let P=0;P<I;P++)for(let E=0;E<I;E++){const x=A*E+I*P+R;let L=S[x],F=1;for(let N=-1;N<=1;N+=2){const z=N+R;if(!(z<0||z>=I))for(let j=-1;j<=1;j+=2){const k=j+P;if(!(k<0||k>=I))for(let J=-1;J<=1;J+=2){const G=J+E;if(G<0||G>=I)continue;const ce=A*G+I*k+z,ge=S[ce];F++,L+=v*(ge-L)/F}}}g[x]=L}},this.reset=function(){for(let v=0;v<this.size3;v++)this.normal_cache[v*3]=0,this.field[v]=0,this.palette[v*3]=this.palette[v*3+1]=this.palette[v*3+2]=0},this.update=function(){this.count=0;const v=this.size-2;for(let g=1;g<v;g++){const S=this.size2*g,I=(g-this.halfsize)/this.halfsize;for(let A=1;A<v;A++){const R=S+this.size*A,P=(A-this.halfsize)/this.halfsize;for(let E=1;E<v;E++){const x=(E-this.halfsize)/this.halfsize,L=R+E;m(x,P,I,L,this.isolation)}}}this.geometry.setDrawRange(0,this.count),a.getAttribute("position").needsUpdate=!0,a.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(a.getAttribute("uv").needsUpdate=!0),this.enableColors&&(a.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const uS=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),Ns=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),fS="/portfolio/assets/black-n-shiney-dmFdIzFr.jpg",id=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},hS={name:"BlobContainer",setup(){const n=ga(null),e=an(null),t=an(null),i=an(null),r=an(null),s=new aS,a=an(new We),o=an(null),l=an(null),c=an([]),u=an(null),f=new $(0,0,0),h=new $(.5,.5,.5);new da;const d=ga(!1),y=new lS,M=async()=>{const F=window.innerWidth,N=window.innerHeight;e.value=new iS,t.value=new qt(75,F/N,.1,2e3),t.value.position.z=6,t.value.rotation.y=-W_.degToRad(40),i.value=new nS,i.value.setSize(F,N),i.value.setClearColor(0,0),n.value&&n.value.appendChild(i.value.domElement),await Pi.init();const z={x:0,y:0,z:0};r.value=new Pi.World(z);const j=20,k=!1;for(let J=0;J<j;J++){const G=x({debug:k,RAPIER:Pi,world:$e(r.value),isMelting:d});c.value.push(G)}v(),await g(),S(),I()},m=()=>{if(d.value)v(),d.value=!1;else if(c.value.length===0)v();else{const F=s.getElapsedTime();c.value.forEach(N=>{N.creationTime=F}),d.value=!0}},p=()=>{const F=s.getElapsedTime();c.value=c.value.filter(N=>{const{rigid:z,meltSpeed:j,meltDelay:k,creationTime:J}=N;if(F-J>=k){const ce=z.linvel();z.setLinvel({x:ce.x,y:ce.y-j,z:ce.z},!0)}return z.translation().y<-5?(r.value.removeRigidBody(z),N.mesh&&e.value.remove(N.mesh),!1):!0}),c.value.length===0&&(d.value=!1)},v=()=>{c.value.forEach(z=>{const j=z.rigid;r.value.removeRigidBody(j),z.mesh&&e.value.remove(z.mesh)}),c.value=[];const F=20,N=!1;for(let z=0;z<F;z++){const j=x({debug:N,RAPIER:Pi,world:$e(r.value),isMelting:d});c.value.push(j)}},g=async()=>{const N=new da().load("../assets/black-n-shiney.jpg"),z=Pi.RigidBodyDesc.kinematicPositionBased().setTranslation(0,0,0);u.value=r.value.createRigidBody(z);const j=Pi.ColliderDesc.ball(.5);r.value.createCollider(j,u.value);const k=new io(.25,3),J=new Yu({matcap:N});o.value=new $t(k,J),o.value.userData.update=()=>{y.setFromCamera(a.value,t.value);const G=new Kn(new $(0,0,1),0),ce=new $;y.ray.intersectPlane(G,ce),u.value.setTranslation({x:ce.x,y:ce.y,z:ce.z},!0),o.value.position.copy(ce)},e.value.add(o.value)},S=()=>{const N=new da().load(fS),z=new Yu({matcap:N,vertexColors:!0});l.value=new cS(96,z,!0,!0,9e4),l.value.scale.setScalar(6),l.value.isolation=1e3,l.value.userData.update=()=>{l.value.reset();const j=s.getElapsedTime();c.value.forEach((k,J)=>{const{x:G,y:ce,z:ge}=k.update();let pe=.5+.1*Math.sin(j+J);if(d.value){const{rigid:Re,meltDelay:ne,creationTime:ue}=k,_e=Re.translation();if(j-ue>=ne){const ie=Math.max(0,1.5-(_e.y+5)/10);pe*=ie}else pe*=1}l.value.addBall(G,ce,ge,pe,10,k.color.getHex())}),l.value.update()},e.value.add(l.value)},I=()=>{requestAnimationFrame(I),r.value.step(),o.value.userData.update(),l.value.userData.update(),l.value.rotation.y+=.005,d.value&&p(),i.value.render(e.value,t.value)},A=()=>{const F=window.innerWidth,N=window.innerHeight;t.value.aspect=F/N,t.value.updateProjectionMatrix(),i.value.setSize(F,N)},R=F=>{const N=i.value.domElement.getBoundingClientRect();a.value.x=(F.clientX-N.left)/N.width*2-1,a.value.y=-((F.clientY-N.top)/N.height)*2+1},P=()=>{E()},E=()=>{const F=u.value.translation(),N=1;c.value.forEach(z=>{const j=z.rigid;if(j===u.value)return;const k=j.translation(),J=k.x-F.x,G=k.y-F.y,ce=k.z-F.z;if(J*J+G*G+ce*ce<N*N){const pe={x:J*.01+(Math.random()-.5)*.8,y:G*.01+(Math.random()-.5)*.8,z:ce*.01+(Math.random()-.5)*.8};j.applyImpulse(pe,!0)}})},x=({debug:F=!1,RAPIER:N,world:z,isMelting:j})=>{const ce=.39+Math.random()*.6,pe=Math.random()*1,Ae=s.getElapsedTime();let Re=Math.random()*3-3*.5,ne=Math.random()*3-3*.5+3,ue=Math.random()*3-3*.5,_e=N.RigidBodyDesc.dynamic().setTranslation(Re,ne,ue).setLinearDamping(2),O=z.createRigidBody(_e),ie=N.ColliderDesc.ball(.2).setDensity(.5);z.createCollider(ie,O);const re=new qe().setHSL(Math.random(),1,.5),fe=new $(Re,ne,ue);let we;if(F===!0){const w=new io(.2,3),C=new Xl({color:re});we=new $t(w,C)}return{color:re,mesh:we,rigid:O,update:()=>{O.resetForces(!0);let{x:w,y:C,z:V}=O.translation(),q=new $(w,C,V);if(!j.value){let se=q.clone().sub(f).normalize();O.addForce(se.multiplyScalar(-.5),!0)}const te=s.getElapsedTime(),ee=new $(.2*Math.sin(te+fe.x),.1*Math.cos(te+fe.y),.3*Math.sin(te+fe.z));return q.add(ee),F===!0&&we.position.copy(q),q.multiplyScalar(.1).add(h),q},meltSpeed:ce,meltDelay:pe,creationTime:Ae}};Bf(()=>{M(),window.addEventListener("resize",A),window.addEventListener("mousemove",R),window.addEventListener("click",P)}),zf(()=>{window.removeEventListener("resize",A),window.removeEventListener("mousemove",R),window.removeEventListener("click",P)});const L=Vt(()=>d.value?"Reset":c.value.length===0?"Create":"Melt");return{container:n,startMeltAnimation:m,isMelting:d,buttonLabel:L}}},dS={ref:"container",class:"threejs-container"};function pS(n,e,t,i,r,s){return po(),mo("div",dS,[ir("button",{onClick:e[0]||(e[0]=(...a)=>i.startMeltAnimation&&i.startMeltAnimation(...a)),class:"melt-button"},lf(i.buttonLabel),1)],512)}const mS=id(hS,[["render",pS],["__scopeId","data-v-10e20ed6"]]),gS=Rl({name:"WordCollage",props:{words:{type:Array,required:!0,validator:n=>n.every(e=>typeof e.text=="string"&&typeof e.size=="number")},columns:{type:Number,default:4},rows:{type:Number,default:3}},setup(n){return{gridTemplateAreas:Vt(()=>{const i=[];for(let r=0;r<n.rows;r++)i.push('"'+Array(n.columns).fill(".").join(" ")+'"');return i.join(" ")}),getWordStyle:i=>{const r=Math.floor(Math.random()*n.rows)+1,s=Math.floor(Math.random()*n.columns)+1,a=Math.min(i.size,n.rows-r+1),o=Math.min(i.size,n.columns-s+1);return{gridArea:`${r} / ${s} / span ${a} / span ${o}`,fontSize:`${i.size*.5+.5}rem`,fontWeight:i.size*100+100}}}}}),_S={class:"text-container",ref:"textContainer"};function vS(n,e,t,i,r,s){return po(),mo("div",_S,e[0]||(e[0]=[qp('<div class="name-container" data-v-835f65bc><h3 data-v-835f65bc>ARIC</h3><h3 data-v-835f65bc>REPP</h3></div><ul class="cloud" data-v-835f65bc><li data-v-835f65bc><span data-weight="4" data-v-835f65bc>NextJS</span></li><li data-v-835f65bc><span data-weight="2" data-v-835f65bc>Games</span></li><li data-v-835f65bc><span data-weight="5" data-v-835f65bc>Figma</span></li><li data-v-835f65bc><span data-weight="7" data-v-835f65bc>AI Enthusiast</span></li><li data-v-835f65bc><span data-weight="6" data-v-835f65bc>Jiu Jitsu</span></li><li data-v-835f65bc><span data-weight="5" data-v-835f65bc>ThreeJS</span></li><li data-v-835f65bc><span data-weight="3" data-v-835f65bc>UIUX</span></li><li data-v-835f65bc><span data-weight="6" data-v-835f65bc>Family</span></li><li data-v-835f65bc><span data-weight="3" data-v-835f65bc>Python</span></li><li data-v-835f65bc><span data-weight="9" data-v-835f65bc>UI Engineer</span></li><li data-v-835f65bc><span data-weight="4" data-v-835f65bc>VueJS</span></li><li data-v-835f65bc><span data-weight="7" data-v-835f65bc>React</span></li><li data-v-835f65bc><span data-weight="3" data-v-835f65bc>GCP</span></li></ul>',2)]),512)}const xS=id(gS,[["render",vS],["__scopeId","data-v-835f65bc"]]),MS={class:"main-container"},rd={__name:"HomeView",setup(n){return(e,t)=>(po(),mo("main",MS,[yt(mS),yt(xS)]))}},SS=Object.freeze(Object.defineProperty({__proto__:null,default:rd},Symbol.toStringTag,{value:"Module"})),yS=wg({history:sg("/portfolio/"),routes:[{path:"/",name:"home",component:rd},{path:"/about",name:"about",component:()=>Ig(()=>Promise.resolve().then(()=>SS),void 0)}]}),sd=Am(Pg);sd.use(yS);sd.mount("#app");

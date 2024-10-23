import tr from"https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const rt={},Ar=[],wn=()=>{},Qm=()=>!1,$a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cc=t=>t.startsWith("onUpdate:"),bt=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eg=Object.prototype.hasOwnProperty,et=(t,e)=>eg.call(t,e),He=Array.isArray,Tr=t=>Ka(t)==="[object Map]",cd=t=>Ka(t)==="[object Set]",Ve=t=>typeof t=="function",_t=t=>typeof t=="string",Ai=t=>typeof t=="symbol",ut=t=>t!==null&&typeof t=="object",ud=t=>(ut(t)||Ve(t))&&Ve(t.then)&&Ve(t.catch),fd=Object.prototype.toString,Ka=t=>fd.call(t),tg=t=>Ka(t).slice(8,-1),hd=t=>Ka(t)==="[object Object]",Lc=t=>_t(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,as=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ng=/-(\w)/g,pn=Za(t=>t.replace(ng,(e,n)=>n?n.toUpperCase():"")),ig=/\B([A-Z])/g,Qi=Za(t=>t.replace(ig,"-$1").toLowerCase()),Ja=Za(t=>t.charAt(0).toUpperCase()+t.slice(1)),bo=Za(t=>t?`on${Ja(t)}`:""),xi=(t,e)=>!Object.is(t,e),Ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},rg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uu;const pd=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=_t(i)?lg(i):Ic(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(t)||ut(t))return t}const sg=/;(?![^(]*\))/g,ag=/:([^]+)/,og=/\/\*[^]*?\*\//g;function lg(t){const e={};return t.replace(og,"").split(sg).forEach(n=>{if(n){const i=n.split(ag);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dc(t){let e="";if(_t(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=Dc(t[n]);i&&(e+=i+" ")}else if(ut(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ug=Rc(cg);function md(t){return!!t||t===""}const gd=t=>!!(t&&t.__v_isRef===!0),_d=t=>_t(t)?t:t==null?"":He(t)||ut(t)&&(t.toString===fd||!Ve(t.toString))?gd(t)?_d(t.value):JSON.stringify(t,vd,2):String(t),vd=(t,e)=>gd(e)?vd(t,e.value):Tr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[To(i,s)+" =>"]=r,n),{})}:cd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>To(n))}:Ai(e)?To(e):ut(e)&&!He(e)&&!hd(e)?String(e):e,To=(t,e="")=>{var n;return Ai(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yt;class fg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Yt,!e&&Yt&&(this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Yt;try{return Yt=this,e()}finally{Yt=n}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function hg(){return Yt}let it;const wo=new WeakSet;class xd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Yt&&Yt.active&&Yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wo.has(this)&&(wo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Md(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Nu(this),Sd(this);const e=it,n=hn;it=this,hn=!0;try{return this.fn()}finally{Ed(this),it=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oc(e);this.deps=this.depsTail=void 0,Nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let yd=0,os;function Md(t){t.flags|=8,t.next=os,os=t}function Uc(){yd++}function Nc(){if(--yd>0)return;let t;for(;os;){let e=os;for(os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Sd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ed(t,e=!1){let n,i=t.depsTail,r=i;for(;r;){const s=r.prevDep;r.version===-1?(r===i&&(i=s),Oc(r,e),dg(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=n,t.depsTail=i}function vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ys))return;t.globalVersion=ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!vl(t)){t.flags&=-3;return}const n=it,i=hn;it=t,hn=!0;try{Sd(t);const r=t.fn(t._value);(e.version===0||xi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=n,hn=i,Ed(t,!0),t.flags&=-3}}function Oc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i),!n.subs)if(n.computed){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Oc(s,!0)}else n.map&&!e&&(n.map.delete(n.key),n.map.size||Na.delete(n.target))}function dg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const Ad=[];function Ti(){Ad.push(hn),hn=!1}function wi(){const t=Ad.pop();hn=t===void 0?!0:t}function Nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=it;it=void 0;try{e()}finally{it=n}}}let ys=0;class pg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0}track(e){if(!it||!hn||it===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==it)n=this.activeLink=new pg(it,this),it.deps?(n.prevDep=it.depsTail,it.depsTail.nextDep=n,it.depsTail=n):it.deps=it.depsTail=n,it.flags&4&&Td(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=it.depsTail,n.nextDep=void 0,it.depsTail.nextDep=n,it.depsTail=n,it.deps===n&&(it.deps=i)}return n}trigger(e){this.version++,ys++,this.notify(e)}notify(e){Uc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nc()}}}function Td(t){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Td(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}const Na=new WeakMap,Xi=Symbol(""),xl=Symbol(""),Ms=Symbol("");function Lt(t,e,n){if(hn&&it){let i=Na.get(t);i||Na.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Fc),r.target=t,r.map=i,r.key=n),r.track()}}function Xn(t,e,n,i,r,s){const o=Na.get(t);if(!o){ys++;return}const a=l=>{l&&l.trigger()};if(Uc(),e==="clear")o.forEach(a);else{const l=He(t),c=l&&Lc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ms||!Ai(h)&&h>=u)&&a(f)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(Ms)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Xi)),Tr(t)&&a(o.get(xl)));break;case"delete":l||(a(o.get(Xi)),Tr(t)&&a(o.get(xl)));break;case"set":Tr(t)&&a(o.get(Xi));break}}Nc()}function nr(t){const e=$e(t);return e===t?e:(Lt(e,"iterate",Ms),dn(t)?e:e.map(Nt))}function Bc(t){return Lt(t=$e(t),"iterate",Ms),t}const mg={__proto__:null,[Symbol.iterator](){return Ro(this,Symbol.iterator,Nt)},concat(...t){return nr(this).concat(...t.map(e=>He(e)?nr(e):e))},entries(){return Ro(this,"entries",t=>(t[1]=Nt(t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(Nt),arguments)},find(t,e){return Dn(this,"find",t,e,Nt,arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,Nt,arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Co(this,"includes",t)},indexOf(...t){return Co(this,"indexOf",t)},join(t){return nr(this).join(t)},lastIndexOf(...t){return Co(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return qr(this,"pop")},push(...t){return qr(this,"push",t)},reduce(t,...e){return Ou(this,"reduce",t,e)},reduceRight(t,...e){return Ou(this,"reduceRight",t,e)},shift(){return qr(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return qr(this,"splice",t)},toReversed(){return nr(this).toReversed()},toSorted(t){return nr(this).toSorted(t)},toSpliced(...t){return nr(this).toSpliced(...t)},unshift(...t){return qr(this,"unshift",t)},values(){return Ro(this,"values",Nt)}};function Ro(t,e,n){const i=Bc(t),r=i[e]();return i!==t&&!dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const gg=Array.prototype;function Dn(t,e,n,i,r,s){const o=Bc(t),a=o!==t&&!dn(t),l=o[e];if(l!==gg[e]){const f=l.apply(t,s);return a?Nt(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Nt(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Ou(t,e,n,i){const r=Bc(t);let s=n;return r!==t&&(dn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Nt(a),l,t)}),r[e](s,...i)}function Co(t,e,n){const i=$e(t);Lt(i,"iterate",Ms);const r=i[e](...n);return(r===-1||r===!1)&&Vc(n[0])?(n[0]=$e(n[0]),i[e](...n)):r}function qr(t,e,n=[]){Ti(),Uc();const i=$e(t)[e].apply(t,n);return Nc(),wi(),i}const _g=Rc("__proto__,__v_isRef,__isVue"),wd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ai));function vg(t){Ai(t)||(t=String(t));const e=$e(this);return Lt(e,"has",t),e.hasOwnProperty(t)}class Rd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Lg:Id:s?Ld:Pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=mg[n]))return l;if(n==="hasOwnProperty")return vg}const a=Reflect.get(e,n,Ct(e)?e:i);return(Ai(n)?wd.has(n):_g(n))||(r||Lt(e,"get",n),s)?a:Ct(a)?o&&Lc(n)?a:a.value:ut(a)?r?Ud(a):eo(a):a}}class Cd extends Rd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=ji(s);if(!dn(i)&&!ji(i)&&(s=$e(s),i=$e(i)),!He(e)&&Ct(s)&&!Ct(i))return l?!1:(s.value=i,!0)}const o=He(e)&&Lc(n)?Number(n)<e.length:et(e,n),a=Reflect.set(e,n,i,Ct(e)?e:r);return e===$e(r)&&(o?xi(i,s)&&Xn(e,"set",n,i):Xn(e,"add",n,i)),a}deleteProperty(e,n){const i=et(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Xn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ai(n)||!wd.has(n))&&Lt(e,"has",n),i}ownKeys(e){return Lt(e,"iterate",He(e)?"length":Xi),Reflect.ownKeys(e)}}class xg extends Rd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yg=new Cd,Mg=new xg,Sg=new Cd(!0);const zc=t=>t,Qa=t=>Reflect.getPrototypeOf(t);function Ws(t,e,n=!1,i=!1){t=t.__v_raw;const r=$e(t),s=$e(e);n||(xi(e,s)&&Lt(r,"get",e),Lt(r,"get",s));const{has:o}=Qa(r),a=i?zc:n?Gc:Nt;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Xs(t,e=!1){const n=this.__v_raw,i=$e(n),r=$e(t);return e||(xi(t,r)&&Lt(i,"has",t),Lt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ys(t,e=!1){return t=t.__v_raw,!e&&Lt($e(t),"iterate",Xi),Reflect.get(t,"size",t)}function Fu(t,e=!1){!e&&!dn(t)&&!ji(t)&&(t=$e(t));const n=$e(this);return Qa(n).has.call(n,t)||(n.add(t),Xn(n,"add",t,t)),this}function Bu(t,e,n=!1){!n&&!dn(e)&&!ji(e)&&(e=$e(e));const i=$e(this),{has:r,get:s}=Qa(i);let o=r.call(i,t);o||(t=$e(t),o=r.call(i,t));const a=s.call(i,t);return i.set(t,e),o?xi(e,a)&&Xn(i,"set",t,e):Xn(i,"add",t,e),this}function zu(t){const e=$e(this),{has:n,get:i}=Qa(e);let r=n.call(e,t);r||(t=$e(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Xn(e,"delete",t,void 0),s}function ku(){const t=$e(this),e=t.size!==0,n=t.clear();return e&&Xn(t,"clear",void 0,void 0),n}function qs(t,e){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=e?zc:t?Gc:Nt;return!t&&Lt(a,"iterate",Xi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function js(t,e,n){return function(...i){const r=this.__v_raw,s=$e(r),o=Tr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?zc:e?Gc:Nt;return!e&&Lt(s,"iterate",l?xl:Xi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ei(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Eg(){const t={get(s){return Ws(this,s)},get size(){return Ys(this)},has:Xs,add:Fu,set:Bu,delete:zu,clear:ku,forEach:qs(!1,!1)},e={get(s){return Ws(this,s,!1,!0)},get size(){return Ys(this)},has:Xs,add(s){return Fu.call(this,s,!0)},set(s,o){return Bu.call(this,s,o,!0)},delete:zu,clear:ku,forEach:qs(!1,!0)},n={get(s){return Ws(this,s,!0)},get size(){return Ys(this,!0)},has(s){return Xs.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:qs(!0,!1)},i={get(s){return Ws(this,s,!0,!0)},get size(){return Ys(this,!0)},has(s){return Xs.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=js(s,!1,!1),n[s]=js(s,!0,!1),e[s]=js(s,!1,!0),i[s]=js(s,!0,!0)}),[t,n,e,i]}const[bg,Ag,Tg,wg]=Eg();function kc(t,e){const n=e?t?wg:Tg:t?Ag:bg;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(et(n,r)&&r in i?n:i,r,s)}const Rg={get:kc(!1,!1)},Cg={get:kc(!1,!0)},Pg={get:kc(!0,!1)};const Pd=new WeakMap,Ld=new WeakMap,Id=new WeakMap,Lg=new WeakMap;function Ig(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dg(t){return t.__v_skip||!Object.isExtensible(t)?0:Ig(tg(t))}function eo(t){return ji(t)?t:Hc(t,!1,yg,Rg,Pd)}function Dd(t){return Hc(t,!1,Sg,Cg,Ld)}function Ud(t){return Hc(t,!0,Mg,Pg,Id)}function Hc(t,e,n,i,r){if(!ut(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Dg(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ls(t){return ji(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ji(t){return!!(t&&t.__v_isReadonly)}function dn(t){return!!(t&&t.__v_isShallow)}function Vc(t){return t?!!t.__v_raw:!1}function $e(t){const e=t&&t.__v_raw;return e?$e(e):t}function Ug(t){return!et(t,"__v_skip")&&Object.isExtensible(t)&&dd(t,"__v_skip",!0),t}const Nt=t=>ut(t)?eo(t):t,Gc=t=>ut(t)?Ud(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function Sa(t){return Nd(t,!1)}function vn(t){return Nd(t,!0)}function Nd(t,e){return Ct(t)?t:new Ng(t,e)}class Ng{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$e(e),this._value=n?e:Nt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||dn(e)||ji(e);e=i?e:$e(e),xi(e,n)&&(this._rawValue=e,this._value=i?e:Nt(e),this.dep.trigger())}}function gi(t){return Ct(t)?t.value:t}const Og={get:(t,e,n)=>e==="__v_raw"?t:gi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ct(r)&&!Ct(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Od(t){return ls(t)?t:new Proxy(t,Og)}class Fg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ys-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return Md(this),!0}get value(){const e=this.dep.track();return bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bg(t,e,n=!1){let i,r;return Ve(t)?i=t:(i=t.get,r=t.set),new Fg(i,r,n)}const $s={},Oa=new WeakMap;let Bi;function zg(t,e=!1,n=Bi){if(n){let i=Oa.get(n);i||Oa.set(n,i=[]),i.push(t)}}function kg(t,e,n=rt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:dn(x)||r===!1||r===0?di(x,1):di(x);let u,f,h,p,M=!1,y=!1;if(Ct(t)?(f=()=>t.value,M=dn(t)):ls(t)?(f=()=>c(t),M=!0):He(t)?(y=!0,M=t.some(x=>ls(x)||dn(x)),f=()=>t.map(x=>{if(Ct(x))return x.value;if(ls(x))return c(x);if(Ve(x))return l?l(x,2):x()})):Ve(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ti();try{h()}finally{wi()}}const x=Bi;Bi=u;try{return l?l(t,3,[p]):t(p)}finally{Bi=x}}:f=wn,e&&r){const x=f,P=r===!0?1/0:r;f=()=>di(x(),P)}const m=hg(),d=()=>{u.stop(),m&&Pc(m.effects,u)};if(s&&e){const x=e;e=(...P)=>{x(...P),d()}}let _=y?new Array(t.length).fill($s):$s;const g=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(r||M||(y?P.some((T,w)=>xi(T,_[w])):xi(P,_))){h&&h();const T=Bi;Bi=u;try{const w=[P,_===$s?void 0:y&&_[0]===$s?[]:_,p];l?l(e,3,w):e(...w),_=P}finally{Bi=T}}}else u.run()};return a&&a(g),u=new xd(f),u.scheduler=o?()=>o(g,!1):g,p=x=>zg(x,!1,u),h=u.onStop=()=>{const x=Oa.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Oa.delete(u)}},e?i?g(!0):_=u.run():o?o(g.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function di(t,e=1/0,n){if(e<=0||!ut(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ct(t))di(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)di(t[i],e,n);else if(cd(t)||Tr(t))t.forEach(i=>{di(i,e,n)});else if(hd(t)){for(const i in t)di(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&di(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ds(t,e,n,i){try{return i?t(...i):t()}catch(r){to(r,e,n)}}function Cn(t,e,n,i){if(Ve(t)){const r=Ds(t,e,n,i);return r&&ud(r)&&r.catch(s=>{to(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Cn(t[s],e,n,i));return r}}function to(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||rt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ti(),Ds(s,null,10,[t,l,c]),wi();return}}Hg(t,n,r,i,o)}function Hg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}let Ss=!1,yl=!1;const Ot=[];let xn=0;const wr=[];let ci=null,yr=0;const Fd=Promise.resolve();let Wc=null;function Bd(t){const e=Wc||Fd;return t?e.then(this?t.bind(this):t):e}function Vg(t){let e=Ss?xn+1:0,n=Ot.length;for(;e<n;){const i=e+n>>>1,r=Ot[i],s=Es(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Xc(t){if(!(t.flags&1)){const e=Es(t),n=Ot[Ot.length-1];!n||!(t.flags&2)&&e>=Es(n)?Ot.push(t):Ot.splice(Vg(e),0,t),t.flags|=1,zd()}}function zd(){!Ss&&!yl&&(yl=!0,Wc=Fd.then(Hd))}function Gg(t){He(t)?wr.push(...t):ci&&t.id===-1?ci.splice(yr+1,0,t):t.flags&1||(wr.push(t),t.flags|=1),zd()}function Hu(t,e,n=Ss?xn+1:0){for(;n<Ot.length;n++){const i=Ot[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ot.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function kd(t){if(wr.length){const e=[...new Set(wr)].sort((n,i)=>Es(n)-Es(i));if(wr.length=0,ci){ci.push(...e);return}for(ci=e,yr=0;yr<ci.length;yr++){const n=ci[yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ci=null,yr=0}}const Es=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hd(t){yl=!1,Ss=!0;try{for(xn=0;xn<Ot.length;xn++){const e=Ot[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<Ot.length;xn++){const e=Ot[xn];e&&(e.flags&=-2)}xn=0,Ot.length=0,kd(),Ss=!1,Wc=null,(Ot.length||wr.length)&&Hd()}}let un=null,Vd=null;function Fa(t){const e=un;return un=t,Vd=t&&t.type.__scopeId||null,e}function Gd(t,e=un,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ku(-1);const s=Fa(e);let o;try{o=t(...r)}finally{Fa(s),i._d&&Ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Pi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ti(),Cn(l,n,8,[t.el,a,t,e]),wi())}}const Wg=Symbol("_vte"),Xg=t=>t.__isTeleport;function Yc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Yc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function no(t,e){return Ve(t)?bt({name:t.name},e,{setup:t}):t}function Wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ml(t,e,n,i,r=!1){if(He(t)){t.forEach((M,y)=>Ml(M,e&&(He(e)?e[y]:e),n,i,r));return}if(cs(i)&&!r)return;const s=i.shapeFlag&4?Kc(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState,h=$e(f),p=f===rt?()=>!1:M=>et(h,M);if(c!=null&&c!==l&&(_t(c)?(u[c]=null,p(c)&&(f[c]=null)):Ct(c)&&(c.value=null)),Ve(l))Ds(l,a,12,[o,u]);else{const M=_t(l),y=Ct(l);if(M||y){const m=()=>{if(t.f){const d=M?p(l)?f[l]:u[l]:l.value;r?He(d)&&Pc(d,s):He(d)?d.includes(s)||d.push(s):M?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else M?(u[l]=o,p(l)&&(f[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Xt(m,n)):m()}}}const cs=t=>!!t.type.__asyncLoader,Xd=t=>t.type.__isKeepAlive;function Yg(t,e){Yd(t,"a",e)}function qg(t,e){Yd(t,"da",e)}function Yd(t,e,n=Rt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(io(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Xd(r.parent.vnode)&&jg(i,e,n,r),r=r.parent}}function jg(t,e,n,i){const r=io(e,t,i,!0);$d(()=>{Pc(i[e],r)},n)}function io(t,e,n=Rt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ti();const a=Us(n),l=Cn(e,n,t,o);return a(),wi(),l});return i?r.unshift(s):r.push(s),s}}const Kn=t=>(e,n=Rt)=>{(!lo||t==="sp")&&io(t,(...i)=>e(...i),n)},$g=Kn("bm"),qd=Kn("m"),Kg=Kn("bu"),Zg=Kn("u"),jd=Kn("bum"),$d=Kn("um"),Jg=Kn("sp"),Qg=Kn("rtg"),e0=Kn("rtc");function t0(t,e=Rt){io("ec",t,e)}const n0="components";function i0(t,e){return s0(n0,t,!0,e)||t}const r0=Symbol.for("v-ndc");function s0(t,e,n=!0,i=!1){const r=un||Rt;if(r){const s=r.type;{const a=q0(s,!1);if(a&&(a===e||a===pn(e)||a===Ja(pn(e))))return s}const o=Vu(r[t]||s[t],e)||Vu(r.appContext[t],e);return!o&&i?s:o}}function Vu(t,e){return t&&(t[e]||t[pn(e)]||t[Ja(pn(e))])}const Sl=t=>t?mp(t)?Kc(t):Sl(t.parent):null,us=bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qc(t),$forceUpdate:t=>t.f||(t.f=()=>{Xc(t.update)}),$nextTick:t=>t.n||(t.n=Bd.bind(t.proxy)),$watch:t=>T0.bind(t)}),Po=(t,e)=>t!==rt&&!t.__isScriptSetup&&et(t,e),a0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Po(i,e))return o[e]=1,i[e];if(r!==rt&&et(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&et(c,e))return o[e]=3,s[e];if(n!==rt&&et(n,e))return o[e]=4,n[e];El&&(o[e]=0)}}const u=us[e];let f,h;if(u)return e==="$attrs"&&Lt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==rt&&et(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,et(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Po(r,e)?(r[e]=n,!0):i!==rt&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==rt&&et(t,o)||Po(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(us,o)||et(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gu(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function o0(t){const e=qc(t),n=t.proxy,i=t.ctx;El=!1,e.beforeCreate&&Wu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:M,activated:y,deactivated:m,beforeDestroy:d,beforeUnmount:_,destroyed:g,unmounted:x,render:P,renderTracked:T,renderTriggered:w,errorCaptured:L,serverPrefetch:E,expose:S,inheritAttrs:I,components:z,directives:N,filters:F}=e;if(c&&l0(c,i,null),o)for(const Z in o){const G=o[Z];Ve(G)&&(i[Z]=G.bind(n))}if(r){const Z=r.call(n,n);ut(Z)&&(t.data=eo(Z))}if(El=!0,s)for(const Z in s){const G=s[Z],he=Ve(G)?G.bind(n,n):Ve(G.get)?G.get.bind(n,n):wn,ue=!Ve(G)&&Ve(G.set)?G.set.bind(n):wn,ge=gt({get:he,set:ue});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ee=>ge.value=Ee})}if(a)for(const Z in a)Kd(a[Z],i,n,Z);if(l){const Z=Ve(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(G=>{Ea(G,Z[G])})}u&&Wu(u,t,"c");function V(Z,G){He(G)?G.forEach(he=>Z(he.bind(n))):G&&Z(G.bind(n))}if(V($g,f),V(qd,h),V(Kg,p),V(Zg,M),V(Yg,y),V(qg,m),V(t0,L),V(e0,T),V(Qg,w),V(jd,_),V($d,x),V(Jg,E),He(S))if(S.length){const Z=t.exposed||(t.exposed={});S.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:he=>n[G]=he})})}else t.exposed||(t.exposed={});P&&t.render===wn&&(t.render=P),I!=null&&(t.inheritAttrs=I),z&&(t.components=z),N&&(t.directives=N),E&&Wd(t)}function l0(t,e,n=wn){He(t)&&(t=bl(t));for(const i in t){const r=t[i];let s;ut(r)?"default"in r?s=Yn(r.from||i,r.default,!0):s=Yn(r.from||i):s=Yn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Wu(t,e,n){Cn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Kd(t,e,n,i){let r=i.includes(".")?up(n,i):()=>n[i];if(_t(t)){const s=e[t];Ve(s)&&fs(r,s)}else if(Ve(t))fs(r,t.bind(n));else if(ut(t))if(He(t))t.forEach(s=>Kd(s,e,n,i));else{const s=Ve(t.handler)?t.handler.bind(n):e[t.handler];Ve(s)&&fs(r,s,t)}}function qc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ba(l,c,o,!0)),Ba(l,e,o)),ut(e)&&s.set(e,l),l}function Ba(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ba(t,s,n,!0),r&&r.forEach(o=>Ba(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=c0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const c0={data:Xu,props:Yu,emits:Yu,methods:ns,computed:ns,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:ns,directives:ns,watch:f0,provide:Xu,inject:u0};function Xu(t,e){return e?t?function(){return bt(Ve(t)?t.call(this,this):t,Ve(e)?e.call(this,this):e)}:e:t}function u0(t,e){return ns(bl(t),bl(e))}function bl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function ns(t,e){return t?bt(Object.create(null),t,e):e}function Yu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:bt(Object.create(null),Gu(t),Gu(e??{})):e}function f0(t,e){if(!t)return e;if(!e)return t;const n=bt(Object.create(null),t);for(const i in e)n[i]=It(t[i],e[i]);return n}function Zd(){return{app:null,config:{isNativeTag:Qm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let h0=0;function d0(t,e){return function(i,r=null){Ve(i)||(i=bt({},i)),r!=null&&!ut(r)&&(r=null);const s=Zd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:h0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ve(u.install)?(o.add(u),u.install(c,...f)):Ve(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Et(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Kc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Cn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Rr;Rr=c;try{return u()}finally{Rr=f}}};return c}}let Rr=null;function Ea(t,e){if(Rt){let n=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===n&&(n=Rt.provides=Object.create(i)),n[t]=e}}function Yn(t,e,n=!1){const i=Rt||un;if(i||Rr){const r=Rr?Rr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ve(e)?e.call(i&&i.proxy):e}}const Jd={},Qd=()=>Object.create(Jd),ep=t=>Object.getPrototypeOf(t)===Jd;function p0(t,e,n,i=!1){const r={},s=Qd();t.propsDefaults=Object.create(null),tp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Dd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function m0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=$e(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ro(t.emitsOptions,h))continue;const p=e[h];if(l)if(et(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const M=pn(h);r[M]=Al(l,a,M,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{tp(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!et(e,f)&&((u=Qi(f))===f||!et(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Al(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&Xn(t.attrs,"set","")}function tp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&et(r,u=pn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ro(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=$e(n),c=a||rt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Al(r,l,f,c[f],t,!et(c,f))}}return o}function Al(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ve(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Us(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Qi(n))&&(i=!0))}return i}const g0=new WeakMap;function np(t,e,n=!1){const i=n?g0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ve(t)){const u=f=>{l=!0;const[h,p]=np(f,e,!0);bt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ut(t)&&i.set(t,Ar),Ar;if(He(s))for(let u=0;u<s.length;u++){const f=pn(s[u]);qu(f)&&(o[f]=rt)}else if(s)for(const u in s){const f=pn(u);if(qu(f)){const h=s[u],p=o[f]=He(h)||Ve(h)?{type:h}:bt({},h),M=p.type;let y=!1,m=!0;if(He(M))for(let d=0;d<M.length;++d){const _=M[d],g=Ve(_)&&_.name;if(g==="Boolean"){y=!0;break}else g==="String"&&(m=!1)}else y=Ve(M)&&M.name==="Boolean";p[0]=y,p[1]=m,(y||et(p,"default"))&&a.push(f)}}const c=[o,a];return ut(t)&&i.set(t,c),c}function qu(t){return t[0]!=="$"&&!as(t)}const ip=t=>t[0]==="_"||t==="$stable",jc=t=>He(t)?t.map(Sn):[Sn(t)],_0=(t,e,n)=>{if(e._n)return e;const i=Gd((...r)=>jc(e(...r)),n);return i._c=!1,i},rp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(ip(r))continue;const s=t[r];if(Ve(s))e[r]=_0(r,s,i);else if(s!=null){const o=jc(s);e[r]=()=>o}}},sp=(t,e)=>{const n=jc(e);t.slots.default=()=>n},ap=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},v0=(t,e,n)=>{const i=t.slots=Qd();if(t.vnode.shapeFlag&32){const r=e._;r?(ap(i,e,n),n&&dd(i,"_",r,!0)):rp(e,i)}else e&&sp(t,e)},x0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:ap(r,e,n):(s=!e.$stable,rp(e,r)),o=e}else e&&(sp(t,e),o={default:1});if(s)for(const a in r)!ip(a)&&o[a]==null&&delete r[a]},Xt=D0;function y0(t){return M0(t)}function M0(t,e){const n=pd();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=wn,insertStaticContent:M}=t,y=(R,C,k,$=null,te=null,Q=null,se=void 0,b=null,v=!!C.dynamicChildren)=>{if(R===C)return;R&&!jr(R,C)&&($=O(R),Ee(R,te,Q,!0),R=null),C.patchFlag===-2&&(v=!1,C.dynamicChildren=null);const{type:U,ref:j,shapeFlag:X}=C;switch(U){case so:m(R,C,k,$);break;case bs:d(R,C,k,$);break;case ba:R==null&&_(C,k,$,se);break;case Mn:z(R,C,k,$,te,Q,se,b,v);break;default:X&1?P(R,C,k,$,te,Q,se,b,v):X&6?N(R,C,k,$,te,Q,se,b,v):(X&64||X&128)&&U.process(R,C,k,$,te,Q,se,b,v,fe)}j!=null&&te&&Ml(j,R&&R.ref,Q,C||R,!C)},m=(R,C,k,$)=>{if(R==null)i(C.el=a(C.children),k,$);else{const te=C.el=R.el;C.children!==R.children&&c(te,C.children)}},d=(R,C,k,$)=>{R==null?i(C.el=l(C.children||""),k,$):C.el=R.el},_=(R,C,k,$)=>{[R.el,R.anchor]=M(R.children,C,k,$,R.el,R.anchor)},g=({el:R,anchor:C},k,$)=>{let te;for(;R&&R!==C;)te=h(R),i(R,k,$),R=te;i(C,k,$)},x=({el:R,anchor:C})=>{let k;for(;R&&R!==C;)k=h(R),r(R),R=k;r(C)},P=(R,C,k,$,te,Q,se,b,v)=>{C.type==="svg"?se="svg":C.type==="math"&&(se="mathml"),R==null?T(C,k,$,te,Q,se,b,v):E(R,C,te,Q,se,b,v)},T=(R,C,k,$,te,Q,se,b)=>{let v,U;const{props:j,shapeFlag:X,transition:q,dirs:pe}=R;if(v=R.el=o(R.type,Q,j&&j.is,j),X&8?u(v,R.children):X&16&&L(R.children,v,null,$,te,Lo(R,Q),se,b),pe&&Pi(R,null,$,"created"),w(v,R,R.scopeId,se,$),j){for(const me in j)me!=="value"&&!as(me)&&s(v,me,null,j[me],Q,$);"value"in j&&s(v,"value",null,j.value,Q),(U=j.onVnodeBeforeMount)&&_n(U,$,R)}pe&&Pi(R,null,$,"beforeMount");const oe=S0(te,q);oe&&q.beforeEnter(v),i(v,C,k),((U=j&&j.onVnodeMounted)||oe||pe)&&Xt(()=>{U&&_n(U,$,R),oe&&q.enter(v),pe&&Pi(R,null,$,"mounted")},te)},w=(R,C,k,$,te)=>{if(k&&p(R,k),$)for(let Q=0;Q<$.length;Q++)p(R,$[Q]);if(te){let Q=te.subTree;if(C===Q||hp(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const se=te.vnode;w(R,se,se.scopeId,se.slotScopeIds,te.parent)}}},L=(R,C,k,$,te,Q,se,b,v=0)=>{for(let U=v;U<R.length;U++){const j=R[U]=b?ui(R[U]):Sn(R[U]);y(null,j,C,k,$,te,Q,se,b)}},E=(R,C,k,$,te,Q,se)=>{const b=C.el=R.el;let{patchFlag:v,dynamicChildren:U,dirs:j}=C;v|=R.patchFlag&16;const X=R.props||rt,q=C.props||rt;let pe;if(k&&Li(k,!1),(pe=q.onVnodeBeforeUpdate)&&_n(pe,k,C,R),j&&Pi(C,R,k,"beforeUpdate"),k&&Li(k,!0),(X.innerHTML&&q.innerHTML==null||X.textContent&&q.textContent==null)&&u(b,""),U?S(R.dynamicChildren,U,b,k,$,Lo(C,te),Q):se||G(R,C,b,null,k,$,Lo(C,te),Q,!1),v>0){if(v&16)I(b,X,q,k,te);else if(v&2&&X.class!==q.class&&s(b,"class",null,q.class,te),v&4&&s(b,"style",X.style,q.style,te),v&8){const oe=C.dynamicProps;for(let me=0;me<oe.length;me++){const be=oe[me],de=X[be],ye=q[be];(ye!==de||be==="value")&&s(b,be,de,ye,te,k)}}v&1&&R.children!==C.children&&u(b,C.children)}else!se&&U==null&&I(b,X,q,k,te);((pe=q.onVnodeUpdated)||j)&&Xt(()=>{pe&&_n(pe,k,C,R),j&&Pi(C,R,k,"updated")},$)},S=(R,C,k,$,te,Q,se)=>{for(let b=0;b<C.length;b++){const v=R[b],U=C[b],j=v.el&&(v.type===Mn||!jr(v,U)||v.shapeFlag&70)?f(v.el):k;y(v,U,j,null,$,te,Q,se,!0)}},I=(R,C,k,$,te)=>{if(C!==k){if(C!==rt)for(const Q in C)!as(Q)&&!(Q in k)&&s(R,Q,C[Q],null,te,$);for(const Q in k){if(as(Q))continue;const se=k[Q],b=C[Q];se!==b&&Q!=="value"&&s(R,Q,b,se,te,$)}"value"in k&&s(R,"value",C.value,k.value,te)}},z=(R,C,k,$,te,Q,se,b,v)=>{const U=C.el=R?R.el:a(""),j=C.anchor=R?R.anchor:a("");let{patchFlag:X,dynamicChildren:q,slotScopeIds:pe}=C;pe&&(b=b?b.concat(pe):pe),R==null?(i(U,k,$),i(j,k,$),L(C.children||[],k,j,te,Q,se,b,v)):X>0&&X&64&&q&&R.dynamicChildren?(S(R.dynamicChildren,q,k,te,Q,se,b),(C.key!=null||te&&C===te.subTree)&&op(R,C,!0)):G(R,C,k,j,te,Q,se,b,v)},N=(R,C,k,$,te,Q,se,b,v)=>{C.slotScopeIds=b,R==null?C.shapeFlag&512?te.ctx.activate(C,k,$,se,v):F(C,k,$,te,Q,se,v):K(R,C,v)},F=(R,C,k,$,te,Q,se)=>{const b=R.component=V0(R,$,te);if(Xd(R)&&(b.ctx.renderer=fe),G0(b,!1,se),b.asyncDep){if(te&&te.registerDep(b,V,se),!R.el){const v=b.subTree=Et(bs);d(null,v,C,k)}}else V(b,R,C,k,te,Q,se)},K=(R,C,k)=>{const $=C.component=R.component;if(L0(R,C,k))if($.asyncDep&&!$.asyncResolved){Z($,C,k);return}else $.next=C,$.update();else C.el=R.el,$.vnode=C},V=(R,C,k,$,te,Q,se)=>{const b=()=>{if(R.isMounted){let{next:X,bu:q,u:pe,parent:oe,vnode:me}=R;{const Ie=lp(R);if(Ie){X&&(X.el=me.el,Z(R,X,se)),Ie.asyncDep.then(()=>{R.isUnmounted||b()});return}}let be=X,de;Li(R,!1),X?(X.el=me.el,Z(R,X,se)):X=me,q&&Ao(q),(de=X.props&&X.props.onVnodeBeforeUpdate)&&_n(de,oe,X,me),Li(R,!0);const ye=Io(R),Be=R.subTree;R.subTree=ye,y(Be,ye,f(Be.el),O(Be),R,te,Q),X.el=ye.el,be===null&&I0(R,ye.el),pe&&Xt(pe,te),(de=X.props&&X.props.onVnodeUpdated)&&Xt(()=>_n(de,oe,X,me),te)}else{let X;const{el:q,props:pe}=C,{bm:oe,m:me,parent:be,root:de,type:ye}=R,Be=cs(C);if(Li(R,!1),oe&&Ao(oe),!Be&&(X=pe&&pe.onVnodeBeforeMount)&&_n(X,be,C),Li(R,!0),q&&D){const Ie=()=>{R.subTree=Io(R),D(q,R.subTree,R,te,null)};Be&&ye.__asyncHydrate?ye.__asyncHydrate(q,R,Ie):Ie()}else{de.ce&&de.ce._injectChildStyle(ye);const Ie=R.subTree=Io(R);y(null,Ie,k,$,R,te,Q),C.el=Ie.el}if(me&&Xt(me,te),!Be&&(X=pe&&pe.onVnodeMounted)){const Ie=C;Xt(()=>_n(X,be,Ie),te)}(C.shapeFlag&256||be&&cs(be.vnode)&&be.vnode.shapeFlag&256)&&R.a&&Xt(R.a,te),R.isMounted=!0,C=k=$=null}};R.scope.on();const v=R.effect=new xd(b);R.scope.off();const U=R.update=v.run.bind(v),j=R.job=v.runIfDirty.bind(v);j.i=R,j.id=R.uid,v.scheduler=()=>Xc(j),Li(R,!0),U()},Z=(R,C,k)=>{C.component=R;const $=R.vnode.props;R.vnode=C,R.next=null,m0(R,C.props,$,k),x0(R,C.children,k),Ti(),Hu(R),wi()},G=(R,C,k,$,te,Q,se,b,v=!1)=>{const U=R&&R.children,j=R?R.shapeFlag:0,X=C.children,{patchFlag:q,shapeFlag:pe}=C;if(q>0){if(q&128){ue(U,X,k,$,te,Q,se,b,v);return}else if(q&256){he(U,X,k,$,te,Q,se,b,v);return}}pe&8?(j&16&&_e(U,te,Q),X!==U&&u(k,X)):j&16?pe&16?ue(U,X,k,$,te,Q,se,b,v):_e(U,te,Q,!0):(j&8&&u(k,""),pe&16&&L(X,k,$,te,Q,se,b,v))},he=(R,C,k,$,te,Q,se,b,v)=>{R=R||Ar,C=C||Ar;const U=R.length,j=C.length,X=Math.min(U,j);let q;for(q=0;q<X;q++){const pe=C[q]=v?ui(C[q]):Sn(C[q]);y(R[q],pe,k,null,te,Q,se,b,v)}U>j?_e(R,te,Q,!0,!1,X):L(C,k,$,te,Q,se,b,v,X)},ue=(R,C,k,$,te,Q,se,b,v)=>{let U=0;const j=C.length;let X=R.length-1,q=j-1;for(;U<=X&&U<=q;){const pe=R[U],oe=C[U]=v?ui(C[U]):Sn(C[U]);if(jr(pe,oe))y(pe,oe,k,null,te,Q,se,b,v);else break;U++}for(;U<=X&&U<=q;){const pe=R[X],oe=C[q]=v?ui(C[q]):Sn(C[q]);if(jr(pe,oe))y(pe,oe,k,null,te,Q,se,b,v);else break;X--,q--}if(U>X){if(U<=q){const pe=q+1,oe=pe<j?C[pe].el:$;for(;U<=q;)y(null,C[U]=v?ui(C[U]):Sn(C[U]),k,oe,te,Q,se,b,v),U++}}else if(U>q)for(;U<=X;)Ee(R[U],te,Q,!0),U++;else{const pe=U,oe=U,me=new Map;for(U=oe;U<=q;U++){const Ne=C[U]=v?ui(C[U]):Sn(C[U]);Ne.key!=null&&me.set(Ne.key,U)}let be,de=0;const ye=q-oe+1;let Be=!1,Ie=0;const Ae=new Array(ye);for(U=0;U<ye;U++)Ae[U]=0;for(U=pe;U<=X;U++){const Ne=R[U];if(de>=ye){Ee(Ne,te,Q,!0);continue}let qe;if(Ne.key!=null)qe=me.get(Ne.key);else for(be=oe;be<=q;be++)if(Ae[be-oe]===0&&jr(Ne,C[be])){qe=be;break}qe===void 0?Ee(Ne,te,Q,!0):(Ae[qe-oe]=U+1,qe>=Ie?Ie=qe:Be=!0,y(Ne,C[qe],k,null,te,Q,se,b,v),de++)}const ze=Be?E0(Ae):Ar;for(be=ze.length-1,U=ye-1;U>=0;U--){const Ne=oe+U,qe=C[Ne],B=Ne+1<j?C[Ne+1].el:$;Ae[U]===0?y(null,qe,k,B,te,Q,se,b,v):Be&&(be<0||U!==ze[be]?ge(qe,k,B,2):be--)}}},ge=(R,C,k,$,te=null)=>{const{el:Q,type:se,transition:b,children:v,shapeFlag:U}=R;if(U&6){ge(R.component.subTree,C,k,$);return}if(U&128){R.suspense.move(C,k,$);return}if(U&64){se.move(R,C,k,fe);return}if(se===Mn){i(Q,C,k);for(let X=0;X<v.length;X++)ge(v[X],C,k,$);i(R.anchor,C,k);return}if(se===ba){g(R,C,k);return}if($!==2&&U&1&&b)if($===0)b.beforeEnter(Q),i(Q,C,k),Xt(()=>b.enter(Q),te);else{const{leave:X,delayLeave:q,afterLeave:pe}=b,oe=()=>i(Q,C,k),me=()=>{X(Q,()=>{oe(),pe&&pe()})};q?q(Q,oe,me):me()}else i(Q,C,k)},Ee=(R,C,k,$=!1,te=!1)=>{const{type:Q,props:se,ref:b,children:v,dynamicChildren:U,shapeFlag:j,patchFlag:X,dirs:q,cacheIndex:pe}=R;if(X===-2&&(te=!1),b!=null&&Ml(b,null,k,R,!0),pe!=null&&(C.renderCache[pe]=void 0),j&256){C.ctx.deactivate(R);return}const oe=j&1&&q,me=!cs(R);let be;if(me&&(be=se&&se.onVnodeBeforeUnmount)&&_n(be,C,R),j&6)ce(R.component,k,$);else{if(j&128){R.suspense.unmount(k,$);return}oe&&Pi(R,null,C,"beforeUnmount"),j&64?R.type.remove(R,C,k,fe,$):U&&!U.hasOnce&&(Q!==Mn||X>0&&X&64)?_e(U,C,k,!1,!0):(Q===Mn&&X&384||!te&&j&16)&&_e(v,C,k),$&&we(R)}(me&&(be=se&&se.onVnodeUnmounted)||oe)&&Xt(()=>{be&&_n(be,C,R),oe&&Pi(R,null,C,"unmounted")},k)},we=R=>{const{type:C,el:k,anchor:$,transition:te}=R;if(C===Mn){ne(k,$);return}if(C===ba){x(R);return}const Q=()=>{r(k),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(R.shapeFlag&1&&te&&!te.persisted){const{leave:se,delayLeave:b}=te,v=()=>se(k,Q);b?b(R.el,Q,v):v()}else Q()},ne=(R,C)=>{let k;for(;R!==C;)k=h(R),r(R),R=k;r(C)},ce=(R,C,k)=>{const{bum:$,scope:te,job:Q,subTree:se,um:b,m:v,a:U}=R;ju(v),ju(U),$&&Ao($),te.stop(),Q&&(Q.flags|=8,Ee(se,R,C,k)),b&&Xt(b,C),Xt(()=>{R.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},_e=(R,C,k,$=!1,te=!1,Q=0)=>{for(let se=Q;se<R.length;se++)Ee(R[se],C,k,$,te)},O=R=>{if(R.shapeFlag&6)return O(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=h(R.anchor||R.el),k=C&&C[Wg];return k?h(k):C};let ie=!1;const re=(R,C,k)=>{R==null?C._vnode&&Ee(C._vnode,null,null,!0):y(C._vnode||null,R,C,null,null,null,k),C._vnode=R,ie||(ie=!0,Hu(),kd(),ie=!1)},fe={p:y,um:Ee,m:ge,r:we,mt:F,mc:L,pc:G,pbc:S,n:O,o:t};let Le,D;return{render:re,hydrate:Le,createApp:d0(re,Le)}}function Lo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Li({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function S0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function op(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ui(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&op(o,a)),a.type===so&&(a.el=o.el)}}function E0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function lp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lp(e)}function ju(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const b0=Symbol.for("v-scx"),A0=()=>Yn(b0);function fs(t,e,n){return cp(t,e,n)}function cp(t,e,n=rt){const{immediate:i,deep:r,flush:s,once:o}=n,a=bt({},n);let l;if(lo)if(s==="sync"){const h=A0();l=h.__watcherHandles||(h.__watcherHandles=[])}else if(!e||i)a.once=!0;else{const h=()=>{};return h.stop=wn,h.resume=wn,h.pause=wn,h}const c=Rt;a.call=(h,p,M)=>Cn(h,c,p,M);let u=!1;s==="post"?a.scheduler=h=>{Xt(h,c&&c.suspense)}:s!=="sync"&&(u=!0,a.scheduler=(h,p)=>{p?h():Xc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),u&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=kg(t,e,a);return l&&l.push(f),f}function T0(t,e,n){const i=this.proxy,r=_t(t)?t.includes(".")?up(i,t):()=>i[t]:t.bind(i,i);let s;Ve(e)?s=e:(s=e.handler,n=e);const o=Us(this),a=cp(r,s.bind(i),n);return o(),a}function up(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const w0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${pn(e)}Modifiers`]||t[`${Qi(e)}Modifiers`];function R0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||rt;let r=n;const s=e.startsWith("update:"),o=s&&w0(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>_t(u)?u.trim():u)),o.number&&(r=n.map(rg)));let a,l=i[a=bo(e)]||i[a=bo(pn(e))];!l&&s&&(l=i[a=bo(Qi(e))]),l&&Cn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(c,t,6,r)}}function fp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ve(t)){const l=c=>{const u=fp(c,e,!0);u&&(a=!0,bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ut(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):bt(o,s),ut(t)&&i.set(t,o),o)}function ro(t,e){return!t||!$a(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,Qi(e))||et(t,e))}function Io(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:M,inheritAttrs:y}=t,m=Fa(t);let d,_;try{if(n.shapeFlag&4){const x=r||i,P=x;d=Sn(c.call(P,x,u,f,p,h,M)),_=a}else{const x=e;d=Sn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),_=e.props?a:C0(a)}}catch(x){hs.length=0,to(x,t,1),d=Et(bs)}let g=d;if(_&&y!==!1){const x=Object.keys(_),{shapeFlag:P}=g;x.length&&P&7&&(s&&x.some(Cc)&&(_=P0(_,s)),g=Dr(g,_,!1,!0))}return n.dirs&&(g=Dr(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&Yc(g,n.transition),d=g,Fa(m),d}const C0=t=>{let e;for(const n in t)(n==="class"||n==="style"||$a(n))&&((e||(e={}))[n]=t[n]);return e},P0=(t,e)=>{const n={};for(const i in t)(!Cc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function L0(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ro(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ro(n,s))return!0}return!1}function I0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const hp=t=>t.__isSuspense;function D0(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Gg(t)}const Mn=Symbol.for("v-fgt"),so=Symbol.for("v-txt"),bs=Symbol.for("v-cmt"),ba=Symbol.for("v-stc"),hs=[];let jt=null;function ao(t=!1){hs.push(jt=t?null:[])}function U0(){hs.pop(),jt=hs[hs.length-1]||null}let As=1;function Ku(t){As+=t,t<0&&jt&&(jt.hasOnce=!0)}function N0(t){return t.dynamicChildren=As>0?jt||Ar:null,U0(),As>0&&jt&&jt.push(t),t}function oo(t,e,n,i,r,s){return N0($t(t,e,n,i,r,s,!0))}function Tl(t){return t?t.__v_isVNode===!0:!1}function jr(t,e){return t.type===e.type&&t.key===e.key}const dp=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_t(t)||Ct(t)||Ve(t)?{i:un,r:t,k:e,f:!!n}:t:null);function $t(t,e=null,n=null,i=0,r=null,s=t===Mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&Aa(e),scopeId:Vd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return a?($c(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=_t(n)?8:16),As>0&&!o&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const Et=O0;function O0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===r0)&&(t=bs),Tl(t)){const a=Dr(t,e,!0);return n&&$c(a,n),As>0&&!s&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag=-2,a}if(j0(t)&&(t=t.__vccOpts),e){e=F0(e);let{class:a,style:l}=e;a&&!_t(a)&&(e.class=Dc(a)),ut(l)&&(Vc(l)&&!He(l)&&(l=bt({},l)),e.style=Ic(l))}const o=_t(t)?1:hp(t)?128:Xg(t)?64:ut(t)?4:Ve(t)?2:0;return $t(t,e,n,i,r,o,s,!0)}function F0(t){return t?Vc(t)||ep(t)?bt({},t):t:null}function Dr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?z0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dp(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Aa(e)):[s,Aa(e)]:Aa(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Dr(t.ssContent),ssFallback:t.ssFallback&&Dr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Yc(u,l.clone(u)),u}function pp(t=" ",e=0){return Et(so,null,t,e)}function B0(t,e){const n=Et(ba,null,t);return n.staticCount=e,n}function Sn(t){return t==null||typeof t=="boolean"?Et(bs):He(t)?Et(Mn,null,t.slice()):typeof t=="object"?ui(t):Et(so,null,String(t))}function ui(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Dr(t)}function $c(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),$c(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ep(e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:un},n=32):(e=String(e),i&64?(n=16,e=[pp(e)]):n=8);t.children=e,t.shapeFlag|=n}function z0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dc([e.class,i.class]));else if(r==="style")e.style=Ic([e.style,i.style]);else if($a(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _n(t,e,n,i=null){Cn(t,e,7,[n,i])}const k0=Zd();let H0=0;function V0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||k0,s={uid:H0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:np(i,r),emitsOptions:fp(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=R0.bind(null,s),t.ce&&t.ce(s),s}let Rt=null,za,wl;{const t=pd(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};za=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),wl=e("__VUE_SSR_SETTERS__",n=>lo=n)}const Us=t=>{const e=Rt;return za(t),t.scope.on(),()=>{t.scope.off(),za(e)}},Zu=()=>{Rt&&Rt.scope.off(),za(null)};function mp(t){return t.vnode.shapeFlag&4}let lo=!1;function G0(t,e=!1,n=!1){e&&wl(e);const{props:i,children:r}=t.vnode,s=mp(t);p0(t,i,s,e),v0(t,r,n);const o=s?W0(t,e):void 0;return e&&wl(!1),o}function W0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,a0);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Y0(t):null,s=Us(t);Ti();const o=Ds(i,t,0,[t.props,r]);if(wi(),s(),ud(o)){if(cs(t)||Wd(t),o.then(Zu,Zu),e)return o.then(a=>{Ju(t,a,e)}).catch(a=>{to(a,t,0)});t.asyncDep=o}else Ju(t,o,e)}else gp(t,e)}function Ju(t,e,n){Ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ut(e)&&(t.setupState=Od(e)),gp(t,n)}let Qu;function gp(t,e,n){const i=t.type;if(!t.render){if(!e&&Qu&&!i.render){const r=i.template||qc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=bt(bt({isCustomElement:s,delimiters:a},o),l);i.render=Qu(r,c)}}t.render=i.render||wn}{const r=Us(t);Ti();try{o0(t)}finally{wi(),r()}}}const X0={get(t,e){return Lt(t,"get",""),t[e]}};function Y0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,X0),slots:t.slots,emit:t.emit,expose:e}}function Kc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Od(Ug(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in us)return us[n](t)},has(e,n){return n in e||n in us}})):t.proxy}function q0(t,e=!0){return Ve(t)?t.displayName||t.name:t.name||e&&t.__name}function j0(t){return Ve(t)&&"__vccOpts"in t}const gt=(t,e)=>Bg(t,e,lo);function Zc(t,e,n){const i=arguments.length;return i===2?ut(e)&&!He(e)?Tl(e)?Et(t,null,[e]):Et(t,e):Et(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Tl(n)&&(n=[n]),Et(t,e,n))}const $0="3.5.8";/**
* @vue/runtime-dom v3.5.8
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const ef=typeof window<"u"&&window.trustedTypes;if(ef)try{Rl=ef.createPolicy("vue",{createHTML:t=>t})}catch{}const _p=Rl?t=>Rl.createHTML(t):t=>t,K0="http://www.w3.org/2000/svg",Z0="http://www.w3.org/1998/Math/MathML",Hn=typeof document<"u"?document:null,tf=Hn&&Hn.createElement("template"),J0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Hn.createElementNS(K0,t):e==="mathml"?Hn.createElementNS(Z0,t):n?Hn.createElement(t,{is:n}):Hn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Hn.createTextNode(t),createComment:t=>Hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{tf.innerHTML=_p(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=tf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Q0=Symbol("_vtc");function e_(t,e,n){const i=t[Q0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nf=Symbol("_vod"),t_=Symbol("_vsh"),n_=Symbol(""),i_=/(^|;)\s*display\s*:/;function r_(t,e,n){const i=t.style,r=_t(n);let s=!1;if(n&&!r){if(e)if(_t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ta(i,a,"")}else for(const o in e)n[o]==null&&Ta(i,o,"");for(const o in n)o==="display"&&(s=!0),Ta(i,o,n[o])}else if(r){if(e!==n){const o=i[n_];o&&(n+=";"+o),i.cssText=n,s=i_.test(n)}}else e&&t.removeAttribute("style");nf in t&&(t[nf]=s?i.display:"",t[t_]&&(i.display="none"))}const rf=/\s*!important$/;function Ta(t,e,n){if(He(n))n.forEach(i=>Ta(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=s_(t,e);rf.test(n)?t.setProperty(Qi(i),n.replace(rf,""),"important"):t[i]=n}}const sf=["Webkit","Moz","ms"],Do={};function s_(t,e){const n=Do[e];if(n)return n;let i=pn(e);if(i!=="filter"&&i in t)return Do[e]=i;i=Ja(i);for(let r=0;r<sf.length;r++){const s=sf[r]+i;if(s in t)return Do[e]=s}return e}const af="http://www.w3.org/1999/xlink";function of(t,e,n,i,r,s=ug(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(af,e.slice(6,e.length)):t.setAttributeNS(af,e,n):n==null||s&&!md(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ai(n)?String(n):n)}function a_(t,e,n,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_p(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=md(n):n==null&&o==="string"?(n="",s=!0):o==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}function o_(t,e,n,i){t.addEventListener(e,n,i)}function l_(t,e,n,i){t.removeEventListener(e,n,i)}const lf=Symbol("_vei");function c_(t,e,n,i,r=null){const s=t[lf]||(t[lf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=u_(e);if(i){const c=s[e]=d_(i,r);o_(t,a,c,l)}else o&&(l_(t,a,o,l),s[e]=void 0)}}const cf=/(?:Once|Passive|Capture)$/;function u_(t){let e;if(cf.test(t)){e={};let i;for(;i=t.match(cf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qi(t.slice(2)),e]}let Uo=0;const f_=Promise.resolve(),h_=()=>Uo||(f_.then(()=>Uo=0),Uo=Date.now());function d_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Cn(p_(i,n.value),e,5,[i])};return n.value=t,n.attached=h_(),n}function p_(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const uf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,m_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?e_(t,i,o):e==="style"?r_(t,n,i):$a(e)?Cc(e)||c_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):g_(t,e,i,o))?(a_(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&of(t,e,i,o,s,e!=="value")):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),of(t,e,i,o))};function g_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&uf(e)&&Ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return uf(e)&&_t(n)?!1:!!(e in t||t._isVueCE&&(/[A-Z]/.test(e)||!_t(n)))}const __=bt({patchProp:m_},J0);let ff;function v_(){return ff||(ff=y0(__))}const x_=(...t)=>{const e=v_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=M_(i);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,y_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function y_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function M_(t){return _t(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof document<"u";function vp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function S_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&vp(t.default)}const nt=Object.assign;function No(t,e){const n={};for(const i in e){const r=e[i];n[i]=mn(r)?r.map(t):t(r)}return n}const ds=()=>{},mn=Array.isArray,xp=/#/g,E_=/&/g,b_=/\//g,A_=/=/g,T_=/\?/g,yp=/\+/g,w_=/%5B/g,R_=/%5D/g,Mp=/%5E/g,C_=/%60/g,Sp=/%7B/g,P_=/%7C/g,Ep=/%7D/g,L_=/%20/g;function Jc(t){return encodeURI(""+t).replace(P_,"|").replace(w_,"[").replace(R_,"]")}function I_(t){return Jc(t).replace(Sp,"{").replace(Ep,"}").replace(Mp,"^")}function Cl(t){return Jc(t).replace(yp,"%2B").replace(L_,"+").replace(xp,"%23").replace(E_,"%26").replace(C_,"`").replace(Sp,"{").replace(Ep,"}").replace(Mp,"^")}function D_(t){return Cl(t).replace(A_,"%3D")}function U_(t){return Jc(t).replace(xp,"%23").replace(T_,"%3F")}function N_(t){return t==null?"":U_(t).replace(b_,"%2F")}function Ts(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const O_=/\/$/,F_=t=>t.replace(O_,"");function Oo(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=H_(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Ts(o)}}function B_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function z_(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],n.matched[r])&&bp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ur(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!k_(t[n],e[n]))return!1;return!0}function k_(t,e){return mn(t)?df(t,e):mn(e)?df(e,t):t===e}function df(t,e){return mn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function H_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(t){t.pop="pop",t.push="push"})(ws||(ws={}));var ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ps||(ps={}));function V_(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),F_(t)}const G_=/^[^#]+#/;function W_(t,e){return t.replace(G_,"#")+e}function X_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const co=()=>({left:window.scrollX,top:window.scrollY});function Y_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=X_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(t,e){return(history.state?history.state.position-e:-1)+t}const Pl=new Map;function q_(t,e){Pl.set(t,e)}function j_(t){const e=Pl.get(t);return Pl.delete(t),e}let $_=()=>location.protocol+"//"+location.host;function Ap(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),hf(l,"")}return hf(n,t)+i+r}function K_(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=Ap(t,location),M=n.value,y=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===M){o=null;return}m=y?h.position-y.position:0}else i(p);r.forEach(d=>{d(n.value,M,{delta:m,type:ws.pop,direction:m?m>0?ps.forward:ps.back:ps.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const M=r.indexOf(h);M>-1&&r.splice(M,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(nt({},h.state,{scroll:co()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function mf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?co():null}}function Z_(t){const{history:e,location:n}=window,i={value:Ap(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:$_()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=nt({},e.state,mf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=nt({},r.value,e.state,{forward:l,scroll:co()});s(u.current,u,!0);const f=nt({},mf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function J_(t){t=V_(t);const e=Z_(t),n=K_(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=nt({location:"",base:t,go:i,createHref:W_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Q_(t){return typeof t=="string"||t&&typeof t=="object"}function Tp(t){return typeof t=="string"||typeof t=="symbol"}const wp=Symbol("");var gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gf||(gf={}));function Nr(t,e){return nt(new Error,{type:t,[wp]:!0},e)}function Un(t,e){return t instanceof Error&&wp in t&&(e==null||!!(t.type&e))}const _f="[^/]+?",e1={sensitive:!1,strict:!1,start:!0,end:!0},t1=/[.+*?^${}()[\]/\\]/g;function n1(t,e){const n=nt({},e1,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(t1,"\\$&"),p+=40;else if(h.type===1){const{value:M,repeatable:y,optional:m,regexp:d}=h;s.push({name:M,repeatable:y,optional:m});const _=d||_f;if(_!==_f){p+=10;try{new RegExp(`(${_})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${M}" (${_}): `+x.message)}}let g=y?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(g=m&&c.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,p+=20,m&&(p+=-8),y&&(p+=-20),_===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",M=s[h-1];f[M.name]=p&&M.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:M,repeatable:y,optional:m}=p,d=M in c?c[M]:"";if(mn(d)&&!y)throw new Error(`Provided param "${M}" is an array but it is not repeatable (* or + modifiers)`);const _=mn(d)?d.join("/"):d;if(!_)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${M}"`);u+=_}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function i1(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Rp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=i1(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(vf(i))return 1;if(vf(r))return-1}return r.length-i.length}function vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const r1={type:0,value:""},s1=/[a-zA-Z0-9_]/;function a1(t){if(!t)return[[]];if(t==="/")return[[r1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:s1.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function o1(t,e,n){const i=n1(a1(t.path),n),r=nt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function l1(t,e){const n=[],i=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const M=!p,y=yf(f);y.aliasOf=p&&p.record;const m=Sf(e,f),d=[y];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of x)d.push(yf(nt({},y,{components:p?p.record.components:y.components,path:P,aliasOf:p?p.record:y})))}let _,g;for(const x of d){const{path:P}=x;if(h&&P[0]!=="/"){const T=h.record.path,w=T[T.length-1]==="/"?"":"/";x.path=h.record.path+(P&&w+P)}if(_=o1(x,h,m),p?p.alias.push(_):(g=g||_,g!==_&&g.alias.push(_),M&&f.name&&!Mf(_)&&o(f.name)),Cp(_)&&l(_),y.children){const T=y.children;for(let w=0;w<T.length;w++)s(T[w],_,p&&p.children[w])}p=p||_}return g?()=>{o(g)}:ds}function o(f){if(Tp(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=f1(f,n);n.splice(h,0,f),f.record.name&&!Mf(f)&&i.set(f.record.name,f)}function c(f,h){let p,M={},y,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Nr(1,{location:f});m=p.record.name,M=nt(xf(h.params,p.keys.filter(g=>!g.optional).concat(p.parent?p.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&xf(f.params,p.keys.map(g=>g.name))),y=p.stringify(M)}else if(f.path!=null)y=f.path,p=n.find(g=>g.re.test(y)),p&&(M=p.parse(y),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(g=>g.re.test(h.path)),!p)throw Nr(1,{location:f,currentLocation:h});m=p.record.name,M=nt({},h.params,f.params),y=p.stringify(M)}const d=[];let _=p;for(;_;)d.unshift(_.record),_=_.parent;return{name:m,path:y,params:M,matched:d,meta:u1(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function xf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function yf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:c1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function c1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u1(t){return t.reduce((e,n)=>nt(e,n.meta),{})}function Sf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function f1(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Rp(t,e[s])<0?i=s:n=s+1}const r=h1(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function h1(t){let e=t;for(;e=e.parent;)if(Cp(e)&&Rp(t,e)===0)return e}function Cp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function d1(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yp," "),o=s.indexOf("="),a=Ts(o<0?s:s.slice(0,o)),l=o<0?null:Ts(s.slice(o+1));if(a in e){let c=e[a];mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ef(t){let e="";for(let n in t){const i=t[n];if(n=D_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(i)?i.map(s=>s&&Cl(s)):[i&&Cl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function p1(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=mn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const m1=Symbol(""),bf=Symbol(""),Qc=Symbol(""),Pp=Symbol(""),Ll=Symbol("");function $r(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Nr(4,{from:n,to:e})):h instanceof Error?l(h):Q_(h)?l(Nr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Fo(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(vp(l)){const u=(l.__vccOpts||l)[e];u&&s.push(fi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=S_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&fi(p,n,i,o,a,r)()}))}}return s}function Af(t){const e=Yn(Qc),n=Yn(Pp),i=gt(()=>{const l=gi(t.to);return e.resolve(l)}),r=gt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ur.bind(null,u));if(h>-1)return h;const p=Tf(l[c-2]);return c>1&&Tf(u)===p&&f[f.length-1].path!==p?f.findIndex(Ur.bind(null,l[c-2])):h}),s=gt(()=>r.value>-1&&v1(n.params,i.value.params)),o=gt(()=>r.value>-1&&r.value===n.matched.length-1&&bp(n.params,i.value.params));function a(l={}){return _1(l)?e[gi(t.replace)?"replace":"push"](gi(t.to)).catch(ds):Promise.resolve()}return{route:i,href:gt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const g1=no({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Af,setup(t,{slots:e}){const n=eo(Af(t)),{options:i}=Yn(Qc),r=gt(()=>({[wf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),Lp=g1;function _1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v1(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!mn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Tf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wf=(t,e,n)=>t??e??n,x1=no({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Yn(Ll),r=gt(()=>t.route||i.value),s=Yn(bf,0),o=gt(()=>{let c=gi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=gt(()=>r.value.matched[o.value]);Ea(bf,gt(()=>o.value+1)),Ea(m1,a),Ea(Ll,r);const l=Sa();return fs(()=>[l.value,a.value,t.name],([c,u,f],[h,p,M])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ur(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Rf(n.default,{Component:h,route:c});const p=f.props[u],M=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Zc(h,nt({},M,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Rf(n.default,{Component:m,route:c})||m}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ip=x1;function y1(t){const e=l1(t.routes,t),n=t.parseQuery||d1,i=t.stringifyQuery||Ef,r=t.history,s=$r(),o=$r(),a=$r(),l=vn(ti);let c=ti;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=No.bind(null,O=>""+O),f=No.bind(null,N_),h=No.bind(null,Ts);function p(O,ie){let re,fe;return Tp(O)?(re=e.getRecordMatcher(O),fe=ie):fe=O,e.addRoute(fe,re)}function M(O){const ie=e.getRecordMatcher(O);ie&&e.removeRoute(ie)}function y(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function d(O,ie){if(ie=nt({},ie||l.value),typeof O=="string"){const C=Oo(n,O,ie.path),k=e.resolve({path:C.path},ie),$=r.createHref(C.fullPath);return nt(C,k,{params:h(k.params),hash:Ts(C.hash),redirectedFrom:void 0,href:$})}let re;if(O.path!=null)re=nt({},O,{path:Oo(n,O.path,ie.path).path});else{const C=nt({},O.params);for(const k in C)C[k]==null&&delete C[k];re=nt({},O,{params:f(C)}),ie.params=f(ie.params)}const fe=e.resolve(re,ie),Le=O.hash||"";fe.params=u(h(fe.params));const D=B_(i,nt({},O,{hash:I_(Le),path:fe.path})),R=r.createHref(D);return nt({fullPath:D,hash:Le,query:i===Ef?p1(O.query):O.query||{}},fe,{redirectedFrom:void 0,href:R})}function _(O){return typeof O=="string"?Oo(n,O,l.value.path):nt({},O)}function g(O,ie){if(c!==O)return Nr(8,{from:ie,to:O})}function x(O){return w(O)}function P(O){return x(nt(_(O),{replace:!0}))}function T(O){const ie=O.matched[O.matched.length-1];if(ie&&ie.redirect){const{redirect:re}=ie;let fe=typeof re=="function"?re(O):re;return typeof fe=="string"&&(fe=fe.includes("?")||fe.includes("#")?fe=_(fe):{path:fe},fe.params={}),nt({query:O.query,hash:O.hash,params:fe.path!=null?{}:O.params},fe)}}function w(O,ie){const re=c=d(O),fe=l.value,Le=O.state,D=O.force,R=O.replace===!0,C=T(re);if(C)return w(nt(_(C),{state:typeof C=="object"?nt({},Le,C.state):Le,force:D,replace:R}),ie||re);const k=re;k.redirectedFrom=ie;let $;return!D&&z_(i,fe,re)&&($=Nr(16,{to:k,from:fe}),ge(fe,fe,!0,!1)),($?Promise.resolve($):S(k,fe)).catch(te=>Un(te)?Un(te,2)?te:ue(te):G(te,k,fe)).then(te=>{if(te){if(Un(te,2))return w(nt({replace:R},_(te.to),{state:typeof te.to=="object"?nt({},Le,te.to.state):Le,force:D}),ie||k)}else te=z(k,fe,!0,R,Le);return I(k,fe,te),te})}function L(O,ie){const re=g(O,ie);return re?Promise.reject(re):Promise.resolve()}function E(O){const ie=ne.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(O):O()}function S(O,ie){let re;const[fe,Le,D]=M1(O,ie);re=Fo(fe.reverse(),"beforeRouteLeave",O,ie);for(const C of fe)C.leaveGuards.forEach(k=>{re.push(fi(k,O,ie))});const R=L.bind(null,O,ie);return re.push(R),_e(re).then(()=>{re=[];for(const C of s.list())re.push(fi(C,O,ie));return re.push(R),_e(re)}).then(()=>{re=Fo(Le,"beforeRouteUpdate",O,ie);for(const C of Le)C.updateGuards.forEach(k=>{re.push(fi(k,O,ie))});return re.push(R),_e(re)}).then(()=>{re=[];for(const C of D)if(C.beforeEnter)if(mn(C.beforeEnter))for(const k of C.beforeEnter)re.push(fi(k,O,ie));else re.push(fi(C.beforeEnter,O,ie));return re.push(R),_e(re)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),re=Fo(D,"beforeRouteEnter",O,ie,E),re.push(R),_e(re))).then(()=>{re=[];for(const C of o.list())re.push(fi(C,O,ie));return re.push(R),_e(re)}).catch(C=>Un(C,8)?C:Promise.reject(C))}function I(O,ie,re){a.list().forEach(fe=>E(()=>fe(O,ie,re)))}function z(O,ie,re,fe,Le){const D=g(O,ie);if(D)return D;const R=ie===ti,C=Mr?history.state:{};re&&(fe||R?r.replace(O.fullPath,nt({scroll:R&&C&&C.scroll},Le)):r.push(O.fullPath,Le)),l.value=O,ge(O,ie,re,R),ue()}let N;function F(){N||(N=r.listen((O,ie,re)=>{if(!ce.listening)return;const fe=d(O),Le=T(fe);if(Le){w(nt(Le,{replace:!0}),fe).catch(ds);return}c=fe;const D=l.value;Mr&&q_(pf(D.fullPath,re.delta),co()),S(fe,D).catch(R=>Un(R,12)?R:Un(R,2)?(w(R.to,fe).then(C=>{Un(C,20)&&!re.delta&&re.type===ws.pop&&r.go(-1,!1)}).catch(ds),Promise.reject()):(re.delta&&r.go(-re.delta,!1),G(R,fe,D))).then(R=>{R=R||z(fe,D,!1),R&&(re.delta&&!Un(R,8)?r.go(-re.delta,!1):re.type===ws.pop&&Un(R,20)&&r.go(-1,!1)),I(fe,D,R)}).catch(ds)}))}let K=$r(),V=$r(),Z;function G(O,ie,re){ue(O);const fe=V.list();return fe.length?fe.forEach(Le=>Le(O,ie,re)):console.error(O),Promise.reject(O)}function he(){return Z&&l.value!==ti?Promise.resolve():new Promise((O,ie)=>{K.add([O,ie])})}function ue(O){return Z||(Z=!O,F(),K.list().forEach(([ie,re])=>O?re(O):ie()),K.reset()),O}function ge(O,ie,re,fe){const{scrollBehavior:Le}=t;if(!Mr||!Le)return Promise.resolve();const D=!re&&j_(pf(O.fullPath,0))||(fe||!re)&&history.state&&history.state.scroll||null;return Bd().then(()=>Le(O,ie,D)).then(R=>R&&Y_(R)).catch(R=>G(R,O,ie))}const Ee=O=>r.go(O);let we;const ne=new Set,ce={currentRoute:l,listening:!0,addRoute:p,removeRoute:M,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:y,resolve:d,options:t,push:x,replace:P,go:Ee,back:()=>Ee(-1),forward:()=>Ee(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:he,install(O){const ie=this;O.component("RouterLink",Lp),O.component("RouterView",Ip),O.config.globalProperties.$router=ie,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>gi(l)}),Mr&&!we&&l.value===ti&&(we=!0,x(r.location).catch(Le=>{}));const re={};for(const Le in ti)Object.defineProperty(re,Le,{get:()=>l.value[Le],enumerable:!0});O.provide(Qc,ie),O.provide(Pp,Dd(re)),O.provide(Ll,l);const fe=O.unmount;ne.add(O),O.unmount=function(){ne.delete(O),ne.size<1&&(c=ti,N&&N(),N=null,l.value=ti,we=!1,Z=!1),fe()}}};function _e(O){return O.reduce((ie,re)=>ie.then(()=>E(re)),Promise.resolve())}return ce}function M1(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ur(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ur(c,l))||r.push(l))}return[n,i,r]}const S1={class:"wrapper"},E1={__name:"App",setup(t){return(e,n)=>(ao(),oo(Mn,null,[$t("header",null,[$t("div",S1,[$t("nav",null,[Et(gi(Lp),{to:"/"},{default:Gd(()=>n[0]||(n[0]=[pp("Aricrepp.")])),_:1})])])]),Et(gi(Ip))],64))}},b1="modulepreload",A1=function(t){return"/"+t},Cf={},T1=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=A1(l),l in Cf)return;Cf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":b1,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="168",w1=0,Pf=1,R1=2,Dp=1,C1=2,kn=3,yi=0,kt=1,ln=2,_i=0,Cr=1,Lf=2,If=3,Df=4,P1=5,ki=100,L1=101,I1=102,D1=103,U1=104,N1=200,O1=201,F1=202,B1=203,Il=204,Dl=205,z1=206,k1=207,H1=208,V1=209,G1=210,W1=211,X1=212,Y1=213,q1=214,j1=0,$1=1,K1=2,ka=3,Z1=4,J1=5,Q1=6,ev=7,Up=0,tv=1,nv=2,vi=0,iv=1,rv=2,sv=3,av=4,ov=5,lv=6,cv=7,Np=300,Or=301,Fr=302,Ul=303,Nl=304,uo=306,Ol=1e3,Gi=1001,Fl=1002,tn=1003,uv=1004,Ks=1005,cn=1006,Bo=1007,Wi=1008,qn=1009,Op=1010,Fp=1011,Rs=1012,tu=1013,$i=1014,Gn=1015,Ns=1016,nu=1017,iu=1018,Br=1020,Bp=35902,zp=1021,kp=1022,fn=1023,Hp=1024,Vp=1025,Pr=1026,zr=1027,Gp=1028,ru=1029,Wp=1030,su=1031,au=1033,wa=33776,Ra=33777,Ca=33778,Pa=33779,Bl=35840,zl=35841,kl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37808,Yl=37809,ql=37810,jl=37811,$l=37812,Kl=37813,Zl=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,La=36492,sc=36494,ac=36495,Xp=36283,oc=36284,lc=36285,cc=36286,fv=3200,hv=3201,Yp=0,dv=1,pi="",yn="srgb",Ri="srgb-linear",ou="display-p3",fo="display-p3-linear",Ha="linear",st="srgb",Va="rec709",Ga="p3",ir=7680,Uf=519,pv=512,mv=513,gv=514,qp=515,_v=516,vv=517,xv=518,yv=519,Nf=35044,Zs=35048,Of="300 es",Wn=2e3,Wa=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ff=1234567;const ms=Math.PI/180,Cs=180/Math.PI;function Wr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[t&255]+At[t>>8&255]+At[t>>16&255]+At[t>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[n&63|128]+At[n>>8&255]+"-"+At[n>>16&255]+At[n>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function wt(t,e,n){return Math.max(e,Math.min(n,t))}function lu(t,e){return(t%e+e)%e}function Mv(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Sv(t,e,n){return t!==e?(n-t)/(e-t):0}function gs(t,e,n){return(1-n)*t+n*e}function Ev(t,e,n,i){return gs(t,e,1-Math.exp(-n*i))}function bv(t,e=1){return e-Math.abs(lu(t,e*2)-e)}function Av(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Tv(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function wv(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Rv(t,e){return t+Math.random()*(e-t)}function Cv(t){return t*(.5-Math.random())}function Pv(t){t!==void 0&&(Ff=t);let e=Ff+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lv(t){return t*ms}function Iv(t){return t*Cs}function Dv(t){return(t&t-1)===0&&t!==0}function Uv(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Nv(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ov(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),M=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*M,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*M,a*c);break;case"ZYZ":t.set(l*M,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Dt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Fv={DEG2RAD:ms,RAD2DEG:Cs,generateUUID:Wr,clamp:wt,euclideanModulo:lu,mapLinear:Mv,inverseLerp:Sv,lerp:gs,damp:Ev,pingpong:bv,smoothstep:Av,smootherstep:Tv,randInt:wv,randFloat:Rv,randFloatSpread:Cv,seededRandom:Pv,degToRad:Lv,radToDeg:Iv,isPowerOfTwo:Dv,ceilPowerOfTwo:Uv,floorPowerOfTwo:Nv,setQuaternionFromProperEuler:Ov,normalize:Dt,denormalize:Sr};class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],M=i[8],y=r[0],m=r[3],d=r[6],_=r[1],g=r[4],x=r[7],P=r[2],T=r[5],w=r[8];return s[0]=o*y+a*_+l*P,s[3]=o*m+a*g+l*T,s[6]=o*d+a*x+l*w,s[1]=c*y+u*_+f*P,s[4]=c*m+u*g+f*T,s[7]=c*d+u*x+f*w,s[2]=h*y+p*_+M*P,s[5]=h*m+p*g+M*T,s[8]=h*d+p*x+M*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,M=n*f+i*h+r*p;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/M;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zo.makeScale(e,n)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,n){return this.premultiply(zo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new We;function jp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ps(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Bv(){const t=Ps("canvas");return t.style.display="block",t}const Bf={};function _s(t){t in Bf||(Bf[t]=!0,console.warn(t))}function zv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const zf=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kf=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[Ri]:{transfer:Ha,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[yn]:{transfer:st,primaries:Va,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fo]:{transfer:Ha,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(kf),fromReference:t=>t.applyMatrix3(zf)},[ou]:{transfer:st,primaries:Ga,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(kf),fromReference:t=>t.applyMatrix3(zf).convertLinearToSRGB()}},kv=new Set([Ri,fo]),tt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!kv.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Kr[e].toReference,r=Kr[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Kr[t].primaries},getTransfer:function(t){return t===pi?Ha:Kr[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Kr[e].luminanceCoefficients)}};function Lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rr;class Hv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=Ps("canvas")),rr.width=e.width,rr.height=e.height;const i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ps("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Lr(n[i]/255)*255):n[i]=Lr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ho(r[o].image)):s.push(Ho(r[o]))}else s=Ho(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ho(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gv=0;class Ft extends Gr{constructor(e=Ft.DEFAULT_IMAGE,n=Ft.DEFAULT_MAPPING,i=Gi,r=Gi,s=cn,o=Wi,a=fn,l=qn,c=Ft.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Wr(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ol:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ol:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Np;Ft.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],M=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(M-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(M+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,P=(d+1)/2,T=(u+h)/4,w=(f+y)/4,L=(M+m)/4;return g>x&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=T/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=L/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-M)*(m-M)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-M)/_,this.y=(f-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends Gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $p(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Wv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Kp extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xv extends Ft{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],M=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=M,e[n+3]=y;return}if(f!==y||l!==h||c!==p||u!==M){let m=1-a;const d=l*h+c*p+u*M+f*y,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const P=Math.sqrt(g),T=Math.atan2(P,d*_);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}const x=a*_;if(l=l*m+h*x,c=c*m+p*x,u=u*m+M*x,f=f*m+y*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],M=s[o+3];return e[n]=a*M+u*f+l*p-c*h,e[n+1]=l*M+u*h+c*f-a*p,e[n+2]=c*M+u*p+a*h-l*f,e[n+3]=u*M-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),M=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*M,this._y=c*p*f-h*u*M,this._z=c*u*M+h*p*f,this._w=c*u*f-h*p*M;break;case"YXZ":this._x=h*u*f+c*p*M,this._y=c*p*f-h*u*M,this._z=c*u*M-h*p*f,this._w=c*u*f+h*p*M;break;case"ZXY":this._x=h*u*f-c*p*M,this._y=c*p*f+h*u*M,this._z=c*u*M+h*p*f,this._w=c*u*f-h*p*M;break;case"ZYX":this._x=h*u*f-c*p*M,this._y=c*p*f+h*u*M,this._z=c*u*M-h*p*f,this._w=c*u*f+h*p*M;break;case"YZX":this._x=h*u*f+c*p*M,this._y=c*p*f+h*u*M,this._z=c*u*M-h*p*f,this._w=c*u*f-h*p*M;break;case"XZY":this._x=h*u*f-c*p*M,this._y=c*p*f-h*u*M,this._z=c*u*M+h*p*f,this._w=c*u*f+h*p*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new W,Hf=new Os;class Fs{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,sn):sn.fromBufferAttribute(s,o),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Qs.subVectors(this.max,Zr),sr.subVectors(e.a,Zr),ar.subVectors(e.b,Zr),or.subVectors(e.c,Zr),ni.subVectors(ar,sr),ii.subVectors(or,ar),Ii.subVectors(sr,or);let n=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ii.z,Ii.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ii.z,0,-Ii.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ii.y,Ii.x,0];return!Go(n,sr,ar,or,Qs)||(n=[1,0,0,0,1,0,0,0,1],!Go(n,sr,ar,or,Qs))?!1:(ea.crossVectors(ni,ii),n=[ea.x,ea.y,ea.z],Go(n,sr,ar,or,Qs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new W,new W,new W,new W,new W,new W,new W,new W],sn=new W,Js=new Fs,sr=new W,ar=new W,or=new W,ni=new W,ii=new W,Ii=new W,Zr=new W,Qs=new W,ea=new W,Di=new W;function Go(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Di.fromArray(t,s);const a=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=n.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yv=new Fs,Jr=new W,Wo=new W;class ho{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const n=Jr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Wo)),this.expandByPoint(Jr.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new W,Xo=new W,ta=new W,ri=new W,Yo=new W,na=new W,qo=new W;class Zp{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=On.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,n),On.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xo.copy(e).add(n).multiplyScalar(.5),ta.copy(n).sub(e).normalize(),ri.copy(this.origin).sub(Xo);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ta),a=ri.dot(this.direction),l=-ri.dot(ta),c=ri.lengthSq(),u=Math.abs(1-o*o);let f,h,p,M;if(u>0)if(f=o*l-a,h=o*a-l,M=s*u,f>=0)if(h>=-M)if(h<=M){const y=1/u;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-M?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=M?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Xo).addScaledVector(ta,h),p}intersectSphere(e,n){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,n,i,r,s){Yo.subVectors(n,e),na.subVectors(i,e),qo.crossVectors(Yo,na);let o=this.direction.dot(qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(na.crossVectors(ri,na));if(l<0)return null;const c=a*this.direction.dot(Yo.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,M,y,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,M,y,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,M,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=M,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),o=1/lr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,M=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+M*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=M+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,M=c*u,y=c*f;n[0]=h+y*a,n[4]=M*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-M,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,M=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=M+p*a,n[1]=p+M*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,M=a*u,y=a*f;n[0]=l*u,n[4]=M*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-M,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,M=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=M*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+M,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*c,M=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=p*f-M,n[2]=M*f-p,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,jv)}lookAt(e,n,i){const r=this.elements;return Gt.subVectors(e,n),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),si.crossVectors(i,Gt),si.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),si.crossVectors(i,Gt)),si.normalize(),ia.crossVectors(Gt,si),r[0]=si.x,r[4]=ia.x,r[8]=Gt.x,r[1]=si.y,r[5]=ia.y,r[9]=Gt.y,r[2]=si.z,r[6]=ia.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],M=i[2],y=i[6],m=i[10],d=i[14],_=i[3],g=i[7],x=i[11],P=i[15],T=r[0],w=r[4],L=r[8],E=r[12],S=r[1],I=r[5],z=r[9],N=r[13],F=r[2],K=r[6],V=r[10],Z=r[14],G=r[3],he=r[7],ue=r[11],ge=r[15];return s[0]=o*T+a*S+l*F+c*G,s[4]=o*w+a*I+l*K+c*he,s[8]=o*L+a*z+l*V+c*ue,s[12]=o*E+a*N+l*Z+c*ge,s[1]=u*T+f*S+h*F+p*G,s[5]=u*w+f*I+h*K+p*he,s[9]=u*L+f*z+h*V+p*ue,s[13]=u*E+f*N+h*Z+p*ge,s[2]=M*T+y*S+m*F+d*G,s[6]=M*w+y*I+m*K+d*he,s[10]=M*L+y*z+m*V+d*ue,s[14]=M*E+y*N+m*Z+d*ge,s[3]=_*T+g*S+x*F+P*G,s[7]=_*w+g*I+x*K+P*he,s[11]=_*L+g*z+x*V+P*ue,s[15]=_*E+g*N+x*Z+P*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],M=e[3],y=e[7],m=e[11],d=e[15];return M*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],M=e[12],y=e[13],m=e[14],d=e[15],_=f*m*c-y*h*c+y*l*p-a*m*p-f*l*d+a*h*d,g=M*h*c-u*m*c-M*l*p+o*m*p+u*l*d-o*h*d,x=u*y*c-M*f*c+M*a*p-o*y*p-u*a*d+o*f*d,P=M*f*l-u*y*l-M*a*h+o*y*h+u*a*m-o*f*m,T=n*_+i*g+r*x+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-M*h*s+M*r*p-n*m*p-u*r*d+n*h*d)*w,e[6]=(M*l*s-o*m*s-M*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(M*f*s-u*y*s-M*i*p+n*y*p+u*i*d-n*f*d)*w,e[10]=(o*y*s-M*a*s+M*i*c-n*y*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(u*y*r-M*f*r+M*i*h-n*y*h-u*i*m+n*f*m)*w,e[14]=(M*a*r-o*y*r-M*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,M=s*f,y=o*u,m=o*f,d=a*f,_=l*c,g=l*u,x=l*f,P=i.x,T=i.y,w=i.z;return r[0]=(1-(y+d))*P,r[1]=(p+x)*P,r[2]=(M-g)*P,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(h+d))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(M+g)*w,r[9]=(m-_)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=lr.set(r[0],r[1],r[2]).length();const o=lr.set(r[4],r[5],r[6]).length(),a=lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,n.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Wn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,M;if(a===Wn)p=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Wa)p=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Wn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let M,y;if(a===Wn)M=(o+s)*f,y=-2*f;else if(a===Wa)M=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const lr=new W,an=new ct,qv=new W(0,0,0),jv=new W(1,1,1),si=new W,ia=new W,Gt=new W,Vf=new ct,Gf=new Os;class Pn{constructor(e=0,n=0,i=0,r=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Gf.setFromEuler(this),this.setFromQuaternion(Gf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";let cu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$v=0;const Wf=new W,cr=new Os,Fn=new ct,ra=new W,Qr=new W,Kv=new W,Zv=new Os,Xf=new W(1,0,0),Yf=new W(0,1,0),qf=new W(0,0,1),jf={type:"added"},Jv={type:"removed"},ur={type:"childadded",child:null},jo={type:"childremoved",child:null};class Pt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new W,n=new Pn,i=new Os,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new We}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,n){return cr.setFromAxisAngle(e,n),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,n){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ra.copy(e):ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Qr,ra,this.up):Fn.lookAt(ra,Qr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),cr.setFromRotationMatrix(Fn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Jv),jo.child=e,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),M=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),M.length>0&&(i.nodes=M)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new W(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new W,Bn=new W,$o=new W,zn=new W,fr=new W,hr=new W,$f=new W,Ko=new W,Zo=new W,Jo=new W;class bn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),on.subVectors(e,n),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){on.subVectors(r,n),Bn.subVectors(i,n),$o.subVectors(e,n);const o=on.dot(on),a=on.dot(Bn),l=on.dot($o),c=Bn.dot(Bn),u=Bn.dot($o),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,M=(o*u-a*l)*h;return s.set(1-p-M,M,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l)}static isFrontFacing(e,n,i,r){return on.subVectors(i,n),Bn.subVectors(e,n),on.cross(Bn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),on.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fr.subVectors(r,i),hr.subVectors(s,i),Ko.subVectors(e,i);const l=fr.dot(Ko),c=hr.dot(Ko);if(l<=0&&c<=0)return n.copy(i);Zo.subVectors(e,r);const u=fr.dot(Zo),f=hr.dot(Zo);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fr,o);Jo.subVectors(e,s);const p=fr.dot(Jo),M=hr.dot(Jo);if(M>=0&&p<=M)return n.copy(s);const y=p*c-l*M;if(y<=0&&c>=0&&M<=0)return a=c/(c-M),n.copy(i).addScaledVector(hr,a);const m=u*M-p*f;if(m<=0&&f-u>=0&&p-M>=0)return $f.subVectors(s,r),a=(f-u)/(f-u+(p-M)),n.copy(r).addScaledVector($f,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(fr,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Qo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=lu(e,1),n=wt(n,0,1),i=wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Qo(o,s,e+1/3),this.g=Qo(o,s,e),this.b=Qo(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=Jp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return tt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(wt(Tt.r*255,0,255))*65536+Math.round(wt(Tt.g*255,0,255))*256+Math.round(wt(Tt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Tt.copy(this),n);const i=Tt.r,r=Tt.g,s=Tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Tt.copy(this),n),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=yn){tt.fromWorkingColorSpace(Tt.copy(this),e);const n=Tt.r,i=Tt.g,r=Tt.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+n,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ai),e.getHSL(sa);const i=gs(ai.h,sa.h,n),r=gs(ai.s,sa.s,n),s=gs(ai.l,sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Xe;Xe.NAMES=Jp;let Qv=0;class Bs extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Cr,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Il,this.blendDst=Dl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Il&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ka&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uu extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new W,aa=new Ye;class zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _s("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)aa.fromBufferAttribute(this,n),aa.applyMatrix3(e),this.setXY(n,aa.x,aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix3(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyMatrix4(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.applyNormalMatrix(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mt.fromBufferAttribute(this,n),mt.transformDirection(e),this.setXYZ(n,mt.x,mt.y,mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Sr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Sr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Sr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Sr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class Qp extends zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class em extends zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rn extends zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ex=0;const en=new ct,el=new Pt,dr=new W,Wt=new Fs,es=new Fs,yt=new W;class Zn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?em:Qp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,n,i){return en.makeTranslation(e,n,i),this.applyMatrix4(en),this}scale(e,n,i){return en.makeScale(e,n,i),this.applyMatrix4(en),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(yt.addVectors(Wt.min,es.min),Wt.expandByPoint(yt),yt.addVectors(Wt.max,es.max),Wt.expandByPoint(yt)):(Wt.expandByPoint(es.min),Wt.expandByPoint(es.max))}Wt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yt.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),yt.add(dr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new W,l[L]=new W;const c=new W,u=new W,f=new W,h=new Ye,p=new Ye,M=new Ye,y=new W,m=new W;function d(L,E,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,E),M.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(h),M.sub(h);const I=1/(p.x*M.y-M.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(I),a[L].add(y),a[E].add(y),a[S].add(y),l[L].add(m),l[E].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let L=0,E=_.length;L<E;++L){const S=_[L],I=S.start,z=S.count;for(let N=I,F=I+z;N<F;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new W,x=new W,P=new W,T=new W;function w(L){P.fromBufferAttribute(r,L),T.copy(P);const E=a[L];g.copy(E),g.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(T,E);const I=x.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,I)}for(let L=0,E=_.length;L<E;++L){const S=_[L],I=S.start,z=S.count;for(let N=I,F=I+z;N<F;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const M=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,M),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,M),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(M,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)yt.fromBufferAttribute(e,n),yt.normalize(),e.setXYZ(n,yt.x,yt.y,yt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,M=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let d=0;d<u;d++)h[M++]=c[p++]}return new zt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kf=new ct,Ui=new Zp,oa=new ho,Zf=new W,pr=new W,mr=new W,gr=new W,tl=new W,la=new W,ca=new Ye,ua=new Ye,fa=new Ye,Jf=new W,Qf=new W,eh=new W,ha=new W,da=new W;class nn extends Pt{constructor(e=new Zn,n=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(tl.fromBufferAttribute(f,e),o?la.addScaledVector(tl,u):la.addScaledVector(tl.sub(n),u))}n.add(la)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(oa.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(oa,Zf)===null||Ui.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(Kf),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ui)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,y=h.length;M<y;M++){const m=h[M],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,P=g;x<P;x+=3){const T=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);r=pa(this,d,e,i,c,u,f,T,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const M=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=M,d=y;m<d;m+=3){const _=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=pa(this,o,e,i,c,u,f,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,y=h.length;M<y;M++){const m=h[M],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,P=g;x<P;x+=3){const T=x,w=x+1,L=x+2;r=pa(this,d,e,i,c,u,f,T,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const M=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=M,d=y;m<d;m+=3){const _=m,g=m+1,x=m+2;r=pa(this,o,e,i,c,u,f,_,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tx(t,e,n,i,r,s,o,a){let l;if(e.side===kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;da.copy(a),da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(da);return c<n.near||c>n.far?null:{distance:c,point:da.clone(),object:t}}function pa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,pr),t.getVertexPosition(l,mr),t.getVertexPosition(c,gr);const u=tx(t,e,n,i,pr,mr,gr,ha);if(u){r&&(ca.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,l),fa.fromBufferAttribute(r,c),u.uv=bn.getInterpolation(ha,pr,mr,gr,ca,ua,fa,new Ye)),s&&(ca.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,l),fa.fromBufferAttribute(s,c),u.uv1=bn.getInterpolation(ha,pr,mr,gr,ca,ua,fa,new Ye)),o&&(Jf.fromBufferAttribute(o,a),Qf.fromBufferAttribute(o,l),eh.fromBufferAttribute(o,c),u.normal=bn.getInterpolation(ha,pr,mr,gr,Jf,Qf,eh,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};bn.getNormal(pr,mr,gr,f.normal),u.face=f}return u}class zs extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;M("z","y","x",-1,-1,i,n,e,o,s,0),M("z","y","x",1,-1,i,n,-e,o,s,1),M("x","z","y",1,1,e,i,n,r,o,2),M("x","z","y",1,-1,e,i,-n,r,o,3),M("x","y","z",1,-1,e,n,i,r,s,4),M("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(f,2));function M(y,m,d,_,g,x,P,T,w,L,E){const S=x/w,I=P/L,z=x/2,N=P/2,F=T/2,K=w+1,V=L+1;let Z=0,G=0;const he=new W;for(let ue=0;ue<V;ue++){const ge=ue*I-N;for(let Ee=0;Ee<K;Ee++){const we=Ee*S-z;he[y]=we*_,he[m]=ge*g,he[d]=F,c.push(he.x,he.y,he.z),he[y]=0,he[m]=0,he[d]=T>0?1:-1,u.push(he.x,he.y,he.z),f.push(Ee/w),f.push(1-ue/L),Z+=1}}for(let ue=0;ue<L;ue++)for(let ge=0;ge<w;ge++){const Ee=h+ge+K*ue,we=h+ge+K*(ue+1),ne=h+(ge+1)+K*(ue+1),ce=h+(ge+1)+K*ue;l.push(Ee,we,ce),l.push(we,ne,ce),G+=6}a.addGroup(p,G,E),p+=G,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ut(t){const e={};for(let n=0;n<t.length;n++){const i=kr(t[n]);for(const r in i)e[r]=i[r]}return e}function nx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ix={clone:kr,merge:Ut};var rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rx,this.fragmentShader=sx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=nx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nm extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Wn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new W,th=new Ye,nh=new Ye;class qt extends nm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,n){return this.getViewBounds(e,th,nh),n.subVectors(nh,th)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ms*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _r=-90,vr=1;class ax extends Pt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(_r,vr,e,n);r.layers=this.layers,this.add(r);const s=new qt(_r,vr,e,n);s.layers=this.layers,this.add(s);const o=new qt(_r,vr,e,n);o.layers=this.layers,this.add(o);const a=new qt(_r,vr,e,n);a.layers=this.layers,this.add(a);const l=new qt(_r,vr,e,n);l.layers=this.layers,this.add(l);const c=new qt(_r,vr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class im extends Ft{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Or,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends Ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new im(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zs(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:_i});s.uniforms.tEquirect.value=n;const o=new nn(r,s),a=n.minFilter;return n.minFilter===Wi&&(n.minFilter=cn),new ax(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const nl=new W,lx=new W,cx=new We;class hi{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nl.subVectors(i,n).cross(lx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(nl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cx.getNormalMatrix(e),r=this.coplanarPoint(nl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ho,ma=new W;class fu{constructor(e=new hi,n=new hi,i=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],M=r[9],y=r[10],m=r[11],d=r[12],_=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-p,x-d).normalize(),i[1].setComponents(l+s,h+c,m+p,x+d).normalize(),i[2].setComponents(l+o,h+u,m+M,x+_).normalize(),i[3].setComponents(l-o,h-u,m-M,x-_).normalize(),i[4].setComponents(l-a,h-f,m-y,x-g).normalize(),n===Wn)i[5].setComponents(l+a,h+f,m+y,x+g).normalize();else if(n===Wa)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ux(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,M=h.length;p<M;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class po extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],M=[],y=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let g=0;g<c;g++){const x=g*f-s;M.push(x,-_,0),y.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const g=_+c*d,x=_+c*(d+1),P=_+1+c*(d+1),T=_+1+c*d;p.push(g,x,T),p.push(x,P,T)}this.setIndex(p),this.setAttribute("position",new Rn(M,3)),this.setAttribute("normal",new Rn(y,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}var fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_x=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ax=`#ifdef USE_BUMPMAP
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
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ux=`#define PI 3.141592653589793
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
} // validated`,Nx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ox=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`
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
}`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ay=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
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
#endif`,cy=`struct PhysicalMaterial {
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
}`,uy=`
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,by=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$y=`float getShadowMask() {
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
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,eM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`#include <common>
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
}`,_M=`#if DEPTH_PACKING == 3200
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
}`,vM=`#define DISTANCE
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
}`,xM=`#define DISTANCE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
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
}`,EM=`uniform vec3 diffuse;
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
}`,bM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,TM=`#define LAMBERT
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
}`,wM=`#define LAMBERT
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
}`,RM=`#define MATCAP
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
}`,CM=`#define MATCAP
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
}`,PM=`#define NORMAL
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
}`,LM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,DM=`#define PHONG
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
}`,UM=`#define STANDARD
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
}`,NM=`#define STANDARD
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
}`,OM=`#define TOON
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
}`,FM=`#define TOON
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
}`,BM=`uniform float size;
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
}`,zM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,HM=`uniform vec3 color;
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
}`,VM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:fx,alphahash_pars_fragment:hx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:gx,aomap_fragment:_x,aomap_pars_fragment:vx,batching_pars_vertex:xx,batching_vertex:yx,begin_vertex:Mx,beginnormal_vertex:Sx,bsdfs:Ex,iridescence_fragment:bx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Tx,clipping_planes_pars_fragment:wx,clipping_planes_pars_vertex:Rx,clipping_planes_vertex:Cx,color_fragment:Px,color_pars_fragment:Lx,color_pars_vertex:Ix,color_vertex:Dx,common:Ux,cube_uv_reflection_fragment:Nx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Fx,displacementmap_vertex:Bx,emissivemap_fragment:zx,emissivemap_pars_fragment:kx,colorspace_fragment:Hx,colorspace_pars_fragment:Vx,envmap_fragment:Gx,envmap_common_pars_fragment:Wx,envmap_pars_fragment:Xx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:iy,envmap_vertex:qx,fog_vertex:jx,fog_pars_vertex:$x,fog_fragment:Kx,fog_pars_fragment:Zx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:Qx,lights_lambert_fragment:ey,lights_lambert_pars_fragment:ty,lights_pars_begin:ny,lights_toon_fragment:ry,lights_toon_pars_fragment:sy,lights_phong_fragment:ay,lights_phong_pars_fragment:oy,lights_physical_fragment:ly,lights_physical_pars_fragment:cy,lights_fragment_begin:uy,lights_fragment_maps:fy,lights_fragment_end:hy,logdepthbuf_fragment:dy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:vy,map_particle_fragment:xy,map_particle_pars_fragment:yy,metalnessmap_fragment:My,metalnessmap_pars_fragment:Sy,morphinstance_vertex:Ey,morphcolor_vertex:by,morphnormal_vertex:Ay,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ry,normal_fragment_maps:Cy,normal_pars_fragment:Py,normal_pars_vertex:Ly,normal_vertex:Iy,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Fy,opaque_fragment:By,packing:zy,premultiplied_alpha_fragment:ky,project_vertex:Hy,dithering_fragment:Vy,dithering_pars_fragment:Gy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:qy,shadowmap_vertex:jy,shadowmask_pars_fragment:$y,skinbase_vertex:Ky,skinning_pars_vertex:Zy,skinning_vertex:Jy,skinnormal_vertex:Qy,specularmap_fragment:eM,specularmap_pars_fragment:tM,tonemapping_fragment:nM,tonemapping_pars_fragment:iM,transmission_fragment:rM,transmission_pars_fragment:sM,uv_pars_fragment:aM,uv_pars_vertex:oM,uv_vertex:lM,worldpos_vertex:cM,background_vert:uM,background_frag:fM,backgroundCube_vert:hM,backgroundCube_frag:dM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:_M,distanceRGBA_vert:vM,distanceRGBA_frag:xM,equirect_vert:yM,equirect_frag:MM,linedashed_vert:SM,linedashed_frag:EM,meshbasic_vert:bM,meshbasic_frag:AM,meshlambert_vert:TM,meshlambert_frag:wM,meshmatcap_vert:RM,meshmatcap_frag:CM,meshnormal_vert:PM,meshnormal_frag:LM,meshphong_vert:IM,meshphong_frag:DM,meshphysical_vert:UM,meshphysical_frag:NM,meshtoon_vert:OM,meshtoon_frag:FM,points_vert:BM,points_frag:zM,shadow_vert:kM,shadow_frag:HM,sprite_vert:VM,sprite_frag:GM},Se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},En={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:Ut([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ga={r:0,b:0,g:0},Oi=new Pn,WM=new ct;function XM(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function M(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function y(_){let g=!1;const x=M(_);x===null?d(a,l):x&&x.isColor&&(d(x,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const x=M(g);x&&(x.isCubeTexture||x.mapping===uo)?(u===void 0&&(u=new nn(new zs(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:kr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Oi.copy(g.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(Oi)),u.material.toneMapped=tt.getTransfer(x.colorSpace)!==st,(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nn(new po(2,2),new Mi({name:"BackgroundMaterial",uniforms:kr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,g){_.getRGB(ga,tm(t)),i.buffers.color.setClear(ga.r,ga.g,ga.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:y,addToRenderList:m}}function YM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,I,z,N,F){let K=!1;const V=f(N,z,I);s!==V&&(s=V,c(s.object)),K=p(S,N,z,F),K&&M(S,N,z,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(S,I,z,N),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,I,z){const N=z.wireframe===!0;let F=i[S.id];F===void 0&&(F={},i[S.id]=F);let K=F[I.id];K===void 0&&(K={},F[I.id]=K);let V=K[N];return V===void 0&&(V=h(l()),K[N]=V),V}function h(S){const I=[],z=[],N=[];for(let F=0;F<n;F++)I[F]=0,z[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,I,z,N){const F=s.attributes,K=I.attributes;let V=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){const ue=F[G];let ge=K[G];if(ge===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function M(S,I,z,N){const F={},K=I.attributes;let V=0;const Z=z.getAttributes();for(const G in Z)if(Z[G].location>=0){let ue=K[G];ue===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),F[G]=ge,V++}s.attributes=F,s.attributesNum=V,s.index=N}function y(){const S=s.newAttributes;for(let I=0,z=S.length;I<z;I++)S[I]=0}function m(S){d(S,0)}function d(S,I){const z=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;z[S]=1,N[S]===0&&(t.enableVertexAttribArray(S),N[S]=1),F[S]!==I&&(t.vertexAttribDivisor(S,I),F[S]=I)}function _(){const S=s.newAttributes,I=s.enabledAttributes;for(let z=0,N=I.length;z<N;z++)I[z]!==S[z]&&(t.disableVertexAttribArray(z),I[z]=0)}function g(S,I,z,N,F,K,V){V===!0?t.vertexAttribIPointer(S,I,z,F,K):t.vertexAttribPointer(S,I,z,N,F,K)}function x(S,I,z,N){y();const F=N.attributes,K=z.getAttributes(),V=I.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let he=F[Z];if(he===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const ue=he.normalized,ge=he.itemSize,Ee=e.get(he);if(Ee===void 0)continue;const we=Ee.buffer,ne=Ee.type,ce=Ee.bytesPerElement,_e=ne===t.INT||ne===t.UNSIGNED_INT||he.gpuType===tu;if(he.isInterleavedBufferAttribute){const O=he.data,ie=O.stride,re=he.offset;if(O.isInstancedInterleavedBuffer){for(let fe=0;fe<G.locationSize;fe++)d(G.location+fe,O.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let fe=0;fe<G.locationSize;fe++)m(G.location+fe);t.bindBuffer(t.ARRAY_BUFFER,we);for(let fe=0;fe<G.locationSize;fe++)g(G.location+fe,ge/G.locationSize,ne,ue,ie*ce,(re+ge/G.locationSize*fe)*ce,_e)}else{if(he.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)d(G.location+O,he.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let O=0;O<G.locationSize;O++)m(G.location+O);t.bindBuffer(t.ARRAY_BUFFER,we);for(let O=0;O<G.locationSize;O++)g(G.location+O,ge/G.locationSize,ne,ue,ge*ce,ge/G.locationSize*O*ce,_e)}}else if(V!==void 0){const ue=V[Z];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(G.location,ue);break;case 3:t.vertexAttrib3fv(G.location,ue);break;case 4:t.vertexAttrib4fv(G.location,ue);break;default:t.vertexAttrib1fv(G.location,ue)}}}}_()}function P(){L();for(const S in i){const I=i[S];for(const z in I){const N=I[z];for(const F in N)u(N[F].object),delete N[F];delete I[z]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const z in I){const N=I[z];for(const F in N)u(N[F].object),delete N[F];delete I[z]}delete i[S.id]}function w(S){for(const I in i){const z=i[I];if(z[S.id]===void 0)continue;const N=z[S.id];for(const F in N)u(N[F].object),delete N[F];delete z[S.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function qM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let M=0;M<f;M++)p+=u[M];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let M=0;M<c.length;M++)o(c[M],u[M],h[M]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let M=0;for(let y=0;y<f;y++)M+=u[y];for(let y=0;y<h.length;y++)n.update(M,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==fn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const w=T===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==qn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!w)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:x,maxSamples:P}}function $M(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new hi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const M=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||M===null||M.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let x=d.clippingState||null;l.value=x,x=u(M,h,g,p);for(let P=0;P!==g;++P)x[P]=n[P];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,M){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,M!==!0||m===null){const d=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function KM(t){let e=new WeakMap;function n(o,a){return a===Ul?o.mapping=Or:a===Nl&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ul||a===Nl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ox(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sm extends nm{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Er=4,ih=[.125,.215,.35,.446,.526,.582],Hi=20,il=new sm,rh=new Xe;let rl=null,sl=0,al=0,ol=!1;const zi=(1+Math.sqrt(5))/2,xr=1/zi,sh=[new W(-zi,xr,0),new W(zi,xr,0),new W(-xr,0,zi),new W(xr,0,zi),new W(0,zi,-xr),new W(0,zi,xr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl,sl,al),this._renderer.xr.enabled=ol,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ns,format:fn,colorSpace:Ri,depthBuffer:!1},r=ah(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZM(s)),this._blurMaterial=JM(s,e,n)}return r}_compileMaterial(e){const n=new nn(this._lodPlanes[0],e);this._renderer.compile(n,il)}_sceneToCubeUV(e,n,i,r){const a=new qt(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(rh),u.toneMapping=vi,u.autoClear=!1;const p=new uu({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),M=new nn(new zs,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(rh),y=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;_a(r,_*g,d>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(M,a),u.render(e,a)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_a(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,il)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sh[(r-s-1)%sh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new nn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),y=s/M,m=isFinite(s)?1+Math.floor(u*y):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const d=[];let _=0;for(let w=0;w<Hi;++w){const L=w/y,E=Math.exp(-L*L/2);d.push(E),w===0?_+=E:w<m&&(_+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=M,h.mipInt.value=g-i;const x=this._sizeLods[r],P=3*x*(r>g-Er?r-g+Er:0),T=4*(this._cubeSize-x);_a(n,P,T,3*x,2*x),l.setRenderTarget(n),l.render(f,il)}}function ZM(t){const e=[],n=[],i=[];let r=t;const s=t-Er+1+ih.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Er?l=ih[o-t+Er-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,M=6,y=3,m=2,d=1,_=new Float32Array(y*M*p),g=new Float32Array(m*M*p),x=new Float32Array(d*M*p);for(let T=0;T<p;T++){const w=T%3*2/3-1,L=T>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];_.set(E,y*M*T),g.set(h,m*M*T);const S=[T,T,T,T,T,T];x.set(S,d*M*T)}const P=new Zn;P.setAttribute("position",new zt(_,y)),P.setAttribute("uv",new zt(g,m)),P.setAttribute("faceIndex",new zt(x,d)),e.push(P),r>Er&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function ah(t,e,n){const i=new Ki(t,e,n);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function JM(t,e,n){const i=new Float32Array(Hi),r=new W(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hu(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function oh(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function lh(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function QM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ul||l===Nl,u=l===Or||l===Fr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new uc(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new uc(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function eS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_s("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tS(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const M in h.attributes)e.remove(h.attributes[M]);for(const M in h.morphAttributes){const y=h.morphAttributes[M];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const M in h)e.update(h[M],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const M in p){const y=p[M];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,M=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,x=_.length;g<x;g+=3){const P=_[g+0],T=_[g+1],w=_[g+2];h.push(P,T,T,w,w,P)}}else if(M!==void 0){const _=M.array;y=M.version;for(let g=0,x=_.length/3-1;g<x;g+=3){const P=g+0,T=g+1,w=g+2;h.push(P,T,T,w,w,P)}}else return;const m=new(jp(h)?em:Qp)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nS(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,M){M!==0&&(t.drawElementsInstanced(i,p,s,h*o,M),n.update(p,i,M))}function u(h,p,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,M);let m=0;for(let d=0;d<M;d++)m+=p[d];n.update(m,i,1)}function f(h,p,M,y){if(M===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,M);let d=0;for(let _=0;_<M;_++)d+=p[_];for(let _=0;_<y.length;_++)n.update(d,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rS(t,e,n){const i=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),M===!0&&(g=2),y===!0&&(g=3);let x=a.attributes.position.count*g,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*P*4*f),w=new Kp(T,x,P,f);w.type=Gn,w.needsUpdate=!0;const L=g*4;for(let S=0;S<f;S++){const I=m[S],z=d[S],N=_[S],F=x*P*4*S;for(let K=0;K<I.count;K++){const V=K*L;p===!0&&(r.fromBufferAttribute(I,K),T[F+V+0]=r.x,T[F+V+1]=r.y,T[F+V+2]=r.z,T[F+V+3]=0),M===!0&&(r.fromBufferAttribute(z,K),T[F+V+4]=r.x,T[F+V+5]=r.y,T[F+V+6]=r.z,T[F+V+7]=0),y===!0&&(r.fromBufferAttribute(N,K),T[F+V+8]=r.x,T[F+V+9]=r.y,T[F+V+10]=r.z,T[F+V+11]=N.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new Ye(x,P)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const M=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function sS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class am extends Ft{constructor(e,n,i,r,s,o,a,l,c,u=Pr){if(u!==Pr&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Pr&&(i=$i),i===void 0&&u===zr&&(i=Br),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const om=new Ft,ch=new am(1,1),lm=new Kp,cm=new Xv,um=new im,uh=[],fh=[],hh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function Xr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=uh[r];if(s===void 0&&(s=new Float32Array(r),uh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mo(t,e){let n=fh[e];n===void 0&&(n=new Int32Array(e),fh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function uS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;ph.set(i),t.uniformMatrix2fv(this.addr,!1,ph),xt(n,i)}}function fS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;dh.set(i),t.uniformMatrix3fv(this.addr,!1,dh),xt(n,i)}}function hS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;hh.set(i),t.uniformMatrix4fv(this.addr,!1,hh),xt(n,i)}}function dS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function mS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function gS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function _S(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function xS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function MS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ch.compareFunction=qp,s=ch):s=om,n.setTexture2D(e||s,r)}function SS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cm,r)}function ES(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||um,r)}function bS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lm,r)}function AS(t){switch(t){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return ES;case 36289:case 36303:case 36311:case 36292:return bS}}function TS(t,e){t.uniform1fv(this.addr,e)}function wS(t,e){const n=Xr(e,this.size,2);t.uniform2fv(this.addr,n)}function RS(t,e){const n=Xr(e,this.size,3);t.uniform3fv(this.addr,n)}function CS(t,e){const n=Xr(e,this.size,4);t.uniform4fv(this.addr,n)}function PS(t,e){const n=Xr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LS(t,e){const n=Xr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IS(t,e){const n=Xr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DS(t,e){t.uniform1iv(this.addr,e)}function US(t,e){t.uniform2iv(this.addr,e)}function NS(t,e){t.uniform3iv(this.addr,e)}function OS(t,e){t.uniform4iv(this.addr,e)}function FS(t,e){t.uniform1uiv(this.addr,e)}function BS(t,e){t.uniform2uiv(this.addr,e)}function zS(t,e){t.uniform3uiv(this.addr,e)}function kS(t,e){t.uniform4uiv(this.addr,e)}function HS(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||om,s[o])}function VS(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||cm,s[o])}function GS(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||um,s[o])}function WS(t,e,n){const i=this.cache,r=e.length,s=mo(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||lm,s[o])}function XS(t){switch(t){case 5126:return TS;case 35664:return wS;case 35665:return RS;case 35666:return CS;case 35674:return PS;case 35675:return LS;case 35676:return IS;case 5124:case 35670:return DS;case 35667:case 35671:return US;case 35668:case 35672:return NS;case 35669:case 35673:return OS;case 5125:return FS;case 36294:return BS;case 36295:return zS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}class YS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AS(n.type)}}class qS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XS(n.type)}}class jS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function mh(t,e){t.seq.push(e),t.map[e.id]=e}function $S(t,e,n){const i=t.name,r=i.length;for(ll.lastIndex=0;;){const s=ll.exec(i),o=ll.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mh(n,c===void 0?new YS(a,t,e):new qS(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new jS(a),mh(n,f)),n=f}}}class Ia{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);$S(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KS=37297;let ZS=0;function JS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function QS(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Ga&&n===Va?i="LinearDisplayP3ToLinearSRGB":e===Va&&n===Ga&&(i="LinearSRGBToLinearDisplayP3"),t){case Ri:case fo:return[i,"LinearTransferOETF"];case yn:case ou:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function _h(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+JS(t.getShaderSource(e),o)}else return r}function eE(t,e){const n=QS(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tE(t,e){let n;switch(e){case iv:n="Linear";break;case rv:n="Reinhard";break;case sv:n="Cineon";break;case av:n="ACESFilmic";break;case lv:n="AgX";break;case cv:n="Neutral";break;case ov:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const va=new W;function nE(){tt.getLuminanceCoefficients(va);const t=va.x.toFixed(4),e=va.y.toFixed(4),n=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function rE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function is(t){return t!==""}function vh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(t){return t.replace(aE,lE)}const oE=new Map;function lE(t,e){let n=Ge[e];if(n===void 0){const i=oE.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(n)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(t){return t.replace(cE,uE)}function uE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===C1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function hE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function pE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case tv:e="ENVMAP_BLENDING_MIX";break;case nv:e="ENVMAP_BLENDING_ADD";break}return e}function mE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fE(n),c=hE(n),u=dE(n),f=pE(n),h=mE(n),p=iE(n),M=rE(s),y=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(is).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(is).join(`
`),d.length>0&&(d+=`
`)):(m=[Mh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),d=[Mh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?Ge.tonemapping_pars_fragment:"",n.toneMapping!==vi?tE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,eE("linearToOutputTexel",n.outputColorSpace),nE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(is).join(`
`)),o=fc(o),o=vh(o,n),o=xh(o,n),a=fc(a),a=vh(a,n),a=xh(a,n),o=yh(o),a=yh(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=_+m+o,x=_+d+a,P=gh(r,r.VERTEX_SHADER,g),T=gh(r,r.FRAGMENT_SHADER,x);r.attachShader(y,P),r.attachShader(y,T),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(I){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),N=r.getShaderInfoLog(P).trim(),F=r.getShaderInfoLog(T).trim();let K=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,T);else{const Z=_h(r,P,"vertex"),G=_h(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+Z+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||F==="")&&(V=!1);V&&(I.diagnostics={runnable:K,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:d}})}r.deleteShader(P),r.deleteShader(T),L=new Ia(r,y),E=sE(r,y)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,KS)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ZS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=T,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new xE(e),n.set(e,i)),i}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function yE(t,e,n,i,r,s,o){const a=new cu,l=new vE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,z,N){const F=z.fog,K=N.geometry,V=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?n:e).get(E.envMap||V),G=Z&&Z.mapping===uo?Z.image.height:null,he=M[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ge=ue!==void 0?ue.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let we,ne,ce,_e;if(he){const Ke=En[he];we=Ke.vertexShader,ne=Ke.fragmentShader}else we=E.vertexShader,ne=E.fragmentShader,l.update(E),ce=l.getVertexShaderID(E),_e=l.getFragmentShaderID(E);const O=t.getRenderTarget(),ie=N.isInstancedMesh===!0,re=N.isBatchedMesh===!0,fe=!!E.map,Le=!!E.matcap,D=!!Z,R=!!E.aoMap,C=!!E.lightMap,k=!!E.bumpMap,$=!!E.normalMap,te=!!E.displacementMap,Q=!!E.emissiveMap,se=!!E.metalnessMap,b=!!E.roughnessMap,v=E.anisotropy>0,U=E.clearcoat>0,j=E.dispersion>0,X=E.iridescence>0,q=E.sheen>0,pe=E.transmission>0,oe=v&&!!E.anisotropyMap,me=U&&!!E.clearcoatMap,be=U&&!!E.clearcoatNormalMap,de=U&&!!E.clearcoatRoughnessMap,ye=X&&!!E.iridescenceMap,Be=X&&!!E.iridescenceThicknessMap,Ie=q&&!!E.sheenColorMap,Ae=q&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Ne=!!E.specularColorMap,qe=!!E.specularIntensityMap,B=pe&&!!E.transmissionMap,ve=pe&&!!E.thicknessMap,ae=!!E.gradientMap,le=!!E.alphaMap,Me=E.alphaTest>0,Oe=!!E.alphaHash,je=!!E.extensions;let dt=vi;E.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(dt=t.toneMapping);const Mt={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:we,fragmentShader:ne,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:re,batchingColor:re&&N._colorsTexture!==null,instancing:ie,instancingColor:ie&&N.instanceColor!==null,instancingMorph:ie&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ri,alphaToCoverage:!!E.alphaToCoverage,map:fe,matcap:Le,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:C,bumpMap:k,normalMap:$,displacementMap:h&&te,emissiveMap:Q,normalMapObjectSpace:$&&E.normalMapType===dv,normalMapTangentSpace:$&&E.normalMapType===Yp,metalnessMap:se,roughnessMap:b,anisotropy:v,anisotropyMap:oe,clearcoat:U,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:de,dispersion:j,iridescence:X,iridescenceMap:ye,iridescenceThicknessMap:Be,sheen:q,sheenColorMap:Ie,sheenRoughnessMap:Ae,specularMap:ze,specularColorMap:Ne,specularIntensityMap:qe,transmission:pe,transmissionMap:B,thicknessMap:ve,gradientMap:ae,opaque:E.transparent===!1&&E.blending===Cr&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:Me,alphaHash:Oe,combine:E.combine,mapUv:fe&&y(E.map.channel),aoMapUv:R&&y(E.aoMap.channel),lightMapUv:C&&y(E.lightMap.channel),bumpMapUv:k&&y(E.bumpMap.channel),normalMapUv:$&&y(E.normalMap.channel),displacementMapUv:te&&y(E.displacementMap.channel),emissiveMapUv:Q&&y(E.emissiveMap.channel),metalnessMapUv:se&&y(E.metalnessMap.channel),roughnessMapUv:b&&y(E.roughnessMap.channel),anisotropyMapUv:oe&&y(E.anisotropyMap.channel),clearcoatMapUv:me&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:be&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(E.sheenRoughnessMap.channel),specularMapUv:ze&&y(E.specularMap.channel),specularColorMapUv:Ne&&y(E.specularColorMap.channel),specularIntensityMapUv:qe&&y(E.specularIntensityMap.channel),transmissionMapUv:B&&y(E.transmissionMap.channel),thicknessMapUv:ve&&y(E.thicknessMap.channel),alphaMapUv:le&&y(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(fe||le),fog:!!F,useFog:E.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:dt,decodeVideoTexture:fe&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(_(S,E),g(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function g(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const S=M[E.type];let I;if(S){const z=En[S];I=ix.clone(z.uniforms)}else I=E.uniforms;return I}function P(E,S){let I;for(let z=0,N=u.length;z<N;z++){const F=u[z];if(F.cacheKey===S){I=F,++I.usedTimes;break}}return I===void 0&&(I=new gE(t,S,E,s),u.push(I)),I}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:L}}function ME(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function SE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,M,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:M,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,M,y,m){const d=o(f,h,p,M,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,M,y,m){const d=o(f,h,p,M,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||SE),i.length>1&&i.sort(h||Sh),r.length>1&&r.sort(h||Sh)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function EE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Eh,t.set(i,[o])):r>=s.length?(o=new Eh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function bE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Xe};break;case"SpotLight":n={position:new W,direction:new W,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function AE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TE=0;function wE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RE(t){const e=new bE,n=AE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new ct,o=new ct;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,M=0,y=0,m=0,d=0,_=0,g=0,x=0,P=0,T=0,w=0;c.sort(wE);for(let E=0,S=c.length;E<S;E++){const I=c[E],z=I.color,N=I.intensity,F=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*N,f+=z.g*N,h+=z.b*N;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],N);w++}else if(I.isDirectionalLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Z=I.shadow,G=n.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=I.shadow.matrix,_++}i.directional[p]=V,p++}else if(I.isSpotLight){const V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(z).multiplyScalar(N),V.distance=F,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[y]=V;const Z=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,Z.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,I.castShadow){const G=n.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=K,x++}y++}else if(I.isRectAreaLight){const V=e.get(I);V.color.copy(z).multiplyScalar(N),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=V,m++}else if(I.isPointLight){const V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){const Z=I.shadow,G=n.get(I);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[M]=G,i.pointShadowMap[M]=K,i.pointShadowMatrix[M]=I.shadow.matrix,g++}i.point[M]=V,M++}else if(I.isHemisphereLight){const V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(N),V.groundColor.copy(I.groundColor).multiplyScalar(N),i.hemi[d]=V,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==M||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==_||L.numPointShadows!==g||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=M,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,L.directionalLength=p,L.pointLength=M,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=_,L.numPointShadows=g,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=w,i.version=TE++)}function l(c,u){let f=0,h=0,p=0,M=0,y=0;const m=u.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){const g=c[d];if(g.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const x=i.rectArea[M];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),M++}else if(g.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function bh(t){const e=new RE(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function CE(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bh(t),e.set(r,[a])):s>=o.length?(a=new bh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class PE extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DE=`uniform sampler2D shadow_pass;
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
}`;function UE(t,e,n){let i=new fu;const r=new Ye,s=new Ye,o=new at,a=new PE({depthPacking:hv}),l=new LE,c={},u=n.maxTextureSize,f={[yi]:kt,[kt]:yi,[ln]:ln},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:IE,fragmentShader:DE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const M=new Zn;M.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nn(M,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let d=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),z=t.state;z.setBlending(_i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=d!==kn&&this.type===kn,F=d===kn&&this.type!==kn;for(let K=0,V=T.length;K<V;K++){const Z=T[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const he=G.getFrameExtents();if(r.multiply(he),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,G.mapSize.y=s.y)),G.map===null||N===!0||F===!0){const ge=this.type!==kn?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new Ki(r.x,r.y,ge),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const ue=G.getViewportCount();for(let ge=0;ge<ue;ge++){const Ee=G.getViewport(ge);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),z.viewport(o),G.updateMatrices(Z,ge),i=G.getFrustum(),x(w,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&_(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,S,I)};function _(T,w){const L=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,L,p,y,null)}function g(T,w,L,E){let S=null;const I=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,N=w.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let K=F[N];K===void 0&&(K=S.clone(),F[N]=K,w.addEventListener("dispose",P)),S=K}if(S.visible=w.visible,S.wireframe=w.wireframe,E===kn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=L}return S}function x(T,w,L,E,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===kn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const N=e.update(T),F=T.material;if(Array.isArray(F)){const K=N.groups;for(let V=0,Z=K.length;V<Z;V++){const G=K[V],he=F[G.materialIndex];if(he&&he.visible){const ue=g(T,he,E,S);T.onBeforeShadow(t,T,w,L,N,ue,G),t.renderBufferDirect(L,null,N,ue,T,G),T.onAfterShadow(t,T,w,L,N,ue,G)}}}else if(F.visible){const K=g(T,F,E,S);T.onBeforeShadow(t,T,w,L,N,K,null),t.renderBufferDirect(L,null,N,K,T,null),T.onAfterShadow(t,T,w,L,N,K,null)}}const z=T.children;for(let N=0,F=z.length;N<F;N++)x(z[N],w,L,E,S)}function P(T){T.target.removeEventListener("dispose",P);for(const L in c){const E=c[L],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}function NE(t){function e(){let B=!1;const ve=new at;let ae=null;const le=new at(0,0,0,0);return{setMask:function(Me){ae!==Me&&!B&&(t.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){B=Me},setClear:function(Me,Oe,je,dt,Mt){Mt===!0&&(Me*=dt,Oe*=dt,je*=dt),ve.set(Me,Oe,je,dt),le.equals(ve)===!1&&(t.clearColor(Me,Oe,je,dt),le.copy(ve))},reset:function(){B=!1,ae=null,le.set(-1,0,0,0)}}}function n(){let B=!1,ve=null,ae=null,le=null;return{setTest:function(Me){Me?_e(t.DEPTH_TEST):O(t.DEPTH_TEST)},setMask:function(Me){ve!==Me&&!B&&(t.depthMask(Me),ve=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case j1:t.depthFunc(t.NEVER);break;case $1:t.depthFunc(t.ALWAYS);break;case K1:t.depthFunc(t.LESS);break;case ka:t.depthFunc(t.LEQUAL);break;case Z1:t.depthFunc(t.EQUAL);break;case J1:t.depthFunc(t.GEQUAL);break;case Q1:t.depthFunc(t.GREATER);break;case ev:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Me}},setLocked:function(Me){B=Me},setClear:function(Me){le!==Me&&(t.clearDepth(Me),le=Me)},reset:function(){B=!1,ve=null,ae=null,le=null}}}function i(){let B=!1,ve=null,ae=null,le=null,Me=null,Oe=null,je=null,dt=null,Mt=null;return{setTest:function(Ke){B||(Ke?_e(t.STENCIL_TEST):O(t.STENCIL_TEST))},setMask:function(Ke){ve!==Ke&&!B&&(t.stencilMask(Ke),ve=Ke)},setFunc:function(Ke,In,gn){(ae!==Ke||le!==In||Me!==gn)&&(t.stencilFunc(Ke,In,gn),ae=Ke,le=In,Me=gn)},setOp:function(Ke,In,gn){(Oe!==Ke||je!==In||dt!==gn)&&(t.stencilOp(Ke,In,gn),Oe=Ke,je=In,dt=gn)},setLocked:function(Ke){B=Ke},setClear:function(Ke){Mt!==Ke&&(t.clearStencil(Ke),Mt=Ke)},reset:function(){B=!1,ve=null,ae=null,le=null,Me=null,Oe=null,je=null,dt=null,Mt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,M=!1,y=null,m=null,d=null,_=null,g=null,x=null,P=null,T=new Xe(0,0,0),w=0,L=!1,E=null,S=null,I=null,z=null,N=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=V>=2);let G=null,he={};const ue=t.getParameter(t.SCISSOR_BOX),ge=t.getParameter(t.VIEWPORT),Ee=new at().fromArray(ue),we=new at().fromArray(ge);function ne(B,ve,ae,le){const Me=new Uint8Array(4),Oe=t.createTexture();t.bindTexture(B,Oe),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<ae;je++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ve+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Oe}const ce={};ce[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),s.setFunc(ka),k(!1),$(Pf),_e(t.CULL_FACE),R(_i);function _e(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function O(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function ie(B,ve){return u[B]!==ve?(t.bindFramebuffer(B,ve),u[B]=ve,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ve),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function re(B,ve){let ae=h,le=!1;if(B){ae=f.get(ve),ae===void 0&&(ae=[],f.set(ve,ae));const Me=B.textures;if(ae.length!==Me.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Oe=0,je=Me.length;Oe<je;Oe++)ae[Oe]=t.COLOR_ATTACHMENT0+Oe;ae.length=Me.length,le=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,le=!0);le&&t.drawBuffers(ae)}function fe(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const Le={[ki]:t.FUNC_ADD,[L1]:t.FUNC_SUBTRACT,[I1]:t.FUNC_REVERSE_SUBTRACT};Le[D1]=t.MIN,Le[U1]=t.MAX;const D={[N1]:t.ZERO,[O1]:t.ONE,[F1]:t.SRC_COLOR,[Il]:t.SRC_ALPHA,[G1]:t.SRC_ALPHA_SATURATE,[H1]:t.DST_COLOR,[z1]:t.DST_ALPHA,[B1]:t.ONE_MINUS_SRC_COLOR,[Dl]:t.ONE_MINUS_SRC_ALPHA,[V1]:t.ONE_MINUS_DST_COLOR,[k1]:t.ONE_MINUS_DST_ALPHA,[W1]:t.CONSTANT_COLOR,[X1]:t.ONE_MINUS_CONSTANT_COLOR,[Y1]:t.CONSTANT_ALPHA,[q1]:t.ONE_MINUS_CONSTANT_ALPHA};function R(B,ve,ae,le,Me,Oe,je,dt,Mt,Ke){if(B===_i){M===!0&&(O(t.BLEND),M=!1);return}if(M===!1&&(_e(t.BLEND),M=!0),B!==P1){if(B!==y||Ke!==L){if((m!==ki||g!==ki)&&(t.blendEquation(t.FUNC_ADD),m=ki,g=ki),Ke)switch(B){case Cr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lf:t.blendFunc(t.ONE,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Df:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Cr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case If:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Df:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}d=null,_=null,x=null,P=null,T.set(0,0,0),w=0,y=B,L=Ke}return}Me=Me||ve,Oe=Oe||ae,je=je||le,(ve!==m||Me!==g)&&(t.blendEquationSeparate(Le[ve],Le[Me]),m=ve,g=Me),(ae!==d||le!==_||Oe!==x||je!==P)&&(t.blendFuncSeparate(D[ae],D[le],D[Oe],D[je]),d=ae,_=le,x=Oe,P=je),(dt.equals(T)===!1||Mt!==w)&&(t.blendColor(dt.r,dt.g,dt.b,Mt),T.copy(dt),w=Mt),y=B,L=!1}function C(B,ve){B.side===ln?O(t.CULL_FACE):_e(t.CULL_FACE);let ae=B.side===kt;ve&&(ae=!ae),k(ae),B.blending===Cr&&B.transparent===!1?R(_i):R(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const le=B.stencilWrite;o.setTest(le),le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Q(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):O(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function $(B){B!==w1?(_e(t.CULL_FACE),B!==S&&(B===Pf?t.cullFace(t.BACK):B===R1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):O(t.CULL_FACE),S=B}function te(B){B!==I&&(K&&t.lineWidth(B),I=B)}function Q(B,ve,ae){B?(_e(t.POLYGON_OFFSET_FILL),(z!==ve||N!==ae)&&(t.polygonOffset(ve,ae),z=ve,N=ae)):O(t.POLYGON_OFFSET_FILL)}function se(B){B?_e(t.SCISSOR_TEST):O(t.SCISSOR_TEST)}function b(B){B===void 0&&(B=t.TEXTURE0+F-1),G!==B&&(t.activeTexture(B),G=B)}function v(B,ve,ae){ae===void 0&&(G===null?ae=t.TEXTURE0+F-1:ae=G);let le=he[ae];le===void 0&&(le={type:void 0,texture:void 0},he[ae]=le),(le.type!==B||le.texture!==ve)&&(G!==ae&&(t.activeTexture(ae),G=ae),t.bindTexture(B,ve||ce[B]),le.type=B,le.texture=ve)}function U(){const B=he[G];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){Ee.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ee.copy(B))}function Ae(B){we.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),we.copy(B))}function ze(B,ve){let ae=l.get(ve);ae===void 0&&(ae=new WeakMap,l.set(ve,ae));let le=ae.get(B);le===void 0&&(le=t.getUniformBlockIndex(ve,B.name),ae.set(B,le))}function Ne(B,ve){const le=l.get(ve).get(B);a.get(ve)!==le&&(t.uniformBlockBinding(ve,le,B.__bindingPointIndex),a.set(ve,le))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},G=null,he={},u={},f=new WeakMap,h=[],p=null,M=!1,y=null,m=null,d=null,_=null,g=null,x=null,P=null,T=new Xe(0,0,0),w=0,L=!1,E=null,S=null,I=null,z=null,N=null,Ee.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:O,bindFramebuffer:ie,drawBuffers:re,useProgram:fe,setBlending:R,setMaterial:C,setFlipSided:k,setCullFace:$,setLineWidth:te,setPolygonOffset:Q,setScissorTest:se,activeTexture:b,bindTexture:v,unbindTexture:U,compressedTexImage2D:j,compressedTexImage3D:X,texImage2D:ye,texImage3D:Be,updateUBOMapping:ze,uniformBlockBinding:Ne,texStorage2D:be,texStorage3D:de,texSubImage2D:q,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:me,scissor:Ie,viewport:Ae,reset:qe}}function Ah(t,e,n,i){const r=OE(i);switch(n){case zp:return t*e;case Hp:return t*e;case Vp:return t*e*2;case Gp:return t*e/r.components*r.byteLength;case ru:return t*e/r.components*r.byteLength;case Wp:return t*e*2/r.components*r.byteLength;case su:return t*e*2/r.components*r.byteLength;case kp:return t*e*3/r.components*r.byteLength;case fn:return t*e*4/r.components*r.byteLength;case au:return t*e*4/r.components*r.byteLength;case wa:case Ra:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zl:case Hl:return Math.max(t,16)*Math.max(e,8)/4;case Bl:case kl:return Math.max(t,8)*Math.max(e,8)/2;case Vl:case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ec:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case tc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ic:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case La:case sc:case ac:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xp:case oc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function OE(t){switch(t){case qn:case Op:return{byteLength:1,components:1};case Rs:case Fp:case Ns:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case $i:case tu:case Gn:return{byteLength:4,components:1};case Bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function FE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,v){return p?new OffscreenCanvas(b,v):Ps("canvas")}function y(b,v,U){let j=1;const X=se(b);if((X.width>U||X.height>U)&&(j=U/Math.max(X.width,X.height)),j<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(j*X.width),pe=Math.floor(j*X.height);f===void 0&&(f=M(q,pe));const oe=v?M(q,pe):f;return oe.width=q,oe.height=pe,oe.getContext("2d").drawImage(b,0,0,q,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+q+"x"+pe+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==tn&&b.minFilter!==cn}function d(b){t.generateMipmap(b)}function _(b,v,U,j,X=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=v;if(v===t.RED&&(U===t.FLOAT&&(q=t.R32F),U===t.HALF_FLOAT&&(q=t.R16F),U===t.UNSIGNED_BYTE&&(q=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.R8UI),U===t.UNSIGNED_SHORT&&(q=t.R16UI),U===t.UNSIGNED_INT&&(q=t.R32UI),U===t.BYTE&&(q=t.R8I),U===t.SHORT&&(q=t.R16I),U===t.INT&&(q=t.R32I)),v===t.RG&&(U===t.FLOAT&&(q=t.RG32F),U===t.HALF_FLOAT&&(q=t.RG16F),U===t.UNSIGNED_BYTE&&(q=t.RG8)),v===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RG8UI),U===t.UNSIGNED_SHORT&&(q=t.RG16UI),U===t.UNSIGNED_INT&&(q=t.RG32UI),U===t.BYTE&&(q=t.RG8I),U===t.SHORT&&(q=t.RG16I),U===t.INT&&(q=t.RG32I)),v===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),v===t.RGBA){const pe=X?Ha:tt.getTransfer(j);U===t.FLOAT&&(q=t.RGBA32F),U===t.HALF_FLOAT&&(q=t.RGBA16F),U===t.UNSIGNED_BYTE&&(q=pe===st?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(b,v){let U;return b?v===null||v===$i||v===Br?U=t.DEPTH24_STENCIL8:v===Gn?U=t.DEPTH32F_STENCIL8:v===Rs&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$i||v===Br?U=t.DEPTH_COMPONENT24:v===Gn?U=t.DEPTH_COMPONENT32F:v===Rs&&(U=t.DEPTH_COMPONENT16),U}function x(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),w(v),v.isVideoTexture&&u.delete(v)}function T(b){const v=b.target;v.removeEventListener("dispose",T),E(v)}function w(b){const v=i.get(b);if(v.__webglInit===void 0)return;const U=b.source,j=h.get(U);if(j){const X=j[v.__cacheKey];X.usedTimes--,X.usedTimes===0&&L(b),Object.keys(j).length===0&&h.delete(U)}i.remove(b)}function L(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const U=b.source,j=h.get(U);delete j[v.__cacheKey],o.memory.textures--}function E(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let X=0;X<v.__webglFramebuffer[j].length;X++)t.deleteFramebuffer(v.__webglFramebuffer[j][X]);else t.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)t.deleteFramebuffer(v.__webglFramebuffer[j]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=b.textures;for(let j=0,X=U.length;j<X;j++){const q=i.get(U[j]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(U[j])}i.remove(b)}let S=0;function I(){S=0}function z(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function N(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function F(b,v){const U=i.get(b);if(b.isVideoTexture&&te(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const j=b.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(U,b,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function K(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){we(U,b,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function V(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){we(U,b,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function Z(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ne(U,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const G={[Ol]:t.REPEAT,[Gi]:t.CLAMP_TO_EDGE,[Fl]:t.MIRRORED_REPEAT},he={[tn]:t.NEAREST,[uv]:t.NEAREST_MIPMAP_NEAREST,[Ks]:t.NEAREST_MIPMAP_LINEAR,[cn]:t.LINEAR,[Bo]:t.LINEAR_MIPMAP_NEAREST,[Wi]:t.LINEAR_MIPMAP_LINEAR},ue={[pv]:t.NEVER,[yv]:t.ALWAYS,[mv]:t.LESS,[qp]:t.LEQUAL,[gv]:t.EQUAL,[xv]:t.GEQUAL,[_v]:t.GREATER,[vv]:t.NOTEQUAL};function ge(b,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===Bo||v.magFilter===Ks||v.magFilter===Wi||v.minFilter===cn||v.minFilter===Bo||v.minFilter===Ks||v.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,G[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,G[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,G[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,he[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tn||v.minFilter!==Ks&&v.minFilter!==Wi||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(b,v){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const j=v.source;let X=h.get(j);X===void 0&&(X={},h.set(j,X));const q=N(v);if(q!==b.__cacheKey){X[q]===void 0&&(X[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),X[q].usedTimes++;const pe=X[b.__cacheKey];pe!==void 0&&(X[b.__cacheKey].usedTimes--,pe.usedTimes===0&&L(v)),b.__cacheKey=q,b.__webglTexture=X[q].texture}return U}function we(b,v,U){let j=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=t.TEXTURE_3D);const X=Ee(b,v),q=v.source;n.bindTexture(j,b.__webglTexture,t.TEXTURE0+U);const pe=i.get(q);if(q.version!==pe.__version||X===!0){n.activeTexture(t.TEXTURE0+U);const oe=tt.getPrimaries(tt.workingColorSpace),me=v.colorSpace===pi?null:tt.getPrimaries(v.colorSpace),be=v.colorSpace===pi||oe===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let de=y(v.image,!1,r.maxTextureSize);de=Q(v,de);const ye=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Ie=_(v.internalFormat,ye,Be,v.colorSpace,v.isVideoTexture);ge(j,v);let Ae;const ze=v.mipmaps,Ne=v.isVideoTexture!==!0,qe=pe.__version===void 0||X===!0,B=q.dataReady,ve=x(v,de);if(v.isDepthTexture)Ie=g(v.format===zr,v.type),qe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,Ie,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ie,de.width,de.height,0,ye,Be,null));else if(v.isDataTexture)if(ze.length>0){Ne&&qe&&n.texStorage2D(t.TEXTURE_2D,ve,Ie,ze[0].width,ze[0].height);for(let ae=0,le=ze.length;ae<le;ae++)Ae=ze[ae],Ne?B&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Ae.width,Ae.height,ye,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,ae,Ie,Ae.width,Ae.height,0,ye,Be,Ae.data);v.generateMipmaps=!1}else Ne?(qe&&n.texStorage2D(t.TEXTURE_2D,ve,Ie,de.width,de.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de.width,de.height,ye,Be,de.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,de.width,de.height,0,ye,Be,de.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ie,ze[0].width,ze[0].height,de.depth);for(let ae=0,le=ze.length;ae<le;ae++)if(Ae=ze[ae],v.format!==fn)if(ye!==null)if(Ne){if(B)if(v.layerUpdates.size>0){const Me=Ah(Ae.width,Ae.height,v.format,v.type);for(const Oe of v.layerUpdates){const je=Ae.data.subarray(Oe*Me/Ae.data.BYTES_PER_ELEMENT,(Oe+1)*Me/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,Oe,Ae.width,Ae.height,1,ye,je,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,Ae.width,Ae.height,de.depth,ye,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Ie,Ae.width,Ae.height,de.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,Ae.width,Ae.height,de.depth,ye,Be,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Ie,Ae.width,Ae.height,de.depth,0,ye,Be,Ae.data)}else{Ne&&qe&&n.texStorage2D(t.TEXTURE_2D,ve,Ie,ze[0].width,ze[0].height);for(let ae=0,le=ze.length;ae<le;ae++)Ae=ze[ae],v.format!==fn?ye!==null?Ne?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,Ae.width,Ae.height,ye,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Ie,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,Ae.width,Ae.height,ye,Be,Ae.data):n.texImage2D(t.TEXTURE_2D,ae,Ie,Ae.width,Ae.height,0,ye,Be,Ae.data)}else if(v.isDataArrayTexture)if(Ne){if(qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ie,de.width,de.height,de.depth),B)if(v.layerUpdates.size>0){const ae=Ah(de.width,de.height,v.format,v.type);for(const le of v.layerUpdates){const Me=de.data.subarray(le*ae/de.data.BYTES_PER_ELEMENT,(le+1)*ae/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,ye,Be,Me)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ye,Be,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,de.width,de.height,de.depth,0,ye,Be,de.data);else if(v.isData3DTexture)Ne?(qe&&n.texStorage3D(t.TEXTURE_3D,ve,Ie,de.width,de.height,de.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ye,Be,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,de.width,de.height,de.depth,0,ye,Be,de.data);else if(v.isFramebufferTexture){if(qe)if(Ne)n.texStorage2D(t.TEXTURE_2D,ve,Ie,de.width,de.height);else{let ae=de.width,le=de.height;for(let Me=0;Me<ve;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ie,ae,le,0,ye,Be,null),ae>>=1,le>>=1}}else if(ze.length>0){if(Ne&&qe){const ae=se(ze[0]);n.texStorage2D(t.TEXTURE_2D,ve,Ie,ae.width,ae.height)}for(let ae=0,le=ze.length;ae<le;ae++)Ae=ze[ae],Ne?B&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ye,Be,Ae):n.texImage2D(t.TEXTURE_2D,ae,Ie,ye,Be,Ae);v.generateMipmaps=!1}else if(Ne){if(qe){const ae=se(de);n.texStorage2D(t.TEXTURE_2D,ve,Ie,ae.width,ae.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Be,de)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ye,Be,de);m(v)&&d(j),pe.__version=q.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ne(b,v,U){if(v.image.length!==6)return;const j=Ee(b,v),X=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const q=i.get(X);if(X.version!==q.__version||j===!0){n.activeTexture(t.TEXTURE0+U);const pe=tt.getPrimaries(tt.workingColorSpace),oe=v.colorSpace===pi?null:tt.getPrimaries(v.colorSpace),me=v.colorSpace===pi||pe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=v.isCompressedTexture||v.image[0].isCompressedTexture,de=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let le=0;le<6;le++)!be&&!de?ye[le]=y(v.image[le],!0,r.maxCubemapSize):ye[le]=de?v.image[le].image:v.image[le],ye[le]=Q(v,ye[le]);const Be=ye[0],Ie=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),ze=_(v.internalFormat,Ie,Ae,v.colorSpace),Ne=v.isVideoTexture!==!0,qe=q.__version===void 0||j===!0,B=X.dataReady;let ve=x(v,Be);ge(t.TEXTURE_CUBE_MAP,v);let ae;if(be){Ne&&qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,ze,Be.width,Be.height);for(let le=0;le<6;le++){ae=ye[le].mipmaps;for(let Me=0;Me<ae.length;Me++){const Oe=ae[Me];v.format!==fn?Ie!==null?Ne?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Oe.width,Oe.height,Ie,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,ze,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,0,0,Oe.width,Oe.height,Ie,Ae,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me,ze,Oe.width,Oe.height,0,Ie,Ae,Oe.data)}}}else{if(ae=v.mipmaps,Ne&&qe){ae.length>0&&ve++;const le=se(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,ze,le.width,le.height)}for(let le=0;le<6;le++)if(de){Ne?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ye[le].width,ye[le].height,Ie,Ae,ye[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,ye[le].width,ye[le].height,0,Ie,Ae,ye[le].data);for(let Me=0;Me<ae.length;Me++){const je=ae[Me].image[le].image;Ne?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,je.width,je.height,Ie,Ae,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,ze,je.width,je.height,0,Ie,Ae,je.data)}}else{Ne?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie,Ae,ye[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ze,Ie,Ae,ye[le]);for(let Me=0;Me<ae.length;Me++){const Oe=ae[Me];Ne?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,0,0,Ie,Ae,Oe.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Me+1,ze,Ie,Ae,Oe.image[le])}}}m(v)&&d(t.TEXTURE_CUBE_MAP),q.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ce(b,v,U,j,X,q){const pe=s.convert(U.format,U.colorSpace),oe=s.convert(U.type),me=_(U.internalFormat,pe,oe,U.colorSpace);if(!i.get(v).__hasExternalTextures){const de=Math.max(1,v.width>>q),ye=Math.max(1,v.height>>q);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,q,me,de,ye,v.depth,0,pe,oe,null):n.texImage2D(X,q,me,de,ye,0,pe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),$(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,X,i.get(U).__webglTexture,0,k(v)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,X,i.get(U).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(b,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const j=v.depthTexture,X=j&&j.isDepthTexture?j.type:null,q=g(v.stencilBuffer,X),pe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=k(v);$(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,q,v.width,v.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,q,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,b)}else{const j=v.textures;for(let X=0;X<j.length;X++){const q=j[X],pe=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),me=_(q.internalFormat,pe,oe,q.colorSpace),be=k(v);U&&$(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,me,v.width,v.height):$(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,me,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,me,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function O(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);const j=i.get(v.depthTexture).__webglTexture,X=k(v);if(v.depthTexture.format===Pr)$(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(v.depthTexture.format===zr)$(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ie(b){const v=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const j=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const X=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",X)};j.addEventListener("dispose",X),v.__depthDisposeCallback=X}v.__boundDepthTexture=j}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");O(v.__webglFramebuffer,b)}else if(U){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=t.createRenderbuffer(),_e(v.__webglDepthbuffer[j],b,!1);else{const X=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),_e(v.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(b,v,U){const j=i.get(b);v!==void 0&&ce(j.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&ie(b)}function fe(b){const v=b.texture,U=i.get(b),j=i.get(v);b.addEventListener("dispose",T);const X=b.textures,q=b.isWebGLCubeRenderTarget===!0,pe=X.length>1;if(pe||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=v.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let me=0;me<v.mipmaps.length;me++)U.__webglFramebuffer[oe][me]=t.createFramebuffer()}else U.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)U.__webglFramebuffer[oe]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(pe)for(let oe=0,me=X.length;oe<me;oe++){const be=i.get(X[oe]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&$(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const me=X[oe];U.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const be=s.convert(me.format,me.colorSpace),de=s.convert(me.type),ye=_(me.internalFormat,be,de,me.colorSpace,b.isXRRenderTarget===!0),Be=k(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ye,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),ge(t.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ce(U.__webglFramebuffer[oe][me],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else ce(U.__webglFramebuffer[oe],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let oe=0,me=X.length;oe<me;oe++){const be=X[oe],de=i.get(be);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),ge(t.TEXTURE_2D,be),ce(U.__webglFramebuffer,b,be,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(be)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,j.__webglTexture),ge(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)ce(U.__webglFramebuffer[me],b,v,t.COLOR_ATTACHMENT0,oe,me);else ce(U.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,oe,0);m(v)&&d(oe),n.unbindTexture()}b.depthBuffer&&ie(b)}function Le(b){const v=b.textures;for(let U=0,j=v.length;U<j;U++){const X=v[U];if(m(X)){const q=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,pe=i.get(X).__webglTexture;n.bindTexture(q,pe),d(q),n.unbindTexture()}}}const D=[],R=[];function C(b){if(b.samples>0){if($(b)===!1){const v=b.textures,U=b.width,j=b.height;let X=t.COLOR_BUFFER_BIT;const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(b),oe=v.length>1;if(oe)for(let me=0;me<v.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const be=i.get(v[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,U,j,0,0,U,j,X,t.NEAREST),l===!0&&(D.length=0,R.length=0,D.push(t.COLOR_ATTACHMENT0+me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(D.push(q),R.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let me=0;me<v.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const be=i.get(v[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function k(b){return Math.min(r.maxSamples,b.samples)}function $(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function te(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function Q(b,v){const U=b.colorSpace,j=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Ri&&U!==pi&&(tt.getTransfer(U)===st?(j!==fn||X!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function se(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=I,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=$}function BE(t,e){function n(i,r=pi){let s;const o=tt.getTransfer(r);if(i===qn)return t.UNSIGNED_BYTE;if(i===nu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Bp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Op)return t.BYTE;if(i===Fp)return t.SHORT;if(i===Rs)return t.UNSIGNED_SHORT;if(i===tu)return t.INT;if(i===$i)return t.UNSIGNED_INT;if(i===Gn)return t.FLOAT;if(i===Ns)return t.HALF_FLOAT;if(i===zp)return t.ALPHA;if(i===kp)return t.RGB;if(i===fn)return t.RGBA;if(i===Hp)return t.LUMINANCE;if(i===Vp)return t.LUMINANCE_ALPHA;if(i===Pr)return t.DEPTH_COMPONENT;if(i===zr)return t.DEPTH_STENCIL;if(i===Gp)return t.RED;if(i===ru)return t.RED_INTEGER;if(i===Wp)return t.RG;if(i===su)return t.RG_INTEGER;if(i===au)return t.RGBA_INTEGER;if(i===wa||i===Ra||i===Ca||i===Pa)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===zl||i===kl||i===Hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vl||i===Gl||i===Wl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vl||i===Gl)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xl||i===Yl||i===ql||i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===La||i===sc||i===ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===La)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xp||i===oc||i===lc||i===cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===La)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class zE extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xa extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kE={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,M=.005;c.inputState.pinching&&h>p+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VE=`
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

}`;class GE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Mi({vertexShader:HE,fragmentShader:VE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WE extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,M=null;const y=new GE,m=n.getContextAttributes();let d=null,_=null;const g=[],x=[],P=new Ye;let T=null;const w=new qt;w.layers.enable(1),w.viewport=new at;const L=new qt;L.layers.enable(2),L.viewport=new at;const E=[w,L],S=new zE;S.layers.enable(1),S.layers.enable(2);let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ce=g[ne];return ce===void 0&&(ce=new cl,g[ne]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ne){let ce=g[ne];return ce===void 0&&(ce=new cl,g[ne]=ce),ce.getGripSpace()},this.getHand=function(ne){let ce=g[ne];return ce===void 0&&(ce=new cl,g[ne]=ce),ce.getHandSpace()};function N(ne){const ce=x.indexOf(ne.inputSource);if(ce===-1)return;const _e=g[ce];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,c||o),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",K);for(let ne=0;ne<g.length;ne++){const ce=x[ne];ce!==null&&(x[ne]=null,g[ne].disconnect(ce))}I=null,z=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ki(p.framebufferWidth,p.framebufferHeight,{format:fn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,_e=null,O=null;m.depth&&(O=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?zr:Pr,_e=m.stencil?Br:$i);const ie={colorFormat:n.RGBA8,depthFormat:O,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Ki(h.textureWidth,h.textureHeight,{format:fn,type:qn,depthTexture:new am(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ne){for(let ce=0;ce<ne.removed.length;ce++){const _e=ne.removed[ce],O=x.indexOf(_e);O>=0&&(x[O]=null,g[O].disconnect(_e))}for(let ce=0;ce<ne.added.length;ce++){const _e=ne.added[ce];let O=x.indexOf(_e);if(O===-1){for(let re=0;re<g.length;re++)if(re>=x.length){x.push(_e),O=re;break}else if(x[re]===null){x[re]=_e,O=re;break}if(O===-1)break}const ie=g[O];ie&&ie.connect(_e)}}const V=new W,Z=new W;function G(ne,ce,_e){V.setFromMatrixPosition(ce.matrixWorld),Z.setFromMatrixPosition(_e.matrixWorld);const O=V.distanceTo(Z),ie=ce.projectionMatrix.elements,re=_e.projectionMatrix.elements,fe=ie[14]/(ie[10]-1),Le=ie[14]/(ie[10]+1),D=(ie[9]+1)/ie[5],R=(ie[9]-1)/ie[5],C=(ie[8]-1)/ie[0],k=(re[8]+1)/re[0],$=fe*C,te=fe*k,Q=O/(-C+k),se=Q*-C;if(ce.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(Q),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ie[10]===-1)ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const b=fe+Q,v=Le+Q,U=$-se,j=te+(O-se),X=D*Le/v*b,q=R*Le/v*b;ne.projectionMatrix.makePerspective(U,j,X,q,b,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function he(ne,ce){ce===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ce.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let ce=ne.near,_e=ne.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),S.near=L.near=w.near=ce,S.far=L.far=w.far=_e,(I!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,z=S.far);const O=ne.parent,ie=S.cameras;he(S,O);for(let re=0;re<ie.length;re++)he(ie[re],O);ie.length===2?G(S,w,L):S.projectionMatrix.copy(w.projectionMatrix),ue(ne,S,O)};function ue(ne,ce,_e){_e===null?ne.matrix.copy(ce.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ce.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ce.projectionMatrix),ne.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Cs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let ge=null;function Ee(ne,ce){if(u=ce.getViewerPose(c||o),M=ce,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let O=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let re=0;re<_e.length;re++){const fe=_e[re];let Le=null;if(p!==null)Le=p.getViewport(fe);else{const R=f.getViewSubImage(h,fe);Le=R.viewport,re===0&&(e.setRenderTargetTextures(_,R.colorTexture,h.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(_))}let D=E[re];D===void 0&&(D=new qt,D.layers.enable(re),D.viewport=new at,E[re]=D),D.matrix.fromArray(fe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(fe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Le.x,Le.y,Le.width,Le.height),re===0&&(S.matrix.copy(D.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(D)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")){const re=f.getDepthInformation(_e[0]);re&&re.isValid&&re.texture&&y.init(e,re,r.renderState)}}for(let _e=0;_e<g.length;_e++){const O=x[_e],ie=g[_e];O!==null&&ie!==void 0&&ie.update(O,ce,c||o)}ge&&ge(ne,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const we=new rm;we.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){ge=ne},this.dispose=function(){}}}const Fi=new Pn,XE=new ct;function YE(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tm(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,g,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),M(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),g=_.envMap,x=_.envMapRotation;g&&(m.envMap.value=g,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(XE.makeRotationFromEuler(Fi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const x=g.program;i.uniformBlockBinding(_,x)}function c(_,g){let x=r[_.id];x===void 0&&(M(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function u(_){const g=f();_.__bindingPointIndex=g;const x=t.createBuffer(),P=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],x=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,w=x.length;T<w;T++){const L=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,S=L.length;E<S;E++){const I=L[E];if(p(I,T,E,P)===!0){const z=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let F=0;for(let K=0;K<N.length;K++){const V=N[K],Z=y(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,z+F,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,x,P){const T=_.value,w=g+"_"+x;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{const L=P[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function M(_){const g=_.uniforms;let x=0;const P=16;for(let w=0,L=g.length;w<L;w++){const E=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,I=E.length;S<I;S++){const z=E[S],N=Array.isArray(z.value)?z.value:[z.value];for(let F=0,K=N.length;F<K;F++){const V=N[F],Z=y(V),G=x%P,he=G%Z.boundary,ue=G+he;x+=he,ue!==0&&P-ue<Z.storage&&(x+=P-ue),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const T=x%P;return T>0&&(x+=P-T),_.__size=x,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class jE{constructor(e={}){const{canvas:n=Bv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),M=new Int32Array(4);let y=null,m=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=vi,this.toneMappingExposure=1;const g=this;let x=!1,P=0,T=0,w=null,L=-1,E=null;const S=new at,I=new at;let z=null;const N=new Xe(0);let F=0,K=n.width,V=n.height,Z=1,G=null,he=null;const ue=new at(0,0,K,V),ge=new at(0,0,K,V);let Ee=!1;const we=new fu;let ne=!1,ce=!1;const _e=new ct,O=new W,ie=new at,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Le(){return w===null?Z:1}let D=i;function R(A,H){return n.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eu}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",Me,!1),D===null){const H="webgl2";if(D=R(H,A),D===null)throw R(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let C,k,$,te,Q,se,b,v,U,j,X,q,pe,oe,me,be,de,ye,Be,Ie,Ae,ze,Ne,qe;function B(){C=new eS(D),C.init(),ze=new BE(D,C),k=new jM(D,C,e,ze),$=new NE(D),te=new iS(D),Q=new ME,se=new FE(D,C,$,Q,k,ze,te),b=new KM(g),v=new QM(g),U=new ux(D),Ne=new YM(D,U),j=new tS(D,U,te,Ne),X=new sS(D,j,U,te),Be=new rS(D,k,se),be=new $M(Q),q=new yE(g,b,v,C,k,Ne,be),pe=new YE(g,Q),oe=new EE,me=new CE(C),ye=new XM(g,b,v,$,X,h,l),de=new UE(g,X,k),qe=new qE(D,te,k,$),Ie=new qM(D,C,te),Ae=new nS(D,C,te),te.programs=q.programs,g.capabilities=k,g.extensions=C,g.properties=Q,g.renderLists=oe,g.shadowMap=de,g.state=$,g.info=te}B();const ve=new WE(g,D);this.xr=ve,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=C.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=C.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(K,V,!1))},this.getSize=function(A){return A.set(K,V)},this.setSize=function(A,H,J=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,V=H,n.width=Math.floor(A*Z),n.height=Math.floor(H*Z),J===!0&&(n.style.width=A+"px",n.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(K*Z,V*Z).floor()},this.setDrawingBufferSize=function(A,H,J){K=A,V=H,Z=J,n.width=Math.floor(A*J),n.height=Math.floor(H*J),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(ue)},this.setViewport=function(A,H,J,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,H,J,ee),$.viewport(S.copy(ue).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,H,J,ee){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,H,J,ee),$.scissor(I.copy(ge).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){$.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(A=!0,H=!0,J=!0){let ee=0;if(A){let Y=!1;if(w!==null){const xe=w.texture.format;Y=xe===au||xe===su||xe===ru}if(Y){const xe=w.texture.type,Te=xe===qn||xe===$i||xe===Rs||xe===Br||xe===nu||xe===iu,Ce=ye.getClearColor(),Pe=ye.getClearAlpha(),Fe=Ce.r,ke=Ce.g,De=Ce.b;Te?(p[0]=Fe,p[1]=ke,p[2]=De,p[3]=Pe,D.clearBufferuiv(D.COLOR,0,p)):(M[0]=Fe,M[1]=ke,M[2]=De,M[3]=Pe,D.clearBufferiv(D.COLOR,0,M))}else ee|=D.COLOR_BUFFER_BIT}H&&(ee|=D.DEPTH_BUFFER_BIT),J&&(ee|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),oe.dispose(),me.dispose(),Q.dispose(),b.dispose(),v.dispose(),X.dispose(),Ne.dispose(),qe.dispose(),q.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",gn),ve.removeEventListener("sessionend",wu),Ci.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=te.autoReset,H=de.enabled,J=de.autoUpdate,ee=de.needsUpdate,Y=de.type;B(),te.autoReset=A,de.enabled=H,de.autoUpdate=J,de.needsUpdate=ee,de.type=Y}function Me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const H=A.target;H.removeEventListener("dispose",Oe),je(H)}function je(A){dt(A),Q.remove(A)}function dt(A){const H=Q.get(A).programs;H!==void 0&&(H.forEach(function(J){q.releaseProgram(J)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,J,ee,Y,xe){H===null&&(H=re);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=$m(A,H,J,ee,Y);$.setMaterial(ee,Te);let Pe=J.index,Fe=1;if(ee.wireframe===!0){if(Pe=j.getWireframeAttribute(J),Pe===void 0)return;Fe=2}const ke=J.drawRange,De=J.attributes.position;let Ze=ke.start*Fe,ft=(ke.start+ke.count)*Fe;xe!==null&&(Ze=Math.max(Ze,xe.start*Fe),ft=Math.min(ft,(xe.start+xe.count)*Fe)),Pe!==null?(Ze=Math.max(Ze,0),ft=Math.min(ft,Pe.count)):De!=null&&(Ze=Math.max(Ze,0),ft=Math.min(ft,De.count));const ht=ft-Ze;if(ht<0||ht===1/0)return;Ne.setup(Y,ee,Ce,J,Pe);let Ht,Je=Ie;if(Pe!==null&&(Ht=U.get(Pe),Je=Ae,Je.setIndex(Ht)),Y.isMesh)ee.wireframe===!0?($.setLineWidth(ee.wireframeLinewidth*Le()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(Y.isLine){let Ue=ee.linewidth;Ue===void 0&&(Ue=1),$.setLineWidth(Ue*Le()),Y.isLineSegments?Je.setMode(D.LINES):Y.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else Y.isPoints?Je.setMode(D.POINTS):Y.isSprite&&Je.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Je.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(C.get("WEBGL_multi_draw"))Je.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ue=Y._multiDrawStarts,St=Y._multiDrawCounts,Qe=Y._multiDrawCount,rn=Pe?U.get(Pe).bytesPerElement:1,er=Q.get(ee).currentProgram.getUniforms();for(let Vt=0;Vt<Qe;Vt++)er.setValue(D,"_gl_DrawID",Vt),Je.render(Ue[Vt]/rn,St[Vt])}else if(Y.isInstancedMesh)Je.renderInstances(Ze,ht,Y.count);else if(J.isInstancedBufferGeometry){const Ue=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,St=Math.min(J.instanceCount,Ue);Je.renderInstances(Ze,ht,St)}else Je.render(Ze,ht)};function Mt(A,H,J){A.transparent===!0&&A.side===ln&&A.forceSinglePass===!1?(A.side=kt,A.needsUpdate=!0,Gs(A,H,J),A.side=yi,A.needsUpdate=!0,Gs(A,H,J),A.side=ln):Gs(A,H,J)}this.compile=function(A,H,J=null){J===null&&(J=A),m=me.get(J),m.init(H),_.push(m),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==J&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights();const ee=new Set;return A.traverse(function(Y){const xe=Y.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ce=xe[Te];Mt(Ce,J,Y),ee.add(Ce)}else Mt(xe,J,Y),ee.add(xe)}),_.pop(),m=null,ee},this.compileAsync=function(A,H,J=null){const ee=this.compile(A,H,J);return new Promise(Y=>{function xe(){if(ee.forEach(function(Te){Q.get(Te).currentProgram.isReady()&&ee.delete(Te)}),ee.size===0){Y(A);return}setTimeout(xe,10)}C.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Ke=null;function In(A){Ke&&Ke(A)}function gn(){Ci.stop()}function wu(){Ci.start()}const Ci=new rm;Ci.setAnimationLoop(In),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Ke=A,ve.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},ve.addEventListener("sessionstart",gn),ve.addEventListener("sessionend",wu),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,H,w),m=me.get(A,_.length),m.init(H),_.push(m),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),we.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,ne=be.init(this.clippingPlanes,ce),y=oe.get(A,d.length),y.init(),d.push(y),ve.enabled===!0&&ve.isPresenting===!0){const xe=g.xr.getDepthSensingMesh();xe!==null&&yo(xe,H,-1/0,g.sortObjects)}yo(A,H,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(G,he),fe=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,fe&&ye.addToRenderList(y,A),this.info.render.frame++,ne===!0&&be.beginShadows();const J=m.state.shadowsArray;de.render(J,A,H),ne===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,Y=y.transmissive;if(m.setupLights(),H.isArrayCamera){const xe=H.cameras;if(Y.length>0)for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Pe=xe[Te];Cu(ee,Y,A,Pe)}fe&&ye.render(A);for(let Te=0,Ce=xe.length;Te<Ce;Te++){const Pe=xe[Te];Ru(y,A,Pe,Pe.viewport)}}else Y.length>0&&Cu(ee,Y,A,H),fe&&ye.render(A),Ru(y,A,H);w!==null&&(se.updateMultisampleRenderTarget(w),se.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,H),Ne.resetDefaultState(),L=-1,E=null,_.pop(),_.length>0?(m=_[_.length-1],ne===!0&&be.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function yo(A,H,J,ee){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||we.intersectsSprite(A)){ee&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Te=X.update(A),Ce=A.material;Ce.visible&&y.push(A,Te,Ce,J,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||we.intersectsObject(A))){const Te=X.update(A),Ce=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ie.copy(Te.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ce)){const Pe=Te.groups;for(let Fe=0,ke=Pe.length;Fe<ke;Fe++){const De=Pe[Fe],Ze=Ce[De.materialIndex];Ze&&Ze.visible&&y.push(A,Te,Ze,J,ie.z,De)}}else Ce.visible&&y.push(A,Te,Ce,J,ie.z,null)}}const xe=A.children;for(let Te=0,Ce=xe.length;Te<Ce;Te++)yo(xe[Te],H,J,ee)}function Ru(A,H,J,ee){const Y=A.opaque,xe=A.transmissive,Te=A.transparent;m.setupLightsView(J),ne===!0&&be.setGlobalState(g.clippingPlanes,J),ee&&$.viewport(S.copy(ee)),Y.length>0&&Vs(Y,H,J),xe.length>0&&Vs(xe,H,J),Te.length>0&&Vs(Te,H,J),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Cu(A,H,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ee.id]===void 0&&(m.state.transmissionRenderTarget[ee.id]=new Ki(1,1,{generateMipmaps:!0,type:C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float")?Ns:qn,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const xe=m.state.transmissionRenderTarget[ee.id],Te=ee.viewport||S;xe.setSize(Te.z,Te.w);const Ce=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(N),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear(),fe&&ye.render(J);const Pe=g.toneMapping;g.toneMapping=vi;const Fe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),m.setupLightsView(ee),ne===!0&&be.setGlobalState(g.clippingPlanes,ee),Vs(A,J,ee),se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe),C.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,Ze=H.length;De<Ze;De++){const ft=H[De],ht=ft.object,Ht=ft.geometry,Je=ft.material,Ue=ft.group;if(Je.side===ln&&ht.layers.test(ee.layers)){const St=Je.side;Je.side=kt,Je.needsUpdate=!0,Pu(ht,J,ee,Ht,Je,Ue),Je.side=St,Je.needsUpdate=!0,ke=!0}}ke===!0&&(se.updateMultisampleRenderTarget(xe),se.updateRenderTargetMipmap(xe))}g.setRenderTarget(Ce),g.setClearColor(N,F),Fe!==void 0&&(ee.viewport=Fe),g.toneMapping=Pe}function Vs(A,H,J){const ee=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,xe=A.length;Y<xe;Y++){const Te=A[Y],Ce=Te.object,Pe=Te.geometry,Fe=ee===null?Te.material:ee,ke=Te.group;Ce.layers.test(J.layers)&&Pu(Ce,H,J,Pe,Fe,ke)}}function Pu(A,H,J,ee,Y,xe){A.onBeforeRender(g,H,J,ee,Y,xe),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(g,H,J,ee,A,xe),Y.transparent===!0&&Y.side===ln&&Y.forceSinglePass===!1?(Y.side=kt,Y.needsUpdate=!0,g.renderBufferDirect(J,H,ee,Y,A,xe),Y.side=yi,Y.needsUpdate=!0,g.renderBufferDirect(J,H,ee,Y,A,xe),Y.side=ln):g.renderBufferDirect(J,H,ee,Y,A,xe),A.onAfterRender(g,H,J,ee,Y,xe)}function Gs(A,H,J){H.isScene!==!0&&(H=re);const ee=Q.get(A),Y=m.state.lights,xe=m.state.shadowsArray,Te=Y.state.version,Ce=q.getParameters(A,Y.state,xe,H,J),Pe=q.getProgramCacheKey(Ce);let Fe=ee.programs;ee.environment=A.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(A.isMeshStandardMaterial?v:b).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",Oe),Fe=new Map,ee.programs=Fe);let ke=Fe.get(Pe);if(ke!==void 0){if(ee.currentProgram===ke&&ee.lightsStateVersion===Te)return Iu(A,Ce),ke}else Ce.uniforms=q.getUniforms(A),A.onBeforeCompile(Ce,g),ke=q.acquireProgram(Ce,Pe),Fe.set(Pe,ke),ee.uniforms=Ce.uniforms;const De=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=be.uniform),Iu(A,Ce),ee.needsLights=Zm(A),ee.lightsStateVersion=Te,ee.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=ke,ee.uniformsList=null,ke}function Lu(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Ia.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Iu(A,H){const J=Q.get(A);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function $m(A,H,J,ee,Y){H.isScene!==!0&&(H=re),se.resetTextureUnits();const xe=H.fog,Te=ee.isMeshStandardMaterial?H.environment:null,Ce=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ri,Pe=(ee.isMeshStandardMaterial?v:b).get(ee.envMap||Te),Fe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),De=!!J.morphAttributes.position,Ze=!!J.morphAttributes.normal,ft=!!J.morphAttributes.color;let ht=vi;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=g.toneMapping);const Ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Je=Ht!==void 0?Ht.length:0,Ue=Q.get(ee),St=m.state.lights;if(ne===!0&&(ce===!0||A!==E)){const Qt=A===E&&ee.id===L;be.setState(ee,A,Qt)}let Qe=!1;ee.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==St.state.version||Ue.outputColorSpace!==Ce||Y.isBatchedMesh&&Ue.batching===!1||!Y.isBatchedMesh&&Ue.batching===!0||Y.isBatchedMesh&&Ue.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ue.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ue.instancing===!1||!Y.isInstancedMesh&&Ue.instancing===!0||Y.isSkinnedMesh&&Ue.skinning===!1||!Y.isSkinnedMesh&&Ue.skinning===!0||Y.isInstancedMesh&&Ue.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ue.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ue.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ue.instancingMorph===!1&&Y.morphTexture!==null||Ue.envMap!==Pe||ee.fog===!0&&Ue.fog!==xe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==be.numPlanes||Ue.numIntersection!==be.numIntersection)||Ue.vertexAlphas!==Fe||Ue.vertexTangents!==ke||Ue.morphTargets!==De||Ue.morphNormals!==Ze||Ue.morphColors!==ft||Ue.toneMapping!==ht||Ue.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,Ue.__version=ee.version);let rn=Ue.currentProgram;Qe===!0&&(rn=Gs(ee,H,Y));let er=!1,Vt=!1,Mo=!1;const pt=rn.getUniforms(),Qn=Ue.uniforms;if($.useProgram(rn.program)&&(er=!0,Vt=!0,Mo=!0),ee.id!==L&&(L=ee.id,Vt=!0),er||E!==A){pt.setValue(D,"projectionMatrix",A.projectionMatrix),pt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(D,O.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&pt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Vt=!0,Mo=!0)}if(Y.isSkinnedMesh){pt.setOptional(D,Y,"bindMatrix"),pt.setOptional(D,Y,"bindMatrixInverse");const Qt=Y.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),pt.setValue(D,"boneTexture",Qt.boneTexture,se))}Y.isBatchedMesh&&(pt.setOptional(D,Y,"batchingTexture"),pt.setValue(D,"batchingTexture",Y._matricesTexture,se),pt.setOptional(D,Y,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",Y._indirectTexture,se),pt.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",Y._colorsTexture,se));const So=J.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Be.update(Y,J,rn),(Vt||Ue.receiveShadow!==Y.receiveShadow)&&(Ue.receiveShadow=Y.receiveShadow,pt.setValue(D,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Qn.envMap.value=Pe,Qn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(Qn.envMapIntensity.value=H.environmentIntensity),Vt&&(pt.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ue.needsLights&&Km(Qn,Mo),xe&&ee.fog===!0&&pe.refreshFogUniforms(Qn,xe),pe.refreshMaterialUniforms(Qn,ee,Z,V,m.state.transmissionRenderTarget[A.id]),Ia.upload(D,Lu(Ue),Qn,se)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ia.upload(D,Lu(Ue),Qn,se),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&pt.setValue(D,"center",Y.center),pt.setValue(D,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(D,"normalMatrix",Y.normalMatrix),pt.setValue(D,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Qt=ee.uniformsGroups;for(let Eo=0,Jm=Qt.length;Eo<Jm;Eo++){const Du=Qt[Eo];qe.update(Du,rn),qe.bind(Du,rn)}}return rn}function Km(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Zm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,H,J){Q.get(A.texture).__webglTexture=H,Q.get(A.depthTexture).__webglTexture=J;const ee=Q.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||C.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,H){const J=Q.get(A);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,J=0){w=A,P=H,T=J;let ee=!0,Y=null,xe=!1,Te=!1;if(A){const Pe=Q.get(A);if(Pe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(D.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)se.setupRenderTarget(A);else if(Pe.__hasExternalTextures)se.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const De=A.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&Q.has(De)&&(A.width!==De.image.width||A.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const ke=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?Y=ke[H][J]:Y=ke[H],xe=!0):A.samples>0&&se.useMultisampledRTT(A)===!1?Y=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[J]:Y=ke,S.copy(A.viewport),I.copy(A.scissor),z=A.scissorTest}else S.copy(ue).multiplyScalar(Z).floor(),I.copy(ge).multiplyScalar(Z).floor(),z=Ee;if($.bindFramebuffer(D.FRAMEBUFFER,Y)&&ee&&$.drawBuffers(A,Y),$.viewport(S),$.scissor(I),$.setScissorTest(z),xe){const Pe=Q.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,J)}else if(Te){const Pe=Q.get(A.texture),Fe=H||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,J||0,Fe)}L=-1},this.readRenderTargetPixels=function(A,H,J,ee,Y,xe,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){$.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Pe=A.texture,Fe=Pe.format,ke=Pe.type;if(!k.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ee&&J>=0&&J<=A.height-Y&&D.readPixels(H,J,ee,Y,ze.convert(Fe),ze.convert(ke),xe)}finally{const Pe=w!==null?Q.get(w).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,H,J,ee,Y,xe,Te){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ce=Ce[Te]),Ce){$.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Pe=A.texture,Fe=Pe.format,ke=Pe.type;if(!k.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=A.width-ee&&J>=0&&J<=A.height-Y){const De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,xe.byteLength,D.STREAM_READ),D.readPixels(H,J,ee,Y,ze.convert(Fe),ze.convert(ke),0),D.flush();const Ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await zv(D,Ze,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xe)}finally{D.deleteBuffer(De),D.deleteSync(Ze)}return xe}}finally{const Pe=w!==null?Q.get(w).__webglFramebuffer:null;$.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,H=null,J=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,A=arguments[1]);const ee=Math.pow(2,-J),Y=Math.floor(A.image.width*ee),xe=Math.floor(A.image.height*ee),Te=H!==null?H.x:0,Ce=H!==null?H.y:0;se.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Te,Ce,Y,xe),$.unbindTexture()},this.copyTextureToTexture=function(A,H,J=null,ee=null,Y=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],H=arguments[2],Y=arguments[3]||0,J=null);let xe,Te,Ce,Pe,Fe,ke;J!==null?(xe=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ce=J.min.x,Pe=J.min.y):(xe=A.image.width,Te=A.image.height,Ce=0,Pe=0),ee!==null?(Fe=ee.x,ke=ee.y):(Fe=0,ke=0);const De=ze.convert(H.format),Ze=ze.convert(H.type);se.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const ft=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ht=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ue=D.getParameter(D.UNPACK_SKIP_IMAGES),St=A.isCompressedTexture?A.mipmaps[Y]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Y,Fe,ke,xe,Te,De,Ze,St.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Y,Fe,ke,St.width,St.height,De,St.data):D.texSubImage2D(D.TEXTURE_2D,Y,Fe,ke,xe,Te,De,Ze,St),D.pixelStorei(D.UNPACK_ROW_LENGTH,ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue),Y===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(A,H,J=null,ee=null,Y=0){A.isTexture!==!0&&(_s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],H=arguments[3],Y=arguments[4]||0);let xe,Te,Ce,Pe,Fe,ke,De,Ze,ft;const ht=A.isCompressedTexture?A.mipmaps[Y]:A.image;J!==null?(xe=J.max.x-J.min.x,Te=J.max.y-J.min.y,Ce=J.max.z-J.min.z,Pe=J.min.x,Fe=J.min.y,ke=J.min.z):(xe=ht.width,Te=ht.height,Ce=ht.depth,Pe=0,Fe=0,ke=0),ee!==null?(De=ee.x,Ze=ee.y,ft=ee.z):(De=0,Ze=0,ft=0);const Ht=ze.convert(H.format),Je=ze.convert(H.type);let Ue;if(H.isData3DTexture)se.setTexture3D(H,0),Ue=D.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)se.setTexture2DArray(H,0),Ue=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);const St=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),rn=D.getParameter(D.UNPACK_SKIP_PIXELS),er=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ke),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ue,Y,De,Ze,ft,xe,Te,Ce,Ht,Je,ht.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Ue,Y,De,Ze,ft,xe,Te,Ce,Ht,ht.data):D.texSubImage3D(Ue,Y,De,Ze,ft,xe,Te,Ce,Ht,Je,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,St),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,er),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),Y===0&&H.generateMipmaps&&D.generateMipmap(Ue),$.unbindTexture()},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&se.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?se.setTextureCube(A,0):A.isData3DTexture?se.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?se.setTexture2DArray(A,0):se.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){P=0,T=0,w=null,$.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ou?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===fo?"display-p3":"srgb"}}class Th extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class du extends Zn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Rn(s,3)),this.setAttribute("normal",new Rn(s.slice(),3)),this.setAttribute("uv",new Rn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new W,x=new W,P=new W;for(let T=0;T<n.length;T+=3)p(n[T+0],g),p(n[T+1],x),p(n[T+2],P),l(g,x,P,_)}function l(_,g,x,P){const T=P+1,w=[];for(let L=0;L<=T;L++){w[L]=[];const E=_.clone().lerp(x,L/T),S=g.clone().lerp(x,L/T),I=T-L;for(let z=0;z<=I;z++)z===0&&L===T?w[L][z]=E:w[L][z]=E.clone().lerp(S,z/I)}for(let L=0;L<T;L++)for(let E=0;E<2*(T-L)-1;E++){const S=Math.floor(E/2);E%2===0?(h(w[L][S+1]),h(w[L+1][S]),h(w[L][S])):(h(w[L][S+1]),h(w[L+1][S+1]),h(w[L+1][S]))}}function c(_){const g=new W;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(_),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function u(){const _=new W;for(let g=0;g<s.length;g+=3){_.x=s[g+0],_.y=s[g+1],_.z=s[g+2];const x=m(_)/2/Math.PI+.5,P=d(_)/Math.PI+.5;o.push(x,1-P)}M(),f()}function f(){for(let _=0;_<o.length;_+=6){const g=o[_+0],x=o[_+2],P=o[_+4],T=Math.max(g,x,P),w=Math.min(g,x,P);T>.9&&w<.1&&(g<.2&&(o[_+0]+=1),x<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function h(_){s.push(_.x,_.y,_.z)}function p(_,g){const x=_*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function M(){const _=new W,g=new W,x=new W,P=new W,T=new Ye,w=new Ye,L=new Ye;for(let E=0,S=0;E<s.length;E+=9,S+=6){_.set(s[E+0],s[E+1],s[E+2]),g.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),T.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),L.set(o[S+4],o[S+5]),P.copy(_).add(g).add(x).divideScalar(3);const I=m(P);y(T,S+0,_,I),y(w,S+2,g,I),y(L,S+4,x,I)}}function y(_,g,x,P){P<0&&_.x===1&&(o[g]=_.x-1),x.x===0&&x.z===0&&(o[g]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function d(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.vertices,e.indices,e.radius,e.details)}}class Xa extends du{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class $E extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yp,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wh extends $E{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const Rh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class KE{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],M=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return M}return null}}}const ZE=new KE;class pu{constructor(e){this.manager=e!==void 0?e:ZE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pu.DEFAULT_MATERIAL_NAME="__DEFAULT";class JE extends pu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Rh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ps("img");function l(){u(),Rh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Ch extends pu{constructor(e){super(e)}load(e,n,i,r){const s=new Ft,o=new JE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class mu extends Pt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ul=new ct,Ph=new W,Lh=new W;class fm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ph),Lh.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lh),n.updateMatrixWorld(),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ih=new ct,ts=new W,fl=new W;class QE extends fm{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),i.position.copy(ts),fl.copy(i.position),fl.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(fl),i.updateMatrixWorld(),r.makeTranslation(-ts.x,-ts.y,-ts.z),Ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih)}}class eb extends mu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new QE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tb extends fm{constructor(){super(new sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nb extends mu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new tb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ib extends mu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dh(){return(typeof performance>"u"?Date:performance).now()}const Uh=new ct;class sb{constructor(e,n,i=0,r=1/0){this.ray=new Zp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uh),this}intersectObject(e,n=!0,i=[]){return hc(e,this,i,n),i.sort(Nh),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hc(e[r],this,i,n);return i.sort(Nh),i}}function Nh(t,e){return t.distance-e.distance}function hc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)hc(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);class ab extends nn{constructor(e,n,i=!1,r=!1,s=1e4){const o=new Zn;super(o,n),this.isMarchingCubes=!0;const a=this,l=new Float32Array(12*3),c=new Float32Array(12*3),u=new Float32Array(12*3);this.enableUvs=i,this.enableColors=r,this.init=function(_){this.resolution=_,this.isolation=80,this.size=_,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;const g=s*3;this.positionArray=new Float32Array(g*3);const x=new zt(this.positionArray,3);x.setUsage(Zs),o.setAttribute("position",x),this.normalArray=new Float32Array(g*3);const P=new zt(this.normalArray,3);if(P.setUsage(Zs),o.setAttribute("normal",P),this.enableUvs){this.uvArray=new Float32Array(g*2);const T=new zt(this.uvArray,2);T.setUsage(Zs),o.setAttribute("uv",T)}if(this.enableColors){this.colorArray=new Float32Array(g*3);const T=new zt(this.colorArray,3);T.setUsage(Zs),o.setAttribute("color",T)}o.boundingSphere=new ho(new W,1)};function f(_,g,x){return _+(g-_)*x}function h(_,g,x,P,T,w,L,E,S,I){const z=(x-L)/(E-L),N=a.normal_cache;l[g+0]=P+z*a.delta,l[g+1]=T,l[g+2]=w,c[g+0]=f(N[_+0],N[_+3],z),c[g+1]=f(N[_+1],N[_+4],z),c[g+2]=f(N[_+2],N[_+5],z),u[g+0]=f(a.palette[S*3+0],a.palette[I*3+0],z),u[g+1]=f(a.palette[S*3+1],a.palette[I*3+1],z),u[g+2]=f(a.palette[S*3+2],a.palette[I*3+2],z)}function p(_,g,x,P,T,w,L,E,S,I){const z=(x-L)/(E-L),N=a.normal_cache;l[g+0]=P,l[g+1]=T+z*a.delta,l[g+2]=w;const F=_+a.yd*3;c[g+0]=f(N[_+0],N[F+0],z),c[g+1]=f(N[_+1],N[F+1],z),c[g+2]=f(N[_+2],N[F+2],z),u[g+0]=f(a.palette[S*3+0],a.palette[I*3+0],z),u[g+1]=f(a.palette[S*3+1],a.palette[I*3+1],z),u[g+2]=f(a.palette[S*3+2],a.palette[I*3+2],z)}function M(_,g,x,P,T,w,L,E,S,I){const z=(x-L)/(E-L),N=a.normal_cache;l[g+0]=P,l[g+1]=T,l[g+2]=w+z*a.delta;const F=_+a.zd*3;c[g+0]=f(N[_+0],N[F+0],z),c[g+1]=f(N[_+1],N[F+1],z),c[g+2]=f(N[_+2],N[F+2],z),u[g+0]=f(a.palette[S*3+0],a.palette[I*3+0],z),u[g+1]=f(a.palette[S*3+1],a.palette[I*3+1],z),u[g+2]=f(a.palette[S*3+2],a.palette[I*3+2],z)}function y(_){const g=_*3;a.normal_cache[g]===0&&(a.normal_cache[g+0]=a.field[_-1]-a.field[_+1],a.normal_cache[g+1]=a.field[_-a.yd]-a.field[_+a.yd],a.normal_cache[g+2]=a.field[_-a.zd]-a.field[_+a.zd])}function m(_,g,x,P,T){const w=P+1,L=P+a.yd,E=P+a.zd,S=w+a.yd,I=w+a.zd,z=P+a.yd+a.zd,N=w+a.yd+a.zd;let F=0;const K=a.field[P],V=a.field[w],Z=a.field[L],G=a.field[S],he=a.field[E],ue=a.field[I],ge=a.field[z],Ee=a.field[N];K<T&&(F|=1),V<T&&(F|=2),Z<T&&(F|=8),G<T&&(F|=4),he<T&&(F|=16),ue<T&&(F|=32),ge<T&&(F|=128),Ee<T&&(F|=64);const we=ob[F];if(we===0)return 0;const ne=a.delta,ce=_+ne,_e=g+ne,O=x+ne;we&1&&(y(P),y(w),h(P*3,0,T,_,g,x,K,V,P,w)),we&2&&(y(w),y(S),p(w*3,3,T,ce,g,x,V,G,w,S)),we&4&&(y(L),y(S),h(L*3,6,T,_,_e,x,Z,G,L,S)),we&8&&(y(P),y(L),p(P*3,9,T,_,g,x,K,Z,P,L)),we&16&&(y(E),y(I),h(E*3,12,T,_,g,O,he,ue,E,I)),we&32&&(y(I),y(N),p(I*3,15,T,ce,g,O,ue,Ee,I,N)),we&64&&(y(z),y(N),h(z*3,18,T,_,_e,O,ge,Ee,z,N)),we&128&&(y(E),y(z),p(E*3,21,T,_,g,O,he,ge,E,z)),we&256&&(y(P),y(E),M(P*3,24,T,_,g,x,K,he,P,E)),we&512&&(y(w),y(I),M(w*3,27,T,ce,g,x,V,ue,w,I)),we&1024&&(y(S),y(N),M(S*3,30,T,ce,_e,x,G,Ee,S,N)),we&2048&&(y(L),y(z),M(L*3,33,T,_,_e,x,Z,ge,L,z)),F<<=4;let ie,re,fe,Le=0,D=0;for(;ya[F+D]!=-1;)ie=F+D,re=ie+1,fe=ie+2,d(l,c,u,3*ya[ie],3*ya[re],3*ya[fe]),D+=3,Le++;return Le}function d(_,g,x,P,T,w){const L=a.count*3;if(a.positionArray[L+0]=_[P],a.positionArray[L+1]=_[P+1],a.positionArray[L+2]=_[P+2],a.positionArray[L+3]=_[T],a.positionArray[L+4]=_[T+1],a.positionArray[L+5]=_[T+2],a.positionArray[L+6]=_[w],a.positionArray[L+7]=_[w+1],a.positionArray[L+8]=_[w+2],a.material.flatShading===!0){const E=(g[P+0]+g[T+0]+g[w+0])/3,S=(g[P+1]+g[T+1]+g[w+1])/3,I=(g[P+2]+g[T+2]+g[w+2])/3;a.normalArray[L+0]=E,a.normalArray[L+1]=S,a.normalArray[L+2]=I,a.normalArray[L+3]=E,a.normalArray[L+4]=S,a.normalArray[L+5]=I,a.normalArray[L+6]=E,a.normalArray[L+7]=S,a.normalArray[L+8]=I}else a.normalArray[L+0]=g[P+0],a.normalArray[L+1]=g[P+1],a.normalArray[L+2]=g[P+2],a.normalArray[L+3]=g[T+0],a.normalArray[L+4]=g[T+1],a.normalArray[L+5]=g[T+2],a.normalArray[L+6]=g[w+0],a.normalArray[L+7]=g[w+1],a.normalArray[L+8]=g[w+2];if(a.enableUvs){const E=a.count*2;a.uvArray[E+0]=_[P+0],a.uvArray[E+1]=_[P+2],a.uvArray[E+2]=_[T+0],a.uvArray[E+3]=_[T+2],a.uvArray[E+4]=_[w+0],a.uvArray[E+5]=_[w+2]}a.enableColors&&(a.colorArray[L+0]=x[P+0],a.colorArray[L+1]=x[P+1],a.colorArray[L+2]=x[P+2],a.colorArray[L+3]=x[T+0],a.colorArray[L+4]=x[T+1],a.colorArray[L+5]=x[T+2],a.colorArray[L+6]=x[w+0],a.colorArray[L+7]=x[w+1],a.colorArray[L+8]=x[w+2]),a.count+=3}this.addBall=function(_,g,x,P,T,w){const L=Math.sign(P);P=Math.abs(P);const E=w!=null;let S=new Xe(_,g,x);if(E)try{S=w instanceof Xe?w:Array.isArray(w)?new Xe(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new Xe(w)}catch{S=new Xe(_,g,x)}const I=this.size*Math.sqrt(P/T),z=x*this.size,N=g*this.size,F=_*this.size;let K=Math.floor(z-I);K<1&&(K=1);let V=Math.floor(z+I);V>this.size-1&&(V=this.size-1);let Z=Math.floor(N-I);Z<1&&(Z=1);let G=Math.floor(N+I);G>this.size-1&&(G=this.size-1);let he=Math.floor(F-I);he<1&&(he=1);let ue=Math.floor(F+I);ue>this.size-1&&(ue=this.size-1);let ge,Ee,we,ne,ce,_e,O,ie,re,fe,Le;for(we=K;we<V;we++)for(ce=this.size2*we,ie=we/this.size-x,re=ie*ie,Ee=Z;Ee<G;Ee++)for(ne=ce+this.size*Ee,O=Ee/this.size-g,fe=O*O,ge=he;ge<ue;ge++)if(_e=ge/this.size-_,Le=P/(1e-6+_e*_e+fe+re)-T,Le>0){this.field[ne+ge]+=Le*L;const D=Math.sqrt((ge-F)*(ge-F)+(Ee-N)*(Ee-N)+(we-z)*(we-z))/I,R=1-D*D*D*(D*(D*6-15)+10);this.palette[(ne+ge)*3+0]+=S.r*R,this.palette[(ne+ge)*3+1]+=S.g*R,this.palette[(ne+ge)*3+2]+=S.b*R}},this.addPlaneX=function(_,g){const x=this.size,P=this.yd,T=this.zd,w=this.field;let L,E,S,I,z,N,F,K=x*Math.sqrt(_/g);for(K>x&&(K=x),L=0;L<K;L++)if(N=L/x,I=N*N,z=_/(1e-4+I)-g,z>0)for(E=0;E<x;E++)for(F=L+E*P,S=0;S<x;S++)w[T*S+F]+=z},this.addPlaneY=function(_,g){const x=this.size,P=this.yd,T=this.zd,w=this.field;let L,E,S,I,z,N,F,K,V=x*Math.sqrt(_/g);for(V>x&&(V=x),E=0;E<V;E++)if(N=E/x,I=N*N,z=_/(1e-4+I)-g,z>0)for(F=E*P,L=0;L<x;L++)for(K=F+L,S=0;S<x;S++)w[T*S+K]+=z},this.addPlaneZ=function(_,g){const x=this.size,P=this.yd,T=this.zd,w=this.field;let L,E,S,I,z,N,F,K,V=x*Math.sqrt(_/g);for(V>x&&(V=x),S=0;S<V;S++)if(N=S/x,I=N*N,z=_/(1e-4+I)-g,z>0)for(F=T*S,E=0;E<x;E++)for(K=F+E*P,L=0;L<x;L++)w[K+L]+=z},this.setCell=function(_,g,x,P){const T=this.size2*x+this.size*g+_;this.field[T]=P},this.getCell=function(_,g,x){const P=this.size2*x+this.size*g+_;return this.field[P]},this.blur=function(_=1){const g=this.field,x=g.slice(),P=this.size,T=this.size2;for(let w=0;w<P;w++)for(let L=0;L<P;L++)for(let E=0;E<P;E++){const S=T*E+P*L+w;let I=x[S],z=1;for(let N=-1;N<=1;N+=2){const F=N+w;if(!(F<0||F>=P))for(let K=-1;K<=1;K+=2){const V=K+L;if(!(V<0||V>=P))for(let Z=-1;Z<=1;Z+=2){const G=Z+E;if(G<0||G>=P)continue;const he=T*G+P*V+F,ue=x[he];z++,I+=_*(ue-I)/z}}}g[S]=I}},this.reset=function(){for(let _=0;_<this.size3;_++)this.normal_cache[_*3]=0,this.field[_]=0,this.palette[_*3]=this.palette[_*3+1]=this.palette[_*3+2]=0},this.update=function(){this.count=0;const _=this.size-2;for(let g=1;g<_;g++){const x=this.size2*g,P=(g-this.halfsize)/this.halfsize;for(let T=1;T<_;T++){const w=x+this.size*T,L=(T-this.halfsize)/this.halfsize;for(let E=1;E<_;E++){const S=(E-this.halfsize)/this.halfsize,I=w+E;m(S,L,P,I,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>s&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(e)}}const ob=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ya=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Oh="/assets/black-n-shiney-dmFdIzFr.jpg",hm=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},lb={name:"BlobContainer",setup(){const t=Sa(null),e=vn(null),n=vn(null),i=vn(null),r=vn(null),s=new rb,o=vn(new Ye),a=vn(null),l=vn(null),c=vn([]),u=vn(null),f=new W(0,0,0),h=new W(.5,.5,.5),p=Sa(!1),M=new sb,y=Sa(!1),m=async()=>{const N=window.innerWidth,F=window.innerHeight;e.value=new Th,n.value=new qt(75,N/F,.1,2e3),n.value.position.z=6,n.value.rotation.y=-Fv.degToRad(40),i.value=new jE,i.value.setSize(N,F),i.value.setClearColor(0,0);const K=new ib(16777215,.4);e.value.add(K);const V=new nb(16777215,1.5);V.position.set(5,5,5),e.value.add(V);const Z=new eb(16777215,1.2);Z.position.set(-5,3,-5),e.value.add(Z);const G=new uc(i.value);e.value.environment=G.fromScene(new Th).texture,t.value&&t.value.appendChild(i.value.domElement),await tr.init();const he={x:0,y:0,z:0};r.value=new tr.World(he);const ue=20,ge=!1;for(let Ee=0;Ee<ue;Ee++){const we=I({debug:ge,RAPIER:tr,world:$e(r.value),isMelting:p});c.value.push(we)}await x(),P(),T(),y.value=!0},d=()=>{if(c.value.length===0)g();else if(p.value)g(),p.value=!1;else{const N=s.getElapsedTime();c.value.forEach(F=>{F.creationTime=N}),p.value=!0}},_=()=>{const N=s.getElapsedTime();c.value=c.value.filter(F=>{const{rigid:K,meltSpeed:V,meltDelay:Z,creationTime:G}=F;if(N-G>=Z){const ue=K.linvel();K.setLinvel({x:ue.x,y:ue.y-V,z:ue.z},!0)}return K.translation().y<-5?(r.value.removeRigidBody(K),F.mesh&&e.value.remove(F.mesh),!1):!0}),c.value.length===0&&(p.value=!1)},g=()=>{c.value.forEach(K=>{const V=K.rigid;r.value.removeRigidBody(V),K.mesh&&e.value.remove(K.mesh)}),c.value=[];const N=20,F=!1;for(let K=0;K<N;K++){const V=I({debug:F,RAPIER:tr,world:$e(r.value),isMelting:p});c.value.push(V)}},x=async()=>{const F=new Ch().load(Oh),K=tr.RigidBodyDesc.kinematicPositionBased().setTranslation(0,0,0);u.value=r.value.createRigidBody(K);const V=tr.ColliderDesc.ball(.5);r.value.createCollider(V,u.value);const Z=new Xa(.45,4),G=new wh({matcap:F,vertexColors:!0,flatShading:!1,smoothShading:!0,wireframe:!1,color:48113,metalness:.1,roughness:.2,transmission:.9,transparent:!0,thickness:.5,envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.1,side:ln});a.value=new nn(Z,G),a.value.userData.update=()=>{M.setFromCamera(o.value,n.value);const he=new hi(new W(0,0,1),0),ue=new W;M.ray.intersectPlane(he,ue),u.value.setTranslation({x:ue.x,y:ue.y,z:ue.z},!0),a.value.position.copy(ue)},e.value.add(a.value)},P=()=>{const F=new Ch().load(Oh),K=new wh({matcap:F,vertexColors:!0,flatShading:!1,smoothShading:!0,wireframe:!1,color:48113,metalness:.1,roughness:.2,transmission:.9,transparent:!0,thickness:.5,envMapIntensity:1.5,clearcoat:1,clearcoatRoughness:.1,side:ln});l.value=new ab(80,K,!0,!0,2e4),l.value.scale.setScalar(6),l.value.isolation=500,l.value.userData.update=()=>{l.value.reset();const V=s.getElapsedTime();c.value.forEach((Z,G)=>{const{x:he,y:ue,z:ge}=Z.update();let Ee=.5+.1*Math.sin(V+G);if(p.value){const{rigid:ne,meltDelay:ce,creationTime:_e}=Z,O=ne.translation();if(V-_e>=ce){const re=Math.max(0,1.5-(O.y+5)/10);Ee*=re}else Ee*=1}l.value.addBall(he,ue,ge,Ee,10,Z.color.getHex())}),l.value.update()},e.value.add(l.value)},T=()=>{requestAnimationFrame(T),r.value.step(),a.value.userData.update(),l.value.userData.update(),l.value.rotation.y+=.005,p.value&&_(),i.value.render(e.value,n.value)},w=()=>{const N=window.innerWidth,F=window.innerHeight;n.value.aspect=N/F,n.value.updateProjectionMatrix(),i.value.setSize(N,F)},L=N=>{const F=i.value.domElement.getBoundingClientRect();o.value.x=(N.clientX-F.left)/F.width*2-1,o.value.y=-((N.clientY-F.top)/F.height)*2+1},E=()=>{S()},S=()=>{const N=u.value.translation(),F=1;c.value.forEach(K=>{const V=K.rigid;if(V===u.value)return;const Z=V.translation(),G=Z.x-N.x,he=Z.y-N.y,ue=Z.z-N.z;if(G*G+he*he+ue*ue<F*F){const Ee={x:G*.01+(Math.random()-.5)*.8,y:he*.01+(Math.random()-.5)*.8,z:ue*.01+(Math.random()-.5)*.8};V.applyImpulse(Ee,!0)}})},I=({debug:N=!1,RAPIER:F,world:K,isMelting:V})=>{const ue=.39+Math.random()*.6,Ee=Math.random()*1,we=s.getElapsedTime();let ne=Math.random()*3-3*.5,ce=Math.random()*3-3*.5+3,_e=Math.random()*3-3*.5,O=F.RigidBodyDesc.dynamic().setTranslation(ne,ce,_e).setLinearDamping(2),ie=K.createRigidBody(O),re=F.ColliderDesc.ball(.2).setDensity(.5);K.createCollider(re,ie);const fe=Math.random(),R=new Xe().setHSL(fe,.8,.6),C=new W(ne,ce,_e);let k;if(N===!0){const te=new Xa(.2,3);te.computeVertexNormals();const Q=new uu({color:R});k=new nn(te,Q)}return{color:R,mesh:k,rigid:ie,update:()=>{ie.resetForces(!0);let{x:te,y:Q,z:se}=ie.translation(),b=new W(te,Q,se);if(!V.value){let j=b.clone().sub(f).normalize();ie.addForce(j.multiplyScalar(-.5),!0)}const v=s.getElapsedTime(),U=new W(.2*Math.sin(v+C.x),.1*Math.cos(v+C.y),.3*Math.sin(v+C.z));return b.add(U),N===!0&&k.position.copy(b),b.multiplyScalar(.1).add(h),b},meltSpeed:ue,meltDelay:Ee,creationTime:we}};qd(()=>{m(),window.addEventListener("resize",w),window.addEventListener("mousemove",L),window.addEventListener("click",E)}),jd(()=>{window.removeEventListener("resize",w),window.removeEventListener("mousemove",L),window.removeEventListener("click",E)});const z=gt(()=>y.value?c.value.length===0?"Create":p.value?"Reset":"Melt":"");return{container:t,startMeltAnimation:d,isMelting:p,buttonLabel:z}}},cb={ref:"container",class:"threejs-container"},ub={class:"blob-controls-container"};function fb(t,e,n,i,r,s){return ao(),oo("div",cb,[$t("div",ub,[$t("button",{onClick:e[0]||(e[0]=(...o)=>i.startMeltAnimation&&i.startMeltAnimation(...o)),class:"melt-button"},_d(i.buttonLabel),1)])],512)}const hb=hm(lb,[["render",fb],["__scopeId","data-v-844ac2c7"]]),db=no({name:"BioText",props:{words:{type:Array,required:!0,validator:t=>t.every(e=>typeof e.text=="string"&&typeof e.size=="number")},columns:{type:Number,default:4},rows:{type:Number,default:3}},setup(t){return{gridTemplateAreas:gt(()=>{const i=[];for(let r=0;r<t.rows;r++)i.push('"'+Array(t.columns).fill(".").join(" ")+'"');return i.join(" ")}),getWordStyle:i=>{const r=Math.floor(Math.random()*t.rows)+1,s=Math.floor(Math.random()*t.columns)+1,o=Math.min(i.size,t.rows-r+1),a=Math.min(i.size,t.columns-s+1);return{gridArea:`${r} / ${s} / span ${o} / span ${a}`,fontSize:`${i.size*.5+.5}rem`,fontWeight:i.size*100+100}}}}}),pb={class:"text-container",ref:"textContainer"},mb={class:"name-container"};function gb(t,e,n,i,r,s){const o=i0("font-awesome-icon");return ao(),oo("div",pb,[$t("div",mb,[$t("div",null,[Et(o,{icon:["fas","user-circle"],size:"3x",color:"#464646"})]),e[0]||(e[0]=$t("h3",{style:{"margin-left":"0.5em"}},"Aric Repp",-1)),e[1]||(e[1]=$t("h3",{class:"job-title",style:{"margin-left":"0.5em","font-size":"1.2rem","line-height":"40px","margin-top":"10px"}}," - Software Engineer / Designer ",-1))]),e[2]||(e[2]=B0('<div class="bio-container" data-v-f478df21><p data-v-f478df21>Passionate about AI and web graphics.</p><p data-v-f478df21>Frontend Stacks - React, Vue, NextJS, and Typescript.</p></div><div data-v-f478df21><div class="cloud-container" data-v-f478df21><h5 data-v-f478df21>Lifestyle ⚡</h5><ul class="cloud-lifestyle" data-v-f478df21><li data-v-f478df21><span data-v-f478df21>Family</span></li><li data-v-f478df21><span data-v-f478df21>Jiu Jitsu</span></li><li data-v-f478df21><span data-v-f478df21>Entrepreneur</span></li><li data-v-f478df21><span data-v-f478df21>Games</span></li></ul></div><div class="cloud-container" data-v-f478df21><h5 data-v-f478df21>Skills 🚀</h5><ul class="cloud-skills" data-v-f478df21><li data-v-f478df21><span data-v-f478df21>NextJS</span></li><li data-v-f478df21><span data-v-f478df21>Figma</span></li><li data-v-f478df21><span data-v-f478df21>Gen AI</span></li><li data-v-f478df21><span data-v-f478df21>VueJS</span></li><li data-v-f478df21><span data-v-f478df21>React</span></li><li data-v-f478df21><span data-v-f478df21>Node</span></li><li data-v-f478df21><span data-v-f478df21>ThreeJS</span></li><li data-v-f478df21><span data-v-f478df21>UIUX</span></li><li data-v-f478df21><span data-v-f478df21>Python</span></li><li data-v-f478df21><span data-v-f478df21>UI Engineer</span></li><li data-v-f478df21><span data-v-f478df21>GCP</span></li><li data-v-f478df21><span data-v-f478df21>Agile</span></li><li data-v-f478df21><span data-v-f478df21>Jira</span></li></ul></div></div><div class="cloud-container" data-v-f478df21><h5 data-v-f478df21>Current Projects 🔥</h5><div class="project1" data-v-f478df21><h4 data-v-f478df21>Atak - NPM Package</h4><p style="font-weight:300;" data-v-f478df21> This package that I&#39;ve been developing is meant to connect with pre-existing testing frameworks, check test assertions using AI, and return a calculated score of your testing suite. Future iterations would allow for more finely tuned AI models that could return responses on how to improve your testing suite. </p></div><div class="project1" data-v-f478df21><h4 data-v-f478df21>EQO - Social Music App</h4><p style="font-weight:300;" data-v-f478df21> A social media music app for the modern social lifestyles. EQO intends to take the power and presence that social media delivers together with a more localized experience that targets the individual at a town level. </p></div></div>',3))],512)}const _b=hm(db,[["render",gb],["__scopeId","data-v-f478df21"]]),vb={class:"main-container"},dm={__name:"HomeView",setup(t){return(e,n)=>(ao(),oo("main",vb,[n[0]||(n[0]=$t("div",{class:"background-design"},null,-1)),n[1]||(n[1]=$t("div",{class:"background-design-2"},null,-1)),Et(hb),Et(_b)]))}},xb=Object.freeze(Object.defineProperty({__proto__:null,default:dm},Symbol.toStringTag,{value:"Module"})),yb=y1({history:J_("/"),routes:[{path:"/",name:"home",component:dm},{path:"/about",name:"about",component:()=>T1(()=>Promise.resolve().then(()=>xb),void 0)}]}),Fh=()=>{};let gu={},pm={},mm=null,gm={mark:Fh,measure:Fh};try{typeof window<"u"&&(gu=window),typeof document<"u"&&(pm=document),typeof MutationObserver<"u"&&(mm=MutationObserver),typeof performance<"u"&&(gm=performance)}catch{}const{userAgent:Bh=""}=gu.navigator||{},Si=gu,ot=pm,zh=mm,Ma=gm;Si.document;const Jn=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",_m=~Bh.indexOf("MSIE")||~Bh.indexOf("Trident/");var lt="classic",vm="duotone",Kt="sharp",Zt="sharp-duotone",Mb=[lt,vm,Kt,Zt],Sb={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},kh={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Eb=["kit"],bb=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ab=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Tb={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},wb={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Rb={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Cb={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Pb={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Lb={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},xm={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Ib=["solid","regular","light","thin","duotone","brands"],ym=[1,2,3,4,5,6,7,8,9,10],Db=ym.concat([11,12,13,14,15,16,17,18,19,20]),rs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ub=[...Object.keys(Cb),...Ib,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rs.GROUP,rs.SWAP_OPACITY,rs.PRIMARY,rs.SECONDARY].concat(ym.map(t=>"".concat(t,"x"))).concat(Db.map(t=>"w-".concat(t))),Nb={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ob={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Fb={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Hh={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const jn="___FONT_AWESOME___",dc=16,Mm="fa",Sm="svg-inline--fa",Zi="data-fa-i2svg",pc="data-fa-pseudo-element",Bb="data-fa-pseudo-element-pending",_u="data-prefix",vu="data-icon",Vh="fontawesome-i2svg",zb="async",kb=["HTML","HEAD","STYLE","SCRIPT"],Em=(()=>{try{return!0}catch{return!1}})(),bm=[lt,Kt,Zt];function ks(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[lt]}})}const Am={...xm};Am[lt]={...xm[lt],...kh.kit,...kh["kit-duotone"]};const Yi=ks(Am),mc={...Lb};mc[lt]={...mc[lt],...Hh.kit,...Hh["kit-duotone"]};const Ls=ks(mc),gc={...Pb};gc[lt]={...gc[lt],...Fb.kit};const qi=ks(gc),_c={...Rb};_c[lt]={..._c[lt],...Ob.kit};const Hb=ks(_c),Vb=bb,Tm="fa-layers-text",Gb=Ab,Wb={...Sb};ks(Wb);const Xb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hl=rs,Hr=new Set;Object.keys(Ls[lt]).map(Hr.add.bind(Hr));Object.keys(Ls[Kt]).map(Hr.add.bind(Hr));Object.keys(Ls[Zt]).map(Hr.add.bind(Hr));const Yb=[...Eb,...Ub],vs=Si.FontAwesomeConfig||{};function qb(t){var e=ot.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}ot&&typeof ot.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=jb(qb(n));r!=null&&(vs[i]=r)});const wm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mm,replacementClass:Sm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vs.familyPrefix&&(vs.cssPrefix=vs.familyPrefix);const Vr={...wm,...vs};Vr.autoReplaceSvg||(Vr.observeMutations=!1);const Re={};Object.keys(wm).forEach(t=>{Object.defineProperty(Re,t,{enumerable:!0,set:function(e){Vr[t]=e,xs.forEach(n=>n(Re))},get:function(){return Vr[t]}})});Object.defineProperty(Re,"familyPrefix",{enumerable:!0,set:function(t){Vr.cssPrefix=t,xs.forEach(e=>e(Re))},get:function(){return Vr.cssPrefix}});Si.FontAwesomeConfig=Re;const xs=[];function $b(t){return xs.push(t),()=>{xs.splice(xs.indexOf(t),1)}}const li=dc,An={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kb(t){if(!t||!Jn)return;const e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=ot.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return ot.head.insertBefore(e,i),t}const Zb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Is(){let t=12,e="";for(;t-- >0;)e+=Zb[Math.random()*62|0];return e}function Yr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xu(t){return t.classList?Yr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rm(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jb(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Rm(t[n]),'" '),"").trim()}function go(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function yu(t){return t.size!==An.size||t.x!==An.x||t.y!==An.y||t.rotate!==An.rotate||t.flipX||t.flipY}function Qb(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function eA(t){let{transform:e,width:n=dc,height:i=dc,startCentered:r=!1}=t,s="";return r&&_m?s+="translate(".concat(e.x/li-n/2,"em, ").concat(e.y/li-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):s+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),s+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var tA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cm(){const t=Mm,e=Sm,n=Re.cssPrefix,i=Re.replacementClass;let r=tA;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}let Gh=!1;function dl(){Re.autoAddCss&&!Gh&&(Kb(Cm()),Gh=!0)}var nA={mixout(){return{dom:{css:Cm,insertCss:dl}}},hooks(){return{beforeDOMElementCreation(){dl()},beforeI2svg(){dl()}}}};const $n=Si||{};$n[jn]||($n[jn]={});$n[jn].styles||($n[jn].styles={});$n[jn].hooks||($n[jn].hooks={});$n[jn].shims||($n[jn].shims=[]);var Tn=$n[jn];const Pm=[],Lm=function(){ot.removeEventListener("DOMContentLoaded",Lm),Ya=1,Pm.map(t=>t())};let Ya=!1;Jn&&(Ya=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),Ya||ot.addEventListener("DOMContentLoaded",Lm));function iA(t){Jn&&(Ya?setTimeout(t,0):Pm.push(t))}function Hs(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?Rm(t):"<".concat(e," ").concat(Jb(n),">").concat(i.map(Hs).join(""),"</").concat(e,">")}function Wh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pl=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function rA(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function vc(t){const e=rA(t);return e.length===1?e[0].toString(16):null}function sA(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Xh(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function xc(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Xh(e);typeof Tn.hooks.addPack=="function"&&!i?Tn.hooks.addPack(t,Xh(e)):Tn.styles[t]={...Tn.styles[t]||{},...r},t==="fas"&&xc("fa",e)}const{styles:Vi,shims:aA}=Tn,oA={[lt]:Object.values(qi[lt]),[Kt]:Object.values(qi[Kt]),[Zt]:Object.values(qi[Zt])};let Mu=null,Im={},Dm={},Um={},Nm={},Om={};const lA={[lt]:Object.keys(Yi[lt]),[Kt]:Object.keys(Yi[Kt]),[Zt]:Object.keys(Yi[Zt])};function cA(t){return~Yb.indexOf(t)}function uA(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!cA(r)?r:null}const Fm=()=>{const t=i=>pl(Vi,(r,s,o)=>(r[o]=pl(s,i,{}),r),{});Im=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),Dm=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),Om=t((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in Vi||Re.autoFetchSvg,n=pl(aA,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});Um=n.names,Nm=n.unicodes,Mu=_o(Re.styleDefault,{family:Re.familyDefault})};$b(t=>{Mu=_o(t.styleDefault,{family:Re.familyDefault})});Fm();function Su(t,e){return(Im[t]||{})[e]}function fA(t,e){return(Dm[t]||{})[e]}function mi(t,e){return(Om[t]||{})[e]}function Bm(t){return Um[t]||{prefix:null,iconName:null}}function hA(t){const e=Nm[t],n=Su("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ei(){return Mu}const Eu=()=>({prefix:null,iconName:null,rest:[]});function _o(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=lt}=e,i=Yi[n][t],r=Ls[n][t]||Ls[n][i],s=t in Tn.styles?t:null;return r||s||null}const dA={[lt]:Object.keys(qi[lt]),[Kt]:Object.keys(qi[Kt]),[Zt]:Object.keys(qi[Zt])};function vo(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[lt]:"".concat(Re.cssPrefix,"-").concat(lt),[Kt]:"".concat(Re.cssPrefix,"-").concat(Kt),[Zt]:"".concat(Re.cssPrefix,"-").concat(Zt)};let r=null,s=lt;const o=Mb.filter(l=>l!==vm);o.forEach(l=>{(t.includes(i[l])||t.some(c=>dA[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=uA(Re.cssPrefix,c);if(Vi[c]?(c=oA[s].includes(c)?Hb[s][c]:c,r=c,l.prefix=c):lA[s].indexOf(c)>-1?(r=c,l.prefix=_o(c,{family:s})):u?l.iconName=u:c!==Re.replacementClass&&!o.some(f=>c===i[f])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const f=r==="fa"?Bm(l.iconName):{},h=mi(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||h||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Vi.far&&Vi.fas&&!Re.autoFetchSvg&&(l.prefix="fas")}return l},Eu());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Kt&&(Vi.fass||Re.autoFetchSvg)&&(a.prefix="fass",a.iconName=mi(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Zt&&(Vi.fasds||Re.autoFetchSvg)&&(a.prefix="fasds",a.iconName=mi(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=Ei()||"fas"),a}class pA{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},xc(s,r[s]);const o=qi[lt][s];o&&xc(o,r[s]),Fm()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}}let Yh=[],br={};const Ir={},mA=Object.keys(Ir);function gA(t,e){let{mixoutsTo:n}=e;return Yh=t,br={},Object.keys(Ir).forEach(i=>{mA.indexOf(i)===-1&&delete Ir[i]}),Yh.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{br[o]||(br[o]=[]),br[o].push(s[o])})}i.provides&&i.provides(Ir)}),n}function yc(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(br[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function Ji(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(br[t]||[]).forEach(s=>{s.apply(null,n)})}function bi(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ir[t]?Ir[t].apply(null,e):void 0}function Mc(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Ei();if(e)return e=mi(n,e)||e,Wh(zm.definitions,n,e)||Wh(Tn.styles,n,e)}const zm=new pA,_A=()=>{Re.autoReplaceSvg=!1,Re.observeMutations=!1,Ji("noAuto")},vA={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jn?(Ji("beforeI2svg",t),bi("pseudoElements2svg",t),bi("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Re.autoReplaceSvg===!1&&(Re.autoReplaceSvg=!0),Re.observeMutations=!0,iA(()=>{yA({autoReplaceSvgRoot:e}),Ji("watch",t)})}},xA={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=_o(t[0]);return{prefix:n,iconName:mi(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Re.cssPrefix,"-"))>-1||t.match(Vb))){const e=vo(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ei(),iconName:mi(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Ei();return{prefix:e,iconName:mi(e,t)||t}}}},Jt={noAuto:_A,config:Re,dom:vA,parse:xA,library:zm,findIconDefinition:Mc,toHtml:Hs},yA=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ot}=t;(Object.keys(Tn.styles).length>0||Re.autoFetchSvg)&&Jn&&Re.autoReplaceSvg&&Jt.dom.i2svg({node:e})};function xo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Hs(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Jn)return;const n=ot.createElement("div");return n.innerHTML=t.html,n.children}}),t}function MA(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:o}=t;if(yu(o)&&n.found&&!i.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};r.style=go({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function SA(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(Re.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function bu(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:h,height:p}=n.found?n:e,M=i==="fak",y=[Re.replacementClass,r?"".concat(Re.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(p)}};const d=M&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/p*16*.0625,"em")}:{};f&&(m.attributes[Zi]=""),a&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Is())},children:[a]}),delete m.attributes.title);const _={...m,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...d,...u.styles}},{children:g,attributes:x}=n.found&&e.found?bi("generateAbstractMask",_)||{children:[],attributes:{}}:bi("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=g,_.attributes=x,o?SA(_):MA(_)}function qh(t){const{content:e,width:n,height:i,transform:r,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Zi]="");const c={...o.styles};yu(r)&&(c.transform=eA({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=go(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function EA(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=go(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:ml}=Tn;function Sc(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(Re.cssPrefix,"-").concat(hl.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(hl.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(hl.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const bA={found:!1,width:512,height:512};function AA(t,e){!Em&&!Re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ec(t,e){let n=e;return e==="fa"&&Re.styleDefault!==null&&(e=Ei()),new Promise((i,r)=>{if(n==="fa"){const s=Bm(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ml[e]&&ml[e][t]){const s=ml[e][t];return i(Sc(s))}AA(t,e),i({...bA,icon:Re.showMissingIcons&&t?bi("missingIconAbstract")||{}:{}})})}const jh=()=>{},bc=Re.measurePerformance&&Ma&&Ma.mark&&Ma.measure?Ma:{mark:jh,measure:jh},ss='FA "6.6.0"',TA=t=>(bc.mark("".concat(ss," ").concat(t," begins")),()=>km(t)),km=t=>{bc.mark("".concat(ss," ").concat(t," ends")),bc.measure("".concat(ss," ").concat(t),"".concat(ss," ").concat(t," begins"),"".concat(ss," ").concat(t," ends"))};var Au={begin:TA,end:km};const Da=()=>{};function $h(t){return typeof(t.getAttribute?t.getAttribute(Zi):null)=="string"}function wA(t){const e=t.getAttribute?t.getAttribute(_u):null,n=t.getAttribute?t.getAttribute(vu):null;return e&&n}function RA(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Re.replacementClass)}function CA(){return Re.autoReplaceSvg===!0?Ua.replace:Ua[Re.autoReplaceSvg]||Ua.replace}function PA(t){return ot.createElementNS("http://www.w3.org/2000/svg",t)}function LA(t){return ot.createElement(t)}function Hm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?PA:LA}=e;if(typeof t=="string")return ot.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(Hm(s,{ceFn:n}))}),i}function IA(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ua={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Hm(n),e)}),e.getAttribute(Zi)===null&&Re.keepOriginalSource){let n=ot.createComment(IA(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xu(e).indexOf(Re.replacementClass))return Ua.replace(t);const i=new RegExp("".concat(Re.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===Re.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Hs(s)).join(`
`);e.setAttribute(Zi,""),e.innerHTML=r}};function Kh(t){t()}function Vm(t,e){const n=typeof e=="function"?e:Da;if(t.length===0)n();else{let i=Kh;Re.mutateApproach===zb&&(i=Si.requestAnimationFrame||Kh),i(()=>{const r=CA(),s=Au.begin("mutate");t.map(r),s(),n()})}}let Tu=!1;function Gm(){Tu=!0}function Ac(){Tu=!1}let qa=null;function Zh(t){if(!zh||!Re.observeMutations)return;const{treeCallback:e=Da,nodeCallback:n=Da,pseudoElementsCallback:i=Da,observeMutationsRoot:r=ot}=t;qa=new zh(s=>{if(Tu)return;const o=Ei();Yr(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!$h(a.addedNodes[0])&&(Re.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Re.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&$h(a.target)&&~Xb.indexOf(a.attributeName))if(a.attributeName==="class"&&wA(a.target)){const{prefix:l,iconName:c}=vo(xu(a.target));a.target.setAttribute(_u,l||o),c&&a.target.setAttribute(vu,c)}else RA(a.target)&&n(a.target)})}),Jn&&qa.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function DA(){qa&&qa.disconnect()}function UA(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function NA(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=vo(xu(t));return r.prefix||(r.prefix=Ei()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=fA(r.prefix,t.innerText)||Su(r.prefix,vc(t.innerText))),!r.iconName&&Re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function OA(t){const e=Yr(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return Re.autoA11y&&(n?e["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(i||Is()):(e["aria-hidden"]="true",e.focusable="false")),e}function FA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:An,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Jh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=NA(t),s=OA(t),o=yc("parseNodeAttributes",{},t);let a=e.styleParser?UA(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:An,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:BA}=Tn;function Wm(t){const e=Re.autoReplaceSvg==="nest"?Jh(t,{styleParser:!1}):Jh(t);return~e.extra.classes.indexOf(Tm)?bi("generateLayersText",t,e):bi("generateSvgReplacementMutation",t,e)}let Ln=new Set;bm.map(t=>{Ln.add("fa-".concat(t))});Object.keys(Yi[lt]).map(Ln.add.bind(Ln));Object.keys(Yi[Kt]).map(Ln.add.bind(Ln));Object.keys(Yi[Zt]).map(Ln.add.bind(Ln));Ln=[...Ln];function Qh(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jn)return Promise.resolve();const n=ot.documentElement.classList,i=u=>n.add("".concat(Vh,"-").concat(u)),r=u=>n.remove("".concat(Vh,"-").concat(u)),s=Re.autoFetchSvg?Ln:bm.map(u=>"fa-".concat(u)).concat(Object.keys(BA));s.includes("fa")||s.push("fa");const o=[".".concat(Tm,":not([").concat(Zi,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Zi,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Yr(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Au.begin("onTree"),c=a.reduce((u,f)=>{try{const h=Wm(f);h&&u.push(h)}catch(h){Em||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(h=>{Vm(h,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(h=>{l(),f(h)})})}function zA(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wm(t).then(n=>{n&&Vm([n],e)})}function kA(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Mc(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Mc(r||{})),t(i,{...n,mask:r})}}const HA=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:h,icon:p}=t;return xo({type:"icon",...t},()=>(Ji("beforeDOMElementCreation",{iconDefinition:t,params:e}),Re.autoA11y&&(o?c["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(a||Is()):(c["aria-hidden"]="true",c.focusable="false")),bu({icons:{main:Sc(p),mask:r?Sc(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:h,transform:{...An,...n},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var VA={mixout(){return{icon:kA(HA)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Qh,t.nodeCallback=zA,t}}},provides(t){t.i2svg=function(e){const{node:n=ot,callback:i=()=>{}}=e;return Qh(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((h,p)=>{Promise.all([Ec(i,o),c.iconName?Ec(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[y,m]=M;h([e,bu({icons:{main:y,mask:m},prefix:o,iconName:i,transform:a,symbol:l,maskId:u,title:r,titleId:s,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:o}=e;const a=go(o);a.length>0&&(i.style=a);let l;return yu(s)&&(l=bi("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},GA={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xo({type:"layer"},()=>{Ji("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(Re.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},WA={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return xo({type:"counter",content:t},()=>(Ji("beforeDOMElementCreation",{content:t,params:e}),EA({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(Re.cssPrefix,"-layers-counter"),...i]}})))}}}},XA={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=An,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return xo({type:"text",content:t},()=>(Ji("beforeDOMElementCreation",{content:t,params:e}),qh({content:t,transform:{...An,...n},title:i,extra:{attributes:s,styles:o,classes:["".concat(Re.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let o=null,a=null;if(_m){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return Re.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,qh({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const YA=new RegExp('"',"ug"),ed=[1105920,1112319],td={FontAwesome:{normal:"fas",400:"fas"},...wb,...Tb,...Nb},Tc=Object.keys(td).reduce((t,e)=>(t[e.toLowerCase()]=td[e],t),{}),qA=Object.keys(Tc).reduce((t,e)=>{const n=Tc[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function jA(t){const e=t.replace(YA,""),n=sA(e,0),i=n>=ed[0]&&n<=ed[1],r=e.length===2?e[0]===e[1]:!1;return{value:vc(r?e[0]:e),isSecondary:i||r}}function $A(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Tc[n]||{})[r]||qA[n]}function nd(t,e){const n="".concat(Bb).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const o=Yr(t.children).filter(h=>h.getAttribute(pc)===e)[0],a=Si.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Gb),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&f!=="none"&&f!==""){const h=a.getPropertyValue("content");let p=$A(l,u);const{value:M,isSecondary:y}=jA(h),m=c[0].startsWith("FontAwesome");let d=Su(p,M),_=d;if(m){const g=hA(M);g.iconName&&g.prefix&&(d=g.iconName,p=g.prefix)}if(d&&!y&&(!o||o.getAttribute(_u)!==p||o.getAttribute(vu)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const g=FA(),{extra:x}=g;x.attributes[pc]=e,Ec(d,p).then(P=>{const T=bu({...g,icons:{main:P,mask:Eu()},prefix:p,iconName:_,extra:x,watchable:!0}),w=ot.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=T.map(L=>Hs(L)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function KA(t){return Promise.all([nd(t,"::before"),nd(t,"::after")])}function ZA(t){return t.parentNode!==document.head&&!~kb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(pc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function id(t){if(Jn)return new Promise((e,n)=>{const i=Yr(t.querySelectorAll("*")).filter(ZA).map(KA),r=Au.begin("searchPseudoElements");Gm(),Promise.all(i).then(()=>{r(),Ac(),e()}).catch(()=>{r(),Ac(),n()})})}var JA={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=id,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=ot}=e;Re.searchPseudoElements&&id(n)}}};let rd=!1;var QA={mixout(){return{dom:{unwatch(){Gm(),rd=!0}}}},hooks(){return{bootstrap(){Zh(yc("mutationObserverCallbacks",{}))},noAuto(){DA()},watch(t){const{observeMutationsRoot:e}=t;rd?Ac():Zh(yc("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const sd=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var eT={mixout(){return{parse:{transform:t=>sd(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=sd(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(s/2*-1," -256)")},h={outer:o,inner:u,path:f};return{tag:"g",attributes:{...h.outer},children:[{tag:"g",attributes:{...h.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...h.path}}]}]}}}};const gl={x:0,y:0,width:"100%",height:"100%"};function ad(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function tT(t){return t.tag==="g"?t.children:[t]}var nT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?vo(n.split(" ").map(r=>r.trim())):Eu();return i.prefix||(i.prefix=Ei()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=r,{width:u,icon:f}=s,h=Qb({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...gl,fill:"white"}},M=c.children?{children:c.children.map(ad)}:{},y={tag:"g",attributes:{...h.inner},children:[ad({tag:c.tag,attributes:{...c.attributes,...h.path},...M})]},m={tag:"g",attributes:{...h.outer},children:[y]},d="mask-".concat(o||Is()),_="clip-".concat(o||Is()),g={tag:"mask",attributes:{...gl,id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:tT(f)},g]};return n.push(x,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(d,")"),...gl}}),{children:n,attributes:i}}}},iT={provides(t){let e=!1;Si.matchMedia&&(e=Si.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},rT={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},sT=[nA,VA,GA,WA,XA,JA,QA,eT,nT,iT,rT];gA(sT,{mixoutsTo:Jt});Jt.noAuto;Jt.config;const aT=Jt.library;Jt.dom;const wc=Jt.parse;Jt.findIconDefinition;Jt.toHtml;const oT=Jt.icon;Jt.layer;Jt.text;Jt.counter;function od(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?od(Object(n),!0).forEach(function(i){Bt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):od(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function lT(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cT(t){var e=lT(t,"string");return typeof e=="symbol"?e:e+""}function ja(t){"@babel/helpers - typeof";return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(t)}function Bt(t,e,n){return e=cT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function uT(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function fT(t,e){if(t==null)return{};var n=uT(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var hT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xm={exports:{}};(function(t){(function(e){var n=function(d,_,g){if(!c(_)||f(_)||h(_)||p(_)||l(_))return _;var x,P=0,T=0;if(u(_))for(x=[],T=_.length;P<T;P++)x.push(n(d,_[P],g));else{x={};for(var w in _)Object.prototype.hasOwnProperty.call(_,w)&&(x[d(w,g)]=n(d,_[w],g))}return x},i=function(d,_){_=_||{};var g=_.separator||"_",x=_.split||/(?=[A-Z])/;return d.split(x).join(g)},r=function(d){return M(d)?d:(d=d.replace(/[\-_\s]+(.)?/g,function(_,g){return g?g.toUpperCase():""}),d.substr(0,1).toLowerCase()+d.substr(1))},s=function(d){var _=r(d);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(d,_){return i(d,_).toLowerCase()},a=Object.prototype.toString,l=function(d){return typeof d=="function"},c=function(d){return d===Object(d)},u=function(d){return a.call(d)=="[object Array]"},f=function(d){return a.call(d)=="[object Date]"},h=function(d){return a.call(d)=="[object RegExp]"},p=function(d){return a.call(d)=="[object Boolean]"},M=function(d){return d=d-0,d===d},y=function(d,_){var g=_&&"process"in _?_.process:_;return typeof g!="function"?d:function(x,P){return g(x,d,P)}},m={camelize:r,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(d,_){return n(y(r,_),d)},decamelizeKeys:function(d,_){return n(y(o,_),d,_)},pascalizeKeys:function(d,_){return n(y(s,_),d)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m})(hT)})(Xm);var dT=Xm.exports,pT=["class","style"];function mT(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=dT.camelize(n.slice(0,i)),s=n.slice(i+1).trim();return e[r]=s,e},{})}function gT(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Ym(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var i=(t.children||[]).map(function(l){return Ym(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=gT(u);break;case"style":l.style=mT(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,a=fT(n,pT);return Zc(t.tag,Vn(Vn(Vn({},e),{},{class:r.class,style:Vn(Vn({},r.style),o)},r.attrs),a),i)}var qm=!1;try{qm=!0}catch{}function _T(){if(!qm&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _l(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Bt({},t,e):{}}function vT(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(Bt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Bt(Bt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(i){return n[i]?i:null}).filter(function(i){return i})}function ld(t){if(t&&ja(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(wc.icon)return wc.icon(t);if(t===null)return null;if(ja(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var xT=no({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var i=n.attrs,r=gt(function(){return ld(e.icon)}),s=gt(function(){return _l("classes",vT(e))}),o=gt(function(){return _l("transform",typeof e.transform=="string"?wc.transform(e.transform):e.transform)}),a=gt(function(){return _l("mask",ld(e.mask))}),l=gt(function(){return oT(r.value,Vn(Vn(Vn(Vn({},s.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});fs(l,function(u){if(!u)return _T("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var c=gt(function(){return l.value?Ym(l.value.abstract[0],{},i):null});return function(){return c.value}}});const yT={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},MT=yT;aT.add(MT);const jm=x_(E1);jm.use(yb);jm.component("font-awesome-icon",xT).mount("#app");

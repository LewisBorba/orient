(function(e){function t(t){for(var o,i,l=t[0],u=t[1],c=t[2],s=0,d=[];s<l.length;s++)i=l[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={1:0},a=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"fdcc42b1",3:"4465458c",4:"b8efc585",5:"42d24b3d",6:"43d153a3",7:"09816268",8:"dd32f23e",9:"0b13dffe"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var p=c;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),r=n("f476"),a=n("42d2"),i=n("b05d"),l=n("2a19");o["a"].use(i["a"],{config:{},lang:r["a"],iconSet:a["a"],plugins:{Notify:l["a"]}});var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],s={name:"App"},p=s,d=n("2877"),f=Object(d["a"])(p,u,c,!1,null,null,null),h=f.exports,b=n("2f62");o["a"].use(b["a"]);var m=function(){const e=new b["a"].Store({modules:{},strict:!1});return e},v=n("8c4f");n("ddb0");const y=[{path:"/",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"c1c3")),children:[{name:"Login",path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"8b24"))},{name:"CadastroUser",path:"Cadastro/User",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"beb8"))},{name:"CadastroUniversidade",path:"Cadastro/Universidade",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"7a57"))},{name:"CadastroPsicologo",path:"Cadastro/Psicologo",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"763f"))},{name:"LobbyUser",path:"User/LobbyUser/:id?",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"d31f"))},{name:"LobbyPsicologo",path:"Psicologo/LobbyPsicologo/:id?",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"55d8"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"e51e"))}];var w=y;o["a"].use(v["a"]);var g=function(){const e=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:w,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof m?await m({Vue:o["a"]}):m,t="function"===typeof g?await g({Vue:o["a"],store:e}):g;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},j=n("bc3a"),O=n.n(j);O.a.defaults.baseURL="https://south-health.herokuapp.com:443",o["a"].prototype.$http=O.a;const x="";async function C(){const{app:e,store:t,router:n}=await P();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[void 0];for(let c=0;!1===r&&c<l.length;c++)if("function"===typeof l[c])try{await l[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:x})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==r&&new o["a"](e)}C()},"31cd":function(e,t,n){}});
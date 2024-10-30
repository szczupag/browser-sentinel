(function() {/*
 Copyright 2022 Glance Networks, Inc.
*/
function k(a,...c){!window.console||!window.console[a]||window.GLANCE_COBROWSE&&window.GLANCE_COBROWSE.disableLogging||(c=c.map(b=>{if("object"===typeof b)try{b=JSON.stringify(b)}catch(f){console.error(f),b="unable to convert object to string"}return"string"===typeof b?b.replace(/[\r\n]/g," ").replace("<","&lt;"):b}),window.console[a](...c))}function n(...a){k("log",...a)}function p(...a){n("DEBUG:",...a)};/*
 Copyright (c) 2022 Glance Networks, Inc.
*/
window.GLANCE=window.GLANCE||{};window.GLANCE.VERSION="6.20.0.1213778174";window.GLANCE.PATCH="";window.GLANCE.Lib=window.GLANCE.Lib||{};
var y=function(){var a=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),b=a.match(/(edge|edg)[\s\/:]([\w\d\.]+)?/)||a.match(/(opera|ie|firefox|chrome|crios|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||a.match(/(rv):([\w\d\.]+)/)||[null,"unknown",0];"edg"===b[1]&&(b[1]="edge");"crios"===b[1]?b[1]="chrome":"rv"===b[1]&&(b[1]="ie");a={extend:Function.prototype.extend,name:"version"==b[1]?b[3]:b[1],version:"ie"==b[1]&&document.documentMode||parseFloat("opera"==
b[1]&&b[4]?b[4]:b[2]),l:{name:a.match(/ip(?:ad|od|hone)/)||c.match(/mac/)&&0<typeof navigator.maxTouchPoints?"ios":(a.match(/(?:webos|android)/)||c.match(/mac|win|linux/)||["other"])[0]},F:{K:!!document.evaluate,H:!!window.J,query:!!document.querySelector,json:!!window.JSON},G:{},I:function(){return"ios"==this.l.name||"android"==this.l.name}};document.documentMode&&window.XDomainRequest?(a.name="ie",a.version=document.documentMode):window.navigator&&navigator.appVersion&&-1!=navigator.appVersion.indexOf("MSIE 7.")&&
(a.name="ie",a.version="7");a[a.name]=!0;a[a.name+parseInt(a.version,10)]=!0;a.l[a.l.name]=!0;return a}();function z(a,c){if(Array.isArray(a))return(new c.Array(...a)).map(b=>z(b,c));if(null!==a&&"object"===typeof a){const b={};Object.entries(a).forEach(([f,h])=>b[f]=z(h,c));return b}return a}if(void 0===ca)var ca=function(a){return A.g?(Array.prototype.toJSON&&(a=z(a,A.g.window)),A.g.window.JSON.stringify(a)):JSON.stringify(a)};
z=function(a,c){if(Array.isArray(a))return(new c.Array(...a)).map(b=>z(b,c));if(null!==a&&"object"===typeof a){const b={};Object.entries(a).forEach(([f,h])=>b[f]=z(h,c));return b}return a};function B(a,c,b){E(window,"addEventListener",a,c,b)}function F(a,c,b){var f={};f[c]=b;a.postMessage(f,"*")}function G(a,c){E(window,"addEventListener","message",function(b){if("string"===typeof b.data)try{var f=JSON.parse(b.data)}catch(h){return!1}else f=b.data;void 0!==f[a]&&c(b.source,f[a])})}
function H(){this.name="glance_ssn_info";var a=new N,c=a.h.location.hostname;for(a=a.h;""===c&&a.parent!==a;)c=a.parent.location.hostname,a=a.parent;this.domain=da(c)}H.prototype.get=function(){return this.i()?unescape(document.cookie.replace(new RegExp("(?:^|.*;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"),"$1")):null};
H.prototype.j=function(){var a=new Date;a.setDate(a.getDate()-1);document.cookie=escape(this.name)+"=; expires="+a.toGMTString()+"; domain="+this.domain+"; path=/"};H.prototype.i=function(){return(new RegExp("(?:^|;\\s*)"+escape(this.name).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(document.cookie)};function O(){this.name="glance_ssn_info"}O.prototype.get=function(){if(!this.i())return null;try{return localStorage.getItem(this.name)}catch(a){return n("Failed to read cookie: "+this.name),null}};
O.prototype.j=function(){try{localStorage.removeItem(this.name),localStorage.removeItem(this.name+"_exp")}catch(a){n("Failed to delete cookie: "+this.name)}};O.prototype.i=function(){var a=null;try{a=localStorage.getItem(this.name+"_exp")}catch(c){return n("Failed to read cookie: "+this.name),!1}if(!a)return!1;a=new Date(a);return a<new Date?(this.j(),!1):!0};function P(){this.g=[new H,new O]}P.prototype.get=function(){return this.g[0].get()||this.g[1].get()};
P.prototype.j=function(){this.g[0].j();this.g[1].j()};P.prototype.i=function(){return this.g[0].i()||this.g[1].i()};function N(){var a=window;this.g=a.document;this.h=a;var c=[["hidden","visibilitychange"],["mozHidden","mozvisibilitychange"],["webkitHidden","webkitvisibilitychange"],["msHidden","msvisibilitychange"],["oHidden","ovisibilitychange"]];for(a=0;a<c.length&&!(c[a][0]in document);a++);}
function da(a){var c=new RegExp(/^(?:[a-z]{1,5}:\/\/|)([^:\?\/]*)/),b=a.match(/^\d+\.\d+.\d+.\d+$/);c=c.exec(a);if(b)return a;if(null===c||2!==c.length)return"about:"!==a&&n("ERR_DOMAINPARSE: "+a),null;b=c[1].split(".");return 1===b.length?(n("ERR_DOMAINPARSE: "+a),null):2===b.length?b.join("."):3===b.length?b.slice(1).join("."):4>=b[b.length-2].length?b.slice(b.length-3).join("."):b.slice(b.length-2).join(".")}N.prototype.getElementsByTagName=function(a){return E(this.g,"getElementsByTagName",a)};
function Q(a,c,b,f){var h=a.g.createElement("script");b&&h.addEventListener("load",b);f&&h.addEventListener("error",f);h.setAttribute("type","text/javascript");h.setAttribute("charset","UTF-8");for(b=0;b<c.length;b++)h.setAttribute(c[b][0],c[b][1]);a.g.head.appendChild(h)}N.prototype.head=function(){return void 0!==this.g.head?this.g.head:this.getElementsByTagName("head")[0]};
function R(a,c){a.h.addEventListener&&(document.readyState.match(/complete/)?c():(a.h.addEventListener("load",c),a.g.addEventListener("DOMContentLoaded",c,!1)))}
function S(a){if(void 0!==window.pageXOffset)return{x:Math.round(a.h.pageXOffset),y:Math.round(a.h.pageYOffset)};if(void 0!==document.documentElement.scrollTop)return{x:a.g.documentElement.scrollLeft,y:a.g.documentElement.scrollTop};if(void 0!==document.body.scrollLeft)return{x:a.g.body.scrollLeft,y:a.g.body.scrollTop};throw Error("Can't get page scroll");}
N.prototype.scrollTo=function(a,c,b){var f=S(this);f[a]=c;a={left:f.x,top:f.y,behavior:b?"smooth":"auto"};y.ie11||y.edge?window.scrollTo(f.x,f.y):window.scrollTo(a);S(this)};N.prototype.addEventListener=function(a,c,b){E(this.g,"addEventListener",a,c,b)};N.prototype.removeEventListener=function(a,c,b){E(this.g,"removeEventListener",a,c,b)};function A(a){this.g=a}A.prototype.addEventListener=function(a,c,b){E(this.g,"addEventListener",c,b)};
A.prototype.removeEventListener=function(a,c,b){E(this.g,"removeEventListener",c,b)};function E(a,c,...b){return A.g&&a.nodeType?"#document"===a.nodeName?A.g.document[c].apply(a,b):"#document-fragment"===a.nodeName?A.g.DocumentFragment.prototype[c].apply(a,b):A.g.document.body[c].apply(a,b):A.g&&"[object Window]"===a.toString()?A.g.window[c].apply(a,b):a[c].apply(a,b)}function T(a,c,b){a.g.style.left=c+"px";a.g.style.top=b+"px"}
A.prototype.moveTo=function(a,c){function b(){10>t++?(h+=q,w+=l,T(f,Math.floor(h),Math.floor(w)),f.h=E(window,"setTimeout",b,20)):T(f,a,c)}void 0!==this.h&&E(window,"clearTimeout",this.h);var f=this,h=parseInt(this.g.style.left),w=parseInt(this.g.style.top);isNaN(h)&&(h=-999);isNaN(w)&&(w=-999);var t=0,q=(a-h)/10,l=(c-w)/10;0===q&&0===l||b()};function U(){this.listeners=this.g={}}U.prototype.add=function(a,c){this.g[a]=this.g[a]||[];this.g[a].push(c)};function V(a,c){if(void 0!==a){var b=b||Object.keys(a);b.forEach(function(f){void 0!==a[f]&&(c[f]=a[f])})}}function W(a){var c={};if(!a)return c;var b=0;for(a=a.attributes;b<a.length;b++){var f=a[b].nodeName.match(/data-(.*)/);f&&2===f.length&&(c[f[1]]=a[b].nodeValue)}return c}function ea(){var a=window.GLANCE_COBROWSE?window.GLANCE_COBROWSE:{},c=document.getElementById("cobrowsescript"),b=document.getElementById("glance-cobrowse");c=W(c);b=W(b);V(c,a);V(b,a);return a};var fa=["6","20","0","1213778174"].slice(0,3).join(".")+"M";
function ha(){this.h=document.getElementById("cobrowsescript")||document.getElementById("glance-cobrowse");document.getElementById("glance-cobrowse");if(null!==this.h){var a=ea();V(a,this);var c=RegExp("//(.*)/").exec("string"===typeof this.h.src?this.h.src:a.scriptserver+"/");this.g=c&&2===c.length?c[1]:"www.glancecdn.net/cobrowse";this.g=this.g.replace("/js","");a.cbexperiment&&(this.g=this.g.replace("cobrowse","cbexperiment"));this.m=a.groupid||this.h.getAttribute("groupid");this.D=a.ws||this.h.getAttribute("ws")||
"www.glance.net";this.D.match("\\.glance\\.net$");this.C=a.ui;this.uri=a.uri;this.B=a.site||this.h.getAttribute("site")||"production";this.v=JSON.parse(a.inputevents||"{}");this.A=a.presence;if(!this.m)throw Error("data-groupid missing");a=a.additionalgroupids||"";this.o=[this.m].concat(a?a.split(","):[]);this.o=this.o.map(function(b){if(!parseInt(b))throw Error("data-groupid invalid: "+b);return parseInt(b)});if(!/staging|production/i.test(this.B))throw Error("data-site invalid");}};function X(){return 0<window.location.href.indexOf("GlanceSession=1")};window.GLANCE=window.GLANCE||{};window.GLANCE.Cobrowse=window.GLANCE.Cobrowse||{};
function Y(){function a(d){function e(u,C,I){return function(D){D.keyCode===C&&D[u+"Key"]&&(D=I.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor",h(D,I)||(p("inputevent:",I),window.GLANCE.Cobrowse[D][I]()))}}for(var g in d)if(d.hasOwnProperty(g)){var m=g.match(/(ctrl|alt|shift)-(\d*)/);!m||3>m.length||B("keydown",e(m[1],parseInt(m[2]),d[g]),!0)}}function c(d){function e(g){return function(m){var u=g.match(/showButton|toggleButton|showTerms/)?"VisitorUI":"Visitor";m.stopPropagation();
m.preventDefault();h(u,g)||(p("button click",u,g),v[u][g]())}}["glance_button","data-glancebutton"].forEach(function(g){for(var m=d.querySelectorAll("["+g+"]"),u=0;m&&u<m.length;u++){var C=m[u].getAttribute(g);"start"===C&&(C="startSession");m[u].addEventListener("click",e(C))}})}function b(){return v.Visitor}function f(d,e){v[e][d]=function(g){d.match(/showButton|toggleButton|showTerms/)&&"Visitor"==e&&(e="VisitorUI");g&&g.groupid&&(v.Loader.groupid=g.groupid);t(function(){v[e][d](g)},e)}}function h(d,
e){if(!q)return!1;p("forward event:",d,e);F(window.top,"forwardevent",{namespace:d,funcname:e});return!0}function w(d){n("SCRIPT_NOT_LOADED:"+d);const e={};e.msg="SCRIPT_NOT_LOADED:"+d;e.code="scriptloadfailed";e.params={script:d};d=K;e&&JSON.stringify(e);var g=d.g.error;if(void 0!==g)for(d=0;d<g.length;d++)g[d](e)}function t(d,e){e=e||"Visitor";if(E(l.g,"getElementById",("glance_"+e).toLowerCase()))v[e].loaded?d&&d():d&&w(e);else if(d&&(Z._onload[e]=d),q||"Visitor"!==e||x.C||t(null,"VisitorUI"),
Q(l,[["id",("glance_"+e).toLowerCase()],["src",L+"/GlanceCobrowse"+e+"_"+M+".js"]],null,()=>w(e)),"Visitor"===e){var g=document.getElementsByTagName("iframe");for(d=0;d<g.length;d++)g[d].contentWindow&&F(g[d].contentWindow,"glance_load",{s:!0})}}window.GLANCE.runTroubleshooter=function(){Q(l,[["src","https://"+x.g+"/js/Troubleshooter.js"]])};window.GLANCE.checkHTML=function(){Q(l,[["src","https://"+x.g+"/js/HTMLChecker.js"]])};if(window.localStorage&&window.XMLHttpRequest&&window.atob){var q=window.parent!==
window,l=new N,aa=!1,x=new ha,M=fa,v=window.GLANCE.Cobrowse,L="//"+x.g+"/js";if(!x.g)if(window.console&&window.console.error)k("error",...["ASSERT"]);else throw Error("ASSERT");var K=new U,r=x.h;if(v.Loader&&r&&r.getAttribute("data-loaded"))n("ERR_DUP_SCRIPTS");else{r&&r.setAttribute("data-loaded",!0);var ba=null;r=new Promise(d=>{ba=()=>{d()}});var Z={load:function(d){t(d)},loadScript:function(d,e){Q(l,[["src",L+"/"+d+"_"+M+".js"]],e,()=>{w(d)})},setUIReady:ba,_uiready:r,_eventListeners:K,_onload:{},
_origpath:document.baseURI,groupid:function(){var d=(new P).get();if(!d)return null;let e;return null==(e=JSON.parse(d).ssnid)?void 0:e.split(".")[0]}()};G("glance_load",function(d,e){d&&(d!==window.parent&&d.parent!==window?n("UNTRUSTED_LOAD_MSG"):(e.s&&t(),e.u&&null!==E(l.g,"getElementById","glance_visitor")&&F(d,"glance_load",{s:!0})))});q&&F(window.parent,"glance_load",{u:!0});window.addEventListener("message",function(d){if("string"!==typeof d.data){if(b().loaded)return!0;d.data.glance_invoke&&
t(()=>{b()._handleInvokeMessage(d)})}});B("focus",function(){if(b().loaded)return!0;b().inSession()&&t()});v.Visitor={loaded:!1,inSession:function(){return(new P).i()},addEventListener:function(d,e){K.add(d,e)},removeEventListener:function(d,e){d=K.g[d];void 0!==d&&(e=d.indexOf(e),0<=e&&d.splice(e,1))}};r=["showButton","toggleButton","showTerms","setStyle"];q||(v.VisitorUI={},r.forEach(function(d){f(d,"VisitorUI")}));r=r.concat(["startSession","setStartParams"]);r.forEach(function(d){f(d,"Visitor")});
v.Loader=Z;q||X()||!b().inSession()||t();!q&&X()&&t(null,"XDOM");R(l,function(){document.body&&!aa&&(aa=!0,c(document.body),a(x.v),x.A&&!q&&Q(l,[["src",L+"/GlancePresenceVisitor_"+M+".js"]]),x.collection&&!q&&Q(l,[["src",L+"/GlanceSessionMetrics_"+M+".js"]]))});G("forwardevent",function(d,e){p("received forwarded event:",e);if(d.top!==window)n("UNTRUSTED_KEYEVT");else window.GLANCE.Cobrowse[e.namespace][e.funcname]()})}}else k("error",...["ERR_COBROWSE_NOT_SUPP"])}
document.getElementById("cobrowsescript")||document.getElementById("glance-cobrowse")?Y():(n("LOADER_PAGE_NOT_READY"),R(new N,Y));}).call(window);
//# sourceMappingURL=map.js.map
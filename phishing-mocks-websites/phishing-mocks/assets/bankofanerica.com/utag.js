//tealium universal tag - utag.loader ut4.48.202409180021, Copyright 2024 Tealium.com Inc. All Rights Reserved. 

var utag_condload=false;window.__tealium_twc_switch=false;try{ try{
/*
 * jsrsasign(all) 8.0.20 (2020-06-24) (c) 2010-2020 Kenji Urushima | kjur.github.com/jsrsasign/license
 */

/*!
Copyright (c) 2011, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.9.0
*/
if(YAHOO===undefined){var YAHOO={}}YAHOO.lang={extend:function(g,h,f){if(!h||!g){throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.")}var d=function(){};d.prototype=h.prototype;g.prototype=new d();g.prototype.constructor=g;g.superclass=h.prototype;if(h.prototype.constructor==Object.prototype.constructor){h.prototype.constructor=h}if(f){var b;for(b in f){g.prototype[b]=f[b]}var e=function(){},c=["toString","valueOf"];try{if(/MSIE/.test(navigator.userAgent)){e=function(j,i){for(b=0;b<c.length;b=b+1){var l=c[b],k=i[l];if(typeof k==="function"&&k!=Object.prototype[l]){j[l]=k}}}}}catch(a){}e(g.prototype,f)}}};

/*! CryptoJS v3.1.2 core-fix.js
 * code.google.com/p/crypto-js
 * (c) 2009-2013 by Jeff Mott. All rights reserved.
 * code.google.com/p/crypto-js/wiki/License
 * THIS IS FIX of 'core.js' to fix Hmac issue.
 * https://code.google.com/p/crypto-js/issues/detail?id=84
 * https://crypto-js.googlecode.com/svn-history/r667/branches/3.x/src/core.js
 */
var CryptoJS=CryptoJS||(function(e,g){var a={};var b=a.lib={};var j=b.Base=(function(){function n(){}return{extend:function(p){n.prototype=this;var o=new n();if(p){o.mixIn(p)}if(!o.hasOwnProperty("init")){o.init=function(){o.$super.init.apply(this,arguments)}}o.init.prototype=o;o.$super=this;return o},create:function(){var o=this.extend();o.init.apply(o,arguments);return o},init:function(){},mixIn:function(p){for(var o in p){if(p.hasOwnProperty(o)){this[o]=p[o]}}if(p.hasOwnProperty("toString")){this.toString=p.toString}},clone:function(){return this.init.prototype.extend(this)}}}());var l=b.WordArray=j.extend({init:function(o,n){o=this.words=o||[];if(n!=g){this.sigBytes=n}else{this.sigBytes=o.length*4}},toString:function(n){return(n||h).stringify(this)},concat:function(t){var q=this.words;var p=t.words;var n=this.sigBytes;var s=t.sigBytes;this.clamp();if(n%4){for(var r=0;r<s;r++){var o=(p[r>>>2]>>>(24-(r%4)*8))&255;q[(n+r)>>>2]|=o<<(24-((n+r)%4)*8)}}else{for(var r=0;r<s;r+=4){q[(n+r)>>>2]=p[r>>>2]}}this.sigBytes+=s;return this},clamp:function(){var o=this.words;var n=this.sigBytes;o[n>>>2]&=4294967295<<(32-(n%4)*8);o.length=e.ceil(n/4)},clone:function(){var n=j.clone.call(this);n.words=this.words.slice(0);return n},random:function(p){var o=[];for(var n=0;n<p;n+=4){o.push((e.random()*4294967296)|0)}return new l.init(o,p)}});var m=a.enc={};var h=m.Hex={stringify:function(p){var r=p.words;var o=p.sigBytes;var q=[];for(var n=0;n<o;n++){var s=(r[n>>>2]>>>(24-(n%4)*8))&255;q.push((s>>>4).toString(16));q.push((s&15).toString(16))}return q.join("")},parse:function(p){var n=p.length;var q=[];for(var o=0;o<n;o+=2){q[o>>>3]|=parseInt(p.substr(o,2),16)<<(24-(o%8)*4)}return new l.init(q,n/2)}};var d=m.Latin1={stringify:function(q){var r=q.words;var p=q.sigBytes;var n=[];for(var o=0;o<p;o++){var s=(r[o>>>2]>>>(24-(o%4)*8))&255;n.push(String.fromCharCode(s))}return n.join("")},parse:function(p){var n=p.length;var q=[];for(var o=0;o<n;o++){q[o>>>2]|=(p.charCodeAt(o)&255)<<(24-(o%4)*8)}return new l.init(q,n)}};var c=m.Utf8={stringify:function(n){try{return decodeURIComponent(escape(d.stringify(n)))}catch(o){throw new Error("Malformed UTF-8 data")}},parse:function(n){return d.parse(unescape(encodeURIComponent(n)))}};var i=b.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new l.init();this._nDataBytes=0},_append:function(n){if(typeof n=="string"){n=c.parse(n)}this._data.concat(n);this._nDataBytes+=n.sigBytes},_process:function(w){var q=this._data;var x=q.words;var n=q.sigBytes;var t=this.blockSize;var v=t*4;var u=n/v;if(w){u=e.ceil(u)}else{u=e.max((u|0)-this._minBufferSize,0)}var s=u*t;var r=e.min(s*4,n);if(s){for(var p=0;p<s;p+=t){this._doProcessBlock(x,p)}var o=x.splice(0,s);q.sigBytes-=r}return new l.init(o,r)},clone:function(){var n=j.clone.call(this);n._data=this._data.clone();return n},_minBufferSize:0});var f=b.Hasher=i.extend({cfg:j.extend(),init:function(n){this.cfg=this.cfg.extend(n);this.reset()},reset:function(){i.reset.call(this);this._doReset()},update:function(n){this._append(n);this._process();return this},finalize:function(n){if(n){this._append(n)}var o=this._doFinalize();return o},blockSize:512/32,_createHelper:function(n){return function(p,o){return new n.init(o).finalize(p)}},_createHmacHelper:function(n){return function(p,o){return new k.HMAC.init(n,o).finalize(p)}}});var k=a.algo={};return a}(Math));
/*
CryptoJS v3.1.2 x64-core-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(g){var a=CryptoJS,f=a.lib,e=f.Base,h=f.WordArray,a=a.x64={};a.Word=e.extend({init:function(b,c){this.high=b;this.low=c}});a.WordArray=e.extend({init:function(b,c){b=this.words=b||[];this.sigBytes=c!=g?c:8*b.length},toX32:function(){for(var b=this.words,c=b.length,a=[],d=0;d<c;d++){var e=b[d];a.push(e.high);a.push(e.low)}return h.create(a,this.sigBytes)},clone:function(){for(var b=e.clone.call(this),c=b.words=this.words.slice(0),a=c.length,d=0;d<a;d++)c[d]=c[d].clone();return b}})})();

/*
CryptoJS v3.1.2 cipher-core.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
CryptoJS.lib.Cipher||function(u){var g=CryptoJS,f=g.lib,k=f.Base,l=f.WordArray,q=f.BufferedBlockAlgorithm,r=g.enc.Base64,v=g.algo.EvpKDF,n=f.Cipher=q.extend({cfg:k.extend(),createEncryptor:function(a,b){return this.create(this._ENC_XFORM_MODE,a,b)},createDecryptor:function(a,b){return this.create(this._DEC_XFORM_MODE,a,b)},init:function(a,b,c){this.cfg=this.cfg.extend(c);this._xformMode=a;this._key=b;this.reset()},reset:function(){q.reset.call(this);this._doReset()},process:function(a){this._append(a);
return this._process()},finalize:function(a){a&&this._append(a);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(a){return{encrypt:function(b,c,d){return("string"==typeof c?s:j).encrypt(a,b,c,d)},decrypt:function(b,c,d){return("string"==typeof c?s:j).decrypt(a,b,c,d)}}}});f.StreamCipher=n.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var m=g.mode={},t=function(a,b,c){var d=this._iv;d?this._iv=u:d=this._prevBlock;for(var e=
0;e<c;e++)a[b+e]^=d[e]},h=(f.BlockCipherMode=k.extend({createEncryptor:function(a,b){return this.Encryptor.create(a,b)},createDecryptor:function(a,b){return this.Decryptor.create(a,b)},init:function(a,b){this._cipher=a;this._iv=b}})).extend();h.Encryptor=h.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize;t.call(this,a,b,d);c.encryptBlock(a,b);this._prevBlock=a.slice(b,b+d)}});h.Decryptor=h.extend({processBlock:function(a,b){var c=this._cipher,d=c.blockSize,e=a.slice(b,b+d);c.decryptBlock(a,
b);t.call(this,a,b,d);this._prevBlock=e}});m=m.CBC=h;h=(g.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,e=[],f=0;f<c;f+=4)e.push(d);c=l.create(e,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};f.BlockCipher=n.extend({cfg:n.cfg.extend({mode:m,padding:h}),reset:function(){n.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;
this._mode=c.call(a,this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var p=f.CipherParams=k.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),m=(g.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;
return(a?l.create([1398893684,1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=l.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return p.create({ciphertext:a,salt:c})}},j=f.SerializableCipher=k.extend({cfg:k.extend({format:m}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var e=a.createEncryptor(c,d);b=e.finalize(b);e=e.cfg;return p.create({ciphertext:b,key:c,iv:e.iv,algorithm:a,mode:e.mode,padding:e.padding,
blockSize:a.blockSize,formatter:d.format})},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),g=(g.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=l.random(8));a=v.create({keySize:b+c}).compute(a,d);c=l.create(a.words.slice(b),4*c);a.sigBytes=4*b;return p.create({key:a,iv:c,salt:d})}},s=f.PasswordBasedCipher=j.extend({cfg:j.cfg.extend({kdf:g}),encrypt:function(a,
b,c,d){d=this.cfg.extend(d);c=d.kdf.execute(c,a.keySize,a.ivSize);d.iv=c.iv;a=j.encrypt.call(this,a,b,c.key,d);a.mixIn(c);return a},decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);c=d.kdf.execute(c,a.keySize,a.ivSize,b.salt);d.iv=c.iv;return j.decrypt.call(this,a,b,c.key,d)}})}();

/*
CryptoJS v3.1.2 aes.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){for(var q=CryptoJS,x=q.lib.BlockCipher,r=q.algo,j=[],y=[],z=[],A=[],B=[],C=[],s=[],u=[],v=[],w=[],g=[],k=0;256>k;k++)g[k]=128>k?k<<1:k<<1^283;for(var n=0,l=0,k=0;256>k;k++){var f=l^l<<1^l<<2^l<<3^l<<4,f=f>>>8^f&255^99;j[n]=f;y[f]=n;var t=g[n],D=g[t],E=g[D],b=257*g[f]^16843008*f;z[n]=b<<24|b>>>8;A[n]=b<<16|b>>>16;B[n]=b<<8|b>>>24;C[n]=b;b=16843009*E^65537*D^257*t^16843008*n;s[f]=b<<24|b>>>8;u[f]=b<<16|b>>>16;v[f]=b<<8|b>>>24;w[f]=b;n?(n=t^g[g[g[E^t]]],l^=g[g[l]]):n=l=1}var F=[0,1,2,4,8,
16,32,64,128,27,54],r=r.AES=x.extend({_doReset:function(){for(var c=this._key,e=c.words,a=c.sigBytes/4,c=4*((this._nRounds=a+6)+1),b=this._keySchedule=[],h=0;h<c;h++)if(h<a)b[h]=e[h];else{var d=b[h-1];h%a?6<a&&4==h%a&&(d=j[d>>>24]<<24|j[d>>>16&255]<<16|j[d>>>8&255]<<8|j[d&255]):(d=d<<8|d>>>24,d=j[d>>>24]<<24|j[d>>>16&255]<<16|j[d>>>8&255]<<8|j[d&255],d^=F[h/a|0]<<24);b[h]=b[h-a]^d}e=this._invKeySchedule=[];for(a=0;a<c;a++)h=c-a,d=a%4?b[h]:b[h-4],e[a]=4>a||4>=h?d:s[j[d>>>24]]^u[j[d>>>16&255]]^v[j[d>>>
8&255]]^w[j[d&255]]},encryptBlock:function(c,e){this._doCryptBlock(c,e,this._keySchedule,z,A,B,C,j)},decryptBlock:function(c,e){var a=c[e+1];c[e+1]=c[e+3];c[e+3]=a;this._doCryptBlock(c,e,this._invKeySchedule,s,u,v,w,y);a=c[e+1];c[e+1]=c[e+3];c[e+3]=a},_doCryptBlock:function(c,e,a,b,h,d,j,m){for(var n=this._nRounds,f=c[e]^a[0],g=c[e+1]^a[1],k=c[e+2]^a[2],p=c[e+3]^a[3],l=4,t=1;t<n;t++)var q=b[f>>>24]^h[g>>>16&255]^d[k>>>8&255]^j[p&255]^a[l++],r=b[g>>>24]^h[k>>>16&255]^d[p>>>8&255]^j[f&255]^a[l++],s=
b[k>>>24]^h[p>>>16&255]^d[f>>>8&255]^j[g&255]^a[l++],p=b[p>>>24]^h[f>>>16&255]^d[g>>>8&255]^j[k&255]^a[l++],f=q,g=r,k=s;q=(m[f>>>24]<<24|m[g>>>16&255]<<16|m[k>>>8&255]<<8|m[p&255])^a[l++];r=(m[g>>>24]<<24|m[k>>>16&255]<<16|m[p>>>8&255]<<8|m[f&255])^a[l++];s=(m[k>>>24]<<24|m[p>>>16&255]<<16|m[f>>>8&255]<<8|m[g&255])^a[l++];p=(m[p>>>24]<<24|m[f>>>16&255]<<16|m[g>>>8&255]<<8|m[k&255])^a[l++];c[e]=q;c[e+1]=r;c[e+2]=s;c[e+3]=p},keySize:8});q.AES=x._createHelper(r)})();

/*
CryptoJS v3.1.2 tripledes-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){function j(b,c){var a=(this._lBlock>>>b^this._rBlock)&c;this._rBlock^=a;this._lBlock^=a<<b}function l(b,c){var a=(this._rBlock>>>b^this._lBlock)&c;this._lBlock^=a;this._rBlock^=a<<b}var h=CryptoJS,e=h.lib,n=e.WordArray,e=e.BlockCipher,g=h.algo,q=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],p=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,
55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],r=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],s=[{"0":8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,
2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,
1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{"0":1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,
75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,
276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{"0":260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,
14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,
17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{"0":2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,
98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,
1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{"0":128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,
10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,
83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{"0":268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,
2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{"0":1048576,
16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,
496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{"0":134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,
2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,
2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],t=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],m=g.DES=e.extend({_doReset:function(){for(var b=this._key.words,c=[],a=0;56>a;a++){var f=q[a]-1;c[a]=b[f>>>5]>>>31-f%32&1}b=this._subKeys=[];for(f=0;16>f;f++){for(var d=b[f]=[],e=r[f],a=0;24>a;a++)d[a/6|0]|=c[(p[a]-1+e)%28]<<31-a%6,d[4+(a/6|0)]|=c[28+(p[a+24]-1+e)%28]<<31-a%6;d[0]=d[0]<<1|d[0]>>>31;for(a=1;7>a;a++)d[a]>>>=
4*(a-1)+3;d[7]=d[7]<<5|d[7]>>>27}c=this._invSubKeys=[];for(a=0;16>a;a++)c[a]=b[15-a]},encryptBlock:function(b,c){this._doCryptBlock(b,c,this._subKeys)},decryptBlock:function(b,c){this._doCryptBlock(b,c,this._invSubKeys)},_doCryptBlock:function(b,c,a){this._lBlock=b[c];this._rBlock=b[c+1];j.call(this,4,252645135);j.call(this,16,65535);l.call(this,2,858993459);l.call(this,8,16711935);j.call(this,1,1431655765);for(var f=0;16>f;f++){for(var d=a[f],e=this._lBlock,h=this._rBlock,g=0,k=0;8>k;k++)g|=s[k][((h^
d[k])&t[k])>>>0];this._lBlock=h;this._rBlock=e^g}a=this._lBlock;this._lBlock=this._rBlock;this._rBlock=a;j.call(this,1,1431655765);l.call(this,8,16711935);l.call(this,2,858993459);j.call(this,16,65535);j.call(this,4,252645135);b[c]=this._lBlock;b[c+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});h.DES=e._createHelper(m);g=g.TripleDES=e.extend({_doReset:function(){var b=this._key.words;this._des1=m.createEncryptor(n.create(b.slice(0,2)));this._des2=m.createEncryptor(n.create(b.slice(2,4)));this._des3=
m.createEncryptor(n.create(b.slice(4,6)))},encryptBlock:function(b,c){this._des1.encryptBlock(b,c);this._des2.decryptBlock(b,c);this._des3.encryptBlock(b,c)},decryptBlock:function(b,c){this._des3.decryptBlock(b,c);this._des2.encryptBlock(b,c);this._des1.decryptBlock(b,c)},keySize:6,ivSize:2,blockSize:2});h.TripleDES=e._createHelper(g)})();

/*
CryptoJS v3.1.2 enc-base64.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var h=CryptoJS,j=h.lib.WordArray;h.enc.Base64={stringify:function(b){var e=b.words,f=b.sigBytes,c=this._map;b.clamp();b=[];for(var a=0;a<f;a+=3)for(var d=(e[a>>>2]>>>24-8*(a%4)&255)<<16|(e[a+1>>>2]>>>24-8*((a+1)%4)&255)<<8|e[a+2>>>2]>>>24-8*((a+2)%4)&255,g=0;4>g&&a+0.75*g<f;g++)b.push(c.charAt(d>>>6*(3-g)&63));if(e=c.charAt(64))for(;b.length%4;)b.push(e);return b.join("")},parse:function(b){var e=b.length,f=this._map,c=f.charAt(64);c&&(c=b.indexOf(c),-1!=c&&(e=c));for(var c=[],a=0,d=0;d<
e;d++)if(d%4){var g=f.indexOf(b.charAt(d-1))<<2*(d%4),h=f.indexOf(b.charAt(d))>>>6-2*(d%4);c[a>>>2]|=(g|h)<<24-8*(a%4);a++}return j.create(c,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();

/*
CryptoJS v3.1.2 md5.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(E){function h(a,f,g,j,p,h,k){a=a+(f&g|~f&j)+p+k;return(a<<h|a>>>32-h)+f}function k(a,f,g,j,p,h,k){a=a+(f&j|g&~j)+p+k;return(a<<h|a>>>32-h)+f}function l(a,f,g,j,h,k,l){a=a+(f^g^j)+h+l;return(a<<k|a>>>32-k)+f}function n(a,f,g,j,h,k,l){a=a+(g^(f|~j))+h+l;return(a<<k|a>>>32-k)+f}for(var r=CryptoJS,q=r.lib,F=q.WordArray,s=q.Hasher,q=r.algo,a=[],t=0;64>t;t++)a[t]=4294967296*E.abs(E.sin(t+1))|0;q=q.MD5=s.extend({_doReset:function(){this._hash=new F.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(m,f){for(var g=0;16>g;g++){var j=f+g,p=m[j];m[j]=(p<<8|p>>>24)&16711935|(p<<24|p>>>8)&4278255360}var g=this._hash.words,j=m[f+0],p=m[f+1],q=m[f+2],r=m[f+3],s=m[f+4],t=m[f+5],u=m[f+6],v=m[f+7],w=m[f+8],x=m[f+9],y=m[f+10],z=m[f+11],A=m[f+12],B=m[f+13],C=m[f+14],D=m[f+15],b=g[0],c=g[1],d=g[2],e=g[3],b=h(b,c,d,e,j,7,a[0]),e=h(e,b,c,d,p,12,a[1]),d=h(d,e,b,c,q,17,a[2]),c=h(c,d,e,b,r,22,a[3]),b=h(b,c,d,e,s,7,a[4]),e=h(e,b,c,d,t,12,a[5]),d=h(d,e,b,c,u,17,a[6]),c=h(c,d,e,b,v,22,a[7]),
b=h(b,c,d,e,w,7,a[8]),e=h(e,b,c,d,x,12,a[9]),d=h(d,e,b,c,y,17,a[10]),c=h(c,d,e,b,z,22,a[11]),b=h(b,c,d,e,A,7,a[12]),e=h(e,b,c,d,B,12,a[13]),d=h(d,e,b,c,C,17,a[14]),c=h(c,d,e,b,D,22,a[15]),b=k(b,c,d,e,p,5,a[16]),e=k(e,b,c,d,u,9,a[17]),d=k(d,e,b,c,z,14,a[18]),c=k(c,d,e,b,j,20,a[19]),b=k(b,c,d,e,t,5,a[20]),e=k(e,b,c,d,y,9,a[21]),d=k(d,e,b,c,D,14,a[22]),c=k(c,d,e,b,s,20,a[23]),b=k(b,c,d,e,x,5,a[24]),e=k(e,b,c,d,C,9,a[25]),d=k(d,e,b,c,r,14,a[26]),c=k(c,d,e,b,w,20,a[27]),b=k(b,c,d,e,B,5,a[28]),e=k(e,b,
c,d,q,9,a[29]),d=k(d,e,b,c,v,14,a[30]),c=k(c,d,e,b,A,20,a[31]),b=l(b,c,d,e,t,4,a[32]),e=l(e,b,c,d,w,11,a[33]),d=l(d,e,b,c,z,16,a[34]),c=l(c,d,e,b,C,23,a[35]),b=l(b,c,d,e,p,4,a[36]),e=l(e,b,c,d,s,11,a[37]),d=l(d,e,b,c,v,16,a[38]),c=l(c,d,e,b,y,23,a[39]),b=l(b,c,d,e,B,4,a[40]),e=l(e,b,c,d,j,11,a[41]),d=l(d,e,b,c,r,16,a[42]),c=l(c,d,e,b,u,23,a[43]),b=l(b,c,d,e,x,4,a[44]),e=l(e,b,c,d,A,11,a[45]),d=l(d,e,b,c,D,16,a[46]),c=l(c,d,e,b,q,23,a[47]),b=n(b,c,d,e,j,6,a[48]),e=n(e,b,c,d,v,10,a[49]),d=n(d,e,b,c,
C,15,a[50]),c=n(c,d,e,b,t,21,a[51]),b=n(b,c,d,e,A,6,a[52]),e=n(e,b,c,d,r,10,a[53]),d=n(d,e,b,c,y,15,a[54]),c=n(c,d,e,b,p,21,a[55]),b=n(b,c,d,e,w,6,a[56]),e=n(e,b,c,d,D,10,a[57]),d=n(d,e,b,c,u,15,a[58]),c=n(c,d,e,b,B,21,a[59]),b=n(b,c,d,e,s,6,a[60]),e=n(e,b,c,d,z,10,a[61]),d=n(d,e,b,c,q,15,a[62]),c=n(c,d,e,b,x,21,a[63]);g[0]=g[0]+b|0;g[1]=g[1]+c|0;g[2]=g[2]+d|0;g[3]=g[3]+e|0},_doFinalize:function(){var a=this._data,f=a.words,g=8*this._nDataBytes,j=8*a.sigBytes;f[j>>>5]|=128<<24-j%32;var h=E.floor(g/
4294967296);f[(j+64>>>9<<4)+15]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;f[(j+64>>>9<<4)+14]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360;a.sigBytes=4*(f.length+1);this._process();a=this._hash;f=a.words;for(g=0;4>g;g++)j=f[g],f[g]=(j<<8|j>>>24)&16711935|(j<<24|j>>>8)&4278255360;return a},clone:function(){var a=s.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=s._createHelper(q);r.HmacMD5=s._createHmacHelper(q)})(Math);

/*
CryptoJS v3.1.2 sha1-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var k=CryptoJS,b=k.lib,m=b.WordArray,l=b.Hasher,d=[],b=k.algo.SHA1=l.extend({_doReset:function(){this._hash=new m.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(n,p){for(var a=this._hash.words,e=a[0],f=a[1],h=a[2],j=a[3],b=a[4],c=0;80>c;c++){if(16>c)d[c]=n[p+c]|0;else{var g=d[c-3]^d[c-8]^d[c-14]^d[c-16];d[c]=g<<1|g>>>31}g=(e<<5|e>>>27)+b+d[c];g=20>c?g+((f&h|~f&j)+1518500249):40>c?g+((f^h^j)+1859775393):60>c?g+((f&h|f&j|h&j)-1894007588):g+((f^h^
j)-899497514);b=j;j=h;h=f<<30|f>>>2;f=e;e=g}a[0]=a[0]+e|0;a[1]=a[1]+f|0;a[2]=a[2]+h|0;a[3]=a[3]+j|0;a[4]=a[4]+b|0},_doFinalize:function(){var b=this._data,d=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=Math.floor(a/4294967296);d[(e+64>>>9<<4)+15]=a;b.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var b=l.clone.call(this);b._hash=this._hash.clone();return b}});k.SHA1=l._createHelper(b);k.HmacSHA1=l._createHmacHelper(b)})();

/*
CryptoJS v3.1.2 sha256-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(k){for(var g=CryptoJS,h=g.lib,v=h.WordArray,j=h.Hasher,h=g.algo,s=[],t=[],u=function(q){return 4294967296*(q-(q|0))|0},l=2,b=0;64>b;){var d;a:{d=l;for(var w=k.sqrt(d),r=2;r<=w;r++)if(!(d%r)){d=!1;break a}d=!0}d&&(8>b&&(s[b]=u(k.pow(l,0.5))),t[b]=u(k.pow(l,1/3)),b++);l++}var n=[],h=h.SHA256=j.extend({_doReset:function(){this._hash=new v.init(s.slice(0))},_doProcessBlock:function(q,h){for(var a=this._hash.words,c=a[0],d=a[1],b=a[2],k=a[3],f=a[4],g=a[5],j=a[6],l=a[7],e=0;64>e;e++){if(16>e)n[e]=
q[h+e]|0;else{var m=n[e-15],p=n[e-2];n[e]=((m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3)+n[e-7]+((p<<15|p>>>17)^(p<<13|p>>>19)^p>>>10)+n[e-16]}m=l+((f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25))+(f&g^~f&j)+t[e]+n[e];p=((c<<30|c>>>2)^(c<<19|c>>>13)^(c<<10|c>>>22))+(c&d^c&b^d&b);l=j;j=g;g=f;f=k+m|0;k=b;b=d;d=c;c=m+p|0}a[0]=a[0]+c|0;a[1]=a[1]+d|0;a[2]=a[2]+b|0;a[3]=a[3]+k|0;a[4]=a[4]+f|0;a[5]=a[5]+g|0;a[6]=a[6]+j|0;a[7]=a[7]+l|0},_doFinalize:function(){var d=this._data,b=d.words,a=8*this._nDataBytes,c=8*d.sigBytes;
b[c>>>5]|=128<<24-c%32;b[(c+64>>>9<<4)+14]=k.floor(a/4294967296);b[(c+64>>>9<<4)+15]=a;d.sigBytes=4*b.length;this._process();return this._hash},clone:function(){var b=j.clone.call(this);b._hash=this._hash.clone();return b}});g.SHA256=j._createHelper(h);g.HmacSHA256=j._createHmacHelper(h)})(Math);

/*
CryptoJS v3.1.2 sha224-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var b=CryptoJS,d=b.lib.WordArray,a=b.algo,c=a.SHA256,a=a.SHA224=c.extend({_doReset:function(){this._hash=new d.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var a=c._doFinalize.call(this);a.sigBytes-=4;return a}});b.SHA224=c._createHelper(a);b.HmacSHA224=c._createHmacHelper(a)})();

/*
CryptoJS v3.1.2 sha512-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){function a(){return d.create.apply(d,arguments)}for(var n=CryptoJS,r=n.lib.Hasher,e=n.x64,d=e.Word,T=e.WordArray,e=n.algo,ea=[a(1116352408,3609767458),a(1899447441,602891725),a(3049323471,3964484399),a(3921009573,2173295548),a(961987163,4081628472),a(1508970993,3053834265),a(2453635748,2937671579),a(2870763221,3664609560),a(3624381080,2734883394),a(310598401,1164996542),a(607225278,1323610764),a(1426881987,3590304994),a(1925078388,4068182383),a(2162078206,991336113),a(2614888103,633803317),
a(3248222580,3479774868),a(3835390401,2666613458),a(4022224774,944711139),a(264347078,2341262773),a(604807628,2007800933),a(770255983,1495990901),a(1249150122,1856431235),a(1555081692,3175218132),a(1996064986,2198950837),a(2554220882,3999719339),a(2821834349,766784016),a(2952996808,2566594879),a(3210313671,3203337956),a(3336571891,1034457026),a(3584528711,2466948901),a(113926993,3758326383),a(338241895,168717936),a(666307205,1188179964),a(773529912,1546045734),a(1294757372,1522805485),a(1396182291,
2643833823),a(1695183700,2343527390),a(1986661051,1014477480),a(2177026350,1206759142),a(2456956037,344077627),a(2730485921,1290863460),a(2820302411,3158454273),a(3259730800,3505952657),a(3345764771,106217008),a(3516065817,3606008344),a(3600352804,1432725776),a(4094571909,1467031594),a(275423344,851169720),a(430227734,3100823752),a(506948616,1363258195),a(659060556,3750685593),a(883997877,3785050280),a(958139571,3318307427),a(1322822218,3812723403),a(1537002063,2003034995),a(1747873779,3602036899),
a(1955562222,1575990012),a(2024104815,1125592928),a(2227730452,2716904306),a(2361852424,442776044),a(2428436474,593698344),a(2756734187,3733110249),a(3204031479,2999351573),a(3329325298,3815920427),a(3391569614,3928383900),a(3515267271,566280711),a(3940187606,3454069534),a(4118630271,4000239992),a(116418474,1914138554),a(174292421,2731055270),a(289380356,3203993006),a(460393269,320620315),a(685471733,587496836),a(852142971,1086792851),a(1017036298,365543100),a(1126000580,2618297676),a(1288033470,
3409855158),a(1501505948,4234509866),a(1607167915,987167468),a(1816402316,1246189591)],v=[],w=0;80>w;w++)v[w]=a();e=e.SHA512=r.extend({_doReset:function(){this._hash=new T.init([new d.init(1779033703,4089235720),new d.init(3144134277,2227873595),new d.init(1013904242,4271175723),new d.init(2773480762,1595750129),new d.init(1359893119,2917565137),new d.init(2600822924,725511199),new d.init(528734635,4215389547),new d.init(1541459225,327033209)])},_doProcessBlock:function(a,d){for(var f=this._hash.words,
F=f[0],e=f[1],n=f[2],r=f[3],G=f[4],H=f[5],I=f[6],f=f[7],w=F.high,J=F.low,X=e.high,K=e.low,Y=n.high,L=n.low,Z=r.high,M=r.low,$=G.high,N=G.low,aa=H.high,O=H.low,ba=I.high,P=I.low,ca=f.high,Q=f.low,k=w,g=J,z=X,x=K,A=Y,y=L,U=Z,B=M,l=$,h=N,R=aa,C=O,S=ba,D=P,V=ca,E=Q,m=0;80>m;m++){var s=v[m];if(16>m)var j=s.high=a[d+2*m]|0,b=s.low=a[d+2*m+1]|0;else{var j=v[m-15],b=j.high,p=j.low,j=(b>>>1|p<<31)^(b>>>8|p<<24)^b>>>7,p=(p>>>1|b<<31)^(p>>>8|b<<24)^(p>>>7|b<<25),u=v[m-2],b=u.high,c=u.low,u=(b>>>19|c<<13)^(b<<
3|c>>>29)^b>>>6,c=(c>>>19|b<<13)^(c<<3|b>>>29)^(c>>>6|b<<26),b=v[m-7],W=b.high,t=v[m-16],q=t.high,t=t.low,b=p+b.low,j=j+W+(b>>>0<p>>>0?1:0),b=b+c,j=j+u+(b>>>0<c>>>0?1:0),b=b+t,j=j+q+(b>>>0<t>>>0?1:0);s.high=j;s.low=b}var W=l&R^~l&S,t=h&C^~h&D,s=k&z^k&A^z&A,T=g&x^g&y^x&y,p=(k>>>28|g<<4)^(k<<30|g>>>2)^(k<<25|g>>>7),u=(g>>>28|k<<4)^(g<<30|k>>>2)^(g<<25|k>>>7),c=ea[m],fa=c.high,da=c.low,c=E+((h>>>14|l<<18)^(h>>>18|l<<14)^(h<<23|l>>>9)),q=V+((l>>>14|h<<18)^(l>>>18|h<<14)^(l<<23|h>>>9))+(c>>>0<E>>>0?1:
0),c=c+t,q=q+W+(c>>>0<t>>>0?1:0),c=c+da,q=q+fa+(c>>>0<da>>>0?1:0),c=c+b,q=q+j+(c>>>0<b>>>0?1:0),b=u+T,s=p+s+(b>>>0<u>>>0?1:0),V=S,E=D,S=R,D=C,R=l,C=h,h=B+c|0,l=U+q+(h>>>0<B>>>0?1:0)|0,U=A,B=y,A=z,y=x,z=k,x=g,g=c+b|0,k=q+s+(g>>>0<c>>>0?1:0)|0}J=F.low=J+g;F.high=w+k+(J>>>0<g>>>0?1:0);K=e.low=K+x;e.high=X+z+(K>>>0<x>>>0?1:0);L=n.low=L+y;n.high=Y+A+(L>>>0<y>>>0?1:0);M=r.low=M+B;r.high=Z+U+(M>>>0<B>>>0?1:0);N=G.low=N+h;G.high=$+l+(N>>>0<h>>>0?1:0);O=H.low=O+C;H.high=aa+R+(O>>>0<C>>>0?1:0);P=I.low=P+D;
I.high=ba+S+(P>>>0<D>>>0?1:0);Q=f.low=Q+E;f.high=ca+V+(Q>>>0<E>>>0?1:0)},_doFinalize:function(){var a=this._data,d=a.words,f=8*this._nDataBytes,e=8*a.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+128>>>10<<5)+30]=Math.floor(f/4294967296);d[(e+128>>>10<<5)+31]=f;a.sigBytes=4*d.length;this._process();return this._hash.toX32()},clone:function(){var a=r.clone.call(this);a._hash=this._hash.clone();return a},blockSize:32});n.SHA512=r._createHelper(e);n.HmacSHA512=r._createHmacHelper(e)})();

/*
CryptoJS v3.1.2 sha384-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var c=CryptoJS,a=c.x64,b=a.Word,e=a.WordArray,a=c.algo,d=a.SHA512,a=a.SHA384=d.extend({_doReset:function(){this._hash=new e.init([new b.init(3418070365,3238371032),new b.init(1654270250,914150663),new b.init(2438529370,812702999),new b.init(355462360,4144912697),new b.init(1731405415,4290775857),new b.init(2394180231,1750603025),new b.init(3675008525,1694076839),new b.init(1203062813,3204075428)])},_doFinalize:function(){var a=d._doFinalize.call(this);a.sigBytes-=16;return a}});c.SHA384=
d._createHelper(a);c.HmacSHA384=d._createHmacHelper(a)})();

/*
CryptoJS v3.1.2 ripemd160-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/*

(c) 2012 by Cedric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
(function(){var q=CryptoJS,d=q.lib,n=d.WordArray,p=d.Hasher,d=q.algo,x=n.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),y=n.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),z=n.create([11,14,15,12,
5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),A=n.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),B=n.create([0,1518500249,1859775393,2400959708,2840853838]),C=n.create([1352829926,1548603684,1836072691,
2053994217,0]),d=d.RIPEMD160=p.extend({_doReset:function(){this._hash=n.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,v){for(var b=0;16>b;b++){var c=v+b,f=e[c];e[c]=(f<<8|f>>>24)&16711935|(f<<24|f>>>8)&4278255360}var c=this._hash.words,f=B.words,d=C.words,n=x.words,q=y.words,p=z.words,w=A.words,t,g,h,j,r,u,k,l,m,s;u=t=c[0];k=g=c[1];l=h=c[2];m=j=c[3];s=r=c[4];for(var a,b=0;80>b;b+=1)a=t+e[v+n[b]]|0,a=16>b?a+((g^h^j)+f[0]):32>b?a+((g&h|~g&j)+f[1]):48>b?
a+(((g|~h)^j)+f[2]):64>b?a+((g&j|h&~j)+f[3]):a+((g^(h|~j))+f[4]),a|=0,a=a<<p[b]|a>>>32-p[b],a=a+r|0,t=r,r=j,j=h<<10|h>>>22,h=g,g=a,a=u+e[v+q[b]]|0,a=16>b?a+((k^(l|~m))+d[0]):32>b?a+((k&m|l&~m)+d[1]):48>b?a+(((k|~l)^m)+d[2]):64>b?a+((k&l|~k&m)+d[3]):a+((k^l^m)+d[4]),a|=0,a=a<<w[b]|a>>>32-w[b],a=a+s|0,u=s,s=m,m=l<<10|l>>>22,l=k,k=a;a=c[1]+h+m|0;c[1]=c[2]+j+s|0;c[2]=c[3]+r+u|0;c[3]=c[4]+t+k|0;c[4]=c[0]+g+l|0;c[0]=a},_doFinalize:function(){var e=this._data,d=e.words,b=8*this._nDataBytes,c=8*e.sigBytes;
d[c>>>5]|=128<<24-c%32;d[(c+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;e.sigBytes=4*(d.length+1);this._process();e=this._hash;d=e.words;for(b=0;5>b;b++)c=d[b],d[b]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return e},clone:function(){var d=p.clone.call(this);d._hash=this._hash.clone();return d}});q.RIPEMD160=p._createHelper(d);q.HmacRIPEMD160=p._createHmacHelper(d)})(Math);

/*
CryptoJS v3.1.2 hmac.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var c=CryptoJS,k=c.enc.Utf8;c.algo.HMAC=c.lib.Base.extend({init:function(a,b){a=this._hasher=new a.init;"string"==typeof b&&(b=k.parse(b));var c=a.blockSize,e=4*c;b.sigBytes>e&&(b=a.finalize(b));b.clamp();for(var f=this._oKey=b.clone(),g=this._iKey=b.clone(),h=f.words,j=g.words,d=0;d<c;d++)h[d]^=1549556828,j[d]^=909522486;f.sigBytes=g.sigBytes=e;this.reset()},reset:function(){var a=this._hasher;a.reset();a.update(this._iKey)},update:function(a){this._hasher.update(a);return this},finalize:function(a){var b=
this._hasher;a=b.finalize(a);b.reset();return b.finalize(this._oKey.clone().concat(a))}})})();

/*
CryptoJS v3.1.2 pbkdf2-min.js
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function(){var b=CryptoJS,a=b.lib,d=a.Base,m=a.WordArray,a=b.algo,q=a.HMAC,l=a.PBKDF2=d.extend({cfg:d.extend({keySize:4,hasher:a.SHA1,iterations:1}),init:function(a){this.cfg=this.cfg.extend(a)},compute:function(a,b){for(var c=this.cfg,f=q.create(c.hasher,a),g=m.create(),d=m.create([1]),l=g.words,r=d.words,n=c.keySize,c=c.iterations;l.length<n;){var h=f.update(b).finalize(d);f.reset();for(var j=h.words,s=j.length,k=h,p=1;p<c;p++){k=f.finalize(k);f.reset();for(var t=k.words,e=0;e<s;e++)j[e]^=t[e]}g.concat(h);
r[0]++}g.sigBytes=4*n;return g}});b.PBKDF2=function(a,b,c){return l.create(c).compute(a,b)}})();

/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(d){var b;var e;var a="";for(b=0;b+3<=d.length;b+=3){e=parseInt(d.substring(b,b+3),16);a+=b64map.charAt(e>>6)+b64map.charAt(e&63)}if(b+1==d.length){e=parseInt(d.substring(b,b+1),16);a+=b64map.charAt(e<<2)}else{if(b+2==d.length){e=parseInt(d.substring(b,b+2),16);a+=b64map.charAt(e>>2)+b64map.charAt((e&3)<<4)}}if(b64pad){while((a.length&3)>0){a+=b64pad}}return a}function b64tohex(f){var d="";var e;var b=0;var c;var a;for(e=0;e<f.length;++e){if(f.charAt(e)==b64pad){break}a=b64map.indexOf(f.charAt(e));if(a<0){continue}if(b==0){d+=int2char(a>>2);c=a&3;b=1}else{if(b==1){d+=int2char((c<<2)|(a>>4));c=a&15;b=2}else{if(b==2){d+=int2char(c);d+=int2char(a>>2);c=a&3;b=3}else{d+=int2char((c<<2)|(a>>4));d+=int2char(a&15);b=0}}}}if(b==1){d+=int2char(c<<2)}return d}function b64toBA(e){var d=b64tohex(e);var c;var b=new Array();for(c=0;2*c<d.length;++c){b[c]=parseInt(d.substring(2*c,2*c+2),16)}return b};
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var dbits;var canary=244837814094590;var j_lm=((canary&16777215)==15715070);function BigInteger(e,d,f){if(e!=null){if("number"==typeof e){this.fromNumber(e,d,f)}else{if(d==null&&"string"!=typeof e){this.fromString(e,256)}else{this.fromString(e,d)}}}}function nbi(){return new BigInteger(null)}function am1(f,a,b,e,h,g){while(--g>=0){var d=a*this[f++]+b[e]+h;h=Math.floor(d/67108864);b[e++]=d&67108863}return h}function am2(f,q,r,e,o,a){var k=q&32767,p=q>>15;while(--a>=0){var d=this[f]&32767;var g=this[f++]>>15;var b=p*d+g*k;d=k*d+((b&32767)<<15)+r[e]+(o&1073741823);o=(d>>>30)+(b>>>15)+p*g+(o>>>30);r[e++]=d&1073741823}return o}function am3(f,q,r,e,o,a){var k=q&16383,p=q>>14;while(--a>=0){var d=this[f]&16383;var g=this[f++]>>14;var b=p*d+g*k;d=k*d+((b&16383)<<14)+r[e]+o;o=(d>>28)+(b>>14)+p*g;r[e++]=d&268435455}return o}if(j_lm&&(navigator.appName=="Microsoft Internet Explorer")){BigInteger.prototype.am=am2;dbits=30}else{if(j_lm&&(navigator.appName!="Netscape")){BigInteger.prototype.am=am1;dbits=26}else{BigInteger.prototype.am=am3;dbits=28}}BigInteger.prototype.DB=dbits;BigInteger.prototype.DM=((1<<dbits)-1);BigInteger.prototype.DV=(1<<dbits);var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP);BigInteger.prototype.F1=BI_FP-dbits;BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz";var BI_RC=new Array();var rr,vv;rr="0".charCodeAt(0);for(vv=0;vv<=9;++vv){BI_RC[rr++]=vv}rr="a".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}rr="A".charCodeAt(0);for(vv=10;vv<36;++vv){BI_RC[rr++]=vv}function int2char(a){return BI_RM.charAt(a)}function intAt(b,a){var d=BI_RC[b.charCodeAt(a)];return(d==null)?-1:d}function bnpCopyTo(b){for(var a=this.t-1;a>=0;--a){b[a]=this[a]}b.t=this.t;b.s=this.s}function bnpFromInt(a){this.t=1;this.s=(a<0)?-1:0;if(a>0){this[0]=a}else{if(a<-1){this[0]=a+this.DV}else{this.t=0}}}function nbv(a){var b=nbi();b.fromInt(a);return b}function bnpFromString(h,c){var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==256){e=8}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{this.fromRadix(h,c);return}}}}}}this.t=0;this.s=0;var g=h.length,d=false,f=0;while(--g>=0){var a=(e==8)?h[g]&255:intAt(h,g);if(a<0){if(h.charAt(g)=="-"){d=true}continue}d=false;if(f==0){this[this.t++]=a}else{if(f+e>this.DB){this[this.t-1]|=(a&((1<<(this.DB-f))-1))<<f;this[this.t++]=(a>>(this.DB-f))}else{this[this.t-1]|=a<<f}}f+=e;if(f>=this.DB){f-=this.DB}}if(e==8&&(h[0]&128)!=0){this.s=-1;if(f>0){this[this.t-1]|=((1<<(this.DB-f))-1)<<f}}this.clamp();if(d){BigInteger.ZERO.subTo(this,this)}}function bnpClamp(){var a=this.s&this.DM;while(this.t>0&&this[this.t-1]==a){--this.t}}function bnToString(c){if(this.s<0){return"-"+this.negate().toString(c)}var e;if(c==16){e=4}else{if(c==8){e=3}else{if(c==2){e=1}else{if(c==32){e=5}else{if(c==4){e=2}else{return this.toRadix(c)}}}}}var g=(1<<e)-1,l,a=false,h="",f=this.t;var j=this.DB-(f*this.DB)%e;if(f-->0){if(j<this.DB&&(l=this[f]>>j)>0){a=true;h=int2char(l)}while(f>=0){if(j<e){l=(this[f]&((1<<j)-1))<<(e-j);l|=this[--f]>>(j+=this.DB-e)}else{l=(this[f]>>(j-=e))&g;if(j<=0){j+=this.DB;--f}}if(l>0){a=true}if(a){h+=int2char(l)}}}return a?h:"0"}function bnNegate(){var a=nbi();BigInteger.ZERO.subTo(this,a);return a}function bnAbs(){return(this.s<0)?this.negate():this}function bnCompareTo(b){var d=this.s-b.s;if(d!=0){return d}var c=this.t;d=c-b.t;if(d!=0){return(this.s<0)?-d:d}while(--c>=0){if((d=this[c]-b[c])!=0){return d}}return 0}function nbits(a){var c=1,b;if((b=a>>>16)!=0){a=b;c+=16}if((b=a>>8)!=0){a=b;c+=8}if((b=a>>4)!=0){a=b;c+=4}if((b=a>>2)!=0){a=b;c+=2}if((b=a>>1)!=0){a=b;c+=1}return c}function bnBitLength(){if(this.t<=0){return 0}return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM))}function bnpDLShiftTo(c,b){var a;for(a=this.t-1;a>=0;--a){b[a+c]=this[a]}for(a=c-1;a>=0;--a){b[a]=0}b.t=this.t+c;b.s=this.s}function bnpDRShiftTo(c,b){for(var a=c;a<this.t;++a){b[a-c]=this[a]}b.t=Math.max(this.t-c,0);b.s=this.s}function bnpLShiftTo(j,e){var b=j%this.DB;var a=this.DB-b;var g=(1<<a)-1;var f=Math.floor(j/this.DB),h=(this.s<<b)&this.DM,d;for(d=this.t-1;d>=0;--d){e[d+f+1]=(this[d]>>a)|h;h=(this[d]&g)<<b}for(d=f-1;d>=0;--d){e[d]=0}e[f]=h;e.t=this.t+f+1;e.s=this.s;e.clamp()}function bnpRShiftTo(g,d){d.s=this.s;var e=Math.floor(g/this.DB);if(e>=this.t){d.t=0;return}var b=g%this.DB;var a=this.DB-b;var f=(1<<b)-1;d[0]=this[e]>>b;for(var c=e+1;c<this.t;++c){d[c-e-1]|=(this[c]&f)<<a;d[c-e]=this[c]>>b}if(b>0){d[this.t-e-1]|=(this.s&f)<<a}d.t=this.t-e;d.clamp()}function bnpSubTo(d,f){var e=0,g=0,b=Math.min(d.t,this.t);while(e<b){g+=this[e]-d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g-=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g-=d[e];f[e++]=g&this.DM;g>>=this.DB}g-=d.s}f.s=(g<0)?-1:0;if(g<-1){f[e++]=this.DV+g}else{if(g>0){f[e++]=g}}f.t=e;f.clamp()}function bnpMultiplyTo(c,e){var b=this.abs(),f=c.abs();var d=b.t;e.t=d+f.t;while(--d>=0){e[d]=0}for(d=0;d<f.t;++d){e[d+b.t]=b.am(0,f[d],e,d,0,b.t)}e.s=0;e.clamp();if(this.s!=c.s){BigInteger.ZERO.subTo(e,e)}}function bnpSquareTo(d){var a=this.abs();var b=d.t=2*a.t;while(--b>=0){d[b]=0}for(b=0;b<a.t-1;++b){var e=a.am(b,a[b],d,2*b,0,1);if((d[b+a.t]+=a.am(b+1,2*a[b],d,2*b+1,e,a.t-b-1))>=a.DV){d[b+a.t]-=a.DV;d[b+a.t+1]=1}}if(d.t>0){d[d.t-1]+=a.am(b,a[b],d,2*b,0,1)}d.s=0;d.clamp()}function bnpDivRemTo(n,h,g){var w=n.abs();if(w.t<=0){return}var k=this.abs();if(k.t<w.t){if(h!=null){h.fromInt(0)}if(g!=null){this.copyTo(g)}return}if(g==null){g=nbi()}var d=nbi(),a=this.s,l=n.s;var v=this.DB-nbits(w[w.t-1]);if(v>0){w.lShiftTo(v,d);k.lShiftTo(v,g)}else{w.copyTo(d);k.copyTo(g)}var p=d.t;var b=d[p-1];if(b==0){return}var o=b*(1<<this.F1)+((p>1)?d[p-2]>>this.F2:0);var A=this.FV/o,z=(1<<this.F1)/o,x=1<<this.F2;var u=g.t,s=u-p,f=(h==null)?nbi():h;d.dlShiftTo(s,f);if(g.compareTo(f)>=0){g[g.t++]=1;g.subTo(f,g)}BigInteger.ONE.dlShiftTo(p,f);f.subTo(d,d);while(d.t<p){d[d.t++]=0}while(--s>=0){var c=(g[--u]==b)?this.DM:Math.floor(g[u]*A+(g[u-1]+x)*z);if((g[u]+=d.am(0,c,g,s,0,p))<c){d.dlShiftTo(s,f);g.subTo(f,g);while(g[u]<--c){g.subTo(f,g)}}}if(h!=null){g.drShiftTo(p,h);if(a!=l){BigInteger.ZERO.subTo(h,h)}}g.t=p;g.clamp();if(v>0){g.rShiftTo(v,g)}if(a<0){BigInteger.ZERO.subTo(g,g)}}function bnMod(b){var c=nbi();this.abs().divRemTo(b,null,c);if(this.s<0&&c.compareTo(BigInteger.ZERO)>0){b.subTo(c,c)}return c}function Classic(a){this.m=a}function cConvert(a){if(a.s<0||a.compareTo(this.m)>=0){return a.mod(this.m)}else{return a}}function cRevert(a){return a}function cReduce(a){a.divRemTo(this.m,null,a)}function cMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}function cSqrTo(a,b){a.squareTo(b);this.reduce(b)}Classic.prototype.convert=cConvert;Classic.prototype.revert=cRevert;Classic.prototype.reduce=cReduce;Classic.prototype.mulTo=cMulTo;Classic.prototype.sqrTo=cSqrTo;function bnpInvDigit(){if(this.t<1){return 0}var a=this[0];if((a&1)==0){return 0}var b=a&3;b=(b*(2-(a&15)*b))&15;b=(b*(2-(a&255)*b))&255;b=(b*(2-(((a&65535)*b)&65535)))&65535;b=(b*(2-a*b%this.DV))%this.DV;return(b>0)?this.DV-b:-b}function Montgomery(a){this.m=a;this.mp=a.invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<(a.DB-15))-1;this.mt2=2*a.t}function montConvert(a){var b=nbi();a.abs().dlShiftTo(this.m.t,b);b.divRemTo(this.m,null,b);if(a.s<0&&b.compareTo(BigInteger.ZERO)>0){this.m.subTo(b,b)}return b}function montRevert(a){var b=nbi();a.copyTo(b);this.reduce(b);return b}function montReduce(a){while(a.t<=this.mt2){a[a.t++]=0}for(var c=0;c<this.m.t;++c){var b=a[c]&32767;var d=(b*this.mpl+(((b*this.mph+(a[c]>>15)*this.mpl)&this.um)<<15))&a.DM;b=c+this.m.t;a[b]+=this.m.am(0,d,a,c,0,this.m.t);while(a[b]>=a.DV){a[b]-=a.DV;a[++b]++}}a.clamp();a.drShiftTo(this.m.t,a);if(a.compareTo(this.m)>=0){a.subTo(this.m,a)}}function montSqrTo(a,b){a.squareTo(b);this.reduce(b)}function montMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Montgomery.prototype.convert=montConvert;Montgomery.prototype.revert=montRevert;Montgomery.prototype.reduce=montReduce;Montgomery.prototype.mulTo=montMulTo;Montgomery.prototype.sqrTo=montSqrTo;function bnpIsEven(){return((this.t>0)?(this[0]&1):this.s)==0}function bnpExp(h,j){if(h>4294967295||h<1){return BigInteger.ONE}var f=nbi(),a=nbi(),d=j.convert(this),c=nbits(h)-1;d.copyTo(f);while(--c>=0){j.sqrTo(f,a);if((h&(1<<c))>0){j.mulTo(a,d,f)}else{var b=f;f=a;a=b}}return j.revert(f)}function bnModPowInt(b,a){var c;if(b<256||a.isEven()){c=new Classic(a)}else{c=new Montgomery(a)}return this.exp(b,c)}BigInteger.prototype.copyTo=bnpCopyTo;BigInteger.prototype.fromInt=bnpFromInt;BigInteger.prototype.fromString=bnpFromString;BigInteger.prototype.clamp=bnpClamp;BigInteger.prototype.dlShiftTo=bnpDLShiftTo;BigInteger.prototype.drShiftTo=bnpDRShiftTo;BigInteger.prototype.lShiftTo=bnpLShiftTo;BigInteger.prototype.rShiftTo=bnpRShiftTo;BigInteger.prototype.subTo=bnpSubTo;BigInteger.prototype.multiplyTo=bnpMultiplyTo;BigInteger.prototype.squareTo=bnpSquareTo;BigInteger.prototype.divRemTo=bnpDivRemTo;BigInteger.prototype.invDigit=bnpInvDigit;BigInteger.prototype.isEven=bnpIsEven;BigInteger.prototype.exp=bnpExp;BigInteger.prototype.toString=bnToString;BigInteger.prototype.negate=bnNegate;BigInteger.prototype.abs=bnAbs;BigInteger.prototype.compareTo=bnCompareTo;BigInteger.prototype.bitLength=bnBitLength;BigInteger.prototype.mod=bnMod;BigInteger.prototype.modPowInt=bnModPowInt;BigInteger.ZERO=nbv(0);BigInteger.ONE=nbv(1);
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function bnClone(){var a=nbi();this.copyTo(a);return a}function bnIntValue(){if(this.s<0){if(this.t==1){return this[0]-this.DV}else{if(this.t==0){return -1}}}else{if(this.t==1){return this[0]}else{if(this.t==0){return 0}}}return((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0]}function bnByteValue(){return(this.t==0)?this.s:(this[0]<<24)>>24}function bnShortValue(){return(this.t==0)?this.s:(this[0]<<16)>>16}function bnpChunkSize(a){return Math.floor(Math.LN2*this.DB/Math.log(a))}function bnSigNum(){if(this.s<0){return -1}else{if(this.t<=0||(this.t==1&&this[0]<=0)){return 0}else{return 1}}}function bnpToRadix(c){if(c==null){c=10}if(this.signum()==0||c<2||c>36){return"0"}var f=this.chunkSize(c);var e=Math.pow(c,f);var i=nbv(e),j=nbi(),h=nbi(),g="";this.divRemTo(i,j,h);while(j.signum()>0){g=(e+h.intValue()).toString(c).substr(1)+g;j.divRemTo(i,j,h)}return h.intValue().toString(c)+g}function bnpFromRadix(m,h){this.fromInt(0);if(h==null){h=10}var f=this.chunkSize(h);var g=Math.pow(h,f),e=false,a=0,l=0;for(var c=0;c<m.length;++c){var k=intAt(m,c);if(k<0){if(m.charAt(c)=="-"&&this.signum()==0){e=true}continue}l=h*l+k;if(++a>=f){this.dMultiply(g);this.dAddOffset(l,0);a=0;l=0}}if(a>0){this.dMultiply(Math.pow(h,a));this.dAddOffset(l,0)}if(e){BigInteger.ZERO.subTo(this,this)}}function bnpFromNumber(f,e,h){if("number"==typeof e){if(f<2){this.fromInt(1)}else{this.fromNumber(f,h);if(!this.testBit(f-1)){this.bitwiseTo(BigInteger.ONE.shiftLeft(f-1),op_or,this)}if(this.isEven()){this.dAddOffset(1,0)}while(!this.isProbablePrime(e)){this.dAddOffset(2,0);if(this.bitLength()>f){this.subTo(BigInteger.ONE.shiftLeft(f-1),this)}}}}else{var d=new Array(),g=f&7;d.length=(f>>3)+1;e.nextBytes(d);if(g>0){d[0]&=((1<<g)-1)}else{d[0]=0}this.fromString(d,256)}}function bnToByteArray(){var b=this.t,c=new Array();c[0]=this.s;var e=this.DB-(b*this.DB)%8,f,a=0;if(b-->0){if(e<this.DB&&(f=this[b]>>e)!=(this.s&this.DM)>>e){c[a++]=f|(this.s<<(this.DB-e))}while(b>=0){if(e<8){f=(this[b]&((1<<e)-1))<<(8-e);f|=this[--b]>>(e+=this.DB-8)}else{f=(this[b]>>(e-=8))&255;if(e<=0){e+=this.DB;--b}}if((f&128)!=0){f|=-256}if(a==0&&(this.s&128)!=(f&128)){++a}if(a>0||f!=this.s){c[a++]=f}}}return c}function bnEquals(b){return(this.compareTo(b)==0)}function bnMin(b){return(this.compareTo(b)<0)?this:b}function bnMax(b){return(this.compareTo(b)>0)?this:b}function bnpBitwiseTo(c,h,e){var d,g,b=Math.min(c.t,this.t);for(d=0;d<b;++d){e[d]=h(this[d],c[d])}if(c.t<this.t){g=c.s&this.DM;for(d=b;d<this.t;++d){e[d]=h(this[d],g)}e.t=this.t}else{g=this.s&this.DM;for(d=b;d<c.t;++d){e[d]=h(g,c[d])}e.t=c.t}e.s=h(this.s,c.s);e.clamp()}function op_and(a,b){return a&b}function bnAnd(b){var c=nbi();this.bitwiseTo(b,op_and,c);return c}function op_or(a,b){return a|b}function bnOr(b){var c=nbi();this.bitwiseTo(b,op_or,c);return c}function op_xor(a,b){return a^b}function bnXor(b){var c=nbi();this.bitwiseTo(b,op_xor,c);return c}function op_andnot(a,b){return a&~b}function bnAndNot(b){var c=nbi();this.bitwiseTo(b,op_andnot,c);return c}function bnNot(){var b=nbi();for(var a=0;a<this.t;++a){b[a]=this.DM&~this[a]}b.t=this.t;b.s=~this.s;return b}function bnShiftLeft(b){var a=nbi();if(b<0){this.rShiftTo(-b,a)}else{this.lShiftTo(b,a)}return a}function bnShiftRight(b){var a=nbi();if(b<0){this.lShiftTo(-b,a)}else{this.rShiftTo(b,a)}return a}function lbit(a){if(a==0){return -1}var b=0;if((a&65535)==0){a>>=16;b+=16}if((a&255)==0){a>>=8;b+=8}if((a&15)==0){a>>=4;b+=4}if((a&3)==0){a>>=2;b+=2}if((a&1)==0){++b}return b}function bnGetLowestSetBit(){for(var a=0;a<this.t;++a){if(this[a]!=0){return a*this.DB+lbit(this[a])}}if(this.s<0){return this.t*this.DB}return -1}function cbit(a){var b=0;while(a!=0){a&=a-1;++b}return b}function bnBitCount(){var c=0,a=this.s&this.DM;for(var b=0;b<this.t;++b){c+=cbit(this[b]^a)}return c}function bnTestBit(b){var a=Math.floor(b/this.DB);if(a>=this.t){return(this.s!=0)}return((this[a]&(1<<(b%this.DB)))!=0)}function bnpChangeBit(c,b){var a=BigInteger.ONE.shiftLeft(c);this.bitwiseTo(a,b,a);return a}function bnSetBit(a){return this.changeBit(a,op_or)}function bnClearBit(a){return this.changeBit(a,op_andnot)}function bnFlipBit(a){return this.changeBit(a,op_xor)}function bnpAddTo(d,f){var e=0,g=0,b=Math.min(d.t,this.t);while(e<b){g+=this[e]+d[e];f[e++]=g&this.DM;g>>=this.DB}if(d.t<this.t){g+=d.s;while(e<this.t){g+=this[e];f[e++]=g&this.DM;g>>=this.DB}g+=this.s}else{g+=this.s;while(e<d.t){g+=d[e];f[e++]=g&this.DM;g>>=this.DB}g+=d.s}f.s=(g<0)?-1:0;if(g>0){f[e++]=g}else{if(g<-1){f[e++]=this.DV+g}}f.t=e;f.clamp()}function bnAdd(b){var c=nbi();this.addTo(b,c);return c}function bnSubtract(b){var c=nbi();this.subTo(b,c);return c}function bnMultiply(b){var c=nbi();this.multiplyTo(b,c);return c}function bnSquare(){var a=nbi();this.squareTo(a);return a}function bnDivide(b){var c=nbi();this.divRemTo(b,c,null);return c}function bnRemainder(b){var c=nbi();this.divRemTo(b,null,c);return c}function bnDivideAndRemainder(b){var d=nbi(),c=nbi();this.divRemTo(b,d,c);return new Array(d,c)}function bnpDMultiply(a){this[this.t]=this.am(0,a-1,this,0,0,this.t);++this.t;this.clamp()}function bnpDAddOffset(b,a){if(b==0){return}while(this.t<=a){this[this.t++]=0}this[a]+=b;while(this[a]>=this.DV){this[a]-=this.DV;if(++a>=this.t){this[this.t++]=0}++this[a]}}function NullExp(){}function nNop(a){return a}function nMulTo(a,c,b){a.multiplyTo(c,b)}function nSqrTo(a,b){a.squareTo(b)}NullExp.prototype.convert=nNop;NullExp.prototype.revert=nNop;NullExp.prototype.mulTo=nMulTo;NullExp.prototype.sqrTo=nSqrTo;function bnPow(a){return this.exp(a,new NullExp())}function bnpMultiplyLowerTo(b,f,e){var d=Math.min(this.t+b.t,f);e.s=0;e.t=d;while(d>0){e[--d]=0}var c;for(c=e.t-this.t;d<c;++d){e[d+this.t]=this.am(0,b[d],e,d,0,this.t)}for(c=Math.min(b.t,f);d<c;++d){this.am(0,b[d],e,d,0,f-d)}e.clamp()}function bnpMultiplyUpperTo(b,e,d){--e;var c=d.t=this.t+b.t-e;d.s=0;while(--c>=0){d[c]=0}for(c=Math.max(e-this.t,0);c<b.t;++c){d[this.t+c-e]=this.am(e-c,b[c],d,0,0,this.t+c-e)}d.clamp();d.drShiftTo(1,d)}function Barrett(a){this.r2=nbi();this.q3=nbi();BigInteger.ONE.dlShiftTo(2*a.t,this.r2);this.mu=this.r2.divide(a);this.m=a}function barrettConvert(a){if(a.s<0||a.t>2*this.m.t){return a.mod(this.m)}else{if(a.compareTo(this.m)<0){return a}else{var b=nbi();a.copyTo(b);this.reduce(b);return b}}}function barrettRevert(a){return a}function barrettReduce(a){a.drShiftTo(this.m.t-1,this.r2);if(a.t>this.m.t+1){a.t=this.m.t+1;a.clamp()}this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);while(a.compareTo(this.r2)<0){a.dAddOffset(1,this.m.t+1)}a.subTo(this.r2,a);while(a.compareTo(this.m)>=0){a.subTo(this.m,a)}}function barrettSqrTo(a,b){a.squareTo(b);this.reduce(b)}function barrettMulTo(a,c,b){a.multiplyTo(c,b);this.reduce(b)}Barrett.prototype.convert=barrettConvert;Barrett.prototype.revert=barrettRevert;Barrett.prototype.reduce=barrettReduce;Barrett.prototype.mulTo=barrettMulTo;Barrett.prototype.sqrTo=barrettSqrTo;function bnModPow(q,f){var o=q.bitLength(),h,b=nbv(1),v;if(o<=0){return b}else{if(o<18){h=1}else{if(o<48){h=3}else{if(o<144){h=4}else{if(o<768){h=5}else{h=6}}}}}if(o<8){v=new Classic(f)}else{if(f.isEven()){v=new Barrett(f)}else{v=new Montgomery(f)}}var p=new Array(),d=3,s=h-1,a=(1<<h)-1;p[1]=v.convert(this);if(h>1){var A=nbi();v.sqrTo(p[1],A);while(d<=a){p[d]=nbi();v.mulTo(A,p[d-2],p[d]);d+=2}}var l=q.t-1,x,u=true,c=nbi(),y;o=nbits(q[l])-1;while(l>=0){if(o>=s){x=(q[l]>>(o-s))&a}else{x=(q[l]&((1<<(o+1))-1))<<(s-o);if(l>0){x|=q[l-1]>>(this.DB+o-s)}}d=h;while((x&1)==0){x>>=1;--d}if((o-=d)<0){o+=this.DB;--l}if(u){p[x].copyTo(b);u=false}else{while(d>1){v.sqrTo(b,c);v.sqrTo(c,b);d-=2}if(d>0){v.sqrTo(b,c)}else{y=b;b=c;c=y}v.mulTo(c,p[x],b)}while(l>=0&&(q[l]&(1<<o))==0){v.sqrTo(b,c);y=b;b=c;c=y;if(--o<0){o=this.DB-1;--l}}}return v.revert(b)}function bnGCD(c){var b=(this.s<0)?this.negate():this.clone();var h=(c.s<0)?c.negate():c.clone();if(b.compareTo(h)<0){var e=b;b=h;h=e}var d=b.getLowestSetBit(),f=h.getLowestSetBit();if(f<0){return b}if(d<f){f=d}if(f>0){b.rShiftTo(f,b);h.rShiftTo(f,h)}while(b.signum()>0){if((d=b.getLowestSetBit())>0){b.rShiftTo(d,b)}if((d=h.getLowestSetBit())>0){h.rShiftTo(d,h)}if(b.compareTo(h)>=0){b.subTo(h,b);b.rShiftTo(1,b)}else{h.subTo(b,h);h.rShiftTo(1,h)}}if(f>0){h.lShiftTo(f,h)}return h}function bnpModInt(e){if(e<=0){return 0}var c=this.DV%e,b=(this.s<0)?e-1:0;if(this.t>0){if(c==0){b=this[0]%e}else{for(var a=this.t-1;a>=0;--a){b=(c*b+this[a])%e}}}return b}function bnModInverse(f){var j=f.isEven();if((this.isEven()&&j)||f.signum()==0){return BigInteger.ZERO}var i=f.clone(),h=this.clone();var g=nbv(1),e=nbv(0),l=nbv(0),k=nbv(1);while(i.signum()!=0){while(i.isEven()){i.rShiftTo(1,i);if(j){if(!g.isEven()||!e.isEven()){g.addTo(this,g);e.subTo(f,e)}g.rShiftTo(1,g)}else{if(!e.isEven()){e.subTo(f,e)}}e.rShiftTo(1,e)}while(h.isEven()){h.rShiftTo(1,h);if(j){if(!l.isEven()||!k.isEven()){l.addTo(this,l);k.subTo(f,k)}l.rShiftTo(1,l)}else{if(!k.isEven()){k.subTo(f,k)}}k.rShiftTo(1,k)}if(i.compareTo(h)>=0){i.subTo(h,i);if(j){g.subTo(l,g)}e.subTo(k,e)}else{h.subTo(i,h);if(j){l.subTo(g,l)}k.subTo(e,k)}}if(h.compareTo(BigInteger.ONE)!=0){return BigInteger.ZERO}if(k.compareTo(f)>=0){return k.subtract(f)}if(k.signum()<0){k.addTo(f,k)}else{return k}if(k.signum()<0){return k.add(f)}else{return k}}var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];var lplim=(1<<26)/lowprimes[lowprimes.length-1];function bnIsProbablePrime(e){var d,b=this.abs();if(b.t==1&&b[0]<=lowprimes[lowprimes.length-1]){for(d=0;d<lowprimes.length;++d){if(b[0]==lowprimes[d]){return true}}return false}if(b.isEven()){return false}d=1;while(d<lowprimes.length){var a=lowprimes[d],c=d+1;while(c<lowprimes.length&&a<lplim){a*=lowprimes[c++]}a=b.modInt(a);while(d<c){if(a%lowprimes[d++]==0){return false}}}return b.millerRabin(e)}function bnpMillerRabin(f){var g=this.subtract(BigInteger.ONE);var c=g.getLowestSetBit();if(c<=0){return false}var h=g.shiftRight(c);f=(f+1)>>1;if(f>lowprimes.length){f=lowprimes.length}var b=nbi();for(var e=0;e<f;++e){b.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var l=b.modPow(h,this);if(l.compareTo(BigInteger.ONE)!=0&&l.compareTo(g)!=0){var d=1;while(d++<c&&l.compareTo(g)!=0){l=l.modPowInt(2,this);if(l.compareTo(BigInteger.ONE)==0){return false}}if(l.compareTo(g)!=0){return false}}}return true}BigInteger.prototype.chunkSize=bnpChunkSize;BigInteger.prototype.toRadix=bnpToRadix;BigInteger.prototype.fromRadix=bnpFromRadix;BigInteger.prototype.fromNumber=bnpFromNumber;BigInteger.prototype.bitwiseTo=bnpBitwiseTo;BigInteger.prototype.changeBit=bnpChangeBit;BigInteger.prototype.addTo=bnpAddTo;BigInteger.prototype.dMultiply=bnpDMultiply;BigInteger.prototype.dAddOffset=bnpDAddOffset;BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo;BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo;BigInteger.prototype.modInt=bnpModInt;BigInteger.prototype.millerRabin=bnpMillerRabin;BigInteger.prototype.clone=bnClone;BigInteger.prototype.intValue=bnIntValue;BigInteger.prototype.byteValue=bnByteValue;BigInteger.prototype.shortValue=bnShortValue;BigInteger.prototype.signum=bnSigNum;BigInteger.prototype.toByteArray=bnToByteArray;BigInteger.prototype.equals=bnEquals;BigInteger.prototype.min=bnMin;BigInteger.prototype.max=bnMax;BigInteger.prototype.and=bnAnd;BigInteger.prototype.or=bnOr;BigInteger.prototype.xor=bnXor;BigInteger.prototype.andNot=bnAndNot;BigInteger.prototype.not=bnNot;BigInteger.prototype.shiftLeft=bnShiftLeft;BigInteger.prototype.shiftRight=bnShiftRight;BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit;BigInteger.prototype.bitCount=bnBitCount;BigInteger.prototype.testBit=bnTestBit;BigInteger.prototype.setBit=bnSetBit;BigInteger.prototype.clearBit=bnClearBit;BigInteger.prototype.flipBit=bnFlipBit;BigInteger.prototype.add=bnAdd;BigInteger.prototype.subtract=bnSubtract;BigInteger.prototype.multiply=bnMultiply;BigInteger.prototype.divide=bnDivide;BigInteger.prototype.remainder=bnRemainder;BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder;BigInteger.prototype.modPow=bnModPow;BigInteger.prototype.modInverse=bnModInverse;BigInteger.prototype.pow=bnPow;BigInteger.prototype.gcd=bnGCD;BigInteger.prototype.isProbablePrime=bnIsProbablePrime;BigInteger.prototype.square=bnSquare;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function Arcfour(){this.i=0;this.j=0;this.S=new Array()}function ARC4init(d){var c,a,b;for(c=0;c<256;++c){this.S[c]=c}a=0;for(c=0;c<256;++c){a=(a+this.S[c]+d[c%d.length])&255;b=this.S[c];this.S[c]=this.S[a];this.S[a]=b}this.i=0;this.j=0}function ARC4next(){var a;this.i=(this.i+1)&255;this.j=(this.j+this.S[this.i])&255;a=this.S[this.i];this.S[this.i]=this.S[this.j];this.S[this.j]=a;return this.S[(a+this.S[this.i])&255]}Arcfour.prototype.init=ARC4init;Arcfour.prototype.next=ARC4next;function prng_newstate(){return new Arcfour()}var rng_psize=256;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
var rng_state;var rng_pool;var rng_pptr;function rng_seed_int(a){rng_pool[rng_pptr++]^=a&255;rng_pool[rng_pptr++]^=(a>>8)&255;rng_pool[rng_pptr++]^=(a>>16)&255;rng_pool[rng_pptr++]^=(a>>24)&255;if(rng_pptr>=rng_psize){rng_pptr-=rng_psize}}function rng_seed_time(){rng_seed_int(new Date().getTime())}if(rng_pool==null){rng_pool=new Array();rng_pptr=0;var t;if(window!==undefined&&(window.crypto!==undefined||window.msCrypto!==undefined)){var crypto=window.crypto||window.msCrypto;if(crypto.getRandomValues){var ua=new Uint8Array(32);crypto.getRandomValues(ua);for(t=0;t<32;++t){rng_pool[rng_pptr++]=ua[t]}}else{if(navigator.appName=="Netscape"&&navigator.appVersion<"5"){var z=window.crypto.random(32);for(t=0;t<z.length;++t){rng_pool[rng_pptr++]=z.charCodeAt(t)&255}}}}while(rng_pptr<rng_psize){t=Math.floor(65536*Math.random());rng_pool[rng_pptr++]=t>>>8;rng_pool[rng_pptr++]=t&255}rng_pptr=0;rng_seed_time()}function rng_get_byte(){if(rng_state==null){rng_seed_time();rng_state=prng_newstate();rng_state.init(rng_pool);for(rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr){rng_pool[rng_pptr]=0}rng_pptr=0}return rng_state.next()}function rng_get_bytes(b){var a;for(a=0;a<b.length;++a){b[a]=rng_get_byte()}}function SecureRandom(){}SecureRandom.prototype.nextBytes=rng_get_bytes;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function parseBigInt(b,a){return new BigInteger(b,a)}function linebrk(c,d){var a="";var b=0;while(b+d<c.length){a+=c.substring(b,b+d)+"\n";b+=d}return a+c.substring(b,c.length)}function byte2Hex(a){if(a<16){return"0"+a.toString(16)}else{return a.toString(16)}}function pkcs1pad2(e,h){if(h<e.length+11){throw"Message too long for RSA";return null}var g=new Array();var d=e.length-1;while(d>=0&&h>0){var f=e.charCodeAt(d--);if(f<128){g[--h]=f}else{if((f>127)&&(f<2048)){g[--h]=(f&63)|128;g[--h]=(f>>6)|192}else{g[--h]=(f&63)|128;g[--h]=((f>>6)&63)|128;g[--h]=(f>>12)|224}}}g[--h]=0;var b=new SecureRandom();var a=new Array();while(h>2){a[0]=0;while(a[0]==0){b.nextBytes(a)}g[--h]=a[0]}g[--h]=2;g[--h]=0;return new BigInteger(g)}function oaep_mgf1_arr(c,a,e){var b="",d=0;while(b.length<a){b+=e(String.fromCharCode.apply(String,c.concat([(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255])));d+=1}return b}function oaep_pad(q,a,f,l){var c=KJUR.crypto.MessageDigest;var o=KJUR.crypto.Util;var b=null;if(!f){f="sha1"}if(typeof f==="string"){b=c.getCanonicalAlgName(f);l=c.getHashLength(b);f=function(i){return hextorstr(o.hashHex(rstrtohex(i),b))}}if(q.length+2*l+2>a){throw"Message too long for RSA"}var k="",e;for(e=0;e<a-q.length-2*l-2;e+=1){k+="\x00"}var h=f("")+k+"\x01"+q;var g=new Array(l);new SecureRandom().nextBytes(g);var j=oaep_mgf1_arr(g,h.length,f);var p=[];for(e=0;e<h.length;e+=1){p[e]=h.charCodeAt(e)^j.charCodeAt(e)}var m=oaep_mgf1_arr(p,g.length,f);var d=[0];for(e=0;e<g.length;e+=1){d[e+1]=g[e]^m.charCodeAt(e)}return new BigInteger(d.concat(p))}function RSAKey(){this.n=null;this.e=0;this.d=null;this.p=null;this.q=null;this.dmp1=null;this.dmq1=null;this.coeff=null}function RSASetPublic(b,a){this.isPublic=true;this.isPrivate=false;if(typeof b!=="string"){this.n=b;this.e=a}else{if(b!=null&&a!=null&&b.length>0&&a.length>0){this.n=parseBigInt(b,16);this.e=parseInt(a,16)}else{throw"Invalid RSA public key"}}}function RSADoPublic(a){return a.modPowInt(this.e,this.n)}function RSAEncrypt(d){var a=pkcs1pad2(d,(this.n.bitLength()+7)>>3);if(a==null){return null}var e=this.doPublic(a);if(e==null){return null}var b=e.toString(16);if((b.length&1)==0){return b}else{return"0"+b}}function RSAEncryptOAEP(f,e,b){var a=oaep_pad(f,(this.n.bitLength()+7)>>3,e,b);if(a==null){return null}var g=this.doPublic(a);if(g==null){return null}var d=g.toString(16);if((d.length&1)==0){return d}else{return"0"+d}}RSAKey.prototype.doPublic=RSADoPublic;RSAKey.prototype.setPublic=RSASetPublic;RSAKey.prototype.encrypt=RSAEncrypt;RSAKey.prototype.encryptOAEP=RSAEncryptOAEP;RSAKey.prototype.type="RSA";
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function pkcs1unpad2(g,j){var a=g.toByteArray();var f=0;while(f<a.length&&a[f]==0){++f}if(a.length-f!=j-1||a[f]!=2){return null}++f;while(a[f]!=0){if(++f>=a.length){return null}}var e="";while(++f<a.length){var h=a[f]&255;if(h<128){e+=String.fromCharCode(h)}else{if((h>191)&&(h<224)){e+=String.fromCharCode(((h&31)<<6)|(a[f+1]&63));++f}else{e+=String.fromCharCode(((h&15)<<12)|((a[f+1]&63)<<6)|(a[f+2]&63));f+=2}}}return e}function oaep_mgf1_str(c,a,e){var b="",d=0;while(b.length<a){b+=e(c+String.fromCharCode.apply(String,[(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255]));d+=1}return b}function oaep_unpad(o,b,g,p){var e=KJUR.crypto.MessageDigest;var r=KJUR.crypto.Util;var c=null;if(!g){g="sha1"}if(typeof g==="string"){c=e.getCanonicalAlgName(g);p=e.getHashLength(c);g=function(d){return hextorstr(r.hashHex(rstrtohex(d),c))}}o=o.toByteArray();var h;for(h=0;h<o.length;h+=1){o[h]&=255}while(o.length<b){o.unshift(0)}o=String.fromCharCode.apply(String,o);if(o.length<2*p+2){throw"Cipher too short"}var f=o.substr(1,p);var s=o.substr(p+1);var q=oaep_mgf1_str(s,p,g);var k=[],h;for(h=0;h<f.length;h+=1){k[h]=f.charCodeAt(h)^q.charCodeAt(h)}var l=oaep_mgf1_str(String.fromCharCode.apply(String,k),o.length-p,g);var j=[];for(h=0;h<s.length;h+=1){j[h]=s.charCodeAt(h)^l.charCodeAt(h)}j=String.fromCharCode.apply(String,j);if(j.substr(0,p)!==g("")){throw"Hash mismatch"}j=j.substr(p);var a=j.indexOf("\x01");var m=(a!=-1)?j.substr(0,a).lastIndexOf("\x00"):-1;if(m+1!=a){throw"Malformed data"}return j.substr(a+1)}function RSASetPrivate(c,a,b){this.isPrivate=true;if(typeof c!=="string"){this.n=c;this.e=a;this.d=b}else{if(c!=null&&a!=null&&c.length>0&&a.length>0){this.n=parseBigInt(c,16);this.e=parseInt(a,16);this.d=parseBigInt(b,16)}else{throw"Invalid RSA private key"}}}function RSASetPrivateEx(g,d,e,c,b,a,h,f){this.isPrivate=true;this.isPublic=false;if(g==null){throw"RSASetPrivateEx N == null"}if(d==null){throw"RSASetPrivateEx E == null"}if(g.length==0){throw"RSASetPrivateEx N.length == 0"}if(d.length==0){throw"RSASetPrivateEx E.length == 0"}if(g!=null&&d!=null&&g.length>0&&d.length>0){this.n=parseBigInt(g,16);this.e=parseInt(d,16);this.d=parseBigInt(e,16);this.p=parseBigInt(c,16);this.q=parseBigInt(b,16);this.dmp1=parseBigInt(a,16);this.dmq1=parseBigInt(h,16);this.coeff=parseBigInt(f,16)}else{throw"Invalid RSA private key in RSASetPrivateEx"}}function RSAGenerate(b,i){var a=new SecureRandom();var f=b>>1;this.e=parseInt(i,16);var c=new BigInteger(i,16);for(;;){for(;;){this.p=new BigInteger(b-f,1,a);if(this.p.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)==0&&this.p.isProbablePrime(10)){break}}for(;;){this.q=new BigInteger(f,1,a);if(this.q.subtract(BigInteger.ONE).gcd(c).compareTo(BigInteger.ONE)==0&&this.q.isProbablePrime(10)){break}}if(this.p.compareTo(this.q)<=0){var h=this.p;this.p=this.q;this.q=h}var g=this.p.subtract(BigInteger.ONE);var d=this.q.subtract(BigInteger.ONE);var e=g.multiply(d);if(e.gcd(c).compareTo(BigInteger.ONE)==0){this.n=this.p.multiply(this.q);if(this.n.bitLength()==b){this.d=c.modInverse(e);this.dmp1=this.d.mod(g);this.dmq1=this.d.mod(d);this.coeff=this.q.modInverse(this.p);break}}}this.isPrivate=true}function RSADoPrivate(a){if(this.p==null||this.q==null){return a.modPow(this.d,this.n)}var c=a.mod(this.p).modPow(this.dmp1,this.p);var b=a.mod(this.q).modPow(this.dmq1,this.q);while(c.compareTo(b)<0){c=c.add(this.p)}return c.subtract(b).multiply(this.coeff).mod(this.p).multiply(this.q).add(b)}function RSADecrypt(b){if(b.length!=Math.ceil(this.n.bitLength()/4)){throw new Error("wrong ctext length")}var d=parseBigInt(b,16);var a=this.doPrivate(d);if(a==null){return null}return pkcs1unpad2(a,(this.n.bitLength()+7)>>3)}function RSADecryptOAEP(e,d,b){if(e.length!=Math.ceil(this.n.bitLength()/4)){throw new Error("wrong ctext length")}var f=parseBigInt(e,16);var a=this.doPrivate(f);if(a==null){return null}return oaep_unpad(a,(this.n.bitLength()+7)>>3,d,b)}RSAKey.prototype.doPrivate=RSADoPrivate;RSAKey.prototype.setPrivate=RSASetPrivate;RSAKey.prototype.setPrivateEx=RSASetPrivateEx;RSAKey.prototype.generate=RSAGenerate;RSAKey.prototype.decrypt=RSADecrypt;RSAKey.prototype.decryptOAEP=RSADecryptOAEP;
/*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
 */
function ECFieldElementFp(b,a){this.x=a;this.q=b}function feFpEquals(a){if(a==this){return true}return(this.q.equals(a.q)&&this.x.equals(a.x))}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(a){return new ECFieldElementFp(this.q,this.x.add(a.toBigInteger()).mod(this.q))}function feFpSubtract(a){return new ECFieldElementFp(this.q,this.x.subtract(a.toBigInteger()).mod(this.q))}function feFpMultiply(a){return new ECFieldElementFp(this.q,this.x.multiply(a.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(a){return new ECFieldElementFp(this.q,this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q))}ECFieldElementFp.prototype.equals=feFpEquals;ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger;ECFieldElementFp.prototype.negate=feFpNegate;ECFieldElementFp.prototype.add=feFpAdd;ECFieldElementFp.prototype.subtract=feFpSubtract;ECFieldElementFp.prototype.multiply=feFpMultiply;ECFieldElementFp.prototype.square=feFpSquare;ECFieldElementFp.prototype.divide=feFpDivide;function ECPointFp(c,a,d,b){this.curve=c;this.x=a;this.y=d;if(b==null){this.z=BigInteger.ONE}else{this.z=b}this.zinv=null}function pointFpGetX(){if(this.zinv==null){this.zinv=this.z.modInverse(this.curve.q)}return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){if(this.zinv==null){this.zinv=this.z.modInverse(this.curve.q)}return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(a){if(a==this){return true}if(this.isInfinity()){return a.isInfinity()}if(a.isInfinity()){return this.isInfinity()}var c,b;c=a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q);if(!c.equals(BigInteger.ZERO)){return false}b=a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);return b.equals(BigInteger.ZERO)}function pointFpIsInfinity(){if((this.x==null)&&(this.y==null)){return true}return this.z.equals(BigInteger.ZERO)&&!this.y.toBigInteger().equals(BigInteger.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(l){if(this.isInfinity()){return l}if(l.isInfinity()){return this}var p=l.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(l.z)).mod(this.curve.q);var o=l.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(l.z)).mod(this.curve.q);if(BigInteger.ZERO.equals(o)){if(BigInteger.ZERO.equals(p)){return this.twice()}return this.curve.getInfinity()}var j=new BigInteger("3");var e=this.x.toBigInteger();var n=this.y.toBigInteger();var c=l.x.toBigInteger();var k=l.y.toBigInteger();var m=o.square();var i=m.multiply(o);var d=e.multiply(m);var g=p.square().multiply(this.z);var a=g.subtract(d.shiftLeft(1)).multiply(l.z).subtract(i).multiply(o).mod(this.curve.q);var h=d.multiply(j).multiply(p).subtract(n.multiply(i)).subtract(g.multiply(p)).multiply(l.z).add(p.multiply(i)).mod(this.curve.q);var f=i.multiply(this.z).multiply(l.z).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(a),this.curve.fromBigInteger(h),f)}function pointFpTwice(){if(this.isInfinity()){return this}if(this.y.toBigInteger().signum()==0){return this.curve.getInfinity()}var g=new BigInteger("3");var c=this.x.toBigInteger();var h=this.y.toBigInteger();var e=h.multiply(this.z);var j=e.multiply(h).mod(this.curve.q);var i=this.curve.a.toBigInteger();var k=c.square().multiply(g);if(!BigInteger.ZERO.equals(i)){k=k.add(this.z.square().multiply(i))}k=k.mod(this.curve.q);var b=k.square().subtract(c.shiftLeft(3).multiply(j)).shiftLeft(1).multiply(e).mod(this.curve.q);var f=k.multiply(g).multiply(c).subtract(j.shiftLeft(1)).shiftLeft(2).multiply(j).subtract(k.square().multiply(k)).mod(this.curve.q);var d=e.square().multiply(e).shiftLeft(3).mod(this.curve.q);return new ECPointFp(this.curve,this.curve.fromBigInteger(b),this.curve.fromBigInteger(f),d)}function pointFpMultiply(d){if(this.isInfinity()){return this}if(d.signum()==0){return this.curve.getInfinity()}var m=d;var l=m.multiply(new BigInteger("3"));var b=this.negate();var j=this;var q=this.curve.q.subtract(d);var o=q.multiply(new BigInteger("3"));var c=new ECPointFp(this.curve,this.x,this.y);var a=c.negate();var g;for(g=l.bitLength()-2;g>0;--g){j=j.twice();var n=l.testBit(g);var f=m.testBit(g);if(n!=f){j=j.add(n?this:b)}}for(g=o.bitLength()-2;g>0;--g){c=c.twice();var p=o.testBit(g);var r=q.testBit(g);if(p!=r){c=c.add(p?c:a)}}return j}function pointFpMultiplyTwo(c,a,b){var d;if(c.bitLength()>b.bitLength()){d=c.bitLength()-1}else{d=b.bitLength()-1}var f=this.curve.getInfinity();var e=this.add(a);while(d>=0){f=f.twice();if(c.testBit(d)){if(b.testBit(d)){f=f.add(e)}else{f=f.add(this)}}else{if(b.testBit(d)){f=f.add(a)}}--d}return f}ECPointFp.prototype.getX=pointFpGetX;ECPointFp.prototype.getY=pointFpGetY;ECPointFp.prototype.equals=pointFpEquals;ECPointFp.prototype.isInfinity=pointFpIsInfinity;ECPointFp.prototype.negate=pointFpNegate;ECPointFp.prototype.add=pointFpAdd;ECPointFp.prototype.twice=pointFpTwice;ECPointFp.prototype.multiply=pointFpMultiply;ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo;function ECCurveFp(e,d,c){this.q=e;this.a=this.fromBigInteger(d);this.b=this.fromBigInteger(c);this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(a){if(a==this){return true}return(this.q.equals(a.q)&&this.a.equals(a.a)&&this.b.equals(a.b))}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(a){return new ECFieldElementFp(this.q,a)}function curveFpDecodePointHex(d){switch(parseInt(d.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var a=(d.length-2)/2;var c=d.substr(2,a);var b=d.substr(a+2,a);return new ECPointFp(this,this.fromBigInteger(new BigInteger(c,16)),this.fromBigInteger(new BigInteger(b,16)));default:return null}}ECCurveFp.prototype.getQ=curveFpGetQ;ECCurveFp.prototype.getA=curveFpGetA;ECCurveFp.prototype.getB=curveFpGetB;ECCurveFp.prototype.equals=curveFpEquals;ECCurveFp.prototype.getInfinity=curveFpGetInfinity;ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger;ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex;
/*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
 */
ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)};ECPointFp.prototype.getEncoded=function(c){var d=function(h,f){var g=h.toByteArrayUnsigned();if(f<g.length){g=g.slice(g.length-f)}else{while(f>g.length){g.unshift(0)}}return g};var a=this.getX().toBigInteger();var e=this.getY().toBigInteger();var b=d(a,32);if(c){if(e.isEven()){b.unshift(2)}else{b.unshift(3)}}else{b.unshift(4);b=b.concat(d(e,32))}return b};ECPointFp.decodeFrom=function(g,c){var f=c[0];var e=c.length-1;var d=c.slice(1,1+e/2);var b=c.slice(1+e/2,1+e);d.unshift(0);b.unshift(0);var a=new BigInteger(d);var h=new BigInteger(b);return new ECPointFp(g,g.fromBigInteger(a),g.fromBigInteger(h))};ECPointFp.decodeFromHex=function(g,c){var f=c.substr(0,2);var e=c.length-2;var d=c.substr(2,e/2);var b=c.substr(2+e/2,e/2);var a=new BigInteger(d,16);var h=new BigInteger(b,16);return new ECPointFp(g,g.fromBigInteger(a),g.fromBigInteger(h))};ECPointFp.prototype.add2D=function(c){if(this.isInfinity()){return c}if(c.isInfinity()){return this}if(this.x.equals(c.x)){if(this.y.equals(c.y)){return this.twice()}return this.curve.getInfinity()}var g=c.x.subtract(this.x);var e=c.y.subtract(this.y);var a=e.divide(g);var d=a.square().subtract(this.x).subtract(c.x);var f=a.multiply(this.x.subtract(d)).subtract(this.y);return new ECPointFp(this.curve,d,f)};ECPointFp.prototype.twice2D=function(){if(this.isInfinity()){return this}if(this.y.toBigInteger().signum()==0){return this.curve.getInfinity()}var b=this.curve.fromBigInteger(BigInteger.valueOf(2));var e=this.curve.fromBigInteger(BigInteger.valueOf(3));var a=this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(b));var c=a.square().subtract(this.x.multiply(b));var d=a.multiply(this.x.subtract(c)).subtract(this.y);return new ECPointFp(this.curve,c,d)};ECPointFp.prototype.multiply2D=function(b){if(this.isInfinity()){return this}if(b.signum()==0){return this.curve.getInfinity()}var g=b;var f=g.multiply(new BigInteger("3"));var l=this.negate();var d=this;var c;for(c=f.bitLength()-2;c>0;--c){d=d.twice();var a=f.testBit(c);var j=g.testBit(c);if(a!=j){d=d.add2D(a?this:l)}}return d};ECPointFp.prototype.isOnCurve=function(){var d=this.getX().toBigInteger();var i=this.getY().toBigInteger();var f=this.curve.getA().toBigInteger();var c=this.curve.getB().toBigInteger();var h=this.curve.getQ();var e=i.multiply(i).mod(h);var g=d.multiply(d).multiply(d).add(f.multiply(d)).add(c).mod(h);return e.equals(g)};ECPointFp.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"};ECPointFp.prototype.validate=function(){var c=this.curve.getQ();if(this.isInfinity()){throw new Error("Point is at infinity.")}var a=this.getX().toBigInteger();var b=this.getY().toBigInteger();if(a.compareTo(BigInteger.ONE)<0||a.compareTo(c.subtract(BigInteger.ONE))>0){throw new Error("x coordinate out of bounds")}if(b.compareTo(BigInteger.ONE)<0||b.compareTo(c.subtract(BigInteger.ONE))>0){throw new Error("y coordinate out of bounds")}if(!this.isOnCurve()){throw new Error("Point is not on the curve.")}if(this.multiply(c).isInfinity()){throw new Error("Point is not a scalar multiple of G.")}return true};
/*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
 */
var jsonParse=(function(){var e="(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)";var j='(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))';var i='(?:"'+j+'*")';var d=new RegExp("(?:false|true|null|[\\{\\}\\[\\]]|"+e+"|"+i+")","g");var k=new RegExp("\\\\(?:([^u])|u(.{4}))","g");var g={'"':'"',"/":"/","\\":"\\",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};function h(l,m,n){return m?g[m]:String.fromCharCode(parseInt(n,16))}var c=new String("");var a="\\";var f={"{":Object,"[":Array};var b=Object.hasOwnProperty;return function(u,q){var p=u.match(d);var x;var v=p[0];var l=false;if("{"===v){x={}}else{if("["===v){x=[]}else{x=[];l=true}}var t;var r=[x];for(var o=1-l,m=p.length;o<m;++o){v=p[o];var w;switch(v.charCodeAt(0)){default:w=r[0];w[t||w.length]=+(v);t=void 0;break;case 34:v=v.substring(1,v.length-1);if(v.indexOf(a)!==-1){v=v.replace(k,h)}w=r[0];if(!t){if(w instanceof Array){t=w.length}else{t=v||c;break}}w[t]=v;t=void 0;break;case 91:w=r[0];r.unshift(w[t||w.length]=[]);t=void 0;break;case 93:r.shift();break;case 102:w=r[0];w[t||w.length]=false;t=void 0;break;case 110:w=r[0];w[t||w.length]=null;t=void 0;break;case 116:w=r[0];w[t||w.length]=true;t=void 0;break;case 123:w=r[0];r.unshift(w[t||w.length]={});t=void 0;break;case 125:r.shift();break}}if(l){if(r.length!==1){throw new Error()}x=x[0]}else{if(r.length){throw new Error()}}if(q){var s=function(C,B){var D=C[B];if(D&&typeof D==="object"){var n=null;for(var z in D){if(b.call(D,z)&&D!==C){var y=s(D,z);if(y!==void 0){D[z]=y}else{if(!n){n=[]}n.push(z)}}}if(n){for(var A=n.length;--A>=0;){delete D[n[A]]}}}return q.call(C,B,D)};x=s({"":x},"")}return x}})();
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}KJUR.asn1.ASN1Util=new function(){this.integerToByteHex=function(a){var b=a.toString(16);if((b.length%2)==1){b="0"+b}return b};this.bigIntToMinTwosComplementsHex=function(j){var f=j.toString(16);if(f.substr(0,1)!="-"){if(f.length%2==1){f="0"+f}else{if(!f.match(/^[0-7]/)){f="00"+f}}}else{var a=f.substr(1);var e=a.length;if(e%2==1){e+=1}else{if(!f.match(/^[0-7]/)){e+=2}}var g="";for(var d=0;d<e;d++){g+="f"}var c=new BigInteger(g,16);var b=c.xor(j).add(BigInteger.ONE);f=b.toString(16).replace(/^-/,"")}return f};this.getPEMStringFromHex=function(a,b){return hextopem(a,b)};this.newObject=function(k){var D=KJUR,n=D.asn1,z=n.DERBoolean,e=n.DERInteger,s=n.DERBitString,h=n.DEROctetString,v=n.DERNull,w=n.DERObjectIdentifier,l=n.DEREnumerated,g=n.DERUTF8String,f=n.DERNumericString,y=n.DERPrintableString,u=n.DERTeletexString,p=n.DERIA5String,C=n.DERUTCTime,j=n.DERGeneralizedTime,m=n.DERSequence,c=n.DERSet,r=n.DERTaggedObject,o=n.ASN1Util.newObject;var t=Object.keys(k);if(t.length!=1){throw"key of param shall be only one."}var F=t[0];if(":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":"+F+":")==-1){throw"undefined key: "+F}if(F=="bool"){return new z(k[F])}if(F=="int"){return new e(k[F])}if(F=="bitstr"){return new s(k[F])}if(F=="octstr"){return new h(k[F])}if(F=="null"){return new v(k[F])}if(F=="oid"){return new w(k[F])}if(F=="enum"){return new l(k[F])}if(F=="utf8str"){return new g(k[F])}if(F=="numstr"){return new f(k[F])}if(F=="prnstr"){return new y(k[F])}if(F=="telstr"){return new u(k[F])}if(F=="ia5str"){return new p(k[F])}if(F=="utctime"){return new C(k[F])}if(F=="gentime"){return new j(k[F])}if(F=="seq"){var d=k[F];var E=[];for(var x=0;x<d.length;x++){var B=o(d[x]);E.push(B)}return new m({array:E})}if(F=="set"){var d=k[F];var E=[];for(var x=0;x<d.length;x++){var B=o(d[x]);E.push(B)}return new c({array:E})}if(F=="tag"){var A=k[F];if(Object.prototype.toString.call(A)==="[object Array]"&&A.length==3){var q=o(A[2]);return new r({tag:A[0],explicit:A[1],obj:q})}else{var b={};if(A.explicit!==undefined){b.explicit=A.explicit}if(A.tag!==undefined){b.tag=A.tag}if(A.obj===undefined){throw"obj shall be specified for 'tag'."}b.obj=o(A.obj);return new r(b)}}};this.jsonToASN1HEX=function(b){var a=this.newObject(b);return a.getEncodedHex()}};KJUR.asn1.ASN1Util.oidHexToInt=function(a){var j="";var k=parseInt(a.substr(0,2),16);var d=Math.floor(k/40);var c=k%40;var j=d+"."+c;var e="";for(var f=2;f<a.length;f+=2){var g=parseInt(a.substr(f,2),16);var h=("00000000"+g.toString(2)).slice(-8);e=e+h.substr(1,7);if(h.substr(0,1)=="0"){var b=new BigInteger(e,2);j=j+"."+b.toString(10);e=""}}return j};KJUR.asn1.ASN1Util.oidIntToHex=function(f){var e=function(a){var k=a.toString(16);if(k.length==1){k="0"+k}return k};var d=function(o){var n="";var k=new BigInteger(o,10);var a=k.toString(2);var l=7-a.length%7;if(l==7){l=0}var q="";for(var m=0;m<l;m++){q+="0"}a=q+a;for(var m=0;m<a.length-1;m+=7){var p=a.substr(m,7);if(m!=a.length-7){p="1"+p}n+=e(parseInt(p,2))}return n};if(!f.match(/^[0-9.]+$/)){throw"malformed oid string: "+f}var g="";var b=f.split(".");var j=parseInt(b[0])*40+parseInt(b[1]);g+=e(j);b.splice(0,2);for(var c=0;c<b.length;c++){g+=d(b[c])}return g};KJUR.asn1.ASN1Object=function(){var c=true;var b=null;var d="00";var e="00";var a="";this.getLengthHexFromValue=function(){if(typeof this.hV=="undefined"||this.hV==null){throw"this.hV is null or undefined."}if(this.hV.length%2==1){throw"value hex must be even length: n="+a.length+",v="+this.hV}var i=this.hV.length/2;var h=i.toString(16);if(h.length%2==1){h="0"+h}if(i<128){return h}else{var g=h.length/2;if(g>15){throw"ASN.1 length too long to represent by 8x: n = "+i.toString(16)}var f=128+g;return f.toString(16)+h}};this.getEncodedHex=function(){if(this.hTLV==null||this.isModified){this.hV=this.getFreshValueHex();this.hL=this.getLengthHexFromValue();this.hTLV=this.hT+this.hL+this.hV;this.isModified=false}return this.hTLV};this.getValueHex=function(){this.getEncodedHex();return this.hV};this.getFreshValueHex=function(){return""}};KJUR.asn1.DERAbstractString=function(c){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var b=null;var a=null;this.getString=function(){return this.s};this.setString=function(d){this.hTLV=null;this.isModified=true;this.s=d;this.hV=utf8tohex(this.s).toLowerCase()};this.setStringHex=function(d){this.hTLV=null;this.isModified=true;this.s=null;this.hV=d};this.getFreshValueHex=function(){return this.hV};if(typeof c!="undefined"){if(typeof c=="string"){this.setString(c)}else{if(typeof c.str!="undefined"){this.setString(c.str)}else{if(typeof c.hex!="undefined"){this.setStringHex(c.hex)}}}}};YAHOO.lang.extend(KJUR.asn1.DERAbstractString,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractTime=function(c){KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);var b=null;var a=null;this.localDateToUTC=function(g){var e=g.getTime()+(g.getTimezoneOffset()*60000);var f=new Date(e);return f};this.formatDate=function(m,o,e){var g=this.zeroPadding;var n=this.localDateToUTC(m);var p=String(n.getFullYear());if(o=="utc"){p=p.substr(2,2)}var l=g(String(n.getMonth()+1),2);var q=g(String(n.getDate()),2);var h=g(String(n.getHours()),2);var i=g(String(n.getMinutes()),2);var j=g(String(n.getSeconds()),2);var r=p+l+q+h+i+j;if(e===true){var f=n.getMilliseconds();if(f!=0){var k=g(String(f),3);k=k.replace(/[0]+$/,"");r=r+"."+k}}return r+"Z"};this.zeroPadding=function(e,d){if(e.length>=d){return e}return new Array(d-e.length+1).join("0")+e};this.getString=function(){return this.s};this.setString=function(d){this.hTLV=null;this.isModified=true;this.s=d;this.hV=stohex(d)};this.setByDateValue=function(h,j,e,d,f,g){var i=new Date(Date.UTC(h,j-1,e,d,f,g,0));this.setByDate(i)};this.getFreshValueHex=function(){return this.hV}};YAHOO.lang.extend(KJUR.asn1.DERAbstractTime,KJUR.asn1.ASN1Object);KJUR.asn1.DERAbstractStructured=function(b){KJUR.asn1.DERAbstractString.superclass.constructor.call(this);var a=null;this.setByASN1ObjectArray=function(c){this.hTLV=null;this.isModified=true;this.asn1Array=c};this.appendASN1Object=function(c){this.hTLV=null;this.isModified=true;this.asn1Array.push(c)};this.asn1Array=new Array();if(typeof b!="undefined"){if(typeof b.array!="undefined"){this.asn1Array=b.array}}};YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured,KJUR.asn1.ASN1Object);KJUR.asn1.DERBoolean=function(){KJUR.asn1.DERBoolean.superclass.constructor.call(this);this.hT="01";this.hTLV="0101ff"};YAHOO.lang.extend(KJUR.asn1.DERBoolean,KJUR.asn1.ASN1Object);KJUR.asn1.DERInteger=function(a){KJUR.asn1.DERInteger.superclass.constructor.call(this);this.hT="02";this.setByBigInteger=function(b){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b)};this.setByInteger=function(c){var b=new BigInteger(String(c),10);this.setByBigInteger(b)};this.setValueHex=function(b){this.hV=b};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a.bigint!="undefined"){this.setByBigInteger(a.bigint)}else{if(typeof a["int"]!="undefined"){this.setByInteger(a["int"])}else{if(typeof a=="number"){this.setByInteger(a)}else{if(typeof a.hex!="undefined"){this.setValueHex(a.hex)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERInteger,KJUR.asn1.ASN1Object);KJUR.asn1.DERBitString=function(b){if(b!==undefined&&typeof b.obj!=="undefined"){var a=KJUR.asn1.ASN1Util.newObject(b.obj);b.hex="00"+a.getEncodedHex()}KJUR.asn1.DERBitString.superclass.constructor.call(this);this.hT="03";this.setHexValueIncludingUnusedBits=function(c){this.hTLV=null;this.isModified=true;this.hV=c};this.setUnusedBitsAndHexValue=function(c,e){if(c<0||7<c){throw"unused bits shall be from 0 to 7: u = "+c}var d="0"+c;this.hTLV=null;this.isModified=true;this.hV=d+e};this.setByBinaryString=function(e){e=e.replace(/0+$/,"");var f=8-e.length%8;if(f==8){f=0}for(var g=0;g<=f;g++){e+="0"}var j="";for(var g=0;g<e.length-1;g+=8){var d=e.substr(g,8);var c=parseInt(d,2).toString(16);if(c.length==1){c="0"+c}j+=c}this.hTLV=null;this.isModified=true;this.hV="0"+f+j};this.setByBooleanArray=function(e){var d="";for(var c=0;c<e.length;c++){if(e[c]==true){d+="1"}else{d+="0"}}this.setByBinaryString(d)};this.newFalseArray=function(e){var c=new Array(e);for(var d=0;d<e;d++){c[d]=false}return c};this.getFreshValueHex=function(){return this.hV};if(typeof b!="undefined"){if(typeof b=="string"&&b.toLowerCase().match(/^[0-9a-f]+$/)){this.setHexValueIncludingUnusedBits(b)}else{if(typeof b.hex!="undefined"){this.setHexValueIncludingUnusedBits(b.hex)}else{if(typeof b.bin!="undefined"){this.setByBinaryString(b.bin)}else{if(typeof b.array!="undefined"){this.setByBooleanArray(b.array)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERBitString,KJUR.asn1.ASN1Object);KJUR.asn1.DEROctetString=function(b){if(b!==undefined&&typeof b.obj!=="undefined"){var a=KJUR.asn1.ASN1Util.newObject(b.obj);b.hex=a.getEncodedHex()}KJUR.asn1.DEROctetString.superclass.constructor.call(this,b);this.hT="04"};YAHOO.lang.extend(KJUR.asn1.DEROctetString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNull=function(){KJUR.asn1.DERNull.superclass.constructor.call(this);this.hT="05";this.hTLV="0500"};YAHOO.lang.extend(KJUR.asn1.DERNull,KJUR.asn1.ASN1Object);KJUR.asn1.DERObjectIdentifier=function(c){var b=function(d){var e=d.toString(16);if(e.length==1){e="0"+e}return e};var a=function(k){var j="";var e=new BigInteger(k,10);var d=e.toString(2);var f=7-d.length%7;if(f==7){f=0}var m="";for(var g=0;g<f;g++){m+="0"}d=m+d;for(var g=0;g<d.length-1;g+=7){var l=d.substr(g,7);if(g!=d.length-7){l="1"+l}j+=b(parseInt(l,2))}return j};KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);this.hT="06";this.setValueHex=function(d){this.hTLV=null;this.isModified=true;this.s=null;this.hV=d};this.setValueOidString=function(f){if(!f.match(/^[0-9.]+$/)){throw"malformed oid string: "+f}var g="";var d=f.split(".");var j=parseInt(d[0])*40+parseInt(d[1]);g+=b(j);d.splice(0,2);for(var e=0;e<d.length;e++){g+=a(d[e])}this.hTLV=null;this.isModified=true;this.s=null;this.hV=g};this.setValueName=function(e){var d=KJUR.asn1.x509.OID.name2oid(e);if(d!==""){this.setValueOidString(d)}else{throw"DERObjectIdentifier oidName undefined: "+e}};this.getFreshValueHex=function(){return this.hV};if(c!==undefined){if(typeof c==="string"){if(c.match(/^[0-2].[0-9.]+$/)){this.setValueOidString(c)}else{this.setValueName(c)}}else{if(c.oid!==undefined){this.setValueOidString(c.oid)}else{if(c.hex!==undefined){this.setValueHex(c.hex)}else{if(c.name!==undefined){this.setValueName(c.name)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.DEREnumerated=function(a){KJUR.asn1.DEREnumerated.superclass.constructor.call(this);this.hT="0a";this.setByBigInteger=function(b){this.hTLV=null;this.isModified=true;this.hV=KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(b)};this.setByInteger=function(c){var b=new BigInteger(String(c),10);this.setByBigInteger(b)};this.setValueHex=function(b){this.hV=b};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a["int"]!="undefined"){this.setByInteger(a["int"])}else{if(typeof a=="number"){this.setByInteger(a)}else{if(typeof a.hex!="undefined"){this.setValueHex(a.hex)}}}}};YAHOO.lang.extend(KJUR.asn1.DEREnumerated,KJUR.asn1.ASN1Object);KJUR.asn1.DERUTF8String=function(a){KJUR.asn1.DERUTF8String.superclass.constructor.call(this,a);this.hT="0c"};YAHOO.lang.extend(KJUR.asn1.DERUTF8String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERNumericString=function(a){KJUR.asn1.DERNumericString.superclass.constructor.call(this,a);this.hT="12"};YAHOO.lang.extend(KJUR.asn1.DERNumericString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERPrintableString=function(a){KJUR.asn1.DERPrintableString.superclass.constructor.call(this,a);this.hT="13"};YAHOO.lang.extend(KJUR.asn1.DERPrintableString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERTeletexString=function(a){KJUR.asn1.DERTeletexString.superclass.constructor.call(this,a);this.hT="14"};YAHOO.lang.extend(KJUR.asn1.DERTeletexString,KJUR.asn1.DERAbstractString);KJUR.asn1.DERIA5String=function(a){KJUR.asn1.DERIA5String.superclass.constructor.call(this,a);this.hT="16"};YAHOO.lang.extend(KJUR.asn1.DERIA5String,KJUR.asn1.DERAbstractString);KJUR.asn1.DERUTCTime=function(a){KJUR.asn1.DERUTCTime.superclass.constructor.call(this,a);this.hT="17";this.setByDate=function(b){this.hTLV=null;this.isModified=true;this.date=b;this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)};this.getFreshValueHex=function(){if(typeof this.date=="undefined"&&typeof this.s=="undefined"){this.date=new Date();this.s=this.formatDate(this.date,"utc");this.hV=stohex(this.s)}return this.hV};if(a!==undefined){if(a.str!==undefined){this.setString(a.str)}else{if(typeof a=="string"&&a.match(/^[0-9]{12}Z$/)){this.setString(a)}else{if(a.hex!==undefined){this.setStringHex(a.hex)}else{if(a.date!==undefined){this.setByDate(a.date)}}}}}};YAHOO.lang.extend(KJUR.asn1.DERUTCTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERGeneralizedTime=function(a){KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this,a);this.hT="18";this.withMillis=false;this.setByDate=function(b){this.hTLV=null;this.isModified=true;this.date=b;this.s=this.formatDate(this.date,"gen",this.withMillis);this.hV=stohex(this.s)};this.getFreshValueHex=function(){if(this.date===undefined&&this.s===undefined){this.date=new Date();this.s=this.formatDate(this.date,"gen",this.withMillis);this.hV=stohex(this.s)}return this.hV};if(a!==undefined){if(a.str!==undefined){this.setString(a.str)}else{if(typeof a=="string"&&a.match(/^[0-9]{14}Z$/)){this.setString(a)}else{if(a.hex!==undefined){this.setStringHex(a.hex)}else{if(a.date!==undefined){this.setByDate(a.date)}}}}if(a.millis===true){this.withMillis=true}}};YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime,KJUR.asn1.DERAbstractTime);KJUR.asn1.DERSequence=function(a){KJUR.asn1.DERSequence.superclass.constructor.call(this,a);this.hT="30";this.getFreshValueHex=function(){var c="";for(var b=0;b<this.asn1Array.length;b++){var d=this.asn1Array[b];c+=d.getEncodedHex()}this.hV=c;return this.hV}};YAHOO.lang.extend(KJUR.asn1.DERSequence,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERSet=function(a){KJUR.asn1.DERSet.superclass.constructor.call(this,a);this.hT="31";this.sortFlag=true;this.getFreshValueHex=function(){var b=new Array();for(var c=0;c<this.asn1Array.length;c++){var d=this.asn1Array[c];b.push(d.getEncodedHex())}if(this.sortFlag==true){b.sort()}this.hV=b.join("");return this.hV};if(typeof a!="undefined"){if(typeof a.sortflag!="undefined"&&a.sortflag==false){this.sortFlag=false}}};YAHOO.lang.extend(KJUR.asn1.DERSet,KJUR.asn1.DERAbstractStructured);KJUR.asn1.DERTaggedObject=function(a){KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);this.hT="a0";this.hV="";this.isExplicit=true;this.asn1Object=null;this.setASN1Object=function(b,c,d){this.hT=c;this.isExplicit=b;this.asn1Object=d;if(this.isExplicit){this.hV=this.asn1Object.getEncodedHex();this.hTLV=null;this.isModified=true}else{this.hV=null;this.hTLV=d.getEncodedHex();this.hTLV=this.hTLV.replace(/^../,c);this.isModified=false}};this.getFreshValueHex=function(){return this.hV};if(typeof a!="undefined"){if(typeof a.tag!="undefined"){this.hT=a.tag}if(typeof a.explicit!="undefined"){this.isExplicit=a.explicit}if(typeof a.obj!="undefined"){this.asn1Object=a.obj;this.setASN1Object(this.isExplicit,this.hT,this.asn1Object)}}};YAHOO.lang.extend(KJUR.asn1.DERTaggedObject,KJUR.asn1.ASN1Object);
var ASN1HEX=new function(){};ASN1HEX.getLblen=function(c,a){if(c.substr(a+2,1)!="8"){return 1}var b=parseInt(c.substr(a+3,1));if(b==0){return -1}if(0<b&&b<10){return b+1}return -2};ASN1HEX.getL=function(c,b){var a=ASN1HEX.getLblen(c,b);if(a<1){return""}return c.substr(b+2,a*2)};ASN1HEX.getVblen=function(d,a){var c,b;c=ASN1HEX.getL(d,a);if(c==""){return -1}if(c.substr(0,1)==="8"){b=new BigInteger(c.substr(2),16)}else{b=new BigInteger(c,16)}return b.intValue()};ASN1HEX.getVidx=function(c,b){var a=ASN1HEX.getLblen(c,b);if(a<0){return a}return b+(a+1)*2};ASN1HEX.getV=function(d,a){var c=ASN1HEX.getVidx(d,a);var b=ASN1HEX.getVblen(d,a);return d.substr(c,b*2)};ASN1HEX.getTLV=function(b,a){return b.substr(a,2)+ASN1HEX.getL(b,a)+ASN1HEX.getV(b,a)};ASN1HEX.getNextSiblingIdx=function(d,a){var c=ASN1HEX.getVidx(d,a);var b=ASN1HEX.getVblen(d,a);return c+b*2};ASN1HEX.getChildIdx=function(e,f){var j=ASN1HEX;var g=new Array();var i=j.getVidx(e,f);if(e.substr(f,2)=="03"){g.push(i+2)}else{g.push(i)}var l=j.getVblen(e,f);var c=i;var d=0;while(1){var b=j.getNextSiblingIdx(e,c);if(b==null||(b-i>=(l*2))){break}if(d>=200){break}g.push(b);c=b;d++}return g};ASN1HEX.getNthChildIdx=function(d,b,e){var c=ASN1HEX.getChildIdx(d,b);return c[e]};ASN1HEX.getIdxbyList=function(e,d,c,i){var g=ASN1HEX;var f,b;if(c.length==0){if(i!==undefined){if(e.substr(d,2)!==i){throw Error("checking tag doesn't match: "+e.substr(d,2)+"!="+i)}}return d}f=c.shift();b=g.getChildIdx(e,d);return g.getIdxbyList(e,b[f],c,i)};ASN1HEX.getTLVbyList=function(d,c,b,f){var e=ASN1HEX;var a=e.getIdxbyList(d,c,b);if(a===undefined){throw"can't find nthList object"}if(f!==undefined){if(d.substr(a,2)!=f){throw"checking tag doesn't match: "+d.substr(a,2)+"!="+f}}return e.getTLV(d,a)};ASN1HEX.getVbyList=function(e,c,b,g,i){var f=ASN1HEX;var a,d;a=f.getIdxbyList(e,c,b,g);if(a===undefined){throw"can't find nthList object"}d=f.getV(e,a);if(i===true){d=d.substr(2)}return d};ASN1HEX.hextooidstr=function(e){var h=function(b,a){if(b.length>=a){return b}return new Array(a-b.length+1).join("0")+b};var l=[];var o=e.substr(0,2);var f=parseInt(o,16);l[0]=new String(Math.floor(f/40));l[1]=new String(f%40);var m=e.substr(2);var k=[];for(var g=0;g<m.length/2;g++){k.push(parseInt(m.substr(g*2,2),16))}var j=[];var d="";for(var g=0;g<k.length;g++){if(k[g]&128){d=d+h((k[g]&127).toString(2),7)}else{d=d+h((k[g]&127).toString(2),7);j.push(new String(parseInt(d,2)));d=""}}var n=l.join(".");if(j.length>0){n=n+"."+j.join(".")}return n};ASN1HEX.dump=function(t,c,l,g){var p=ASN1HEX;var j=p.getV;var y=p.dump;var w=p.getChildIdx;var e=t;if(t instanceof KJUR.asn1.ASN1Object){e=t.getEncodedHex()}var q=function(A,i){if(A.length<=i*2){return A}else{var v=A.substr(0,i)+"..(total "+A.length/2+"bytes).."+A.substr(A.length-i,i);return v}};if(c===undefined){c={ommit_long_octet:32}}if(l===undefined){l=0}if(g===undefined){g=""}var x=c.ommit_long_octet;if(e.substr(l,2)=="01"){var h=j(e,l);if(h=="00"){return g+"BOOLEAN FALSE\n"}else{return g+"BOOLEAN TRUE\n"}}if(e.substr(l,2)=="02"){var h=j(e,l);return g+"INTEGER "+q(h,x)+"\n"}if(e.substr(l,2)=="03"){var h=j(e,l);return g+"BITSTRING "+q(h,x)+"\n"}if(e.substr(l,2)=="04"){var h=j(e,l);if(p.isASN1HEX(h)){var k=g+"OCTETSTRING, encapsulates\n";k=k+y(h,c,0,g+"  ");return k}else{return g+"OCTETSTRING "+q(h,x)+"\n"}}if(e.substr(l,2)=="05"){return g+"NULL\n"}if(e.substr(l,2)=="06"){var m=j(e,l);var a=KJUR.asn1.ASN1Util.oidHexToInt(m);var o=KJUR.asn1.x509.OID.oid2name(a);var b=a.replace(/\./g," ");if(o!=""){return g+"ObjectIdentifier "+o+" ("+b+")\n"}else{return g+"ObjectIdentifier ("+b+")\n"}}if(e.substr(l,2)=="0c"){return g+"UTF8String '"+hextoutf8(j(e,l))+"'\n"}if(e.substr(l,2)=="13"){return g+"PrintableString '"+hextoutf8(j(e,l))+"'\n"}if(e.substr(l,2)=="14"){return g+"TeletexString '"+hextoutf8(j(e,l))+"'\n"}if(e.substr(l,2)=="16"){return g+"IA5String '"+hextoutf8(j(e,l))+"'\n"}if(e.substr(l,2)=="17"){return g+"UTCTime "+hextoutf8(j(e,l))+"\n"}if(e.substr(l,2)=="18"){return g+"GeneralizedTime "+hextoutf8(j(e,l))+"\n"}if(e.substr(l,2)=="30"){if(e.substr(l,4)=="3000"){return g+"SEQUENCE {}\n"}var k=g+"SEQUENCE\n";var d=w(e,l);var f=c;if((d.length==2||d.length==3)&&e.substr(d[0],2)=="06"&&e.substr(d[d.length-1],2)=="04"){var o=p.oidname(j(e,d[0]));var r=JSON.parse(JSON.stringify(c));r.x509ExtName=o;f=r}for(var u=0;u<d.length;u++){k=k+y(e,f,d[u],g+"  ")}return k}if(e.substr(l,2)=="31"){var k=g+"SET\n";var d=w(e,l);for(var u=0;u<d.length;u++){k=k+y(e,c,d[u],g+"  ")}return k}var z=parseInt(e.substr(l,2),16);if((z&128)!=0){var n=z&31;if((z&32)!=0){var k=g+"["+n+"]\n";var d=w(e,l);for(var u=0;u<d.length;u++){k=k+y(e,c,d[u],g+"  ")}return k}else{var h=j(e,l);if(h.substr(0,8)=="68747470"){h=hextoutf8(h)}if(c.x509ExtName==="subjectAltName"&&n==2){h=hextoutf8(h)}var k=g+"["+n+"] "+h+"\n";return k}}return g+"UNKNOWN("+e.substr(l,2)+") "+j(e,l)+"\n"};ASN1HEX.isASN1HEX=function(e){var d=ASN1HEX;if(e.length%2==1){return false}var c=d.getVblen(e,0);var b=e.substr(0,2);var f=d.getL(e,0);var a=e.length-b.length-f.length;if(a==c*2){return true}return false};ASN1HEX.checkStrictDER=function(g,o,d,c,r){var s=ASN1HEX;if(d===undefined){if(typeof g!="string"){throw new Error("not hex string")}g=g.toLowerCase();if(!KJUR.lang.String.isHex(g)){throw new Error("not hex string")}d=g.length;c=g.length/2;if(c<128){r=1}else{r=Math.ceil(c.toString(16))+1}}var k=s.getL(g,o);if(k.length>r*2){throw new Error("L of TLV too long: idx="+o)}var n=s.getVblen(g,o);if(n>c){throw new Error("value of L too long than hex: idx="+o)}var q=s.getTLV(g,o);var f=q.length-2-s.getL(g,o).length;if(f!==(n*2)){throw new Error("V string length and L's value not the same:"+f+"/"+(n*2))}if(o===0){if(g.length!=q.length){throw new Error("total length and TLV length unmatch:"+g.length+"!="+q.length)}}var b=g.substr(o,2);if(b==="02"){var a=s.getVidx(g,o);if(g.substr(a,2)=="00"&&g.charCodeAt(a+2)<56){throw new Error("not least zeros for DER INTEGER")}}if(parseInt(b,16)&32){var p=s.getVblen(g,o);var m=0;var l=s.getChildIdx(g,o);for(var e=0;e<l.length;e++){var j=s.getTLV(g,l[e]);m+=j.length;s.checkStrictDER(g,l[e],d,c,r)}if((p*2)!=m){throw new Error("sum of children's TLV length and L unmatch: "+(p*2)+"!="+m)}}};ASN1HEX.oidname=function(a){var c=KJUR.asn1;if(KJUR.lang.String.isHex(a)){a=c.ASN1Util.oidHexToInt(a)}var b=c.x509.OID.oid2name(a);if(b===""){b=a}return b};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.x509=="undefined"||!KJUR.asn1.x509){KJUR.asn1.x509={}}KJUR.asn1.x509.Certificate=function(e){KJUR.asn1.x509.Certificate.superclass.constructor.call(this);var a=null,j=null,h=null,k=null,i=null,b=KJUR,f=b.crypto,g=b.asn1,d=g.DERSequence,c=g.DERBitString;this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg;var m=new KJUR.crypto.Signature({alg:this.asn1SignatureAlg.nameAlg});m.init(this.prvKey);m.updateHex(this.asn1TBSCert.getEncodedHex());this.hexSig=m.sign();this.asn1Sig=new c({hex:"00"+this.hexSig});var l=new d({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=l.getEncodedHex();this.isModified=false};this.setSignatureHex=function(l){this.asn1SignatureAlg=this.asn1TBSCert.asn1SignatureAlg;this.hexSig=l;this.asn1Sig=new c({hex:"00"+this.hexSig});var m=new d({array:[this.asn1TBSCert,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=m.getEncodedHex();this.isModified=false};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};this.getPEMString=function(){var l=hextob64nl(this.getEncodedHex());return"-----BEGIN CERTIFICATE-----\r\n"+l+"\r\n-----END CERTIFICATE-----\r\n"};if(e!==undefined){if(e.tbscertobj!==undefined){this.asn1TBSCert=e.tbscertobj}if(e.prvkeyobj!==undefined){this.prvKey=e.prvkeyobj}}};YAHOO.lang.extend(KJUR.asn1.x509.Certificate,KJUR.asn1.ASN1Object);KJUR.asn1.x509.TBSCertificate=function(e){KJUR.asn1.x509.TBSCertificate.superclass.constructor.call(this);var b=KJUR,i=b.asn1,f=i.DERSequence,h=i.DERInteger,c=i.DERTaggedObject,d=i.x509,g=d.Time,a=d.X500Name,j=d.SubjectPublicKeyInfo;this._initialize=function(){this.asn1Array=new Array();this.asn1Version=new c({obj:new h({"int":2})});this.asn1SerialNumber=null;this.asn1SignatureAlg=null;this.asn1Issuer=null;this.asn1NotBefore=null;this.asn1NotAfter=null;this.asn1Subject=null;this.asn1SubjPKey=null;this.extensionsArray=new Array()};this.setSerialNumberByParam=function(k){this.asn1SerialNumber=new h(k)};this.setSignatureAlgByParam=function(k){this.asn1SignatureAlg=new d.AlgorithmIdentifier(k)};this.setIssuerByParam=function(k){this.asn1Issuer=new a(k)};this.setNotBeforeByParam=function(k){this.asn1NotBefore=new g(k)};this.setNotAfterByParam=function(k){this.asn1NotAfter=new g(k)};this.setSubjectByParam=function(k){this.asn1Subject=new a(k)};this.setSubjectPublicKey=function(k){this.asn1SubjPKey=new j(k)};this.setSubjectPublicKeyByGetKey=function(l){var k=KEYUTIL.getKey(l);this.asn1SubjPKey=new j(k)};this.appendExtension=function(k){this.extensionsArray.push(k)};this.appendExtensionByName=function(l,k){KJUR.asn1.x509.Extension.appendByNameToArray(l,k,this.extensionsArray)};this.getEncodedHex=function(){if(this.asn1NotBefore==null||this.asn1NotAfter==null){throw"notBefore and/or notAfter not set"}var l=new f({array:[this.asn1NotBefore,this.asn1NotAfter]});this.asn1Array=new Array();this.asn1Array.push(this.asn1Version);this.asn1Array.push(this.asn1SerialNumber);this.asn1Array.push(this.asn1SignatureAlg);this.asn1Array.push(this.asn1Issuer);this.asn1Array.push(l);this.asn1Array.push(this.asn1Subject);this.asn1Array.push(this.asn1SubjPKey);if(this.extensionsArray.length>0){var m=new f({array:this.extensionsArray});var k=new c({explicit:true,tag:"a3",obj:m});this.asn1Array.push(k)}var n=new f({array:this.asn1Array});this.hTLV=n.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize()};YAHOO.lang.extend(KJUR.asn1.x509.TBSCertificate,KJUR.asn1.ASN1Object);KJUR.asn1.x509.Extension=function(d){KJUR.asn1.x509.Extension.superclass.constructor.call(this);var f=null,a=KJUR,e=a.asn1,h=e.DERObjectIdentifier,i=e.DEROctetString,b=e.DERBitString,g=e.DERBoolean,c=e.DERSequence;this.getEncodedHex=function(){var m=new h({oid:this.oid});var l=new i({hex:this.getExtnValueHex()});var k=new Array();k.push(m);if(this.critical){k.push(new g())}k.push(l);var j=new c({array:k});return j.getEncodedHex()};this.critical=false;if(d!==undefined){if(d.critical!==undefined){this.critical=d.critical}}};YAHOO.lang.extend(KJUR.asn1.x509.Extension,KJUR.asn1.ASN1Object);KJUR.asn1.x509.Extension.appendByNameToArray=function(e,c,b){var g=e.toLowerCase(),f=KJUR.asn1.x509;if(g=="basicconstraints"){var d=new f.BasicConstraints(c);b.push(d)}else{if(g=="keyusage"){var d=new f.KeyUsage(c);b.push(d)}else{if(g=="crldistributionpoints"){var d=new f.CRLDistributionPoints(c);b.push(d)}else{if(g=="extkeyusage"){var d=new f.ExtKeyUsage(c);b.push(d)}else{if(g=="authoritykeyidentifier"){var d=new f.AuthorityKeyIdentifier(c);b.push(d)}else{if(g=="subjectkeyidentifier"){var d=new f.SubjectKeyIdentifier(c);b.push(d)}else{if(g=="authorityinfoaccess"){var d=new f.AuthorityInfoAccess(c);b.push(d)}else{if(g=="subjectaltname"){var d=new f.SubjectAltName(c);b.push(d)}else{if(g=="issueraltname"){var d=new f.IssuerAltName(c);b.push(d)}else{throw"unsupported extension name: "+e}}}}}}}}}};KJUR.asn1.x509.KeyUsage=function(f){KJUR.asn1.x509.KeyUsage.superclass.constructor.call(this,f);var a=X509.KEYUSAGE_NAME;this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.15";if(f!==undefined){if(f.bin!==undefined){this.asn1ExtnValue=new KJUR.asn1.DERBitString(f)}if(f.names!==undefined&&f.names.length!==undefined){var e=f.names;var d="000000000";for(var c=0;c<e.length;c++){for(var b=0;b<a.length;b++){if(e[c]===a[b]){d=d.substring(0,b)+"1"+d.substring(b+1,d.length)}}}this.asn1ExtnValue=new KJUR.asn1.DERBitString({bin:d})}}};YAHOO.lang.extend(KJUR.asn1.x509.KeyUsage,KJUR.asn1.x509.Extension);KJUR.asn1.x509.BasicConstraints=function(c){KJUR.asn1.x509.BasicConstraints.superclass.constructor.call(this,c);var a=false;var b=-1;this.getExtnValueHex=function(){var e=new Array();if(this.cA){e.push(new KJUR.asn1.DERBoolean())}if(this.pathLen>-1){e.push(new KJUR.asn1.DERInteger({"int":this.pathLen}))}var d=new KJUR.asn1.DERSequence({array:e});this.asn1ExtnValue=d;return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.19";this.cA=false;this.pathLen=-1;if(c!==undefined){if(c.cA!==undefined){this.cA=c.cA}if(c.pathLen!==undefined){this.pathLen=c.pathLen}}};YAHOO.lang.extend(KJUR.asn1.x509.BasicConstraints,KJUR.asn1.x509.Extension);KJUR.asn1.x509.CRLDistributionPoints=function(d){KJUR.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this,d);var b=KJUR,a=b.asn1,c=a.x509;this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.setByDPArray=function(e){this.asn1ExtnValue=new a.DERSequence({array:e})};this.setByOneURI=function(h){var e=new c.GeneralNames([{uri:h}]);var g=new c.DistributionPointName(e);var f=new c.DistributionPoint({dpobj:g});this.setByDPArray([f])};this.oid="2.5.29.31";if(d!==undefined){if(d.array!==undefined){this.setByDPArray(d.array)}else{if(d.uri!==undefined){this.setByOneURI(d.uri)}}}};YAHOO.lang.extend(KJUR.asn1.x509.CRLDistributionPoints,KJUR.asn1.x509.Extension);KJUR.asn1.x509.ExtKeyUsage=function(c){KJUR.asn1.x509.ExtKeyUsage.superclass.constructor.call(this,c);var b=KJUR,a=b.asn1;this.setPurposeArray=function(d){this.asn1ExtnValue=new a.DERSequence();for(var e=0;e<d.length;e++){var f=new a.DERObjectIdentifier(d[e]);this.asn1ExtnValue.appendASN1Object(f)}};this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.37";if(c!==undefined){if(c.array!==undefined){this.setPurposeArray(c.array)}}};YAHOO.lang.extend(KJUR.asn1.x509.ExtKeyUsage,KJUR.asn1.x509.Extension);KJUR.asn1.x509.AuthorityKeyIdentifier=function(f){KJUR.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this,f);var b=KJUR,a=b.asn1,d=a.DERTaggedObject,e=a.x509.GeneralNames,c=b.crypto.Util.isKey;this.asn1KID=null;this.asn1CertIssuer=null;this.asn1CertSN=null;this.getExtnValueHex=function(){var h=new Array();if(this.asn1KID){h.push(new d({explicit:false,tag:"80",obj:this.asn1KID}))}if(this.asn1CertIssuer){h.push(new d({explicit:false,tag:"a1",obj:new e([{dn:this.asn1CertIssuer}])}))}if(this.asn1CertSN){h.push(new d({explicit:false,tag:"82",obj:this.asn1CertSN}))}var g=new a.DERSequence({array:h});this.asn1ExtnValue=g;return this.asn1ExtnValue.getEncodedHex()};this.setKIDByParam=function(i){if(i.str!==undefined||i.hex!==undefined){this.asn1KID=new KJUR.asn1.DEROctetString(i)}else{if((typeof i==="object"&&KJUR.crypto.Util.isKey(i))||(typeof i==="string"&&i.indexOf("BEGIN ")!=-1)){var h=i;if(typeof i==="string"){h=KEYUTIL.getKey(i)}var g=KEYUTIL.getKeyID(h);this.asn1KID=new KJUR.asn1.DEROctetString({hex:g})}}};this.setCertIssuerByParam=function(g){if(g.str!==undefined||g.ldapstr!==undefined||g.hex!==undefined||g.certsubject!==undefined||g.certissuer!==undefined){this.asn1CertIssuer=new KJUR.asn1.x509.X500Name(g)}else{if(typeof g==="string"&&g.indexOf("BEGIN ")!=-1&&g.indexOf("CERTIFICATE")!=-1){this.asn1CertIssuer=new KJUR.asn1.x509.X500Name({certissuer:g})}}};this.setCertSNByParam=function(i){if(i.str!==undefined||i.bigint!==undefined||i.hex!==undefined){this.asn1CertSN=new KJUR.asn1.DERInteger(i)}else{if(typeof i==="string"&&i.indexOf("BEGIN ")!=-1&&i.indexOf("CERTIFICATE")){var g=new X509();g.readCertPEM(i);var h=g.getSerialNumberHex();this.asn1CertSN=new KJUR.asn1.DERInteger({hex:h})}}};this.oid="2.5.29.35";if(f!==undefined){if(f.kid!==undefined){this.setKIDByParam(f.kid)}if(f.issuer!==undefined){this.setCertIssuerByParam(f.issuer)}if(f.sn!==undefined){this.setCertSNByParam(f.sn)}if(f.issuersn!==undefined&&typeof f.issuersn==="string"&&f.issuersn.indexOf("BEGIN ")!=-1&&f.issuersn.indexOf("CERTIFICATE")){this.setCertSNByParam(f.issuersn);this.setCertIssuerByParam(f.issuersn)}}};YAHOO.lang.extend(KJUR.asn1.x509.AuthorityKeyIdentifier,KJUR.asn1.x509.Extension);KJUR.asn1.x509.SubjectKeyIdentifier=function(d){KJUR.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this,d);var b=KJUR,a=b.asn1,c=a.DEROctetString;this.asn1KID=null;this.getExtnValueHex=function(){this.asn1ExtnValue=this.asn1KID;return this.asn1ExtnValue.getEncodedHex()};this.setKIDByParam=function(g){if(g.str!==undefined||g.hex!==undefined){this.asn1KID=new c(g)}else{if((typeof g==="object"&&KJUR.crypto.Util.isKey(g))||(typeof g==="string"&&g.indexOf("BEGIN")!=-1)){var f=g;if(typeof g==="string"){f=KEYUTIL.getKey(g)}var e=KEYUTIL.getKeyID(f);this.asn1KID=new KJUR.asn1.DEROctetString({hex:e})}}};this.oid="2.5.29.14";if(d!==undefined){if(d.kid!==undefined){this.setKIDByParam(d.kid)}}};YAHOO.lang.extend(KJUR.asn1.x509.SubjectKeyIdentifier,KJUR.asn1.x509.Extension);KJUR.asn1.x509.AuthorityInfoAccess=function(a){KJUR.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this,a);this.setAccessDescriptionArray=function(k){var j=new Array(),b=KJUR,g=b.asn1,d=g.DERSequence;for(var f=0;f<k.length;f++){var c=new g.DERObjectIdentifier(k[f].accessMethod);var e=new g.x509.GeneralName(k[f].accessLocation);var h=new d({array:[c,e]});j.push(h)}this.asn1ExtnValue=new d({array:j})};this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="1.3.6.1.5.5.7.1.1";if(a!==undefined){if(a.array!==undefined){this.setAccessDescriptionArray(a.array)}}};YAHOO.lang.extend(KJUR.asn1.x509.AuthorityInfoAccess,KJUR.asn1.x509.Extension);KJUR.asn1.x509.SubjectAltName=function(a){KJUR.asn1.x509.SubjectAltName.superclass.constructor.call(this,a);this.setNameArray=function(b){this.asn1ExtnValue=new KJUR.asn1.x509.GeneralNames(b)};this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.17";if(a!==undefined){if(a.array!==undefined){this.setNameArray(a.array)}}};YAHOO.lang.extend(KJUR.asn1.x509.SubjectAltName,KJUR.asn1.x509.Extension);KJUR.asn1.x509.IssuerAltName=function(a){KJUR.asn1.x509.IssuerAltName.superclass.constructor.call(this,a);this.setNameArray=function(b){this.asn1ExtnValue=new KJUR.asn1.x509.GeneralNames(b)};this.getExtnValueHex=function(){return this.asn1ExtnValue.getEncodedHex()};this.oid="2.5.29.18";if(a!==undefined){if(a.array!==undefined){this.setNameArray(a.array)}}};YAHOO.lang.extend(KJUR.asn1.x509.IssuerAltName,KJUR.asn1.x509.Extension);KJUR.asn1.x509.CRL=function(f){KJUR.asn1.x509.CRL.superclass.constructor.call(this);var b=null,d=null,e=null,c=null,a=null;this.sign=function(){this.asn1SignatureAlg=this.asn1TBSCertList.asn1SignatureAlg;sig=new KJUR.crypto.Signature({alg:this.asn1SignatureAlg.nameAlg,prov:"cryptojs/jsrsa"});sig.init(this.prvKey);sig.updateHex(this.asn1TBSCertList.getEncodedHex());this.hexSig=sig.sign();this.asn1Sig=new KJUR.asn1.DERBitString({hex:"00"+this.hexSig});var g=new KJUR.asn1.DERSequence({array:[this.asn1TBSCertList,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=g.getEncodedHex();this.isModified=false};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};this.getPEMString=function(){var g=hextob64nl(this.getEncodedHex());return"-----BEGIN X509 CRL-----\r\n"+g+"\r\n-----END X509 CRL-----\r\n"};if(f!==undefined){if(f.tbsobj!==undefined){this.asn1TBSCertList=f.tbsobj}if(f.prvkeyobj!==undefined){this.prvKey=f.prvkeyobj}}};YAHOO.lang.extend(KJUR.asn1.x509.CRL,KJUR.asn1.ASN1Object);KJUR.asn1.x509.TBSCertList=function(g){KJUR.asn1.x509.TBSCertList.superclass.constructor.call(this);var e=null,d=KJUR,c=d.asn1,b=c.DERSequence,f=c.x509,a=f.Time;this.setSignatureAlgByParam=function(h){this.asn1SignatureAlg=new f.AlgorithmIdentifier(h)};this.setIssuerByParam=function(h){this.asn1Issuer=new f.X500Name(h)};this.setThisUpdateByParam=function(h){this.asn1ThisUpdate=new a(h)};this.setNextUpdateByParam=function(h){this.asn1NextUpdate=new a(h)};this.addRevokedCert=function(h,i){var k={};if(h!=undefined&&h!=null){k.sn=h}if(i!=undefined&&i!=null){k.time=i}var j=new f.CRLEntry(k);this.aRevokedCert.push(j)};this.getEncodedHex=function(){this.asn1Array=new Array();if(this.asn1Version!=null){this.asn1Array.push(this.asn1Version)}this.asn1Array.push(this.asn1SignatureAlg);this.asn1Array.push(this.asn1Issuer);this.asn1Array.push(this.asn1ThisUpdate);if(this.asn1NextUpdate!=null){this.asn1Array.push(this.asn1NextUpdate)}if(this.aRevokedCert.length>0){var h=new b({array:this.aRevokedCert});this.asn1Array.push(h)}var i=new b({array:this.asn1Array});this.hTLV=i.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize=function(){this.asn1Version=null;this.asn1SignatureAlg=null;this.asn1Issuer=null;this.asn1ThisUpdate=null;this.asn1NextUpdate=null;this.aRevokedCert=new Array()};this._initialize()};YAHOO.lang.extend(KJUR.asn1.x509.TBSCertList,KJUR.asn1.ASN1Object);KJUR.asn1.x509.CRLEntry=function(e){KJUR.asn1.x509.CRLEntry.superclass.constructor.call(this);var d=null,c=null,b=KJUR,a=b.asn1;this.setCertSerial=function(f){this.sn=new a.DERInteger(f)};this.setRevocationDate=function(f){this.time=new a.x509.Time(f)};this.getEncodedHex=function(){var f=new a.DERSequence({array:[this.sn,this.time]});this.TLV=f.getEncodedHex();return this.TLV};if(e!==undefined){if(e.time!==undefined){this.setRevocationDate(e.time)}if(e.sn!==undefined){this.setCertSerial(e.sn)}}};YAHOO.lang.extend(KJUR.asn1.x509.CRLEntry,KJUR.asn1.ASN1Object);KJUR.asn1.x509.X500Name=function(f){KJUR.asn1.x509.X500Name.superclass.constructor.call(this);this.asn1Array=new Array();var d=KJUR,c=d.asn1,e=c.x509,b=pemtohex;this.setByString=function(g){var k=g.split("/");k.shift();var j=[];for(var l=0;l<k.length;l++){if(k[l].match(/^[^=]+=.+$/)){j.push(k[l])}else{var h=j.length-1;j[h]=j[h]+"/"+k[l]}}for(var l=0;l<j.length;l++){this.asn1Array.push(new e.RDN({str:j[l]}))}};this.setByLdapString=function(g){var h=e.X500Name.ldapToCompat(g);this.setByString(h)};this.setByObject=function(i){for(var g in i){if(i.hasOwnProperty(g)){var h=new KJUR.asn1.x509.RDN({str:g+"="+i[g]});this.asn1Array?this.asn1Array.push(h):this.asn1Array=[h]}}};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var g=new c.DERSequence({array:this.asn1Array});this.hTLV=g.getEncodedHex();return this.hTLV};if(f!==undefined){if(f.str!==undefined){this.setByString(f.str)}else{if(f.ldapstr!==undefined){this.setByLdapString(f.ldapstr)}else{if(f.hex!==undefined){this.hTLV=f.hex}else{if(f.certissuer!==undefined){var a=new X509();a.readCertPEM(f.certissuer);this.hTLV=a.getIssuerHex()}else{if(f.certsubject!==undefined){var a=new X509();a.readCertPEM(f.certsubject);this.hTLV=a.getSubjectHex()}else{if(typeof f==="object"&&f.certsubject===undefined&&f.certissuer===undefined){this.setByObject(f)}}}}}}}};YAHOO.lang.extend(KJUR.asn1.x509.X500Name,KJUR.asn1.ASN1Object);KJUR.asn1.x509.X500Name.compatToLDAP=function(d){if(d.substr(0,1)!=="/"){throw"malformed input"}var b="";d=d.substr(1);var c=d.split("/");c.reverse();c=c.map(function(a){return a.replace(/,/,"\\,")});return c.join(",")};KJUR.asn1.x509.X500Name.onelineToLDAP=function(a){return KJUR.asn1.x509.X500Name.compatToLDAP(a)};KJUR.asn1.x509.X500Name.ldapToCompat=function(g){var c=g.split(",");var e=false;var b=[];for(var f=0;c.length>0;f++){var h=c.shift();if(e===true){var d=b.pop();var j=(d+","+h).replace(/\\,/g,",");b.push(j);e=false}else{b.push(h)}if(h.substr(-1,1)==="\\"){e=true}}b=b.map(function(a){return a.replace("/","\\/")});b.reverse();return"/"+b.join("/")};KJUR.asn1.x509.X500Name.ldapToOneline=function(a){return KJUR.asn1.x509.X500Name.ldapToCompat(a)};KJUR.asn1.x509.RDN=function(a){KJUR.asn1.x509.RDN.superclass.constructor.call(this);this.asn1Array=new Array();this.addByString=function(b){this.asn1Array.push(new KJUR.asn1.x509.AttributeTypeAndValue({str:b}))};this.addByMultiValuedString=function(d){var b=KJUR.asn1.x509.RDN.parseString(d);for(var c=0;c<b.length;c++){this.addByString(b[c])}};this.getEncodedHex=function(){var b=new KJUR.asn1.DERSet({array:this.asn1Array});this.TLV=b.getEncodedHex();return this.TLV};if(a!==undefined){if(a.str!==undefined){this.addByMultiValuedString(a.str)}}};YAHOO.lang.extend(KJUR.asn1.x509.RDN,KJUR.asn1.ASN1Object);KJUR.asn1.x509.RDN.parseString=function(m){var j=m.split(/\+/);var h=false;var c=[];for(var g=0;j.length>0;g++){var k=j.shift();if(h===true){var f=c.pop();var d=(f+"+"+k).replace(/\\\+/g,"+");c.push(d);h=false}else{c.push(k)}if(k.substr(-1,1)==="\\"){h=true}}var l=false;var b=[];for(var g=0;c.length>0;g++){var k=c.shift();if(l===true){var e=b.pop();if(k.match(/"$/)){var d=(e+"+"+k).replace(/^([^=]+)="(.*)"$/,"$1=$2");b.push(d);l=false}else{b.push(e+"+"+k)}}else{b.push(k)}if(k.match(/^[^=]+="/)){l=true}}return b};KJUR.asn1.x509.AttributeTypeAndValue=function(d){KJUR.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this);var f=null,e=null,a="utf8",c=KJUR,b=c.asn1;this.setByString=function(h){var g=h.match(/^([^=]+)=(.+)$/);if(g){this.setByAttrTypeAndValueStr(g[1],g[2])}else{throw"malformed attrTypeAndValueStr: "+h}};this.setByAttrTypeAndValueStr=function(i,h){this.typeObj=KJUR.asn1.x509.OID.atype2obj(i);var g=a;if(i=="C"){g="prn"}this.valueObj=this.getValueObj(g,h)};this.getValueObj=function(h,g){if(h=="utf8"){return new b.DERUTF8String({str:g})}if(h=="prn"){return new b.DERPrintableString({str:g})}if(h=="tel"){return new b.DERTeletexString({str:g})}if(h=="ia5"){return new b.DERIA5String({str:g})}throw"unsupported directory string type: type="+h+" value="+g};this.getEncodedHex=function(){var g=new b.DERSequence({array:[this.typeObj,this.valueObj]});this.TLV=g.getEncodedHex();return this.TLV};if(d!==undefined){if(d.str!==undefined){this.setByString(d.str)}}};YAHOO.lang.extend(KJUR.asn1.x509.AttributeTypeAndValue,KJUR.asn1.ASN1Object);KJUR.asn1.x509.SubjectPublicKeyInfo=function(f){KJUR.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);var l=null,k=null,a=KJUR,j=a.asn1,i=j.DERInteger,b=j.DERBitString,m=j.DERObjectIdentifier,e=j.DERSequence,h=j.ASN1Util.newObject,d=j.x509,o=d.AlgorithmIdentifier,g=a.crypto,n=g.ECDSA,c=g.DSA;this.getASN1Object=function(){if(this.asn1AlgId==null||this.asn1SubjPKey==null){throw"algId and/or subjPubKey not set"}var p=new e({array:[this.asn1AlgId,this.asn1SubjPKey]});return p};this.getEncodedHex=function(){var p=this.getASN1Object();this.hTLV=p.getEncodedHex();return this.hTLV};this.setPubKey=function(q){try{if(q instanceof RSAKey){var u=h({seq:[{"int":{bigint:q.n}},{"int":{"int":q.e}}]});var s=u.getEncodedHex();this.asn1AlgId=new o({name:"rsaEncryption"});this.asn1SubjPKey=new b({hex:"00"+s})}}catch(p){}try{if(q instanceof KJUR.crypto.ECDSA){var r=new m({name:q.curveName});this.asn1AlgId=new o({name:"ecPublicKey",asn1params:r});this.asn1SubjPKey=new b({hex:"00"+q.pubKeyHex})}}catch(p){}try{if(q instanceof KJUR.crypto.DSA){var r=new h({seq:[{"int":{bigint:q.p}},{"int":{bigint:q.q}},{"int":{bigint:q.g}}]});this.asn1AlgId=new o({name:"dsa",asn1params:r});var t=new i({bigint:q.y});this.asn1SubjPKey=new b({hex:"00"+t.getEncodedHex()})}}catch(p){}};if(f!==undefined){this.setPubKey(f)}};YAHOO.lang.extend(KJUR.asn1.x509.SubjectPublicKeyInfo,KJUR.asn1.ASN1Object);KJUR.asn1.x509.Time=function(f){KJUR.asn1.x509.Time.superclass.constructor.call(this);var e=null,a=null,d=KJUR,c=d.asn1,b=c.DERUTCTime,g=c.DERGeneralizedTime;this.setTimeParams=function(h){this.timeParams=h};this.getEncodedHex=function(){var h=null;if(this.timeParams!=null){if(this.type=="utc"){h=new b(this.timeParams)}else{h=new g(this.timeParams)}}else{if(this.type=="utc"){h=new b()}else{h=new g()}}this.TLV=h.getEncodedHex();return this.TLV};this.type="utc";if(f!==undefined){if(f.type!==undefined){this.type=f.type}else{if(f.str!==undefined){if(f.str.match(/^[0-9]{12}Z$/)){this.type="utc"}if(f.str.match(/^[0-9]{14}Z$/)){this.type="gen"}}}this.timeParams=f}};YAHOO.lang.extend(KJUR.asn1.x509.Time,KJUR.asn1.ASN1Object);KJUR.asn1.x509.AlgorithmIdentifier=function(d){KJUR.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this);this.nameAlg=null;this.asn1Alg=null;this.asn1Params=null;this.paramEmpty=false;var b=KJUR,a=b.asn1;this.getEncodedHex=function(){if(this.nameAlg===null&&this.asn1Alg===null){throw"algorithm not specified"}if(this.nameAlg!==null&&this.asn1Alg===null){this.asn1Alg=a.x509.OID.name2obj(this.nameAlg)}var e=[this.asn1Alg];if(this.asn1Params!==null){e.push(this.asn1Params)}var f=new a.DERSequence({array:e});this.hTLV=f.getEncodedHex();return this.hTLV};if(d!==undefined){if(d.name!==undefined){this.nameAlg=d.name}if(d.asn1params!==undefined){this.asn1Params=d.asn1params}if(d.paramempty!==undefined){this.paramEmpty=d.paramempty}}if(this.asn1Params===null&&this.paramEmpty===false&&this.nameAlg!==null){var c=this.nameAlg.toLowerCase();if(c.substr(-7,7)!=="withdsa"&&c.substr(-9,9)!=="withecdsa"){this.asn1Params=new a.DERNull()}}};YAHOO.lang.extend(KJUR.asn1.x509.AlgorithmIdentifier,KJUR.asn1.ASN1Object);KJUR.asn1.x509.GeneralName=function(e){KJUR.asn1.x509.GeneralName.superclass.constructor.call(this);var m=null,i=null,k={rfc822:"81",dns:"82",dn:"a4",uri:"86",ip:"87"},b=KJUR,g=b.asn1,f=g.DERSequence,j=g.DEROctetString,d=g.DERIA5String,c=g.DERTaggedObject,l=g.ASN1Object,a=g.x509.X500Name,h=pemtohex;this.explicit=false;this.setByParam=function(p){var r=null;var u=null;if(p===undefined){return}if(p.rfc822!==undefined){this.type="rfc822";u=new d({str:p[this.type]})}if(p.dns!==undefined){this.type="dns";u=new d({str:p[this.type]})}if(p.uri!==undefined){this.type="uri";u=new d({str:p[this.type]})}if(p.dn!==undefined){this.type="dn";this.explicit=true;if(typeof p.dn==="string"){u=new a({str:p.dn})}else{if(p.dn instanceof KJUR.asn1.x509.X500Name){u=p.dn}else{u=new a(p.dn)}}}if(p.ldapdn!==undefined){this.type="dn";this.explicit=true;u=new a({ldapstr:p.ldapdn})}if(p.certissuer!==undefined){this.type="dn";this.explicit=true;var o=p.certissuer;var w=null;if(o.match(/^[0-9A-Fa-f]+$/)){w==o}if(o.indexOf("-----BEGIN ")!=-1){w=h(o)}if(w==null){throw"certissuer param not cert"}var t=new X509();t.hex=w;var y=t.getIssuerHex();u=new l();u.hTLV=y}if(p.certsubj!==undefined){this.type="dn";this.explicit=true;var o=p.certsubj;var w=null;if(o.match(/^[0-9A-Fa-f]+$/)){w==o}if(o.indexOf("-----BEGIN ")!=-1){w=h(o)}if(w==null){throw"certsubj param not cert"}var t=new X509();t.hex=w;var y=t.getSubjectHex();u=new l();u.hTLV=y}if(p.ip!==undefined){this.type="ip";this.explicit=false;var q=p.ip;var s;var n="malformed IP address";if(q.match(/^[0-9.]+[.][0-9.]+$/)){s=intarystrtohex("["+q.split(".").join(",")+"]");if(s.length!==8){throw n}}else{if(q.match(/^[0-9A-Fa-f:]+:[0-9A-Fa-f:]+$/)){s=ipv6tohex(q)}else{if(q.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)){s=q}else{throw n}}}u=new j({hex:s})}if(this.type==null){throw"unsupported type in params="+p}this.asn1Obj=new c({explicit:this.explicit,tag:k[this.type],obj:u})};this.getEncodedHex=function(){return this.asn1Obj.getEncodedHex()};if(e!==undefined){this.setByParam(e)}};YAHOO.lang.extend(KJUR.asn1.x509.GeneralName,KJUR.asn1.ASN1Object);KJUR.asn1.x509.GeneralNames=function(d){KJUR.asn1.x509.GeneralNames.superclass.constructor.call(this);var a=null,c=KJUR,b=c.asn1;this.setByParamArray=function(g){for(var e=0;e<g.length;e++){var f=new b.x509.GeneralName(g[e]);this.asn1Array.push(f)}};this.getEncodedHex=function(){var e=new b.DERSequence({array:this.asn1Array});return e.getEncodedHex()};this.asn1Array=new Array();if(typeof d!="undefined"){this.setByParamArray(d)}};YAHOO.lang.extend(KJUR.asn1.x509.GeneralNames,KJUR.asn1.ASN1Object);KJUR.asn1.x509.DistributionPointName=function(b){KJUR.asn1.x509.DistributionPointName.superclass.constructor.call(this);var h=null,e=null,a=null,g=null,d=KJUR,c=d.asn1,f=c.DERTaggedObject;this.getEncodedHex=function(){if(this.type!="full"){throw"currently type shall be 'full': "+this.type}this.asn1Obj=new f({explicit:false,tag:this.tag,obj:this.asn1V});this.hTLV=this.asn1Obj.getEncodedHex();return this.hTLV};if(b!==undefined){if(c.x509.GeneralNames.prototype.isPrototypeOf(b)){this.type="full";this.tag="a0";this.asn1V=b}else{throw"This class supports GeneralNames only as argument"}}};YAHOO.lang.extend(KJUR.asn1.x509.DistributionPointName,KJUR.asn1.ASN1Object);KJUR.asn1.x509.DistributionPoint=function(d){KJUR.asn1.x509.DistributionPoint.superclass.constructor.call(this);var a=null,c=KJUR,b=c.asn1;this.getEncodedHex=function(){var e=new b.DERSequence();if(this.asn1DP!=null){var f=new b.DERTaggedObject({explicit:true,tag:"a0",obj:this.asn1DP});e.appendASN1Object(f)}this.hTLV=e.getEncodedHex();return this.hTLV};if(d!==undefined){if(d.dpobj!==undefined){this.asn1DP=d.dpobj}}};YAHOO.lang.extend(KJUR.asn1.x509.DistributionPoint,KJUR.asn1.ASN1Object);KJUR.asn1.x509.OID=new function(a){this.atype2oidList={CN:"2.5.4.3",L:"2.5.4.7",ST:"2.5.4.8",O:"2.5.4.10",OU:"2.5.4.11",C:"2.5.4.6",STREET:"2.5.4.9",DC:"0.9.2342.19200300.100.1.25",UID:"0.9.2342.19200300.100.1.1",SN:"2.5.4.4",T:"2.5.4.12",DN:"2.5.4.49",E:"1.2.840.113549.1.9.1",description:"2.5.4.13",businessCategory:"2.5.4.15",postalCode:"2.5.4.17",serialNumber:"2.5.4.5",uniqueIdentifier:"2.5.4.45",organizationIdentifier:"2.5.4.97",jurisdictionOfIncorporationL:"1.3.6.1.4.1.311.60.2.1.1",jurisdictionOfIncorporationSP:"1.3.6.1.4.1.311.60.2.1.2",jurisdictionOfIncorporationC:"1.3.6.1.4.1.311.60.2.1.3"};this.name2oidList={sha1:"1.3.14.3.2.26",sha256:"2.16.840.1.101.3.4.2.1",sha384:"2.16.840.1.101.3.4.2.2",sha512:"2.16.840.1.101.3.4.2.3",sha224:"2.16.840.1.101.3.4.2.4",md5:"1.2.840.113549.2.5",md2:"1.3.14.7.2.2.1",ripemd160:"1.3.36.3.2.1",MD2withRSA:"1.2.840.113549.1.1.2",MD4withRSA:"1.2.840.113549.1.1.3",MD5withRSA:"1.2.840.113549.1.1.4",SHA1withRSA:"1.2.840.113549.1.1.5",SHA224withRSA:"1.2.840.113549.1.1.14",SHA256withRSA:"1.2.840.113549.1.1.11",SHA384withRSA:"1.2.840.113549.1.1.12",SHA512withRSA:"1.2.840.113549.1.1.13",SHA1withECDSA:"1.2.840.10045.4.1",SHA224withECDSA:"1.2.840.10045.4.3.1",SHA256withECDSA:"1.2.840.10045.4.3.2",SHA384withECDSA:"1.2.840.10045.4.3.3",SHA512withECDSA:"1.2.840.10045.4.3.4",dsa:"1.2.840.10040.4.1",SHA1withDSA:"1.2.840.10040.4.3",SHA224withDSA:"2.16.840.1.101.3.4.3.1",SHA256withDSA:"2.16.840.1.101.3.4.3.2",rsaEncryption:"1.2.840.113549.1.1.1",commonName:"2.5.4.3",countryName:"2.5.4.6",localityName:"2.5.4.7",stateOrProvinceName:"2.5.4.8",streetAddress:"2.5.4.9",organizationName:"2.5.4.10",organizationalUnitName:"2.5.4.11",domainComponent:"0.9.2342.19200300.100.1.25",userId:"0.9.2342.19200300.100.1.1",surname:"2.5.4.4",title:"2.5.4.12",distinguishedName:"2.5.4.49",emailAddress:"1.2.840.113549.1.9.1",description:"2.5.4.13",businessCategory:"2.5.4.15",postalCode:"2.5.4.17",uniqueIdentifier:"2.5.4.45",organizationIdentifier:"2.5.4.97",jurisdictionOfIncorporationL:"1.3.6.1.4.1.311.60.2.1.1",jurisdictionOfIncorporationSP:"1.3.6.1.4.1.311.60.2.1.2",jurisdictionOfIncorporationC:"1.3.6.1.4.1.311.60.2.1.3",subjectKeyIdentifier:"2.5.29.14",keyUsage:"2.5.29.15",subjectAltName:"2.5.29.17",issuerAltName:"2.5.29.18",basicConstraints:"2.5.29.19",nameConstraints:"2.5.29.30",cRLDistributionPoints:"2.5.29.31",certificatePolicies:"2.5.29.32",authorityKeyIdentifier:"2.5.29.35",policyConstraints:"2.5.29.36",extKeyUsage:"2.5.29.37",authorityInfoAccess:"1.3.6.1.5.5.7.1.1",ocsp:"1.3.6.1.5.5.7.48.1",caIssuers:"1.3.6.1.5.5.7.48.2",anyExtendedKeyUsage:"2.5.29.37.0",serverAuth:"1.3.6.1.5.5.7.3.1",clientAuth:"1.3.6.1.5.5.7.3.2",codeSigning:"1.3.6.1.5.5.7.3.3",emailProtection:"1.3.6.1.5.5.7.3.4",timeStamping:"1.3.6.1.5.5.7.3.8",ocspSigning:"1.3.6.1.5.5.7.3.9",ecPublicKey:"1.2.840.10045.2.1",secp256r1:"1.2.840.10045.3.1.7",secp256k1:"1.3.132.0.10",secp384r1:"1.3.132.0.34",pkcs5PBES2:"1.2.840.113549.1.5.13",pkcs5PBKDF2:"1.2.840.113549.1.5.12","des-EDE3-CBC":"1.2.840.113549.3.7",data:"1.2.840.113549.1.7.1","signed-data":"1.2.840.113549.1.7.2","enveloped-data":"1.2.840.113549.1.7.3","digested-data":"1.2.840.113549.1.7.5","encrypted-data":"1.2.840.113549.1.7.6","authenticated-data":"1.2.840.113549.1.9.16.1.2",tstinfo:"1.2.840.113549.1.9.16.1.4",extensionRequest:"1.2.840.113549.1.9.14",};this.objCache={};this.name2obj=function(b){if(typeof this.objCache[b]!="undefined"){return this.objCache[b]}if(typeof this.name2oidList[b]=="undefined"){throw"Name of ObjectIdentifier not defined: "+b}var c=this.name2oidList[b];var d=new KJUR.asn1.DERObjectIdentifier({oid:c});this.objCache[b]=d;return d};this.atype2obj=function(b){if(typeof this.objCache[b]!="undefined"){return this.objCache[b]}if(typeof this.atype2oidList[b]=="undefined"){throw"AttributeType name undefined: "+b}var c=this.atype2oidList[b];var d=new KJUR.asn1.DERObjectIdentifier({oid:c});this.objCache[b]=d;return d}};KJUR.asn1.x509.OID.oid2name=function(b){var c=KJUR.asn1.x509.OID.name2oidList;for(var a in c){if(c[a]==b){return a}}return""};KJUR.asn1.x509.OID.oid2atype=function(b){var c=KJUR.asn1.x509.OID.atype2oidList;for(var a in c){if(c[a]==b){return a}}return b};KJUR.asn1.x509.OID.name2oid=function(a){var b=KJUR.asn1.x509.OID.name2oidList;if(b[a]===undefined){return""}return b[a]};KJUR.asn1.x509.X509Util={};KJUR.asn1.x509.X509Util.newCertPEM=function(h){var g=KJUR.asn1.x509,b=g.TBSCertificate,a=g.Certificate;var f=new b();if(h.serial!==undefined){f.setSerialNumberByParam(h.serial)}else{throw"serial number undefined."}if(typeof h.sigalg.name==="string"){f.setSignatureAlgByParam(h.sigalg)}else{throw"unproper signature algorithm name"}if(h.issuer!==undefined){f.setIssuerByParam(h.issuer)}else{throw"issuer name undefined."}if(h.notbefore!==undefined){f.setNotBeforeByParam(h.notbefore)}else{throw"notbefore undefined."}if(h.notafter!==undefined){f.setNotAfterByParam(h.notafter)}else{throw"notafter undefined."}if(h.subject!==undefined){f.setSubjectByParam(h.subject)}else{throw"subject name undefined."}if(h.sbjpubkey!==undefined){f.setSubjectPublicKeyByGetKey(h.sbjpubkey)}else{throw"subject public key undefined."}if(h.ext!==undefined&&h.ext.length!==undefined){for(var d=0;d<h.ext.length;d++){for(key in h.ext[d]){f.appendExtensionByName(key,h.ext[d][key])}}}if(h.cakey===undefined&&h.sighex===undefined){throw"param cakey and sighex undefined."}var e=null;var c=null;if(h.cakey){if(h.cakey.isPrivate===true){e=h.cakey}else{e=KEYUTIL.getKey.apply(null,h.cakey)}c=new a({tbscertobj:f,prvkeyobj:e});c.sign()}if(h.sighex){c=new a({tbscertobj:f});c.setSignatureHex(h.sighex)}return c.getPEMString()};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.cms=="undefined"||!KJUR.asn1.cms){KJUR.asn1.cms={}}KJUR.asn1.cms.Attribute=function(d){var a=[],c=KJUR,b=c.asn1;b.cms.Attribute.superclass.constructor.call(this);this.getEncodedHex=function(){var h,g,e;h=new b.DERObjectIdentifier({oid:this.attrTypeOid});g=new b.DERSet({array:this.valueList});try{g.getEncodedHex()}catch(f){throw"fail valueSet.getEncodedHex in Attribute(1)/"+f}e=new b.DERSequence({array:[h,g]});try{this.hTLV=e.getEncodedHex()}catch(f){throw"failed seq.getEncodedHex in Attribute(2)/"+f}return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.Attribute,KJUR.asn1.ASN1Object);KJUR.asn1.cms.ContentType=function(d){var c=KJUR,b=c.asn1;b.cms.ContentType.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.3";var a=null;if(typeof d!="undefined"){var a=new b.DERObjectIdentifier(d);this.valueList=[a]}};YAHOO.lang.extend(KJUR.asn1.cms.ContentType,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.MessageDigest=function(d){var b=KJUR,e=b.asn1,g=e.DEROctetString,i=e.cms;i.MessageDigest.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.4";if(d!==undefined){if(d.eciObj instanceof i.EncapsulatedContentInfo&&typeof d.hashAlg==="string"){var h=d.eciObj.eContentValueHex;var c=d.hashAlg;var a=b.crypto.Util.hashHex(h,c);var f=new g({hex:a});f.getEncodedHex();this.valueList=[f]}else{var f=new g(d);f.getEncodedHex();this.valueList=[f]}}};YAHOO.lang.extend(KJUR.asn1.cms.MessageDigest,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningTime=function(e){var d=KJUR,c=d.asn1;c.cms.SigningTime.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.5";if(e!==undefined){var a=new c.x509.Time(e);try{a.getEncodedHex()}catch(b){throw"SigningTime.getEncodedHex() failed/"+b}this.valueList=[a]}};YAHOO.lang.extend(KJUR.asn1.cms.SigningTime,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningCertificate=function(f){var c=KJUR,b=c.asn1,a=b.DERSequence,e=b.cms,d=c.crypto;e.SigningCertificate.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.12";this.setCerts=function(n){var l=[];for(var k=0;k<n.length;k++){var h=pemtohex(n[k]);var g=c.crypto.Util.hashHex(h,"sha1");var o=new b.DEROctetString({hex:g});o.getEncodedHex();var m=new e.IssuerAndSerialNumber({cert:n[k]});m.getEncodedHex();var p=new a({array:[o,m]});p.getEncodedHex();l.push(p)}var j=new a({array:l});j.getEncodedHex();this.valueList=[j]};if(f!==undefined){if(typeof f.array=="object"){this.setCerts(f.array)}}};YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificate,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.SigningCertificateV2=function(h){var d=KJUR,c=d.asn1,b=c.DERSequence,g=c.x509,f=c.cms,e=d.crypto;f.SigningCertificateV2.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.47";this.setCerts=function(r,k){var p=[];for(var n=0;n<r.length;n++){var l=pemtohex(r[n]);var t=[];if(k!=="sha256"){t.push(new g.AlgorithmIdentifier({name:k}))}var j=e.Util.hashHex(l,k);var s=new c.DEROctetString({hex:j});s.getEncodedHex();t.push(s);var o=new f.IssuerAndSerialNumber({cert:r[n]});o.getEncodedHex();t.push(o);var q=new b({array:t});q.getEncodedHex();p.push(q)}var m=new b({array:p});m.getEncodedHex();this.valueList=[m]};if(h!==undefined){if(typeof h.array=="object"){var a="sha256";if(typeof h.hashAlg=="string"){a=h.hashAlg}this.setCerts(h.array,a)}}};YAHOO.lang.extend(KJUR.asn1.cms.SigningCertificateV2,KJUR.asn1.cms.Attribute);KJUR.asn1.cms.IssuerAndSerialNumber=function(e){var b=KJUR,g=b.asn1,f=g.DERInteger,i=g.cms,d=g.x509,a=d.X500Name,c=X509;i.IssuerAndSerialNumber.superclass.constructor.call(this);var j=null;var h=null;this.setByCertPEM=function(n){var l=pemtohex(n);var k=new c();k.hex=l;var o=k.getIssuerHex();this.dIssuer=new a();this.dIssuer.hTLV=o;var m=k.getSerialNumberHex();this.dSerial=new f({hex:m})};this.getEncodedHex=function(){var k=new g.DERSequence({array:[this.dIssuer,this.dSerial]});this.hTLV=k.getEncodedHex();return this.hTLV};if(e!==undefined){if(typeof e=="string"&&e.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(e)}if(e.issuer&&e.serial){if(e.issuer instanceof a){this.dIssuer=e.issuer}else{this.dIssuer=new a(e.issuer)}if(e.serial instanceof f){this.dSerial=e.serial}else{this.dSerial=new f(e.serial)}}if(typeof e.cert=="string"){this.setByCertPEM(e.cert)}}};YAHOO.lang.extend(KJUR.asn1.cms.IssuerAndSerialNumber,KJUR.asn1.ASN1Object);KJUR.asn1.cms.AttributeList=function(d){var b=KJUR,a=b.asn1,c=a.cms;c.AttributeList.superclass.constructor.call(this);this.list=new Array();this.sortFlag=true;this.add=function(e){if(e instanceof c.Attribute){this.list.push(e)}};this.length=function(){return this.list.length};this.clear=function(){this.list=new Array();this.hTLV=null;this.hV=null};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var e=new a.DERSet({array:this.list,sortflag:this.sortFlag});this.hTLV=e.getEncodedHex();return this.hTLV};if(d!==undefined){if(typeof d.sortflag!="undefined"&&d.sortflag==false){this.sortFlag=false}}};YAHOO.lang.extend(KJUR.asn1.cms.AttributeList,KJUR.asn1.ASN1Object);KJUR.asn1.cms.SignerInfo=function(e){var a=KJUR,h=a.asn1,b=h.DERTaggedObject,n=h.cms,j=n.AttributeList,g=n.ContentType,k=n.EncapsulatedContentInfo,c=n.MessageDigest,l=n.SignedData,d=h.x509,m=d.AlgorithmIdentifier,f=a.crypto,i=KEYUTIL;n.SignerInfo.superclass.constructor.call(this);this.dCMSVersion=new h.DERInteger({"int":1});this.dSignerIdentifier=null;this.dDigestAlgorithm=null;this.dSignedAttrs=new j();this.dSigAlg=null;this.dSig=null;this.dUnsignedAttrs=new j();this.setSignerIdentifier=function(p){if(typeof p=="string"&&p.indexOf("CERTIFICATE")!=-1&&p.indexOf("BEGIN")!=-1&&p.indexOf("END")!=-1){var o=p;this.dSignerIdentifier=new n.IssuerAndSerialNumber({cert:p})}};this.setForContentAndHash=function(o){if(o!==undefined){if(o.eciObj instanceof k){this.dSignedAttrs.add(new g({oid:"1.2.840.113549.1.7.1"}));this.dSignedAttrs.add(new c({eciObj:o.eciObj,hashAlg:o.hashAlg}))}if(o.sdObj!==undefined&&o.sdObj instanceof l){if(o.sdObj.digestAlgNameList.join(":").indexOf(o.hashAlg)==-1){o.sdObj.digestAlgNameList.push(o.hashAlg)}}if(typeof o.hashAlg=="string"){this.dDigestAlgorithm=new m({name:o.hashAlg})}}};this.sign=function(t,p){this.dSigAlg=new m({name:p});var q=this.dSignedAttrs.getEncodedHex();var o=i.getKey(t);var s=new f.Signature({alg:p});s.init(o);s.updateHex(q);var r=s.sign();this.dSig=new h.DEROctetString({hex:r})};this.addUnsigned=function(o){this.hTLV=null;this.dUnsignedAttrs.hTLV=null;this.dUnsignedAttrs.add(o)};this.getEncodedHex=function(){if(this.dSignedAttrs instanceof j&&this.dSignedAttrs.length()==0){throw"SignedAttrs length = 0 (empty)"}var o=new b({obj:this.dSignedAttrs,tag:"a0",explicit:false});var r=null;if(this.dUnsignedAttrs.length()>0){r=new b({obj:this.dUnsignedAttrs,tag:"a1",explicit:false})}var q=[this.dCMSVersion,this.dSignerIdentifier,this.dDigestAlgorithm,o,this.dSigAlg,this.dSig,];if(r!=null){q.push(r)}var p=new h.DERSequence({array:q});this.hTLV=p.getEncodedHex();return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.SignerInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.EncapsulatedContentInfo=function(g){var c=KJUR,b=c.asn1,e=b.DERTaggedObject,a=b.DERSequence,h=b.DERObjectIdentifier,d=b.DEROctetString,f=b.cms;f.EncapsulatedContentInfo.superclass.constructor.call(this);this.dEContentType=new h({name:"data"});this.dEContent=null;this.isDetached=false;this.eContentValueHex=null;this.setContentType=function(i){if(i.match(/^[0-2][.][0-9.]+$/)){this.dEContentType=new h({oid:i})}else{this.dEContentType=new h({name:i})}};this.setContentValue=function(i){if(i!==undefined){if(typeof i.hex=="string"){this.eContentValueHex=i.hex}else{if(typeof i.str=="string"){this.eContentValueHex=utf8tohex(i.str)}}}};this.setContentValueHex=function(i){this.eContentValueHex=i};this.setContentValueStr=function(i){this.eContentValueHex=utf8tohex(i)};this.getEncodedHex=function(){if(typeof this.eContentValueHex!="string"){throw"eContentValue not yet set"}var k=new d({hex:this.eContentValueHex});this.dEContent=new e({obj:k,tag:"a0",explicit:true});var i=[this.dEContentType];if(!this.isDetached){i.push(this.dEContent)}var j=new a({array:i});this.hTLV=j.getEncodedHex();return this.hTLV}};YAHOO.lang.extend(KJUR.asn1.cms.EncapsulatedContentInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.ContentInfo=function(f){var c=KJUR,b=c.asn1,d=b.DERTaggedObject,a=b.DERSequence,e=b.x509;KJUR.asn1.cms.ContentInfo.superclass.constructor.call(this);this.dContentType=null;this.dContent=null;this.setContentType=function(g){if(typeof g=="string"){this.dContentType=e.OID.name2obj(g)}};this.getEncodedHex=function(){var h=new d({obj:this.dContent,tag:"a0",explicit:true});var g=new a({array:[this.dContentType,h]});this.hTLV=g.getEncodedHex();return this.hTLV};if(f!==undefined){if(f.type){this.setContentType(f.type)}if(f.obj&&f.obj instanceof b.ASN1Object){this.dContent=f.obj}}};YAHOO.lang.extend(KJUR.asn1.cms.ContentInfo,KJUR.asn1.ASN1Object);KJUR.asn1.cms.SignedData=function(e){var a=KJUR,h=a.asn1,j=h.ASN1Object,g=h.DERInteger,m=h.DERSet,f=h.DERSequence,b=h.DERTaggedObject,l=h.cms,i=l.EncapsulatedContentInfo,d=l.SignerInfo,n=l.ContentInfo,c=h.x509,k=c.AlgorithmIdentifier;KJUR.asn1.cms.SignedData.superclass.constructor.call(this);this.dCMSVersion=new g({"int":1});this.dDigestAlgs=null;this.digestAlgNameList=[];this.dEncapContentInfo=new i();this.dCerts=null;this.certificateList=[];this.crlList=[];this.signerInfoList=[new d()];this.addCertificatesByPEM=function(p){var q=pemtohex(p);var r=new j();r.hTLV=q;this.certificateList.push(r)};this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}if(this.dDigestAlgs==null){var u=[];for(var t=0;t<this.digestAlgNameList.length;t++){var s=this.digestAlgNameList[t];var w=new k({name:s});u.push(w)}this.dDigestAlgs=new m({array:u})}var p=[this.dCMSVersion,this.dDigestAlgs,this.dEncapContentInfo];if(this.dCerts==null){if(this.certificateList.length>0){var v=new m({array:this.certificateList});this.dCerts=new b({obj:v,tag:"a0",explicit:false})}}if(this.dCerts!=null){p.push(this.dCerts)}var r=new m({array:this.signerInfoList});p.push(r);var q=new f({array:p});this.hTLV=q.getEncodedHex();return this.hTLV};this.getContentInfo=function(){this.getEncodedHex();var o=new n({type:"signed-data",obj:this});return o};this.getContentInfoEncodedHex=function(){var o=this.getContentInfo();var p=o.getEncodedHex();return p};this.getPEM=function(){return hextopem(this.getContentInfoEncodedHex(),"CMS")}};YAHOO.lang.extend(KJUR.asn1.cms.SignedData,KJUR.asn1.ASN1Object);KJUR.asn1.cms.CMSUtil=new function(){};KJUR.asn1.cms.CMSUtil.newSignedData=function(d){var b=KJUR,j=b.asn1,q=j.cms,f=q.SignerInfo,n=q.SignedData,o=q.SigningTime,a=q.SigningCertificate,p=q.SigningCertificateV2,c=j.cades,e=c.SignaturePolicyIdentifier;var m=new n();m.dEncapContentInfo.setContentValue(d.content);if(typeof d.detached=="boolean"){m.dEncapContentInfo.isDetached=d.detached}if(typeof d.certs=="object"){for(var h=0;h<d.certs.length;h++){m.addCertificatesByPEM(d.certs[h])}}m.signerInfoList=[];for(var h=0;h<d.signerInfos.length;h++){var k=d.signerInfos[h];var g=new f();g.setSignerIdentifier(k.signerCert);g.setForContentAndHash({sdObj:m,eciObj:m.dEncapContentInfo,hashAlg:k.hashAlg});for(attrName in k.sAttr){var r=k.sAttr[attrName];if(attrName=="SigningTime"){var l=new o(r);g.dSignedAttrs.add(l)}if(attrName=="SigningCertificate"){var l=new a(r);g.dSignedAttrs.add(l)}if(attrName=="SigningCertificateV2"){var l=new p(r);g.dSignedAttrs.add(l)}if(attrName=="SignaturePolicyIdentifier"){var l=new e(r);g.dSignedAttrs.add(l)}}g.sign(k.signerPrvKey,k.sigAlg);m.signerInfoList.push(g)}return m};KJUR.asn1.cms.CMSUtil.verifySignedData=function(n){var C=KJUR,p=C.asn1,s=p.cms,D=s.SignerInfo,q=s.SignedData,y=s.SigningTime,b=s.SigningCertificate,d=s.SigningCertificateV2,A=p.cades,u=A.SignaturePolicyIdentifier,i=C.lang.String.isHex,v=ASN1HEX,h=v.getVbyList,a=v.getTLVbyList,t=v.getIdxbyList,z=v.getChildIdx,c=v.getTLV,B=v.oidname,j=C.crypto.Util.hashHex;if(n.cms===undefined&&!i(n.cms)){}var E=n.cms;var g=function(J,H){var G;for(var I=3;I<6;I++){G=t(J,0,[1,0,I]);if(G!==undefined){var F=J.substr(G,2);if(F==="a0"){H.certsIdx=G}if(F==="a1"){H.revinfosIdx=G}if(F==="31"){H.signerinfosIdx=G}}}};var l=function(I,F){var H=F.signerinfosIdx;if(H===undefined){return}var L=z(I,H);F.signerInfoIdxList=L;for(var G=0;G<L.length;G++){var K=L[G];var J={idx:K};k(I,J);F.signerInfos.push(J)}};var k=function(I,J){var F=J.idx;J.signerid_issuer1=a(I,F,[1,0],"30");J.signerid_serial1=h(I,F,[1,1],"02");J.hashalg=B(h(I,F,[2,0],"06"));var H=t(I,F,[3],"a0");J.idxSignedAttrs=H;f(I,J,H);var G=z(I,F);var K=G.length;if(K<6){throw"malformed SignerInfo"}J.sigalg=B(h(I,F,[K-2,0],"06"));J.sigval=h(I,F,[K-1],"04")};var f=function(L,M,F){var J=z(L,F);M.signedAttrIdxList=J;for(var K=0;K<J.length;K++){var I=J[K];var G=h(L,I,[0],"06");var H;if(G==="2a864886f70d010905"){H=hextoutf8(h(L,I,[1,0]));M.saSigningTime=H}else{if(G==="2a864886f70d010904"){H=h(L,I,[1,0],"04");M.saMessageDigest=H}}}};var w=function(G,F){if(h(G,0,[0],"06")!=="2a864886f70d010702"){return F}F.cmsType="signedData";F.econtent=h(G,0,[1,0,2,1,0]);g(G,F);F.signerInfos=[];l(G,F)};var o=function(J,F){var G=F.parse.signerInfos;var L=G.length;var K=true;for(var I=0;I<L;I++){var H=G[I];e(J,F,H,I);if(!H.isValid){K=false}}F.isValid=K};var x=function(F,Q,J,P){var N=Q.parse.certsIdx;var H;if(Q.certs===undefined){H=[];Q.certkeys=[];var K=z(F,N);for(var I=0;I<K.length;I++){var M=c(F,K[I]);var O=new X509();O.readCertHex(M);H[I]=O;Q.certkeys[I]=O.getPublicKey()}Q.certs=H}else{H=Q.certs}Q.cccc=H.length;Q.cccci=K.length;for(var I=0;I<H.length;I++){var L=O.getIssuerHex();var G=O.getSerialNumberHex();if(J.signerid_issuer1===L&&J.signerid_serial1===G){J.certkey_idx=I}}};var e=function(F,R,I,N){I.verifyDetail={};var Q=I.verifyDetail;var K=R.parse.econtent;var G=I.hashalg;var L=I.saMessageDigest;Q.validMessageDigest=false;if(j(K,G)===L){Q.validMessageDigest=true}x(F,R,I,N);Q.validSignatureValue=false;var H=I.sigalg;var M="31"+c(F,I.idxSignedAttrs).substr(2);I.signedattrshex=M;var J=R.certs[I.certkey_idx].getPublicKey();var P=new KJUR.crypto.Signature({alg:H});P.init(J);P.updateHex(M);var O=P.verify(I.sigval);Q.validSignatureValue_isValid=O;if(O===true){Q.validSignatureValue=true}I.isValid=false;if(Q.validMessageDigest&&Q.validSignatureValue){I.isValid=true}};var m=function(){};var r={isValid:false,parse:{}};w(E,r.parse);o(E,r);return r};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.tsp=="undefined"||!KJUR.asn1.tsp){KJUR.asn1.tsp={}}KJUR.asn1.tsp.Accuracy=function(f){var c=KJUR,b=c.asn1,e=b.DERInteger,a=b.DERSequence,d=b.DERTaggedObject;b.tsp.Accuracy.superclass.constructor.call(this);this.seconds=null;this.millis=null;this.micros=null;this.getEncodedHex=function(){var i=null;var k=null;var m=null;var g=[];if(this.seconds!=null){i=new e({"int":this.seconds});g.push(i)}if(this.millis!=null){var l=new e({"int":this.millis});k=new d({obj:l,tag:"80",explicit:false});g.push(k)}if(this.micros!=null){var j=new e({"int":this.micros});m=new d({obj:j,tag:"81",explicit:false});g.push(m)}var h=new a({array:g});this.hTLV=h.getEncodedHex();return this.hTLV};if(f!==undefined){if(typeof f.seconds=="number"){this.seconds=f.seconds}if(typeof f.millis=="number"){this.millis=f.millis}if(typeof f.micros=="number"){this.micros=f.micros}}};YAHOO.lang.extend(KJUR.asn1.tsp.Accuracy,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.MessageImprint=function(g){var c=KJUR,b=c.asn1,a=b.DERSequence,d=b.DEROctetString,f=b.x509,e=f.AlgorithmIdentifier;b.tsp.MessageImprint.superclass.constructor.call(this);this.dHashAlg=null;this.dHashValue=null;this.getEncodedHex=function(){if(typeof this.hTLV=="string"){return this.hTLV}var h=new a({array:[this.dHashAlg,this.dHashValue]});return h.getEncodedHex()};if(g!==undefined){if(typeof g.hashAlg=="string"){this.dHashAlg=new e({name:g.hashAlg})}if(typeof g.hashValue=="string"){this.dHashValue=new d({hex:g.hashValue})}}};YAHOO.lang.extend(KJUR.asn1.tsp.MessageImprint,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TimeStampReq=function(c){var a=KJUR,f=a.asn1,d=f.DERSequence,e=f.DERInteger,g=f.DERBoolean,i=f.DERObjectIdentifier,h=f.tsp,b=h.MessageImprint;h.TimeStampReq.superclass.constructor.call(this);this.dVersion=new e({"int":1});this.dMessageImprint=null;this.dPolicy=null;this.dNonce=null;this.certReq=true;this.setMessageImprint=function(j){if(j instanceof b){this.dMessageImprint=j;return}if(typeof j=="object"){this.dMessageImprint=new b(j)}};this.getEncodedHex=function(){if(this.dMessageImprint==null){throw"messageImprint shall be specified"}var j=[this.dVersion,this.dMessageImprint];if(this.dPolicy!=null){j.push(this.dPolicy)}if(this.dNonce!=null){j.push(this.dNonce)}if(this.certReq){j.push(new g())}var k=new d({array:j});this.hTLV=k.getEncodedHex();return this.hTLV};if(c!==undefined){if(typeof c.mi=="object"){this.setMessageImprint(c.mi)}if(typeof c.policy=="object"){this.dPolicy=new i(c.policy)}if(typeof c.nonce=="object"){this.dNonce=new e(c.nonce)}if(typeof c.certreq=="boolean"){this.certReq=c.certreq}}};YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampReq,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TSTInfo=function(e){var c=KJUR,i=c.asn1,f=i.DERSequence,h=i.DERInteger,k=i.DERBoolean,g=i.DERGeneralizedTime,l=i.DERObjectIdentifier,j=i.tsp,d=j.MessageImprint,b=j.Accuracy,a=i.x509.X500Name;j.TSTInfo.superclass.constructor.call(this);this.dVersion=new h({"int":1});this.dPolicy=null;this.dMessageImprint=null;this.dSerialNumber=null;this.dGenTime=null;this.dAccuracy=null;this.dOrdering=null;this.dNonce=null;this.dTsa=null;this.getEncodedHex=function(){var m=[this.dVersion];if(this.dPolicy==null){throw"policy shall be specified."}m.push(this.dPolicy);if(this.dMessageImprint==null){throw"messageImprint shall be specified."}m.push(this.dMessageImprint);if(this.dSerialNumber==null){throw"serialNumber shall be specified."}m.push(this.dSerialNumber);if(this.dGenTime==null){throw"genTime shall be specified."}m.push(this.dGenTime);if(this.dAccuracy!=null){m.push(this.dAccuracy)}if(this.dOrdering!=null){m.push(this.dOrdering)}if(this.dNonce!=null){m.push(this.dNonce)}if(this.dTsa!=null){m.push(this.dTsa)}var n=new f({array:m});this.hTLV=n.getEncodedHex();return this.hTLV};if(e!==undefined){if(typeof e.policy=="string"){if(!e.policy.match(/^[0-9.]+$/)){throw"policy shall be oid like 0.1.4.134"}this.dPolicy=new l({oid:e.policy})}if(e.messageImprint!==undefined){this.dMessageImprint=new d(e.messageImprint)}if(e.serialNumber!==undefined){this.dSerialNumber=new h(e.serialNumber)}if(e.genTime!==undefined){this.dGenTime=new g(e.genTime)}if(e.accuracy!==undefined){this.dAccuracy=new b(e.accuracy)}if(e.ordering!==undefined&&e.ordering==true){this.dOrdering=new k()}if(e.nonce!==undefined){this.dNonce=new h(e.nonce)}if(e.tsa!==undefined){this.dTsa=new a(e.tsa)}}};YAHOO.lang.extend(KJUR.asn1.tsp.TSTInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.TimeStampResp=function(g){var e=KJUR,d=e.asn1,c=d.DERSequence,f=d.ASN1Object,a=d.tsp,b=a.PKIStatusInfo;a.TimeStampResp.superclass.constructor.call(this);this.dStatus=null;this.dTST=null;this.getEncodedHex=function(){if(this.dStatus==null){throw"status shall be specified"}var h=[this.dStatus];if(this.dTST!=null){h.push(this.dTST)}var i=new c({array:h});this.hTLV=i.getEncodedHex();return this.hTLV};if(g!==undefined){if(typeof g.status=="object"){this.dStatus=new b(g.status)}if(g.tst!==undefined&&g.tst instanceof f){this.dTST=g.tst.getContentInfo()}}};YAHOO.lang.extend(KJUR.asn1.tsp.TimeStampResp,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatusInfo=function(h){var g=KJUR,f=g.asn1,e=f.DERSequence,a=f.tsp,d=a.PKIStatus,c=a.PKIFreeText,b=a.PKIFailureInfo;a.PKIStatusInfo.superclass.constructor.call(this);this.dStatus=null;this.dStatusString=null;this.dFailureInfo=null;this.getEncodedHex=function(){if(this.dStatus==null){throw"status shall be specified"}var i=[this.dStatus];if(this.dStatusString!=null){i.push(this.dStatusString)}if(this.dFailureInfo!=null){i.push(this.dFailureInfo)}var j=new e({array:i});this.hTLV=j.getEncodedHex();return this.hTLV};if(h!==undefined){if(typeof h.status=="object"){this.dStatus=new d(h.status)}if(typeof h.statstr=="object"){this.dStatusString=new c({array:h.statstr})}if(typeof h.failinfo=="object"){this.dFailureInfo=new b(h.failinfo)}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatusInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatus=function(h){var d=KJUR,c=d.asn1,g=c.DERInteger,a=c.tsp,b=a.PKIStatus;a.PKIStatus.superclass.constructor.call(this);var f=null;this.getEncodedHex=function(){this.hTLV=this.dStatus.getEncodedHex();return this.hTLV};if(h!==undefined){if(h.name!==undefined){var e=b.valueList;if(e[h.name]===undefined){throw"name undefined: "+h.name}this.dStatus=new g({"int":e[h.name]})}else{this.dStatus=new g(h)}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIStatus,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIStatus.valueList={granted:0,grantedWithMods:1,rejection:2,waiting:3,revocationWarning:4,revocationNotification:5};KJUR.asn1.tsp.PKIFreeText=function(f){var e=KJUR,d=e.asn1,b=d.DERSequence,c=d.DERUTF8String,a=d.tsp;a.PKIFreeText.superclass.constructor.call(this);this.textList=[];this.getEncodedHex=function(){var g=[];for(var j=0;j<this.textList.length;j++){g.push(new c({str:this.textList[j]}))}var h=new b({array:g});this.hTLV=h.getEncodedHex();return this.hTLV};if(f!==undefined){if(typeof f.array=="object"){this.textList=f.array}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIFreeText,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIFailureInfo=function(g){var d=KJUR,c=d.asn1,f=c.DERBitString,a=c.tsp,b=a.PKIFailureInfo;b.superclass.constructor.call(this);this.value=null;this.getEncodedHex=function(){if(this.value==null){throw"value shall be specified"}var h=new Number(this.value).toString(2);var i=new f();i.setByBinaryString(h);this.hTLV=i.getEncodedHex();return this.hTLV};if(g!==undefined){if(typeof g.name=="string"){var e=b.valueList;if(e[g.name]===undefined){throw"name undefined: "+g.name}this.value=e[g.name]}else{if(typeof g["int"]=="number"){this.value=g["int"]}}}};YAHOO.lang.extend(KJUR.asn1.tsp.PKIFailureInfo,KJUR.asn1.ASN1Object);KJUR.asn1.tsp.PKIFailureInfo.valueList={badAlg:0,badRequest:2,badDataFormat:5,timeNotAvailable:14,unacceptedPolicy:15,unacceptedExtension:16,addInfoNotAvailable:17,systemFailure:25};KJUR.asn1.tsp.AbstractTSAAdapter=function(a){this.getTSTHex=function(c,b){throw"not implemented yet"}};KJUR.asn1.tsp.SimpleTSAAdapter=function(e){var d=KJUR,c=d.asn1,a=c.tsp,b=d.crypto.Util.hashHex;a.SimpleTSAAdapter.superclass.constructor.call(this);this.params=null;this.serial=0;this.getTSTHex=function(g,f){var i=b(g,f);this.params.tstInfo.messageImprint={hashAlg:f,hashValue:i};this.params.tstInfo.serialNumber={"int":this.serial++};var h=Math.floor(Math.random()*1000000000);this.params.tstInfo.nonce={"int":h};var j=a.TSPUtil.newTimeStampToken(this.params);return j.getContentInfoEncodedHex()};if(e!==undefined){this.params=e}};YAHOO.lang.extend(KJUR.asn1.tsp.SimpleTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter);KJUR.asn1.tsp.FixedTSAAdapter=function(e){var d=KJUR,c=d.asn1,a=c.tsp,b=d.crypto.Util.hashHex;a.FixedTSAAdapter.superclass.constructor.call(this);this.params=null;this.getTSTHex=function(g,f){var h=b(g,f);this.params.tstInfo.messageImprint={hashAlg:f,hashValue:h};var i=a.TSPUtil.newTimeStampToken(this.params);return i.getContentInfoEncodedHex()};if(e!==undefined){this.params=e}};YAHOO.lang.extend(KJUR.asn1.tsp.FixedTSAAdapter,KJUR.asn1.tsp.AbstractTSAAdapter);KJUR.asn1.tsp.TSPUtil=new function(){};KJUR.asn1.tsp.TSPUtil.newTimeStampToken=function(c){var b=KJUR,h=b.asn1,m=h.cms,k=h.tsp,a=h.tsp.TSTInfo;var j=new m.SignedData();var g=new a(c.tstInfo);var f=g.getEncodedHex();j.dEncapContentInfo.setContentValue({hex:f});j.dEncapContentInfo.setContentType("tstinfo");if(typeof c.certs=="object"){for(var e=0;e<c.certs.length;e++){j.addCertificatesByPEM(c.certs[e])}}var d=j.signerInfoList[0];d.setSignerIdentifier(c.signerCert);d.setForContentAndHash({sdObj:j,eciObj:j.dEncapContentInfo,hashAlg:c.hashAlg});var l=new m.SigningCertificate({array:[c.signerCert]});d.dSignedAttrs.add(l);d.sign(c.signerPrvKey,c.sigAlg);return j};KJUR.asn1.tsp.TSPUtil.parseTimeStampReq=function(m){var l=ASN1HEX;var h=l.getChildIdx;var f=l.getV;var b=l.getTLV;var j={};j.certreq=false;var a=h(m,0);if(a.length<2){throw"TimeStampReq must have at least 2 items"}var e=b(m,a[1]);j.mi=KJUR.asn1.tsp.TSPUtil.parseMessageImprint(e);for(var d=2;d<a.length;d++){var g=a[d];var k=m.substr(g,2);if(k=="06"){var c=f(m,g);j.policy=l.hextooidstr(c)}if(k=="02"){j.nonce=f(m,g)}if(k=="01"){j.certreq=true}}return j};KJUR.asn1.tsp.TSPUtil.parseMessageImprint=function(c){var m=ASN1HEX;var j=m.getChildIdx;var i=m.getV;var g=m.getIdxbyList;var k={};if(c.substr(0,2)!="30"){throw"head of messageImprint hex shall be '30'"}var a=j(c,0);var l=g(c,0,[0,0]);var e=i(c,l);var d=m.hextooidstr(e);var h=KJUR.asn1.x509.OID.oid2name(d);if(h==""){throw"hashAlg name undefined: "+d}var b=h;var f=g(c,0,[1]);k.hashAlg=b;k.hashValue=i(c,f);return k};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.cades=="undefined"||!KJUR.asn1.cades){KJUR.asn1.cades={}}KJUR.asn1.cades.SignaturePolicyIdentifier=function(f){var b=KJUR,h=b.asn1,i=h.DERObjectIdentifier,g=h.DERSequence,e=h.cades,c=e.OtherHashAlgAndValue;e.SignaturePolicyIdentifier.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.15";if(f!==undefined){if(typeof f.oid=="string"&&typeof f.hash=="object"){var d=new i({oid:f.oid});var a=new c(f.hash);var j=new g({array:[d,a]});this.valueList=[j]}}};YAHOO.lang.extend(KJUR.asn1.cades.SignaturePolicyIdentifier,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.OtherHashAlgAndValue=function(e){var a=KJUR,g=a.asn1,f=g.DERSequence,h=g.DEROctetString,d=g.x509,i=d.AlgorithmIdentifier,c=g.cades,b=c.OtherHashAlgAndValue;b.superclass.constructor.call(this);this.dAlg=null;this.dHash=null;this.getEncodedHex=function(){var j=new f({array:[this.dAlg,this.dHash]});this.hTLV=j.getEncodedHex();return this.hTLV};if(e!==undefined){if(typeof e.alg=="string"&&typeof e.hash=="string"){this.dAlg=new i({name:e.alg});this.dHash=new h({hex:e.hash})}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherHashAlgAndValue,KJUR.asn1.ASN1Object);KJUR.asn1.cades.SignatureTimeStamp=function(h){var c=KJUR,b=c.asn1,e=b.ASN1Object,g=b.x509,a=b.cades;a.SignatureTimeStamp.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.14";this.tstHex=null;if(h!==undefined){if(h.res!==undefined){if(typeof h.res=="string"&&h.res.match(/^[0-9A-Fa-f]+$/)){}else{if(h.res instanceof e){}else{throw"res param shall be ASN1Object or hex string"}}}if(h.tst!==undefined){if(typeof h.tst=="string"&&h.tst.match(/^[0-9A-Fa-f]+$/)){var f=new e();this.tstHex=h.tst;f.hTLV=this.tstHex;f.getEncodedHex();this.valueList=[f]}else{if(h.tst instanceof e){}else{throw"tst param shall be ASN1Object or hex string"}}}}};YAHOO.lang.extend(KJUR.asn1.cades.SignatureTimeStamp,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.CompleteCertificateRefs=function(d){var c=KJUR,b=c.asn1,a=b.cades;a.CompleteCertificateRefs.superclass.constructor.call(this);this.attrTypeOid="1.2.840.113549.1.9.16.2.21";this.setByArray=function(e){this.valueList=[];for(var f=0;f<e.length;f++){var g=new a.OtherCertID(e[f]);this.valueList.push(g)}};if(d!==undefined){if(typeof d=="object"&&typeof d.length=="number"){this.setByArray(d)}}};YAHOO.lang.extend(KJUR.asn1.cades.CompleteCertificateRefs,KJUR.asn1.cms.Attribute);KJUR.asn1.cades.OtherCertID=function(e){var c=KJUR,b=c.asn1,d=b.cms,a=b.cades;a.OtherCertID.superclass.constructor.call(this);this.hasIssuerSerial=true;this.dOtherCertHash=null;this.dIssuerSerial=null;this.setByCertPEM=function(f){this.dOtherCertHash=new a.OtherHash(f);if(this.hasIssuerSerial){this.dIssuerSerial=new d.IssuerAndSerialNumber(f)}};this.getEncodedHex=function(){if(this.hTLV!=null){return this.hTLV}if(this.dOtherCertHash==null){throw"otherCertHash not set"}var f=[this.dOtherCertHash];if(this.dIssuerSerial!=null){f.push(this.dIssuerSerial)}var g=new b.DERSequence({array:f});this.hTLV=g.getEncodedHex();return this.hTLV};if(e!==undefined){if(typeof e=="string"&&e.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(e)}if(typeof e=="object"){if(e.hasis===false){this.hasIssuerSerial=false}if(typeof e.cert=="string"){this.setByCertPEM(e.cert)}}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherCertID,KJUR.asn1.ASN1Object);KJUR.asn1.cades.OtherHash=function(f){var d=KJUR,c=d.asn1,e=c.cms,b=c.cades,g=b.OtherHashAlgAndValue,a=d.crypto.Util.hashHex;b.OtherHash.superclass.constructor.call(this);this.alg="sha256";this.dOtherHash=null;this.setByCertPEM=function(h){if(h.indexOf("-----BEGIN ")==-1){throw"certPEM not to seem PEM format"}var i=pemtohex(h);var j=a(i,this.alg);this.dOtherHash=new g({alg:this.alg,hash:j})};this.getEncodedHex=function(){if(this.dOtherHash==null){throw"OtherHash not set"}return this.dOtherHash.getEncodedHex()};if(f!==undefined){if(typeof f=="string"){if(f.indexOf("-----BEGIN ")!=-1){this.setByCertPEM(f)}else{if(f.match(/^[0-9A-Fa-f]+$/)){this.dOtherHash=new c.DEROctetString({hex:f})}else{throw"unsupported string value for params"}}}else{if(typeof f=="object"){if(typeof f.cert=="string"){if(typeof f.alg=="string"){this.alg=f.alg}this.setByCertPEM(f.cert)}else{this.dOtherHash=new g(f)}}}}};YAHOO.lang.extend(KJUR.asn1.cades.OtherHash,KJUR.asn1.ASN1Object);KJUR.asn1.cades.CAdESUtil=new function(){};KJUR.asn1.cades.CAdESUtil.addSigTS=function(c,b,a){};KJUR.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned=function(e){var p=ASN1HEX,u=p.getChildIdx,b=p.getTLV,a=p.getTLVbyList,k=p.getIdxbyList,A=KJUR,g=A.asn1,l=g.ASN1Object,j=g.cms,h=j.SignedData,v=g.cades,z=v.CAdESUtil;var m={};if(a(e,0,[0])!="06092a864886f70d010702"){throw"hex is not CMS SignedData"}var y=k(e,0,[1,0]);var B=u(e,y);if(B.length<4){throw"num of SignedData elem shall be 4 at least"}var d=B.shift();m.version=b(e,d);var w=B.shift();m.algs=b(e,w);var c=B.shift();m.encapcontent=b(e,c);m.certs=null;m.revs=null;m.si=[];var o=B.shift();if(e.substr(o,2)=="a0"){m.certs=b(e,o);o=B.shift()}if(e.substr(o,2)=="a1"){m.revs=b(e,o);o=B.shift()}var t=o;if(e.substr(t,2)!="31"){throw"Can't find signerInfos"}var f=u(e,t);for(var q=0;q<f.length;q++){var s=f[q];var n=z.parseSignerInfoForAddingUnsigned(e,s,q);m.si[q]=n}var x=null;m.obj=new h();x=new l();x.hTLV=m.version;m.obj.dCMSVersion=x;x=new l();x.hTLV=m.algs;m.obj.dDigestAlgs=x;x=new l();x.hTLV=m.encapcontent;m.obj.dEncapContentInfo=x;x=new l();x.hTLV=m.certs;m.obj.dCerts=x;m.obj.signerInfoList=[];for(var q=0;q<m.si.length;q++){m.obj.signerInfoList.push(m.si[q].obj)}return m};KJUR.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned=function(g,q,c){var p=ASN1HEX,s=p.getChildIdx,a=p.getTLV,l=p.getV,v=KJUR,h=v.asn1,n=h.ASN1Object,j=h.cms,k=j.AttributeList,w=j.SignerInfo;var o={};var t=s(g,q);if(t.length!=6){throw"not supported items for SignerInfo (!=6)"}var d=t.shift();o.version=a(g,d);var e=t.shift();o.si=a(g,e);var m=t.shift();o.digalg=a(g,m);var f=t.shift();o.sattrs=a(g,f);var i=t.shift();o.sigalg=a(g,i);var b=t.shift();o.sig=a(g,b);o.sigval=l(g,b);var u=null;o.obj=new w();u=new n();u.hTLV=o.version;o.obj.dCMSVersion=u;u=new n();u.hTLV=o.si;o.obj.dSignerIdentifier=u;u=new n();u.hTLV=o.digalg;o.obj.dDigestAlgorithm=u;u=new n();u.hTLV=o.sattrs;o.obj.dSignedAttrs=u;u=new n();u.hTLV=o.sigalg;o.obj.dSigAlg=u;u=new n();u.hTLV=o.sig;o.obj.dSig=u;o.obj.dUnsignedAttrs=new k();return o};
if(typeof KJUR.asn1.csr=="undefined"||!KJUR.asn1.csr){KJUR.asn1.csr={}}KJUR.asn1.csr.CertificationRequest=function(d){var a=KJUR,f=a.asn1,b=f.DERBitString,e=f.DERSequence,k=f.csr,c=f.x509;k.CertificationRequest.superclass.constructor.call(this);var l=null;var j=null;var h=null;var i=null;var g=null;this.sign=function(p,n){if(this.prvKey==null){this.prvKey=n}this.asn1SignatureAlg=new c.AlgorithmIdentifier({name:p});var o=new a.crypto.Signature({alg:p});o.init(this.prvKey);o.updateHex(this.asn1CSRInfo.getEncodedHex());this.hexSig=o.sign();this.asn1Sig=new b({hex:"00"+this.hexSig});var m=new e({array:[this.asn1CSRInfo,this.asn1SignatureAlg,this.asn1Sig]});this.hTLV=m.getEncodedHex();this.isModified=false};this.getPEMString=function(){return hextopem(this.getEncodedHex(),"CERTIFICATE REQUEST")};this.getEncodedHex=function(){if(this.isModified==false&&this.hTLV!=null){return this.hTLV}throw"not signed yet"};if(d!==undefined&&d.csrinfo!==undefined){this.asn1CSRInfo=d.csrinfo}};YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequest,KJUR.asn1.ASN1Object);KJUR.asn1.csr.CertificationRequestInfo=function(e){var b=KJUR,h=b.asn1,g=h.DERInteger,f=h.DERSequence,m=h.DERSet,j=h.DERNull,c=h.DERTaggedObject,k=h.DERObjectIdentifier,l=h.csr,d=h.x509,a=d.X500Name,n=d.Extension,i=KEYUTIL;l.CertificationRequestInfo.superclass.constructor.call(this);this._initialize=function(){this.asn1Array=new Array();this.asn1Version=new g({"int":0});this.asn1Subject=null;this.asn1SubjPKey=null;this.extensionsArray=new Array()};this.setSubjectByParam=function(o){this.asn1Subject=new a(o)};this.setSubjectPublicKeyByGetKey=function(p){var o=i.getKey(p);this.asn1SubjPKey=new d.SubjectPublicKeyInfo(o)};this.appendExtensionByName=function(p,o){n.appendByNameToArray(p,o,this.extensionsArray)};this.getEncodedHex=function(){this.asn1Array=new Array();this.asn1Array.push(this.asn1Version);this.asn1Array.push(this.asn1Subject);this.asn1Array.push(this.asn1SubjPKey);if(this.extensionsArray.length>0){var s=new f({array:this.extensionsArray});var r=new m({array:[s]});var q=new f({array:[new k({oid:"1.2.840.113549.1.9.14"}),r]});var p=new c({explicit:true,tag:"a0",obj:q});this.asn1Array.push(p)}else{var p=new c({explicit:false,tag:"a0",obj:new j()});this.asn1Array.push(p)}var t=new f({array:this.asn1Array});this.hTLV=t.getEncodedHex();this.isModified=false;return this.hTLV};this._initialize()};YAHOO.lang.extend(KJUR.asn1.csr.CertificationRequestInfo,KJUR.asn1.ASN1Object);KJUR.asn1.csr.CSRUtil=new function(){};KJUR.asn1.csr.CSRUtil.newCSRPEM=function(h){var c=KEYUTIL,b=KJUR.asn1.csr;if(h.subject===undefined){throw"parameter subject undefined"}if(h.sbjpubkey===undefined){throw"parameter sbjpubkey undefined"}if(h.sigalg===undefined){throw"parameter sigalg undefined"}if(h.sbjprvkey===undefined){throw"parameter sbjpubkey undefined"}var d=new b.CertificationRequestInfo();d.setSubjectByParam(h.subject);d.setSubjectPublicKeyByGetKey(h.sbjpubkey);if(h.ext!==undefined&&h.ext.length!==undefined){for(var e=0;e<h.ext.length;e++){for(key in h.ext[e]){d.appendExtensionByName(key,h.ext[e][key])}}}var f=new b.CertificationRequest({csrinfo:d});var a=c.getKey(h.sbjprvkey);f.sign(h.sigalg,a);var g=f.getPEMString();return g};KJUR.asn1.csr.CSRUtil.getInfo=function(c){var f=ASN1HEX;var g=f.getTLVbyList;var b={};b.subject={};b.pubkey={};if(c.indexOf("-----BEGIN CERTIFICATE REQUEST")==-1){throw"argument is not PEM file"}var e=pemtohex(c,"CERTIFICATE REQUEST");try{b.subject.hex=g(e,0,[0,1])}catch(d){}try{b.subject.name=X509.hex2dn(b.subject.hex)}catch(d){}b.pubkey.hex=g(e,0,[0,2]);b.pubkey.obj=KEYUTIL.getKey(b.pubkey.hex,null,"pkcs8pub");try{b.ext=[];var a=new X509();a.parseExt(c);b.ext.push({subjectAltName:{array:a.getExtSubjectAltName2()}})}catch(d){}return b};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.asn1=="undefined"||!KJUR.asn1){KJUR.asn1={}}if(typeof KJUR.asn1.ocsp=="undefined"||!KJUR.asn1.ocsp){KJUR.asn1.ocsp={}}KJUR.asn1.ocsp.DEFAULT_HASH="sha1";KJUR.asn1.ocsp.CertID=function(g){var d=KJUR,k=d.asn1,m=k.DEROctetString,j=k.DERInteger,h=k.DERSequence,f=k.x509,n=f.AlgorithmIdentifier,o=k.ocsp,l=o.DEFAULT_HASH,i=d.crypto,e=i.Util.hashHex,c=X509,q=ASN1HEX;o.CertID.superclass.constructor.call(this);this.dHashAlg=null;this.dIssuerNameHash=null;this.dIssuerKeyHash=null;this.dSerialNumber=null;this.setByValue=function(t,s,p,r){if(r===undefined){r=l}this.dHashAlg=new n({name:r});this.dIssuerNameHash=new m({hex:t});this.dIssuerKeyHash=new m({hex:s});this.dSerialNumber=new j({hex:p})};this.setByCert=function(x,t,v){if(v===undefined){v=l}var p=new c();p.readCertPEM(t);var y=new c();y.readCertPEM(x);var z=y.getPublicKeyHex();var w=q.getTLVbyList(z,0,[1,0],"30");var r=p.getSerialNumberHex();var s=e(y.getSubjectHex(),v);var u=e(w,v);this.setByValue(s,u,r,v);this.hoge=p.getSerialNumberHex()};this.getEncodedHex=function(){if(this.dHashAlg===null&&this.dIssuerNameHash===null&&this.dIssuerKeyHash===null&&this.dSerialNumber===null){throw"not yet set values"}var p=[this.dHashAlg,this.dIssuerNameHash,this.dIssuerKeyHash,this.dSerialNumber];var r=new h({array:p});this.hTLV=r.getEncodedHex();return this.hTLV};if(g!==undefined){var b=g;if(b.issuerCert!==undefined&&b.subjectCert!==undefined){var a=l;if(b.alg===undefined){a=undefined}this.setByCert(b.issuerCert,b.subjectCert,a)}else{if(b.namehash!==undefined&&b.keyhash!==undefined&&b.serial!==undefined){var a=l;if(b.alg===undefined){a=undefined}this.setByValue(b.namehash,b.keyhash,b.serial,a)}else{throw"invalid constructor arguments"}}}};YAHOO.lang.extend(KJUR.asn1.ocsp.CertID,KJUR.asn1.ASN1Object);KJUR.asn1.ocsp.Request=function(f){var c=KJUR,b=c.asn1,a=b.DERSequence,d=b.ocsp;d.Request.superclass.constructor.call(this);this.dReqCert=null;this.dExt=null;this.getEncodedHex=function(){var g=[];if(this.dReqCert===null){throw"reqCert not set"}g.push(this.dReqCert);var h=new a({array:g});this.hTLV=h.getEncodedHex();return this.hTLV};if(typeof f!=="undefined"){var e=new d.CertID(f);this.dReqCert=e}};YAHOO.lang.extend(KJUR.asn1.ocsp.Request,KJUR.asn1.ASN1Object);KJUR.asn1.ocsp.TBSRequest=function(e){var c=KJUR,b=c.asn1,a=b.DERSequence,d=b.ocsp;d.TBSRequest.superclass.constructor.call(this);this.version=0;this.dRequestorName=null;this.dRequestList=[];this.dRequestExt=null;this.setRequestListByParam=function(h){var f=[];for(var g=0;g<h.length;g++){var j=new d.Request(h[0]);f.push(j)}this.dRequestList=f};this.getEncodedHex=function(){var f=[];if(this.version!==0){throw"not supported version: "+this.version}if(this.dRequestorName!==null){throw"requestorName not supported"}var h=new a({array:this.dRequestList});f.push(h);if(this.dRequestExt!==null){throw"requestExtensions not supported"}var g=new a({array:f});this.hTLV=g.getEncodedHex();return this.hTLV};if(e!==undefined){if(e.reqList!==undefined){this.setRequestListByParam(e.reqList)}}};YAHOO.lang.extend(KJUR.asn1.ocsp.TBSRequest,KJUR.asn1.ASN1Object);KJUR.asn1.ocsp.OCSPRequest=function(f){var c=KJUR,b=c.asn1,a=b.DERSequence,d=b.ocsp;d.OCSPRequest.superclass.constructor.call(this);this.dTbsRequest=null;this.dOptionalSignature=null;this.getEncodedHex=function(){var g=[];if(this.dTbsRequest!==null){g.push(this.dTbsRequest)}else{throw"tbsRequest not set"}if(this.dOptionalSignature!==null){throw"optionalSignature not supported"}var h=new a({array:g});this.hTLV=h.getEncodedHex();return this.hTLV};if(f!==undefined){if(f.reqList!==undefined){var e=new d.TBSRequest(f);this.dTbsRequest=e}}};YAHOO.lang.extend(KJUR.asn1.ocsp.OCSPRequest,KJUR.asn1.ASN1Object);KJUR.asn1.ocsp.OCSPUtil={};KJUR.asn1.ocsp.OCSPUtil.getRequestHex=function(a,b,h){var d=KJUR,c=d.asn1,e=c.ocsp;if(h===undefined){h=e.DEFAULT_HASH}var g={alg:h,issuerCert:a,subjectCert:b};var f=new e.OCSPRequest({reqList:[g]});return f.getEncodedHex()};KJUR.asn1.ocsp.OCSPUtil.getOCSPResponseInfo=function(b){var k=ASN1HEX;var c=k.getVbyList;var d=k.getIdxbyList;var c=k.getVbyList;var f=k.getV;var l={};try{var i=c(b,0,[0],"0a");l.responseStatus=parseInt(i,16)}catch(e){}if(l.responseStatus!==0){return l}try{var g=d(b,0,[1,0,1,0,0,2,0,1]);if(b.substr(g,2)==="80"){l.certStatus="good"}else{if(b.substr(g,2)==="a1"){l.certStatus="revoked";l.revocationTime=hextoutf8(c(b,g,[0]))}else{if(b.substr(g,2)==="82"){l.certStatus="unknown"}}}}catch(e){}try{var a=d(b,0,[1,0,1,0,0,2,0,2]);l.thisUpdate=hextoutf8(f(b,a))}catch(e){}try{var j=d(b,0,[1,0,1,0,0,2,0,3]);if(b.substr(j,2)==="a0"){l.nextUpdate=hextoutf8(c(b,j,[0]))}}catch(e){}return l};
var KJUR;if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.lang=="undefined"||!KJUR.lang){KJUR.lang={}}KJUR.lang.String=function(){};function Base64x(){}function stoBA(d){var b=new Array();for(var c=0;c<d.length;c++){b[c]=d.charCodeAt(c)}return b}function BAtos(b){var d="";for(var c=0;c<b.length;c++){d=d+String.fromCharCode(b[c])}return d}function BAtohex(b){var e="";for(var d=0;d<b.length;d++){var c=b[d].toString(16);if(c.length==1){c="0"+c}e=e+c}return e}function stohex(a){return BAtohex(stoBA(a))}function stob64(a){return hex2b64(stohex(a))}function stob64u(a){return b64tob64u(hex2b64(stohex(a)))}function b64utos(a){return BAtos(b64toBA(b64utob64(a)))}function b64tob64u(a){a=a.replace(/\=/g,"");a=a.replace(/\+/g,"-");a=a.replace(/\//g,"_");return a}function b64utob64(a){if(a.length%4==2){a=a+"=="}else{if(a.length%4==3){a=a+"="}}a=a.replace(/-/g,"+");a=a.replace(/_/g,"/");return a}function hextob64u(a){if(a.length%2==1){a="0"+a}return b64tob64u(hex2b64(a))}function b64utohex(a){return b64tohex(b64utob64(a))}var utf8tob64u,b64utoutf8;if(typeof Buffer==="function"){utf8tob64u=function(a){return b64tob64u(new Buffer(a,"utf8").toString("base64"))};b64utoutf8=function(a){return new Buffer(b64utob64(a),"base64").toString("utf8")}}else{utf8tob64u=function(a){return hextob64u(uricmptohex(encodeURIComponentAll(a)))};b64utoutf8=function(a){return decodeURIComponent(hextouricmp(b64utohex(a)))}}function utf8tob64(a){return hex2b64(uricmptohex(encodeURIComponentAll(a)))}function b64toutf8(a){return decodeURIComponent(hextouricmp(b64tohex(a)))}function utf8tohex(a){return uricmptohex(encodeURIComponentAll(a))}function hextoutf8(a){return decodeURIComponent(hextouricmp(a))}function hextorstr(c){var b="";for(var a=0;a<c.length-1;a+=2){b+=String.fromCharCode(parseInt(c.substr(a,2),16))}return b}function rstrtohex(c){var a="";for(var b=0;b<c.length;b++){a+=("0"+c.charCodeAt(b).toString(16)).slice(-2)}return a}function hextob64(a){return hex2b64(a)}function hextob64nl(b){var a=hextob64(b);var c=a.replace(/(.{64})/g,"$1\r\n");c=c.replace(/\r\n$/,"");return c}function b64nltohex(b){var a=b.replace(/[^0-9A-Za-z\/+=]*/g,"");var c=b64tohex(a);return c}function hextopem(a,b){var c=hextob64nl(a);return"-----BEGIN "+b+"-----\r\n"+c+"\r\n-----END "+b+"-----\r\n"}function pemtohex(a,b){if(a.indexOf("-----BEGIN ")==-1){throw"can't find PEM header: "+b}if(b!==undefined){a=a.replace(new RegExp("^[^]*-----BEGIN "+b+"-----"),"");a=a.replace(new RegExp("-----END "+b+"-----[^]*$"),"")}else{a=a.replace(/^[^]*-----BEGIN [^-]+-----/,"");a=a.replace(/-----END [^-]+-----[^]*$/,"")}return b64nltohex(a)}function hextoArrayBuffer(d){if(d.length%2!=0){throw"input is not even length"}if(d.match(/^[0-9A-Fa-f]+$/)==null){throw"input is not hexadecimal"}var b=new ArrayBuffer(d.length/2);var a=new DataView(b);for(var c=0;c<d.length/2;c++){a.setUint8(c,parseInt(d.substr(c*2,2),16))}return b}function ArrayBuffertohex(b){var d="";var a=new DataView(b);for(var c=0;c<b.byteLength;c++){d+=("00"+a.getUint8(c).toString(16)).slice(-2)}return d}function zulutomsec(n){var l,j,m,e,f,i,b,k;var a,h,g,c;c=n.match(/^(\d{2}|\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/);if(c){a=c[1];l=parseInt(a);if(a.length===2){if(50<=l&&l<100){l=1900+l}else{if(0<=l&&l<50){l=2000+l}}}j=parseInt(c[2])-1;m=parseInt(c[3]);e=parseInt(c[4]);f=parseInt(c[5]);i=parseInt(c[6]);b=0;h=c[7];if(h!==""){g=(h.substr(1)+"00").substr(0,3);b=parseInt(g)}return Date.UTC(l,j,m,e,f,i,b)}throw"unsupported zulu format: "+n}function zulutosec(a){var b=zulutomsec(a);return ~~(b/1000)}function zulutodate(a){return new Date(zulutomsec(a))}function datetozulu(g,e,f){var b;var a=g.getUTCFullYear();if(e){if(a<1950||2049<a){throw"not proper year for UTCTime: "+a}b=(""+a).slice(-2)}else{b=("000"+a).slice(-4)}b+=("0"+(g.getUTCMonth()+1)).slice(-2);b+=("0"+g.getUTCDate()).slice(-2);b+=("0"+g.getUTCHours()).slice(-2);b+=("0"+g.getUTCMinutes()).slice(-2);b+=("0"+g.getUTCSeconds()).slice(-2);if(f){var c=g.getUTCMilliseconds();if(c!==0){c=("00"+c).slice(-3);c=c.replace(/0+$/g,"");b+="."+c}}b+="Z";return b}function uricmptohex(a){return a.replace(/%/g,"")}function hextouricmp(a){return a.replace(/(..)/g,"%$1")}function ipv6tohex(g){var b="malformed IPv6 address";if(!g.match(/^[0-9A-Fa-f:]+$/)){throw b}g=g.toLowerCase();var d=g.split(":").length-1;if(d<2){throw b}var e=":".repeat(7-d+2);g=g.replace("::",e);var c=g.split(":");if(c.length!=8){throw b}for(var f=0;f<8;f++){c[f]=("0000"+c[f]).slice(-4)}return c.join("")}function hextoipv6(e){if(!e.match(/^[0-9A-Fa-f]{32}$/)){throw"malformed IPv6 address octet"}e=e.toLowerCase();var b=e.match(/.{1,4}/g);for(var d=0;d<8;d++){b[d]=b[d].replace(/^0+/,"");if(b[d]==""){b[d]="0"}}e=":"+b.join(":")+":";var c=e.match(/:(0:){2,}/g);if(c===null){return e.slice(1,-1)}var f="";for(var d=0;d<c.length;d++){if(c[d].length>f.length){f=c[d]}}e=e.replace(f,"::");return e.slice(1,-1)}function hextoip(b){var d="malformed hex value";if(!b.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)){throw d}if(b.length==8){var c;try{c=parseInt(b.substr(0,2),16)+"."+parseInt(b.substr(2,2),16)+"."+parseInt(b.substr(4,2),16)+"."+parseInt(b.substr(6,2),16);return c}catch(a){throw d}}else{if(b.length==32){return hextoipv6(b)}else{return b}}}function iptohex(f){var j="malformed IP address";f=f.toLowerCase(f);if(f.match(/^[0-9.]+$/)){var b=f.split(".");if(b.length!==4){throw j}var g="";try{for(var e=0;e<4;e++){var h=parseInt(b[e]);g+=("0"+h.toString(16)).slice(-2)}return g}catch(c){throw j}}else{if(f.match(/^[0-9a-f:]+$/)&&f.indexOf(":")!==-1){return ipv6tohex(f)}else{throw j}}}function encodeURIComponentAll(a){var d=encodeURIComponent(a);var b="";for(var c=0;c<d.length;c++){if(d[c]=="%"){b=b+d.substr(c,3);c=c+2}else{b=b+"%"+stohex(d[c])}}return b}function newline_toUnix(a){a=a.replace(/\r\n/mg,"\n");return a}function newline_toDos(a){a=a.replace(/\r\n/mg,"\n");a=a.replace(/\n/mg,"\r\n");return a}KJUR.lang.String.isInteger=function(a){if(a.match(/^[0-9]+$/)){return true}else{if(a.match(/^-[0-9]+$/)){return true}else{return false}}};KJUR.lang.String.isHex=function(a){if(a.length%2==0&&(a.match(/^[0-9a-f]+$/)||a.match(/^[0-9A-F]+$/))){return true}else{return false}};KJUR.lang.String.isBase64=function(a){a=a.replace(/\s+/g,"");if(a.match(/^[0-9A-Za-z+\/]+={0,3}$/)&&a.length%4==0){return true}else{return false}};KJUR.lang.String.isBase64URL=function(a){if(a.match(/[+/=]/)){return false}a=b64utob64(a);return KJUR.lang.String.isBase64(a)};KJUR.lang.String.isIntegerArray=function(a){a=a.replace(/\s+/g,"");if(a.match(/^\[[0-9,]+\]$/)){return true}else{return false}};function hextoposhex(a){if(a.length%2==1){return"0"+a}if(a.substr(0,1)>"7"){return"00"+a}return a}function intarystrtohex(b){b=b.replace(/^\s*\[\s*/,"");b=b.replace(/\s*\]\s*$/,"");b=b.replace(/\s*/g,"");try{var c=b.split(/,/).map(function(g,e,h){var f=parseInt(g);if(f<0||255<f){throw"integer not in range 0-255"}var d=("00"+f.toString(16)).slice(-2);return d}).join("");return c}catch(a){throw"malformed integer array string: "+a}}var strdiffidx=function(c,a){var d=c.length;if(c.length>a.length){d=a.length}for(var b=0;b<d;b++){if(c.charCodeAt(b)!=a.charCodeAt(b)){return b}}if(c.length!=a.length){return d}return -1};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414",};this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa",};this.CRYPTOJSMESSAGEDIGESTNAME={md5:CryptoJS.algo.MD5,sha1:CryptoJS.algo.SHA1,sha224:CryptoJS.algo.SHA224,sha256:CryptoJS.algo.SHA256,sha384:CryptoJS.algo.SHA384,sha512:CryptoJS.algo.SHA512,ripemd160:CryptoJS.algo.RIPEMD160};this.getDigestInfoHex=function(a,b){if(typeof this.DIGESTINFOHEAD[b]=="undefined"){throw"alg not supported in Util.DIGESTINFOHEAD: "+b}return this.DIGESTINFOHEAD[b]+a};this.getPaddedDigestInfoHex=function(h,a,j){var c=this.getDigestInfoHex(h,a);var d=j/4;if(c.length+22>d){throw"key is too short for SigAlg: keylen="+j+","+a}var b="0001";var k="00"+c;var g="";var l=d-b.length-k.length;for(var f=0;f<l;f+=2){g+="ff"}var e=b+g+k;return e};this.hashString=function(a,c){var b=new KJUR.crypto.MessageDigest({alg:c});return b.digestString(a)};this.hashHex=function(b,c){var a=new KJUR.crypto.MessageDigest({alg:c});return a.digestHex(b)};this.sha1=function(a){return this.hashString(a,"sha1")};this.sha256=function(a){return this.hashString(a,"sha256")};this.sha256Hex=function(a){return this.hashHex(a,"sha256")};this.sha512=function(a){return this.hashString(a,"sha512")};this.sha512Hex=function(a){return this.hashHex(a,"sha512")};this.isKey=function(a){if(a instanceof RSAKey||a instanceof KJUR.crypto.DSA||a instanceof KJUR.crypto.ECDSA){return true}else{return false}}};KJUR.crypto.Util.md5=function(a){var b=new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"});return b.digestString(a)};KJUR.crypto.Util.ripemd160=function(a){var b=new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"});return b.digestString(a)};KJUR.crypto.Util.SECURERANDOMGEN=new SecureRandom();KJUR.crypto.Util.getRandomHexOfNbytes=function(b){var a=new Array(b);KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(a);return BAtohex(a)};KJUR.crypto.Util.getRandomBigIntegerOfNbytes=function(a){return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbytes(a),16)};KJUR.crypto.Util.getRandomHexOfNbits=function(d){var c=d%8;var a=(d-c)/8;var b=new Array(a+1);KJUR.crypto.Util.SECURERANDOMGEN.nextBytes(b);b[0]=(((255<<c)&255)^255)&b[0];return BAtohex(b)};KJUR.crypto.Util.getRandomBigIntegerOfNbits=function(a){return new BigInteger(KJUR.crypto.Util.getRandomHexOfNbits(a),16)};KJUR.crypto.Util.getRandomBigIntegerZeroToMax=function(b){var a=b.bitLength();while(1){var c=KJUR.crypto.Util.getRandomBigIntegerOfNbits(a);if(b.compareTo(c)!=-1){return c}}};KJUR.crypto.Util.getRandomBigIntegerMinToMax=function(e,b){var c=e.compareTo(b);if(c==1){throw"biMin is greater than biMax"}if(c==0){return e}var a=b.subtract(e);var d=KJUR.crypto.Util.getRandomBigIntegerZeroToMax(a);return d.add(e)};KJUR.crypto.MessageDigest=function(c){var b=null;var a=null;var d=null;this.setAlgAndProvider=function(g,f){g=KJUR.crypto.MessageDigest.getCanonicalAlgName(g);if(g!==null&&f===undefined){f=KJUR.crypto.Util.DEFAULTPROVIDER[g]}if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g)!=-1&&f=="cryptojs"){try{this.md=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g].create()}catch(e){throw"setAlgAndProvider hash alg set fail alg="+g+"/"+e}this.updateString=function(h){this.md.update(h)};this.updateHex=function(h){var i=CryptoJS.enc.Hex.parse(h);this.md.update(i)};this.digest=function(){var h=this.md.finalize();return h.toString(CryptoJS.enc.Hex)};this.digestString=function(h){this.updateString(h);return this.digest()};this.digestHex=function(h){this.updateHex(h);return this.digest()}}if(":sha256:".indexOf(g)!=-1&&f=="sjcl"){try{this.md=new sjcl.hash.sha256()}catch(e){throw"setAlgAndProvider hash alg set fail alg="+g+"/"+e}this.updateString=function(h){this.md.update(h)};this.updateHex=function(i){var h=sjcl.codec.hex.toBits(i);this.md.update(h)};this.digest=function(){var h=this.md.finalize();return sjcl.codec.hex.fromBits(h)};this.digestString=function(h){this.updateString(h);return this.digest()};this.digestHex=function(h){this.updateHex(h);return this.digest()}}};this.updateString=function(e){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.updateHex=function(e){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digestString=function(e){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName};this.digestHex=function(e){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName};if(c!==undefined){if(c.alg!==undefined){this.algName=c.alg;if(c.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}this.setAlgAndProvider(this.algName,this.provName)}}};KJUR.crypto.MessageDigest.getCanonicalAlgName=function(a){if(typeof a==="string"){a=a.toLowerCase();a=a.replace(/-/,"")}return a};KJUR.crypto.MessageDigest.getHashLength=function(c){var b=KJUR.crypto.MessageDigest;var a=b.getCanonicalAlgName(c);if(b.HASHLENGTH[a]===undefined){throw"not supported algorithm: "+c}return b.HASHLENGTH[a]};KJUR.crypto.MessageDigest.HASHLENGTH={md5:16,sha1:20,sha224:28,sha256:32,sha384:48,sha512:64,ripemd160:20};KJUR.crypto.Mac=function(d){var f=null;var c=null;var a=null;var e=null;var b=null;this.setAlgAndProvider=function(k,i){k=k.toLowerCase();if(k==null){k="hmacsha1"}k=k.toLowerCase();if(k.substr(0,4)!="hmac"){throw"setAlgAndProvider unsupported HMAC alg: "+k}if(i===undefined){i=KJUR.crypto.Util.DEFAULTPROVIDER[k]}this.algProv=k+"/"+i;var g=k.substr(4);if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(g)!=-1&&i=="cryptojs"){try{var j=KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[g];this.mac=CryptoJS.algo.HMAC.create(j,this.pass)}catch(h){throw"setAlgAndProvider hash alg set fail hashAlg="+g+"/"+h}this.updateString=function(l){this.mac.update(l)};this.updateHex=function(l){var m=CryptoJS.enc.Hex.parse(l);this.mac.update(m)};this.doFinal=function(){var l=this.mac.finalize();return l.toString(CryptoJS.enc.Hex)};this.doFinalString=function(l){this.updateString(l);return this.doFinal()};this.doFinalHex=function(l){this.updateHex(l);return this.doFinal()}}};this.updateString=function(g){throw"updateString(str) not supported for this alg/prov: "+this.algProv};this.updateHex=function(g){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv};this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv};this.doFinalString=function(g){throw"digestString(str) not supported for this alg/prov: "+this.algProv};this.doFinalHex=function(g){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv};this.setPassword=function(h){if(typeof h=="string"){var g=h;if(h.length%2==1||!h.match(/^[0-9A-Fa-f]+$/)){g=rstrtohex(h)}this.pass=CryptoJS.enc.Hex.parse(g);return}if(typeof h!="object"){throw"KJUR.crypto.Mac unsupported password type: "+h}var g=null;if(h.hex!==undefined){if(h.hex.length%2!=0||!h.hex.match(/^[0-9A-Fa-f]+$/)){throw"Mac: wrong hex password: "+h.hex}g=h.hex}if(h.utf8!==undefined){g=utf8tohex(h.utf8)}if(h.rstr!==undefined){g=rstrtohex(h.rstr)}if(h.b64!==undefined){g=b64tohex(h.b64)}if(h.b64u!==undefined){g=b64utohex(h.b64u)}if(g==null){throw"KJUR.crypto.Mac unsupported password type: "+h}this.pass=CryptoJS.enc.Hex.parse(g)};if(d!==undefined){if(d.pass!==undefined){this.setPassword(d.pass)}if(d.alg!==undefined){this.algName=d.alg;if(d.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}this.setAlgAndProvider(this.algName,this.provName)}}};KJUR.crypto.Signature=function(o){var q=null;var n=null;var r=null;var c=null;var l=null;var d=null;var k=null;var h=null;var p=null;var e=null;var b=-1;var g=null;var j=null;var a=null;var i=null;var f=null;this._setAlgNames=function(){var s=this.algName.match(/^(.+)with(.+)$/);if(s){this.mdAlgName=s[1].toLowerCase();this.pubkeyAlgName=s[2].toLowerCase()}};this._zeroPaddingOfSignature=function(x,w){var v="";var t=w/4-x.length;for(var u=0;u<t;u++){v=v+"0"}return v+x};this.setAlgAndProvider=function(u,t){this._setAlgNames();if(t!="cryptojs/jsrsa"){throw"provider not supported: "+t}if(":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(this.mdAlgName)!=-1){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(s){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+s}this.init=function(w,x){var y=null;try{if(x===undefined){y=KEYUTIL.getKey(w)}else{y=KEYUTIL.getKey(w,x)}}catch(v){throw"init failed:"+v}if(y.isPrivate===true){this.prvKey=y;this.state="SIGN"}else{if(y.isPublic===true){this.pubKey=y;this.state="VERIFY"}else{throw"init failed.:"+y}}};this.updateString=function(v){this.md.updateString(v)};this.updateHex=function(v){this.md.updateHex(v)};this.sign=function(){this.sHashHex=this.md.digest();if(this.prvKey===undefined&&this.ecprvhex!==undefined&&this.eccurvename!==undefined&&KJUR.crypto.ECDSA!==undefined){this.prvKey=new KJUR.crypto.ECDSA({curve:this.eccurvename,prv:this.ecprvhex})}if(this.prvKey instanceof RSAKey&&this.pubkeyAlgName==="rsaandmgf1"){this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen)}else{if(this.prvKey instanceof RSAKey&&this.pubkeyAlgName==="rsa"){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName)}else{if(this.prvKey instanceof KJUR.crypto.ECDSA){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}else{if(this.prvKey instanceof KJUR.crypto.DSA){this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}else{throw"Signature: unsupported private key alg: "+this.pubkeyAlgName}}}}return this.hSign};this.signString=function(v){this.updateString(v);return this.sign()};this.signHex=function(v){this.updateHex(v);return this.sign()};this.verify=function(v){this.sHashHex=this.md.digest();if(this.pubKey===undefined&&this.ecpubhex!==undefined&&this.eccurvename!==undefined&&KJUR.crypto.ECDSA!==undefined){this.pubKey=new KJUR.crypto.ECDSA({curve:this.eccurvename,pub:this.ecpubhex})}if(this.pubKey instanceof RSAKey&&this.pubkeyAlgName==="rsaandmgf1"){return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,v,this.mdAlgName,this.pssSaltLen)}else{if(this.pubKey instanceof RSAKey&&this.pubkeyAlgName==="rsa"){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{if(KJUR.crypto.ECDSA!==undefined&&this.pubKey instanceof KJUR.crypto.ECDSA){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{if(KJUR.crypto.DSA!==undefined&&this.pubKey instanceof KJUR.crypto.DSA){return this.pubKey.verifyWithMessageHash(this.sHashHex,v)}else{throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}}}}}};this.init=function(s,t){throw"init(key, pass) not supported for this alg:prov="+this.algProvName};this.updateString=function(s){throw"updateString(str) not supported for this alg:prov="+this.algProvName};this.updateHex=function(s){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName};this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName};this.signString=function(s){throw"digestString(str) not supported for this alg:prov="+this.algProvName};this.signHex=function(s){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName};this.verify=function(s){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName};this.initParams=o;if(o!==undefined){if(o.alg!==undefined){this.algName=o.alg;if(o.prov===undefined){this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]}else{this.provName=o.prov}this.algProvName=this.algName+":"+this.provName;this.setAlgAndProvider(this.algName,this.provName);this._setAlgNames()}if(o.psssaltlen!==undefined){this.pssSaltLen=o.psssaltlen}if(o.prvkeypem!==undefined){if(o.prvkeypas!==undefined){throw"both prvkeypem and prvkeypas parameters not supported"}else{try{var q=KEYUTIL.getKey(o.prvkeypem);this.init(q)}catch(m){throw"fatal error to load pem private key: "+m}}}}};KJUR.crypto.Cipher=function(a){};KJUR.crypto.Cipher.encrypt=function(e,f,d){if(f instanceof RSAKey&&f.isPublic){var c=KJUR.crypto.Cipher.getAlgByKeyAndName(f,d);if(c==="RSA"){return f.encrypt(e)}if(c==="RSAOAEP"){return f.encryptOAEP(e,"sha1")}var b=c.match(/^RSAOAEP(\d+)$/);if(b!==null){return f.encryptOAEP(e,"sha"+b[1])}throw"Cipher.encrypt: unsupported algorithm for RSAKey: "+d}else{throw"Cipher.encrypt: unsupported key or algorithm"}};KJUR.crypto.Cipher.decrypt=function(e,f,d){if(f instanceof RSAKey&&f.isPrivate){var c=KJUR.crypto.Cipher.getAlgByKeyAndName(f,d);if(c==="RSA"){return f.decrypt(e)}if(c==="RSAOAEP"){return f.decryptOAEP(e,"sha1")}var b=c.match(/^RSAOAEP(\d+)$/);if(b!==null){return f.decryptOAEP(e,"sha"+b[1])}throw"Cipher.decrypt: unsupported algorithm for RSAKey: "+d}else{throw"Cipher.decrypt: unsupported key or algorithm"}};KJUR.crypto.Cipher.getAlgByKeyAndName=function(b,a){if(b instanceof RSAKey){if(":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(a)!=-1){return a}if(a===null||a===undefined){return"RSA"}throw"getAlgByKeyAndName: not supported algorithm name for RSAKey: "+a}throw"getAlgByKeyAndName: not supported algorithm name: "+a};KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA",}};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.ECDSA=function(d){var f="secp256r1";var l=null;var b=null;var h=null;var e=BigInteger,g=ECPointFp,j=KJUR.crypto.ECDSA,c=KJUR.crypto.ECParameterDB;var a=new SecureRandom();var k=null;this.type="EC";this.isPrivate=false;this.isPublic=false;function i(t,p,s,o){var n=Math.max(p.bitLength(),o.bitLength());var u=t.add2D(s);var r=t.curve.getInfinity();for(var q=n-1;q>=0;--q){r=r.twice2D();r.z=e.ONE;if(p.testBit(q)){if(o.testBit(q)){r=r.add2D(u)}else{r=r.add2D(t)}}else{if(o.testBit(q)){r=r.add2D(s)}}}return r}this.getBigRandom=function(m){return new e(m.bitLength(),a).mod(m.subtract(e.ONE)).add(e.ONE)};this.setNamedCurve=function(m){this.ecparams=c.getByName(m);this.prvKeyHex=null;this.pubKeyHex=null;this.curveName=m};this.setPrivateKeyHex=function(m){this.isPrivate=true;this.prvKeyHex=m};this.setPublicKeyHex=function(m){this.isPublic=true;this.pubKeyHex=m};this.getPublicKeyXYHex=function(){var o=this.pubKeyHex;if(o.substr(0,2)!=="04"){throw"this method supports uncompressed format(04) only"}var n=this.ecparams.keylen/4;if(o.length!==2+n*2){throw"malformed public key hex length"}var m={};m.x=o.substr(2,n);m.y=o.substr(2+n);return m};this.getShortNISTPCurveName=function(){var m=this.curveName;if(m==="secp256r1"||m==="NIST P-256"||m==="P-256"||m==="prime256v1"){return"P-256"}if(m==="secp384r1"||m==="NIST P-384"||m==="P-384"){return"P-384"}return null};this.generateKeyPairHex=function(){var o=this.ecparams.n;var r=this.getBigRandom(o);var p=this.ecparams.G.multiply(r);var u=p.getX().toBigInteger();var s=p.getY().toBigInteger();var m=this.ecparams.keylen/4;var q=("0000000000"+r.toString(16)).slice(-m);var v=("0000000000"+u.toString(16)).slice(-m);var t=("0000000000"+s.toString(16)).slice(-m);var n="04"+v+t;this.setPrivateKeyHex(q);this.setPublicKeyHex(n);return{ecprvhex:q,ecpubhex:n}};this.signWithMessageHash=function(m){return this.signHex(m,this.prvKeyHex)};this.signHex=function(t,o){var w=new e(o,16);var p=this.ecparams.n;var v=new e(t.substring(0,this.ecparams.keylen/4),16);do{var q=this.getBigRandom(p);var x=this.ecparams.G;var u=x.multiply(q);var m=u.getX().toBigInteger().mod(p)}while(m.compareTo(e.ZERO)<=0);var y=q.modInverse(p).multiply(v.add(w.multiply(m))).mod(p);return j.biRSSigToASN1Sig(m,y)};this.sign=function(q,x){var v=x;var o=this.ecparams.n;var u=e.fromByteArrayUnsigned(q);do{var p=this.getBigRandom(o);var w=this.ecparams.G;var t=w.multiply(p);var m=t.getX().toBigInteger().mod(o)}while(m.compareTo(BigInteger.ZERO)<=0);var y=p.modInverse(o).multiply(u.add(v.multiply(m))).mod(o);return this.serializeSig(m,y)};this.verifyWithMessageHash=function(n,m){return this.verifyHex(n,m,this.pubKeyHex)};this.verifyHex=function(o,t,n){try{var m,w;var p=j.parseSigHex(t);m=p.r;w=p.s;var q=g.decodeFromHex(this.ecparams.curve,n);var u=new e(o.substring(0,this.ecparams.keylen/4),16);return this.verifyRaw(u,m,w,q)}catch(v){return false}};this.verify=function(u,v,n){var p,m;if(Bitcoin.Util.isArray(v)){var t=this.parseSig(v);p=t.r;m=t.s}else{if("object"===typeof v&&v.r&&v.s){p=v.r;m=v.s}else{throw"Invalid value for signature"}}var o;if(n instanceof ECPointFp){o=n}else{if(Bitcoin.Util.isArray(n)){o=g.decodeFrom(this.ecparams.curve,n)}else{throw"Invalid format for pubkey value, must be byte array or ECPointFp"}}var q=e.fromByteArrayUnsigned(u);return this.verifyRaw(q,p,m,o)};this.verifyRaw=function(u,m,A,t){var q=this.ecparams.n;var z=this.ecparams.G;if(m.compareTo(e.ONE)<0||m.compareTo(q)>=0){return false}if(A.compareTo(e.ONE)<0||A.compareTo(q)>=0){return false}var w=A.modInverse(q);var p=u.multiply(w).mod(q);var o=m.multiply(w).mod(q);var x=z.multiply(p).add(t.multiply(o));var y=x.getX().toBigInteger().mod(q);return y.equals(m)};this.serializeSig=function(o,n){var p=o.toByteArraySigned();var m=n.toByteArraySigned();var q=[];q.push(2);q.push(p.length);q=q.concat(p);q.push(2);q.push(m.length);q=q.concat(m);q.unshift(q.length);q.unshift(48);return q};this.parseSig=function(t){var q;if(t[0]!=48){throw new Error("Signature not a valid DERSequence")}q=2;if(t[q]!=2){throw new Error("First element in signature must be a DERInteger")}var p=t.slice(q+2,q+2+t[q+1]);q+=2+t[q+1];if(t[q]!=2){throw new Error("Second element in signature must be a DERInteger")}var m=t.slice(q+2,q+2+t[q+1]);q+=2+t[q+1];var o=e.fromByteArrayUnsigned(p);var n=e.fromByteArrayUnsigned(m);return{r:o,s:n}};this.parseSigCompact=function(q){if(q.length!==65){throw"Signature has the wrong length"}var m=q[0]-27;if(m<0||m>7){throw"Invalid signature type"}var t=this.ecparams.n;var p=e.fromByteArrayUnsigned(q.slice(1,33)).mod(t);var o=e.fromByteArrayUnsigned(q.slice(33,65)).mod(t);return{r:p,s:o,i:m}};this.readPKCS5PrvKeyHex=function(p){var r=ASN1HEX,q=j.getName,t=r.getVbyList;if(r.isASN1HEX(p)===false){throw"not ASN.1 hex string"}var m,o,s;try{m=t(p,0,[2,0],"06");o=t(p,0,[1],"04");try{s=t(p,0,[3,0],"03").substr(2)}catch(n){}}catch(n){throw"malformed PKCS#1/5 plain ECC private key"}this.curveName=q(m);if(this.curveName===undefined){throw"unsupported curve name"}this.setNamedCurve(this.curveName);this.setPublicKeyHex(s);this.setPrivateKeyHex(o);this.isPublic=false};this.readPKCS8PrvKeyHex=function(p){var u=ASN1HEX;var m=KJUR.crypto.ECDSA.getName;var r=u.getVbyList;if(u.isASN1HEX(p)===false){throw"not ASN.1 hex string"}var n,t,q,o;try{n=r(p,0,[1,0],"06");t=r(p,0,[1,1],"06");q=r(p,0,[2,0,1],"04");try{o=r(p,0,[2,0,2,0],"03").substr(2)}catch(s){}}catch(s){throw"malformed PKCS#8 plain ECC private key"}this.curveName=m(t);if(this.curveName===undefined){throw"unsupported curve name"}this.setNamedCurve(this.curveName);this.setPublicKeyHex(o);this.setPrivateKeyHex(q);this.isPublic=false};this.readPKCS8PubKeyHex=function(p){var r=ASN1HEX;var q=KJUR.crypto.ECDSA.getName;var t=r.getVbyList;if(r.isASN1HEX(p)===false){throw"not ASN.1 hex string"}var o,m,s;try{o=t(p,0,[0,0],"06");m=t(p,0,[0,1],"06");s=t(p,0,[1],"03").substr(2)}catch(n){throw"malformed PKCS#8 ECC public key"}this.curveName=q(m);if(this.curveName===null){throw"unsupported curve name"}this.setNamedCurve(this.curveName);this.setPublicKeyHex(s)};this.readCertPubKeyHex=function(o,t){if(t!==5){t=6}var q=ASN1HEX;var p=j.getName;var s=q.getVbyList;if(q.isASN1HEX(o)===false){throw"not ASN.1 hex string"}var m,r;try{m=s(o,0,[0,t,0,1],"06");r=s(o,0,[0,t,1],"03").substr(2)}catch(n){throw"malformed X.509 certificate ECC public key"}this.curveName=p(m);if(this.curveName===null){throw"unsupported curve name"}this.setNamedCurve(this.curveName);this.setPublicKeyHex(r)};if(d!==undefined){if(d.curve!==undefined){this.curveName=d.curve}}if(this.curveName===undefined){this.curveName=f}this.setNamedCurve(this.curveName);if(d!==undefined){if(d.prv!==undefined){this.setPrivateKeyHex(d.prv)}if(d.pub!==undefined){this.setPublicKeyHex(d.pub)}}};KJUR.crypto.ECDSA.parseSigHex=function(a){var b=KJUR.crypto.ECDSA.parseSigHexInHexRS(a);var d=new BigInteger(b.r,16);var c=new BigInteger(b.s,16);return{r:d,s:c}};KJUR.crypto.ECDSA.parseSigHexInHexRS=function(f){var j=ASN1HEX,i=j.getChildIdx,g=j.getV;j.checkStrictDER(f,0);if(f.substr(0,2)!="30"){throw new Error("signature is not a ASN.1 sequence")}var h=i(f,0);if(h.length!=2){throw new Error("signature shall have two elements")}var e=h[0];var d=h[1];if(f.substr(e,2)!="02"){throw new Error("1st item not ASN.1 integer")}if(f.substr(d,2)!="02"){throw new Error("2nd item not ASN.1 integer")}var c=g(f,e);var b=g(f,d);return{r:c,s:b}};KJUR.crypto.ECDSA.asn1SigToConcatSig=function(c){var d=KJUR.crypto.ECDSA.parseSigHexInHexRS(c);var b=d.r;var a=d.s;if(b.substr(0,2)=="00"&&(b.length%32)==2){b=b.substr(2)}if(a.substr(0,2)=="00"&&(a.length%32)==2){a=a.substr(2)}if((b.length%32)==30){b="00"+b}if((a.length%32)==30){a="00"+a}if(b.length%32!=0){throw"unknown ECDSA sig r length error"}if(a.length%32!=0){throw"unknown ECDSA sig s length error"}return b+a};KJUR.crypto.ECDSA.concatSigToASN1Sig=function(a){if((((a.length/2)*8)%(16*8))!=0){throw"unknown ECDSA concatinated r-s sig  length error"}var c=a.substr(0,a.length/2);var b=a.substr(a.length/2);return KJUR.crypto.ECDSA.hexRSSigToASN1Sig(c,b)};KJUR.crypto.ECDSA.hexRSSigToASN1Sig=function(b,a){var d=new BigInteger(b,16);var c=new BigInteger(a,16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(d,c)};KJUR.crypto.ECDSA.biRSSigToASN1Sig=function(f,d){var c=KJUR.asn1;var b=new c.DERInteger({bigint:f});var a=new c.DERInteger({bigint:d});var e=new c.DERSequence({array:[b,a]});return e.getEncodedHex()};KJUR.crypto.ECDSA.getName=function(a){if(a==="2b8104001f"){return"secp192k1"}if(a==="2a8648ce3d030107"){return"secp256r1"}if(a==="2b8104000a"){return"secp256k1"}if(a==="2b81040021"){return"secp224r1"}if(a==="2b81040022"){return"secp384r1"}if("|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(a)!==-1){return"secp256r1"}if("|secp256k1|".indexOf(a)!==-1){return"secp256k1"}if("|secp224r1|NIST P-224|P-224|".indexOf(a)!==-1){return"secp224r1"}if("|secp384r1|NIST P-384|P-384|".indexOf(a)!==-1){return"secp384r1"}return null};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.ECParameterDB=new function(){var b={};var c={};function a(d){return new BigInteger(d,16)}this.getByName=function(e){var d=e;if(typeof c[d]!="undefined"){d=c[e]}if(typeof b[d]!="undefined"){return b[d]}throw"unregistered EC curve name: "+d};this.regist=function(A,l,o,g,m,e,j,f,k,u,d,x){b[A]={};var s=a(o);var z=a(g);var y=a(m);var t=a(e);var w=a(j);var r=new ECCurveFp(s,z,y);var q=r.decodePointHex("04"+f+k);b[A]["name"]=A;b[A]["keylen"]=l;b[A]["curve"]=r;b[A]["G"]=q;b[A]["n"]=t;b[A]["h"]=w;b[A]["oid"]=d;b[A]["info"]=x;for(var v=0;v<u.length;v++){c[u[v]]=A}}};KJUR.crypto.ECParameterDB.regist("secp128r1",128,"FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC","E87579C11079F43DD824993C2CEE5ED3","FFFFFFFE0000000075A30D1B9038A115","1","161FF7528B899B2D0C28607CA52C5B86","CF5AC8395BAFEB13C02DA292DDED7A83",[],"","secp128r1 : SECG curve over a 128 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160k1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73","0","7","0100000000000000000001B8FA16DFAB9ACA16B6B3","1","3B4C382CE37AA192A4019E763036F4F5DD4D7EBB","938CF935318FDCED6BC28286531733C3F03C4FEE",[],"","secp160k1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp160r1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC","1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45","0100000000000000000001F4C8F927AED3CA752257","1","4A96B5688EF573284664698968C38BB913CBFC82","23A628553168947D59DCC912042351377AC5FB32",[],"","secp160r1 : SECG curve over a 160 bit prime field");KJUR.crypto.ECParameterDB.regist("secp192k1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37","0","3","FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D","1","DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D","9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",[]);KJUR.crypto.ECParameterDB.regist("secp192r1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC","64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1","FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831","1","188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012","07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",[]);KJUR.crypto.ECParameterDB.regist("secp224r1",224,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE","B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4","FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D","1","B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21","BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",[]);KJUR.crypto.ECParameterDB.regist("secp256k1",256,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F","0","7","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141","1","79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798","483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",[]);KJUR.crypto.ECParameterDB.regist("secp256r1",256,"FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC","5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B","FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551","1","6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296","4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",["NIST P-256","P-256","prime256v1"]);KJUR.crypto.ECParameterDB.regist("secp384r1",384,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC","B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973","1","AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7","3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",["NIST P-384","P-384"]);KJUR.crypto.ECParameterDB.regist("secp521r1",521,"1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC","051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409","1","C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66","011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",["NIST P-521","P-521"]);
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.crypto=="undefined"||!KJUR.crypto){KJUR.crypto={}}KJUR.crypto.DSA=function(){this.p=null;this.q=null;this.g=null;this.y=null;this.x=null;this.type="DSA";this.isPrivate=false;this.isPublic=false;this.setPrivate=function(d,c,b,e,a){this.isPrivate=true;this.p=d;this.q=c;this.g=b;this.y=e;this.x=a};this.setPrivateHex=function(d,b,f,i,j){var c,a,e,g,h;c=new BigInteger(d,16);a=new BigInteger(b,16);e=new BigInteger(f,16);if(typeof i==="string"&&i.length>1){g=new BigInteger(i,16)}else{g=null}h=new BigInteger(j,16);this.setPrivate(c,a,e,g,h)};this.setPublic=function(c,b,a,d){this.isPublic=true;this.p=c;this.q=b;this.g=a;this.y=d;this.x=null};this.setPublicHex=function(f,e,d,g){var b,a,h,c;b=new BigInteger(f,16);a=new BigInteger(e,16);h=new BigInteger(d,16);c=new BigInteger(g,16);this.setPublic(b,a,h,c)};this.signWithMessageHash=function(d){var c=this.p;var b=this.q;var f=this.g;var i=this.y;var j=this.x;var e=KJUR.crypto.Util.getRandomBigIntegerMinToMax(BigInteger.ONE.add(BigInteger.ONE),b.subtract(BigInteger.ONE));var l=d.substr(0,b.bitLength()/4);var h=new BigInteger(l,16);var a=(f.modPow(e,c)).mod(b);var n=(e.modInverse(b).multiply(h.add(j.multiply(a)))).mod(b);var m=KJUR.asn1.ASN1Util.jsonToASN1HEX({seq:[{"int":{bigint:a}},{"int":{bigint:n}}]});return m};this.verifyWithMessageHash=function(h,f){var d=this.p;var b=this.q;var j=this.g;var l=this.y;var i=this.parseASN1Signature(f);var a=i[0];var t=i[1];var o=h.substr(0,b.bitLength()/4);var k=new BigInteger(o,16);if(BigInteger.ZERO.compareTo(a)>0||a.compareTo(b)>0){throw"invalid DSA signature"}if(BigInteger.ZERO.compareTo(t)>=0||t.compareTo(b)>0){throw"invalid DSA signature"}var m=t.modInverse(b);var e=k.multiply(m).mod(b);var c=a.multiply(m).mod(b);var n=j.modPow(e,d).multiply(l.modPow(c,d)).mod(d).mod(b);return n.compareTo(a)==0};this.parseASN1Signature=function(a){try{var d=new BigInteger(ASN1HEX.getVbyList(a,0,[0],"02"),16);var c=new BigInteger(ASN1HEX.getVbyList(a,0,[1],"02"),16);return[d,c]}catch(b){throw"malformed ASN.1 DSA signature"}};this.readPKCS5PrvKeyHex=function(c){var b,a,f,g,i;var j=ASN1HEX;var d=j.getVbyList;if(j.isASN1HEX(c)===false){throw"not ASN.1 hex string"}try{b=d(c,0,[1],"02");a=d(c,0,[2],"02");f=d(c,0,[3],"02");g=d(c,0,[4],"02");i=d(c,0,[5],"02")}catch(e){console.log("EXCEPTION:"+e);throw"malformed PKCS#1/5 plain DSA private key"}this.setPrivateHex(b,a,f,g,i)};this.readPKCS8PrvKeyHex=function(d){var f,c,b,g;var e=ASN1HEX;var i=e.getVbyList;if(e.isASN1HEX(d)===false){throw"not ASN.1 hex string"}try{f=i(d,0,[1,1,0],"02");c=i(d,0,[1,1,1],"02");b=i(d,0,[1,1,2],"02");g=i(d,0,[2,0],"02")}catch(a){console.log("EXCEPTION:"+a);throw"malformed PKCS#8 plain DSA private key"}this.setPrivateHex(f,c,b,null,g)};this.readPKCS8PubKeyHex=function(d){var f,c,b,g;var e=ASN1HEX;var i=e.getVbyList;if(e.isASN1HEX(d)===false){throw"not ASN.1 hex string"}try{f=i(d,0,[0,1,0],"02");c=i(d,0,[0,1,1],"02");b=i(d,0,[0,1,2],"02");g=i(d,0,[1,0],"02")}catch(a){console.log("EXCEPTION:"+a);throw"malformed PKCS#8 DSA public key"}this.setPublicHex(f,c,b,g)};this.readCertPubKeyHex=function(c,f){if(f!==5){f=6}var b,a,g,i;var j=ASN1HEX;var d=j.getVbyList;if(j.isASN1HEX(c)===false){throw"not ASN.1 hex string"}try{b=d(c,0,[0,f,0,1,0],"02");a=d(c,0,[0,f,0,1,1],"02");g=d(c,0,[0,f,0,1,2],"02");i=d(c,0,[0,f,1,0],"02")}catch(e){console.log("EXCEPTION:"+e);throw"malformed X.509 certificate DSA public key"}this.setPublicHex(b,a,g,i)}};
var KEYUTIL=function(){var d=function(p,r,q){return k(CryptoJS.AES,p,r,q)};var e=function(p,r,q){return k(CryptoJS.TripleDES,p,r,q)};var a=function(p,r,q){return k(CryptoJS.DES,p,r,q)};var k=function(s,x,u,q){var r=CryptoJS.enc.Hex.parse(x);var w=CryptoJS.enc.Hex.parse(u);var p=CryptoJS.enc.Hex.parse(q);var t={};t.key=w;t.iv=p;t.ciphertext=r;var v=s.decrypt(t,w,{iv:p});return CryptoJS.enc.Hex.stringify(v)};var l=function(p,r,q){return g(CryptoJS.AES,p,r,q)};var o=function(p,r,q){return g(CryptoJS.TripleDES,p,r,q)};var f=function(p,r,q){return g(CryptoJS.DES,p,r,q)};var g=function(t,y,v,q){var s=CryptoJS.enc.Hex.parse(y);var x=CryptoJS.enc.Hex.parse(v);var p=CryptoJS.enc.Hex.parse(q);var w=t.encrypt(s,x,{iv:p});var r=CryptoJS.enc.Hex.parse(w.toString());var u=CryptoJS.enc.Base64.stringify(r);return u};var i={"AES-256-CBC":{proc:d,eproc:l,keylen:32,ivlen:16},"AES-192-CBC":{proc:d,eproc:l,keylen:24,ivlen:16},"AES-128-CBC":{proc:d,eproc:l,keylen:16,ivlen:16},"DES-EDE3-CBC":{proc:e,eproc:o,keylen:24,ivlen:8},"DES-CBC":{proc:a,eproc:f,keylen:8,ivlen:8}};var c=function(p){return i[p]["proc"]};var m=function(p){var r=CryptoJS.lib.WordArray.random(p);var q=CryptoJS.enc.Hex.stringify(r);return q};var n=function(v){var w={};var q=v.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)","m"));if(q){w.cipher=q[1];w.ivsalt=q[2]}var p=v.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));if(p){w.type=p[1]}var u=-1;var x=0;if(v.indexOf("\r\n\r\n")!=-1){u=v.indexOf("\r\n\r\n");x=2}if(v.indexOf("\n\n")!=-1){u=v.indexOf("\n\n");x=1}var t=v.indexOf("-----END");if(u!=-1&&t!=-1){var r=v.substring(u+x*2,t-x);r=r.replace(/\s+/g,"");w.data=r}return w};var j=function(q,y,p){var v=p.substring(0,16);var t=CryptoJS.enc.Hex.parse(v);var r=CryptoJS.enc.Utf8.parse(y);var u=i[q]["keylen"]+i[q]["ivlen"];var x="";var w=null;for(;;){var s=CryptoJS.algo.MD5.create();if(w!=null){s.update(w)}s.update(r);s.update(t);w=s.finalize();x=x+CryptoJS.enc.Hex.stringify(w);if(x.length>=u*2){break}}var z={};z.keyhex=x.substr(0,i[q]["keylen"]*2);z.ivhex=x.substr(i[q]["keylen"]*2,i[q]["ivlen"]*2);return z};var b=function(p,v,r,w){var s=CryptoJS.enc.Base64.parse(p);var q=CryptoJS.enc.Hex.stringify(s);var u=i[v]["proc"];var t=u(q,r,w);return t};var h=function(p,s,q,u){var r=i[s]["eproc"];var t=r(p,q,u);return t};return{version:"1.0.0",parsePKCS5PEM:function(p){return n(p)},getKeyAndUnusedIvByPasscodeAndIvsalt:function(q,p,r){return j(q,p,r)},decryptKeyB64:function(p,r,q,s){return b(p,r,q,s)},getDecryptedKeyHex:function(y,x){var q=n(y);var t=q.type;var r=q.cipher;var p=q.ivsalt;var s=q.data;var w=j(r,x,p);var v=w.keyhex;var u=b(s,r,v,p);return u},getEncryptedPKCS5PEMFromPrvKeyHex:function(x,s,A,t,r){var p="";if(typeof t=="undefined"||t==null){t="AES-256-CBC"}if(typeof i[t]=="undefined"){throw"KEYUTIL unsupported algorithm: "+t}if(typeof r=="undefined"||r==null){var v=i[t]["ivlen"];var u=m(v);r=u.toUpperCase()}var z=j(t,A,r);var y=z.keyhex;var w=h(s,t,y,r);var q=w.replace(/(.{64})/g,"$1\r\n");var p="-----BEGIN "+x+" PRIVATE KEY-----\r\n";p+="Proc-Type: 4,ENCRYPTED\r\n";p+="DEK-Info: "+t+","+r+"\r\n";p+="\r\n";p+=q;p+="\r\n-----END "+x+" PRIVATE KEY-----\r\n";return p},parseHexOfEncryptedPKCS8:function(y){var B=ASN1HEX;var z=B.getChildIdx;var w=B.getV;var t={};var r=z(y,0);if(r.length!=2){throw"malformed format: SEQUENCE(0).items != 2: "+r.length}t.ciphertext=w(y,r[1]);var A=z(y,r[0]);if(A.length!=2){throw"malformed format: SEQUENCE(0.0).items != 2: "+A.length}if(w(y,A[0])!="2a864886f70d01050d"){throw"this only supports pkcs5PBES2"}var p=z(y,A[1]);if(A.length!=2){throw"malformed format: SEQUENCE(0.0.1).items != 2: "+p.length}var q=z(y,p[1]);if(q.length!=2){throw"malformed format: SEQUENCE(0.0.1.1).items != 2: "+q.length}if(w(y,q[0])!="2a864886f70d0307"){throw"this only supports TripleDES"}t.encryptionSchemeAlg="TripleDES";t.encryptionSchemeIV=w(y,q[1]);var s=z(y,p[0]);if(s.length!=2){throw"malformed format: SEQUENCE(0.0.1.0).items != 2: "+s.length}if(w(y,s[0])!="2a864886f70d01050c"){throw"this only supports pkcs5PBKDF2"}var x=z(y,s[1]);if(x.length<2){throw"malformed format: SEQUENCE(0.0.1.0.1).items < 2: "+x.length}t.pbkdf2Salt=w(y,x[0]);var u=w(y,x[1]);try{t.pbkdf2Iter=parseInt(u,16)}catch(v){throw"malformed format pbkdf2Iter: "+u}return t},getPBKDF2KeyHexFromParam:function(u,p){var t=CryptoJS.enc.Hex.parse(u.pbkdf2Salt);var q=u.pbkdf2Iter;var s=CryptoJS.PBKDF2(p,t,{keySize:192/32,iterations:q});var r=CryptoJS.enc.Hex.stringify(s);return r},_getPlainPKCS8HexFromEncryptedPKCS8PEM:function(x,y){var r=pemtohex(x,"ENCRYPTED PRIVATE KEY");var p=this.parseHexOfEncryptedPKCS8(r);var u=KEYUTIL.getPBKDF2KeyHexFromParam(p,y);var v={};v.ciphertext=CryptoJS.enc.Hex.parse(p.ciphertext);var t=CryptoJS.enc.Hex.parse(u);var s=CryptoJS.enc.Hex.parse(p.encryptionSchemeIV);var w=CryptoJS.TripleDES.decrypt(v,t,{iv:s});var q=CryptoJS.enc.Hex.stringify(w);return q},getKeyFromEncryptedPKCS8PEM:function(s,q){var p=this._getPlainPKCS8HexFromEncryptedPKCS8PEM(s,q);var r=this.getKeyFromPlainPrivatePKCS8Hex(p);return r},parsePlainPrivatePKCS8Hex:function(s){var v=ASN1HEX;var u=v.getChildIdx;var t=v.getV;var q={};q.algparam=null;if(s.substr(0,2)!="30"){throw"malformed plain PKCS8 private key(code:001)"}var r=u(s,0);if(r.length!=3){throw"malformed plain PKCS8 private key(code:002)"}if(s.substr(r[1],2)!="30"){throw"malformed PKCS8 private key(code:003)"}var p=u(s,r[1]);if(p.length!=2){throw"malformed PKCS8 private key(code:004)"}if(s.substr(p[0],2)!="06"){throw"malformed PKCS8 private key(code:005)"}q.algoid=t(s,p[0]);if(s.substr(p[1],2)=="06"){q.algparam=t(s,p[1])}if(s.substr(r[2],2)!="04"){throw"malformed PKCS8 private key(code:006)"}q.keyidx=v.getVidx(s,r[2]);return q},getKeyFromPlainPrivatePKCS8PEM:function(q){var p=pemtohex(q,"PRIVATE KEY");var r=this.getKeyFromPlainPrivatePKCS8Hex(p);return r},getKeyFromPlainPrivatePKCS8Hex:function(p){var q=this.parsePlainPrivatePKCS8Hex(p);var r;if(q.algoid=="2a864886f70d010101"){r=new RSAKey()}else{if(q.algoid=="2a8648ce380401"){r=new KJUR.crypto.DSA()}else{if(q.algoid=="2a8648ce3d0201"){r=new KJUR.crypto.ECDSA()}else{throw"unsupported private key algorithm"}}}r.readPKCS8PrvKeyHex(p);return r},_getKeyFromPublicPKCS8Hex:function(q){var p;var r=ASN1HEX.getVbyList(q,0,[0,0],"06");if(r==="2a864886f70d010101"){p=new RSAKey()}else{if(r==="2a8648ce380401"){p=new KJUR.crypto.DSA()}else{if(r==="2a8648ce3d0201"){p=new KJUR.crypto.ECDSA()}else{throw"unsupported PKCS#8 public key hex"}}}p.readPKCS8PubKeyHex(q);return p},parsePublicRawRSAKeyHex:function(r){var u=ASN1HEX;var t=u.getChildIdx;var s=u.getV;var p={};if(r.substr(0,2)!="30"){throw"malformed RSA key(code:001)"}var q=t(r,0);if(q.length!=2){throw"malformed RSA key(code:002)"}if(r.substr(q[0],2)!="02"){throw"malformed RSA key(code:003)"}p.n=s(r,q[0]);if(r.substr(q[1],2)!="02"){throw"malformed RSA key(code:004)"}p.e=s(r,q[1]);return p},parsePublicPKCS8Hex:function(t){var v=ASN1HEX;var u=v.getChildIdx;var s=v.getV;var q={};q.algparam=null;var r=u(t,0);if(r.length!=2){throw"outer DERSequence shall have 2 elements: "+r.length}var w=r[0];if(t.substr(w,2)!="30"){throw"malformed PKCS8 public key(code:001)"}var p=u(t,w);if(p.length!=2){throw"malformed PKCS8 public key(code:002)"}if(t.substr(p[0],2)!="06"){throw"malformed PKCS8 public key(code:003)"}q.algoid=s(t,p[0]);if(t.substr(p[1],2)=="06"){q.algparam=s(t,p[1])}else{if(t.substr(p[1],2)=="30"){q.algparam={};q.algparam.p=v.getVbyList(t,p[1],[0],"02");q.algparam.q=v.getVbyList(t,p[1],[1],"02");q.algparam.g=v.getVbyList(t,p[1],[2],"02")}}if(t.substr(r[1],2)!="03"){throw"malformed PKCS8 public key(code:004)"}q.key=s(t,r[1]).substr(2);return q},}}();KEYUTIL.getKey=function(l,k,n){var G=ASN1HEX,L=G.getChildIdx,v=G.getV,d=G.getVbyList,c=KJUR.crypto,i=c.ECDSA,C=c.DSA,w=RSAKey,M=pemtohex,F=KEYUTIL;if(typeof w!="undefined"&&l instanceof w){return l}if(typeof i!="undefined"&&l instanceof i){return l}if(typeof C!="undefined"&&l instanceof C){return l}if(l.curve!==undefined&&l.xy!==undefined&&l.d===undefined){return new i({pub:l.xy,curve:l.curve})}if(l.curve!==undefined&&l.d!==undefined){return new i({prv:l.d,curve:l.curve})}if(l.kty===undefined&&l.n!==undefined&&l.e!==undefined&&l.d===undefined){var P=new w();P.setPublic(l.n,l.e);return P}if(l.kty===undefined&&l.n!==undefined&&l.e!==undefined&&l.d!==undefined&&l.p!==undefined&&l.q!==undefined&&l.dp!==undefined&&l.dq!==undefined&&l.co!==undefined&&l.qi===undefined){var P=new w();P.setPrivateEx(l.n,l.e,l.d,l.p,l.q,l.dp,l.dq,l.co);return P}if(l.kty===undefined&&l.n!==undefined&&l.e!==undefined&&l.d!==undefined&&l.p===undefined){var P=new w();P.setPrivate(l.n,l.e,l.d);return P}if(l.p!==undefined&&l.q!==undefined&&l.g!==undefined&&l.y!==undefined&&l.x===undefined){var P=new C();P.setPublic(l.p,l.q,l.g,l.y);return P}if(l.p!==undefined&&l.q!==undefined&&l.g!==undefined&&l.y!==undefined&&l.x!==undefined){var P=new C();P.setPrivate(l.p,l.q,l.g,l.y,l.x);return P}if(l.kty==="RSA"&&l.n!==undefined&&l.e!==undefined&&l.d===undefined){var P=new w();P.setPublic(b64utohex(l.n),b64utohex(l.e));return P}if(l.kty==="RSA"&&l.n!==undefined&&l.e!==undefined&&l.d!==undefined&&l.p!==undefined&&l.q!==undefined&&l.dp!==undefined&&l.dq!==undefined&&l.qi!==undefined){var P=new w();P.setPrivateEx(b64utohex(l.n),b64utohex(l.e),b64utohex(l.d),b64utohex(l.p),b64utohex(l.q),b64utohex(l.dp),b64utohex(l.dq),b64utohex(l.qi));return P}if(l.kty==="RSA"&&l.n!==undefined&&l.e!==undefined&&l.d!==undefined){var P=new w();P.setPrivate(b64utohex(l.n),b64utohex(l.e),b64utohex(l.d));return P}if(l.kty==="EC"&&l.crv!==undefined&&l.x!==undefined&&l.y!==undefined&&l.d===undefined){var j=new i({curve:l.crv});var t=j.ecparams.keylen/4;var B=("0000000000"+b64utohex(l.x)).slice(-t);var z=("0000000000"+b64utohex(l.y)).slice(-t);var u="04"+B+z;j.setPublicKeyHex(u);return j}if(l.kty==="EC"&&l.crv!==undefined&&l.x!==undefined&&l.y!==undefined&&l.d!==undefined){var j=new i({curve:l.crv});var t=j.ecparams.keylen/4;var B=("0000000000"+b64utohex(l.x)).slice(-t);var z=("0000000000"+b64utohex(l.y)).slice(-t);var u="04"+B+z;var b=("0000000000"+b64utohex(l.d)).slice(-t);j.setPublicKeyHex(u);j.setPrivateKeyHex(b);return j}if(n==="pkcs5prv"){var J=l,G=ASN1HEX,N,P;N=L(J,0);if(N.length===9){P=new w();P.readPKCS5PrvKeyHex(J)}else{if(N.length===6){P=new C();P.readPKCS5PrvKeyHex(J)}else{if(N.length>2&&J.substr(N[1],2)==="04"){P=new i();P.readPKCS5PrvKeyHex(J)}else{throw"unsupported PKCS#1/5 hexadecimal key"}}}return P}if(n==="pkcs8prv"){var P=F.getKeyFromPlainPrivatePKCS8Hex(l);return P}if(n==="pkcs8pub"){return F._getKeyFromPublicPKCS8Hex(l)}if(n==="x509pub"){return X509.getPublicKeyFromCertHex(l)}if(l.indexOf("-END CERTIFICATE-",0)!=-1||l.indexOf("-END X509 CERTIFICATE-",0)!=-1||l.indexOf("-END TRUSTED CERTIFICATE-",0)!=-1){return X509.getPublicKeyFromCertPEM(l)}if(l.indexOf("-END PUBLIC KEY-")!=-1){var O=pemtohex(l,"PUBLIC KEY");return F._getKeyFromPublicPKCS8Hex(O)}if(l.indexOf("-END RSA PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")==-1){var m=M(l,"RSA PRIVATE KEY");return F.getKey(m,null,"pkcs5prv")}if(l.indexOf("-END DSA PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")==-1){var I=M(l,"DSA PRIVATE KEY");var E=d(I,0,[1],"02");var D=d(I,0,[2],"02");var K=d(I,0,[3],"02");var r=d(I,0,[4],"02");var s=d(I,0,[5],"02");var P=new C();P.setPrivate(new BigInteger(E,16),new BigInteger(D,16),new BigInteger(K,16),new BigInteger(r,16),new BigInteger(s,16));return P}if(l.indexOf("-END EC PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")==-1){var m=M(l,"EC PRIVATE KEY");return F.getKey(m,null,"pkcs5prv")}if(l.indexOf("-END PRIVATE KEY-")!=-1){return F.getKeyFromPlainPrivatePKCS8PEM(l)}if(l.indexOf("-END RSA PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")!=-1){var o=F.getDecryptedKeyHex(l,k);var H=new RSAKey();H.readPKCS5PrvKeyHex(o);return H}if(l.indexOf("-END EC PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")!=-1){var I=F.getDecryptedKeyHex(l,k);var P=d(I,0,[1],"04");var f=d(I,0,[2,0],"06");var A=d(I,0,[3,0],"03").substr(2);var e="";if(KJUR.crypto.OID.oidhex2name[f]!==undefined){e=KJUR.crypto.OID.oidhex2name[f]}else{throw"undefined OID(hex) in KJUR.crypto.OID: "+f}var j=new i({curve:e});j.setPublicKeyHex(A);j.setPrivateKeyHex(P);j.isPublic=false;return j}if(l.indexOf("-END DSA PRIVATE KEY-")!=-1&&l.indexOf("4,ENCRYPTED")!=-1){var I=F.getDecryptedKeyHex(l,k);var E=d(I,0,[1],"02");var D=d(I,0,[2],"02");var K=d(I,0,[3],"02");var r=d(I,0,[4],"02");var s=d(I,0,[5],"02");var P=new C();P.setPrivate(new BigInteger(E,16),new BigInteger(D,16),new BigInteger(K,16),new BigInteger(r,16),new BigInteger(s,16));return P}if(l.indexOf("-END ENCRYPTED PRIVATE KEY-")!=-1){return F.getKeyFromEncryptedPKCS8PEM(l,k)}throw"not supported argument"};KEYUTIL.generateKeypair=function(a,c){if(a=="RSA"){var b=c;var h=new RSAKey();h.generate(b,"10001");h.isPrivate=true;h.isPublic=true;var f=new RSAKey();var e=h.n.toString(16);var i=h.e.toString(16);f.setPublic(e,i);f.isPrivate=false;f.isPublic=true;var k={};k.prvKeyObj=h;k.pubKeyObj=f;return k}else{if(a=="EC"){var d=c;var g=new KJUR.crypto.ECDSA({curve:d});var j=g.generateKeyPairHex();var h=new KJUR.crypto.ECDSA({curve:d});h.setPublicKeyHex(j.ecpubhex);h.setPrivateKeyHex(j.ecprvhex);h.isPrivate=true;h.isPublic=false;var f=new KJUR.crypto.ECDSA({curve:d});f.setPublicKeyHex(j.ecpubhex);f.isPrivate=false;f.isPublic=true;var k={};k.prvKeyObj=h;k.pubKeyObj=f;return k}else{throw"unknown algorithm: "+a}}};KEYUTIL.getPEM=function(b,D,y,m,q,j){var F=KJUR,k=F.asn1,z=k.DERObjectIdentifier,f=k.DERInteger,l=k.ASN1Util.newObject,a=k.x509,C=a.SubjectPublicKeyInfo,e=F.crypto,u=e.DSA,r=e.ECDSA,n=RSAKey;function A(s){var G=l({seq:[{"int":0},{"int":{bigint:s.n}},{"int":s.e},{"int":{bigint:s.d}},{"int":{bigint:s.p}},{"int":{bigint:s.q}},{"int":{bigint:s.dmp1}},{"int":{bigint:s.dmq1}},{"int":{bigint:s.coeff}}]});return G}function B(G){var s=l({seq:[{"int":1},{octstr:{hex:G.prvKeyHex}},{tag:["a0",true,{oid:{name:G.curveName}}]},{tag:["a1",true,{bitstr:{hex:"00"+G.pubKeyHex}}]}]});return s}function x(s){var G=l({seq:[{"int":0},{"int":{bigint:s.p}},{"int":{bigint:s.q}},{"int":{bigint:s.g}},{"int":{bigint:s.y}},{"int":{bigint:s.x}}]});return G}if(((n!==undefined&&b instanceof n)||(u!==undefined&&b instanceof u)||(r!==undefined&&b instanceof r))&&b.isPublic==true&&(D===undefined||D=="PKCS8PUB")){var E=new C(b);var w=E.getEncodedHex();return hextopem(w,"PUBLIC KEY")}if(D=="PKCS1PRV"&&n!==undefined&&b instanceof n&&(y===undefined||y==null)&&b.isPrivate==true){var E=A(b);var w=E.getEncodedHex();return hextopem(w,"RSA PRIVATE KEY")}if(D=="PKCS1PRV"&&r!==undefined&&b instanceof r&&(y===undefined||y==null)&&b.isPrivate==true){var i=new z({name:b.curveName});var v=i.getEncodedHex();var h=B(b);var t=h.getEncodedHex();var p="";p+=hextopem(v,"EC PARAMETERS");p+=hextopem(t,"EC PRIVATE KEY");return p}if(D=="PKCS1PRV"&&u!==undefined&&b instanceof u&&(y===undefined||y==null)&&b.isPrivate==true){var E=x(b);var w=E.getEncodedHex();return hextopem(w,"DSA PRIVATE KEY")}if(D=="PKCS5PRV"&&n!==undefined&&b instanceof n&&(y!==undefined&&y!=null)&&b.isPrivate==true){var E=A(b);var w=E.getEncodedHex();if(m===undefined){m="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA",w,y,m,j)}if(D=="PKCS5PRV"&&r!==undefined&&b instanceof r&&(y!==undefined&&y!=null)&&b.isPrivate==true){var E=B(b);var w=E.getEncodedHex();if(m===undefined){m="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("EC",w,y,m,j)}if(D=="PKCS5PRV"&&u!==undefined&&b instanceof u&&(y!==undefined&&y!=null)&&b.isPrivate==true){var E=x(b);var w=E.getEncodedHex();if(m===undefined){m="DES-EDE3-CBC"}return this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA",w,y,m,j)}var o=function(G,s){var I=c(G,s);var H=new l({seq:[{seq:[{oid:{name:"pkcs5PBES2"}},{seq:[{seq:[{oid:{name:"pkcs5PBKDF2"}},{seq:[{octstr:{hex:I.pbkdf2Salt}},{"int":I.pbkdf2Iter}]}]},{seq:[{oid:{name:"des-EDE3-CBC"}},{octstr:{hex:I.encryptionSchemeIV}}]}]}]},{octstr:{hex:I.ciphertext}}]});return H.getEncodedHex()};var c=function(N,O){var H=100;var M=CryptoJS.lib.WordArray.random(8);var L="DES-EDE3-CBC";var s=CryptoJS.lib.WordArray.random(8);var I=CryptoJS.PBKDF2(O,M,{keySize:192/32,iterations:H});var J=CryptoJS.enc.Hex.parse(N);var K=CryptoJS.TripleDES.encrypt(J,I,{iv:s})+"";var G={};G.ciphertext=K;G.pbkdf2Salt=CryptoJS.enc.Hex.stringify(M);G.pbkdf2Iter=H;G.encryptionSchemeAlg=L;G.encryptionSchemeIV=CryptoJS.enc.Hex.stringify(s);return G};if(D=="PKCS8PRV"&&n!=undefined&&b instanceof n&&b.isPrivate==true){var g=A(b);var d=g.getEncodedHex();var E=l({seq:[{"int":0},{seq:[{oid:{name:"rsaEncryption"}},{"null":true}]},{octstr:{hex:d}}]});var w=E.getEncodedHex();if(y===undefined||y==null){return hextopem(w,"PRIVATE KEY")}else{var t=o(w,y);return hextopem(t,"ENCRYPTED PRIVATE KEY")}}if(D=="PKCS8PRV"&&r!==undefined&&b instanceof r&&b.isPrivate==true){var g=new l({seq:[{"int":1},{octstr:{hex:b.prvKeyHex}},{tag:["a1",true,{bitstr:{hex:"00"+b.pubKeyHex}}]}]});var d=g.getEncodedHex();var E=l({seq:[{"int":0},{seq:[{oid:{name:"ecPublicKey"}},{oid:{name:b.curveName}}]},{octstr:{hex:d}}]});var w=E.getEncodedHex();if(y===undefined||y==null){return hextopem(w,"PRIVATE KEY")}else{var t=o(w,y);return hextopem(t,"ENCRYPTED PRIVATE KEY")}}if(D=="PKCS8PRV"&&u!==undefined&&b instanceof u&&b.isPrivate==true){var g=new f({bigint:b.x});var d=g.getEncodedHex();var E=l({seq:[{"int":0},{seq:[{oid:{name:"dsa"}},{seq:[{"int":{bigint:b.p}},{"int":{bigint:b.q}},{"int":{bigint:b.g}}]}]},{octstr:{hex:d}}]});var w=E.getEncodedHex();if(y===undefined||y==null){return hextopem(w,"PRIVATE KEY")}else{var t=o(w,y);return hextopem(t,"ENCRYPTED PRIVATE KEY")}}throw"unsupported object nor format"};KEYUTIL.getKeyFromCSRPEM=function(b){var a=pemtohex(b,"CERTIFICATE REQUEST");var c=KEYUTIL.getKeyFromCSRHex(a);return c};KEYUTIL.getKeyFromCSRHex=function(a){var c=KEYUTIL.parseCSRHex(a);var b=KEYUTIL.getKey(c.p8pubkeyhex,null,"pkcs8pub");return b};KEYUTIL.parseCSRHex=function(d){var i=ASN1HEX;var f=i.getChildIdx;var c=i.getTLV;var b={};var g=d;if(g.substr(0,2)!="30"){throw"malformed CSR(code:001)"}var e=f(g,0);if(e.length<1){throw"malformed CSR(code:002)"}if(g.substr(e[0],2)!="30"){throw"malformed CSR(code:003)"}var a=f(g,e[0]);if(a.length<3){throw"malformed CSR(code:004)"}b.p8pubkeyhex=c(g,a[2]);return b};KEYUTIL.getKeyID=function(f){var c=KEYUTIL;var e=ASN1HEX;if(typeof f==="string"&&f.indexOf("BEGIN ")!=-1){f=c.getKey(f)}var d=pemtohex(c.getPEM(f));var b=e.getIdxbyList(d,0,[1]);var a=e.getV(d,b).substring(2);return KJUR.crypto.Util.hashHex(a,"sha1")};KEYUTIL.getJWKFromKey=function(d){var b={};if(d instanceof RSAKey&&d.isPrivate){b.kty="RSA";b.n=hextob64u(d.n.toString(16));b.e=hextob64u(d.e.toString(16));b.d=hextob64u(d.d.toString(16));b.p=hextob64u(d.p.toString(16));b.q=hextob64u(d.q.toString(16));b.dp=hextob64u(d.dmp1.toString(16));b.dq=hextob64u(d.dmq1.toString(16));b.qi=hextob64u(d.coeff.toString(16));return b}else{if(d instanceof RSAKey&&d.isPublic){b.kty="RSA";b.n=hextob64u(d.n.toString(16));b.e=hextob64u(d.e.toString(16));return b}else{if(d instanceof KJUR.crypto.ECDSA&&d.isPrivate){var a=d.getShortNISTPCurveName();if(a!=="P-256"&&a!=="P-384"){throw"unsupported curve name for JWT: "+a}var c=d.getPublicKeyXYHex();b.kty="EC";b.crv=a;b.x=hextob64u(c.x);b.y=hextob64u(c.y);b.d=hextob64u(d.prvKeyHex);return b}else{if(d instanceof KJUR.crypto.ECDSA&&d.isPublic){var a=d.getShortNISTPCurveName();if(a!=="P-256"&&a!=="P-384"){throw"unsupported curve name for JWT: "+a}var c=d.getPublicKeyXYHex();b.kty="EC";b.crv=a;b.x=hextob64u(c.x);b.y=hextob64u(c.y);return b}}}}throw"not supported key object"};
RSAKey.getPosArrayOfChildrenFromHex=function(a){return ASN1HEX.getChildIdx(a,0)};RSAKey.getHexValueArrayOfChildrenFromHex=function(f){var n=ASN1HEX;var i=n.getV;var k=RSAKey.getPosArrayOfChildrenFromHex(f);var e=i(f,k[0]);var j=i(f,k[1]);var b=i(f,k[2]);var c=i(f,k[3]);var h=i(f,k[4]);var g=i(f,k[5]);var m=i(f,k[6]);var l=i(f,k[7]);var d=i(f,k[8]);var k=new Array();k.push(e,j,b,c,h,g,m,l,d);return k};RSAKey.prototype.readPrivateKeyFromPEMString=function(d){var c=pemtohex(d);var b=RSAKey.getHexValueArrayOfChildrenFromHex(c);this.setPrivateEx(b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])};RSAKey.prototype.readPKCS5PrvKeyHex=function(c){var b=RSAKey.getHexValueArrayOfChildrenFromHex(c);this.setPrivateEx(b[1],b[2],b[3],b[4],b[5],b[6],b[7],b[8])};RSAKey.prototype.readPKCS8PrvKeyHex=function(e){var c,j,l,b,a,f,d,k;var m=ASN1HEX;var g=m.getVbyList;if(m.isASN1HEX(e)===false){throw"not ASN.1 hex string"}try{c=g(e,0,[2,0,1],"02");j=g(e,0,[2,0,2],"02");l=g(e,0,[2,0,3],"02");b=g(e,0,[2,0,4],"02");a=g(e,0,[2,0,5],"02");f=g(e,0,[2,0,6],"02");d=g(e,0,[2,0,7],"02");k=g(e,0,[2,0,8],"02")}catch(i){throw"malformed PKCS#8 plain RSA private key"}this.setPrivateEx(c,j,l,b,a,f,d,k)};RSAKey.prototype.readPKCS5PubKeyHex=function(c){var e=ASN1HEX;var b=e.getV;if(e.isASN1HEX(c)===false){throw"keyHex is not ASN.1 hex string"}var a=e.getChildIdx(c,0);if(a.length!==2||c.substr(a[0],2)!=="02"||c.substr(a[1],2)!=="02"){throw"wrong hex for PKCS#5 public key"}var f=b(c,a[0]);var d=b(c,a[1]);this.setPublic(f,d)};RSAKey.prototype.readPKCS8PubKeyHex=function(b){var c=ASN1HEX;if(c.isASN1HEX(b)===false){throw"not ASN.1 hex string"}if(c.getTLVbyList(b,0,[0,0])!=="06092a864886f70d010101"){throw"not PKCS8 RSA public key"}var a=c.getTLVbyList(b,0,[1,0]);this.readPKCS5PubKeyHex(a)};RSAKey.prototype.readCertPubKeyHex=function(b,d){var a,c;a=new X509();a.readCertHex(b);c=a.getPublicKeyHex();this.readPKCS8PubKeyHex(c)};
var _RE_HEXDECONLY=new RegExp("[^0-9a-f]","gi");function _rsasign_getHexPaddedDigestInfoForString(d,e,a){var b=function(f){return KJUR.crypto.Util.hashString(f,a)};var c=b(d);return KJUR.crypto.Util.getPaddedDigestInfoHex(c,a,e)}function _zeroPaddingOfSignature(e,d){var c="";var a=d/4-e.length;for(var b=0;b<a;b++){c=c+"0"}return c+e}RSAKey.prototype.sign=function(d,a){var b=function(e){return KJUR.crypto.Util.hashString(e,a)};var c=b(d);return this.signWithMessageHash(c,a)};RSAKey.prototype.signWithMessageHash=function(e,c){var f=KJUR.crypto.Util.getPaddedDigestInfoHex(e,c,this.n.bitLength());var b=parseBigInt(f,16);var d=this.doPrivate(b);var a=d.toString(16);return _zeroPaddingOfSignature(a,this.n.bitLength())};function pss_mgf1_str(c,a,e){var b="",d=0;while(b.length<a){b+=hextorstr(e(rstrtohex(c+String.fromCharCode.apply(String,[(d&4278190080)>>24,(d&16711680)>>16,(d&65280)>>8,d&255]))));d+=1}return b}RSAKey.prototype.signPSS=function(e,a,d){var c=function(f){return KJUR.crypto.Util.hashHex(f,a)};var b=c(rstrtohex(e));if(d===undefined){d=-1}return this.signWithMessageHashPSS(b,a,d)};RSAKey.prototype.signWithMessageHashPSS=function(l,a,k){var b=hextorstr(l);var g=b.length;var m=this.n.bitLength()-1;var c=Math.ceil(m/8);var d;var o=function(i){return KJUR.crypto.Util.hashHex(i,a)};if(k===-1||k===undefined){k=g}else{if(k===-2){k=c-g-2}else{if(k<-2){throw"invalid salt length"}}}if(c<(g+k+2)){throw"data too long"}var f="";if(k>0){f=new Array(k);new SecureRandom().nextBytes(f);f=String.fromCharCode.apply(String,f)}var n=hextorstr(o(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+b+f)));var j=[];for(d=0;d<c-k-g-2;d+=1){j[d]=0}var e=String.fromCharCode.apply(String,j)+"\x01"+f;var h=pss_mgf1_str(n,e.length,o);var q=[];for(d=0;d<e.length;d+=1){q[d]=e.charCodeAt(d)^h.charCodeAt(d)}var p=(65280>>(8*c-m))&255;q[0]&=~p;for(d=0;d<g;d++){q.push(n.charCodeAt(d))}q.push(188);return _zeroPaddingOfSignature(this.doPrivate(new BigInteger(q)).toString(16),this.n.bitLength())};function _rsasign_getDecryptSignatureBI(a,d,c){var b=new RSAKey();b.setPublic(d,c);var e=b.doPublic(a);return e}function _rsasign_getHexDigestInfoFromSig(a,c,b){var e=_rsasign_getDecryptSignatureBI(a,c,b);var d=e.toString(16).replace(/^1f+00/,"");return d}function _rsasign_getAlgNameAndHashFromHexDisgestInfo(f){for(var e in KJUR.crypto.Util.DIGESTINFOHEAD){var d=KJUR.crypto.Util.DIGESTINFOHEAD[e];var b=d.length;if(f.substring(0,b)==d){var c=[e,f.substring(b)];return c}}return[]}RSAKey.prototype.verify=function(f,j){j=j.replace(_RE_HEXDECONLY,"");j=j.replace(/[ \n]+/g,"");var b=parseBigInt(j,16);if(b.bitLength()>this.n.bitLength()){return 0}var i=this.doPublic(b);var e=i.toString(16).replace(/^1f+00/,"");var g=_rsasign_getAlgNameAndHashFromHexDisgestInfo(e);if(g.length==0){return false}var d=g[0];var h=g[1];var a=function(k){return KJUR.crypto.Util.hashString(k,d)};var c=a(f);return(h==c)};RSAKey.prototype.verifyWithMessageHash=function(e,a){if(a.length!=Math.ceil(this.n.bitLength()/4)){return false}var b=parseBigInt(a,16);if(b.bitLength()>this.n.bitLength()){return 0}var h=this.doPublic(b);var g=h.toString(16).replace(/^1f+00/,"");var c=_rsasign_getAlgNameAndHashFromHexDisgestInfo(g);if(c.length==0){return false}var d=c[0];var f=c[1];return(f==e)};RSAKey.prototype.verifyPSS=function(c,b,a,f){var e=function(g){return KJUR.crypto.Util.hashHex(g,a)};var d=e(rstrtohex(c));if(f===undefined){f=-1}return this.verifyWithMessageHashPSS(d,b,a,f)};RSAKey.prototype.verifyWithMessageHashPSS=function(f,s,l,c){if(s.length!=Math.ceil(this.n.bitLength()/4)){return false}var k=new BigInteger(s,16);var r=function(i){return KJUR.crypto.Util.hashHex(i,l)};var j=hextorstr(f);var h=j.length;var g=this.n.bitLength()-1;var m=Math.ceil(g/8);var q;if(c===-1||c===undefined){c=h}else{if(c===-2){c=m-h-2}else{if(c<-2){throw"invalid salt length"}}}if(m<(h+c+2)){throw"data too long"}var a=this.doPublic(k).toByteArray();for(q=0;q<a.length;q+=1){a[q]&=255}while(a.length<m){a.unshift(0)}if(a[m-1]!==188){throw"encoded message does not end in 0xbc"}a=String.fromCharCode.apply(String,a);var d=a.substr(0,m-h-1);var e=a.substr(d.length,h);var p=(65280>>(8*m-g))&255;if((d.charCodeAt(0)&p)!==0){throw"bits beyond keysize not zero"}var n=pss_mgf1_str(e,d.length,r);var o=[];for(q=0;q<d.length;q+=1){o[q]=d.charCodeAt(q)^n.charCodeAt(q)}o[0]&=~p;var b=m-h-c-2;for(q=0;q<b;q+=1){if(o[q]!==0){throw"leftmost octets not zero"}}if(o[b]!==1){throw"0x01 marker not found"}return e===hextorstr(r(rstrtohex("\x00\x00\x00\x00\x00\x00\x00\x00"+j+String.fromCharCode.apply(String,o.slice(-c)))))};RSAKey.SALT_LEN_HLEN=-1;RSAKey.SALT_LEN_MAX=-2;RSAKey.SALT_LEN_RECOVER=-2;
function X509(){var k=ASN1HEX,j=k.getChildIdx,h=k.getV,b=k.getTLV,f=k.getVbyList,c=k.getTLVbyList,g=k.getIdxbyList,d=k.getVidx,i=k.oidname,a=X509,e=pemtohex;this.hex=null;this.version=0;this.foffset=0;this.aExtInfo=null;this.getVersion=function(){if(this.hex===null||this.version!==0){return this.version}if(c(this.hex,0,[0,0])!=="a003020102"){this.version=1;this.foffset=-1;return 1}this.version=3;return 3};this.getSerialNumberHex=function(){return f(this.hex,0,[0,1+this.foffset],"02")};this.getSignatureAlgorithmField=function(){return i(f(this.hex,0,[0,2+this.foffset,0],"06"))};this.getIssuerHex=function(){return c(this.hex,0,[0,3+this.foffset],"30")};this.getIssuerString=function(){return a.hex2dn(this.getIssuerHex())};this.getSubjectHex=function(){return c(this.hex,0,[0,5+this.foffset],"30")};this.getSubjectString=function(){return a.hex2dn(this.getSubjectHex())};this.getNotBefore=function(){var l=f(this.hex,0,[0,4+this.foffset,0]);l=l.replace(/(..)/g,"%$1");l=decodeURIComponent(l);return l};this.getNotAfter=function(){var l=f(this.hex,0,[0,4+this.foffset,1]);l=l.replace(/(..)/g,"%$1");l=decodeURIComponent(l);return l};this.getPublicKeyHex=function(){return k.getTLVbyList(this.hex,0,[0,6+this.foffset],"30")};this.getPublicKeyIdx=function(){return g(this.hex,0,[0,6+this.foffset],"30")};this.getPublicKeyContentIdx=function(){var l=this.getPublicKeyIdx();return g(this.hex,l,[1,0],"30")};this.getPublicKey=function(){return KEYUTIL.getKey(this.getPublicKeyHex(),null,"pkcs8pub")};this.getSignatureAlgorithmName=function(){return i(f(this.hex,0,[1,0],"06"))};this.getSignatureValueHex=function(){return f(this.hex,0,[2],"03",true)};this.verifySignature=function(n){var o=this.getSignatureAlgorithmName();var l=this.getSignatureValueHex();var m=c(this.hex,0,[0],"30");var p=new KJUR.crypto.Signature({alg:o});p.init(n);p.updateHex(m);return p.verify(l)};this.parseExt=function(u){var n,l,p;if(u===undefined){p=this.hex;if(this.version!==3){return -1}n=g(p,0,[0,7,0],"30");l=j(p,n)}else{p=pemtohex(u);var q=g(p,0,[0,3,0,0],"06");if(h(p,q)!="2a864886f70d01090e"){this.aExtInfo=new Array();return}n=g(p,0,[0,3,0,1,0],"30");l=j(p,n);this.hex=p}this.aExtInfo=new Array();for(var o=0;o<l.length;o++){var s={};s.critical=false;var r=j(p,l[o]);var m=0;if(r.length===3){s.critical=true;m=1}s.oid=k.hextooidstr(f(p,l[o],[0],"06"));var t=g(p,l[o],[1+m]);s.vidx=d(p,t);this.aExtInfo.push(s)}};this.getExtInfo=function(n){var l=this.aExtInfo;var o=n;if(!n.match(/^[0-9.]+$/)){o=KJUR.asn1.x509.OID.name2oid(n)}if(o===""){return undefined}for(var m=0;m<l.length;m++){if(l[m].oid===o){return l[m]}}return undefined};this.getExtBasicConstraints=function(){var n=this.getExtInfo("basicConstraints");if(n===undefined){return n}var l=h(this.hex,n.vidx);if(l===""){return{}}if(l==="0101ff"){return{cA:true}}if(l.substr(0,8)==="0101ff02"){var o=h(l,6);var m=parseInt(o,16);return{cA:true,pathLen:m}}throw"basicConstraints parse error"};this.getExtKeyUsageBin=function(){var o=this.getExtInfo("keyUsage");if(o===undefined){return""}var m=h(this.hex,o.vidx);if(m.length%2!=0||m.length<=2){throw"malformed key usage value"}var l=parseInt(m.substr(0,2));var n=parseInt(m.substr(2),16).toString(2);return n.substr(0,n.length-l)};this.getExtKeyUsageString=function(){var n=this.getExtKeyUsageBin();var l=new Array();for(var m=0;m<n.length;m++){if(n.substr(m,1)=="1"){l.push(X509.KEYUSAGE_NAME[m])}}return l.join(",")};this.getExtSubjectKeyIdentifier=function(){var l=this.getExtInfo("subjectKeyIdentifier");if(l===undefined){return l}return h(this.hex,l.vidx)};this.getExtAuthorityKeyIdentifier=function(){var p=this.getExtInfo("authorityKeyIdentifier");if(p===undefined){return p}var l={};var o=b(this.hex,p.vidx);var m=j(o,0);for(var n=0;n<m.length;n++){if(o.substr(m[n],2)==="80"){l.kid=h(o,m[n])}}return l};this.getExtExtKeyUsageName=function(){var p=this.getExtInfo("extKeyUsage");if(p===undefined){return p}var l=new Array();var o=b(this.hex,p.vidx);if(o===""){return l}var m=j(o,0);for(var n=0;n<m.length;n++){l.push(i(h(o,m[n])))}return l};this.getExtSubjectAltName=function(){var m=this.getExtSubjectAltName2();var l=new Array();for(var n=0;n<m.length;n++){if(m[n][0]==="DNS"){l.push(m[n][1])}}return l};this.getExtSubjectAltName2=function(){var p,s,r;var q=this.getExtInfo("subjectAltName");if(q===undefined){return q}var l=new Array();var o=b(this.hex,q.vidx);var m=j(o,0);for(var n=0;n<m.length;n++){r=o.substr(m[n],2);p=h(o,m[n]);if(r==="81"){s=hextoutf8(p);l.push(["MAIL",s])}if(r==="82"){s=hextoutf8(p);l.push(["DNS",s])}if(r==="84"){s=X509.hex2dn(p,0);l.push(["DN",s])}if(r==="86"){s=hextoutf8(p);l.push(["URI",s])}if(r==="87"){s=hextoip(p);l.push(["IP",s])}}return l};this.getExtCRLDistributionPointsURI=function(){var q=this.getExtInfo("cRLDistributionPoints");if(q===undefined){return q}var l=new Array();var m=j(this.hex,q.vidx);for(var o=0;o<m.length;o++){try{var r=f(this.hex,m[o],[0,0,0],"86");var p=hextoutf8(r);l.push(p)}catch(n){}}return l};this.getExtAIAInfo=function(){var p=this.getExtInfo("authorityInfoAccess");if(p===undefined){return p}var l={ocsp:[],caissuer:[]};var m=j(this.hex,p.vidx);for(var n=0;n<m.length;n++){var q=f(this.hex,m[n],[0],"06");var o=f(this.hex,m[n],[1],"86");if(q==="2b06010505073001"){l.ocsp.push(hextoutf8(o))}if(q==="2b06010505073002"){l.caissuer.push(hextoutf8(o))}}return l};this.getExtCertificatePolicies=function(){var o=this.getExtInfo("certificatePolicies");if(o===undefined){return o}var l=b(this.hex,o.vidx);var u=[];var s=j(l,0);for(var r=0;r<s.length;r++){var t={};var n=j(l,s[r]);t.id=i(h(l,n[0]));if(n.length===2){var m=j(l,n[1]);for(var q=0;q<m.length;q++){var p=f(l,m[q],[0],"06");if(p==="2b06010505070201"){t.cps=hextoutf8(f(l,m[q],[1]))}else{if(p==="2b06010505070202"){t.unotice=hextoutf8(f(l,m[q],[1,0]))}}}}u.push(t)}return u};this.readCertPEM=function(l){this.readCertHex(e(l))};this.readCertHex=function(l){this.hex=l;this.getVersion();try{g(this.hex,0,[0,7],"a3");this.parseExt()}catch(m){}};this.getInfo=function(){var m=X509;var B,u,z;B="Basic Fields\n";B+="  serial number: "+this.getSerialNumberHex()+"\n";B+="  signature algorithm: "+this.getSignatureAlgorithmField()+"\n";B+="  issuer: "+this.getIssuerString()+"\n";B+="  notBefore: "+this.getNotBefore()+"\n";B+="  notAfter: "+this.getNotAfter()+"\n";B+="  subject: "+this.getSubjectString()+"\n";B+="  subject public key info: \n";u=this.getPublicKey();B+="    key algorithm: "+u.type+"\n";if(u.type==="RSA"){B+="    n="+hextoposhex(u.n.toString(16)).substr(0,16)+"...\n";B+="    e="+hextoposhex(u.e.toString(16))+"\n"}z=this.aExtInfo;if(z!==undefined&&z!==null){B+="X509v3 Extensions:\n";for(var r=0;r<z.length;r++){var n=z[r];var A=KJUR.asn1.x509.OID.oid2name(n.oid);if(A===""){A=n.oid}var x="";if(n.critical===true){x="CRITICAL"}B+="  "+A+" "+x+":\n";if(A==="basicConstraints"){var v=this.getExtBasicConstraints();if(v.cA===undefined){B+="    {}\n"}else{B+="    cA=true";if(v.pathLen!==undefined){B+=", pathLen="+v.pathLen}B+="\n"}}else{if(A==="keyUsage"){B+="    "+this.getExtKeyUsageString()+"\n"}else{if(A==="subjectKeyIdentifier"){B+="    "+this.getExtSubjectKeyIdentifier()+"\n"}else{if(A==="authorityKeyIdentifier"){var l=this.getExtAuthorityKeyIdentifier();if(l.kid!==undefined){B+="    kid="+l.kid+"\n"}}else{if(A==="extKeyUsage"){var w=this.getExtExtKeyUsageName();B+="    "+w.join(", ")+"\n"}else{if(A==="subjectAltName"){var t=this.getExtSubjectAltName2();B+="    "+t+"\n"}else{if(A==="cRLDistributionPoints"){var y=this.getExtCRLDistributionPointsURI();B+="    "+y+"\n"}else{if(A==="authorityInfoAccess"){var p=this.getExtAIAInfo();if(p.ocsp!==undefined){B+="    ocsp: "+p.ocsp.join(",")+"\n"}if(p.caissuer!==undefined){B+="    caissuer: "+p.caissuer.join(",")+"\n"}}else{if(A==="certificatePolicies"){var o=this.getExtCertificatePolicies();for(var q=0;q<o.length;q++){if(o[q].id!==undefined){B+="    policy oid: "+o[q].id+"\n"}if(o[q].cps!==undefined){B+="    cps: "+o[q].cps+"\n"}}}}}}}}}}}}}B+="signature algorithm: "+this.getSignatureAlgorithmName()+"\n";B+="signature: "+this.getSignatureValueHex().substr(0,16)+"...\n";return B}}X509.hex2dn=function(f,b){if(b===undefined){b=0}if(f.substr(b,2)!=="30"){throw"malformed DN"}var c=new Array();var d=ASN1HEX.getChildIdx(f,b);for(var e=0;e<d.length;e++){c.push(X509.hex2rdn(f,d[e]))}c=c.map(function(a){return a.replace("/","\\/")});return"/"+c.join("/")};X509.hex2rdn=function(f,b){if(b===undefined){b=0}if(f.substr(b,2)!=="31"){throw"malformed RDN"}var c=new Array();var d=ASN1HEX.getChildIdx(f,b);for(var e=0;e<d.length;e++){c.push(X509.hex2attrTypeValue(f,d[e]))}c=c.map(function(a){return a.replace("+","\\+")});return c.join("+")};X509.hex2attrTypeValue=function(d,i){var j=ASN1HEX;var h=j.getV;if(i===undefined){i=0}if(d.substr(i,2)!=="30"){throw"malformed attribute type and value"}var g=j.getChildIdx(d,i);if(g.length!==2||d.substr(g[0],2)!=="06"){"malformed attribute type and value"}var b=h(d,g[0]);var f=KJUR.asn1.ASN1Util.oidHexToInt(b);var e=KJUR.asn1.x509.OID.oid2atype(f);var a=h(d,g[1]);var c=hextorstr(a);return e+"="+c};X509.getPublicKeyFromCertHex=function(b){var a=new X509();a.readCertHex(b);return a.getPublicKey()};X509.getPublicKeyFromCertPEM=function(b){var a=new X509();a.readCertPEM(b);return a.getPublicKey()};X509.getPublicKeyInfoPropOfCertPEM=function(c){var e=ASN1HEX;var g=e.getVbyList;var b={};var a,f,d;b.algparam=null;a=new X509();a.readCertPEM(c);f=a.getPublicKeyHex();b.keyhex=g(f,0,[1],"03").substr(2);b.algoid=g(f,0,[0,0],"06");if(b.algoid==="2a8648ce3d0201"){b.algparam=g(f,0,[0,1],"06")}return b};X509.KEYUSAGE_NAME=["digitalSignature","nonRepudiation","keyEncipherment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly","decipherOnly"];
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.jws=="undefined"||!KJUR.jws){KJUR.jws={}}KJUR.jws.JWS=function(){var b=KJUR,a=b.jws.JWS,c=a.isSafeJSONString;this.parseJWS=function(g,j){if((this.parsedJWS!==undefined)&&(j||(this.parsedJWS.sigvalH!==undefined))){return}var i=g.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);if(i==null){throw"JWS signature is not a form of 'Head.Payload.SigValue'."}var k=i[1];var e=i[2];var l=i[3];var n=k+"."+e;this.parsedJWS={};this.parsedJWS.headB64U=k;this.parsedJWS.payloadB64U=e;this.parsedJWS.sigvalB64U=l;this.parsedJWS.si=n;if(!j){var h=b64utohex(l);var f=parseBigInt(h,16);this.parsedJWS.sigvalH=h;this.parsedJWS.sigvalBI=f}var d=b64utoutf8(k);var m=b64utoutf8(e);this.parsedJWS.headS=d;this.parsedJWS.payloadS=m;if(!c(d,this.parsedJWS,"headP")){throw"malformed JSON string for JWS Head: "+d}}};KJUR.jws.JWS.sign=function(j,w,z,A,a){var x=KJUR,n=x.jws,r=n.JWS,h=r.readSafeJSONString,q=r.isSafeJSONString,d=x.crypto,l=d.ECDSA,p=d.Mac,c=d.Signature,u=JSON;var t,k,o;if(typeof w!="string"&&typeof w!="object"){throw"spHeader must be JSON string or object: "+w}if(typeof w=="object"){k=w;t=u.stringify(k)}if(typeof w=="string"){t=w;if(!q(t)){throw"JWS Head is not safe JSON string: "+t}k=h(t)}o=z;if(typeof z=="object"){o=u.stringify(z)}if((j==""||j==null)&&k.alg!==undefined){j=k.alg}if((j!=""&&j!=null)&&k.alg===undefined){k.alg=j;t=u.stringify(k)}if(j!==k.alg){throw"alg and sHeader.alg doesn't match: "+j+"!="+k.alg}var s=null;if(r.jwsalg2sigalg[j]===undefined){throw"unsupported alg name: "+j}else{s=r.jwsalg2sigalg[j]}var e=utf8tob64u(t);var m=utf8tob64u(o);var b=e+"."+m;var y="";if(s.substr(0,4)=="Hmac"){if(A===undefined){throw"mac key shall be specified for HS* alg"}var i=new p({alg:s,prov:"cryptojs",pass:A});i.updateString(b);y=i.doFinal()}else{if(s.indexOf("withECDSA")!=-1){var f=new c({alg:s});f.init(A,a);f.updateString(b);var g=f.sign();y=KJUR.crypto.ECDSA.asn1SigToConcatSig(g)}else{if(s!="none"){var f=new c({alg:s});f.init(A,a);f.updateString(b);y=f.sign()}}}var v=hextob64u(y);return b+"."+v};KJUR.jws.JWS.verify=function(w,B,n){var x=KJUR,q=x.jws,t=q.JWS,i=t.readSafeJSONString,e=x.crypto,p=e.ECDSA,s=e.Mac,d=e.Signature,m;if(typeof RSAKey!==undefined){m=RSAKey}var y=w.split(".");if(y.length!==3){return false}var f=y[0];var r=y[1];var c=f+"."+r;var A=b64utohex(y[2]);var l=i(b64utoutf8(y[0]));var k=null;var z=null;if(l.alg===undefined){throw"algorithm not specified in header"}else{k=l.alg;z=k.substr(0,2)}if(n!=null&&Object.prototype.toString.call(n)==="[object Array]"&&n.length>0){var b=":"+n.join(":")+":";if(b.indexOf(":"+k+":")==-1){throw"algorithm '"+k+"' not accepted in the list"}}if(k!="none"&&B===null){throw"key shall be specified to verify."}if(typeof B=="string"&&B.indexOf("-----BEGIN ")!=-1){B=KEYUTIL.getKey(B)}if(z=="RS"||z=="PS"){if(!(B instanceof m)){throw"key shall be a RSAKey obj for RS* and PS* algs"}}if(z=="ES"){if(!(B instanceof p)){throw"key shall be a ECDSA obj for ES* algs"}}if(k=="none"){}var u=null;if(t.jwsalg2sigalg[l.alg]===undefined){throw"unsupported alg name: "+k}else{u=t.jwsalg2sigalg[k]}if(u=="none"){throw"not supported"}else{if(u.substr(0,4)=="Hmac"){var o=null;if(B===undefined){throw"hexadecimal key shall be specified for HMAC"}var j=new s({alg:u,pass:B});j.updateString(c);o=j.doFinal();return A==o}else{if(u.indexOf("withECDSA")!=-1){var h=null;try{h=p.concatSigToASN1Sig(A)}catch(v){return false}var g=new d({alg:u});g.init(B);g.updateString(c);return g.verify(h)}else{var g=new d({alg:u});g.init(B);g.updateString(c);return g.verify(A)}}}};KJUR.jws.JWS.parse=function(g){var c=g.split(".");var b={};var f,e,d;if(c.length!=2&&c.length!=3){throw"malformed sJWS: wrong number of '.' splitted elements"}f=c[0];e=c[1];if(c.length==3){d=c[2]}b.headerObj=KJUR.jws.JWS.readSafeJSONString(b64utoutf8(f));b.payloadObj=KJUR.jws.JWS.readSafeJSONString(b64utoutf8(e));b.headerPP=JSON.stringify(b.headerObj,null,"  ");if(b.payloadObj==null){b.payloadPP=b64utoutf8(e)}else{b.payloadPP=JSON.stringify(b.payloadObj,null,"  ")}if(d!==undefined){b.sigHex=b64utohex(d)}return b};KJUR.jws.JWS.verifyJWT=function(e,l,r){var d=KJUR,j=d.jws,o=j.JWS,n=o.readSafeJSONString,p=o.inArray,f=o.includedArray;var k=e.split(".");var c=k[0];var i=k[1];var q=c+"."+i;var m=b64utohex(k[2]);var h=n(b64utoutf8(c));var g=n(b64utoutf8(i));if(h.alg===undefined){return false}if(r.alg===undefined){throw"acceptField.alg shall be specified"}if(!p(h.alg,r.alg)){return false}if(g.iss!==undefined&&typeof r.iss==="object"){if(!p(g.iss,r.iss)){return false}}if(g.sub!==undefined&&typeof r.sub==="object"){if(!p(g.sub,r.sub)){return false}}if(g.aud!==undefined&&typeof r.aud==="object"){if(typeof g.aud=="string"){if(!p(g.aud,r.aud)){return false}}else{if(typeof g.aud=="object"){if(!f(g.aud,r.aud)){return false}}}}var b=j.IntDate.getNow();if(r.verifyAt!==undefined&&typeof r.verifyAt==="number"){b=r.verifyAt}if(r.gracePeriod===undefined||typeof r.gracePeriod!=="number"){r.gracePeriod=0}if(g.exp!==undefined&&typeof g.exp=="number"){if(g.exp+r.gracePeriod<b){return false}}if(g.nbf!==undefined&&typeof g.nbf=="number"){if(b<g.nbf-r.gracePeriod){return false}}if(g.iat!==undefined&&typeof g.iat=="number"){if(b<g.iat-r.gracePeriod){return false}}if(g.jti!==undefined&&r.jti!==undefined){if(g.jti!==r.jti){return false}}if(!o.verify(e,l,r.alg)){return false}return true};KJUR.jws.JWS.includedArray=function(b,a){var c=KJUR.jws.JWS.inArray;if(b===null){return false}if(typeof b!=="object"){return false}if(typeof b.length!=="number"){return false}for(var d=0;d<b.length;d++){if(!c(b[d],a)){return false}}return true};KJUR.jws.JWS.inArray=function(d,b){if(b===null){return false}if(typeof b!=="object"){return false}if(typeof b.length!=="number"){return false}for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false};KJUR.jws.JWS.jwsalg2sigalg={HS256:"HmacSHA256",HS384:"HmacSHA384",HS512:"HmacSHA512",RS256:"SHA256withRSA",RS384:"SHA384withRSA",RS512:"SHA512withRSA",ES256:"SHA256withECDSA",ES384:"SHA384withECDSA",PS256:"SHA256withRSAandMGF1",PS384:"SHA384withRSAandMGF1",PS512:"SHA512withRSAandMGF1",none:"none",};KJUR.jws.JWS.isSafeJSONString=function(c,b,d){var e=null;try{e=jsonParse(c);if(typeof e!="object"){return 0}if(e.constructor===Array){return 0}if(b){b[d]=e}return 1}catch(a){return 0}};KJUR.jws.JWS.readSafeJSONString=function(b){var c=null;try{c=jsonParse(b);if(typeof c!="object"){return null}if(c.constructor===Array){return null}return c}catch(a){return null}};KJUR.jws.JWS.getEncodedSignatureValueFromJWS=function(b){var a=b.match(/^[^.]+\.[^.]+\.([^.]+)$/);if(a==null){throw"JWS signature is not a form of 'Head.Payload.SigValue'."}return a[1]};KJUR.jws.JWS.getJWKthumbprint=function(d){if(d.kty!=="RSA"&&d.kty!=="EC"&&d.kty!=="oct"){throw"unsupported algorithm for JWK Thumprint"}var a="{";if(d.kty==="RSA"){if(typeof d.n!="string"||typeof d.e!="string"){throw"wrong n and e value for RSA key"}a+='"e":"'+d.e+'",';a+='"kty":"'+d.kty+'",';a+='"n":"'+d.n+'"}'}else{if(d.kty==="EC"){if(typeof d.crv!="string"||typeof d.x!="string"||typeof d.y!="string"){throw"wrong crv, x and y value for EC key"}a+='"crv":"'+d.crv+'",';a+='"kty":"'+d.kty+'",';a+='"x":"'+d.x+'",';a+='"y":"'+d.y+'"}'}else{if(d.kty==="oct"){if(typeof d.k!="string"){throw"wrong k value for oct(symmetric) key"}a+='"kty":"'+d.kty+'",';a+='"k":"'+d.k+'"}'}}}var b=rstrtohex(a);var c=KJUR.crypto.Util.hashHex(b,"sha256");var e=hextob64u(c);return e};KJUR.jws.IntDate={};KJUR.jws.IntDate.get=function(c){var b=KJUR.jws.IntDate,d=b.getNow,a=b.getZulu;if(c=="now"){return d()}else{if(c=="now + 1hour"){return d()+60*60}else{if(c=="now + 1day"){return d()+60*60*24}else{if(c=="now + 1month"){return d()+60*60*24*30}else{if(c=="now + 1year"){return d()+60*60*24*365}else{if(c.match(/Z$/)){return a(c)}else{if(c.match(/^[0-9]+$/)){return parseInt(c)}}}}}}}throw"unsupported format: "+c};KJUR.jws.IntDate.getZulu=function(a){return zulutosec(a)};KJUR.jws.IntDate.getNow=function(){var a=~~(new Date()/1000);return a};KJUR.jws.IntDate.intDate2UTCString=function(a){var b=new Date(a*1000);return b.toUTCString()};KJUR.jws.IntDate.intDate2Zulu=function(e){var i=new Date(e*1000),h=("0000"+i.getUTCFullYear()).slice(-4),g=("00"+(i.getUTCMonth()+1)).slice(-2),b=("00"+i.getUTCDate()).slice(-2),a=("00"+i.getUTCHours()).slice(-2),c=("00"+i.getUTCMinutes()).slice(-2),f=("00"+i.getUTCSeconds()).slice(-2);return h+g+b+a+c+f+"Z"};
if(typeof KJUR=="undefined"||!KJUR){KJUR={}}if(typeof KJUR.jws=="undefined"||!KJUR.jws){KJUR.jws={}}KJUR.jws.JWSJS=function(){var c=KJUR,b=c.jws,a=b.JWS,d=a.readSafeJSONString;this.aHeader=[];this.sPayload="";this.aSignature=[];this.init=function(){this.aHeader=[];this.sPayload=undefined;this.aSignature=[]};this.initWithJWS=function(f){this.init();var e=f.split(".");if(e.length!=3){throw"malformed input JWS"}this.aHeader.push(e[0]);this.sPayload=e[1];this.aSignature.push(e[2])};this.addSignature=function(e,h,m,k){if(this.sPayload===undefined||this.sPayload===null){throw"there's no JSON-JS signature to add."}var l=this.aHeader.length;if(this.aHeader.length!=this.aSignature.length){throw"aHeader.length != aSignature.length"}try{var f=KJUR.jws.JWS.sign(e,h,this.sPayload,m,k);var j=f.split(".");var n=j[0];var g=j[2];this.aHeader.push(j[0]);this.aSignature.push(j[2])}catch(i){if(this.aHeader.length>l){this.aHeader.pop()}if(this.aSignature.length>l){this.aSignature.pop()}throw"addSignature failed: "+i}};this.verifyAll=function(h){if(this.aHeader.length!==h.length||this.aSignature.length!==h.length){return false}for(var g=0;g<h.length;g++){var f=h[g];if(f.length!==2){return false}var e=this.verifyNth(g,f[0],f[1]);if(e===false){return false}}return true};this.verifyNth=function(f,j,g){if(this.aHeader.length<=f||this.aSignature.length<=f){return false}var h=this.aHeader[f];var k=this.aSignature[f];var l=h+"."+this.sPayload+"."+k;var e=false;try{e=a.verify(l,j,g)}catch(i){return false}return e};this.readJWSJS=function(g){if(typeof g==="string"){var f=d(g);if(f==null){throw"argument is not safe JSON object string"}this.aHeader=f.headers;this.sPayload=f.payload;this.aSignature=f.signatures}else{try{if(g.headers.length>0){this.aHeader=g.headers}else{throw"malformed header"}if(typeof g.payload==="string"){this.sPayload=g.payload}else{throw"malformed signatures"}if(g.signatures.length>0){this.aSignature=g.signatures}else{throw"malformed signatures"}}catch(e){throw"malformed JWS-JS JSON object: "+e}}};this.getJSON=function(){return{headers:this.aHeader,payload:this.sPayload,signatures:this.aSignature}};this.isEmpty=function(){if(this.aHeader.length==0){return 1}return 0}};
} catch(e){ console.log(e) } }catch(e){console.log(e);}

if(!utag_condload){try{ try{
// Version 1.2.1
// Environment Variables
window.digitalData = window.digitalData || {};
window.digitalData.environmentVariables = window.digitalData.environmentVariables || {};
window.digitalData.environmentVariables.env = window.bactm_envSelector || 'prod';
window.digitalData.environmentVariables.glassboxProfiles = {
  credit_cards: {
    domRecordEnabled: true,
    ajaxRecordResponseBody: "uriMatches(\S*/apply-now-services/credit-cards/rest/icai-confirmation/v1/init-data|\S*/apply-now-services/credit-cards/rest/icao-consumer-confirmation/v1/init-data|\S*/apply-now-services/credit-cards/rest/consumer-confirmation/v1/init-data)",
    maskWhitelistValueById: [
      "oid",
      "customerAddressCity",
      "customerAddressState",
      "customerAddressInput"
    ],
    domBlacklistMaskContentById: [
      "contactDetails",
      "personalInfo",
      "income"
    ],
    domBlacklistMaskContentByClass: [
      "reviewEditSection--identity",
      "reviewEditSection--info",
      "reviewEditSection--income",
      "reviewEditSection--additional",
      "chat__message"
    ],
    captureGlobalObjects: [
      "digitalData.user.name.first",
      "digitalData.user.name.last",
      "cm.campaignId",
      "cm.gc",
      "cm.creditProductName",
      "cm.orderID",
      "digitalData.product.0.productInfo.productName",
      "digitalData.user.online_id",
      "digitalData.environmentVariables.env",
      "digitalData.cart.attributes.applicationId"
    ]
  }
};


// Vtim Configurations
window.vtimConfigs = window.vtimConfigs || {}
window.vtimConfigs.oneTrust = {};
window.vtimConfigs.oneTrust.oneTrustDomainConfig = [
  {
    domain: "https://about.bankofamerica.com",
    domain_id: "c8ce66dd-de59-4db7-bfe9-391cec77a89e",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://admin.applyonlinenow.com",
    domain_id: "0fedbb0b-cda5-44d3-bd08-8efc72c81e0c",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://admin.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://advisor.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://ah-ic.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://api.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://auth.privatebank.bankofamerica.com",
    domain_id: "0191fc12-4e25-7343-a4d6-d20a69847232",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://bactravelcenter.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://baml.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com",
    domain_id: "4fb6b66c-015b-4e57-ad18-9852b4db9a56",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://business.bankofamerica.com",
    domain_id: "83a17500-74ff-49e0-8824-f56ffc1285d9",
    sri_hash: "sha384-TKdmlzVmoD70HzftTw4WtOzIBL5mNx8mXSRzEvwrWjpIJ7FZ/EuX758yMDWXtRUN"
  },
  {
    domain: "https://business.bofa.com",
    domain_id: "ec6218f2-91f4-4a5c-8d9c-3aa3205355c7",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://businesscards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://campus.bankofamerica.com",
    domain_id: "6c8fa49f-85fa-4302-a86b-4421dca23b11",
    sri_hash: "sha384-Pm7zkzl1ccyaaPNigM8OuqoiW4wgQzmDDOvUVEsF9klxpQLcDaF5ffF1oeoePXsC"
  },
  {
    domain: "https://card.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://cardoffer.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://careers.bankofamerica.com",
    domain_id: "248fa229-5274-4779-bb37-7749fce8e4f2",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://cashback.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://connectedbusinessapps.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://consolejc.olint.services.fs.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://consumersales.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://de.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://ees.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://employeeinfo.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://es-locators.bankofamerica.com",
    domain_id: "1a9bd132-777a-4ed8-ab24-e63f2dbfe971",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://es.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://fa.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://foreclosures.bankofamerica.com",
    domain_id: "018f827d-a902-7775-b289-438ce89ec8aa",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://fr-ca.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://fr.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://fsa.merrill.com",
    domain_id: "34791c58-9c6f-49e5-8911-16fadc3a5e3d",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://healthaccounts.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://homeloanhelp.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://homeloans.bankofamerica.com",
    domain_id: "018df666-052c-789a-8c6b-6b16020ced95",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://homevaluerealestatecenter.bankofamerica.com",
    domain_id: "018f827f-49ac-75dc-8c2e-38e6565de68d",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://images.em.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://info.bankofamerica.com",
    domain_id: "018e624f-9807-760f-941f-639b6059c782",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://institute.bankofamerica.com",
    domain_id: "07904641-0a05-43c2-9d44-c3a31fefcac4",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://interviews.bankofamerica.com",
    domain_id: "d0fd1ce6-a909-4e85-aebb-0584bada3442",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://interviewscheduler.bankofamerica.com",
    domain_id: "267a626d-2568-4f7e-a454-7c96374e372c",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://investor.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://it.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://ja.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://loans.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://local.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://locators.bankofamerica.com",
    domain_id: "1a9bd132-777a-4ed8-ab24-e63f2dbfe971",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://m.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://m.mybenefits.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://meet.bofa.com",
    domain_id: "646cf0b0-b208-4385-a62c-873d6ebaf7d1",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://merchanthelp.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://merrillplus.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://message.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://mobile.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://mortgage.bankofamerica.com",
    domain_id: "018e1a99-4fe7-78d5-848e-601dfceb4ed9",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://mservice-helix.ecnp.bankofamerica.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://mservice.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://mtravelcenter.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://mybenefits.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://myfinancialpicturepfm.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://myfinancialpicturepfm.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://myfinancialpicturepfm.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://myfinancialpicturepfm.privatebank.bankofamerica.com",
    domain_id: "0191fc13-5364-79cc-b7fa-539cdee1a382",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://mynewcard2.bankofamerica.com",
    domain_id: "018e8642-19ae-71bc-9b34-fc2bc0fb5cff",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://newsroom-cont.bankofamerica.com",
    domain_id: "95b7d404-c383-4e05-8729-0ea64ec736e8",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://newsroom-prod.bankofamerica.com",
    domain_id: "95b7d404-c383-4e05-8729-0ea64ec736e8",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://newsroom.bankofamerica.com",
    domain_id: "95b7d404-c383-4e05-8729-0ea64ec736e8",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://nl.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://nonprofitcards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://oaui.fs.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://olui2.fs.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://optionnavigator.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://preferences.em.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://private.bankofamerica.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://privatebank.bankofamerica.com",
    domain_id: "73405725-4576-448f-a75e-e02cd268f3a7",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://promo.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://promotions.bankofamerica.com",
    domain_id: "6ba00e9c-679a-491c-bd2d-7c496f18a053",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://prv.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://pt-br.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://pub3.ims.bankofamerica.com",
    domain_id: "018e1a99-4fe7-78d5-848e-601dfceb4ed9",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://pwa.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://realestatecenter.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://rewards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://rg.ml.com",
    domain_id: "efeb262a-bf37-4f49-a5e7-dd1cfcc0a560",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://rm.bofaml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://sbbankers.bankofamerica.com",
    domain_id: "018e1a99-4fe7-78d5-848e-601dfceb4ed9",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://secure-realestatecenter.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://secure.bankofamerica.com",
    domain_id: "a3b282c7-7ead-4ff7-b493-7f480154a61d",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://secure.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://secure.fs.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://secure.privatebank.bankofamerica.com",
    domain_id: "0191fc13-a4d9-76e2-b3c8-768a5ca57497",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://signaturerewards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://transfers.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://utility.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://ux.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://workplaceinsights.bofa.com",
    domain_id: "430ffadd-ae1f-4efa-b874-5a5152ddd7fa",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://www.accesscard.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.accesscards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.acfr.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.admin.applyonlinenow.com",
    domain_id: "0fedbb0b-cda5-44d3-bd08-8efc72c81e0c",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://www.admin.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.applyonlinenow.com",
    domain_id: "0fedbb0b-cda5-44d3-bd08-8efc72c81e0c",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://www.bankofamerica.com",
    domain_id: "72e99fdc-3ef1-452a-9b02-e35228fa4504",
    sri_hash: "sha384-Y+SPMEuwGBGGJUZ+oAkCnnc+MNmQMaCsL8KYjBfFfYXqvO/cgpjnm059t8U5rOEj"
  },
  {
    domain: "https://www.bankofamericasponsorships.com",
    domain_id: "018eed64-0516-7f7b-a0f7-58b6f076f353",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.bofaevents.com",
    domain_id: "fbeb20ce-eb85-4bef-abd6-a2f4451969e8",
    sri_hash: "sha384-5aZY+v7gya8Q12uGYtFytxyFyFHfOLRHMCZuLs1NR/nvFL3fCe73NYBwcwQN9lQQ"
  },
  {
    domain: "https://www.businesscards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.card.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.cardoffer.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.cashback.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.fa.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.local.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.merrill.com",
    domain_id: "34791c58-9c6f-49e5-8911-16fadc3a5e3d",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.merrilledge.com",
    domain_id: "3b43dd9d-6dc2-44f8-8580-3b99ce45da4b",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.merrillplus.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.mybenefits.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.mymerrill.com",
    domain_id: "4255fd05-0a6a-431c-bba5-e8221a5e4a97",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.nonprofitcards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.optionnavigator.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.pbig.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.privatebank.bankofamerica.com",
    domain_id: "73405725-4576-448f-a75e-e02cd268f3a7",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  },
  {
    domain: "https://www.pwa.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.rewards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.rm.bofaml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.secure.fs.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://www.signaturerewards.ml.com",
    domain_id: "96631894-4403-42bc-80fa-836d9d4816e8",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://zh-cn.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  },
  {
    domain: "https://zh.benefits.ml.com",
    domain_id: "c2a2ccb7-b9b9-498c-a6ea-43084c1b5aa9",
    sri_hash: "sha384-WdyhFFr7oWuM5vJ5ZyRb4sg22dFdF47qsgvMi85F49epbSxRSpCNU4KRmu0D3J3g"
  }
];
window.vtimConfigs.oneTrust.blockedList = [
  "https://olui2.fs.ml.com/MDOptionsProductCenterUI/OptionsScreener.aspx",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=1073",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=20550",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=20556",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11075",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11066",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11017",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11073",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11015",
  "https://www.benefits.ml.com/Core/Frame/ContentHostV2?MenuID=11067"
];
window.vtimConfigs.oneTrust.CAADCAPages = [
  {
    domain: "https://about.bankofamerica.com/en/making-an-impact/student-leaders",
    domain_id: "018ebe30-590b-77c2-b94e-870f8b265970",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://about.bankofamerica.com/en/making-an-impact/workforce-development-programs",
    domain_id: "018ebe31-3081-7841-a201-377cef9f3278",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/auto/first-car-for-teenager",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/college/how-to-get-a-job-after-college",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/college/terms-to-know-when-taking-out-student-loans",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/financial-literacy-for-students",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/personal-banking/money-management-for-teens",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/privacy-security/how-to-spot-common-scams-for-students",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/managing-your-first-debit-card",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/saving-money-as-a-teenager",
    domain_id: "018fcab7-fca6-7a6b-9e80-9d9100f4e892",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/auto/first-car-for-teenager",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/college/how-to-get-a-job-after-college",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/college/terms-to-know-when-taking-out-student-loans",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/financial-literacy-for-students",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/personal-banking/money-management-for-teens",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/privacy-security/how-to-spot-common-scams-for-students",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/saving-budgeting/managing-your-first-debit-card",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://bettermoneyhabits.bankofamerica.com/es/saving-budgeting/saving-money-as-a-teenager",
    domain_id: "018fcaba-14b8-7503-9249-36c886934445",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/banking-basics",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/credit-borrowing",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/products-services",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/products-services/banking-accounts",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/products-services/safebalance",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/en/student-banking/spending-savings",
    domain_id: "019151c6-54bc-7df2-a709-739356730b74",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/banking-basics",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/credit-borrowing",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/products-services",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/products-services/banking-accounts",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/products-services/safebalance",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://info.bankofamerica.com/es/student-banking/spending-savings",
    domain_id: "019151c6-f005-7655-b932-599a0a12ccf5",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/bankingbasics",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/bankingbasics/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/credit-borrowing",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/credit-borrowing/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/products-services",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/products-services/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/products-services/safebalance",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/products-services/safebalance/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/spending-savings",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://promotions.bankofamerica.com/student-banking/spending-savings/es",
    domain_id: "0191290e-8c51-7fbc-ab5c-aec0bfc5f17f",
    sri_hash: "sha384-vqdawTGHVvfy6X2odtohYvA8h0zy2Y2P8De11ynLACwOBOkbrzPq5vSatQozIJo+"
  },
  {
    domain: "https://www.bankofamerica.com/deposits/student-banking/checking",
    domain_id: "6ba00e9c-679a-491c-bd2d-7c496f18a053",
    sri_hash: "sha384-oiKCupO9/XgKxo0VrdSi6S5Gx7BZbpwjO/ZHBhEk5vIQF04voIHg99dR/y5HNXZ3"
  }
];
window.vtimConfigs.oneTrust.OneTrustPageSpecificConfig = [];

} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/**
 * version 3.0.2
 * @module extensions/preloader/scripts/onetrustCcpa
 * @author adrienne.rice@bofa.com
 * @author luis.perezrivas@bofa.com
 */

(() => {
  // do not load one trust in chat pages
  if(window.location.href.includes('/chat/')) return
  const style = document.createElement('style');
  style.setAttribute('id', 'onetrust-style');
  style.setAttribute('nonce', 'onetrust-style');
  try {
    document.head.appendChild(style);
  } catch {
    console.log('Could not create style element: ', e);
  }
  
  const oneTrustDomains = window.vtimConfigs?.oneTrust?.oneTrustDomainConfig ?? [];
  const blockedDomains = window.vtimConfigs?.oneTrust?.blockedList ?? [];
  const oneTrustPages = window.vtimConfigs?.oneTrust?.OneTrustPageSpecificConfig ?? [];
  const CAADCAPages = window.vtimConfigs?.oneTrust?.CAADCAPages ?? [];

  function getCookie(name) {
    const cookies = document.cookie;
    const parts = cookies.split(name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift().split('|').shift();
    return false;
  }

  const doesPFlagExist = !!getCookie('privacyFlag');

  /** privacyFlag for CAADCA support
   * privacyFlag = 000000 (adult)
   * privacyFlag = 100000 (minor)
   */
  window.isMinor = ( ()=> { 
    if (doesPFlagExist) {
      return parseInt(getCookie('privacyFlag')[0]);
    }
  })();

 // constructing clean url to compare against caadca pages array
 const isCAADCAPage = ( ()=> {
  const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
  return CAADCAPages.filter(item => cleanUrl === item.domain)
})();

  window.inScope = Boolean(isCAADCAPage.length > 0);

  let privacyId = (() => {
    const mmid = getCookie('MMID');
    if (mmid) {
      return mmid;
    } else {
      return null;
    }
  })();
  
  if (privacyId && window.KJUR.jws) {
    try {
      let jwtHeader = {alg: 'HS256', typ: 'JWT', kid: 1110 };
      let jwtPayload = {};
      let tNow = KJUR.jws.IntDate.get('now');
      let tEnd = KJUR.jws.IntDate.get('now + 1day'); 
      let tPubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQClEFB3wpgL+dr9Cm38jf3MSvleTdGN6pNBltb/kNTD79qZGbK58iEN2ktkHY0/gCbkkUM0qGV+0AGKz7KWdmUt5JHa5q36R9h+Z+5Bn1QQf92m29wCl0nBiu8m9frbvFVTsQlMU08KNJ1b/EHMSPFPtIPOJq17Y+/NNi7kb/HBxwIDAQAB';
      jwtPayload.sub = privacyId;
      jwtPayload.iat = tNow;
      jwtPayload.exp = tEnd;
      let headerString = JSON.stringify(jwtHeader);
      let payloadString = JSON.stringify(jwtPayload);
      let sJWT = KJUR.jws.JWS.sign('HS256', headerString, payloadString, tPubKey);
      window.OneTrust = {
        dataSubjectParams: {
          id: privacyId,
          isAnonymous: false,
          token: sJWT
        }
      };
    } catch(e){
      console.log(e);
    }
  }
  const loadOtOnDomain = () => { 
    try {
        const matchingDomain = oneTrustDomains?.map((domainConfig) => domainConfig.domain).includes("https://" + window.location.host)
                          || bactm_envSelector === "notprod";
        const willLoadOt = (matchingDomain && !blockedDomains.includes(window.location.host) && !blockedDomains.includes(window.location.href)); 
        window.otEnabled = willLoadOt;
        return willLoadOt;
      } catch (e){
        console.log(e)
      }
    }

  // check to see if OneTrust footer is present
  const footerPresent = (Array.from(document.getElementsByClassName('ot-sdk-show-settings')).length > 0)
    
  // if not present wait for Global Tenants(gt) to publish event
  if (!footerPresent) {
    document.addEventListener(
      "gt-footer-v6-loaded",
      () => {
        if (window.OneTrust?.initializeCookiePolicyHtml) OneTrust.initializeCookiePolicyHtml();
        if (window.bactm & window?.bactm?.rescanDOM) bactm.rescanDOM();
      },
      false
    );

    // if OneTrust footer is on non-gt page, wait 5 seconds and init just in case
    setTimeout(() => {
      if (window.OneTrust?.initializeCookiePolicyHtml) OneTrust.initializeCookiePolicyHtml();
    }, 5000)
  };
  
  const determineDomain = () => {
    try {
      let filteredDomain = [];
      let filteredPage = [];
        filteredPage = oneTrustPages?.filter((page) => (window.location.origin + window.location.pathname).includes(page.domain));
      
        // return filtered page if found. If not, return match from domain list BAU.
        filteredDomain = filteredPage.length > 0 ? filteredPage : (oneTrustDomains
          ?.filter((domain) => (window.location.origin + window.location.pathname)
          .includes(domain.domain)));
          
          // if multiple hits, take the longest one that matches, this will be the most specific one.
        if (filteredDomain.length > 0) filteredDomain = [filteredDomain.reduce((a, b) => {return a.length > b.length ? a : b;})]
      

      const otDomain = filteredDomain?.length > 0 
        ? filteredDomain
        : window.bactm_envSelector === "notprod"
        ? [oneTrustDomains[0]]
        : filteredDomain;

     if (otDomain?.length === 1) {
       return {
         OT_KEY: otDomain[0].domain_id,
         OT_HASH: otDomain[0].sri_hash,
         myNonce: 'nonce-64cbb6d74480ebbb919a7a7486752796c41a33359bb7575806718f279b01e8cf'
       };
     } else {
      if (bactm_envSelector === "notprod"){
        console.log('OneTrust unable to load.')
        console.log('Something went wrong or domain not in list. This Domain is: ', window.location.host)
      }
      return {};
     }
    } catch (e){
      console.log(e);
    }
  }; 
  
  // event listener for potential CSP Violations
  document.addEventListener("securitypolicyviolation", (e) => { 
    if (e.violatedDirective === "script-src-elem" && e.blockedURI.includes("cdn.cookielaw.org")) 
      console.log("***************************OneTrust CSP Error******************************\n\nOneTrust is supposed to load on this page, but the Content-Security-Policy header is blocking it. Please include cdn.cookielaw.org in your script-src Content-Security-Policy config. \n \n***************************OneTrust CSP Error******************************"); 
    }
  );
  
  let { OT_KEY, OT_HASH, myNonce } = determineDomain();
   
  if (loadOtOnDomain()) {
    // OneTrust Script
    let otLoader = document.createElement('script');
    otLoader.setAttribute('type','text/javascript')
    otLoader.setAttribute('charset','UTF-8')

  
    /** E-Privacy/One Trust logic. 
      tealium: set window.isMinor.
         if true (is a minor), loads OT template with Always Inactive (CADCA will not be present)
         if false (not a minor), loads OT template w/ toggle visible and enabled (CADCA will be present)

      tealium: if !privacyFlag, we don't know how old you are. We need to read inScope variable
         if (inScope), load OT template w/ age gate
         if (!inScope) load OT template w/ toggle visible and enabled (CADCA will be present)
      }
   */

    // if array is empty defaults to false
    const caadcaConfig = isCAADCAPage.length > 0 && isCAADCAPage[0];

    if (!doesPFlagExist && caadcaConfig) {
        otLoader.setAttribute('data-domain-script', caadcaConfig.domain_id )
        otLoader.setAttribute('integrity', caadcaConfig.sri_hash )
        otLoader.setAttribute('src','https://cdn.cookielaw.org/consent/' + caadcaConfig.domain_id + '/otSDKStub.js')
    } else {
      otLoader.setAttribute('data-domain-script', OT_KEY )
      otLoader.setAttribute('integrity', OT_HASH )
      otLoader.setAttribute('src','https://cdn.cookielaw.org/consent/' + OT_KEY + '/otSDKStub.js')
    }

    otLoader.setAttribute('data-document-language','true')
    otLoader.setAttribute('crossorigin','anonymous')
    // Following 3 defined at top of script. Logic determines which configs to use based on domain.

    otLoader.setAttribute('nonce',myNonce)
    otLoader.setAttribute('data-ostdk', 'VTIM');
  
    try {
      document.head.appendChild(otLoader);
    } catch (error) {
      console.error("Error loading OneTrust Loader" , error);
    }
  
    // OptanonWrapper script -- this is the logic which runs after OneTrust interaction.
    let otWrapper = document.createElement('script');
    otWrapper.setAttribute('function','OptanonWrapper()')
    otWrapper.setAttribute('nonce',myNonce)
    
    try {
      // Append loader to page.
      document.head.appendChild(otWrapper);
    } catch (error) {
      console.error("Error loading OneTrust Wrapper", error);
    }
  }
  
  })();
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
  /** @license Copyright 2016 Bank of America, N.A. All rights reserved. */

/**
 * @fileoverview Bank of America IBM Digital Analytics data collection library.
 *
 * @requires window.digitalData
 * @requires eluminate.js
 * @requires cmdatatagutils.js
 *
 * This library is used to manage core aspects of the digitalData object and to capture
 * digital analytics events and send them to Coremetrics. The primary events to capture
 * are pageview, manual link clicks, custom errors, and application conversion events.
 *
 * This library can also be used to maintain an accurate history of the current pageID
 * for single page application via the digitalData.page.attributes.pageIDHistory array.
 *
 * Example #1:
 * Pageview on the default pageInfo array object.
 *
 *      bactm.pageview();
 *
 * Example #2:
 * Pageview on pageInfo object found at array index 5, passing in additonal segments
 * and selecting to utilize digitalData.page.category.addlCategory as the category.
 *
 *      bactm.pageview(5, { segments: ['olbc_N', 'st_NC'], categoryType: 'additional' });
 *
 * Example #3:
 * Application pageview on pageInfo object found at array index 2.
 *
 *      bactm.pageview(2, { isApp: true });
 *
 * Example #4:
 * Pageview for pageInfo object that has pageID matching: 'this_is:my:PageID'
 *
 *      bactm.pageview('this_is:my:PageID');
 *              OR
 *      bactm.pageview('this_is:my:PageID', { lookupType: 'pageID' });
 *
 * Example #5:
 * Pageview for pageInfo object that matches the pageID found in the
 * utag_data.Dynamic_PageView_Element Tealium lookup table, with a matching associated
 * value of: 'SomeValue'
 *
 *      bactm.pageview('SomeValue', { lookupType: 'associatedValue' });
 *
 * All event helper functions within this library, will utilize the dataCollector
 * queue to allow data collection events to being to be collected immediately
 * and sent to Coremetrics as the queue is processed as soon as the main Coremetrics
 * libraries are loaded and ready.
 *
 * The dataCollector is a shared queue of objects holding generic information
 * about the event. It uses a queue so that the page can record events before the
 * main Coremetrics libraries are loaded.
 *
 * For example, a page might start with the following dataCollector in its head section:
 *
 *      window.dataCollector = window.dataCollector || [];
 *      dataCollector.push({
 *          'event'                 : 'pageview',
 *          'pageInfoArrayIndex'    : 1,
 *          'options'               : {
 *              'isApp'             : false
 *          }
 *      });
 *
 * The queue will then be processed and events sent to Coremetrics once the main
 * Coremetrics libraries are ready.
 *
 * @author jeremy.hodges@bankofamerica.com (Jeremy Hodges)
 */

(function (name, context, definition) {
  // Check if is used inside a "modern" browser, if not, return
  if (!context || !Array.prototype.filter) {
    return;
  }

  context[name] = definition();
})('bactm', typeof window !== 'undefined' ? window : null, function () {

  // Initial variable configurations
  var win = window
    , doc = document || {}
    , version = '3.0.2'
    , plugins = {}
    , publishedEvents = {}
    , queuedEvents = {}
    , env = win.bactm_envSelector || 'notprod'
    , utagLoadStopped = false
    , isDOMReady = false
    , readyHandlers = []
    , loadCoremetrics = false
    , pageviewOnLoad = typeof digitalData !== 'undefined' && (typeof digitalData.disable_pageviewonload === 'undefined' || digitalData.disable_pageviewonload === null || digitalData.disable_pageviewonload.toString().toLowerCase() !== 'true')
    , isProd = env === 'prod' ? true : false
    , cmLibLoadEventName = 'bactm_libload'
    , attrValueSeperator = '-_-'
    , segmentWrapperChar = '|'
    , segmentValueSeperator = segmentWrapperChar + segmentWrapperChar
    , storageKeyPrefix = 'bactm.'
    , logQ = []
    , _logPageviewToSplunk = {
      'homepage:Content:Personal;homepage_personal': true
      , 'homepage:Content:Personal;homepage_personal_signoff': true
    }
    , conversionActionTypes = {
      'initiate': 1
      , 'complete': 2
    }
    , SITE_PROMOTIONS_INTERVAL = 300
    , SITE_PROMOTIONS_THRESHOLD = 3000
    , SITE_PROMOTIONS_ACCUMULATOR = 0
    , LOG_LEVEL = {
      OFF: 10
      , FATAL: 5
      , ERROR: 4
      , WARN: 3
      , INFO: 2
      , DEBUG: 1
    }
    , LOG_LEVEL_STRINGS = {
      5: 'trace'
      , 4: 'error'
      , 3: 'warn'
      , 2: 'info'
      , 1: 'log'
    }
    , _settings = {
      logLevel: isProd ? LOG_LEVEL.OFF : LOG_LEVEL.DEBUG,
      coremetricsUtagId: 1
    }
    , modals = [
      'Ent:Mkt:Survey;Convergys_open',
      'Ent:Mkt:Survey;Convergys_complete',
      'MDA:CONTENT:DEALS;INTRODUCING_COINS_MODAL',
      'MDA:CONTENT:DEALS;LOCATIONCONSENTMODAL',
      'MDA:CONTENT:DEALS;HOW_COINS_WORK_MODAL',
      'OLB:CONTENT:ACCTDETAILS:CARD;THREEPERCENTSASIMODALNEW',
      'OLB:TOOL:ACCTDETAILS:HEMI;PORTAL_ELECTRONIC_COSENT_CHANGE_DELIVERY_PREFERENCES_MODAL',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_HOW_COINS_WORK_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ONBOARDING_MODAL',
      'OLB:CONTENT:ACCTDETAILS:CARD;THREEPERCENTSASIMODALEXISTING',
      'OLB:TOOL:ACCTDETAILS;EDIT_CATEGORY_MODAL',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_INTRODUCING_COINS_MODAL',
      'MDA:CONTENT:DEALS;INTRODUCING_COINS_MODAL_ES',
      'OLB:TOOL:FINWELL;EDIT_CATEGORY_MODAL',
      'MDA:CONTENT:DEALS;HOW_LEVELS_WORK_MODAL',
      'MDA:CONTENT:BILLPAY;SUCCESS_CANCEL_PREV_SCHED_PMNT_MODAL',
      'MDA:CONTENT:MYCONTACTINFO;DELETEPHONEMODAL',
      'OLB:CONTENT:FINWELL;CREATE_NEW_GOAL_MODAL',
      'GWM:MKT:MERRILLEDGE;ACCOUNT-SELECTOR-MODAL-MOBILE',
      'MDA:CONTENT:DEALS;ALLOWLOCATIONMODAL',
      'OLB:TOOL:ACCTDETAILS:HEMI;PORTAL_ESIGN_MODAL',
      'MDA:CONTENT:DEALS;LOCATIONCONSENTMODAL_ES',
      'GWM:MKT:MERRILLEDGE;ACCOUNT-SELECTOR-MODAL-DESKTOP',
      'OLB:CONTENT:CUSTSVC:HEMI;LATECHARGE_MODAL',
      'OLB:TOOL:ACCTDETAILS:HEMI;PORTAL_MESSAGES_MODAL',
      'OLB:CONTENT:FINWELL;SET_BUDGET_MODAL',
      'DEP:APP:CDP;CDP:800:TIMEOUT_MODAL',
      'CARDS:APP:SP;CARD_SP_EC:800:TIMEOUT_MODAL',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_CASH_IN_COINS_MODAL',
      'SMBUS:APP:CARD;SMBUS:CARD:800:TIMEOUT_MODAL',
      'OLB:CONTENT:ACCOUNTS:OPS;BOL_SECURE_LOG_IN_MODAL',
      'MDA:CONTENT:DEALS;HOW_COINS_WORK_MODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;SELECT_ACCOUNTS_MODAL',
      'GWM:MKT:MERRILLEDGE;ACCOUNT-SELECTOR-MODAL-RETIREMENT-MOBILE',
      'OLB:CONTENT:FINWELL;MOVE_MONEY_MODAL',
      'DEP:APP:CDP;CDP_NONOLB:105:CANCELMODAL',
      'MDA:CONTENT:BILLPAY;PAYEE_EDIT_CONFIRMATION_MODAL',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_COINS_RESET_MODAL_ES',
      'GWM:MKT:MERRILLEDGE;ACCOUNT-SELECTOR-MODAL-RETIREMENT-DESKTOP',
      'MDA:CONTENT:DEALS;NEARMEMAPNODEALSAVAILABLEMODAL',
      'CARDS:APP:SP;CARD_SP:800:TIMEOUT_MODAL',
      'CARD:APP:ICE;ICEPOS_NONOLB:175:RETURN_TO_DASHBOARD_MODAL',
      'MDA:CONTENT:LOCATIONS;LOCATIONDISABLEDPROMPTMODAL',
      'MDA:CONTENT:MYCONTACTINFO;DELETEEMAILMODAL',
      'MDA:CONTENT:BILLPAY;PAYTOACCOUNTEDITCONFIRMMODAL',
      'MDA:CONTENT:DEALS;HOW_LEVELS_WORK_MODAL_ES',
      'MDA:CONTENT:DEALS;BONUS_COIN_DETAILS_MODAL',
      'MDA:CONTENT:PAYPAL;IPAD_MODAL',
      'GWM:MKT:MERRILLEDGE;GLOBAL-OAO-BROKERAGE-MODAL',
      'DFS:APP:ALP;ALP_OLB:105:CANCELMODAL',
      'HL:APP:HELOC;HELOC:800:TIMEOUT_MODAL',
      'MDA:CONTENT:DEALS;ALLOWLOCATIONMODAL_ES',
      'DFS:APP:ALP;ALP_NONOLB:105:CANCELMODAL',
      'OLB:CONTENT:FINWELL;EDIT_GOAL_MODAL',
      'MDA:CONTENT:BILLPAY;PAYTOACCOUNTDELETEMODAL',
      'OLB:CONTENT:FINWELL;MANAGE_ACCOUNTS_MODAL',
      'OLB:CONTENT:ACCTDETAILS:CARD;INFOSVCS_CARD_REPLACE_AD_ACCT_SELECT_MODAL',
      'SMBUS:APP:CARD;SBCC_EC:800:TIMEOUT_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ALERTS_DETAILS_MODAL',
      'DFS:APP:ALP;ALP_FC:105:CANCELMODAL',
      'MDA:CONTENT:BILLPAY;SUCCESS_CANCEL_PREV_SCHED_PMNT_MODAL_ES',
      'OLB:CONTENT:ACCTDETAILS:CARD;INFOSVCS_CARD_REPLACE_NO_ELIGIBLE_ACCTS_MODAL',
      'MDA:CONTENT:DEALS;ALLOWLOCATIONSOMETHIGNWRONGMODAL',
      'OLB:CONTENT:ACCTDETAILS;TRANSFERS_MAKE_PAYMENT_MODAL',
      'OLB:CONTENT:FINWELL;DELETE_GOAL_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;JUMP_TO_DATE_CALENDAR_MODAL',
      'OLB:CONTENT:ACCOUNTS;TRANSFERS_MAKE_PAYMENT_MODAL',
      'GWM:MKT:MERRILLEDGE;RMD-MODAL',
      'HL:APP:DMA_REFI;DMAR_OLB:275:COUNTY_MODAL',
      'MDA:CONTENT:MYCONTACTINFO;DELETEPHONEMODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ONBOARDING_MODAL_ES',
      'GWM:MKT:MERRILLEDGE;MARKETPRO-VIDEO-MODAL',
      'HL:APP:HELOC;HELOC_OLB:105:CANCELMODAL',
      'SMBUS:APP:DEP;SB_DEP_NONOLB:105:CANCELMODAL',
      'OLB:CONTENT:FINWELL;CONTRIBUTE_TO_GOAL_MODAL',
      'GWM:MKT:MERRILLEDGE;WHAT-YOU-WILL-NEED-MODAL',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_HOW_COINS_WORK_MODAL_ES',
      'OLB:CONTENT:FINWELL;CREATE_NEW_GOAL_MODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ADD_A_PROJECTED_TRANSACTION_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;EXPORT_CHART_DATA_MODAL',
      'HL:APP:HELOC;HELOC_NONOLB:105:CANCELMODAL',
      'OLB:CONTENT:ACCOUNTS;TRANSFERS_ADD_AN_ACCT_MODAL',
      'GWM:MKT:MERRILLEDGE;ONLINE-TRADING-MODAL-RESEARCH',
      'MDA:CONTENT:DEALS;ALLOWLOCATIONSOMETHIGNWRONGMODAL_ES',
      'MDA:CONTENT:LOCATIONS;LOCATIONDISABLEDPROMPTMODAL_ES',
      'MDA:CONTENT:DEALS;NEARMEMAPNODEALSAVAILABLEMODAL_ES',
      'OLB:CONTENT:ACCTDETAILS;TRANSFERS_ADD_AN_ACCT_MODAL',
      'SMBUS:APP:CARD;SB_ULOAN_OLB:105:CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;ONLINE-TRADING-MODAL-GUIDANCE',
      'HL:APP:DMA_REFI;DMAR_NONOLB:275:COUNTY_MODAL',
      'MDA:CONTENT:BILLPAY;EXTERNALACCOUNTDELETEMODAL',
      'OLB:CONTENT:FINWELL;SET_BUDGET_MODAL_ES',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_INTRODUCING_COINS_MODAL_ES',
      'GWM:MKT:MERRILLEDGE;GLOBAL-OAO-INHERITED-IRA-MODAL',
      'MDA:CONTENT:BILLPAY;PAYEE_EDIT_CONFIRMATION_MODAL_ES',
      'MDA:CONTENT:BILLPAY;PAYTOACCOUNTEDITCONFIRMMODAL_ES',
      'OLB:TOOL:FINWELL;EDIT_CATEGORY_MODAL_ES',
      'OSP:TOOL:TRANSFERS;ADD_AN_ACCT_MODAL',
      'DEP:APP:CDP;CDP_NONOLB:130:OOW_CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;ONLINE-TRADING-MODAL-STAY-ON-TRACK',
      'MDA:CONTENT:MYCONTACTINFO;DELETEEMAILMODAL_ES',
      'DFS:APP:ALP;ALP_CC:105:CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;FUND-IN-ONE-OF-FOUR-WAYS-MODAL',
      'GWM:MKT:MERRILLEDGE;ONLINE-TRADING-MODAL-PERFORMANCE',
      'OLB:CONTENT:FINWELL;MARK_GOAL_COMPLETE_MODAL',
      'OSP:APP:FINWELL;FWA_MODAL',
      'GWM:MKT:MERRILLEDGE;529-COMPARE-MODAL',
      'GWM:MKT:MERRILLEDGE;QUOTE-HOVER-MODAL',
      'MDA:CONTENT:DEALS;BONUS_COIN_DETAILS_MODAL_ES',
      'DFS:APP:ALP;ALP_OLB_SNR:105:CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;PREFERRED-REWARDS-MODAL',
      'GWM:MKT:MERRILLEDGE;SELECT-FUND-RESEARCH-MODAL',
      'OLB:CONTENT:FINWELL;COMPLETED_GOALS_MODAL',
      'GWM:MKT:MERRILLEDGE;GLOBAL-OAO-RETIREMENT-CASH-MGMT-MODAL',
      'GWM:MKT:MERRILLEDGE;RUN_ECMS_MODAL',
      'HL:APP:DMA_PURCH;DMAP_NONOLB:260:COUNTY_MODAL',
      'OSP:TOOL:LIFEPLAN;APPT_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;SELECT_ACCOUNTS_MODAL_ES',
      'GWM:MKT:MERRILLEDGE;ADVERTISING-PRACTICES-MODAL',
      'GWM:MKT:MERRILLEDGE;BEST-EXECUTION-TRADING-MODAL',
      'GWM:MKT:MERRILLEDGE;CHOOSE-YOUR-OWN-SEARCH-CRITERIA-MODAL',
      'GWM:MKT:MERRILLEDGE;CONTRIBUTION-LIMIT-MODAL',
      'GWM:MKT:MERRILLEDGE;PRICING-MODAL',
      'GWM:MKT:MERRILLEDGE;SEARCH-FOR-ETFS-MODAL',
      'MDA:CONTENT:BILLPAY;PAYTOACCOUNTDELETEMODAL_ES',
      'MDA:CONTENT:DEALS;NEARMEMAPOPTEDOUTMODAL',
      'OSP:TOOL:LIFEPLAN;CREATE_A_GOAL_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;LOW_NEGATIVE_ALERTS_MODAL',
      'DEP:APP:CDP;CDP_OLB:105:CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;ACADEMY-VIDEO-MODAL',
      'GWM:MKT:MERRILLEDGE;BROKER-CHECK-MODAL',
      'GWM:MKT:MERRILLEDGE;FUND-IN-ONE-OF-FOUR-WAYS-MODAL_V2',
      'GWM:MKT:MERRILLEDGE;SEARCH-FOR-FIXED-INCOME-MODAL',
      'HL:APP:DMA_PURCH;DMAP_OLB:260:COUNTY_MODAL',
      'OLB:CONTENT:ACCOUNTS;TRANSFERS_MAKE_PAYMENT_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ADJUST_BALANCE_ALERTS_MODAL',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ALERTS_DETAILS_MODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;JUMP_TO_DATE_CALENDAR_MODAL_ES',
      'DEP:APP:CDP;CDP_NONOLB_SNR:105:CANCELMODAL',
      'GWM:MKT:MERRILLEDGE;CARD-ELIGIBILITY-GUIDELINES-MODAL',
      'GWM:MKT:MERRILLEDGE;FINANCES-VIDEO-MODAL',
      'GWM:MKT:MERRILLEDGE;HEALTH-VIDEO-MODAL',
      'GWM:MKT:MERRILLEDGE;IRA-SELECTOR-TOOL-MODAL',
      'GWM:MKT:MERRILLEDGE;JUGGLING-RETIREMENT-SAVING-VIDEO-MODAL',
      'GWM:MKT:MERRILLEDGE;PRICING-MODAL-MOBILE',
      'GWM:MKT:MERRILLEDGE;ROTH-IRA-CONVERSION-MODAL-WHAT-YOU-NEED',
      'GWM:MKT:MERRILLEDGE;RUN_NEWECMSMODAL',
      'GWM:MKT:MERRILLEDGE;SB401K-VIDEO-MODAL',
      'GWM:MKT:MERRILLEDGE;SMALL-BUSINESS-VIDEO-MODAL',
      'HL:APP:HELOC;HELOC_NONOLB_SNR:105:CANCELMODAL',
      'HL:APP:HELOC;HELOC_OLB_SNR:105:CANCELMODAL',
      'MDA:CONTENT:PAYPAL;IPAD_MODAL_ES',
      'OLB:CONTENT:ACCOUNTS;TRANSFERS_ADD_AN_ACCT_MODAL',
      'OLB:CONTENT:FINWELL;CONTRIBUTE_TO_GOAL_MODAL_ES',
      'OLB:CONTENT:FINWELL;EDIT_GOAL_MODAL_ES',
      'OLB:CONTENT:FINWELL;MANAGE_ACCOUNTS_MODAL_ES',
      'OLB:CONTENT:FINWELL;MOVE_MONEY_MODAL_ES',
      'OSP:CONTENT:CONCOM:TOFFERS;CASHCOUPONS_CASH_IN_COINS_MODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;ADD_A_PROJECTED_TRANSACTION_MODAL_ES',
      'SMBUS:TOOL:BUSINESSADVANTAGE360;LOW_NEGATIVE_ALERTS_MODAL_ES'
    ];


  // ===========================================================================
  // Functions fired on page load.
  // ===========================================================================

  /**
   * The initialization function is called immediately when the script loads. If loadCoremetrics
   * is false, this function will NOT be called.
   * @private
   * @returns {void}
   */
  var _init = function () {
    _log('bactm library v' + version + ' initializing.', LOG_LEVEL.INFO);
    win.dataCollector = win.dataCollector || [];
    
    getCelebrusContentKey();

    _ready(_onLoad);
    // If we haven't disabled the initial pageview on load in the DDO, go ahead and
    // queue up a pageview for the default instance.
    if (pageviewOnLoad) pageview();

    // Add event listener to send a beacon with log data once the window unloads.
    var eventName = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
    window.addEventListener(eventName, _sendLogBeacon, false);

    _processSitePromotions();
    _setPrivacy();
  };

  Object.defineProperty(Array.prototype, "includes", {
    enumerable: false,
    value: function (obj) {
      var newArr = this.filter(function (el) {
        return el == obj;
      });
      return newArr.length > 0;
    }
  });

  /**
   * Queries the DOM every 300ms for up to 3s in order to detect all
   * site promotions and adds them to the data collector.
   */
  var _processSitePromotions = function () {
    var querySitePromotions = setInterval(function () {
      if (SITE_PROMOTIONS_ACCUMULATOR > SITE_PROMOTIONS_THRESHOLD) {
        _trigger('sitePromotionsProcessed');
        return clearInterval(querySitePromotions);
      }

      var links = polyfills.array.from(document.querySelectorAll('a'));
      var sitePromotionLinks = links.filter(function (link) {
        if (typeof link.dataset.impressionhref !== "undefined") {
          return polyfills.string.includes(link.dataset.impressionhref, 'cm_sp=');
        } else {
          return link?.attributes?.href?.value?.includes('cm_sp=');
        };
      });

      sitePromotionLinks.forEach(function (spLink) {
        function chooseLink() {
          if (typeof spLink.dataset.impressionhref !== "undefined") {
            return [new QueryString(spLink.dataset.impressionhref), spLink.dataset.impressionhref]
          } else {
            return [new QueryString(spLink?.attributes?.href?.value), spLink?.attributes?.href?.value]
          }
        }

        var sitePromotion = {
          event: 'sitepromotion',
          options: {
            value: chooseLink()[0].get('cm_sp'),
            href: chooseLink()[1]
          }
        };

        if (!_isInDataCollector(sitePromotion)) dataCollector.push(sitePromotion)
      });

      SITE_PROMOTIONS_ACCUMULATOR += SITE_PROMOTIONS_INTERVAL;
    }, SITE_PROMOTIONS_INTERVAL);
  }

  /**
   * Determines if an object is in the datacollector.
   */
  _isInDataCollector = function (needle) {
    if (typeof needle !== 'object') return false;

    var dc = window.dataCollector || [];
    for (var i = 0; i < dc.length; i++) {
      var dcEvent = dc[i];
      if (_is(dcEvent, needle)) return true;
    }

    return false;
  };

  /**
   * Determines if two objects have the same keys and values.
   */
  _is = function (o1, o2) {
    if (typeof o1 !== 'object' || typeof o2 !== 'object') return false

    var o1k = Object.keys(o1);
    return o1k.every(function (key) {
      if (!o2.hasOwnProperty(key)) return false;

      if (typeof o1[key] === 'object') return _is(o1[key], o2[key])

      return o1[key] === o2[key]
    });
  };


  /**
   * Called once the custom event named in cmLibLoadEventName is dispatched and the
   * DOM is fully ready.
   * @private
   * @returns {void}
   */
  var _onLoad = function () {
    // Intialize our dataCollector queue and tell it to process anything already in the queue.
    win.dataCollector = win.dataCollector || [];
    var dataCollectorQueue = new _dataCollectorHelper(win.dataCollector, _processDataCollector, true);

    _impressions();
    
    window.cX = () => {
      if (window?.bactm?.rescanDOM) bactm.rescanDOM();
    }

    _dynamicContentWatcher()
  }

  /**
   * listening for two events that fire after dynamic content is injected
   * first event: sparta dynamic content 2nd event: events fired by page owner
   * either event that we get we will call rescanDOM
   * @private function
   */
  
  const _dynamicContentWatcher = () => {
    // incase we ever had a scenario to deregister the listener do not use an anonymous call back
    document.addEventListener('MODAL_OPENED.spartaUILayersUtility', _rescanDOM)
    document.addEventListener('tagging-dynamic-content', _rescanDOM)
  }

  // ===========================================================================
  // End functions fired on page load.
  // ===========================================================================

  // ===========================================================================
  // Core data collection functions.
  // ===========================================================================

  /**
   * Fires a Coremetrics pageview tag for the pageInfo object requested according
   * to and modified if necessary based on properties in the options object.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string|number} [pageInfoKey] - Value indicating how to find the pageInfo
   *      from the digitalData object. Can be the index of the array, pageID, or the
   *      associated value.
   * @param {object} [options] - Object of options for this pageview call. Valid
   *      properties include segmentValues {array}, categoryType {string}, lookupType {string},
   *      isSaveAndReturn {bool}, saveAndReturnId {string}, applicationId {string}
   *      cartProducts {array} and isApp {bool}.
   * @returns {boolean}
   */
  var _firePageview = function (pageInfoKey, options) {
    var options = options || {}
      , pageInfoArrayIndex = _lookupArrayIndexByKey(pageInfoKey, options);

    _processOptions(pageInfoArrayIndex, options);

    _log('Call pageview on array index ' + pageInfoArrayIndex + ' with options: ', options, LOG_LEVEL.DEBUG);

    if (_toLowerCaseString(ddo.get('page.attributes.stateCookie')) === 'true') _setStateSegmentValue(pageInfoArrayIndex);
    if (_toLowerCaseString(ddo.get('page.attributes.needOLBcookie')) === 'true') _setOLBSegmentValue(pageInfoArrayIndex);
    if (_toLowerCaseString(ddo.get('user.sharedIDs.celebrus')) !== null) _setSegmentValue('cck', ddo.get('user.sharedIDs.celebrus'), pageInfoArrayIndex);
    _setWindowResolutionSegmentValue(pageInfoArrayIndex);
    _setSNRSegmentValue(pageInfoArrayIndex);
    // _setmdaCmParams();

    var pageInfo = _getPageInfo(pageInfoArrayIndex, options);
    if (!pageInfo) {
      _log('Unable to fire pageview. pageInfo object is null or does not exist.', LOG_LEVEL.INFO);
      return;
    }

    if (options.isModal) return true;

    _log('Firing a pageview with the following info: ', pageInfo, LOG_LEVEL.INFO);

    _trigger('beforePageview', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });
    
    // Capture the pageview.
    _pageIDHistory('add', pageInfoArrayIndex, pageInfo.pageID);
    _impressions();


    _trigger('afterPageview', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('afterPageviewAAM', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('afterPageviewAdobe', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('initClickAttributes', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('initTargetValues', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('initChatPageView', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('initDLEValues', {
      'pageInfoArrayIndex': pageInfoArrayIndex
      , 'pageInfo': pageInfo
      , 'options': options
    });

    _trigger('setupDartTags', {
      'pageInfoArrayIndex': pageInfoArrayIndex,
      'pageInfo': pageInfo,
      'options': options
    });
    
  }
  

  /**
   * Captures all products out of the digitalData.cart.item array and fires a Coremetrics
   * Shop Action 5 tag for each one where cartViewTagFired property is false. Once tag has
   * fired, cartViewTagFired property is set to true, ensuring duplicate Shop Action 5 tags
   * are not fired for a single product.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @returns {void}
   */
  var _fireCartView = function () {
    if (typeof bactm_cmCreateShopAction5Tag !== 'function') return;

    _trigger('beforeCartView');

    var products = ddo.get('cart.item', []);
    for (var i = 0, len = products.length; i < len; i++) {
      if (!products[i].attributes || !products[i].attributes.cartViewTagFired) {
        try {
          products[i].attributes = products[i].attributes || {};
          products[i].attributes.cartViewTagFired = true;
        }
        catch (e) {
          _log(e, LOG_LEVEL.ERROR);
          reportError(e);
        }
      }
    }
    ddo.set('cart.item', products);

    // Save cart to the store so it can be loaded from other DOM instances.
    _saveCartToStore();

    _trigger('afterCartView');
  }

  /**
   * Captures all products out of the digitalData.cart.item array and fires a Coremetrics
   * Shop Action 9 tag for each one where cartViewTagFired property is true. Once tag has
   * fired, cartViewTagFired property is set to false, ensuring additional Shop Action 5 tags
   * can be fired.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @returns {void}
   */
  var _fireProductsPurchased = function () {

    // from ML bactm
    var gwimPg = window.digitalData.page.pageInfo[0].pageID;
    if (gwimPg.match(/GWIM:/gi) != null) {
        _trigger('afterCartAdobe');
        return;
    };

    if (typeof bactm_cmCreateShopAction9Tag !== 'function') return;

    _trigger('beforeProductsPurchased');

    var products = ddo.get('cart.item', []);
    for (var i = 0, len = products.length; i < len; i++) {
      if (products[i].attributes && _toLowerCaseString(products[i].attributes.cartViewTagFired) !== 'false') {
        try {
          products[i].attributes = products[i].attributes || {};
          products[i].attributes.cartViewTagFired = false;
        }
        catch (e) {
          _log(e, LOG_LEVEL.ERROR);
        }
      }
    }
    ddo.set('cart.item', products);

    // Save cart to the store so it can be loaded from other DOM instances.
    _saveCartToStore();

    _trigger('afterProductsPurchased');
  }

  /**
   * Captures all products out of the digitalData.product array and fires a Coremetrics
   * Productview tag for each one where productviewTagFired property is false. Once tag has
   * fired, productviewTagFired property is set to true, ensuring duplicate Productview tags
   * are not fired.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @returns {void}
   */
  var _fireProductview = function () {

    _trigger('beforeProductview');

    var products = ddo.get('product', []);
    for (var i = 0, len = products.length; i < len; i++) {
      if (!products[i].attributes || !products[i].attributes.productviewTagFired) {
        try {
          products[i].attributes = products[i].attributes || {};
          products[i].attributes.productviewTagFired = true;
        }
        catch (e) {
          _log(e, LOG_LEVEL.ERROR);
          reportError(e);
        }
      }
    }
    ddo.set('product', products);

    _trigger('afterProductview');
  }

  /**
   * Sends a conversion event tag to Coremetrics.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string} eventName - The unique identifier for the type of conversion event.
   * @param {string} actionType - Indicates whether the conversion event was initiated or
   *                  successfully completed. Valid values: initiate|complete
   * @param {string} category - Allows you to group events into a category.
   * @returns {void}
   */
  var _fireConversionEvent = function (eventName, actionType, category) {
    var conversion = {
      eventName: eventName
      , actionType: actionType
      , category: category
    };

    _trigger('beforeConversion', {
      'conversion': conversion
    });

    _trigger('afterConversion', {
      'conversion': conversion
    });
  }

  /**
   * Sends a Custom Error tag for the current page to Coremetrics.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string|number} errorCode - A unique identifier for the Error message.
   * @param {string} errorMessage - The text of the message that is displayed to the user.
   * @returns {void}
   */
  var _fireCustomError = function (errorCode, errorMessage) {
    var eventInfo = {
      'event': 'customError'
      , 'errorCode': errorCode
      , 'errorMessage': errorMessage
    };

    _trigger('beforeCustomError', eventInfo);

      // var pageID = window?.digitalData?.page?.pageInfo[0]?.pageID;
      // var categoryID = pageID.split(';')[0];
    
      _trigger('afterCustomError', eventInfo);
    }

  /**
   * Sends a Manual Link Click tag on the current page to Coremetrics.
   * @private
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string} href - The href for the hyperlink.
   * @param {string} linkname - The unique descriptive identifier for the link.
   * @returns {void}
   */
  var _fireManualLinkClick = function (href, linkname) {
    var eventInfo = {
      'event': 'manualLinkClick'
      , 'href': href
      , 'linkname': linkname
    };

    _trigger('beforeManualLinkClick', eventInfo);

    if (!href || href === '' || href === '#') {
      href = 'javascript:void(0);';
    }

    // Triggers Adobe TrackClick Functionality with every manual link click 
    if (!window.location.href.includes("alloy=true")) {
      if (href.includes("cm_sp")) {
          try {
              const mockAdobeLink = document.createElement('a');
              mockAdobeLink.href = href;
              mockAdobeLink.dataset.impressionhref = href;
              mockAdobeLink.dataset.aaClickEvent = true;
              mockAdobeLink.id = linkname || "manualAdobeLinkClick";
              mockAdobeLink.addEventListener('click', (event) => { event.preventDefault(); if (typeof window.bactm.plugins.adobesensei.manualAdobeLinkClick === "function") { window.bactm.plugins.adobesensei.manualAdobeLinkClick(event) } });
              mockAdobeLink.click()
          } catch (e) {
              _log(e, LOG_LEVEL.ERROR);
              reportError(e);
          }
      }
  }

  _trigger('afterManualLinkClick', eventInfo);
  }

  /**
   * Reverts the pageID Coremetrics is currently reporting on to the previous pageID.
   * Uses a specific pageID from the specified index of the array if provided.
   * For example, to be called when modal layer that called a second Pageview tag in
   * a single DOM instance is closed.
   * @private
   * @requires eluminate.js
   * @param {number} [pageInfoArrayIndex=null] - Index of the pageInfo array from
   *                  digitalData.page.pageInfo[n] you'd like the get the paegID from.
   * @returns {void}
   */
  var _revertToPreviousPageID = function (pageInfoArrayIndex) {
    var pageID = '';

    if (!isNaN(pageInfoArrayIndex)) {
      if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
      pageID = ddo.pageInfo.get('pageID', pageInfoArrayIndex);
    } else {
      pageID = _pageIDHistory('prev');
    }

   return pageID
  }

  /**
   * Rescans the DOM and adds event handlers to anchor tags for Automatic Link Click tag
   * functionality.
   * @private
   * @returns {void}
   */
  var _rescanDOM = function () {
    try {
      _trigger('adobeListeners');
      bactm.impressions();
    } catch (e) {
      reportError(e);
    }
  }

  /**
   * Adds an event to the log queue which will get sent on page unload.
   * @private
   * @param {object} data
   * @returns {void}
   */
  var _addToLogQ = function (data) {
    var q = logQ || [];
    q.push(data);
  }

  // ===========================================================================
  // End core data collection functions.
  // ===========================================================================

  // ===========================================================================
  // Helper functions.
  // ===========================================================================

  var _impressions = function (individualImpression = false) {
    const pageID = _pageIDHistory('current');
    // Adds impression to the dataCollector
    function setToDataCollector(spLink) {
      var qs = new QueryString(spLink);
      var sitePromotion = {
        event: 'sitepromotion',
        options: {
          value: qs.get('cm_sp'),
          href: spLink
        }
      };

      if (!_isInDataCollector(sitePromotion)) dataCollector.push(sitePromotion);
    }

    // Manual Impression Tag functionality
    if (individualImpression) {
      if (typeof window.bactm.plugins.adobesensei.adobeAssignListeners === "function") {
          window.bactm.plugins.adobesensei.adobeAssignListeners();
      }

      const impressionArr = Array.isArray(individualImpression) ? individualImpression : [individualImpression];

      if (bactm.plugins.adobesensei.manualImpression) {
          // Logic for not firing a manual site promotion more than once a page
          // Checking whether or not there are duplicates

          // Checks whether this particular impression(s) exists and then adds the manually fired impression to the dataCollector
          impressionArr.forEach(function (spLink) {
              setToDataCollector(spLink)
          });

          // fires impression tags for Acoustics and Adobe analytics
          impressionArr.forEach((impressionHref) => {
              if (typeof bactm.plugins.adobesensei.manualImpression === "function") {
                  window.bactm.plugins.adobesensei.manualImpression(pageID, impressionHref);
              }
          });

      };
      return impressionArr;
    }

    // Fires Adobe Analytics Impression Tag on initial load or when bactm.impressions doesn't pass an argument
    let fireAdobe = () => {
      if (!window.initialAdobePageviewCollected) return;
      // Build an array of the previous hrefs from impressions tags that have been fired already
      const previousImpressions = window.dataCollector.filter(
        (element) => element.event === 'sitepromotion' && element.options.value
      );
      // Build and array of all the cm_sp anchors on the page
      const allImpressionsFound = Array.from(
        document.getElementsByTagName('a')
      ).filter(
        (anchor) =>
          anchor.dataset.impressionhref || anchor?.attributes?.href?.value?.includes('cm_sp')
      ); 
      // Build an array and filter to eliminate impressions already present in the dataCollector.
      const sharedValuesFound = allImpressionsFound.filter((cmsp) =>
        previousImpressions.find((prev) =>
          cmsp.href.includes(prev.options.value)
        )
      );
      const getCmspAnchors = allImpressionsFound.filter(
        (item) => !sharedValuesFound.includes(item)
      );
      var urlArr = [];
      getCmspAnchors.forEach((filteredAnchor) => {
        let hrefValue =
          filteredAnchor.dataset.impressionhref || filteredAnchor?.attributes?.href?.value;
        urlArr.push(hrefValue);
      });
      // Fires impression tags for Adobe Analytics
      urlArr.forEach((link) => {
        if (typeof window.bactm.plugins.adobesensei.manualImpression === "function") {
          window.bactm.plugins.adobesensei.manualImpression(pageID, link);
      }
        setToDataCollector(link);
      });
    };

    // final firing of vendor scripts while checking if they exist
    var scriptsExist = function () {
      let accessAdobe = setInterval(function () {
        var adobeAvailable = () => {
          try {
            return bactm.plugins.adobesensei.manualImpression ? true : false;
          } catch (e) {
            return false;
          }
        }
        window.bactm && window.bactm.plugins && window.bactm.plugins.adobesensei;
        if (adobeAvailable()) {
          fireAdobe();
          if (typeof window.bactm.plugins.adobesensei.adobeAssignListeners === "function") {
            window.bactm.plugins.adobesensei.adobeAssignListeners();
        }
          return clearInterval(accessAdobe);
        }
      }, 300);

      setTimeout(function () {
        clearInterval(accessAdobe);
      }, 5000);
    };
    scriptsExist();
  }

  var _setPrivacy = function () {
    if (!ddo.get("privacy")) {
      ddo.set("privacy", {
        do_not_track: false
      });
    }
    if (!ddo.get("privacy.do_not_track")) {
      ddo.set("privacy.do_not_track", false);
    }

    var tv = _readCookie("throttle_value");
    ddo.set("privacy.do_not_track", (tv === "999") ? true : ddo.get("privacy.do_not_track"));
    ddo.set("privacy.do_not_track", (navigator.doNotTrack == 1) ? true : ddo.get("privacy.do_not_track"));
  }

  /**
   * Function used to process objects added to the dataCollector array. Objects
   * should include an event property. Currently 'pageview' is the only supported
   * event. All other objects added will be ignored.
   * @private
   * @param {object} message - Object containing event type and options for selected
   *      event. 'pageview', 'manualLinkClick', and 'customError' are currently the
   *      only supported events.
   *      For pageview events, if no other properties are found, a pageview will be
   *      fired on digitalData.page.pageInfo[0] with no options.
   * @returns {void}
   */
  var _processDataCollector = function (message) {
    _log('dataCollector processing: ', message, LOG_LEVEL.DEBUG);
    var _event = _toLowerCaseString(message.event);

    var events = {
      'pageview': function () {
        _firePageview(message.pageInfoKey || 0, message.options || {});

        var pageId = ddo.pageInfo.get('pageID', message.pageInfoKey, '');
        if (_logPageviewToSplunk[pageId]) log({ type: 'pageview', pageId: pageId });
      }
      , 'productview': function () {
        _fireProductview();
      }
      , 'cartview': function () {
        _fireCartView();
      }
      , 'productspurchased': function () {
        _fireProductsPurchased();
      }
      , 'conversion': function () {
        _fireConversionEvent(message.eventName, message.actionType, message.category);
      }
      , 'manuallinkclick': function () {
        _fireManualLinkClick(message.href, message.linkname);
      }
      , 'customerror': function () {
        _fireCustomError(message.errorCode, message.errorMessage);
      }
      , 'customevent': function () {
        var details = message.options || {};
        details['eventKey'] = message.eventKey;
        _trigger('customEvent', details);
      }
      , 'log': function () {
        var data = message.data || {};
        _addToLogQ(data);
      }
    }

    if (events[_event]) {
      events[_event]();
    }
  }

  /**
   * Takes a pageInfoKey and options object and finds the proper pageInfo array index.
   * @private
   * @param {string|number} [pageInfoKey] - Value indicating how to find the pageInfo
   *      from the digitalData object. Can be the index of the array, pageID, or the
   *      associated value.
   * @param {object} [options] - Object of options for this pageview call. Valid
   *      properties include segmentValues {array}, categoryType {string}, lookupType {string},
   *      isSaveAndReturn {bool}, saveAndReturnId {string}, applicationId {string}
   *      cartProducts {array} and isApp {bool}.
   * @returns {number} pageInfoArrayIndex
   */
  var _lookupArrayIndexByKey = function (pageInfoKey, options) {
    var options = options || {}
      , pageInfoKeyIsString = typeof pageInfoKey === 'string'
      , pageInfoArrayIndex = 0;

    if (pageInfoKey) {
      if (pageInfoKeyIsString && _toLowerCaseString(options.lookupType) === 'associatedvalue') {
        pageInfoArrayIndex = _findPageInfoArrayIndexByAssociatedValue(pageInfoKey);
        if (pageInfoArrayIndex === -1) {
          _log('Unable to find pageInfo matching the specified associated value. Defaulting to zero.', LOG_LEVEL.WARN);
          pageInfoArrayIndex = 0;
        }
      } else if (pageInfoKeyIsString) {
        pageInfoArrayIndex = _findPageInfoArrayIndexByPageID(pageInfoKey);
        if (pageInfoArrayIndex === -1) {
          _log('Unable to find pageInfo matching the specified pageID. Defaulting to zero.', LOG_LEVEL.WARN);
          pageInfoArrayIndex = 0;
        }
      } else {
        if (_isValidPageInfoArrayIndex(pageInfoKey)) pageInfoArrayIndex = pageInfoKey;
      }
    }

    return pageInfoArrayIndex;
  }

  /**
   * Processes proper logic based on the options provided.
   * @private
   * @param {number} pageInfoArrayIndex - Index of the pageInfo array to associate with the provided options.
   * @param {object}  options
   * @param {boolean} options.authenticated - If set, will update the digitalData object indiciating the current user is authenticated.
   * @param {string}  options.applicationId - If set, will update the digitalData object with the provided application identifier.
   * @param {string}  options.applicationDecision - If set, will update the digitalData object with the provided application decision.
   * @param {string}  options.saveAndReturnId - If set, will update the digitalData object with the provided save and return identifier.
   * @param {string}  options.segmentValues - If set, will update the digitalData object at the provided pageInfo array index with the provided segment values.
   * @param {object|array}    options.cartProducts - If set, will update the digitalData.cart object with the provided products.
   * @param {boolean} options.isApp - Indicate if this is pageview is part of an application.
   * @param {boolean} options.isSaveAndReturn - Indicate if this pageview is part of a save and return application.
   * @returns {void}
   */
  var _processOptions = function (pageInfoArrayIndex, options) {
    /**
     * While not as "pretty," using independant if statements is 57% faster rather than a
     * loop for each optional property using the _setProperty function.
     */

    if (typeof options.loadCart !== 'undefined' && _toLowerCaseString(options.loadCart) === 'true') {
      _loadCartFromStore();
      delete options.loadCart;
    }

    if (typeof options.clickDART !== 'undefined') {
      _setProperty('clickDART', options.clickDART, pageInfoArrayIndex);
      delete options.clickDART;
    }

    if (typeof options.authenticated !== 'undefined') {
      _setProperty('authenticated', options.authenticated);
      delete options.authenticated;
    }

    if (typeof options.applicationId !== 'undefined') {
      _setProperty('applicationId', options.applicationId);
      delete options.applicationId;
    }

    if (typeof options.applicationDecision !== 'undefined') {
      _setProperty('applicationDecision', options.applicationDecision);
      delete options.applicationDecision;
    }

    if (typeof options.saveAndReturnId !== 'undefined') {
      _setProperty('saveAndReturnId', options.saveAndReturnId, pageInfoArrayIndex);
      delete options.saveAndReturnId;
    }

    if (typeof options.standardDART !== 'undefined') {
      _setProperty('standardDART', options.standardDART, pageInfoArrayIndex);
      delete options.standardDART;
    }

    if (typeof options.standardDARTes !== 'undefined') {
      _setProperty('standardDARTes', options.standardDARTes, pageInfoArrayIndex);
      delete options.standardDARTes;
    }

    if (typeof options.mboxCreateParam !== 'undefined') {
      _setProperty('mboxCreateParam', options.mboxCreateParam, pageInfoArrayIndex);
      // delete options.mboxCreateParam;
    }

    if (typeof options.mboxCreateParam_es !== 'undefined') {
      _setProperty('mboxCreateParam_es', options.mboxCreateParam_es, pageInfoArrayIndex);
      // delete options.mboxCreateParam_es;
    }

    if (typeof options.mboxCreateArgs !== 'undefined') {
      _setProperty('mboxCreateArgs', options.mboxCreateArgs, pageInfoArrayIndex);
      delete options.mboxCreateArgs;
    }

    if (typeof options.chat !== 'undefined') {
      _setProperty('chat', options.chat, pageInfoArrayIndex);
      delete options.chat;
    }

    if (typeof options.segmentValues !== 'undefined') {
      addManySegmentValues(options.segmentValues, pageInfoArrayIndex);
      delete options.segmentValues;
    }

    if (typeof options.cartProducts !== 'undefined') {
      addProductsToCart(options.cartProducts);
      delete options.cartProducts;
    }

    options['isApp'] = _toLowerCaseString(options.isApp) === 'true' ? true : false;
    options['isSaveAndReturn'] = _toLowerCaseString(options.isSaveAndReturn) === 'true' ? true : false;
  }

  /**
   * Get all page info properties required to process a pageview. Merges in required properties
   * found outside the pageInfo object, localizes pageID to the language, and builds the dynamic
   * pageID if this is an app call.
   * @private
   * @param {number}  [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                  digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @param {object}  [options] - Object containing options for building page info.
   * @param {boolean} [options.isApp=false] - Is this an app that we should dynamically build
   *                  the pageID and app information.
   * @param {string}  [options.categoryType='primary'] - Determine if to use
   *                  digitalData.page.category.addlCategory[n] or primaryCategory.
   * @param {number}  [options.addlCategoryIndex] - Index of the addlCategory array from
   *                  digitalData.page.category.addlCategory[n] you'd like to use.
   * @returns {object} pageInfo
   */
  var _getPageInfo = function (pageInfoArrayIndex, options) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    options = options || {};

    // If we get a null pageID, try to get it from Coremetrics--otherwise return blank.
    var pageInfo = _clone(ddo.get('page.pageInfo[' + pageInfoArrayIndex + ']'));
    if (!pageInfo.pageID) pageInfo['pageID'] = '';

    // Return the primaryCategory unless we've requested the additional category.
    var category = ddo.get('page.category.primaryCategory');
    if (typeof (options.addlCategoryIndex) !== 'undefined' || _toLowerCaseString(options.categoryType) === 'additional') {
      var additionalCat = ddo.get('page.category.addlCategory');
      if (Array.isArray(additionalCat)) {
        if (_isValidAddlCategoryArrayIndex(options.addlCategoryIndex)) {
          category = additionalCat[options.addlCategoryIndex];
        } else {
          category = additionalCat[0];
        }
      } else {
        category = additionalCat;
      }

      var pageIDsplit = pageInfo.pageID.split(';');
      if (pageIDsplit.length > 1 && pageIDsplit[0] !== category) {
        pageInfo.pageID = category + ";" + pageIDsplit[1];
      }
    }

    // If we are dealing with an app, we will need to customize some of the page info before continueing.
    var isApp = ((pageInfo.appName && pageInfo.appStepNumber) || options.isApp === true) ? true : false;
    if (isApp) pageInfo = _getAppPageInfo(pageInfo, category, options.isSaveAndReturn);

    // Customize pageInfo data for this instance and centralize data found in other parts of the DDO.
    var _pageInfo = pageInfo || {};
    _pageInfo['pageID'] = _localizePageID(pageInfo.pageID, pageInfo.language);
    _pageInfo['applicationID'] = ddo.get('cart.applicationID');
    _pageInfo['category'] = category;
    _pageInfo['attr'] = _getAttrValue(pageInfo);
    _pageInfo['searchString'] = ddo.get('page.attributes.searchString');
    _pageInfo['searchResults'] = ddo.get('page.attributes.searchResults');
    _pageInfo['olbSessionID'] = ddo.get('page.attributes.olbSessionID');
    _pageInfo['subCampaignCode'] = ddo.get('page.attributes.subCampaignCode');
    _pageInfo['authenticated'] = (_toLowerCaseString(ddo.get('user.authenticated')) === 'true') ? true : false;
    _pageInfo['pageInfoArrayIndex'] = pageInfoArrayIndex;

    return _pageInfo;
  }

  /**
   * Build the custom pageID and appName for an app. Returns all previous pageInfo
   * properties passed in as part of the pageInfo object.
   * @private
   * @param {object} pageInfo - pageInfo object containing at a minimum appName,
   *                 appStepNumber, and appStepName.
   * @param {string} [category] - Category to use in the pageID build. If not
   *                  provided, digitalData.page.category.primaryCategory will be used.
   * @returns {object} pageInfo
   */
  var _getAppPageInfo = function (pageInfo, category, isSaveAndReturn) {
    var cat = category || ddo.get('page.category.primaryCategory', '');

    pageInfo = pageInfo || {};
    pageInfo['originalAppName'] = pageInfo.appName || 'None';
    pageInfo['appName'] = pageInfo.appName + '_' +
      (_toLowerCaseString(ddo.get('user.authenticated')) === 'true' ? 'OLB' : 'NonOLB') +
      (isSaveAndReturn ? '_SNR' : '');
    pageInfo['pageID'] = cat +
      ';' + pageInfo.appName +
      ':' + pageInfo.appStepNumber +
      ':' + pageInfo.appStepName;

    return pageInfo;
  }

  /**
   * Returns an object with all the values found in digitalData.page.pageInfo[n].segmentValue
   * as key/value pairs of the returned object.
   * @private
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {object} segments
   */
  var _getSegmentValues = function (pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    var segmentValue = ddo.pageInfo.get('segmentValue', pageInfoArrayIndex);
    if (!segmentValue) return {};

    var segmentPairs = _trim(segmentValue).split(segmentValueSeperator);
    var segments = {};
    for (var i = 0, segmentPairsLen = segmentPairs.length; i < segmentPairsLen; i++) {
      var segment = _getSegmentKeyValue(segmentPairs[i]);
      segments[segment.key] = segment.value;
    }

    return segments;
  }

  /**
   * Writes the provided string to digitalData.page.pageInfo[n].segmentValue
   * @private
   * @param {string} value - String of segments as pipe wrapped key/value pairs (e.g.: '|st_NC||olbc_Y|').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {void}
   */
  var _saveSegmentValues = function (value, pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    ddo.pageInfo.set('segmentValue', value, pageInfoArrayIndex);
  }

  /**
   * Returns the value of a single segment within digitalData.page.pageInfo[n].segmentValue
   * found by key.
   * @private
   * @param {string} key - Key is the entire string up unti the first underscore in a segment
   *                 section (e.g.: 'st' in '|st_NC|').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {string} value
   */
  var _getSegmentValue = function (key, pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    var current = _getSegmentKeyValues(pageInfoArrayIndex);
    return current[key];
  }

  /**
   * Sets the value of a single segment within digitalData.page.pageInfo[n].segmentValue
   * found by key. If key does not exist, a new segment will be created.
   * @private
   * @param {string} key - Key is the entire string up unti the first underscore in
   *                 a segment section (e.g.: 'st' in '|st_NC|').
   * @param {string} value - Vaue is the entire string after the first underscore in
   *                 a segment section (e.g.: 'NC' in '|st_NC|').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {void}
   */
  var _setSegmentValue = function (key, value, pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    var segmentValuesString = '';
    var current = _getSegmentValues(pageInfoArrayIndex);
    current[_trim(key)] = value ? _trim(value) : '';

    for (var key in current) {
      if (current.hasOwnProperty(key)) {
        segmentValuesString += segmentWrapperChar + key +
          (current[key] !== '' ? '_' + current[key] : '') +
          segmentWrapperChar;
      }
    }

    _saveSegmentValues(segmentValuesString, pageInfoArrayIndex);
  }

  /**
   * Returns an object with a key and a value from an underscore seperated string.
   * If no underscore is found, entire value is put within the key.
   * @private
   * @param {string} segment - Key and value string seperated by an underscore (e.g.: 'st_NC', 'olbc_Y').
   * @returns {object} segment
   */
  var _getSegmentKeyValue = function (segment) {
    var firstUnderscore = segment.indexOf('_');
    if (firstUnderscore > -1) {
      key = segment.substring(0, firstUnderscore);
      value = segment.substring(firstUnderscore + 1);
    } else {
      key = segment;
      value = '';
    }

    return {
      key: key,
      value: value
    };
  }

  /**
   * Sets the state segment value based on the state cookie.
   * @private
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the set the segment values to.
   * @returns {void}
   */
  var _setStateSegmentValue = function (pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    var stateFromCookie;
    if (_toLowerCaseString(ddo.get('page.attributes.stateCookie')) === 'true') stateFromCookie = _readCookie('state');
    if (stateFromCookie) _setSegmentValue('st', stateFromCookie, pageInfoArrayIndex);
  }

  /**
   * Sets the olbc segment value based on the BA_0021 cookie.
   * @private
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the set the segment values to.
   * @returns {void}
   */
  var _setOLBSegmentValue = function (pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    var authenticated = 'N';
    if (_readCookie('BA_0021')) authenticated = 'Y';

    _setSegmentValue('olbc', authenticated, pageInfoArrayIndex);
  }

  /**
   * Sets the rez segment value based on the current innerWidth and innerHeight of the document.
   * @private
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the set the segment values to.
   * @returns {void}
   */
  var _setWindowResolutionSegmentValue = function (pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    var value = win.innerWidth + '_' + win.innerHeight;

    _setSegmentValue('rez', value, pageInfoArrayIndex);
  }

  /**
   * Sets the SNR segment value if the pageInfo[pageInfoArrayIndex].saveAndReturnId property is populated.
   * @private
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd like the set the segment values to.
   * @returns {void}
   */
  var _setSNRSegmentValue = function (pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    try {
      var SNR = ddo.pageInfo.get('saveAndReturnId', pageInfoArrayIndex);
      if (SNR) _setSegmentValue('SNR', SNR, pageInfoArrayIndex);
    } catch (e) {
      reportError(e);
    }
  }

  /**
   * Gets the attr value by adding the current segment value to any existing values within attr.
   * @private
   * @param {object} pageInfo - pageInfo object with minimum properties segmentValue and attr.
   * @returns {string} attr
   */
  var _getAttrValue = function (pageInfo) {
    if (pageInfo.attr) {
      var attributes = pageInfo.attr.split(attrValueSeperator);
    } else {
      var attributes = [];
    }
    if (attributes.length > 0) {
      attributes[0] += pageInfo.segmentValue;
    }
    attributes[9] = '1';
    return attributes.join(attrValueSeperator);
  }

  /**
   * An abstraction layer allowing the development teams to set properties on
   * the digitalData object (DDO) without having to know the structure of the DDO and
   * manipulate it directly.
   * @public
   * @param {string} property - Property type: authenticated|applicationID
   * @param {string|number|boolean} value - Value to set the property to.
   * @returns {void}
   */
  var _setProperty = function (property, value, pageInfoArrayIndex) {
    var setAuth = function () {
      if (_toLowerCaseString(value) === 'true' || _toLowerCaseString(value) === 'false') {
        ddo.set('user.authenticated', (_toLowerCaseString(value) === 'true') ? true : false);
      }
    }

    var setAppID = function () {
      ddo.set('cart.applicationID', value);
    }

    var setAppDecision = function () {
      ddo.set('cart.applicationDecision', value);
    }

    var setPageInfoProperty = function () {
      if (_isValidPageInfoArrayIndex(pageInfoArrayIndex)) {
        ddo.pageInfo.set(property, value, pageInfoArrayIndex);
      }
    }

    var commands = {
      'authenticated': setAuth
      , 'applicationId': setAppID
      , 'applicationDecision': setAppDecision
      , 'isModal': setPageInfoProperty
      , 'standardDART': setPageInfoProperty
      , 'standardDARTes': setPageInfoProperty
      , 'mboxCreateParam': setPageInfoProperty
      , 'mboxCreateParam_es': setPageInfoProperty
      , 'mboxCreateArgs': setPageInfoProperty
      , 'chat': setPageInfoProperty
      , 'saveAndReturnId': setPageInfoProperty
      , 'clickDART': setPageInfoProperty
    };

    if (commands[property]) {
      commands[property]();
    }
  }

  /**
   * Provides a localized pageID by adding the language abbreviation to the end of the pageID
   * if other than 'en'. Does not add if the pageID already ends in the provided language abbreviation.
   * @private
   * @param {string} pageID - Full pageID.
   * @param {string} language - Two letter abbreviation for the langauge (e.g.: 'es', 'en', etc.).
   * @returns {string}
   */
  var _localizePageID = function (pageID, language) {
    ctryCd = /([A-Za-z]){2}[\:\;_-]/
    language = (ctryCd.exec(language)) ? language.substr(0, ctryCd.exec(language).length) : language
    if (!language || language.toLowerCase().indexOf('en') > -1 || pageID.slice(-3).toUpperCase() === '_' + language.toUpperCase()) return pageID;
    else return pageID + '_' + language.toUpperCase();
  }

  /**
   * Add products to the digitalData object (DDO) without needing to manage the DDO structure.
   * Does not add if we find a product with a matching product ID already in the DDO.
   * @private
   * @param {object|array} products
   * @param {string|number} product.productID - Unique identifier for the product.
   * @param {string} product.productName - Friendly name of the product.
   * @param {string} product.productCategory - Category product belongs to.
   * @returns {void}
   */
  var _addProducts = function (products) {
    if (!Array.isArray(products) && typeof products !== 'object')
      throw new TypeError('addProducts requires a product object or an array of product objects.');

    products = _asArray(products);
    var ddoProducts = ddo.get('product', []);

    for (var i = 0, productsLen = products.length; i < productsLen; i++) {
      // If a product by the same ID already exists, no need to re-add it.
      if (_findArrayIndexByProperty(ddoProducts, 'productInfo.productID', products[i].productID, true) === -1) {
        ddoProducts.push({
          'productInfo': {
            'productID': products[i].productID
            , 'productName': products[i].productName
          }
          , 'category': {
            'primaryCategory': products[i].productCategory
          }
        });
      }
    }
  }

  /**
   * Add products to the digitalData object (DDO) cart without needing to manage the DDO structure.
   * Does not add if we find a product with a matching product ID already in the DDO.
   * @private
   * @param {object|array} products
   * @param {string|number} product.productID - Unique identifier for the product.
   * @param {string} product.productName - Friendly name of the product.
   * @param {string} product.productCategory - Category product belongs to.
   * @returns {void}
   */
  var _addProductsToCart = function (products) {
    if (!Array.isArray(products) && typeof products !== 'object')
      throw new TypeError('addProductsToCart requires a product object or an array of product objects.');

    products = _asArray(products);
    var ddoProducts = ddo.get('cart.item', []);

    for (var i = 0, productsLen = products.length; i < productsLen; i++) {
      // If a product by the same ID already exists, no need to re-add it.
      if (_findArrayIndexByProperty(ddoProducts, 'productInfo.productID', products[i].productID, true) === -1) {
        ddoProducts.push({
          'productInfo': {
            'productID': products[i].productID
            , 'productName': products[i].productName
          }
          , 'category': {
            'primaryCategory': products[i].productCategory
          }
          , 'attributes': {
            'cartViewTagFired': false
          }
        });
      }
    }

    // Save cart to the store so it can be loaded from other DOM instances.
    _saveCartToStore();

    // Fire Shop Action 5 tag (aka: cartView)
    cartView(products);
  }

  /**
   * Takes the current digitalData.cart object and saves it to the store.
   * @private
   * @returns {void}
   */
  var _saveCartToStore = function () {
    var cart = ddo.get('cart', {});
    var store = new Store('cart');
    var key = _getCartStoreKey();

    store.set(key, cart);
    store.save();
  }

  /**
   * Load the cart object from the store and if it's not empty, push it
   * into digitalData.cart.
   * @private
   * @returns {void}
   */
  var _loadCartFromStore = function () {
    var store = new Store('cart');
    var key = _getCartStoreKey();
    var cart = store.get(key);

    if (!_isEmpty(cart)) ddo.set('cart', cart);
  }

  /**
   * Return a key for saving the cart to the store. If the first page in
   * the pageInfo array has an appName, use that as a key. Otherwise, use the
   * string 'noKey'.
   * @private
   * @returns {string} key
   */
  var _getCartStoreKey = function () {
    return ddo.pageInfo.get('appName', 0, 'noKey');
  }

  /**
   * Converts a given value to a lowercase string for comparison.
   * @private
   * @param {string|number|bool} value - Value you wish to convert to a lowercase string.
   * @returns {string}
   */
  var _toLowerCaseString = function (value) {
    return (value + '').toLowerCase();
  }

  /**
   * When assigning existing object to a variable, JavaScript passes a reference
   * to the original object. Thefore, if we want to modify the parameters without modifying
   * the underling properties of the orignial object, we need to create a clone
   * @private
   * @param {object|array} source - Object or array to create a clone of.
   * @returns {object|array}
   */
  var _clone = function (source) {
    return JSON.parse(JSON.stringify(source));
  }

  /**
   * Returns the value of a cookie found to match the provided name.
   * @private
   * @param {string} name - Unique name of the cookie.
   * @returns {string}
   */
  var _readCookie = function (name) {
    var cookies = new Cookies();
    return cookies.get(name);
  }
  // akr Can we remove this?
  /**
   * This function grabs the 'CM_CJUID' and 'CM_CJSID' cookies (MDA Coremetrics Parameters) if they exist
   * Or listens for the MDA_OTT_VALIDATED event and grab the cookies.
   * Then the cookies are set as 'segmentValue' properties within the DDO
   */

  // var _setmdaCmParams = function () {

  //   /* if cookies exists, set segmentValues */
  //   if (_readCookie("CM_CJUID") && _readCookie("CM_CJSID")) {
  //     _setSegmentValue("cmcjuid", _readCookie("CM_CJUID"));
  //     _setSegmentValue("cmcjsid", _readCookie("CM_CJSID"));
  //   } else {
  //     /* if cookies do not exist, add an event listener for MDA_OTT_VALIDATED*/
  //     document.addEventListener('MDA_OTT_VALIDATED', function () {
  //       /* Set cookie values as segmentValues within the DDO */
  //       _setSegmentValue("cmcjuid", _readCookie("CM_CJUID"));
  //       _setSegmentValue("cmcjsid", _readCookie("CM_CJSID"));
  //     })
  //   }
  // }

  /**
   * Interact with the pageIDHistory array within the digitalData object.
   * @private
   * @requires digitalData.page.attributes.pageIDHistory
   * @param {string} command - The command you would like to perform against the
   *                 pageIDHistory. Supported values: add|prev|current
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you are adding to the history.
   * @param {string} [pageID] - The full pageID you are adding to the history.
   * @returns {void|string}
   */
  var _pageIDHistory = function (command, pageInfoArrayIndex, pageID) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex, true)) pageInfoArrayIndex = 0;
    if (!pageID) pageID = ddo.pageInfo.get('pageID', pageInfoArrayIndex);

    var history = ddo.get('page.attributes.pageIDHistory', []);
    var lastIndex = history.length - 1;

    var add = function () {
      if (history.length === 0 || history[lastIndex].pageID.toLowerCase() !== pageID.toLowerCase()) {
        history.push({
          'pageInfoArrayIndex': pageInfoArrayIndex,
          'pageID': pageID,
          'timestamp': new Date().getTime()
        });
      }
    };

    var prev = function () {
      if (history.length > 1) {
        history.pop();
      }

      return history[lastIndex - 1].pageID;
    }

    var current = function () {
      if (digitalData?.page?.attributes?.pageIDHistory?.length > 0) {
        return history[lastIndex].pageID
      } else {
        return digitalData.page.pageInfo[0].pageID
      }
    }

    var commands = {
      'add': add,
      'prev': prev,
      'current': current
    }

    if (commands[command]) {
      return commands[command]();
    }
  }

  /**
   * Pushes a messages to the data collector array.
   * @private
   * @param {object} message - Object containing necessary properties for data collection.
   * @returns {void}
   */
  var _pushToDataCollector = function (message) {
    win.dataCollector = win.dataCollector || [];

    _trigger('beforePushToDataCollector', message);
    win.dataCollector.push(message);
    _trigger('afterPushToDataCollector', message);
  }

  /**
   * Specify a function to execute when the DOM is fully loaded.
   * @public
   * @param {function} handler - A function to execute after the DOM is ready.
   * @returns {void}
   */
  var _ready = function (handler) {
    if (isDOMReady && typeof handler === 'function') {
      handler();
    } else {
      readyHandlers.push(handler);
    }
  }

  /**
   * Process handler functions in readyHandlers and execute.
   * @private
   * @returns {void}
   */
  var _processReadyHandlers = function () {
    readyHandlers.forEach(function (handler) {
      if (typeof handler === 'function') handler();
    });
    readyHandlers = [];
  }

  /**
   * To be called when the DOM is ready. Sets the domReadyFired flag to true to
   * avoid duplicate execution of page load. Starts _onLoad() function.
   * @private
   * @returns {void}
   */
  var _onDomReady = function () {
    if (!isDOMReady) {
      isDOMReady = true;
      _processReadyHandlers();
    }
  }

  /**
   * To be called when DOMContentLoaded event is raised. Cleans up event listner
   * and starts _onDomReady() function.
   * @private
   * @returns {void}
   */
  var _domLoadComplete = function () {
    doc.removeEventListener("DOMContentLoaded", _domLoadComplete);
    _onDomReady();
  }

  /**
   * Stops further execution of Tealium utags by setting the noview flag in
   * utag_cfg_ovrd object. Sets utagLoadStopped flag to true.
   * @deprecated
   * @private
   * @requires utag
   * @returns {void}
   */
  var _stopUtagLoad = function () {
    _log('utagLoadStopped: ' + utagLoadStopped, LOG_LEVEL.DEBUG);

    if (!utagLoadStopped) {
      _log('Stopping further utag loading.', LOG_LEVEL.INFO);
      utagLoadStopped = true;

      win.utag_cfg_ovrd = { noview: true };
    }
  }

  /**
   * Uses Tealium's utag.view() to start the loading of one, multiple, or
   * all Tealium tags. If call loads all tags, utagLoadStopped flag will
   * be set to false.
   * @deprecated
   * @private
   * @requires utag
   * @param {number|array} [utagIds] - A single int or an array of int
   *                       indicating which utags to fire. If null, all tags will load.
   * @returns {void}
   */
  var _loadUtags = function (utagIds) {
    if (utagIds) {
      utagIds = _asArray(utagIds);
      utag.view(utag_data, utagIds);
      _log('Loading utags:', utagIds, LOG_LEVEL.INFO);
    } else {
      utagLoadStopped = false;
      utag.view(utag_data);
      _log('Loading all utags.', LOG_LEVEL.INFO);
    }
  }

  /**
   * Determines if the provided value is a valid array index
   * of digitalData.page.pageInfo[n].
   * @private
   * @param {number} pageInfoArrayIndex - Index of the pageInfo
   *                 array you'd like to determine if is valid.
   * @param {boolean} warnOff - flag on whether to suppress warnings
   * @returns {bool}
   */
  var _isValidPageInfoArrayIndex = function (pageInfoArrayIndex, warnOff = false) {
    if (warnOff) return false;
    if (typeof pageInfoArrayIndex === 'undefined' || pageInfoArrayIndex === null || isNaN(pageInfoArrayIndex)) { _log('pageInfoArrayIndex provided is not a number. Defaulting to zero.', LOG_LEVEL.WARN); return false; }

    var pageInfo = ddo.get('page.pageInfo', []);
    if (pageInfoArrayIndex < 0 || pageInfoArrayIndex > pageInfo.length - 1) { _log('pageInfoArrayIndex provided is outside the bounds of the pageInfo array. Defaulting to zero.'); return false; }

    return true;
  }

  /**
   * Determines if the provided value is a valid array index
   * of digitalData.page.category.addlCategory[n].
   * @private
   * @param {number} addlCategoryArrayIndex - Index of the addlCategory
   *                 array you'd like to determine if is valid.
   * @returns {bool}
   */
  var _isValidAddlCategoryArrayIndex = function (addlCategoryArrayIndex) {
    if (typeof addlCategoryArrayIndex === 'undefined' || addlCategoryArrayIndex === null || isNaN(addlCategoryArrayIndex)) { _log('addlCategoryArrayIndex provided is not a number. Defaulting to zero.', LOG_LEVEL.WARN); return false; }

    var addlCategory = ddo.get('page.category.addlCategory', []);
    if (addlCategoryArrayIndex < 0 || addlCategoryArrayIndex > addlCategory.length - 1) { _log('addlCategoryArrayIndex provided is outside the bounds of the addlCategory array. Defaulting to zero.'); return false; }

    return true;
  }

  /**
   * Search through digitalData.page.pageInfo array for a specific pageID.
   * @private
   * @param {string} pageID - pageID we are searching for. Search is not case sensitive.
   * @returns {number} pageInfoArrayIndex
   */
  var _findPageInfoArrayIndexByPageID = function (pageID) {
    return _findArrayIndexByProperty(ddo.get('page.pageInfo', []), 'pageID', pageID, true);
  }

  /**
   * Find the index of the array where a property on the objects
   * within the array equals a specified value.
   * @private
   * @param {array} array - Array of objects to search through.
   * @param {string} property - Property on object within array to match on.
   * @param {string|number|bool} value - Value we are searching for.
   * @param {bool} [looseMatch=false] - Strings case insensitive, other
   *               matches are loose equality match.
   * @returns {number} arrayIndex
   */
  var _findArrayIndexByProperty = function (array, property, value, looseMatch) {
    var properties = property.split('.');
    var topPropertyName = properties[0];
    var lowerPropertyName;

    for (var i = 0, len = array.length; i < len; i += 1) {
      var prop = array[i][topPropertyName];
      if (!prop) array[i][topPropertyName] = [];
      for (var j = 1, propLen = properties.length; j < propLen; j++) {
        prop = prop[properties[j]];
        if (!prop) break;
      }

      if (!looseMatch && prop === value) return i;
      else if (looseMatch && typeof value === 'string' && _trim(_toLowerCaseString(prop)) === _trim(_toLowerCaseString(value))) return i;
      else if (looseMatch && prop == value) return i;
    }
    return -1;
  }

  /**
   * Finds the pageID by a unique value in the Dynamic_PageView_Element lookup table and attempts to
   * match the pageID with one in digitalData.page.pageInfo[n]. If a match is found, returns the
   * array index, otherwise returns -1. Associated value search is not case sensitive.
   * @private
   * @requires utag_data.Dynamic_PageView_Element - Comma deliminated string of pageID-_-associatedValue pairs.
   * @param {string} value - Unique string to match within the lookup table found after the -_- seperator.
   * @returns {number} pageInfoArrayIndex
   */
  var _findPageInfoArrayIndexByAssociatedValue = function (value) {
    if (!value) return -1;
    if (!utag_data.Dynamic_PageView_Element) return -1;

    var recordDelimiter = ',';
    var value = '-_-' + value.toLowerCase() + recordDelimiter;
    var utagLookupData = utag_data.Dynamic_PageView_Element.toLowerCase();
    if (utagLookupData.slice(-1) !== recordDelimiter) utagLookupData += recordDelimiter;

    var pageID;
    var associatedValuePosition = utagLookupData.indexOf(value);
    if (associatedValuePosition > -1) {
      var startPosition = utagLookupData.lastIndexOf(recordDelimiter, associatedValuePosition) + 1;
      pageID = utag_data.Dynamic_PageView_Element.substring(startPosition, associatedValuePosition);
    }

    if (!pageID) return -1;

    return _findPageInfoArrayIndexByPageID(pageID);
  }

  /**
   * Takes any value, if it's already an array returns itself. Otherwise, returns an array with
   * the value being the item within the array.
   * @private
   * @param {any} value
   * @returns {array}
   */
  var _asArray = function (value) {
    if (Array.isArray(value)) return value;
    return [value];
  }

  /**
   * Trims the segmentWrapperChar and whitespace from the begging and end of the provided string.
   * @private
   * @param {string} s - String to sanatize.
   * @returns {string} value
   */
  var _trim = function (s) {
    if (!s) return;

    if (s.length >= 1 && s[0] === segmentWrapperChar) s = s.slice(1);
    if (s.length >= 1 && s[s.length - 1] === segmentWrapperChar) s = s.slice(0, -1);

    return s.trim();
  }

  /**
   * Check an object to see if it has any properties.
   * @param {object} obj - Object to to check if is empty.
   * @returns {boolean}
   */
  function _isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  /**
   * Returns a the default value if no value is passed as the property.
   * @private
   * @param {*} _property
   * @param {*} _default
   * @returns {*}
   */
  var _setDefault = function (_property, _default) {
    return (typeof _property === 'undefined' || _property === null) ? _default : _property;
  }

  /**
   * Returns the top level domain for the provided string.
   * Example: _tld('www.bankofamerica.com') will return 'bankofamerica.com'
   * @private
   * @param {string} d
   * @returns {string}
   */
  var _tld = function (d) {
    d = d || win.location.hostname;
    var parts = d.split('.').reverse();

    if (parts.length === 1) return parts[0];

    if (parts.length > 2 && parts[1].length <= 3) {
      return parts.splice(0, 3).reverse().join('.');
    }

    return parts.splice(0, 2).reverse().join('.');
  }

  /**
   * Logs a deprecation warning to the console.
   * @private
   * @param {string} functionName - Name of the deprecated function called.
   * @param {string} [msg] - Additional message to log to the console.
   * @returns {void}
   */
  var _deprecationWarning = function (functionName, msg) {
    _log('Deprecation warning: ' + functionName + ' is deprecated. ' + msg, LOG_LEVEL.WARN);
  }

  /**
   * Logs a message and/or an object to the console based on your log settings in _settings.logLevel
   * @private
   * @param {string|object} msg - Message to be logged to the console.
   * @param {object|array} [obj1] - Object to be logged to the console along side the message.
   * @param {number} [severity=1] - Severity level of the message. Determines which log type to send to console and when to log based on _settings.logLevel.
   * @returns {void}
   */
  var _log = function (msg, obj1, severity) {
    if (!severity && typeof obj1 === 'number') {
      severity = obj1;
      obj1 = null;
    } else if (!severity) {
      severity = 1;
    }

    if (_settings.logLevel <= severity && typeof console !== "undefined") {
      var logType = LOG_LEVEL_STRINGS[severity];
      if (typeof logType != "string") logType = "log";
      if (console[logType]) { // if not defined, fallback to console.log()
        if (obj1) {
          console[logType](msg, obj1);
        } else {
          console[logType](msg);
        }
      } else if (console.log) {
        if (typeof obj1 === 'object') msg += '\n' + JSON.stringify(obj1, null, 2);
        console.log(logType.toUpperCase() + ": " + msg);
      }
    }
  }

  /**
   * Return a unified timestamp that takes into account the timezone offset.
   * @private
   * @returns {timestamp}
   */
  var _timestamp = function () {
    var e = new Date;
    return e.getTime() - e.getTimezoneOffset()
  }

  /**
   * This function serves as an API to set application details in the digitalData object agnostically of data collection tool.
   * @param {object} payload contains the application details to be set in the ddo
   * @returns {void}
   */
  var _setApplicationDetails = function (payload) {
    if (typeof payload !== 'object') {
      _log('Payload is not an object', LOG_LEVEL.ERROR);
      return;
    }

    if (!window.digitalData) {
      _log('digitalData object is not available', LOG_LEVEL.ERROR);
      return;
    }

    var cart = window.digitalData.cart || {
      cartID: '',
      applicationID: null,
      attributes: {},
      item: [],
      fulfilmentID: null
    };

    for (var prop in payload) {
      if (payload.hasOwnProperty(prop)) {
        if (cart.hasOwnProperty(prop)) {
          cart[prop] = payload[prop];
        }
      }
    }

    window.digitalData.cart = cart;
  }
  /**
   * This function grabs the applicationID for credit card applications and adds it to the ddo
   * @returns {string} applicationID
   */
  var _getApplicationId = function () {
    // grab applicationID from global scope if available
    if (window.cm) return window.cm.orderID;
  }

  /**
   * This function repeats in 100ms interval until it is able to set the celebrus content key in the ddo.
   *
   * @private
   * @requires ddo.user.sharedIDs to be defined
   * @returns {undefined}
   */
  var getCelebrusContentKey = function () {
    if (ddo.get('user.sharedIDs') === null) {
      ddo.set('user.sharedIDs', {});
    }
    var accessCelebrusContentKey = setInterval(function () {
      if (ddo.get('user.sharedIDs.celebrus') !== null) {
        return clearInterval(accessCelebrusContentKey);
      }

      if (win.celebruscontentKey) {
        ddo.set('user.sharedIDs.celebrus', win.celebruscontentKey);
        _trigger('celebrusContentKeyAvailable');
      }
    }, 100);
  };


  /**
   * Take a URI value and decompose it returning an object with the individual pieces
   * as a set of key/value pairs.
   *
   * @private
   * @param {*} uri
   * @returns {object}
   */
  var decomposeUri = function (uri) {
    var a = doc.createElement('a');
    a.href = uri || doc.referrer;

    var pathname = a.pathname.replace(/^\//, ''); // Normalize initial slash, i.e., IE6 'search' vs Chrome '/search'

    return {
      url: a.host + '/' + pathname,
      hash: a.hash,
      host: a.host,
      hostname: a.hostname,
      pathname: pathname,
      protocol: a.protocol,
      uriParams: (function (retVal, s) {
        if (s !== "") {
          polyfills.array.map(s.split('&'), function (elem) {
            var k = elem.split('=');
            retVal[k.shift()] = k.shift();
          });
          return retVal;
        } else return '';
      }({}, a.search.replace(/^(\/|\?)?|\/$/g, ''))) // Remove leading ? from query string value
    };
  }

  // here lies eventify, a good idea well executed, but an incomplete solution.

    /**
     * setting a mutation observer on the head element for third party scripts
     * once we know a script is ready we can execute subsequent methods
     * ex: bactm.scriptReady('thirdPartyVendor', { childList: true }, callbackMethod)
     * @param {string} src 
     * @param {object} options 
     * @callback runFunction
     */
    const _scriptReady = (src, options = { childList: true }, runFunction = () => {}) => {
      const observingHead = new MutationObserver(function(mutationList, observer) {
        const vendorScript = document.querySelector(`script[src*="${src}"]`);
        if (vendorScript && vendorScript.src && vendorScript.src.includes(src)) {
          runFunction()
          observer.disconnect();
        }
      })
      const head = document.querySelector("head");
      observingHead.observe(head, options)
    }

  // ===========================================================================
  // End helper functions.
  // ===========================================================================

  // ===========================================================================
  // Trigger & Listener functions.
  // ===========================================================================

  var _listener = function (eventKey, listener) {
    var isListenerQueued = queuedEvents.hasOwnProperty(eventKey);

    // if the event was queued, fire the listener with the queued info
    if (isListenerQueued) {
      queuedEvents[eventKey] = queuedEvents[eventKey] || [];
      queuedEvents[eventKey].forEach(function (info) {
        listener(typeof info !== 'undefined' ? info : {});
      });

      delete queuedEvents[eventKey];
    }

    // Create the event's object if not yet created.
    publishedEvents[eventKey] = publishedEvents[eventKey] || [];

    // Add the listener to the queue
    var index = publishedEvents[eventKey].push(listener) - 1;

    return {
      remove: function () {
        delete publishedEvents[eventKey][index];
      }
    }
  }


  var _trigger = function (eventKey, info) {
    // If the event doesn't exist then there are no listeners in the queue, just leave.
    var isListenerRegistered = publishedEvents.hasOwnProperty(eventKey);
    var isListenerQueued = queuedEvents.hasOwnProperty(eventKey);

    // if a listener is not registered, check if it has been queued.
    // if it hasn't then queue it and leave.
    if (!isListenerRegistered) {
      if (isListenerQueued) return;
      queuedEvents[eventKey] = queuedEvents[eventKey] || [];
      info = info || {};
      return queuedEvents[eventKey].push(info);
    }

    // if the listener is registered and still in the queue, delete it from the queue
    if (isListenerQueued) delete queuedEvents[eventKey];

    // Cycle through the published events queue and fire listeners.
    publishedEvents[eventKey].forEach(function (listener) {
      listener(typeof info !== 'undefined' ? info : {});
    });
  }

  // ===========================================================================
  // End Triggers & Listener functions.
  // ===========================================================================

  // ===========================================================================
  // dataCollector Queue functions.
  // ===========================================================================

  var _dataCollectorHelper = function (dataCollector, listener, listenToPast) {
    this._dataCollector = dataCollector;
    this._listener = listener || function () { };
    this._executingListener = false;
    this._unprocessed = [];

    var oldPush = dataCollector.push;
    var that = this;
    dataCollector.push = function () {
      var messages = [].slice.call(arguments, 0);
      var result = oldPush.apply(dataCollector, messages);
      that._processMessages(messages);
      return result;
    }

    this._processMessages(dataCollector, !listenToPast);
  }
  // win['dataCollectorHelper'] = _dataCollectorHelper;

  _dataCollectorHelper.prototype._processMessages = function (messages, skipListener) {
    this._unprocessed.push.apply(this._unprocessed, messages);

    while (this._executingListener === false && this._unprocessed.length > 0) {
      var update = this._unprocessed.shift();
      if (!skipListener) {
        this._executingListener = true;
        this._listener(update);
        this._executingListener = false;
      }
    }
  }

  // ===========================================================================
  // End dataCollector Queue functions.
  // ===========================================================================

  // ===========================================================================
  // digitalData Object - Getter and Setter functions.
  // ===========================================================================

  var ddo = {};

  /**
   * Returns the value within the digitalData object. If a portion of the path doesn't exist,
   * return the defaultValue.
   *
   * @public
   * @param {string} key - The path of the property to return.
   * @param {*} (defaultValue=null) - The value to return if the property isn't set.
   * @returns {*} value.
   */
  ddo.get = function (key, defaultValue) {
    if (typeof key !== 'string') throw new TypeError('Key must be a dot seperated string.');
    defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue;

    var tree = key.split('.');
    var base = window.digitalData || {};
    for (var i = 0, len = tree.length; i < len; i++) {
      var propKey = tree[i];

      // See if we are referencing an array in the path.
      var arrInd = propKey.indexOf('[');
      if (arrInd > -1) {
        // Get the name portion of the array we are referencing.
        var arrPropKey = propKey.substring(0, arrInd);
        if (!Array.isArray(base[arrPropKey]) || base[arrPropKey].length === 0)
          return defaultValue;

        // Get the index value of the array we are referencing.
        var index = propKey.substring(arrInd + 1, propKey.length - 1);
        if (isNaN(index)) return defaultValue;

        // If the index it outside the bounds of the array, return the defaultValue.
        if (index < 0 || index >= base[arrPropKey].length) return defaultValue;

        // If this is the last property in the path, return the value.
        if (i === len - 1) return base[arrPropKey][index];

        // Set our base and continue on in the path.
        base = base[arrPropKey][index];
        continue;
      }

      // Check if the property exists.
      var baseHasProperty = base.hasOwnProperty(propKey);

      // If the property in the path exists, and we have further to go
      // in our path, set the base and continue on in the path.
      if (baseHasProperty && i < len - 1) {
        base = base[propKey];
        continue;
      }

      // If the property exists, return the value. Otherwise return the defaultValue.
      return baseHasProperty ? base[propKey] : defaultValue;
    }
  }

  /**
   * Sets the value within the digitalData object. If a portion of the path doesn't exist,
   * it's created.
   *
   * @public
   * @param {string} key - The path of the property to set.
   * @param {*} value - The value to set.
   * @returns {*} value.
   */
  ddo.set = function (key, value) {
    if (typeof key !== 'string') throw new TypeError('Key must be a dot seperated string.');
    if (typeof value === 'undefined') throw new TypeError('A value must be provided.');

    var tree = key.split('.');
    var base = window.digitalData || {};

    if (key === 'user.glancePartyID') _trigger('vendor:glance:auth', value)

    for (var i = 0, len = tree.length; i < len; i++) {
      var propKey = tree[i];

      // See if we are referencing an array in the path.
      var arrInd = propKey.indexOf('[');
      if (arrInd > -1) {
        // Get the name portion of the array we are referencing.
        var arrPropKey = propKey.substring(0, arrInd);
        if (!Array.isArray(base[arrPropKey]) && typeof base[arrPropKey] !== 'undefined')
          throw new TypeError('You referenced an array index but the property ' +
            arrPropKey + ' is not an array.');

        // Get the index value of the array we are referencing.
        var index = parseInt(propKey.substring(arrInd + 1, propKey.length - 1));
        if (isNaN(index)) throw new TypeError('The array index must be a number.');

        // Get the array and check its length.
        base[arrPropKey] = base[arrPropKey] || [];
        var baseLen = base[arrPropKey].length;

        // If the index it outside the bounds of the array, throw an error.
        if (index !== 0 && (index < 0 || index > baseLen))
          throw new RangeError('Trying to save to an index outside the range of the array.');

        // Check if we are at the end of the path.
        if (i === len - 1) {
          // The index requested is one greater than the current length.
          // In this case, we can go ahead and push the value onto the end.
          if (index === baseLen) {
            base[arrPropKey].push(value);
            return value;
          }

          // We are within the bounds of the array and at the end of the
          // path, so set the value against the array index provided.
          base[arrPropKey][index] = value;
          return value;
        };

        // The index requested is one greater than the current length.
        // In this case, we can go ahead and push a blank object onto the end.
        if (index === baseLen) base[arrPropKey].push({});

        // We aren't at the end of the path, so we know to set the a property
        // on the index provided, there needs to be an object there.
        if (typeof base[arrPropKey][index] !== 'object')
          throw new TypeError('Cannot write to a non-object property.');

        // Set our base and continue on in the path.
        base = base[arrPropKey][index];
        continue;
      }

      // Check if we are at the end of the path.
      if (i === len - 1) {
        // We are at the end of the path, but we cannot set a property on a non-object.
        if (typeof base !== 'object')
          throw new TypeError('Cannot write to a non-object property.');

        // We can set the value and get out of here.
        base[propKey] = value;
        return value;
      }

      // Set our base and continue on in the path.
      base[propKey] = base[propKey] || {};
      base = base[propKey];
    }

  }

  // Shortcuts for working with the pageInfo object.
  ddo.pageInfo = {};

  /**
   * Shortcut to retrieve pageInfo properties from within the digitalData.page.pageInfo array.
   *
   * @public
   * @param {string} key - The path of the property to return.
   * @param {string} [index=0] - The pageInfo array index.
   * @param {*} [defaultValue=null] - The value to return if the property isn't set.
   * @returns {*} value.
   */
  ddo.pageInfo.get = function (key, index, defaultValue) {
    return ddo.get('page.pageInfo[' + (index || 0) + ']' + (key ? ('.' + key) : ''), defaultValue);
  }

  /**
   * Shortcut to set the value within the digitalData.page.pageInfo object. If a portion of
   * the path doesn't exist, it's created.
   *
   * @public
   * @param {string} key - The path of the property to set.
   * @param {*} value - The value to set.
   * @param {number} [index=0] - The pageInfo array index.
   * @returns {*} value.
   */
  ddo.pageInfo.set = function (key, value, index) {
    if (typeof value === 'undefined') { value = key; key = null; }
    return ddo.set('page.pageInfo[' + (index || 0) + ']' + (key ? ('.' + key) : ''), value);
  }

  // ===========================================================================
  // End digitalData Object - Getter and Setter functions.
  // ===========================================================================

  // ===========================================================================
  // SudoPromise API functions.
  // ===========================================================================

  var SudoPromise = function (cb) {
    var self = this
      , _state = 0
      , _result = null
      , _deferred = null;

    self._onResolved = null;
    self._onRejected = null;

    var resolve = function (result) {
      if (_state !== 0) return;

      _state = 1;
      _result = result;

      if (_deferred) self.handle(_deferred);
    }

    var reject = function (reason) {
      if (_state !== 0) return;

      _state = 2;
      _result = reason;

      if (_deferred) self.handle(_deferred);
    }

    self.handle = function (handler) {
      if (_state === 0) {
        _deferred = handler;
        return;
      }

      if (_state === 1) {
        handler.onResolve(_result);
        _deferred = null;
      } else if (_state === 2 && handler.onRejection) {
        handler.onRejection(_result);
        _deferred = null;
      }
    }

    cb(resolve, reject);
  };

  SudoPromise.prototype.then = function (onResolve, onRejection) {
    var self = this;

    if (onResolve) self._onResolved = onResolve;
    if (onRejection) self._onRejected = onRejection;

    self.handle({
      onResolve: self._onResolved,
      onRejection: self._onRejected
    });

    return self;
  }

  SudoPromise.prototype.catch = function (onRejection) {
    this.then(null, onRejection);
  }

  // ===========================================================================
  // End SudoPromise API functions.
  // ===========================================================================

  // ===========================================================================
  // AJAX API functions.
  // ===========================================================================

  var Ajax = function () {
    if (!(this instanceof Ajax)) return new Ajax();
  }

  Ajax.prototype.xhr = function (opt) {
    return new _ajaxHelpers.Promise(function (resolve, reject) {
      try {
        var url, params = opt.data || null;

        if (typeof opt === 'string') url = opt;
        if (!opt) opt = {};

        var method = opt.method || 'GET';
        url = url || opt.url || '';
        var async = (typeof opt.sync !== 'undefined') ? !opt.sync : true;

        if (!url) throw 'A URL is required.';

        var xhr = new XMLHttpRequest();
        xhr.open(method, url, async, opt.user, opt.password);

        if (opt.contentType === 'json') xhr.setRequestHeader("Content-Type", "application/json");
        if (opt.data && ((!opt.contentType && typeof opt.data !== 'string') || opt.contentType === 'json')) params = JSON.stringify(opt.data);
        if (opt.withCredentials) xhr.withCredentials = true;

        if (opt.headers) {
          for (key in opt.headers) {
            xhr.setRequestHeader(key, opt.headers[key]);
          }
        }

        xhr.onerror = function () {
          reject('Uncaught AJAX error raised. Check the URL.');
        }

        xhr.onload = function () {
          if (xhr.status === 200) resolve(xhr.responseText);
          else reject('Request failed. Returned status of ' + xhr.status);
        }

        xhr.send(params);
      } catch (e) {
        reject(e);
        reportError(e);
      }
    });
  }

  Ajax.prototype.jsonp = function (url, jsonp, cb) {
    var body = doc.body || doc.getElementsByTagName('body')[0];

    win[jsonp] = function (data) {
      delete win[jsonp];
      body.removeChild(script);
      cb(data);
    };

    var script = doc.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + jsonp;
    body.appendChild(script);
  }

  Ajax.prototype.post = function (url, data, opt) {
    var postOpts = {
      method: 'POST'
      , url: url
      , data: data
    };
    polyfills.object.assign(postOpts, opt);

    return this.xhr(postOpts);
  }

  Ajax.prototype.get = function (url, opt) {
    var getOpts = {
      method: 'GET'
      , url: url
    };
    polyfills.object.assign(getOpts, opt);

    return this.xhr(getOpts);
  }

  // ===========================================================================
  // End AJAX API functions.
  // ===========================================================================

  // ===========================================================================
  // AJAX helper functions.
  // ===========================================================================

  var _ajaxHelpers = {};

  if (typeof Promise === 'function') _ajaxHelpers.Promise = Promise;
  else _ajaxHelpers.Promise = SudoPromise;

  // ===========================================================================
  // End AJAX helper functions.
  // ===========================================================================

  // ===========================================================================
  // Store API functions.
  // ===========================================================================

  var Store = function (key, config) {
    if (!(this instanceof Store)) return new Store(key, config);

    this._config = (config && typeof config !== 'boolean') ? config : {};
    this._key = key;
    this._store = {};

    // Making this backwards compatible for when second argument was useLocalStorage bool.
    if (!config || typeof config === 'boolean') {
      this._config.type = config ? 'localStorage' : 'sessionStorage';
    }

    if (key) return this.load(key, config);
  }

  Store.prototype.load = function (key, config) {
    if (typeof key !== 'string') return this;
    this._key = key;

    config = config || {};
    if (config.type) this._config.type = _setDefault(config.type, 'sessionStorage');

    var cmdKey = _storeHelpers.cmds[this._config.type];
    this._helpers = _storeHelpers[cmdKey](this._config);
    this._store = this._helpers.load(key);

    return this;
  }

  Store.prototype.all = function () {
    return this._store;
  }

  Store.prototype.get = function (key) {
    if (typeof key !== 'string' || !this._store[key]) return null;

    return this._store[key];
  }

  Store.prototype.set = function (key, value) {
    if (typeof key !== 'string' || typeof value === 'undefined') return;

    this._store[key] = value;
  }

  Store.prototype.remove = function (key) {
    if (typeof key !== 'string') return;
    delete this._store[key];
  }

  Store.prototype.save = function (key) {
    var _saveKey = key || this._key;
    if (typeof _saveKey !== 'string') {
      _log('Invalid storage key provided. Unable to save to ' + this._config.type + '.', LOG_LEVEL.WARN);
      return;
    };

    try {
      this._helpers.save(_saveKey, this._store);
      if (key) this._key = key;
    } catch (e) {
      _log('Unable to save to ' + this._config.type + '.', LOG_LEVEL.WARN);
      reportError(e);
    }
  }

  Store.prototype.clear = function () {
    this._store = {};
    this.save();
  }

  Store.prototype.delete = function () {
    try {
      this._helpers.save(this._key, null);
      this._store = {};
    } catch (e) {
      _log('Unable to remove ' + this._config.type + ' item.', LOG_LEVEL.WARN);
      reportError(e);
    }
  }

  // ===========================================================================
  // End Store API functions.
  // ===========================================================================

  // ===========================================================================
  // Store API helper functions.
  // ===========================================================================
  var _storeHelpers = {};

  _storeHelpers.cmds = {
    'sessionStorage': 'storage'
    , 'localStorage': 'storage'
    , 'sessionCookie': 'cookie'
    , 'cookie': 'cookie'
  }

  _storeHelpers.cookie = function (config) {
    var _cookieName = 'bactm'
      , _cookieConfig = {
        domain: _tld()
      };

    config = config || {};

    if (config.type
      && typeof config.type === 'string'
      && config.type.indexOf('session') === -1
    ) {
      _cookieName = 'bactm_lts';
      _cookieConfig['expires'] = 365;
      _cookieConfig['sameSite'] = 'none';
      _cookieConfig['secure'] = true;
    }

    var _cookies = new Cookies()
      , _bactmCookie = _cookies.getJSON(_cookieName) || {};

    var _load = function (key) {
      return _bactmCookie[key] || {};
    }

    var _save = function (key, value) {
      _cookies._refresh();
      if (value === null) delete _bactmCookie[key];
      else _bactmCookie[key] = value;

      _cookies.set(_cookieName, _bactmCookie, _cookieConfig);
    }

    return {
      load: _load
      , save: _save
    }
  }

  _storeHelpers.storage = function (config) {
    var _storage = window[config.type];

    var isJSONString = function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

    var _load = function (key) {
      var _data;

      try {
        _data = isJSONString(_storage.getItem(storageKeyPrefix + key)) ?
          JSON.parse(_storage.getItem(storageKeyPrefix + key)) :
          _storage.getItem(storageKeyPrefix + key);
      } catch (e) {
        // _log('Unable to read from ' + config.type + '.', LOG_LEVEL.WARN);
        console.log('Unable to read from ' + config.type + '.');
        reportError(e);
      }

      return _data || {};
    }

    var _save = function (key, value) {
      var _storageKey = storageKeyPrefix + key;

      if (value === null) _storage.removeItem(_storageKey);
      else _storage.setItem(_storageKey, JSON.stringify(value));
    }

    return {
      load: _load
      , save: _save
    }
  }
  // ===========================================================================
  // End Store API helper functions.
  // ===========================================================================

  // ===========================================================================
  // Cookies API functions.
  // ===========================================================================

  var Cookies = function () {
    if (!(this instanceof Cookies)) return new Cookies();

    var self = this;

    self._refresh = function () {
      self._cookies = doc.cookie ? doc.cookie.split('; ') : [];
      self._cookieCache = {};
    }

    self._refresh();
  }

  Cookies.prototype.set = function (key, value, options) {
    if (!key) return;

    var options = options || {};
    options['path'] = options.path || '/';

    if (typeof options.expires === 'number') {
      var expires = new Date();
      expires.setMilliseconds(expires.getMilliseconds() + options.expires * 864e+5);
      options.expires = expires;
    } else if (typeof options.expires === 'string') {
      try {
        var expires = new Date(Date.parse(options.expires));
        options.expires = expires;
      } catch (e) {
        reportError(e);
        delete options.expires;
      }
    }

    // We're using "expires" because "max-age" is not supported by IE
    options.expires = options.expires ? options.expires.toUTCString() : '';

    var rawKey = key;
    key = encodeURIComponent(String(key));

    try {
      result = JSON.stringify(value);
      if (/^[\{\[]/.test(result)) {
        value = encodeURIComponent(result);
      }
    } catch (e) { }

    var stringifiedAttributes = '';

    for (var attributeName in options) {
      if (!options[attributeName]) {
        continue;
      }
      stringifiedAttributes += '; ' + attributeName;
      if (options[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += '=' + options[attributeName];
    }

    this._cookieCache[rawKey] = value;
    return (doc.cookie = key + '=' + value + stringifiedAttributes);
  }

  Cookies.prototype.get = function (key, options) {
    var result
      , options = options || {}
      , rdecode = /(%[0-9A-Z]{2})+/g;

    if (!key || options.bustCache) this._refresh();

    if (this._cookieCache[key]) return this._cookieCache[key];
    if (!key) result = {};

    for (var i = 0; i < this._cookies.length; i++) {
      var parts = this._cookies[i].split('=')
        , cookie = parts.slice(1).join('=');

      if (cookie.charAt(0) === '"') {
        cookie = cookie.slice(1, -1);
      }

      try {
        var name = parts[0].replace(rdecode, decodeURIComponent);
        cookie = cookie.replace(rdecode, decodeURIComponent);

        if (options.json) {
          try {
            cookie = JSON.parse(decodeURIComponent(cookie));
          } catch (e) { }
        }

        if (key === name) {
          result = cookie;
          this._cookieCache[name] = cookie;
          break;
        }

        if (!key) {
          result[name] = cookie;
          this._cookieCache[name] = cookie;
        }
      } catch (e) { }
    }

    return result;
  }

  Cookies.prototype.getJSON = function (key) {
    return this.get(key, { bustCache: true, json: true });
  }

  Cookies.prototype.remove = function (key) {
    if (this._cookieCache[key]) delete this._cookieCache[key];
    this.set(key, '', { expires: -1 });
  }

  // ===========================================================================
  // End Cookies API functions.
  // ===========================================================================

  // ===========================================================================
  // QueryString API functions.
  // ===========================================================================

  var QueryString = function (uri) {
    if (!(this instanceof QueryString)) return new QueryString(uri);
    if (!uri && uri !== '') uri = window.location.href;

    var startIndex = uri.indexOf('?')
      , endIndex = uri.indexOf('#')
      , start = startIndex > -1 ? startIndex + 1 : 0
      , end = endIndex > -1 ? endIndex : uri.length
      , parts = uri.substring(start, end).split('&')
      , storage = {};

    if (startIndex > -1) {
      for (var i = 0, len = parts.length; i < len; i++) {
        var thisOne = parts[i].split('=')
          , name = thisOne[0]
          , value = thisOne.length > 1 ? thisOne[1] : '';

        storage[name] = value;
      }
    }

    this._cache = storage;
  }

  QueryString.prototype.get = function (key) {
    return this._cache[key];
  }

  QueryString.prototype.set = function (key, value) {
    if (!key) return;
    this._cache[key] = value;
  }

  QueryString.prototype.load = function (keyVal) {
    if (typeof keyVal !== 'object') return;

    for (key in keyVal) {
      if (keyVal.hasOwnProperty(key)) this.set(key, keyVal[key]);
    }
  }

  QueryString.prototype.toString = function () {
    var builder = [];

    for (key in this._cache) {
      if (this._cache.hasOwnProperty(key)) {
        builder.push(key + '=' + encodeURIComponent(this._cache[key]));
      }
    }

    return builder.join('&');
  }

  // ===========================================================================
  // End QueryString API functions.
  // ===========================================================================

  // ===========================================================================
  // PixelTag API functions.
  // ===========================================================================

  var PixelTag = function (url, id) {
    // cannot continue if no URL is provided.
    if (!url) return;

    if (!(this instanceof PixelTag)) return new PixelTag(url);

    var img = doc.createElement('img');
    img.src = url;
    img.style = 'display:none;position:absolute;';
    img.width = 0;
    img.style.width = 0;
    img.height = 0;
    img.style.height = 0;
    img.alt = "Marketing Pixel";
    img.setAttribute('aria-hidden', true);

    if (typeof id === 'string') img.id = id;

    this._img = img;
  }

  PixelTag.prototype.appendTo = function (parent) {
    if (!parent.appendChild) return;
    parent.appendChild(this._img);
  }

  PixelTag.prototype.appendToBody = function () {
    var body = doc.body || doc.getElementsByTagName('body')[0];
    this.appendTo(body);
  }

  // ===========================================================================
  // End PixelTag API functions.
  // ===========================================================================

  // ===========================================================================
  // Polyfills
  // ===========================================================================

  /**
   * Due to some bad coding practice at BAC, true polyfills have adverse effects
   * on other's code, particularly in some Borneo sites. Once Borneo support is
   * no longer required, the following can be replaced.
   */

  var polyfills = {
    object: {}
    , array: {}
    , string: {}
  };

  polyfills.object.assign = Object.assign;
  if (typeof polyfills.object.assign != 'function') {
    polyfills.object.assign = function (target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    };
  }

  polyfills.array.find = function (ourArray, predicate) {
    if (ourArray.find) return ourArray.find(predicate);

    if (ourArray == null) {
      throw new TypeError('array.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    var list = Object(ourArray);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  }

  polyfills.array.map = function (arr, fun) {
    if (arr.map) return arr.map(fun);

    // Adapted from MDN
    if (arr === void 0 || arr === null) {
      throw new TypeError();
    }

    var t = Object(arr);
    var len = t.length >>> 0;

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++) {
      if (i in t) {
        res[i] = fun.call(thisp, t[i], i, t);
      }
    }

    return res;
  }

  /**
   * Array.from polyfill adapted from MDN
   */
  polyfills.array.from = function (arrayLike) {
    if (Array.from) return Array.from(arrayLike);

    var toStr = Object.prototype.toString;
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var items = Object(arrayLike);
    var C = this;
    var T;

    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) return 0;
      if (number === 0 || !isFinite(number)) return number;
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    if (arrayLike == null) {
      throw new TypeError('Array.from requires an array-like object - not null or undefined');
    }

    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    if (typeof mapFn !== 'undefined') {
      if (!isCallable(mapFn)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function');
      }

      if (arguments.length > 2) {
        T = arguments[2];
      }
    }

    var len = toLength(items.length);
    var A = isCallable(C) ? Object(new C(len)) : new Array(len);
    var k = 0;
    var kValue;

    while (k < len) {
      kValue = items[k];
      if (mapFn) {
        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
      } else {
        A[k] = kValue;
      }

      k += 1;
    }

    A.length = len;
    return A;
  }

  /**
   * String.includes polyfill adapted from MDN
   */
  polyfills.string.includes = function (haystack, search, start) {
    if (typeof start !== 'number') start = 0;
    if (haystack.includes) return haystack.includes(search, start);
    return (start + search.length > haystack.length) ? false : haystack.toString().indexOf(search, start) !== -1;
  }

  /**
   * Nested object property existence check polyfill adapted from:
   * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_get
   */

  polyfills.object.exists = function (obj, path, defaultValue) {
    function travel(regexp) {
      return String.prototype.split.call(path, regexp).filter(Boolean).reduce(function (res, key) {
        return res !== null && res !== undefined ? res[key] : res;
      }, obj);
    };

    var result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj || result === null ? defaultValue : true;
  }


  // ===========================================================================
  // End Polyfills
  // ===========================================================================

  // ===========================================================================
  // customEvents functions.
  // ===========================================================================

  var _raiseCustomEvent = function (eventKey, details) {
    _pushToDataCollector({
      event: 'customEvent',
      eventKey: eventKey,
      options: details
    });
  }

  // ===========================================================================
  // End customEvents functions.
  // ===========================================================================

  // ===========================================================================
  // Log beacon functions.
  // ===========================================================================

  var _getBaseUrl = function () {
    if (doc.baseURI) return doc.baseURI;

    var pathArray = location.href.split('/')
      , protocol = pathArray[0]
      , host = pathArray[2]
      , url = protocol + '//' + host + '/';

    return url;
  }

  var _getBeaconUrl = function () {
    var base = _getBaseUrl()
      , splunkLogTransportUrl = env === 'prod' || base.indexOf('localhost') > -1
        ? 'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/bactm/bactm-transport.gif'
        : base + 'content/images/ContextualSiteGraphics/bactm/bactm-transport.gif'
      , baseUrl = splunkLogTransportUrl + '?d='
      , q = [];

    for (var i = 0, len = logQ.length; i < len; i++) {
      var d = [];

      if (!Array.isArray(logQ[i] || typeof logQ[i] === 'object')) {
        for (var key in logQ[i]) {
          d.push(encodeURIComponent(key) + '~' + encodeURIComponent(logQ[i][key]));
        }
      }

      if (d.length > 0) q.push(d.join('~~'));
    }

    if (q.length > 0) return baseUrl + q.join('-_-');
    else return baseUrl;
  }

  var _sendLogBeacon = function () {
    if (logQ.length > 0) {
      var _url = _getBeaconUrl();
      if (navigator && typeof navigator.sendBeacon === 'function') {
        navigator.sendBeacon(_url);
      } else {
        var client = new XMLHttpRequest();
        client.open("POST", _url, false); // third parameter indicates sync xhr
        client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        client.send();
      }
    }
  }

  // ===========================================================================
  // End log beacon functions.
  // ===========================================================================

  // ===========================================================================
  // Translation functions to support legacy bactm_ functions.
  // ===========================================================================

  /**
   * Deprecated function for calling a pageview.
   * @public
   * @deprecated
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from digitalData.page.pageInfo[n] you'd call a pageview for.
   * @returns {void}
   */
  var _beginDataCollection = function (pageInfoArrayIndex) {
    _deprecationWarning('bactm_beginDataCollection', 'Consider using bactm.pageview() instead.');
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    pageview(pageInfoArrayIndex);
  }

  /**
   * Deprecated function for calling a pageview.
   * @public
   * @deprecated
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd call a pageview for.
   * @returns {void}
   */
  var _capturePageview = function (pageInfoArrayIndex) {
    _deprecationWarning('bactm_capturePageview', 'Consider using bactm.pageview() instead.');
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    pageview(pageInfoArrayIndex);
  }

  /**
   * Deprecated function for calling a productview.
   * @public
   * @deprecated
   * @returns {void}
   */
  var _bactmProductView = function () {
    _deprecationWarning('bactm_productView', 'Consider using bactm.productview() instead.');
    productview();
  }

  /**
   * Deprecated function for calling a pageview.
   * @public
   * @deprecated
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from
   *                 digitalData.page.pageInfo[n] you'd call a pageview for.
   * @param {boolean} [useSecondaryCategory] - Determine if to use
   *                  digitalData.page.category.addlCategory instead of primaryCategory.
   * @param {array} [segments] - Additional segments to be added to the pageview call.
   * @returns {void}
   */
  var _captureAdditionalPageview = function (pageInfoArrayIndex, useSecondaryCategory, segments) {
    _deprecationWarning('bactm_captureAddlPageview', 'Consider using bactm.pageview() instead.');
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;

    var options = {};
    options['categoryType'] = !useSecondaryCategory ? 'primary' : 'additional';
    if (segments) options['segments'] = segments;

    pageview(pageInfoArrayIndex, options);
  }

  /**
   * Deprecated function for calling a pageview.
   * @public
   * @deprecated
   * @param {string} associatedValue - Unique key to match key in lookup table
   *                 to find the pageID for this pageview call.
   * @returns {void}
   */
  var _captureDynamicPageview = function (associatedValue) {
    _deprecationWarning('bactm_captureDynamicPageview', 'Consider using bactm.pageview(associatedValue, { lookupType: \'associatedValue\' }) instead.');
    pageview(associatedValue, { lookupType: 'associatedValue' });
  }

  /**
   * Deprecated function no longer has any functional use as data collection
   * libraries now load asynchronously via tag manager.
   * @public
   * @deprecated
   * @returns {void}
   */
  var _loadDataCollection = function () {
    _deprecationWarning('bactm_loadDataCollection', 'Data collection libraries are now loaded asynchronously via tag manager.');
  }

  /**
   * Deprecated function to add products to the DDO without needing to manage the DDO structure.
   * Does not add if we find a product with a matching product ID already in the DDO.
   * @public
   * @param {string|number} productID - Unique identifier for the product.
   * @param {string} productName - Friendly name of the product.
   * @param {string} productCategory - Category product belongs to.
   * @returns {void}
   */
  var _bactmAddProducts = function (productID, productName, productCategory) {
    _deprecationWarning('bactm_addProducts', 'Consider using bactm.addProducts() instead.');

    var product = {
      'productID': productID
      , 'productName': productName
      , 'productCategory': productCategory
    };

    addProducts([product]);
  }

  /**
   * Deprecated function that takes a segment string or array of segment strings and adds them to the
   * digitalData.page.pageInfo[n].segmentValue. If segment already exists, updates the value.
   *
   * If digitalData.disable_pageviewonload is true, go ahead and call a pageview with this page.
   * Support temporarily added to call pageview if utag_data.cm_Segmentation_Value is true.
   * @public
   * @param {string|array} segmentValues - Array of or single key/value string(s) seperated by an underscore (e.g.: ['olbc_Y', 'st_NC'], 'olbc_N').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {void}
   */
  var _bactmAddSegmentationValues = function (segmentValues, pageInfoArrayIndex) {
    _deprecationWarning('bactm_addSegmentationValues', 'Consider using bactm.addManySegmentValues() or pageview() instead.');

    addManySegmentValues(segmentValues, pageInfoArrayIndex);

    if ((typeof utag_data !== 'undefined' && _toLowerCaseString(utag_data.cm_Segmentation_Value) === "true") || _toLowerCaseString(ddo.get('disable_pageviewonload')) === 'true') {
      pageview(pageInfoArrayIndex);
    }
  }

  // ===========================================================================
  // End Translation functions.
  // ===========================================================================

  // ===========================================================================
  // Public functions.
  // ===========================================================================

  /**
   * Captures data from digitalData object to call a Coremetrics pageview and adds
   * to the dataCollector queue for processing.
   *
   * Captures data from digitalData object found by pageInfo array index, pageID,
   * or a unique associated value.
   *
   * Options object allows for selecting pageInfo lookupType, adding segments,
   * choosing which category to use from the digitalData object, and indicating if
   * this is an app pageview requiring dynamic pageID.
   *
   * Usage: bactm.pageview(5, { segments: ['olbc_N', 'st_NC'], categoryType: 'primary' });
   * Usage: bactm.pageview('this_is:my:PageID');
   * Usage: bactm.pageview('this_is:my:PageID', { lookupType: 'pageID' });
   * Usage: bactm.pageview('SomeValue', { lookupType: 'associatedValue' });
   * Usage: bactm.pageview(2, { isApp: true });
   * Usage: bactm.pageview();
   *
   * Pageview calls with the options.isApp property set to true will process any
   * conversion events setup in utag_data.App_Conversion_Settings lookup table.
   *
   * @public
   * @param {string|number} [pageInfoKey] - Value indicating how to find the pageInfo
   *      from the digitalData object. Can be the index of the array, pageID, or the
   *      associated value.
   * @param {object} [options] - Object of options for this pageview call. Valid
   *      properties include segmentValues {array}, categoryType {string}, lookupType {string},
   *      isSaveAndReturn {bool}, saveAndReturnId {string}, applicationId {string}
   *      cartProducts {array} and isApp {bool}.
   * @returns {void}
   */
  var pageview = function (pageInfoKey, options) {
    _log('Pageview event added to the dataCollector.', LOG_LEVEL.DEBUG);

    try {
      if (pageInfoKey !== undefined && typeof pageInfoKey !== 'string' && digitalData && digitalData.page && digitalData.page.pageInfo
          && modals.indexOf(digitalData.page.pageInfo[pageInfoKey].pageID) > -1) {
          if (options === undefined) options = {};
          options.isModal = true;
      }

      _pushToDataCollector({
        'event': 'pageview',
        'pageInfoKey': pageInfoKey,
        'options': options
      });

    } catch (error) {
      console.log('bactm.pageview error: ', error);
      reportError(error, { record: true })
    }
  };


  /**
   * Captures all products out of the digitalData.product array and fires a Coremetrics
   * Productview tag for each one where productviewTagFired property is false. Once tag has
   * fired, productviewTagFired property is set to true, ensuring duplicate Productview tags
   * are not fired.
   * @public
   * @returns {void}
   */
  var productview = function () {
    _log('Productview event added to the dataCollector.', LOG_LEVEL.DEBUG);

    _pushToDataCollector({
      'event': 'productview'
    });
  }

  /**
   * Captures all products out of the digitalData.cart.item array and fires a Coremetrics
   * Shop Action 5 tag for each one where cartViewTagFired property is false. Once tag has
   * fired, cartViewTagFired property is set to true, ensuring duplicate Shop Action 5 tags
   * are not fired for a single product.
   * @public
   * @returns {void}
   */
  var cartView = function (products) {
    _log('CartView event added to the dataCollector.', LOG_LEVEL.DEBUG);

    _pushToDataCollector({
      'event': 'cartview',
      data: {
        products: products
      }
    });
  }

  /**
   * Captures all products out of the digitalData.cart.item array and fires a Coremetrics
   * Shop Action 9 tag for each one where cartViewTagFired property is true. Once tag has
   * fired, cartViewTagFired property is set to false, ensuring additional Shop Action 5 tags
   * can be fired.
   * @public
   * @returns {void}
   */
  var productsPurchased = function () {
    _log('ProductsPurchased event added to the dataCollector.', LOG_LEVEL.DEBUG);
    const products = digitalData.cart.item.filter(product => product.attributes.cartViewTagFired !== 'false');

    _pushToDataCollector({
      'event': 'productsPurchased',
      data: {
        products: products
      }
    });
  }

  /**
   * Sends a conversion event tag to Coremetrics.
   * @public
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {object} conversion - Object with the conversion event details.
   * @param {string} conversion.eventName - The unique identifier for the type of conversion event.
   * @param {string} conversion.actionType - Indicates whether the conversion event was initiated or successfully completed. Valid values: initiate|complete
   * @param {string} conversion.category - Allows you to group events into a category.
   * @returns {void}
   */
  var conversion = function (conversion) {
    _log('Conversion event added to the dataCollector.', LOG_LEVEL.DEBUG);

    _pushToDataCollector({
      'event': 'conversion',
      'eventName': conversion.eventName,
      'actionType': conversion.actionType,
      'category': conversion.category
    });
  }

  /**
   * Add products to the DDO without needing to manage the DDO structure.
   * Does not add if we find a product with a matching product ID already in the DDO.
   * @public
   * @param {string|number} productID - Unique identifier for the product.
   * @param {string} productName - Friendly name of the product.
   * @param {string} productCategory - Category product belongs to.
   * @returns {void}
   */
  var addProducts = _addProducts;

  /**
   * Add products to the digitalData object (DDO) cart without needing to manage the DDO structure.
   * Does not add if we find a product with a matching product ID already in the DDO.
   * @public
   * @param {object|array} products
   * @param {string|number} product.productID - Unique identifier for the product.
   * @param {string} product.productName - Friendly name of the product.
   * @param {string} product.productCategory - Category product belongs to.
   * @returns {void}
   */
  var addProductsToCart = _addProductsToCart;

  /**
   * Sets the value of a single segment within digitalData.page.pageInfo[n].segmentValue
   found by key. If key does not exist, a new segment will be created.
   * @public
   * @param {string} key - Key is the entire string up unti the first underscore in a segment section (e.g.: 'st' in '|st_NC|').
   * @param {string} value - Vaue is the entire string after the first underscore in a segment section (e.g.: 'NC' in '|st_NC|').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {void}
   */
  var addSegmentValue = _setSegmentValue;

  /**
   * Takes a segment string or array of segment strings and adds them to the
   * digitalData.page.pageInfo[n].segmentValue. If segment already exists,
   * updates the value.
   * @public
   * @param {string|array} segmentValues - Array of or single key/value string(s) seperated by an underscore (e.g.: ['olbc_Y', 'st_NC'], 'olbc_N').
   * @param {number} [pageInfoArrayIndex=0] - Index of the pageInfo array from digitalData.page.pageInfo[n] you'd like the get the segment values from.
   * @returns {void}
   */
  var addManySegmentValues = function (segmentValues, pageInfoArrayIndex) {
    if (!_isValidPageInfoArrayIndex(pageInfoArrayIndex)) pageInfoArrayIndex = 0;
    if (!Array.isArray(segmentValues)) segmentValues = [segmentValues];

    for (var i = 0, segmentsLen = segmentValues.length; i < segmentsLen; i++) {
      var segment = _getSegmentKeyValue(_trim(segmentValues[i]));
      addSegmentValue(segment.key, segment.value, pageInfoArrayIndex);
    }
  }

  /**
   * Sends a Custom Error tag for the current page to Coremetrics.
   * @public
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string|number} errorCode - A unique identifier for the Error message.
   * @param {string} errorMessage - The text of the message that is displayed to the user.
   * @returns {void}
   */
  var customError = function (errorCode, errorMessage) {
    var eventInfo = {
      'event': 'customError'
      , 'errorCode': errorCode
      , 'errorMessage': errorMessage
    };

    _pushToDataCollector(eventInfo);
  }

  /**
   * Sends a Manual Link Click tag on the current page to Coremetrics.
   * @public
   * @requires eluminate.js
   * @requires cmdatatagutils.js
   * @param {string} href - The href for the hyperlink.
   * @param {string} linkname - The unique descriptive identifier for the link.
   * @returns {void}
   */
  var manualLinkClick = function (href, linkname) {
    var eventInfo = {
      'event': 'manualLinkClick'
      , 'href': href
      , 'linkname': linkname
    };

    _pushToDataCollector(eventInfo);
  }

  /**
   * Reverts the pageID Coremetrics is currently reporting on to the previous pageID.
   * For example, to be called when modal layer that called a second Pageview tag in
   * a single DOM instance is closed.
   * @public
   * @requires eluminate.js
   * @param {number} [pageInfoArrayIndex] - Index of the pageInfo array from
   *                  digitalData.page.pageInfo[n] you'd like the get the pageID from.
   * @returns {void}
   */
  var revertToPrevPageID = function (pageInfoArrayIndex) {
    if (typeof cG7 === 'undefined') {
      _log('cG7 is undefined. Unable to call revertToPrevPageID() until Coremetrics libraries are ready.', LOG_LEVEL.WARN);
    } else {
      _revertToPreviousPageID(pageInfoArrayIndex);
    }
  }

  /**
   * reportError - reporting Errors to the data collector to make functions fail silently
   * @public
   * @param {object} - Error data that is caught from a throw or failed try
   * @returns {void}
   */
  var reportError = function (error, options) {
    try {
      if (typeof error === "object" && error.name && error.message && error.stack && (window.bactm_envSelector !== "prod" || window.location.href.indexOf('debug=true') > -1)) {
        window.reportError(error)
        // Commented out the code below due to traffic concerns, should revisit if Celebrus can handle this traffic.
        if (options?.record === true) {
          var spliceErrorString = function spliceErrorString(errorString, errArray) {
              if (!errArray) errArray = [];
              var modifiedErrorString = errorString.slice(errorString.indexOf('at ') + 3);
              var functionName = modifiedErrorString.slice(0, modifiedErrorString.indexOf(' '));
          var location = modifiedErrorString.slice(modifiedErrorString.indexOf('(') + 1, modifiedErrorString.indexOf(')'));
          modifiedErrorString = modifiedErrorString.substring(modifiedErrorString.indexOf(')'));
          errArray.push({
            functionName: functionName,
            location: location
          });

          if (modifiedErrorString.indexOf(')') > -1) {
            spliceErrorString(modifiedErrorString, errArray);
          }

          return errArray;
        };

        var errCategory = error.name;
        var errMessage = error.message;
        var errString = error.stack.toString();
        var errStack = spliceErrorString(errString);
        var errData = {
            errCategory: errCategory,
            errMessage: errMessage,
            errStack: errStack
          };
          var dataToReport = {
              event: 'Bactm_Error',
              data: errData
            };
            
            _pushToDataCollector(dataToReport);
          }
          }
        } catch (error) {
          if (typeof error === "object" && error.name && error.message && error.stack) {
        window.reportError(error);
      }
    }
  };

  /**
   * chat_dataCollector - Array that logs all genesys events
   * @public
   * @returns {void}
   */
  var chat_dataCollector = [];

  /**
   * Rescans the DOM and adds event handlers to anchor tags for Automatic Link Click tag
   * functionality.
   * @public
   * @requires eluminate.js
   * @returns {void}
   */
  var rescanDOM = function () {
    _rescanDOM();
  }

  /**
   * Sends data to a transparent gif on the webservers so data can be pulled from the server
   * logs via Splunk.
   * @public
   * @returns {void}
   */
  var log = function (data) {
    var eventInfo = {
      'event': 'log'
      , 'data': data
    };

    var _timestamp = function () {
      var e = new Date;
      return e.getTime() - e.getTimezoneOffset()
    }

    if (!Array.isArray(data) && typeof data === 'object' && !('ts' in data)) data.ts = _timestamp();

    _pushToDataCollector(eventInfo);
  }

  // ===========================================================================
  // End public functions.
  // ===========================================================================

  // Catch cases where libraries have loaded after the browser dom ready event has already occurred.
  // Enables bactm.ready(); functionality.
  if (doc.readyState === "complete" || (doc.readyState !== "loading" && !doc.documentElement.doScroll)) {
    _onDomReady();
  } else {
    // Use the handy event callback
    doc.addEventListener("DOMContentLoaded", _domLoadComplete);
  }

  // "Core" functions which will always be exported and available no matter any other settings.
  var core = {
    'env': env
    , 'plugins': plugins
    , 'ready': _ready
    , 'on': _listener
    , 'trigger': _trigger
    , 'Store': Store
    , 'Cookies': Cookies
    , 'PixelTag': PixelTag
    , 'Ajax': Ajax
    , 'QueryString': QueryString
    , 'SudoPromise': SudoPromise
    , 'customEvent': _raiseCustomEvent
    , 'ddo': ddo
    , 'polyfills': polyfills
    , 'log': log
    , 'setApplicationDetails': _setApplicationDetails
    , 'getApplicationId': _getApplicationId
    , 'setPrivacy': _setPrivacy
    , 'decomposeUri': decomposeUri
    , 'reportError': reportError
    , 'chat_dataCollector': chat_dataCollector
    , 'pageID': _pageIDHistory
    , 'scriptReady': _scriptReady

    // Private functions exposed for plugins to access.
    , '_getPageInfo': _getPageInfo
    , '_isValidPageInfoArrayIndex': _isValidPageInfoArrayIndex
    , '_log': _log
    , '_readCookie': _readCookie
    , '_asArray': _asArray
    , '_sendLogBeacon': _sendLogBeacon
  }

  // Export public functions.
  var bactm = {
    'pageview': pageview
    , 'addManySegmentValues': addManySegmentValues
    , 'addProducts': addProducts
    , 'addProductsToCart': addProductsToCart
    , 'addSegmentValue': addSegmentValue
    , 'cartView': cartView
    , 'conversion': conversion
    , 'customError': customError
    , 'manualLinkClick': manualLinkClick
    , 'rescanDOM': rescanDOM
    , 'productsPurchased': productsPurchased
    , 'productview': productview
    , 'revertToPrevPageID': revertToPrevPageID
    , 'impressions': _impressions
  }

  // Merge in our core functions to be exposed publically.
  for (var key in core) {
    if (core.hasOwnProperty(key)) bactm[key] = core[key];
  }

  // Export legacy functions to the window for backwards compatability.
  win['cm_NormalizeList'] = 'sessionid=;pageID=;accessToken=;token=;adx=;features=;request_locale=;deviceCode=;phoneNumber=;emailAddress=;callback=;divId=;qry=;tid=;dropdown-loan=;gclid=;currencyInputField=;rq=;searchText=;';
  win['bactm_evtSel'] = 1;
  win['bactm_addSegmentationValues'] = _bactmAddSegmentationValues;

  win['bactm_beginDataCollection'] = _beginDataCollection;
  win['bactm_capturePageview'] = _capturePageview;
  win['bactm_captureAddlPageview'] = _captureAdditionalPageview;
  win['bactm_captureDynamicPageview'] = _captureDynamicPageview;

  win['bactm_loadDataCollection'] = _loadDataCollection;
  win['bactm_addProducts'] = _bactmAddProducts;
  win['bactm_captureCustomError'] = customError;
  win['bactm_createManualLinkClickTag'] = manualLinkClick;
  win['bactm_restorePageID'] = revertToPrevPageID;

  win['bactm_productView'] = _bactmProductView;


  // Run our initialization function.
  _init();

  return bactm;
});

} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/**
 * Tealium extension to map the Bank's digitalData data layer to Tealium's utag_data universal data object.
 * @version 1.0.5
 * @revised 09-21-23
 * @author Chris Capps
 * */

try {
    //Ignore keys in the data layer that start with the following text.
    //Expecting an array of strings
    //["event","ac"]
    var ignore_keys = [];

    //Specify a prefix for data layer elements being sent to the utag_data object.
    //Instead of utag_data.productID, it could be utag_data.dl_productID
    var prefix = "";

    //In cases of a nested object, what should join the parent key and child key
    var nested_delimeter = ".";

    //Specify the data layer object name
    var data_layer = "digitalData";

    //Specify the Tealium data layer name
    var tealium_object = "utag_data";

    //Use the global environment selector to determine whether to log stuff or not
    //TODO: Change to a const or let once we have transpile in place
    var tealium_debug = (window.bactm_envSelector === "prod") ? false : true;

    /**
     * This function overrides the default console log statement
     * @param {string} message the message to be logged
     * @returns {undefined}
     */
    function log(message) {
        if (tealium_debug) {
            console.log(message);
        }
    }

    /**
     * This function harvests the pageID, if one is available, or sets document.title as the pageID
     * @param {string} pageID the pageID, should always come in undefined
     * @returns {string} pageID set either to the global Coremetrics Object or document.title
     */
    function getPageID(pageID) {
        if (window.cG7 && cG7.cM0) {
            pageID = window.cG7.cM0[cm_ClientID];
        } else {
            pageID = document.title;
        }
        return pageID;
    }

    //*****************DO NOT MODIFY BELOW***********************

    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // Add the Object.keys method for older versions of IE
    if (!Object.keys) {
        Object.keys = (function () {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({
                    toString: null
                }).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;
            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }
                var result = [],
                    prop, i;
                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }
                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }

    //Ensure the tealium_object is available. 
    window[tealium_object] = window[tealium_object] || {};

    function ignoreKey(key) {
        var should_ignore_key = 0;
        //Loop through the ignore_keys array to see if we should ignore this key
        for (var k = 0; k < ignore_keys.length; k++) {
            var re = new RegExp("^" + ignore_keys[k]);
            if (key.match(re)) {
                should_ignore_key = 1;
                try {
                    log('Ignoring key: ' + key);
                } catch (e) {
                  bactm.reportError(e);
                }
            }
        }
        return should_ignore_key;
    }

    function processDataObject(obj, parent_key) {
        if (typeof parent_key === "undefined") {
            //This object isn't nested in another object
            parent_key = "";
        } else {
            //Add the nested_delimeter to the parent key
            parent_key += "" + nested_delimeter;
        }
        Object.keys(obj).forEach(function (key) {
            var nested_key_name = parent_key + key;
            var new_key_name = prefix + parent_key + key;
            if (typeof obj[key] !== 'undefined' && obj[key] != null) {
                if ((typeof obj[key]).match(/boolean|string|number/) && !ignoreKey(key)) {
                    //If the value of the key is a boolean or a string or a number and 
                    //the key shouldn't be ignored add to the data layer
                    window[tealium_object][new_key_name] = "" + obj[key]; //Force value to be a string
                } else if (obj[key].constructor === Object && !ignoreKey(key)) {
                    //Process this piece of the data layer and merge it
                    processDataObject(obj[key], nested_key_name);
                } else if (obj[key].constructor === Array) {
                    processDataArray(obj[key], nested_key_name);
                }
            }
        });
    }

    function processDataArray(obj, parent_key) {
        if (typeof parent_key === "undefined") {
            //This object isn't nested in another object
            parent_key = "";
        } else {
            //Add the nested_delimeter to the parent key
            parent_key += "" + nested_delimeter;
        }
        var new_key_name = prefix + parent_key;
        for (var n = 0; n < obj.length; n++) {
            if ((typeof obj[n]).match(/boolean|string|number/)) {
                //First check to see if this key exists
                if (typeof window[tealium_object][new_key_name] === "undefined") {
                    //Make the key an array                       
                    window[tealium_object][new_key_name] = [];
                }
                //If the value of the key is a boolean or a string or a number and 
                //the key shouldn't be ignored add to the data layer                        
                window[tealium_object][new_key_name].push("" + obj[n]);
            } else if (typeof obj[n] !== 'undefined' && obj[n] != null && obj[n].constructor === Object) {
                Object.keys(obj[n]).forEach(function (array_key) {
                    var new_obj = obj[n];
                    array_key_name = new_key_name + array_key;
                    if (typeof new_obj[array_key] !== 'undefined' && new_obj[array_key] != null) {
                        if ((typeof new_obj[array_key]).match(/boolean|string|number/) && !ignoreKey(array_key)) {
                            //First check to see if this key exists
                            if (typeof window[tealium_object][array_key_name] === "undefined") {
                                //Make the key an array                       
                                window[tealium_object][array_key_name] = [];
                            }
                            //If the value of the key is a boolean or a string or a number and 
                            //the key shouldn't be ignored add to the data layer                        
                            window[tealium_object][array_key_name].push("" + new_obj[array_key]);
                        } else if (new_obj[array_key].constructor === Array) {
                            processDataArray(new_obj[array_key], array_key_name);
                        }
                    }
                });
            }
        }
    }

    /**
     * This function determines whether the data layer is an array or object and calls the appropriate function
     * @returns {undefined}
     */
    function processDataLayer() {
        if (window[data_layer].page.attributes.hasOwnProperty('chat') &&
            window[data_layer].page.attributes.chat.hasOwnProperty('site_id') &&
            window[data_layer].page.attributes.chat.site_id === null && 
            window.location.href.indexOf('mycustomerassistance') > -1) {
            window[data_layer].page.attributes.chat.site_id = '99999999';
        } else if (window[data_layer].page.attributes.hasOwnProperty('chat') &&
            window[data_layer].page.attributes.chat.hasOwnProperty('site_id') &&
            window[data_layer].page.attributes.chat.site_id === null) {
            window[data_layer].page.attributes.chat.site_id = undefined;
        }
        // the following two conditionals is to make sure that the site id key is not case sensitive
        if (window[data_layer].page.attributes.hasOwnProperty('chat') &&
        window[data_layer].page.attributes.chat.hasOwnProperty('site_id')) {
            window[data_layer].page.attributes.chat.SITE_ID = window[data_layer].page.attributes.chat.site_id;
        }
        if (window[data_layer].page.attributes.hasOwnProperty('chat') &&
        window[data_layer].page.attributes.chat.hasOwnProperty('SITE_ID')) {
            window[data_layer].page.attributes.chat.site_id = window[data_layer].page.attributes.chat.SITE_ID;
        }
        
        if (window[data_layer].constructor === Array) {
            for (var i = 0; i < window[data_layer].length; i++) {
                processDataObject(window[data_layer][i]);
            }
        } else {
            processDataObject(window[data_layer]);
        }
    }

    //Check if the page data layer exists
    if (typeof window[data_layer] !== 'undefined') {
        processDataLayer();
    } else {
        //Print a message stating that the data layer object doesn't exist
        try {
            log('Error "' + data_layer + '" doesn\'t exist on the page. A default one was created');
            window[data_layer] = {
                pageInstanceID: "",
                page: {
                    pageInfo: [{
                        pageID: getPageID()
                    }],
                    category: {},
                    attributes: {}
                },
                product: [],
                cart: {},
                event: {},
                user: {},
                version: "BAC_0.25"
            };
            window.bactm.setPrivacy();
            processDataLayer();
        } catch (e) {
          bactm.reportError(e);
        }
    }

    if (window.bactm) {
      const bactmEvent = new CustomEvent("bactm_libload", { detail: 'bactm has loaded' });
      document.dispatchEvent(bactmEvent);
    }

} catch (e) {
    try {
        log('Error trying to convert data layer: ' + e);
        bactm.reportError(e);
    } catch (e) {};
}
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
(function(parent, name, context, definition) {
  // Check if is used inside a 'modern' browser, if not, return
  if (!context || !context[parent] || !Array.prototype.filter) {
    return;
  }

  context[parent]['plugins'][name] = definition();
})('bactm', 'adobemid', typeof window !== 'undefined' ? window : null, function() {

  var parent = 'bactm'
  , ba = window[parent]
  , win = window
  , doc = document || {}
  , version = '1.1.5'
  , ddo = win.digitalData
  , LOG_LEVEL = {
      OFF: 10
      , FATAL: 5
      , ERROR: 4
      , WARN: 3
      , INFO: 2
      , DEBUG: 1
    }
  , adobeMID = {}
  , adobeMIDLTS
  , d_orgid = 'A9893BC75245B1D70A490D4D@AdobeOrg'
  , d_ver = '2'
  , pageId
  , currentUrl          = win.location.href
  , ls = null
  , adobeMIDSession = new ba.Store('adobeMID', { type: 'sessionCookie' })
  , DISABLE_MID = [
    'homepage:Content:Personal;home_personal'
    , 'homepage:Content;home_personal'
    , 'homepage:Content:smbus;homepage_smbus'
    , 'homepage:Content:Personal;homepage_personal'
  ]

  // We have no DDO, exit immediately.
  if (!ddo) return;

  // ===========================================================================
  // Core functions.
  // ===========================================================================
  var _get = function(key) {
    return adobeMID[key];
  };

  var _writeToLocalStorage = function(fn) {
    try{
      var bactmCookie = null;

      var AMCVCookie = null;

      var checkAMCVCookieVal = () => {
        document.cookie.split(";").forEach(function(e){
          e = decodeURIComponent(e);
          if (e.indexOf("AMCV") > -1) 
            AMCVCookie = e.substr(e.indexOf("|") + 1, e.length)
          });
      }
      checkAMCVCookieVal();

      var setAMCVtoBactmlts = function(midVal) {
        if (typeof midVal !== "string") {
          var midVal = AMCVCookie;
        }

        adobeMID = {d_mid: midVal};
        const midCookie = new bactm.Store('adobeMID', { type: 'cookie' });
        midCookie.set("d_mid", adobeMID["d_mid"]);
        midCookie.save('adobeMID');
      } 

      document.cookie.split(";").forEach(function(e){
      e = decodeURIComponent(e);
      if (e.indexOf("adobeVisitorID") > -1) 
        bactmCookie = JSON.parse(e.substr(e.indexOf("=") + 1, e.length))
      });

      if(typeof bactmCookie != "undefined" && bactmCookie != null && bactmCookie != "undefined" && bactmCookie.adobeMID.d_mid != "undefined" && bactmCookie.adobeMID.d_blob != "undefined" && bactmCookie.adobeMID.dcs_region != "undefined") {
        adobeMID = bactmCookie.adobeMID;
        if(adobeMID.ibs) {
          delete adobeMID.ibs;
        }

        if (Object.keys != 'undefined') {
          ls = ls || new bactm.Store('adobeMID', { type: 'cookie' });
          Object.keys(adobeMID).forEach(function(key) {
            ls.set(key, adobeMID[key]);
          });
        }
        ls.save('adobeMID');
        fn();

      } else if(typeof AMCVCookie != "undefined" && AMCVCookie != null && AMCVCookie != "undefined") {

        var midValue = AMCVCookie;

        if (typeof midValue == "string"){
          setAMCVtoBactmlts(midValue)
        }

      } else if (window.digitalData.load_alloy == true) {
        document.addEventListener('amcvcookieset', () => {
          // re-fetch amcv cookie value
          checkAMCVCookieVal();
          if (AMCVCookie) setAMCVtoBactmlts(AMCVCookie);
        }, false);
      } else {

        var httpRequest = new XMLHttpRequest();
        httpRequest.withCredentials = true;
        httpRequest.onreadystatechange = function() {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
              try { 
              var MIDresponse = JSON.parse(httpRequest.response || httpRequest.responseText);
              adobeMID = MIDresponse;
              delete adobeMID.ibs;

              if (typeof adobeMID !== "undefined" && adobeMID !== null && adobeMID !== undefined && typeof adobeMID === "object") {
                if (typeof adobeMID.d_mid === 'undefined' || adobeMID.d_mid === undefined || adobeMID.d_mid === null || adobeMID.d_mid === "undefined"){
                  delete adobeMID.d_mid;
                }
                if (typeof adobeMID.d_blob === 'undefined' || adobeMID.d_blob === undefined || adobeMID.d_blob === null || adobeMID.d_blob === "undefined"){
                  delete adobeMID.d_blob;
                }
                if (typeof adobeMID.dcs_region === 'undefined' || adobeMID.dcs_region === undefined || adobeMID.dcs_region === null || adobeMID.dcs_region === "undefined"){
                  delete adobeMID.dcs_region;
                }
                
                if (Object.keys != 'undefined') {
                  ls = ls || new bactm.Store('adobeMID', { type: 'cookie' });
                  Object.keys(adobeMID).forEach(function(key) {
                    ls.set(key, adobeMID[key]);
                  });
                }
                ls.save('adobeMID');
                ba._log('Adobe MID API request: Success', LOG_LEVEL.INFO);
                fn();
              } else {
                ba._log('Adobe MID values are undefined and Adobe API request: Failed - ' + httpRequest.status, LOG_LEVEL.ERROR);
              }
              } catch (e) {
                console.log("Error fetching Adobe MID");
              }
            } else {
              ba._log('Adobe MID API request: Failed - ' + httpRequest.status, LOG_LEVEL.ERROR);
            }
          }  
        };
        httpRequest.open('GET', 'https://dpm.demdex.net/id?d_orgid=' + d_orgid + '&d_ver=' + d_ver, false);
        httpRequest.send();
      }
    } catch(err) {
      bactm.reportError(err);
    }
  };

  var _getFromLocalStorage = function(fn) {
    try{
      // ls is the KVPs for Adobe stored in the bactm_lts cookie.
      ls = ls || new bactm.Store('adobeMID', { type: 'cookie' });
      // ibs is an old value which is too long and causes performance issues. Removing that key, resetting all other values.
      if (ls._store.ibs) {
        delete ls._store.ibs;      
      }
      ls.save("adobeMID");
      const adobeMID = ls.all();
    // callback to fire MID pixel tag.
      fn();
    } catch(err) {
      bactm.reportError(err);
    }
  };

  var _adobeMIDSync = function() {
      // Never fire the Adobe MID sync pixels on the homepage or any pages in the disable list.
      try{
      adobeMIDLTS = bactm.Store('adobeMID', { type: 'cookie' })
      if(!pageId || currentUrl.indexOf('/homepage/overview.go') > -1 || DISABLE_MID.indexOf(pageId) > -1) return;
      if(adobeMIDSession.get('adobeImgSync') == true) return;

      (function(t) {
        if (t.tag == 'img' && t.url !== null && t.url !== []) {
          t.url.forEach(function(u){
            var url = (u.indexOf("?") > -1) ? u + '&' + 'd_jsonv=1' : u + '?' + 'd_jsonv=1';
            bactm.PixelTag(url);
          })
        }
      });
      adobeMIDSession.set('adobeImgSync', true);
      adobeMIDSession.save();
    } catch(err) {
      bactm.reportError(err);
    }
  };


  // ===========================================================================
  // Core functions.
  // ===========================================================================

  // ===========================================================================
  // Helper functions.
  // ===========================================================================
  /**
   * Get the current PageID according to Coremetrics. If the Coremetrics functions
   * aren't available, we will just return a blank string.
   *
   * @private
   * @returns {string} - The current Coremetrics PageID.
   */
  var _getCurrentPageId = function () {
    return ba.ddo.pageInfo.get('pageID');
  }

  /**
   * Get the current PageID according to Coremetrics. If the Coremetrics functions
   * aren't available, we will just return a blank string.
   *
   * @private
   * @returns {string} - The current Coremetrics PageID.
   */
  var setAdobeMIDInDDO = function (value) {
    try{
    var user = ddo.user || {};
    var sharedIDs = user.sharedIDs || {};

    sharedIDs.adobe = value;
    user.sharedIDs = sharedIDs;
    ddo.user = user;

    var event = new Event('adobeVisitorIDReady');
    this.document.dispatchEvent(event);
  } catch(err) {
    bactm.reportError(err);
  }
}

  // ===========================================================================
  // End helper functions.
  // ===========================================================================

  /**
   * Initialization function fired as soon as library loads.
   *
   * @private
   * @returns {void}
   */
  var _init = function() {
    try{
    ba._log('adobemid plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
    adobeMIDLTS = bactm.Store('adobeMID', { type: 'cookie' })
    pageId = _getCurrentPageId();

    if (adobeMIDLTS.get('d_mid') === null) {
      _writeToLocalStorage(_adobeMIDSync);
    } else {
      _getFromLocalStorage(_adobeMIDSync);
    }

    setAdobeMIDInDDO(adobeMIDLTS.get('d_mid'));

    // ba.ready();
  } catch(err) {
    bactm.reportError(err);
  }
  }

  /**
   * Initialize our plugin on library load.
   */
  _init();

  /**
   * Functions to return publicly.
   */
  return {
    get: _get
  };

});
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
window.utag_cfg_ovrd = window.utag_cfg_ovrd || {};
window.utag_cfg_ovrd.secure_cookie = true;
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
try {
 // mask all these below. If a page has window.gisMasking = true, most likely we'll block the whole page, need to confirm that though.
  const maskClasses = [
    ".gis-mask", 
    ".gis-mask-original", 
    ".gis-mask-input",
    ".tl-private"
  ]

  const maskIds = [];

  const maskDataAttributes = [
    "[data-gis-mask='true']"
  ];

  const maskSelectors = maskClasses.concat(maskIds.concat(maskDataAttributes));
  if (bactm_envSelector === "prod"){
    digitalData = window.digitalData || {};
    digitalData.page = window.digitalData.page || {};
    digitalData.page.attributes = window.digitalData.page.attributes || {};
    digitalData.page.attributes.glance = {
      ws: "www.glance.net",
      groupID: "21494",
      src: "https://storage.glancecdn.net/cobrowse/js/GlanceCobrowseLoader_6.20.0M.js",
      env: "production",
      maskSelectors: maskSelectors,
    }
  } else {
    digitalData = window.digitalData || {};
    digitalData.page = window.digitalData.page || {};
    digitalData.page.attributes = window.digitalData.page.attributes || {};
    digitalData.page.attributes.glance = {
      ws: "www-bofa.myglance.net",
      groupID: "21506",
      src: "https://cdn-bofa.myglance.net/cobrowse/js/GlanceCobrowseLoader_6.20.0M.js", 
      env: "production",
      maskSelectors: maskSelectors,
    }
  }
} catch (e) {}
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"bofa.main",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [], 
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};
	
	d=0;
        g=[]; 
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
	  b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
	    d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

	if(d==0){
	  utag.loader.END();
	}
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a,'src')) {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '" src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_bofa.main_'+a.id;
            if (!b.getElementById(c)) {
	      d = {
	        src:a.src,
		id:c,
                uid:a.id,
		loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
	      if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    // if we know the tid but don't know the category and this is a category opt out...
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true; 
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
        return false;
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();
        for (d in b) {
          if (d.match(/utag_(.*)/)) {
            for (c in utag.loader.GV(b[d])) {
              o["cp.utag_" + RegExp.$1 + "_" + c] = b[d][c];
            }
          }
        }
        for (c in utag.loader.GV((utag.cl && !utag.cl['_all_']) ? utag.cl : b)) {
          if (c.indexOf("utag_") < 0 && typeof b[c] != "undefined") o["cp." + c] = b[c];
        }
      },
      RDqp: function(o, a, b, c){
        a = location.search + (location.hash+'').replace("#","&");
        if(utag.cfg.lowerqp){a=a.toLowerCase()};
        if (a.length > 1) {
          b = a.substring(1).split('&');
          for (a = 0; a < b.length; a++) {
            c = b[a].split("=");
            if(c.length>1){
              o["qp." + c[0]] = utag.ut.decode(c[1])
            }
          }
        }
      },
      RDmeta: function(o, a, b, h){
        a = document.getElementsByTagName("meta");
        for (b = 0; b < a.length; b++) {
          try{
            h = a[b].name || a[b].getAttribute("property") || ""; 
          }catch(e){h="";utag.DB(e)};
          if (utag.cfg.lowermeta){h=h.toLowerCase()};
          if (h != ""){o["meta." + h] = a[b].content}
        }
      },
      RDva: function(o){
        // Read visitor attributes in local storage
        var readAttr = function(o, l ){
          var a = "", b;
          a = localStorage.getItem(l);
          if(!a || a=="{}")return;
          b = utag.ut.flatten({va : JSON.parse(a)});
          utag.ut.merge(o,b,1);
        }
        try{
          readAttr(o, "tealium_va" );
          readAttr(o, "tealium_va_" + o["ut.account"] + "_" + o["ut.profile"] );
        }catch(e){ utag.DB(e) }
      },
      RDut: function(o, a){
        // Add built-in data types to the data layer for use in mappings, extensions and RDva function.
        var t = {};
        var d = new Date();
        var m = ( utag.ut.typeOf(d.toISOString) == "function" );
        o["ut.domain"] = utag.cfg.domain;
        o["ut.version"] = utag.cfg.v;
        // i.e. "view" or "link"
        t["tealium_event"] = o["ut.event"] = a || "view";
        t["tealium_visitor_id"] = o["ut.visitor_id"]=o["cp.utag_main_v_id"];
        t["tealium_session_id"] = o["ut.session_id"]=o["cp.utag_main_ses_id"];
        t["tealium_session_number"] = o["cp.utag_main__sn"];
        t["tealium_session_event_number"] = o["cp.utag_main__se"];
        try{
          t["tealium_datasource"] = utag.cfg.datasource;
          t["tealium_account"] = o["ut.account"] = utag.cfg.utid.split("/")[0];
          t["tealium_profile"] = o["ut.profile"] = utag.cfg.utid.split("/")[1];
          t["tealium_environment"] = o["ut.env"] = utag.cfg.path.split("/")[6];
        }catch(e){ utag.DB(e) }

        t["tealium_random"] = Math.random().toFixed(16).substring(2);
        t["tealium_library_name"] = "ut"+"ag.js";
        t["tealium_library_version"] = ( utag.cfg.template + "0" ).substring(2);
        t["tealium_timestamp_epoch"] = Math.floor( d.getTime() / 1000 );
        t["tealium_timestamp_utc"] = ( m ? d.toISOString() : "");
        // Adjust date to local time
        d.setHours( d.getHours() - ( d.getTimezoneOffset() / 60 ) );
        t["tealium_timestamp_local"] = ( m ? d.toISOString().replace( "Z","" ) : "" );

        // Any existing data elements with "tealium_" will not be overwritten
        utag.ut.merge( o, t, 0 );
      },
      RDses: function( o, a, c ) {
        a = (new Date()).getTime();
        c = ( a + parseInt( utag.cfg.session_timeout ) ) + "";

        // cp.utag_main_ses_id will not be in the data layer when it has expired or this is first page view of all time
	if ( !o["cp.utag_main_ses_id"] ) {
          o["cp.utag_main_ses_id"] = a + "";
          o["cp.utag_main__ss"] = "1";
          o["cp.utag_main__se"] = "1";
          o["cp.utag_main__sn"] = ( 1 + parseInt( o["cp.utag_main__sn"] || 0 ) ) + "";
        } else {
          o["cp.utag_main__ss"] = "0";
          o["cp.utag_main__se"] = ( 1 + parseInt( o["cp.utag_main__se"] || 0 ) ) + "";
        }

        o["cp.utag_main__pn"] = o["cp.utag_main__pn"] || "1";
        o["cp.utag_main__st"] = c;

        utag.loader.SC( "utag_main", { "_sn": ( o["cp.utag_main__sn"] || 1 ), "_se": o["cp.utag_main__se"], "_ss": o["cp.utag_main__ss"], "_st": c, "ses_id": ( o["cp.utag_main_ses_id"] || a ) + ";exp-session", "_pn": o["cp.utag_main__pn"] + ";exp-session" } );
      },
      RDpv: function( o ) {
        if ( typeof utag.pagevars == "function" ) {
          utag.DB("Read page variables");
          utag.pagevars(o);
        }
      },
      RD: function( o, a ) {
        utag.DB("utag.loader.RD");
        utag.DB(o);

        utag.loader.RDcp(o);

        if ( !utag.loader.rd_flag ) {
          utag.loader.rd_flag = 1;
          o["cp.utag_main_v_id"] = o["cp.utag_main_v_id"] || utag.ut.vi((new Date()).getTime());
          o["cp.utag_main__pn"] = ( 1 + parseInt( o["cp.utag_main__pn"] || 0 ) ) + "";
          // the _st value is not-yet-set for first page view so we'll need wait to write in _pn value (which is exp-session)
          // The SC function expires (removes) cookie values that expired with the session
          utag.loader.SC( "utag_main", { "v_id": o["cp.utag_main_v_id"] } );
          utag.loader.RDses(o);
        }

        // first utag.track call for noview should not clear session start (_ss) value
        if(a && !utag.cfg.noview)utag.loader.RDses(o);
        utag.loader.RDqp(o);
        utag.loader.RDmeta(o);
        utag.loader.RDdom(o);
        utag.loader.RDut(o, a || "view");
        utag.loader.RDpv(o);
        utag.loader.RDva(o);
      },
      RC: function(a, x, b, c, d, e, f, g, h, i, j, k, l, m, n, o, v, ck, cv, r, s, t) {
        o = {};
        b = ("" + document.cookie != "") ? (document.cookie).split("; ") : [];
        r = /^(.*?)=(.*)$/;
        s = /^(.*);exp-(.*)$/;
        t = (new Date()).getTime();
        for (c = 0; c < b.length; c++) {
          if (b[c].match(r)) {
            ck = RegExp.$1;
            cv = RegExp.$2;
          }
          e = utag.ut.decode(cv);
          if (typeof ck!="undefined"){
            if (ck.indexOf("ulog") == 0 || ck.indexOf("utag_") == 0) {
              e = cv.split("$");
              g = [];
              j = {};
              for (f = 0; f < e.length; f++) {
                try{
                  g = e[f].split(":");
                  if (g.length > 2) {
                    g[1] = g.slice(1).join(":");
                  }
                  v = "";
                  if (("" + g[1]).indexOf("~") == 0) {
                    h = g[1].substring(1).split("|");
                    for (i = 0; i < h.length; i++) h[i] = utag.ut.decode(h[i]);
                    v = h
                  } else v = utag.ut.decode(g[1]);
                  j[g[0]] = v;
                }catch(er){utag.DB(er)};
              }
              o[ck] = {};
              for (f in utag.loader.GV(j)) {
                if (utag.ut.typeOf(j[f]) == "array") {
                  n = [];
                  for (m = 0; m < j[f].length; m++) {
                    if (j[f][m].match(s)){
                      k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                      if (k > t) n[m] = (x == 0) ? j[f][m] : RegExp.$1;
                    }
                  }
                  j[f] = n.join("|");
                } else {
                  j[f] = "" + j[f];
                  if (j[f].match(s)) {
                    k = (RegExp.$2 == "session") ? (typeof j._st != "undefined" ? j._st : t - 1) : parseInt(RegExp.$2);
                    j[f] = (k < t) ? null : (x == 0 ? j[f] : RegExp.$1);
                  }
                }
                if (j[f]) o[ck][f] = j[f];
              }
            } else if (utag.cl[ck] || utag.cl['_all_']) {
              o[ck] = e
            }
          }
        }
        return (a) ? (o[a] ? o[a] : {}) : o;
      },
      SC: function(a, b, c, d, e, f, g, h, i, j, k, x, v) {
        if (!a) return 0;
        if (a=="utag_main" && utag.cfg.nocookie) return 0;
        v = "";
        var date = new Date();
        var exp = new Date();
        exp.setTime(date.getTime()+(365*24*60*60*1000));
        x = exp.toGMTString();
        if (c && c == "da") {
          x = "Thu, 31 Dec 2009 00:00:00 GMT";
        } else if (a.indexOf("utag_") != 0 && a.indexOf("ulog") != 0) {
          if (typeof b != "object") {
            v = b
          }
        } else {
          d = utag.loader.RC(a, 0);
          for (e in utag.loader.GV(b)) {
            f = "" + b[e];
            if (f.match(/^(.*);exp-(\d+)(\w)$/)) {
              g = date.getTime() + parseInt(RegExp.$2) * ((RegExp.$3 == "h") ? 3600000 : 86400000);
              if (RegExp.$3 == "u") g = parseInt(RegExp.$2);
              f = RegExp.$1 + ";exp-" + g;
            }
            if (c == "i") {
              if (d[e] == null) d[e] = f;
            } else if (c == "d") delete d[e];
            else if (c == "a") d[e] = (d[e] != null) ? (f - 0) + (d[e] - 0) : f;
            else if (c == "ap" || c == "au") {
              if (d[e] == null) d[e] = f;
              else {
                if (d[e].indexOf("|") > 0) {
                  d[e] = d[e].split("|")
                }
                g = (utag.ut.typeOf(d[e]) == "array") ? d[e] : [d[e]];
                g.push(f);
                if (c == "au") {
                  h = {};
                  k = {};
                  for (i = 0; i < g.length; i++) {
                    if (g[i].match(/^(.*);exp-(.*)$/)) {
                      j = RegExp.$1;
                    }
                    if (typeof k[j] == "undefined") {
                      k[j] = 1;
                      h[g[i]] = 1;
                    }
                  }
                  g = [];
                  for (i in utag.loader.GV(h)) {
                    g.push(i);
                  }
                }
                d[e] = g
              }
            } else d[e] = f;
          }
          h = new Array();
          for (g in utag.loader.GV(d)) {
            if (utag.ut.typeOf(d[g]) == "array") {
              for (c = 0; c < d[g].length; c++) {
                d[g][c] = encodeURIComponent(d[g][c])
              }
              h.push(g + ":~" + d[g].join("|"))
            } else h.push((g + ":").replace(/[\,\$\;\?]/g,"") + encodeURIComponent(d[g]))
          }
          if (h.length == 0) {
            h.push("");
            x = ""
          }
          v = (h.join("$"));
        }
        document.cookie = a + "=" + v + ";path=/;domain=" + utag.cfg.domain + ";expires=" + x + (utag.cfg.secure_cookie?";secure":"");
        return 1
      },
      LOAD: function(a, b, c, d) {
        //utag.DB('utag.loader.LOAD:' + a);
        if(!utag.loader.cfg){
           return
        }
	if(this.ol==0){
          if(utag.loader.cfg[a].block && utag.loader.cfg[a].cbf){
            this.f[a] = 1;
	    delete utag.loader.bq[a];
          }
	  for(b in utag.loader.GV(utag.loader.bq)){
            if(utag.loader.cfg[a].load==4 && utag.loader.cfg[a].wait==0){
              utag.loader.bk[a]=1;
              utag.DB("blocked: "+ a);
            }
	    utag.DB("blocking: " + b);
	    return;
	  }
	  utag.loader.INIT();
	  return;
	}
        utag.DB('utag.loader.LOAD:' + a);

        if (this.f[a] == 0) {
          this.f[a] = 1;
      	
	  if(utag.cfg.noview!=true){
	    if(utag.loader.cfg[a].send){
              utag.DB("SENDING: "+a);
              try{
                if (utag.loader.sendq.pending > 0 && utag.loader.sendq[a]) {
                  utag.DB("utag.loader.LOAD:sendq: "+a);
                  while( d = utag.loader.sendq[a].shift() ) {
                    utag.DB(d);
                    utag.sender[a].send(d.event, utag.handler.C(d.data));
                    utag.loader.sendq.pending--;
                  }
                } else {
                  utag.sender[a].send('view',utag.handler.C(utag.data));
                }
		utag.rpt['s_' + a] = 0;
	      } catch (e) {
                utag.DB(e);
	        utag.rpt['s_' + a] = 1;
	      }
	    }
	  }
	  if(utag.loader.rf==0)return;
          for (b in utag.loader.GV(this.f)) {
            if (this.f[b] == 0 || this.f[b] == 2) return
          }
	  utag.loader.END();
        }
      },
      EV: function(a, b, c, d) {
        if (b == "ready") {
          if(!utag.data){
            try {
              utag.cl = {'_all_': 1};
              utag.loader.initdata();    
              utag.loader.RD(utag.data);
            }catch(e){ utag.DB(e) };
          }
          if ( (document.attachEvent || utag.cfg.dom_complete) ? document.readyState === "complete" : document.readyState !== "loading" ) setTimeout(c, 1);
          else {
            utag.loader.ready_q.push(c);
            var RH;

            if(utag.loader.ready_q.length<=1){
              if (document.addEventListener) {
                RH = function() {
                  document.removeEventListener("DOMContentLoaded", RH, false);
                  utag.loader.run_ready_q()
                };
                if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded", RH, false);
                window.addEventListener("load", utag.loader.run_ready_q, false);
              } else if (document.attachEvent) {
                RH = function() {
                  if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", RH);
                    utag.loader.run_ready_q()
                  }
                };
                document.attachEvent("onreadystatechange", RH);
                window.attachEvent("onload", utag.loader.run_ready_q);
              }
            }
          }
        } else {
          if (a.addEventListener) {
            a.addEventListener(b, c, false)
          } else if (a.attachEvent) {
            a.attachEvent(((d == 1) ? "" : "on") + b, c)
          }
        }
      },
      END: function(b, c, d, e, v, w){
        if(this.ended){return};
        this.ended=1;
	utag.DB("loader.END");
        b = utag.data;
        // add the default values for future utag.link/view calls
	if(utag.handler.base && utag.handler.base!='*'){
          e = utag.handler.base.split(",");
          for (d = 0; d < e.length; d++) {
            if (typeof b[e[d]] != "undefined") utag.handler.df[e[d]] = b[e[d]]
          }
        }else if (utag.handler.base=='*'){
           utag.ut.merge(utag.handler.df,b,1);
        }

        utag.rpt['r_0']="t";
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }

        utag.rpt.ts['s'] = new Date();
	

        v = utag.cfg.path;
        // both .tiqcdn.com and .tiqcdn.cn supported
        w = v.indexOf(".tiqcdn.");
        if(w>0 && b["cp.utag_main__ss"]==1 && !utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
        
        if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");
	utag.handler.INIT();
      }
    },
    DB: function(a, b) {
      // return right away if we've already checked the cookie
      if(utag.cfg.utagdb===false){
        return;
      }else if(typeof utag.cfg.utagdb=="undefined"){
        b = document.cookie+'';
        utag.cfg.utagdb=((b.indexOf('utagdb=true') >= 0)?true:false);
      }
      if(utag.cfg.utagdb===true){
        var t;
        if(utag.ut.typeOf(a) == "object"){
          t=utag.handler.C(a)
        }else{
          t=a
        }
        utag.db_log.push(t);
        try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}
      }
    },
    RP: function(a, b, c) {
      if (typeof a != 'undefined' && typeof a.src != 'undefined' && a.src != '') {
        b = [];
        for (c in utag.loader.GV(a)) {
          if (c != 'src') b.push(c + '=' + escape(a[c]))
        }
        this.dbi.push((new Image()).src = a.src + '?utv=' + utag.cfg.v + '&utid=' + utag.cfg.utid + '&' + (b.join('&')))
      }
    },
    view: function(a,c,d) {
      return this.track({event:'view', data:a || {}, cfg:{cb:c,uids:d}})
    },
    link: function(a,c,d) {
      return this.track({event:'link', data:a || {}, cfg:{cb:c,uids:d}})
    },
    track: function(a,b,c,d,e) {
      a = a || {};
      if (typeof a == "string") {
        a = { event: a, data: b || {}, cfg:{cb:c,uids:d} } 
      }

      // track called directly also supports a 3rd option where first param (a) is data layer and second param (b) is cb function
      for(e in utag.loader.GV(utag.o)){
        utag.o[e].handler.trigger(a.event || "view", a.data || a, a.cfg || {cb:b,uids:c})
      }
      a.cfg = a.cfg || {cb:b};
      if(typeof a.cfg.cb == "function")a.cfg.cb();

      return true
    },
    handler: {
      base: "",
      df: {},
      o: {},
      send: {},
      iflag: 0,
      INIT: function(a, b, c) {
        utag.DB('utag.handler.INIT');
        if(utag.initcatch){
          utag.initcatch=0;
          return
        }
        this.iflag = 1;
        a = utag.loader.q.length;
        if (a > 0) {
          utag.DB("Loader queue");
          for (b = 0; b < a; b++) {
            c = utag.loader.q[b];
            utag.handler.trigger(c.a, c.b, c.c)
          }
        }
        //##UTABSOLUTELAST##
      },
      test: function() {
        return 1
      },
      // reset and run load rules
      LR: function(b){
        utag.DB("Load Rules");
        for(var d in utag.loader.GV(utag.cond)){
          utag.cond[d]=false;
        }
        utag.DB(b);
        utag.loader.loadrules(b);
        utag.DB(utag.cond);
        utag.loader.initcfg();
        // use the OPTOUTMULTI cookie value to override load rules
        utag.loader.OU();
	for(var r in utag.loader.GV(utag.cond)){
          utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";
        }
      },
      // The third param "c" is a string that defines the location i.e. "blr" == before load rules
      RE:function(a,b,c,d,e,f,g){
        if(c!="alr" && !this.cfg_extend){
          return 0; 
        }
        utag.DB("RE: "+c);
        if(c=="alr")utag.DB("All Tags EXTENSIONS");
        utag.DB(b);
        if(typeof this.extend != "undefined"){
          g=0;
          for (d = 0; d < this.extend.length; d++) {
            try {
              /* Extension Attributes */
              e=0;
              if(typeof this.cfg_extend!="undefined"){
                f=this.cfg_extend[d];
                if(typeof f.count == "undefined")f.count=0;
                if(f[a]==0 || (f.once==1 && f.count>0) || f[c]==0){
                  e=1
                }else{
                  if(f[c]==1){g=1};
                  f.count++
                }
              }
              if(e!=1){
                this.extend[d](a, b);
                utag.rpt['ex_' + d] = 0
              }
            } catch (er) {
              utag.DB(er);
              utag.rpt['ex_' + d] = 1;
	      utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});
            }
          }
          utag.DB(b);
          return g;
        }
      },
      trigger: function(a, b, c, d, e, f) {
        utag.DB('trigger:'+a+(c && c.uids?":"+c.uids.join(","):""));
        b = b || {};
        utag.DB(b);

        if (!this.iflag) {
          utag.DB("trigger:called before tags loaded");
          for (d in utag.loader.f) {
            if (!(utag.loader.f[d] === 1)) utag.DB('Tag '+d+' did not LOAD')
          }
          utag.loader.q.push({
            a: a,
            b: utag.handler.C(b),
            c: c
          });
          return;
        }

        // update all values for AJAX pages
        utag.ut.merge(b,this.df,0);
        utag.loader.RD( b, a );

        // clearing noview flag after the RD function call
        utag.cfg.noview = false;

        function sendTag(a, b, d){
          try {
            if(typeof utag.sender[d]!="undefined"){
              utag.DB("SENDING: "+d);
              utag.sender[d].send(a, utag.handler.C(b));
	      utag.rpt['s_' + d] = 0;
            }else if (utag.loader.cfg[d].load!=2){
              // utag.link calls can load in new tags
              utag.loader.sendq[d] = utag.loader.sendq[d] || [];
              utag.loader.sendq[d].push({"event":a, "data":utag.handler.C(b)});
              utag.loader.sendq.pending++;
              utag.loader.AS({id : d, load : 1}); 
            }
          }catch (e) {utag.DB(e)}
        }
        
        // utag.track( { event : "view", data: {myvar : "myval" }, cfg: { uids : [1,2,10] } } );
        if(c && c.uids){
          this.RE(a,b,"alr");
          for(f=0;f<c.uids.length;f++){
            d=c.uids[f];
            // bypass load rules, but still check the OPTOUTMULTI cookie before firing
            if (!utag.loader.OU(utag.loader.cfg[d].tid)) {
              sendTag(a, b, d);
            }
          }
        }else if(utag.cfg.load_rules_ajax){
          this.RE(a,b,"blr");
          // process load rules based on current data layer
          this.LR(b);
          this.RE(a,b,"alr");
          
          for(f = 0; f < utag.loader.cfgsort.length; f++){
            d = utag.loader.cfgsort[f];
            if(utag.loader.cfg[d].load && utag.loader.cfg[d].send){
              sendTag(a, b, d);
            }
          }
        }else{
          // legacy behavior
          this.RE(a,b,"alr");
          for (d in utag.loader.GV(utag.sender)) {
            sendTag(a, b, d);
          }
        }
        this.RE(a,b,"end");
      },
      // "sort-of" copy
      C: function(a, b, c) {
        b = {};
        for (c in utag.loader.GV(a)) {
          if(utag.ut.typeOf(a[c]) == "array"){
            b[c] = a[c].slice(0)
          }else{
            // objects are still references to the original (not copies)
            b[c] = a[c]
          }
        }
        return b
      }
    },
    ut:{
      pad: function(a,b,c,d){
        a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return ""+d+a
      },
      vi: function(t,a,b){
        if(!utag.v_id){
          a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;
        }
        return utag.v_id
      },
      hasOwn: function(o, a) {
        return o != null && Object.prototype.hasOwnProperty.call(o, a)
      },
      isEmptyObject: function(o, a) {
	for (a in o) {
          if (utag.ut.hasOwn(o,a))return false
        }
        return true
      },
      isEmpty: function(o) {
        var t = utag.ut.typeOf(o);
        if ( t == "number" ){
          return isNaN(o)
        }else if ( t == "boolean" ){
          return false
        }else if ( t == "string" ){
          return o.length === 0
        }else return utag.ut.isEmptyObject(o)
      },
      typeOf: function(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      },
      flatten: function(o){
        // stop when arriving at a string, array, boolean, number (float or integer)
        var a = {}; 
        function r(c, p) {
          if (Object(c) !== c || utag.ut.typeOf(c) == "array") {
            a[p] = c;
          } else {
            if(utag.ut.isEmptyObject(c)){
              //a[p] = {};
            }else{
              for (var d in c) {
                r(c[d], p ? p+"."+d : d);
              }
            }
          }
        }
        r(o, "");

        return a;
      },
      merge: function(a, b, c, d) {
        if(c){
          for(d in utag.loader.GV(b)){
            a[d] = b[d]
          }
        }else{
          for(d in utag.loader.GV(b)){
            if(typeof a[d]=="undefined")a[d] = b[d]
          }
        }
      },
      decode: function(a, b) {
        b = "";
        try{b = decodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = unescape(a)};
        return b
      },
      encode: function(a, b) {
        b = "";
        try{b = encodeURIComponent(a)}catch(e){utag.DB(e)};
        if (b == ""){b = escape(a)};
        return b
      },
      error: function(a, b, c){
        if(typeof utag_err!="undefined"){
          utag_err.push(a)
        }
      },
      loader: function(o, a, b, c, l, m) {
        utag.DB(o);
        a=document;
        if (o.type=="iframe") {
          // if an iframe of same id already exists, remove and add again (to keep DOM clean and avoid impacting browser history)
          m = a.getElementById( o.id );
          if ( m && m.tagName == "IFRAME" ) {
            m.parentNode.removeChild(m);
          }
          b = a.createElement("iframe");
          o.attrs = o.attrs || {};
          utag.ut.merge( o.attrs, { "height" : "1", "width" : "1", "style" : "display:none" } , 0 );
        }else if (o.type=="img"){
          utag.DB("Attach img: "+o.src);
          b = new Image();
        }else{
          b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";
        }
        if(o.id){b.id=o.id};
        for( l in utag.loader.GV(o.attrs) ){
          b.setAttribute( l, o.attrs[l] )
        }
        b.setAttribute("src", o.src);
        if (typeof o.cb=="function") {
          if(b.addEventListener) {
            b.addEventListener("load",function(){o.cb()},false);
          }else {
            // old IE support
            b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};
          }
        }
        if(typeof o.error=="function"){
          utag.loader.EV(b, "error", o.error);
        }
        if ( o.type != "img" ) {
          l = o.loc || "head";
          c = a.getElementsByTagName(l)[0];
          if (c) {
            utag.DB("Attach to "+l+": "+o.src);
            if (l == "script") {
              c.parentNode.insertBefore(b, c);
            } else {
              c.appendChild(b)
            }
          }
        }
      }
    }
  };
  utag.o['bofa.main']=utag;
  utag.cfg = {
    template : "ut4.48.",
    // Enable load rules ajax feature by default
    load_rules_ajax: true,
    load_rules_at_wait: false,
    lowerqp: false,
    noconsole: false,
    //noview: ##UTNOVIEW##,
    session_timeout: 1800000,
    readywait: 0,
    noload: 0,
    domain: utag.loader.lh(),
    datasource: "##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),
    secure_cookie: ("##UTSECURECOOKIE##".replace("##"+"UTSECURECOOKIE##","")==="true")?true:false,
    path: "//tags.tiqcdn.com/utag/bofa/main/prod/",
    utid: "bofa/main/202409180020"
  };
  utag.cfg.v = utag.cfg.template + "202409180021";
  utag.cond={102:0,112:0,114:0,12:0,16:0,17:0,20:0,24:0,26:0,30:0,33:0,38:0,40:0,41:0,49:0,50:0,53:0,58:0,62:0,72:0,84:0,87:0,91:0,97:0,98:0};
utag.pagevars=function(ud){ud = ud || utag.data;try{ud['js_page.digitalData.load_genesysChat']=digitalData.load_genesysChat}catch(e){utag.DB(e)};try{ud['js_page.pipadSession.isOBO']=pipadSession.isOBO}catch(e){utag.DB(e)};try{ud['js_page.pipadSession']=pipadSession}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.pageInfo[0].language']=digitalData.page.pageInfo[0].language}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_genesys_only']=digitalData.load_genesys_only}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_medallia']=digitalData.load_medallia}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_bb']=digitalData.load_bb}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_glance']=digitalData.load_glance}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_glassbox']=digitalData.load_glassbox}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_gtag']=digitalData.load_gtag}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_chatSite']=digitalData.load_chatSite}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_at']=digitalData.load_at}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_adobeTargetClick']=digitalData.load_adobeTargetClick}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_adobetargetclick']=digitalData.load_adobetargetclick}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_glassbox2']=digitalData.load_glassbox2}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_callsign_biocatch']=digitalData.load_callsign_biocatch}catch(e){utag.DB(e)};try{ud['js_page.digitalData.user.authenticated']=digitalData.user.authenticated}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_knotch']=digitalData.load_knotch}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.attributes.chat.SITE_ID']=digitalData.page.attributes.chat.SITE_ID}catch(e){utag.DB(e)};try{ud['js_page.window._cls_configure.reportURI']=window._cls_configure.reportURI}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.pageInfo[0].pageID']=digitalData.page.pageInfo[0].pageID}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_opinionlabs']=digitalData.load_opinionlabs}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_touchcommerce']=digitalData.load_touchcommerce}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_audiencemanager']=digitalData.load_audiencemanager}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.attributes.gaId']=digitalData.page.attributes.gaId}catch(e){utag.DB(e)};try{ud['js_page.load_dataCollection']=load_dataCollection}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_coremetrics']=digitalData.load_coremetrics}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.pageInfo[0].appName']=digitalData.page.pageInfo[0].appName}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_cobrowse']=digitalData.load_cobrowse}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_adobetarget']=digitalData.load_adobetarget}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_convertro']=digitalData.load_convertro}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_mboxcreate']=digitalData.load_mboxcreate}catch(e){utag.DB(e)};try{ud['js_page.window.bactm_isChatActive']=window.bactm_isChatActive}catch(e){utag.DB(e)};try{ud['js_page.digitalData.load_trusteer']=digitalData.load_trusteer}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.category.primaryCategory']=digitalData.page.category.primaryCategory}catch(e){utag.DB(e)};try{ud['js_page.CurrentPageID']=CurrentPageID}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.attributes.chat.boldchatAuth']=digitalData.page.attributes.chat.boldchatAuth}catch(e){utag.DB(e)};try{ud['js_page.cm']=cm}catch(e){utag.DB(e)};try{ud['js_page.digitalData.page.attributes.chat.site_id']=digitalData.page.attributes.chat.site_id}catch(e){utag.DB(e)};};
utag.loader.initdata = function() {   try {       utag.data = (typeof utag_data != 'undefined') ? utag_data : {};       utag.udoname='utag_data';    } catch (e) {       utag.data = {};       utag.DB('idf:'+e);   }};utag.loader.loadrules = function(_pd,_pc) {var d = _pd || utag.data; var c = _pc || utag.cond;for (var l in utag.loader.GV(c)) {switch(l){
case '102':try{c[102]|=(d['js_page.digitalData.load_glassbox2'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '112':try{c[112]|=(typeof d['js_page.digitalData.load_knotch']!='undefined'&&d['js_page.digitalData.load_knotch'].toString().toLowerCase().indexOf('false'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '114':try{c[114]|=(d['dom.url'].toString().indexOf('-dev4')>-1)}catch(e){utag.DB(e)}; break;
case '12':try{c[12]|=(typeof d['page.attributes.standardDART.']!='undefined'&&d['page.attributes.standardDART.']!='')||(d['dom.query_string'].toString().toLowerCase().indexOf('disableDart'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '16':try{c[16]|=(d['js_page.digitalData.page.pageInfo[0].pageID']=='GWM:Mkt:MerrillEdge:FSA;overview')}catch(e){utag.DB(e)}; break;
case '17':try{c[17]|=(typeof d['Load_TT_Logging']!='undefined'&&d['Load_TT_Logging'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '20':try{c[20]|=(typeof d['js_page.digitalData.page.attributes.gaId']!='undefined'&&d['js_page.digitalData.page.attributes.gaId']!='')}catch(e){utag.DB(e)}; break;
case '24':try{c[24]|=(typeof d['js_page.digitalData.load_coremetrics']=='undefined')||(d['js_page.digitalData.load_coremetrics'].toString().toLowerCase()!='false'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '26':try{c[26]|=(typeof d['js_page.digitalData.load_cobrowse']!='undefined'&&d['js_page.digitalData.load_cobrowse'].toString().toLowerCase()!='false'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '30':try{c[30]|=(typeof d['js_page.digitalData.load_mboxcreate']=='undefined')||(d['js_page.digitalData.load_mboxcreate'].toString().toLowerCase()!='false'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '33':try{c[33]|=(d['load_convergys'].toString().toLowerCase()=='true'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '38':try{c[38]|=(d['dom.url'].toString().toLowerCase().indexOf('-dev'.toLowerCase())<0&&d['dom.query_string'].toString().toLowerCase().indexOf('dev1celebrus=true'.toLowerCase())<0&&d['dom.query_string'].toString().toLowerCase().indexOf('disablecelebrus=true'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '40':try{c[40]|=(d['js_page.digitalData.page.pageInfo[0].pageID'].toString().toLowerCase()=='homepage:Content:Personal;homepage_personal'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '41':try{c[41]|=(d['privacy.do_not_track'].toString().toLowerCase()!='true'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '49':try{c[49]|=(d['js_page.digitalData.page.category.primaryCategory'].toString().toLowerCase()=='smbus:Content:practice_loans:health_care'.toLowerCase())||(d['js_page.digitalData.page.category.primaryCategory'].toString().toLowerCase()=='smbus:Content:practice_loans'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '50':try{c[50]|=(typeof d['js_page.cm']!='undefined')}catch(e){utag.DB(e)}; break;
case '53':try{c[53]|=(d['js_page.digitalData.page.pageInfo[0].pageID'].toString().toLowerCase()!='homepage:Content:Personal;homepage_personal'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '58':try{c[58]|=(typeof d['js_page.digitalData.page.attributes.chat.site_id']!='undefined'&&typeof d['js_page.digitalData.page.attributes.chat.site_id']!='undefined'&&d['js_page.digitalData.page.attributes.chat.site_id']!=''&&d['dom.pathname'].toString().toLowerCase().indexOf('/chat/'.toLowerCase())<0)||(typeof d['js_page.digitalData.page.attributes.chat.SITE_ID']!='undefined'&&typeof d['js_page.digitalData.page.attributes.chat.SITE_ID']!='undefined'&&d['js_page.digitalData.page.attributes.chat.SITE_ID']!=''&&d['dom.pathname'].toString().toLowerCase().indexOf('/chat/'.toLowerCase())<0)||(typeof d['cp.occtChat']!='undefined'&&d['cp.occtChat'].toString().toLowerCase().indexOf('secureKey'.toLowerCase())>-1&&d['dom.pathname'].toString().toLowerCase().indexOf('/chat/'.toLowerCase())<0)||(typeof d['cp.occtChat']!='undefined'&&d['cp.occtChat'].toString().toLowerCase().indexOf('chatRefID'.toLowerCase())>-1&&d['dom.pathname'].toString().toLowerCase().indexOf('/chat/'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '62':try{c[62]|=(d['current_page'].toString().toLowerCase().indexOf('cards:app'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '72':try{c[72]|=(d['dom.pathname'].toString().toLowerCase().indexOf('chat'.toLowerCase())<0)}catch(e){utag.DB(e)}; break;
case '84':try{c[84]|=(d['dom.pathname'].toString().toLowerCase().indexOf('apply-deposits/public/sbmm'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('ogateway/productsandservices/api/accounts/v1/balance'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('ogateway/productsandservices/api/accounts/v1/bol/balance'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('ogateway/productsandservices/api/accounts/v1/external/balance'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('ogateway/productsandservices/tiles/v1/tileinfo'.toLowerCase())>-1)||(d['dom.pathname'].toString().toLowerCase().indexOf('ogateway/productsandservices/api/nav/v1/details'.toLowerCase())>-1)}catch(e){utag.DB(e)}; break;
case '87':try{c[87]|=(d['js_page.digitalData.load_bb'].toString().toLowerCase()=='true'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '91':try{c[91]|=(d['js_page.digitalData.load_glassbox'].toString().toLowerCase()=='true'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '97':try{c[97]|=(typeof d['js_page.digitalData.load_adobetargetclick']!='undefined'&&d['js_page.digitalData.load_adobetargetclick'].toString().toLowerCase()!='false'.toLowerCase())}catch(e){utag.DB(e)}; break;
case '98':try{c[98]|=(d['js_page.digitalData.page.pageInfo[0].pageID'].toString().toLowerCase()=='homepage:Content:Personal;homepage_personal'.toLowerCase())||(d['js_page.digitalData.page.pageInfo[0].pageID'].toString().toLowerCase()=='homepage:Content:smbus;homepage_smbus'.toLowerCase())||(d['js_page.digitalData.page.pageInfo[0].pageID'].toString().toLowerCase()=='homepage:Content:smbus;smbus_homepage'.toLowerCase())}catch(e){utag.DB(e)}; break;}}};utag.pre=function() {    utag.loader.initdata();utag.pagevars();    try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};    utag.loader.loadrules();    };utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();
  utag.handler.extend=[function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'DFS:Content:Auto:Secure;auto-loans-financing':'true'},{'HL:Content:Overview;Auth_Rates':'true'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['cm_Segmentation_Value']=c[e][f];m=true};};if(m)break};if(!m)b['cm_Segmentation_Value']='false';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'DFS:Prod:Auto;auto-loans-financing':'TRUE'},{'DFS:Prod:Auto;auto-loan-rates':'TRUE'},{'DFS:Prod:Auto;auto-refinance-loan':'TRUE'},{'DFS:Tool:Auto:Calc;auto-loan-calculator':'TRUE'},{'DFS:Tool:Auto:Calc;auto-refinance-calculator':'TRUE'},{'DFS:Content:Auto;disability-access-loans':'TRUE'},{'DFS:Content:Auto;how-car-loans-work':'TRUE'},{'DFS:Content:Auto;buying-your-first-car':'TRUE'},{'DFS:Content:Auto;financing-a-car':'TRUE'},{'DFS:Content:Auto;when-to-refinance-a-car':'TRUE'},{'DFS:Content:Auto;car-buying-process':'TRUE'},{'DFS:Content:Auto;buying-new-or-used-cars':'TRUE'},{'DFS:Content:Auto;what-to-know-when-buying-car':'TRUE'},{'DFS:Content:Auto:FAQ;auto-loan-faqs':'TRUE'},{'DFS:Prod:Auto:Secure;auto-loans-financing':'TRUE'},{'DFS:Prod:Auto:Secure;auto-loan-rates':'TRUE'},{'DFS:Prod:Auto:Secure;auto-refinance-loan':'TRUE'},{'DFS:Tool:Auto;Secure:Calc;auto-loan-calculator':'TRUE'},{'DFS:Tool:Auto:Secure:Calc;auto-refinance-calculator':'TRUE'},{'DFS:Prod:Auto:Secure;disability-access-loans':'TRUE'},{'DFS:Prod:Auto:Secure;how-car-loans-work':'TRUE'},{'DFS:Prod:Auto:Secure;buying-your-first-car':'TRUE'},{'DFS:Prod:Auto:Secure;financing-a-car':'TRUE'},{'DFS:Prod:Auto:Secure;when-to-refinance-a-car':'TRUE'},{'DFS:Prod:Auto:Secure;car-buying-process':'TRUE'},{'DFS:Prod:Auto:Secure;buying-new-or-used-cars':'TRUE'},{'DFS:Prod:Auto:Secure;what-to-know-when-buying-car':'TRUE'},{'DFS:Content:Auto:Secure:FAQ;auto-loan-faqs':'TRUE'},{'Dep:Prod:ViewAccountTypes:Checking;checking-accounts':'TRUE'},{'Dep:Prod:ViewAccountTypes:Checking;core-checking-Account':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;core-checking-Account':'TRUE'},{'Dep:Prod:ViewAccountTypes:Checking;interest-checking-account':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;interest-checking-account':'TRUE'},{'Dep:Prod:ViewAccountTypes:Checking;safebalance':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;safebalance':'TRUE'},{'Dep:Prod:ViewAccountTypes:Savings;savings-accounts':'TRUE'},{'Dep:Prod:ViewAccountTypes:Savings;regular-savings-account':'TRUE'},{'Dep:Prod:Before-You-Apply:Savings;rewards-money-market-savings-account':'TRUE'},{'Dep:Prod:ViewAccountTypes:Savings;rewards-money-market-savings-account':'TRUE'},{'Dep:Prod:ViewAccountTypes:Savings;child-savings-accounts':'TRUE'},{'Dep:Prod:ViewAccountTypes:Savings;utma-savings-account-for-children':'TRUE'},{'Dep:Prod:Before-You-Apply:Savings;utma-savings-account-for-children':'TRUE'},{'Dep:Prod:ViewAccountTypes:CDs;cd-accounts':'TRUE'},{'Dep:Prod:ViewAccountTypes:CDs;featured-bank-cd':'TRUE'},{'Dep:Prod:Before-You-Apply:CDs;featured-bank-cd':'TRUE'},{'Dep:Prod:ViewAccountTypes:CDs;standard-term-certificate-of-deposit':'TRUE'},{'Dep:Prod:Before-You-Apply:CDs;standard-term-certificate-of-deposit':'TRUE'},{'Dep:Prod:ViewAccountTypes:IRAs;retirement-accounts':'TRUE'},{'Dep:Prod:ViewAccountTypes:IRAs;savings-ira':'TRUE'},{'Dep:Prod:Before-You-Apply:IRAs;featured-ira':'TRUE'},{'Dep:Prod:Before-You-Apply:IRAs;standard-term-ira':'TRUE'},{'Dep:Content:ManageYourMoney;dynamic-interest-rates':'TRUE'},{'Dep:Content:FAQ;account-fees':'TRUE'},{'Dep:Prod:ViewAccountTypes:Checking;checking-clarity-statement':'TRUE'},{'Dep:Content:ViewAccountTypes;bank-accounts':'TRUE'},{'Dep:Prod:Savings:Auth-Sales;basic':'TRUE'},{'Dep:Prod:Checking:Auth-Sales;enrolled_platinum':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;auth-interest':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;auth-core':'TRUE'},{'Dep:Prod:Savings:Sales;basic':'TRUE'},{'Dep:Prod:Checking:Sales;basic':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;interest':'TRUE'},{'Dep:Prod:Before-You-Apply:Checking;core':'TRUE'},{'Dep:Prod:Savings;Auth-Sales;rewards-savings-account':'TRUE'},{'Dep:Prod:Savings:Auth-Sales;rewards-savings-account':'TRUE'},{'Dep:Prod:Checking:Auth-Sales;basic':'TRUE'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['Load_TT_Logging']=c[e][f];m=true};};if(m)break};if(!m)b['Load_TT_Logging']='false';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'Dep:Prod:Checking:Auth-Sales':'Dep:Prod:Checking:Auth-Sales;enrolled_gold-_-GOLD-ENROLLED,Dep:Prod:Checking:Auth-Sales;enrolled_platinum-_-PLATINUM-ENROLLED,Dep:Prod:Checking:Auth-Sales;enrolled_ph-_-PLATINUM-HONORS-ENROLLED,Dep:Prod:Checking:Auth-Sales;eligible_gold-_-GOLD-ELIGIBLE,Dep:Prod:Checking:Auth-Sales;eligible_platium-_-PLATINUM-ELIGIBLE,Dep:Prod:Checking:Auth-Sales;eligible_ph-_-PLATINUM-HONORS-ELIGIBLE,Dep:Prod:Checking:Auth-Sales;existing_cc-_-CREDIT-CARD,Dep:Prod:Checking:Auth-Sales;existing_interest_checking-_-INTEREST-CLASSIC,Dep:Prod:Checking:Auth-Sales;existing_advantageTiered_checking-_-INTEREST-ADVANTAGE,Dep:Prod:Checking:Auth-Sales;basic-_-DEFAULT'},{'Dep:Prod:Savings:Auth-Sales':'Dep:Prod:Savings:Auth-Sales;enrolled_gold-_-GOLD-ENROLLED,PDep:Prod:Savings:Auth-Sales;enrolled_platinum-_-PLATINUM-ENROLLED,Dep:Prod:Savings:Auth-Sales;enrolled_ph-_-PLATINUM-HONORS-ENROLLED,Dep:Prod:Savings:Auth-Sales;eligible_gold-_-GOLD-ELIGIBLE,Dep:Prod:Savings:Auth-Sales;eligible_platium-_-PLATINUM-ELIGIBLE,Dep:Prod:Savings:Auth-Sales;eligible_ph-_-PLATINUM-HONORS-ELIGIBLE,Dep:Prod:Savings:Auth-Sales;existing_cc-_-CREDIT-CARD,Dep:Prod:Savings:Auth-Sales;existing_interest_checking-_-INTEREST-CLASSIC,Dep:Prod:Savings:Auth-Sales;existing_advantageTiered_checking-_-INTEREST-ADVANTAGE,Dep:Prod:Savings:Auth-Sales;basic-_-DEFAULT'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['Dynamic_PageView_Element']=c[e][f];m=true};};if(m)break};if(!m)b['Dynamic_PageView_Element']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'smbus:Content:practice_loans:resources;overview':'Chat_online-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs947;ord=1|equipment_loan_calculator_topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|events_trade_schedule-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|business_financing-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|Request_information_now-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibc681;cat=gcibh253;ord=1|resources_topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2015_038;ord=1|see_all_our_FAQs-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|starting-new-practice-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|buying-existing-practice-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|tips-dental-startup-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|tips-dental-acquisition-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1|equipment_loan_calculator-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_011;ord=1'},{'smbus:Content:practice_loans:resources;practice-heartbeat':'practice_heartbeat_sign_in-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2015_039;ord=1'},{'smbus:Content:practice_loans:FAQ:FAQs':'Chat_online-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs947;ord=1|faqs_topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00x;ord=1|business_financing-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|print-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Request_information_now-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibc681;cat=gcibh253;ord=1|show-all-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|What_are_your_practice_loan_interest_rates-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|What_loan_terms_do_you_offer-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|_What_loan_fees_do_you_charge-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Are_any_fee_discounts_offered_to_endorsed_group_members-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Do_you_offer_straight_working_capital-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Can_I_refinance_credit_cards_with_a_practice_loan-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|What_is_the_maximum_amount_I_can_borrow-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Do_you_offer_100_financing-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|What_are_the_loan_approval_requirements-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Which_medical_specialties_do_you_finance-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Can_I_make_a_loan_payment_online_or_over_the_phone-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Im_thinking_of_starting_my_own_practice_Will_you_offer_any_business_support_in_my_first_year-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|Im_currently_in_a_residency_Am_I_eligible_for_a_loan-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1|faqs_show_all-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_012;ord=1'},{'smbus:Content:practice_loans:resources;events-dentists':'events_topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00y;ord=1|print-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_013;ord=1|select-url-module-nav-anchor-skin-go-button-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_013;ord=1'},{'smbus:Content:practice_loans:resources;endorsements':'alabama_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|arizona_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|california_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|connecticut_state_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|florida_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|georgia_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|Illinois_State_Dental_Society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|Indiana_Dental_Association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|maryland_state_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|massachusetts_dental_society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|michigan_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|new_hampshire_dental_society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|new_jersey_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|newyork_state_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|north_carolina_dental_society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|ohio_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|oregon_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|pennsylvania_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|seattle_king_county_dental_society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|tennessee_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|texas_dental_association_perks_program-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|virginia_dental_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|american_veterinary_medical_association-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|american_academy_of_family_physicians-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|american_college_of_physicians-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|american_society_of_plastic_surgeons-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1|Illinois_State_Medical_Society-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_014;ord=1'},{'smbus:Prod:Dep:Checking;business-advantage-application':'go-to-application-_-https://fls.doubleclick.net/activityi;src=1359940;type=small652;cat=2016_00h;ord=1'},{'smbus:Prod:Dep:Checking;business-fundamentals-application':'go-to-application-_-https://fls.doubleclick.net/activityi;src=1359940;type=small652;cat=2016_00g;ord=1'},{'HL:Content:Mortgage;overview':'prequalify-now-medium-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_036;ord=1|phone_number_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_037;ord=1|schedule_an_appointment_engagment-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_038;ord=1|get_a_call_back_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_039;ord=1|phone_number-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03-;ord=1|get-a-call-back-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03a;ord=1|schedule-appt-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03b;ord=1|callUsMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_037;ord=1|scheduleAnAppointmentMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_038;ord=1|getCalledBackMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_039;ord=1|prequalifyTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_036;ord=1|phone_number_2-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03-;ord=1'},{'HL:Content:HE;overview':'apply-now-medium-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03d;ord=1|phone_number_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03e;ord=1|schedule_an_appointment_engagment-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03f;ord=1|get_a_call_back_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03g;ord=1|phone_number-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03h;ord=1|get-a-call-back-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03i;ord=1|schedule-appt-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03j;ord=1|callUsHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03e;ord=1|scheduleAnAppointmentHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03f;ord=1|getCalledBackHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03g;ord=1|prequalifyTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03d;ord=1|phone_number_2-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03h;ord=1'},{'HL:Prod:Mortgage;Affordable-loan-solution':'prequalify-now-medium-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00x;ord=1|phone_number_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00y;ord=1|schedule_an_appointment_engagment-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00_;ord=1|get_a_call_back_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00z;ord=1|phone_number-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_01;ord=1|get-a-call-back-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_010;ord=1|schedule-appt-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_011;ord=1|callUsTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00y;ord=1|scheduleAnAppointmentTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00_;ord=1|getCalledBackTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00z;ord=1|prequalifyTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_00x;ord=1|phone_number_2-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_01;ord=1'},{'HL:Content:Mortgage;overview_ES':'prequalify-now-medium-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_036;ord=1|phone_number_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_037;ord=1|schedule_an_appointment_engagment-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_038;ord=1|get_a_call_back_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_039;ord=1|phone_number-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03-;ord=1|get-a-call-back-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03a;ord=1|schedule-appt-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03b;ord=1|callUsMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_037;ord=1|scheduleAnAppointmentMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_038;ord=1|getCalledBackMortgageTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_039;ord=1|prequalifyTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_036;ord=1|phone_number_2-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03-;ord=1'},{'HL:Content:HE;overview_ES':'apply-now-medium-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03d;ord=1|phone_number_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03e;ord=1|schedule_an_appointment_engagment-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03f;ord=1|get_a_call_back_engagement-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03g;ord=1|phone_number-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03h;ord=1|get-a-call-back-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03i;ord=1|schedule-appt-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03j;ord=1|callUsHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03e;ord=1|scheduleAnAppointmentHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03f;ord=1|getCalledBackHomeEquityOverviewTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03g;ord=1|prequalifyTabNav-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03d;ord=1|phone_number_2-_-https://fls.doubleclick.net/activityi;src=1359940;type=hliip069;cat=2017_03h;ord=1'},{'DFS:Prod:Auto;Auto_Shopping_Program':'anc-deposits-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00r;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00s;ord=1|header-signin-small-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00s;ord=1|ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00t;ord=1|shop-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00u;ord=1|apply-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00v;ord=1|drive-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00w;ord=1|dtShopforCar-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00x;ord=1|find-out-more-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00y;ord=1|ConnectWithSpecialist_ScheduleAnAppointment-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00z;ord=1'},{'DFS:Prod:Auto:Secure;Auto_Shopping_Program':'anc-deposits-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00r;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00s;ord=1|header-signin-small-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00s;ord=1|ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00t;ord=1|shop-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00u;ord=1|apply-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00v;ord=1|drive-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00w;ord=1|dtShopforCar-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00x;ord=1|find-out-more-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00y;ord=1|ConnectWithSpecialist_ScheduleAnAppointment-_-https://fls.doubleclick.net/activityi;src=1359940;type=ddtlp125;cat=2017_00z;ord=1'},{'smbus:Content:practice_loans:health_care;overview':'ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00z;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs463;ord=1|healthcare-practice-loans-overview-topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2015_02o;ord=1|medical-practice-loans-topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs822;ord=1|veterinary-practice-loans-topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs266;ord=1|dental-practice-loans-topnav-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=zuzca075;ord=1|dentalPracticeLoans-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00z;ord=1|vetPracticeLoans-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00z;ord=1|medicalPracticeLoans-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00z;ord=1|appointmentLink-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00z;ord=1'},{'smbus:Content:practice_loans:health_care;veterinary-loans':'ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs463;ord=1|talkToSpecialistRefinanceOfficeSpace-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1|talkToSpecialistLeaseEquipment-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1|talkToSpecialistConsolidateDebt-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1|getStarted-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1|appointmentLink-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_01;ord=1'},{'smbus:Content:practice_loans:health_care;dentist-loans':'ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs463;ord=1|talkToSpecialistRefinanceOfficeSpace-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1|talkToSpecialistLeaseEquipment-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1|talkToSpecialistConsolidateDebt-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1|appointmentLink-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1|getStarted-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_00_;ord=1'},{'smbus:Content:practice_loans:health_care;medical-loans':'ancShowHideRelatedLinks-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1|header-signin-_-https://fls.doubleclick.net/activityi;src=1359940;type=gcibl189;cat=pracs463;ord=1|talkToSpecialistRefinanceOfficeSpace-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1|talkToSpecialistLeaseEquipment-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1|talkToSpecialistConsolidateDebt-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1|getStarted-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1|appointmentLink-_-https://fls.doubleclick.net/activityi;src=1359940;type=sdlpb511;cat=2016_010;ord=1'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['dart_lookup_click_element']=c[e][f];m=true};};if(m)break};if(!m)b['dart_lookup_click_element']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].appName'];if(typeof d=='undefined')return;c=[{'ALP':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeIfSaveAndReturn":true,"completeOnElementBlur":"applicantInfoList0firstName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[500],"completeAppOnEventComplete":true}]'},{'CDP':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[500,150,155],"completeAppOnEventComplete":true}]'},{'SB_ULOAN':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[500],"completeAppOnEventComplete":true}]'},{'SB_DEP':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeOnElementBlur":"businessLegalName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[500],"completeAppOnEventComplete":true}]'},{'DMAP':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeOnElementBlur":"firstName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[800,805],"completeAppOnEventComplete":true}]'},{'DMAR':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeOnElementBlur":"firstName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[800,805],"completeAppOnEventComplete":true}]'},{'SBVL':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeOnElementBlur":"businessLegalName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[600],"completeAppOnEventComplete":true}]'},{'BAMS':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":[100,125],"completeIfAuthenticated":true,"completeIfSaveAndReturn":true,"completeOnElementBlur":"legalNameField"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[700],"completeAppOnEventComplete":true}]'},{'BAMSLF':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeOnElementBlur":"firstNameField"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","completeOnStepNumber":[200]}]'},{'ICEPOS':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":[50],"completeIfAuthenticated":true,"completeIfSaveAndReturn":true,"completeOnElementBlur":"customerFirstName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","completeOnStepNumber":[500]}]'},{'DMAPQ':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":100,"completeIfAuthenticated":true,"completeOnElementBlur":"firstName"},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[800,805],"completeAppOnEventComplete":true}]'},{'SDA':'[{"eventId":"view","eventName":"App View to Start","initiateOnStepNumber":200,"completeIfAuthenticated":true},{"eventId":"submit","eventName":"App Start to Submit","initiateOnEventComplete":"view","cartViewOnInitiate":true,"completeOnStepNumber":[400, 650],"completeAppOnEventComplete":true} ]'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['App_Conversion_Settings']=c[e][f];m=true};};if(m)break};if(!m)b['App_Conversion_Settings']='';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'OSP:Content:Mobile;mobile-banking-overview':'[{"el":"#mobile_app_download_send_button","pixelTag":{"startDt":"1-1-2016","endDt":"12-31-2999","url":"//www.googleadservices.com/pagead/conversion/1054100448/?label=3L0hCMH1nnEQ4JfR9gM&guid=ON&script=0"}}]'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['Custom_Event_Settings']=c[e][f];m=true};};if(m)break};if(!m)b['Custom_Event_Settings']='';   }},
function(a,b){ try{ if(1){
var _definePlugin = function(parent, name, context, definition) {
    // Check if is used inside a "modern" browser, if not, return
    if (!context || !context[parent] || !Array.prototype.filter) {
      return;
    }
  
    context[parent]['plugins'][name] = definition();
};

var _initPixelTag = function() {
  _definePlugin('bactm', 'pixelTag', typeof window !== 'undefined' ? window : null, function() {
  
    var parent = 'bactm',
      ba = window[parent],
      win = window,
      doc = document || {},
      version = '2.0.1',
      ddo = win.digitalData,
      LOG_LEVEL = {
        OFF: 10,
        FATAL: 5,
        ERROR: 4,
        WARN: 3,
        INFO: 2,
        DEBUG: 1
      };
  
    // We have no DDO, exit immediately.
    if (!ddo) return;
  
    // ===========================================================================
    // Core functions.
    // ===========================================================================
  
    var _firePixelTag = function(url, opt) {
      opt = opt || {};
      startDt = opt.startDt ? new Date(opt.startDt) : new Date('1-1-1970');
      endDt = opt.endDt ? new Date(opt.endDt) : new Date('1-1-2999');
  
      if (!(Date.now() > startDt && Date.now() < endDt)) return 0;
  
      url = (typeof url == "string" || url.length == 0) ? new Array(url) : url;
  
      url.forEach(function(url, i) {
        if (_verifyProtocol(url)){
          if (opt.cacheBuster) url = _cacheBuster(url);
  
          var tag = new bactm.PixelTag(url, i);
          if (typeof opt.parent == 'undefined') tag.appendToBody();
          else tag.appendTo(opt.parent);
  
          ba._log('PixelTag fired with ID: ' + i, LOG_LEVEL.INFO);
        }
      })
    }
  
    // ===========================================================================
    // End Core functions.
    // ===========================================================================
  
    // ===========================================================================
    // Helper functions.
    // ===========================================================================
  
    var _verifyProtocol = function(url) {
      if (url.substring(0, 2) == "//") return 1;
      return (url.substring(0, 5) != "https" && location.protocol == "https:") ? 0 : 1;
    }
  
    var _appendQueryString = function(url, key, val) {
      var delimeter = (url.indexOf('?') > -1) ? "&" : "?";
      url = url + delimeter + encodeURIComponent(key) + "=" + encodeURIComponent(val);
      return url;
    }
  
    var _cacheBuster = function(url) {
      url = _appendQueryString(url, "cb", Date.now())
      return url;
    }
  
    // ===========================================================================
    // End helper functions.
    // ===========================================================================
  
    /**
     * Initialization function fired as soon as library loads.
     *
     * @private
     * @returns {void}
     */
    var _init = function() {
      ba._log('pixelTag plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
      // ba.ready();
      // _firePixelTag(digitalData.page.attributes.pixelTag, {
      //   "cb": true
      // });
    }
  
    /**
     * Initialize our plugin on library load.
     */
    _init();
  
    /**
     * Functions to return publicly.
     */
    return {
      'firePixelTag': _firePixelTag
    };
  
  });
};

bactm.on('plugins:OneTrust:C0002:PixelTag', _initPixelTag);

} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'Dep:Prod:Before-You-Apply:Checking;interest-checking-account':'{"pixelTag": {"startDt": "1-1-2017","endDt": "12-31-2999","url": "//www.googleadservices.com/pagead/conversion/1054100448/?label=3eLTCK39hHEQ4JfR9gM&guid=ON&script=0"}}'},{'Dep:Prod:Before-You-Apply:CDs;featured-bank-cd':'{"pixelTag": {"startDt": "1-1-2017","endDt": "12-31-2999","url": "//www.googleadservices.com/pagead/conversion/1054100448/?label=sg41CIrDp1gQ4JfR9gM&guid=ON&script=0"}}'},{'DFS:App:ALP;ALP_NonOLB:50:GetStarted':'{"pixelTag": [{"startDt": "1-1-2017","endDt": "12-31-2999","url": "//bat.bing.com/action/0?ti=5321434&Ver=2"}, {"startDt": "1-1-2017","endDt": "12-31-2999","url": "//www.googleadservices.com/pagead/conversion/1054100448/?value=1.00&currency_code=USD&guid=ON&script=0"}]}'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['pageSettings']=c[e][f];m=true};};if(m)break};if(!m)b['pageSettings']='';   }},
function(a,b){ try{ if(1){
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _bactm = require('./bactm.pageID');

var _bactm2 = _interopRequireDefault(_bactm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    window.utag_data = window.utag_data || {};
    var currentPageID = new _bactm2.default();
    currentPageID.harvest(true);
    utag.ut.merge(utag.data, b, 1);
})();

},{"./bactm.pageID":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This class comprehensively identifies a page and provides the method to update the data layer with the appropriate pageID value irregardless of whether digital analytics is implemented through the ddo
 * @class
 * @author zkzw2h7 Christopher Capps
 * @version 0.1.2
 * @revised 04-23-2019
 */
var BactmPageID = function () {
    /**
     * @constructor
     * @param {string} identifier unqiue identifier for the page
     */
    function BactmPageID(identifier) {
        _classCallCheck(this, BactmPageID);

        this.pageID = identifier || "";
    }

    /**
     * Getter function to return the current pageID
     * @returns {string} 
     */


    _createClass(BactmPageID, [{
        key: 'get',
        value: function get() {
            return this.pageID;
        }

        /**
         * Setter function to set the current pageID
         * @param {string} identifier
         */

    }, {
        key: 'set',
        value: function set(identifier) {
            this.pageID = identifier;
        }

        /**
         * Function to update a data layer with the pageID
         * @param {object || String} dataLayer the object representing the data layer to update or a string containing the name of the dataLayer
         * @param {string} dataLayerKey the key to update the pageID within the data layer
         */

    }, {
        key: 'setInDataLayer',
        value: function setInDataLayer(dataLayer, dataLayerKey) {
            if (typeof dataLayer === 'string') {
                window[dataLayer][dataLayerKey] = this.pageID;
            } else if ((typeof dataLayer === 'undefined' ? 'undefined' : _typeof(dataLayer)) === 'object') {
                dataLayer[dataLayerKey] = this.pageID;
            }
        }

        /**
         * This function scans several sources of data to determine the pageID
         * @param {boolean} updateDataLayer flag to indicate whether or not to update the data Layer
         * @param {object} config configuration object with the data layer information
         */

    }, {
        key: 'harvest',
        value: function harvest(updateDataLayer, config) {
            var vendorPageIDKey = 'current_page';
            var BACDataLayer = 'digitalData';
            var BACPageLevelKey = 'page';
            var BACPageInfoKey = 'pageInfo';
            var BACPageIDKey = 'pageID';
            var digitalAnalytics = 'cG7';
            var digitalAnalyticsSecondary = 'cM0';

            if (window[BACDataLayer] && window[BACDataLayer][BACPageLevelKey] && window[BACDataLayer][BACPageLevelKey][BACPageInfoKey][0] && window[BACDataLayer][BACPageLevelKey][BACPageInfoKey][0][BACPageIDKey] !== null) {
                this.set(window[BACDataLayer][BACPageLevelKey][BACPageInfoKey][0][BACPageIDKey]);
            } else if (window[digitalAnalytics] && window[digitalAnalytics][digitalAnalyticsSecondary] && window[digitalAnalytics][digitalAnalyticsSecondary][cm_ClientID] !== null) {
                this.set(window[digitalAnalytics][digitalAnalyticsSecondary][cm_ClientID]);
            } else if (document && document.title) {
                this.set(document.title);
            } else {
                this.set(undefined);
            }

            if (updateDataLayer) {
                var dataLayer = config && config.dataLayerName ? config.dataLayerName : b;
                var dataLayerKey = config && config.dataLayerKey ? config.dataLayerKey : vendorPageIDKey;
                this.setInDataLayer(dataLayer, dataLayerKey);
            }
        }
    }]);

    return BactmPageID;
}();

exports.default = BactmPageID;

},{}]},{},[1]);
} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['current_page'];if(typeof d=='undefined')return;c=[{'.*GBAM:Content:careers;joblist_.*':'GBAM:Content:careers;joblist_'},{'.*GBAM:Content:careers;events_.*':'GBAM:Content:careers;events_'},{'.*GBAM:Content:careers;homepage_.*':'GBAM:Content:careers;homepage_'},{'.*GBAM:Content:careers;job_detail_.*':'GBAM:Content:careers;job_detail_'},{'.*GBAM:Content:careers;opportunities_.*':'GBAM:Content:careers;opportunities_'},{'.*GBAM:Content:careers;our-process_.*':'GBAM:Content:careers;our-process_'},{'.*GBAM:Content:careers;people_.*':'GBAM:Content:careers;people_'},{'.*GBAM:Content:careers;search-results_.*':'GBAM:Content:careers;search-results_'},{'.*GBAM:Content:careers;story_.*':'GBAM:Content:careers;story_'},{'.*GBAM:Content:careers;sub_index_.*':'GBAM:Content:careers;sub_index_'},{'.*GBAM:Content:careers;teams_.*':'GBAM:Content:careers;teams_'},{'.*Ent:Content:EducationHub;allspotlight_.*':'Ent:Content:EducationHub;allspotlight_'},{'.*Ent:Content:EducationHub;home_.*':'Ent:Content:EducationHub;home_'},{'.*Ent:Content:EducationHub;item_article_.*':'Ent:Content:EducationHub;item_article_'},{'.*Ent:Content:EducationHub;item_Debt_Tool_.*':'Ent:Content:EducationHub;item_Debt_Tool_'},{'.*Ent:Content:EducationHub;item_infographic_.*':'Ent:Content:EducationHub;item_infographic_'},{'.*Ent:Content:EducationHub;item_listicle_.*':'Ent:Content:EducationHub;item_listicle_'},{'.*Ent:Content:EducationHub;item_tool_.*':'Ent:Content:EducationHub;item_tool_'},{'.*Ent:Content:EducationHub;item_video_.*':'Ent:Content:EducationHub;item_video_'},{'.*Ent:Content:EducationHub;khan_.*':'Ent:Content:EducationHub;khan_'},{'.*Ent:Content:EducationHub;khan_content_.*':'Ent:Content:EducationHub;khan_content_'},{'.*Ent:Content:EducationHub;LP_.*':'Ent:Content:EducationHub;LP_'},{'.*Ent:Content:EducationHub;millenialReport_.*':'Ent:Content:EducationHub;millenialReport_'},{'.*Ent:Content:EducationHub;myPriorities_.*':'Ent:Content:EducationHub;myPriorities_'},{'.*Ent:Content:EducationHub;Partner_.*':'Ent:Content:EducationHub;Partner_'},{'.*Ent:Content:EducationHub;spotlight_.*':'Ent:Content:EducationHub;spotlight_'},{'.*Ent:Content:EducationHub;topic_.*':'Ent:Content:EducationHub;topic_'},{'.*Ent:Content:EducationHub;vice_.*':'Ent:Content:EducationHub;vice_'},{'.*GWM:Mkt:USTRUST;Article_Page_.*':'GWM:Mkt:USTRUST;Article_Page_'},{'.*GWM:Mkt:USTRUST;Solutions_Landing_Page_.*':'GWM:Mkt:USTRUST;Solutions_Landing_Page_'},{'.*GWM:Mkt:USTRUST;Individual_Solutions_Landing_Page_.*':'GWM:Mkt:USTRUST;Individual_Solutions_Landing_Page_'},{'.*GWM:Mkt:USTRUST;Business_Owners_.*':'GWM:Mkt:USTRUST;Business_Owners_'},{'.*GWM:Mkt:USTRUST;Capital_Acumen_Landing_.*':'GWM:Mkt:USTRUST;Capital_Acumen_Landing_'},{'.*GWM:Mkt:USTRUST;Capital_Acumen_Bios_.*':'GWM:Mkt:USTRUST;Capital_Acumen_Bios_'},{'.*GWM:MKT:HBS;Learn-article-.*':'GWM:MKT:HBS;Learn-article-'},{'.*GWM:Mkt:USTRUST;Insights_Landing_Page_.*':'GWM:Mkt:USTRUST;Insights_Landing_Page_'},{'.*GWM:Mkt:USTRUST;Search_Pages_Site_PCA_.*':'GWM:Mkt:USTRUST;Search_Pages_Site_PCA_'},{'.*GWM:Mkt:USTRUST;Error_Pages_.*':'GWM:Mkt:USTRUST;Error_Pages_'},{'.*GWM:Mkt:USTRUST;Homepage_.*':'GWM:Mkt:USTRUST;Homepage_'},{'.*GWM:Mkt:USTRUST;Our_Story_.*':'GWM:Mkt:USTRUST;Our_Story_'},{'.*GWM:Mkt:USTRUST;locator_page_.*':'GWM:Mkt:USTRUST;locator_page_'},{'.*GBAM:Content:bofaml;RM_.*':'GBAM:Content:bofaml;RM_'},{'.*GBAM:Content:bofaml;AboutUs_.*':'GBAM:Content:bofaml;AboutUs_'},{'.*GBAM:Content:bofaml;Article_.*':'GBAM:Content:bofaml;Article_'},{'.*GBAM:Content:bofaml;Article_Trader_Insights_.*':'GBAM:Content:bofaml;Article_Trader_Insights_'},{'.*GBAM:Content:bofaml;Article_Video_.*':'GBAM:Content:bofaml;Article_Video_'},{'.*GBAM:Content:bofaml;Bundle_.*':'GBAM:Content:bofaml;Bundle_'},{'.*GBAM:Content:bofaml;Content_.*':'GBAM:Content:bofaml;Content_'},{'.*GBAM:Content:bofaml;Global_.*':'GBAM:Content:bofaml;Global_'},{'.*GBAM:Content:bofaml;Homepage_.*':'GBAM:Content:bofaml;Homepage_'},{'.*GBAM:Content:bofaml;Podcast_.*':'GBAM:Content:bofaml;Podcast_'},{'.*GBAM:Content:bofaml;Search_.*':'GBAM:Content:bofaml;Search_'},{'.*GBAM:Content:bofaml;Tiled_.*':'GBAM:Content:bofaml;Tiled_'},{'.*GBAM:Content:bofaml;TiledCountry_.*':'GBAM:Content:bofaml;TiledCountry_'},{'.*GWM:Mkt:MLWM-PBIG;Homepage_.*':'GWM:Mkt:MLWM-PBIG;Homepage_'},{'.*GWM:Mkt:MLWM-PBIG;Working-With-Us_.*':'GWM:Mkt:MLWM-PBIG;Working-With-Us_'},{'.*GWM:Mkt:MLWM-PBIG;Capabilities-Main_.*':'GWM:Mkt:MLWM-PBIG;Capabilities-Main_'},{'.*GWM:Mkt:MLWM-PBIG;Capabilities-Individual_.*':'GWM:Mkt:MLWM-PBIG;Capabilities-Individual_'},{'.*GWM:Mkt:MLWM-PBIG;Client-Stories_.*':'GWM:Mkt:MLWM-PBIG;Client-Stories_'},{'.*GWM:Mkt:MLWM-PBIG;Client-Stories-Individual_.*':'GWM:Mkt:MLWM-PBIG;Client-Stories-Individual_'},{'.*GWM:Mkt:MLWM-PBIG;Latest-Thinking_.*':'GWM:Mkt:MLWM-PBIG;Latest-Thinking_'},{'.*GWM:Mkt:MLWM-PBIG;YLP-ATW-Pages_.*':'GWM:Mkt:MLWM-PBIG;YLP-ATW-Pages_'},{'.*GWM:Mkt:MLWM-PBIG;Article_.*':'GWM:Mkt:MLWM-PBIG;Article_'},{'.*GWM:Mkt:MLWM-PBIG;Main-Search-Results_.*':'GWM:Mkt:MLWM-PBIG;Main-Search-Results_'},{'.*GWM:content:mlwm;404_Error_.*':'GWM:content:mlwm;404_Error_'},{'.*GWM:Content:MLWM;About_.*':'GWM:Content:MLWM;About_'},{'.*GWM:Content:MLWM;Age_Wave_.*':'GWM:Content:MLWM;Age_Wave_'},{'.*GWM:Content:MLWM;Age_Wave_Template_.*':'GWM:Content:MLWM;Age_Wave_Template_'},{'.*GWM:Content:MLWM;Article_Template_.*':'GWM:Content:MLWM;Article_Template_'},{'.*GWM:Content:MLWM;Branch_Default_.*':'GWM:Content:MLWM;Branch_Default_'},{'.*GWM:Content:MLWM;Bulletin_Blog_.*':'GWM:Content:MLWM;Bulletin_Blog_'},{'.*GWM:Content:MLWM;Bulletin_Blog_Aggregate_.*':'GWM:Content:MLWM;Bulletin_Blog_Aggregate_'},{'.*GWM:Content:MLWM;Bullish_.*':'GWM:Content:MLWM;Bullish_'},{'.*GWM:Content:MLWM;Bundles_.*':'GWM:Content:MLWM;Bundles_'},{'.*GWM:Content:MLWM;Caregiving_.*':'GWM:Content:MLWM;Caregiving_'},{'.*GWM:Content:MLWM;CIO_Page_.*':'GWM:Content:MLWM;CIO_Page_'},{'.*GWM:Content:MLWM;Contact_Us_.*':'GWM:Content:MLWM;Contact_Us_'},{'.*GWM:Content:MLWM;GE_Tool_.*':'GWM:Content:MLWM;GE_Tool_'},{'.*GWM:Content:MLWM;Home_Page_.*':'GWM:Content:MLWM;Home_Page_'},{'.*GWM:Content:MLWM;IPA_Tool_.*':'GWM:Content:MLWM;IPA_Tool_'},{'.*GWM:Content:MLWM;Legacy_Page_Template_.*':'GWM:Content:MLWM;Legacy_Page_Template_'},{'.*GWM:Content:MLWM;LinkedIn_Connections_.*':'GWM:Content:MLWM;LinkedIn_Connections_'},{'.*GWM:Content:MLWM;Other_.*':'GWM:Content:MLWM;Other_'},{'.*GWM:Content:MLWM;Research_and_Insights_.*':'GWM:Content:MLWM;Research_and_Insights_'},{'.*GWM:Content:MLWM;Perspectives_eNewsletter_.*':'GWM:Content:MLWM;Perspectives_eNewsletter_'},{'.*GWM:Content:MLWM;Premium_Content_Registration_.*':'GWM:Content:MLWM;Premium_Content_Registration_'},{'.*GWM:Content:MLWM;Search_LP_.*':'GWM:Content:MLWM;Search_LP_'},{'.*GWM:Content:MLWM;Solutions_.*':'GWM:Content:MLWM;Solutions_'},{'.*GWM:Content:MLWM;Webcast_.*':'GWM:Content:MLWM;Webcast_'},{'.*GWM:Content:MLWM;Women_Financial_Wellness_.*':'GWM:Content:MLWM;Women_Financial_Wellness_'},{'.*GWM:Content:MLWM;Working_With_Us_.*':'GWM:Content:MLWM;Working_With_Us_'},{'.*GWM:Content:MLWM;Your_Life_Priorities_.*':'GWM:Content:MLWM;Your_Life_Priorities_'},{'.*GWM:Content:MLWM;Unified_.*':'GWM:Content:MLWM;Unified_'},{'.*GWM:Content:MLWM;FA_Finder_.*':'GWM:Content:MLWM;FA_Finder_'},{'.*GWM:Content:MLWM;Individual_Default_.*':'GWM:Content:MLWM;Individual_Default_'},{'.*GWM:Content:MLWM;Institutional_.*':'GWM:Content:MLWM;Institutional_'},{'.*GWM:Content:MLWM;Team_Default_.*':'GWM:Content:MLWM;Team_Default_'},{'.*GWM:Content:MLWM;Team_Custom1_.*':'GWM:Content:MLWM;Team_Custom1_'},{'.*GWM:Content:MLWM;Team_Custom2_.*':'GWM:Content:MLWM;Team_Custom2_'},{'.*GWM:Content:MLWM;PRC_tool_.*':'GWM:Content:MLWM;PRC_tool_'},{'^cards:app:sp;card_sp.*personal$':'cards:app:sp;card_sp_personal'},{'^cards:app:sp;card_sp.*decision$':'cards:app:sp;card_sp_decision'},{'^hl:app:heloc;heloc_.*confirmation$':'hl:app:heloc;heloc:confirmation'},{'.*ENT:MKT:MULTI;FinancialCenters_CGM_Intro_.*':'ENT:MKT:MULTI;FinancialCenters_CGM_Intro_'},{'.*ENT:MKT:MULTI;FinancialCenters_CGM_.*':'ENT:MKT:MULTI;FinancialCenters_CGM_'},{'.*Ent:Mkt:CorpRep;WEP_.*':'Ent:Mkt:CorpRep;WEP_'},{'.*GHR:MKT:CAREERS;Homepage_.*':'GHR:MKT:CAREERS;Homepage_'},{'.*GHR:MKT:CAREERS;Article_.*':'GHR:MKT:CAREERS;Article_'},{'.*GHR:MKT:CAREERS;JobSearch_.*':'GHR:MKT:CAREERS;JobSearch_'},{'.*GHR:MKT:CAREERS;JobDescription_.*':'GHR:MKT:CAREERS;JobDescription_'},{'.*GHR:MKT:CAREERS;JobAlerts_.*':'GHR:MKT:CAREERS;JobAlerts_'},{'.*GHR:MKT:CAREERS;L1_.*':'GHR:MKT:CAREERS;L1_'},{'.*GHR:MKT:CAREERS;L2_.*':'GHR:MKT:CAREERS;L2_'},{'.*GHR:MKT:CAREERS;L3_L4_.*':'GHR:MKT:CAREERS;L3_L4_'},{'.*GWM:Content:MLWM;Merrill_L1_.*':'GWM:Content:MLWM;Merrill_L1_'},{'.*GWM:Content:MLWM;Merrill_L2_Self_Directed_.*':'GWM:Content:MLWM;Merrill_L2_Self_Directed_'},{'.*GWM:Content:MLWM;Merrill_L2_MGI_.*':'GWM:Content:MLWM;Merrill_L2_MGI_'},{'.*GWM:Content:MLWM;Merrill_L2_ML_.*':'GWM:Content:MLWM;Merrill_L2_ML_'},{'.*GWM:Content:MLWM;Merrill_L2_PBIG_.*':'GWM:Content:MLWM;Merrill_L2_PBIG_'},{'.*GWM:Content:MLWM;Wealth_Management_.*':'GWM:Content:MLWM;Wealth_Management_'},{'.*MHE:Mkt:Mortgage;LAH_.*':'MHE:Mkt:Mortgage;LAH_'},{'.*gwm:content:RBPSWPI;article_.*':'gwm:content:RBPSWPI;article_'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){g=new RegExp(f,'i');if(g.test(d)){b['EnrichmentId']=c[e][f];m=true};};if(m)break};if(!m)b['EnrichmentId']='noMatchFound';   }},
function(a,b){ try{ if(1){
/**
 * This script analyzes the pageID in concert with template and regular expression templates to determine the value used to query the Hosted Data Layer API
 *
 * @author zkzw2h7
 * @revised 06-20-2019
 * @version 3.0.0
 */

var env = utag.data["ut.env"] === "prod" ? "prod" : "notprod";

if (b.EnrichmentId === "noMatchFound") {
  b.EnrichmentId = env + "-_-" + b.current_page.replace(/:/g, "-").replace(/;/g, "-");
} else {
  b.EnrichmentId =
    env + "-_-" + b.EnrichmentId.replace(/:/g, "-").replace(/;/g, "-");
}

} } catch(e){ utag.DB(e) }  },
function(a,b){
var dleURI = '//tags.tiqcdn.com/dle/bofa/main/';
var iv;
utag.globals = utag.globals || {};
utag.globals.dle = utag.globals.dle || {
enrichments:{},
data:{},
loaded:false,
timeout:false,
dlobj:{'EnrichmentId' : {sq:0,cb:function(){utag.globals.dle.bld(0);}}},
ids:[],
dst:[''],
bld:function(id){
    utag.globals.dle.dst[id] = 'l';
    if (utag.globals.dle.dst.join('').indexOf('w') == -1){
        utag.globals.dle.asm();
    }
},
asm:function(){
    if (! utag.globals.dle.loaded) {      utag.globals.dle.loaded = true;
      for (iv=0; iv < utag.globals.dle.ids.length; iv++){
          if (utag.globals.dle.dst[iv] != 'w' && typeof utag.globals.dle.enrichments[utag.globals.dle.ids[iv]] !== 'undefined'){
              utag.ut.merge(utag.globals.dle.data,utag.globals.dle.enrichments[utag.globals.dle.ids[iv]],1);
          }
      }
      utag.view(utag.globals.dle.data);
    }
}
};
utag.ut.merge(utag.globals.dle.data,b);
if (!utag.globals.dle.loaded) {
    for (iv in utag.loader.GV(utag.globals.dle.dlobj)) {
        if (typeof b[iv] != 'undefined' && b[iv] != ''){
            if (!utag.globals.dle.timeout){
              setTimeout(utag.globals.dle.asm,30000);
              utag.globals.dle.timeout = true;
            }
            utag.cfg.noview = true;
            b[iv] = b[iv].toString().toLowerCase();
            utag.globals.dle.dst[utag.globals.dle.dlobj[iv].sq] = 'w';
            utag.globals.dle.ids.push(b[iv]);
            utag.ut.loader({
                src: dleURI + b[iv] + '.js',
                cb: utag.globals.dle.dlobj[iv].cb,
                error: utag.globals.dle.asm
            });
        }
    }
    return false;
}
}
,
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'.*bankofamerica.com/preferred-rewards.*':'true'},{'.*bankofamerica.com/customer-myrewards/myrewards.*':'true'},{'.*bankofamerica.com/credit-cards/point-rewards-credit-cards.*':'true'},{'.*bankofamerica.com/customer/adminenrollments.*':'true'},{'.*bankofamerica.com/preferred-rewards/business-advantage.*':'true'},{'.*bankofamerica.com/customer-busrewards/summary.*':'true'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){g=new RegExp(f,'i');if(g.test(d)){b['load_pr_medallia']=c[e][f];m=true};};if(m)break};if(!m)b['load_pr_medallia']='false';   }},
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'.*HOMEPAGE:CONTENT:SMBUS;SMBUS_HOMEPAGE.*':'true'},{'.*HOMEPAGE:CONTENT:SMBUS;SMBUS_HOMEPAGE_SIGNOFF.*':'true'},{'.*SMBUS:MKT:MULTI;MOBI_MPP.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;CHECKING-ACCOUNTS.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS-SERVICES-HUB.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:50:GETSTARTED.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;BUSINESS-FUNDAMENTALS-APPLICATION.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING;BUSINESS-FINANCING.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:100:BUSINESSINFO.*':'true'},{'.*SMBUS:CONTENT:BAMS;OVERVIEW.*':'true'},{'.*SMBUS:APP:CARD;SBCC_NONOLB:100:BUS_PERSONAL_INFO.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:200:PERSONALINFO.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:250:SIGNERINFO.*':'true'},{'.*SMBUS:MKT:MULTI;CASHFLOWMONITOR.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:300:ACCOUNTSETUP.*':'true'},{'.*SMBUS:TOOL:BUSINESSADVANTAGE360;DASHBOARD_OVERVIEW.*':'true'},{'.*GENBANKING:CONTENT:FAQ;SMBUSLOANSLINESLEASING.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:400:DISCLOSURES_ECOMM.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:415:DISCLOSURES_TAX_CERTIFICATION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:430:DISCLOSURES_LEGAL.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:460:DISCLOSURES_BENEFICIAL_OWNER.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING;SBA-FINANCING.*':'true'},{'.*SMBUS:CONTENT:COMMUNITY;OVERVIEW.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS_DETAILS.*':'true'},{'.*SMBUS:CONTENT:OLBS;CASH_MANAGEMENT_TAX_SERVICES.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:500:CONFIRMATION_PENDED.*':'true'},{'.*SMBUS:MKT:CHECKING;SB500OFFER.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS_ACTIVITIES.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC_OLB:100:BUS_PERSONAL_INFO.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS_OWNERSHIP.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS_RELATIONSHIPS.*':'true'},{'.*SMBUS:PROD:CREDIT_CARDS;OVERVIEW_BROWSE_POPULAR.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;BUSINESS-ADVANTAGE-APPLICATION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:250:AUTHSIGNERS.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;BUSINESS-FUNDAMENTALS.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:100:PRODUCT_SELECTION.*':'true'},{'.*SMBUS:APP:CARD;SBCC_OLB:100:BUS_PERSONAL_INFO.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:200:APPLICATION_DISCLOSURE.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:230:APPLICATION_BUSINESS.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:400:DISCLOSURES_LEGAL.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:260:APPLICATION_BORROWER.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:300:REVIEW_SUBMIT.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:445:DISCLOSURES_BENEFICIAL_OWNER.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:400:DECISION_CONFIRMATION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:300:FUNDING.*':'true'},{'.*SMBUS:CONTENT:CREDIT-CARDS;PRODUCT-SELECTION.*':'true'},{'.*SMBUS:CONTENT:OLBS:ONLINE_BANKING;QUICKBOOKS-HOW-TO-DOWNLOAD.*':'true'},{'.*SMBUS:PROD:DEP:SAVINGS;SAVINGS-ACCOUNTS.*':'true'},{'.*SMBUS:CONTENT:DEP:FEES-AT-A-GLANCE;SB-RESOURCES-FEES-AT-A-GLANCE.*':'true'},{'.*GENBANKING:CONTENT:FAQ;SMBUSDEBITATMCARDS.*':'true'},{'.*SMBUS:MKT:OLBS;OLBS_HOMEPAGE_RWD.*':'true'},{'.*SMBUS:MKT:MULTI;SB_MPP_CAROUSEL_INDEX3_RWD.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;BUSINESS-ADVANTAGE.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:EQUIPMENT_FINANCING;COMMERCIAL-VEHICLE-LOANS.*':'true'},{'.*SMBUS:APP:SBVL;SBVL_NONOLB:50:GETTING_STARTED.*':'true'},{'.*SMBUS:CONTENT:DEP:FAQ;FAQS.*':'true'},{'.*SMBUS:CONTENT:DEP:RESOURCES;LIMITED-LIABILITY-COMPANY.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:500:CONFIRMATION_COMPLETE.*':'true'},{'.*SMBUS:APP:CARD;SBCC_NONOLB:400:VERIFY.*':'true'},{'.*SMBUS:APP:CARD;SBCC_NONOLB:450:ATTESTATION.*':'true'},{'.*SMBUS:APP:CARD;SBCC_NONOLB:500:DECISION.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING;COMMERCIAL_REAL_ESTATE_LOANS.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:445:DISCLOSURES_CREDIT_CARD.*':'true'},{'.*SMBUS:CONTENT:OLBS;FAQ_ACCOUNT_ACCESS.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:475:OUT_OF_WALLET.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:500:CONFIRMATION_HARDDECLINED.*':'true'},{'.*SMBUS:MKT:MULTI;STRATEGICALLIANCECONFIRMATION.*':'true'},{'.*SMBUS:CONTENT:OLBS;PAYROLL_INTUIT_OVERVIEW.*':'true'},{'.*SMBUS:CONTENT:CREDIT-CARDS;SBFS-AUTHENTICATION.*':'true'},{'.*SMBUS:MKT:OLBS;FLEXIBLEBANKING_DEFAULT.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:500:APPROVED.*':'true'},{'.*SMBUS:CONTENT:OLBS;PAYROLL.*':'true'},{'.*SMBUS:PROD:CREDIT_CARDS;OVERVIEW_VIEW-ALL-CARDS.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;SUB-USER-MANAGEMENT-HUB.*':'true'},{'.*SMBUS:PROD:CARD_DETAILS;TERMS-AND-CONDITIONS.*':'true'},{'.*SMBUS:TOOL:BUSINESSADVANTAGE360;ONBOARDING_MODAL.*':'true'},{'.*SMBUS:CONTENT:CREDIT_CARDS;BUSINESS-CREDIT-CARD-FAQS.*':'true'},{'.*SMBUS:APP:CARD;SBCC_OLB:400:VERIFY.*':'true'},{'.*SMBUS:PROD:SBSCORE;NO-MATCH.*':'true'},{'.*SMBUS:APP:CARD;SBCC_OLB:450:ATTESTATION.*':'true'},{'.*SMBUS:APP:CARD;SBCC_OLB:500:DECISION.*':'true'},{'.*SMBUS:PROD:CARD_DETAILS;CASH-REWARDS-BUSINESS-CREDIT-CARD.*':'true'},{'.*SMBUS:APP:CARD;SBCC_NONOLB:100:BUS_PERSONAL_INFO_ERROR.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_NEW_CUSTOMER_APPROVAL.*':'true'},{'.*SMBUS:PROD:VIEW_CARDS;COMPARE-CREDIT-CARDS.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_CREATE_ID_DISCLOSURE.*':'true'},{'.*SMBUS:MKT:CARD;SBMULTICARD_RWD2.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_CREATE_ID.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_CREATE_ID_SERVICE_AGREEMENT.*':'true'},{'.*SMBUS:CONTENT:OLBS;CASH_MANAGEMENT.*':'true'},{'.*SMBUS:APP:CARD;SAVEAPP_SIGNIN.*':'true'},{'.*SMBUS:APP:CARD;SBFC_NONOLB:450:DECISION_CONFIRMATION_COMPLETE.*':'true'},{'.*SMBUS:MKT:OLBS;OLBS_YOUR_ACCOUNT_RWD.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:WORKING_CAPITAL;UNSECURED-BUSINESS-LINE-OF-CREDIT.*':'true'},{'.*SMBUS:APP:CARD;SMBUS:CARD:850:TIMEOUT.*':'true'},{'.*SMBUS:CONTENT:OLBS;QUICKBOOKS_FAQS.*':'true'},{'.*SMBUS:MKT:OLBS;OLBS_REMOTE_DEPOSIT_RWD.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:LEARNING;SBA-FINANCING.*':'true'},{'.*SMBUS:MKT:MULTI;PRCALCULATORLP.*':'true'},{'.*SMBUS:MKT:OLBS;OLBS_PAYROLL_RWD.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:WORKING_CAPITAL;BUSINESS-LINE-OF-CREDIT.*':'true'},{'.*SMBUS:PROD:BAMS;PRODUCT_CLOVER_FLEX.*':'true'},{'.*SMBUS:CONTENT:OLBS;QUICKBOOKS_HOW_TO_DOWNLOAD.*':'true'},{'.*SMBUS:APP:CARD;SBCC_OLB:100:BUS_PERSONAL_INFO_ERROR.*':'true'},{'.*SMBUS:CONTENT:COMMUNITY;POST-FUNDING-OPTIONS-FOR-MINORITY-SMALL-BUSINESSES.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;BUSINESS-SERVICES-LEARN-MORE.*':'true'},{'.*SMBUS:APP:CARD;SBCC:50:SIGNIN.*':'true'},{'.*SMBUS:CONTENT:OLBS;FAQ_SELF_SERVICE_PAYROLL.*':'true'},{'.*SMBUS:CONTENT:BAMS;ECOMMERCE_PAYMENT_GATEWAYS.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:LEARNING;5-CS-OF-CREDIT.*':'true'},{'.*SMBUS:CONTENT:DEP:RESOURCES;SOLE-PROPRIETOR.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:501:SAVE_APPLICATION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:460:MRA_CONSENT.*':'true'},{'.*SMBUS:APP:CARD;SMBUS:CARD:800:TIMEOUT_MODAL.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_SIGN_IN.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:WORKING_CAPITAL;BUSINESS-LOANS.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING;UNDERSTANDING-BUSINESS-LINES-OF-CREDIT.*':'true'},{'.*SMBUS:PROD:VIEW_CARDS;BUSINESS-CASH-BACK-CREDIT-CARDS.*':'true'},{'.*SMBUS:PROD:DEP:SAVINGS;BUSINESS-ADVANTAGE-SAVINGS.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:430:DISCLOSURES_CREDIT_CARD.*':'true'},{'.*SMBUS:PROD:CARD_DETAILS;TRAVEL-REWARDS-BUSINESS-CREDIT-CARD.*':'true'},{'.*SMBUS:PROD:BAMS;PRODUCT_CLOVER_GO.*':'true'},{'.*SMBUS:CONTENT:OLBS;ACCOUNT-MANAGEMENT.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:WORKING_CAPITAL;UNSECURED-BUSINESS-LOANS.*':'true'},{'.*SMBUS:PROD:CARD_DETAILS;PLATINUM-PLUS-BUSINESS-CREDIT-CARD.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;ACCOUNT-MGMT-ENROLL.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC_OLB:400:VERIFY.*':'true'},{'.*SMBUS:APP:CARD;SAVEAPP_REVIEW.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:502:SAVE_CONFIRMATION.*':'true'},{'.*SMBUS:MKT:MULTI;STRATEGICALLIANCEC.*':'true'},{'.*SMBUS:PROD:DEP:SAVINGS;BUSINESS-INVESTMENT-ACCOUNT.*':'true'},{'.*SMBUS:PROD:BAMS;PRODUCT_CLOVER_STATION.*':'true'},{'.*SMBUS:PROD:VIEW_CARDS;POPULAR-CREDIT-CARDS.*':'true'},{'.*GENBANKING:CONTENT:FAQ;SMBUSCHECKINGSAVINGSCDS.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC_OLB:500:DECISION.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:LEARNING:INTRO-TO-BUYING-COMMERCIAL-PROPERTY.*':'true'},{'.*SMBUS:CONTENT:DEP:RESOURCES;CORPORATION.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING;LEARN-WHAT-IS-WORKING-CAPITAL.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;UNABLE_TO_COMPLETE_REVIEW.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_OLB:500:APPROVED.*':'true'},{'.*SMBUS:CONTENT:OLBS;PAYROLL_ADP_OVERVIEW.*':'true'},{'.*SMBUS:PROD:BAMS;PRODUCT_CLOVER_MINI.*':'true'},{'.*SMBUS:TOOL:BUSINESSADVANTAGE360;SELECT_ACCOUNTS_MODAL.*':'true'},{'.*SMBUS:CONTENT:BAMS;PAYMENTS_LEARNING.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:475:OOW.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:100:BUSINESSINFO.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB:500:CONFIRMATION_INCOMPLETE.*':'true'},{'.*SMBUS:APP:SBVL;SBVL_NONOLB:100:BUSINESS_CONTACT_INFORMATION.*':'true'},{'.*SMBUS:CONTENT:DEP:OVERDRAFT-PROTECTION;SB-RESOURCES-OVERDRAFT-PROTECTION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:200:PERSONALINFO.*':'true'},{'.*SMBUS:CONTENT:COMMUNITY;POST-WANT-TO-START-A-BUSINESS-START-WITH-THESE-3-STEPS.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:FAQ;FAQS-APPLYING-FOR-FINANCING.*':'true'},{'.*SMBUS:TOOL:OLBS:SERVICE;NULL_OLB:NULL:NULL.*':'true'},{'.*SMBUS:CONTENT:BAMS;FAQ.*':'true'},{'.*SMBUS:CONTENT:PRACTICE_LOANS:HEALTH_CARE;OVERVIEW.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC_OLB:100:BUS_PERSONAL_INFO_ERROR.*':'true'},{'.*SMBUS:CONTENT:OLBS;FAQ_TRANSFERS.*':'true'},{'.*SMBUS:APP:DEP;SBD_DAO_EXISTING_CUSTOMER_APPROVAL.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:250:SIGNERINFO.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:300:ACCOUNTSETUP.*':'true'},{'.*SMBUS:CONTENT:SB_FINANCING:LEARNING;UNDERSTANDING-TAX-IMPLICATIONS-OF-LEASING.*':'true'},{'.*SMBUS:PROD:CARD_DETAILS;ALASKA-AIRLINES-BUSINESS-CREDIT-CARD.*':'true'},{'.*SMBUS:PROD:DEP:CHECKING;BUSINESS-INTEREST-CHECKING.*':'true'},{'.*SMBUS:APP:CARD;SB_ULOAN_OLB:900:SMALLCAREEXPIRED.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:400:DISCLOSURES_ECOMM.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:415:DISCLOSURES_TAX_CERTIFICATION.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:50:GETSTARTED.*':'true'},{'.*SMBUS:CONTENT:SB-FINANCING;LEARNING_WHAT_NEED_TO_APPLY.*':'true'},{'.*SMBUS:CONTENT:SBB;OVERVIEW.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC:850:TIMEOUT.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:430:DISCLOSURES_LEGAL.*':'true'},{'.*SMBUS:CONTENT:COMMUNITY;CATEGORY-CREDIT-AND-FUNDING.*':'true'},{'.*SMBUS:CONTENT:PRACTICE_LOANS:HEALTH_CARE;DENTIST-LOANS.*':'true'},{'.*HOMEPAGE:CONTENT:SMBUS;SMBUS_HOMEPAGE_ES.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:460:DISCLOSURES_BENEFICIAL_OWNER.*':'true'},{'.*SMBUS:CONTENT:PRACTICE_LOANS:HEALTH_CARE;MEDICAL-LOANS.*':'true'},{'.*SMBUS:PROD:DEP:SAVINGS;CD-ACCOUNTS.*':'true'},{'.*SMBUS:MKT:CARD;CALC_BUSADVANCSH_LP.*':'true'},{'.*SMBUS:APP:SBVL;SBVL_NONOLB:125:BUSINESS_LEGAL_QUESTIONS.*':'true'},{'.*SMBUS:CONTENT:EDUCATION;BUSINESS-CHECKING-AND-CREDIT-CARD-BENEFITS.*':'true'},{'.*SMBUS:CONTENT:DEP:FAQ;FAQS-ATM-DEBIT-CARDS.*':'true'},{'.*SMBUS:CONTENT:OLBS;ADDITIONAL-SERVICES.*':'true'},{'.*SMBUS:APP:SBVL;SBVL_OLB:100:BUSINESS_CONTACT_INFORMATION.*':'true'},{'.*SMBUS:CONTENT:OLBS;QUICKBOOKS.*':'true'},{'.*SMBUS:MKT:CHECKING;CLARITY_COMMITMENT_LP.*':'true'},{'.*SMBUS:PROD:VIEW_CARDS;BUSINESS-TRAVEL-CREDIT-CARDS.*':'true'},{'.*SMBUS:CONTENT:EDUCATION;HOW-TO-START-A-BUSINESS.*':'true'},{'.*SMBUS:APP:CARD;SBCC_EC:800:TIMEOUT_MODAL.*':'true'},{'.*SMBUS:APP:DEP;SB_DEP_NONOLB_SNR:500:CONFIRMATION_PENDED.*':'true'},{'.*SMBUS:APP:SBVL;SBVL_OLB:300:PERSONAL_INFORMATION.*':'true'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){g=new RegExp(f,'i');if(g.test(d)){b['load_sb_medallia']=c[e][f];m=true};};if(m)break};if(!m)b['load_sb_medallia']='false';   }},
function(a,b){ try{ if(1){try{b['js_page.CurrentPageID']=bactm.getCurrentPageID();}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
try{
    /*Set the debug flag if that is in the query string*/
    if(utag.data['qp.utagdb']){
        if(utag.data['qp.utagdb'].match(/1|true/i)){
            document.cookie='utagdb=true';
            utag.data['cp.utagdb']='true';
            utag.cfg.utagdb=true;
        }else{
            document.cookie='utagdb=false';
            utag.data['cp.utagdb']='false';
            utag.cfg.utagdb=false;
        }
    }
    /*If environment isn't prod, enable the debug flag unless it was already set to false*/
    /*if(utag.cfg.path.indexOf('/prod/')===-1&&(typeof utag.data['cp.utagdb']==='undefined'||utag.data['cp.utagdb']==='true')){
        document.cookie='utagdb=true';
        utag.cfg.utagdb=true;
    }*/
}catch(e){
    utag.DB('Tealium Debugging Tools Failed: '+e);
    bactm.reportError(e);
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
(function(parent, name, context, definition) {
    // Check if is used inside a "modern" browser, if not, return
    if (!context || !context[parent] || !Array.prototype.filter) {
        return;
    }

    context[parent]['plugins'][name] = definition();
})('bactm', 'clickCapture', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
      , ba                              = window[parent]
      , win                             = window
      , doc                             = document || {}
      , version                         = '1.0.0'
      , ddo                             = win.digitalData
      , clickEventListenerAdded         = false
      , LOG_LEVEL = {
            OFF     : 10
          , FATAL   : 5
          , ERROR   : 4
          , WARN    : 3
          , INFO    : 2
          , DEBUG   : 1
        };

    // We have no DDO, exit immediately.
    if(!ddo) return;

    // ===========================================================================
    // Core functions.
    // ===========================================================================

    /**
     * An event handler which can be attached to the document and processes all
     * rules for the element which was clicked.
     *
     * @private
     * @param {MouseEvent} event - The click event which to get its path.
     * @returns {void}
     */
    var _documentClickEventHandler = function(e) {
      try{
        var info = {
            e       : e
          , path    : _getEventPath(e)
        }

        ba.trigger('documentClicked', info);

        var clickedAnchor = ba.polyfills.array.find(info.path, function(el) { return el.tagName === 'A'; });
        if(clickedAnchor) {
            info.clickedAnchor = clickedAnchor;
            ba.trigger('anchorClicked', info);

            if(clickedAnchor.href.indexOf('cm_sp') > -1) {
                info.sitePromotion = new ba.QueryString(clickedAnchor.href).get('cm_sp');
                ba.trigger('sitePromotionClicked', info);
            }
        }
      } catch (err) {
        bactm.reportError(err);
      }
    }
    
    /**
     * Adds an event listener to the document capture phase with useCapture set to true.
     *
     * @private
     * @returns {void}
     */
    var _addDocumentClickEventListener = function() {
        ba._log('Creating global click event listener.', LOG_LEVEL.DEBUG);

        // Check our flag to ensure the event listener hasn't been previously created.
        if(!clickEventListenerAdded) {
            doc.addEventListener('click', _documentClickEventHandler, true);
            clickEventListenerAdded = true;
        }
    }

    // ===========================================================================
    // Core functions.
    // ===========================================================================    

    // ===========================================================================
    // Helper functions.
    // ===========================================================================
    
    /**
     * Accepts a click event and returns the DOM path of that event.
     *
     * @private
     * @param {MouseEvent} event - The click event which to get its path.
     * @returns {array} path
    */
    var _getEventPath = function(event) {
        var path = [];
        var target = event.target;

        while (target.parentNode) {
            path.push(target);
            target = target.parentNode;
        }

        return path;
    }

    // ===========================================================================
    // End helper functions.
    // ===========================================================================
    
    /**
     * Initialization function fired as soon as library loads.
     * 
     * @private
     * @returns {void}
     */
    var _init = function() {
        ba._log('bactm.plugin.clickCapture v' + version + ' initializing.', LOG_LEVEL.INFO);

        ba.ready(_addDocumentClickEventListener);
    }

    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return {
        version: version
    };

});
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
(function(parent, name, context, definition) {
    // Check if is used inside a "modern" browser, if not, return
    if (!context || !context[parent] || !Array.prototype.filter) {
        return;
    }

    context[parent]['plugins'][name] = definition();
})('bactm', 'productview', typeof window !== 'undefined' ? window : null, function() {

    var parent                          = 'bactm'
      , ba                              = window[parent]
      , win                             = window
      , doc                             = document || {}
      , version                         = '1.1.0'
      , ddo                             = win.digitalData
      , LOG_LEVEL = {
            OFF     : 10
          , FATAL   : 5
          , ERROR   : 4
          , WARN    : 3
          , INFO    : 2
          , DEBUG   : 1
        };

    // We have no DDO, exit immediately.
    if(!ddo) return;

    // ===========================================================================
    // Core functions.
    // ===========================================================================
    
    var _handlePageview = function(details) {
        if(ba.productview) ba.productview();
    }

    // ===========================================================================
    // Core functions.
    // ===========================================================================    

    // ===========================================================================
    // Helper functions.
    // ===========================================================================
    
    

    // ===========================================================================
    // End helper functions.
    // ===========================================================================
    
    /**
     * Initialization function fired as soon as library loads.
     * 
     * @private
     * @returns {void}
     */
    var _init = function() {
        ba._log('bactm.productview plugin v' + version + ' initializing.', LOG_LEVEL.INFO);

        ba.on('afterPageview', _handlePageview);
    }

    /**
     * Initialize our plugin on library load.
     */
    _init();

    /**
     * Functions to return publicly.
     */
    return { };

});
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
(function() {
  "undefined" === typeof window.bactm && (window.bactm = {}, window.bactm.pageview = function(o, n) {
    window.dataCollector = window.dataCollector || [], window.dataCollector.push({
      event: "pageview",
      eventKey: o,
      options: n
    });
  });
})();
if (digitalData && digitalData.page && digitalData.page.pageInfo[0]) {
  if (digitalData.page.pageInfo[0].pageID === "OSP:TOOL:BBA;BBA_Appt_Details") {
    try {
      bactm.pageview(0);
    } catch (err) {
      bactm.reportError(err);
    }
  }
  else if (digitalData.page.pageInfo[0].pageID === "OSP:Tool:BBA;BBA_Select_Zip_Location") {
    try {
      bactm.pageview(0);
    } catch (err) {
      bactm.reportError(err);
    }
  }
  else if (digitalData.page.pageInfo[0].pageID === "OSP:Tool:BBA;BBA_Select_Specialist") {
    try {
      bactm.pageview(0);
    } catch (err) {
      bactm.reportError(err);
    }
  }
}

} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
try{
  utag.ut.merge( utag.data, b ,1 );
} catch(err) {
  bactm.reportError(err);
}
} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['js_page.digitalData.page.pageInfo[0].pageID'];if(typeof d=='undefined')return;c=[{'smbus:Content:practice_loans:health_care;overview':'{"PRS-GG-BCE":{"826":"8552938826"},"PRS-GG-BG":{"818":"8776660818","971":"8553662971"},"PRS-GG-BM":{"14":"8553680014","960":"8775424960"},"PRS-GG-BV":{"272":"8553691272","417":"8774361417","806":"8553693806"},"PRS-GG-PF":{"8":"8559949008","540":"8777461540"},"PRS-GG-PL":{"139":"8776417139","896":"8559949896"},"PRS-GG-PS":{"159":"8775965159","198":"8662792198","216":"8775352216"},"PRS-BG-BCE":{"409":"8774254409","862":"8552937862"},"PRS-BG-BG":{"551":"8777940551","620":"8553661620"},"PRS-BG-BM":{"60":"8553679060","143":"8776828143"},"PRS-BG-BV":{"593":"8773916593"},"PRS-BG-PF":{"467":"8773640467","910":"8559948910"},"PRS-BG-PL":{"760":"8775255760","891":"8559949891"},"PRS-BG-PS":{"139":"8778938139","189":"8662586189","492":"8777327492"}}'},{'smbus:Content:practice_loans:health_care;veterinary-loans':'{"PRS-GG-VCE":{"517":"8664778517","547":"8776247547"},"PRS-GG-VE":{"371":"8664993371","899":"8775255899"},"PRS-GG-VF":{"42":"8776582042","187":"8665397187"},"PRS-GG-VL":{"38":"8778211038","726":"8774158726","904":"8666103904"},"PRS-GG-VLC":{"38":"8778211038","350":"8665964350"},"PRS-GG-VPS":{"167":"8775965167","624":"8882828624","709":"8885404709","978":"8775258978"},"PRS-GG-VPV":{"480":"8778581480","635":"8887028635"},"PRS-GG-VRE":{"374":"8772074374","852":"8886161852"},"PRS-BG-VCE":{"33":"8778551033","449":"8664691449"},"PRS-BG-VE":{"351":"8664962351","823":"8778903823"},"PRS-BG-VF":{"226":"8665384226","572":"8776322572"},"PRS-BG-VL":{"357":"8666049357","930":"8776717930","999":"8774952999"},"PRS-BG-VLC":{"981":"8665900981","999":"8774952999"},"PRS-BG-VPS":{"340":"8773456340","408":"8775946408","598":"8882756598","872":"8885390872"},"PRS-BG-VPV":{"461":"8776310461","577":"8886746577"}}'},{'smbus:Content:practice_loans:health_care;medical-loans':'{"PRS-GG-MCE":{"242":"8558347242","876":"8774508876"},"PRS-GG-ME":{"402":"8558477402","994":"8776671994"},"PRS-GG-MF":{"923":"8778624923","981":"8559267981"},"PRS-GG-ML":{"7":"8775487007","773":"8559741773","960":"8559741960"},"PRS-GG-MLC":{"773":"8559741773","960":"8777795960"},"PRS-GG-MPS":{"650":"8559937650","823":"8775586823","842":"8559938842","850":"8774543850"},"PRS-GG-MPV":{"457":"8559939457","978":"8775255978"},"PRS-GG-MRE":{"782":"8779153782","945":"8559939945"},"PRS-GG-MR":{"37":"8775264037","398":"8559940398","945":"8559939945"},"PRS-GG-MSC":{"761":"8559940761","861":"8777842861"},"PRS-GG-MSE":{"307":"8559941307","935":"8775254935"},"PRS-GG-MSF":{"7":"8559942007","577":"8772053577"},"PRS-GG-MSL":{"261":"8775269261","404":"8559943404","582":"8779157582","886":"8559943886"},"PRS-GG-MSP":{"21":"8775692021","202":"8559945202","218":"8776839218","839":"8559945839"},"PRS-GG-MSR":{"516":"8559946516","702":"8775256702"},"PRS-BG-MCE":{"228":"8774602228","364":"8558329364"},"PRS-BG-ME":{"31":"8775269031","608":"8558463608"},"PRS-BG-MF":{"18":"8559250018","921":"8775259921"},"PRS-BG-ML":{"713":"8559741713","879":"8778996879","920":"8559741920"},"PRS-BG-MLC":{"508":"8776044508","713":"8559741713"},"PRS-BG-MPS":{"103":"8776128103","152":"8775268152","490":"8559937490","595":"8559938595"},"PRS-BG-MPV":{"433":"8559939433","913":"8775256913"},"PRS-BG-MRE":{"329":"8776015329","920":"8559939920"},"PRS-BG-MR":{"132":"8776982132","368":"8559940368","920":"8559939920"},"PRS-BG-MSC":{"47":"8776029047","368":"8559940368","754":"8559940754"},"PRS-BG-MSE":{"277":"8559941277","762":"8774120762"},"PRS-BG-MSF":{"4":"8559942004","590":"8777043590"},"PRS-BG-MSL":{"197":"8559943197","381":"8772099381","540":"8773886540","879":"8559943879"},"PRS-BG-MSP":{"84":"8559945084","382":"8778959382","815":"8775266815","834":"8559945834"},"PRS-BG-MSR":{"425":"8559946425","596":"8778234596"}}'},{'smbus:Content:practice_loans:health_care;dentist-loans':'{"PRS-GG-DCE":{"416":"8778923416","987":"8553705987"},"PRS-GG-DE":{"44":"8775267044","348":"8553718348"},"PRS-GG-DF":{"351":"8554069351","883":"8775269883"},"PRS-GG-DL":{"90":"8554302090","565":"8778647565","619":"8775906619","865":"8554408865"},"PRS-GG-DLC":{"90":"8554302090","565":"8778647565"},"PRS-GG-DPS":{"135":"8778330135","300":"8555806300","732":"8555976732","823":"8778463823"},"PRS-GG-DPV":{"258":"8556317258","916":"8773305916"},"PRS-GG-DRE":{"67":"8773344067","938":"8556480938"},"PRS-GG-DR":{"153":"8778927153","778":"8556763778","938":"8556480938"},"PRS-BG-DCE":{"512":"8776871512","898":"8553704898"},"PRS-BG-DE":{"475":"8775256475","916":"8553717916"},"PRS-BG-DF":{"2":"8554055002","147":"8775266147"},"PRS-BG-DL":{"166":"8776417166","255":"8776350255","665":"8554403665"},"PRS-BG-DLC":{"166":"8776417166","954":"8554299954"},"PRS-BG-DPS":{"404":"8774058404","521":"8555973521","727":"8555804727","970":"8775251970"},"PRS-BG-DPV":{"127":"8556308127","487":"8773329487"},"PRS-BG-DRE":{"404":"8778994404","479":"8556474479"},"PRS-BG-DR":{"128":"8778308128","479":"8556474479","881":"8556762881"}}'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['Marchex_Settings']=c[e][f];m=true};};if(m)break};if(!m)b['Marchex_Settings']='';   }},
function(a,b){ try{ if(1){
/**
 * Deposits Shim extension is a temporary fix for adding Shop 9 and Conversion Event completions in the deposits flow.
 * @author Chris Capps
 * @version 0.1.0
 * @updated 06-13-19
 */
(function(){
    if (!(utag_data || window.cG7 || window.cG7.cM0 || window.cG7.cM0[cm_ClientID] || window.cm)) { return; }
    if (typeof(cmCreateConversionEventTag) !== 'function' || typeof(cmCreateShopAction5Tag) !== 'function' || typeof(cmCreateShopAction9Tag) !== 'function') { return; }
    var pageID = (utag_data.current_page) ? utag_data.current_page : window.cG7.cM0[cm_ClientID];
    var checking = {
        chkProductCategory: window.cm.chkProductCategoryID || null,
        chkProductID: window.cm.chkProductID || null,
        chkProductName: window.cm.chkProductName || null
    };
    var savings = {
        savProductCategory: window.cm.savProductCategoryID || null,
        savProductID: window.cm.savProductID || null,
        savProductName: window.cm.savProductName || null
    };

    try{
      switch (pageID) {
        case 'Dep:App:CDP;CDP_NonOLB:500:Approved':
          if (checkForChecking(checking)) {
            cmCreateShopAction9Tag(checking.chkProductID, checking.chkProductName, cm.cust_id, cm.orderID, checking.chkProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          if (checkForSavings(savings)) {
            cmCreateShopAction9Tag(savings.savProductID, savings.savProductName, cm.cust_id, cm.orderID, savings.savProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          cmCreateConversionEventTag('CDP_NonOLB App Start to Submit', 2, 'Dep:App:CDP', null, null, null, null, null, null);
          break;
        case 'Dep:App:CDP;CDP_NonOLB:501:Pended':
          if (checkForChecking(checking)) {
            cmCreateShopAction9Tag(checking.chkProductID, checking.chkProductName, cm.cust_id, cm.orderID, checking.chkProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          if (checkForSavings(savings)) {
            cmCreateShopAction9Tag(savings.savProductID, savings.savProductName, cm.cust_id, cm.orderID, savings.savProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          cmCreateConversionEventTag('CDP_NonOLB App Start to Submit', 2, 'Dep:App:CDP', null, null, null, null, null, null);
          break;
        case 'Dep:App:CDP;CDP_OLB:500:Approved':
          if (checkForChecking(checking)) {
            cmCreateShopAction9Tag(checking.chkProductID, checking.chkProductName, cm.cust_id, cm.orderID, checking.chkProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          if (checkForSavings(savings)) {
            cmCreateShopAction9Tag(savings.savProductID, savings.savProductName, cm.cust_id, cm.orderID, savings.savProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          cmCreateConversionEventTag('CDP_OLB App Start to Submit', 2, 'Dep:App:CDP', null, null, null, null, null, null);
          break;
        case 'Dep:App:CDP;CDP_OLB:501:Pended':
          if (checkForChecking(checking)) {
            cmCreateShopAction9Tag(checking.chkProductID, checking.chkProductName, cm.cust_id, cm.orderID, checking.chkProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          if (checkForSavings(savings)) {
            cmCreateShopAction9Tag(savings.savProductID, savings.savProductName, cm.cust_id, cm.orderID, savings.savProductCategory, null, null, cm.state, null, true, cm.cm_instantdecision, null, cm.prQty);
          }
          cmCreateConversionEventTag('CDP_OLB App Start to Submit', 2, 'Dep:App:CDP', null, null, null, null, null, null);
          break;
        default:
        // do nothing
      }
    } catch (err) {
      bactm.reportError(err);
    }

    function checkForChecking (checking) {
        if (checking.chkProductCategory && checking.chkProductID && checking.chkProductName) return true;
        else return false;
    }

    function checkForSavings (savings) {
        if (savings.savProductCategory && savings.savProductID && savings.savProductName) return true;
        else return false;
    }
}())
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
/**
 * version 1.5.0
 */

(function(parent, name, context, definition) {
  // Check if is used inside a "modern" browser, if not, return
  if (!context || !context[parent] || !Array.prototype.filter) {
    return;
  }

  context[parent]['plugins'][name] = definition();
})('bactm', 'oneTrust', typeof window !== 'undefined' ? window : null, function() {

  var parent = 'bactm',
    ba = window[parent],
    win = window,
    doc = document || {},
    version = '1.0.1',
    ddo = win.digitalData,
    // need these to ensure any given code block won't fire multiple times erroneously
    LOG_LEVEL = {
      OFF: 10,
      FATAL: 5,
      ERROR: 4,
      WARN: 3,
      INFO: 2,
      DEBUG: 1
    };

  // We have no DDO, exit immediately.
  if (!ddo) return;

  // ===========================================================================
  // Core functions.
  // ===========================================================================


  let GDPRsites = window.GDPRsites || [
    "careers.bankofamerica.com",
    "campus.bankofamerica.com",
    "business.bofa.com",
    "business.bankofamerica.com",
    "interviewscheduler.bankofamerica.com",
    "interviews.bankofamerica.com",
    "about.bankofamerica.com",
    "institute.bankofamerica.com",
    "info.bankofamerica.com"
    ];
  let CAADCAsites = window.CAADCAsites || [
    "www.bankofamerica.com",
    "bettermoneyhabits.bankofamerica.com",
    "promotions.bankofamerica.com",
    "secure.bankofamerica.com",
    "about.bankofamerica.com",
    "careers.bankofamerica.com"
    ];

  const isGDPRSite = GDPRsites.includes(window.location.host);
  const isCAADCASite = CAADCAsites.includes(window.location.host);
  const privacyFlagMinor = parseInt(decodeURIComponent(document.cookie.split('privacyFlag')[1]).split('=')[1]?.[0]);
  const countryCodeList = ['at', 'dk', 'fr', 'it'];
  // flags to prevent double-firing of tagging scripts.
  let firedCCBAOnly = false;
  let firedC0002 = false;
  let firedC0003 = false;
  let firedC0004 = false;

  const group2 = [
    // the order matters, if you don't know what you're doing, don't change the order!
    'plugins:OneTrust:C0002:CustomEvents',
    'plugins:OneTrust:C0002:GA',
    'plugins:OneTrust:C0002:AdobeSensei',
    'plugins:OneTrust:C0002:Coremetrics',
    'plugins:OneTrust:C0002:PixelTag',
    'plugins:OneTrust:C0002:GetCoremetricsID',
    'plugins:OneTrust:C0002:Celebrus',
    'plugins:OneTrust:C0002:CelebrusJS',
    'plugins:OneTrust:C0002:AAM',
    'plugins:OneTrust:C0002:EnterpriseTagging',
  ];

  const group3 = [
    'plugins:OneTrust:C0003:Enabled',
  ];

  const group4 = [
    'plugins:OneTrust:C0004:DynamicDartLoader',
    'plugins:OneTrust:C0004:GoogleRLSA',
    'plugins:OneTrust:C0004:Neustar',
    'plugins:OneTrust:C0004:Bing',
  ];

  // need to destructure group2 because of:
  // 1. adobe alloy always needs to go first
  // 2. google analytics is only allowed in certain countries of the EU
  // 3. customEvents always needs to go last.
  const [ customEventsTrigger, gaTrigger, ...otherGroup2 ] = group2;

  const fireGroups = (groupArr = []) => {
    if (groupArr.length < 1) return
    groupArr.forEach(script => bactm.trigger(script));
  };

  const fireEverything = () => {
    const currentCookies = new bactm.Cookies();
    const otCookie = currentCookies.get('OptanonConsent');
    const geoCookie = otCookie?.split('&').filter(key => key.includes('geolocation'))[0]?.split('geolocation=')[1]?.split(';')[0];
    const location = window.otStubData?.userLocation?.country ?? geoCookie ?? '';
    const groupsToFire = !countryCodeList.includes(location.toLowerCase()) ?
      [...otherGroup2, gaTrigger, ...group3, ...group4, customEventsTrigger]
      : [...otherGroup2, ...group3, ...group4, customEventsTrigger];
    fireGroups(groupsToFire);
  };

  const shouldLoadGroup = (group, groupsEnabled, firedIndicator) => {
    // if hasn't fired already and we have permission, then fire. 
    // alternatively, if hasn't fired already and not a GDPR site, go ahead and fire.
    return (!firedIndicator && groupsEnabled.indexOf(group) > -1) || (!firedIndicator && !isGDPRSite);
  }

  var _startExtensions = function(oneTrustResponse) {
    // after refresh, get correct value for document.referrer and set it so that tagging scripts work correctly.
    const referrerPage = window.localStorage.getItem('referrerPage')
    if (referrerPage) {
        // set the value to document.referrer
        Object.defineProperty(document, "referrer", {
            get: function() {
                return referrerPage;
            }
        });
        // delete the value so it doesn't persist to future pages.
        window.localStorage.removeItem('referrerPage')
    }
    groupsEnabled = oneTrustResponse.detail;
    // Ex: ["C0001", "C0002", "C0004"]
    var canFireAll = (( permissionToFireAll(groupsEnabled) && !firedCCBAOnly));

    // is no caadca group and on a caadca scoped page block tagging
    const CAADCAFlagPresent = groupsEnabled.indexOf('CADCA') > -1;
    if (!CAADCAFlagPresent && isCAADCASite) {
        return;
    }
    if (canFireAll) {
        firedCCBAOnly = true;
        firedC0002 = true;
        firedC0003 = true;
        firedC0004 = true;
        fireEverything();
        return win.removeEventListener('OneTrustGroupsUpdated', _startExtensions);
    }

    if (shouldLoadGroup('C0002', groupsEnabled, firedC0002)) {
        firedC0002 = true;
        if (!countryCodeList.includes(window.otStubData?.userLocation?.country.toLowerCase())) {
            // if you aren't in a banned GA country, fire GA.
            fireGroups([...otherGroup2, gaTrigger, customEventsTrigger]);
        } else {
            // otherwise, fire everything else but GA
            fireGroups([...otherGroup2, customEventsTrigger]);
        }
        ;
    }
    ;
    if (shouldLoadGroup('C0003', groupsEnabled, firedC0003)) {
        firedC0003 = true;
        fireGroups(group3);
    }
    ;
    if (shouldLoadGroup('C0004', groupsEnabled, firedC0004)) {
        firedC0004 = true;
        fireGroups(group4);
    }
    ;
    // if you've fired everything, no need to ever do so again, so set all indicators and remove event listener.
    if (firedCCBAOnly && firedC0002 && firedC0003 && firedC0004) {
        win.removeEventListener('OneTrustGroupsUpdated', _startExtensions);
    }
    ;
    // allow refresh if adobe target is on the page.
    let isTargetActive = false
    let allowOTRefresh = false
    window.document.addEventListener('mboxLoaded', (e)=>{
        isTargetActive = true
        allowOTRefresh = e.detail.allowOTRefresh
    }
    )
    if (window.mbox_refresh)
        window.document.dispatchEvent(mbox_refresh);

    const allowedByUtagSync = (isTargetActive && allowOTRefresh);
    const userProactivelyApprovedCategory4 = (window.OneTrust?.IsAlertBoxClosedAndValid() || oneTrustResponse?.detail?.includes('C0004'));

    // needed to check if GDPR applies, if allowOTRefresh is true there was no cookie on load but now the OneTrust event has fired
    // if IsAlertBoxClosedAndValid() is false but category 4 has been opted in, GDPR does not apply because
    // the user did not interact with the Alert Box meaning they were auto opted in
    if (allowedByUtagSync && userProactivelyApprovedCategory4) {
        // set referrer page to localStorage since window.location.reload deletes the correct value.
        localStorage.setItem('referrerPage', window.document.referrer);
        return window.location.reload();
    }
};

const permissionToFireAll = (permissionsArray) => {

  const categoryIncluded = (whatWeAreLookingFor, whereWeAreLooking) => {
    if (typeof whatWeAreLookingFor === "string") return whereWeAreLooking.includes(whatWeAreLookingFor);
    if (typeof Array.isArray(whatWeAreLookingFor)) {
      const allPermissions = whatWeAreLookingFor.every(criteria => whereWeAreLooking.includes(criteria))
      return allPermissions
    }
  };
  
  if (permissionsArray) {
    const { length }  = permissionsArray
    // ['CADCA']
    // if you have only CADCA, fire everything
    if (length === 1 && categoryIncluded('CADCA', permissionsArray)) return true;
    // if you have only CCBA, fire everything
    if (length === 1 && categoryIncluded('CCBA', permissionsArray)) return true;


    // categoryIncluded('CADCA'), otCookieGroupCategories);
    // ['CADCA', 'CCBA']
    if (length === 2 && categoryIncluded(['CADCA', 'CCBA'], permissionsArray)) return true;
    // ['CADCA', 'CCBA', 'C0002', 'C0004']
    if (categoryIncluded(['C0002', 'C0004'], permissionsArray)) return true;
    return false;
  }
  
  // filter the OptanonConsent cookie and see if it includes CCBA:1 only.
  // if so, you're in the USA and everything is allowed.
  // OptanonConsent cookie example:
  // isGpcEnabled=0&datestamp=Wed+Nov+15+2023+15:14:15+GMT-0500+(Eastern+Standard+Time)&version=202308.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=3ecd3630-61c9-4e1a-8ba1-d8782028c760&
  // interactionCount=1&landingPath=NotLandingPage&groups=CCBA:1&AwaitingReconsent=false
  let otCookieGroupCategories = [];
  const currentCookies = new bactm.Cookies();
  const otCookie = currentCookies.get('OptanonConsent');
  if (otCookie) {
    const otCookieValues = otCookie.split('&')
    const otCookieGroups = otCookieValues.filter(kvp => kvp.includes('groups'));
    if (otCookieGroups.length > 0) {
      // gotta remove the "groups=" from one of the values.
      let sanitizedOtCookieGroups = otCookieGroups[0].replace('groups=', '');
      // chop into categories.
      otCookieGroupCategories = sanitizedOtCookieGroups.split(',')
      otCategoriesLen = otCookieGroupCategories.length;



      // if length === 1, check if CCBA is present, then fire all (non CAADCA, non GDPR)
      // length === 2, check if those groups are CCBA & CADCA:1, and fire all if so (CAADCA pages)
      // else check to see if C0002:1, C0004:1, and fire all if so (GDPR/other) 
      //-- if we have permission for group 2 & 4, that's all we need
      return (otCategoriesLen === 1 && categoryIncluded('CCBA:1', otCookieGroupCategories)) ||
        (otCategoriesLen === 1 && categoryIncluded('CCBA:0', otCookieGroupCategories)) ||
        (otCategoriesLen === 2 && categoryIncluded('CADCA:1', otCookieGroupCategories)) ||
        (categoryIncluded(['C0002:1', 'C0004:1'], otCookieGroupCategories));

    }
  };

  return false;
}








var _setEventListeners = function() {

  // if on a CAADCA site & the privacyFlag cookie is set to indicate minor, just block immediately by returning.
  if (isCAADCASite && privacyFlagMinor === 1) return;
    // groups
    if (permissionToFireAll() || !window.otEnabled) {
        // if permissions already received, or no OneTrust on page, fire everything immediately;
        // this is the fast way.
        fireEverything();
    } else if (window.otEnabled) {
        // if should load oneTrust, but don't have permissions yet, wait for permissions.
        // this is the slow way.
        win.addEventListener('OneTrustGroupsUpdated', _startExtensions);
    }
    ;
}
  // ===========================================================================
  // End Core functions.
  // ===========================================================================

  // ===========================================================================
  // Helper functions.
  // ===========================================================================

      var _toggleInfoDisplay = function() {
        window.OneTrust.ToggleInfoDisplay();
      };
     
  // ===========================================================================
  // End helper functions.
  // ===========================================================================

  /**
   * Initialization function fired as soon as library loads.
   *
   * @private
   * @returns {void}
   */
  var _init = function() {
    ba._log('oneTrust plugin v' + version + ' initializing.', LOG_LEVEL.INFO);
      _setEventListeners();
    }

  /**
   * Initialize our plugin on library load.
   */
  _init();

  /**
   * Functions to return publicly.
   */
  return {
    toggleInfoDisplay: _toggleInfoDisplay
  };

});

} } catch(e){ utag.DB(e) }  }];
  utag.handler.cfg_extend=[{"bwq":0,"alr":0,"end":0,"id":"30","blr":1},{"end":0,"alr":0,"bwq":0,"blr":1,"id":"41"},{"id":"46","blr":1,"bwq":0,"alr":0,"end":0},{"id":"39","blr":1,"bwq":0,"alr":0,"end":0},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"51"},{"blr":1,"id":"88","end":0,"alr":0,"bwq":0},{"blr":1,"id":"237","end":0,"alr":0,"bwq":0},{"id":"90","blr":1,"bwq":0,"alr":0,"end":0},{"end":0,"alr":0,"bwq":0,"blr":1,"id":"191"},{"blr":1,"id":"203","end":0,"alr":0,"bwq":0},{"id":"238","blr":1,"alr":0,"bwq":0,"end":0},{"bwq":0,"alr":0,"end":0,"id":"114","blr":1},{"id":"290","blr":1,"alr":0,"bwq":0,"end":0},{"bwq":0,"alr":0,"end":0,"id":"291","blr":1},{"id":"91","blr":0,"bwq":0,"alr":1,"end":0},{"end":0,"alr":1,"bwq":0,"blr":0,"id":"239"},{"blr":0,"id":"240","end":0,"bwq":0,"alr":1},{"blr":0,"id":"241","end":0,"bwq":0,"alr":1},{"blr":0,"id":"242","end":0,"alr":1,"bwq":0},{"blr":0,"id":"126","end":0,"alr":1,"bwq":0},{"id":"117","blr":0,"alr":1,"bwq":0,"end":0},{"bwq":0,"alr":1,"end":0,"id":"200","blr":0},{"id":"362","blr":0,"bwq":0,"alr":1,"end":0}];
  utag.loader.initcfg = function(){
    utag.loader.cfg={"21":{load:(utag.cond[12] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"27":{load:(utag.cond[16] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"28":{load:(utag.cond[17] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"36":{load:(utag.cond[24] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"42":{load:utag.cond[30],send:1,v:202408240002,wait:1,tid:20010},"46":{load:utag.cond[33],send:1,v:202408240002,wait:1,tid:20010},"48":{load:(utag.cond[97] || utag.cond[98]),send:1,v:202408240002,wait:1,tid:20010},"55":{load:((((utag.cond[72])  &&  (utag.cond[41])) && !(utag.cond[114]))),send:1,v:202408240002,wait:1,tid:20010},"65":{load:(utag.cond[53] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"66":{load:utag.cond[49],send:1,v:202408240002,wait:1,tid:20010},"67":{load:(utag.cond[41] && utag.cond[50]),send:1,v:202408240002,wait:1,tid:20010},"72":{load:utag.cond[41],send:1,v:202408240002,wait:1,tid:20010},"76":{load:(((utag.cond[12] || utag.cond[20])  &&  (utag.cond[41]))),send:1,v:202408240002,wait:1,tid:20010},"85":{load:(utag.cond[84] || utag.cond[91] || utag.cond[40]),send:1,v:202408240002,wait:1,tid:20010},"87":{load:(utag.cond[62] && utag.cond[41]),send:1,v:202408240101,wait:1,tid:20010},"95":{load:utag.cond[58],send:1,v:202408291000,wait:1,tid:20010},"62":{load:(utag.cond[38] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"102":{load:1,send:1,v:202408240002,wait:1,tid:20010},"107":{load:(utag.cond[87] && utag.cond[41]),send:1,v:202408240002,wait:1,tid:20010},"108":{load:utag.cond[26],send:1,v:202408240002,wait:1,tid:20010},"119":{load:utag.cond[102],send:1,v:202403160018,wait:1,tid:20010},"126":{load:utag.cond[112],send:1,v:202408240002,wait:1,tid:20010}};
utag.loader.cfgsort=["21","27","28","36","42","46","48","55","65","66","67","72","76","85","87","95","62","102","107","108","119","126"];
  }
utag.loader.initcfg();
}

  if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};
  utag.loader.PINIT = function(a,b,c){
    utag.DB("Pre-INIT");
    if (utag.cfg.noload) {
      return;
    }

    try {
      // Initialize utag.data
      this.GET();
      // Even if noview flag is set, we still want to load in tags and have them ready to fire
      // blr = "before load rules"
      if(utag.handler.RE('view',utag.data,"blr")){
        utag.handler.LR(utag.data);
      }
      
    }catch(e){utag.DB(e)};
    // process 'blocking' tags (tags that need to run first)
    a=this.cfg;
    c=0;
    for (b in this.GV(a)) {
      // external .js files (currency converter tag) are blocking
      if(a[b].block == 1 || (a[b].load>0 && (typeof a[b].src!='undefined'&&a[b].src!=''))){
        a[b].block = 1;
        c=1;
        this.bq[b]=1;
      }
    }
    if(c==1) {
      for (b in this.GV(a)) {
        if(a[b].block){
          // handle case of bundled and blocking (change 4 to 1)
          // (bundled tags that do not have a .src should really never be set to block... they just run first)
          a[b].id=b; 
          if(a[b].load==4)a[b].load=1; 
 	  a[b].cb=function(){
            var d=this.uid;
            utag.loader.cfg[d].cbf=1;
            utag.loader.LOAD(d)
          };
          this.AS(a[b]);
        }
      }
    }
    if(c==0)this.INIT();
  };
  utag.loader.INIT = function(a, b, c, d, e) {
    utag.DB('utag.loader.INIT');
    if (this.ol == 1) return -1;
    else this.ol = 1;
    // The All Tags scope extensions run after blocking tags complete
    // The noview flag means to skip these Extensions (will run later for manual utag.view call)
    if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr"); 

    utag.rpt.ts['i'] = new Date();
     
    d = this.cfgsort;
    // TODO: Publish engine should sort the bundled tags first..
    for (a=0;a<d.length;a++){
      e = d[a];
      b = this.cfg[e];
      b.id = e;
      if(b.block != 1){
        // do not wait if the utag.cfg.noview flag is set and the tag is bundled
        if (utag.loader.bk[b.id] || ((utag.cfg.readywait||utag.cfg.noview) && b.load==4)){
          this.f[b.id]=0;
          utag.loader.LOAD(b.id)
        }else if (b.wait == 1 && utag.loader.rf == 0) {
	  utag.DB('utag.loader.INIT: waiting ' + b.id);
          this.wq.push(b)
          this.f[b.id]=2;
        }else if (b.load>0){
	  utag.DB('utag.loader.INIT: loading ' + b.id);
	  this.lq.push(b);
          this.AS(b);
        }
      }
    }
          
    if (this.wq.length > 0) utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.DB('READY:utag.loader.wq');
        utag.loader.rf=1;
        utag.loader.WQ();
      }
    });
    else if(this.lq.length>0)utag.loader.rf=1;
    else if(this.lq.length==0)utag.loader.END();

    return 1
  };
  

  if(utag.cfg.readywait || utag.cfg.waittimer){
    utag.loader.EV('', 'ready', function(a) {
      if(utag.loader.rf==0){
        utag.loader.rf=1;
        utag.cfg.readywait=1;
        utag.DB('READY:utag.cfg.readywait');
        setTimeout(function(){utag.loader.PINIT()}, utag.cfg.waittimer || 1);
      }
    })
  }else{
    utag.loader.PINIT()
  }
}


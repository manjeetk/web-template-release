/*! SWE 3.1.7 20190904T1356 */
!function(t){function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n){!function(t){function n(n){function o(n){var e=new RegExp(t.map(n,encodeURIComponent).join("|"),"ig");return function(t){return t.replace(e,decodeURIComponent)}}n=t.extend({unescape:!1},n||{}),e.encoder=function(t){return!0===t?function(t){return t}:"string"==typeof t&&(t=o(t.split("")))||"function"==typeof t?function(n){return t(encodeURIComponent(n))}:encodeURIComponent}(n.unescape)}var e={put:function(t,n){(n||window).location.hash=this.encoder(t)},get:function(n){var e=(n||window).location.hash.replace(/^#/,"");try{return t.browser.mozilla?e:decodeURIComponent(e)}catch(t){return e}},encoder:encodeURIComponent},o={id:"__jQuery_history",init:function(){var n='<iframe id="'+this.id+'" style="display:none" src="javascript:false;" />';return t("body").prepend(n),this},_document:function(){return t("#"+this.id)[0].contentWindow.document},put:function(t){var n=this._document();n.open(),n.close(),e.put(t,n)},get:function(){return e.get(this._document())}},c={};c.base={callback:void 0,type:void 0,check:function(){},load:function(t){},init:function(t,e){n(e),a.callback=t,a._options=e,a._init()},_init:function(){},_options:{}},c.timer={_appState:void 0,_init:function(){var t=e.get();a._appState=t,a.callback(t),setInterval(a.check,100)},check:function(){var t=e.get();t!=a._appState&&(a._appState=t,a.callback(t))},load:function(t){t!=a._appState&&(e.put(t),a._appState=t,a.callback(t))}},c.iframeTimer={_appState:void 0,_init:function(){var t=e.get();a._appState=t,o.init().put(t),a.callback(t),setInterval(a.check,100)},check:function(){var t=o.get(),n=e.get();n!=t&&(n==a._appState?(a._appState=t,e.put(t),a.callback(t)):(a._appState=n,o.put(n),a.callback(n)))},load:function(t){t!=a._appState&&(e.put(t),o.put(t),a._appState=t,a.callback(t))}},c.hashchangeEvent={_init:function(){a.callback(e.get()),t(window).bind("hashchange",a.check)},check:function(){a.callback(e.get())},load:function(t){e.put(t)}};var a=t.extend({},c.base);"onhashchange"in window?a.type="hashchangeEvent":a.type="timer",t.extend(a,c[a.type]),t.history=a}(jQuery)}]);
/*! SWE 3.1.6 2019071T1131 */
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){(function(e){function r(e,n){var r={seen:[],stylize:o};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&t._extend(r,n),_(r.showHidden)&&(r.showHidden=!1),_(r.depth)&&(r.depth=2),_(r.colors)&&(r.colors=!1),_(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=i),s(r,e,r.depth)}function i(e,t){var n=r.styles[t];return n?"["+r.colors[n][0]+"m"+e+"["+r.colors[n][1]+"m":e}function o(e,t){return e}function l(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}function s(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return y(i)||(i=s(e,i,r)),i}var o=a(e,n);if(o)return o;var g=Object.keys(n),d=l(g);if(e.showHidden&&(g=Object.getOwnPropertyNames(n)),j(n)&&(g.indexOf("message")>=0||g.indexOf("description")>=0))return c(n);if(0===g.length){if(x(n)){var v=n.name?": "+n.name:"";return e.stylize("[Function"+v+"]","special")}if(k(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return c(n)}var b="",m=!1,_=["{","}"];if(p(n)&&(m=!0,_=["[","]"]),x(n)){b=" [Function"+(n.name?": "+n.name:"")+"]"}if(k(n)&&(b=" "+RegExp.prototype.toString.call(n)),O(n)&&(b=" "+Date.prototype.toUTCString.call(n)),j(n)&&(b=" "+c(n)),0===g.length&&(!m||0==n.length))return _[0]+b+_[1];if(r<0)return k(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var w;return w=m?u(e,n,r,d,g):g.map(function(t){return f(e,n,r,d,t,m)}),e.seen.pop(),h(w,b,_)}function a(e,t){if(_(t))return e.stylize("undefined","undefined");if(y(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}return b(t)?e.stylize(""+t,"number"):g(t)?e.stylize(""+t,"boolean"):d(t)?e.stylize("null","null"):void 0}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function u(e,t,n,r,i){for(var o=[],l=0,s=t.length;l<s;++l)M(t,String(l))?o.push(f(e,t,n,r,String(l),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(f(e,t,n,r,i,!0))}),o}function f(e,t,n,r,i,o){var l,a,c;if(c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]},c.get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),M(r,i)||(l="["+i+"]"),a||(e.seen.indexOf(c.value)<0?(a=d(n)?s(e,c.value,null):s(e,c.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+a.split("\n").map(function(e){return"   "+e}).join("\n"))):a=e.stylize("[Circular]","special")),_(l)){if(o&&i.match(/^\d+$/))return a;l=JSON.stringify(""+i),l.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=e.stylize(l,"name")):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=e.stylize(l,"string"))}return l+": "+a}function h(e,t,n){var r=0;return e.reduce(function(e,t){return r++,t.indexOf("\n")>=0&&r++,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function p(e){return Array.isArray(e)}function g(e){return"boolean"==typeof e}function d(e){return null===e}function v(e){return null==e}function b(e){return"number"==typeof e}function y(e){return"string"==typeof e}function m(e){return"symbol"==typeof e}function _(e){return void 0===e}function k(e){return w(e)&&"[object RegExp]"===T(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===T(e)}function j(e){return w(e)&&("[object Error]"===T(e)||e instanceof Error)}function x(e){return"function"==typeof e}function S(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function E(e){return e<10?"0"+e.toString(10):e.toString(10)}function $(){var e=new Date,t=[E(e.getHours()),E(e.getMinutes()),E(e.getSeconds())].join(":");return[e.getDate(),H[e.getMonth()],t].join(" ")}function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function z(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}function A(t){function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,l=function(){return i.apply(o,arguments)};t.apply(this,n).then(function(t){e.nextTick(l,null,t)},function(t){e.nextTick(z,t,l)})}if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,N(t)),n}var N=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},P=/%[sdj%]/g;t.format=function(e){if(!y(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(r(arguments[n]));return t.join(" ")}for(var n=1,i=arguments,o=i.length,l=String(e).replace(P,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return e}}),s=i[n];n<o;s=i[++n])d(s)||!w(s)?l+=" "+s:l+=" "+r(s);return l},t.deprecate=function(n,r){function i(){if(!o){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var o=!1;return i};var D,I={};t.debuglog=function(n){if(_(D)&&(D=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!I[n])if(new RegExp("\\b"+n+"\\b","i").test(D)){var r=e.pid;I[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else I[n]=function(){};return I[n]},t.inspect=r,r.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},r.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=g,t.isNull=d,t.isNullOrUndefined=v,t.isNumber=b,t.isString=y,t.isSymbol=m,t.isUndefined=_,t.isRegExp=k,t.isObject=w,t.isDate=O,t.isError=j,t.isFunction=x,t.isPrimitive=S,t.isBuffer=n(3);var H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.log=function(){console.log("%s - %s",$(),t.format.apply(t,arguments))},t.inherits=n(2),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var L="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;t.promisify=function(e){function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(e,r){e?n(e):t(r)});try{e.apply(this,i)}catch(e){n(e)}return r}if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(L&&e[L]){var t=e[L];if("function"!=typeof t)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,L,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),L&&Object.defineProperty(t,L,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,N(e))},t.promisify.custom=L,t.callbackify=A}).call(t,n(4))},function(e,t,n){!function(e){function t(){return"Markdown.mk_block( "+uneval(this.toString())+", "+uneval(this.trailing)+", "+uneval(this.lineNumber)+" )"}function r(){var e=n(0);return"Markdown.mk_block( "+e.inspect(this.toString())+", "+e.inspect(this.trailing)+", "+e.inspect(this.lineNumber)+" )"}function i(e){for(var t=0,n=-1;-1!==(n=e.indexOf("\n",n+1));)t++;return t}function o(e,t){function n(e){this.len_after=e,this.name="close_"+t}var r=e+"_state",i="strong"==e?"em_state":"strong_state";return function(o,l){if(this[r][0]==t)return this[r].shift(),[o.length,new n(o.length-t.length)];var s=this[i].slice(),a=this[r].slice();this[r].unshift(t);var c=this.processInline(o.substr(t.length)),u=c[c.length-1];return this[r].shift(),u instanceof n?(c.pop(),[o.length-u.len_after,[e].concat(c)]):(this[i]=s,this[r]=a,[t.length,t])}}function l(e){for(var t=e.split(""),n=[""],r=!1;t.length;){var i=t.shift();switch(i){case" ":r?n[n.length-1]+=i:n.push("");break;case"'":case'"':r=!r;break;case"\\":i=t.shift();default:n[n.length-1]+=i}}return n}function s(e){return b(e)&&e.length>1&&"object"==typeof e[1]&&!b(e[1])?e[1]:void 0}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(e){if("string"==typeof e)return c(e);var t=e.shift(),n={},r=[];for(!e.length||"object"!=typeof e[0]||e[0]instanceof Array||(n=e.shift());e.length;)r.push(u(e.shift()));var i="";for(var o in n)i+=" "+o+'="'+c(n[o])+'"';return"img"==t||"br"==t||"hr"==t?"<"+t+i+"/>":"<"+t+i+">"+r.join("")+"</"+t+">"}function f(e,t,n){var r;n=n||{};var i=e.slice(0);"function"==typeof n.preprocessTreeNode&&(i=n.preprocessTreeNode(i,t));var o=s(i);if(o){i[1]={};for(r in o)i[1][r]=o[r];o=i[1]}if("string"==typeof i)return i;switch(i[0]){case"header":i[0]="h"+i[1].level,delete i[1].level;break;case"bulletlist":i[0]="ul";break;case"numberlist":i[0]="ol";break;case"listitem":i[0]="li";break;case"para":i[0]="p";break;case"markdown":i[0]="html",o&&delete o.references;break;case"code_block":i[0]="pre",r=o?2:1;var l=["code"];l.push.apply(l,i.splice(r,i.length-r)),i[r]=l;break;case"inlinecode":i[0]="code";break;case"img":i[1].src=i[1].href,delete i[1].href;break;case"linebreak":i[0]="br";break;case"link":i[0]="a";break;case"link_ref":if(i[0]="a",!(a=t[o.ref]))return o.original;delete o.ref,o.href=a.href,a.title&&(o.title=a.title),delete o.original;break;case"img_ref":i[0]="img";var a=t[o.ref];if(!a)return o.original;delete o.ref,o.src=a.href,a.title&&(o.title=a.title),delete o.original}if(r=1,o){for(var c in i[1]){r=2;break}1===r&&i.splice(r,1)}for(;r<i.length;++r)i[r]=f(i[r],t,n);return i}function h(e){for(var t=s(e)?2:1;t<e.length;)"string"==typeof e[t]?t+1<e.length&&"string"==typeof e[t+1]?e[t]+=e.splice(t+1,1)[0]:++t:(h(e[t]),++t)}var g=e.Markdown=function(e){switch(typeof e){case"undefined":this.dialect=g.dialects.Gruber;break;case"object":this.dialect=e;break;default:if(!(e in g.dialects))throw new Error("Unknown Markdown dialect '"+String(e)+"'");this.dialect=g.dialects[e]}this.em_state=[],this.strong_state=[],this.debug_indent=""};e.parse=function(e,t){return new g(t).toTree(e)},e.toHTML=function(t,n,r){var i=e.toHTMLTree(t,n,r);return e.renderJsonML(i)},e.toHTMLTree=function(e,t,n){"string"==typeof e&&(e=this.parse(e,t));var r=s(e),i={};r&&r.references&&(i=r.references);var o=f(e,i,n);return h(o),o};var d=g.mk_block=function(e,n,i){1==arguments.length&&(n="\n\n");var o=new String(e);return o.trailing=n,o.inspect=r,o.toSource=t,void 0!=i&&(o.lineNumber=i),o};g.prototype.split_blocks=function(e,t){e=e.replace(/(\r\n|\n|\r)/g,"\n");var n,r=/([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,o=[],l=1;for(null!=(n=/^(\s*\n)/.exec(e))&&(l+=i(n[0]),r.lastIndex=n[0].length);null!==(n=r.exec(e));)"\n#"==n[2]&&(n[2]="\n",r.lastIndex--),o.push(d(n[1],n[2],l)),l+=i(n[0]);return o},g.prototype.processBlock=function(e,t){var n=this.dialect.block,r=n.__order__;if("__call__"in n)return n.__call__.call(this,e,t);for(var i=0;i<r.length;i++){var o=n[r[i]].call(this,e,t);if(o)return(!b(o)||o.length>0&&!b(o[0]))&&this.debug(r[i],"didn't return a proper array"),o}return[]},g.prototype.processInline=function(e){return this.dialect.inline.__call__.call(this,String(e))},g.prototype.toTree=function(e,t){var n=e instanceof Array?e:this.split_blocks(e),r=this.tree;try{for(this.tree=t||this.tree||["markdown"];n.length;){var i=this.processBlock(n.shift(),n);i.length&&this.tree.push.apply(this.tree,i)}return this.tree}finally{t&&(this.tree=r)}},g.prototype.debug=function(){var e=Array.prototype.slice.call(arguments);e.unshift(this.debug_indent),"undefined"!=typeof print&&print.apply(print,e),"undefined"!=typeof console&&void 0!==console.log&&console.log.apply(null,e)},g.prototype.loop_re_over_block=function(e,t,n){for(var r,i=t.valueOf();i.length&&null!=(r=e.exec(i));)i=i.substr(r[0].length),n.call(this,r);return i},g.dialects={},g.dialects.Gruber={block:{atxHeader:function(e,t){var n=e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);if(n){var r=["header",{level:n[1].length}];return Array.prototype.push.apply(r,this.processInline(n[2])),n[0].length<e.length&&t.unshift(d(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},setextHeader:function(e,t){var n=e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);if(n){var r=["header",{level:"="===n[2]?1:2},n[1]];return n[0].length<e.length&&t.unshift(d(e.substr(n[0].length),e.trailing,e.lineNumber+2)),[r]}},code:function(e,t){var n=[],r=/^(?: {0,3}\t| {4})(.*)\n?/;if(e.match(r)){e:for(;;){var i=this.loop_re_over_block(r,e.valueOf(),function(e){n.push(e[1])});if(i.length){t.unshift(d(i,e.trailing));break e}if(!t.length)break e;if(!t[0].match(r))break e;n.push(e.trailing.replace(/[^\n]/g,"").substring(2)),e=t.shift()}return[["code_block",n.join("\n")]]}},horizRule:function(e,t){var n=e.match(/^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/);if(n){var r=[["hr"]];return n[1]&&r.unshift.apply(r,this.processBlock(n[1],[])),n[3]&&t.unshift(d(n[3])),r}},lists:function(){function e(e){return new RegExp("(?:^("+a+"{0,"+e+"} {0,3})("+o+")\\s+)|(^"+a+"{0,"+(e-1)+"}[ ]{0,4})")}function t(e){return e.replace(/ {0,3}\t/g,"    ")}function n(e,t,n,r){if(t)e.push(["para"].concat(n));else{var i=e[e.length-1]instanceof Array&&"para"==e[e.length-1][0]?e[e.length-1]:e;r&&e.length>1&&n.unshift(r);for(var o=0;o<n.length;o++){var l=n[o];"string"==typeof l&&i.length>1&&"string"==typeof i[i.length-1]?i[i.length-1]+=l:i.push(l)}}}function r(e,t){for(var n=new RegExp("^("+a+"{"+e+"}.*?\\n?)*$"),r=new RegExp("^"+a+"{"+e+"}","gm"),i=[];t.length>0&&n.exec(t[0]);){var o=t.shift(),l=o.replace(r,"");i.push(d(l,o.trailing,o.lineNumber))}return i}function i(e,t,n){var r=e.list,i=r[r.length-1];if(!(i[1]instanceof Array&&"para"==i[1][0]))if(t+1==n.length)i.push(["para"].concat(i.splice(1,i.length-1)));else{var o=i.pop();i.push(["para"].concat(i.splice(1,i.length-1)),o)}}var o="[*+-]|\\d+\\.",l=/[*+-]/,s=new RegExp("^( {0,3})("+o+")[ \t]+"),a="(?: {0,3}\\t| {4})";return function(o,a){function c(e){var t=l.exec(e[2])?["bulletlist"]:["numberlist"];return p.push({list:t,indent:e[1]}),t}var u=o.match(s);if(u){for(var f,h,p=[],g=c(u),d=!1,b=[p[0].list];;){for(var y=o.split(/(?=\n)/),m="",_=0;_<y.length;_++){var k="",w=y[_].replace(/^\n/,function(e){return k=e,""}),O=e(p.length);if(void 0!==(u=w.match(O))[1]){m.length&&(n(f,d,this.processInline(m),k),d=!1,m=""),u[1]=t(u[1]);var j=Math.floor(u[1].length/4)+1;if(j>p.length)g=c(u),f.push(g),f=g[1]=["listitem"];else{var x=!1;for(h=0;h<p.length;h++)if(p[h].indent==u[1]){g=p[h].list,p.splice(h+1,p.length-(h+1)),x=!0;break}x||(++j<=p.length?(p.splice(j,p.length-j),g=p[j-1].list):(g=c(u),f.push(g))),f=["listitem"],g.push(f)}k=""}w.length>u[0].length&&(m+=k+w.substr(u[0].length))}m.length&&(n(f,d,this.processInline(m),k),d=!1,m="");var S=r(p.length,a);S.length>0&&(v(p,i,this),f.push.apply(f,this.toTree(S,[])));var T=a[0]&&a[0].valueOf()||"";if(!T.match(s)&&!T.match(/^ /))break;o=a.shift();var E=this.dialect.block.horizRule(o,a);if(E){b.push.apply(b,E);break}v(p,i,this),d=!0}return b}}}(),blockquote:function(e,t){if(e.match(/^>/m)){var n=[];if(">"!=e[0]){for(var r=e.split(/\n/),i=[],o=e.lineNumber;r.length&&">"!=r[0][0];)i.push(r.shift()),o++;var l=d(i.join("\n"),"\n",e.lineNumber);n.push.apply(n,this.processBlock(l,[])),e=d(r.join("\n"),e.trailing,o)}for(;t.length&&">"==t[0][0];){var a=t.shift();e=d(e+e.trailing+a,a.trailing,e.lineNumber)}var c=e.replace(/^> ?/gm,""),u=(this.tree,this.toTree(c,["blockquote"])),f=s(u);return f&&f.references&&(delete f.references,y(f)&&u.splice(1,1)),n.push(u),n}},referenceDefn:function(e,t){var n=/^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;if(e.match(n)){s(this.tree)||this.tree.splice(1,0,{});var r=s(this.tree);void 0===r.references&&(r.references={});var i=this.loop_re_over_block(n,e,function(e){e[2]&&"<"==e[2][0]&&">"==e[2][e[2].length-1]&&(e[2]=e[2].substring(1,e[2].length-1));var t=r.references[e[1].toLowerCase()]={href:e[2]};void 0!==e[4]?t.title=e[4]:void 0!==e[5]&&(t.title=e[5])});return i.length&&t.unshift(d(i,e.trailing)),[]}},para:function(e,t){return[["para"].concat(this.processInline(e))]}}},g.dialects.Gruber.inline={__oneElement__:function(e,t,n){var r;if(t=t||this.dialect.inline.__patterns__,!(r=new RegExp("([\\s\\S]*?)("+(t.source||t)+")").exec(e)))return[e.length,e];if(r[1])return[r[1].length,r[1]];var i;return r[2]in this.dialect.inline&&(i=this.dialect.inline[r[2]].call(this,e.substr(r.index),r,n||[])),i=i||[r[2].length,r[2]]},__call__:function(e,t){function n(e){"string"==typeof e&&"string"==typeof i[i.length-1]?i[i.length-1]+=e:i.push(e)}for(var r,i=[];e.length>0;)r=this.dialect.inline.__oneElement__.call(this,e,t,i),e=e.substr(r.shift()),v(r,n);return i},"]":function(){},"}":function(){},__escape__:/^\\[\\`\*_{}\[\]()#\+.!\-]/,"\\":function(e){return this.dialect.inline.__escape__.exec(e)?[2,e.charAt(1)]:[1,"\\"]},"![":function(e){var t=e.match(/^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/);if(t){t[2]&&"<"==t[2][0]&&">"==t[2][t[2].length-1]&&(t[2]=t[2].substring(1,t[2].length-1)),t[2]=this.dialect.inline.__call__.call(this,t[2],/\\/)[0];var n={alt:t[1],href:t[2]||""};return void 0!==t[4]&&(n.title=t[4]),[t[0].length,["img",n]]}return t=e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/),t?[t[0].length,["img_ref",{alt:t[1],ref:t[2].toLowerCase(),original:t[0]}]]:[2,"!["]},"[":function(e){var t=String(e),n=g.DialectHelpers.inline_until_char.call(this,e.substr(1),"]");if(!n)return[1,"["];var r,i,o=1+n[0],l=n[1],s=(e=e.substr(o)).match(/^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/);if(s){var a=s[1];if(o+=s[0].length,a&&"<"==a[0]&&">"==a[a.length-1]&&(a=a.substring(1,a.length-1)),!s[3])for(var c=1,u=0;u<a.length;u++)switch(a[u]){case"(":c++;break;case")":0==--c&&(o-=a.length-u,a=a.substring(0,u))}return a=this.dialect.inline.__call__.call(this,a,/\\/)[0],i={href:a||""},void 0!==s[3]&&(i.title=s[3]),r=["link",i].concat(l),[o,r]}return s=e.match(/^\s*\[(.*?)\]/),s?(o+=s[0].length,i={ref:(s[1]||String(l)).toLowerCase(),original:t.substr(0,o)},r=["link_ref",i].concat(l),[o,r]):1==l.length&&"string"==typeof l[0]?(i={ref:l[0].toLowerCase(),original:t.substr(0,o)},r=["link_ref",i,l[0]],[o,r]):[1,"["]},"<":function(e){var t;return null!=(t=e.match(/^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/))?t[3]?[t[0].length,["link",{href:"mailto:"+t[3]},t[3]]]:"mailto"==t[2]?[t[0].length,["link",{href:t[1]},t[1].substr("mailto:".length)]]:[t[0].length,["link",{href:t[1]},t[1]]]:[1,"<"]},"`":function(e){var t=e.match(/(`+)(([\s\S]*?)\1)/);return t&&t[2]?[t[1].length+t[2].length,["inlinecode",t[3]]]:[1,"`"]},"  \n":function(e){return[3,["linebreak"]]}},g.dialects.Gruber.inline["**"]=o("strong","**"),g.dialects.Gruber.inline.__=o("strong","__"),g.dialects.Gruber.inline["*"]=o("em","*"),g.dialects.Gruber.inline._=o("em","_"),g.buildBlockOrder=function(e){var t=[];for(var n in e)"__order__"!=n&&"__call__"!=n&&t.push(n);e.__order__=t},g.buildInlinePatterns=function(e){var t=[];for(var n in e)if(!n.match(/^__.*__$/)){var r=n.replace(/([\\.*+?|()\[\]{}])/g,"\\$1").replace(/\n/,"\\n");t.push(1==n.length?r:"(?:"+r+")")}t=t.join("|"),e.__patterns__=t;var i=e.__call__;e.__call__=function(e,n){return void 0!=n?i.call(this,e,n):i.call(this,e,t)}},g.DialectHelpers={},g.DialectHelpers.inline_until_char=function(e,t){for(var n=0,r=[];;){if(e.charAt(n)==t)return n++,[n,r];if(n>=e.length)return null;var i=this.dialect.inline.__oneElement__.call(this,e.substr(n));n+=i[0],r.push.apply(r,i.slice(1))}},g.subclassDialect=function(e){function t(){}function n(){}return t.prototype=e.block,n.prototype=e.inline,{block:new t,inline:new n}},g.buildBlockOrder(g.dialects.Gruber.block),g.buildInlinePatterns(g.dialects.Gruber.inline),g.dialects.Maruku=g.subclassDialect(g.dialects.Gruber),g.dialects.Maruku.processMetaHash=function(e){for(var t=l(e),n={},r=0;r<t.length;++r)if(/^#/.test(t[r]))n.id=t[r].substring(1);else if(/^\./.test(t[r]))n.class?n.class=n.class+t[r].replace(/./," "):n.class=t[r].substring(1);else if(/\=/.test(t[r])){var i=t[r].split(/\=/);n[i[0]]=i[1]}return n},g.dialects.Maruku.block.document_meta=function(e,t){if(!(e.lineNumber>1)&&e.match(/^(?:\w+:.*\n)*\w+:.*$/)){s(this.tree)||this.tree.splice(1,0,{});var n=e.split(/\n/);for(p in n){var r=n[p].match(/(\w+):\s*(.*)$/),i=r[1].toLowerCase(),o=r[2];this.tree[1][i]=o}return[]}},g.dialects.Maruku.block.block_meta=function(e,t){var n=e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);if(n){var r,i=this.dialect.processMetaHash(n[2]);if(""===n[1]){var o=this.tree[this.tree.length-1];if(r=s(o),"string"==typeof o)return;r||(r={},o.splice(1,0,r));for(a in i)r[a]=i[a];return[]}var l=e.replace(/\n.*$/,""),c=this.processBlock(l,[]);(r=s(c[0]))||(r={},c[0].splice(1,0,r));for(a in i)r[a]=i[a];return c}},g.dialects.Maruku.block.definition_list=function(e,t){var n,r,i=/^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,o=["dl"];if(r=e.match(i)){for(var l=[e];t.length&&i.exec(t[0]);)l.push(t.shift());for(var s=0;s<l.length;++s){var a=(r=l[s].match(i))[1].replace(/\n$/,"").split(/\n/),c=r[2].split(/\n:\s+/);for(n=0;n<a.length;++n)o.push(["dt",a[n]]);for(n=0;n<c.length;++n)o.push(["dd"].concat(this.processInline(c[n].replace(/(\n)\s+/,"$1"))))}return[o]}},g.dialects.Maruku.block.table=function(e,t){var n,r,i=function(e,t){(t=t||"\\s").match(/^[\\|\[\]{}?*.+^$]$/)&&(t="\\"+t);for(var n,r=[],i=new RegExp("^((?:\\\\.|[^\\\\"+t+"])*)"+t+"(.*)");n=e.match(i);)r.push(n[1]),e=n[2];return r.push(e),r},o=/^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,l=/^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/;if(r=e.match(o))r[3]=r[3].replace(/^\s*\|/gm,"");else if(!(r=e.match(l)))return;var s=["table",["thead",["tr"]],["tbody"]];r[2]=r[2].replace(/\|\s*$/,"").split("|");var a=[];for(v(r[2],function(e){e.match(/^\s*-+:\s*$/)?a.push({align:"right"}):e.match(/^\s*:-+\s*$/)?a.push({align:"left"}):e.match(/^\s*:-+:\s*$/)?a.push({align:"center"}):a.push({})}),r[1]=i(r[1].replace(/\|\s*$/,""),"|"),n=0;n<r[1].length;n++)s[1][1].push(["th",a[n]||{}].concat(this.processInline(r[1][n].trim())));return v(r[3].replace(/\|\s*$/gm,"").split("\n"),function(e){var t=["tr"];for(e=i(e,"|"),n=0;n<e.length;n++)t.push(["td",a[n]||{}].concat(this.processInline(e[n].trim())));s[2].push(t)},this),[s]},g.dialects.Maruku.inline["{:"]=function(e,t,n){if(!n.length)return[2,"{:"];var r=n[n.length-1];if("string"==typeof r)return[2,"{:"];var i=e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);if(!i)return[2,"{:"];var o=this.dialect.processMetaHash(i[1]),l=s(r);l||(l={},r.splice(1,0,l));for(var a in o)l[a]=o[a];return[i[0].length,""]},g.dialects.Maruku.inline.__escape__=/^\\[\\`\*_{}\[\]()#\+.!\-|:]/,g.buildBlockOrder(g.dialects.Maruku.block),g.buildInlinePatterns(g.dialects.Maruku.inline);var v,b=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};v=Array.prototype.forEach?function(e,t,n){return e.forEach(t,n)}:function(e,t,n){for(var r=0;r<e.length;r++)t.call(n||e,e[r],r,e)};var y=function(e){for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0};e.renderJsonML=function(e,t){(t=t||{}).root=t.root||!1;var n=[];if(t.root)n.push(u(e));else for(e.shift(),!e.length||"object"!=typeof e[0]||e[0]instanceof Array||e.shift();e.length;)n.push(u(e.shift()));return n.join("\n\n")}}(function(){return t}())},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function l(){d&&p&&(d=!1,p.length?g=p.concat(g):v=-1,g.length&&s())}function s(){if(!d){var e=i(l);d=!0;for(var t=g.length;t;){for(p=g,g=[];++v<t;)p&&p[v].run();v=-1,t=g.length}p=null,d=!1,o(e)}}function a(e,t){this.fun=e,this.array=t}function c(){}var u,f,h=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,g=[],d=!1,v=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new a(e,t)),1!==g.length||d||i(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.prependListener=c,h.prependOnceListener=c,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}}]);
/*! SWE 3.1.10 20200406T1138 */
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){/*
 * "Float like a butterfly"
 *              Muhammad Ali (a not-so-lightboxer).
 * 
 * jquery.butterfly is a fairly light-weight and fully accessible lightbox implementation for jQuery.
 * 
 * jquery.butterfly.js
 * @version 0.13
 * Changelog:
 *   *  0.1 Initial implementation.
 *   *  0.2: Support for window resizing added.
 *   *  0.3: Support added for callback functions (open/close/resize pre and post events). Error handling added for when lightbox target resource doesn't exist.
 *   *  0.4: Accessibility features added (controlling focus for user initiated lightboxes, keyboard support) - as per: http://irama.org/web/dhtml/lightbox/#accessibility
 *   *  0.5: Bug fixes for webkit. Blocked IE6 (no LB for them). Basic caption support (thanks to Ray Latchmanan). Gallery support.
 *   *  0.6: ARIA style keyboard support for navigating through galleries. Keyboard access now trapped in lightbox while lightbox is open. Support for preloading next image in galleries.
 *   *  0.7: Captions can be configured to come from link title attribute, link text (including any img alt text within), or not be displayed at all.
 *   *  0.8: Added ability to load pages in an iFrame (kicks in automatically for external-domain URLs).
 *   *  0.9: Support restored for IE6 (all thanks to the perseverance of github.com/bboyle - he has more patience than I). Added support for back button (through jquery.history.js)
 *   *  0.10: Set default close icon; fixing issues reported by jslint; minor jquery optimisations
 *   *  0.11: Fix for jQuery 1.8 compatibility issue
 *   *  0.12: Fix for captions extending outside lightbox (thanks to Roger Kowallis)
 *   *  0.13: Added option to treat links as image links (overriding automatic type detection). Handy for image URLs that don't have an image file extension (like Google Charts API URLs)
 *
 * @author Andrew Ramsden <http://irama.org/>
 * @see http://irama.org/web/dhtml/butterfly/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 * 
 * @requires jQuery (tested with 1.8.3) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 * 
 * @optional (but reccommended) jQuery ResizeEvents plugin <http://irama.org/web/dhtml/resize-events/>
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 *
 */
jQuery.butterfly={},jQuery.butterfly.defaultOptions={contentDefaultWidth:null,contentDefaultHeight:"100%",mediaMaxWidth:"100%",mediaMaxHeight:"100%",treatAsMedia:!1,lightBoxMargin:null,animateResize:!0,animationSpeed:150,useIframe:"autodetect",collapseHeightWhenPossible:!0,reuseFragment:!1,closeButton:!0,closeButtonImage:"https://static.qgov.net.au/assets/v3.1/latest/lib/ext/butterfly/close.png",closeButtonCorner:"tr",clickOverlayCloses:!0,preloadLoadingImage:"",preloadGalleryControlsSprite:"",galleryControlWidth:49,galleryControlHeight:85,galleryMode:"rel",galleryContainers:"",galleryLoops:!1,captionMode:"title",preloadNextGalleryImage:!0,zoomFromClicked:!1,callbackPreOpen:null,callbackPreResize:null,callbackPostResize:null,callbackPostOpen:null,callbackPreClose:null,callbackPostClose:null,treatAsImage:!1},jQuery.butterfly.conf={overlayOpacity:".7",lightboxClass:"lightbox",lightboxLinkSelector:"a.lightbox"},jQuery.butterfly.linkCount=0,DOM_VK_END=35,DOM_VK_HOME=36,DOM_VK_LEFT=37,DOM_VK_UP=38,DOM_VK_RIGHT=39,DOM_VK_DOWN=40,DOM_VK_ESCAPE=27,function(e,t){"use strict";function i(e){return e=e||window.event,e.keyCode?e.keyCode:e.which?e.which:null}var n,a,o,l,r,s,d,c,b,h,p,u,f;e.fn.accessibleText=function(){return this.is("img")?this.attr("alt"):this.is("input")?this.attr("value"):e.map(this.contents(),function(t){if(3===t.nodeType)return t.data;if(1===t.nodeType){var i=e(t);return i.is("img, input")||i.find("img[alt], input[value]").length>0?i.accessibleText():i.text()}}).join("")},e(function(){void 0!==t&&e(this).each(function(){t.bind("x-text-resize x-window-resize",n)}),e.fn.centre=function(){return this.css({position:"fixed",top:(e(window).height()-this.outerHeight())/2+"px",left:(e(window).width()-this.outerWidth())/2+"px"})},e(document.body).append('<div id="jb-overlay"></div><div id="jb-window"><div id="jb-window-inner"><div id="jb-window-content" style="width: auto; height: auto;" tabindex="0"></div></div></div>').bind("keydown",s),e("#jb-overlay").fadeTo(0,e.butterfly.conf.overlayOpacity,function(){e(this).hide()}),e("#jb-window").hide().click(d),e("#jb-window-inner").centre(),e("#jb-window-content").css({overflow:"hidden"}).hide(),e.history.init(function(t){""===t?a.apply():/^!/.test(t)&&(t=t.substring(1),e("#"+t).trigger("click",[!1]))},{unescape:",/"})}),e.fn.butterfly=function(t){return t=void 0!==t?t:{},t.closeButtonImage&&e('<img src="'+t.closeButtonImage+'" alt="" />'),t.preloadLoadingImage&&e('<img src="'+t.preloadLoadingImage+'" alt="" />'),t.preloadGalleryControlsSprite&&e('<img src="'+t.preloadGalleryControlsSprite+'" alt="" />'),this.each(function(){o.apply(this,[t])})},o=function(t){var i=void 0!==Number.prototype.pxToEm;t=void 0===t?e.butterfly.defaultOptions:e.extend({},e.butterfly.defaultOptions,t),null===t.lightBoxMargin&&(t.lightBoxMargin=i?"2em":"20px"),null===t.contentDefaultWidth&&(t.contentDefaultWidth=i?"50em":"700px"),void 0!==e(this).attr("id")&&""!==e(this).attr("id")||e(this).attr("id",e.butterfly.conf.lightboxClass+"-uid-"+e.butterfly.linkCount),t.linkID=e(this).attr("id"),e.butterfly.linkCount++,e(this).data("options",t),e(this).addClass(e.butterfly.conf.lightboxClass),e(this).click(l)},l=function(t,i){var n,o,l,s,d,b,p,u,f;if(void 0!==t&&t.preventDefault(),i=void 0===i||i)return void e.history.load("!"+e(this).attr("id"));switch(e("#jb-window-inner").css("overflow","hidden"),e("#jb-overlay").is(":visible")?(n=e("#jb-overlay").data("options"),"fragment"===n.linkType&&n.reuseFragment&&e(".jb-placeholder").remove(),o=n.originalTrigger):o=this,s=window.location.href.replace(/#.*$/,""),l=e(this).attr("href"),0===l.indexOf(s)&&(l=l.substring(s.length)),d=e(this).attr("title"),b=e(this).accessibleText(),n=e(this).data("options"),n.href=l,n.title=d,n.linkText=b,n.trigger=this,n.originalTrigger=o,document.getElementById("jb-window-inner").className=n.className||"",n.treatAsImage||h(l)?n.linkType="image":"#"===l.substring(0,1)?n.linkType="fragment":!0===n.useIframe||!1!==n.useIframe&&this.hostname!==window.location.hostname?(n.linkType="iframe",n.useIframe=!0,n.contentDefaultWidth="100%",n.contentDefaultHeight="100%"):n.linkType="ajax",null!==n.callbackPreOpen&&"function"==typeof n.callbackPreOpen&&n.callbackPreOpen.apply(this),n.closeButton?0===e("#jb-close-button").length&&(e("#jb-window").prepend('<a href="#" id="jb-close-button"><img src="'+n.closeButtonImage+'" alt="Close lightbox" /></a>'),e("#jb-close-button").click(a)):e("#jb-close-button").remove(),n.clickOverlayCloses?e("#jb-window").addClass("reactive"):e("#jb-window").removeClass("reactive"),p=e(this),""!==n.galleryContainers&&(n.galleryMode="container"),n.gallerySelector="",n.galleryMode){case"all":n.gallerySelector=e.butterfly.conf.lightboxLinkSelector;break;case"container":e.each(n.galleryContainers.split(","),function(){if(u=this+" "+e.butterfly.conf.lightboxLinkSelector,p.is(u))return n.gallerySelector=u,!1})}""===n.gallerySelector&&""!==e(this).attr("rel")&&(n.gallerySelector=e.butterfly.conf.lightboxLinkSelector+'[rel="'+e(this).attr("rel")+'"]'),f=e("#jb-overlay").data("options")||{},e(this).data("options",n),e("#jb-overlay").data("options",n),e("#jb-window").append('<p id="jb-loading">Loading...</p>'),e("#jb-loading").attr("tabindex","0").focus(),e("#jb-overlay").is(":visible")?("fragment"===f.linkType&&f.reuseFragment&&(e(".jb-placeholder").after(e(f.href)),e(".jb-placeholder").remove(),e(f.href).disableFocussableElements()),e("#jb-window-content").hide().empty(),e("#jb-window").addClass("loading"),r.apply(this,[c])):(e(document.body).disableFocussableElements("#jb-window *"),e("#jb-close-button").hide(),e("#jb-gallery-controls").hide(),e("#jb-overlay").fadeIn(n.animationSpeed).centre(),e("#jb-window").addClass("loading").show(),n.zoomFromClicked?e("#jb-window-inner").css({top:e(this).offset().top,left:e(this).offset().left,width:e(this).width(),height:e(this).height()}):e("#jb-window-inner").css({width:"100px",height:"100px"}).centre(),r.apply(this,[c]))},c=function(){var t=e("#jb-overlay").data("options");e("#jb-window").restoreFocussableElements(),e("#jb-window").removeClass("loading"),setTimeout(function(){switch(e("#jb-window").removeClass("type-media type-image type-fragment type-ajax"),t.linkType){case"image":e("#jb-window").addClass("type-image type-media"),e("#jb-window-inner").css("overflow","hidden");break;case"fragment":e("#jb-window").addClass("type-fragment"),e("#jb-window-inner").css("overflow","auto");break;case"iframe":e("#jb-window").addClass("type-iframe"),e("#jb-window-inner").css("overflow","hidden");break;case"ajax":e("#jb-window").addClass("type-ajax"),e("#jb-window-inner").css("overflow","auto")}t.treatAsMedia&&e("#jb-window").addClass("type-media"),n.apply(this,[function(){var i;"iframe"===t.linkType&&e("#jb-window-content").css("visibility","visible"),e("#jb-window-content").fadeIn(t.animationSpeed,function(){e("#jb-window-content").focus(),e("#jb-loading").remove(),null!==t.callbackPostOpen&&"function"==typeof t.callbackPostOpen&&t.callbackPostOpen.apply(this),i=e("#jb-gallery-next"),t.preloadNextGalleryImage&&i.length>0&&i.is(":visible")&&"#"!==i.attr("href")&&h(i.attr("href"))&&e('<img src="'+i.attr("href")+'" alt="" />')})}])},0)},n=function(t){var i,n,a,o,l,r,s,d,c,b,h,f,g,w,y,j,m,v,x,k,C,I=e("#jb-overlay").data("options");void 0!==I&&(i=parseInt(p(I.lightBoxMargin),10),n=e("#jb-window").width()-2*i,a=e("#jb-window").height()-2*i,o=p(I.contentDefaultWidth,n),l=p(I.contentDefaultHeight,a),r=p(I.mediaMaxWidth,n),s=p(I.mediaMaxHeight,a),null!==I.callbackPreResize&&"function"==typeof I.callbackPreResize&&I.callbackPreResize.apply(e("#jb-window"),[n,a,o,l,r,s]),"image"===I.linkType||I.treatAsMedia?(d=e("#jb-window-content").lightBoxContentWidth(),c=e("#jb-window-content").lightBoxContentHeight(),d>r&&(b=d/r,d=r,c/=b),c>s&&(b=c/s,c=s,d/=b),d>n&&(b=d/n,d=n,c*=b),c>a&&(b=c/a,c=a,d*=b)):"iframe"===I.linkType?(d=o,c=l):(d=e("#jb-window-content").lightBoxContentWidth(),d=""===o||"100%"===o||n<o?n:o,I.collapseHeightWhenPossible?(h=e("#jb-window-inner").width(),e("#jb-window-inner").animate({width:d},0),c=e("#jb-window-content").lightBoxContentHeight(!1),e("#jb-window-inner").width(h),a<c&&(c=a)):(c=e("#jb-window-content").lightBoxContentHeight(),c=""===l||"100%"===l||a<l?a:l)),f=u(d,c),g=I.animateResize?I.animationSpeed:0,e("#jb-close-button").hide(),e("#jb-gallery-controls").hide(),"iframe"===I.linkType&&e("#jb-window-inner iframe").css("visibility","hidden"),e("#jb-window-inner").animate({width:d,height:c,left:f[1],top:f[0]},g,0,function(){if(I=e("#jb-overlay").data("options"),d=e("#jb-window-inner").width(),c=e("#jb-window-inner").height(),"iframe"===I.linkType&&(e("#jb-window-inner iframe").width(d).height(c),e("#jb-window-inner iframe").css("visibility","visible")),e("#jb-close-button").length>0){switch(w=parseInt(e("#jb-close-button").width(),10),y=parseInt(e("#jb-close-button").height(),10),I.closeButtonCorner){case"tr":j=f[1]+d-w/2,m=f[0]-y/2;break;case"br":j=f[1]+d-w/2,m=f[0]+c-y/2;break;case"bl":j=f[1]-w/2,m=f[0]+c-y/2;break;default:j=f[1]-w/2,m=f[0]-y/2}e("#jb-close-button").css({position:"absolute","z-index":"999999",left:j,top:m}).show()}e("#jb-gallery-controls").is(".active")&&(v=f[0]+c/2-I.galleryControlHeight/2,x=f[1]-I.galleryControlWidth,e("#jb-gallery-prev").css({top:v,left:x}),k=f[0]+c/2-I.galleryControlHeight/2,C=f[1]+d,e("#jb-gallery-next").css({top:k,left:C}),e("#jb-gallery-controls").show()),null!==I.callbackPostResize&&"function"==typeof I.callbackPostResize&&I.callbackPostResize.apply(e("#jb-window"),[n,a,o,l,r,s]),void 0!==t&&void 0!==t.apply&&t.apply()}))},r=function(t){var i,n,a,o,l,r,s,d,c,h,u,g,w=e("#jb-overlay").data("options"),y=w.href;switch(w.captionMode){case"title":i=w.title?"<p class='jb-caption'><span>"+w.title+"</span></p>":"";break;case"text":i=w.linkText?"<p class='jb-caption'><span>"+w.linkText+"</span></p>":"";break;default:i=""}switch(e("#jb-window").removeClass("error-no-content"),n=e(w.gallerySelector),e("#jb-gallery-controls").removeClass("active"),n.length>1&&n.isInSet("#"+w.linkID)?(0===e("#jb-gallery-controls").length?(e("#jb-window").append('<div id="jb-gallery-controls"></div>'),a=e('<a id="jb-gallery-prev" href="#">Previous</a>').click(b),o=e('<a id="jb-gallery-next" href="#">Next</a>').click(b),e("#jb-gallery-controls").append(a).append(o),a.add(o).css({position:"absolute","z-index":"99999",display:"block",overflow:"hidden"})):(a=e("#jb-gallery-prev"),o=e("#jb-gallery-next"),a.add(o).removeClass("disabled").attr("tabindex","0").attr("title","").show()),e("#jb-gallery-controls").hide(),e("#jb-gallery-controls").addClass("active"),l=n.prevInSet("#"+w.linkID),!1===l&&(w.galleryLoops?l=n.lastInSet():(l=e('<a href="#" id=""></a>'),a.addClass("disabled").attr("tabindex","-1").hide())),a.attr("href",l.attr("href")).data("linkID",l.attr("id")).attr("title",e.trim(l.accessibleText())),r=n.nextInSet("#"+w.linkID),!1===r&&(w.galleryLoops?r=n.firstInSet():(r=e('<a href="#" id=""></a>'),o.addClass("disabled").attr("tabindex","-1").hide())),o.attr("href",r.attr("href")).data("linkID",r.attr("id")).attr("title",e.trim(r.accessibleText()))):e("#jb-gallery-controls").hide(),w.linkType){case"fragment":w.reuseFragment?(e(y).after('<span class="jb-placeholder"></span>'),e("#jb-window-content").empty().append(e(y))):e("#jb-window-content").empty().append(e(y).clone(!0)),f.apply(this,[w.linkType,y]),t.apply(this);break;case"image":e("#jb-window-content").empty().append('<img src="'+y+'" alt="" style="max-width: 100%; max-height: 100%; float: left;" />'+i),e("#jb-window-content img").error(function(){f.apply(this,[w.linkType,y,t])}).data("full-width","").data("full-height","").load(t);break;case"iframe":e("#jb-window-content").show().css("visibility","hidden"),e("#jb-window-content").empty().append('<iframe src="'+y+'" title="'+i+'" width="100%" height="1000" />'),e("#jb-window-content").css("visibility","hidden"),s=parseInt(p(w.lightBoxMargin),10),d=e("#jb-window").width()-2*s,c=e("#jb-window").height()-2*s,h=p(w.contentDefaultWidth,d),u=p(w.contentDefaultHeight,c),e("#jb-window-content > iframe").width(h).height(u).error(function(){f.apply(this,[w.linkType,y,t])}).load(t);break;default:e.ajaxSetup({cache:!0}),g=-1!==y.indexOf("#")?y.split("#").join(" #"):y,e("#jb-window-content").empty().load(g,function(){f.apply(this,[w.linkType,y]),t.apply(this)})}},f=function(t,i,n){var a,o=!1;"image"!==t&&0!==e("#jb-window-content").children().length||(o=!0),o&&(a=e("#jb-overlay").data("options"),a.linkType="fragment",a.treatAsMedia=!1,e("#jb-overlay").data("options",a),e("#jb-window").removeClass("type-image type-media").addClass("type-fragment error-no-content"),e("#jb-window-content").empty().append("<p>There was an error loading lightbox content. <strong>"+e(a.trigger).text()+"</strong> (<samp>"+i+"</samp>) could not be found.</p>")),void 0!==n&&n.apply(this)},a=function(t){var i,n,a;if(t&&t.preventDefault(),!e("#jb-window:hidden").length){i=e("#jb-overlay").data("options"),n=i.href,null!==i.callbackPreClose&&"function"==typeof i.callbackPreClose&&i.callbackPreClose.apply(i.trigger),"fragment"===i.linkType&&i.reuseFragment&&(e(".jb-placeholder").after(e(n)),e(".jb-placeholder").remove()),e(document.body).restoreFocussableElements(),e("#jb-overlay").fadeOut(i.animationSpeed),e("#jb-window").hide(),e("#jb-window-content").hide(),a=e(i.originalTrigger),void 0===a.attr("tabindex")&&a.attr("tabindex",0),a.focus(),e("#jb-loading").remove(),null!==i.callbackPostClose&&"function"==typeof i.callbackPostClose&&i.callbackPostClose.apply(i.trigger);var o=e(window).scrollTop();e.history.load(""),e(window).scrollTop(o),e(a).focus()}};e.fn.lightBoxContentWidth=function(){var t,i=this.closest("#jb-window"),n=e("#jb-window-inner"),a=!!i.hasClass("type-media"),o=(i.hasClass("media-image"),n.width()),l=n.height(),r=n.css("left"),s=n.css("top");return n.css({width:"auto",height:"auto",left:0,top:0}),"none"===this.css("display")?(this.css("display","block"),t=a?this.find("img").outerWidth(!0):this.outerWidth(!0),this.css("display","none")):t=this.outerWidth(!0),n.css({left:r,top:s}),n.animate({width:o,height:l},0),t},e.fn.lightBoxContentHeight=function(t){var i,n=this.closest("#jb-window"),a=n.find("#jb-window-inner"),o=(n.hasClass("type-media"),n.hasClass("media-image"),a.width()),l=a.height(),r=a.css("left"),s=a.css("top");return t=void 0===t||t,e("#jb-window-inner").height("auto"),t&&e("#jb-window-inner").width("auto").css({left:0,top:0}),"none"===this.css("display")?(this.css("display","block"),i=this.outerHeight(!0),this.css("display","none")):i=e(this).outerHeight(!0),e("#jb-window-inner").width(o).height(l).css({left:r,top:s}),i},d=function(t){var i=e("#jb-overlay").data("options");t.target===e("#jb-window").get(0)&&i.clickOverlayCloses&&a.apply()},s=function(t){if(!e("#jb-overlay").is(":visible")||t.ctrlKey||t.altKey||t.shiftKey||t.metaKey)return!0;switch(i(t)){case DOM_VK_UP:case DOM_VK_LEFT:e("#jb-gallery-prev").click();break;case DOM_VK_DOWN:case DOM_VK_RIGHT:e("#jb-gallery-next").click();break;case DOM_VK_HOME:e(e("#jb-overlay").data("options").gallerySelector).firstInSet().click();break;case DOM_VK_END:e(e("#jb-overlay").data("options").gallerySelector).lastInSet().click();break;case DOM_VK_ESCAPE:a.apply();break;default:return!0}t.preventDefault()},b=function(t){var i,n=e(this);if(t.preventDefault(),""!==n.data("linkID"))return e("#jb-gallery-controls").hide(),i=e("#"+n.data("linkID")),i.click()},u=function(t,i){return[(e(window).height()-i)/2,(e(window).width()-t)/2]},e.fn.isInSet=function(t){return-1!==this.index(e(t))},e.fn.nextInSet=function(t){var i=this.index(e(t));return this.length>i+1&&this.eq(i+1)},e.fn.prevInSet=function(t){var i=this.index(e(t));return i>0&&this.eq(i-1)},e.fn.firstInSet=function(){return this.length>0&&this.eq(0)},e.fn.lastInSet=function(){return this.length>0&&this.eq(-1)},h=function(e){if(void 0===e||""===e)return!1;var t=String(e).lastIndexOf(".");return-1!==t&&/^\.(jpg|png|gif|bmp|jpeg)$/i.test(e.substring(t))},e.fn.disableFocussableElements=function(t){t=t||"",this.find("a, input, button, area, frame, iframe, [tabindex]").not(t).not('*[tabindex="-1"]').each(function(){var t=e(this),i=t.attr("tabindex");i=void 0===i||""===i?"":i,t.data("prevTabIndex",i).addClass("jb-unfocussed").attr("tabindex","-1")})},e.fn.restoreFocussableElements=function(){this.find(".jb-unfocussed").each(function(){var t=e(this),i=t.data("prevTabIndex");switch(i){case"":t.removeAttr("tabindex");break;default:t.attr("tabindex",i)}t.removeClass("jb-unfocussed")})},p=function(t,i){return i=void 0!==i?i:e(document.body).width(),t=t.replace("px","").replace(/^\s+|\s+$/g,""),isNaN(t)?"%"===t.substr(t.length-1)?void 0!==i?(t=parseInt(t.substr(0,t.length-1).replace(/^\s+|\s+$/g,""),10))/100*parseInt(i,10):(e.debug("Warning: percentage unit was supplied to parsePixels() but could not be calculated because centDimension was not supplied."),parseInt(t,10)):"em"===t.substr(t.length-2)?void 0!==Number.prototype.pxToEm?(t=parseInt(t.substr(0,t.length-2).replace(/^\s+|\s+$/g,""),10),t=t.pxToEm({reverse:!0}),t.substr(0,t.length-2)):(e.debug("Warning: em unit was supplied to parsePixels() but could not be calulated because pxToEm plugin was not found."),parseInt(t,10)):(e.debug("Warning: unknown unit was supplied. parsePixels() can support px, em or % units only."),parseInt(t,10)):parseInt(t,10)}}(jQuery,ResizeEvents)}]);
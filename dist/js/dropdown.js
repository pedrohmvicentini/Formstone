/*! formstone v0.8.6 [dropdown.js] 2015-09-11 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){H=b.$body}function d(c){c.multiple=this.prop("multiple"),c.disabled=this.is(":disabled"),c.multiple?c.links=!1:c.external&&(c.links=!0);var d=this.find("[selected]").not(":disabled"),e=this.find(":selected").not(":disabled"),f=e.text(),g=this.find("option").index(e);c.multiple||""===c.label||d.length?c.label="":(e=this.prepend('<option value="" class="'+C.item_placeholder+'" selected>'+c.label+"</option>"),f=c.label,g=0);var h=this.find("option, optgroup"),k=h.filter("option");c.tabIndex=this[0].tabIndex,this[0].tabIndex=-1;var l=[C.base,c.customClass];c.mobile||b.isMobile?l.push(C.mobile):c.cover&&l.push(C.cover),c.multiple&&l.push(C.multiple),c.disabled&&l.push(C.disabled);var m='<div class="'+l.join(" ")+'" tabindex="'+c.tabIndex+'"></div>',n="";c.multiple||(n+='<button type="button" class="'+C.selected+'">',n+=a("<span></span>").text(y(f,c.trim)).html(),n+="</button>"),n+='<div class="'+C.options+'">',n+="</div>",this.wrap(m).after(n),c.$dropdown=this.parent(B.base),c.$allOptions=h,c.$options=k,c.$selected=c.$dropdown.find(B.selected),c.$wrapper=c.$dropdown.find(B.options),c.$placeholder=c.$dropdown.find(B.placeholder),c.index=-1,c.closed=!0,c.focused=!1,i(c),c.multiple||u(g,c),c.$selected.fsTouch({tap:!0}).on(D.tap,c,j),c.$dropdown.on(D.click,B.item,c,p).on(D.close,c,o),this.on(D.change,c,q),b.isMobile||(c.$dropdown.on(D.focusIn,c,r).on(D.focusOut,c,s),this.on(D.focusIn,c,function(a){a.data.$dropdown.trigger(D.raw.focusIn)}))}function e(a){a.$dropdown.hasClass(C.open)&&a.$selected.trigger(D.click),a.$el[0].tabIndex=a.tabIndex,a.$dropdown.off(D.namespace),a.$options.off(D.namespace),a.$placeholder.remove(),a.$selected.fsTouch("destroy").remove(),a.$wrapper.remove(),a.$el.off(D.namespace).show().unwrap()}function f(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).addClass(C.item_disabled),a.$options.eq(c).prop("disabled",!0)}else a.$dropdown.hasClass(C.open)&&a.$selected.trigger(D.click),a.$dropdown.addClass(C.disabled),a.$el.prop("disabled",!0),a.disabled=!0}function g(a,b){if("undefined"!=typeof b){var c=a.$items.index(a.$items.filter("[data-value="+b+"]"));a.$items.eq(c).removeClass(C.item_disabled),a.$options.eq(c).prop("disabled",!1)}else a.$dropdown.removeClass(C.disabled),a.$el.prop("disabled",!1),a.disabled=!1}function h(a){var b=a.index;a.$allOptions=a.$el.find("option, optgroup"),a.$options=a.$allOptions.filter("option"),a.index=-1,b=a.$options.index(a.$options.filter(":selected")),i(a),a.multiple||u(b,a)}function i(b){for(var c="",d=0,e=0,f=b.$allOptions.length;f>e;e++){var g=b.$allOptions.eq(e),h=[];if("OPTGROUP"===g[0].tagName)h.push(C.group),g.is(":disabled")&&h.push(C.disabled),c+='<span class="'+h.join(" ")+'">'+g.attr("label")+"</span>";else{var i=g.val();g.attr("value")||g.attr("value",i),h.push(C.item),g.hasClass(C.item_placeholder)&&h.push(C.item_placeholder),g.is(":selected")&&h.push(C.item_selected),g.is(":disabled")&&h.push(C.item_disabled),c+='<button type="button" class="'+h.join(" ")+'" ',c+='data-value="'+i+'">',c+=a("<span></span>").text(y(g.text(),b.trim)).html(),c+="</button>",d++}}b.$items=b.$wrapper.html(c).find(B.item)}function j(a){E.killEvent(a);var c=a.data;if(!c.disabled)if(c.mobile||!b.isMobile||b.isFirefoxMobile)c.closed?l(c):m(c);else{var d=c.$el[0];if(G.createEvent){var e=G.createEvent("MouseEvents");e.initMouseEvent("mousedown",!1,!0,F,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e)}else d.fireEvent&&d.fireEvent("onmousedown")}k(c)}function k(b){a(B.base).not(b.$dropdown).trigger(D.close,[b])}function l(a){if(a.closed){{var b=a.$dropdown.offset(),c=H.outerHeight(),d=a.$wrapper.outerHeight(!0);a.index>=0?a.$items.eq(a.index).position():{left:0,top:0}}b.top+d>c&&a.$dropdown.addClass(C.bottom),H.on(D.click+a.dotGuid,":not("+B.options+")",a,n),a.$dropdown.trigger(D.focusIn),a.$dropdown.addClass(C.open),v(a),a.closed=!1}}function m(a){a&&!a.closed&&(H.off(D.click+a.dotGuid),a.$dropdown.removeClass([C.open,C.bottom].join(" ")),a.closed=!0)}function n(b){E.killEvent(b);var c=b.data;c&&0===a(b.currentTarget).parents(B.base).length&&(m(c),c.$dropdown.trigger(D.focusOut))}function o(a){var b=a.data;b&&(m(b),b.$dropdown.trigger(D.focusOut))}function p(b){E.killEvent(b);var c=a(this),d=b.data;if(!d.disabled){if(d.$wrapper.is(":visible")){var e=d.$items.index(c);e!==d.index&&(u(e,d),w(d))}d.multiple||m(d),d.$dropdown.trigger(D.focusIn)}}function q(b,c){var d=a(this),e=b.data;if(!c&&!e.multiple){var f=e.$options.index(e.$options.filter("[value='"+z(d.val())+"']"));u(f,e),w(e)}}function r(b){E.killEvent(b);var c=(a(b.currentTarget),b.data);c.disabled||c.multiple||c.focused||(k(c),c.focused=!0,c.$dropdown.addClass(C.focus).on(D.keyDown+c.dotGuid,c,t))}function s(b){E.killEvent(b);var c=(a(b.currentTarget),b.data);c.focused&&c.closed&&(c.focused=!1,c.$dropdown.removeClass(C.focus).off(D.keyDown+c.dotGuid),c.multiple||m(c))}function t(c){var d=c.data;if(13===c.keyCode)d.closed||(m(d),u(d.index,d)),w(d);else if(!(9===c.keyCode||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)){E.killEvent(c);var e=d.$items.length-1,f=d.index<0?0:d.index;if(a.inArray(c.keyCode,b.isFirefox?[38,40,37,39]:[38,40])>-1)f+=38===c.keyCode||b.isFirefox&&37===c.keyCode?-1:1,0>f&&(f=0),f>e&&(f=e);else{var g,h,i=String.fromCharCode(c.keyCode).toUpperCase();for(h=d.index+1;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}if(0>f||f===d.index)for(h=0;e>=h;h++)if(g=d.$options.eq(h).text().charAt(0).toUpperCase(),g===i){f=h;break}}f>=0&&(u(f,d),v(d))}}function u(a,b){var c=b.$items.eq(a),d=b.$options.eq(a),e=c.hasClass(C.item_selected),f=c.hasClass(C.item_disabled);if(!f)if(b.multiple)e?(d.prop("selected",null),c.removeClass(C.item_selected)):(d.prop("selected",!0),c.addClass(C.item_selected));else if(a>-1&&a<b.$items.length){var g=d.data("label")||c.html();b.$selected.html(g).removeClass(B.item_placeholder),b.$items.filter(B.item_selected).removeClass(C.item_selected),b.$el[0].selectedIndex=a,c.addClass(C.item_selected),b.index=a}else""!==b.label&&b.$selected.html(b.label)}function v(a){var b=a.$items.eq(a.index),c=a.index>=0&&!b.hasClass(C.item_placeholder)?b.position():{left:0,top:0},d=(a.$wrapper.outerHeight()-b.outerHeight())/2;a.$wrapper.scrollTop(a.$wrapper.scrollTop()+c.top-d)}function w(a){a.links?x(a):a.$el.trigger(D.raw.change,[!0])}function x(a){var b=a.$el.val();a.external?F.open(b):F.location.href=b}function y(a,b){return 0===b?a:a.length>b?a.substring(0,b)+"...":a}function z(a){return"string"==typeof a?a.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"):a}var A=b.Plugin("dropdown",{widget:!0,defaults:{cover:!1,customClass:"",label:"",external:!1,links:!1,mobile:!1,trim:0},methods:{_setup:c,_construct:d,_destruct:e,disable:f,enable:g,update:h,open:l,close:m},classes:["cover","bottom","multiple","mobile","open","disabled","focus","selected","options","group","item","item_disabled","item_selected","item_placeholder"],events:{tap:"tap",close:"close"}}),B=A.classes,C=B.raw,D=A.events,E=A.functions,F=b.window,G=(b.$window,b.document),H=null}(jQuery,Formstone);
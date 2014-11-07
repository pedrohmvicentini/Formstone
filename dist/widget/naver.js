/* 
 * Formstone v0.0.1 - 2014-11-07 
 * Library of modular javascript components. 
 * http://formstone.it/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */

!function(a,b,c){"use strict";function d(d){d.enabled=!1,d.open=!1,d.$handle=this.find(r.getClassName(p.handle)).length?this.find(p.handle).detach():a('<span class="'+p.handle+'"></span>'),d.$handle.text(d.label?d.labels.closed:""),this.addClass([p.base,d.customClass].join(" ")).wrapInner('<div class="'+p.container+'"></div>').wrapInner('<div class="'+p.wrapper+'"></div>').prepend(d.$handle),d.$container=d.$el.find(r.getClassName(p.container)),d.$wrapper=d.$el.find(r.getClassName(p.wrapper)),d.eventDelegate=r.getClassName(p.handle),this.on(q.touchStart,d.eventDelegate,d,j).on(q.click,d.eventDelegate,d,m),b.matchMediaSupport!==c&&(d.mediaQuery=b.$window[0].matchMedia("(max-width:"+(1/0===d.maxWidth?"100000px":d.maxWidth)+")"),d.mediaQuery.addListener(function(){n.call(d.$el,d)}),n.call(d.$el,d))}function e(a){a.$handle.remove(),a.$container.contents().unwrap().unwrap(),a.$el.removeClass([p.base,p.enabled,p.open,a.customClass].join(" ")).off(q.namespace)}function f(a){a.enabled&&!a.open&&(a.$wrapper.css({height:a.$container.outerHeight(!0)}),a.label&&a.$handle.html(a.labels.open),a.$el.addClass(p.open).trigger(q.open),a.open=!0)}function g(a){a.enabled&&a.open&&(a.$wrapper.css({height:0}),a.label&&a.$handle.html(a.labels.closed),a.$el.removeClass(p.open).trigger(q.close),a.open=!1)}function h(a){a.enabled||(a.$el.addClass(p.enabled),a.enabled=!0,a.open=!0,g.call(a.$el,a))}function i(a){a.enabled&&(a.$el.removeClass(p.enabled),a.enabled=!1,a.$wrapper.css({height:""}))}function j(a){a.stopPropagation();var b=a.data,c=a.originalEvent;b.touchStartEvent=c,b.touchStartX=c.touches[0].clientX,b.touchStartY=c.touches[0].clientY,b.$el.on(q.touchMove,b.eventDelegate,b,k).on(q.touchEnd,b.eventDelegate,b,l)}function k(a){var b=a.data,c=a.originalEvent;(Math.abs(c.touches[0].clientX-b.touchStartX)>10||Math.abs(c.touches[0].clientY-b.touchStartY)>10)&&b.$el.off([q.touchMove,q.touchEnd].join(" "))}function l(a){var b=a.data;b.touchStartEvent.preventDefault(),b.$el.off([q.touchMove,q.touchEnd,q.click].join(" ")),m(a)}function m(b){r.killEvent(b);var c=(a(b.currentTarget),b.data);a(r.getClassName(p.base)).not(c.$el)[o.namespace]("close"),c.open?g.call(c.$el,c):f.call(c.$el,c)}function n(a){a.mediaQuery.matches?h.call(a.$el,a):i.call(a.$el,a)}var o=b.Plugin("naver_new",{widget:!0,defaults:{customClass:"",label:!0,labels:{closed:"Navigation",open:"Close"},maxWidth:"980px"},classes:["handle","container","wrapper","enabled","open"],events:["open","close"],methods:{_construct:d,_destruct:e,open:f,close:g,enable:h,disable:i}}),p=o.classes,q=o.events,r=o.functions}(jQuery,Formstone);
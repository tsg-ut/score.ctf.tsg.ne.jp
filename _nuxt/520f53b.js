(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{465:function(e,t,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(92).default)("3bda9d19",content,!0,{sourceMap:!1})},494:function(e,t,r){"use strict";r(465)},495:function(e,t,r){var n=r(91)(!1);n.push([e.i,".Reset{text-align:center}.Reset .title{margin-bottom:3rem}.Reset .subtitle{margin-bottom:1rem;font-size:1.5rem}",""]),e.exports=n},522:function(e,t,r){"use strict";r.r(t);r(16),r(9),r(13),r(23),r(24);var n=r(4),o=r(2),c=(r(17),r(30));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.store.dispatch("updateCsrfToken",e);case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{isError:!1}},head:function(){return{title:"Reset Password - TSG CTF"}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)(["isLoggedIn","csrfToken"])),mounted:function(){document.referrer&&("/reset_password"===new URL(document.referrer).pathname&&(this.isError=!0))}},d=l,m=(r(494),r(38)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"Reset"},[r("h2",{staticClass:"title"},[r("span",[e._v("Reset Password")])]),e._v(" "),r("p",[e._v("Sorry, please contact an organizer to have your password reset")])])}],!1,null,null,null);t.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{443:function(t,e,r){var content=r(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("4eb83991",content,!0,{sourceMap:!1})},448:function(t,e,r){t.exports=r.p+"img/ctftime.59d7bc8.svg"},449:function(t,e,r){"use strict";r(443)},450:function(t,e,r){var n=r(91)(!1);n.push([t.i,".CtftimeLoginButton{display:inline-block;width:auto;padding:0 2rem;max-width:35rem;background:linear-gradient(90deg,#3e91a6,#5e0fa9 80%,#e3000b,80.1%,#e3000b);overflow:hidden;height:4rem;margin:5rem 0 1rem}.CtftimeLoginButton>*{vertical-align:middle}.CtftimeLoginButton img{height:4rem}",""]),t.exports=n},454:function(t,e,r){"use strict";var n={props:{prefix:{required:!0,type:String}}},o=(r(449),r(38)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"CtftimeLoginButton button-style",attrs:{href:"/oauth"}},[n("span",[t._v(t._s(t.prefix))]),n("img",{attrs:{alt:"CTFTime",src:r(448)}})])}),[],!1,null,null,null);e.a=component.exports},464:function(t,e,r){var content=r(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("5c23af6e",content,!0,{sourceMap:!1})},492:function(t,e,r){"use strict";r(464)},493:function(t,e,r){var n=r(91)(!1);n.push([t.i,'.Register{text-align:center}.Register .title{margin-bottom:0}.Register .subtitle{margin-bottom:2rem;font-size:1.5rem}.Register .subtitle a{color:#90cbff}.Register .ctftime-login-area{text-align:center}.Register .login-form{opacity:.1;transition:opacity .3s}.Register .login-form.active{opacity:1}.Register .form-group{display:flex;justify-content:center;line-height:2rem;padding:.6rem 0;align-items:center}.Register label{font-size:1rem;width:10rem;text-align:right;padding-right:1rem}.Register .form-control{font-size:1.2rem;width:20rem}.Register .error{font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300;color:#f44336;padding:0;line-height:2rem}.Register button[type=submit]{width:10rem;margin:1rem 0}',""]),t.exports=n},521:function(t,e,r){"use strict";r.r(e);r(16),r(9),r(13),r(23),r(24);var n=r(4),o=r(2),c=(r(17),r(136)),l=r(454),m=r(30);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{IsoLink:c.a,CtftimeLoginButton:l.a},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("updateCsrfToken",t);case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{isError:!1,isLegacyActive:!1}},head:function(){return{title:"Register - TSG CTF"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(m.c)(["isLoggedIn","csrfToken"])),mounted:function(){document.referrer&&("/register"===new URL(document.referrer).pathname&&(this.isError=!0))}},v=d,_=(r(492),r(38)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Register"},[t._m(0),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("or "),r("iso-link",{attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),r("div",{staticClass:"ctftime-login-area"},[r("ctftime-login-button",{attrs:{prefix:"Register with"}})],1),t._v(" "),r("hr"),t._v(" "),t._m(1),t._v(" "),r("form",{staticClass:"login-form",class:{active:t.isLegacyActive},attrs:{method:"post","accept-charset":"utf-8",autocomplete:"off"},on:{click:function(e){t.isLegacyActive=!0}}},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",[t._v("\n\t\t\tIndividual registration is recommended. You can create team account later.\n\t\t")]),t._v(" "),t.isError?r("div",{staticClass:"error"},[t._v("\n\t\t\tRegistration errored. Maybe username already taken?\n\t\t")]):t._e(),t._v(" "),t._m(5),t._v(" "),r("input",{attrs:{type:"hidden",name:"nonce"},domProps:{value:t.csrfToken}})])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",[t._v("Register")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"title"},[r("span",[t._v("Legacy Registration")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name-input"}},[t._v("\n\t\t\t\tUser Name\n\t\t\t")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{id:"name-input",type:"text",name:"name"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email-input"}},[t._v("\n\t\t\t\tEmail\n\t\t\t")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{id:"email-input",type:"email",name:"email"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password-input"}},[t._v("\n\t\t\t\tPassword\n\t\t\t")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{id:"password-input",type:"password",name:"password"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("button",{attrs:{id:"submit",type:"submit",tabindex:"5"}},[t._v("\n\t\t\t\tSubmit\n\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);
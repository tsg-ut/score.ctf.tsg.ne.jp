(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{443:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("4eb83991",content,!0,{sourceMap:!1})},448:function(t,e,n){t.exports=n.p+"img/ctftime.59d7bc8.svg"},449:function(t,e,n){"use strict";n(443)},450:function(t,e,n){var r=n(91)(!1);r.push([t.i,".CtftimeLoginButton{display:inline-block;width:auto;padding:0 2rem;max-width:35rem;background:linear-gradient(90deg,#3e91a6,#5e0fa9 80%,#e3000b,80.1%,#e3000b);overflow:hidden;height:4rem;margin:5rem 0 1rem}.CtftimeLoginButton>*{vertical-align:middle}.CtftimeLoginButton img{height:4rem}",""]),t.exports=r},454:function(t,e,n){"use strict";var r={props:{prefix:{required:!0,type:String}}},o=(n(449),n(38)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"CtftimeLoginButton button-style",attrs:{href:"/oauth"}},[r("span",[t._v(t._s(t.prefix))]),r("img",{attrs:{alt:"CTFTime",src:n(448)}})])}),[],!1,null,null,null);e.a=component.exports},469:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(92).default)("22018f3d",content,!0,{sourceMap:!1})},506:function(t,e,n){"use strict";n(469)},507:function(t,e,n){var r=n(91)(!1);r.push([t.i,'.JoinTeam{text-align:center}.JoinTeam .title{margin-bottom:0}.JoinTeam .subtitle{margin-bottom:2rem;font-size:1.5rem}.JoinTeam .button{display:block;margin:1rem auto;width:18rem;height:3rem;line-height:3rem;border-radius:9999px;font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300}.JoinTeam .button.join{background:linear-gradient(90deg,#3e91a6,#5e0fa9)}.JoinTeam .button.new{background:linear-gradient(90deg,#a6643e,#a90f5d)}',""]),t.exports=r},526:function(t,e,n){"use strict";n.r(e);n(16),n(9),n(13),n(23),n(24);var r=n(4),o=(n(55),n(136)),c=n(454),l=n(30);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={components:{IsoLink:o.a,CtftimeLoginButton:c.a},head:function(){return{title:"Team - TSG CTF"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)(["isInTeam","isVerified","isLoggedIn","team"])),mounted:function(){this.isVerified?this.isLoggedIn?this.isInTeam&&this.team&&this.team.id&&this.$router.replace({path:"/teams/".concat(this.team.id)}):this.$router.replace({path:"/login"}):this.$router.replace({path:"/confirm"})}},d=f,h=(n(506),n(38)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"JoinTeam"},[t._m(0),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("In order to participate you must either join or create a team.")]),t._v(" "),n("div",{staticClass:"ctftime-login-area"},[n("ctftime-login-button",{attrs:{prefix:"Join/Create team with"}})],1),t._v(" "),n("iso-link",{staticClass:"button join",attrs:{to:"/teams/join"}},[t._v("Join Team")]),t._v(" "),n("iso-link",{staticClass:"button new",attrs:{to:"/teams/new"}},[t._v("Create Team")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"title"},[n("span",[t._v("Join or Create Team")])])}],!1,null,null,null);e.default=component.exports}}]);
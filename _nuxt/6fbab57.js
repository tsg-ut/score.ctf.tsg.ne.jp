(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{441:function(t,e,r){"use strict";var o=r(8),n=r(45),c=r(46),l=r(137),d=r(93),f=r(18),v=r(70).f,h=r(71).f,m=r(25).f,_=r(444).trim,y="Number",C=o.Number,S=C,w=C.prototype,O=c(r(94)(w))==y,I="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,c=(e=I?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(O?f((function(){w.valueOf.call(r)})):c(r)!=y)?l(new S(k(e)),r,C):k(e)};for(var x,N=r(14)?v(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)n(S,x=N[E])&&!n(C,x)&&m(C,x,h(S,x));C.prototype=w,w.constructor=C,r(29)(o,y,C)}},444:function(t,e,r){var o=r(5),n=r(50),c=r(18),l=r(445),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,r){var n={},d=c((function(){return!!l[t]()||"​"!="​"[t]()})),f=n[t]=d?e(m):l[t];r&&(n[r]=f),o(o.P+o.F*d,"String",n)},m=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},445:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},457:function(t,e,r){"use strict";r(441);var o={name:"CheckCircleIcon",props:{title:{type:String,default:"Check Circle icon"},decorative:{type:Boolean,default:!1},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},n=r(38),component=Object(n.a)(o,(function(t,e){var r=e._c;return r("span",e._g(e._b({staticClass:"material-design-icon check-circle-icon",class:[e.data.class,e.data.staticClass],attrs:{"aria-hidden":e.props.decorative,"aria-label":e.props.title,role:"img"}},"span",e.data.attrs,!1),e.listeners),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.props.fillColor,width:e.props.size,height:e.props.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"}},[e.props.decorative?e._e():r("title",[e._v(e._s(e.props.title))])])])])}),[],!0,null,null,null);e.a=component.exports},467:function(t,e,r){var content=r(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(92).default)("60af4e2b",content,!0,{sourceMap:!1})},498:function(t,e,r){"use strict";r(467)},499:function(t,e,r){var o=r(91)(!1);o.push([t.i,".Scoreboard table .place{padding-right:1rem;width:6rem;text-align:right}.Scoreboard .team{max-width:18rem;text-overflow:ellipsis;overflow:hidden}.Scoreboard .team-flag{display:inline-block;width:27px;height:18px;background-size:contain;background-position:50%;background-repeat:no-repeat}.Scoreboard .team-name>*{vertical-align:middle}.Scoreboard .authed{margin-left:.2em;color:#c31b1b}.Scoreboard tr.active{background:rgba(255,0,0,.3)}",""]),t.exports=o},524:function(t,e,r){"use strict";r.r(e);r(16),r(9),r(13),r(23),r(24);var o=r(4),n=r(2),c=(r(17),r(30)),l=r(457);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{IsoLink:r(136).a,CheckCircle:l.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.store.dispatch("scoreboard/update",t);case 2:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Scoreboard - TSG CTF"}},computed:f(f({},Object(c.b)({scoreboard:"scoreboard/getScoreboard"})),Object(c.c)({isStatic:"isStatic",myTeam:"team"})),mounted:function(){var t=this;this.isStatic||(this.$store.dispatch("scoreboard/update",{$axios:this.$axios}),this.interval=setInterval((function(){t.$store.dispatch("scoreboard/updateScoreboard",{$axios:t.$axios})}),6e4))},destroyed:function(){clearInterval(this.interval)},methods:{getFlagStyle:function(t){return null===t||""===t?{backgroundColor:"transparent"}:{backgroundImage:"url(https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/".concat(t.toUpperCase(),".svg)")}}}},h=(r(498),r(38)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"Scoreboard"},[t._m(0),t._v(" "),r("div",{staticClass:"table-wrap"},[r("table",{staticClass:"scoreboard"},[t._m(1),t._v(" "),r("tbody",t._l(t.scoreboard,(function(e){return r("tr",{key:e.id,class:{active:e.account_id===t.myTeam.id}},[r("th",{staticClass:"place",attrs:{scope:"row"}},[t._v(t._s(e.pos))]),t._v(" "),r("td",{staticClass:"team"},[r("div",{staticClass:"team-flag",style:t.getFlagStyle(e.country)}),t._v(" "),r("iso-link",{staticClass:"team-name",attrs:{to:"/teams/"+e.account_id}},[r("span",[t._v(t._s(e.name))]),t._v(" "),e.oauth_id?r("check-circle",{staticClass:"authed",attrs:{title:"Verified with CTFTime",size:16}}):t._e()],1)],1),t._v(" "),r("td",[t._v(t._s(e.score))])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h2",{staticClass:"title"},[r("span",[t._v("Score"),r("wbr"),t._v("board")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("td",{staticClass:"place",attrs:{scope:"col"}},[r("b",[t._v("Place")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Team")])]),t._v(" "),r("td",{attrs:{scope:"col"}},[r("b",[t._v("Score")])])])])}],!1,null,null,null);e.default=component.exports}}]);
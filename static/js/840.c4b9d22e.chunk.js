"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[840],{598:function(n,t,e){function r(n,t,e,r,c,o,a){try{var i=n[o](a),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var a=n.apply(t,e);function i(n){r(a,c,o,i,u,"next",n)}function u(n){r(a,c,o,i,u,"throw",n)}i(void 0)}))}}e.d(t,{xc:function(){return d},Y5:function(){return h},Hx:function(){return v},Ai:function(){return l},Tg:function(){return p}});var o=e(687),a=e.n(o),i="https://api.themoviedb.org/3",u="0b2bea78971d650356cc30f3af111630";function s(){return f.apply(this,arguments)}function f(){return f=c(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),f.apply(this,arguments)}function p(){return s("".concat(i,"/trending/movie/day?api_key=").concat(u))}function h(n){return s("".concat(i,"/movie/").concat(n,"?api_key=").concat(u))}function d(n){return s("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u))}function v(n){return s("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u))}function l(n){return s("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(n))}},840:function(n,t,e){e.r(t),e.d(t,{default:function(){return u}});var r=e(885),c=e(739),o=e(791),a=e(598),i=e(184);function u(){var n=(0,c.UO)().movieId,t=(0,o.useState)([]),e=(0,r.Z)(t,2),u=e[0],s=e[1];return(0,o.useEffect)((function(){(0,a.xc)(n).then((function(n){return s(n.cast)}))}),[n]),(0,i.jsx)(i.Fragment,{children:u&&(0,i.jsx)("ul",{children:u.map((function(n){var t=n.id,e=n.name,r=n.profile_path,c=n.character;return(0,i.jsxs)("li",{children:[r&&(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(r),alt:e}),(0,i.jsx)("p",{children:e}),(0,i.jsx)("p",{children:c})]},t)}))})})}}}]);
//# sourceMappingURL=840.c4b9d22e.chunk.js.map
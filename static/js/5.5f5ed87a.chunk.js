(this["webpackJsonpfull-react-course-2020"]=this["webpackJsonpfull-react-course-2020"]||[]).push([[5],{13:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(14);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},14:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},15:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(13);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(u){o=!0,i=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},19:function(t,e,r){t.exports=r(26)},20:function(t,e,r){"use strict";function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},26:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new S(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",y={};function b(){}function v(){}function m(){}var j={};u(j,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==r&&n.call(w,i)&&(j=w);var x=m.prototype=b.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:F}}function F(){return{value:e,done:!0}}return v.prototype=m,u(x,"constructor",m),u(m,"constructor",v),v.displayName=u(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new E(s(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},O(x),u(x,a,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},27:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(19),o=r.n(n),i=r(20),c=function(){var t=Object(i.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:if(!((r=t.sent).status<=299)){t.next=6;break}return n=r.json(),t.abrupt("return",n);case 6:throw new Error(r.statusText);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},43:function(t,e,r){"use strict";r.r(e),r.d(e,"UseEffectBasic",(function(){return l})),r.d(e,"UseEffectCleanup",(function(){return h})),r.d(e,"UseEffectFecthData",(function(){return d}));var n=r(19),o=r.n(n),i=r(20),c=r(15),a=r(0),u=r(16),s=r(27),f=r(1),l=function(){var t=Object(a.useState)((function(){return!1})),e=Object(c.a)(t,2),r=e[0],n=e[1],o=Object(a.useRef)(1);return Object(a.useEffect)((function(){"number"===typeof r?(document.title="".concat(r?"(".concat(r,") "):"","React App"),console.log("re-rendered")):console.log("rendered"),o.current+=1}),[r]),Object(a.useEffect)((function(){setTimeout((function(){r<0&&alert("Your Number is  ( ".concat(r," )\nand that is a Negative Number.\nreset your number or increase ").concat(Math.abs(r)," times\nso that your number becomes absolute."))}),500)}),[r]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("section",{style:{margin:"4rem 0"},children:[Object(f.jsx)("h2",{children:"UseEffect Basics"}),Object(f.jsxs)("h3",{children:["this page is rendered ",o.current," times."]}),Object(f.jsx)("h1",{children:r||0}),Object(f.jsx)("button",{className:"btn",onClick:function(){return n((function(t){return t-1}))},children:"Decrease"}),Object(f.jsx)("button",{className:"btn",onClick:function(){return n((function(t){return t-t}))},children:"Reset"}),Object(f.jsx)("button",{className:"btn",onClick:function(){return n((function(t){return t+1}))},children:"Increase"})]}),Object(f.jsx)("button",{className:"btn",onClick:function(){return alert("hello world")},children:"Dummy Button"})]})},h=function(){var t=Object(a.useState)(window.innerWidth),e=Object(c.a)(t,2),r=e[0],n=e[1],o=function(){return n(window.innerWidth)};return Object(a.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Window"}),Object(f.jsxs)("h2",{children:[r,"px"]})]})},d=function(){var t=Object(a.useState)(!0),e=Object(c.a)(t,2),r=e[0],n=e[1],l=Object(a.useState)(!1),h=Object(c.a)(l,2),d=h[0],p=h[1],y=Object(a.useState)([]),b=Object(c.a)(y,2),v=b[0],m=b[1],j=function(){var t=Object(i.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("https://api.github.com/users").catch((function(t){return console.log(t)}));case 2:(e=t.sent)&&m(e),!e&&p((function(t){return!t})),setTimeout((function(){n((function(t){return!t}))}),500);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){j()}),[]);return r?Object(f.jsx)("h1",{children:"Loading...."}):d?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{children:"Something went wrong..."}),Object(f.jsx)("h3",{children:"check your console...."})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{children:"GitHub Users"}),Object(f.jsxs)(u.b,{to:"/",children:[Object(f.jsxs)("p",{children:["< ","back"]})," "]}),Object(f.jsx)("ul",{className:"users",children:v.map((function(t){var e=t.id,r=t.avatar_url,n=t.html_url,o=t.login;return Object(f.jsxs)("li",{children:[Object(f.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:r,alt:o})}),Object(f.jsx)("div",{children:Object(f.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:o})})]},e)}))})]})};e.default=d}}]);
//# sourceMappingURL=5.5f5ed87a.chunk.js.map
(this["webpackJsonpfull-react-course-2020"]=this["webpackJsonpfull-react-course-2020"]||[]).push([[6],{13:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(14);function a(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(t,e):void 0}}},14:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},15:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(13);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},17:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},18:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(17);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},21:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(14);var a=r(13);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46:function(t,e,r){"use strict";r.r(e);var n,a=r(17),o=r(21),i=r(18),c=r(15),u=r(0),s=r(16),f=new Uint8Array(16);function l(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(f)}var b=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(t){return"string"===typeof t&&b.test(t)},j=[],p=0;p<256;++p)j.push((p+256).toString(16).substr(1));var m=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(j[t[e+0]]+j[t[e+1]]+j[t[e+2]]+j[t[e+3]]+"-"+j[t[e+4]]+j[t[e+5]]+"-"+j[t[e+6]]+j[t[e+7]]+"-"+j[t[e+8]]+j[t[e+9]]+"-"+j[t[e+10]]+j[t[e+11]]+j[t[e+12]]+j[t[e+13]]+j[t[e+14]]+j[t[e+15]]).toLowerCase();if(!d(r))throw TypeError("Stringified UUID is invalid");return r};var y=function(t,e,r){var n=(t=t||{}).random||(t.rng||l)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=n[a];return e}return m(n)},O=r(1),h=Object(u.lazy)((function(){return r.e(12).then(r.bind(null,51))})),g=Object(u.lazy)((function(){return r.e(11).then(r.bind(null,52))}));e.default=function(){var t=Object(u.useState)((function(){return{firstname:"",email:"",age:""}})),e=Object(c.a)(t,2),r=e[0],n=e[1],f=Object(u.useState)((function(){return[]})),l=Object(c.a)(f,2),b=l[0],d=l[1],j=Object(u.useState)(!0),p=Object(c.a)(j,2),m=p[0],v=p[1],w=function(t){if(t.preventDefault(),r.firstname&&r.email&&r.age){var e=y(),a=Object(i.a)(Object(i.a)({},r),{},{id:e});d((function(t){return[].concat(Object(o.a)(t),[a])})),n((function(t){return t.firstname="",t.email="",t.age="",t}))}},S=function(t){var e=t.target.name,r=t.target.value;n((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(a.a)({},e,r))}))};return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{style:{marginBottom:"40px"},children:"Forms & Condtional Render"}),Object(O.jsxs)(s.b,{to:"/",children:[Object(O.jsxs)("p",{children:["< ","back"]})," "]}),Object(O.jsxs)("form",{onSubmit:w,className:"form",children:[Object(O.jsxs)(u.Suspense,{fallback:Object(O.jsx)("h1",{children:"Loading..."}),children:[Object(O.jsx)(h,{nameForId:"firstname",label:"Name : ",value:r.firstname,handleChange:S,type:"text"}),Object(O.jsx)(h,{nameForId:"email",label:"Email : ",value:r.email,handleChange:S,type:"email"}),Object(O.jsx)(h,{nameForId:"age",label:"Age : ",value:r.age,handleChange:S,type:"text"})]}),Object(O.jsx)("button",{className:"btn",type:"submit",onClick:w,children:"add person"})]}),Object(O.jsx)("button",{className:"btn",onClick:function(){return v((function(t){return!t}))},children:m?"Hide":"Show"}),m&&Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("h1",{children:"Loading..."}),children:Object(O.jsx)(g,{people:b})})]})}}}]);
//# sourceMappingURL=6.c75f0397.chunk.js.map
(this["webpackJsonpfull-react-course-2020"]=this["webpackJsonpfull-react-course-2020"]||[]).push([[5],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"UseEffectBasic",(function(){return b})),n.d(t,"UseEffectCleanup",(function(){return l})),n.d(t,"UseEffectFecthData",(function(){return f}));var r=n(40),c=n.n(r),s=n(41),u=n(15),i=n(0),a=n(36),o=n(72),j=n(1),b=function(){var e=Object(i.useState)((function(){return!1})),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(i.useRef)(1);return Object(i.useEffect)((function(){"number"===typeof n?(document.title="".concat(n?"(".concat(n,") "):"","React App"),console.log("re-rendered")):console.log("rendered"),c.current+=1}),[n]),Object(i.useEffect)((function(){setTimeout((function(){n<0&&alert("Your Number is  ( ".concat(n," )\nand that is a Negative Number.\nreset your number or increase ").concat(Math.abs(n)," times\nso that your number becomes absolute."))}),500)}),[n]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{style:{margin:"4rem 0"},children:[Object(j.jsx)("h2",{children:"UseEffect Basics"}),Object(j.jsxs)("h3",{children:["this page is rendered ",c.current," times."]}),Object(j.jsx)("h1",{children:n||0}),Object(j.jsx)("button",{className:"btn",onClick:function(){return r((function(e){return e-1}))},children:"Decrease"}),Object(j.jsx)("button",{className:"btn",onClick:function(){return r((function(e){return e-e}))},children:"Reset"}),Object(j.jsx)("button",{className:"btn",onClick:function(){return r((function(e){return e+1}))},children:"Increase"})]}),Object(j.jsx)("button",{className:"btn",onClick:function(){return alert("hello world")},children:"Dummy Button"})]})},l=function(){var e=Object(i.useState)(window.innerWidth),t=Object(u.a)(e,2),n=t[0],r=t[1],c=function(){return r(window.innerWidth)};return Object(i.useEffect)((function(){return window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Window"}),Object(j.jsxs)("h2",{children:[n,"px"]})]})},f=function(){var e=Object(i.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],b=Object(i.useState)(!1),l=Object(u.a)(b,2),f=l[0],h=l[1],d=Object(i.useState)([]),O=Object(u.a)(d,2),x=O[0],m=O[1],p=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("https://api.github.com/users").catch((function(e){return console.log(e)}));case 2:(t=e.sent)&&m(t),!t&&h((function(e){return!e})),setTimeout((function(){r((function(e){return!e}))}),500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){p()}),[]);return n?Object(j.jsx)("h1",{children:"Loading...."}):f?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Something went wrong..."}),Object(j.jsx)("h3",{children:"check your console...."})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"GitHub Users"}),Object(j.jsxs)(a.b,{to:"/",children:[Object(j.jsxs)("p",{children:["< ","back"]})," "]}),Object(j.jsx)("ul",{className:"users",children:x.map((function(e){var t=e.id,n=e.avatar_url,r=e.html_url,c=e.login;return Object(j.jsxs)("li",{children:[Object(j.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:n,alt:c})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:c})})]},t)}))})]})};t.default=f},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),c=n.n(r),s=n(41),u=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((n=e.sent).status<=299)){e.next=6;break}return r=n.json(),e.abrupt("return",r);case 6:throw new Error(n.statusText);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=5.98816273.chunk.js.map
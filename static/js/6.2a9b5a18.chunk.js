(this["webpackJsonpfull-react-course-2020"]=this["webpackJsonpfull-react-course-2020"]||[]).push([[6],{60:function(e,t,r){"use strict";r.r(t),r.d(t,"StateContext",(function(){return p}));var n=r(40),c=r.n(n),a=r(41),s=r(15),u=r(0),i=r(36),o=r(24),l=r(13),d=function(e,t){switch(t.type){case"FIRST_RENDER":return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(o.a)(e.users),Object(o.a)(t.payload.users))});case"ERROR_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isError:t.payload.isError});case"FETCH_STATUS":return Object(l.a)(Object(l.a)({},e),{},{isFetchLoading:t.payload.isFetchLoading});case"LOADING_FINISHED":return Object(l.a)(Object(l.a)({},e),{},{isPageLoading:t.payload.isPageLoading});case"ADD_URL":return Object(l.a)(Object(l.a)({},e),{},{url:t.payload.url});case"REMOVE_USER":var r=e.users.filter((function(e){return e.id!==t.payload.id}));return Object(l.a)(Object(l.a)({},e),{},{users:r});case"RE-FETCH":return Object(l.a)(Object(l.a)({},e),{},{users:Object(o.a)(t.payload.users)});default:throw new Error("no matching action type")}},j=r(72),h=r(1),b=Object(u.lazy)((function(){return r.e(15).then(r.bind(null,231))})),O=Object(u.lazy)((function(){return r.e(16).then(r.bind(null,232))})),p=Object(u.createContext)(),f={isFetchLoading:!1,isError:!1,users:[],url:"",isPageLoading:!0};t.default=function(){var e=Object(u.useReducer)(d,f),t=Object(s.a)(e,2),r=t[0],n=t[1],o=Object(u.useRef)(null),l=function(e){e.preventDefault(),o.current.value&&(n({type:"ADD_URL",payload:{url:o.current.value}}),n({type:"FETCH_STATUS",payload:{isFetchLoading:!0}}))};return Object(u.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(r.url).catch((function(e){return console.log(e)}));case 2:(t=e.sent)&&n({type:"FIRST_RENDER",payload:{users:t}}),!t&&n({type:"ERROR_FETCHING",payload:{isError:!0}}),setTimeout((function(){n({type:"FETCH_STATUS",payload:{isFetchLoading:!1}})}),500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(r.url).catch((function(e){return console.log(e)}));case 2:(t=e.sent)&&n({type:"RE-FETCH",payload:{users:t}}),!t&&n({type:"ERROR_FETCHING",payload:{isError:!0}}),setTimeout((function(){n({type:"FETCH_STATUS",payload:{isFetchLoading:!1}})}),500);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!r.users.length&&r.url?e():r.users.length<30&&0!==r.users.length&&r.isFetchLoading&&t()}),[r.isFetchLoading,r.isPageLoading,r.url,r.users.length]),r.isPageLoading?(setTimeout((function(){n({type:"LOADING_FINISHED",payload:{isPageLoading:!1}})}),500),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Loading...."})})):r.isError?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Something went wrong..."}),Object(h.jsx)("h3",{children:"check your console...."})]}):Object(h.jsxs)(p.Provider,{value:[r,n,function(e){n({type:"REMOVE_USER",payload:{id:e}})},l],children:[Object(h.jsx)("h3",{style:{marginBottom:"40px"},children:"UseEffect | UseReducer | UseRef | Fetch"}),Object(h.jsxs)(i.b,{to:"/",children:[Object(h.jsxs)("p",{children:["< ","back"]})," "]}),Object(h.jsx)("h5",{children:"url : https://api.github.com/users"}),Object(h.jsx)("section",{children:Object(h.jsxs)("form",{className:"form",onSubmit:l,children:[Object(h.jsx)(u.Suspense,{fallback:Object(h.jsx)("h1",{children:"Loading..."}),children:Object(h.jsx)(O,{nameForId:"url",status:!!r.url,label:"Url : ",ref:o,type:"url"})}),Object(h.jsx)("button",{type:"submit",disabled:30===r.users.length&&0!==r.users.length,onClick:l,children:r.users.length<=30&&0!==r.users.length?"re-fetch":"add url"})]})}),Object(h.jsx)("section",{children:r.isFetchLoading?Object(h.jsx)("h3",{children:"Loading..."}):r.url&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:"GitHub Users"}),Object(h.jsx)("ul",{className:"users",children:Object(h.jsx)(u.Suspense,{fallback:Object(h.jsx)("h1",{children:"Loading..."}),children:Object(h.jsx)(b,{})})})]})})]})}},72:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(40),c=r.n(n),a=r(41),s=function(){var e=Object(a.a)(c.a.mark((function e(t){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!((r=e.sent).status<=299)){e.next=6;break}return n=r.json(),e.abrupt("return",n);case 6:throw new Error(r.statusText);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=6.2a9b5a18.chunk.js.map
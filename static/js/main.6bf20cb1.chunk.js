(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{22:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(15),i=c.n(s),o=(c(22),c(3)),j=c(0),l=function(e){var t=e.users,c=e.updateUsers,r=Object(n.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){var e=""===i?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(i.toLowerCase())>=0}));c(e)}),[i,t]),Object(j.jsx)("input",{value:i,onChange:function(e){return l(e.target.value)}})},a=c(17),d=function(e){var t=e.users,c=Object(n.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];return Object(n.useEffect)((function(){return i(t)}),[t]),Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"title"}),Object(j.jsx)("th",{scope:"col",onClick:function(){var e=Object(a.a)(t).sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0}));i(e)},children:"First"}),Object(j.jsx)("th",{scope:"col",children:"Last"}),Object(j.jsx)("th",{scope:"col",children:"gender"}),Object(j.jsx)("th",{scope:"col",children:"email"}),Object(j.jsx)("th",{scope:"col",children:"phone"}),Object(j.jsx)("th",{scope:"col",children:"cell"}),Object(j.jsx)("th",{scope:"col",children:"city"}),Object(j.jsx)("th",{scope:"col",children:"state"}),Object(j.jsx)("th",{scope:"col",children:"country"}),Object(j.jsx)("th",{scope:"col",children:"postcode"}),Object(j.jsx)("th",{scope:"col",children:"picture"})]})}),Object(j.jsx)("tbody",{children:s.map((function(e){var t=e.location,c=t.city,n=t.state,r=t.country,s=t.postcode,i=e.picture.thumbnail,o=e.cell,l=e.phone,a=e.gender,d=e.email,h=e.name,b=h.first,u=h.last,O=h.title;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:O}),Object(j.jsx)("th",{children:b}),Object(j.jsx)("td",{children:u}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:d}),Object(j.jsx)("td",{children:l}),Object(j.jsx)("td",{children:o}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:s}),Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:i})}),Object(j.jsx)("td",{})]},d)}))})]})})},h=c(16),b=c.n(h);c(41);var u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(o.a)(s,2),a=i[0],h=i[1];return Object(n.useEffect)((function(){b.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Employee Directory"}),Object(j.jsx)("p",{children:"To filter by first name, please begin your search in the user input below"}),Object(j.jsx)(l,{users:c,updateUsers:h}),Object(j.jsx)(d,{users:a})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.6bf20cb1.chunk.js.map
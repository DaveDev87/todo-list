(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(13),n(14),n(3)),u=n(7),i=n(6),s=n(17),m=Object(a.createContext)(),d=function(){return Object(a.useContext)(m)};function f(e){var t=e.children,n=Object(a.useState)([]),c=Object(l.a)(n,2),o=c[0],d=c[1];return r.a.createElement(m.Provider,{value:{tasks:o,addTask:function(e){return d([].concat(Object(i.a)(o),[{id:Object(s.a)(),task:e,complete:!1}]))},setStatusTask:function(e,t){d(o.map((function(n){return n.id===e?Object(u.a)({},n,{complete:t}):n})))}}},t)}function E(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=d().addTask;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o(n),c("")}},r.a.createElement("input",{type:"text",value:n,placeholder:"Get some eggs...",onChange:function(e){return c(e.target.value)},required:!0}),r.a.createElement("button",null,"Add"))}function p(e){var t=e.id,n=e.task,a=e.complete,c=d().setStatusTask;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",onChange:function(e){return c(t,e.target.checked)}})),r.a.createElement("td",null,r.a.createElement("span",{className:a?"task-done":""},n)))}function b(){var e=d().tasks;return r.a.createElement("table",null,r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement(p,Object.assign({key:t},e))}))))}var h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Todo List"),r.a.createElement(E,null),r.a.createElement(b,null),"ya")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8084ddca.chunk.js.map
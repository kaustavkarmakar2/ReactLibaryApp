(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),o=(a(41),a(17)),s=a.n(o),u=a(31),i=a(15),m=(a(43),a(6)),h=a(7),E=a(9),b=a(8),p=a(10),f=a(12),v=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark  navbar-default"},c.a.createElement(f.b,{to:"/bank",className:"brand-logo"},"BrandLogo")))}}]),t}(c.a.Component),d=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"card card-1"},c.a.createElement("h4",{className:"account_name"},"hhhhhh"),c.a.createElement("h4",{className:"account_name"},"Bank Name:Kotak"),c.a.createElement("h4",{className:"account_name"},"ifsc:kkbk0001")))}}]),t}(c.a.Component),g=a(34),O=a.n(g),k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={city:[]},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;console.log("state",[{location:"KOLKATA"},{location:"MUMBAI"},{location:"DELHI"}]);var t=function(t,a,n){e.setState({rating:t})},a=this.state.rating;return this.loading?c.a.createElement("h2",null,"Loading...."):c.a.createElement("ul",{className:"list-group mb-2"},c.a.createElement("h2",null,"Hello"),c.a.createElement("div",{className:"col-sm-4"},c.a.createElement("select",{value:["KOLKATA","MUMBAI"],onChange:this.props.useEffect,placeholder:"Select city"},c.a.createElement("option",{value:"KOLKATA"},"Kolkata"),c.a.createElement("option",{value:"MUMBAI"},"Mumbai"))),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Rating"),c.a.createElement("th",null,"Bankname"),c.a.createElement("th",null,"Branch"),c.a.createElement("th",null,"IFSC")))),this.props.posts.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("div",{className:"col-sm-4"}),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement(O.a,{name:"rate1",starCount:1,value:a,onClick:t})),c.a.createElement("td",null,e.bank_name),c.a.createElement("td",null,e.branch),c.a.createElement("td",null,e.ifsc)))))})))}}]),t}(c.a.Component),j=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,l=[],r=1;r<=Math.ceil(a/t);r++)l.push(r);for(var o=[],s=1;s<=5;s++)o.push(s);return c.a.createElement("nav",{"aria-label":"Page navigation example"},c.a.createElement("ul",{className:"pagination"},l.map((function(e){return c.a.createElement("li",{key:e,className:"page-item"},c.a.createElement("a",{href:"#/fav",onClick:function(){return n(e)},className:"page-link"},e))}))))},y=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"sidenav"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.c,{to:"/bank"},"Bank")),c.a.createElement("li",null,c.a.createElement(f.c,{to:"/fav"},"Favorite"))))}}]),t}(c.a.Component),N=a(35),A=a.n(N),B=a(11);var I=function(e,t){var a=this,l=Object(n.useState)([]),r=Object(i.a)(l,2),o=r[0],m=r[1],h=Object(n.useState)(!1),E=Object(i.a)(h,2),b=E[0],p=E[1],g=Object(n.useState)(1),O=Object(i.a)(g,2),N=O[0],I=O[1],K=Object(n.useState)(10),L=Object(i.a)(K,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[{location:"KOLKATA"},{location:"MUMBAI"},{location:"DELHI"}],a=0;a<t[a].length;a++)t=t[a].forEach(t);if("KOLKATA"!==t[0]){e.next=4;break}return e.abrupt("return",t);case 4:if("MUMBAI"!==t[1]){e.next=6;break}return e.abrupt("return",t);case 6:if("DELHI"!==t[2]){e.next=10;break}return e.abrupt("return",t);case 10:console.log("fuckyou",t);case 11:return"DELHI",console.log("hello",t),p(!0),e.next=16,A.a.get("https://vast-shore-74260.herokuapp.com/banks?city=DELHI");case 16:n=e.sent,m(n.data),p(!1);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("items",o.city);var M=N*L,w=M-L,C=o.slice(w,M);return c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement(B.c,null,c.a.createElement("div",null,c.a.createElement(y,null),c.a.createElement("div",{className:"main"},c.a.createElement(B.a,{path:"/bank",component:d}),c.a.createElement(B.a,{path:"/fav"},c.a.createElement(k,{posts:C,loading:b,city:t,useEffect:n.useEffect,handleChange:function(e){a.setState({city:e.target.value}),console.log(e.target.value)}}),c.a.createElement(j,{postsPerPage:L,totalPosts:o.length,paginate:function(e){return I(e)}})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.09933f2f.chunk.js.map
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[24],{1110:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var c=n(0),a=n.n(c),r=n(30),i=n(29),o=n.n(i),s=n(45),u=n(20),l=n(14),b=n(44),p=n(516),d=n(577),m=n(22),h=n(126),j=n(1),f=[{id:"contractNumber",label:"S\u1ed1 h\u1ee3p \u0111\u1ed3ng",numeric:!1,sortable:!0},{id:"projectName",label:"D\u1ef1 \xe1n",numeric:!1,sortable:!0},{id:"vendorName",label:"Nh\xe0 cung c\u1ea5p",numeric:!1,sortable:!0},{id:"dateString",label:"Ng\xe0y t\u1ea1o",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function g(t){switch(t){case"submitted":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd ph\xea duy\u1ec7t";case"waiting":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd m\u1edf l\u1ea1i";default:return"H\u1ee3p \u0111\u1ed3ng \u0111\xe3 ph\xea duy\u1ec7t"}}function x(){var t,e=a.a.useContext(h.a),n=e.showAlert,c=e.showBackdrop,i=e.hideBackdrop,x=Object(r.i)().status,y=a.a.useState([]),O=Object(l.a)(y,2),w=O[0],k=O[1],v=[Object(j.jsx)(m.o,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch h\u1ee3p \u0111\u1ed3ng",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){N()}},1)],N=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(),t.prev=1,t.t0=k,t.next=5,d.a.getContractList(x);case 5:t.t1=t.sent,(0,t.t0)(t.t1),i(),t.next=14;break;case 10:t.prev=10,t.t2=t.catch(1),i(),n(h.b.FETCH_FAILURE,"error");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){N()}),[x]),Object(j.jsx)(m.g,{title:g(x),columns:f,data:(t=w,t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{dateString:p.a.formatDate(new Date(t.createdDate),"dd/MM/yyyy"),action:Object(j.jsx)(b.a,{to:"/b-contract/contracts/".concat(t.contractNumber),target:"_blank",style:{textDecoration:"none"},children:Object(j.jsx)(m.o,{tooltip:"Xem chi ti\u1ebft h\u1ee3p \u0111\u1ed3ng",text:"Xem",icon:"info-circle",color:"primary"})})})}))),actions:v,initialOrderBy:"contractNumber"})}function y(){var t=Object(r.j)().path;return Object(j.jsx)(r.d,{children:Object(j.jsx)(r.b,{path:"".concat(t,"/list/:status"),component:x})})}}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[24],{1107:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return y}));var c=n(0),a=n.n(c),r=n(25),i=n(23),o=n.n(i),s=n(41),u=n(18),l=n(17),b=n(40),p=n(48),d=n(373),m=n(450),h=n(109),f=n(2),j=[{id:"contractNumber",label:"S\u1ed1 h\u1ee3p \u0111\u1ed3ng",numeric:!1,sortable:!0},{id:"projectName",label:"D\u1ef1 \xe1n",numeric:!1,sortable:!0},{id:"vendorName",label:"Nh\xe0 cung c\u1ea5p",numeric:!1,sortable:!0},{id:"dateString",label:"Ng\xe0y t\u1ea1o",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function g(t){switch(t){case"submitted":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd ph\xea duy\u1ec7t";case"waiting":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd m\u1edf l\u1ea1i";default:return"H\u1ee3p \u0111\u1ed3ng \u0111\xe3 ph\xea duy\u1ec7t"}}function x(){var t,e=a.a.useContext(h.a),n=e.showAlert,c=e.showBackdrop,i=e.hideBackdrop,x=Object(r.i)().status,y=a.a.useState([]),O=Object(l.a)(y,2),w=O[0],k=O[1],v=[Object(f.jsx)(p.n,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch h\u1ee3p \u0111\u1ed3ng",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){N()}},1)],N=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(),t.prev=1,t.t0=k,t.next=5,m.a.getContractList(x);case 5:t.t1=t.sent,(0,t.t0)(t.t1),i(),t.next=14;break;case 10:t.prev=10,t.t2=t.catch(1),i(),n(h.b.FETCH_FAILURE,"error");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){N()}),[x]),Object(f.jsx)(p.f,{title:g(x),columns:j,data:(t=w,t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{dateString:d.a.formatDate(new Date(t.createdDate),"dd/MM/yyyy"),action:Object(f.jsx)(b.a,{to:"/b-contract/contracts/".concat(t.contractNumber),target:"_blank",style:{textDecoration:"none"},children:Object(f.jsx)(p.n,{tooltip:"Xem chi ti\u1ebft h\u1ee3p \u0111\u1ed3ng",text:"Xem",icon:"info-circle",color:"primary"})})})}))),actions:v,initialOrderBy:"contractNumber"})}function y(){var t=Object(r.j)().path;return Object(f.jsx)(r.d,{children:Object(f.jsx)(r.b,{path:"".concat(t,"/list/:status"),component:x})})}}}]);
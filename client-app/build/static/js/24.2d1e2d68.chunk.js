(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[24],{886:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var c=n(0),a=n.n(c),r=n(27),i=n(23),o=n.n(i),s=n(40),u=n(13),l=n(25),b=n(47),p=n(22),h=n(46),m=n(18),d=n(537),f=n(573),j=n(2),g=[{id:"contractNumber",label:"S\u1ed1 h\u1ee3p \u0111\u1ed3ng",numeric:!1,sortable:!0},{id:"projectName",label:"D\u1ef1 \xe1n",numeric:!1,sortable:!0},{id:"vendorName",label:"Nh\xe0 cung c\u1ea5p",numeric:!1,sortable:!0},{id:"dateString",label:"Ng\xe0y t\u1ea1o",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function O(t){switch(t){case"submitted":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd ph\xea duy\u1ec7t";case"waiting":return"H\u1ee3p \u0111\u1ed3ng ch\u1edd m\u1edf l\u1ea1i";default:return"H\u1ee3p \u0111\u1ed3ng \u0111\xe3 ph\xea duy\u1ec7t"}}function y(){var t,e=Object(r.h)().status,n=Object(b.b)(),c=a.a.useState([]),i=Object(l.a)(c,2),y=i[0],x=i[1],v=[Object(j.jsx)(h.n,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch h\u1ee3p \u0111\u1ed3ng",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){w()}},1)],w=function(){var t=Object(s.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m.loadingActions.show()),t.prev=1,t.t0=x,t.next=5,f.a.getContractList(e);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),n(m.alertActions.show(m.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,n(m.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){w()}),[e]),Object(j.jsx)(h.f,{title:O(e),columns:g,data:(t=y,t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{dateString:d.a.formatDate(new Date(t.createdDate),"dd/MM/yyyy"),action:Object(j.jsx)(p.a,{to:"/b-contract/contracts/".concat(t.contractNumber),target:"_blank",style:{textDecoration:"none"},children:Object(j.jsx)(h.n,{tooltip:"Xem chi ti\u1ebft h\u1ee3p \u0111\u1ed3ng",text:"Xem",icon:"info-circle",color:"primary"})})})}))),actions:v,initialOrderBy:"contractNumber"})}function x(){var t=Object(r.i)().path;return Object(j.jsx)(r.c,{children:Object(j.jsx)(r.a,{path:"".concat(t,"/list/:status"),component:y})})}}}]);
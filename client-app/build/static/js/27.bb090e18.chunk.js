(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[27],{891:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),a=n.n(r),c=n(27),s=n(22),i=n.n(s),o=n(40),u=n(25),l=n(47),h=n(379),p=n(406),j=n(466),f=n(46),x=n(18),d=n(167),b=n(2);function O(){var e=Object(l.b)(),t=a.a.useState([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=a.a.useState(""),O=Object(u.a)(s,2),m=O[0],A=O[1],v="CREATOR_ROLE",g=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.next=4,d.a.create(v,m);case 4:e(x.alertActions.show(x.alertMessage.ACTION_SUCCESS,"success")),C(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(x.alertActions.show(x.alertMessage.ACTION_FAILURE,"error")),e(x.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.next=4,d.a.remove(v,n);case 4:e(x.alertActions.show(x.alertMessage.ACTION_SUCCESS,"success")),C(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(x.alertActions.show(x.alertMessage.ACTION_FAILURE,"error")),e(x.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,d.a.getAll();case 5:t.t1=t.sent,(0,t.t0)(t.t1),e(x.loadingActions.hide()),t.next=14;break;case 10:t.prev=10,t.t2=t.catch(1),e(x.loadingActions.hide()),e(x.alertActions.show(x.alertMessage.FETCH_FAILURE,"error"));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){C()}),[]),Object(b.jsx)(f.l,{title:"Danh s\xe1ch t\u1ea1o h\u1ee3p \u0111\u1ed3ng",children:Object(b.jsxs)(h.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(b.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(f.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:m,onChange:function(e){A(e.target.value)}})}),Object(b.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(f.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){g()}})}),Object(b.jsx)(h.a,{item:!0,xs:12,children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(h.a,{item:!0,xs:12,children:r.filter((function(e){return e.role===v})).map((function(e,t){return Object(b.jsx)(j.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){w(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}function m(){var e=Object(l.b)(),t=a.a.useState([]),n=Object(u.a)(t,2),r=n[0],c=n[1],s=a.a.useState(""),O=Object(u.a)(s,2),m=O[0],A=O[1],v="APPROVER_ROLE",g=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.next=4,d.a.create(v,m);case 4:e(x.alertActions.show(x.alertMessage.ACTION_SUCCESS,"success")),C(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(x.alertActions.show(x.alertMessage.ACTION_FAILURE,"error")),e(x.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.next=4,d.a.remove(v,n);case 4:e(x.alertActions.show(x.alertMessage.ACTION_SUCCESS,"success")),C(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(x.alertActions.show(x.alertMessage.ACTION_FAILURE,"error")),e(x.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=Object(o.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,d.a.getAll();case 5:t.t1=t.sent,(0,t.t0)(t.t1),e(x.loadingActions.hide()),t.next=14;break;case 10:t.prev=10,t.t2=t.catch(1),e(x.loadingActions.hide()),e(x.alertActions.show(x.alertMessage.FETCH_FAILURE,"error"));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){C()}),[]),Object(b.jsx)(f.l,{title:"Danh s\xe1ch ph\xea duy\u1ec7t h\u1ee3p \u0111\u1ed3ng",children:Object(b.jsxs)(h.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(b.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(f.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:m,onChange:function(e){A(e.target.value)}})}),Object(b.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(b.jsx)(f.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){g()}})}),Object(b.jsx)(h.a,{item:!0,xs:12,children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(h.a,{item:!0,xs:12,children:r.filter((function(e){return e.role===v})).map((function(e,t){return Object(b.jsx)(j.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){w(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}function A(){var e=Object(c.i)().path;return Object(b.jsxs)(c.c,{children:[Object(b.jsx)(c.a,{path:"".concat(e,"/creators"),component:O}),Object(b.jsx)(c.a,{path:"".concat(e,"/approvers"),component:m})]})}}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[32],{891:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(209),c=n(25),r=n(0),o=n.n(r),s=n(27),i=n(47),l=n(18),u=n(107),b=n(15),p=n(13),h=n(22),d=n.n(h),f=n(40),j=n(211),m=n(380),x=n(70),O=n(46),v=n(9),A=n.n(v),g="/api/hcm/employees";var k={getAll:function(){return A.a.get(g)},create:function(e){return A.a.post("".concat(g,"/addUser"),e)},lock:function(e){return A.a.put("".concat(g,"/lockUser/").concat(e))},unLock:function(e){return A.a.put("".concat(g,"/unLockUser/").concat(e))},reset:function(e){return A.a.put("".concat(g,"/resetUser/").concat(e))},addUserFromExcel:function(e){var t=new FormData;return t.append("files",e,e.name),A.a.post("".concat(g,"/addFromExcel"),t,{headers:{"Content-Type":"multipart/form-data"}})}},w=n(2),C=[{id:"sortNumber",label:"M\xe3 s\u1ed1",numeric:!1,sortable:!0},{id:"fullName",label:"H\u1ecd t\xean",numeric:!1,sortable:!0},{id:"email",label:"Email",numeric:!1,sortable:!1},{id:"action",label:"",numeric:!1,sortable:!1}],y={number:"",fullName:"",email:""};function S(){var e,t=Object(i.b)(),n=o.a.useState(!1),a=Object(c.a)(n,2),r=a[0],s=a[1],u=o.a.useState(!1),h=Object(c.a)(u,2),v=h[0],A=h[1],g=o.a.useState([]),S=Object(c.a)(g,2),N=S[0],T=S[1],E=o.a.useState(y),F=Object(c.a)(E,2),I=F[0],M=F[1],U=o.a.useState(!1),L=Object(c.a)(U,2),_=L[0],R=L[1],q=o.a.useState(),z=Object(c.a)(q,2),H=z[0],P=z[1],J=o.a.useState(!1),K=Object(c.a)(J,2),B=K[0],D=K[1],G=o.a.useState([]),Q=Object(c.a)(G,2),V=Q[0],W=Q[1],X=function(){D(!1)},Y=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===H){e.next=18;break}return R(!1),W([]),t(l.loadingActions.show()),e.prev=4,e.t0=W,e.next=8,k.addUserFromExcel(H);case 8:e.t1=e.sent,(0,e.t0)(e.t1),ce(),D(!0),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(4),t(l.loadingActions.hide()),t(l.alertActions.show(l.alertMessage.ACTION_FAILURE,"error"));case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),Z=function(e){M(Object(p.a)(Object(p.a)({},I),{},Object(b.a)({},e.target.name,e.target.value)))},$=function(){var e=Object(f.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(l.loadingActions.show()),e.prev=1,e.next=4,k.lock(n);case 4:t(l.alertActions.show(l.alertMessage.ACTION_SUCCESS,"success")),ce(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(l.alertActions.show(l.alertMessage.ACTION_FAILURE,"error")),t(l.loadingActions.hide());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(l.loadingActions.show()),e.prev=1,e.next=4,k.unLock(n);case 4:t(l.alertActions.show(l.alertMessage.ACTION_SUCCESS,"success")),ce(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(l.alertActions.show(l.alertMessage.ACTION_FAILURE,"error")),t(l.loadingActions.hide());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(f.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(l.loadingActions.show()),e.prev=1,e.next=4,k.reset(n);case 4:t(l.alertActions.show(l.alertMessage.ACTION_SUCCESS,"success")),ce(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(l.alertActions.show(l.alertMessage.ACTION_FAILURE,"error")),t(l.loadingActions.hide());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s(!1),t(l.loadingActions.show()),e.prev=2,!v){e.next=6;break}e.next=8;break;case 6:return e.next=8,k.create(I);case 8:t(l.alertActions.show(l.alertMessage.ACTION_SUCCESS,"success")),ce(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),t(l.alertActions.show(l.alertMessage.ACTION_FAILURE,"error")),t(l.loadingActions.hide());case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),ae=[Object(w.jsx)(O.n,{tooltip:"Th\xeam nh\xe2n vi\xean m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",hideTitleOnMobile:!0,onClick:function(){M(y),A(!1),s(!0)}},1),Object(w.jsx)(O.n,{tooltip:"T\u1ea1o t\u1eeb file excel",text:"Excel",icon:"file-excel",color:"primary",onClick:function(){R(!0)}},2)],ce=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(l.loadingActions.show()),e.prev=1,e.t0=T,e.next=5,k.getAll();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),t(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error"));case 12:return e.prev=12,t(l.loadingActions.hide()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){ce()}),[]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(O.k,{open:B,onClose:X,title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",onSubmit:X,children:Object(w.jsx)(m.a,{container:!0,spacing:1,children:V.map((function(e,t){return Object(w.jsxs)(m.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(w.jsx)(m.a,{item:!0,xs:12,md:3,style:{color:e.isAdded?"green":"red"},children:Object(w.jsx)(x.a,{variant:"subtitle2",children:"".concat(e.number,"-").concat(e.fullName)})}),!e.isAdded&&Object(w.jsx)(m.a,{item:!0,xs:12,md:9,style:{color:e.isAdded?"green":"red"},children:Object(w.jsx)(x.a,{variant:"caption",children:e.message})})]},t)}))})}),Object(w.jsx)(O.k,{open:_,onClose:function(){R(!1)},title:"T\u1ea3i t\u1ec7p excel",onSubmit:Y,children:Object(w.jsx)(j.a,{acceptedFiles:[".xls",".xlsx"],showPreviews:!1,showFileNames:!0,filesLimit:1,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&P(e[0])},showAlerts:!1})}),Object(w.jsxs)(O.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda nh\xe2n vi\xean",open:r,onClose:function(){s(!1)},onSubmit:ne,children:[Object(w.jsx)(O.p,{name:"number",label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",type:"text",required:!0,value:I.number,onChange:Z}),Object(w.jsx)(O.p,{name:"fullName",label:"H\u1ecd v\xe0 t\xean",type:"text",required:!0,value:I.fullName,onChange:Z}),Object(w.jsx)(O.p,{name:"email",label:"Email",type:"text",value:I.email,required:!0,onChange:Z})]}),Object(w.jsx)(O.f,{title:"Nh\xe2n vi\xean",columns:C,data:(e=N,e.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{sortNumber:parseInt(e.number,10),action:Object(w.jsxs)(w.Fragment,{children:[e.isActive?Object(w.jsx)(O.n,{tooltip:"Nh\u1ea5n v\xe0o \u0111\u1ec3 kh\xf3a",text:"\u0110ang m\u1edf",icon:"lock-open",color:"success",hideTitleOnMobile:!0,onClick:function(){$(e.number)}}):Object(w.jsx)(O.n,{tooltip:"Nh\u1ea5n v\xe0o \u0111\u1ec3 m\u1edf kh\xf3a",text:"\u0110ang kh\xf3a",icon:"lock",color:"danger",hideTitleOnMobile:!0,onClick:function(){ee(e.number)}}),Object(w.jsx)(O.n,{tooltip:"\u0110\u1eb7t l\u1ea1i t\xe0i kho\u1ea3n v\u1ec1 m\u1eb7c \u0111\u1ecbnh",text:"\u0110\u1eb7t l\u1ea1i",icon:"sync-alt",color:"primary",hideTitleOnMobile:!0,onClick:function(){te(e.number)}})]})})}))),actions:ae,initialOrderBy:"sortNumber"})]})}function N(){var e=Object(s.i)().path;return Object(w.jsx)(s.c,{children:Object(w.jsx)(s.a,{path:"".concat(e,"/employees"),component:S})})}var T=o.a.lazy((function(){return n.e(33).then(n.bind(null,873))}));function E(){var e=Object(s.i)().path,t=Object(i.b)(),n=o.a.useState(!1),r=Object(c.a)(n,2),b=r[0],p=r[1];return o.a.useEffect((function(){t(l.layoutActions.setActivePluginId(u.e.id)),Object(u.b)().then((function(e){p(e)})).catch((function(){p(!1)}))}),[]),o.a.useEffect((function(){var e=b?Object(a.a)(u.a):[];t(l.layoutActions.setMenuList([].concat(Object(a.a)(u.d),Object(a.a)(e))))}),[b]),Object(w.jsxs)(s.c,{children:[b&&Object(w.jsx)(s.a,{path:"".concat(e,"/admin"),component:T}),Object(w.jsx)(s.a,{path:"".concat(e),component:N})]})}}}]);
//# sourceMappingURL=32.b19b2f51.chunk.js.map
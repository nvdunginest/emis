(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[24],{874:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var a=n(208),r=n(25),c=n(0),s=n.n(c),o=n(27),i=n(47),u=n(18),l=n(104),p=n(13),j=n(22),d=n.n(j),b=n(40),m=n(46),h=n(9),x=n.n(h),O=function(e){return"/api/".concat(e,"/moderators")};var f={getModerators:function(e){return x.a.get(O(e))},createModerator:function(e,t){return x.a.post("".concat(O(e),"/createMod/").concat(t))},removeModerator:function(e,t){return x.a.delete("".concat(O(e),"/removeMod/").concat(t))}},g=n(2),v=[{id:"userNumber",label:"M\xe3 s\u1ed1",numeric:!1,sortable:!0},{id:"role",label:"Role",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function w(){var e,t=Object(i.b)(),n=Object(o.h)().moduleName,a=s.a.useState(!1),c=Object(r.a)(a,2),l=c[0],j=c[1],h=s.a.useState([]),x=Object(r.a)(h,2),O=x[0],w=x[1],A=s.a.useState(""),C=Object(r.a)(A,2),S=C[0],y=C[1],E=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!1),t(u.loadingActions.show()),e.prev=2,e.next=5,f.createModerator(n,S);case 5:t(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),I(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),t(u.loadingActions.hide());case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(b.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.loadingActions.show()),e.prev=1,e.next=4,f.removeModerator(n,a);case 4:t(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),I(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),t(u.loadingActions.hide());case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),k=[Object(g.jsx)(m.n,{tooltip:"Th\xeam qu\u1ea3n l\xfd m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",hideTitleOnMobile:!0,onClick:function(){y(""),j(!0)}},1)],I=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(u.loadingActions.show()),e.prev=1,e.t0=w,e.next=5,f.getModerators(n);case 5:e.t1=e.sent.filter((function(e){return"MOD_ROLE"===e.role})),(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),t(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 12:return e.prev=12,t(u.loadingActions.hide()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){I()}),[n]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.k,{title:"Th\xeam qu\u1ea3n l\xfd",open:l,onClose:function(){j(!1)},onSubmit:E,children:Object(g.jsx)(m.p,{name:"number",label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",type:"text",value:S,required:!0,onChange:function(e){y(e.target.value)}})}),Object(g.jsx)(m.f,{title:n,columns:v,data:(e=O,e.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{action:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m.n,{tooltip:"X\xf3a qu\u1ea3n l\xfd",text:"X\xf3a",icon:"trash-alt",color:"danger",hideTitleOnMobile:!0,onClick:function(){M(e.userNumber)}})})})}))),actions:k,initialOrderBy:"userNumber"})]})}var A=n(15),C=n(379),S="/api/configuration/emailConfig";var y={get:function(){return x.a.get(S)},set:function(e){return x.a.post(S,e)}},E={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function M(){var e=Object(i.b)(),t=s.a.useState(E),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),l=Object(r.a)(o,2),j=l[0],h=l[1],x=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.next=4,y.get();case 4:n=t.sent,c(Object(p.a)(Object(p.a)({},n),{},{portString:n.port.toFixed(0)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 11:return t.prev=11,e(u.loadingActions.hide()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),O=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={from:a.from,password:a.password,port:parseInt(a.portString,10),smtpServer:a.smtpServer,userName:a.userName},e(u.loadingActions.show()),t.prev=2,t.next=5,y.set(n);case 5:e(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),x(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),e(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),e(u.loadingActions.hide());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){x()}),[]),Object(g.jsx)(m.l,{title:"Email",children:Object(g.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"smtpServer",label:"Smtp server",value:a.smtpServer,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"portString",label:"Port",value:a.portString,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"from",label:"From",value:a.from,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"userName",label:"Username",value:a.userName,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"password",label:"Password",value:a.password,type:j?"text":"password",onChange:O})}),Object(g.jsxs)(C.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:f})}),Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){h(!0)},onMouseUp:function(){h(!1)}})})]})]})})}var k=n(70),I="/api/configuration/resetPasswordEmailTemplate";var N={get:function(){return x.a.get(I)},set:function(e){return x.a.post(I,e)}},T={subject:"",content:""};function F(){var e=Object(i.b)(),t=s.a.useState(T),n=Object(r.a)(t,2),a=n[0],c=n[1],o=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,N.get();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(u.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}(),l=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},j=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.next=4,N.set(a);case 4:e(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),o(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),e(u.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){o()}),[]),Object(g.jsx)(m.l,{title:"Reset Password Email",children:Object(g.jsxs)(C.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(g.jsx)(C.a,{item:!0,xs:12,md:12,children:Object(g.jsx)(m.p,{name:"subject",label:"Smtp server",value:a.subject,type:"text",onChange:l})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"content",multiline:!0,rows:16,label:"Port",value:a.content,type:"text",onChange:l})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:a.content}})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:j})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(k.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}var U="/api/configuration/sapConnectionConfig";var _={get:function(){return x.a.get(U)},set:function(e){return x.a.post(U,e)}},L={url:"",client:"",username:"",password:""};function R(){var e=Object(i.b)(),t=s.a.useState(L),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),l=Object(r.a)(o,2),j=l[0],h=l[1],x=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,_.get();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(u.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}(),O=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.next=4,_.set(a);case 4:e(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),x(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),e(u.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){x()}),[]),Object(g.jsx)(m.l,{title:"Sap Connection",children:Object(g.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"url",label:"Url",value:a.url,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"client",label:"Client",value:a.client,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"username",label:"Username",value:a.username,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"password",label:"Password",value:a.password,type:j?"text":"password",onChange:O})}),Object(g.jsxs)(C.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:f})}),Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){h(!0)},onMouseUp:function(){h(!1)}})})]})]})})}var P="/api/configuration/biddingEmailConfig";var H={get:function(){return x.a.get(P)},set:function(e){return x.a.post(P,e)}},q={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function D(){var e=Object(i.b)(),t=s.a.useState(q),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),l=Object(r.a)(o,2),j=l[0],h=l[1],x=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.next=4,H.get();case 4:n=t.sent,c(Object(p.a)(Object(p.a)({},n),{},{portString:n.port.toFixed(0)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 11:return t.prev=11,e(u.loadingActions.hide()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}(),O=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},f=function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={from:a.from,password:a.password,port:parseInt(a.portString,10),smtpServer:a.smtpServer,userName:a.userName},e(u.loadingActions.show()),t.prev=2,t.next=5,H.set(n);case 5:e(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),x(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),e(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),e(u.loadingActions.hide());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){x()}),[]),Object(g.jsx)(m.l,{title:"Bidding Email",children:Object(g.jsxs)(C.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"smtpServer",label:"Smtp server",value:a.smtpServer,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"portString",label:"Port",value:a.portString,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"from",label:"From",value:a.from,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"userName",label:"Username",value:a.userName,type:"text",onChange:O})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"password",label:"Password",value:a.password,type:j?"text":"password",onChange:O})}),Object(g.jsxs)(C.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:f})}),Object(g.jsx)(C.a,{item:!0,children:Object(g.jsx)(m.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){h(!0)},onMouseUp:function(){h(!1)}})})]})]})})}var B="/api/configuration/biddingResetPasswordEmailTemplate";var J={get:function(){return x.a.get(B)},set:function(e){return x.a.post(B,e)}},X={subject:"",content:""};function z(){var e=Object(i.b)(),t=s.a.useState(X),n=Object(r.a)(t,2),a=n[0],c=n[1],o=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,J.get();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(u.alertActions.show(u.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(u.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}(),l=function(e){c(Object(p.a)(Object(p.a)({},a),{},Object(A.a)({},e.target.name,e.target.value)))},j=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.loadingActions.show()),t.prev=1,t.next=4,J.set(a);case 4:e(u.alertActions.show(u.alertMessage.ACTION_SUCCESS,"success")),o(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.alertActions.show(u.alertMessage.ACTION_FAILURE,"error")),e(u.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return s.a.useEffect((function(){o()}),[]),Object(g.jsx)(m.l,{title:"Bidding Reset Password Email",children:Object(g.jsxs)(C.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(g.jsx)(C.a,{item:!0,xs:12,md:12,children:Object(g.jsx)(m.p,{name:"subject",label:"Smtp server",value:a.subject,type:"text",onChange:l})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.p,{name:"content",multiline:!0,rows:16,label:"Port",value:a.content,type:"text",onChange:l})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("div",{dangerouslySetInnerHTML:{__html:a.content}})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(m.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:j})}),Object(g.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(k.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}function G(){var e=Object(o.i)().path;return Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"".concat(e,"/moderators/:moduleName"),component:w}),Object(g.jsx)(o.a,{path:"".concat(e,"/email"),component:M}),Object(g.jsx)(o.a,{path:"".concat(e,"/reset-password-email"),component:F}),Object(g.jsx)(o.a,{path:"".concat(e,"/sap-connection"),component:R}),Object(g.jsx)(o.a,{path:"".concat(e,"/bidding-email"),component:D}),Object(g.jsx)(o.a,{path:"".concat(e,"/bidding-reset-password-email"),component:z})]})}var K=s.a.lazy((function(){return n.e(25).then(n.bind(null,868))}));function Q(){var e=Object(o.i)().path,t=Object(i.b)(),n=s.a.useState(!1),c=Object(r.a)(n,2),p=c[0],j=c[1];return s.a.useEffect((function(){t(u.layoutActions.setActivePluginId(l.e.id)),Object(l.b)().then((function(e){j(e)})).catch((function(){j(!1)}))}),[]),s.a.useEffect((function(){var e=p?Object(a.a)(l.a):[];t(u.layoutActions.setMenuList([].concat(Object(a.a)(l.d),Object(a.a)(e))))}),[p]),Object(g.jsxs)(o.c,{children:[p&&Object(g.jsx)(o.a,{path:"".concat(e,"/admin"),component:K}),Object(g.jsx)(o.a,{path:"".concat(e),component:G})]})}}}]);
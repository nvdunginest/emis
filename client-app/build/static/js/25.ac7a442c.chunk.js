(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[25],{1109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var a=n(142),r=n(15),c=n(0),s=n.n(c),o=n(26),i=n(55),u=n(97),l=n(16),p=n(23),j=n.n(p),b=n(41),d=n(9),m=n.n(d),x=function(e){return"/api/".concat(e,"/moderators")};var O={getModerators:function(e){return m.a.get(x(e))},createModerator:function(e,t){return m.a.post("".concat(x(e),"/createMod/").concat(t))},removeModerator:function(e,t){return m.a.delete("".concat(x(e),"/removeMod/").concat(t))}},h=n(48),f=n(111),v=n(1),g=[{id:"userNumber",label:"M\xe3 s\u1ed1",numeric:!1,sortable:!0},{id:"role",label:"Role",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function w(){var e,t=s.a.useContext(f.a),n=t.showAlert,a=t.showBackdrop,c=t.hideBackdrop,i=Object(o.i)().moduleName,u=s.a.useState(!1),p=Object(r.a)(u,2),d=p[0],m=p[1],x=s.a.useState([]),w=Object(r.a)(x,2),C=w[0],S=w[1],k=s.a.useState(""),E=Object(r.a)(k,2),y=E[0],I=E[1],A=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!1),a(),e.prev=2,e.next=5,O.createModerator(i,y);case 5:n(f.b.ACTION_SUCCESS,"success"),F(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),n(f.b.ACTION_FAILURE,"error"),c();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,O.removeModerator(i,t);case 4:n(f.b.ACTION_SUCCESS,"success"),F(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n(f.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),T=[Object(v.jsx)(h.n,{tooltip:"Th\xeam qu\u1ea3n l\xfd m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",hideTitleOnMobile:!0,onClick:function(){I(""),m(!0)}},1)],F=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.t0=S,e.next=5,O.getModerators(i);case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),c(),n(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){F()}),[i]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.k,{title:"Th\xeam qu\u1ea3n l\xfd",open:d,onClose:function(){m(!1)},onSubmit:A,children:Object(v.jsx)(h.p,{name:"number",label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",type:"text",value:y,required:!0,onChange:function(e){I(e.target.value)}})}),Object(v.jsx)(h.f,{title:i,columns:g,data:(e=C,e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{action:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(h.n,{tooltip:"X\xf3a qu\u1ea3n l\xfd",text:"X\xf3a",icon:"trash-alt",color:"danger",hideTitleOnMobile:!0,onClick:function(){N(e.userNumber)}})})})}))),actions:T,initialOrderBy:"userNumber"})]})}var C=n(18),S=n(345),k="/api/configuration/emailConfig";var E={get:function(){return m.a.get(k)},set:function(e){return m.a.post(k,e)}},y={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function I(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,c=s.a.useState(y),o=Object(r.a)(c,2),i=o[0],u=o[1],p=s.a.useState(!1),d=Object(r.a)(p,2),m=d[0],x=d[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,E.get();case 4:r=e.sent,u(Object(l.a)(Object(l.a)({},r),{},{portString:r.port.toFixed(0)})),a(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),a(),t(f.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(j.a.mark((function e(){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={from:i.from,password:i.password,port:parseInt(i.portString,10),smtpServer:i.smtpServer,userName:i.userName},n(),e.prev=2,e.next=5,E.set(r);case 5:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(f.b.ACTION_FAILURE,"error"),a();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.l,{title:"Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"smtpServer",label:"Smtp server",value:i.smtpServer,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"portString",label:"Port",value:i.portString,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"from",label:"From",value:i.from,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"userName",label:"Username",value:i.userName,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"password",label:"Password",value:i.password,type:m?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var A=n(81),N="/api/configuration/resetPasswordEmailTemplate";var T={get:function(){return m.a.get(N)},set:function(e){return m.a.post(N,e)}},F={subject:"",content:""};function U(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,c=s.a.useState(F),o=Object(r.a)(c,2),i=o[0],u=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,T.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),a(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),a(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,T.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),p(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),a();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){p()}),[]),Object(v.jsx)(h.l,{title:"Reset Password Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(v.jsx)(h.p,{name:"subject",label:"Smtp server",value:i.subject,type:"text",onChange:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"content",multiline:!0,rows:16,label:"Port",value:i.content,type:"text",onChange:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:i.content}})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}var _="/api/configuration/sapConnectionConfig";var L={get:function(){return m.a.get(_)},set:function(e){return m.a.post(_,e)}},M={url:"",client:"",username:"",password:""};function R(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,c=s.a.useState(M),o=Object(r.a)(c,2),i=o[0],u=o[1],p=s.a.useState(!1),d=Object(r.a)(p,2),m=d[0],x=d[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,L.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),a(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),a(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,L.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),a();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.l,{title:"Sap Connection",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"url",label:"Url",value:i.url,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"client",label:"Client",value:i.client,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"username",label:"Username",value:i.username,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"password",label:"Password",value:i.password,type:m?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var B="/api/configuration/biddingEmailConfig";var P={get:function(){return m.a.get(B)},set:function(e){return m.a.post(B,e)}},H={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function q(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,c=s.a.useState(H),o=Object(r.a)(c,2),i=o[0],u=o[1],p=s.a.useState(!1),d=Object(r.a)(p,2),m=d[0],x=d[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,P.get();case 4:r=e.sent,u(Object(l.a)(Object(l.a)({},r),{},{portString:r.port.toFixed(0)})),a(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),a(),t(f.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(j.a.mark((function e(){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={from:i.from,password:i.password,port:parseInt(i.portString,10),smtpServer:i.smtpServer,userName:i.userName},n(),e.prev=2,e.next=5,P.set(r);case 5:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(f.b.ACTION_FAILURE,"error"),a();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.l,{title:"Bidding Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"smtpServer",label:"Smtp server",value:i.smtpServer,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"portString",label:"Port",value:i.portString,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"from",label:"From",value:i.from,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"userName",label:"Username",value:i.userName,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"password",label:"Password",value:i.password,type:m?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.n,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var D="/api/configuration/biddingResetPasswordEmailTemplate";var J={get:function(){return m.a.get(D)},set:function(e){return m.a.post(D,e)}},X={subject:"",content:""};function z(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,c=s.a.useState(X),o=Object(r.a)(c,2),i=o[0],u=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,J.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),a(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),a(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},m=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,J.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),p(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),a();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){p()}),[]),Object(v.jsx)(h.l,{title:"Bidding Reset Password Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(v.jsx)(h.p,{name:"subject",label:"Smtp server",value:i.subject,type:"text",onChange:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.p,{name:"content",multiline:!0,rows:16,label:"Port",value:i.content,type:"text",onChange:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:i.content}})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.n,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}function G(){var e=Object(o.j)().path;return Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"".concat(e,"/moderators/:moduleName"),component:w}),Object(v.jsx)(o.b,{path:"".concat(e,"/email"),component:I}),Object(v.jsx)(o.b,{path:"".concat(e,"/reset-password-email"),component:U}),Object(v.jsx)(o.b,{path:"".concat(e,"/sap-connection"),component:R}),Object(v.jsx)(o.b,{path:"".concat(e,"/bidding-email"),component:q}),Object(v.jsx)(o.b,{path:"".concat(e,"/bidding-reset-password-email"),component:z})]})}var K=s.a.lazy((function(){return n.e(26).then(n.bind(null,1097))}));function Q(){var e=Object(o.j)().path,t=s.a.useContext(i.a),n=t.changeSideMenuList,c=t.changeActivePluginId,l=s.a.useState(!1),p=Object(r.a)(l,2),j=p[0],b=p[1];return s.a.useEffect((function(){c(u.e.id),Object(u.b)().then((function(e){b(e)})).catch((function(){b(!1)}))}),[]),s.a.useEffect((function(){n(j?[].concat(Object(a.a)(u.d),Object(a.a)(u.a)):u.d)}),[j]),Object(v.jsxs)(o.d,{children:[j&&Object(v.jsx)(o.b,{path:"".concat(e,"/admin"),component:K}),Object(v.jsx)(o.b,{path:"".concat(e),component:G})]})}}}]);
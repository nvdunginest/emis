(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[20],{715:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var r=n(168),a=n(14),c=n(0),s=n.n(c),o=n(30),i=n(60),u=n(108),l=n(20),j=n(29),p=n.n(j),b=n(45),m=n(10),d=n.n(m),x=function(e){return"/api/".concat(e,"/moderators")};var O={getModerators:function(e){return d.a.get(x(e))},createModerator:function(e,t){return d.a.post("".concat(x(e),"/createMod/").concat(t))},removeModerator:function(e,t){return d.a.delete("".concat(x(e),"/removeMod/").concat(t))}},h=n(22),f=n(126),v=n(1),g=[{id:"userNumber",label:"M\xe3 s\u1ed1",numeric:!1,sortable:!0},{id:"role",label:"Role",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function w(){var e,t=s.a.useContext(f.a),n=t.showAlert,r=t.showBackdrop,c=t.hideBackdrop,i=Object(o.i)().moduleName,u=s.a.useState(!1),j=Object(a.a)(u,2),m=j[0],d=j[1],x=s.a.useState([]),w=Object(a.a)(x,2),C=w[0],S=w[1],k=s.a.useState(""),E=Object(a.a)(k,2),y=E[0],I=E[1],A=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!1),r(),e.prev=2,e.next=5,O.createModerator(i,y);case 5:n(f.b.ACTION_SUCCESS,"success"),F(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),n(f.b.ACTION_FAILURE,"error"),c();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.prev=1,e.next=4,O.removeModerator(i,t);case 4:n(f.b.ACTION_SUCCESS,"success"),F(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n(f.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),T=[Object(v.jsx)(h.o,{tooltip:"Th\xeam qu\u1ea3n l\xfd m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",hideTitleOnMobile:!0,onClick:function(){I(""),d(!0)}},1)],F=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.prev=1,e.t0=S,e.next=5,O.getModerators(i);case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),c(),n(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){F()}),[i]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(h.l,{title:"Th\xeam qu\u1ea3n l\xfd",open:m,onClose:function(){d(!1)},onSubmit:A,children:Object(v.jsx)(h.r,{name:"number",label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",type:"text",value:y,required:!0,onChange:function(e){I(e.target.value)}})}),Object(v.jsx)(h.g,{title:i,columns:g,data:(e=C,e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{action:Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(h.o,{tooltip:"X\xf3a qu\u1ea3n l\xfd",text:"X\xf3a",icon:"trash-alt",color:"danger",hideTitleOnMobile:!0,onClick:function(){N(e.userNumber)}})})})}))),actions:T,initialOrderBy:"userNumber"})]})}var C=n(17),S=n(483),k="/api/configuration/emailConfig";var E={get:function(){return d.a.get(k)},set:function(e){return d.a.post(k,e)}},y={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function I(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,c=s.a.useState(y),o=Object(a.a)(c,2),i=o[0],u=o[1],j=s.a.useState(!1),m=Object(a.a)(j,2),d=m[0],x=m[1],O=function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,E.get();case 4:a=e.sent,u(Object(l.a)(Object(l.a)({},a),{},{portString:a.port.toFixed(0)})),r(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r(),t(f.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={from:i.from,password:i.password,port:parseInt(i.portString,10),smtpServer:i.smtpServer,userName:i.userName},n(),e.prev=2,e.next=5,E.set(a);case 5:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(f.b.ACTION_FAILURE,"error"),r();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.m,{title:"Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"smtpServer",label:"Smtp server",value:i.smtpServer,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"portString",label:"Port",value:i.portString,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"from",label:"From",value:i.from,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"userName",label:"Username",value:i.userName,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"password",label:"Password",value:i.password,type:d?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var A=n(56),N="/api/configuration/resetPasswordEmailTemplate";var T={get:function(){return d.a.get(N)},set:function(e){return d.a.post(N,e)}},F={subject:"",content:""};function U(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,c=s.a.useState(F),o=Object(a.a)(c,2),i=o[0],u=o[1],j=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,T.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,T.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),j(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){j()}),[]),Object(v.jsx)(h.m,{title:"Reset Password Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(v.jsx)(h.r,{name:"subject",label:"Smtp server",value:i.subject,type:"text",onChange:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"content",multiline:!0,rows:16,label:"Port",value:i.content,type:"text",onChange:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:i.content}})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}var _="/api/configuration/sapConnectionConfig";var L={get:function(){return d.a.get(_)},set:function(e){return d.a.post(_,e)}},M={url:"",client:"",username:"",password:""};function R(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,c=s.a.useState(M),o=Object(a.a)(c,2),i=o[0],u=o[1],j=s.a.useState(!1),m=Object(a.a)(j,2),d=m[0],x=m[1],O=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,L.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,L.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.m,{title:"Sap Connection",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"url",label:"Url",value:i.url,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"client",label:"Client",value:i.client,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"username",label:"Username",value:i.username,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"password",label:"Password",value:i.password,type:d?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var B="/api/configuration/biddingEmailConfig";var P={get:function(){return d.a.get(B)},set:function(e){return d.a.post(B,e)}},H={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function q(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,c=s.a.useState(H),o=Object(a.a)(c,2),i=o[0],u=o[1],j=s.a.useState(!1),m=Object(a.a)(j,2),d=m[0],x=m[1],O=function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,P.get();case 4:a=e.sent,u(Object(l.a)(Object(l.a)({},a),{},{portString:a.port.toFixed(0)})),r(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r(),t(f.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={from:i.from,password:i.password,port:parseInt(i.portString,10),smtpServer:i.smtpServer,userName:i.userName},n(),e.prev=2,e.next=5,P.set(a);case 5:t(f.b.ACTION_SUCCESS,"success"),O(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(f.b.ACTION_FAILURE,"error"),r();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){O()}),[]),Object(v.jsx)(h.m,{title:"Bidding Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"smtpServer",label:"Smtp server",value:i.smtpServer,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"portString",label:"Port",value:i.portString,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"from",label:"From",value:i.from,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"userName",label:"Username",value:i.userName,type:"text",onChange:g})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"password",label:"Password",value:i.password,type:d?"text":"password",onChange:g})}),Object(v.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(v.jsx)(S.a,{item:!0,children:Object(v.jsx)(h.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){x(!0)},onMouseUp:function(){x(!1)}})})]})]})})}var D="/api/configuration/biddingResetPasswordEmailTemplate";var J={get:function(){return d.a.get(D)},set:function(e){return d.a.post(D,e)}},X={subject:"",content:""};function z(){var e=s.a.useContext(f.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,c=s.a.useState(X),o=Object(a.a)(c,2),i=o[0],u=o[1],j=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=u,e.next=5,J.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(f.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(e){u(Object(l.a)(Object(l.a)({},i),{},Object(C.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,J.set(i);case 4:t(f.b.ACTION_SUCCESS,"success"),j(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(f.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){j()}),[]),Object(v.jsx)(h.m,{title:"Bidding Reset Password Email",children:Object(v.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(v.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(v.jsx)(h.r,{name:"subject",label:"Smtp server",value:i.subject,type:"text",onChange:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.r,{name:"content",multiline:!0,rows:16,label:"Port",value:i.content,type:"text",onChange:m})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:i.content}})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(h.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:d})}),Object(v.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(v.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}function G(){var e=Object(o.j)().path;return Object(v.jsxs)(o.d,{children:[Object(v.jsx)(o.b,{path:"".concat(e,"/moderators/:moduleName"),component:w}),Object(v.jsx)(o.b,{path:"".concat(e,"/email"),component:I}),Object(v.jsx)(o.b,{path:"".concat(e,"/reset-password-email"),component:U}),Object(v.jsx)(o.b,{path:"".concat(e,"/sap-connection"),component:R}),Object(v.jsx)(o.b,{path:"".concat(e,"/bidding-email"),component:q}),Object(v.jsx)(o.b,{path:"".concat(e,"/bidding-reset-password-email"),component:z})]})}var K=s.a.lazy((function(){return n.e(21).then(n.bind(null,703))}));function Q(){var e=Object(o.j)().path,t=s.a.useContext(i.a),n=t.changeSideMenuList,c=t.changeActivePluginId,l=s.a.useState(!1),j=Object(a.a)(l,2),p=j[0],b=j[1];return s.a.useEffect((function(){c(u.e.id),Object(u.b)().then((function(e){b(e)})).catch((function(){b(!1)}))}),[]),s.a.useEffect((function(){n(p?[].concat(Object(r.a)(u.d),Object(r.a)(u.a)):u.d)}),[p]),Object(v.jsxs)(o.d,{children:[p&&Object(v.jsx)(o.b,{path:"".concat(e,"/admin"),component:K}),Object(v.jsx)(o.b,{path:"".concat(e),component:G})]})}}}]);
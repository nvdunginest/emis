(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[13],{707:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var a=n(1),r=n(147),c=n(15),s=n(0),o=n.n(s),i=n(29),u=n(57),l=n(101),j=n(19),p=n(28),b=n.n(p),m=n(42),d=n(11),x=n.n(d),O=function(e){return"/api/".concat(e,"/moderators")};var h={getModerators:function(e){return x.a.get(O(e))},createModerator:function(e,t){return x.a.post("".concat(O(e),"/createMod/").concat(t))},removeModerator:function(e,t){return x.a.delete("".concat(O(e),"/removeMod/").concat(t))}},f=n(22),v=n(113),g=[{id:"userNumber",label:"M\xe3 s\u1ed1",numeric:!1,sortable:!0},{id:"role",label:"Role",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function w(){var e,t=o.a.useContext(v.a),n=t.showAlert,r=t.showBackdrop,s=t.hideBackdrop,u=Object(i.i)().moduleName,l=o.a.useState(!1),p=Object(c.a)(l,2),d=p[0],x=p[1],O=o.a.useState([]),w=Object(c.a)(O,2),C=w[0],S=w[1],k=o.a.useState(""),E=Object(c.a)(k,2),y=E[0],I=E[1],A=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),r(),e.prev=2,e.next=5,h.createModerator(u,y);case 5:n(v.b.ACTION_SUCCESS,"success"),F(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),n(v.b.ACTION_FAILURE,"error"),s();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.prev=1,e.next=4,h.removeModerator(u,t);case 4:n(v.b.ACTION_SUCCESS,"success"),F(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),n(v.b.ACTION_FAILURE,"error"),s();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),T=[Object(a.jsx)(f.o,{tooltip:"Th\xeam qu\u1ea3n l\xfd m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",hideTitleOnMobile:!0,onClick:function(){I(""),x(!0)}},1)],F=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.prev=1,e.t0=S,e.next=5,h.getModerators(u);case 5:e.t1=e.sent,(0,e.t0)(e.t1),s(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),s(),n(v.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){F()}),[u]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.l,{title:"Th\xeam qu\u1ea3n l\xfd",open:d,onClose:function(){x(!1)},onSubmit:A,children:Object(a.jsx)(f.q,{name:"number",label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",type:"text",value:y,required:!0,onChange:function(e){I(e.target.value)}})}),Object(a.jsx)(f.g,{title:u,columns:g,data:(e=C,e.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{action:Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f.o,{tooltip:"X\xf3a qu\u1ea3n l\xfd",text:"X\xf3a",icon:"trash-alt",color:"danger",hideTitleOnMobile:!0,onClick:function(){N(e.userNumber)}})})})}))),actions:T,initialOrderBy:"userNumber"})]})}var C=n(16),S=n(443),k="/api/configuration/emailConfig";var E={get:function(){return x.a.get(k)},set:function(e){return x.a.post(k,e)}},y={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function I(){var e=o.a.useContext(v.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,s=o.a.useState(y),i=Object(c.a)(s,2),u=i[0],l=i[1],p=o.a.useState(!1),d=Object(c.a)(p,2),x=d[0],O=d[1],h=function(){var e=Object(m.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,E.get();case 4:a=e.sent,l(Object(j.a)(Object(j.a)({},a),{},{portString:a.port.toFixed(0)})),r(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r(),t(v.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){l(Object(j.a)(Object(j.a)({},u),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(m.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={from:u.from,password:u.password,port:parseInt(u.portString,10),smtpServer:u.smtpServer,userName:u.userName},n(),e.prev=2,e.next=5,E.set(a);case 5:t(v.b.ACTION_SUCCESS,"success"),h(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(v.b.ACTION_FAILURE,"error"),r();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){h()}),[]),Object(a.jsx)(f.m,{title:"Email",children:Object(a.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"smtpServer",label:"Smtp server",value:u.smtpServer,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"portString",label:"Port",value:u.portString,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"from",label:"From",value:u.from,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"userName",label:"Username",value:u.userName,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"password",label:"Password",value:u.password,type:x?"text":"password",onChange:g})}),Object(a.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){O(!0)},onMouseUp:function(){O(!1)}})})]})]})})}var A=n(50),N="/api/configuration/resetPasswordEmailTemplate";var T={get:function(){return x.a.get(N)},set:function(e){return x.a.post(N,e)}},F={subject:"",content:""};function U(){var e=o.a.useContext(v.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,s=o.a.useState(F),i=Object(c.a)(s,2),u=i[0],l=i[1],p=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=l,e.next=5,T.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(v.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){l(Object(j.a)(Object(j.a)({},u),{},Object(C.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,T.set(u);case 4:t(v.b.ACTION_SUCCESS,"success"),p(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(v.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){p()}),[]),Object(a.jsx)(f.m,{title:"Reset Password Email",children:Object(a.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(a.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(a.jsx)(f.q,{name:"subject",label:"Smtp server",value:u.subject,type:"text",onChange:d})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"content",multiline:!0,rows:16,label:"Port",value:u.content,type:"text",onChange:d})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:u.content}})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:x})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}var _="/api/configuration/sapConnectionConfig";var q={get:function(){return x.a.get(_)},set:function(e){return x.a.post(_,e)}},L={url:"",client:"",username:"",password:""};function M(){var e=o.a.useContext(v.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,s=o.a.useState(L),i=Object(c.a)(s,2),u=i[0],l=i[1],p=o.a.useState(!1),d=Object(c.a)(p,2),x=d[0],O=d[1],h=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=l,e.next=5,q.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(v.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){l(Object(j.a)(Object(j.a)({},u),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,q.set(u);case 4:t(v.b.ACTION_SUCCESS,"success"),h(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(v.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){h()}),[]),Object(a.jsx)(f.m,{title:"Sap Connection",children:Object(a.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"url",label:"Url",value:u.url,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"client",label:"Client",value:u.client,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"username",label:"Username",value:u.username,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"password",label:"Password",value:u.password,type:x?"text":"password",onChange:g})}),Object(a.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){O(!0)},onMouseUp:function(){O(!1)}})})]})]})})}var R="/api/configuration/biddingEmailConfig";var B={get:function(){return x.a.get(R)},set:function(e){return x.a.post(R,e)}},P={from:"",password:"",port:0,portString:"0",smtpServer:"",userName:""};function H(){var e=o.a.useContext(v.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,s=o.a.useState(P),i=Object(c.a)(s,2),u=i[0],l=i[1],p=o.a.useState(!1),d=Object(c.a)(p,2),x=d[0],O=d[1],h=function(){var e=Object(m.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,B.get();case 4:a=e.sent,l(Object(j.a)(Object(j.a)({},a),{},{portString:a.port.toFixed(0)})),r(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),r(),t(v.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(e){l(Object(j.a)(Object(j.a)({},u),{},Object(C.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(m.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={from:u.from,password:u.password,port:parseInt(u.portString,10),smtpServer:u.smtpServer,userName:u.userName},n(),e.prev=2,e.next=5,B.set(a);case 5:t(v.b.ACTION_SUCCESS,"success"),h(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(v.b.ACTION_FAILURE,"error"),r();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){h()}),[]),Object(a.jsx)(f.m,{title:"Bidding Email",children:Object(a.jsxs)(S.a,{container:!0,spacing:1,alignItems:"flex-end",children:[Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"smtpServer",label:"Smtp server",value:u.smtpServer,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"portString",label:"Port",value:u.portString,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"from",label:"From",value:u.from,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"userName",label:"Username",value:u.userName,type:"text",onChange:g})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"password",label:"Password",value:u.password,type:x?"text":"password",onChange:g})}),Object(a.jsxs)(S.a,{item:!0,xs:12,md:6,container:!0,spacing:1,children:[Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:w})}),Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(f.o,{text:"Show password",color:"danger",icon:"eye",variant:"contained",onMouseDown:function(){O(!0)},onMouseUp:function(){O(!1)}})})]})]})})}var D="/api/configuration/biddingResetPasswordEmailTemplate";var J={get:function(){return x.a.get(D)},set:function(e){return x.a.post(D,e)}},X={subject:"",content:""};function z(){var e=o.a.useContext(v.a),t=e.showAlert,n=e.showBackdrop,r=e.hideBackdrop,s=o.a.useState(X),i=Object(c.a)(s,2),u=i[0],l=i[1],p=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=l,e.next=5,J.get();case 5:e.t1=e.sent,(0,e.t0)(e.t1),r(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),r(),t(v.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){l(Object(j.a)(Object(j.a)({},u),{},Object(C.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,J.set(u);case 4:t(v.b.ACTION_SUCCESS,"success"),p(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(v.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){p()}),[]),Object(a.jsx)(f.m,{title:"Bidding Reset Password Email",children:Object(a.jsxs)(S.a,{container:!0,spacing:1,alignItems:"stretch",children:[Object(a.jsx)(S.a,{item:!0,xs:12,md:12,children:Object(a.jsx)(f.q,{name:"subject",label:"Smtp server",value:u.subject,type:"text",onChange:d})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.q,{name:"content",multiline:!0,rows:16,label:"Port",value:u.content,type:"text",onChange:d})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:u.content}})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(f.o,{text:"L\u01b0u l\u1ea1i",icon:"save",variant:"contained",onClick:x})}),Object(a.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(a.jsx)(A.a,{variant:"caption",children:"{FullName}: H\u1ecd t\xean ng\u01b0\u1eddi g\u1eedi | {Link}: \u0110\u01b0\u1eddng d\u1eabn reset password"})})]})})}function G(){var e=Object(i.j)().path;return Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"".concat(e,"/moderators/:moduleName"),component:w}),Object(a.jsx)(i.b,{path:"".concat(e,"/email"),component:I}),Object(a.jsx)(i.b,{path:"".concat(e,"/reset-password-email"),component:U}),Object(a.jsx)(i.b,{path:"".concat(e,"/sap-connection"),component:M}),Object(a.jsx)(i.b,{path:"".concat(e,"/bidding-email"),component:H}),Object(a.jsx)(i.b,{path:"".concat(e,"/bidding-reset-password-email"),component:z})]})}var K=o.a.lazy((function(){return n.e(14).then(n.bind(null,696))}));function Q(){var e=Object(i.j)().path,t=o.a.useContext(u.a),n=t.changeSideMenuList,s=t.changeActivePluginId,j=o.a.useState(!1),p=Object(c.a)(j,2),b=p[0],m=p[1];return o.a.useEffect((function(){s(l.e.id),Object(l.b)().then((function(e){m(e)})).catch((function(){m(!1)}))}),[]),o.a.useEffect((function(){n(b?[].concat(Object(r.a)(l.d),Object(r.a)(l.a)):l.d)}),[b]),Object(a.jsxs)(i.d,{children:[b&&Object(a.jsx)(i.b,{path:"".concat(e,"/admin"),component:K}),Object(a.jsx)(i.b,{path:"".concat(e),component:G})]})}}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[27],{1096:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n(168),c=n(14),s=n(0),r=n.n(s),o=n(30),i=n(60),j=n(104),u=n(22),b=n(1);function d(){return Object(b.jsx)(u.f,{text:"ECOBA MANAGEMENT INFORMATION SYSTEM"})}var h=n(29),l=n.n(h),O=n(45),x=n(17),p=n(20),m=n(483),f=n(70),w=n(126),v={oldPassword:"",newPassword:"",confirmPassword:""};function g(){var e=r.a.useContext(w.a),t=e.showAlert,n=e.showBackdrop,a=e.hideBackdrop,s=r.a.useState(v),o=Object(c.a)(s,2),i=o[0],j=o[1],d=function(e){j(Object(p.a)(Object(p.a)({},i),{},Object(x.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,f.a.changePassword(i);case 4:t(w.b.ACTION_SUCCESS,"success"),a(),j(v),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t(w.b.ACTION_FAILURE,"error"),a();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(u.m,{title:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",children:Object(b.jsxs)(m.a,{container:!0,alignItems:"flex-end",children:[Object(b.jsxs)(m.a,{container:!0,item:!0,xs:12,md:6,spacing:2,children:[Object(b.jsx)(m.a,{item:!0,xs:12,children:Object(b.jsx)(u.r,{name:"oldPassword",label:"M\u1eadt kh\u1ea9u hi\u1ec7n t\u1ea1i",value:i.oldPassword,type:"password",onChange:d})}),Object(b.jsx)(m.a,{item:!0,xs:12,children:Object(b.jsx)(u.r,{name:"newPassword",label:"M\u1eadt kh\u1ea9u m\u1edbi",value:i.newPassword,type:"password",onChange:d})}),Object(b.jsx)(m.a,{item:!0,xs:12,children:Object(b.jsx)(u.r,{name:"confirmPassword",label:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u",value:i.confirmPassword,type:"password",onChange:d})}),Object(b.jsx)(m.a,{item:!0,xs:12,container:!0,spacing:1,children:Object(b.jsx)(m.a,{item:!0,children:Object(b.jsx)(u.o,{text:"\u0110\u1ed5i m\u1eadt kh\u1ea9u",icon:"sync-alt",variant:"contained",onClick:h})})})]}),Object(b.jsx)(m.a,{container:!0,item:!0,xs:12,md:6})]})})}function k(){var e=Object(o.j)().path;return Object(b.jsx)(o.d,{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{exact:!0,path:"".concat(e),component:d}),Object(b.jsx)(o.b,{path:"".concat(e,"change-password"),component:g})]})})}var C=r.a.lazy((function(){return n.e(28).then(n.bind(null,1075))}));function P(){var e=Object(o.j)().path,t=r.a.useContext(i.a),n=t.changeSideMenuList,s=t.changeActivePluginId,u=r.a.useState(!1),d=Object(c.a)(u,2),h=d[0],l=d[1];return r.a.useEffect((function(){s(j.e.id),Object(j.b)().then((function(e){l(e)})).catch((function(){l(!1)}))}),[]),r.a.useEffect((function(){var e=h?Object(a.a)(j.a):[];n([].concat(Object(a.a)(j.d),Object(a.a)(e)))}),[h]),Object(b.jsxs)(o.d,{children:[h&&Object(b.jsx)(o.b,{path:"".concat(e,"/admin"),component:C}),Object(b.jsx)(o.b,{path:"".concat(e),component:k})]})}}}]);
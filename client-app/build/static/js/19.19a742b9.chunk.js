(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[19],{471:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),o=(a(5),a(3)),i=a(6),s=a(10),l=a(7),u=a(211),d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.color,d=void 0===s?"secondary":s,p=e.edge,h=void 0!==p&&p,b=e.size,m=void 0===b?"medium":b,g=Object(r.a)(e,["classes","className","color","edge","size"]),j=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(o.a)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===m&&a["size".concat(Object(l.a)(m))])},c.createElement(u.a,Object(n.a)({type:"checkbox",icon:j,checkedIcon:j,classes:{root:Object(o.a)(a.switchBase,a["color".concat(Object(l.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),c.createElement("span",{className:a.track}))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(d)},877:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(0),r=a.n(n),c=a(27),o=a(22),i=a.n(o),s=a(40),l=a(15),u=a(13),d=a(25),p=a(47),h=a(46),b=a(18),m=a(597),g=a(2),j=[{id:"category",label:"Nh\xf3m",numeric:!1,sortable:!0},{id:"name",label:"Module",numeric:!1,sortable:!0},{id:"description",label:"M\xf4 t\u1ea3",numeric:!1,sortable:!1},{id:"action",label:"",numeric:!1,sortable:!1}],f={id:0,category:"",name:"",description:""};function x(){var e,t=Object(p.b)(),a=Object(c.f)(),n=r.a.useState(!1),o=Object(d.a)(n,2),x=o[0],O=o[1],v=r.a.useState(!1),k=Object(d.a)(v,2),y=k[0],A=k[1],w=r.a.useState([]),C=Object(d.a)(w,2),S=C[0],E=C[1],I=r.a.useState(f),M=Object(d.a)(I,2),N=M[0],T=M[1],$=function(e){T(Object(u.a)(Object(u.a)({},N),{},Object(l.a)({},e.target.name,e.target.value)))},R=function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(!1),t(b.loadingActions.show()),e.prev=2,!y){e.next=8;break}return e.next=6,m.a.edit(N.id,N);case 6:e.next=11;break;case 8:return a={name:N.name,category:N.category,description:N.description},e.next=11,m.a.create(a);case 11:t(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),_(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),t(b.loadingActions.hide());case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}(),U=[Object(g.jsx)(h.n,{tooltip:"Th\xeam module m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){T(f),A(!1),O(!0)}},1)],_=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b.loadingActions.show()),e.prev=1,e.t0=E,e.next=5,m.a.getAll();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),t(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"));case 12:return e.prev=12,t(b.loadingActions.hide()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){_()}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(h.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda module",open:x,onClose:function(){O(!1)},onSubmit:R,children:[Object(g.jsx)(h.p,{name:"category",label:"Nh\xf3m",type:"text",required:!0,value:N.category,onChange:$}),Object(g.jsx)(h.p,{name:"name",label:"T\xean module",type:"text",required:!0,value:N.name,onChange:$}),Object(g.jsx)(h.p,{name:"description",label:"M\xf4 t\u1ea3",type:"text",value:N.description,required:!0,onChange:$})]}),Object(g.jsx)(h.f,{title:"Module",columns:j,data:(e=S,e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{action:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(h.n,{tooltip:"Ng\u01b0\u1eddi h\u1ed7 tr\u1ee3",text:"H\u1ed7 tr\u1ee3",icon:"user-astronaut",color:"primary",onClick:function(){a.push("/help-desk/admin/modules/".concat(e.id))}}),Object(g.jsx)(h.n,{tooltip:"Ch\u1ec9nh s\u1eeda module",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){T(e),A(!0),O(!0)}(e)}}),Object(g.jsx)(h.n,{tooltip:"X\xf3a module",text:"X\xf3a",icon:"trash-alt",color:"danger"})]})})}))),actions:U,initialOrderBy:"category"})]})}var O=a(379),v=a(405),k=a(466),y=a(9),A=a.n(y),w=function(e){return"/api/help-desk/modules/".concat(e,"/supporters")};var C={getAll:function(e){return A.a.get(w(e))},create:function(e,t){var a={keyword:t};return A.a.post(w(e),a)},remove:function(e,t){return A.a.delete("".concat(w(e),"/").concat(t))}},S={id:0,category:"",name:"",description:""};function E(){var e=Object(p.b)(),t=Object(c.h)().moduleId,a=r.a.useState(S),n=Object(d.a)(a,2),o=n[0],l=n[1],u=r.a.useState([]),j=Object(d.a)(u,2),f=j[0],x=j[1],y=r.a.useState(""),A=Object(d.a)(y,2),w=A[0],E=A[1],I=function(){e(b.loadingActions.show()),Promise.all([m.a.get(t),C.getAll(t)]).then((function(e){l(e[0]),x(e[1])})).catch((function(){e(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"))})).finally((function(){e(b.loadingActions.hide())}))},M=function(){var a=Object(s.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==w){a.next=4;break}e(b.alertActions.show(b.alertMessage.REQUIRED_FAILURE,"error")),a.next=16;break;case 4:return e(b.loadingActions.show()),a.prev=5,a.next=8,C.create(t,w);case 8:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),I(),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(5),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 16:case"end":return a.stop()}}),a,null,[[5,12]])})));return function(){return a.apply(this,arguments)}}(),N=function(){var a=Object(s.a)(i.a.mark((function a(n){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e(b.loadingActions.show()),a.prev=1,a.next=4,C.remove(t,n);case 4:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),I(),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}();return r.a.useEffect((function(){I()}),[]),Object(g.jsx)(h.l,{title:o.name,children:Object(g.jsxs)(O.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(g.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(h.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean/H\u1ecd t\xean/Email",required:!0,type:"text",value:w,onChange:function(e){E(e.target.value)}})}),Object(g.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(h.n,{icon:"user-astronaut",color:"primary",text:"Th\xeam ng\u01b0\u1eddi h\u1ed7 tr\u1ee3",variant:"contained",onClick:function(){M()}})}),Object(g.jsx)(O.a,{item:!0,xs:12,children:Object(g.jsx)(v.a,{})}),Object(g.jsx)(O.a,{item:!0,xs:12,children:f.map((function(e,t){return Object(g.jsx)(k.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){N(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}var I=a(194);function M(){var e=Object(p.b)(),t=r.a.useState([]),a=Object(d.a)(t,2),n=a[0],c=a[1],o=r.a.useState(""),l=Object(d.a)(o,2),u=l[0],m=l[1],j="USER_ROLE",f=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.next=4,I.a.create(j,u);case 4:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),y(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.next=4,I.a.remove(j,a);case 4:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),y(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,I.a.getAll();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(b.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){y()}),[]),Object(g.jsx)(h.l,{title:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng",children:Object(g.jsxs)(O.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(g.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(h.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:u,onChange:function(e){m(e.target.value)}})}),Object(g.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(g.jsx)(h.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){f()}})}),Object(g.jsx)(O.a,{item:!0,xs:12,children:Object(g.jsx)(v.a,{})}),Object(g.jsx)(O.a,{item:!0,xs:12,children:n.filter((function(e){return e.role===j})).map((function(e,t){return Object(g.jsx)(k.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){x(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}var N=a(70),T=a(471),$="/api/help-desk/pluginConfigs";var R={getPluginMode:function(){return A.a.get("".concat($,"/getPluginMode"))},setPluginMode:function(e){return A.a.post("".concat($,"/setPluginMode"),e)}};function U(){var e=Object(p.b)(),t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],o=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={allowAll:a.target.checked},e(b.loadingActions.show()),t.prev=2,t.next=5,R.setPluginMode(n);case 5:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),l(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,R.getPluginMode();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(b.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){l()}),[]),Object(g.jsx)(O.a,{container:!0,spacing:2,children:Object(g.jsx)(O.a,{item:!0,xs:12,children:Object(g.jsx)(h.l,{title:"C\xe0i \u0111\u1eb7t hi\u1ec3n th\u1ecb",children:Object(g.jsx)(O.a,{container:!0,spacing:1,children:Object(g.jsx)(O.a,{item:!0,xs:12,children:Object(g.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(g.jsx)(N.a,{variant:"subtitle2",children:"Hi\u1ec3n th\u1ecb v\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng"}),Object(g.jsx)(T.a,{checked:n,color:"primary",onChange:o,inputProps:{"aria-label":"primary checkbox"}})]})})})})})})}function _(){var e=Object(c.i)().path;return Object(g.jsxs)(c.c,{children:[Object(g.jsx)(c.a,{exact:!0,path:"".concat(e,"/modules"),component:x}),Object(g.jsx)(c.a,{path:"".concat(e,"/modules/:moduleId"),component:E}),Object(g.jsx)(c.a,{path:"".concat(e,"/users"),component:M}),Object(g.jsx)(c.a,{path:"".concat(e,"/settings"),component:U})]})}}}]);
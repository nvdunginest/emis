(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[23],{471:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),o=(a(5),a(3)),i=a(6),s=a(10),l=a(7),d=a(211),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.color,u=void 0===s?"secondary":s,p=e.edge,h=void 0!==p&&p,g=e.size,b=void 0===g?"medium":g,m=Object(r.a)(e,["classes","className","color","edge","size"]),f=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(o.a)(a.root,i,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===b&&a["size".concat(Object(l.a)(b))])},c.createElement(d.a,Object(n.a)({type:"checkbox",icon:f,checkedIcon:f,classes:{root:Object(o.a)(a.switchBase,a["color".concat(Object(l.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),c.createElement("span",{className:a.track}))}));t.a=Object(i.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},890:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var n=a(0),r=a.n(n),c=a(27),o=a(22),i=a.n(o),s=a(40),l=a(25),d=a(47),u=a(379),p=a(70),h=a(471),g=a(46),b=a(18),m=a(9),f=a.n(m),j="/api/timekeeper/pluginConfigs";var x={getPluginMode:function(){return f.a.get("".concat(j,"/getPluginMode"))},setPluginMode:function(e){return f.a.post("".concat(j,"/setPluginMode"),e)}},k=a(2);function v(){var e=Object(d.b)(),t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],c=a[1],o=function(){var t=Object(s.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={allowAll:a.target.checked},e(b.loadingActions.show()),t.prev=2,t.next=5,x.setPluginMode(n);case 5:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),m(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,x.getPluginMode();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(b.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){m()}),[]),Object(k.jsx)(u.a,{container:!0,spacing:2,children:Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(g.l,{title:"C\xe0i \u0111\u1eb7t hi\u1ec3n th\u1ecb",children:Object(k.jsx)(u.a,{container:!0,spacing:1,children:Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(k.jsx)(p.a,{variant:"subtitle2",children:"Hi\u1ec3n th\u1ecb v\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng"}),Object(k.jsx)(h.a,{checked:n,color:"primary",onChange:o,inputProps:{"aria-label":"primary checkbox"}})]})})})})})})}var O=a(405),y=a(466),w=a(198);function A(){var e=Object(d.b)(),t=r.a.useState([]),a=Object(l.a)(t,2),n=a[0],c=a[1],o=r.a.useState(""),p=Object(l.a)(o,2),h=p[0],m=p[1],f="USER_ROLE",j=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.next=4,w.a.create(f,h);case 4:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),v(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.next=4,w.a.remove(f,a);case 4:e(b.alertActions.show(b.alertMessage.ACTION_SUCCESS,"success")),v(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(b.alertActions.show(b.alertMessage.ACTION_FAILURE,"error")),e(b.loadingActions.hide());case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(b.loadingActions.show()),t.prev=1,t.t0=c,t.next=5,w.a.getAll();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),e(b.alertActions.show(b.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(b.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return r.a.useEffect((function(){v()}),[]),Object(k.jsx)(g.l,{title:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng",children:Object(k.jsxs)(u.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(k.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(g.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:h,onChange:function(e){m(e.target.value)}})}),Object(k.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(g.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){j()}})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:Object(k.jsx)(O.a,{})}),Object(k.jsx)(u.a,{item:!0,xs:12,children:n.filter((function(e){return e.role===f})).map((function(e,t){return Object(k.jsx)(y.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){x(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}function C(){var e=Object(c.i)().path;return Object(k.jsxs)(c.c,{children:[Object(k.jsx)(c.a,{path:"".concat(e,"/settings"),component:v}),Object(k.jsx)(c.a,{path:"".concat(e,"/users"),component:A})]})}}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[24],{1125:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a(0),n=a.n(r),c=a(26),i=a(23),o=a.n(i),s=a(41),l=a(15),d=a(345),p=a(81),u=a(495),h=a(311),b=a(378),m=a(48),g=a(111),j=a(196),x=a(9),f=a.n(x),k="/api/timekeeper/pluginConfigs";var y={getPluginMode:function(){return f.a.get("".concat(k,"/getPluginMode"))},setPluginMode:function(e){return f.a.post("".concat(k,"/setPluginMode"),e)}},O=a(1);function v(){var e=n.a.useContext(g.a),t=e.showAlert,a=e.showBackdrop,r=e.hideBackdrop,c=n.a.useState([]),i=Object(l.a)(c,2),x=i[0],f=i[1],k=n.a.useState(""),v=Object(l.a)(k,2),w=v[0],C=v[1],$=n.a.useState(!1),S=Object(l.a)($,2),I=S[0],A=S[1],E=function(){var e=Object(s.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={allowAll:n.target.checked},a(),e.prev=2,e.next=5,y.setPluginMode(c);case 5:t(g.b.ACTION_SUCCESS,"success"),U(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(g.b.ACTION_FAILURE,"error"),r();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,j.a.create("User",w);case 4:t(g.b.ACTION_SUCCESS,"success"),U(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(g.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,j.a.remove("User",n);case 4:t(g.b.ACTION_SUCCESS,"success"),U(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(g.b.ACTION_FAILURE,"error"),r();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.t0=f,e.next=5,j.a.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=A,e.next=10,y.getPluginMode();case 10:e.t3=e.sent,(0,e.t2)(e.t3),r(),e.next=19;break;case 15:e.prev=15,e.t4=e.catch(1),r(),t(g.b.FETCH_FAILURE,"error");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){U()}),[]),Object(O.jsxs)(d.a,{container:!0,spacing:2,children:[Object(O.jsx)(d.a,{item:!0,xs:12,children:Object(O.jsx)(m.l,{title:"C\xe0i \u0111\u1eb7t hi\u1ec3n th\u1ecb",children:Object(O.jsx)(d.a,{container:!0,spacing:1,children:Object(O.jsx)(d.a,{item:!0,xs:12,children:Object(O.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(p.a,{variant:"subtitle2",children:"Hi\u1ec3n th\u1ecb v\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng"}),Object(O.jsx)(u.a,{checked:I,color:"primary",onChange:E,inputProps:{"aria-label":"primary checkbox"}})]})})})})}),Object(O.jsx)(d.a,{item:!0,xs:12,children:Object(O.jsx)(m.l,{title:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng",children:Object(O.jsxs)(d.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(O.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(m.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:w,onChange:function(e){C(e.target.value)}})}),Object(O.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(m.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){N()}})}),Object(O.jsx)(d.a,{item:!0,xs:12,children:Object(O.jsx)(h.a,{})}),Object(O.jsx)(d.a,{item:!0,xs:12,children:x.map((function(e,t){return Object(O.jsx)(b.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){z(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})})]})}function w(){var e=Object(c.j)().path;return Object(O.jsx)(c.d,{children:Object(O.jsx)(c.b,{path:"".concat(e,"/settings"),component:v})})}},495:function(e,t,a){"use strict";var r=a(2),n=a(4),c=a(0),i=(a(5),a(3)),o=a(6),s=a(11),l=a(7),d=a(161),p=c.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.color,p=void 0===s?"secondary":s,u=e.edge,h=void 0!==u&&u,b=e.size,m=void 0===b?"medium":b,g=Object(n.a)(e,["classes","className","color","edge","size"]),j=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(i.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===m&&a["size".concat(Object(l.a)(m))])},c.createElement(d.a,Object(r.a)({type:"checkbox",icon:j,checkedIcon:j,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(l.a)(p))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),c.createElement("span",{className:a.track}))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(p)}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[9],{519:function(e,t,a){"use strict";var r=a(11),n=a.n(r),c="/api/ebi/pluginConfigs";var i={getPluginMode:function(){return n.a.get("".concat(c,"/getPluginMode"))},setPluginMode:function(e){return n.a.post("".concat(c,"/setPluginMode"),e)}};t.a=i},544:function(e,t,a){"use strict";var r=a(2),n=a(4),c=a(0),i=(a(5),a(3)),o=a(6),s=a(10),l=a(7),d=a(170),u=c.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.color,u=void 0===s?"secondary":s,p=e.edge,h=void 0!==p&&p,b=e.size,m=void 0===b?"medium":b,g=Object(n.a)(e,["classes","className","color","edge","size"]),j=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(i.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[h],"small"===m&&a["size".concat(Object(l.a)(m))])},c.createElement(d.a,Object(r.a)({type:"checkbox",icon:j,checkedIcon:j,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(l.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},g)),c.createElement("span",{className:a.track}))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},732:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(1),n=a(0),c=a.n(n),i=a(29),o=a(28),s=a.n(o),l=a(42),d=a(15),u=a(447),p=a(50),h=a(544),b=a(227),m=a(475),g=a(21),j=a(115),x=a(181),f=a(519);function k(){var e=c.a.useContext(j.a),t=e.showAlert,a=e.showBackdrop,n=e.hideBackdrop,i=c.a.useState([]),o=Object(d.a)(i,2),k=o[0],y=o[1],O=c.a.useState(""),v=Object(d.a)(O,2),w=v[0],C=v[1],$=c.a.useState(!1),S=Object(d.a)($,2),I=S[0],A=S[1],E=function(){var e=Object(l.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={allowAll:r.target.checked},a(),e.prev=2,e.next=5,f.a.setPluginMode(c);case 5:t(j.b.ACTION_SUCCESS,"success"),U(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(j.b.ACTION_FAILURE,"error"),n();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,x.a.create("User",w);case 4:t(j.b.ACTION_SUCCESS,"success"),U(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),n();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,x.a.remove("User",r);case 4:t(j.b.ACTION_SUCCESS,"success"),U(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),n();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.t0=y,e.next=5,x.a.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=A,e.next=10,f.a.getPluginMode();case 10:e.t3=e.sent,(0,e.t2)(e.t3),n(),e.next=19;break;case 15:e.prev=15,e.t4=e.catch(1),n(),t(j.b.FETCH_FAILURE,"error");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){U()}),[]),Object(r.jsxs)(u.a,{container:!0,spacing:2,children:[Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)(g.m,{title:"C\xe0i \u0111\u1eb7t hi\u1ec3n th\u1ecb",children:Object(r.jsx)(u.a,{container:!0,spacing:1,children:Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(r.jsx)(p.a,{variant:"subtitle2",children:"Hi\u1ec3n th\u1ecb v\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng"}),Object(r.jsx)(h.a,{checked:I,color:"primary",onChange:E,inputProps:{"aria-label":"primary checkbox"}})]})})})})}),Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)(g.m,{title:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng",children:Object(r.jsxs)(u.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(r.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(g.r,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:w,onChange:function(e){C(e.target.value)}})}),Object(r.jsx)(u.a,{item:!0,xs:12,md:6,children:Object(r.jsx)(g.o,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){N()}})}),Object(r.jsx)(u.a,{item:!0,xs:12,children:Object(r.jsx)(b.a,{})}),Object(r.jsx)(u.a,{item:!0,xs:12,children:k.map((function(e,t){return Object(r.jsx)(m.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){z(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})})]})}function y(){var e=Object(i.j)().path;return Object(r.jsx)(i.d,{children:Object(r.jsx)(i.b,{path:"".concat(e,"/settings"),component:k})})}}}]);
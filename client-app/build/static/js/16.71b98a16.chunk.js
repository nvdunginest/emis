(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[16],{1101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(0),r=a.n(n),c=a(25),i=a(530),o=a(23),s=a.n(o),l=a(41),u=a(17),d=a(338),p=a(98),b=a(594),h=a(303),j=a(366),m=a(48),x=a(109),g=a(150),f=a(10),O=a.n(f),v="/api/library/pluginConfigs";var k={getPluginMode:function(){return O.a.get("".concat(v,"/getPluginMode"))},setPluginMode:function(e){return O.a.post("".concat(v,"/setPluginMode"),e)}},y=a(2);function C(){var e=r.a.useContext(x.a),t=e.showAlert,a=e.showBackdrop,n=e.hideBackdrop,c=r.a.useState([]),i=Object(u.a)(c,2),o=i[0],f=i[1],O=r.a.useState([]),v=Object(u.a)(O,2),C=v[0],w=v[1],S=r.a.useState(""),N=Object(u.a)(S,2),$=N[0],I=N[1],A=r.a.useState(!1),E=Object(u.a)(A,2),T=E[0],z=E[1],R=function(){var e=Object(l.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={allowAll:r.target.checked},a(),e.prev=2,e.next=5,k.setPluginMode(c);case 5:t(x.b.ACTION_SUCCESS,"success"),L(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(x.b.ACTION_FAILURE,"error"),n();case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,g.c.create(r,$);case 4:t(x.b.ACTION_SUCCESS,"success"),L(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(x.b.ACTION_FAILURE,"error"),n();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark((function e(r,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,g.c.remove(c,r);case 4:t(x.b.ACTION_SUCCESS,"success"),L(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(x.b.ACTION_FAILURE,"error"),n();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(s.a.mark((function e(){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.prev=1,e.next=4,g.c.getAll();case 4:return r=e.sent,f(r.filter((function(e){return e.role===g.b}))),w(r.filter((function(e){return e.role===g.a}))),e.t0=z,e.next=10,k.getPluginMode();case 10:e.t1=e.sent,(0,e.t0)(e.t1),n(),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(1),n(),t(x.b.FETCH_FAILURE,"error");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){L()}),[]),Object(y.jsxs)(d.a,{container:!0,spacing:2,children:[Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(m.l,{title:"C\xe0i \u0111\u1eb7t hi\u1ec3n th\u1ecb",children:Object(y.jsx)(d.a,{container:!0,spacing:1,children:Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(y.jsx)(p.a,{variant:"subtitle2",children:"Hi\u1ec3n th\u1ecb v\u1edbi t\u1ea5t c\u1ea3 ng\u01b0\u1eddi d\xf9ng"}),Object(y.jsx)(b.a,{checked:T,color:"primary",onChange:R,inputProps:{"aria-label":"primary checkbox"}})]})})})})}),Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(m.l,{title:"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng",children:Object(y.jsxs)(d.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(m.p,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:$,onChange:function(e){I(e.target.value)}})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(m.n,{icon:"plus",color:"primary",text:"Th\xeam ng\u01b0\u1eddi xem",variant:"contained",onClick:function(){U("Viewer")}})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(m.n,{icon:"plus",color:"primary",text:"Th\xeam ng\u01b0\u1eddi t\u1ea1o",variant:"contained",onClick:function(){U("Creator")}})}),Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(h.a,{})}),Object(y.jsxs)(d.a,{item:!0,xs:12,children:[Object(y.jsx)(p.a,{variant:"body2",children:"Ng\u01b0\u1eddi xem"}),o.map((function(e,t){return Object(y.jsx)(j.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){_(e.userNumber,"Viewer")},color:"primary",variant:"outlined",size:"small"},t)}))]}),Object(y.jsxs)(d.a,{item:!0,xs:12,children:[Object(y.jsx)(p.a,{variant:"body2",children:"Ng\u01b0\u1eddi t\u1ea1o b\xe0i vi\u1ebft"}),C.map((function(e,t){return Object(y.jsx)(j.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){_(e.userNumber,"Creator")},color:"primary",variant:"outlined",size:"small"},t)}))]})]})})})]})}function w(){var e=Object(c.j)().path;return Object(y.jsxs)(c.d,{children:[Object(y.jsx)(c.b,{path:"".concat(e,"/create-post"),component:i.a}),Object(y.jsx)(c.b,{path:"".concat(e,"/settings"),component:C})]})}},530:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(23),r=a.n(n),c=a(41),i=a(17),o=a(0),s=a.n(o),l=a(25),u=a(338),d=a(48),p=a(31),b=a(109),h=a(436),j=a(449),m=a(2);function x(){var e=s.a.useContext(b.a),t=e.showAlert,a=e.showBackdrop,n=e.hideBackdrop,o=s.a.useContext(j.a),x=o.state,g=o.refresh,f=Object(l.g)(),O=s.a.useState(""),v=Object(i.a)(O,2),k=v[0],y=v[1],C=s.a.useState(""),w=Object(i.a)(C,2),S=w[0],N=w[1],$=s.a.useState(0),I=Object(i.a)($,2),A=I[0],E=I[1],T=function(){var e=Object(c.a)(r.a.mark((function e(){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={content:S,title:k,parentId:A},a(),e.prev=2,e.next=5,h.a.create(c);case 5:i=e.sent,n(),t(b.b.ACTION_SUCCESS,"success"),f.push("/library/posts/".concat(i)),g(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),n(),t(b.b.ACTION_FAILURE,"error");case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)(u.a,{container:!0,spacing:1,children:[Object(m.jsx)(u.a,{item:!0,xs:12,children:Object(m.jsx)(d.p,{label:"Ti\xeau \u0111\u1ec1",required:!0,value:k,onChange:function(e){y(e.target.value)}})}),Object(m.jsx)(u.a,{item:!0,xs:12,children:Object(m.jsx)(d.d,{options:x.posts,optionLabel:"title",label:"Thu\u1ed9c v\u1ec1",required:!0,getOptionSelected:function(e,t){return e.id===t.id},value:x.posts.find((function(e){return e.id===A})),onChange:function(e){null!==e&&E(e.id)}})}),Object(m.jsx)(u.a,{item:!0,xs:12,children:Object(m.jsx)(p.b,{label:"N\u1ed9i dung",required:!0,value:S,onChange:function(e){N(e)}})}),Object(m.jsx)(u.a,{item:!0,xs:12,children:Object(m.jsx)(d.n,{variant:"contained",text:"L\u01b0u l\u1ea1i",color:"success",icon:"plus",onClick:T})})]})}},594:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),i=(a(5),a(3)),o=a(6),s=a(11),l=a(7),u=a(159),d=c.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.color,d=void 0===s?"secondary":s,p=e.edge,b=void 0!==p&&p,h=e.size,j=void 0===h?"medium":h,m=Object(r.a)(e,["classes","className","color","edge","size"]),x=c.createElement("span",{className:a.thumb});return c.createElement("span",{className:Object(i.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[b],"small"===j&&a["size".concat(Object(l.a)(j))])},c.createElement(u.a,Object(n.a)({type:"checkbox",icon:x,checkedIcon:x,classes:{root:Object(i.a)(a.switchBase,a["color".concat(Object(l.a)(d))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),c.createElement("span",{className:a.track}))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(d)}}]);
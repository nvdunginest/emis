(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[7],{470:function(e,t,n){"use strict";var a=n(1),i=n(17),c=n(4),o=n(0),r=n(3),s=(n(5),n(131)),d=n(6),l=n(34),u=n(48),b=n(19),p=n(11),m=o.forwardRef((function(e,t){var n=e.children,d=e.classes,m=e.className,h=e.collapsedHeight,j=void 0===h?"0px":h,f=e.component,g=void 0===f?"div":f,x=e.disableStrictModeCompat,O=void 0!==x&&x,v=e.in,y=e.onEnter,C=e.onEntered,k=e.onEntering,M=e.onExit,D=e.onExited,E=e.onExiting,w=e.style,T=e.timeout,I=void 0===T?l.b.standard:T,R=e.TransitionComponent,N=void 0===R?s.a:R,S=Object(c.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),A=Object(b.a)(),H=o.useRef(),B=o.useRef(null),F=o.useRef(),P="number"===typeof j?"".concat(j,"px"):j;o.useEffect((function(){return function(){clearTimeout(H.current)}}),[]);var q=A.unstable_strictMode&&!O,L=o.useRef(null),$=Object(p.a)(t,q?L:void 0),Q=function(e){return function(t,n){if(e){var a=q?[L.current,t]:[t,n],c=Object(i.a)(a,2),o=c[0],r=c[1];void 0===r?e(o):e(o,r)}}},U=Q((function(e,t){e.style.height=P,y&&y(e,t)})),V=Q((function(e,t){var n=B.current?B.current.clientHeight:0,a=Object(u.a)({style:w,timeout:I},{mode:"enter"}).duration;if("auto"===I){var i=A.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),F.current=i}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),k&&k(e,t)})),_=Q((function(e,t){e.style.height="auto",C&&C(e,t)})),G=Q((function(e){var t=B.current?B.current.clientHeight:0;e.style.height="".concat(t,"px"),M&&M(e)})),J=Q(D),X=Q((function(e){var t=B.current?B.current.clientHeight:0,n=Object(u.a)({style:w,timeout:I},{mode:"exit"}).duration;if("auto"===I){var a=A.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),F.current=a}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height=P,E&&E(e)}));return o.createElement(N,Object(a.a)({in:v,onEnter:U,onEntered:_,onEntering:V,onExit:G,onExited:J,onExiting:X,addEndListener:function(e,t){var n=q?e:t;"auto"===I&&(H.current=setTimeout(n,F.current||0))},nodeRef:q?L:void 0,timeout:"auto"===I?null:I},S),(function(e,t){return o.createElement(g,Object(a.a)({className:Object(r.a)(d.container,m,{entered:d.entered,exited:!v&&"0px"===P&&d.hidden}[e]),style:Object(a.a)({minHeight:P},w),ref:$},t),o.createElement("div",{className:d.wrapper,ref:B},o.createElement("div",{className:d.wrapperInner},n)))}))}));m.muiSupportAuto=!0,t.a=Object(d.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(m)},472:function(e,t,n){"use strict";var a=n(1),i=n(4),c=n(0),o=(n(5),n(3)),r=n(113),s=n(326),d=n(6),l=n(559),u=c.forwardRef((function(e,t){var n=e.children,d=e.classes,u=e.className,b=e.expandIcon,p=e.IconButtonProps,m=e.onBlur,h=e.onClick,j=e.onFocusVisible,f=Object(i.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),g=c.useState(!1),x=g[0],O=g[1],v=c.useContext(l.a),y=v.disabled,C=void 0!==y&&y,k=v.expanded,M=v.toggle;return c.createElement(r.a,Object(a.a)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":k,className:Object(o.a)(d.root,u,C&&d.disabled,k&&d.expanded,x&&d.focused),onFocusVisible:function(e){O(!0),j&&j(e)},onBlur:function(e){O(!1),m&&m(e)},onClick:function(e){M&&M(e),h&&h(e)},ref:t},f),c.createElement("div",{className:Object(o.a)(d.content,k&&d.expanded)},n),b&&c.createElement(s.a,Object(a.a)({className:Object(o.a)(d.expandIcon,k&&d.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),b))}));t.a=Object(d.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},473:function(e,t,n){"use strict";var a=n(1),i=n(4),c=n(0),o=(n(5),n(3)),r=n(6),s=c.forwardRef((function(e,t){var n=e.classes,r=e.className,s=Object(i.a)(e,["classes","className"]);return c.createElement("div",Object(a.a)({className:Object(o.a)(n.root,r),ref:t},s))}));t.a=Object(r.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(s)},474:function(e,t,n){"use strict";var a=n(1),i=n(213),c=n(212),o=n(133),r=n(214);var s=n(17),d=n(4),l=n(0),u=(n(71),n(5),n(3)),b=n(470),p=n(112),m=n(6),h=n(559),j=n(72),f=l.forwardRef((function(e,t){var n,m=e.children,f=e.classes,g=e.className,x=e.defaultExpanded,O=void 0!==x&&x,v=e.disabled,y=void 0!==v&&v,C=e.expanded,k=e.onChange,M=e.square,D=void 0!==M&&M,E=e.TransitionComponent,w=void 0===E?b.a:E,T=e.TransitionProps,I=Object(d.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),R=Object(j.a)({controlled:C,default:O,name:"Accordion",state:"expanded"}),N=Object(s.a)(R,2),S=N[0],A=N[1],H=l.useCallback((function(e){A(!S),k&&k(e,!S)}),[S,k,A]),B=l.Children.toArray(m),F=(n=B,Object(i.a)(n)||Object(c.a)(n)||Object(o.a)(n)||Object(r.a)()),P=F[0],q=F.slice(1),L=l.useMemo((function(){return{expanded:S,disabled:y,toggle:H}}),[S,y,H]);return l.createElement(p.a,Object(a.a)({className:Object(u.a)(f.root,g,S&&f.expanded,y&&f.disabled,!D&&f.rounded),ref:t,square:D},I),l.createElement(h.a.Provider,{value:L},P),l.createElement(w,Object(a.a)({in:S,timeout:"auto"},T),l.createElement("div",{"aria-labelledby":P.props.id,id:P.props["aria-controls"],role:"region"},q)))}));t.a=Object(m.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(f)},536:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t,minimumFractionDigits:t});return n.format(e)}};t.a=a},559:function(e,t,n){"use strict";var a=n(0),i=a.createContext({});t.a=i},561:function(e,t,n){"use strict";var a=n(9),i=n.n(a),c="/api/bidding/packages";var o={getAll:function(e){return i.a.get("".concat(c,"/getPackages/").concat(e))},getAuditorPackages:function(e){return i.a.get("".concat(c,"/getAuditorPackages/").concat(e))},get:function(e){return i.a.get("".concat(c,"/").concat(e))},createPackage:function(e){var t=new FormData;return t.append("Code",e.code),t.append("Name",e.name),t.append("Begin",e.begin.toUTCString()),t.append("End",e.end.toUTCString()),t.append("Description",e.description),t.append("IsInternal",e.isInternal?"true":"false"),e.vendors.map((function(e,n){return t.append("Vendors[".concat(n,"]"),e.code),!0})),e.files.map((function(e){return t.append("Files",e,e.name),!0})),e.items.map((function(e,n){return t.append("Items[".concat(n,"][No]"),e.no),t.append("Items[".concat(n,"][Quantity]"),e.quantity),t.append("Items[".concat(n,"][OptionQuantity]"),e.optionQuantity),t.append("Items[".concat(n,"][Spec]"),e.spec),t.append("Items[".concat(n,"][Note]"),e.note),t.append("Items[".concat(n,"][Begin]"),e.begin.toUTCString()),t.append("Items[".concat(n,"][End]"),e.end.toUTCString()),t.append("Items[".concat(n,"][MaterialCode]"),e.materialCode),!0})),i.a.post(c,t,{headers:{"Content-Type":"multipart/form-data"}})},getQuotation:function(e,t){return i.a.get("".concat(c,"/getQuotation/").concat(e,"/").concat(t))}};t.a=o},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(13),i=n(22),c=n.n(i),o=n(40),r=n(25),s=n(0),d=n.n(s),l=n(47),u=n(27),b=n(70),p=n(379),m=n(112),h=n(94),j=n(302),f=n(96),g=n(26),x=n(46),O=n(18),v=n(536),y=n(561),C=n(169),k=n(208),M=n(97),D=n(6),E=n(474),w=n(472),T=n(473),I=n(2),R=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1},{id:"priceCol",label:"\u0110\u01a1n gi\xe1",numeric:!1,sortable:!1}],N={submitted:!1,items:[],attachments:[]};function S(e){var t,n=e.packageCode,i=e.vendorCode,s=e.packageItems,u=Object(l.b)(),m=d.a.useState(N),h=Object(r.a)(m,2),j=h[0],f=h[1],C=d.a.useState([]),k=Object(r.a)(C,2),M=k[0],D=k[1],E=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.getQuotation(n,i);case 3:t=e.sent,f(t),D(s.map((function(e){var n=t.items.find((function(t){return t.itemId===e.id}));return void 0!==n?Object(a.a)(Object(a.a)({},e),{},{price:n.price}):Object(a.a)(Object(a.a)({},e),{},{price:0})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(O.alertActions.show(O.alertMessage.FETCH_FAILURE,"error"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return d.a.useEffect((function(){E()}),[n,i]),Object(I.jsxs)(p.a,{container:!0,spacing:1,children:[Object(I.jsx)(p.a,{item:!0,xs:12,children:Object(I.jsx)(x.f,{title:"B\u1ea3ng ch\xe0o gi\xe1",columns:R,data:(t=M,t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{variant:"subtitle2",children:e.description}),Object(I.jsx)(b.a,{variant:"caption",children:e.code})]}),quantityCol:Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{variant:"subtitle2",children:"".concat(v.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(I.jsx)(b.a,{variant:"caption",children:"".concat(v.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(I.jsx)(b.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(I.jsx)(b.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(I.jsx)(b.a,{variant:"caption",children:"T\u1eeb: ".concat(v.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(I.jsx)(b.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(v.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]}),priceCol:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(I.jsx)(b.a,{variant:"subtitle2",children:v.a.formatMoney(e.price,3)}),Object(I.jsx)(b.a,{variant:"caption",children:"VND/1 ".concat(e.unit)})]})})}))),actions:[],initialOrderBy:"no"})}),Object(I.jsx)(p.a,{item:!0,xs:12,children:Object(I.jsx)(x.l,{title:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m ch\xe0o gi\xe1",children:j.attachments.map((function(e,t){return Object(I.jsxs)(p.a,{container:!0,spacing:1,children:[Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(g.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(b.a,{variant:"subtitle2",children:e.fileName})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(x.i,{filename:e.fileName,url:"/api/bidding/packages/".concat(n,"/attachments/getQuotationFile/").concat(i,"/").concat(e.id)})})]},t)}))})})]})}var A=Object(D.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(E.a),H=Object(D.a)({root:{color:"#fff",fontStyle:"uppercase",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:40,"&$expanded":{minHeight:40}},content:{margin:0,"& .MuiTypography-body1":{fontSize:"0.9rem"},"&$expanded":{margin:"0"}},expanded:{}})(w.a),B=Object(D.a)((function(){return{root:{padding:0}}}))(T.a);function F(e){var t=e.packageCode,n=e.canViewData,a=e.isClosedPackage,i=e.vendors,c=e.packageItems,o=d.a.useState([]),s=Object(r.a)(o,2),l=s[0],u=s[1];return Object(I.jsx)(x.l,{title:"Danh s\xe1ch nh\xe0 cung c\u1ea5p",noPadding:!0,children:i.map((function(e){return Object(I.jsxs)(A,{square:!0,expanded:l.includes(e.code),onChange:function(t,n){!function(e,t){t?l.includes(e)||u([].concat(Object(k.a)(l),[e])):u(l.filter((function(t){return t!==e})))}(e.code,n)},disabled:!(a&&e.submitted&&n),children:[Object(I.jsx)(H,{style:{backgroundColor:e.submitted?M.a[700]:h.a[700]},children:Object(I.jsxs)(b.a,{children:["".concat(e.code," - ").concat(e.longTextName," "),Object(I.jsx)(g.a,{icon:e.submitted?"check-circle":"times-circle"})," ".concat(e.submitted?"\u0110\xe3 n\u1ed9p ch\xe0o gi\xe1":"Ch\u01b0a n\u1ed9p ch\xe0o gi\xe1")]})}),Object(I.jsx)(B,{children:l.includes(e.code)&&Object(I.jsx)(S,{packageCode:t,packageItems:c,vendorCode:e.code})})]},e.code)}))})}var P=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1}],q={attachments:[],begin:new Date,code:"",status:0,description:"",end:new Date,isInternal:!1,items:[],name:"",vendors:[]};function L(){var e,t=Object(u.h)().packageCode,n=Object(l.b)(),i=d.a.useState(q),s=Object(r.a)(i,2),k=s[0],M=s[1],D=d.a.useState(!1),E=Object(r.a)(D,2),w=E[0],T=E[1],R=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.loadingActions.show()),e.prev=1,e.t0=M,e.next=5,y.a.get(t);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=T,e.next=10,C.a.checkRolePermission("AUDITOR_ROLE");case 10:e.t3=e.sent,(0,e.t2)(e.t3),e.next=19;break;case 14:e.prev=14,e.t4=e.catch(1),M(q),T(!1),n(O.alertActions.show(O.alertMessage.FETCH_FAILURE,"error"));case 19:return e.prev=19,n(O.loadingActions.hide()),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,14,19,22]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){switch(e){case 0:return{text:"M\u1edbi",icon:"star",color:h.a[700]};case 1:return{text:"\u0110ang m\u1edf",icon:"spinner",color:j.a[700]};case 2:return{text:"\u0110\xe3 \u0111\xf3ng",icon:"check-circle",color:f.a[700]};default:return{text:"Kh\xf4ng x\xe1c \u0111\u1ecbnh",icon:"exclamation-circle",color:""}}};return d.a.useEffect((function(){R()}),[t]),Object(I.jsxs)(p.a,{container:!0,spacing:1,children:[Object(I.jsx)(p.a,{item:!0,xs:12,children:Object(I.jsx)(x.l,{title:k.isInternal?"\u0110\u1ea5u th\u1ea7u n\u1ed9i b\u1ed9":"\u0110\u1ea5u th\u1ea7u b\xecnh th\u01b0\u1eddng",children:Object(I.jsxs)(p.a,{container:!0,spacing:1,children:[Object(I.jsxs)(p.a,{item:!0,xs:12,md:6,children:[Object(I.jsx)(b.a,{variant:"caption",children:"M\xe3 s\u1ed1 g\xf3i th\u1ea7u"}),Object(I.jsxs)(b.a,{variant:"subtitle2",children:["".concat(k.code," - Tr\u1ea1ng th\xe1i: "),Object(I.jsx)(g.a,{icon:N(k.status).icon,color:N(k.status).color})," ".concat(N(k.status).text," "),2===k.status&&(w||!k.isInternal)&&Object(I.jsx)(x.i,{label:"T\u1ea3i t\u1ed5ng h\u1ee3p ch\xe0o gi\xe1",filename:"".concat(k.code," - Quotations Report.xlsx"),url:"/api/bidding/packages/getExcelReport/".concat(k.code)})]})]}),Object(I.jsx)(x.o,{title:"T\xean g\xf3i th\u1ea7u",content:k.name}),Object(I.jsx)(x.o,{title:"Th\u1eddi gian m\u1edf th\u1ea7u",content:v.a.formatDate(new Date(k.begin),"hh:mm dd/MM/yyyy")}),Object(I.jsx)(x.o,{title:"Th\u1eddi gian \u0111\xf3ng th\u1ea7u",content:v.a.formatDate(new Date(k.end),"hh:mm dd/MM/yyyy")}),Object(I.jsxs)(p.a,{item:!0,xs:12,children:[Object(I.jsx)(b.a,{variant:"caption",children:"M\xf4 t\u1ea3"}),Object(I.jsx)(m.a,{style:{padding:"8px"},variant:"outlined",children:Object(I.jsx)("div",{dangerouslySetInnerHTML:{__html:k.description}})})]}),Object(I.jsxs)(p.a,{xs:12,item:!0,children:[Object(I.jsx)(b.a,{variant:"caption",children:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m"}),k.attachments.map((function(e,t){return Object(I.jsxs)(p.a,{container:!0,spacing:1,children:[Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(g.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(b.a,{variant:"subtitle2",children:e.fileName})}),Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)(x.i,{filename:e.fileName,url:"/api/bidding/packages/".concat(k.code,"/attachments/").concat(e.id)})})]},t)}))]})]})})}),Object(I.jsx)(p.a,{item:!0,xs:12,children:Object(I.jsx)(F,{packageCode:k.code,canViewData:w||!k.isInternal,packageItems:k.items,isClosedPackage:2===k.status,vendors:k.vendors})}),Object(I.jsx)(p.a,{item:!0,xs:12,children:Object(I.jsx)(x.f,{title:"Danh s\xe1ch v\u1eadt t\u01b0, d\u1ecbch v\u1ee5",columns:P,data:(e=k.items,e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{variant:"subtitle2",children:e.description}),Object(I.jsx)(b.a,{variant:"caption",children:e.code})]}),quantityCol:Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{variant:"subtitle2",children:"".concat(v.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(I.jsx)(b.a,{variant:"caption",children:"".concat(v.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(I.jsx)(b.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(I.jsx)(b.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(I.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(I.jsx)(b.a,{variant:"caption",children:"T\u1eeb: ".concat(v.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(I.jsx)(b.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(v.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]})})}))),actions:[],initialOrderBy:"no"})})]})}},899:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(0),i=n.n(a),c=n(27),o=n(22),r=n.n(o),s=n(40),d=n(13),l=n(25),u=n(47),b=n(26),p=n(94),m=n(46),h=n(18),j=n(561),f=n(536),g=n(2),x=[{id:"code",label:"M\xe3",numeric:!1,sortable:!0},{id:"name",label:"T\xean g\xf3i th\u1ea7u",numeric:!1,sortable:!1},{id:"isInternal",label:"Lo\u1ea1i",numeric:!1,sortable:!0,format:function(e){return e.isInternal?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a,{icon:"shield-alt",color:p.a[700]}),"N\u1ed9i b\u1ed9"]}):""}},{id:"begin",label:"M\u1edf th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return f.a.formatDate(new Date(e.begin),"dd/MM/yyyy - hh:mm")}},{id:"end",label:"\u0110\xf3ng th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return f.a.formatDate(new Date(e.end),"dd/MM/yyyy - hh:mm")}},{id:"action",label:"",numeric:!1,sortable:!1}];function O(){var e,t=Object(c.h)().status,n=Object(c.f)(),a=Object(u.b)(),o=i.a.useState([]),b=Object(l.a)(o,2),p=b[0],f=b[1],O=i.a.useState("Danh s\xe1ch g\xf3i th\u1ea7u"),v=Object(l.a)(O,2),y=v[0],C=v[1],k=[Object(g.jsx)(m.n,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){M()}},1)],M=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(h.loadingActions.show()),e.prev=1,e.t0=f,e.next=5,j.a.getAuditorPackages(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),a(h.alertActions.show(h.alertMessage.FETCH_FAILURE,"error"));case 12:return e.prev=12,a(h.loadingActions.hide()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return i.a.useEffect((function(){switch(M(),t){case"new":C("Danh s\xe1ch g\xf3i th\u1ea7u m\u1edbi");break;case"opening":C("Danh s\xe1ch g\xf3i th\u1ea7u \u0111ang m\u1edf");break;case"closed":C("Danh s\xe1ch g\xf3i th\u1ea7u \u0111\xe3 \u0111\xf3ng")}}),[t]),Object(g.jsx)(m.f,{title:y,columns:x,data:(e=p,e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{action:Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m.n,{tooltip:"Xem chi ti\u1ebft g\xf3i th\u1ea7u",text:"Xem",icon:"info-circle",color:"success",onClick:function(){n.push("/bidding/auditor/package/".concat(e.code))}})})})}))),actions:k,initialOrderBy:"begin"})}var v=n(629);function y(){var e=Object(c.i)().path;return Object(g.jsxs)(c.c,{children:[Object(g.jsx)(c.a,{path:"".concat(e,"/package-list/:status"),component:O}),Object(g.jsx)(c.a,{path:"".concat(e,"/package/:packageCode"),component:v.a})]})}}}]);
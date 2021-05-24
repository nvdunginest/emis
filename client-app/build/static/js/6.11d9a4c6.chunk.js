(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[6],{482:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=a},498:function(e,t,n){"use strict";var a=n(10),c=n.n(a),i="/api/bidding/packages";var o={getAll:function(e){return c.a.get("".concat(i,"/getPackages/").concat(e))},getAuditorPackages:function(e){return c.a.get("".concat(i,"/getAuditorPackages/").concat(e))},get:function(e){return c.a.get("".concat(i,"/").concat(e))},createPackage:function(e){var t=new FormData;return t.append("Code",e.code),t.append("Name",e.name),t.append("Begin",e.begin.toUTCString()),t.append("End",e.end.toUTCString()),t.append("Description",e.description),t.append("IsInternal",e.isInternal?"true":"false"),e.vendors.map((function(e,n){return t.append("Vendors[".concat(n,"]"),e.code),!0})),e.files.map((function(e){return t.append("Files",e,e.name),!0})),e.items.map((function(e,n){return t.append("Items[".concat(n,"][No]"),e.no),t.append("Items[".concat(n,"][Quantity]"),e.quantity),t.append("Items[".concat(n,"][OptionQuantity]"),e.optionQuantity),t.append("Items[".concat(n,"][Spec]"),e.spec),t.append("Items[".concat(n,"][Note]"),e.note),t.append("Items[".concat(n,"][Begin]"),e.begin.toUTCString()),t.append("Items[".concat(n,"][End]"),e.end.toUTCString()),t.append("Items[".concat(n,"][MaterialCode]"),e.materialCode),!0})),c.a.post(i,t,{headers:{"Content-Type":"multipart/form-data"}})},getQuotation:function(e,t){return c.a.get("".concat(i,"/getQuotation/").concat(e,"/").concat(t))}};t.a=o},509:function(e,t,n){"use strict";var a=n(10),c=n.n(a),i="/api/bidding/vendors";var o={getVendors:function(){return c.a.get("".concat(i,"/getVendors"))},getRegisterList:function(){return c.a.get("".concat(i,"/getRegisterList"))},getDetail:function(e){return c.a.get("".concat(i,"/getDetail/").concat(e))},approve:function(e){return c.a.post("".concat(i,"/approve/").concat(e))},reject:function(e){return c.a.post("".concat(i,"/reject/").concat(e))}};t.a=o},522:function(e,t,n){"use strict";var a=n(10),c=n.n(a),i="/api/bidding/materials";var o={getAll:function(){return c.a.get(i)},create:function(e){return c.a.post(i,e)},edit:function(e,t){return c.a.put("".concat(i,"/").concat(e),t)},remove:function(e){return c.a.delete("".concat(i,"/").concat(e))},addFromExcel:function(e){var t=new FormData;return t.append("files",e,e.name),c.a.post("".concat(i,"/addFromExcel"),t,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=o},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n(20),c=n(28),i=n.n(c),o=n(42),r=n(16),s=n(0),l=n.n(s),d=n(29),u=n(51),j=n(450),b=n(149),m=n(142),p=n(400),h=n(143),x=n(35),O=n(482),f=n(498),g=n(120),v=n(22),y=n(115),C=n(152),D=n(144),k=n(6),T=n(580),I=n(547),w=n(548),S=n(1),M=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1},{id:"priceCol",label:"\u0110\u01a1n gi\xe1",numeric:!1,sortable:!1}],A={submitted:!1,items:[],attachments:[]};function F(e){var t,n=e.packageCode,c=e.vendorCode,s=e.packageItems,d=l.a.useContext(y.a).showAlert,b=l.a.useState(A),m=Object(r.a)(b,2),p=m[0],h=m[1],g=l.a.useState([]),C=Object(r.a)(g,2),D=C[0],k=C[1],T=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getQuotation(n,c);case 3:t=e.sent,h(t),k(s.map((function(e){var n=t.items.find((function(t){return t.itemId===e.id}));return void 0!==n?Object(a.a)(Object(a.a)({},e),{},{price:n.price}):Object(a.a)(Object(a.a)({},e),{},{price:0})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(y.b.FETCH_FAILURE,"error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){T()}),[n,c]),Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(v.g,{title:"B\u1ea3ng ch\xe0o gi\xe1",columns:M,data:(t=D,t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:e.description}),Object(S.jsx)(u.a,{variant:"caption",children:e.code})]}),quantityCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"".concat(O.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(S.jsx)(u.a,{variant:"caption",children:"".concat(O.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(S.jsx)(u.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(S.jsx)(u.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(u.a,{variant:"caption",children:"T\u1eeb: ".concat(O.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(S.jsx)(u.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(O.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]}),priceCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:O.a.formatMoney(e.price,3)}),Object(S.jsx)(u.a,{variant:"caption",children:"VND/1 ".concat(e.unit)})]})})}))),actions:[],initialOrderBy:"no"})}),Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(v.m,{title:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m ch\xe0o gi\xe1",children:p.attachments.map((function(e,t){return Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(x.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(u.a,{variant:"subtitle2",children:e.fileName})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(v.j,{filename:e.fileName,url:"/api/bidding/packages/".concat(n,"/attachments/getQuotationFile/").concat(c,"/").concat(e.id)})})]},t)}))})})]})}var E=Object(k.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(T.a),N=Object(k.a)({root:{color:"#fff",fontStyle:"uppercase",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:40,"&$expanded":{minHeight:40}},content:{margin:0,"& .MuiTypography-body1":{fontSize:"0.9rem"},"&$expanded":{margin:"0"}},expanded:{}})(I.a),q=Object(k.a)((function(){return{root:{padding:0}}}))(w.a);function U(e){var t=e.packageCode,n=e.canViewData,a=e.isClosedPackage,c=e.vendors,i=e.packageItems,o=l.a.useState([]),s=Object(r.a)(o,2),d=s[0],j=s[1];return Object(S.jsx)(v.m,{title:"Danh s\xe1ch nh\xe0 cung c\u1ea5p",noPadding:!0,children:c.map((function(e){return Object(S.jsxs)(E,{square:!0,expanded:d.includes(e.code),onChange:function(t,n){!function(e,t){t?d.includes(e)||j([].concat(Object(C.a)(d),[e])):j(d.filter((function(t){return t!==e})))}(e.code,n)},disabled:!(a&&e.submitted&&n),children:[Object(S.jsx)(N,{style:{backgroundColor:e.submitted?D.a[700]:m.a[700]},children:Object(S.jsxs)(u.a,{children:["".concat(e.code," - ").concat(e.longTextName," "),Object(S.jsx)(x.a,{icon:e.submitted?"check-circle":"times-circle"})," ".concat(e.submitted?"\u0110\xe3 n\u1ed9p ch\xe0o gi\xe1":"Ch\u01b0a n\u1ed9p ch\xe0o gi\xe1")]})}),Object(S.jsx)(q,{children:d.includes(e.code)&&Object(S.jsx)(F,{packageCode:t,packageItems:i,vendorCode:e.code})})]},e.code)}))})}var _=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1}],H={attachments:[],begin:new Date,code:"",status:0,description:"",end:new Date,isInternal:!1,items:[],name:"",vendors:[]};function P(){var e,t=Object(d.i)().packageCode,n=l.a.useContext(y.a),c=n.showAlert,s=n.showBackdrop,C=n.hideBackdrop,D=l.a.useState(H),k=Object(r.a)(D,2),T=k[0],I=k[1],w=l.a.useState(!1),M=Object(r.a)(w,2),A=M[0],F=M[1],E=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),e.prev=1,e.t0=I,e.next=5,f.a.get(t);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=F,e.next=10,g.c.checkAuditorPermission();case 10:e.t3=e.sent,(0,e.t2)(e.t3),C(),e.next=21;break;case 15:e.prev=15,e.t4=e.catch(1),C(),I(H),F(!1),c(y.b.FETCH_FAILURE,"error");case 21:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(e){switch(e){case 0:return{text:"M\u1edbi",icon:"star",color:m.a[700]};case 1:return{text:"\u0110ang m\u1edf",icon:"spinner",color:p.a[700]};case 2:return{text:"\u0110\xe3 \u0111\xf3ng",icon:"check-circle",color:h.a[700]};default:return{text:"Kh\xf4ng x\xe1c \u0111\u1ecbnh",icon:"exclamation-circle",color:""}}};return l.a.useEffect((function(){E()}),[t]),Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(v.m,{title:T.isInternal?"\u0110\u1ea5u th\u1ea7u n\u1ed9i b\u1ed9":"\u0110\u1ea5u th\u1ea7u b\xecnh th\u01b0\u1eddng",children:Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsxs)(j.a,{item:!0,xs:12,md:6,children:[Object(S.jsx)(u.a,{variant:"caption",children:"M\xe3 s\u1ed1 g\xf3i th\u1ea7u"}),Object(S.jsxs)(u.a,{variant:"subtitle2",children:["".concat(T.code," - Tr\u1ea1ng th\xe1i: "),Object(S.jsx)(x.a,{icon:N(T.status).icon,color:N(T.status).color})," ".concat(N(T.status).text," "),2===T.status&&(A||!T.isInternal)&&Object(S.jsx)(v.j,{label:"T\u1ea3i t\u1ed5ng h\u1ee3p ch\xe0o gi\xe1",filename:"".concat(T.code," - Quotations Report.xlsx"),url:"/api/bidding/packages/getExcelReport/".concat(T.code)})]})]}),Object(S.jsx)(v.q,{title:"T\xean g\xf3i th\u1ea7u",content:T.name}),Object(S.jsx)(v.q,{title:"Th\u1eddi gian m\u1edf th\u1ea7u",content:O.a.formatDate(new Date(T.begin),"hh:mm dd/MM/yyyy")}),Object(S.jsx)(v.q,{title:"Th\u1eddi gian \u0111\xf3ng th\u1ea7u",content:O.a.formatDate(new Date(T.end),"hh:mm dd/MM/yyyy")}),Object(S.jsxs)(j.a,{item:!0,xs:12,children:[Object(S.jsx)(u.a,{variant:"caption",children:"M\xf4 t\u1ea3"}),Object(S.jsx)(b.a,{style:{padding:"8px"},variant:"outlined",children:Object(S.jsx)("div",{dangerouslySetInnerHTML:{__html:T.description}})})]}),Object(S.jsxs)(j.a,{xs:12,item:!0,children:[Object(S.jsx)(u.a,{variant:"caption",children:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m"}),T.attachments.map((function(e,t){return Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(x.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(u.a,{variant:"subtitle2",children:e.fileName})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(v.j,{filename:e.fileName,url:"/api/bidding/packages/".concat(T.code,"/attachments/").concat(e.id)})})]},t)}))]})]})})}),Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(U,{packageCode:T.code,canViewData:A||!T.isInternal,packageItems:T.items,isClosedPackage:2===T.status,vendors:T.vendors})}),Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(v.g,{title:"Danh s\xe1ch v\u1eadt t\u01b0, d\u1ecbch v\u1ee5",columns:_,data:(e=T.items,e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:e.description}),Object(S.jsx)(u.a,{variant:"caption",children:e.code})]}),quantityCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(u.a,{variant:"subtitle2",children:"".concat(O.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(S.jsx)(u.a,{variant:"caption",children:"".concat(O.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(S.jsx)(u.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(S.jsx)(u.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(u.a,{variant:"caption",children:"T\u1eeb: ".concat(O.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(S.jsx)(u.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(O.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]})})}))),actions:[],initialOrderBy:"no"})})]})}},551:function(e,t){},614:function(e,t){},615:function(e,t){},716:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var a=n(0),c=n.n(a),i=n(29),o=n(450),r=n(16),s=n(115),l=n(152),d=n(17),u=n(20),j="GET_INPUT_DATA_SUCCESS",b="GET_INPUT_DATA_FAILURE",m="CHANGE_HEADER_DATA",p="CHANGE_VENDORS_DATA",h="ADD_ITEM",x="EDIT_ITEM",O="REMOVE_ITEM",f="CHANGE_FILES",g={model:{begin:new Date,code:"",description:"",isInternal:!1,end:new Date,files:[],items:[],name:"",vendors:[]},materials:[],vendors:[]},v={state:g,getInputData:function(){},changeHeader:function(e,t){},changeVendors:function(e,t){},addItem:function(e){},editItem:function(e){},removeItem:function(e){},changeFiles:function(e){}};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{materials:t.payload.materials,vendors:t.payload.vendors});case b:return Object(u.a)(Object(u.a)({},e),{},{materials:[],vendors:[]});case m:return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},Object(d.a)({},t.payload.name,t.payload.value))});case p:if(t.payload.checked){var n=e.model.vendors.find((function(e){return e.code===t.payload.vendorCode}));if(void 0===n){var a=e.vendors.find((function(e){return e.code===t.payload.vendorCode}));return void 0!==a?Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{vendors:[].concat(Object(l.a)(e.model.vendors),[{code:a.code,longTextName:a.longTextName}])})}):e}return e}return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{vendors:e.model.vendors.filter((function(e){return e.code!==t.payload.vendorCode}))})});case h:return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{items:[].concat(Object(l.a)(e.model.items),[t.payload.item])})});case x:return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{items:[].concat(Object(l.a)(e.model.items.filter((function(e){return e.id!==t.payload.item.id}))),[t.payload.item])})});case O:return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{items:e.model.items.filter((function(e){return e.id!==t.payload.id}))})});case f:return Object(u.a)(Object(u.a)({},e),{},{model:Object(u.a)(Object(u.a)({},e.model),{},{files:t.payload.files})});default:return e}}var C=n(28),D=n.n(C),k=n(42),T=n(522),I=n(509),w={getInputData:function(){var e=Object(k.a)(D.a.mark((function e(t,n){var a,c,i,o,r,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return{type:b}},o=function(e,t){return{type:j,payload:{materials:e,vendors:t}}},a=n.showBackdrop,c=n.showAlert,i=n.hideBackdrop,a(),e.prev=4,e.next=7,Promise.all([T.a.getAll(),I.a.getVendors()]);case 7:l=e.sent,t(o(l[0],l[1])),i(),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(4),t(r()),i(),c(s.b.FETCH_FAILURE,"error");case 17:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,n){return e.apply(this,arguments)}}(),changeHeader:function(e,t,n){n({type:m,payload:{name:e,value:t}})},changeVendors:function(e,t,n){n({type:p,payload:{vendorCode:e,checked:t}})},addItem:function(e,t){t({type:h,payload:{item:e}})},editItem:function(e,t){t({type:x,payload:{item:e}})},removeItem:function(e,t){t({type:O,payload:{id:e}})},changeFiles:function(e,t){t({type:f,payload:{files:e}})}},S=n(1),M=Object(a.createContext)(v);function A(e){var t=e.children,n=c.a.useReducer(y,g),i=Object(r.a)(n,2),o=i[0],l=i[1],d=Object(a.useContext)(s.a),u={state:o,getInputData:function(){w.getInputData(l,d)},changeHeader:function(e,t){w.changeHeader(e,t,l)},changeVendors:function(e,t){w.changeVendors(e,t,l)},addItem:function(e){w.addItem(e,l)},editItem:function(e){w.editItem(e,l)},removeItem:function(e){w.removeItem(e,l)},changeFiles:function(e){w.changeFiles(e,l)}};return Object(S.jsx)(M.Provider,{value:u,children:t})}var F=n(51),E=n(506),N=n(22),q=n(498);function U(){var e=Object(i.g)(),t=c.a.useContext(s.a),n=t.showAlert,a=t.showBackdrop,l=t.hideBackdrop,d=c.a.useContext(M),j=d.state,b=d.changeHeader,m=d.changeVendors,p=d.changeFiles,h=j.model,x=j.vendors,O=c.a.useState(null),f=Object(r.a)(O,2),g=f[0],v=f[1],y=function(e){b(e.target.name,e.target.value)},C=function(e,t){b(e,t)},T=function(){var t=Object(k.a)(D.a.mark((function t(){var c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(),t.prev=1,t.next=4,q.a.createPackage(j.model);case 4:c=t.sent,l(),n("".concat(s.b.ACTION_SUCCESS," ").concat(c),"success"),e.push("/e-bidding/expert/document/".concat(c)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),l(),n("".concat(s.b.ACTION_FAILURE),"error");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return Object(S.jsx)(N.m,{title:"Th\xf4ng tin chung",children:Object(S.jsxs)(o.a,{container:!0,spacing:1,children:[Object(S.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(N.r,{required:!0,label:"M\xe3 s\u1ed1",name:"code",type:"text",value:j.model.code,onChange:y})}),Object(S.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(N.r,{required:!0,label:"T\xean g\xf3i th\u1ea7u",name:"name",type:"text",value:j.model.name,onChange:y})}),Object(S.jsxs)(o.a,{item:!0,xs:12,children:[Object(S.jsx)(F.a,{variant:"caption",children:"Lo\u1ea1i h\xecnh g\xf3i th\u1ea7u"}),Object(S.jsx)("div",{children:Object(S.jsx)(N.d,{checked:h.isInternal,name:"isInternal",label:"\u0110\u1ea5u th\u1ea7u n\u1ed9i b\u1ed9",onChange:function(e,t){b("isInternal",t)}})})]}),Object(S.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(N.i,{label:"Th\u1eddi gian m\u1edf th\u1ea7u",name:"begin",value:j.model.begin,onChange:function(e){C("begin",e)},disablePast:!0,required:!0})}),Object(S.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(N.i,{label:"Th\u1eddi gian \u0111\xf3ng th\u1ea7u",name:"end",value:j.model.end,onChange:function(e){C("end",e)},disablePast:!0,required:!0})}),Object(S.jsxs)(o.a,{item:!0,xs:12,children:[Object(S.jsx)(F.a,{variant:"caption",children:"N\u1ed9i dung"}),Object(S.jsx)(N.k,{value:j.model.description,onChange:function(e){b("description",e)}})]}),Object(S.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(S.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",children:[Object(S.jsx)(o.a,{item:!0,xs:10,children:Object(S.jsx)(N.e,{label:"Ch\u1ecdn nh\xe0 cung c\u1ea5p",optionLabel:"label",value:g,options:function(e){return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.longTextName)})}))}(x),getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){v(e)}})}),Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(N.o,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){null!==g&&(h.vendors.map((function(e){return e.code})).includes(g.code)||m(g.code,!0))}})})]}),Object(S.jsx)(o.a,{container:!0,item:!0,xs:12,spacing:1,children:h.vendors.map((function(e,t){return Object(S.jsxs)(o.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(F.a,{variant:"subtitle2",children:"".concat(t+1,". [").concat(e.code,"] - ").concat(e.longTextName)})}),Object(S.jsx)(o.a,{item:!0,children:Object(S.jsx)(N.o,{icon:"trash-alt",color:"danger",text:"X\xf3a",onClick:function(){var t;t=e.code,m(t,!1)}})})]},e.code)}))})]}),Object(S.jsxs)(o.a,{item:!0,xs:12,children:[Object(S.jsx)(F.a,{variant:"caption",children:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m"}),Object(S.jsx)("div",{children:Object(S.jsx)(o.a,{container:!0,spacing:1,children:Object(S.jsx)(E.a,{showPreviews:!1,acceptedFiles:[".doc",".docx",".xls",".xlsx",".pdf",".rar",".zip"],showFileNames:!0,filesLimit:10,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&p(e)},showAlerts:!1})})})]}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.o,{icon:"plus",color:"success",text:"T\u1ea1o g\xf3i th\u1ea7u",variant:"contained",onClick:function(){T()}})})]})})}var _=n(482),H=n(612),P=n.n(H);var B={excelDateToJSDate:function(e){var t=Math.floor(e-25569),n=new Date(1e3*(86400*t)),a=e-Math.floor(e)+1e-7,c=Math.floor(86400*a)-Math.floor(86400*a)%60,i=Math.floor(86400*a)%60,o=Math.floor(c/3600),r=Math.floor(c/60)%60;return new Date(n.getFullYear(),n.getMonth(),n.getDate(),o,r,i)},readToArray:function(e,t,n,a){return new Promise((function(c,i){var o=new FileReader;o.readAsArrayBuffer(e);var r=[];o.onload=function(){for(var e=new Uint8Array(o.result),s=P.a.read(e,{type:"array"}),l=s.Sheets[s.SheetNames[0]],d=0,j=function(){var e=Object(u.a)({},a),c=n+d;t.map((function(t){var n=l[P.a.utils.encode_cell({c:t.col,r:c})];if("string"===typeof e[t.name]||void 0!==n)switch(typeof e[t.name]){case"string":void 0!==n&&"s"===n.t&&(e[t.name]=n.v);break;case"number":"n"===n.t&&(e[t.name]=n.v)}else console.log(c),console.log(t.col),i();return!0})),r.push(e),d++};l[P.a.utils.encode_cell({c:t[0].col,r:n+d})];)j();c(r)}}))}},L=[{name:"no",col:0},{name:"code",col:1},{name:"spec",col:3},{name:"note",col:4},{name:"quantity",col:6},{name:"optionQuantity",col:8},{name:"begin",col:9},{name:"end",col:10}],Q=[{id:"noNumber",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1},{id:"action",label:"",numeric:!1,sortable:!1}],V={id:0,no:"0",materialCode:"",materialDescription:"",begin:new Date,end:new Date,note:"",optionQuantity:"0",optionUnit:"",quantity:"0",spec:"",unit:""};function R(){var e,t,n=c.a.useContext(s.a),a=n.showAlert,i=n.showBackdrop,l=n.hideBackdrop,j=c.a.useContext(M),b=j.state,m=j.addItem,p=j.editItem,h=j.removeItem,x=c.a.useState(V),O=Object(r.a)(x,2),f=O[0],g=O[1],v=c.a.useState(0),y=Object(r.a)(v,2),C=y[0],T=y[1],I=c.a.useState(!1),w=Object(r.a)(I,2),A=w[0],q=w[1],U=c.a.useState(!1),H=Object(r.a)(U,2),P=H[0],R=H[1],G=c.a.useState(!1),z=Object(r.a)(G,2),J=z[0],X=z[1],K=c.a.useState(),$=Object(r.a)(K,2),Y=$[0],W=$[1],Z=function(){var e=Object(k.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===Y){e.next=16;break}return X(!1),i(),e.prev=3,e.next=6,B.readToArray(Y,L,1,{no:0,code:"",spec:"",note:"",quantity:0,optionQuantity:0,begin:0,end:0});case 6:e.sent.filter((function(e){return e.no>0})).map((function(e){var t=b.materials.find((function(t){return t.code===e.code}));if(void 0!==t){var n={no:e.no.toString(),materialCode:e.code,spec:e.spec,begin:B.excelDateToJSDate(e.begin),end:B.excelDateToJSDate(e.end),materialDescription:t.description,note:e.note,unit:t.unit,id:C+1,optionUnit:t.optionUnit,quantity:e.quantity.toString(),optionQuantity:e.optionQuantity.toString()};T(C+1),m(n)}return!0})),a(s.b.ACTION_SUCCESS,"success"),l(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),l(),a("File sai m\u1eabu! Vui l\xf2ng ki\u1ec3m tra l\u1ea1i!","error");case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),ee=function(e){g(Object(u.a)(Object(u.a)({},f),{},Object(d.a)({},e.target.name,e.target.value)))},te=[Object(S.jsx)(N.o,{tooltip:"Th\xeam m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){g(Object(u.a)(Object(u.a)({},V),{},{id:C,no:C.toString()})),T(C+1),R(!1),q(!0)}},1),Object(S.jsx)(N.o,{tooltip:"T\u1ea1o t\u1eeb file excel",text:"Excel",icon:"file-excel",color:"primary",onClick:function(){X(!0)}},2)];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(N.l,{open:J,onClose:function(){X(!1)},title:"T\u1ea3i t\u1ec7p excel",onSubmit:Z,children:Object(S.jsx)(E.a,{acceptedFiles:[".xls",".xlsx"],showPreviews:!1,showFileNames:!0,filesLimit:1,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&W(e[0])},showAlerts:!1})}),Object(S.jsx)(N.l,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:A,onClose:function(){q(!1)},onSubmit:function(){q(!1),P?p(f):m(f)},children:Object(S.jsxs)(o.a,{container:!0,spacing:1,children:[Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"no",label:"Th\u1ee9 t\u1ef1",type:"text",required:!0,value:f.no,onChange:ee})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.e,{required:!0,label:"M\xe3 v\u1eadt t\u01b0",options:(t=b.materials,t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&g(Object(u.a)(Object(u.a)({},f),{},{materialCode:e.code,materialDescription:e.description,unit:e.unit,optionUnit:e.optionUnit}))}})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"materialDescription",label:"Di\u1ec5n gi\u1ea3i",type:"text",disabled:!0,required:!0,value:f.materialDescription})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"spec",label:"Spec",type:"text",value:f.spec,onChange:ee})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"note",label:"Ghi ch\xfa",type:"text",value:f.note,onChange:ee})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"quantity",label:"S\u1ed1 l\u01b0\u1ee3ng 1",type:"number",value:f.quantity,onChange:ee})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"unit",label:"\u0110\u01a1n v\u1ecb 1",type:"text",disabled:!0,required:!0,value:f.unit})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"optionQuantity",label:"S\u1ed1 l\u01b0\u1ee3ng 2",type:"number",value:f.optionQuantity,onChange:ee})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.r,{name:"optionUnit",label:"\u0110\u01a1n v\u1ecb 2",type:"text",disabled:!0,required:!0,value:f.optionUnit})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.h,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u giao h\xe0ng",name:"begin",value:f.begin,onChange:function(e){g(Object(u.a)(Object(u.a)({},f),{},{begin:e}))},disablePast:!0,required:!0})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(N.h,{label:"Ng\xe0y k\u1ebft th\xfac giao h\xe0ng",name:"end",value:f.end,onChange:function(e){g(Object(u.a)(Object(u.a)({},f),{},{end:e}))},disablePast:!0,required:!0})})]})}),Object(S.jsx)(N.g,{title:"Danh s\xe1ch v\u1eadt t\u01b0, d\u1ecbch v\u1ee5",columns:Q,data:(e=b.model.items,e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{noNumber:parseInt(e.no,10),infoCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(F.a,{variant:"subtitle2",children:e.materialDescription}),Object(S.jsx)(F.a,{variant:"caption",children:e.materialCode})]}),quantityCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(F.a,{variant:"subtitle2",children:"".concat(_.a.formatMoney(parseFloat(e.quantity),3)," ").concat(e.unit)}),Object(S.jsx)(F.a,{variant:"caption",children:"".concat(_.a.formatMoney(parseFloat(e.optionQuantity),3)," ").concat(e.optionUnit)})]}),noteCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(F.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),Object(S.jsx)(F.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(F.a,{variant:"caption",children:"T\u1eeb: ".concat(_.a.formatDate(e.begin,"dd/MM/yyyy"))}),Object(S.jsx)(F.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(_.a.formatDate(e.end,"dd/MM/yyyy"))})]}),action:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(N.o,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){g(e),R(!0),q(!0)}(e)}}),Object(S.jsx)(N.o,{tooltip:"X\xf3a",text:"X\xf3a",icon:"trash-alt",color:"danger",onClick:function(){var t;t=e.id,h(t)}})]})})}))),actions:te,initialOrderBy:"noNumber"})]})}function G(){var e=c.a.useContext(M).getInputData;return c.a.useEffect((function(){e()}),[]),Object(S.jsxs)(o.a,{container:!0,spacing:2,children:[Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(U,{})}),Object(S.jsx)(o.a,{item:!0,xs:12,children:Object(S.jsx)(R,{})})]})}function z(){return Object(S.jsx)(A,{children:Object(S.jsx)(G,{})})}var J=n(35),X=n(142),K=[{id:"code",label:"M\xe3",numeric:!1,sortable:!0},{id:"name",label:"T\xean g\xf3i th\u1ea7u",numeric:!1,sortable:!1},{id:"isInternal",label:"Lo\u1ea1i",numeric:!1,sortable:!0,format:function(e){return e.isInternal?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(J.a,{icon:"shield-alt",color:X.a[700]}),"N\u1ed9i b\u1ed9"]}):""}},{id:"begin",label:"M\u1edf th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return _.a.formatDate(new Date(e.begin),"dd/MM/yyyy - hh:mm")}},{id:"end",label:"\u0110\xf3ng th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return _.a.formatDate(new Date(e.end),"dd/MM/yyyy - hh:mm")}},{id:"action",label:"",numeric:!1,sortable:!1}];function $(){var e,t=Object(i.i)().status,n=Object(i.g)(),a=c.a.useContext(s.a),o=a.showAlert,l=a.showBackdrop,d=a.hideBackdrop,j=c.a.useState([]),b=Object(r.a)(j,2),m=b[0],p=b[1],h=c.a.useState("Danh s\xe1ch g\xf3i th\u1ea7u"),x=Object(r.a)(h,2),O=x[0],f=x[1],g=[Object(S.jsx)(N.o,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){v()}},1)],v=function(){var e=Object(k.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(),e.prev=1,e.t0=p,e.next=5,q.a.getAll(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),d(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),d(),o(s.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){switch(v(),t){case"new":f("Danh s\xe1ch g\xf3i th\u1ea7u m\u1edbi");break;case"opening":f("Danh s\xe1ch g\xf3i th\u1ea7u \u0111ang m\u1edf");break;case"closed":f("Danh s\xe1ch g\xf3i th\u1ea7u \u0111\xe3 \u0111\xf3ng")}}),[t]),Object(S.jsx)(N.g,{title:O,columns:K,data:(e=m,e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{action:Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(N.o,{tooltip:"Xem chi ti\u1ebft g\xf3i th\u1ea7u",text:"Xem",icon:"info-circle",color:"success",onClick:function(){n.push("/e-bidding/expert/document/".concat(e.code))}})})})}))),actions:g,initialOrderBy:"begin"})}var Y=n(540);function W(){var e=Object(i.j)().path;return Object(S.jsxs)(i.d,{children:[Object(S.jsx)(i.b,{path:"".concat(e,"/create-package"),component:z}),Object(S.jsx)(i.b,{path:"".concat(e,"/document-list/:status"),component:$}),Object(S.jsx)(i.b,{path:"".concat(e,"/document/:packageCode"),component:Y.a})]})}}}]);
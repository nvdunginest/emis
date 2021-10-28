(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[8],{538:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t,minimumFractionDigits:t});return n.format(e)}};t.a=a},563:function(e,t,n){"use strict";var a=n(9),c=n.n(a),i="/api/bidding/packages";var o={getAll:function(e){return c.a.get("".concat(i,"/getPackages/").concat(e))},getAuditorPackages:function(e){return c.a.get("".concat(i,"/getAuditorPackages/").concat(e))},get:function(e){return c.a.get("".concat(i,"/").concat(e))},createPackage:function(e){var t=new FormData;return t.append("Code",e.code),t.append("Name",e.name),t.append("Begin",e.begin.toUTCString()),t.append("End",e.end.toUTCString()),t.append("Description",e.description),t.append("IsInternal",e.isInternal?"true":"false"),e.vendors.map((function(e,n){return t.append("Vendors[".concat(n,"]"),e.code),!0})),e.files.map((function(e){return t.append("Files",e,e.name),!0})),e.items.map((function(e,n){return t.append("Items[".concat(n,"][No]"),e.no),t.append("Items[".concat(n,"][Quantity]"),e.quantity),t.append("Items[".concat(n,"][OptionQuantity]"),e.optionQuantity),t.append("Items[".concat(n,"][Spec]"),e.spec),t.append("Items[".concat(n,"][Note]"),e.note),t.append("Items[".concat(n,"][Begin]"),e.begin.toUTCString()),t.append("Items[".concat(n,"][End]"),e.end.toUTCString()),t.append("Items[".concat(n,"][MaterialCode]"),e.materialCode),!0})),c.a.post(i,t,{headers:{"Content-Type":"multipart/form-data"}})},getQuotation:function(e,t){return c.a.get("".concat(i,"/getQuotation/").concat(e,"/").concat(t))}};t.a=o},598:function(e,t,n){"use strict";var a=n(9),c=n.n(a),i="/api/bidding/vendors";var o={getVendors:function(){return c.a.get("".concat(i,"/getVendors"))},getRegisterList:function(){return c.a.get("".concat(i,"/getRegisterList"))},getDetail:function(e){return c.a.get("".concat(i,"/getDetail/").concat(e))},approve:function(e){return c.a.post("".concat(i,"/approve/").concat(e))},reject:function(e){return c.a.post("".concat(i,"/reject/").concat(e))}};t.a=o},627:function(e,t,n){"use strict";var a=n(9),c=n.n(a),i="/api/bidding/materials";var o={getAll:function(){return c.a.get(i)},create:function(e){return c.a.post(i,e)},edit:function(e,t){return c.a.put("".concat(i,"/").concat(e),t)},remove:function(e){return c.a.delete("".concat(i,"/").concat(e))},addFromExcel:function(e){var t=new FormData;return t.append("files",e,e.name),c.a.post("".concat(i,"/addFromExcel"),t,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=o},631:function(e,t,n){"use strict";n.d(t,"a",(function(){return L}));var a=n(13),c=n(22),i=n.n(c),o=n(40),r=n(25),s=n(0),l=n.n(s),d=n(47),u=n(27),j=n(70),b=n(380),m=n(112),p=n(94),h=n(303),x=n(96),f=n(26),g=n(46),O=n(18),v=n(538),y=n(563),C=n(169),D=n(209),T=n(97),k=n(6),w=n(476),I=n(474),M=n(475),S=n(2),A=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1},{id:"priceCol",label:"\u0110\u01a1n gi\xe1",numeric:!1,sortable:!1}],F={submitted:!1,items:[],attachments:[]};function E(e){var t,n=e.packageCode,c=e.vendorCode,s=e.packageItems,u=Object(d.b)(),m=l.a.useState(F),p=Object(r.a)(m,2),h=p[0],x=p[1],C=l.a.useState([]),D=Object(r.a)(C,2),T=D[0],k=D[1],w=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.getQuotation(n,c);case 3:t=e.sent,x(t),k(s.map((function(e){var n=t.items.find((function(t){return t.itemId===e.id}));return void 0!==n?Object(a.a)(Object(a.a)({},e),{},{price:n.price}):Object(a.a)(Object(a.a)({},e),{},{price:0})}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(O.alertActions.show(O.alertMessage.FETCH_FAILURE,"error"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){w()}),[n,c]),Object(S.jsxs)(b.a,{container:!0,spacing:1,children:[Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(g.f,{title:"B\u1ea3ng ch\xe0o gi\xe1",columns:A,data:(t=T,t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(j.a,{variant:"subtitle2",children:e.description}),Object(S.jsx)(j.a,{variant:"caption",children:e.code})]}),quantityCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(j.a,{variant:"subtitle2",children:"".concat(v.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(S.jsx)(j.a,{variant:"caption",children:"".concat(v.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(S.jsx)(j.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(S.jsx)(j.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(j.a,{variant:"caption",children:"T\u1eeb: ".concat(v.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(S.jsx)(j.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(v.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]}),priceCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(j.a,{variant:"subtitle2",children:v.a.formatMoney(e.price,3)}),Object(S.jsx)(j.a,{variant:"caption",children:"VND/1 ".concat(e.unit)})]})})}))),actions:[],initialOrderBy:"no"})}),Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(g.l,{title:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m ch\xe0o gi\xe1",children:h.attachments.map((function(e,t){return Object(S.jsxs)(b.a,{container:!0,spacing:1,children:[Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(f.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(j.a,{variant:"subtitle2",children:e.fileName})}),Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(g.i,{filename:e.fileName,url:"/api/bidding/packages/".concat(n,"/attachments/getQuotationFile/").concat(c,"/").concat(e.id)})})]},t)}))})})]})}var N=Object(k.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(w.a),q=Object(k.a)({root:{color:"#fff",fontStyle:"uppercase",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:40,"&$expanded":{minHeight:40}},content:{margin:0,"& .MuiTypography-body1":{fontSize:"0.9rem"},"&$expanded":{margin:"0"}},expanded:{}})(I.a),U=Object(k.a)((function(){return{root:{padding:0}}}))(M.a);function _(e){var t=e.packageCode,n=e.canViewData,a=e.isClosedPackage,c=e.vendors,i=e.packageItems,o=l.a.useState([]),s=Object(r.a)(o,2),d=s[0],u=s[1];return Object(S.jsx)(g.l,{title:"Danh s\xe1ch nh\xe0 cung c\u1ea5p",noPadding:!0,children:c.map((function(e){return Object(S.jsxs)(N,{square:!0,expanded:d.includes(e.code),onChange:function(t,n){!function(e,t){t?d.includes(e)||u([].concat(Object(D.a)(d),[e])):u(d.filter((function(t){return t!==e})))}(e.code,n)},disabled:!(a&&e.submitted&&n),children:[Object(S.jsx)(q,{style:{backgroundColor:e.submitted?T.a[700]:p.a[700]},children:Object(S.jsxs)(j.a,{children:["".concat(e.code," - ").concat(e.longTextName," "),Object(S.jsx)(f.a,{icon:e.submitted?"check-circle":"times-circle"})," ".concat(e.submitted?"\u0110\xe3 n\u1ed9p ch\xe0o gi\xe1":"Ch\u01b0a n\u1ed9p ch\xe0o gi\xe1")]})}),Object(S.jsx)(U,{children:d.includes(e.code)&&Object(S.jsx)(E,{packageCode:t,packageItems:i,vendorCode:e.code})})]},e.code)}))})}var H=[{id:"no",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1}],P={attachments:[],begin:new Date,code:"",status:0,description:"",end:new Date,isInternal:!1,items:[],name:"",vendors:[]};function L(){var e,t=Object(u.h)().packageCode,n=Object(d.b)(),c=l.a.useState(P),s=Object(r.a)(c,2),D=s[0],T=s[1],k=l.a.useState(!1),w=Object(r.a)(k,2),I=w[0],M=w[1],A=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O.loadingActions.show()),e.prev=1,e.t0=T,e.next=5,y.a.get(t);case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=M,e.next=10,C.a.checkRolePermission("AUDITOR_ROLE");case 10:e.t3=e.sent,(0,e.t2)(e.t3),e.next=19;break;case 14:e.prev=14,e.t4=e.catch(1),T(P),M(!1),n(O.alertActions.show(O.alertMessage.FETCH_FAILURE,"error"));case 19:return e.prev=19,n(O.loadingActions.hide()),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,14,19,22]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){switch(e){case 0:return{text:"M\u1edbi",icon:"star",color:p.a[700]};case 1:return{text:"\u0110ang m\u1edf",icon:"spinner",color:h.a[700]};case 2:return{text:"\u0110\xe3 \u0111\xf3ng",icon:"check-circle",color:x.a[700]};default:return{text:"Kh\xf4ng x\xe1c \u0111\u1ecbnh",icon:"exclamation-circle",color:""}}};return l.a.useEffect((function(){A()}),[t]),Object(S.jsxs)(b.a,{container:!0,spacing:1,children:[Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(g.l,{title:D.isInternal?"\u0110\u1ea5u th\u1ea7u n\u1ed9i b\u1ed9":"\u0110\u1ea5u th\u1ea7u b\xecnh th\u01b0\u1eddng",children:Object(S.jsxs)(b.a,{container:!0,spacing:1,children:[Object(S.jsxs)(b.a,{item:!0,xs:12,md:6,children:[Object(S.jsx)(j.a,{variant:"caption",children:"M\xe3 s\u1ed1 g\xf3i th\u1ea7u"}),Object(S.jsxs)(j.a,{variant:"subtitle2",children:["".concat(D.code," - Tr\u1ea1ng th\xe1i: "),Object(S.jsx)(f.a,{icon:F(D.status).icon,color:F(D.status).color})," ".concat(F(D.status).text," "),2===D.status&&(I||!D.isInternal)&&Object(S.jsx)(g.i,{label:"T\u1ea3i t\u1ed5ng h\u1ee3p ch\xe0o gi\xe1",filename:"".concat(D.code," - Quotations Report.xlsx"),url:"/api/bidding/packages/getExcelReport/".concat(D.code)})]})]}),Object(S.jsx)(g.o,{title:"T\xean g\xf3i th\u1ea7u",content:D.name}),Object(S.jsx)(g.o,{title:"Th\u1eddi gian m\u1edf th\u1ea7u",content:v.a.formatDate(new Date(D.begin),"hh:mm dd/MM/yyyy")}),Object(S.jsx)(g.o,{title:"Th\u1eddi gian \u0111\xf3ng th\u1ea7u",content:v.a.formatDate(new Date(D.end),"hh:mm dd/MM/yyyy")}),Object(S.jsxs)(b.a,{item:!0,xs:12,children:[Object(S.jsx)(j.a,{variant:"caption",children:"M\xf4 t\u1ea3"}),Object(S.jsx)(m.a,{style:{padding:"8px"},variant:"outlined",children:Object(S.jsx)("div",{dangerouslySetInnerHTML:{__html:D.description}})})]}),Object(S.jsxs)(b.a,{xs:12,item:!0,children:[Object(S.jsx)(j.a,{variant:"caption",children:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m"}),D.attachments.map((function(e,t){return Object(S.jsxs)(b.a,{container:!0,spacing:1,children:[Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(f.a,{icon:{iconName:"check-square",prefix:"far"}})}),Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(j.a,{variant:"subtitle2",children:e.fileName})}),Object(S.jsx)(b.a,{item:!0,children:Object(S.jsx)(g.i,{filename:e.fileName,url:"/api/bidding/packages/".concat(D.code,"/attachments/").concat(e.id)})})]},t)}))]})]})})}),Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(_,{packageCode:D.code,canViewData:I||!D.isInternal,packageItems:D.items,isClosedPackage:2===D.status,vendors:D.vendors})}),Object(S.jsx)(b.a,{item:!0,xs:12,children:Object(S.jsx)(g.f,{title:"Danh s\xe1ch v\u1eadt t\u01b0, d\u1ecbch v\u1ee5",columns:H,data:(e=D.items,e.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{infoCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(j.a,{variant:"subtitle2",children:e.description}),Object(S.jsx)(j.a,{variant:"caption",children:e.code})]}),quantityCol:Object(S.jsxs)("div",{children:[Object(S.jsx)(j.a,{variant:"subtitle2",children:"".concat(v.a.formatMoney(e.quantity,3)," ").concat(e.unit)}),Object(S.jsx)(j.a,{variant:"caption",children:"".concat(v.a.formatMoney(e.optionQuantity,3)," ").concat(e.optionUnit)})]}),noteCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[null!==e.spec&&Object(S.jsx)(j.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),null!==e.spec&&Object(S.jsx)(j.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(S.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(S.jsx)(j.a,{variant:"caption",children:"T\u1eeb: ".concat(v.a.formatDate(new Date(e.begin),"dd/MM/yyyy"))}),Object(S.jsx)(j.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(v.a.formatDate(new Date(e.end),"dd/MM/yyyy"))})]})})}))),actions:[],initialOrderBy:"no"})})]})}},690:function(e,t){},856:function(e,t){},857:function(e,t){},878:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));var a=n(0),c=n.n(a),i=n(27),o=n(380),r=n(25),s=n(209),l=n(15),d=n(13),u="GET_INPUT_DATA_SUCCESS",j="GET_INPUT_DATA_FAILURE",b="CHANGE_HEADER_DATA",m="CHANGE_VENDORS_DATA",p="ADD_ITEM",h="EDIT_ITEM",x="REMOVE_ITEM",f="CHANGE_FILES",g={model:{begin:new Date,code:"",description:"",isInternal:!1,end:new Date,files:[],items:[],name:"",vendors:[]},materials:[],vendors:[]},O={state:g,getInputData:function(){},changeHeader:function(e,t){},changeVendors:function(e,t){},addItem:function(e){},editItem:function(e){},removeItem:function(e){},changeFiles:function(e){}};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{materials:t.payload.materials,vendors:t.payload.vendors});case j:return Object(d.a)(Object(d.a)({},e),{},{materials:[],vendors:[]});case b:return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},Object(l.a)({},t.payload.name,t.payload.value))});case m:if(t.payload.checked){var n=e.model.vendors.find((function(e){return e.code===t.payload.vendorCode}));if(void 0===n){var a=e.vendors.find((function(e){return e.code===t.payload.vendorCode}));return void 0!==a?Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{vendors:[].concat(Object(s.a)(e.model.vendors),[{code:a.code,longTextName:a.longTextName}])})}):e}return e}return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{vendors:e.model.vendors.filter((function(e){return e.code!==t.payload.vendorCode}))})});case p:return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{items:[].concat(Object(s.a)(e.model.items),[t.payload.item])})});case h:return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{items:[].concat(Object(s.a)(e.model.items.filter((function(e){return e.id!==t.payload.item.id}))),[t.payload.item])})});case x:return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{items:e.model.items.filter((function(e){return e.id!==t.payload.id}))})});case f:return Object(d.a)(Object(d.a)({},e),{},{model:Object(d.a)(Object(d.a)({},e.model),{},{files:t.payload.files})});default:return e}}var y=n(22),C=n.n(y),D=n(40),T=n(18),k=n(627),w=n(598),I={getInputData:function(){var e=Object(D.a)(C.a.mark((function e(t){var n,a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return{type:j}},n=function(e,t){return{type:u,payload:{materials:e,vendors:t}}},T.store.dispatch(T.loadingActions.show()),e.prev=3,e.next=6,Promise.all([k.a.getAll(),w.a.getVendors()]);case 6:c=e.sent,t(n(c[0],c[1])),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),t(a()),T.store.dispatch(T.alertActions.show(T.alertMessage.FETCH_FAILURE,"error"));case 14:return e.prev=14,T.store.dispatch(T.loadingActions.hide()),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(t){return e.apply(this,arguments)}}(),changeHeader:function(e,t,n){n({type:b,payload:{name:e,value:t}})},changeVendors:function(e,t,n){n({type:m,payload:{vendorCode:e,checked:t}})},addItem:function(e,t){t({type:p,payload:{item:e}})},editItem:function(e,t){t({type:h,payload:{item:e}})},removeItem:function(e,t){t({type:x,payload:{id:e}})},changeFiles:function(e,t){t({type:f,payload:{files:e}})}},M=n(2),S=Object(a.createContext)(O);function A(e){var t=e.children,n=c.a.useReducer(v,g),a=Object(r.a)(n,2),i=a[0],o=a[1],s={state:i,getInputData:function(){I.getInputData(o)},changeHeader:function(e,t){I.changeHeader(e,t,o)},changeVendors:function(e,t){I.changeVendors(e,t,o)},addItem:function(e){I.addItem(e,o)},editItem:function(e){I.editItem(e,o)},removeItem:function(e){I.removeItem(e,o)},changeFiles:function(e){I.changeFiles(e,o)}};return Object(M.jsx)(S.Provider,{value:s,children:t})}var F=n(47),E=n(70),N=n(211),q=n(46),U=n(563);function _(){var e=Object(i.f)(),t=Object(F.b)(),n=c.a.useContext(S),a=n.state,s=n.changeHeader,l=n.changeVendors,u=n.changeFiles,j=a.model,b=a.vendors,m=c.a.useState(null),p=Object(r.a)(m,2),h=p[0],x=p[1],f=function(e){s(e.target.name,e.target.value)},g=function(e,t){s(e,t)},O=function(){var n=Object(D.a)(C.a.mark((function n(){var c;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(T.loadingActions.show()),n.prev=1,n.next=4,U.a.createPackage(a.model);case 4:c=n.sent,t(T.alertActions.show("".concat(T.alertMessage.ACTION_SUCCESS),"success")),e.push("/bidding/expert/package/".concat(c)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),t(T.alertActions.show("".concat(T.alertMessage.ACTION_FAILURE),"error"));case 12:return n.prev=12,t(T.loadingActions.hide()),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return Object(M.jsx)(q.l,{title:"Th\xf4ng tin chung",children:Object(M.jsxs)(o.a,{container:!0,spacing:1,children:[Object(M.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(M.jsx)(q.p,{required:!0,label:"M\xe3 s\u1ed1",name:"code",type:"text",value:a.model.code,onChange:f})}),Object(M.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(M.jsx)(q.p,{required:!0,label:"T\xean g\xf3i th\u1ea7u",name:"name",type:"text",value:a.model.name,onChange:f})}),Object(M.jsxs)(o.a,{item:!0,xs:12,children:[Object(M.jsx)(E.a,{variant:"caption",children:"Lo\u1ea1i h\xecnh g\xf3i th\u1ea7u"}),Object(M.jsx)("div",{children:Object(M.jsx)(q.c,{checked:j.isInternal,name:"isInternal",label:"\u0110\u1ea5u th\u1ea7u n\u1ed9i b\u1ed9",onChange:function(e,t){s("isInternal",t)}})})]}),Object(M.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(M.jsx)(q.h,{label:"Th\u1eddi gian m\u1edf th\u1ea7u",name:"begin",value:a.model.begin,onChange:function(e){g("begin",e)},disablePast:!0,required:!0})}),Object(M.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(M.jsx)(q.h,{label:"Th\u1eddi gian \u0111\xf3ng th\u1ea7u",name:"end",value:a.model.end,onChange:function(e){g("end",e)},disablePast:!0,required:!0})}),Object(M.jsxs)(o.a,{item:!0,xs:12,children:[Object(M.jsx)(E.a,{variant:"caption",children:"N\u1ed9i dung"}),Object(M.jsx)(q.j,{value:a.model.description,onChange:function(e){s("description",e)}})]}),Object(M.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(M.jsxs)(o.a,{container:!0,item:!0,xs:12,spacing:1,alignItems:"flex-end",children:[Object(M.jsx)(o.a,{item:!0,xs:10,children:Object(M.jsx)(q.d,{label:"Ch\u1ecdn nh\xe0 cung c\u1ea5p",optionLabel:"label",value:h,options:function(e){return e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.longTextName)})}))}(b),getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){x(e)}})}),Object(M.jsx)(o.a,{item:!0,children:Object(M.jsx)(q.n,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){null!==h&&(j.vendors.map((function(e){return e.code})).includes(h.code)||l(h.code,!0))}})})]}),Object(M.jsx)(o.a,{container:!0,item:!0,xs:12,spacing:1,children:j.vendors.map((function(e,t){return Object(M.jsxs)(o.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(M.jsx)(o.a,{item:!0,children:Object(M.jsx)(E.a,{variant:"subtitle2",children:"".concat(t+1,". [").concat(e.code,"] - ").concat(e.longTextName)})}),Object(M.jsx)(o.a,{item:!0,children:Object(M.jsx)(q.n,{icon:"trash-alt",color:"danger",text:"X\xf3a",onClick:function(){var t;t=e.code,l(t,!1)}})})]},e.code)}))})]}),Object(M.jsxs)(o.a,{item:!0,xs:12,children:[Object(M.jsx)(E.a,{variant:"caption",children:"T\xe0i li\u1ec7u \u0111\xednh k\xe8m"}),Object(M.jsx)("div",{children:Object(M.jsx)(o.a,{container:!0,spacing:1,children:Object(M.jsx)(N.a,{showPreviews:!1,acceptedFiles:[".doc",".docx",".xls",".xlsx",".pdf",".rar",".zip"],showFileNames:!0,filesLimit:10,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&u(e)},showAlerts:!1})})})]}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.n,{icon:"plus",color:"success",text:"T\u1ea1o g\xf3i th\u1ea7u",variant:"contained",onClick:function(){O()}})})]})})}var H=n(538),P=n(851),L=n.n(P);var Q={excelDateToJSDate:function(e){var t=Math.floor(e-25569),n=new Date(1e3*(86400*t)),a=e-Math.floor(e)+1e-7,c=Math.floor(86400*a)-Math.floor(86400*a)%60,i=Math.floor(86400*a)%60,o=Math.floor(c/3600),r=Math.floor(c/60)%60;return new Date(n.getFullYear(),n.getMonth(),n.getDate(),o,r,i)},readToArray:function(e,t,n,a){return new Promise((function(c,i){var o=new FileReader;o.readAsArrayBuffer(e);var r=[];o.onload=function(){for(var e=new Uint8Array(o.result),s=L.a.read(e,{type:"array"}),l=s.Sheets[s.SheetNames[0]],u=0,j=function(){var e=Object(d.a)({},a),c=n+u;t.map((function(t){var n=l[L.a.utils.encode_cell({c:t.col,r:c})];if("string"===typeof e[t.name]||void 0!==n)switch(typeof e[t.name]){case"string":void 0!==n&&"s"===n.t&&(e[t.name]=n.v);break;case"number":"n"===n.t&&(e[t.name]=n.v)}else console.log(c),console.log(t.col),i();return!0})),r.push(e),u++};l[L.a.utils.encode_cell({c:t[0].col,r:n+u})];)j();c(r)}}))}},R=[{name:"no",col:0},{name:"code",col:1},{name:"spec",col:3},{name:"note",col:4},{name:"quantity",col:6},{name:"optionQuantity",col:8},{name:"begin",col:9},{name:"end",col:10}],V=[{id:"noNumber",label:"STT",numeric:!1,sortable:!1},{id:"infoCol",label:"H\u1ea1ng m\u1ee5c",numeric:!1,sortable:!1},{id:"quantityCol",label:"S\u1ed1 l\u01b0\u1ee3ng",numeric:!1,sortable:!1},{id:"noteCol",label:"Ghi ch\xfa",numeric:!1,sortable:!1},{id:"deliveryCol",label:"Th\u1eddi gian giao h\xe0ng",numeric:!1,sortable:!1},{id:"action",label:"",numeric:!1,sortable:!1}],G={id:0,no:"0",materialCode:"",materialDescription:"",begin:new Date,end:new Date,note:"",optionQuantity:"0",optionUnit:"",quantity:"0",spec:"",unit:""};function B(){var e,t,n=Object(F.b)(),a=c.a.useContext(S),i=a.state,s=a.addItem,u=a.editItem,j=a.removeItem,b=c.a.useState(G),m=Object(r.a)(b,2),p=m[0],h=m[1],x=c.a.useState(0),f=Object(r.a)(x,2),g=f[0],O=f[1],v=c.a.useState(!1),y=Object(r.a)(v,2),k=y[0],w=y[1],I=c.a.useState(!1),A=Object(r.a)(I,2),U=A[0],_=A[1],P=c.a.useState(!1),L=Object(r.a)(P,2),B=L[0],z=L[1],J=c.a.useState(),X=Object(r.a)(J,2),K=X[0],$=X[1],Y=function(){var e=Object(D.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===K){e.next=17;break}return z(!1),n(T.loadingActions.show()),e.prev=3,e.next=6,Q.readToArray(K,R,1,{no:0,code:"",spec:"",note:"",quantity:0,optionQuantity:0,begin:0,end:0});case 6:e.sent.filter((function(e){return e.no>0})).map((function(e){var t=i.materials.find((function(t){return t.code===e.code}));if(void 0!==t){var n={no:e.no.toString(),materialCode:e.code,spec:e.spec,begin:Q.excelDateToJSDate(e.begin),end:Q.excelDateToJSDate(e.end),materialDescription:t.description,note:e.note,unit:t.unit,id:g+1,optionUnit:t.optionUnit,quantity:e.quantity.toString(),optionQuantity:e.optionQuantity.toString()};O(g+1),s(n)}return!0})),n(T.alertActions.show(T.alertMessage.ACTION_SUCCESS,"success")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n(T.alertActions.show("File sai m\u1eabu! Vui l\xf2ng ki\u1ec3m tra l\u1ea1i!","error"));case 14:return e.prev=14,n(T.loadingActions.hide()),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}(),W=function(e){h(Object(d.a)(Object(d.a)({},p),{},Object(l.a)({},e.target.name,e.target.value)))},Z=[Object(M.jsx)(q.n,{tooltip:"Th\xeam m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){h(Object(d.a)(Object(d.a)({},G),{},{id:g,no:g.toString()})),O(g+1),_(!1),w(!0)}},1),Object(M.jsx)(q.n,{tooltip:"T\u1ea1o t\u1eeb file excel",text:"Excel",icon:"file-excel",color:"primary",onClick:function(){z(!0)}},2)];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(q.k,{open:B,onClose:function(){z(!1)},title:"T\u1ea3i t\u1ec7p excel",onSubmit:Y,children:Object(M.jsx)(N.a,{acceptedFiles:[".xls",".xlsx"],showPreviews:!1,showFileNames:!0,filesLimit:1,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&$(e[0])},showAlerts:!1})}),Object(M.jsx)(q.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:k,onClose:function(){w(!1)},onSubmit:function(){w(!1),U?u(p):s(p)},children:Object(M.jsxs)(o.a,{container:!0,spacing:1,children:[Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"no",label:"Th\u1ee9 t\u1ef1",type:"text",required:!0,value:p.no,onChange:W})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.d,{required:!0,label:"M\xe3 v\u1eadt t\u01b0",options:(t=i.materials,t.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&h(Object(d.a)(Object(d.a)({},p),{},{materialCode:e.code,materialDescription:e.description,unit:e.unit,optionUnit:e.optionUnit}))}})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"materialDescription",label:"Di\u1ec5n gi\u1ea3i",type:"text",disabled:!0,required:!0,value:p.materialDescription})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"spec",label:"Spec",type:"text",value:p.spec,onChange:W})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"note",label:"Ghi ch\xfa",type:"text",value:p.note,onChange:W})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"quantity",label:"S\u1ed1 l\u01b0\u1ee3ng 1",type:"number",value:p.quantity,onChange:W})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"unit",label:"\u0110\u01a1n v\u1ecb 1",type:"text",disabled:!0,required:!0,value:p.unit})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"optionQuantity",label:"S\u1ed1 l\u01b0\u1ee3ng 2",type:"number",value:p.optionQuantity,onChange:W})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.p,{name:"optionUnit",label:"\u0110\u01a1n v\u1ecb 2",type:"text",disabled:!0,required:!0,value:p.optionUnit})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.g,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u giao h\xe0ng",name:"begin",value:p.begin,onChange:function(e){h(Object(d.a)(Object(d.a)({},p),{},{begin:e}))},disablePast:!0,required:!0})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(q.g,{label:"Ng\xe0y k\u1ebft th\xfac giao h\xe0ng",name:"end",value:p.end,onChange:function(e){h(Object(d.a)(Object(d.a)({},p),{},{end:e}))},disablePast:!0,required:!0})})]})}),Object(M.jsx)(q.f,{title:"Danh s\xe1ch v\u1eadt t\u01b0, d\u1ecbch v\u1ee5",columns:V,data:(e=i.model.items,e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{noNumber:parseInt(e.no,10),infoCol:Object(M.jsxs)("div",{children:[Object(M.jsx)(E.a,{variant:"subtitle2",children:e.materialDescription}),Object(M.jsx)(E.a,{variant:"caption",children:e.materialCode})]}),quantityCol:Object(M.jsxs)("div",{children:[Object(M.jsx)(E.a,{variant:"subtitle2",children:"".concat(H.a.formatMoney(parseFloat(e.quantity),3)," ").concat(e.unit)}),Object(M.jsx)(E.a,{variant:"caption",children:"".concat(H.a.formatMoney(parseFloat(e.optionQuantity),3)," ").concat(e.optionUnit)})]}),noteCol:Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(M.jsx)(E.a,{variant:"caption",children:"Spec: ".concat(e.spec)}),Object(M.jsx)(E.a,{variant:"caption",children:"Ghi ch\xfa: ".concat(e.note)})]}),deliveryCol:Object(M.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(M.jsx)(E.a,{variant:"caption",children:"T\u1eeb: ".concat(H.a.formatDate(e.begin,"dd/MM/yyyy"))}),Object(M.jsx)(E.a,{variant:"caption",children:"\u0110\u1ebfn: ".concat(H.a.formatDate(e.end,"dd/MM/yyyy"))})]}),action:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(q.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){h(e),_(!0),w(!0)}(e)}}),Object(M.jsx)(q.n,{tooltip:"X\xf3a",text:"X\xf3a",icon:"trash-alt",color:"danger",onClick:function(){var t;t=e.id,j(t)}})]})})}))),actions:Z,initialOrderBy:"noNumber"})]})}function z(){var e=c.a.useContext(S).getInputData;return c.a.useEffect((function(){e()}),[]),Object(M.jsxs)(o.a,{container:!0,spacing:2,children:[Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(_,{})}),Object(M.jsx)(o.a,{item:!0,xs:12,children:Object(M.jsx)(B,{})})]})}function J(){return Object(M.jsx)(A,{children:Object(M.jsx)(z,{})})}var X=n(26),K=n(94),$=[{id:"code",label:"M\xe3",numeric:!1,sortable:!0},{id:"name",label:"T\xean g\xf3i th\u1ea7u",numeric:!1,sortable:!1},{id:"isInternal",label:"Lo\u1ea1i",numeric:!1,sortable:!0,format:function(e){return e.isInternal?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(X.a,{icon:"shield-alt",color:K.a[700]}),"N\u1ed9i b\u1ed9"]}):""}},{id:"begin",label:"M\u1edf th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return H.a.formatDate(new Date(e.begin),"dd/MM/yyyy - hh:mm")}},{id:"end",label:"\u0110\xf3ng th\u1ea7u",numeric:!1,sortable:!0,format:function(e){return H.a.formatDate(new Date(e.end),"dd/MM/yyyy - hh:mm")}},{id:"action",label:"",numeric:!1,sortable:!1}];function Y(){var e,t=Object(i.h)().status,n=Object(i.f)(),a=Object(F.b)(),o=c.a.useState([]),s=Object(r.a)(o,2),l=s[0],u=s[1],j=c.a.useState("Danh s\xe1ch g\xf3i th\u1ea7u"),b=Object(r.a)(j,2),m=b[0],p=b[1],h=[Object(M.jsx)(q.n,{tooltip:"L\xe0m m\u1edbi danh s\xe1ch",text:"L\xe0m m\u1edbi",icon:"sync-alt",color:"primary",onClick:function(){x()}},1)],x=function(){var e=Object(D.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(T.loadingActions.show()),e.prev=1,e.t0=u,e.next=5,U.a.getAll(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),a(T.alertActions.show(T.alertMessage.FETCH_FAILURE,"error"));case 12:return e.prev=12,a(T.loadingActions.hide()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){switch(x(),t){case"new":p("Danh s\xe1ch g\xf3i th\u1ea7u m\u1edbi");break;case"opening":p("Danh s\xe1ch g\xf3i th\u1ea7u \u0111ang m\u1edf");break;case"closed":p("Danh s\xe1ch g\xf3i th\u1ea7u \u0111\xe3 \u0111\xf3ng")}}),[t]),Object(M.jsx)(q.f,{title:m,columns:$,data:(e=l,e.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{action:Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(q.n,{tooltip:"Xem chi ti\u1ebft g\xf3i th\u1ea7u",text:"Xem",icon:"info-circle",color:"success",onClick:function(){n.push("/bidding/expert/package/".concat(e.code))}})})})}))),actions:h,initialOrderBy:"begin"})}var W=n(631);function Z(){var e=Object(i.i)().path;return Object(M.jsxs)(i.c,{children:[Object(M.jsx)(i.a,{path:"".concat(e,"/create-package"),component:J}),Object(M.jsx)(i.a,{path:"".concat(e,"/package-list/:status"),component:Y}),Object(M.jsx)(i.a,{path:"".concat(e,"/package/:packageCode"),component:W.a})]})}}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[14],{1094:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var c=n(0),r=n.n(c),a=n(30),i=n(29),s=n.n(i),o=n(45),u=n(14),l=n(483),p=n(440),b=n(511),d=n(22),j=n(126),x=n(131),h=n(1);function f(){var e=r.a.useContext(j.a),t=e.showAlert,n=e.showBackdrop,c=e.hideBackdrop,a=r.a.useState([]),i=Object(u.a)(a,2),f=i[0],m=i[1],O=r.a.useState(""),v=Object(u.a)(O,2),g=v[0],C=v[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,x.c.create("Expert",g);case 4:t(j.b.ACTION_SUCCESS,"success"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,x.c.remove("Expert",r);case 4:t(j.b.ACTION_SUCCESS,"success"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=m,e.next=5,x.c.getAll();case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),c(),t(j.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){w()}),[]),Object(h.jsx)(d.m,{title:"Danh s\xe1ch chuy\xean qu\u1ea3n",children:Object(h.jsxs)(l.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(h.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(d.r,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:g,onChange:function(e){C(e.target.value)}})}),Object(h.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(d.o,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){k()}})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(p.a,{})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:f.filter((function(e){return e.role===x.b})).map((function(e,t){return Object(h.jsx)(b.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){A(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}function m(){var e=r.a.useContext(j.a),t=e.showAlert,n=e.showBackdrop,c=e.hideBackdrop,a=r.a.useState([]),i=Object(u.a)(a,2),f=i[0],m=i[1],O=r.a.useState(""),v=Object(u.a)(O,2),g=v[0],C=v[1],k=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,x.c.create("Auditor",g);case 4:t(j.b.ACTION_SUCCESS,"success"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,x.c.remove("Auditor",r);case 4:t(j.b.ACTION_SUCCESS,"success"),w(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(j.b.ACTION_FAILURE,"error"),c();case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=m,e.next=5,x.c.getAll();case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),c(),t(j.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){w()}),[]),Object(h.jsx)(d.m,{title:"Danh s\xe1ch ki\u1ec3m tra",children:Object(h.jsxs)(l.a,{container:!0,alignItems:"flex-end",spacing:1,children:[Object(h.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(d.r,{label:"M\xe3 s\u1ed1 nh\xe2n vi\xean",required:!0,type:"text",value:g,onChange:function(e){C(e.target.value)}})}),Object(h.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(d.o,{icon:"plus",color:"primary",text:"Th\xeam",variant:"contained",onClick:function(){k()}})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(p.a,{})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:f.filter((function(e){return e.role===x.a})).map((function(e,t){return Object(h.jsx)(b.a,{style:{margin:"4px"},label:"".concat(e.userNumber,"-").concat(e.fullName),onDelete:function(){A(e.userNumber)},color:"primary",variant:"outlined",size:"small"},t)}))})]})})}var O=n(17),v=n(20),g=n(193),C=n(56),k=n(623),A=[{id:"code",label:"M\xe3",numeric:!1,sortable:!0},{id:"description",label:"Di\u1ec5n gi\u1ea3i",numeric:!1,sortable:!1},{id:"unit",label:"\u0110\u01a1n v\u1ecb",numeric:!1,sortable:!1},{id:"optionUnit",label:"\u0110\u01a1n v\u1ecb 2",numeric:!1,sortable:!1},{id:"action",label:"",numeric:!1,sortable:!1}],w={code:"",description:"",unit:"",optionUnit:""};function y(){var e,t=r.a.useContext(j.a),n=t.showAlert,c=t.showBackdrop,a=t.hideBackdrop,i=r.a.useState(!1),p=Object(u.a)(i,2),b=p[0],x=p[1],f=r.a.useState(!1),m=Object(u.a)(f,2),y=m[0],T=m[1],S=r.a.useState([]),E=Object(u.a)(S,2),I=E[0],F=E[1],N=r.a.useState(w),U=Object(u.a)(N,2),_=U[0],L=U[1],R=r.a.useState(!1),q=Object(u.a)(R,2),B=q[0],D=q[1],M=r.a.useState(),H=Object(u.a)(M,2),z=H[0],P=H[1],V=r.a.useState(!1),J=Object(u.a)(V,2),K=J[0],X=J[1],G=r.a.useState([]),Q=Object(u.a)(G,2),W=Q[0],Y=Q[1],Z=function(){X(!1)},$=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===z){e.next=18;break}return D(!1),Y([]),c(),e.prev=4,e.t0=Y,e.next=8,k.a.addFromExcel(z);case 8:e.t1=e.sent,(0,e.t0)(e.t1),ce(),X(!0),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(4),a(),n(j.b.ACTION_FAILURE,"error");case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(){return e.apply(this,arguments)}}(),ee=function(e){L(Object(v.a)(Object(v.a)({},_),{},Object(O.a)({},e.target.name,e.target.value)))},te=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x(!1),c(),e.prev=2,!y){e.next=8;break}return e.next=6,k.a.edit(_.code,_);case 6:e.next=10;break;case 8:return e.next=10,k.a.create(_);case 10:n(j.b.ACTION_SUCCESS,"success"),ce(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),n(j.b.ACTION_FAILURE,"error"),a();case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),ne=[Object(h.jsx)(d.o,{tooltip:"Th\xeam m\u1edbi",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){L(w),T(!1),x(!0)}},1),Object(h.jsx)(d.o,{tooltip:"T\u1ea1o t\u1eeb file excel",text:"Excel",icon:"file-excel",color:"primary",onClick:function(){D(!0)}},2)],ce=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),e.prev=1,e.t0=F,e.next=5,k.a.getAll();case 5:e.t1=e.sent,(0,e.t0)(e.t1),a(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),a(),n(j.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){ce()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.l,{open:K,onClose:Z,title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",onSubmit:Z,children:Object(h.jsx)(l.a,{container:!0,spacing:1,children:W.map((function(e,t){return Object(h.jsxs)(l.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(h.jsx)(l.a,{item:!0,xs:12,md:3,style:{color:e.isAdded?"green":"red"},children:Object(h.jsx)(C.a,{variant:"subtitle2",children:e.code})}),!e.isAdded&&Object(h.jsx)(l.a,{item:!0,xs:12,md:9,style:{color:e.isAdded?"green":"red"},children:Object(h.jsx)(C.a,{variant:"caption",children:e.message})})]},t)}))})}),Object(h.jsx)(d.l,{open:B,onClose:function(){D(!1)},title:"T\u1ea3i t\u1ec7p excel",onSubmit:$,children:Object(h.jsx)(g.a,{acceptedFiles:[".xls",".xlsx"],showPreviews:!1,showFileNames:!0,filesLimit:1,maxFileSize:25e6,useChipsForPreview:!0,dropzoneText:"K\xe9o th\u1ea3 file v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i l\xean",onChange:function(e){Array.isArray(e)&&P(e[0])},showAlerts:!1})}),Object(h.jsx)(d.l,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:b,onClose:function(){x(!1)},onSubmit:te,children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(d.r,{name:"code",label:"M\xe3",type:"text",required:!0,value:_.code,onChange:ee})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(d.r,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,value:_.description,onChange:ee})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(d.r,{name:"unit",label:"\u0110\u01a1n v\u1ecb",type:"text",required:!0,value:_.unit,onChange:ee})}),Object(h.jsx)(l.a,{item:!0,xs:12,children:Object(h.jsx)(d.r,{name:"optionUnit",label:"\u0110\u01a1n v\u1ecb 2",type:"text",required:!0,value:_.optionUnit,onChange:ee})})]})}),Object(h.jsx)(d.g,{title:"Material/Service master",columns:A,data:(e=I,e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{action:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.o,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){L(e),T(!0),x(!0)}(e)}}),Object(h.jsx)(d.o,{tooltip:"X\xf3a",text:"X\xf3a",icon:"trash-alt",color:"danger"})]})})}))),actions:ne,initialOrderBy:"code"})]})}var T=n(588),S=[{id:"code",label:"M\xe3 s\u1ed1 thu\u1ebf",numeric:!1,sortable:!0},{id:"longTextName",label:"Nh\xe0 cung c\u1ea5p",numeric:!1,sortable:!0},{id:"action",label:"",numeric:!1,sortable:!1}];function E(){var e,t=r.a.useContext(j.a),n=t.showAlert,c=t.showBackdrop,i=t.hideBackdrop,l=Object(a.i)().filter,p=Object(a.g)(),b=r.a.useState([]),x=Object(u.a)(b,2),f=x[0],m=x[1],O=[Object(h.jsx)(h.Fragment,{})],g=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(),e.prev=1,"approved"!==l){e.next=10;break}return e.t0=m,e.next=6,T.a.getVendors();case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=15;break;case 10:return e.t2=m,e.next=13,T.a.getRegisterList();case 13:e.t3=e.sent,(0,e.t2)(e.t3);case 15:i(),e.next=22;break;case 18:e.prev=18,e.t4=e.catch(1),i(),n(j.b.FETCH_FAILURE,"error");case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){g()}),[l]),Object(h.jsx)(d.g,{title:"approved"===l?"Danh s\xe1ch nh\xe0 cung c\u1ea5p":"Danh s\xe1ch ch\u1edd ph\xea duy\u1ec7t",columns:S,data:(e=f,e.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{action:Object(h.jsx)(d.o,{tooltip:"Chi ti\u1ebft",text:"Chi ti\u1ebft",icon:"info-circle",color:"success",onClick:function(){p.push("/e-bidding/admin/vendors/detail/".concat(e.code))}})})}))),actions:O,initialOrderBy:"code"})}var I={addresses:[],code:"",isActive:!1,longTextName:"",shortTextName:""};function F(){var e=r.a.useContext(j.a),t=e.showAlert,n=e.showBackdrop,c=e.hideBackdrop,i=Object(a.i)().code,p=Object(a.g)(),b=r.a.useState(I),x=Object(u.a)(b,2),f=x[0],m=x[1],O=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.t0=m,e.next=5,T.a.getDetail(i);case 5:e.t1=e.sent,(0,e.t0)(e.t1),c(),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(1),c(),t(j.b.FETCH_FAILURE,"error");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,T.a.approve(i);case 4:t(j.b.ACTION_SUCCESS,"success"),O(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),c(),t(j.b.ACTION_FAILURE,"error");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(),e.prev=1,e.next=4,T.a.reject(i);case 4:t(j.b.ACTION_SUCCESS,"success"),c(),p.push("/e-bidding/admin/vendors/list/waiting"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),c(),t(j.b.ACTION_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){O()}),[i]),Object(h.jsx)(d.m,{title:"Th\xf4ng tin nh\xe0 cung c\u1ea5p",children:Object(h.jsxs)(l.a,{container:!0,spacing:1,children:[Object(h.jsx)(d.q,{title:"M\xe3 s\u1ed1 thu\u1ebf",content:f.code}),Object(h.jsx)(d.q,{title:"T\xean nh\xe0 cung c\u1ea5p",content:f.longTextName}),Object(h.jsx)(d.q,{title:"T\xean r\xfat g\u1ecdn",content:f.shortTextName}),Object(h.jsx)(d.q,{title:"Tr\u1ea1ng th\xe1i",content:f.isActive?"\u0110\xe3 ph\xea duy\u1ec7t":"Ch\u1edd ph\xea duy\u1ec7t..."}),f.addresses.filter((function(e){return 1===e.addressType})).map((function(e,t){return Object(h.jsx)(d.q,{title:"\u0110\u1ecba ch\u1ec9 ".concat(t+1),content:e.data},t)})),f.addresses.filter((function(e){return 2===e.addressType})).map((function(e,t){return Object(h.jsx)(d.q,{title:"Email ".concat(t+1),content:e.data},t)})),f.addresses.filter((function(e){return 3===e.addressType})).map((function(e,t){return Object(h.jsx)(d.q,{title:"\u0110i\u1ec7n tho\u1ea1i li\xean h\u1ec7 ".concat(t+1),content:e.data},t)})),!f.isActive&&Object(h.jsxs)(l.a,{xs:12,container:!0,item:!0,spacing:1,children:[Object(h.jsx)(l.a,{item:!0,children:Object(h.jsx)(d.o,{variant:"contained",color:"success",icon:"check-circle",text:"Ph\xea duy\u1ec7t",onClick:function(){v()}})}),Object(h.jsx)(l.a,{item:!0,children:Object(h.jsx)(d.o,{variant:"contained",color:"danger",icon:"ban",text:"T\u1eeb ch\u1ed1i",onClick:function(){g()}})})]})]})})}function N(){var e=Object(a.j)().path;return Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"".concat(e,"/experts"),component:f}),Object(h.jsx)(a.b,{path:"".concat(e,"/auditors"),component:m}),Object(h.jsx)(a.b,{path:"".concat(e,"/materials"),component:y}),Object(h.jsx)(a.b,{path:"".concat(e,"/vendors/list/:filter"),component:E}),Object(h.jsx)(a.b,{path:"".concat(e,"/vendors/detail/:code"),component:F})]})}},588:function(e,t,n){"use strict";var c=n(10),r=n.n(c),a="/api/bidding/vendors";var i={getVendors:function(){return r.a.get("".concat(a,"/getVendors"))},getRegisterList:function(){return r.a.get("".concat(a,"/getRegisterList"))},getDetail:function(e){return r.a.get("".concat(a,"/getDetail/").concat(e))},approve:function(e){return r.a.post("".concat(a,"/approve/").concat(e))},reject:function(e){return r.a.post("".concat(a,"/reject/").concat(e))}};t.a=i},623:function(e,t,n){"use strict";var c=n(10),r=n.n(c),a="/api/bidding/materials";var i={getAll:function(){return r.a.get(a)},create:function(e){return r.a.post(a,e)},edit:function(e,t){return r.a.put("".concat(a,"/").concat(e),t)},remove:function(e){return r.a.delete("".concat(a,"/").concat(e))},addFromExcel:function(e){var t=new FormData;return t.append("files",e,e.name),r.a.post("".concat(a,"/addFromExcel"),t,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i}}]);
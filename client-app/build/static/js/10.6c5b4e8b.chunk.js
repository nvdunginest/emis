(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[10],{1095:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var a=n(0),c=n.n(a),r=n(30),i=n(29),o=n.n(i),s=n(45),l=n(14),d=n(44),u=n(57),j=n(165),h=n(483),b=n(493),m=n(494),x=n(490),p=n(491),O=n(492),f=n(495),g=n(22),y=n(516),v=n(126),C=n(565),k=n(640),W=n(1),M=Object(u.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function w(){var e=M(),t=c.a.useContext(v.a),n=t.showAlert,a=t.showBackdrop,r=t.hideBackdrop,i=c.a.useState(null),u=Object(l.a)(i,2),w=u[0],S=u[1],q=c.a.useState([]),F=Object(l.a)(q,2),A=F[0],E=F[1],D=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(),null===w){e.next=16;break}return e.prev=2,e.t0=E,e.next=6,k.a.report(w.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),E([]),n(v.b.FETCH_FAILURE,"error");case 14:e.next=17;break;case 16:E([]);case 17:r();case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){D()}),[w]),Object(W.jsxs)(j.a,{className:e.root,children:[Object(W.jsx)(h.a,{container:!0,children:Object(W.jsxs)(h.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(W.jsx)(h.a,{item:!0,xs:6,children:Object(W.jsx)(C.a,{selectedProject:w,onChange:function(e){S(e)}})}),null!==w&&Object(W.jsx)(h.a,{container:!0,spacing:1,item:!0,xs:6,children:Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(g.o,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:D})})})]})}),Object(W.jsx)(b.a,{className:e.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(x.a,{children:Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(W.jsx)(f.a,{children:A.map((function(e){return Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:y.a.formatMoney(e.quantity,3)}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:null!==w&&Object(W.jsx)(d.a,{to:"/project-system/estimator/resources/".concat(w.code,"/").concat(e.serviceMasterCode),style:{textDecoration:"none"},children:Object(W.jsx)(g.o,{tooltip:"\u0110\u1ecbnh m\u1ee9c",text:"\u0110\u1ecbnh m\u1ee9c",icon:"boxes",color:"info"})})})]},e.serviceMasterCode)}))})]})})]})}var S=n(17),q=n(20),F=n(10),A=n.n(F);var E={getAll:function(){return A.a.get("/api/project-system/materials")}},D="/api/project-system/resources";var I={getAll:function(e,t){return A.a.get("".concat(D,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t))},report:function(e){return A.a.get("".concat(D,"/report?projectCode=").concat(e))},create:function(e){return A.a.post(D,e)},edit:function(e){return A.a.put(D,e)},remove:function(e,t){return A.a.delete("".concat(D,"?clusterCode=").concat(e,"&elementCode=").concat(t))}},H=Object(u.a)({root:{width:"100%",height:"100%"},container:{maxHeight:440}}),N={projectCode:"",serviceMasterCode:"",materialCode:"",description:"",unit:"",quantity:""};function L(){var e,t=H(),n=Object(r.i)(),a=n.projectCode,i=n.serviceMasterCode,d=c.a.useContext(v.a),u=d.showAlert,y=d.showBackdrop,C=d.hideBackdrop,k=c.a.useState(!1),M=Object(l.a)(k,2),w=M[0],F=M[1],A=c.a.useState(!1),D=Object(l.a)(A,2),L=D[0],B=D[1],T=c.a.useState([]),U=Object(l.a)(T,2),_=U[0],K=U[1],R=c.a.useState(null),z=Object(l.a)(R,2),P=z[0],Y=z[1],J=c.a.useState([]),V=Object(l.a)(J,2),G=V[0],Q=V[1],X=c.a.useState(N),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(),e.prev=1,e.t0=K,e.next=5,E.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=9,ne(a,i);case 9:C(),e.next=16;break;case 12:e.prev=12,e.t2=e.catch(1),C(),u(v.b.FETCH_FAILURE,"error");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(s.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Q,e.next=4,I.getAll(t,n);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),Q([]),u(v.b.FETCH_FAILURE,"error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),ae=function(e){ee(Object(q.a)(Object(q.a)({},$),{},Object(S.a)({},e.target.name,e.target.value)))},ce=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F(!1),y(),e.prev=2,!L){e.next=8;break}return e.next=6,I.edit({projectCode:$.projectCode,materialCode:$.materialCode,quantity:parseFloat($.quantity),serviceMasterCode:$.serviceMasterCode});case 6:e.next=10;break;case 8:return e.next=10,I.create({projectCode:$.projectCode,materialCode:$.materialCode,quantity:parseFloat($.quantity),serviceMasterCode:$.serviceMasterCode});case 10:return u(v.b.ACTION_SUCCESS,"success"),y(),e.next=14,ne(a,i);case 14:C(),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),u(v.b.ACTION_FAILURE,"error"),C();case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){te()}),[]),console.log(G),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(g.l,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:w,onClose:function(){F(!1)},onSubmit:ce,children:Object(W.jsxs)(h.a,{container:!0,spacing:1,children:[Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.r,{name:"projectCode",label:"D\u1ef1 \xe1n",type:"text",required:!0,disabled:!0,value:$.projectCode,onChange:ae})}),Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.r,{name:"serviceMasterCode",label:"M\xe3 BOS",type:"text",required:!0,disabled:!0,value:$.serviceMasterCode,onChange:ae})}),Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.e,{required:!0,label:"M\xe3 v\u1eadt t\u01b0",options:(e=_,e.map((function(e){return Object(q.a)(Object(q.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",value:P,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){Y(e),null!==e&&ee(Object(q.a)(Object(q.a)({},$),{},{materialCode:e.code,description:e.description,unit:e.unit}))}})}),Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.r,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,disabled:!0,value:$.description,onChange:ae})}),Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.r,{name:"unit",label:"\u0110\u01a1n v\u1ecb",type:"text",required:!0,disabled:!0,value:$.unit,onChange:ae})}),Object(W.jsx)(h.a,{item:!0,xs:12,children:Object(W.jsx)(g.r,{name:"quantity",label:"Kh\u1ed1i l\u01b0\u1ee3ng",type:"number",required:!0,value:$.quantity,onChange:ae})})]})}),Object(W.jsxs)(j.a,{className:t.root,children:[Object(W.jsx)(h.a,{container:!0,children:Object(W.jsx)(h.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:Object(W.jsx)(g.o,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){ee({projectCode:a,serviceMasterCode:i,materialCode:"",description:"",quantity:"0",unit:""}),B(!1),F(!0)}})})}),Object(W.jsx)(b.a,{className:t.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(x.a,{children:Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(W.jsx)(f.a,{children:G.map((function(e){return Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:e.quantity}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:Object(W.jsx)(g.o,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){ee({projectCode:e.projectCode,materialCode:e.materialCode,description:e.description,quantity:e.quantity.toString(),serviceMasterCode:e.serviceMasterCode,unit:e.unit}),B(!0),F(!0)}(e)}})})]},e.materialCode)}))})]})})]})]})}var B=Object(u.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function T(){var e=B(),t=c.a.useContext(v.a),n=t.showAlert,a=t.showBackdrop,r=t.hideBackdrop,i=c.a.useState(null),d=Object(l.a)(i,2),u=d[0],k=d[1],M=c.a.useState([]),w=Object(l.a)(M,2),S=w[0],q=w[1],F=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a(),null===u){e.next=16;break}return e.prev=2,e.t0=q,e.next=6,I.report(u.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),q([]),n(v.b.FETCH_FAILURE,"error");case 14:e.next=17;break;case 16:q([]);case 17:r();case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){F()}),[u]),Object(W.jsxs)(j.a,{className:e.root,children:[Object(W.jsx)(h.a,{container:!0,children:Object(W.jsxs)(h.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(W.jsx)(h.a,{item:!0,xs:6,children:Object(W.jsx)(C.a,{selectedProject:u,onChange:function(e){k(e)}})}),null!==u&&Object(W.jsx)(h.a,{container:!0,spacing:1,item:!0,xs:6,children:Object(W.jsx)(h.a,{item:!0,children:Object(W.jsx)(g.o,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:F})})})]})}),Object(W.jsx)(b.a,{className:e.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(x.a,{children:Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"WBS level 3"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i WBS"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:"K\u1ef3"}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]})}),Object(W.jsx)(f.a,{children:S.map((function(e,t){return Object(W.jsxs)(p.a,{children:[Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.elementCode}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.elementDescription}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(W.jsx)(O.a,{align:"left",style:{minWidth:"20%"},children:e.period}),Object(W.jsx)(O.a,{align:"right",style:{minWidth:"20%"},children:y.a.formatMoney(e.quantity,3)})]},t)}))})]})})]})}function U(){var e=Object(r.j)().path;return Object(W.jsxs)(r.d,{children:[Object(W.jsx)(r.b,{path:"".concat(e,"/item-report"),component:w}),Object(W.jsx)(r.b,{path:"".concat(e,"/resources/:projectCode/:serviceMasterCode"),component:L}),Object(W.jsx)(r.b,{path:"".concat(e,"/rbs"),component:T})]})}},516:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=a},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(29),c=n.n(a),r=n(45),i=n(14),o=n(20),s=n(0),l=n.n(s),d=n(22),u=n(10),j=n.n(u);var h={getAll:function(){return j.a.get("/api/project-system/projects")}},b=n(1),m=function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function x(e){var t=e.selectedProject,n=e.onChange,a=l.a.useState([]),o=Object(i.a)(a,2),s=o[0],u=o[1],j=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=u,e.next=4,h.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),u([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){var e=function(){var e=localStorage.getItem("projectCode"),t=localStorage.getItem("projectName");return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),j()}),[]),Object(b.jsx)(d.e,{required:!0,label:"D\u1ef1 \xe1n",options:m(s),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&(n({code:e.code,name:e.name}),function(e){localStorage.setItem("projectCode",e.code),localStorage.setItem("projectName",e.name)}(e))}})}},640:function(e,t,n){"use strict";var a=n(10),c=n.n(a),r="/api/project-system/items";var i={getAll:function(e){return c.a.get("".concat(r,"?clusterCode=").concat(e))},report:function(e){return c.a.get("".concat(r,"/report?projectCode=").concat(e))},create:function(e){return c.a.post(r,e)},edit:function(e){return c.a.put(r,e)},remove:function(e,t){return c.a.delete("".concat(r,"?clusterCode=").concat(e,"&serviceMasterCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),c.a.post("".concat(r,"/addFromExcel?clusterCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i}}]);
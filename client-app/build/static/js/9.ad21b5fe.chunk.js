(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[9],{1091:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));var c=n(0),a=n.n(c),r=n(25),i=n(23),s=n.n(i),o=n(41),l=n(16),u=n(18),d=n(17),j=n(40),h=n(300),b=n(338),x=n(136),p=n(356),m=n(357),f=n(353),O=n(354),g=n(355),v=n(358),C=n(48),y=n(109),k=n(432),S=n(10),w=n.n(S),q="/api/project-system/clusters";var M={getAll:function(e){return w.a.get("".concat(q,"?projectCode=").concat(e))},get:function(e){return w.a.get("".concat(q,"/").concat(e))},create:function(e){return w.a.post(q,e)},edit:function(e,t){return w.a.put("".concat(q,"/").concat(e),t)},remove:function(e){return w.a.delete("".concat(q,"/").concat(e))}},W=n(2),F=Object(h.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),E={code:"",description:"",note:"",projectCode:""};function A(){var e=F(),t=a.a.useContext(y.a),n=t.showAlert,c=t.showBackdrop,r=t.hideBackdrop,i=a.a.useState(!1),h=Object(d.a)(i,2),S=h[0],w=h[1],q=a.a.useState(!1),A=Object(d.a)(q,2),T=A[0],I=A[1],N=a.a.useState(null),L=Object(d.a)(N,2),D=L[0],B=L[1],H=a.a.useState([]),U=Object(d.a)(H,2),_=U[0],R=U[1],K=a.a.useState(E),z=Object(d.a)(K,2),Y=z[0],G=z[1],P=function(e){G(Object(u.a)(Object(u.a)({},Y),{},Object(l.a)({},e.target.name,e.target.value)))},J=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!1),c(),e.prev=2,!T){e.next=8;break}return e.next=6,M.edit(Y.code,Y);case 6:e.next=12;break;case 8:if(null===D){e.next=12;break}return Y.projectCode=D.code,e.next=12,M.create(Y);case 12:n(y.b.ACTION_SUCCESS,"success"),V(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),n(y.b.ACTION_FAILURE,"error"),r();case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c(),null===D){e.next=16;break}return e.prev=2,e.t0=R,e.next=6,M.getAll(D.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),R([]),n(y.b.FETCH_FAILURE,"error");case 14:e.next=17;break;case 16:R([]);case 17:r();case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){V()}),[D]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(C.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:S,onClose:function(){w(!1)},onSubmit:J,children:Object(W.jsxs)(b.a,{container:!0,spacing:1,children:[Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"code",label:"M\xe3",type:"text",required:!0,value:Y.code,onChange:P})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,value:Y.description,onChange:P})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"note",label:"Ghi ch\xfa",type:"text",required:!0,value:Y.note,onChange:P})})]})}),Object(W.jsxs)(x.a,{className:e.root,children:[Object(W.jsx)(b.a,{container:!0,children:Object(W.jsxs)(b.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(W.jsx)(b.a,{item:!0,xs:6,children:Object(W.jsx)(k.a,{selectedProject:D,onChange:function(e){B(e)}})}),null!==D&&Object(W.jsxs)(b.a,{container:!0,spacing:1,item:!0,xs:6,children:[Object(W.jsx)(b.a,{item:!0,children:Object(W.jsx)(C.n,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){G(E),I(!1),w(!0)}})}),Object(W.jsx)(b.a,{item:!0,children:Object(W.jsx)(C.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:V})})]})]})}),Object(W.jsx)(p.a,{className:e.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(f.a,{children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 \u0111i\u1ec3n h\xecnh"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"Ghi ch\xfa"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:"WBS"}),Object(W.jsx)(g.a,{align:"right",children:"C\xf4ng t\xe1c"}),Object(W.jsx)(g.a,{align:"right"})]})}),Object(W.jsx)(v.a,{children:_.map((function(e){return Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.code}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.note}),Object(W.jsx)(g.a,{align:"right",children:e.elementCount}),Object(W.jsx)(g.a,{align:"right",children:e.itemCount}),Object(W.jsxs)(g.a,{align:"right",style:{minWidth:"20%"},children:[Object(W.jsx)(C.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){G(e),I(!0),w(!0)}(e)}}),Object(W.jsx)(j.a,{to:"/project-system/designer/element-clusters/".concat(e.projectCode,"/").concat(e.code),style:{textDecoration:"none"},children:Object(W.jsx)(C.n,{tooltip:"Ph\xe2n b\u1ed5 trong WBS",text:"WBS",icon:"sitemap",color:"primary"})}),Object(W.jsx)(j.a,{to:"/project-system/designer/items/".concat(e.code),style:{textDecoration:"none"},children:Object(W.jsx)(C.n,{tooltip:"B\xf3c kh\u1ed1i l\u01b0\u1ee3ng",text:"Kh\u1ed1i l\u01b0\u1ee3ng",icon:"list-ol",color:"info"})})]})]},e.code)}))})]})})]})]})}var T=n(531),I="/api/project-system/elementClusters";var N={getAll:function(e){return w.a.get("".concat(I,"?clusterCode=").concat(e))},create:function(e){return w.a.post(I,e)},edit:function(e){return w.a.put(I,e)},remove:function(e,t){return w.a.delete("".concat(I,"?clusterCode=").concat(e,"&elementCode=").concat(t))}},L=n(34),D=n(373),B=function(e,t){var n=t.find((function(t){return t.elementCode===e.code}));return void 0!==n?D.a.formatMoney(n.quantity,2):""};function H(e){var t=e.data,n=e.elementClusters,c=e.node,a=e.onCreate,r=e.onEdit,i=e.onExpand,s=t.filter((function(e){return e.code!==c.code&&e.level===c.level+1&&e.code.includes(c.code)}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(O.a,{hover:!0,tabIndex:-1,children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%",paddingLeft:"".concat(16*(c.level-1)+16,"px")},children:Object(W.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(W.jsx)("div",{style:{width:"16px"},children:s.length>0?c.expanded?Object(W.jsx)(L.a,{icon:{prefix:"far",iconName:"minus-square"},onClick:function(){i(!1,c)}}):Object(W.jsx)(L.a,{icon:{prefix:"far",iconName:"plus-square"},onClick:function(){i(!0,c)}}):Object(W.jsx)(L.a,{style:{opacity:.3},icon:{prefix:"far",iconName:"square"}})}),Object(W.jsx)("div",{style:{paddingLeft:"4px"},children:c.code})]})}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%",paddingLeft:"".concat(16*(c.level-1)+16,"px")},children:c.description}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:B(c,n)}),Object(W.jsx)(g.a,{children:s.length<=0?""!==B(c,n)?Object(W.jsx)(C.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){var e=n.find((function(e){return e.elementCode===c.code}));void 0!==e&&r(e)}}):Object(W.jsx)(C.n,{tooltip:"Th\xeam",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){a(c.code)}}):Object(W.jsx)(W.Fragment,{})})]}),c.expanded&&Object(W.jsx)(W.Fragment,{children:s.map((function(e){return Object(W.jsx)(H,{data:t,elementClusters:n,node:e,onCreate:a,onEdit:r,onExpand:i},e.code)}))})]})}function U(e){var t=e.clusterCode,n=a.a.useState(null),c=Object(d.a)(n,2),r=c[0],i=c[1];return a.a.useEffect((function(){M.get(t).then((function(e){i(e)})).catch((function(){i(null)}))}),[t]),Object(W.jsx)(C.p,{label:"\u0110i\u1ec3n h\xecnh",value:null!==r?"[".concat(r.code,"]-").concat(r.description):"\u0110ang t\u1ea3i d\u1eef li\u1ec7u",disabled:!0})}var _=Object(h.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),R={elementCode:"",clusterCode:"",quantity:""};function K(){var e=_(),t=Object(r.i)(),n=t.projectCode,c=t.clusterCode,i=a.a.useContext(y.a),j=i.showAlert,h=i.showBackdrop,k=i.hideBackdrop,S=a.a.useState(!1),w=Object(d.a)(S,2),q=w[0],M=w[1],F=a.a.useState(!1),E=Object(d.a)(F,2),A=E[0],I=E[1],L=a.a.useState([]),D=Object(d.a)(L,2),B=D[0],K=D[1],z=a.a.useState([]),Y=Object(d.a)(z,2),G=Y[0],P=Y[1],J=a.a.useState(R),V=Object(d.a)(J,2),Q=V[0],X=V[1],Z=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.getAll(n);case 3:t=e.sent,K(t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{expanded:1===e.level})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(y.b.FETCH_FAILURE,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.getAll(c);case 3:t=e.sent,P(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(y.b.FETCH_FAILURE,"error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(),e.next=3,Z();case 3:return e.next=5,$();case 5:k();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e){X(Object(u.a)(Object(u.a)({},Q),{},Object(l.a)({},e.target.name,e.target.value)))},ne=function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(!1),h(),e.prev=2,!A){e.next=9;break}return t={elementCode:Q.elementCode,clusterCode:Q.clusterCode,quantity:parseFloat(Q.quantity)},e.next=7,N.edit(t);case 7:e.next=12;break;case 9:return n={elementCode:Q.elementCode,clusterCode:Q.clusterCode,quantity:parseFloat(Q.quantity)},e.next=12,N.create(n);case 12:return j(y.b.ACTION_SUCCESS,"success"),e.next=15,$();case 15:k(),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),j(y.b.ACTION_FAILURE,"error"),k();case 22:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}();a.a.useEffect((function(){ee()}),[]);var ce=B.find((function(e){return 1===e.level}));return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(C.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:q,onClose:function(){M(!1)},onSubmit:ne,children:Object(W.jsxs)(b.a,{container:!0,spacing:1,children:[Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"elementCode",label:"M\xe3 WBS",type:"text",disabled:!0,required:!0,value:Q.elementCode,onChange:te})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"clusterCode",label:"M\xe3 \u0111i\u1ec3n h\xecnh",type:"text",disabled:!0,required:!0,value:Q.clusterCode,onChange:te})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"quantity",label:"Ghi ch\xfa",type:"number",required:!0,value:Q.quantity,onChange:te})})]})}),Object(W.jsxs)(x.a,{className:e.root,children:[Object(W.jsx)(b.a,{container:!0,children:Object(W.jsx)(b.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:Object(W.jsx)(b.a,{item:!0,xs:6,children:Object(W.jsx)(U,{clusterCode:c})})})}),Object(W.jsx)(p.a,{className:e.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(f.a,{children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 WBS"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(W.jsx)(v.a,{children:void 0!==ce&&Object(W.jsx)(H,{data:B,elementClusters:G,node:ce,onCreate:function(e){X({clusterCode:c,elementCode:e,quantity:"0"}),I(!1),M(!0)},onEdit:function(e){X({elementCode:e.elementCode,clusterCode:e.clusterCode,quantity:e.quantity.toString()}),I(!0),M(!0)},onExpand:function(e,t){K(B.map((function(n){return n.code===t.code&&n.expanded!==e&&(n.expanded=e),n})))}})})]})})]})]})}var z=n(532),Y=n(533),G=Object(h.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),P=function(e){return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))},J={clusterCode:"",serviceMasterCode:"",description:"",unit:"",quantity:""};function V(){var e=G(),t=Object(r.i)().clusterCode,n=a.a.useContext(y.a),c=n.showAlert,i=n.showBackdrop,j=n.hideBackdrop,h=a.a.useState(!1),k=Object(d.a)(h,2),S=k[0],w=k[1],q=a.a.useState(!1),M=Object(d.a)(q,2),F=M[0],E=M[1],A=a.a.useState([]),T=Object(d.a)(A,2),I=T[0],N=T[1],L=a.a.useState(null),B=Object(d.a)(L,2),H=B[0],_=B[1],R=a.a.useState([]),K=Object(d.a)(R,2),V=K[0],Q=K[1],X=a.a.useState(J),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=a.a.useState(!1),ne=Object(d.a)(te,2),ce=ne[0],ae=ne[1],re=a.a.useState([]),ie=Object(d.a)(re,2),se=ie[0],oe=ie[1],le=function(){var e=Object(o.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1)){e.next=17;break}return oe([]),i(),e.prev=3,e.t0=oe,e.next=7,Y.a.addFromExcel(t,n[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),de(t),ae(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),j(),c(y.b.ACTION_FAILURE,"error");case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(),e.prev=1,e.t0=N,e.next=5,z.a.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=9,de(t);case 9:j(),e.next=16;break;case 12:e.prev=12,e.t2=e.catch(1),j(),c(y.b.FETCH_FAILURE,"error");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Q,e.next=4,Y.a.getAll(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1),j(),e.next=13;break;case 9:e.prev=9,e.t2=e.catch(0),Q([]),c(y.b.FETCH_FAILURE,"error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),je=function(e){ee(Object(u.a)(Object(u.a)({},$),{},Object(l.a)({},e.target.name,e.target.value)))},he=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!1),i(),e.prev=2,!F){e.next=8;break}return e.next=6,Y.a.edit({clusterCode:$.clusterCode,quantity:parseFloat($.quantity),serviceMasterCode:$.serviceMasterCode});case 6:e.next=10;break;case 8:return e.next=10,Y.a.create({clusterCode:$.clusterCode,quantity:parseFloat($.quantity),serviceMasterCode:$.serviceMasterCode});case 10:return c(y.b.ACTION_SUCCESS,"success"),i(),e.next=14,de(t);case 14:j(),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),c(y.b.ACTION_FAILURE,"error"),j();case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){ue()}),[]),Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(C.k,{open:ce,onClose:function(){ae(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(W.jsx)(p.a,{style:{height:"70vh"},children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(f.a,{children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"Tr\u1ea1ng th\xe1i"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"40%"},children:"Message"})]})}),Object(W.jsx)(v.a,{children:se.map((function(e){return Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:e.quantity}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.isAdded?"Th\xe0nh c\xf4ng":"L\u1ed7i!"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:e.message})]},e.serviceMasterCode)}))})]})})}),Object(W.jsx)(C.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:S,onClose:function(){w(!1)},onSubmit:he,children:Object(W.jsxs)(b.a,{container:!0,spacing:1,children:[Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"clusterCode",label:"M\xe3 \u0111i\u1ec3n h\xecnh",type:"text",required:!0,disabled:!0,value:$.clusterCode,onChange:je})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.d,{required:!0,label:"M\xe3 BOS",options:P(I),optionLabel:"label",value:H,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){_(e),null!==e&&ee(Object(u.a)(Object(u.a)({},$),{},{serviceMasterCode:e.code,description:e.description,unit:e.unit}))}})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,disabled:!0,value:$.description,onChange:je})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"unit",label:"\u0110\u01a1n v\u1ecb",type:"text",required:!0,disabled:!0,value:$.unit,onChange:je})}),Object(W.jsx)(b.a,{item:!0,xs:12,children:Object(W.jsx)(C.p,{name:"quantity",label:"Kh\u1ed1i l\u01b0\u1ee3ng",type:"number",required:!0,value:$.quantity,onChange:je})})]})}),Object(W.jsxs)(x.a,{className:e.root,children:[Object(W.jsx)(b.a,{container:!0,children:Object(W.jsxs)(b.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(W.jsx)(b.a,{item:!0,xs:6,children:Object(W.jsx)(U,{clusterCode:t})}),Object(W.jsx)(b.a,{item:!0,children:Object(W.jsx)(C.n,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){ee({clusterCode:t,description:"",quantity:"0",serviceMasterCode:"",unit:""}),E(!1),w(!0)}})}),Object(W.jsx)(b.a,{item:!0,children:Object(W.jsx)(C.q,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:le,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Excel",color:"primary"})})]})}),Object(W.jsx)(p.a,{className:e.container,children:Object(W.jsxs)(m.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(W.jsx)(f.a,{children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(W.jsx)(v.a,{children:V.map((function(e){return Object(W.jsxs)(O.a,{children:[Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(W.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:D.a.formatMoney(e.quantity,3)}),Object(W.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:Object(W.jsx)(C.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){ee({clusterCode:e.clusterCode,description:e.description,quantity:e.quantity.toString(),serviceMasterCode:e.serviceMasterCode,unit:e.unit}),E(!0),w(!0)}(e)}})})]},e.serviceMasterCode)}))})]})})]})]})}function Q(){var e=Object(r.j)().path;return Object(W.jsxs)(r.d,{children:[Object(W.jsx)(r.b,{path:"".concat(e,"/clusters"),component:A}),Object(W.jsx)(r.b,{path:"".concat(e,"/element-clusters/:projectCode/:clusterCode"),component:K}),Object(W.jsx)(r.b,{path:"".concat(e,"/items/:clusterCode"),component:V})]})}},373:function(e,t,n){"use strict";var c={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,c=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return c.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=c},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(23),a=n.n(c),r=n(41),i=n(17),s=n(18),o=n(0),l=n.n(o),u=n(48),d=n(433),j=n(2),h=function(e){return e.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function b(e){var t=e.selectedProject,n=e.onChange,c=l.a.useState([]),s=Object(i.a)(c,2),o=s[0],b=s[1],x=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=b,e.next=4,d.a.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),b([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){var e=function(){var e=localStorage.getItem("projectCode"),t=localStorage.getItem("projectName");return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),x()}),[]),Object(j.jsx)(u.d,{required:!0,label:"D\u1ef1 \xe1n",options:h(o),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){var t;null!==e&&(n({code:e.code,name:e.name}),t=e,localStorage.setItem("projectCode",t.code),localStorage.setItem("projectName",t.name))}})}},433:function(e,t,n){"use strict";var c=n(10),a=n.n(c),r="/api/project-system/projects";var i={getAll:function(){return a.a.get(r)},get:function(e){return a.a.get("".concat(r,"/").concat(e))}};t.a=i},531:function(e,t,n){"use strict";var c=n(10),a=n.n(c),r="/api/project-system/elements";var i={getAll:function(e){return a.a.get("".concat(r,"?projectCode=").concat(e))},create:function(e){return a.a.post(r,e)},edit:function(e,t){return a.a.put("".concat(r,"/").concat(e),t)},remove:function(e){return a.a.delete("".concat(r,"/").concat(e))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),a.a.post("".concat(r,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i},532:function(e,t,n){"use strict";var c=n(10),a=n.n(c),r="/api/project-system/serviceMasters";var i={getAll:function(){return a.a.get(r)},get:function(e){return a.a.get("".concat(r,"/").concat(e))}};t.a=i},533:function(e,t,n){"use strict";var c=n(10),a=n.n(c),r="/api/project-system/items";var i={getAll:function(e){return a.a.get("".concat(r,"?clusterCode=").concat(e))},report:function(e){return a.a.get("".concat(r,"/report?projectCode=").concat(e))},create:function(e){return a.a.post(r,e)},edit:function(e){return a.a.put(r,e)},remove:function(e,t){return a.a.delete("".concat(r,"?clusterCode=").concat(e,"&serviceMasterCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),a.a.post("".concat(r,"/addFromExcel?clusterCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i}}]);
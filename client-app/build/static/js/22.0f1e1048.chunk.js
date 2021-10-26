(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[22],{545:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(22),l=a.n(n),c=a(40),o=a(25),r=a(13),i=a(0),s=a.n(i),u=a(46),b=a(9),j=a.n(b),d="/api/project-system/projects";var m={getAll:function(){return j.a.get(d)},get:function(e){return j.a.get("".concat(d,"/").concat(e))}},x=a(2),h="PROJECT_CODE_KEY",p="PROJECT_NAME_KEY",C=function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function f(e){var t=e.value,a=e.onChange,n=s.a.useState([]),r=Object(o.a)(n,2),i=r[0],b=r[1],j=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=b,e.next=4,m.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),b([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){var e=function(){var e=localStorage.getItem(h),t=localStorage.getItem(p);return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&a({code:e.code,name:e.name}),j()}),[]),Object(x.jsx)(u.d,{required:!0,label:"D\u1ef1 \xe1n",options:C(i),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&(a({code:e.code,name:e.name}),function(e){localStorage.setItem(h,e.code),localStorage.setItem(p,e.name)}(e))}})}},898:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(0),l=a.n(n),c=a(27),o=a(15),r=a(13),i=a(22),s=a.n(i),u=a(40),b=a(25),j=a(47),d=a(533),m=a(380),x=a(70),h=a(112),p=a(417),C=a(418),f=a(414),O=a(415),g=a(416),v=a(419),N=a(39),w=a(46),k=a(18),F=a(545),A=a(9),S=a.n(A),y="/api/project-system/billForms";var I={getAll:function(e){return S.a.get("".concat(y,"?projectCode=").concat(e))},create:function(e,t){return S.a.post("".concat(y,"?projectCode=").concat(e),t)},edit:function(e,t){return S.a.put("".concat(y,"?projectCode=").concat(e),t)},remove:function(e,t){return S.a.delete("".concat(y,"?projectCode=").concat(e,"&billFormCode=").concat(t))},attach:function(e,t,a){var n=new FormData;return n.append("files",a,a.name),S.a.post("".concat(y,"/attach?projectCode=").concat(e,"&billFormCode=").concat(t),n,{headers:{"Content-Type":"multipart/form-data"}})}},R=a(2),T=Object(d.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 120px)",overflowY:"scroll"},cell:{fontSize:"0.75rem"}}),E={billFormCode:"",projectCode:"",billFormName:"",beginRow:"0",endRow:"0",billCodeCol:"0",totalCol:"0",previousCol:"0",actualCol:"0",fileName:""};function q(){var e=T(),t=Object(j.b)(),a=l.a.useState(!1),n=Object(b.a)(a,2),c=n[0],i=n[1],d=l.a.useState(!1),A=Object(b.a)(d,2),S=A[0],y=A[1],q=l.a.useState(null),_=Object(b.a)(q,2),M=_[0],L=_[1],H=l.a.useState([]),U=Object(b.a)(H,2),K=U[0],B=U[1],J=l.a.useState(E),D=Object(b.a)(J,2),Q=D[0],Y=D[1],z=l.a.useState(""),P=Object(b.a)(z,2),V=P[0],X=P[1],G=l.a.useState(!1),W=Object(b.a)(G,2),Z=W[0],$=W[1],ee=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($(!1),null===M){e.next=15;break}return t(k.loadingActions.show()),e.prev=3,e.next=6,I.remove(M.code,V);case 6:le(),X(""),t(k.alertActions.show(k.alertMessage.ACTION_SUCCESS,"success")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t(k.alertActions.show(k.alertMessage.ACTION_FAILURE,"error")),t(k.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(u.a)(s.a.mark((function e(a,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1&&null!==M)){e.next=13;break}return t(k.loadingActions.show()),e.prev=2,e.next=5,I.attach(M.code,a,n[0]);case 5:t(k.alertActions.show(k.alertMessage.ACTION_SUCCESS,"success")),le(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),t(k.loadingActions.hide()),t(k.alertActions.show(k.alertMessage.ACTION_FAILURE,"error"));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),ae=function(e){Y(Object(r.a)(Object(r.a)({},Q),{},Object(o.a)({},e.target.name,e.target.value)))},ne=function(){var e=Object(u.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!1),null===M){e.next=20;break}if(t(k.loadingActions.show()),a={actualCol:parseInt(Q.actualCol),beginRow:parseInt(Q.beginRow),billCodeCol:parseInt(Q.billCodeCol),billFormCode:Q.billFormCode,billFormName:Q.billFormName,endRow:parseInt(Q.endRow),fileName:"",previousCol:parseInt(Q.previousCol),projectCode:M.code,totalCol:parseInt(Q.totalCol)},e.prev=4,!S){e.next=10;break}return e.next=8,I.edit(M.code,a);case 8:e.next=12;break;case 10:return e.next=12,I.create(M.code,a);case 12:t(k.alertActions.show(k.alertMessage.ACTION_SUCCESS,"success")),le(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),t(k.alertActions.show(k.alertMessage.ACTION_FAILURE,"error")),t(k.loadingActions.hide());case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(k.loadingActions.show()),null===M){e.next=16;break}return e.prev=2,e.t0=B,e.next=6,I.getAll(M.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),B([]),t(k.alertActions.show(k.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:B([]);case 17:t(k.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){le(),X("")}),[M]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(w.k,{open:Z,onClose:function(){$(!1)},onSubmit:function(){ee()},title:"X\xe1c nh\u1eadn x\xf3a bi\u1ec3u m\u1eabu",children:Object(R.jsxs)(m.a,{container:!0,spacing:1,children:[Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(x.a,{variant:"body2",children:"Thao t\xe1c n\xe0y s\u1ebd x\xf3a bi\u1ec3u m\u1eabu \u0111\u01b0\u1ee3c ch\u1ecdn. Vui l\xf2ng ki\u1ec3m tra k\u1ef9 c\xe1c \u0111i\u1ec3n h\xecnh tr\u01b0\u1edbc khi x\xf3a!"})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(x.a,{variant:"subtitle2",children:V})})]})}),Object(R.jsx)(w.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:c,onClose:function(){i(!1)},onSubmit:ne,children:Object(R.jsxs)(m.a,{container:!0,spacing:1,children:[Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"billFormCode",label:"M\xe3 bi\u1ec3u m\u1eabu",type:"text",required:!0,disabled:S,value:Q.billFormCode,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"billFormName",label:"T\xean bi\u1ec3u m\u1eabu",type:"text",required:!0,value:Q.billFormName,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"beginRow",label:"H\xe0ng b\u1eaft \u0111\u1ea7u",type:"number",required:!0,value:Q.beginRow,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"endRow",label:"H\xe0ng k\u1ebft th\xfac",type:"number",required:!0,value:Q.endRow,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"billCodeCol",label:"C\u1ed9t m\xe3 BOQ",type:"number",required:!0,value:Q.billCodeCol,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"totalCol",label:"C\u1ed9t t\u1ed5ng BOQ",type:"number",required:!0,value:Q.totalCol,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"previousCol",label:"C\u1ed9t l\u0169y k\u1ebf k\u1ef3 tr\u01b0\u1edbc",type:"number",required:!0,value:Q.previousCol,onChange:ae})}),Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(w.p,{name:"actualCol",label:"C\u1ed9t k\u1ef3 n\xe0y",type:"number",required:!0,value:Q.actualCol,onChange:ae})})]})}),Object(R.jsxs)(h.a,{className:e.root,children:[Object(R.jsx)(m.a,{container:!0,children:Object(R.jsxs)(m.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(R.jsx)(m.a,{item:!0,xs:12,children:Object(R.jsx)(F.a,{value:M,onChange:function(e){L(e)}})}),null!==M&&Object(R.jsxs)(m.a,{container:!0,spacing:1,item:!0,xs:12,alignItems:"flex-end",children:[Object(R.jsx)(m.a,{item:!0,children:Object(R.jsx)(w.n,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){Y(E),y(!1),i(!0)}})}),Object(R.jsx)(m.a,{item:!0,children:Object(R.jsx)(w.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:le})})]})]})}),Object(R.jsx)(p.a,{className:e.container,children:Object(R.jsxs)(C.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(R.jsx)(f.a,{children:Object(R.jsxs)(O.a,{children:[Object(R.jsx)(g.a,{style:{padding:0,width:16}}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"M\xe3 bi\u1ec3u m\u1eabu"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"T\xean bi\u1ec3u m\u1eabu"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"H\xe0ng B\u0110"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"H\xe0ng KT"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"C\u1ed9t BOQ"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"C\u1ed9t t\u1ed5ng"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"C\u1ed9t LKKT"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"C\u1ed9t THKN"}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:"File bi\u1ec3u m\u1eabu"}),Object(R.jsx)(g.a,{className:e.cell,align:"left"}),Object(R.jsx)(g.a,{className:e.cell,align:"left"})]})}),Object(R.jsx)(v.a,{children:K.map((function(t){return Object(R.jsxs)(O.a,{children:[Object(R.jsx)(g.a,{style:{padding:0,width:16,backgroundColor:N.a.teal[100]},onClick:function(){X(t.billFormCode),$(!0)}}),Object(R.jsx)(g.a,{className:e.cell,align:"left",style:{cursor:"pointer"},onClick:function(){!function(e){Y({actualCol:e.actualCol.toString(),beginRow:e.beginRow.toString(),billCodeCol:e.billCodeCol.toString(),billFormCode:e.billFormCode,billFormName:e.billFormName,endRow:e.endRow.toString(),fileName:"",previousCol:e.previousCol.toString(),projectCode:e.projectCode,totalCol:e.totalCol.toString()}),y(!0),i(!0)}(t)},children:t.billFormCode}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.billFormName}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.beginRow}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.endRow}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.billCodeCol}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.totalCol}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.previousCol}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.actualCol}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:t.fileName}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:Object(R.jsx)(w.q,{filesLimit:1,title:"Attach",acceptedFiles:[".xls",".xlsx"],onSubmit:function(e){te(t.billFormCode,e)},tooltip:"T\u1ea1o t\u1eeb file excel",text:"Attach",variant:"text",color:"primary"})}),Object(R.jsx)(g.a,{className:e.cell,align:"left",children:""!==t.fileName&&null!==M&&Object(R.jsx)(w.i,{variant:"text",label:"T\u1ea3i v\u1ec1",filename:t.fileName,url:"/api/project-system/billForms/get-excel?projectCode=".concat(M.code,"&billFormCode=").concat(t.billFormCode)})})]},t.billFormCode)}))})]})})]})]})}function _(){var e=Object(c.i)().path;return Object(R.jsx)(c.c,{children:Object(R.jsx)(c.a,{path:"".concat(e,"/boq"),component:q})})}}}]);
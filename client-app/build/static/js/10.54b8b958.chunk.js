(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[10],{1093:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ie}));var r=n(0),a=n.n(r),c=n(30),i=n(29),o=n.n(i),l=n(45),s=n(14),u=n(44);function d(e){return"[object Array]"===Object.prototype.toString.call(e)}function j(e,t){if(!e)throw new Error(t)}function h(e){return Object.keys(e)}function f(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}function m(e,t,n){var r="."+t,a=new RegExp("(\\"+t+")?$");return n(e).replace(a,r)}function p(e,t,n){void 0===n&&(n="download");var r=function(e,t){switch(t){case"txt":return"data:text/plain;charset=utf-8,"+encodeURIComponent(e);case"json":return"data:application/json;charset=utf-8,"+encodeURIComponent(e);case"csv":return"data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(e);case"xls":return"data:application/vnd.ms-excel;charset=utf-8,"+encodeURIComponent(e);case"xml":return"data:application/xml;charset=utf-8,"+encodeURIComponent(e);default:return""}}(e,t),a=document.createElement("a");a.href=r,a.download=n,a.setAttribute("style","visibility:hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}var b,x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},O=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,c=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=c.next()).done;)i.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(n=c.return)&&n.call(c)}finally{if(a)throw a.error}}return i};function g(e){return e.map(f).reduce((function(t,n,r){return n.reduce((function(t,n){var a=O(n,2),c=a[0],i=a[1],o=t[c]||Array.from({length:e.length}).map((function(e){return""}));return o[r]=("string"!==typeof i?JSON.stringify(i):i)||"",t[c]=o,t}),t)}),Object.create(null))}function v(e,t){return void 0===t&&(t=function(e){return e}),t(f(e).map((function(e){var t=O(e,2);return{fieldName:t[0],fieldValues:t[1]}})))}function y(e,t){return void 0===t&&(t=function(e){return e}),e.length?'<html>\n  <head>\n    <meta charset="UTF-8">\n  </head >\n  <body>\n    '+function(e,t){j(e.length>0);var n=v(g(e),t);return"\n    <table>\n      <thead>\n        <tr><th><b>"+n.map((function(e){return e.fieldName})).join("</b></th><th><b>")+"</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>"+n.map((function(e){return e.fieldValues})).map((function(e){return e.map((function(e){return"<td>"+e+"</td>"}))})).reduce((function(e,t){return e.map((function(e,n){return""+e+t[n]}))})).join("</tr>\n        <tr>")+"</tr>\n      </tbody>\n    </table>\n  "}(e,t)+"\n  </body>\n</html >\n":""}function C(e){return'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>\n'+w(e,"base")+"\n"}function w(e,t,n,r){void 0===n&&(n="element"),void 0===r&&(r=0);var a,c=(a=t,"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),a.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")),i=function(e){return Array(e+1).join(" ")}(r);return null===e||void 0===e?i+"<"+c+" />":i+"<"+c+">\n"+(d(e)?e.map((function(e){return w(e,n,n,r+2)})).join("\n"):"object"===typeof e?f(e).map((function(e){var t=O(e,2),a=t[0];return w(t[1],a,n,r+2)})).join("\n"):i+"  "+String(e).replace(/([<>&])/g,(function(e,t){switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}})))+"\n"+i+"</"+c+">"}function M(e){var t=e.data,n=e.fileName,r=void 0===n?"download":n,a=e.fileNameFormatter,c=void 0===a?function(e){return e.replace(/\s+/,"_")}:a,i=e.fields,o=e.exportType,l=void 0===o?"txt":o,s=e.replacer,u=void 0===s?null:s,b=e.space,w=void 0===b?4:b,M=e.processor,W=void 0===M?p:M,k=e.withBOM,S=void 0!==k&&k,E=e.delimiter,F=void 0===E?",":E,N=e.beforeTableEncode,A=void 0===N?function(e){return e}:N,I="Invalid export data. Please provide an array of object",T="Can't export unknown data type "+l+".",q=function(e){if(!e||d(e)&&!e.length||!d(e)&&!h(e).length)return function(e){return e};var t=d(e)?e.reduce((function(e,t){var n;return x(x({},e),((n={})[t]=t,n))}),Object.create(null)):e;return function(e){return d(e)?e.map((function(e){return f(e).reduce((function(e,n){var r=O(n,2),a=r[0],c=r[1];return a in t&&(e[t[a]]=c),e}),Object.create(null))})).filter((function(e){return h(e).length})):f(e).reduce((function(e,n){var r=O(n,2),a=r[0],c=r[1];return a in t&&(e[t[a]]=c),e}),Object.create(null))}}(i)(function(t){try{return"string"===typeof t?JSON.parse(t):t}catch(e){throw new Error("Invalid export data. Please provide a valid JSON")}}(t)),D=function(t,n,r){void 0===n&&(n=null);try{return JSON.stringify(t,n,r)}catch(e){throw new Error("Invalid export data. Please provide valid JSON object")}}(q,u,w);switch(l){case"txt":return W(D,l,m(r,"txt",c));case"json":return W(D,l,m(r,"json",c));case"csv":j(d(q),I);var U=function(e,t,n){if(void 0===t&&(t=","),void 0===n&&(n=function(e){return e}),!e.length)return"";var r=v(g(e),n);return r.map((function(e){return e.fieldName})).join(t)+"\r\n"+r.map((function(e){return e.fieldValues})).map((function(e){return e.map((function(e){return'"'+e.replace(/\"/g,'""')+'"'}))})).reduce((function(e,n){return e.map((function(e,r){return""+e+t+n[r]}))})).join("\r\n")}(q,F,A);return W(S?"\ufeff"+U:U,l,m(r,"csv",c));case"xls":return j(d(q),I),W(y(q,A),l,m(r,"xls",c));case"xml":return W(C(q),l,m(r,"xml",c));default:throw new Error(T)}}(b=M||(M={})).types={txt:"txt",json:"json",csv:"csv",xls:"xls",xml:"xml"},b.processors={downloadFile:p};var W=M,k=n(57),S=n(493),E=n(494),F=n(490),N=n(491),A=n(492),I=n(495),T=n(165),q=n(483),D=n(22),U=n(516),B=n(126),H=n(564),L=n(642),R=n(10),_=n.n(R),K="/api/project-system/resources";var P={getAll:function(e,t){return _.a.get("".concat(K,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t))},report:function(e){return _.a.get("".concat(K,"/report?projectCode=").concat(e))},create:function(e){return _.a.post(K,e)},edit:function(e){return _.a.put(K,e)},remove:function(e,t){return _.a.delete("".concat(K,"?clusterCode=").concat(e,"&elementCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),_.a.post("".concat(K,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}},J=n(1),z=Object(k.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function V(){var e=z(),t=a.a.useContext(B.a),n=t.showAlert,r=t.showBackdrop,c=t.hideBackdrop,i=a.a.useState(null),d=Object(s.a)(i,2),j=d[0],h=d[1],f=a.a.useState([]),m=Object(s.a)(f,2),p=m[0],b=m[1],x=a.a.useState(!1),O=Object(s.a)(x,2),g=O[0],v=O[1],y=a.a.useState([]),C=Object(s.a)(y,2),w=C[0],M=C[1],k=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length>=1&&null!==j)){e.next=17;break}return M([]),r(),e.prev=3,e.t0=M,e.next=7,P.addFromExcel(j.code,t[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),R(),v(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),c(),n(B.b.ACTION_FAILURE,"error");case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(),null===j){e.next=16;break}return e.prev=2,e.t0=b,e.next=6,L.a.report(j.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),b([]),n(B.b.FETCH_FAILURE,"error");case 14:e.next=17;break;case 16:b([]);case 17:c();case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){R()}),[j]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(D.l,{open:g,onClose:function(){v(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(J.jsx)(S.a,{style:{height:"70vh"},children:Object(J.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(J.jsx)(F.a,{children:Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"Tr\u1ea1ng th\xe1i"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"40%"},children:"Message"})]})}),Object(J.jsx)(I.a,{children:w.map((function(e){return Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:e.quantity}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.isAdded?"Th\xe0nh c\xf4ng":"L\u1ed7i!"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:e.message})]},e.serviceMasterCode)}))})]})})}),Object(J.jsxs)(T.a,{className:e.root,children:[Object(J.jsx)(q.a,{container:!0,children:Object(J.jsxs)(q.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(J.jsx)(q.a,{item:!0,xs:6,children:Object(J.jsx)(H.a,{selectedProject:j,onChange:function(e){h(e)}})}),null!==j&&Object(J.jsxs)(q.a,{container:!0,spacing:1,item:!0,xs:6,children:[Object(J.jsx)(q.a,{item:!0,children:Object(J.jsx)(D.s,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:k,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Excel",color:"primary"})}),Object(J.jsx)(q.a,{item:!0,children:Object(J.jsx)(D.o,{tooltip:"T\u1ea3i file excel",variant:"contained",text:"T\u1ea3i file excel",color:"info",icon:"file-download",onClick:function(){if(null!==j){var e=p.map((function(e){return{projectCode:j.code,projectName:j.name,serviceMasterCode:e.serviceMasterCode,smDescription:e.description,smUnit:e.unit,materialCode:"",materialDescription:"",materialUnit:"",quantity:0}}));W({data:e,fileName:"download",exportType:"xls",fields:{projectCode:"M\xe3 d\u1ef1 \xe1n",projectName:"T\xean d\u1ef1 \xe1n",serviceMasterCode:"M\xe3 BOS",smDescription:"Di\u1ec5n gi\u1ea3i BOS",smUnit:"\u0110\u01a1n v\u1ecb BOS",materialCode:"M\xe3 v\u1eadt t\u01b0",materialDescription:"Di\u1ec5n gi\u1ea3i v\u1eadt t\u01b0",materialUnit:"\u0110\u01a1n v\u1ecb VT",quantity:"Kh\u1ed1i l\u01b0\u1ee3ng"}})}}})}),Object(J.jsx)(q.a,{item:!0,children:Object(J.jsx)(D.o,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:R})})]})]})}),Object(J.jsx)(S.a,{className:e.container,children:Object(J.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(J.jsx)(F.a,{children:Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:"Ngu\u1ed3n l\u1ef1c"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(J.jsx)(I.a,{children:p.map((function(e){return Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:U.a.formatMoney(e.quantity,3)}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:e.resourceCount}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:null!==j&&Object(J.jsx)(u.a,{to:"/project-system/estimator/resources/".concat(j.code,"/").concat(e.serviceMasterCode),style:{textDecoration:"none"},children:Object(J.jsx)(D.o,{tooltip:"\u0110\u1ecbnh m\u1ee9c",text:"\u0110\u1ecbnh m\u1ee9c",icon:"boxes",color:"info"})})})]},e.serviceMasterCode)}))})]})})]})]})}var Y=n(17),Z=n(20);var $={getAll:function(){return _.a.get("/api/project-system/materials")}},G=n(641);function Q(e){var t=e.serviceMasterCode,n=a.a.useState(null),r=Object(s.a)(n,2),c=r[0],i=r[1];return a.a.useEffect((function(){G.a.get(t).then((function(e){i(e)})).catch((function(){i(null)}))}),[t]),Object(J.jsx)(D.r,{label:"M\xe3 BOS",value:null!==c?"[".concat(c.code,"]-").concat(c.description):"\u0110ang t\u1ea3i d\u1eef li\u1ec7u",disabled:!0})}var X=n(565);function ee(e){var t=e.projectCode,n=a.a.useState(null),r=Object(s.a)(n,2),c=r[0],i=r[1];return a.a.useEffect((function(){X.a.get(t).then((function(e){i(e)})).catch((function(){i(null)}))}),[t]),Object(J.jsx)(D.r,{label:"D\u1ef1 \xe1n",value:null!==c?"[".concat(c.code,"]-").concat(c.name):"\u0110ang t\u1ea3i d\u1eef li\u1ec7u",disabled:!0})}var te=Object(k.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),ne={projectCode:"",serviceMasterCode:"",materialCode:"",description:"",unit:"",quantity:""};function re(){var e,t=te(),n=Object(c.i)(),r=n.projectCode,i=n.serviceMasterCode,u=a.a.useContext(B.a),d=u.showAlert,j=u.showBackdrop,h=u.hideBackdrop,f=a.a.useState(!1),m=Object(s.a)(f,2),p=m[0],b=m[1],x=a.a.useState(!1),O=Object(s.a)(x,2),g=O[0],v=O[1],y=a.a.useState([]),C=Object(s.a)(y,2),w=C[0],M=C[1],W=a.a.useState(null),k=Object(s.a)(W,2),U=k[0],H=k[1],L=a.a.useState([]),R=Object(s.a)(L,2),_=R[0],K=R[1],z=a.a.useState(ne),V=Object(s.a)(z,2),G=V[0],X=V[1],re=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.prev=1,e.t0=M,e.next=5,$.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=9,ae(r,i);case 9:h(),e.next=16;break;case 12:e.prev=12,e.t2=e.catch(1),h(),d(B.b.FETCH_FAILURE,"error");case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=K,e.next=4,P.getAll(t,n);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),K([]),d(B.b.FETCH_FAILURE,"error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){X(Object(Z.a)(Object(Z.a)({},G),{},Object(Y.a)({},e.target.name,e.target.value)))},ie=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!1),j(),e.prev=2,!g){e.next=8;break}return e.next=6,P.edit({projectCode:G.projectCode,materialCode:G.materialCode,quantity:parseFloat(G.quantity),serviceMasterCode:G.serviceMasterCode});case 6:e.next=10;break;case 8:return e.next=10,P.create({projectCode:G.projectCode,materialCode:G.materialCode,quantity:parseFloat(G.quantity),serviceMasterCode:G.serviceMasterCode});case 10:return d(B.b.ACTION_SUCCESS,"success"),j(),e.next=14,ae(r,i);case 14:h(),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),d(B.b.ACTION_FAILURE,"error"),h();case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){re()}),[]),console.log(_),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(D.l,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:p,onClose:function(){b(!1)},onSubmit:ie,children:Object(J.jsxs)(q.a,{container:!0,spacing:1,children:[Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.r,{name:"projectCode",label:"D\u1ef1 \xe1n",type:"text",required:!0,disabled:!0,value:G.projectCode,onChange:ce})}),Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.r,{name:"serviceMasterCode",label:"M\xe3 BOS",type:"text",required:!0,disabled:!0,value:G.serviceMasterCode,onChange:ce})}),Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.e,{required:!0,label:"M\xe3 v\u1eadt t\u01b0",options:(e=w,e.map((function(e){return Object(Z.a)(Object(Z.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",value:U,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){H(e),null!==e&&X(Object(Z.a)(Object(Z.a)({},G),{},{materialCode:e.code,description:e.description,unit:e.unit}))}})}),Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.r,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,disabled:!0,value:G.description,onChange:ce})}),Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.r,{name:"unit",label:"\u0110\u01a1n v\u1ecb",type:"text",required:!0,disabled:!0,value:G.unit,onChange:ce})}),Object(J.jsx)(q.a,{item:!0,xs:12,children:Object(J.jsx)(D.r,{name:"quantity",label:"Kh\u1ed1i l\u01b0\u1ee3ng",type:"number",required:!0,value:G.quantity,onChange:ce})})]})}),Object(J.jsxs)(T.a,{className:t.root,children:[Object(J.jsx)(q.a,{container:!0,children:Object(J.jsxs)(q.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(J.jsx)(q.a,{item:!0,xs:2,children:Object(J.jsx)(ee,{projectCode:r})}),Object(J.jsx)(q.a,{item:!0,xs:8,children:Object(J.jsx)(Q,{serviceMasterCode:i})}),Object(J.jsx)(q.a,{item:!0,children:Object(J.jsx)(D.o,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){X({projectCode:r,serviceMasterCode:i,materialCode:"",description:"",quantity:"0",unit:""}),v(!1),b(!0)}})})]})}),Object(J.jsx)(S.a,{className:t.container,children:Object(J.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(J.jsx)(F.a,{children:Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(J.jsx)(I.a,{children:_.map((function(e){return Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:e.quantity}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:Object(J.jsx)(D.o,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){X({projectCode:e.projectCode,materialCode:e.materialCode,description:e.description,quantity:e.quantity.toString(),serviceMasterCode:e.serviceMasterCode,unit:e.unit}),v(!0),b(!0)}(e)}})})]},e.materialCode)}))})]})})]})]})}var ae=Object(k.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function ce(){var e=ae(),t=a.a.useContext(B.a),n=t.showAlert,r=t.showBackdrop,c=t.hideBackdrop,i=a.a.useState(null),u=Object(s.a)(i,2),d=u[0],j=u[1],h=a.a.useState([]),f=Object(s.a)(h,2),m=f[0],p=f[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r(),null===d){e.next=16;break}return e.prev=2,e.t0=p,e.next=6,P.report(d.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),p([]),n(B.b.FETCH_FAILURE,"error");case 14:e.next=17;break;case 16:p([]);case 17:c();case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){b()}),[d]),Object(J.jsxs)(T.a,{className:e.root,children:[Object(J.jsx)(q.a,{container:!0,children:Object(J.jsxs)(q.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(J.jsx)(q.a,{item:!0,xs:6,children:Object(J.jsx)(H.a,{selectedProject:d,onChange:function(e){j(e)}})}),null!==d&&Object(J.jsx)(q.a,{container:!0,spacing:1,item:!0,xs:6,children:Object(J.jsx)(q.a,{item:!0,children:Object(J.jsx)(D.o,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:b})})})]})}),Object(J.jsx)(S.a,{className:e.container,children:Object(J.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(J.jsx)(F.a,{children:Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"WBS level 3"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i WBS"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:"K\u1ef3"}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]})}),Object(J.jsx)(I.a,{children:m.map((function(e,t){return Object(J.jsxs)(N.a,{children:[Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.elementCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.elementDescription}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(J.jsx)(A.a,{align:"left",style:{minWidth:"20%"},children:e.period}),Object(J.jsx)(A.a,{align:"right",style:{minWidth:"20%"},children:U.a.formatMoney(e.quantity,3)})]},t)}))})]})})]})}function ie(){var e=Object(c.j)().path;return Object(J.jsxs)(c.d,{children:[Object(J.jsx)(c.b,{path:"".concat(e,"/item-report"),component:V}),Object(J.jsx)(c.b,{path:"".concat(e,"/resources/:projectCode/:serviceMasterCode"),component:re}),Object(J.jsx)(c.b,{path:"".concat(e,"/rbs"),component:ce})]})}},516:function(e,t,n){"use strict";var r={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,r=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return r.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=r},564:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(29),a=n.n(r),c=n(45),i=n(14),o=n(20),l=n(0),s=n.n(l),u=n(22),d=n(565),j=n(1),h=function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function f(e){var t=e.selectedProject,n=e.onChange,r=s.a.useState([]),o=Object(i.a)(r,2),l=o[0],f=o[1],m=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=f,e.next=4,d.a.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),f([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){var e=function(){var e=localStorage.getItem("projectCode"),t=localStorage.getItem("projectName");return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),m()}),[]),Object(j.jsx)(u.e,{required:!0,label:"D\u1ef1 \xe1n",options:h(l),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){var t;null!==e&&(n({code:e.code,name:e.name}),t=e,localStorage.setItem("projectCode",t.code),localStorage.setItem("projectName",t.name))}})}},565:function(e,t,n){"use strict";var r=n(10),a=n.n(r),c="/api/project-system/projects";var i={getAll:function(){return a.a.get(c)},get:function(e){return a.a.get("".concat(c,"/").concat(e))}};t.a=i},641:function(e,t,n){"use strict";var r=n(10),a=n.n(r),c="/api/project-system/serviceMasters";var i={getAll:function(){return a.a.get(c)},get:function(e){return a.a.get("".concat(c,"/").concat(e))}};t.a=i},642:function(e,t,n){"use strict";var r=n(10),a=n.n(r),c="/api/project-system/items";var i={getAll:function(e){return a.a.get("".concat(c,"?clusterCode=").concat(e))},report:function(e){return a.a.get("".concat(c,"/report?projectCode=").concat(e))},create:function(e){return a.a.post(c,e)},edit:function(e){return a.a.put(c,e)},remove:function(e,t){return a.a.delete("".concat(c,"?clusterCode=").concat(e,"&serviceMasterCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),a.a.post("".concat(c,"/addFromExcel?clusterCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i}}]);
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[10],{537:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=a},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(22),r=n.n(a),c=n(40),i=n(25),o=n(13),l=n(0),s=n.n(l),u=n(46),d=n(566),j=n(2),h=function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function f(e){var t=e.selectedProject,n=e.onChange,a=s.a.useState([]),o=Object(i.a)(a,2),l=o[0],f=o[1],m=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=f,e.next=4,d.a.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),f([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return s.a.useEffect((function(){var e=function(){var e=localStorage.getItem("projectCode"),t=localStorage.getItem("projectName");return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),m()}),[]),Object(j.jsx)(u.d,{required:!0,label:"D\u1ef1 \xe1n",options:h(l),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){var t;null!==e&&(n({code:e.code,name:e.name}),t=e,localStorage.setItem("projectCode",t.code),localStorage.setItem("projectName",t.name))}})}},566:function(e,t,n){"use strict";var a=n(9),r=n.n(a),c="/api/project-system/projects";var i={getAll:function(){return r.a.get(c)},get:function(e){return r.a.get("".concat(c,"/").concat(e))}};t.a=i},622:function(e,t,n){"use strict";var a=n(9),r=n.n(a),c="/api/project-system/serviceMasters";var i={getAll:function(){return r.a.get(c)},get:function(e){return r.a.get("".concat(c,"/").concat(e))}};t.a=i},623:function(e,t,n){"use strict";var a=n(9),r=n.n(a),c="/api/project-system/items";var i={getAll:function(e){return r.a.get("".concat(c,"?clusterCode=").concat(e))},report:function(e){return r.a.get("".concat(c,"/report?projectCode=").concat(e))},create:function(e){return r.a.post(c,e)},edit:function(e){return r.a.put(c,e)},remove:function(e,t){return r.a.delete("".concat(c,"?clusterCode=").concat(e,"&serviceMasterCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),r.a.post("".concat(c,"/addFromExcel?clusterCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i},867:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var a=n(0),r=n.n(a),c=n(27),i=n(22),o=n.n(i),l=n(40),s=n(25),u=n(47),d=n(23);function j(e){return"[object Array]"===Object.prototype.toString.call(e)}function h(e,t){if(!e)throw new Error(t)}function f(e){return Object.keys(e)}function m(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}function p(e,t,n){var a="."+t,r=new RegExp("(\\"+t+")?$");return n(e).replace(r,a)}function b(e,t,n){void 0===n&&(n="download");var a=function(e,t){switch(t){case"txt":return"data:text/plain;charset=utf-8,"+encodeURIComponent(e);case"json":return"data:application/json;charset=utf-8,"+encodeURIComponent(e);case"csv":return"data:text/csv;charset=utf-8,\ufeff"+encodeURIComponent(e);case"xls":return"data:application/vnd.ms-excel;charset=utf-8,"+encodeURIComponent(e);case"xml":return"data:application/xml;charset=utf-8,"+encodeURIComponent(e);default:return""}}(e,t),r=document.createElement("a");r.href=a,r.download=n,r.setAttribute("style","visibility:hidden"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}var x,g=function(){return(g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},O=function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,c=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=c.next()).done;)i.push(a.value)}catch(o){r={error:o}}finally{try{a&&!a.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}return i};function v(e){return e.map(m).reduce((function(t,n,a){return n.reduce((function(t,n){var r=O(n,2),c=r[0],i=r[1],o=t[c]||Array.from({length:e.length}).map((function(e){return""}));return o[a]=("string"!==typeof i?JSON.stringify(i):i)||"",t[c]=o,t}),t)}),Object.create(null))}function y(e,t){return void 0===t&&(t=function(e){return e}),t(m(e).map((function(e){var t=O(e,2);return{fieldName:t[0],fieldValues:t[1]}})))}function C(e,t){return void 0===t&&(t=function(e){return e}),e.length?'<html>\n  <head>\n    <meta charset="UTF-8">\n  </head >\n  <body>\n    '+function(e,t){h(e.length>0);var n=y(v(e),t);return"\n    <table>\n      <thead>\n        <tr><th><b>"+n.map((function(e){return e.fieldName})).join("</b></th><th><b>")+"</b></th></tr>\n      </thead>\n      <tbody>\n        <tr>"+n.map((function(e){return e.fieldValues})).map((function(e){return e.map((function(e){return"<td>"+e+"</td>"}))})).reduce((function(e,t){return e.map((function(e,n){return""+e+t[n]}))})).join("</tr>\n        <tr>")+"</tr>\n      </tbody>\n    </table>\n  "}(e,t)+"\n  </body>\n</html >\n":""}function w(e){return'<?xml version="1.0" encoding="utf-8"?><!DOCTYPE base>\n'+M(e,"base")+"\n"}function M(e,t,n,a){void 0===n&&(n="element"),void 0===a&&(a=0);var r,c=(r=t,"555xmlHello .  world!".trim().replace(/^([0-9,;]|(xml))+/,""),r.replace(/[^_a-zA-Z 0-9:\-\.]/g,"").replace(/^([ 0-9-:\-\.]|(xml))+/i,"").replace(/ +/g,"-")),i=function(e){return Array(e+1).join(" ")}(a);return null===e||void 0===e?i+"<"+c+" />":i+"<"+c+">\n"+(j(e)?e.map((function(e){return M(e,n,n,a+2)})).join("\n"):"object"===typeof e?m(e).map((function(e){var t=O(e,2),r=t[0];return M(t[1],r,n,a+2)})).join("\n"):i+"  "+String(e).replace(/([<>&])/g,(function(e,t){switch(t){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";default:return""}})))+"\n"+i+"</"+c+">"}function W(e){var t=e.data,n=e.fileName,a=void 0===n?"download":n,r=e.fileNameFormatter,c=void 0===r?function(e){return e.replace(/\s+/,"_")}:r,i=e.fields,o=e.exportType,l=void 0===o?"txt":o,s=e.replacer,u=void 0===s?null:s,d=e.space,x=void 0===d?4:d,M=e.processor,W=void 0===M?b:M,S=e.withBOM,A=void 0!==S&&S,k=e.delimiter,E=void 0===k?",":k,F=e.beforeTableEncode,N=void 0===F?function(e){return e}:F,q="Invalid export data. Please provide an array of object",I="Can't export unknown data type "+l+".",T=function(e){if(!e||j(e)&&!e.length||!j(e)&&!f(e).length)return function(e){return e};var t=j(e)?e.reduce((function(e,t){var n;return g(g({},e),((n={})[t]=t,n))}),Object.create(null)):e;return function(e){return j(e)?e.map((function(e){return m(e).reduce((function(e,n){var a=O(n,2),r=a[0],c=a[1];return r in t&&(e[t[r]]=c),e}),Object.create(null))})).filter((function(e){return f(e).length})):m(e).reduce((function(e,n){var a=O(n,2),r=a[0],c=a[1];return r in t&&(e[t[r]]=c),e}),Object.create(null))}}(i)(function(t){try{return"string"===typeof t?JSON.parse(t):t}catch(e){throw new Error("Invalid export data. Please provide a valid JSON")}}(t)),D=function(t,n,a){void 0===n&&(n=null);try{return JSON.stringify(t,n,a)}catch(e){throw new Error("Invalid export data. Please provide valid JSON object")}}(T,u,x);switch(l){case"txt":return W(D,l,p(a,"txt",c));case"json":return W(D,l,p(a,"json",c));case"csv":h(j(T),q);var U=function(e,t,n){if(void 0===t&&(t=","),void 0===n&&(n=function(e){return e}),!e.length)return"";var a=y(v(e),n);return a.map((function(e){return e.fieldName})).join(t)+"\r\n"+a.map((function(e){return e.fieldValues})).map((function(e){return e.map((function(e){return'"'+e.replace(/\"/g,'""')+'"'}))})).reduce((function(e,n){return e.map((function(e,a){return""+e+t+n[a]}))})).join("\r\n")}(T,E,N);return W(A?"\ufeff"+U:U,l,p(a,"csv",c));case"xls":return h(j(T),q),W(C(T,N),l,p(a,"xls",c));case"xml":return W(w(T),l,p(a,"xml",c));default:throw new Error(I)}}(x=W||(W={})).types={txt:"txt",json:"json",csv:"csv",xls:"xls",xml:"xml"},x.processors={downloadFile:b};var S=W,A=n(532),k=n(417),E=n(418),F=n(414),N=n(415),q=n(416),I=n(419),T=n(112),D=n(380),U=n(46),H=n(537),L=n(18),R=n(565),B=n(623),_=n(9),K=n.n(_),P="/api/project-system/resources";var J={getAll:function(e,t){return K.a.get("".concat(P,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t))},report:function(e){return K.a.get("".concat(P,"/report?projectCode=").concat(e))},create:function(e){return K.a.post(P,e)},edit:function(e){return K.a.put(P,e)},remove:function(e,t){return K.a.delete("".concat(P,"?clusterCode=").concat(e,"&elementCode=").concat(t))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),K.a.post("".concat(P,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}},z=n(2),V=Object(A.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function Y(){var e=V(),t=Object(u.b)(),n=r.a.useState(null),a=Object(s.a)(n,2),c=a[0],i=a[1],j=r.a.useState([]),h=Object(s.a)(j,2),f=h[0],m=h[1],p=r.a.useState(!1),b=Object(s.a)(p,2),x=b[0],g=b[1],O=r.a.useState([]),v=Object(s.a)(O,2),y=v[0],C=v[1],w=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1&&null!==c)){e.next=17;break}return C([]),t(L.loadingActions.show()),e.prev=3,e.t0=C,e.next=7,J.addFromExcel(c.code,n[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),M(),g(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),t(L.loadingActions.hide()),t(L.alertActions.show(L.alertMessage.ACTION_FAILURE,"error"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(L.loadingActions.show()),null===c){e.next=16;break}return e.prev=2,e.t0=m,e.next=6,B.a.report(c.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),m([]),t(L.alertActions.show(L.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:m([]);case 17:t(L.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){M()}),[c]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(U.k,{open:x,onClose:function(){g(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(z.jsx)(k.a,{style:{height:"70vh"},children:Object(z.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(z.jsx)(F.a,{children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"Tr\u1ea1ng th\xe1i"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"40%"},children:"Message"})]})}),Object(z.jsx)(I.a,{children:y.map((function(e){return Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:e.quantity}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.isAdded?"Th\xe0nh c\xf4ng":"L\u1ed7i!"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:e.message})]},e.serviceMasterCode)}))})]})})}),Object(z.jsxs)(T.a,{className:e.root,children:[Object(z.jsx)(D.a,{container:!0,children:Object(z.jsxs)(D.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(z.jsx)(D.a,{item:!0,xs:6,children:Object(z.jsx)(R.a,{selectedProject:c,onChange:function(e){i(e)}})}),null!==c&&Object(z.jsxs)(D.a,{container:!0,spacing:1,item:!0,xs:6,children:[Object(z.jsx)(D.a,{item:!0,children:Object(z.jsx)(U.q,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:w,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Excel",color:"primary"})}),Object(z.jsx)(D.a,{item:!0,children:Object(z.jsx)(U.n,{tooltip:"T\u1ea3i file excel",variant:"contained",text:"T\u1ea3i file excel",color:"info",icon:"file-download",onClick:function(){if(null!==c){var e=f.map((function(e){return{projectCode:c.code,projectName:c.name,serviceMasterCode:e.serviceMasterCode,smDescription:e.description,smUnit:e.unit,materialCode:"",materialDescription:"",materialUnit:"",quantity:0}}));S({data:e,fileName:"download",exportType:"xls",fields:{projectCode:"M\xe3 d\u1ef1 \xe1n",projectName:"T\xean d\u1ef1 \xe1n",serviceMasterCode:"M\xe3 BOS",smDescription:"Di\u1ec5n gi\u1ea3i BOS",smUnit:"\u0110\u01a1n v\u1ecb BOS",materialCode:"M\xe3 v\u1eadt t\u01b0",materialDescription:"Di\u1ec5n gi\u1ea3i v\u1eadt t\u01b0",materialUnit:"\u0110\u01a1n v\u1ecb VT",quantity:"Kh\u1ed1i l\u01b0\u1ee3ng"}})}}})}),Object(z.jsx)(D.a,{item:!0,children:Object(z.jsx)(U.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:M})})]})]})}),Object(z.jsx)(k.a,{className:e.container,children:Object(z.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(z.jsx)(F.a,{children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 BOS"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:"Ngu\u1ed3n l\u1ef1c"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(z.jsx)(I.a,{children:f.map((function(e){return Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.serviceMasterCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:H.a.formatMoney(e.quantity,3)}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:e.resourceCount}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:null!==c&&Object(z.jsx)(d.a,{to:"/project-system/estimator/resources/".concat(c.code,"/").concat(e.serviceMasterCode),style:{textDecoration:"none"},children:Object(z.jsx)(U.n,{tooltip:"\u0110\u1ecbnh m\u1ee9c",text:"\u0110\u1ecbnh m\u1ee9c",icon:"boxes",color:"info"})})})]},e.serviceMasterCode)}))})]})})]})]})}var Z=n(15),$=n(13);var G={getAll:function(){return K.a.get("/api/project-system/materials")}},Q=n(622);function X(e){var t=e.serviceMasterCode,n=r.a.useState(null),a=Object(s.a)(n,2),c=a[0],i=a[1];return r.a.useEffect((function(){Q.a.get(t).then((function(e){i(e)})).catch((function(){i(null)}))}),[t]),Object(z.jsx)(U.p,{label:"M\xe3 BOS",value:null!==c?"[".concat(c.code,"]-").concat(c.description):"\u0110ang t\u1ea3i d\u1eef li\u1ec7u",disabled:!0})}var ee=n(566);function te(e){var t=e.projectCode,n=r.a.useState(null),a=Object(s.a)(n,2),c=a[0],i=a[1];return r.a.useEffect((function(){ee.a.get(t).then((function(e){i(e)})).catch((function(){i(null)}))}),[t]),Object(z.jsx)(U.p,{label:"D\u1ef1 \xe1n",value:null!==c?"[".concat(c.code,"]-").concat(c.name):"\u0110ang t\u1ea3i d\u1eef li\u1ec7u",disabled:!0})}var ne=Object(A.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),ae={projectCode:"",serviceMasterCode:"",materialCode:"",description:"",unit:"",quantity:""};function re(){var e,t=ne(),n=Object(c.h)(),a=n.projectCode,i=n.serviceMasterCode,d=Object(u.b)(),j=r.a.useState(!1),h=Object(s.a)(j,2),f=h[0],m=h[1],p=r.a.useState(!1),b=Object(s.a)(p,2),x=b[0],g=b[1],O=r.a.useState([]),v=Object(s.a)(O,2),y=v[0],C=v[1],w=r.a.useState(null),M=Object(s.a)(w,2),W=M[0],S=M[1],A=r.a.useState([]),H=Object(s.a)(A,2),R=H[0],B=H[1],_=r.a.useState(ae),K=Object(s.a)(_,2),P=K[0],V=K[1],Y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(L.loadingActions.show()),e.prev=1,e.t0=C,e.next=5,G.getAll();case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=9,Q(a,i);case 9:d(L.loadingActions.hide()),e.next=16;break;case 12:e.prev=12,e.t2=e.catch(1),d(L.loadingActions.hide()),d(L.alertActions.show(L.alertMessage.FETCH_FAILURE,"error"));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=B,e.next=4,J.getAll(t,n);case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 8:e.prev=8,e.t2=e.catch(0),B([]),d(L.alertActions.show(L.alertMessage.FETCH_FAILURE,"error"));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),ee=function(e){V(Object($.a)(Object($.a)({},P),{},Object(Z.a)({},e.target.name,e.target.value)))},re=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(!1),d(L.loadingActions.show()),e.prev=2,!x){e.next=8;break}return e.next=6,J.edit({projectCode:P.projectCode,materialCode:P.materialCode,quantity:parseFloat(P.quantity),serviceMasterCode:P.serviceMasterCode});case 6:e.next=10;break;case 8:return e.next=10,J.create({projectCode:P.projectCode,materialCode:P.materialCode,quantity:parseFloat(P.quantity),serviceMasterCode:P.serviceMasterCode});case 10:return d(L.alertActions.show(L.alertMessage.ACTION_SUCCESS,"success")),d(L.loadingActions.show()),e.next=14,Q(a,i);case 14:d(L.loadingActions.hide()),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),d(L.alertActions.show(L.alertMessage.ACTION_FAILURE,"error")),d(L.loadingActions.hide());case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){Y()}),[]),console.log(R),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(U.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:f,onClose:function(){m(!1)},onSubmit:re,children:Object(z.jsxs)(D.a,{container:!0,spacing:1,children:[Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.p,{name:"projectCode",label:"D\u1ef1 \xe1n",type:"text",required:!0,disabled:!0,value:P.projectCode,onChange:ee})}),Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.p,{name:"serviceMasterCode",label:"M\xe3 BOS",type:"text",required:!0,disabled:!0,value:P.serviceMasterCode,onChange:ee})}),Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.d,{required:!0,label:"M\xe3 v\u1eadt t\u01b0",options:(e=y,e.map((function(e){return Object($.a)(Object($.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",value:W,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){S(e),null!==e&&V(Object($.a)(Object($.a)({},P),{},{materialCode:e.code,description:e.description,unit:e.unit}))}})}),Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.p,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,disabled:!0,value:P.description,onChange:ee})}),Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.p,{name:"unit",label:"\u0110\u01a1n v\u1ecb",type:"text",required:!0,disabled:!0,value:P.unit,onChange:ee})}),Object(z.jsx)(D.a,{item:!0,xs:12,children:Object(z.jsx)(U.p,{name:"quantity",label:"Kh\u1ed1i l\u01b0\u1ee3ng",type:"number",required:!0,value:P.quantity,onChange:ee})})]})}),Object(z.jsxs)(T.a,{className:t.root,children:[Object(z.jsx)(D.a,{container:!0,children:Object(z.jsxs)(D.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(z.jsx)(D.a,{item:!0,xs:2,children:Object(z.jsx)(te,{projectCode:a})}),Object(z.jsx)(D.a,{item:!0,xs:8,children:Object(z.jsx)(X,{serviceMasterCode:i})}),Object(z.jsx)(D.a,{item:!0,children:Object(z.jsx)(U.n,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){V({projectCode:a,serviceMasterCode:i,materialCode:"",description:"",quantity:"0",unit:""}),g(!1),m(!0)}})})]})}),Object(z.jsx)(k.a,{className:t.container,children:Object(z.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(z.jsx)(F.a,{children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"}})]})}),Object(z.jsx)(I.a,{children:R.map((function(e){return Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:e.quantity}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:Object(z.jsx)(U.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){V({projectCode:e.projectCode,materialCode:e.materialCode,description:e.description,quantity:e.quantity.toString(),serviceMasterCode:e.serviceMasterCode,unit:e.unit}),g(!0),m(!0)}(e)}})})]},e.materialCode)}))})]})})]})]})}var ce=Object(A.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}});function ie(){var e=ce(),t=Object(u.b)(),n=r.a.useState(null),a=Object(s.a)(n,2),c=a[0],i=a[1],d=r.a.useState([]),j=Object(s.a)(d,2),h=j[0],f=j[1],m=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(L.loadingActions.show()),null===c){e.next=16;break}return e.prev=2,e.t0=f,e.next=6,J.report(c.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),f([]),t(L.alertActions.show(L.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:f([]);case 17:t(L.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){m()}),[c]),Object(z.jsxs)(T.a,{className:e.root,children:[Object(z.jsx)(D.a,{container:!0,children:Object(z.jsxs)(D.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(z.jsx)(D.a,{item:!0,xs:6,children:Object(z.jsx)(R.a,{selectedProject:c,onChange:function(e){i(e)}})}),null!==c&&Object(z.jsx)(D.a,{container:!0,spacing:1,item:!0,xs:6,children:Object(z.jsx)(D.a,{item:!0,children:Object(z.jsx)(U.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:m})})})]})}),Object(z.jsx)(k.a,{className:e.container,children:Object(z.jsxs)(E.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(z.jsx)(F.a,{children:Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"WBS level 3"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i WBS"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"K\u1ef3"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:"Kh\u1ed1i l\u01b0\u1ee3ng"})]})}),Object(z.jsx)(I.a,{children:h.map((function(e,t){return Object(z.jsxs)(N.a,{children:[Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.elementCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.elementDescription}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.period}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.materialCode}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"40%"},children:e.description}),Object(z.jsx)(q.a,{align:"left",style:{minWidth:"20%"},children:e.unit}),Object(z.jsx)(q.a,{align:"right",style:{minWidth:"20%"},children:H.a.formatMoney(e.quantity,3)})]},t)}))})]})})]})}function oe(){var e=Object(c.i)().path;return Object(z.jsxs)(c.c,{children:[Object(z.jsx)(c.a,{path:"".concat(e,"/item-report"),component:Y}),Object(z.jsx)(c.a,{path:"".concat(e,"/resources/:projectCode/:serviceMasterCode"),component:re}),Object(z.jsx)(c.a,{path:"".concat(e,"/rbs"),component:ie})]})}}}]);
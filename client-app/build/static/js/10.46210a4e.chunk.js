(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[10],{536:function(e,t,n){"use strict";var c={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,c=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return c.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t});return n.format(e)}};t.a=c},545:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var c={CREATE:1,UPDATE:2,DELETE:3},a={PACK:-1,POST:0},r={PLANNER:1,DESIGNER:2,ESTIMATOR:3}},546:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n(22),a=n.n(c),r=n(40),i=n(25),o=n(13),s=n(0),l=n.n(s),u=n(46),d=n(9),p=n.n(d),m="/api/project-system/projects";var j={getAll:function(){return p.a.get(m)},get:function(e){return p.a.get("".concat(m,"/").concat(e))}},h=n(2),b="PROJECT_CODE_KEY",f="PROJECT_NAME_KEY",x=function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function g(e){var t=e.value,n=e.onChange,c=l.a.useState([]),o=Object(i.a)(c,2),s=o[0],d=o[1],p=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=d,e.next=4,j.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),d([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){var e=function(){var e=localStorage.getItem(b),t=localStorage.getItem(f);return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),p()}),[]),Object(h.jsx)(u.d,{required:!0,label:"D\u1ef1 \xe1n",options:x(s),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&(n({code:e.code,name:e.name}),function(e){localStorage.setItem(b,e.code),localStorage.setItem(f,e.name)}(e))}})}},577:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var c=n(545),a=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,finish:e.post.finish,level:e.post.level,projectCode:e.post.projectCode,start:e.post.start,status:c.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:c.b.UPDATE}:{code:"",commitNumber:0,description:"",finish:new Date,level:1,projectCode:"",start:new Date,status:c.b.UPDATE}}))},r=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,projectCode:e.post.projectCode,note:e.post.note,filePath:e.post.filePath,status:c.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:c.b.UPDATE}:{code:"",commitNumber:0,description:"",projectCode:"",note:"",filePath:"",status:c.b.UPDATE}}))},i=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{elementCode:e.post.elementCode,clusterCode:e.post.clusterCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{elementCode:"",clusterCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},o=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,clusterCode:e.post.clusterCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{serviceMasterCode:"",clusterCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},s=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,materialCode:e.post.materialCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{serviceMasterCode:"",materialCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},l=function(e){return{elements:a(e.elements)}},u=function(e){return{clusters:r(e.clusters),elementClusters:i(e.elementClusters),items:o(e.items)}},d=function(e){return{resources:s(e.resources)}}},578:function(e,t,n){"use strict";var c=n(9),a=n.n(c),r="/api/project-system/commits";var i={plannerTrackingChange:function(e){return a.a.get("".concat(r,"/planner-tracking-change?projectCode=").concat(e))},designerTrackingChange:function(e){return a.a.get("".concat(r,"/designer-tracking-change?projectCode=").concat(e))},estimatorTrackingChange:function(e){return a.a.get("".concat(r,"/estimator-tracking-change?projectCode=").concat(e))},plannerCommit:function(e,t){return a.a.post("".concat(r,"/planner-commit?projectCode=").concat(e),t)},designerCommit:function(e,t){return a.a.post("".concat(r,"/designer-commit?projectCode=").concat(e),t)},estimatorCommit:function(e,t){return a.a.post("".concat(r,"/estimator-commit?projectCode=").concat(e),t)}};t.a=i},625:function(e,t,n){"use strict";var c=n(208),a=function(e){switch(e){case"DC":return"G\xf3i Th\u1ea7u ph\u1ee5 nh\xe2n c\xf4ng";case"V3":return"G\xf3i Th\xe9p";case"V6":return"G\xf3i B\xea t\xf4ng";case"V7":return"G\xf3i V\xe1n khu\xf4n";case"DF":return"Local";default:return e}},r=function(e){var t=parseInt(e.toString().substr(0,4));return parseInt(e.toString().substr(4,2))<12?e+1:100*(t+1)+1},i={getRbsViewReport:function(e){var t=e.map((function(e){return e.period})),n=Math.min.apply(Math,Object(c.a)(t)),i=Math.max.apply(Math,Object(c.a)(t)),o=[];return function(e){return Array.from(new Set(e.map((function(e){return e.elementCode})))).map((function(t){var n=e.find((function(e){return e.elementCode===t}));return{code:t,description:void 0!==n?n.elementDescription:"",unit:""}}))}(e).map((function(t){var c={item:t,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialGroup})))).map((function(t){var n=e.find((function(e){return e.materialGroup===t}));return{code:t,description:void 0!==n?"".concat(a(t)):"",unit:""}}))}(e.filter((function(e){return e.elementCode===t.code}))).map((function(a){var o={item:a,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialCode})))).map((function(t){var n=e.find((function(e){return e.materialCode===t}));return{code:t,description:void 0!==n?n.description:"",unit:void 0!==n?n.unit:""}}))}(e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===a.code}))).map((function(c){for(var s={item:c,total:0,data:[]},l=e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===a.code&&e.materialCode===c.code})),u=n;u<=i;){var d=l.find((function(e){return e.period===u}));void 0!==d?s.data.push(d.quantity):s.data.push(0),u=r(u)}return o.data.push(s),!0})),c.data.push(o),!0})),o.push(c),!0})),o},addPeriod:r,getDays:function(e,t){return(t.getTime()-e.getTime())/1e3/86400+1}};t.a=i},627:function(e,t,n){"use strict";var c=n(9),a=n.n(c),r="/api/project-system/items";var i={getAll:function(e,t){return a.a.get("".concat(r,"?projectCode=").concat(e,"&version=").concat(t))},getCollective:function(e,t){return a.a.get("".concat(r,"/get-collective?projectCode=").concat(e,"&version=").concat(t))},create:function(e,t){return a.a.post("".concat(r,"?projectCode=").concat(e),t)},edit:function(e,t,n,c){return a.a.put("".concat(r,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&clusterCode=").concat(n),c)},remove:function(e,t,n){return a.a.delete("".concat(r,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&clusterCode=").concat(n))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),a.a.post("".concat(r,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i},884:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var c=n(0),a=n.n(c),r=n(27),i=n(22),o=n.n(i),s=n(40),l=n(25),u=n(208),d=n(47),p=n(531),m=n(112),j=n(379),h=n(416),b=n(417),f=n(413),x=n(414),g=n(415),C=n(418),O=n(46),v=n(536),y=n(18),k=n(546),w=n(9),M=n.n(w),A="/api/project-system/resources";var E={getAll:function(e,t){return M.a.get("".concat(A,"?projectCode=").concat(e,"&version=").concat(t))},getCbsReport:function(e){return M.a.get("".concat(A,"/get-cbs-report?projectCode=").concat(e))},create:function(e,t){return M.a.post("".concat(A,"?projectCode=").concat(e),t)},edit:function(e,t,n,c){return M.a.put("".concat(A,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&materialCode=").concat(n),c)},remove:function(e,t,n){return M.a.delete("".concat(A,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&materialCode=").concat(n))},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),M.a.post("".concat(A,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}},S=n(625),T=n(2),q=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll",maxWidth:"100%",overflowX:"auto"}}),D=function(e){for(var t=e.map((function(e){return e.period})),n=Math.min.apply(Math,Object(u.a)(t)),c=Math.max.apply(Math,Object(u.a)(t)),a=[],r=n;r<=c;)a.push("".concat(r.toString().substr(4,2),"/").concat(r.toString().substr(0,4))),r=S.a.addPeriod(r);return a};function W(){var e=q(),t=Object(d.b)(),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],i=c[1],u=a.a.useState([]),p=Object(l.a)(u,2),w=p[0],M=p[1],A=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(y.loadingActions.show()),null===r){e.next=16;break}return e.prev=2,e.t0=M,e.next=6,E.getCbsReport(r.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),M([]),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:M([]);case 17:t(y.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){A()}),[r]),Object(T.jsxs)(m.a,{className:e.root,children:[Object(T.jsx)(j.a,{container:!0,children:Object(T.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(T.jsx)(j.a,{item:!0,xs:6,children:Object(T.jsx)(k.a,{value:r,onChange:function(e){i(e)}})}),null!==r&&Object(T.jsx)(j.a,{container:!0,spacing:1,item:!0,xs:6,children:Object(T.jsx)(j.a,{item:!0,children:Object(T.jsx)(O.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:A})})})]})}),Object(T.jsx)(h.a,{className:e.container,children:Object(T.jsxs)(b.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(T.jsx)(f.a,{children:Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",whiteSpace:"nowrap"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%",whiteSpace:"nowrap"},children:"Di\u1ec5n gi\u1ea3i"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",whiteSpace:"nowrap"},children:"\u0110\u01a1n v\u1ecb"}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"},children:"T\u1ed5ng c\u1ed9ng"}),D(w).map((function(e){return Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"},children:e},e)}))]})}),Object(T.jsx)(C.a,{children:S.a.getRbsViewReport(w).map((function(e){return Object(T.jsxs)(a.a.Fragment,{children:[Object(T.jsxs)(x.a,{style:{backgroundColor:"aqua"},children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",fontWeight:"bold",whiteSpace:"nowrap"},children:e.item.code}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%",fontWeight:"bold",whiteSpace:"nowrap"},children:e.item.description}),Object(T.jsx)(g.a,{}),Object(T.jsx)(g.a,{}),D(w).map((function(t){return Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"}},"".concat(t,"-").concat(e.item.code))}))]}),e.data.map((function(t){return Object(T.jsxs)(a.a.Fragment,{children:[Object(T.jsxs)(x.a,{style:{backgroundColor:"aquamarine"},children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",fontWeight:"bold",fontStyle:"italic",paddingLeft:"32px",whiteSpace:"nowrap"},children:"".concat(e.item.code,".").concat(t.item.code)}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%",fontWeight:"bold",fontStyle:"italic",paddingLeft:"32px",whiteSpace:"nowrap"},children:t.item.description}),Object(T.jsx)(g.a,{}),Object(T.jsx)(g.a,{}),D(w).map((function(n){return Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"}},"".concat(n,"-").concat(e.item.code,"-").concat(t.item.code))}))]}),t.data.map((function(n){return Object(T.jsx)(a.a.Fragment,{children:Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",fontStyle:"italic",paddingLeft:"48px",whiteSpace:"nowrap"},children:n.item.code}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%",fontStyle:"italic",paddingLeft:"48px",whiteSpace:"nowrap"},children:n.item.description}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",fontStyle:"italic",whiteSpace:"nowrap"},children:n.item.unit}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"},children:v.a.formatMoney(n.data.reduce((function(e,t){return e+t}),0),3)}),n.data.map((function(c,a){return Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%",whiteSpace:"nowrap"},children:v.a.formatMoney(c,3)},"".concat(e.item.code,".").concat(t.item.code,".").concat(n.item.code,".").concat(a))}))]})},"".concat(e.item.code,".").concat(t.item.code,".").concat(n.item.code))}))]},"".concat(e.item.code,".").concat(t.item.code))}))]},e.item.code)}))})]})})]})}var N=n(39),P=n(577),F=n(545),L=n(169),R=n(578),I=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),U=function(e){switch(e){case 1:return N.a.green[500];case 2:return N.a.amber[500];default:return N.a.red[500]}};function _(){var e=I(),t=Object(d.b)(),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],i=c[1],u=a.a.useState({resources:[]}),p=Object(l.a)(u,2),w=p[0],M=p[1],A=a.a.useState(!1),E=Object(l.a)(A,2),S=E[0],q=E[1],D=a.a.useState(""),W=Object(l.a)(D,2),N=W[0],_=W[1],H=a.a.useState(!1),V=Object(l.a)(H,2),G=V[0],K=V[1],Y=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(!1),t(y.loadingActions.show()),e.prev=2,n={header:{branch:F.a.ESTIMATOR,createdBy:"",createdByFullName:"",createdTime:new Date,description:N,number:0,projectCode:null!==r?r.code:""},detail:Object(P.b)(w)},null===r){e.next=7;break}return e.next=7,R.a.estimatorCommit(r.code,n);case 7:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),X(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r){e.next=17;break}return t(y.loadingActions.show()),e.prev=2,e.t0=M,e.next=6,R.a.estimatorTrackingChange(r.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),M({resources:[]}),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 14:t(y.loadingActions.hide()),e.next=18;break;case 17:M({resources:[]});case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=K,e.next=4,L.a.checkRolePermission("APPROVER_ESTIMATOR_ROLE");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),K(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){X(),J()}),[r]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(O.k,{title:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i l\xean server",open:S,onClose:function(){q(!1)},onSubmit:Y,children:Object(T.jsx)(j.a,{container:!0,spacing:1,children:Object(T.jsx)(j.a,{item:!0,xs:12,children:Object(T.jsx)(O.p,{name:"commitDescription",label:"M\xf4 t\u1ea3 n\u1ed9i dung c\u1eadp nh\u1eadt",type:"text",required:!0,value:N,onChange:function(e){_(e.target.value)}})})})}),Object(T.jsxs)(m.a,{className:e.root,children:[Object(T.jsx)(j.a,{container:!0,children:Object(T.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(T.jsx)(j.a,{item:!0,xs:6,children:Object(T.jsx)(k.a,{value:r,onChange:function(e){i(e)}})}),null!==r&&G&&w.resources.length>0&&Object(T.jsx)(j.a,{container:!0,spacing:1,item:!0,xs:6,alignItems:"flex-end",children:Object(T.jsx)(j.a,{item:!0,children:Object(T.jsx)(O.n,{tooltip:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i",variant:"contained",text:"Commit",icon:"long-arrow-alt-up",color:"danger",onClick:function(){_(""),q(!0)}})})})]})}),Object(T.jsx)(h.a,{className:e.container,children:Object(T.jsxs)(b.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(T.jsx)(f.a,{children:Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 c\xf4ng t\xe1c"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i c\xf4ng t\xe1c"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i v\u1eadt t\u01b0"}),Object(T.jsx)(g.a,{align:"center",children:"\u0110\u01a1n v\u1ecb"}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:"S\u1ed1 l\u01b0\u1ee3ng"})]})}),Object(T.jsx)(C.a,{children:w.resources.map((function(e,t){return Object(T.jsxs)(x.a,{style:{backgroundColor:U(e.status)},children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?e.post.serviceMasterCode:"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.serviceMasterCode:"-"})]})}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?e.post.serviceMasterDescription:"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.serviceMasterDescription:"-"})]})}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialCode:"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialCode:"-"})]})}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialDescription:"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialDescription:"-"})]})}),Object(T.jsx)(g.a,{align:"center",style:{minWidth:"40%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialUnit:"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialUnit:"-"})]})}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:Object(T.jsxs)(j.a,{container:!0,direction:"column",children:[Object(T.jsx)(j.a,{item:!0,children:null!==e.post?v.a.formatMoney(e.post.quantity,3):"-"}),Object(T.jsx)(j.a,{item:!0,children:null!==e.pack?v.a.formatMoney(e.pack.quantity,3):"-"})]})})]},t)}))})]})})]})]})}var H=n(15),V=n(13),G=n(70),K=n(688),Y=n(627),X=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 130px)",overflowY:"scroll"}}),J={serviceMasterCode:"",materialCode:"",quantity:""};function B(){var e=X(),t=Object(d.b)(),n=a.a.useState(!1),c=Object(l.a)(n,2),r=c[0],i=c[1],u=a.a.useState(!1),p=Object(l.a)(u,2),v=p[0],w=p[1],M=a.a.useState(null),A=Object(l.a)(M,2),S=A[0],q=A[1],D=a.a.useState(null),W=Object(l.a)(D,2),N=W[0],P=W[1],L=a.a.useState([]),R=Object(l.a)(L,2),I=R[0],U=R[1],_=a.a.useState([]),B=Object(l.a)(_,2),z=B[0],Q=B[1],Z=a.a.useState(J),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=a.a.useState(!1),ce=Object(l.a)(ne,2),ae=ce[0],re=ce[1],ie=a.a.useState([]),oe=Object(l.a)(ie,2),se=oe[0],le=oe[1],ue=a.a.useState(""),de=Object(l.a)(ue,2),pe=de[0],me=de[1],je=function(){var e=Object(s.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1&&null!==S)){e.next=17;break}return le([]),t(y.loadingActions.show()),e.prev=3,e.t0=le,e.next=7,E.addFromExcel(S.code,n[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),be(),re(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),t(y.loadingActions.hide()),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===S){e.next=16;break}return t(y.loadingActions.show()),e.prev=2,e.t0=Q,e.next=6,E.getAll(S.code,F.c.PACK);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 13:return e.prev=13,t(y.loadingActions.hide()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===S){e.next=16;break}return t(y.loadingActions.show()),e.prev=2,e.next=5,Promise.all([Y.a.getCollective(S.code,F.c.POST),E.getAll(S.code,F.c.PACK)]);case 5:n=e.sent,U(n[0]),Q(n[1]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 13:return e.prev=13,t(y.loadingActions.hide()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),fe=function(e){te(Object(V.a)(Object(V.a)({},ee),{},Object(H.a)({},e.target.name,e.target.value)))},xe=function(){var e=Object(s.a)(o.a.mark((function e(n,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===S){e.next=15;break}if(window.prompt("Vui l\xf2ng nh\u1eadp M\xe3 v\u1eadt t\u01b0 \u0111\u1ec3 x\xe1c nh\u1eadn x\xf3a!")!==c){e.next=15;break}return t(y.loadingActions.show()),e.prev=4,e.next=7,E.remove(S.code,n,c);case 7:be(),t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(4),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,n){return e.apply(this,arguments)}}(),ge=function(){var e=Object(s.a)(o.a.mark((function e(){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!1),null===S){e.next=24;break}if(t(y.loadingActions.show()),e.prev=3,!v){e.next=12;break}return n={serviceMasterCode:ee.serviceMasterCode,materialCode:ee.materialCode,quantity:parseFloat(ee.quantity),projectCode:S.code,versionNumber:F.c.PACK},e.next=8,E.edit(S.code,ee.serviceMasterCode,ee.materialCode,n);case 8:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),he(),e.next=18;break;case 12:if(null===N){e.next=18;break}return c={serviceMasterCode:ee.serviceMasterCode,materialCode:N.code,quantity:parseFloat(ee.quantity),projectCode:S.code,versionNumber:F.c.PACK},e.next=16,E.create(S.code,c);case 16:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),he();case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 24:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){be()}),[S]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(O.k,{open:ae,onClose:function(){re(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(T.jsx)(j.a,{container:!0,spacing:1,children:se.map((function(e,t){return Object(T.jsxs)(j.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(T.jsx)(j.a,{item:!0,xs:12,md:3,style:{color:e.isAdded?"green":"red"},children:Object(T.jsx)(G.a,{variant:"subtitle2",children:"".concat(e.item.serviceMasterCode,"-").concat(e.item.materialCode)})}),!e.isAdded&&Object(T.jsx)(j.a,{item:!0,xs:12,md:9,style:{color:e.isAdded?"green":"red"},children:Object(T.jsx)(G.a,{variant:"caption",children:e.message})})]},t)}))})}),Object(T.jsx)(O.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:r,onClose:function(){i(!1)},onSubmit:ge,children:Object(T.jsxs)(j.a,{container:!0,spacing:1,children:[Object(T.jsx)(j.a,{item:!0,xs:12,children:Object(T.jsx)(O.p,{name:"serviceMasterCode",label:"M\xe3 c\xf4ng t\xe1c",type:"text",required:!0,disabled:!0,value:ee.serviceMasterCode,onChange:fe})}),Object(T.jsx)(j.a,{item:!0,xs:12,children:v?Object(T.jsx)(O.p,{name:"materialCode",label:"M\xe3 v\u1eadt t\u01b0",type:"text",required:!0,disabled:!0,value:ee.materialCode,onChange:fe}):Object(T.jsx)(K.a,{value:N,onChange:function(e){P(e)}})}),Object(T.jsx)(j.a,{item:!0,xs:12,children:Object(T.jsx)(O.p,{name:"quantity",label:"S\u1ed1 l\u01b0\u1ee3ng",type:"number",required:!0,value:ee.quantity,onChange:fe})})]})}),Object(T.jsxs)(m.a,{className:e.root,children:[Object(T.jsx)(j.a,{container:!0,children:Object(T.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(T.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(T.jsx)(k.a,{value:S,onChange:function(e){q(e)}})}),Object(T.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(T.jsx)(O.p,{name:"keyWord",label:"L\u1ecdc theo c\xf4ng t\xe1c",type:"text",value:pe,onChange:function(e){me(e.target.value)}})}),null!==S&&Object(T.jsxs)(j.a,{container:!0,spacing:1,item:!0,xs:12,alignItems:"flex-end",children:[Object(T.jsx)(j.a,{item:!0,children:Object(T.jsx)(O.q,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:je,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Excel",color:"primary"})}),Object(T.jsx)(j.a,{item:!0,children:Object(T.jsx)("a",{href:"https://ecobavn.sharepoint.com/:x:/s/bvkt/ETVajoRUWGdLiXDqlSS5KEkBvee7NaqgPmqWM0yYJPkOXw?e=OgQRne",style:{textDecoration:"none"},target:"_blank",rel:"no noreferrer",children:Object(T.jsx)(O.n,{tooltip:"Xem template",variant:"contained",text:"Template",color:"info",icon:"file-excel"})})}),Object(T.jsx)(j.a,{item:!0,children:Object(T.jsx)(O.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:be})})]})]})}),Object(T.jsx)(h.a,{className:e.container,children:Object(T.jsxs)(b.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(T.jsx)(f.a,{children:Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%"},children:"Di\u1ec5n gi\u1ea3i"}),Object(T.jsx)(g.a,{align:"center",style:{minWidth:"20%"},children:"\u0110\u01a1n v\u1ecb"}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(T.jsx)(g.a,{})]})}),Object(T.jsx)(C.a,{children:I.filter((function(e){return void 0!==pe.split("|").find((function(t){return e.serviceMasterCode.includes(t)||e.serviceMasterDescription.includes(t)}))})).map((function(e){return Object(T.jsxs)(a.a.Fragment,{children:[Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{style:{fontWeight:"bold",borderLeft:"4px solid blue"},children:e.serviceMasterCode}),Object(T.jsx)(g.a,{style:{fontWeight:"bold"},children:e.serviceMasterDescription}),Object(T.jsx)(g.a,{align:"center",style:{fontWeight:"bold"},children:e.serviceMasterUnit}),Object(T.jsx)(g.a,{align:"right",style:{fontWeight:"bold"},children:e.quantity}),Object(T.jsx)(g.a,{children:Object(T.jsx)(O.n,{tooltip:"Th\xeam v\u1eadt t\u01b0",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){return t=e.serviceMasterCode,te({serviceMasterCode:t,materialCode:"",quantity:"0"}),w(!1),void i(!0);var t}})})]}),z.filter((function(t){return t.serviceMasterCode===e.serviceMasterCode})).map((function(e){return Object(T.jsxs)(x.a,{children:[Object(T.jsx)(g.a,{align:"left",style:{minWidth:"20%",paddingLeft:"32px",borderLeft:"4px solid yellow"},children:e.materialCode}),Object(T.jsx)(g.a,{align:"left",style:{minWidth:"40%",paddingLeft:"32px"},children:e.materialDescription}),Object(T.jsx)(g.a,{align:"center",style:{minWidth:"20%"},children:e.materialUnit}),Object(T.jsx)(g.a,{align:"right",style:{minWidth:"20%"},children:e.quantity}),Object(T.jsxs)(g.a,{children:[Object(T.jsx)(O.n,{tooltip:"Ch\u1ec9nh s\u1eeda",text:"S\u1eeda",icon:"edit",color:"success",onClick:function(){!function(e){te({serviceMasterCode:e.serviceMasterCode,materialCode:e.materialCode,quantity:e.quantity.toString()}),w(!0),i(!0)}(e)}}),Object(T.jsx)(O.n,{tooltip:"X\xf3a V\u1eadt t\u01b0",text:"X\xf3a",icon:"trash-alt",color:"danger",onClick:function(){xe(e.serviceMasterCode,e.materialCode)}})]})]},e.materialCode)}))]},e.serviceMasterCode)}))})]})})]})]})}function z(){var e=Object(r.i)().path;return Object(T.jsxs)(r.c,{children:[Object(T.jsx)(r.a,{path:"".concat(e,"/resources"),component:B}),Object(T.jsx)(r.a,{path:"".concat(e,"/commits"),component:_}),Object(T.jsx)(r.a,{path:"".concat(e,"/cbs-report"),component:W})]})}}}]);
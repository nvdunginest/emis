(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[11],{538:function(e,t,n){"use strict";var c={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,c=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return c.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t,minimumFractionDigits:t});return n.format(e)}};t.a=c},544:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var c={CREATE:1,UPDATE:2,DELETE:3},a={PACK:-1,POST:0},r={PLANNER:1,DESIGNER:2,ESTIMATOR:3,SUPERVISOR:4}},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n(22),a=n.n(c),r=n(40),o=n(25),i=n(13),s=n(0),l=n.n(s),u=n(46),d=n(9),p=n.n(d),m="/api/project-system/projects";var j={getAll:function(){return p.a.get(m)},get:function(e){return p.a.get("".concat(m,"/").concat(e))}},b=n(2),h="PROJECT_CODE_KEY",f="PROJECT_NAME_KEY",x=function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function g(e){var t=e.value,n=e.onChange,c=l.a.useState([]),i=Object(o.a)(c,2),s=i[0],d=i[1],p=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=d,e.next=4,j.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),d([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){var e=function(){var e=localStorage.getItem(h),t=localStorage.getItem(f);return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),p()}),[]),Object(b.jsx)(u.d,{required:!0,label:"D\u1ef1 \xe1n",options:x(s),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&(n({code:e.code,name:e.name}),function(e){localStorage.setItem(h,e.code),localStorage.setItem(f,e.name)}(e))}})}},568:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return m}));var c=n(544),a=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,finish:e.post.finish,level:e.post.level,projectCode:e.post.projectCode,start:e.post.start,status:c.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:c.b.UPDATE}:{code:"",commitNumber:0,description:"",finish:new Date,level:1,projectCode:"",start:new Date,status:c.b.UPDATE}}))},r=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,projectCode:e.post.projectCode,note:e.post.note,filePath:e.post.filePath,status:c.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:c.b.UPDATE}:{code:"",commitNumber:0,description:"",projectCode:"",note:"",filePath:"",status:c.b.UPDATE}}))},o=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{elementCode:e.post.elementCode,clusterCode:e.post.clusterCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{elementCode:"",clusterCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},i=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,clusterCode:e.post.clusterCode,billCode:e.post.billCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,billCode:e.pack.billCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,billCode:e.pack.billCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{serviceMasterCode:"",clusterCode:"",billCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},s=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,materialCode:e.post.materialCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{serviceMasterCode:"",materialCode:"",quantity:1,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},l=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{elementCode:e.post.elementCode,postingDate:e.post.postingDate,commitNumber:0,projectCode:e.post.projectCode,status:c.b.DELETE}:null!==e.pack&&null===e.post?{elementCode:e.pack.elementCode,postingDate:e.pack.postingDate,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.CREATE}:null!==e.pack&&null!==e.post?{elementCode:e.pack.elementCode,postingDate:e.pack.postingDate,commitNumber:0,projectCode:e.pack.projectCode,status:c.b.UPDATE}:{elementCode:"",postingDate:new Date,commitNumber:0,projectCode:"",status:c.b.UPDATE}}))},u=function(e){return{elements:a(e.elements)}},d=function(e){return{clusters:r(e.clusters),elementClusters:o(e.elementClusters),items:i(e.items)}},p=function(e){return{resources:s(e.resources)}},m=function(e){return{confirmations:l(e.confirmations)}}},569:function(e,t,n){"use strict";var c=n(9),a=n.n(c),r="/api/project-system/commits";var o={plannerTrackingChange:function(e){return a.a.get("".concat(r,"/planner-tracking-change?projectCode=").concat(e))},designerTrackingChange:function(e){return a.a.get("".concat(r,"/designer-tracking-change?projectCode=").concat(e))},estimatorTrackingChange:function(e){return a.a.get("".concat(r,"/estimator-tracking-change?projectCode=").concat(e))},supervisorTrackingChange:function(e){return a.a.get("".concat(r,"/supervisor-tracking-change?projectCode=").concat(e))},plannerCommit:function(e,t){return a.a.post("".concat(r,"/planner-commit?projectCode=").concat(e),t)},designerCommit:function(e,t){return a.a.post("".concat(r,"/designer-commit?projectCode=").concat(e),t)},estimatorCommit:function(e,t){return a.a.post("".concat(r,"/estimator-commit?projectCode=").concat(e),t)},supervisorCommit:function(e,t){return a.a.post("".concat(r,"/supervisor-commit?projectCode=").concat(e),t)}};t.a=o},599:function(e,t,n){"use strict";var c=n(209),a=function(e){var t=parseInt(e.toString().substr(0,4));return parseInt(e.toString().substr(4,2))<12?e+1:100*(t+1)+1},r={getRbsViewReport:function(e){var t=e.map((function(e){return e.period})),n=Math.min.apply(Math,Object(c.a)(t)),r=Math.max.apply(Math,Object(c.a)(t)),o=[];return function(e){return Array.from(new Set(e.map((function(e){return e.elementCode})))).map((function(t){var n=e.find((function(e){return e.elementCode===t}));return{code:t,description:void 0!==n?n.elementDescription:"",unit:""}}))}(e).map((function(t){var c={item:t,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialGroup})))).map((function(t){var n=e.find((function(e){return e.materialGroup===t}));return{code:t,description:void 0!==n?n.materialGroupDescription:"",unit:""}}))}(e.filter((function(e){return e.elementCode===t.code}))).map((function(o){var i={item:o,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialCode})))).map((function(t){var n=e.find((function(e){return e.materialCode===t}));return{code:t,description:void 0!==n?n.description:"",unit:void 0!==n?n.unit:""}}))}(e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===o.code}))).map((function(c){for(var s={item:c,total:0,data:[]},l=e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===o.code&&e.materialCode===c.code})),u=n;u<=r;){var d=l.find((function(e){return e.period===u}));void 0!==d?s.data.push(d.quantity):s.data.push(0),u=a(u)}return i.data.push(s),!0})),c.data.push(i),!0})),o.push(c),!0})),o},addPeriod:a,getDays:function(e,t){return(t.getTime()-e.getTime())/1e3/86400+1}};t.a=r},630:function(e,t,n){"use strict";var c=n(9),a=n.n(c),r="/api/project-system/items";var o={getAll:function(e,t){return a.a.get("".concat(r,"?projectCode=").concat(e,"&version=").concat(t))},getCollective:function(e,t){return a.a.get("".concat(r,"/get-collective?projectCode=").concat(e,"&version=").concat(t))},getDistinct:function(e,t){return a.a.get("".concat(r,"/get-distinct?projectCode=").concat(e,"&version=").concat(t))},create:function(e,t){return a.a.post("".concat(r,"?projectCode=").concat(e),t)},edit:function(e,t,n,c){return a.a.put("".concat(r,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&clusterCode=").concat(n),c)},remove:function(e,t){return a.a.post("".concat(r,"/delete?projectCode=").concat(e),t)},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),a.a.post("".concat(r,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=o},886:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return te}));var c=n(0),a=n.n(c),r=n(27),o=n(22),i=n.n(o),s=n(40),l=n(25),u=n(209),d=n(47),p=n(533),m=n(112),j=n(380),b=n(417),h=n(418),f=n(414),x=n(415),g=n(416),C=n(419),O=n(46),v=n(538),y=n(18),k=n(545),w=n(9),S=n.n(w),M="/api/project-system/resources";var E={getAll:function(e,t){return S.a.get("".concat(M,"?projectCode=").concat(e,"&version=").concat(t))},getCbsReport:function(e){return S.a.get("".concat(M,"/get-cbs-report?projectCode=").concat(e))},create:function(e,t){return S.a.post("".concat(M,"?projectCode=").concat(e),t)},edit:function(e,t,n,c){return S.a.put("".concat(M,"?projectCode=").concat(e,"&serviceMasterCode=").concat(t,"&materialCode=").concat(n),c)},remove:function(e,t){return S.a.post("".concat(M,"/delete?projectCode=").concat(e),t)},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),S.a.post("".concat(M,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}},A=n(599),N=n(2),T=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll",maxWidth:"100%",overflowX:"auto"},cell:{fontSize:"0.75rem"}}),D=function(e){for(var t=e.map((function(e){return e.period})),n=Math.min.apply(Math,Object(u.a)(t)),c=Math.max.apply(Math,Object(u.a)(t)),a=[],r=n;r<=c;)a.push("".concat(r.toString().substr(4,2),"/").concat(r.toString().substr(0,4))),r=A.a.addPeriod(r);return a};function q(){var e=T(),t=Object(d.b)(),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],o=c[1],u=a.a.useState([]),p=Object(l.a)(u,2),w=p[0],S=p[1],M=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(y.loadingActions.show()),null===r){e.next=16;break}return e.prev=2,e.t0=S,e.next=6,E.getCbsReport(r.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),S([]),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:S([]);case 17:t(y.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){M()}),[r]),Object(N.jsxs)(m.a,{className:e.root,children:[Object(N.jsx)(j.a,{container:!0,children:Object(N.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(N.jsx)(j.a,{item:!0,xs:6,children:Object(N.jsx)(k.a,{value:r,onChange:function(e){o(e)}})}),null!==r&&Object(N.jsxs)(j.a,{container:!0,spacing:1,item:!0,xs:6,children:[Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:M})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.i,{variant:"contained",label:"Network Activity",filename:"".concat(r.code,"_Network-activity.xlsx"),url:"/api/project-system/resources/get-network-activity-excel?projectCode=".concat(r.code)})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.i,{variant:"contained",label:"Material Component",filename:"".concat(r.code,"_Material-component.xlsx"),url:"/api/project-system/resources/get-material-component-excel?projectCode=".concat(r.code)})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.i,{variant:"contained",label:"Budget",filename:"".concat(r.code,"_Budget.xlsx"),url:"/api/project-system/resources/get-budget-excel?projectCode=".concat(r.code)})})]})]})}),Object(N.jsx)(b.a,{className:e.container,children:Object(N.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(N.jsx)(f.a,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"40%",whiteSpace:"nowrap"},children:"Di\u1ec5n gi\u1ea3i"}),Object(N.jsx)(g.a,{align:"center",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:"\u0110\u01a1n v\u1ecb"}),Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:"T\u1ed5ng c\u1ed9ng"}),D(w).map((function(t){return Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:t},t)}))]})}),Object(N.jsx)(C.a,{children:A.a.getRbsViewReport(w).map((function(t){return Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsxs)(x.a,{style:{backgroundColor:"aqua"},children:[Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"20%",fontWeight:"bold",whiteSpace:"nowrap"},children:t.item.code}),Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"40%",fontWeight:"bold",whiteSpace:"nowrap"},children:t.item.description}),Object(N.jsx)(g.a,{}),Object(N.jsx)(g.a,{}),D(w).map((function(n){return Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"}},"".concat(n,"-").concat(t.item.code))}))]}),t.data.map((function(n){return Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsxs)(x.a,{style:{backgroundColor:"aquamarine"},children:[Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"20%",fontWeight:"bold",fontStyle:"italic",paddingLeft:"32px",whiteSpace:"nowrap"},children:"".concat(t.item.code,".").concat(n.item.code)}),Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"40%",fontWeight:"bold",fontStyle:"italic",paddingLeft:"32px",whiteSpace:"nowrap"},children:n.item.description}),Object(N.jsx)(g.a,{}),Object(N.jsx)(g.a,{}),D(w).map((function(c){return Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"}},"".concat(c,"-").concat(t.item.code,"-").concat(n.item.code))}))]}),n.data.map((function(c){return Object(N.jsx)(a.a.Fragment,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"20%",fontStyle:"italic",paddingLeft:"48px",whiteSpace:"nowrap"},children:c.item.code}),Object(N.jsx)(g.a,{align:"left",className:e.cell,style:{minWidth:"40%",fontStyle:"italic",paddingLeft:"48px",whiteSpace:"nowrap"},children:c.item.description}),Object(N.jsx)(g.a,{align:"center",className:e.cell,style:{minWidth:"20%",fontStyle:"italic",whiteSpace:"nowrap"},children:c.item.unit}),Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:v.a.formatMoney(c.data.reduce((function(e,t){return e+t}),0),3)}),c.data.map((function(a,r){return Object(N.jsx)(g.a,{align:"right",className:e.cell,style:{minWidth:"20%",whiteSpace:"nowrap"},children:v.a.formatMoney(a,3)},"".concat(t.item.code,".").concat(n.item.code,".").concat(c.item.code,".").concat(r))}))]})},"".concat(t.item.code,".").concat(n.item.code,".").concat(c.item.code))}))]},"".concat(t.item.code,".").concat(n.item.code))}))]},t.item.code)}))})]})})]})}var I=n(39),P=n(568),R=n(544),L=n(167),F=n(569),U=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"}}),_=function(e){switch(e){case 1:return I.a.green[500];case 2:return I.a.amber[500];default:return I.a.red[500]}};function W(){var e=U(),t=Object(d.b)(),n=a.a.useState(null),c=Object(l.a)(n,2),r=c[0],o=c[1],u=a.a.useState({resources:[]}),p=Object(l.a)(u,2),w=p[0],S=p[1],M=a.a.useState(!1),E=Object(l.a)(M,2),A=E[0],T=E[1],D=a.a.useState(""),q=Object(l.a)(D,2),I=q[0],W=q[1],z=a.a.useState(!1),H=Object(l.a)(z,2),K=H[0],Y=H[1],V=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(!1),t(y.loadingActions.show()),e.prev=2,n={header:{branch:R.a.ESTIMATOR,createdBy:"",createdByFullName:"",createdTime:new Date,description:I,number:0,projectCode:null!==r?r.code:""},detail:Object(P.b)(w)},null===r){e.next=7;break}return e.next=7,F.a.estimatorCommit(r.code,n);case 7:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),G(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r){e.next=17;break}return t(y.loadingActions.show()),e.prev=2,e.t0=S,e.next=6,F.a.estimatorTrackingChange(r.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),S({resources:[]}),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 14:t(y.loadingActions.hide()),e.next=18;break;case 17:S({resources:[]});case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Y,e.next=4,L.a.checkRolePermission("APPROVER_ESTIMATOR_ROLE");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),Y(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){G(),B()}),[r]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(O.k,{title:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i l\xean server",open:A,onClose:function(){T(!1)},onSubmit:V,children:Object(N.jsx)(j.a,{container:!0,spacing:1,children:Object(N.jsx)(j.a,{item:!0,xs:12,children:Object(N.jsx)(O.p,{name:"commitDescription",label:"M\xf4 t\u1ea3 n\u1ed9i dung c\u1eadp nh\u1eadt",type:"text",required:!0,value:I,onChange:function(e){W(e.target.value)}})})})}),Object(N.jsxs)(m.a,{className:e.root,children:[Object(N.jsx)(j.a,{container:!0,children:Object(N.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(N.jsx)(j.a,{item:!0,xs:6,children:Object(N.jsx)(k.a,{value:r,onChange:function(e){o(e)}})}),null!==r&&K&&w.resources.length>0&&Object(N.jsx)(j.a,{container:!0,spacing:1,item:!0,xs:6,alignItems:"flex-end",children:Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.n,{tooltip:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i",variant:"contained",text:"Commit",icon:"long-arrow-alt-up",color:"danger",onClick:function(){W(""),T(!0)}})})})]})}),Object(N.jsx)(b.a,{className:e.container,children:Object(N.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(N.jsx)(f.a,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:"M\xe3 c\xf4ng t\xe1c"}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:"Di\u1ec5n gi\u1ea3i c\xf4ng t\xe1c"}),Object(N.jsx)(g.a,{align:"center",style:{fontSize:"0.75rem"},children:"\u0110\u01a1n v\u1ecb"}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:"M\xe3 v\u1eadt t\u01b0"}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:"Di\u1ec5n gi\u1ea3i v\u1eadt t\u01b0"}),Object(N.jsx)(g.a,{align:"center",style:{fontSize:"0.75rem"},children:"\u0110\u01a1n v\u1ecb"}),Object(N.jsx)(g.a,{align:"right",style:{fontSize:"0.75rem"},children:"\u0110\u1ecbnh m\u1ee9c"})]})}),Object(N.jsx)(C.a,{children:w.resources.map((function(e,t){return Object(N.jsxs)(x.a,{style:{backgroundColor:_(e.status)},children:[Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.serviceMasterCode:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.serviceMasterCode:"-"})]})}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.serviceMasterDescription:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.serviceMasterDescription:"-"})]})}),Object(N.jsx)(g.a,{align:"center",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.serviceMasterUnit:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.serviceMasterUnit:"-"})]})}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialCode:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialCode:"-"})]})}),Object(N.jsx)(g.a,{align:"left",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialDescription:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialDescription:"-"})]})}),Object(N.jsx)(g.a,{align:"center",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?e.post.materialUnit:"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?e.pack.materialUnit:"-"})]})}),Object(N.jsx)(g.a,{align:"right",style:{fontSize:"0.75rem"},children:Object(N.jsxs)(j.a,{container:!0,direction:"column",children:[Object(N.jsx)(j.a,{item:!0,children:null!==e.post?v.a.formatMoney(e.post.quantity,3):"-"}),Object(N.jsx)(j.a,{item:!0,children:null!==e.pack?v.a.formatMoney(e.pack.quantity,3):"-"})]})})]},t)}))})]})})]})]})}var z=n(15),H=n(13),K=n(70),Y=n(688),V="MATERIAL_CODE_KEY",G="MATERIAL_DESCRIPTION_KEY",B="MATERIAL_UNIT_KEY";function J(e){var t,n=e.value,c=e.onChange,r=a.a.useState([]),o=Object(l.a)(r,2),u=o[0],d=o[1],p=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=d,e.next=4,Y.a.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),d([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return a.a.useEffect((function(){var e=function(){var e=localStorage.getItem(V),t=localStorage.getItem(G),n=localStorage.getItem(B);return null===e||null===t||null===n?null:{code:e,label:"[".concat(e,"]-").concat(t),description:t,unit:n}}();null!==e&&c({code:e.code,description:e.description,unit:e.unit}),p()}),[]),Object(N.jsx)(O.d,{required:!0,label:"V\u1eadt t\u01b0",options:(t=u,t.map((function(e){return Object(H.a)(Object(H.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.description)})}))),optionLabel:"label",value:null!==n?{code:n.code,label:"[".concat(n.code,"]-").concat(n.description),description:n.description,unit:n.unit}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){var t;null!==e&&(c({code:e.code,description:e.description,unit:e.unit}),t=e,localStorage.setItem(V,t.code),localStorage.setItem(G,t.description),localStorage.setItem(B,t.unit))}})}var X=n(630),Q=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 130px)",overflowY:"scroll"},cell:{fontSize:"0.75rem"}}),Z={serviceMasterCode:"",materialCode:"",quantity:""},$=function(e,t,n){return void 0!==n.find((function(n){return n.materialCode===t&&n.serviceMasterCode===e}))};function ee(){var e=Q(),t=Object(d.b)(),n=a.a.useState(!1),c=Object(l.a)(n,2),r=c[0],o=c[1],p=a.a.useState(!1),w=Object(l.a)(p,2),S=w[0],M=w[1],A=a.a.useState(null),T=Object(l.a)(A,2),D=T[0],q=T[1],P=a.a.useState(null),L=Object(l.a)(P,2),F=L[0],U=L[1],_=a.a.useState([]),W=Object(l.a)(_,2),Y=W[0],V=W[1],G=a.a.useState([]),B=Object(l.a)(G,2),ee=B[0],te=B[1],ne=a.a.useState(Z),ce=Object(l.a)(ne,2),ae=ce[0],re=ce[1],oe=a.a.useState([]),ie=Object(l.a)(oe,2),se=ie[0],le=ie[1],ue=a.a.useState(!1),de=Object(l.a)(ue,2),pe=de[0],me=de[1],je=a.a.useState([]),be=Object(l.a)(je,2),he=be[0],fe=be[1],xe=a.a.useState(""),ge=Object(l.a)(xe,2),Ce=ge[0],Oe=ge[1],ve=a.a.useState(!1),ye=Object(l.a)(ve,2),ke=ye[0],we=ye[1],Se=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we(!1),null===D){e.next=15;break}return t(y.loadingActions.show()),e.prev=3,e.next=6,E.remove(D.code,se);case 6:Ee(),le([]),t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=Object(s.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1&&null!==D)){e.next=17;break}return fe([]),t(y.loadingActions.show()),e.prev=3,e.t0=fe,e.next=7,E.addFromExcel(D.code,n[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),Ae(),me(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),t(y.loadingActions.hide()),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),Ee=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===D){e.next=16;break}return t(y.loadingActions.show()),e.prev=2,e.t0=te,e.next=6,E.getAll(D.code,R.c.PACK);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(2),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 13:return e.prev=13,t(y.loadingActions.hide()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===D){e.next=16;break}return t(y.loadingActions.show()),e.prev=2,e.next=5,Promise.all([X.a.getDistinct(D.code,R.c.POST),E.getAll(D.code,R.c.PACK)]);case 5:n=e.sent,V(n[0]),te(n[1]),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t(y.alertActions.show(y.alertMessage.FETCH_FAILURE,"error"));case 13:return e.prev=13,t(y.loadingActions.hide()),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),Ne=function(e){re(Object(H.a)(Object(H.a)({},ae),{},Object(z.a)({},e.target.name,e.target.value)))},Te=function(){var e=Object(s.a)(i.a.mark((function e(){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!1),null===D){e.next=24;break}if(t(y.loadingActions.show()),e.prev=3,!S){e.next=12;break}return n={serviceMasterCode:ae.serviceMasterCode,materialCode:ae.materialCode,quantity:parseFloat(ae.quantity),projectCode:D.code,versionNumber:R.c.PACK},e.next=8,E.edit(D.code,ae.serviceMasterCode,ae.materialCode,n);case 8:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),Ee(),e.next=18;break;case 12:if(null===F){e.next=18;break}return c={serviceMasterCode:ae.serviceMasterCode,materialCode:F.code,quantity:parseFloat(ae.quantity),projectCode:D.code,versionNumber:R.c.PACK},e.next=16,E.create(D.code,c);case 16:t(y.alertActions.show(y.alertMessage.ACTION_SUCCESS,"success")),Ee();case 18:e.next=24;break;case 20:e.prev=20,e.t0=e.catch(3),t(y.alertActions.show(y.alertMessage.ACTION_FAILURE,"error")),t(y.loadingActions.hide());case 24:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(){return e.apply(this,arguments)}}(),De=function(){var e=Object(s.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$(t,n,se)?le(se.filter((function(e){return!(e.materialCode===n&&e.serviceMasterCode===t)}))):le([].concat(Object(u.a)(se),[{materialCode:n,serviceMasterCode:t}]));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return a.a.useEffect((function(){Ae()}),[D]),a.a.useEffect((function(){le([])}),[ee]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(O.k,{open:ke,onClose:function(){we(!1)},onSubmit:function(){Se()},title:"X\xe1c nh\u1eadn x\xf3a c\xe1c \u0111\u1ecbnh m\u1ee9c",children:Object(N.jsxs)(j.a,{container:!0,spacing:1,children:[Object(N.jsx)(j.a,{item:!0,xs:12,children:Object(N.jsx)(K.a,{variant:"body2",children:"Thao t\xe1c n\xe0y s\u1ebd x\xf3a c\xe1c \u0111\u1ecbnh m\u1ee9c \u0111\u01b0\u1ee3c ch\u1ecdn. Vui l\xf2ng ki\u1ec3m tra k\u1ef9 tr\u01b0\u1edbc khi x\xf3a!"})}),se.map((function(e,t){return Object(N.jsx)(j.a,{item:!0,xs:12,children:Object(N.jsx)(K.a,{variant:"subtitle2",children:"".concat(e.serviceMasterCode," - ").concat(e.materialCode)})},t)}))]})}),Object(N.jsx)(O.k,{open:pe,onClose:function(){me(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(N.jsx)(j.a,{container:!0,spacing:1,children:he.map((function(e,t){return Object(N.jsxs)(j.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(N.jsx)(j.a,{item:!0,xs:12,md:3,style:{color:e.isAdded?"green":"red"},children:Object(N.jsx)(K.a,{variant:"subtitle2",children:"".concat(e.item.serviceMasterCode,"-").concat(e.item.materialCode)})}),Object(N.jsx)(j.a,{item:!0,xs:12,md:9,style:{color:e.isAdded?"green":"red"},children:Object(N.jsx)(K.a,{variant:"caption",children:e.message})})]},t)}))})}),Object(N.jsx)(O.k,{title:"Th\xeam/Ch\u1ec9nh s\u1eeda",open:r,onClose:function(){o(!1)},onSubmit:Te,children:Object(N.jsxs)(j.a,{container:!0,spacing:1,children:[Object(N.jsx)(j.a,{item:!0,xs:12,children:Object(N.jsx)(O.p,{name:"serviceMasterCode",label:"M\xe3 c\xf4ng t\xe1c",type:"text",required:!0,disabled:!0,value:ae.serviceMasterCode,onChange:Ne})}),Object(N.jsx)(j.a,{item:!0,xs:12,children:S?Object(N.jsx)(O.p,{name:"materialCode",label:"M\xe3 v\u1eadt t\u01b0",type:"text",required:!0,disabled:!0,value:ae.materialCode,onChange:Ne}):Object(N.jsx)(J,{value:F,onChange:function(e){U(e)}})}),Object(N.jsx)(j.a,{item:!0,xs:12,children:Object(N.jsx)(O.p,{name:"quantity",label:"S\u1ed1 l\u01b0\u1ee3ng",type:"number",required:!0,value:ae.quantity,onChange:Ne})})]})}),Object(N.jsxs)(m.a,{className:e.root,children:[Object(N.jsx)(j.a,{container:!0,children:Object(N.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(N.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(k.a,{value:D,onChange:function(e){q(e)}})}),Object(N.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(N.jsx)(O.p,{name:"keyWord",label:"L\u1ecdc theo c\xf4ng t\xe1c",type:"text",value:Ce,onChange:function(e){Oe(e.target.value)}})}),null!==D&&Object(N.jsxs)(j.a,{container:!0,spacing:1,item:!0,xs:12,alignItems:"flex-end",children:[Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.q,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:Me,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Excel",color:"primary"})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.i,{variant:"contained",label:"T\u1ea3i v\u1ec1",filename:"".concat(D.code,"_Dinh muc.xlsx"),url:"/api/project-system/resources/get-excel?projectCode=".concat(D.code,"&version=").concat(R.c.PACK)})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:Ae})}),Object(N.jsx)(j.a,{item:!0,children:Object(N.jsx)(O.n,{tooltip:"X\xf3a c\xe1c \u0111\u1ecbnh m\u1ee9c \u0111\xe3 ch\u1ecdn",variant:"contained",text:"X\xf3a",color:"danger",icon:"trash-alt",disabled:se.length<=0,onClick:function(){we(!0)}})})]})]})}),Object(N.jsx)(b.a,{className:e.container,children:Object(N.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(N.jsx)(f.a,{children:Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{style:{padding:0,width:16}}),Object(N.jsx)(g.a,{className:e.cell,align:"left",children:"M\xe3 v\u1eadt t\u01b0"}),Object(N.jsx)(g.a,{className:e.cell,align:"left",children:"Di\u1ec5n gi\u1ea3i"}),Object(N.jsx)(g.a,{className:e.cell,align:"center",children:"\u0110\u01a1n v\u1ecb"}),Object(N.jsx)(g.a,{className:e.cell,align:"right",children:"\u0110\u1ecbnh m\u1ee9c"})]})}),Object(N.jsx)(C.a,{children:Y.map((function(t){return Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{style:{padding:0,width:16}}),Object(N.jsx)(g.a,{className:e.cell,align:"left",style:{fontWeight:"bold"},children:t.serviceMasterCode}),Object(N.jsx)(g.a,{className:e.cell,align:"left",style:{fontWeight:"bold"},children:t.serviceMasterDescription}),Object(N.jsx)(g.a,{className:e.cell,align:"center",style:{fontWeight:"bold"},children:t.serviceMasterUnit}),Object(N.jsx)(g.a,{className:e.cell,align:"right"})]}),ee.filter((function(e){return e.serviceMasterCode===t.serviceMasterCode})).map((function(t,n){return Object(N.jsxs)(x.a,{style:{backgroundColor:$(t.serviceMasterCode,t.materialCode,se)?I.a.red[100]:"initial"},children:[Object(N.jsx)(g.a,{style:{padding:0,width:16,backgroundColor:$(t.serviceMasterCode,t.materialCode,se)?I.a.red[500]:I.a.teal[100]},onClick:function(){De(t.serviceMasterCode,t.materialCode)}}),Object(N.jsx)(g.a,{className:e.cell,align:"left",style:{paddingLeft:"32px",cursor:"pointer"},onClick:function(){!function(e){re({serviceMasterCode:e.serviceMasterCode,materialCode:e.materialCode,quantity:e.quantity.toString()}),M(!0),o(!0)}(t)},children:t.materialCode}),Object(N.jsx)(g.a,{className:e.cell,align:"left",style:{paddingLeft:"32px"},children:t.materialDescription}),Object(N.jsx)(g.a,{className:e.cell,align:"center",children:t.materialUnit}),Object(N.jsx)(g.a,{className:e.cell,align:"right",children:v.a.formatMoney(t.quantity,3)})]},n)})),Object(N.jsxs)(x.a,{children:[Object(N.jsx)(g.a,{style:{padding:0,width:16,backgroundColor:I.a.green[300]}}),Object(N.jsx)(g.a,{className:e.cell,colSpan:4,align:"left",style:{cursor:"pointer",fontStyle:"italic"},onClick:function(){return e=t.serviceMasterCode,re({serviceMasterCode:e,materialCode:"",quantity:"0"}),M(!1),void o(!0);var e},children:"+ Th\xeam \u0111\u1ecbnh m\u1ee9c m\u1edbi"})]})]},t.serviceMasterCode)}))})]})})]})]})}function te(){var e=Object(r.i)().path;return Object(N.jsxs)(r.c,{children:[Object(N.jsx)(r.a,{path:"".concat(e,"/resources"),component:ee}),Object(N.jsx)(r.a,{path:"".concat(e,"/commits"),component:W}),Object(N.jsx)(r.a,{path:"".concat(e,"/cbs-report"),component:q})]})}}}]);
//# sourceMappingURL=11.8d44f65c.chunk.js.map
(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[6],{477:function(e,t,n){"use strict";var a=n(1),c=n(31),r=n(4),i=n(0),o=(n(71),n(5),n(3)),s=n(6),l=n(70),d=n(10),u=n(30),p=Object(u.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),j=n(113);var m=Object(s.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(d.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=Object(r.a)(e,["classes"]);return i.createElement(j.a,Object(a.a)({component:"li",className:t.root,focusRipple:!0},n),i.createElement(p,{className:t.icon}))}));var b=i.forwardRef((function(e,t){var n=e.children,s=e.classes,d=e.className,u=e.component,p=void 0===u?"nav":u,j=e.expandText,b=void 0===j?"Show path":j,h=e.itemsAfterCollapse,f=void 0===h?1:h,g=e.itemsBeforeCollapse,x=void 0===g?1:g,O=e.maxItems,C=void 0===O?8:O,y=e.separator,v=void 0===y?"/":y,k=Object(r.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=i.useState(!1),N=w[0],D=w[1],E=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:s.li,key:"child-".concat(t)},e)}));return i.createElement(l.a,Object(a.a)({ref:t,component:p,color:"textSecondary",className:Object(o.a)(s.root,d)},k),i.createElement("ol",{className:s.ol},function(e,t,n){return e.reduce((function(a,c,r){return r<e.length-1?a=a.concat(c,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},n)):a.push(c),a}),[])}(N||C&&E.length<=C?E:function(e){return x+f>=e.length?e:[].concat(Object(c.a)(e.slice(0,x)),[i.createElement(m,{"aria-label":b,key:"ellipsis",onClick:function(e){D(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(c.a)(e.slice(e.length-f,e.length)))}(E),s.separator,v)))}));t.a=Object(s.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b)},538:function(e,t,n){"use strict";var a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=t,a=[{symbol:"dd",value:e.getDate()<10?"0".concat(e.getDate()):e.getDate()},{symbol:"MM",value:e.getMonth()+1<10?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1)},{symbol:"yyyy",value:e.getFullYear()},{symbol:"hh",value:e.getHours()<10?"0".concat(e.getHours()):e.getHours()},{symbol:"mm",value:e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes()}];return a.map((function(e){return n=n.replace(e.symbol,e.value),e.symbol})),n},formatMoney:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:t,minimumFractionDigits:t});return n.format(e)}};t.a=a},544:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return r}));var a={CREATE:1,UPDATE:2,DELETE:3},c={PACK:-1,POST:0},r={PLANNER:1,DESIGNER:2,ESTIMATOR:3,SUPERVISOR:4}},545:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(22),c=n.n(a),r=n(40),i=n(25),o=n(13),s=n(0),l=n.n(s),d=n(46),u=n(9),p=n.n(u),j="/api/project-system/projects";var m={getAll:function(){return p.a.get(j)},get:function(e){return p.a.get("".concat(j,"/").concat(e))}},b=n(2),h="PROJECT_CODE_KEY",f="PROJECT_NAME_KEY",g=function(e){return e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{label:"[".concat(e.code,"]-").concat(e.name)})}))};function x(e){var t=e.value,n=e.onChange,a=l.a.useState([]),o=Object(i.a)(a,2),s=o[0],u=o[1],p=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=u,e.next=4,m.getAll();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),u([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){var e=function(){var e=localStorage.getItem(h),t=localStorage.getItem(f);return null===e||null===t?null:{code:e,name:t,label:"[".concat(e,"]-").concat(t)}}();null!==e&&n({code:e.code,name:e.name}),p()}),[]),Object(b.jsx)(d.d,{required:!0,label:"D\u1ef1 \xe1n",options:g(s),optionLabel:"label",value:null!==t?{code:t.code,name:t.name,label:"[".concat(t.code,"]-").concat(t.name)}:null,getOptionSelected:function(e,t){return e.code===t.code},onChange:function(e){null!==e&&(n({code:e.code,name:e.name}),function(e){localStorage.setItem(h,e.code),localStorage.setItem(f,e.name)}(e))}})}},568:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p})),n.d(t,"d",(function(){return j}));var a=n(544),c=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,finish:e.post.finish,level:e.post.level,projectCode:e.post.projectCode,start:e.post.start,status:a.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,finish:e.pack.finish,level:e.pack.level,projectCode:e.pack.projectCode,start:e.pack.start,status:a.b.UPDATE}:{code:"",commitNumber:0,description:"",finish:new Date,level:1,projectCode:"",start:new Date,status:a.b.UPDATE}}))},r=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{code:e.post.code,commitNumber:0,description:e.post.description,projectCode:e.post.projectCode,note:e.post.note,filePath:e.post.filePath,status:a.b.DELETE}:null!==e.pack&&null===e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{code:e.pack.code,commitNumber:0,description:e.pack.description,projectCode:e.pack.projectCode,note:e.pack.note,filePath:e.pack.filePath,status:a.b.UPDATE}:{code:"",commitNumber:0,description:"",projectCode:"",note:"",filePath:"",status:a.b.UPDATE}}))},i=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{elementCode:e.post.elementCode,clusterCode:e.post.clusterCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:a.b.DELETE}:null!==e.pack&&null===e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{elementCode:e.pack.elementCode,clusterCode:e.pack.clusterCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.UPDATE}:{elementCode:"",clusterCode:"",quantity:1,commitNumber:0,projectCode:"",status:a.b.UPDATE}}))},o=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,clusterCode:e.post.clusterCode,billCode:e.post.billCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:a.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,billCode:e.pack.billCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,clusterCode:e.pack.clusterCode,billCode:e.pack.billCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.UPDATE}:{serviceMasterCode:"",clusterCode:"",billCode:"",quantity:1,commitNumber:0,projectCode:"",status:a.b.UPDATE}}))},s=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{serviceMasterCode:e.post.serviceMasterCode,materialCode:e.post.materialCode,quantity:e.post.quantity,commitNumber:0,projectCode:e.post.projectCode,status:a.b.DELETE}:null!==e.pack&&null===e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{serviceMasterCode:e.pack.serviceMasterCode,materialCode:e.pack.materialCode,quantity:e.pack.quantity,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.UPDATE}:{serviceMasterCode:"",materialCode:"",quantity:1,commitNumber:0,projectCode:"",status:a.b.UPDATE}}))},l=function(e){return e.map((function(e){return null===e.pack&&null!==e.post?{elementCode:e.post.elementCode,postingDate:e.post.postingDate,commitNumber:0,projectCode:e.post.projectCode,status:a.b.DELETE}:null!==e.pack&&null===e.post?{elementCode:e.pack.elementCode,postingDate:e.pack.postingDate,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.CREATE}:null!==e.pack&&null!==e.post?{elementCode:e.pack.elementCode,postingDate:e.pack.postingDate,commitNumber:0,projectCode:e.pack.projectCode,status:a.b.UPDATE}:{elementCode:"",postingDate:new Date,commitNumber:0,projectCode:"",status:a.b.UPDATE}}))},d=function(e){return{elements:c(e.elements)}},u=function(e){return{clusters:r(e.clusters),elementClusters:i(e.elementClusters),items:o(e.items)}},p=function(e){return{resources:s(e.resources)}},j=function(e){return{confirmations:l(e.confirmations)}}},569:function(e,t,n){"use strict";var a=n(9),c=n.n(a),r="/api/project-system/commits";var i={plannerTrackingChange:function(e){return c.a.get("".concat(r,"/planner-tracking-change?projectCode=").concat(e))},designerTrackingChange:function(e){return c.a.get("".concat(r,"/designer-tracking-change?projectCode=").concat(e))},estimatorTrackingChange:function(e){return c.a.get("".concat(r,"/estimator-tracking-change?projectCode=").concat(e))},supervisorTrackingChange:function(e){return c.a.get("".concat(r,"/supervisor-tracking-change?projectCode=").concat(e))},plannerCommit:function(e,t){return c.a.post("".concat(r,"/planner-commit?projectCode=").concat(e),t)},designerCommit:function(e,t){return c.a.post("".concat(r,"/designer-commit?projectCode=").concat(e),t)},estimatorCommit:function(e,t){return c.a.post("".concat(r,"/estimator-commit?projectCode=").concat(e),t)},supervisorCommit:function(e,t){return c.a.post("".concat(r,"/supervisor-commit?projectCode=").concat(e),t)}};t.a=i},575:function(e,t,n){"use strict";var a=n(9),c=n.n(a),r="/api/project-system/elements";var i={getAll:function(e,t){return c.a.get("".concat(r,"?projectCode=").concat(e,"&version=").concat(t))},getDetail:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return""===n?c.a.get("".concat(r,"/get-detail?projectCode=").concat(e,"&version=").concat(t)):c.a.get("".concat(r,"/get-detail?projectCode=").concat(e,"&version=").concat(t,"&elementCode=").concat(n))},getLeaf:function(e,t){return c.a.get("".concat(r,"/get-leaf?projectCode=").concat(e,"&version=").concat(t))},remove:function(e,t){return c.a.post("".concat(r,"/delete?projectCode=").concat(e),t)},addFromExcel:function(e,t){var n=new FormData;return n.append("files",t,t.name),c.a.post("".concat(r,"/addFromExcel?projectCode=").concat(e),n,{headers:{"Content-Type":"multipart/form-data"}})}};t.a=i},599:function(e,t,n){"use strict";var a=n(209),c=function(e){var t=parseInt(e.toString().substr(0,4));return parseInt(e.toString().substr(4,2))<12?e+1:100*(t+1)+1},r={getRbsViewReport:function(e){var t=e.map((function(e){return e.period})),n=Math.min.apply(Math,Object(a.a)(t)),r=Math.max.apply(Math,Object(a.a)(t)),i=[];return function(e){return Array.from(new Set(e.map((function(e){return e.elementCode})))).map((function(t){var n=e.find((function(e){return e.elementCode===t}));return{code:t,description:void 0!==n?n.elementDescription:"",unit:""}}))}(e).map((function(t){var a={item:t,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialGroup})))).map((function(t){var n=e.find((function(e){return e.materialGroup===t}));return{code:t,description:void 0!==n?n.materialGroupDescription:"",unit:""}}))}(e.filter((function(e){return e.elementCode===t.code}))).map((function(i){var o={item:i,data:[]};return function(e){return Array.from(new Set(e.map((function(e){return e.materialCode})))).map((function(t){var n=e.find((function(e){return e.materialCode===t}));return{code:t,description:void 0!==n?n.description:"",unit:void 0!==n?n.unit:""}}))}(e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===i.code}))).map((function(a){for(var s={item:a,total:0,data:[]},l=e.filter((function(e){return e.elementCode===t.code&&e.materialGroup===i.code&&e.materialCode===a.code})),d=n;d<=r;){var u=l.find((function(e){return e.period===d}));void 0!==u?s.data.push(u.quantity):s.data.push(0),d=c(d)}return o.data.push(s),!0})),a.data.push(o),!0})),i.push(a),!0})),i},addPeriod:c,getDays:function(e,t){return(t.getTime()-e.getTime())/1e3/86400+1}};t.a=r},629:function(e,t,n){"use strict";var a=n(9),c=n.n(a),r="/api/project-system/versions";var i={getAll:function(e,t){return c.a.get("".concat(r,"?projectCode=").concat(e,"&branch=").concat(t))},createPlannerVersion:function(e,t){return c.a.post("".concat(r,"/create-planner-version?projectCode=").concat(e),t)},createDesignerVersion:function(e,t){return c.a.post("".concat(r,"/create-designer-version?projectCode=").concat(e),t)}};t.a=i},889:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var a=n(0),c=n.n(a),r=n(27),i=n(209),o=n(22),s=n.n(o),l=n(40),d=n(25),u=n(47),p=n(533),j=n(380),m=n(70),b=n(112),h=n(477),f=n(417),g=n(418),x=n(414),O=n(415),C=n(416),y=n(419),v=n(39),k=n(46),w=n(18),N=n(538),D=n(599),E=n(545),A=n(544),M=n(575),S=n(2),T=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 144px)",overflowY:"scroll"},link:{fontSize:"0.75rem",textDecoration:"none",cursor:"pointer"},cell:{fontSize:"0.75rem"}}),L=function(e,t,n,a){return 368*D.a.getDays(n,a)/D.a.getDays(e,t)};function P(){var e=T(),t=Object(u.b)(),n=c.a.useState(null),a=Object(d.a)(n,2),r=a[0],o=a[1],p=c.a.useState(null),P=Object(d.a)(p,2),R=P[0],I=P[1],F=c.a.useState(null),q=Object(d.a)(F,2),U=q[0],B=q[1],_=c.a.useState([]),H=Object(d.a)(_,2),z=H[0],W=H[1],K=c.a.useState(!1),V=Object(d.a)(K,2),Y=V[0],G=V[1],J=c.a.useState([]),X=Object(d.a)(J,2),Q=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],ae=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne(!1),null===r){e.next=15;break}return t(w.loadingActions.show()),e.prev=3,e.next=6,M.a.remove(r.code,z);case 6:re(),W([]),t(w.alertActions.show(w.alertMessage.ACTION_SUCCESS,"success")),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t(w.alertActions.show(w.alertMessage.ACTION_FAILURE,"error")),t(w.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(l.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>=1&&null!==r)){e.next=17;break}return Z([]),t(w.loadingActions.show()),e.prev=3,e.t0=Z,e.next=7,M.a.addFromExcel(r.code,n[0]);case 7:e.t1=e.sent,(0,e.t0)(e.t1),re(),G(!0),e.next=17;break;case 13:e.prev=13,e.t2=e.catch(3),t(w.loadingActions.hide()),t(w.alertActions.show(w.alertMessage.ACTION_FAILURE,"error"));case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r){e.next=26;break}if(t(w.loadingActions.show()),e.prev=2,null!==R){e.next=11;break}return e.t0=B,e.next=7,M.a.getDetail(r.code,A.c.PACK);case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=16;break;case 11:return e.t2=B,e.next=14,M.a.getDetail(r.code,A.c.PACK,R);case 14:e.t3=e.sent,(0,e.t2)(e.t3);case 16:e.next=23;break;case 18:e.prev=18,e.t4=e.catch(2),B(null),I(null),t(w.alertActions.show(w.alertMessage.FETCH_FAILURE,"error"));case 23:t(w.loadingActions.hide()),e.next=28;break;case 26:B(null),I(null);case 28:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z.includes(t)?W(z.filter((function(e){return e!==t}))):W([].concat(Object(i.a)(z),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){re(),W([])}),[r,R]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.k,{open:te,onClose:function(){ne(!1)},onSubmit:function(){ae()},title:"X\xe1c nh\u1eadn x\xf3a c\xe1c WBS",children:Object(S.jsxs)(j.a,{container:!0,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{variant:"body2",children:"Vui l\xf2ng ki\u1ec3m tra k\u1ef9 c\xe1c WBS tr\u01b0\u1edbc khi x\xf3a!"})}),z.map((function(e){return Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(m.a,{variant:"subtitle2",children:e})},e)}))]})}),Object(S.jsx)(k.k,{open:Y,onClose:function(){G(!1)},title:"K\u1ebft qu\u1ea3 t\u1ea1o t\u1eeb file excel",children:Object(S.jsx)(j.a,{container:!0,spacing:1,children:Q.map((function(e,t){return Object(S.jsxs)(j.a,{item:!0,container:!0,spacing:1,xs:12,children:[Object(S.jsx)(j.a,{item:!0,xs:12,md:3,style:{color:e.isAdded?"green":"red"},children:Object(S.jsx)(m.a,{variant:"subtitle2",children:"".concat(e.item.code," - ").concat(e.item.description)})}),Object(S.jsx)(j.a,{item:!0,xs:12,md:9,style:{color:e.isAdded?"green":"red"},children:Object(S.jsx)(m.a,{variant:"caption",children:e.message})})]},t)}))})}),Object(S.jsxs)(b.a,{className:e.root,children:[Object(S.jsxs)(j.a,{container:!0,style:{padding:"8px",width:"100%"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(E.a,{value:r,onChange:function(e){o(e),I(null)}})}),null!==r&&Object(S.jsxs)(j.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.q,{filesLimit:1,title:"T\u1ea3i t\u1ec7p excel",acceptedFiles:[".xls",".xlsx"],onSubmit:ce,tooltip:"T\u1ea1o t\u1eeb file excel",variant:"contained",text:"Upload Excel",color:"primary"})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.i,{variant:"contained",label:"T\u1ea3i v\u1ec1",filename:"".concat(r.code,"_WBS.xlsx"),url:"/api/project-system/elements/get-excel?projectCode=".concat(r.code,"&version=").concat(A.c.PACK)})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:re})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"X\xf3a c\xe1c WBS \u0111\xe3 ch\u1ecdn",variant:"contained",text:"X\xf3a",color:"danger",icon:"trash-alt",disabled:z.length<=0,onClick:function(){ne(!0)}})})]})]}),null!==U&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{style:{paddingLeft:16,paddingRight:16},"aria-label":"breadcrumb",children:U.breadcrumbs.map((function(t){return Object(S.jsx)("a",{className:e.link,style:{fontWeight:R===t.code?"bold":"normal"},onClick:function(){I(t.code)},children:t.text},t.code)}))}),Object(S.jsx)(f.a,{className:e.container,children:Object(S.jsxs)(g.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(S.jsxs)(x.a,{children:[Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"M\xe3 WBS"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Di\u1ec5n gi\u1ea3i"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"B\u1eaft \u0111\u1ea7u"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"K\u1ebft th\xfac"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",style:{width:400}})]}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:U.code}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:U.description}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(U.start),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(U.finish),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",style:{width:400},children:Object(S.jsx)("div",{style:{backgroundColor:"blue",width:368,height:12}})})]})]}),Object(S.jsx)(y.a,{children:U.children.map((function(t){return Object(S.jsxs)(O.a,{style:{backgroundColor:z.includes(t.code)?v.a.red[100]:"initial"},children:[Object(S.jsx)(C.a,{style:{padding:0,width:16,backgroundColor:z.includes(t.code)?v.a.red[500]:v.a.teal[100]},onClick:function(){ie(t.code)}}),Object(S.jsx)(C.a,{align:"left",className:e.cell,style:{paddingLeft:32,cursor:t.isLeaf?"initial":"pointer"},onClick:function(){t.isLeaf||I(t.code)},children:t.code}),Object(S.jsx)(C.a,{className:e.cell,align:"left",style:{paddingLeft:32},children:t.description}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(t.start),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(t.finish),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{align:"right",style:{width:400,paddingLeft:16+(n=new Date(U.start),a=new Date(U.finish),c=new Date(t.start),368*(D.a.getDays(n,c)-1)/D.a.getDays(n,a))},children:Object(S.jsx)("div",{style:{backgroundColor:"green",width:L(new Date(U.start),new Date(U.finish),new Date(t.start),new Date(t.finish)),height:12}})})]},t.code);var n,a,c}))})]})})]})]})]})}var R=n(568),I=n(167),F=n(569),q=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 85px)",overflowY:"scroll"},cell:{fontSize:"0.75rem"}}),U=function(e){switch(e){case 1:return v.a.green[500];case 2:return v.a.amber[500];default:return v.a.red[500]}};function B(){var e=q(),t=Object(u.b)(),n=c.a.useState(null),a=Object(d.a)(n,2),r=a[0],i=a[1],o=c.a.useState({elements:[]}),p=Object(d.a)(o,2),m=p[0],h=p[1],v=c.a.useState(!1),D=Object(d.a)(v,2),M=D[0],T=D[1],L=c.a.useState(""),P=Object(d.a)(L,2),B=P[0],_=P[1],H=c.a.useState(!1),z=Object(d.a)(H,2),W=z[0],K=z[1],V=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T(!1),t(w.loadingActions.show()),e.prev=2,n={header:{branch:A.a.PLANNER,createdBy:"",createdByFullName:"",createdTime:new Date,description:B,number:0,projectCode:null!==r?r.code:""},detail:Object(R.c)(m)},null===r){e.next=7;break}return e.next=7,F.a.plannerCommit(r.code,n);case 7:t(w.alertActions.show(w.alertMessage.ACTION_SUCCESS,"success")),Y(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),t(w.alertActions.show(w.alertMessage.ACTION_FAILURE,"error")),t(w.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===r){e.next=17;break}return t(w.loadingActions.show()),e.prev=2,e.t0=h,e.next=6,F.a.plannerTrackingChange(r.code);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),h({elements:[]}),t(w.alertActions.show(w.alertMessage.FETCH_FAILURE,"error"));case 14:t(w.loadingActions.hide()),e.next=18;break;case 17:h({elements:[]});case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=K,e.next=4,I.a.checkRolePermission("APPROVER_PLANNER_ROLE");case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),K(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){Y(),G()}),[r]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.k,{title:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i l\xean server",open:M,onClose:function(){T(!1)},onSubmit:V,children:Object(S.jsx)(j.a,{container:!0,spacing:1,children:Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(k.p,{name:"commitDescription",label:"M\xf4 t\u1ea3 n\u1ed9i dung c\u1eadp nh\u1eadt",type:"text",required:!0,value:B,onChange:function(e){_(e.target.value)}})})})}),Object(S.jsxs)(b.a,{className:e.root,children:[Object(S.jsx)(j.a,{container:!0,children:Object(S.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(S.jsx)(j.a,{item:!0,xs:6,children:Object(S.jsx)(E.a,{value:r,onChange:function(e){i(e)}})}),null!==r&&W&&m.elements.length>0&&Object(S.jsx)(j.a,{container:!0,spacing:1,item:!0,xs:6,alignItems:"flex-end",children:Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"C\u1eadp nh\u1eadt thay \u0111\u1ed5i",variant:"contained",text:"Commit",icon:"long-arrow-alt-up",color:"danger",onClick:function(){_(""),T(!0)}})})})]})}),Object(S.jsx)(f.a,{className:e.container,children:Object(S.jsxs)(g.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(S.jsx)(x.a,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"WBS"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Di\u1ec5n gi\u1ea3i"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"Level"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"B\u1eaft \u0111\u1ea7u"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"K\u1ebft th\xfac"})]})}),Object(S.jsx)(y.a,{children:m.elements.map((function(t,n){return Object(S.jsxs)(O.a,{style:{backgroundColor:U(t.status)},children:[Object(S.jsx)(C.a,{className:e.cell,align:"left",children:Object(S.jsxs)(j.a,{container:!0,direction:"column",children:[Object(S.jsx)(j.a,{item:!0,children:null!==t.post?t.post.code:"-"}),Object(S.jsx)(j.a,{item:!0,children:null!==t.pack?t.pack.code:"-"})]})}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:Object(S.jsxs)(j.a,{container:!0,direction:"column",children:[Object(S.jsx)(j.a,{item:!0,children:null!==t.post?t.post.description:"-"}),Object(S.jsx)(j.a,{item:!0,children:null!==t.pack?t.pack.description:"-"})]})}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:Object(S.jsxs)(j.a,{container:!0,direction:"column",children:[Object(S.jsx)(j.a,{item:!0,children:null!==t.post?t.post.level:"-"}),Object(S.jsx)(j.a,{item:!0,children:null!==t.pack?t.pack.level:"-"})]})}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:Object(S.jsxs)(j.a,{container:!0,direction:"column",children:[Object(S.jsx)(j.a,{item:!0,children:null!==t.post?N.a.formatDate(new Date(t.post.start),"dd/MM/yyyy"):"-"}),Object(S.jsx)(j.a,{item:!0,children:null!==t.pack?N.a.formatDate(new Date(t.pack.start),"dd/MM/yyyy"):"-"})]})}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:Object(S.jsxs)(j.a,{container:!0,direction:"column",children:[Object(S.jsx)(j.a,{item:!0,children:null!==t.post?N.a.formatDate(new Date(t.post.finish),"dd/MM/yyyy"):"-"}),Object(S.jsx)(j.a,{item:!0,children:null!==t.pack?N.a.formatDate(new Date(t.pack.finish),"dd/MM/yyyy"):"-"})]})})]},n)}))})]})})]})]})}var _=n(629),H=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 120px)",overflowY:"scroll"},cell:{fontSize:"0.75rem"}});function z(){var e=H(),t=Object(u.b)(),n=c.a.useState(!1),a=Object(d.a)(n,2),r=a[0],i=a[1],o=c.a.useState(null),p=Object(d.a)(o,2),m=p[0],h=p[1],D=c.a.useState([]),M=Object(d.a)(D,2),T=M[0],L=M[1],P=c.a.useState(""),R=Object(d.a)(P,2),I=R[0],F=R[1],q=function(){var e=Object(l.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!1),null===m){e.next=15;break}return t(w.loadingActions.show()),e.prev=3,n={number:0,branch:A.a.PLANNER,createdBy:"",createdByFullName:"",createdDate:new Date,description:I,projectCode:m.code},e.next=7,_.a.createPlannerVersion(m.code,n);case 7:t(w.alertActions.show(w.alertMessage.ACTION_SUCCESS,"success")),U(),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t(w.alertActions.show(w.alertMessage.ACTION_FAILURE,"error")),t(w.loadingActions.hide());case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(w.loadingActions.show()),null===m){e.next=16;break}return e.prev=2,e.t0=L,e.next=6,_.a.getAll(m.code,A.a.PLANNER);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=14;break;case 10:e.prev=10,e.t2=e.catch(2),L([]),t(w.alertActions.show(w.alertMessage.FETCH_FAILURE,"error"));case 14:e.next=17;break;case 16:L([]);case 17:t(w.loadingActions.hide());case 18:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){U()}),[m]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(k.k,{title:"T\u1ea1o phi\xean b\u1ea3n",open:r,onClose:function(){i(!1)},onSubmit:q,children:Object(S.jsx)(j.a,{container:!0,spacing:1,children:Object(S.jsx)(j.a,{item:!0,xs:12,children:Object(S.jsx)(k.p,{name:"description",label:"Di\u1ec5n gi\u1ea3i",type:"text",required:!0,value:I,onChange:function(e){F(e.target.value)}})})})}),Object(S.jsxs)(b.a,{className:e.root,children:[Object(S.jsx)(j.a,{container:!0,children:Object(S.jsxs)(j.a,{container:!0,item:!0,xs:12,style:{padding:"8px"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(S.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(S.jsx)(E.a,{value:m,onChange:function(e){h(e)}})}),null!==m&&Object(S.jsxs)(j.a,{container:!0,spacing:1,item:!0,xs:12,alignItems:"flex-end",children:[Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"Th\xeam m\u1edbi",variant:"contained",text:"Th\xeam",icon:"plus",color:"primary",onClick:function(){F(""),i(!0)}})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:U})})]})]})}),Object(S.jsx)(f.a,{className:e.container,children:Object(S.jsxs)(g.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(S.jsx)(x.a,{children:Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"S\u1ed1 phi\xean b\u1ea3n"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Di\u1ec5n gi\u1ea3i"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Ng\u01b0\u1eddi t\u1ea1o"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Th\u1eddi gian"}),Object(S.jsx)(C.a,{className:e.cell,align:"left"})]})}),Object(S.jsx)(y.a,{children:T.map((function(t){return Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16,backgroundColor:v.a.teal[100]}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:t.number}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:t.description}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"".concat(t.createdBy,"-").concat(t.createdByFullName)}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:N.a.formatDate(new Date(t.createdDate),"dd-MM-yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:null!==m&&Object(S.jsx)("a",{href:"/project-system/planner/version-data/elements/".concat(m.code,"/").concat(t.number),style:{textDecoration:"none"},target:"_blank",rel:"noreferrer",children:Object(S.jsx)(k.n,{text:"WBS",color:"primary",icon:"sitemap"})})})]},t.number)}))})]})})]})]})}var W=Object(p.a)({root:{width:"100%",height:"100%"},container:{maxHeight:"calc(100% - 144px)",overflowY:"scroll"},link:{fontSize:"0.75rem",textDecoration:"none",cursor:"pointer"},cell:{fontSize:"0.75rem"}}),K=function(e,t,n,a){return 368*D.a.getDays(n,a)/D.a.getDays(e,t)};function V(){var e=W(),t=Object(r.h)(),n=t.projectCode,a=t.versionNumber,i=Object(u.b)(),o=c.a.useState(null),p=Object(d.a)(o,2),E=p[0],A=p[1],T=c.a.useState(null),L=Object(d.a)(T,2),P=L[0],R=L[1],I=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(w.loadingActions.show()),e.prev=1,null!==E){e.next=10;break}return e.t0=R,e.next=6,M.a.getDetail(n,a);case 6:e.t1=e.sent,(0,e.t0)(e.t1),e.next=15;break;case 10:return e.t2=R,e.next=13,M.a.getDetail(n,a,E);case 13:e.t3=e.sent,(0,e.t2)(e.t3);case 15:e.next=22;break;case 17:e.prev=17,e.t4=e.catch(1),R(null),A(null),i(w.alertActions.show(w.alertMessage.FETCH_FAILURE,"error"));case 22:i(w.loadingActions.hide());case 23:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){I()}),[E,n,a]),Object(S.jsxs)(b.a,{className:e.root,children:[Object(S.jsxs)(j.a,{container:!0,style:{padding:"8px",width:"100%"},direction:"row",spacing:1,alignItems:"flex-end",children:[Object(S.jsx)(j.a,{item:!0,xs:6,children:Object(S.jsx)(m.a,{variant:"h6",children:"D\u1ef1 \xe1n: ".concat(n)})}),Object(S.jsx)(j.a,{item:!0,xs:6,children:Object(S.jsx)(m.a,{variant:"h6",children:"Phi\xean b\u1ea3n: ".concat(a)})}),Object(S.jsxs)(j.a,{container:!0,item:!0,xs:12,spacing:1,children:[Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.i,{variant:"contained",label:"T\u1ea3i v\u1ec1",filename:"".concat(n,"_WBS_v").concat(a,".xlsx"),url:"/api/project-system/elements/get-excel?projectCode=".concat(n,"&version=").concat(a)})}),Object(S.jsx)(j.a,{item:!0,children:Object(S.jsx)(k.n,{tooltip:"L\xe0m m\u1edbi",variant:"contained",text:"L\xe0m m\u1edbi",color:"success",icon:"sync-alt",onClick:I})})]})]}),null!==P&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(h.a,{style:{paddingLeft:16,paddingRight:16},"aria-label":"breadcrumb",children:P.breadcrumbs.map((function(t){return Object(S.jsx)("a",{className:e.link,style:{fontWeight:E===t.code?"bold":"normal"},onClick:function(){A(t.code)},children:t.text},t.code)}))}),Object(S.jsx)(f.a,{className:e.container,children:Object(S.jsxs)(g.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small",children:[Object(S.jsxs)(x.a,{children:[Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"M\xe3 WBS"}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:"Di\u1ec5n gi\u1ea3i"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"B\u1eaft \u0111\u1ea7u"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:"K\u1ebft th\xfac"}),Object(S.jsx)(C.a,{className:e.cell,align:"right",style:{width:400}})]}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16}}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:P.code}),Object(S.jsx)(C.a,{className:e.cell,align:"left",children:P.description}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(P.start),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(P.finish),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",style:{width:400},children:Object(S.jsx)("div",{style:{backgroundColor:"blue",width:368,height:12}})})]})]}),Object(S.jsx)(y.a,{children:P.children.map((function(t){return Object(S.jsxs)(O.a,{children:[Object(S.jsx)(C.a,{style:{padding:0,width:16,backgroundColor:v.a.teal[100]}}),Object(S.jsx)(C.a,{align:"left",className:e.cell,style:{paddingLeft:32,cursor:t.isLeaf?"initial":"pointer"},onClick:function(){t.isLeaf||A(t.code)},children:t.code}),Object(S.jsx)(C.a,{className:e.cell,align:"left",style:{paddingLeft:32},children:t.description}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(t.start),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{className:e.cell,align:"right",children:N.a.formatDate(new Date(t.finish),"dd/MM/yyyy")}),Object(S.jsx)(C.a,{align:"right",style:{width:400,paddingLeft:16+(n=new Date(P.start),a=new Date(P.finish),c=new Date(t.start),368*(D.a.getDays(n,c)-1)/D.a.getDays(n,a))},children:Object(S.jsx)("div",{style:{backgroundColor:"green",width:K(new Date(P.start),new Date(P.finish),new Date(t.start),new Date(t.finish)),height:12}})})]},t.code);var n,a,c}))})]})})]})]})}function Y(){var e=Object(r.i)().path;return Object(S.jsxs)(r.c,{children:[Object(S.jsx)(r.a,{path:"".concat(e,"/elements"),component:P}),Object(S.jsx)(r.a,{path:"".concat(e,"/commits"),component:B}),Object(S.jsx)(r.a,{path:"".concat(e,"/versions"),component:z}),Object(S.jsx)(r.a,{path:"".concat(e,"/version-data/elements/:projectCode/:versionNumber"),component:V})]})}}}]);
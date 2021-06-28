(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[15],{537:function(t,e,n){"use strict";var a={formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",n=e,a=[{symbol:"dd",value:t.getDate()<10?"0".concat(t.getDate()):t.getDate()},{symbol:"MM",value:t.getMonth()+1<10?"0".concat(t.getMonth()+1):"".concat(t.getMonth()+1)},{symbol:"yyyy",value:t.getFullYear()},{symbol:"hh",value:t.getHours()<10?"0".concat(t.getHours()):t.getHours()},{symbol:"mm",value:t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes()}];return a.map((function(t){return n=n.replace(t.symbol,t.value),t.symbol})),n},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:e});return n.format(t)}};e.a=a},875:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return C}));var a=n(208),c=n(25),i=n(0),r=n.n(i),o=n(27),s=n(47),l=n(18),u=n(109),d=n(23),h=n.n(d),f=n(40),j=n(15),b=n(532),g=n(91),m=n(96),v=n(302),p=n(380),x=n(70),O=n(26),y=n(46),D=n(537),w=n(9),M=n.n(w);var N={get:function(t,e){return M.a.get("".concat("/api/timekeeper/timeLogs","/").concat(t,"/").concat(e))}},T=n(2),k=Object(b.a)((function(t){return{cell:Object(j.a)({padding:t.spacing(1),height:t.spacing(8),width:"calc(100%/7)"},t.breakpoints.down("sm"),{padding:t.spacing(.5)}),head:{padding:t.spacing(1),width:"calc(100%/7)",textAlign:"center",fontWeight:"bold"},cellContent:{display:"flex",flexDirection:"column"}}}));function A(){var t=k(),e=r.a.useState([]),n=Object(c.a)(e,2),a=n[0],i=n[1],o=Object(s.b)(),u=r.a.useState((new Date).getMonth()+1),d=Object(c.a)(u,2),j=d[0],b=d[1],w=r.a.useState((new Date).getFullYear()),M=Object(c.a)(w,2),A=M[0],F=M[1],S=function(){var t=Object(f.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(l.loadingActions.show()),t.prev=1,t.t0=i,t.next=5,N.get(j,A);case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=12;break;case 9:t.prev=9,t.t2=t.catch(1),o(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,o(l.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}(),C=function(t,e){var n=new Date(t);return n.setDate(n.getDate()+e),n},E=function(t,e){return t.getFullYear()===e.getFullYear()&&(t.getMonth()===e.getMonth()&&t.getDate()===e.getDate())},I=function(t){var e=a.find((function(e){return E(new Date(e.date),t)}));return void 0===e?"":e.hasTimeIn?D.a.formatDate(new Date(e.timeIn),"hh:mm"):""},z=function(t){var e=a.find((function(e){return E(new Date(e.date),t)}));return void 0===e?"":e.hasTimeOut?D.a.formatDate(new Date(e.timeOut),"hh:mm"):""};return r.a.useEffect((function(){S()}),[j,A]),Object(T.jsx)(y.l,{title:"Time Event",noPadding:!0,children:Object(T.jsxs)(p.a,{style:{width:"100%"},container:!0,children:[Object(T.jsxs)(p.a,{item:!0,xs:12,style:{padding:"16px",display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(T.jsx)(y.n,{icon:"chevron-left",onClick:function(){1===j?(b(12),F(A-1)):b(j-1)}}),Object(T.jsx)(x.a,{variant:"subtitle2",children:"".concat(j,"/").concat(A)}),Object(T.jsx)(y.n,{icon:"chevron-right",onClick:function(){12===j?(b(1),F(A+1)):b(j+1)}})]}),Object(T.jsxs)(p.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"row"},children:[Object(T.jsx)("div",{className:t.head,children:"CN"}),Object(T.jsx)("div",{className:t.head,children:"T2"}),Object(T.jsx)("div",{className:t.head,children:"T3"}),Object(T.jsx)("div",{className:t.head,children:"T4"}),Object(T.jsx)("div",{className:t.head,children:"T5"}),Object(T.jsx)("div",{className:t.head,children:"T6"}),Object(T.jsx)("div",{className:t.head,children:"T7"})]}),function(){for(var t=[],e=function(){var t=new Date(A,j-1,1),e=t.getDay();return t.setDate(t.getDate()-e),t}(),n=function(){var t=new Date(A,j,0),e=t.getDay();return t.setDate(t.getDate()-e+6),t}(),a=[],c=e;c<=n;c=C(c,1))0===c.getDay()?(a=[]).push(c):6===c.getDay()?(a.push(c),t.push(a)):a.push(c);return t}().map((function(e,n){return Object(T.jsx)(p.a,{item:!0,xs:12,style:{display:"flex",flexDirection:"row"},children:e.map((function(e,n){return Object(T.jsx)("div",{style:{backgroundColor:e.getMonth()===j-1?"inherit":g.a[100]},className:t.cell,children:e.getMonth()===j-1&&Object(T.jsxs)("div",{className:t.cellContent,children:[Object(T.jsx)(x.a,{style:{width:"100%"},variant:"subtitle2",align:"center",children:D.a.formatDate(e,"dd")}),Object(T.jsxs)(x.a,{style:{fontSize:"0.65rem",color:m.a[800],fontWeight:"bold"},variant:"caption",align:"left",children:[Object(T.jsx)(O.a,{style:{fontSize:"0.5rem"},icon:"chevron-right"})," ".concat(I(e))]}),Object(T.jsxs)(x.a,{style:{fontSize:"0.65rem",color:v.a[800],fontWeight:"bold"},variant:"caption",align:"left",children:[Object(T.jsx)(O.a,{style:{fontSize:"0.5rem"},icon:"chevron-left"})," ".concat(z(e))]})]})},n)}))},n)}))]})})}function F(){var t=Object(o.i)().path;return Object(T.jsx)(o.c,{children:Object(T.jsx)(o.a,{path:"".concat(t,"/dashboard"),component:A})})}var S=r.a.lazy((function(){return n.e(20).then(n.bind(null,876))}));function C(){var t=Object(o.i)().path,e=Object(s.b)(),n=r.a.useState(!1),i=Object(c.a)(n,2),d=i[0],h=i[1];return r.a.useEffect((function(){e(l.layoutActions.setActivePluginId(u.e.id)),Object(u.b)().then((function(t){h(t)})).catch((function(){h(!1)}))}),[]),r.a.useEffect((function(){var t=d?Object(a.a)(u.a):[];e(l.layoutActions.setMenuList([].concat(Object(a.a)(u.d),Object(a.a)(t))))}),[d]),Object(T.jsxs)(o.c,{children:[d&&Object(T.jsx)(o.a,{path:"".concat(t,"/admin"),component:S}),Object(T.jsx)(o.a,{path:"".concat(t),component:F})]})}}}]);
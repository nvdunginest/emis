(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[10],{503:function(t,e,n){"use strict";var c=n(10),r=n.n(c),a="/api/library/posts";var i={getAll:function(){return r.a.get(a)},getById:function(t){return r.a.get("".concat(a,"/").concat(t))},create:function(t){return r.a.post(a,t)},edit:function(t,e){return r.a.put("".concat(a,"/").concat(t),e)},remove:function(t){return r.a.delete("".concat(a,"/").concat(t))},changeOrder:function(t,e){return r.a.put("".concat(a,"/changeOrder/").concat(t,"/").concat(e))}};e.a=i},509:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return O}));var c=n(1),r=n(15),a=n(0),i=n.n(a),o=n(115),s="GET_CONTRACT_DETAIL_SUCCESS",u="GET_CONTRACT_DETAIL_FAILURE",l={posts:[]},d={state:l,refresh:function(){}};function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return{posts:e.payload.posts};case u:return l;default:return t}}var b=n(28),p=n.n(b),f=n(42),h=n(503),x={refresh:function(){var t=Object(f.a)(p.a.mark((function t(e,n){var c,r,a,i,l,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return{type:u}},i=function(t){return{type:s,payload:{posts:t}}},c=n.showBackdrop,r=n.showAlert,a=n.hideBackdrop,c(),t.prev=4,t.next=7,h.a.getAll();case 7:d=t.sent,e(i(d)),a(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),e(l()),a(),r(o.b.FETCH_FAILURE,"error");case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,n){return t.apply(this,arguments)}}()},O=Object(a.createContext)(d);function v(t){var e=t.children,n=i.a.useReducer(j,l),s=Object(r.a)(n,2),u=s[0],d=s[1],b=Object(a.useContext)(o.a),p={state:u,refresh:function(){x.refresh(d,b)}};return Object(c.jsx)(O.Provider,{value:p,children:e})}},722:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return J}));var c=n(1),r=n(150),a=n(15),i=n(0),o=n.n(i),s=n(29),u=n(58),l=n(97),d=n(509),j=n(51),b=n(705),p=n(36),f=n(16),h=n(704);function x(t,e){return t.order===e.order?0:t.order>e.order?1:-1}var O=Object(j.a)((function(t){return{root:{width:"100%",color:"#8c8888"},group:{marginLeft:"8px"},label:Object(f.a)({fontSize:"0.85rem",fontWeight:500,whiteSpace:"normal"},t.breakpoints.down("xs"),{paddingRight:"16px"}),iconContainer:{width:"30px",marginRight:0,color:"#8c8888"},content:{alignItems:"stretch"},selected:{color:"#171717"}}}));function v(t){var e=t.id,n=t.label,r=t.data,a=O(),i=Object(s.g)();return Object(c.jsx)(h.a,{classes:{root:a.root,group:a.group,label:a.label,iconContainer:a.iconContainer,content:a.content,selected:a.selected},nodeId:e,label:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{icon:"file-alt"})," ".concat(n)]}),onLabelClick:function(t){t.preventDefault(),i.push("/library/posts/".concat(e))},children:r.filter((function(t){return t.parentId===e})).sort(x).map((function(t){return Object(c.jsx)(v,{id:t.id,data:r,label:t.label},t.id)}))})}var m=Object(j.a)({root:{padding:"8px",flexGrow:1,width:"100%"}});function g(t){var e=t.data,n=m();return Object(c.jsx)(b.a,{className:n.root,defaultCollapseIcon:Object(c.jsx)(p.a,{icon:"caret-down"}),defaultExpandIcon:Object(c.jsx)(p.a,{icon:"caret-right"}),children:e.filter((function(t){return"0"===t.parentId})).sort(x).map((function(t){return Object(c.jsx)(v,{id:t.id,data:e,label:t.label},t.id)}))})}var C=n(41),w=n(449),I=n(403),k=n(50),y=n(21);function T(){var t=o.a.useState(""),e=Object(a.a)(t,2),n=e[0],r=e[1],i=o.a.useContext(d.a).state.posts;return Object(c.jsxs)(w.a,{container:!0,spacing:1,children:[Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(y.r,{label:"T\xecm ki\u1ebfm",value:n,onChange:function(t){r(t.target.value)}})}),Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(I.a,{})}),i.filter((function(t){return t.title.includes(n)})).map((function(t){return Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(w.a,{container:!0,spacing:4,children:Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(C.a,{to:"/library/posts/".concat(t.id),children:Object(c.jsx)(k.a,{variant:"h6",children:t.title})})})})},t.id)}))]})}var E=n(28),A=n.n(E),S=n(42),L=n(19),_=n(115),B=n(503),F={id:0,changedBy:"",changedTime:new Date,content:"",createdBy:"",createdTime:new Date,title:"",parentId:0,order:0};function R(){var t=Object(s.i)().postId,e=o.a.useContext(_.a),n=e.showAlert,r=e.showBackdrop,i=e.hideBackdrop,u=o.a.useContext(d.a),l=u.state,j=u.refresh,b=o.a.useState(F),p=Object(a.a)(b,2),f=p[0],h=p[1],x=function(){var e=Object(S.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(),e.prev=1,e.t0=h,e.next=5,B.a.getById(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),i(),e.next=15;break;case 10:e.prev=10,e.t2=e.catch(1),h(F),i(),n(_.b.FETCH_FAILURE,"error");case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(),t.prev=1,t.next=4,B.a.edit(f.id,f);case 4:i(),n(_.b.ACTION_SUCCESS,"success"),j(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i(),n(_.b.ACTION_FAILURE,"error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.prompt("Nh\u1eadp ti\xeau \u0111\u1ec1 b\xe0i vi\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn x\xf3a!")!==f.title){t.next=15;break}return r(),t.prev=3,t.next=6,B.a.remove(f.id);case 6:i(),n(_.b.ACTION_SUCCESS,"success"),j(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),i(),n(_.b.ACTION_FAILURE,"error");case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(S.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(),t.prev=1,t.next=4,B.a.changeOrder(f.id,e);case 4:i(),n(_.b.ACTION_SUCCESS,"success"),j(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),i(),n(_.b.ACTION_FAILURE,"error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return o.a.useEffect((function(){x()}),[t]),Object(c.jsxs)(w.a,{container:!0,spacing:1,children:[Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(y.r,{label:"Ti\xeau \u0111\u1ec1",required:!0,value:f.title,onChange:function(t){h(Object(L.a)(Object(L.a)({},f),{},{title:t.target.value}))}})}),Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(y.e,{options:l.posts.filter((function(t){return t.id!==f.id})),optionLabel:"title",label:"Thu\u1ed9c v\u1ec1",required:!0,value:l.posts.find((function(t){return t.id===f.parentId})),onChange:function(t){null!==t&&h(Object(L.a)(Object(L.a)({},f),{},{parentId:t.id}))}})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(y.o,{variant:"contained",text:"L\xean \u0111\u1ea7u",color:"primary",icon:"angle-double-up",onClick:function(){m(1)}})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(y.o,{variant:"contained",text:"L\xean tr\xean",color:"primary",icon:"angle-up",onClick:function(){m(2)}})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(y.o,{variant:"contained",text:"Xu\u1ed1ng d\u01b0\u1edbi",color:"primary",icon:"angle-down",onClick:function(){m(3)}})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(y.o,{variant:"contained",text:"Xu\u1ed1ng cu\u1ed1i",color:"primary",icon:"angle-double-down",onClick:function(){m(4)}})}),Object(c.jsx)(w.a,{item:!0,children:Object(c.jsx)(y.o,{variant:"contained",text:"X\xf3a b\xe0i vi\u1ebft",color:"danger",icon:"trash-alt",onClick:function(){v()}})}),Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(y.p,{label:"N\u1ed9i dung",required:!0,value:f.content,onChange:function(t){h(Object(L.a)(Object(L.a)({},f),{},{content:t}))}})}),Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)(y.o,{variant:"contained",text:"L\u01b0u l\u1ea1i",color:"success",icon:"plus",onClick:O})})]})}var N=n(214),U={id:0,changedBy:"",changedTime:new Date,content:"",createdBy:"",createdTime:new Date,title:"",parentId:0,order:0};function D(){var t=o.a.useContext(_.a),e=t.showAlert,n=t.showBackdrop,r=t.hideBackdrop,i=Object(s.i)().postId,u=o.a.useState(U),l=Object(a.a)(u,2),d=l[0],j=l[1],b=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(),t.prev=1,t.t0=j,t.next=5,B.a.getById(i);case 5:t.t1=t.sent,(0,t.t0)(t.t1),r(),t.next=15;break;case 10:t.prev=10,t.t2=t.catch(1),j(U),r(),e(_.b.FETCH_FAILURE,"error");case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return o.a.useEffect((function(){b()}),[i]),Object(c.jsxs)(w.a,{container:!0,spacing:1,children:[Object(c.jsxs)(w.a,{item:!0,xs:12,children:[Object(c.jsx)(k.a,{variant:"h4",children:d.title}),Object(c.jsx)(I.a,{})]}),Object(c.jsx)(w.a,{item:!0,xs:12,children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:Object(N.a)(d.content)}})})]})}function H(){var t=o.a.useState(!1),e=Object(a.a)(t,2),n=e[0],r=e[1],i=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,Object(l.c)();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o.a.useEffect((function(){i()}),[]),n?Object(c.jsx)(R,{}):Object(c.jsx)(D,{})}function q(){var t=Object(s.j)().path;return Object(c.jsxs)(s.d,{children:[Object(c.jsx)(s.b,{path:"".concat(t,"/dashboard"),component:T}),Object(c.jsx)(s.b,{path:"".concat(t,"/posts/:postId"),component:H})]})}var z=o.a.lazy((function(){return n.e(15).then(n.bind(null,717))})),G=o.a.lazy((function(){return n.e(11).then(n.bind(null,735))}));function X(){var t=Object(s.j)().path,e=o.a.useContext(u.a),n=e.changeSideMenuList,i=e.changeActivePluginId,j=o.a.useState(!1),b=Object(a.a)(j,2),p=b[0],f=b[1],h=o.a.useState(!1),x=Object(a.a)(h,2),O=x[0],v=x[1],m=o.a.useContext(d.a),C=m.state,w=m.refresh;return o.a.useEffect((function(){i(l.g.id),Object(l.b)().then((function(t){f(t)})).catch((function(){f(!1)})),Object(l.c)().then((function(t){v(t)})).catch((function(){v(!1)})),w()}),[]),o.a.useEffect((function(){var t=p?Object(r.a)(l.a):[],e=O?Object(r.a)(l.e):[];n([].concat(Object(r.a)(l.f),[Object(c.jsx)(g,{data:C.posts.map((function(t){return{id:t.id.toFixed(0),label:t.title,parentId:t.parentId.toFixed(0),order:t.order}}))},"2")],Object(r.a)(e),Object(r.a)(t)))}),[p,C]),Object(c.jsxs)(s.d,{children:[O&&Object(c.jsx)(s.b,{path:"".concat(t,"/creator"),component:z}),p&&Object(c.jsx)(s.b,{path:"".concat(t,"/admin"),component:G}),Object(c.jsx)(s.b,{path:"".concat(t),component:q})]})}function J(){return Object(c.jsx)(d.b,{children:Object(c.jsx)(X,{})})}}}]);
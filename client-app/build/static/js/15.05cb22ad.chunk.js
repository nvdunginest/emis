(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[15],{1091:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return J}));var c=n(168),r=n(14),a=n(0),i=n.n(a),o=n(30),s=n(60),u=n(102),d=n(576),l=n(57),j=n(1073),b=n(36),p=n(17),f=n(1072);function h(t,e){return t.order===e.order?0:t.order>e.order?1:-1}var x=n(1),O=Object(l.a)((function(t){return{root:{width:"100%",color:"#8c8888"},group:{marginLeft:"8px"},label:Object(p.a)({fontSize:"0.85rem",fontWeight:500,whiteSpace:"normal"},t.breakpoints.down("xs"),{paddingRight:"16px"}),iconContainer:{width:"30px",marginRight:0,color:"#8c8888"},content:{alignItems:"stretch"},selected:{color:"#171717"}}}));function v(t){var e=t.id,n=t.label,c=t.data,r=O(),a=Object(o.g)();return Object(x.jsx)(f.a,{classes:{root:r.root,group:r.group,label:r.label,iconContainer:r.iconContainer,content:r.content,selected:r.selected},nodeId:e,label:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b.a,{icon:"file-alt"})," ".concat(n)]}),onLabelClick:function(t){t.preventDefault(),a.push("/library/posts/".concat(e))},children:c.filter((function(t){return t.parentId===e})).sort(h).map((function(t){return Object(x.jsx)(v,{id:t.id,data:c,label:t.label},t.id)}))})}var m=Object(l.a)({root:{padding:"8px",flexGrow:1,width:"100%"}});function g(t){var e=t.data,n=m();return Object(x.jsx)(j.a,{className:n.root,defaultCollapseIcon:Object(x.jsx)(b.a,{icon:"caret-down"}),defaultExpandIcon:Object(x.jsx)(b.a,{icon:"caret-right"}),children:e.filter((function(t){return"0"===t.parentId})).sort(h).map((function(t){return Object(x.jsx)(v,{id:t.id,data:e,label:t.label},t.id)}))})}var C=n(44),w=n(483),I=n(440),k=n(56),y=n(22);function T(){var t=i.a.useState(""),e=Object(r.a)(t,2),n=e[0],c=e[1],a=i.a.useContext(d.a).state.posts;return Object(x.jsxs)(w.a,{container:!0,spacing:1,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(y.r,{label:"T\xecm ki\u1ebfm",value:n,onChange:function(t){c(t.target.value)}})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(I.a,{})}),a.filter((function(t){return t.title.includes(n)})).map((function(t){return Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(w.a,{container:!0,spacing:4,children:Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(C.a,{to:"/library/posts/".concat(t.id),children:Object(x.jsx)(k.a,{variant:"h6",children:t.title})})})})},t.id)}))]})}var E=n(29),A=n.n(E),S=n(45),L=n(20),_=n(126),B=n(566),F={id:0,changedBy:"",changedTime:new Date,content:"",createdBy:"",createdTime:new Date,title:"",parentId:0,order:0};function R(){var t=Object(o.i)().postId,e=i.a.useContext(_.a),n=e.showAlert,c=e.showBackdrop,a=e.hideBackdrop,s=i.a.useContext(d.a),u=s.state,l=s.refresh,j=i.a.useState(F),b=Object(r.a)(j,2),p=b[0],f=b[1],h=function(){var e=Object(S.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(),e.prev=1,e.t0=f,e.next=5,B.a.getById(t);case 5:e.t1=e.sent,(0,e.t0)(e.t1),a(),e.next=15;break;case 10:e.prev=10,e.t2=e.catch(1),f(F),a(),n(_.b.FETCH_FAILURE,"error");case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(),t.prev=1,t.next=4,B.a.edit(p.id,p);case 4:a(),n(_.b.ACTION_SUCCESS,"success"),l(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a(),n(_.b.ACTION_FAILURE,"error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.prompt("Nh\u1eadp ti\xeau \u0111\u1ec1 b\xe0i vi\u1ebft \u0111\u1ec3 x\xe1c nh\u1eadn x\xf3a!")!==p.title){t.next=15;break}return c(),t.prev=3,t.next=6,B.a.remove(p.id);case 6:a(),n(_.b.ACTION_SUCCESS,"success"),l(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),a(),n(_.b.ACTION_FAILURE,"error");case 15:case"end":return t.stop()}}),t,null,[[3,11]])})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(S.a)(A.a.mark((function t(e){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(),t.prev=1,t.next=4,B.a.changeOrder(p.id,e);case 4:a(),n(_.b.ACTION_SUCCESS,"success"),l(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a(),n(_.b.ACTION_FAILURE,"error");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return i.a.useEffect((function(){h()}),[t]),Object(x.jsxs)(w.a,{container:!0,spacing:1,children:[Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(y.r,{label:"Ti\xeau \u0111\u1ec1",required:!0,value:p.title,onChange:function(t){f(Object(L.a)(Object(L.a)({},p),{},{title:t.target.value}))}})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(y.e,{options:u.posts.filter((function(t){return t.id!==p.id})),optionLabel:"title",label:"Thu\u1ed9c v\u1ec1",required:!0,getOptionSelected:function(t,e){return t.id===e.id},value:u.posts.find((function(t){return t.id===p.parentId})),onChange:function(t){null!==t&&f(Object(L.a)(Object(L.a)({},p),{},{parentId:t.id}))}})}),Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(y.o,{variant:"contained",text:"L\xean \u0111\u1ea7u",color:"primary",icon:"angle-double-up",onClick:function(){m(1)}})}),Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(y.o,{variant:"contained",text:"L\xean tr\xean",color:"primary",icon:"angle-up",onClick:function(){m(2)}})}),Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(y.o,{variant:"contained",text:"Xu\u1ed1ng d\u01b0\u1edbi",color:"primary",icon:"angle-down",onClick:function(){m(3)}})}),Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(y.o,{variant:"contained",text:"Xu\u1ed1ng cu\u1ed1i",color:"primary",icon:"angle-double-down",onClick:function(){m(4)}})}),Object(x.jsx)(w.a,{item:!0,children:Object(x.jsx)(y.o,{variant:"contained",text:"X\xf3a b\xe0i vi\u1ebft",color:"danger",icon:"trash-alt",onClick:function(){v()}})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(y.p,{label:"N\u1ed9i dung",required:!0,value:p.content,onChange:function(t){f(Object(L.a)(Object(L.a)({},p),{},{content:t}))}})}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)(y.o,{variant:"contained",text:"L\u01b0u l\u1ea1i",color:"success",icon:"plus",onClick:O})})]})}var N=n(234),U={id:0,changedBy:"",changedTime:new Date,content:"",createdBy:"",createdTime:new Date,title:"",parentId:0,order:0};function D(){var t=i.a.useContext(_.a),e=t.showAlert,n=t.showBackdrop,c=t.hideBackdrop,a=Object(o.i)().postId,s=i.a.useState(U),u=Object(r.a)(s,2),d=u[0],l=u[1],j=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(),t.prev=1,t.t0=l,t.next=5,B.a.getById(a);case 5:t.t1=t.sent,(0,t.t0)(t.t1),c(),t.next=15;break;case 10:t.prev=10,t.t2=t.catch(1),l(U),c(),e(_.b.FETCH_FAILURE,"error");case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}();return i.a.useEffect((function(){j()}),[a]),Object(x.jsxs)(w.a,{container:!0,spacing:1,children:[Object(x.jsxs)(w.a,{item:!0,xs:12,children:[Object(x.jsx)(k.a,{variant:"h4",children:d.title}),Object(x.jsx)(I.a,{})]}),Object(x.jsx)(w.a,{item:!0,xs:12,children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:Object(N.a)(d.content)}})})]})}function H(){var t=i.a.useState(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],a=function(){var t=Object(S.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,Object(u.c)();case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return i.a.useEffect((function(){a()}),[]),n?Object(x.jsx)(R,{}):Object(x.jsx)(D,{})}function q(){var t=Object(o.j)().path;return Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{path:"".concat(t,"/dashboard"),component:T}),Object(x.jsx)(o.b,{path:"".concat(t,"/posts/:postId"),component:H})]})}var z=i.a.lazy((function(){return n.e(20).then(n.bind(null,1086))})),G=i.a.lazy((function(){return n.e(16).then(n.bind(null,1105))}));function X(){var t=Object(o.j)().path,e=i.a.useContext(s.a),n=e.changeSideMenuList,a=e.changeActivePluginId,l=i.a.useState(!1),j=Object(r.a)(l,2),b=j[0],p=j[1],f=i.a.useState(!1),h=Object(r.a)(f,2),O=h[0],v=h[1],m=i.a.useContext(d.a),C=m.state,w=m.refresh;return i.a.useEffect((function(){a(u.g.id),Object(u.b)().then((function(t){p(t)})).catch((function(){p(!1)})),Object(u.c)().then((function(t){v(t)})).catch((function(){v(!1)})),w()}),[]),i.a.useEffect((function(){var t=b?Object(c.a)(u.a):[],e=O?Object(c.a)(u.e):[];n([].concat(Object(c.a)(u.f),[Object(x.jsx)(g,{data:C.posts.map((function(t){return{id:t.id.toFixed(0),label:t.title,parentId:t.parentId.toFixed(0),order:t.order}}))},"2")],Object(c.a)(e),Object(c.a)(t)))}),[b,C]),Object(x.jsxs)(o.d,{children:[O&&Object(x.jsx)(o.b,{path:"".concat(t,"/creator"),component:z}),b&&Object(x.jsx)(o.b,{path:"".concat(t,"/admin"),component:G}),Object(x.jsx)(o.b,{path:"".concat(t),component:q})]})}function J(){return Object(x.jsx)(d.b,{children:Object(x.jsx)(X,{})})}},566:function(t,e,n){"use strict";var c=n(10),r=n.n(c),a="/api/library/posts";var i={getAll:function(){return r.a.get(a)},getById:function(t){return r.a.get("".concat(a,"/").concat(t))},create:function(t){return r.a.post(a,t)},edit:function(t,e){return r.a.put("".concat(a,"/").concat(t),e)},remove:function(t){return r.a.delete("".concat(a,"/").concat(t))},changeOrder:function(t,e){return r.a.put("".concat(a,"/changeOrder/").concat(t,"/").concat(e))}};e.a=i},576:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return O}));var c=n(14),r=n(0),a=n.n(r),i=n(126),o="GET_CONTRACT_DETAIL_SUCCESS",s="GET_CONTRACT_DETAIL_FAILURE",u={posts:[]},d={state:u,refresh:function(){}};function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return{posts:e.payload.posts};case s:return u;default:return t}}var j=n(29),b=n.n(j),p=n(45),f=n(566),h={refresh:function(){var t=Object(p.a)(b.a.mark((function t(e,n){var c,r,a,u,d,l;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return{type:s}},u=function(t){return{type:o,payload:{posts:t}}},c=n.showBackdrop,r=n.showAlert,a=n.hideBackdrop,c(),t.prev=4,t.next=7,f.a.getAll();case 7:l=t.sent,e(u(l)),a(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),e(d()),a(),r(i.b.FETCH_FAILURE,"error");case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,n){return t.apply(this,arguments)}}()},x=n(1),O=Object(r.createContext)(d);function v(t){var e=t.children,n=a.a.useReducer(l,u),o=Object(c.a)(n,2),s=o[0],d=o[1],j=Object(r.useContext)(i.a),b={state:s,refresh:function(){h.refresh(d,j)}};return Object(x.jsx)(O.Provider,{value:b,children:e})}}}]);
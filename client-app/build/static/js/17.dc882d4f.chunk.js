(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[17],{1083:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return _t}));var n=a(0),r=a.n(n),c=a(25),i=a(48),o=a(2);function s(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O PL-BS-CF"})}var l=a(16),j=a(300),d=a(338),u=a(98),h=function(t){return[100*t+4,100*t+5,100*t+6,100*t+7,100*t+8,100*t+9,100*t+10,100*t+11,100*t+12,100*(t+1)+1,100*(t+1)+2,100*(t+1)+3]},p=function(){var t=new Date,e=0===t.getMonth()?12:t.getMonth();return 100*(0===t.getMonth()?t.getFullYear()-1:t.getFullYear())+e},b=function(t){var e=t.toFixed(0);return"".concat(e[4]).concat(e[5],"/").concat(e[2]).concat(e[3])},x=function(){var t=new Date,e=t.getMonth();return e>=4&&e<=11?t.getFullYear():t.getFullYear()-1},f=function(t,e,a){return t.filter((function(t){return parseInt(t.reportType)===e&&parseInt(t.period)===a})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0)},m={getDetailChartData:function(t,e,a){var n=x(),r=h(n),c=0;return r.map((function(n){var r={period:b(n),paymentDiscount:f(a,100*t+2+e,n),financialSupport:f(a,100*t+4+e,n),latePayment:f(a,100*t+6+e,n),shortTermFunding:f(a,100*t+8+e,n),longTermFunding:f(a,100*t+10+e,n),other:f(a,100*t+12+e,n),total:0};return c=c+r.paymentDiscount+r.financialSupport+r.latePayment+r.shortTermFunding+r.longTermFunding+r.other,r.total=c,r}))},getOverviewChartData:function(t,e,a){var n=x(),r=h(n),c=e.filter((function(e){return e.reportType[0]==="".concat(t)}));return r.map((function(t){var e=c.filter((function(e){return parseInt(e.period)<=t&&parseInt(e.reportType)%2===0})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),n=c.filter((function(e){return parseInt(e.period)<=t&&parseInt(e.reportType)%2===1})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),r=a.data.filter((function(e){return e.period===t&&201===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),i=a.data.filter((function(e){return e.period===t&&202===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),o=a.data.filter((function(e){return e.period===t&&203===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0);return{period:b(t),outcome:e,income:n,total:e-n,baselineRatio:0!==r?(e-n)/r*100:0,rebaselineRatio:0!==i?(e-n)/i*100:0,forecastRatio:0!==o?(e-n)/o*100:0}}))},getPeriodLabel:b},O=a(17),y=a(109),g=a(18),v="FETCH_DATA_SUCCESS",D="FETCH_DATA_FAILURE",k={efm03Report:{reportPeriod:0,data:[],projects:[]},reportData:[]},C={state:k,fetchData:function(t,e){}};function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(g.a)(Object(g.a)({},t),{},{reportData:e.payload.data,efm03Report:e.payload.efm03Report});case D:return Object(g.a)(Object(g.a)({},t),{},{reportData:k.reportData,efm03Report:k.efm03Report});default:return t}}var I=a(23),A=a.n(I),E=a(41),F=a(10),w=a.n(F);var K={get:function(t){return w.a.get(function(t){return"/api/ebi/efm03/".concat(t)}(t))}};var B={get:function(t,e){return w.a.get(function(t,e){return"/api/ebi/efm02?year=".concat(t,"&month=").concat(e)}(t,e))}},S=function(t,e){return e>=4&&e<=12?t:t-1},M={fetchData:function(){var t=Object(E.a)(A.a.mark((function t(e,a,n,r){var c,i,o,s,l,j;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=function(){return{type:D}},s=function(t,e){return{type:v,payload:{efm03Report:t,data:e}}},c=r.showBackdrop,i=r.showAlert,o=r.hideBackdrop,c(),t.prev=4,t.next=7,Promise.all([K.get(S(e,a)),B.get(e,a)]);case 7:j=t.sent,n(s(j[0],j[1])),o(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),n(l()),o(),i(y.b.FETCH_FAILURE,"error");case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,a,n,r){return t.apply(this,arguments)}}()},R=Object(n.createContext)(C);function N(t){var e=t.children,a=r.a.useReducer(T,k),c=Object(O.a)(a,2),i=c[0],s=c[1],l=Object(n.useContext)(y.a),j={state:i,fetchData:function(t,e){M.fetchData(t,e,s,l)}};return Object(o.jsx)(R.Provider,{value:j,children:e})}var P=a(21),H=a(346),W=a(1078),L=a(1103),Y=a(1079),G=a(639),z=a(640),_=a(1066),U=a(644),V=a(637),q=a(1060),J=a(373),X=["#70AD47","#5B9BD5","#FFC000","#43682B","#255E91","#997300"],Q=[].concat(X,X,X,X,X),Z=a(129),$=a(909),tt=a(448),et=function(){return Object(o.jsxs)($.a,{x:b(p()),values:"Actual",strokeWidth:2,stroke:Z.a[700],strokeDasharray:"3 3",children:[Object(o.jsx)(tt.a,{value:"Th\u1ef1c t\u1ebf",position:"insideTopRight"}),Object(o.jsx)(tt.a,{value:"D\u1ef1 b\xe1o",position:"insideTopLeft"})]})};function at(t){var e=t.title,a=t.data,n=Object(P.a)(),r=Object(H.a)(n.breakpoints.down("xs")),c=Object(O.a)(Q,6),i=c[0],s=c[1],l=c[2],j=c[3],d=c[4],h=c[5],p=Object(O.a)(Q,1)[0],b=15,x=function(t){return J.a.formatMoney(t)};return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(o.jsx)(W.a,{children:Object(o.jsxs)(L.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(o.jsx)(Y.a,{stroke:"#f5f5f5"}),Object(o.jsx)(G.a,{dataKey:"period",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:r,yAxisId:1,tickFormatter:x}),Object(o.jsx)(z.a,{type:"number",mirror:r,yAxisId:0,orientation:"right",tickFormatter:x}),Object(o.jsx)(_.a,{formatter:function(t){return"".concat(J.a.formatMoney(t)," tr VND")}}),Object(o.jsx)(U.a,{}),Object(o.jsx)(V.a,{name:"Chi\u1ebft kh\u1ea5u thanh to\xe1n",dataKey:"paymentDiscount",stackId:"stackedColumnEfm02",barSize:b,fill:i}),Object(o.jsx)(V.a,{name:"CT H\u1ed7 tr\u1ee3 t\xe0i ch\xednh",dataKey:"financialSupport",stackId:"stackedColumnEfm02",barSize:b,fill:s}),Object(o.jsx)(V.a,{name:"Ch\u1eadm thanh to\xe1n",dataKey:"latePayment",stackId:"stackedColumnEfm02",barSize:b,fill:l}),Object(o.jsx)(V.a,{name:"TT v\u1ed1n ng\u1eafn h\u1ea1n",dataKey:"shortTermFunding",stackId:"stackedColumnEfm02",barSize:b,fill:j}),Object(o.jsx)(V.a,{name:"TT v\u1ed1n d\xe0i h\u1ea1n",dataKey:"longTermFunding",stackId:"stackedColumnEfm02",barSize:b,fill:d}),Object(o.jsx)(V.a,{name:"Ho\u1ea1t \u0111\u1ed9ng kh\xe1c",dataKey:"other",stackId:"stackedColumnEfm02",barSize:b,fill:h}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"T\u1ed5ng c\u1ed9ng",yAxisId:1,type:"linear",dataKey:"total",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),et()]})})})]})}function nt(t){var e=t.title,a=t.data,n=Object(P.a)(),r=Object(H.a)(n.breakpoints.down("xs")),c=Object(O.a)(Q,3),i=c[0],s=c[1],l=c[2],j=Object(O.a)(Q,3),d=j[0],h=j[1],p=j[2];return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(o.jsx)(W.a,{children:Object(o.jsxs)(L.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(o.jsx)(Y.a,{stroke:"#f5f5f5"}),Object(o.jsx)(G.a,{dataKey:"period",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:r,yAxisId:0,tickFormatter:function(t){return"".concat(J.a.formatMoney(t),"%")}}),Object(o.jsx)(z.a,{type:"number",mirror:r,yAxisId:1,orientation:"right",tickFormatter:function(t){return J.a.formatMoney(t)}}),Object(o.jsx)(_.a,{formatter:function(t,e){return"".concat(J.a.formatMoney(t),"CPTC r\xf2ng/DT KHB\u0110"===e||"CPTC r\xf2ng/DT k\u1ebf ho\u1ea1ch"===e||"CPTC r\xf2ng/DT d\u1ef1 b\xe1o"===e?"%":" tr VND")}}),Object(o.jsx)(U.a,{}),Object(o.jsx)(V.a,{name:"T\u1ed5ng chi ph\xed t\xe0i ch\xednh",yAxisId:1,dataKey:"outcome",barSize:8,fill:i}),Object(o.jsx)(V.a,{name:"T\u1ed5ng thu nh\u1eadp t\xe0i ch\xednh",yAxisId:1,dataKey:"income",barSize:8,fill:s}),Object(o.jsx)(V.a,{name:"Thu nh\u1eadp t\xe0i ch\xednh r\xf2ng",yAxisId:1,dataKey:"total",barSize:8,fill:l}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"CPTC r\xf2ng/DT KHB\u0110",yAxisId:0,type:"linear",dataKey:"baselineRatio",dot:{r:4,stroke:d,strokeWidth:2},activeDot:{r:6,fill:d},stroke:d,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"CPTC r\xf2ng/DT k\u1ebf ho\u1ea1ch",yAxisId:0,type:"linear",dataKey:"rebaselineRatio",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"CPTC r\xf2ng/DT d\u1ef1 b\xe1o",yAxisId:0,type:"linear",dataKey:"forecastRatio",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),et()]})})})]})}var rt=Object(j.a)((function(t){return{content:Object(l.a)({display:"flex",height:"calc(100% - 32px)",flexDirection:"column",alignItems:"center",margin:t.spacing(-1)},t.breakpoints.down("xs"),{margin:0,height:"calc(100% - 48px)"}),menu:{display:"flex",width:"100%"},title:{flexGrow:1,textTransform:"uppercase"},link:{textDecoration:"none"}}}));function ct(){var t=rt(),e=r.a.useContext(R),a=e.state,n=e.fetchData,c=p(),s=parseInt(c.toFixed(0).substring(0,4)),l=parseInt(c.toFixed(0).substring(4,6));return r.a.useEffect((function(){n(s,l)}),[]),Object(o.jsx)("div",{className:t.content,children:Object(o.jsxs)(d.a,{container:!0,spacing:1,style:{padding:"8px"},children:[Object(o.jsxs)(d.a,{container:!0,alignItems:"center",item:!0,spacing:1,className:t.menu,children:[Object(o.jsx)(d.a,{item:!0,className:t.title,children:Object(o.jsx)(u.a,{variant:"h6",children:"B\xe1o c\xe1o Chi ph\xed t\xe0i ch\xednh r\xf2ng C\xf4ng ty"})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(i.i,{filename:"Efm02.xlsx",url:"/api/ebi/efm02/getExcel/".concat(s,"/").concat(l),label:"T\u1ea3i v\u1ec1"})})]}),a.reportData.length>0&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(nt,{title:"T\u1ef7 l\u1ec7 CPTC r\xf2ng tr\xean doanh thu",data:m.getOverviewChartData(3,a.reportData,a.efm03Report)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Chi ph\xed t\xe0i ch\xednh KHB\u0110",data:m.getDetailChartData(1,-1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Thu nh\u1eadp t\xe0i ch\xednh KHB\u0110",data:m.getDetailChartData(1,0,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Chi ph\xed t\xe0i ch\xednh k\u1ebf ho\u1ea1ch",data:m.getDetailChartData(2,-1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Thu nh\u1eadp t\xe0i ch\xednh k\u1ebf ho\u1ea1ch",data:m.getDetailChartData(2,0,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Chi ph\xed t\xe0i ch\xednh th\u1ef1c t\u1ebf/d\u1ef1 b\xe1o",data:m.getDetailChartData(3,-1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(at,{title:"Thu nh\u1eadp t\xe0i ch\xednh th\u1ef1c t\u1ebf/d\u1ef1 b\xe1o",data:m.getDetailChartData(3,0,a.reportData)})})]})]})})}function it(){return Object(o.jsx)(N,{children:Object(o.jsx)(ct,{})})}var ot=a(40),st=a(1081),lt=a(297),jt=a(100),dt=a(208),ut=a(34),ht="CHANGE_TITLE",pt="MINUS_YEAR",bt="PLUS_YEAR",xt="FETCH_DATA_SUCCESS",ft="FETCH_DATA_FAILURE",mt={year:x(),title:"",reportData:{reportPeriod:0,data:[],projects:[]}},Ot={state:mt,changeTitle:function(t){},fetchData:function(t){},minusYear:function(){},plusYear:function(){}};function yt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ht:return Object(g.a)(Object(g.a)({},t),{},{title:e.payload.text});case pt:return Object(g.a)(Object(g.a)({},t),{},{year:t.year-1});case bt:return Object(g.a)(Object(g.a)({},t),{},{year:t.year+1});case xt:return Object(g.a)(Object(g.a)({},t),{},{reportData:e.payload.data});case ft:return Object(g.a)(Object(g.a)({},t),{},{reportData:mt.reportData});default:return t}}var gt={changeTitle:function(t,e){e({type:ht,payload:{text:t}})},fetchData:function(){var t=Object(E.a)(A.a.mark((function t(e,a,n){var r,c,i,o,s,l;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return{type:ft}},o=function(t){return{type:xt,payload:{data:t}}},r=n.showBackdrop,c=n.showAlert,i=n.hideBackdrop,r(),t.prev=4,t.next=7,K.get(e);case 7:l=t.sent,a(o(l)),i(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),a(s()),i(),c(y.b.FETCH_FAILURE,"error");case 17:case"end":return t.stop()}}),t,null,[[4,12]])})));return function(e,a,n){return t.apply(this,arguments)}}(),minusYear:function(t){t({type:pt})},plusYear:function(t){t({type:bt})}},vt=Object(n.createContext)(Ot);function Dt(t){var e=t.children,a=r.a.useReducer(yt,mt),c=Object(O.a)(a,2),i=c[0],s=c[1],l=Object(n.useContext)(y.a),j={state:i,changeTitle:function(t){gt.changeTitle(t,s)},fetchData:function(t){gt.fetchData(t,s,l)},minusYear:function(){gt.minusYear(s)},plusYear:function(){gt.plusYear(s)}};return Object(o.jsx)(vt.Provider,{value:j,children:e})}var kt={getSCurveChartData:function(t,e,a){var n=100*e+1,r=100*e+2,c=100*e+3;return h(t).map((function(t){var e=a.data.find((function(e){return e.period===t&&e.reportType===n})),i=a.data.find((function(e){return e.period===t&&e.reportType===r})),o=a.data.find((function(e){return e.period===t&&e.reportType===c}));return{period:b(t),baseline:void 0!==e?e.dispersion:0,rebaseline:void 0!==i?i.dispersion:0,forecast:void 0!==o?o.dispersion:0,accBaseline:void 0!==e?e.accumulation:0,accRebaseline:void 0!==i?i.accumulation:0,accForecast:void 0!==o?o.accumulation:0}}))},getLineChartData:function(t,e,a,n){var r=100*e+1,c=100*e+2,i=100*e+3,o=100*a+1,s=100*a+2,l=100*a+3;return h(t).map((function(t){var e=n.data.find((function(e){return e.period===t&&e.reportType===r})),a=n.data.find((function(e){return e.period===t&&e.reportType===o})),j=0;void 0!==e&&void 0!==a&&(j=e.accumulation-a.accumulation);var d=n.data.find((function(e){return e.period===t&&e.reportType===c})),u=n.data.find((function(e){return e.period===t&&e.reportType===s})),h=0;void 0!==d&&void 0!==u&&(h=d.accumulation-u.accumulation);var p=n.data.find((function(e){return e.period===t&&e.reportType===i})),x=n.data.find((function(e){return e.period===t&&e.reportType===l})),f=0;return void 0!==p&&void 0!==x&&(f=p.accumulation-x.accumulation),{period:b(t),accBaseline:j,accRebaseline:h,accForecast:f}}))},getBarChartData:function(t,e){var a=100*t+3,n=100*t+2,r=p();return e.projects.map((function(t){var e=t.data.find((function(t){return t.reportType===n&&t.period===r})),c=t.data.find((function(t){return t.reportType===a&&t.period===r})),i=void 0!==e?e.accumulation:0,o=void 0!==c?c.accumulation:0;return{category:t.projectCode,name:t.projectName,value:void 0!==c?c.accumulation:0,gap:0!==i?(i-o)/i*100:0}})).sort((function(t,e){return t.value>e.value?-1:t.value<e.value?1:0}))},getAreaChartData:function(t,e,a){var n=100+e,r=200+e,c=300+e;return h(t).map((function(t){var e=a.data.find((function(e){return e.period===t&&e.reportType===n})),i=a.data.find((function(e){return e.period===t&&e.reportType===r})),o=a.data.find((function(e){return e.period===t&&e.reportType===c}));return{period:b(t),cashIn:void 0!==o?o.accumulation:0,revenue:void 0!==i?i.accumulation:0,workDone:void 0!==e?e.accumulation:0}}))},getPeriodLabel:b},Ct=a(1062);function Tt(t){var e=t.title,a=t.data,n=Object(P.a)(),c=Object(H.a)(n.breakpoints.down("xs")),i=r.a.useState(!1),s=Object(O.a)(i,2),l=s[0],j=s[1],d=Object(O.a)(Q,3),h=d[0],p=d[1],b=d[2];r.a.useEffect((function(){j(!0)}),[]);return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:l&&Object(o.jsx)(W.a,{children:Object(o.jsxs)(L.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(o.jsxs)("defs",{children:[Object(o.jsxs)("linearGradient",{id:"colorWorkDone",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(o.jsx)("stop",{offset:"0%",stopColor:h,stopOpacity:1}),Object(o.jsx)("stop",{offset:"100%",stopColor:h,stopOpacity:0})]}),Object(o.jsxs)("linearGradient",{id:"colorRevenue",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(o.jsx)("stop",{offset:"0%",stopColor:p,stopOpacity:1}),Object(o.jsx)("stop",{offset:"100%",stopColor:p,stopOpacity:0})]}),Object(o.jsxs)("linearGradient",{id:"colorCashIn",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(o.jsx)("stop",{offset:"0%",stopColor:b,stopOpacity:1}),Object(o.jsx)("stop",{offset:"100%",stopColor:b,stopOpacity:0})]})]}),Object(o.jsx)(G.a,{dataKey:"period",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:c,tickFormatter:function(t){return J.a.formatMoney(t/1e3)}}),Object(o.jsx)(_.a,{formatter:function(t){return"".concat(J.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(o.jsx)(U.a,{}),Object(o.jsx)(Ct.a,{name:"S\u1ea3n l\u01b0\u1ee3ng",type:"monotone",dataKey:"workDone",stroke:h,fillOpacity:.5,fill:"url(#colorWorkDone)"}),Object(o.jsx)(Ct.a,{name:"Doanh thu",type:"monotone",dataKey:"revenue",stroke:p,fillOpacity:.5,fill:"url(#colorRevenue)"}),Object(o.jsx)(Ct.a,{name:"Ti\u1ec1n v\u1ec1",type:"monotone",dataKey:"cashIn",stroke:b,fillOpacity:.5,fill:"url(#colorCashIn)"}),et()]})})})]})}function It(t){var e=t.title,a=t.data,n=Object(P.a)(),c=Object(H.a)(n.breakpoints.down("xs")),i=r.a.useState(!1),s=Object(O.a)(i,2),l=s[0],j=s[1],d=Object(O.a)(Q,3),h=d[0],p=d[1],b=d[2];r.a.useEffect((function(){j(!0)}),[]);return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:l&&Object(o.jsx)(W.a,{children:Object(o.jsxs)(L.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(o.jsx)(Y.a,{stroke:"#f5f5f5"}),Object(o.jsx)(G.a,{dataKey:"period",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:c,yAxisId:0,tickFormatter:function(t){return J.a.formatMoney(t/1e3)}}),Object(o.jsx)(_.a,{formatter:function(t){return"".concat(J.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(o.jsx)(U.a,{}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"KHB\u0110 L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accBaseline",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"KH L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accRebaseline",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"TT/DB L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accForecast",dot:{r:4,stroke:b,strokeWidth:2},activeDot:{r:6,fill:b},stroke:b,strokeWidth:3}),et()]})})})]})}function At(){var t=r.a.useContext(vt),e=t.changeTitle,a=t.state,n=a.year;return r.a.useEffect((function(){e("T\u1ed5ng quan")}),[]),Object(o.jsxs)(d.a,{container:!0,alignItems:"flex-start",children:[Object(o.jsxs)(d.a,{item:!0,xs:12,md:6,container:!0,alignItems:"stretch",children:[Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(Tt,{title:"K\u1ebf ho\u1ea1ch ban \u0111\u1ea7u",data:kt.getAreaChartData(n,1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(Tt,{title:"K\u1ebf ho\u1ea1ch",data:kt.getAreaChartData(n,2,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(Tt,{title:"Th\u1ef1c t\u1ebf/D\u1ef1 b\xe1o",data:kt.getAreaChartData(n,3,a.reportData)})})]}),Object(o.jsxs)(d.a,{item:!0,xs:12,md:6,container:!0,alignItems:"stretch",children:[Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(It,{title:"T\u1ed3n kho",data:kt.getLineChartData(n,1,2,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(It,{title:"Ph\u1ea3i thu",data:kt.getLineChartData(n,2,3,a.reportData)})})]})]})}function Et(t){var e=t.title,a=t.data,n=Object(P.a)(),c=Object(H.a)(n.breakpoints.down("xs")),i=r.a.useState(!1),s=Object(O.a)(i,2),l=s[0],j=s[1],d=Object(O.a)(Q,3),h=d[0],p=d[1],b=d[2];r.a.useEffect((function(){j(!0)}),[]);var x=function(t){return J.a.formatMoney(t/1e3)};return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:l&&Object(o.jsx)(W.a,{children:Object(o.jsxs)(L.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(o.jsx)(Y.a,{stroke:"#f5f5f5"}),Object(o.jsx)(G.a,{dataKey:"period",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:c,yAxisId:0,tickFormatter:x}),Object(o.jsx)(z.a,{type:"number",mirror:c,yAxisId:1,orientation:"right",tickFormatter:x}),Object(o.jsx)(_.a,{formatter:function(t){return"".concat(J.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(o.jsx)(U.a,{}),Object(o.jsx)(V.a,{name:"KH Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"rebaseline",barSize:10,fill:p}),Object(o.jsx)(V.a,{name:"TT/DB Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"forecast",barSize:10,fill:b}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"KHB\u0110 L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accBaseline",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"KH L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accRebaseline",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),Object(o.jsx)(q.a,{animationEasing:"linear",name:"TT/DB L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accForecast",dot:{r:4,stroke:b,strokeWidth:2},activeDot:{r:6,fill:b},stroke:b,strokeWidth:3}),et()]})})})]})}var Ft=a(1080),wt=function(t){return J.a.formatMoney(t/1e3)},Kt=function(t){return"".concat(J.a.formatMoney(t),"%")},Bt=function(t,e){return"%Gap"===e?"".concat(J.a.formatMoney(t,1),"%"):"".concat(J.a.formatMoney(t/1e3)," t\u1ef7 VND")};function St(t){var e=t.title,a=t.name,n=t.data,r=Object(P.a)(),c=Object(H.a)(r.breakpoints.down("xs")),i=Object(O.a)(Q,2),s=i[0],l=i[1];return Object(o.jsxs)("div",{style:{width:"100%"},children:[Object(o.jsx)(u.a,{align:"center",variant:"h6",children:e}),Object(o.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(o.jsx)(W.a,{children:Object(o.jsxs)(Ft.a,{data:n,stackOffset:"expand",margin:{top:0,right:0,left:0,bottom:0},children:[Object(o.jsx)(Y.a,{strokeDasharray:"3 3"}),Object(o.jsx)(G.a,{dataKey:"category",type:"category",scale:"band"}),Object(o.jsx)(z.a,{type:"number",mirror:c,yAxisId:0,tickFormatter:wt}),Object(o.jsx)(z.a,{type:"number",mirror:c,yAxisId:1,orientation:"right",tickFormatter:Kt,max:100,min:-100}),Object(o.jsx)(_.a,{formatter:Bt,labelFormatter:function(t){var e=n.find((function(e){return e.category===t}));return void 0!==e?e.name:t}}),Object(o.jsx)(V.a,{barSize:10,name:a,yAxisId:0,dataKey:"value",fill:s}),Object(o.jsx)(V.a,{barSize:10,name:"%Gap",yAxisId:1,dataKey:"gap",fill:l})]})})})]})}function Mt(){var t=r.a.useContext(vt),e=t.changeTitle,a=t.state,n=a.year;return r.a.useEffect((function(){e("B\xe1o c\xe1o gap")}),[]),Object(o.jsxs)(d.a,{container:!0,alignItems:"stretch",children:[Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(Et,{title:"S\u1ea3n l\u01b0\u1ee3ng to\xe0n c\xf4ng ty",data:kt.getSCurveChartData(n,1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(St,{title:"S\u1ea3n l\u01b0\u1ee3ng theo d\u1ef1 \xe1n",name:"S\u1ea3n l\u01b0\u1ee3ng",data:kt.getBarChartData(1,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(Et,{title:"Doanh thu to\xe0n c\xf4ng ty",data:kt.getSCurveChartData(n,2,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(St,{title:"Doanh thu theo d\u1ef1 \xe1n",name:"Doanh thu",data:kt.getBarChartData(2,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(Et,{title:"Ti\u1ec1n v\u1ec1 to\xe0n c\xf4ng ty",data:kt.getSCurveChartData(n,3,a.reportData)})}),Object(o.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(o.jsx)(St,{title:"Ti\u1ec1n v\u1ec1 theo d\u1ef1 \xe1n",name:"Ti\u1ec1n v\u1ec1",data:kt.getBarChartData(3,a.reportData)})})]})}var Rt=Object(j.a)((function(t){return{content:Object(l.a)({display:"flex",height:"calc(100% - 32px)",flexDirection:"column",alignItems:"center",margin:t.spacing(-1)},t.breakpoints.down("xs"),{margin:0,height:"calc(100% - 48px)"}),menu:{display:"flex",width:"100%"},title:{flexGrow:1,textTransform:"uppercase"},link:{textDecoration:"none"}}}));function Nt(){var t=Rt(),e=Object(c.j)().path,a=Object(c.g)(),n=r.a.useContext(vt),s=n.state,l=n.fetchData,j=n.minusYear,h=n.plusYear,p=s.title,b=s.year,x=r.a.useState(null),f=Object(O.a)(x,2),m=f[0],y=f[1],g=Boolean(m),v=function(t,e,n){return Object(o.jsx)(st.a,{onClick:function(){!function(t){y(null),a.push(t)}(n)},children:Object(o.jsxs)(d.a,{container:!0,alignItems:"center",spacing:2,children:[Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(ut.a,{icon:t})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(u.a,{variant:"subtitle2",style:{textTransform:"uppercase"},children:e})})]})})};return r.a.useEffect((function(){l(s.year)}),[s.year]),Object(o.jsx)("div",{className:t.content,children:Object(o.jsxs)(d.a,{container:!0,spacing:1,style:{padding:"8px"},children:[Object(o.jsxs)(d.a,{container:!0,alignItems:"center",item:!0,spacing:1,className:t.menu,children:[Object(o.jsx)(d.a,{item:!0,className:t.title,children:Object(o.jsx)(u.a,{variant:"h6",children:p})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(lt.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:j,style:{padding:0},children:Object(o.jsx)(ut.a,{icon:"chevron-left"})})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(u.a,{variant:"h6",children:b})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(lt.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:h,style:{padding:0},children:Object(o.jsx)(ut.a,{icon:"chevron-right"})})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(i.i,{filename:"Efm03.xlsx",url:"/api/ebi/efm03/getExcel/".concat(s.year),label:"T\u1ea3i v\u1ec1"})}),Object(o.jsxs)(d.a,{item:!0,children:[Object(o.jsx)(jt.a,{xsDown:!0,children:Object(o.jsxs)(d.a,{container:!0,direction:"row",spacing:1,children:[Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(ot.a,{to:"/e-bi/enterprise/efm03",className:t.link,children:Object(o.jsx)(i.n,{variant:"contained",icon:"chart-line",text:"T\u1ed5ng quan",color:"dark"})})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(ot.a,{to:"/e-bi/enterprise/efm03/gap-report",className:t.link,children:Object(o.jsx)(i.n,{variant:"contained",icon:"check-circle",text:"B\xe1o c\xe1o Gap",color:"info"})})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(i.n,{variant:"contained",icon:"sync-alt",text:"L\xe0m m\u1edbi",color:"secondary"})})]})}),Object(o.jsxs)(jt.a,{smUp:!0,children:[Object(o.jsx)(lt.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(t){y(t.currentTarget)},style:{padding:0},children:Object(o.jsx)(ut.a,{icon:"ellipsis-v"})}),Object(o.jsxs)(dt.a,{id:"long-menu",anchorEl:m,keepMounted:!0,open:g,onClose:function(){y(null)},children:[v("chart-line","T\u1ed5ng quan","/e-bi/enterprise/efm03"),v("check-circle","B\xe1o c\xe1o Gap","/e-bi/enterprise/efm03/gap-report"),Object(o.jsx)(st.a,{children:Object(o.jsxs)(d.a,{container:!0,alignItems:"center",spacing:2,children:[Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(ut.a,{icon:"sync-alt"})}),Object(o.jsx)(d.a,{item:!0,children:Object(o.jsx)(u.a,{variant:"subtitle2",children:"L\xc0M M\u1edaI"})})]})})]})]})]})]}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsxs)(c.d,{children:[Object(o.jsx)(c.b,{exact:!0,path:"".concat(e),component:At}),Object(o.jsx)(c.b,{path:"".concat(e,"/gap-report"),component:Mt})]})})]})})}function Pt(){return Object(o.jsx)(Dt,{children:Object(o.jsx)(Nt,{})})}function Ht(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O CHI PH\xcd TI\u1ec0N CHI"})}function Wt(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O OPEX-CAPEX"})}function Lt(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O VAY/G\u1eecI NG\xc2N H\xc0NG"})}function Yt(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O C\xc2N \u0110\u1ed0I CF"})}function Gt(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O TU\u1ed4I N\u1ee2"})}function zt(){return Object(o.jsx)(i.e,{text:"B\xc1O C\xc1O KPI C\xd4NG TY"})}function _t(){var t=Object(c.j)().path;return Object(o.jsxs)(c.d,{children:[Object(o.jsx)(c.b,{path:"".concat(t,"/efm01"),component:s}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm02"),component:it}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm03"),component:Pt}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm04"),component:Ht}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm05"),component:Wt}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm06"),component:Lt}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm07"),component:Yt}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm08"),component:Gt}),Object(o.jsx)(c.b,{path:"".concat(t,"/efm09"),component:zt})]})}},373:function(t,e,a){"use strict";var n={formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",a=e,n=[{symbol:"dd",value:t.getDate()<10?"0".concat(t.getDate()):t.getDate()},{symbol:"MM",value:t.getMonth()+1<10?"0".concat(t.getMonth()+1):"".concat(t.getMonth()+1)},{symbol:"yyyy",value:t.getFullYear()},{symbol:"hh",value:t.getHours()<10?"0".concat(t.getHours()):t.getHours()},{symbol:"mm",value:t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes()}];return n.map((function(t){return a=a.replace(t.symbol,t.value),t.symbol})),a},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:e});return a.format(t)}};e.a=n}}]);
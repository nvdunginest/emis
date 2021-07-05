(this.webpackJsonpemis=this.webpackJsonpemis||[]).push([[12],{537:function(t,e,a){"use strict";var n={formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"dd/MM/yyyy",a=e,n=[{symbol:"dd",value:t.getDate()<10?"0".concat(t.getDate()):t.getDate()},{symbol:"MM",value:t.getMonth()+1<10?"0".concat(t.getMonth()+1):"".concat(t.getMonth()+1)},{symbol:"yyyy",value:t.getFullYear()},{symbol:"hh",value:t.getHours()<10?"0".concat(t.getHours()):t.getHours()},{symbol:"mm",value:t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes()}];return n.map((function(t){return a=a.replace(t.symbol,t.value),t.symbol})),a},formatMoney:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=new Intl.NumberFormat("vi-VN",{maximumFractionDigits:e});return a.format(t)}};e.a=n},681:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=[{name:"Efm01",text:"B\xe1o c\xe1o PL-BS-CF",role:"EFM01_ROLE",icon:"chart-line"},{name:"Efm02",text:"B\xe1o c\xe1o CPTC r\xf2ng",role:"EFM02_ROLE",icon:"chart-line"},{name:"Efm03",text:"B\xe1o c\xe1o SL-DT-TV",role:"EFM03_ROLE",icon:"chart-line"},{name:"Efm04",text:"B\xe1o c\xe1o Chi ph\xed ti\u1ec1n chi",role:"EFM04_ROLE",icon:"chart-line"},{name:"Efm05",text:"B\xe1o c\xe1o Chi ph\xed QLDN",role:"EFM05_ROLE",icon:"chart-line"},{name:"Efm06",text:"B\xe1o c\xe1o Vay/G\u1eedi ng\xe2n h\xe0ng",role:"EFM06_ROLE",icon:"chart-line"},{name:"Efm07",text:"B\xe1o c\xe1o C\xe2n \u0111\u1ed1i CF",role:"EFM07_ROLE",icon:"chart-line"},{name:"Efm08",text:"B\xe1o c\xe1o Tu\u1ed5i n\u1ee3",role:"EFM08_ROLE",icon:"chart-line"},{name:"Efm09",text:"B\xe1o c\xe1o KPI C\xf4ng ty",role:"EFM09_ROLE",icon:"chart-line"}]},867:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return oe}));var n=a(208),r=a(25),i=a(0),c=a.n(i),o=a(27),s=a(47),l=a(18),d=a(110),u=a(46),j=a(2);function h(){return Object(j.jsx)(u.e,{text:"H\u1ec6 TH\u1ed0NG B\xc1O C\xc1O TH\xd4NG MNH"})}function p(){return Object(j.jsx)(u.e,{text:"B\xc1O C\xc1O PL-BS-CF"})}var m=a(22),b=a.n(m),f=a(40),x=a(15),O=a(532),y=a(380),g=a(70),v=a(9),A=a.n(v);var k={get:function(){return A.a.get("/api/ebi/efm02")}};var C={get:function(){return A.a.get("/api/ebi/efm03")}},E=function(t){return[100*t+4,100*t+5,100*t+6,100*t+7,100*t+8,100*t+9,100*t+10,100*t+11,100*t+12,100*(t+1)+1,100*(t+1)+2,100*(t+1)+3]},D=function(){var t=new Date,e=0===t.getMonth()?12:t.getMonth();return 100*(0===t.getMonth()?t.getFullYear()-1:t.getFullYear())+e},T=function(t){var e=t.toFixed(0);return"".concat(e[4]).concat(e[5],"/").concat(e[2]).concat(e[3])},I=function(){var t=new Date,e=t.getMonth();return e>=4&&e<=11?t.getFullYear():t.getFullYear()-1},F=function(t){switch(t){case"BASELINE":return"1";case"REBASELINE":return"2";case"FORECAST":return"3";default:throw"Not found version type!"}},R=function(t,e){var a=parseInt(F(t),10),n=parseInt("".concat(e),10);return"".concat(100*a+n)},w=function(t,e,a){return t.filter((function(t){return t.reportType===e&&t.period===a})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0)},S={getDetailChartData:function(t,e,a){var n=I(),r=E(n),i=0;return r.map((function(n){var r={period:T(n),paymentDiscount:w(a,R(t,e?2:1),n),financialSupport:w(a,R(t,e?4:3),n),latePayment:w(a,R(t,e?6:5),n),shortTermFunding:w(a,R(t,e?8:7),n),longTermFunding:w(a,R(t,e?10:9),n),other:w(a,R(t,e?12:11),n),total:0};return i=i+r.paymentDiscount+r.financialSupport+r.latePayment+r.shortTermFunding+r.longTermFunding+r.other,r.total=i,r}))},getOverviewChartData:function(t,e,a){var n=I(),r=E(n),i=e.filter((function(e){return e.reportType[0]==="".concat(F(t))}));return r.map((function(t){var e=i.filter((function(e){return e.period<=t&&parseInt(e.reportType)%2===0})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),n=i.filter((function(e){return e.period<=t&&parseInt(e.reportType)%2===1})).map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),r=a.data.filter((function(e){return e.period===t&&"102"===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),c=a.data.filter((function(e){return e.period===t&&"202"===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),o=a.data.filter((function(e){return e.period===t&&"302"===e.reportType})).map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0);return{period:T(t),outcome:e,income:n,total:n-e,baselineRatio:0!==r?(n-e)/r*100:0,rebaselineRatio:0!==c?(n-e)/c*100:0,forecastRatio:0!==o?(n-e)/o*100:0}}))},getPeriodLabel:T},B=a(19),L=a(336),M=a(860),K=a(890),N=a(861),P=a(679),G=a(680),W=a(855),H=a(686),_=a(678),V=a(837),z=a(537),U=["#70AD47","#5B9BD5","#FFC000","#43682B","#255E91","#997300"],Y=[].concat(U,U,U,U,U),Q=a(94),q=a(690),J=a(563),X=function(){return Object(j.jsxs)(q.a,{x:T(D()),values:"Actual",strokeWidth:2,stroke:Q.a[700],strokeDasharray:"3 3",children:[Object(j.jsx)(J.a,{value:"Th\u1ef1c t\u1ebf",position:"insideTopRight"}),Object(j.jsx)(J.a,{value:"D\u1ef1 b\xe1o",position:"insideTopLeft"})]})};function Z(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),c=Object(r.a)(Y,6),o=c[0],s=c[1],l=c[2],d=c[3],u=c[4],h=c[5],p=Object(r.a)(Y,1)[0],m=15,b=function(t){return z.a.formatMoney(t)};return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{barCategoryGap:5,barGap:0,data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsx)(N.a,{stroke:"#f5f5f5"}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:1,tickFormatter:b}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:0,orientation:"right",tickFormatter:b}),Object(j.jsx)(W.a,{formatter:function(t){return"".concat(z.a.formatMoney(t)," tr VND")}}),Object(j.jsx)(H.a,{}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"Chi\u1ebft kh\u1ea5u thanh to\xe1n",dataKey:"paymentDiscount",stackId:"stackedColumnEfm02",barSize:m,fill:o}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"CT H\u1ed7 tr\u1ee3 t\xe0i ch\xednh",dataKey:"financialSupport",stackId:"stackedColumnEfm02",barSize:m,fill:s}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"Ch\u1eadm thanh to\xe1n",dataKey:"latePayment",stackId:"stackedColumnEfm02",barSize:m,fill:l}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"TT v\u1ed1n ng\u1eafn h\u1ea1n",dataKey:"shortTermFunding",stackId:"stackedColumnEfm02",barSize:m,fill:d}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"TT v\u1ed1n d\xe0i h\u1ea1n",dataKey:"longTermFunding",stackId:"stackedColumnEfm02",barSize:m,fill:u}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"Ho\u1ea1t \u0111\u1ed9ng kh\xe1c",dataKey:"other",stackId:"stackedColumnEfm02",barSize:m,fill:h}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"T\u1ed5ng c\u1ed9ng",yAxisId:1,type:"linear",dataKey:"total",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),X()]})})})]})}function $(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),c=Object(r.a)(Y,3),o=c[0],s=c[1],l=c[2],d=Object(r.a)(Y,3),u=d[0],h=d[1],p=d[2];return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{barCategoryGap:5,barGap:0,data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsx)(N.a,{stroke:"#f5f5f5"}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:0,tickFormatter:function(t){return"".concat(z.a.formatMoney(t),"%")}}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:1,orientation:"right",tickFormatter:function(t){return z.a.formatMoney(t)}}),Object(j.jsx)(W.a,{formatter:function(t,e){return"CPTC r\xf2ng/DT KHB\u0110"===e||"CPTC r\xf2ng/DT k\u1ebf ho\u1ea1ch"===e||"CPTC r\xf2ng/DT d\u1ef1 b\xe1o"===e?"".concat(z.a.formatMoney(t,1),"%"):"".concat(z.a.formatMoney(t)," tr VND")}}),Object(j.jsx)(H.a,{}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"T\u1ed5ng chi ph\xed t\xe0i ch\xednh",yAxisId:1,dataKey:"outcome",barSize:8,fill:o}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"T\u1ed5ng thu nh\u1eadp t\xe0i ch\xednh",yAxisId:1,dataKey:"income",barSize:8,fill:s}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"Thu nh\u1eadp/(Chi ph\xed) t\xe0i ch\xednh r\xf2ng",yAxisId:1,dataKey:"total",barSize:8,fill:l}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"CPTC r\xf2ng/DT KHB\u0110",yAxisId:0,type:"linear",dataKey:"baselineRatio",dot:{r:4,stroke:u,strokeWidth:2},activeDot:{r:6,fill:u},stroke:u,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"CPTC r\xf2ng/DT k\u1ebf ho\u1ea1ch",yAxisId:0,type:"linear",dataKey:"rebaselineRatio",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"CPTC r\xf2ng/DT d\u1ef1 b\xe1o",yAxisId:0,type:"linear",dataKey:"forecastRatio",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),X()]})})})]})}var tt=Object(O.a)((function(t){return{content:Object(x.a)({display:"flex",height:"calc(100% - 32px)",flexDirection:"column",alignItems:"center",margin:t.spacing(-1)},t.breakpoints.down("xs"),{margin:0,height:"calc(100% - 48px)"}),menu:{display:"flex",width:"100%"},title:{flexGrow:1,textTransform:"uppercase"},link:{textDecoration:"none"}}}));function et(){var t=tt(),e=Object(s.b)(),a=c.a.useState([]),n=Object(r.a)(a,2),i=n[0],o=n[1],d=c.a.useState({data:[],projects:[]}),h=Object(r.a)(d,2),p=h[0],m=h[1],x=function(){var t=Object(f.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l.loadingActions.show()),t.prev=1,t.next=4,Promise.all([k.get(),C.get()]);case 4:a=t.sent,o(a[0]),m(a[1]),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error"));case 12:return t.prev=12,e(l.loadingActions.hide()),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();return c.a.useEffect((function(){x()}),[]),Object(j.jsx)("div",{className:t.content,children:Object(j.jsxs)(y.a,{container:!0,spacing:1,style:{padding:"8px"},children:[Object(j.jsxs)(y.a,{container:!0,alignItems:"center",item:!0,spacing:1,className:t.menu,children:[Object(j.jsx)(y.a,{item:!0,className:t.title,children:Object(j.jsx)(g.a,{variant:"h6",children:"B\xe1o c\xe1o Chi ph\xed t\xe0i ch\xednh r\xf2ng C\xf4ng ty"})}),Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(u.i,{filename:"Efm02.xlsx",url:"/api/ebi/efm02/getExcel",label:"T\u1ea3i b\xe1o c\xe1o"})})]}),i.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)($,{title:"T\u1ef7 l\u1ec7 CPTC r\xf2ng tr\xean doanh thu",data:S.getOverviewChartData("FORECAST",i,p)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Chi ph\xed t\xe0i ch\xednh KHB\u0110",data:S.getDetailChartData("BASELINE",!1,i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Thu nh\u1eadp t\xe0i ch\xednh KHB\u0110",data:S.getDetailChartData("BASELINE",!0,i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Chi ph\xed t\xe0i ch\xednh k\u1ebf ho\u1ea1ch",data:S.getDetailChartData("REBASELINE",!1,i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Thu nh\u1eadp t\xe0i ch\xednh k\u1ebf ho\u1ea1ch",data:S.getDetailChartData("REBASELINE",!0,i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Chi ph\xed t\xe0i ch\xednh th\u1ef1c t\u1ebf/d\u1ef1 b\xe1o",data:S.getDetailChartData("FORECAST",!1,i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Z,{title:"Thu nh\u1eadp t\xe0i ch\xednh th\u1ef1c t\u1ebf/d\u1ef1 b\xe1o",data:S.getDetailChartData("FORECAST",!0,i)})})]})]})})}var at=a(23),nt=a(476),rt=a(465),it=a(326),ct=a(197),ot=a(26),st=a(13),lt="CHANGE_TITLE",dt="FETCH_DATA_SUCCESS",ut="FETCH_DATA_FAILURE",jt={title:"",reportData:{data:[],projects:[]}},ht={state:jt,changeTitle:function(t){},fetchData:function(){}};function pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case lt:return Object(st.a)(Object(st.a)({},t),{},{title:e.payload.text});case dt:return Object(st.a)(Object(st.a)({},t),{},{reportData:e.payload.data});case ut:return Object(st.a)(Object(st.a)({},t),{},{reportData:jt.reportData});default:return t}}var mt={changeTitle:function(t,e){e({type:lt,payload:{text:t}})},fetchData:function(){var t=Object(f.a)(b.a.mark((function t(e){var a,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){return{type:ut}},a=function(t){return{type:dt,payload:{data:t}}},l.store.dispatch(l.loadingActions.show()),t.prev=3,t.next=6,C.get();case 6:r=t.sent,e(a(r)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),e(n()),l.store.dispatch(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error"));case 14:return t.prev=14,l.store.dispatch(l.loadingActions.hide()),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[3,10,14,17]])})));return function(e){return t.apply(this,arguments)}}()},bt=Object(i.createContext)(ht);function ft(t){var e=t.children,a=c.a.useReducer(pt,jt),n=Object(r.a)(a,2),i=n[0],o=n[1],s={state:i,changeTitle:function(t){mt.changeTitle(t,o)},fetchData:function(){mt.fetchData(o)}};return Object(j.jsx)(bt.Provider,{value:s,children:e})}var xt={getSCurveChartData:function(t,e){var a=R("BASELINE",t),n=R("REBASELINE",t),r=R("FORECAST",t),i=I();return E(i).map((function(t){var i=e.data.find((function(e){return e.period===t&&e.reportType===a})),c=e.data.find((function(e){return e.period===t&&e.reportType===n})),o=e.data.find((function(e){return e.period===t&&e.reportType===r}));return{period:T(t),baseline:void 0!==i?i.dispersion:0,rebaseline:void 0!==c?c.dispersion:0,forecast:void 0!==o?o.dispersion:0,accBaseline:void 0!==i?i.accumulation:0,accRebaseline:void 0!==c?c.accumulation:0,accForecast:void 0!==o?o.accumulation:0}}))},getLineChartData:function(t,e,a){var n=R("BASELINE",t),r=R("REBASELINE",t),i=R("FORECAST",t),c=R("BASELINE",e),o=R("REBASELINE",e),s=R("FORECAST",e),l=I();return E(l).map((function(t){var e=a.data.find((function(e){return e.period===t&&e.reportType===n})),l=a.data.find((function(e){return e.period===t&&e.reportType===c})),d=0;void 0!==e&&void 0!==l&&(d=e.accumulation-l.accumulation);var u=a.data.find((function(e){return e.period===t&&e.reportType===r})),j=a.data.find((function(e){return e.period===t&&e.reportType===o})),h=0;void 0!==u&&void 0!==j&&(h=u.accumulation-j.accumulation);var p=a.data.find((function(e){return e.period===t&&e.reportType===i})),m=a.data.find((function(e){return e.period===t&&e.reportType===s})),b=0;return void 0!==p&&void 0!==m&&(b=p.accumulation-m.accumulation),{period:T(t),accBaseline:d,accRebaseline:h,accForecast:b}}))},getBarChartData:function(t,e){var a=R("FORECAST",t),n=R("REBASELINE",t),r=D();return e.projects.map((function(t){var e=t.data.find((function(t){return t.reportType===n&&t.period===r})),i=t.data.find((function(t){return t.reportType===a&&t.period===r})),c=void 0!==e?e.accumulation:0,o=void 0!==i?i.accumulation:0;return{category:t.projectCode,name:t.projectName,value:void 0!==i?i.accumulation:0,gap:0!==c?(c-o)/c*100:0}})).sort((function(t,e){return t.value>e.value?-1:t.value<e.value?1:0}))},getAreaChartData:function(t,e){var a=R(t,1),n=R(t,2),r=R(t,3),i=I();return E(i).map((function(t){var i=e.data.find((function(e){return e.period===t&&e.reportType===a})),c=e.data.find((function(e){return e.period===t&&e.reportType===n})),o=e.data.find((function(e){return e.period===t&&e.reportType===r}));return{period:T(t),cashIn:void 0!==o?o.accumulation:0,revenue:void 0!==c?c.accumulation:0,workDone:void 0!==i?i.accumulation:0}}))},getPeriodLabel:T},Ot=a(839);function yt(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),c=Object(r.a)(Y,3),o=c[0],s=c[1],l=c[2];return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsxs)("defs",{children:[Object(j.jsxs)("linearGradient",{id:"colorWorkDone",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:o,stopOpacity:1}),Object(j.jsx)("stop",{offset:"100%",stopColor:o,stopOpacity:0})]}),Object(j.jsxs)("linearGradient",{id:"colorRevenue",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:s,stopOpacity:1}),Object(j.jsx)("stop",{offset:"100%",stopColor:s,stopOpacity:0})]}),Object(j.jsxs)("linearGradient",{id:"colorCashIn",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(j.jsx)("stop",{offset:"0%",stopColor:l,stopOpacity:1}),Object(j.jsx)("stop",{offset:"100%",stopColor:l,stopOpacity:0})]})]}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,tickFormatter:function(t){return z.a.formatMoney(t/1e3)}}),Object(j.jsx)(W.a,{formatter:function(t){return"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(j.jsx)(H.a,{}),Object(j.jsx)(Ot.a,{isAnimationActive:!1,name:"S\u1ea3n l\u01b0\u1ee3ng",type:"monotone",dataKey:"workDone",stroke:o,fillOpacity:.5,fill:"url(#colorWorkDone)"}),Object(j.jsx)(Ot.a,{isAnimationActive:!1,name:"Doanh thu",type:"monotone",dataKey:"revenue",stroke:s,fillOpacity:.5,fill:"url(#colorRevenue)"}),Object(j.jsx)(Ot.a,{isAnimationActive:!1,name:"Ti\u1ec1n v\u1ec1",type:"monotone",dataKey:"cashIn",stroke:l,fillOpacity:.5,fill:"url(#colorCashIn)"}),X()]})})})]})}function gt(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),o=c.a.useState(!1),s=Object(r.a)(o,2),l=s[0],d=s[1],u=Object(r.a)(Y,3),h=u[0],p=u[1],m=u[2];c.a.useEffect((function(){d(!0)}),[]);return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:l&&Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsx)(N.a,{stroke:"#f5f5f5"}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:0,tickFormatter:function(t){return z.a.formatMoney(t/1e3)}}),Object(j.jsx)(W.a,{formatter:function(t){return"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(j.jsx)(H.a,{}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KHB\u0110 L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accBaseline",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KH L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accRebaseline",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"TT/DB L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accForecast",dot:{r:4,stroke:m,strokeWidth:2},activeDot:{r:6,fill:m},stroke:m,strokeWidth:3}),X()]})})})]})}function vt(){var t=c.a.useContext(bt),e=t.changeTitle,a=t.state;return c.a.useEffect((function(){e("T\u1ed5ng quan")}),[]),Object(j.jsxs)(y.a,{container:!0,alignItems:"flex-start",children:[Object(j.jsxs)(y.a,{item:!0,xs:12,md:6,container:!0,alignItems:"stretch",children:[Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(yt,{title:"K\u1ebf ho\u1ea1ch ban \u0111\u1ea7u",data:xt.getAreaChartData("BASELINE",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(yt,{title:"K\u1ebf ho\u1ea1ch",data:xt.getAreaChartData("REBASELINE",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(yt,{title:"Th\u1ef1c t\u1ebf/D\u1ef1 b\xe1o",data:xt.getAreaChartData("FORECAST",a.reportData)})})]}),Object(j.jsxs)(y.a,{item:!0,xs:12,md:6,container:!0,alignItems:"stretch",children:[Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(gt,{title:"T\u1ed3n kho",data:xt.getLineChartData("1","2",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsx)(gt,{title:"Ph\u1ea3i thu",data:xt.getLineChartData("2","3",a.reportData)})})]})]})}function At(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),o=c.a.useState(!1),s=Object(r.a)(o,2),l=s[0],d=s[1],u=Object(r.a)(Y,3),h=u[0],p=u[1],m=u[2];c.a.useEffect((function(){d(!0)}),[]);var b=function(t){return z.a.formatMoney(t/1e3)};return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:l&&Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{barCategoryGap:5,barGap:0,data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsx)(N.a,{stroke:"#f5f5f5"}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:0,tickFormatter:b}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:1,orientation:"right",tickFormatter:b}),Object(j.jsx)(W.a,{formatter:function(t){return"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")}}),Object(j.jsx)(H.a,{}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"KH Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"rebaseline",fill:p}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"TT/DB Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"forecast",fill:m}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KHB\u0110 L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accBaseline",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KH L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accRebaseline",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"TT/DB L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accForecast",dot:{r:4,stroke:m,strokeWidth:2},activeDot:{r:6,fill:m},stroke:m,strokeWidth:3}),X()]})})})]})}var kt=a(862),Ct=function(t){return z.a.formatMoney(t/1e3)},Et=function(t){return"".concat(z.a.formatMoney(t),"%")},Dt=function(t,e){return"%Gap"===e?"".concat(z.a.formatMoney(t,1),"%"):"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")};function Tt(t){var e=t.title,a=t.name,n=t.data,i=Object(B.a)(),c=Object(L.a)(i.breakpoints.down("xs")),o=Object(r.a)(Y,2),s=o[0],l=o[1];return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(kt.a,{barCategoryGap:5,barGap:0,data:n,stackOffset:"expand",margin:{top:0,right:0,left:0,bottom:0},children:[Object(j.jsx)(N.a,{strokeDasharray:"3 3"}),Object(j.jsx)(P.a,{dataKey:"category",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:c,yAxisId:0,tickFormatter:Ct}),Object(j.jsx)(G.a,{type:"number",mirror:c,yAxisId:1,orientation:"right",tickFormatter:Et,max:100,min:-100}),Object(j.jsx)(W.a,{formatter:Dt,labelFormatter:function(t){var e=n.find((function(e){return e.category===t}));return void 0!==e?e.name:t}}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:a,yAxisId:0,dataKey:"value",fill:s}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"%Gap",yAxisId:1,dataKey:"gap",fill:l})]})})})]})}function It(){var t=c.a.useContext(bt),e=t.changeTitle,a=t.state;return c.a.useEffect((function(){e("B\xe1o c\xe1o gap")}),[]),Object(j.jsxs)(y.a,{container:!0,alignItems:"stretch",children:[Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(At,{title:"S\u1ea3n l\u01b0\u1ee3ng to\xe0n c\xf4ng ty",data:xt.getSCurveChartData("1",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Tt,{title:"S\u1ea3n l\u01b0\u1ee3ng theo d\u1ef1 \xe1n",name:"S\u1ea3n l\u01b0\u1ee3ng",data:xt.getBarChartData("1",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(At,{title:"Doanh thu to\xe0n c\xf4ng ty",data:xt.getSCurveChartData("2",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Tt,{title:"Doanh thu theo d\u1ef1 \xe1n",name:"Doanh thu",data:xt.getBarChartData("2",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(At,{title:"Ti\u1ec1n v\u1ec1 to\xe0n c\xf4ng ty",data:xt.getSCurveChartData("3",a.reportData)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Tt,{title:"Ti\u1ec1n v\u1ec1 theo d\u1ef1 \xe1n",name:"Ti\u1ec1n v\u1ec1",data:xt.getBarChartData("3",a.reportData)})})]})}var Ft=Object(O.a)((function(t){return{content:Object(x.a)({display:"flex",height:"calc(100% - 32px)",flexDirection:"column",alignItems:"center",margin:t.spacing(-1)},t.breakpoints.down("xs"),{margin:0,height:"calc(100% - 48px)"}),menu:{display:"flex",width:"100%"},title:{flexGrow:1,textTransform:"uppercase"},link:{textDecoration:"none"}}}));function Rt(){var t=Ft(),e=Object(o.i)().path,a=Object(o.f)(),n=c.a.useContext(bt),i=n.state,s=n.fetchData,l=i.title,d=c.a.useState(null),h=Object(r.a)(d,2),p=h[0],m=h[1],b=Boolean(p),f=function(t,e,n){return Object(j.jsx)(nt.a,{onClick:function(){!function(t){m(null),a.push(t)}(n)},children:Object(j.jsxs)(y.a,{container:!0,alignItems:"center",spacing:2,children:[Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(ot.a,{icon:t})}),Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(g.a,{variant:"subtitle2",style:{textTransform:"uppercase"},children:e})})]})})};return c.a.useEffect((function(){s()}),[]),Object(j.jsx)("div",{className:t.content,children:Object(j.jsxs)(y.a,{container:!0,spacing:1,style:{padding:"8px"},children:[Object(j.jsxs)(y.a,{container:!0,alignItems:"center",item:!0,spacing:1,className:t.menu,children:[Object(j.jsx)(y.a,{item:!0,className:t.title,children:Object(j.jsx)(g.a,{variant:"h6",children:l})}),Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(u.i,{filename:"Efm03.xlsx",url:"/api/ebi/efm03/getExcel",label:"T\u1ea3i b\xe1o c\xe1o"})}),Object(j.jsxs)(y.a,{item:!0,children:[Object(j.jsx)(rt.a,{xsDown:!0,children:Object(j.jsxs)(y.a,{container:!0,direction:"row",spacing:1,children:[Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(at.a,{to:"/ebi/efm03",className:t.link,children:Object(j.jsx)(u.n,{variant:"contained",icon:"chart-line",text:"T\u1ed5ng quan",color:"dark"})})}),Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(at.a,{to:"/ebi/efm03/gap-report",className:t.link,children:Object(j.jsx)(u.n,{variant:"contained",icon:"check-circle",text:"B\xe1o c\xe1o Gap",color:"info"})})})]})}),Object(j.jsxs)(rt.a,{smUp:!0,children:[Object(j.jsx)(it.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(t){m(t.currentTarget)},style:{padding:0},children:Object(j.jsx)(ot.a,{icon:"ellipsis-v"})}),Object(j.jsxs)(ct.a,{id:"long-menu",anchorEl:p,keepMounted:!0,open:b,onClose:function(){m(null)},children:[f("chart-line","T\u1ed5ng quan","/ebi/efm03"),f("check-circle","B\xe1o c\xe1o Gap","/ebi/efm03/gap-report")]})]})]})]}),Object(j.jsx)(y.a,{item:!0,xs:12,children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"".concat(e),component:vt}),Object(j.jsx)(o.a,{path:"".concat(e,"/gap-report"),component:It})]})})]})})}function wt(){return Object(j.jsx)(ft,{children:Object(j.jsx)(Rt,{})})}function St(){return Object(j.jsx)(u.e,{text:"B\xc1O C\xc1O CHI PH\xcd TI\u1ec0N CHI"})}var Bt={get:function(){return A.a.get("/api/ebi/efm05")}},Lt={getSCurveChartData:function(t){var e=I();return E(e).map((function(e){var a=t.filter((function(t){return t.period===e&&t.reportType[0]===F("BASELINE")})),n=t.filter((function(t){return t.period===e&&t.reportType[0]===F("REBASELINE")})),r=t.filter((function(t){return t.period===e&&t.reportType[0]===F("FORECAST")}));return{period:T(e),baseline:a.map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),rebaseline:n.map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),forecast:r.map((function(t){return t.dispersion})).reduce((function(t,e){return t+e}),0),accBaseline:a.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),accRebaseline:n.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0),accForecast:r.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0)}}))},getPieChartData:function(t,e){var a=D();return e.map((function(e){var n=t.filter((function(t){return t.period===a&&e.reportTypes.map((function(t){return R("FORECAST",t)})).includes(t.reportType)}));return{name:e.name,value:n.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0)}}))},getGapChartData:function(t,e){var a=D();return e.map((function(e){var n=t.filter((function(t){return t.period===a&&e.reportTypes.map((function(t){return R("FORECAST",t)})).includes(t.reportType)})),r=t.filter((function(t){return t.period===a&&e.reportTypes.map((function(t){return R("REBASELINE",t)})).includes(t.reportType)}));return{category:e.name,name:e.name,value:r.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0)-n.map((function(t){return t.accumulation})).reduce((function(t,e){return t+e}),0)}}))}};function Mt(t){var e=t.title,a=t.data,n=t.tickFormatter,i=void 0===n?function(t){return z.a.formatMoney(t/1e3)}:n,c=t.tooltipFormatter,o=void 0===c?function(t){return"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")}:c,s=Object(B.a)(),l=Object(L.a)(s.breakpoints.down("xs")),d=Object(r.a)(Y,3),u=d[0],h=d[1],p=d[2];return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(K.a,{barCategoryGap:5,barGap:0,data:a,margin:{top:0,right:0,bottom:0,left:0},children:[Object(j.jsx)(N.a,{stroke:"#f5f5f5"}),Object(j.jsx)(P.a,{dataKey:"period",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:l,yAxisId:0,tickFormatter:i}),Object(j.jsx)(G.a,{type:"number",mirror:l,yAxisId:1,orientation:"right",tickFormatter:i}),Object(j.jsx)(W.a,{formatter:o}),Object(j.jsx)(H.a,{}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"KH Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"rebaseline",fill:h}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"TT/DB Ph\xe2n k\u1ef3",yAxisId:1,dataKey:"forecast",fill:p}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KHB\u0110 L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accBaseline",dot:{r:4,stroke:u,strokeWidth:2},activeDot:{r:6,fill:u},stroke:u,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"KH L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accRebaseline",dot:{r:4,stroke:h,strokeWidth:2},activeDot:{r:6,fill:h},stroke:h,strokeWidth:3}),Object(j.jsx)(V.a,{isAnimationActive:!1,name:"TT/DB L\u0169y k\u1ebf",yAxisId:0,type:"linear",dataKey:"accForecast",dot:{r:4,stroke:p,strokeWidth:2},activeDot:{r:6,fill:p},stroke:p,strokeWidth:3}),X()]})})})]})}var Kt=a(885),Nt=a(840),Pt=a(621);function Gt(t){var e=t.title,a=t.data,n=t.tooltipFormatter,r=void 0===n?function(t){return"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")}:n;return Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(Kt.a,{children:[Object(j.jsx)(H.a,{}),Object(j.jsx)(W.a,{formatter:r}),Object(j.jsx)(Nt.a,{isAnimationActive:!1,data:a,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:100,children:a.map((function(t,e){return Object(j.jsx)(Pt.a,{fill:Y[e]},"cell-".concat(e))}))})]})})})]})}var Wt=function(t){return z.a.formatMoney(t/1e3)},Ht=function(t,e){return"%Gap"===e?"".concat(z.a.formatMoney(t,1),"%"):"".concat(z.a.formatMoney(t/1e3)," t\u1ef7 VND")};function _t(t){var e=t.title,a=t.data,n=Object(B.a)(),i=Object(L.a)(n.breakpoints.down("xs")),c=Object(r.a)(Y,1)[0];return console.log(a),Object(j.jsxs)("div",{style:{width:"100%"},children:[Object(j.jsx)(g.a,{align:"center",variant:"h6",children:e}),Object(j.jsx)("div",{style:{width:"100%",height:280,padding:"8px"},children:Object(j.jsx)(M.a,{children:Object(j.jsxs)(kt.a,{barCategoryGap:5,barGap:0,data:a,stackOffset:"expand",margin:{top:0,right:0,left:0,bottom:0},children:[Object(j.jsx)(N.a,{strokeDasharray:"3 3"}),Object(j.jsx)(P.a,{dataKey:"category",type:"category",scale:"band"}),Object(j.jsx)(G.a,{type:"number",mirror:i,yAxisId:0,tickFormatter:Wt}),Object(j.jsx)(W.a,{formatter:Ht}),Object(j.jsx)(_.a,{isAnimationActive:!1,name:"GAP",yAxisId:0,dataKey:"value",fill:c})]})})})]})}var Vt=Object(O.a)((function(t){return{content:Object(x.a)({display:"flex",height:"calc(100% - 32px)",flexDirection:"column",alignItems:"center",margin:t.spacing(-1)},t.breakpoints.down("xs"),{margin:0,height:"calc(100% - 48px)"}),menu:{display:"flex",width:"100%"},title:{flexGrow:1,textTransform:"uppercase"},link:{textDecoration:"none"}}})),zt=function(t,e){for(var a=[],n=t;n<=e;n++)a.push("".concat(n));return a},Ut=[{name:"V\u0103n ph\xf2ng",reportTypes:["1"]},{name:"D\u1ef1 b\u1ecb",reportTypes:["2"]},{name:"Chi ph\xed l\u01b0\u01a1ng kh\xe1c",reportTypes:["3"]}],Yt=[{name:"Chi ph\xed l\u01b0\u01a1ng",reportTypes:["1","2","3"]},{name:"Chi ph\xed ph\xfac l\u1ee3i",reportTypes:zt(4,18)},{name:"Chi ph\xed h\xe0nh ch\xednh",reportTypes:zt(19,45)}];function Qt(){var t=Vt(),e=Object(s.b)(),a=c.a.useState([]),n=Object(r.a)(a,2),i=n[0],o=n[1],d=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(l.loadingActions.show()),t.prev=1,t.t0=o,t.next=5,Bt.get();case 5:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 9:t.prev=9,t.t2=t.catch(1),e(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error")),o([]);case 13:return t.prev=13,e(l.loadingActions.hide()),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,9,13,16]])})));return function(){return t.apply(this,arguments)}}();return c.a.useEffect((function(){d()}),[]),Object(j.jsx)("div",{className:t.content,children:Object(j.jsxs)(y.a,{container:!0,spacing:1,style:{padding:"8px"},children:[Object(j.jsxs)(y.a,{container:!0,alignItems:"center",item:!0,spacing:1,xs:12,className:t.menu,children:[Object(j.jsx)(y.a,{item:!0,className:t.title,children:Object(j.jsx)(g.a,{variant:"h6",children:"B\xe1o c\xe1o Chi ph\xed Qu\u1ea3n l\xfd doanh nghi\u1ec7p"})}),Object(j.jsx)(y.a,{item:!0,children:Object(j.jsx)(u.i,{filename:"Efm05.xlsx",url:"/api/ebi/efm05/getExcel",label:"T\u1ea3i b\xe1o c\xe1o"})})]}),i.length>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Mt,{title:"Chi ph\xed Qu\u1ea3n l\xfd doanh nghi\u1ec7p",data:Lt.getSCurveChartData(i)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(_t,{title:"GAP l\u0169y k\u1ebf chi ph\xed QLDN",data:Lt.getGapChartData(i,Yt)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Gt,{title:"C\u01a1 c\u1ea5u chi ph\xed l\u01b0\u01a1ng",data:Lt.getPieChartData(i,Ut)})}),Object(j.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(Gt,{title:"C\u01a1 c\u1ea5u chi ph\xed QLDN",data:Lt.getPieChartData(i,Yt)})})]})]})})}function qt(){return Object(j.jsx)(y.a,{children:Object(j.jsx)(u.i,{filename:"efm06_".concat(D(),".xlsx"),url:"/api/ebi/efm06/getexcel",label:"T\u1ea3i b\xe1o c\xe1o"})})}function Jt(){return Object(j.jsx)(u.e,{text:"B\xc1O C\xc1O C\xc2N \u0110\u1ed0I CF"})}function Xt(){return Object(j.jsx)(u.e,{text:"B\xc1O C\xc1O TU\u1ed4I N\u1ee2"})}function Zt(){return Object(j.jsx)(u.e,{text:"B\xc1O C\xc1O KPI C\xd4NG TY"})}var $t=a(170),te=a(681),ee=["#0D6EFD","#198754","#FFC107","#DC3545","#0DCAF0","#6C757D"],ae=[].concat(ee,ee,ee,ee,ee),ne=Object(O.a)((function(){return{box:{padding:8,cursor:"pointer","&:hover":{backgroundColor:"#bcc3cf"}},link:{display:"flex",flexDirection:"row",textDecoration:"none",color:"black"}}}));function re(){var t=ne(),e=Object(s.b)(),a=c.a.useState([]),n=Object(r.a)(a,2),i=n[0],o=n[1];return c.a.useEffect((function(){e(l.loadingActions.show()),Promise.all([$t.a.checkRolePermission("EFM01_ROLE"),$t.a.checkRolePermission("EFM02_ROLE"),$t.a.checkRolePermission("EFM03_ROLE"),$t.a.checkRolePermission("EFM04_ROLE"),$t.a.checkRolePermission("EFM05_ROLE"),$t.a.checkRolePermission("EFM06_ROLE"),$t.a.checkRolePermission("EFM07_ROLE"),$t.a.checkRolePermission("EFM08_ROLE"),$t.a.checkRolePermission("EFM09_ROLE")]).then((function(t){o(t)})).catch((function(){o([]),e(l.alertActions.show(l.alertMessage.FETCH_FAILURE,"error"))})).finally((function(){e(l.loadingActions.hide())}))}),[]),Object(j.jsx)(y.a,{container:!0,spacing:2,style:{padding:8},children:i.map((function(e,a){return e&&Object(j.jsx)(y.a,{item:!0,xs:12,sm:6,md:3,className:t.box,children:Object(j.jsxs)(at.a,{to:"/ebi/efm0".concat(a+1),className:t.link,children:[Object(j.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:ae[a],height:"50px",width:"50px",borderRadius:"10px",marginRight:8},children:Object(j.jsx)(ot.a,{style:{fontSize:"1.8rem"},icon:te.a[a].icon})}),Object(j.jsxs)("div",{style:{flexGrow:1},children:[Object(j.jsx)(g.a,{noWrap:!0,variant:"body1",style:{fontWeight:"bold"},children:te.a[a].name}),Object(j.jsx)(g.a,{noWrap:!0,variant:"subtitle2",children:te.a[a].text})]})]})},a)}))})}function ie(){var t=Object(o.i)().path;return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"".concat(t,"/dashboard"),component:h}),Object(j.jsx)(o.a,{path:"".concat(t,"/enterprise"),component:re}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm01"),component:p}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm02"),component:et}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm03"),component:wt}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm04"),component:St}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm05"),component:Qt}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm06"),component:qt}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm07"),component:Jt}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm08"),component:Xt}),Object(j.jsx)(o.a,{path:"".concat(t,"/efm09"),component:Zt})]})}var ce=c.a.lazy((function(){return a.e(16).then(a.bind(null,879))}));function oe(){var t=Object(o.i)().path,e=Object(s.b)(),a=c.a.useState(!1),i=Object(r.a)(a,2),u=i[0],h=i[1];return c.a.useEffect((function(){e(l.layoutActions.setActivePluginId(d.e.id)),Object(d.b)().then((function(t){h(t)})).catch((function(){h(!1)}))}),[]),c.a.useEffect((function(){var t=u?Object(n.a)(d.a):[];e(l.layoutActions.setMenuList([].concat(Object(n.a)(d.d),Object(n.a)(t))))}),[u]),Object(j.jsxs)(o.c,{children:[u&&Object(j.jsx)(o.a,{path:"".concat(t,"/admin"),component:ce}),Object(j.jsx)(o.a,{path:"".concat(t),component:ie})]})}}}]);
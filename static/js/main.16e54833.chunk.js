(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{180:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},202:function(e,a,t){},340:function(e,a,t){},341:function(e,a,t){},358:function(e,a,t){},359:function(e,a,t){"use strict";t.r(a);var n=t(0),d=t.n(n),l=t(36),o=t.n(l),i=(t(180),t(76)),c=t.n(i),r=(t(199),t(200),t(8)),s=function(){return Object(r.jsx)("div",{className:"cv-toolbar",children:Object(r.jsx)("h2",{className:"cv-brand",children:"Covid-19 India"})})},v=t(15),u=(t(202),t(170)),m=t(361),h=t(366),j=t(171),b=t(67),f=function(e){var a=e.chart;return Object(r.jsx)(m.a,{children:Object(r.jsxs)(h.a,{data:null===a||void 0===a?void 0:a.data,children:[Object(r.jsx)(j.a,{dot:!1,type:"basis",dataKey:null===a||void 0===a?void 0:a.name,stroke:null===a||void 0===a?void 0:a.strokeColor,strokeWidth:3}),Object(r.jsx)(b.a,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return""}})]})})},k=(t(340),function(e){var a,t,n=e.card,d=e.chart;return Object(r.jsxs)("div",{className:"cv-card "+n.cardClass,children:[Object(r.jsx)("span",{className:"cv-label",children:null===n||void 0===n?void 0:n.label}),Object(r.jsxs)("span",{className:"cv-count",children:[null===n||void 0===n||null===(a=n.value)||void 0===a?void 0:a.toLocaleString("hi"),0!==(null===n||void 0===n?void 0:n.delta)&&Object(r.jsxs)("span",{className:"cv-delta",children:[Object(r.jsx)(u.a,{className:"cv-icon"}),null===n||void 0===n||null===(t=n.delta)||void 0===t?void 0:t.toLocaleString("hi")]})]}),Object(r.jsx)("div",{className:"cv-chart-container",children:Object(r.jsx)(f,{chart:d})})]})});var O=t(168),y=(t(341),function(e){var a=e.onStateChange,t=e.data,n=e.isLoading,l=e.placeholder,o=d.a.useState("TT"),i=Object(v.a)(o,2),c=i[0],s=i[1];return Object(r.jsx)("div",{className:"select",children:Object(r.jsx)(O.a,{value:c,onChange:function(e){s(e),a(e)},options:t,placeholder:"Select "+l,isLoading:n})})}),p=[{key:"TT",name:"India"},{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CT",name:"Chhattisgarh"},{key:"CH",name:"Chandigarh"},{key:"DL",name:"Delhi"},{key:"DN",name:"Dadra and Diu"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladhak"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}],x=(t(358),function(e){var a=e.theaders,t=e.tbody,n=e.formatter;return Object(r.jsx)("div",{className:"cv-table",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:a.map((function(e){return Object(r.jsx)("th",{children:e})}))})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)("tr",{children:g(e).map((function(e){return Object(r.jsx)("td",{children:e.toLocaleString(n)})}))})}))})]})})}),g=function(e){var a=[];return Object.keys(e).forEach((function(t){a.push(e[t])})),a},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=[];return Object.keys(e).forEach((function(n,d){var l,o,i,c,r,s,v,u,m,h,j,b;"TT"!==n&&t.push({stateName:null===(l=a.find((function(e){return e.value===n})))||void 0===l?void 0:l.label,confirm:(null===(o=e[n].total)||void 0===o?void 0:o.confirmed)?null===(i=e[n].total)||void 0===i?void 0:i.confirmed:0,active:N(null===(c=e[n].total)||void 0===c?void 0:c.confirmed,null===(r=e[n].total)||void 0===r?void 0:r.recovered,null===(s=e[n].total)||void 0===s?void 0:s.deceased),recovered:(null===(v=e[n].total)||void 0===v?void 0:v.recovered)?null===(u=e[n].total)||void 0===u?void 0:u.recovered:0,deceased:(null===(m=e[n].total)||void 0===m?void 0:m.deceased)?null===(h=e[n].total)||void 0===h?void 0:h.deceased:0,tested:(null===(j=e[n].total)||void 0===j?void 0:j.tested)?null===(b=e[n].total)||void 0===b?void 0:b.tested:0})})),t},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-(a+t)},S=function(){var e=Object(n.useState)(null),a=Object(v.a)(e,2),t=a[0],d=a[1],l=Object(n.useState)(null),o=Object(v.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)({states:[]}),m=Object(v.a)(u,2),h=m[0],j=m[1],b=Object(n.useState)(null),f=Object(v.a)(b,2),O=f[0],g=f[1],S=Object(n.useState)(null),T=Object(v.a)(S,2),L=(T[0],T[1]),A=Object(n.useState)(!0),P=Object(v.a)(A,2),M=P[0],D=P[1],F=Object(n.useState)("TT"),B=Object(v.a)(F,2),R=B[0],J=B[1];Object(n.useEffect)((function(){K()}),[]),Object(n.useEffect)((function(){c.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var a,t,n,l,o,i,c,r,s,v,u,m,h,j,b,f,k,O,y,p,x,C,N=e.data;g(N);var S=[{label:"Confirmed",value:null===N||void 0===N||null===(a=N[R])||void 0===a||null===(t=a.total)||void 0===t?void 0:t.confirmed,delta:null===N||void 0===N||null===(n=N[R])||void 0===n||null===(l=n.delta)||void 0===l?void 0:l.confirmed,cardClass:"cv-alert"},{label:"Active",value:(null===N||void 0===N||null===(o=N[R])||void 0===o||null===(i=o.total)||void 0===i?void 0:i.confirmed)-((null===N||void 0===N||null===(c=N[R])||void 0===c||null===(r=c.total)||void 0===r?void 0:r.deceased)+(null===N||void 0===N||null===(s=N[R])||void 0===s||null===(v=s.total)||void 0===v?void 0:v.recovered)),delta:0,cardClass:"cv-primary"},{label:"Recovered",value:null===N||void 0===N||null===(u=N[R])||void 0===u||null===(m=u.total)||void 0===m?void 0:m.recovered,delta:null===N||void 0===N||null===(h=N[R])||void 0===h||null===(j=h.delta)||void 0===j?void 0:j.recovered,cardClass:"cv-success"},{label:"Deceased",value:null===N||void 0===N||null===(b=N[R])||void 0===b||null===(f=b.total)||void 0===f?void 0:f.deceased,delta:null===N||void 0===N||null===(k=N[R])||void 0===k||null===(O=k.delta)||void 0===O?void 0:O.deceased,cardClass:"cv-warning"},{label:"Tested",value:null===N||void 0===N||null===(y=N[R])||void 0===y||null===(p=y.total)||void 0===p?void 0:p.tested,delta:null===N||void 0===N||null===(x=N[R])||void 0===x||null===(C=x.delta7)||void 0===C?void 0:C.tested,cardClass:""}];d(S)})),c.a.get("https://data.covid19india.org/v4/min/timeseries.min.json").then((function(e){var a=e.data;L(a);var t=[];Object.keys(a[R].dates).forEach((function(e,n){var d,l,o,i,c,r,s,v,u,m,h;n%15===0&&t.push({name:e,confirm:(null===(d=a[R].dates[e].delta7)||void 0===d?void 0:d.confirmed)?null===(l=a[R].dates[e].delta7)||void 0===l?void 0:l.confirmed:0,active:N(null===(o=a[R].dates[e].delta7)||void 0===o?void 0:o.confirmed,null===(i=a[R].dates[e].delta7)||void 0===i?void 0:i.recovered,null===(c=a[R].dates[e].delta7)||void 0===c?void 0:c.deceased),recovered:(null===(r=a[R].dates[e].delta7)||void 0===r?void 0:r.recovered)?null===(s=a[R].dates[e].delta7)||void 0===s?void 0:s.recovered:0,deceased:(null===(v=a[R].dates[e].delta7)||void 0===v?void 0:v.deceased)?null===(u=a[R].dates[e].delta7)||void 0===u?void 0:u.deceased:0,tested:(null===(m=a[R].dates[e].delta7)||void 0===m?void 0:m.tested)?null===(h=a[R].dates[e].delta7)||void 0===h?void 0:h.tested:0})}));var n=[{name:"confirmed",data:t.map((function(e){return{name:e.name,confirmed:e.confirm}})),strokeColor:"#F7685B"},{name:"active",data:t.map((function(e){return{name:e.name,active:e.active}})),strokeColor:"#109CF1"},{name:"recovered",data:t.map((function(e){return{name:e.name,recovered:e.recovered}})),strokeColor:"#2ED47A"},{name:"deceased",data:t.map((function(e){return{name:e.name,deceased:e.deceased}})),strokeColor:"#FFB946"},{name:"tested",data:t.map((function(e){return{name:e.name,tested:e.tested}})),strokeColor:"#000"}];s(n)}))}),[R]);var K=function(){var e=p.map((function(e){return{value:e.key,label:e.name}}));j({states:e}),D(!1)};return Object(r.jsxs)("div",{className:"cv-home",children:[Object(r.jsx)(y,{placeholder:"State",data:h.states,onStateChange:function(e){J(e.value)},isLoading:M}),Object(r.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return Object(r.jsx)(k,{card:t?t[a]:null,chart:i?i[a]:null},a)})):null}),O&&Object(r.jsx)(x,{theaders:["State","Confirmed","Active","Recovered","Deseased","Tested"],tbody:C(O,h.states),formatter:"hi"})]})};var T=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(s,{}),Object(r.jsx)(S,{})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,367)).then((function(a){var t=a.getCLS,n=a.getFID,d=a.getFCP,l=a.getLCP,o=a.getTTFB;t(e),n(e),d(e),l(e),o(e)}))};o.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),L()}},[[359,1,2]]]);
//# sourceMappingURL=main.16e54833.chunk.js.map
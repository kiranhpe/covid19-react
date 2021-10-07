(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{191:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},213:function(e,a,t){},214:function(e,a,t){},215:function(e,a,t){},232:function(e,a,t){},233:function(e,a,t){},368:function(e,a,t){},370:function(e,a,t){"use strict";t.r(a);var d=t(0),n=t.n(d),l=t(38),i=t.n(l),c=(t(191),t(81)),o=t.n(c),s=(t(210),t(17)),r=t(67),v=(t(211),t(3));function u(){var e=Object(d.useState)(!1),a=Object(s.a)(e,2),t=a[0],n=a[1];return Object(d.useEffect)((function(){"dark"===localStorage.getItem("Theme")&&n(!0)}),[]),Object(d.useEffect)((function(){t?(localStorage.setItem("Theme","dark"),document.body.classList.add("dark-mode")):(localStorage.setItem("Theme","light"),document.body.classList.remove("dark-mode"))}),[t]),Object(v.jsxs)("div",{className:"cv-theme-container",children:[Object(v.jsxs)("div",{className:"cv-theme-icons",children:[!t&&Object(v.jsx)(r.b,{}),t&&Object(v.jsx)(r.c,{})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",checked:t,onChange:function(){return n(!t)}}),Object(v.jsx)("span",{className:"slider round"})]})})]})}t(213);var m=function(){return Object(v.jsxs)("div",{className:"cv-toolbar",children:[Object(v.jsx)("h2",{className:"cv-brand",children:"Covid-19 India"}),Object(v.jsx)("span",{className:"cv-switch",children:Object(v.jsx)(u,{})})]})};t(214);var j=t(70),h=t(179),b=(t(215),function(e){var a=e.onStateChange,t=e.data,d=e.isLoading,l=e.placeholder,i=n.a.useState("TT"),c=Object(s.a)(i,2),o=c[0],r=c[1],u={option:function(e,a){return Object(j.a)(Object(j.a)({},e),{},{borderBottom:"1px dotted pink",color:a.isSelected?"red":"blue"})},singleValue:function(e,a){var t=a.isDisabled?.5:1;return Object(j.a)(Object(j.a)({},e),{},{opacity:t,transition:"opacity 300ms"})}};return Object(v.jsx)("div",{className:"select",children:Object(v.jsx)(h.a,{value:o,onChange:function(e){r(e),a(e)},options:t,placeholder:"Select "+l,isLoading:d,styles:u})})}),f=[{key:"TT",name:"India"},{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CT",name:"Chhattisgarh"},{key:"CH",name:"Chandigarh"},{key:"DL",name:"Delhi"},{key:"DN",name:"Dadra and Diu"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladhak"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}],O=(t(232),function(e){return Object(v.jsx)("div",{className:"cv-card ",children:e.children})}),k=(t(233),function(e){var a=e.theaders,t=e.tbody,d=e.formatter;return Object(v.jsx)(O,{children:Object(v.jsx)("div",{className:"cv-table",children:Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsx)("tr",{children:a.map((function(e,a){return Object(v.jsx)("th",{children:e},a)}))})}),Object(v.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,a){return Object(v.jsx)("tr",{children:y(e).map((function(e){return Object(v.jsx)("td",{children:e.toLocaleString(d)})}))},a)}))})]})})})}),y=function(e){var a=[];return Object.keys(e).forEach((function(t){a.push(e[t])})),a},x=t(371),p=t(377),g=t(181),N=t(71),C=function(e){var a=e.chart;return Object(v.jsx)(x.a,{children:Object(v.jsxs)(p.a,{data:null===a||void 0===a?void 0:a.data,children:[Object(v.jsx)(g.a,{dot:!1,type:"basis",dataKey:null===a||void 0===a?void 0:a.name,stroke:null===a||void 0===a?void 0:a.strokeColor,strokeWidth:3}),Object(v.jsx)(N.a,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return""}})]})})},S=(t(368),function(e){var a,t,d=e.card,n=e.chart;return Object(v.jsx)(O,{children:Object(v.jsxs)("div",{className:"cv-stats-card "+d.cardClass,children:[Object(v.jsx)("p",{className:"cv-label",children:null===d||void 0===d?void 0:d.label}),Object(v.jsxs)("div",{className:"cv-count-container",children:[Object(v.jsx)("p",{className:"cv-count",children:null===d||void 0===d||null===(a=d.value)||void 0===a?void 0:a.toLocaleString("hi")}),(null===d||void 0===d?void 0:d.delta)>0&&Object(v.jsxs)("p",{className:"cv-delta",children:[Object(v.jsx)(r.a,{className:"cv-icon"}),null===d||void 0===d||null===(t=d.delta)||void 0===t?void 0:t.toLocaleString("hi")]})]}),Object(v.jsx)("div",{className:"cv-chart-container",children:Object(v.jsx)(C,{chart:n})})]})})}),T=t(376),A=t(174),F=t(176),L=function(){var e=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],a=["#0088FE","#00C49F","#FFBB28","#FF8042"];return Object(v.jsx)(T.a,{height:200,width:200,children:Object(v.jsx)(A.a,{data:e,innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:e.map((function(e,t){return Object(v.jsx)(F.a,{fill:a[t%a.length]},"cell-".concat(t))}))})})},P=function(){var e=Object(d.useState)(null),a=Object(s.a)(e,2),t=a[0],n=a[1],l=Object(d.useState)(null),i=Object(s.a)(l,2),c=i[0],r=i[1],u=Object(d.useState)({states:[]}),m=Object(s.a)(u,2),j=m[0],h=m[1],O=Object(d.useState)(null),y=Object(s.a)(O,2),x=y[0],p=y[1],g=Object(d.useState)(null),N=Object(s.a)(g,2),C=N[0],T=N[1],A=Object(d.useState)(null),F=Object(s.a)(A,2),P=(F[0],F[1]),D=Object(d.useState)(!0),B=Object(s.a)(D,2),E=B[0],w=B[1],M=Object(d.useState)("TT"),R=Object(s.a)(M,2),G=R[0],I=R[1];Object(d.useEffect)((function(){K()}),[]),Object(d.useEffect)((function(){o.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var a,t,d,l,i,c,o,s,r,v,u,m,j,h,b,f,O,k,y,x,g,N,C,S,T,A,F,L,P,D,B,E,w,M,R,I,K,J,_=e.data;p(_);var H=[{label:"Confirmed",value:null===_||void 0===_||null===(a=_[G])||void 0===a||null===(t=a.total)||void 0===t?void 0:t.confirmed,delta:null===_||void 0===_||null===(d=_[G])||void 0===d||null===(l=d.delta)||void 0===l?void 0:l.confirmed,cardClass:"cv-alert"},{label:"Active",value:(null===_||void 0===_||null===(i=_[G])||void 0===i||null===(c=i.total)||void 0===c?void 0:c.confirmed)-((null===_||void 0===_||null===(o=_[G])||void 0===o||null===(s=o.total)||void 0===s?void 0:s.deceased)+(null===_||void 0===_||null===(r=_[G])||void 0===r||null===(v=r.total)||void 0===v?void 0:v.recovered)),delta:0,cardClass:"cv-primary"},{label:"Recovered",value:null===_||void 0===_||null===(u=_[G])||void 0===u||null===(m=u.total)||void 0===m?void 0:m.recovered,delta:null===_||void 0===_||null===(j=_[G])||void 0===j||null===(h=j.delta)||void 0===h?void 0:h.recovered,cardClass:"cv-success"},{label:"Deceased",value:null===_||void 0===_||null===(b=_[G])||void 0===b||null===(f=b.total)||void 0===f?void 0:f.deceased,delta:null===_||void 0===_||null===(O=_[G])||void 0===O||null===(k=O.delta)||void 0===k?void 0:k.deceased,cardClass:"cv-warning"},{label:"Tested",value:null===_||void 0===_||null===(y=_[G])||void 0===y||null===(x=y.total)||void 0===x?void 0:x.tested,delta:null===_||void 0===_||null===(g=_[G])||void 0===g||null===(N=g.delta7)||void 0===N?void 0:N.tested,cardClass:"cv-info"},{label:"Partially vaccinated",value:null===_||void 0===_||null===(C=_[G])||void 0===C||null===(S=C.total)||void 0===S?void 0:S.vaccinated1,delta:null===_||void 0===_||null===(T=_[G])||void 0===T||null===(A=T.delta7)||void 0===A?void 0:A.vaccinated1,cardClass:"cv-success"},{label:"Fully vaccinated",value:null===_||void 0===_||null===(F=_[G])||void 0===F||null===(L=F.total)||void 0===L?void 0:L.vaccinated2,delta:null===_||void 0===_||null===(P=_[G])||void 0===P||null===(D=P.delta7)||void 0===D?void 0:D.vaccinated2,cardClass:"cv-primary"},{label:"Vaccinated",value:(null===_||void 0===_||null===(B=_[G])||void 0===B||null===(E=B.total)||void 0===E?void 0:E.vaccinated2)+(null===_||void 0===_||null===(w=_[G])||void 0===w||null===(M=w.total)||void 0===M?void 0:M.vaccinated1),delta:(null===_||void 0===_||null===(R=_[G])||void 0===R||null===(I=R.delta7)||void 0===I?void 0:I.vaccinated2)+(null===_||void 0===_||null===(K=_[G])||void 0===K||null===(J=K.delta7)||void 0===J?void 0:J.vaccinated2),cardClass:"cv-info"}];n(H)})),o.a.get("https://data.covid19india.org/v4/min/timeseries.min.json").then((function(e){var a=e.data;P(a);var t=[];Object.keys(a[G].dates).forEach((function(e,d){var n,l,i,c,o,s,r,v,u,m,j,h,b,f,O,k,y,x,p;d%15===0&&t.push({name:e,confirm:(null===(n=a[G].dates[e].delta7)||void 0===n?void 0:n.confirmed)?null===(l=a[G].dates[e].delta7)||void 0===l?void 0:l.confirmed:0,active:J(null===(i=a[G].dates[e].delta7)||void 0===i?void 0:i.confirmed,null===(c=a[G].dates[e].delta7)||void 0===c?void 0:c.recovered,null===(o=a[G].dates[e].delta7)||void 0===o?void 0:o.deceased),recovered:(null===(s=a[G].dates[e].delta7)||void 0===s?void 0:s.recovered)?null===(r=a[G].dates[e].delta7)||void 0===r?void 0:r.recovered:0,deceased:(null===(v=a[G].dates[e].delta7)||void 0===v?void 0:v.deceased)?null===(u=a[G].dates[e].delta7)||void 0===u?void 0:u.deceased:0,tested:(null===(m=a[G].dates[e].delta7)||void 0===m?void 0:m.tested)?null===(j=a[G].dates[e].delta7)||void 0===j?void 0:j.tested:0,dose_1:(null===(h=a[G].dates[e].delta7)||void 0===h?void 0:h.vaccinated1)?null===(b=a[G].dates[e].delta7)||void 0===b?void 0:b.vaccinated1:0,dose_2:(null===(f=a[G].dates[e].delta7)||void 0===f?void 0:f.vaccinated2)?null===(O=a[G].dates[e].delta7)||void 0===O?void 0:O.vaccinated2:0,vaccine:(null===(k=a[G].dates[e].delta7)||void 0===k?void 0:k.vaccinated2)+(null===(y=a[G].dates[e].delta7)||void 0===y?void 0:y.vaccinated1)?(null===(x=a[G].dates[e].delta7)||void 0===x?void 0:x.vaccinated2)+(null===(p=a[G].dates[e].delta7)||void 0===p?void 0:p.vaccinated1):0})}));var d=[{name:"confirmed",data:t.map((function(e){return{name:e.name,confirmed:e.confirm}})),strokeColor:"#F7685B"},{name:"active",data:t.map((function(e){return{name:e.name,active:e.active}})),strokeColor:"#109CF1"},{name:"recovered",data:t.map((function(e){return{name:e.name,recovered:e.recovered}})),strokeColor:"#2ED47A"},{name:"deceased",data:t.map((function(e){return{name:e.name,deceased:e.deceased}})),strokeColor:"#FFB946"},{name:"tested",data:t.map((function(e){return{name:e.name,tested:e.tested}})),strokeColor:"#885AF8"},{name:"dose_1",data:t.map((function(e){return{name:e.name,dose_1:e.dose_1}})),strokeColor:"#2ED47A"},{name:"dose_2",data:t.map((function(e){return{name:e.name,dose_2:e.dose_2}})),strokeColor:"#109CF1"},{name:"vaccine",data:t.map((function(e){return{name:e.name,vaccine:e.vaccine}})),strokeColor:"#885AF8"}];r(d)}))}),[G]);var K=function(){var e=f.map((function(e){return{value:e.key,label:e.name}}));h({states:e}),w(!1)},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-(a+t)};return Object(d.useEffect)((function(){x&&j.states.length>0&&T(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];return Object.keys(a).forEach((function(d,n){var l,i,c,o,s,r,v,u,m,j,h,b,f;"TT"===G?t.push({stateName:null===(l=e.find((function(e){return e.value===d})))||void 0===l?void 0:l.label,confirm:(null===(i=a[d].total)||void 0===i?void 0:i.confirmed)?null===(c=a[d].total)||void 0===c?void 0:c.confirmed:0,active:J(null===(o=a[d].total)||void 0===o?void 0:o.confirmed,null===(s=a[d].total)||void 0===s?void 0:s.recovered,null===(r=a[d].total)||void 0===r?void 0:r.deceased),recovered:(null===(v=a[d].total)||void 0===v?void 0:v.recovered)?null===(u=a[d].total)||void 0===u?void 0:u.recovered:0,deceased:(null===(m=a[d].total)||void 0===m?void 0:m.deceased)?null===(j=a[d].total)||void 0===j?void 0:j.deceased:0,tested:(null===(h=a[d].total)||void 0===h?void 0:h.tested)?null===(b=a[d].total)||void 0===b?void 0:b.tested:0}):d===G&&Object.keys(null===(f=a[d])||void 0===f?void 0:f.districts).forEach((function(e,n){var l,i,c,o,s,r,v,u,m,j,h;t.push({districtName:e,confirm:(null===(l=a[d].districts[e].total)||void 0===l?void 0:l.confirmed)?null===(i=a[d].districts[e].total)||void 0===i?void 0:i.confirmed:0,active:J(null===(c=a[d].districts[e].total)||void 0===c?void 0:c.confirmed,null===(o=a[d].districts[e].total)||void 0===o?void 0:o.recovered,null===(s=a[d].districts[e].total)||void 0===s?void 0:s.deceased),recovered:(null===(r=a[d].districts[e].total)||void 0===r?void 0:r.recovered)?null===(v=a[d].districts[e].total)||void 0===v?void 0:v.recovered:0,deceased:(null===(u=a[d].districts[e].total)||void 0===u?void 0:u.deceased)?null===(m=a[d].districts[e].total)||void 0===m?void 0:m.deceased:0,tested:(null===(j=a[d].districts[e].total)||void 0===j?void 0:j.tested)?null===(h=a[d].districts[e].total)||void 0===h?void 0:h.tested:0})}))})),t}(j.states,x))}),[G,x]),Object(v.jsxs)("div",{className:"cv-home",children:[Object(v.jsx)(b,{placeholder:"State",data:j.states,onStateChange:function(e){I(e.value)},isLoading:E}),Object(v.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a<4?Object(v.jsx)("div",{className:"cv-stats-card",children:Object(v.jsx)(S,{card:t?t[a]:null,chart:c?c[a]:null},a)}):null})):null}),Object(v.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a>3?Object(v.jsx)("div",{className:"cv-stats-card",children:Object(v.jsx)(S,{card:t?t[a]:null,chart:c?c[a]:null},a)}):null})):null}),Object(v.jsx)("div",{className:"cv-row",children:[1,2,3,4].map((function(e,a){return Object(v.jsx)("div",{className:"cv-pie-chart-container",children:Object(v.jsx)(L,{className:"pie-card"})})}))}),x&&Object(v.jsx)("div",{className:"cv-stats-table",children:Object(v.jsx)(k,{theaders:["TT"===G?"State":"District","Confirmed","Active","Recovered","Deseased","Tested"],tbody:C,formatter:"hi"})})]})};var D=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(m,{}),Object(v.jsx)(P,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,378)).then((function(a){var t=a.getCLS,d=a.getFID,n=a.getFCP,l=a.getLCP,i=a.getTTFB;t(e),d(e),n(e),l(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),B()}},[[370,1,2]]]);
//# sourceMappingURL=main.1832b8ea.chunk.js.map
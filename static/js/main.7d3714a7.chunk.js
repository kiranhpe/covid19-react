(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{182:function(e,t,a){},201:function(e,t,a){},202:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),d=a.n(n),i=a(36),o=a.n(i),l=(a(182),a(78)),c=a.n(l),r=(a(201),a(15)),s=a(65),v=(a(202),a(3));function u(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],d=t[1];return Object(n.useEffect)((function(){"dark"===localStorage.getItem("Theme")&&d(!0)}),[]),Object(n.useEffect)((function(){a?(localStorage.setItem("Theme","dark"),document.body.classList.add("dark-mode")):(localStorage.setItem("Theme","light"),document.body.classList.remove("dark-mode"))}),[a]),Object(v.jsxs)("div",{className:"cv-theme-container",children:[Object(v.jsxs)("div",{className:"cv-theme-icons",children:[!a&&Object(v.jsx)(s.b,{}),a&&Object(v.jsx)(s.c,{})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return d(!a)}}),Object(v.jsx)("span",{className:"slider round"})]})})]})}a(204);var m=function(){return Object(v.jsxs)("div",{className:"cv-toolbar",children:[Object(v.jsx)("h2",{className:"cv-brand",children:"Covid-19 India"}),Object(v.jsx)("span",{className:"cv-switch",children:Object(v.jsx)(u,{})})]})},j=(a(205),a(364)),h=a(369),b=a(170),f=a(173),O=a(69),k=function(e){var t=e.chart;return Object(v.jsx)(j.a,{children:Object(v.jsxs)(h.a,{data:null===t||void 0===t?void 0:t.data,children:[Object(v.jsx)(b.a,{dataKey:null===t||void 0===t?void 0:t.name,tick:!1,axisLine:!1}),Object(v.jsx)(f.a,{dot:!1,type:"basis",dataKey:null===t||void 0===t?void 0:t.name,stroke:null===t||void 0===t?void 0:t.strokeColor,strokeWidth:3}),Object(v.jsx)(O.a,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return""}})]})})},y=(a(343),function(e){var t,a,n=e.card,d=e.chart;return Object(v.jsxs)("div",{className:"cv-card "+n.cardClass,children:[Object(v.jsx)("p",{className:"cv-label",children:null===n||void 0===n?void 0:n.label}),Object(v.jsxs)("div",{className:"cv-count-container",children:[Object(v.jsx)("p",{className:"cv-count",children:null===n||void 0===n||null===(t=n.value)||void 0===t?void 0:t.toLocaleString("hi")}),0!==(null===n||void 0===n?void 0:n.delta)&&Object(v.jsxs)("p",{className:"cv-delta",children:[Object(v.jsx)(s.a,{className:"cv-icon"}),null===n||void 0===n||null===(a=n.delta)||void 0===a?void 0:a.toLocaleString("hi")]})]}),Object(v.jsx)("div",{className:"cv-chart-container",children:Object(v.jsx)(k,{chart:d})})]})});var x=a(68),p=a(171),g=(a(344),function(e){var t=e.onStateChange,a=e.data,n=e.isLoading,i=e.placeholder,o=d.a.useState("TT"),l=Object(r.a)(o,2),c=l[0],s=l[1],u={option:function(e,t){return Object(x.a)(Object(x.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"red":"blue"})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(x.a)(Object(x.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}};return Object(v.jsx)("div",{className:"select",children:Object(v.jsx)(p.a,{value:c,onChange:function(e){s(e),t(e)},options:a,placeholder:"Select "+i,isLoading:n,styles:u})})}),N=[{key:"TT",name:"India"},{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CT",name:"Chhattisgarh"},{key:"CH",name:"Chandigarh"},{key:"DL",name:"Delhi"},{key:"DN",name:"Dadra and Diu"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladhak"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}],C=(a(361),function(e){var t=e.theaders,a=e.tbody,n=e.formatter;return Object(v.jsx)("div",{className:"cv-table",children:Object(v.jsxs)("table",{children:[Object(v.jsx)("thead",{children:Object(v.jsx)("tr",{children:t.map((function(e,t){return Object(v.jsx)("th",{children:e},t)}))})}),Object(v.jsx)("tbody",{children:null===a||void 0===a?void 0:a.map((function(e,t){return Object(v.jsx)("tr",{children:S(e).map((function(e){return Object(v.jsx)("td",{children:e.toLocaleString(n)})}))},t)}))})]})})}),S=function(e){var t=[];return Object.keys(e).forEach((function(a){t.push(e[a])})),t},T=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],d=t[1],i=Object(n.useState)(null),o=Object(r.a)(i,2),l=o[0],s=o[1],u=Object(n.useState)({states:[]}),m=Object(r.a)(u,2),j=m[0],h=m[1],b=Object(n.useState)(null),f=Object(r.a)(b,2),O=f[0],k=f[1],x=Object(n.useState)(null),p=Object(r.a)(x,2),S=p[0],T=p[1],L=Object(n.useState)(null),A=Object(r.a)(L,2),P=(A[0],A[1]),D=Object(n.useState)(!0),E=Object(r.a)(D,2),F=E[0],M=E[1],B=Object(n.useState)("TT"),I=Object(r.a)(B,2),K=I[0],R=I[1];Object(n.useEffect)((function(){w()}),[]),Object(n.useEffect)((function(){c.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var t,a,n,i,o,l,c,r,s,v,u,m,j,h,b,f,O,y,x,p,g,N,C=e.data;k(C);var S=[{label:"Confirmed",value:null===C||void 0===C||null===(t=C[K])||void 0===t||null===(a=t.total)||void 0===a?void 0:a.confirmed,delta:null===C||void 0===C||null===(n=C[K])||void 0===n||null===(i=n.delta)||void 0===i?void 0:i.confirmed,cardClass:"cv-alert"},{label:"Active",value:(null===C||void 0===C||null===(o=C[K])||void 0===o||null===(l=o.total)||void 0===l?void 0:l.confirmed)-((null===C||void 0===C||null===(c=C[K])||void 0===c||null===(r=c.total)||void 0===r?void 0:r.deceased)+(null===C||void 0===C||null===(s=C[K])||void 0===s||null===(v=s.total)||void 0===v?void 0:v.recovered)),delta:0,cardClass:"cv-primary"},{label:"Recovered",value:null===C||void 0===C||null===(u=C[K])||void 0===u||null===(m=u.total)||void 0===m?void 0:m.recovered,delta:null===C||void 0===C||null===(j=C[K])||void 0===j||null===(h=j.delta)||void 0===h?void 0:h.recovered,cardClass:"cv-success"},{label:"Deceased",value:null===C||void 0===C||null===(b=C[K])||void 0===b||null===(f=b.total)||void 0===f?void 0:f.deceased,delta:null===C||void 0===C||null===(O=C[K])||void 0===O||null===(y=O.delta)||void 0===y?void 0:y.deceased,cardClass:"cv-warning"},{label:"Tested",value:null===C||void 0===C||null===(x=C[K])||void 0===x||null===(p=x.total)||void 0===p?void 0:p.tested,delta:null===C||void 0===C||null===(g=C[K])||void 0===g||null===(N=g.delta7)||void 0===N?void 0:N.tested,cardClass:"cv-info"}];d(S)})),c.a.get("https://data.covid19india.org/v4/min/timeseries.min.json").then((function(e){var t=e.data;P(t);var a=[];Object.keys(t[K].dates).forEach((function(e,n){var d,i,o,l,c,r,s,v,u,m,j;n%15===0&&a.push({name:e,confirm:(null===(d=t[K].dates[e].delta7)||void 0===d?void 0:d.confirmed)?null===(i=t[K].dates[e].delta7)||void 0===i?void 0:i.confirmed:0,active:J(null===(o=t[K].dates[e].delta7)||void 0===o?void 0:o.confirmed,null===(l=t[K].dates[e].delta7)||void 0===l?void 0:l.recovered,null===(c=t[K].dates[e].delta7)||void 0===c?void 0:c.deceased),recovered:(null===(r=t[K].dates[e].delta7)||void 0===r?void 0:r.recovered)?null===(s=t[K].dates[e].delta7)||void 0===s?void 0:s.recovered:0,deceased:(null===(v=t[K].dates[e].delta7)||void 0===v?void 0:v.deceased)?null===(u=t[K].dates[e].delta7)||void 0===u?void 0:u.deceased:0,tested:(null===(m=t[K].dates[e].delta7)||void 0===m?void 0:m.tested)?null===(j=t[K].dates[e].delta7)||void 0===j?void 0:j.tested:0})}));var n=[{name:"confirmed",data:a.map((function(e){return{name:e.name,confirmed:e.confirm}})),strokeColor:"#F7685B"},{name:"active",data:a.map((function(e){return{name:e.name,active:e.active}})),strokeColor:"#109CF1"},{name:"recovered",data:a.map((function(e){return{name:e.name,recovered:e.recovered}})),strokeColor:"#2ED47A"},{name:"deceased",data:a.map((function(e){return{name:e.name,deceased:e.deceased}})),strokeColor:"#FFB946"},{name:"tested",data:a.map((function(e){return{name:e.name,tested:e.tested}})),strokeColor:"#885AF8"}];s(n)}))}),[K]);var w=function(){var e=N.map((function(e){return{value:e.key,label:e.name}}));h({states:e}),M(!1)},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-(t+a)};return Object(n.useEffect)((function(){O&&j.states.length>0&&T(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[];return Object.keys(t).forEach((function(n,d){var i,o,l,c,r,s,v,u,m,j,h,b,f;"TT"===K?a.push({stateName:null===(i=e.find((function(e){return e.value===n})))||void 0===i?void 0:i.label,confirm:(null===(o=t[n].total)||void 0===o?void 0:o.confirmed)?null===(l=t[n].total)||void 0===l?void 0:l.confirmed:0,active:J(null===(c=t[n].total)||void 0===c?void 0:c.confirmed,null===(r=t[n].total)||void 0===r?void 0:r.recovered,null===(s=t[n].total)||void 0===s?void 0:s.deceased),recovered:(null===(v=t[n].total)||void 0===v?void 0:v.recovered)?null===(u=t[n].total)||void 0===u?void 0:u.recovered:0,deceased:(null===(m=t[n].total)||void 0===m?void 0:m.deceased)?null===(j=t[n].total)||void 0===j?void 0:j.deceased:0,tested:(null===(h=t[n].total)||void 0===h?void 0:h.tested)?null===(b=t[n].total)||void 0===b?void 0:b.tested:0}):n===K&&Object.keys(null===(f=t[n])||void 0===f?void 0:f.districts).forEach((function(e,d){var i,o,l,c,r,s,v,u,m,j,h;a.push({districtName:e,confirm:(null===(i=t[n].districts[e].total)||void 0===i?void 0:i.confirmed)?null===(o=t[n].districts[e].total)||void 0===o?void 0:o.confirmed:0,active:J(null===(l=t[n].districts[e].total)||void 0===l?void 0:l.confirmed,null===(c=t[n].districts[e].total)||void 0===c?void 0:c.recovered,null===(r=t[n].districts[e].total)||void 0===r?void 0:r.deceased),recovered:(null===(s=t[n].districts[e].total)||void 0===s?void 0:s.recovered)?null===(v=t[n].districts[e].total)||void 0===v?void 0:v.recovered:0,deceased:(null===(u=t[n].districts[e].total)||void 0===u?void 0:u.deceased)?null===(m=t[n].districts[e].total)||void 0===m?void 0:m.deceased:0,tested:(null===(j=t[n].districts[e].total)||void 0===j?void 0:j.tested)?null===(h=t[n].districts[e].total)||void 0===h?void 0:h.tested:0})}))})),a}(j.states,O))}),[K,O]),Object(v.jsxs)("div",{className:"cv-home",children:[Object(v.jsx)(g,{placeholder:"State",data:j.states,onStateChange:function(e){R(e.value)},isLoading:F}),Object(v.jsx)("div",{className:"cv-row",children:a?a.map((function(e,t){return Object(v.jsx)(y,{card:a?a[t]:null,chart:l?l[t]:null},t)})):null}),O&&Object(v.jsx)(C,{theaders:["TT"===K?"State":"District","Confirmed","Active","Recovered","Deseased","Tested"],tbody:S,formatter:"hi"})]})};var L=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(m,{}),Object(v.jsx)(T,{})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,370)).then((function(t){var a=t.getCLS,n=t.getFID,d=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),d(e),i(e),o(e)}))};o.a.render(Object(v.jsx)(d.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),A()}},[[362,1,2]]]);
//# sourceMappingURL=main.7d3714a7.chunk.js.map
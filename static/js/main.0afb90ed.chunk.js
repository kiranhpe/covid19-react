(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[0],{191:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},213:function(e,a,t){},214:function(e,a,t){},215:function(e,a,t){},232:function(e,a,t){},233:function(e,a,t){},368:function(e,a,t){},370:function(e,a,t){"use strict";t.r(a);var d=t(0),l=t.n(d),n=t(38),i=t.n(n),o=(t(191),t(81)),c=t.n(o),v=(t(210),t(15)),s=t(67),r=(t(211),t(3));function u(){var e=Object(d.useState)(!1),a=Object(v.a)(e,2),t=a[0],l=a[1];return Object(d.useEffect)((function(){"dark"===localStorage.getItem("Theme")&&l(!0)}),[]),Object(d.useEffect)((function(){t?(localStorage.setItem("Theme","dark"),document.body.classList.add("dark-mode")):(localStorage.setItem("Theme","light"),document.body.classList.remove("dark-mode"))}),[t]),Object(r.jsxs)("div",{className:"cv-theme-container",children:[Object(r.jsxs)("div",{className:"cv-theme-icons",children:[!t&&Object(r.jsx)(s.b,{}),t&&Object(r.jsx)(s.c,{})]}),Object(r.jsx)("div",{children:Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",checked:t,onChange:function(){return l(!t)}}),Object(r.jsx)("span",{className:"slider round"})]})})]})}t(213);var m=function(){return Object(r.jsxs)("div",{className:"cv-toolbar",children:[Object(r.jsx)("h2",{className:"cv-brand",children:"Covid-19 India"}),Object(r.jsx)("span",{className:"cv-switch",children:Object(r.jsx)(u,{})})]})};t(214);var j=t(70),h=t(179),b=(t(215),function(e){var a=e.onStateChange,t=e.data,d=e.isLoading,n=e.placeholder,i=l.a.useState("TT"),o=Object(v.a)(i,2),c=o[0],s=o[1],u={option:function(e,a){return Object(j.a)(Object(j.a)({},e),{},{borderBottom:"1px dotted pink",color:a.isSelected?"red":"blue"})},singleValue:function(e,a){var t=a.isDisabled?.5:1;return Object(j.a)(Object(j.a)({},e),{},{opacity:t,transition:"opacity 300ms"})}};return Object(r.jsx)("div",{className:"select",children:Object(r.jsx)(h.a,{value:c,onChange:function(e){s(e),a(e)},options:t,placeholder:"Select "+n,isLoading:d,styles:u})})}),f=[{key:"TT",name:"India"},{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CT",name:"Chhattisgarh"},{key:"CH",name:"Chandigarh"},{key:"DL",name:"Delhi"},{key:"DN",name:"Dadra and Diu"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladhak"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}],O=(t(232),function(e){return Object(r.jsx)("div",{className:"cv-card ",children:e.children})}),k=(t(233),function(e){var a=e.theaders,t=e.tbody,d=e.formatter;return Object(r.jsx)(O,{children:Object(r.jsx)("div",{className:"cv-table",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:a.map((function(e,a){return Object(r.jsx)("th",{children:e},a)}))})}),Object(r.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,a){return Object(r.jsx)("tr",{children:y(e).map((function(e){return Object(r.jsx)("td",{children:e.toLocaleString(d)})}))},a)}))})]})})})}),y=function(e){var a=[];return Object.keys(e).forEach((function(t){a.push(e[t])})),a},x=t(371),p=t(377),g=t(181),N=t(71),C=function(e){var a=e.chart;return Object(r.jsx)(x.a,{children:Object(r.jsxs)(p.a,{data:null===a||void 0===a?void 0:a.data,children:[Object(r.jsx)(g.a,{dot:!1,type:"basis",dataKey:null===a||void 0===a?void 0:a.name,stroke:null===a||void 0===a?void 0:a.strokeColor,strokeWidth:3}),Object(r.jsx)(N.a,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return""}})]})})},S=(t(368),function(e){var a,t,d=e.card,l=e.chart;return Object(r.jsx)(O,{children:Object(r.jsxs)("div",{className:"cv-stats-card "+d.cardClass,children:[Object(r.jsx)("p",{className:"cv-label",children:null===d||void 0===d?void 0:d.label}),Object(r.jsxs)("div",{className:"cv-count-container",children:[Object(r.jsx)("p",{className:"cv-count",children:null===d||void 0===d||null===(a=d.value)||void 0===a?void 0:a.toLocaleString("hi")}),(null===d||void 0===d?void 0:d.delta)>0&&Object(r.jsxs)("p",{className:"cv-delta",children:[Object(r.jsx)(s.a,{className:"cv-icon"}),null===d||void 0===d||null===(t=d.delta)||void 0===t?void 0:t.toLocaleString("hi")]})]}),Object(r.jsx)("div",{className:"cv-chart-container",children:Object(r.jsx)(C,{chart:l})})]})})}),T=t(376),A=t(174),F=t(176),D=t(66),L=function(e){var a=e.pieData,t=["#0088FE","#00C49F","#FFBB28","#FF8042"];return Object(r.jsxs)(T.a,{height:300,width:400,children:[Object(r.jsx)(A.a,{data:a,innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",children:a.map((function(e,a){return Object(r.jsx)(F.a,{fill:t[a%t.length]},"cell-".concat(a))}))}),Object(r.jsx)(D.a,{iconType:"circle",fontSize:4})]})},P=function(){var e=Object(d.useState)(null),a=Object(v.a)(e,2),t=a[0],l=a[1],n=Object(d.useState)(null),i=Object(v.a)(n,2),o=i[0],s=i[1],u=Object(d.useState)(null),m=Object(v.a)(u,2),j=m[0],h=m[1],O=Object(d.useState)({states:[]}),y=Object(v.a)(O,2),x=y[0],p=y[1],g=Object(d.useState)(null),N=Object(v.a)(g,2),C=N[0],T=N[1],A=Object(d.useState)(null),F=Object(v.a)(A,2),D=F[0],P=F[1],E=Object(d.useState)(null),B=Object(v.a)(E,2),R=(B[0],B[1]),w=Object(d.useState)(!0),M=Object(v.a)(w,2),I=M[0],K=M[1],J=Object(d.useState)("TT"),_=Object(v.a)(J,2),H=_[0],G=_[1];Object(d.useEffect)((function(){U()}),[]),Object(d.useEffect)((function(){c.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var a,t,d,n,i,o,c,v,s,r,u,m,j,b,f,O,k,y,x,p,g,N,C,S,A,F,D,L,P,E,B,R,w,M,I,K,J,_,G,U,W,z,V,Y,Z,q,Q,X,$,ee,ae,te,de,le,ne=e.data;T(ne);var ie=[{label:"Confirmed",value:null===ne||void 0===ne||null===(a=ne[H])||void 0===a||null===(t=a.total)||void 0===t?void 0:t.confirmed,delta:null===ne||void 0===ne||null===(d=ne[H])||void 0===d||null===(n=d.delta)||void 0===n?void 0:n.confirmed,cardClass:"cv-alert"},{label:"Active",value:(null===ne||void 0===ne||null===(i=ne[H])||void 0===i||null===(o=i.total)||void 0===o?void 0:o.confirmed)-((null===ne||void 0===ne||null===(c=ne[H])||void 0===c||null===(v=c.total)||void 0===v?void 0:v.deceased)+(null===ne||void 0===ne||null===(s=ne[H])||void 0===s||null===(r=s.total)||void 0===r?void 0:r.recovered)),delta:0,cardClass:"cv-primary"},{label:"Recovered",value:null===ne||void 0===ne||null===(u=ne[H])||void 0===u||null===(m=u.total)||void 0===m?void 0:m.recovered,delta:null===ne||void 0===ne||null===(j=ne[H])||void 0===j||null===(b=j.delta)||void 0===b?void 0:b.recovered,cardClass:"cv-success"},{label:"Deceased",value:null===ne||void 0===ne||null===(f=ne[H])||void 0===f||null===(O=f.total)||void 0===O?void 0:O.deceased,delta:null===ne||void 0===ne||null===(k=ne[H])||void 0===k||null===(y=k.delta)||void 0===y?void 0:y.deceased,cardClass:"cv-warning"},{label:"Tested",value:null===ne||void 0===ne||null===(x=ne[H])||void 0===x||null===(p=x.total)||void 0===p?void 0:p.tested,delta:null===ne||void 0===ne||null===(g=ne[H])||void 0===g||null===(N=g.delta7)||void 0===N?void 0:N.tested,cardClass:"cv-info"},{label:"Partially vaccinated",value:null===ne||void 0===ne||null===(C=ne[H])||void 0===C||null===(S=C.total)||void 0===S?void 0:S.vaccinated1,delta:null===ne||void 0===ne||null===(A=ne[H])||void 0===A||null===(F=A.delta7)||void 0===F?void 0:F.vaccinated1,cardClass:"cv-success"},{label:"Fully vaccinated",value:null===ne||void 0===ne||null===(D=ne[H])||void 0===D||null===(L=D.total)||void 0===L?void 0:L.vaccinated2,delta:null===ne||void 0===ne||null===(P=ne[H])||void 0===P||null===(E=P.delta7)||void 0===E?void 0:E.vaccinated2,cardClass:"cv-primary"},{label:"Vaccinated",value:(null===ne||void 0===ne||null===(B=ne[H])||void 0===B||null===(R=B.total)||void 0===R?void 0:R.vaccinated2)+(null===ne||void 0===ne||null===(w=ne[H])||void 0===w||null===(M=w.total)||void 0===M?void 0:M.vaccinated1),delta:(null===ne||void 0===ne||null===(I=ne[H])||void 0===I||null===(K=I.delta7)||void 0===K?void 0:K.vaccinated2)+(null===ne||void 0===ne||null===(J=ne[H])||void 0===J||null===(_=J.delta7)||void 0===_?void 0:_.vaccinated2),cardClass:"cv-info"}],oe=[];oe.push([{name:"Confirmed",value:null===ne||void 0===ne||null===(G=ne[H])||void 0===G||null===(U=G.total)||void 0===U?void 0:U.confirmed},{name:"Active",value:(null===ne||void 0===ne||null===(W=ne[H])||void 0===W||null===(z=W.total)||void 0===z?void 0:z.confirmed)-((null===ne||void 0===ne||null===(V=ne[H])||void 0===V||null===(Y=V.total)||void 0===Y?void 0:Y.deceased)+(null===ne||void 0===ne||null===(Z=ne[H])||void 0===Z||null===(q=Z.total)||void 0===q?void 0:q.recovered))},{name:"Recovered",value:null===ne||void 0===ne||null===(Q=ne[H])||void 0===Q||null===(X=Q.total)||void 0===X?void 0:X.recovered},{name:"Deceased",value:null===ne||void 0===ne||null===($=ne[H])||void 0===$||null===(ee=$.total)||void 0===ee?void 0:ee.deceased}]),oe.push([{name:"Dose1",value:null===ne||void 0===ne||null===(ae=ne[H])||void 0===ae||null===(te=ae.total)||void 0===te?void 0:te.vaccinated1},{name:"Dose2",value:null===ne||void 0===ne||null===(de=ne[H])||void 0===de||null===(le=de.delta7)||void 0===le?void 0:le.vaccinated2}]),h(oe),l(ie)})),c.a.get("https://data.covid19india.org/v4/min/timeseries.min.json").then((function(e){var a=e.data;R(a);var t=[];Object.keys(a[H].dates).forEach((function(e,d){var l,n,i,o,c,v,s,r,u,m,j,h,b,f,O,k,y,x,p;d%15===0&&t.push({name:e,confirm:(null===(l=a[H].dates[e].delta7)||void 0===l?void 0:l.confirmed)?null===(n=a[H].dates[e].delta7)||void 0===n?void 0:n.confirmed:0,active:W(null===(i=a[H].dates[e].delta7)||void 0===i?void 0:i.confirmed,null===(o=a[H].dates[e].delta7)||void 0===o?void 0:o.recovered,null===(c=a[H].dates[e].delta7)||void 0===c?void 0:c.deceased),recovered:(null===(v=a[H].dates[e].delta7)||void 0===v?void 0:v.recovered)?null===(s=a[H].dates[e].delta7)||void 0===s?void 0:s.recovered:0,deceased:(null===(r=a[H].dates[e].delta7)||void 0===r?void 0:r.deceased)?null===(u=a[H].dates[e].delta7)||void 0===u?void 0:u.deceased:0,tested:(null===(m=a[H].dates[e].delta7)||void 0===m?void 0:m.tested)?null===(j=a[H].dates[e].delta7)||void 0===j?void 0:j.tested:0,dose_1:(null===(h=a[H].dates[e].delta7)||void 0===h?void 0:h.vaccinated1)?null===(b=a[H].dates[e].delta7)||void 0===b?void 0:b.vaccinated1:0,dose_2:(null===(f=a[H].dates[e].delta7)||void 0===f?void 0:f.vaccinated2)?null===(O=a[H].dates[e].delta7)||void 0===O?void 0:O.vaccinated2:0,vaccine:(null===(k=a[H].dates[e].delta7)||void 0===k?void 0:k.vaccinated2)+(null===(y=a[H].dates[e].delta7)||void 0===y?void 0:y.vaccinated1)?(null===(x=a[H].dates[e].delta7)||void 0===x?void 0:x.vaccinated2)+(null===(p=a[H].dates[e].delta7)||void 0===p?void 0:p.vaccinated1):0})}));var d=[{name:"confirmed",data:t.map((function(e){return{name:e.name,confirmed:e.confirm}})),strokeColor:"#F7685B"},{name:"active",data:t.map((function(e){return{name:e.name,active:e.active}})),strokeColor:"#109CF1"},{name:"recovered",data:t.map((function(e){return{name:e.name,recovered:e.recovered}})),strokeColor:"#2ED47A"},{name:"deceased",data:t.map((function(e){return{name:e.name,deceased:e.deceased}})),strokeColor:"#FFB946"},{name:"tested",data:t.map((function(e){return{name:e.name,tested:e.tested}})),strokeColor:"#885AF8"},{name:"dose_1",data:t.map((function(e){return{name:e.name,dose_1:e.dose_1}})),strokeColor:"#2ED47A"},{name:"dose_2",data:t.map((function(e){return{name:e.name,dose_2:e.dose_2}})),strokeColor:"#109CF1"},{name:"vaccine",data:t.map((function(e){return{name:e.name,vaccine:e.vaccine}})),strokeColor:"#885AF8"}];s(d)}))}),[H]);var U=function(){var e=f.map((function(e){return{value:e.key,label:e.name}}));p({states:e}),K(!1)},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-(a+t)};return Object(d.useEffect)((function(){C&&x.states.length>0&&P(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];return Object.keys(a).forEach((function(d,l){var n,i,o,c,v,s,r,u,m,j,h,b,f;"TT"===H?t.push({stateName:null===(n=e.find((function(e){return e.value===d})))||void 0===n?void 0:n.label,confirm:(null===(i=a[d].total)||void 0===i?void 0:i.confirmed)?null===(o=a[d].total)||void 0===o?void 0:o.confirmed:0,active:W(null===(c=a[d].total)||void 0===c?void 0:c.confirmed,null===(v=a[d].total)||void 0===v?void 0:v.recovered,null===(s=a[d].total)||void 0===s?void 0:s.deceased),recovered:(null===(r=a[d].total)||void 0===r?void 0:r.recovered)?null===(u=a[d].total)||void 0===u?void 0:u.recovered:0,deceased:(null===(m=a[d].total)||void 0===m?void 0:m.deceased)?null===(j=a[d].total)||void 0===j?void 0:j.deceased:0,tested:(null===(h=a[d].total)||void 0===h?void 0:h.tested)?null===(b=a[d].total)||void 0===b?void 0:b.tested:0}):d===H&&Object.keys(null===(f=a[d])||void 0===f?void 0:f.districts).forEach((function(e,l){var n,i,o,c,v,s,r,u,m,j,h;t.push({districtName:e,confirm:(null===(n=a[d].districts[e].total)||void 0===n?void 0:n.confirmed)?null===(i=a[d].districts[e].total)||void 0===i?void 0:i.confirmed:0,active:W(null===(o=a[d].districts[e].total)||void 0===o?void 0:o.confirmed,null===(c=a[d].districts[e].total)||void 0===c?void 0:c.recovered,null===(v=a[d].districts[e].total)||void 0===v?void 0:v.deceased),recovered:(null===(s=a[d].districts[e].total)||void 0===s?void 0:s.recovered)?null===(r=a[d].districts[e].total)||void 0===r?void 0:r.recovered:0,deceased:(null===(u=a[d].districts[e].total)||void 0===u?void 0:u.deceased)?null===(m=a[d].districts[e].total)||void 0===m?void 0:m.deceased:0,tested:(null===(j=a[d].districts[e].total)||void 0===j?void 0:j.tested)?null===(h=a[d].districts[e].total)||void 0===h?void 0:h.tested:0})}))})),t}(x.states,C))}),[H,C]),Object(r.jsxs)("div",{className:"cv-home",children:[Object(r.jsx)(b,{placeholder:"State",data:x.states,onStateChange:function(e){G(e.value)},isLoading:I}),Object(r.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a<4?Object(r.jsx)("div",{className:"cv-stats-card",children:Object(r.jsx)(S,{card:t?t[a]:null,chart:o?o[a]:null},a)}):null})):null}),Object(r.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a>3?Object(r.jsx)("div",{className:"cv-stats-card",children:Object(r.jsx)(S,{card:t?t[a]:null,chart:o?o[a]:null},a)}):null})):null}),Object(r.jsx)("div",{className:"cv-row",children:j&&j.map((function(e,a){return Object(r.jsx)("div",{className:"cv-pie-chart-container",children:Object(r.jsx)(L,{pieData:e,className:"pie-card"})})}))}),C&&Object(r.jsx)("div",{className:"cv-stats-table",children:Object(r.jsx)(k,{theaders:["TT"===H?"State":"District","Confirmed","Active","Recovered","Deseased","Tested"],tbody:D,formatter:"hi"})})]})};var E=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(m,{}),Object(r.jsx)(P,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,378)).then((function(a){var t=a.getCLS,d=a.getFID,l=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),d(e),l(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),B()}},[[370,1,2]]]);
//# sourceMappingURL=main.0afb90ed.chunk.js.map
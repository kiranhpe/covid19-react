(this["webpackJsonpcovid19-react"]=this["webpackJsonpcovid19-react"]||[]).push([[5],{112:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));t(0);var d=t(402),l=t(367),n=t(184),i=t(191),o=(t(113),t(1)),c=function(e){var a=e.pieData,t=e.title,c=["#109CF1","#2ED47A","#885AF8","#F7685B"];return Object(o.jsxs)("div",{className:"cv-pie-container",children:[Object(o.jsx)("b",{children:t}),Object(o.jsxs)(d.a,{height:250,width:350,children:[Object(o.jsx)(l.a,{data:a,innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:0,dataKey:"value",children:a.map((function(e,a){return Object(o.jsx)(n.a,{fill:c[a%c.length]},"cell-".concat(a))}))}),Object(o.jsx)(i.a,{iconType:"circle",fontSize:4})]})]})}},113:function(e,a,t){},114:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var d=t(192),l=t(15),n=t(0),i=t.n(n),o=t(190),c=(t(115),t(1)),v=function(e){var a=e.onStateChange,t=e.data,n=e.isLoading,v=e.placeholder,r=e.selectedItemDefault,s=i.a.useState(r),u=Object(l.a)(s,2),m=u[0],j=u[1],h={option:function(e,a){return Object(d.a)(Object(d.a)({},e),{},{borderBottom:"1px dotted pink",color:a.isSelected?"red":"blue"})},singleValue:function(e,a){var t=a.isDisabled?.5:1;return Object(d.a)(Object(d.a)({},e),{},{opacity:t,transition:"opacity 300ms"})}};return Object(c.jsx)("div",{className:"select",children:Object(c.jsx)(o.a,{value:m,onChange:function(e){j(e),a(e)},options:t,placeholder:"Select "+v,isLoading:n,styles:h})})}},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));t(0);var d=t(62),l=(t(118),t(1)),n=function(e){var a=e.theaders,t=e.tbody,n=e.formatter,o=e.onRowClick;return Object(l.jsx)(d.a,{children:Object(l.jsx)("div",{className:"cv-table",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:a.map((function(e,a){return Object(l.jsx)("th",{children:e},a)}))})}),Object(l.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e,a){return Object(l.jsx)("tr",{onClick:function(){o(e)},children:i(e).map((function(e){return Object(l.jsx)("td",{children:e.toLocaleString(n)})}))},a)}))})]})})})},i=function(e){var a=[];return Object.keys(e).forEach((function(t){a.push(e[t])})),a}},118:function(e,a,t){},121:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t(0);var d=t(12),l=t(62),n=t(393),i=t(398),o=t(386),c=t(392),v=t(1),r=function(e){var a=e.chart;return Object(v.jsx)(n.a,{children:Object(v.jsxs)(i.a,{data:null===a||void 0===a?void 0:a.data,children:[Object(v.jsx)(o.a,{dot:!1,type:"basis",dataKey:null===a||void 0===a?void 0:a.name,stroke:null===a||void 0===a?void 0:a.strokeColor,strokeWidth:3}),Object(v.jsx)(c.a,{formatter:function(e){return new Intl.NumberFormat("en").format(e)},labelFormatter:function(e){return""}})]})})},s=(t(116),function(e){var a,t,n=e.card,i=e.chart;return Object(v.jsx)(l.a,{children:Object(v.jsxs)("div",{className:"cv-stats-card "+n.cardClass,children:[Object(v.jsx)("p",{className:"cv-label",children:null===n||void 0===n?void 0:n.label}),Object(v.jsxs)("div",{className:"cv-count-container",children:[Object(v.jsx)("p",{className:"cv-count",children:null===n||void 0===n||null===(a=n.value)||void 0===a?void 0:a.toLocaleString("hi")}),(null===n||void 0===n?void 0:n.delta)>0&&Object(v.jsxs)("p",{className:"cv-delta",children:[Object(v.jsx)(d.a,{className:"cv-icon"}),null===n||void 0===n||null===(t=n.delta)||void 0===t?void 0:t.toLocaleString("hi")]})]}),i&&Object(v.jsx)("div",{className:"cv-chart-container",children:Object(v.jsx)(r,{chart:i})})]})})})},388:function(e,a,t){},403:function(e,a,t){"use strict";t.r(a);var d=t(15),l=t(127),n=t.n(l),i=t(0);t(388);var o=t(114),c=[{key:"TT",name:"India"},{key:"AN",name:"Andaman and Nicobar Islands"},{key:"AP",name:"Andhra Pradesh"},{key:"AR",name:"Arunachal Pradesh"},{key:"AS",name:"Assam"},{key:"BR",name:"Bihar"},{key:"CT",name:"Chhattisgarh"},{key:"CH",name:"Chandigarh"},{key:"DL",name:"Delhi"},{key:"DN",name:"Dadra and Diu"},{key:"GA",name:"Goa"},{key:"GJ",name:"Gujarat"},{key:"HR",name:"Haryana"},{key:"HP",name:"Himachal Pradesh"},{key:"JK",name:"Jammu and Kashmir"},{key:"JH",name:"Jharkhand"},{key:"KA",name:"Karnataka"},{key:"KL",name:"Kerala"},{key:"LA",name:"Ladhak"},{key:"LD",name:"Lakshadweep"},{key:"MP",name:"Madhya Pradesh"},{key:"MH",name:"Maharashtra"},{key:"MN",name:"Manipur"},{key:"ML",name:"Meghalaya"},{key:"MZ",name:"Mizoram"},{key:"NL",name:"Nagaland"},{key:"OR",name:"Odisha"},{key:"PY",name:"Puducherry"},{key:"PB",name:"Punjab"},{key:"RJ",name:"Rajasthan"},{key:"SK",name:"Sikkim"},{key:"TN",name:"Tamil Nadu"},{key:"TG",name:"Telangana"},{key:"TR",name:"Tripura"},{key:"UP",name:"Uttar Pradesh"},{key:"UT",name:"Uttarakhand"},{key:"WB",name:"West Bengal"}],v=t(117),r=t(121),s=t(112),u=t(1);a.default=function(){var e=Object(i.useState)(null),a=Object(d.a)(e,2),t=a[0],l=a[1],m=Object(i.useState)(null),j=Object(d.a)(m,2),h=j[0],f=j[1],b=Object(i.useState)(null),O=Object(d.a)(b,2),k=O[0],y=O[1],p=Object(i.useState)({states:[]}),x=Object(d.a)(p,2),C=x[0],N=x[1],g=Object(i.useState)(null),S=Object(d.a)(g,2),A=S[0],D=S[1],T=Object(i.useState)(null),L=Object(d.a)(T,2),P=L[0],F=L[1],R=Object(i.useState)(null),w=Object(d.a)(R,2),E=(w[0],w[1]),M=Object(i.useState)(!0),B=Object(d.a)(M,2),K=B[0],J=B[1],_=Object(i.useState)("TT"),H=Object(d.a)(_,2),G=H[0],I=H[1];Object(i.useEffect)((function(){U()}),[]),Object(i.useEffect)((function(){n.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var a,t,d,n,i,o,c,v,r,s,u,m,j,h,f,b,O,k,p,x,C,N,g,S,A,T,L,P,F,R,w,E,M,B,K,J,_,H,I,U,W,z,V,Y,Z,q,Q,X,$,ee,ae,te,de,le,ne,ie,oe=e.data;D(oe);var ce=[{label:"Confirmed",value:null===oe||void 0===oe||null===(a=oe[G])||void 0===a||null===(t=a.total)||void 0===t?void 0:t.confirmed,delta:null===oe||void 0===oe||null===(d=oe[G])||void 0===d||null===(n=d.delta)||void 0===n?void 0:n.confirmed,cardClass:"cv-alert"},{label:"Active",value:(null===oe||void 0===oe||null===(i=oe[G])||void 0===i||null===(o=i.total)||void 0===o?void 0:o.confirmed)-((null===oe||void 0===oe||null===(c=oe[G])||void 0===c||null===(v=c.total)||void 0===v?void 0:v.deceased)+(null===oe||void 0===oe||null===(r=oe[G])||void 0===r||null===(s=r.total)||void 0===s?void 0:s.recovered)),delta:0,cardClass:"cv-primary"},{label:"Recovered",value:null===oe||void 0===oe||null===(u=oe[G])||void 0===u||null===(m=u.total)||void 0===m?void 0:m.recovered,delta:null===oe||void 0===oe||null===(j=oe[G])||void 0===j||null===(h=j.delta)||void 0===h?void 0:h.recovered,cardClass:"cv-success"},{label:"Deceased",value:null===oe||void 0===oe||null===(f=oe[G])||void 0===f||null===(b=f.total)||void 0===b?void 0:b.deceased,delta:null===oe||void 0===oe||null===(O=oe[G])||void 0===O||null===(k=O.delta)||void 0===k?void 0:k.deceased,cardClass:"cv-warning"},{label:"Tested",value:null===oe||void 0===oe||null===(p=oe[G])||void 0===p||null===(x=p.total)||void 0===x?void 0:x.tested,delta:null===oe||void 0===oe||null===(C=oe[G])||void 0===C||null===(N=C.delta7)||void 0===N?void 0:N.tested,cardClass:"cv-info"},{label:"Partially vaccinated",value:null===oe||void 0===oe||null===(g=oe[G])||void 0===g||null===(S=g.total)||void 0===S?void 0:S.vaccinated1,delta:null===oe||void 0===oe||null===(A=oe[G])||void 0===A||null===(T=A.delta7)||void 0===T?void 0:T.vaccinated1,cardClass:"cv-success"},{label:"Fully vaccinated",value:null===oe||void 0===oe||null===(L=oe[G])||void 0===L||null===(P=L.total)||void 0===P?void 0:P.vaccinated2,delta:null===oe||void 0===oe||null===(F=oe[G])||void 0===F||null===(R=F.delta7)||void 0===R?void 0:R.vaccinated2,cardClass:"cv-primary"},{label:"Vaccinated",value:(null===oe||void 0===oe||null===(w=oe[G])||void 0===w||null===(E=w.total)||void 0===E?void 0:E.vaccinated2)+(null===oe||void 0===oe||null===(M=oe[G])||void 0===M||null===(B=M.total)||void 0===B?void 0:B.vaccinated1),delta:(null===oe||void 0===oe||null===(K=oe[G])||void 0===K||null===(J=K.delta7)||void 0===J?void 0:J.vaccinated2)+(null===oe||void 0===oe||null===(_=oe[G])||void 0===_||null===(H=_.delta7)||void 0===H?void 0:H.vaccinated2),cardClass:"cv-info"}],ve=[];ve.push([{name:"Confirmed",value:null===oe||void 0===oe||null===(I=oe[G])||void 0===I||null===(U=I.total)||void 0===U?void 0:U.confirmed},{name:"Active",value:(null===oe||void 0===oe||null===(W=oe[G])||void 0===W||null===(z=W.total)||void 0===z?void 0:z.confirmed)-((null===oe||void 0===oe||null===(V=oe[G])||void 0===V||null===(Y=V.total)||void 0===Y?void 0:Y.deceased)+(null===oe||void 0===oe||null===(Z=oe[G])||void 0===Z||null===(q=Z.total)||void 0===q?void 0:q.recovered))},{name:"Recovered",value:null===oe||void 0===oe||null===(Q=oe[G])||void 0===Q||null===(X=Q.total)||void 0===X?void 0:X.recovered},{name:"Deceased",value:null===oe||void 0===oe||null===($=oe[G])||void 0===$||null===(ee=$.total)||void 0===ee?void 0:ee.deceased},{name:"Others",value:null===oe||void 0===oe||null===(ae=oe[G])||void 0===ae||null===(te=ae.total)||void 0===te?void 0:te.other}]),ve.push([{name:"Dose1",value:null===oe||void 0===oe||null===(de=oe[G])||void 0===de||null===(le=de.total)||void 0===le?void 0:le.vaccinated1},{name:"Dose2",value:null===oe||void 0===oe||null===(ne=oe[G])||void 0===ne||null===(ie=ne.total)||void 0===ie?void 0:ie.vaccinated2}]),y(ve),l(ce)})),n.a.get("https://data.covid19india.org/v4/min/timeseries.min.json").then((function(e){var a=e.data;E(a);var t=[];Object.keys(a[G].dates).forEach((function(e,d){var l,n,i,o,c,v,r,s,u,m,j,h,f,b,O,k,y,p,x;d%15===0&&t.push({name:e,confirm:(null===(l=a[G].dates[e].delta7)||void 0===l?void 0:l.confirmed)?null===(n=a[G].dates[e].delta7)||void 0===n?void 0:n.confirmed:0,active:W(null===(i=a[G].dates[e].delta7)||void 0===i?void 0:i.confirmed,null===(o=a[G].dates[e].delta7)||void 0===o?void 0:o.recovered,null===(c=a[G].dates[e].delta7)||void 0===c?void 0:c.deceased),recovered:(null===(v=a[G].dates[e].delta7)||void 0===v?void 0:v.recovered)?null===(r=a[G].dates[e].delta7)||void 0===r?void 0:r.recovered:0,deceased:(null===(s=a[G].dates[e].delta7)||void 0===s?void 0:s.deceased)?null===(u=a[G].dates[e].delta7)||void 0===u?void 0:u.deceased:0,tested:(null===(m=a[G].dates[e].delta7)||void 0===m?void 0:m.tested)?null===(j=a[G].dates[e].delta7)||void 0===j?void 0:j.tested:0,dose_1:(null===(h=a[G].dates[e].delta7)||void 0===h?void 0:h.vaccinated1)?null===(f=a[G].dates[e].delta7)||void 0===f?void 0:f.vaccinated1:0,dose_2:(null===(b=a[G].dates[e].delta7)||void 0===b?void 0:b.vaccinated2)?null===(O=a[G].dates[e].delta7)||void 0===O?void 0:O.vaccinated2:0,vaccine:(null===(k=a[G].dates[e].delta7)||void 0===k?void 0:k.vaccinated2)+(null===(y=a[G].dates[e].delta7)||void 0===y?void 0:y.vaccinated1)?(null===(p=a[G].dates[e].delta7)||void 0===p?void 0:p.vaccinated2)+(null===(x=a[G].dates[e].delta7)||void 0===x?void 0:x.vaccinated1):0})}));var d=[{name:"confirmed",data:t.map((function(e){return{name:e.name,confirmed:e.confirm}})),strokeColor:"#F7685B"},{name:"active",data:t.map((function(e){return{name:e.name,active:e.active}})),strokeColor:"#109CF1"},{name:"recovered",data:t.map((function(e){return{name:e.name,recovered:e.recovered}})),strokeColor:"#2ED47A"},{name:"deceased",data:t.map((function(e){return{name:e.name,deceased:e.deceased}})),strokeColor:"#FFB946"},{name:"tested",data:t.map((function(e){return{name:e.name,tested:e.tested}})),strokeColor:"#885AF8"},{name:"dose_1",data:t.map((function(e){return{name:e.name,dose_1:e.dose_1}})),strokeColor:"#2ED47A"},{name:"dose_2",data:t.map((function(e){return{name:e.name,dose_2:e.dose_2}})),strokeColor:"#109CF1"},{name:"vaccine",data:t.map((function(e){return{name:e.name,vaccine:e.vaccine}})),strokeColor:"#885AF8"}];f(d)}))}),[G]);var U=function(){var e=c.map((function(e){return{value:e.key,label:e.name}}));N({states:e}),J(!1)},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e-(a+t)};return Object(i.useEffect)((function(){A&&C.states.length>0&&F(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=[];return Object.keys(a).forEach((function(d,l){var n,i,o,c,v,r,s,u,m,j,h,f,b;"TT"===G?t.push({stateName:null===(n=e.find((function(e){return e.value===d})))||void 0===n?void 0:n.label,confirm:(null===(i=a[d].total)||void 0===i?void 0:i.confirmed)?null===(o=a[d].total)||void 0===o?void 0:o.confirmed:0,active:W(null===(c=a[d].total)||void 0===c?void 0:c.confirmed,null===(v=a[d].total)||void 0===v?void 0:v.recovered,null===(r=a[d].total)||void 0===r?void 0:r.deceased),recovered:(null===(s=a[d].total)||void 0===s?void 0:s.recovered)?null===(u=a[d].total)||void 0===u?void 0:u.recovered:0,deceased:(null===(m=a[d].total)||void 0===m?void 0:m.deceased)?null===(j=a[d].total)||void 0===j?void 0:j.deceased:0,tested:(null===(h=a[d].total)||void 0===h?void 0:h.tested)?null===(f=a[d].total)||void 0===f?void 0:f.tested:0}):d===G&&Object.keys(null===(b=a[d])||void 0===b?void 0:b.districts).forEach((function(e,l){var n,i,o,c,v,r,s,u,m,j,h;t.push({districtName:e,confirm:(null===(n=a[d].districts[e].total)||void 0===n?void 0:n.confirmed)?null===(i=a[d].districts[e].total)||void 0===i?void 0:i.confirmed:0,active:W(null===(o=a[d].districts[e].total)||void 0===o?void 0:o.confirmed,null===(c=a[d].districts[e].total)||void 0===c?void 0:c.recovered,null===(v=a[d].districts[e].total)||void 0===v?void 0:v.deceased),recovered:(null===(r=a[d].districts[e].total)||void 0===r?void 0:r.recovered)?null===(s=a[d].districts[e].total)||void 0===s?void 0:s.recovered:0,deceased:(null===(u=a[d].districts[e].total)||void 0===u?void 0:u.deceased)?null===(m=a[d].districts[e].total)||void 0===m?void 0:m.deceased:0,tested:(null===(j=a[d].districts[e].total)||void 0===j?void 0:j.tested)?null===(h=a[d].districts[e].total)||void 0===h?void 0:h.tested:0})}))})),t}(C.states,A))}),[G,A]),Object(u.jsxs)("div",{className:"cv-main-container",children:[Object(u.jsx)(o.a,{placeholder:"State",data:C.states,onStateChange:function(e){I(e.value)},isLoading:K}),Object(u.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a<4?Object(u.jsx)("div",{className:"cv-stats-card",children:Object(u.jsx)(r.a,{card:t?t[a]:null,chart:h?h[a]:null},a)}):null})):null}),Object(u.jsx)("div",{className:"cv-row",children:t?t.map((function(e,a){return a>3?Object(u.jsx)("div",{className:"cv-stats-card",children:Object(u.jsx)(r.a,{card:t?t[a]:null,chart:h?h[a]:null},a)}):null})):null}),Object(u.jsx)("div",{className:"cv-row",children:k&&k.map((function(e,a){return Object(u.jsx)("div",{className:"cv-pie-chart-container",children:Object(u.jsx)(s.a,{pieData:e,className:"pie-card"})})}))}),A&&Object(u.jsx)("div",{className:"cv-stats-table",children:Object(u.jsx)(v.a,{theaders:["TT"===G?"State":"District","Confirmed","Active","Recovered","Deseased","Tested"],tbody:P,formatter:"hi"})})]})}},62:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));t(0),t(88);var d=t(1),l=function(e){return Object(d.jsx)("div",{className:"cv-card ",children:e.children})}},88:function(e,a,t){}}]);
//# sourceMappingURL=5.92ab2792.chunk.js.map
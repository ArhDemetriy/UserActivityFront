(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},48:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n.n(a),c=n(26),i=n.n(c),s=(n(41),n(42),n(43),n(44),n(0)),o=n.n(s),u=n(3),l=n(1),d=n(2),b=n(19),h=n(33),j=Object(h.a)({apiKey:"AIzaSyAy2GjQAfutCFa3toa9WLDFTkMehtj_CNk",authDomain:"useractivity-4c085.firebaseapp.com",projectId:"useractivity-4c085",storageBucket:"useractivity-4c085.appspot.com",messagingSenderId:"1007647890248",appId:"1:1007647890248:web:91e91fec7ca033ae29b17d"}),f=Object(b.getFirestore)(j),p=function(){function t(){Object(l.a)(this,t)}return Object(d.a)(t,null,[{key:"getCollection",value:function(t){return this.collections.has(t)||this.collections.set(t,b.collection(this.selfFirestore,t)),this.collections.get(t)}},{key:"add",value:function(t,e){return b.addDoc(this.getCollection(t),e)}},{key:"getFirestoreDocs",value:function(t){return b.getDocs(b.collectionGroup(this.selfFirestore,this.getCollection(t).id))}},{key:"deleteCollection",value:function(t){return this.getFirestoreDocs(t).then((function(t){return t.docs.map((function(t){return t.ref}))})).then((function(t){return t.forEach((function(t){return b.deleteDoc(t)}))}))}},{key:"getDocs",value:function(t){return this.getFirestoreDocs(t).then((function(t){return t.docs.map((function(t){return t.data()}))}))}}]),t}();p.selfFirestore=f,p.firestore=b,p.collections=new Map;var v="users",y=function(){function t(){Object(l.a)(this,t)}return Object(d.a)(t,null,[{key:"load",value:function(){return p.getDocs(v).then((function(t){return t.sort((function(t,e){return t.id-e.id}))}))}},{key:"saveAll",value:function(t){return p.deleteCollection(v).then((function(){return Promise.all(t.map((function(t){return p.add(v,t)})))}))}}]),t}(),m=n(35),O=n(15);function g(t,e){return"REPLACE_HISTOGRAM"===e.type&&e.payload.histogram?Object(O.a)(Object(O.a)({},t),{},{histogram:e.payload.histogram}):"REPLACE_SPLINE"===e.type&&e.payload.spline?Object(O.a)(Object(O.a)({},t),{},{spline:e.payload.spline}):t}var x=n(17),k="ADD_USERS",C="REPLACE_USERS";function N(t,e){return e.type===k?t.concat(e.payload.users):e.type===C?Object(x.a)(e.payload.users):t}var S={users:[],graph:{histogram:[],spline:[]}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;return Object(O.a)(Object(O.a)({},t),{},{users:N(t.users,e),graph:g(t.graph,e)})},D=Object(m.a)(A),F=function(){function t(){Object(l.a)(this,t)}return Object(d.a)(t,null,[{key:"addUsers",value:function(t){D.dispatch({type:k,payload:{users:t}})}},{key:"replaceUsers",value:function(t){D.dispatch({type:C,payload:{users:t}})}}]),t}();function L(){return D.getState().users}var w=function(){function t(){Object(l.a)(this,t)}return Object(d.a)(t,null,[{key:"init",value:function(){return this.safetyLoad()}},{key:"validate",value:function(){return!0}},{key:"trySave",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.validate()){t.next=2;break}throw new Error("invalid users data");case 2:return n=L(),e=n.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{registration:t.registration.getTime(),lastActivity:t.lastActivity.getTime()})})),t.abrupt("return",y.saveAll(e));case 4:case"end":return t.stop()}var n}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"tryLoad",value:function(){return y.load().then((function(t){return function(t){return t.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{registration:new Date(t.registration),lastActivity:new Date(t.lastActivity)})}))}(t)})).then((function(t){return F.replaceUsers(t)}))}},{key:"safetyLoad",value:function(){return this.tryLoad().catch((function(t){return console.error(t)}))}}]),t}(),E=function(t){w.trySave().then((function(){return w.tryLoad()})).catch((function(t){return console.error(t)}))},_=0,I=864e5,U=function(t){F.addUsers(function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,n=L();Array.isArray(n)&&n.length>0&&(_=(null===(t=n[n.length-1])||void 0===t?void 0:t.id)||_);for(var a=[],r=0;r<e;r++)a.push({id:++_,registration:new Date(_*I),lastActivity:new Date});return a}())};var P=n(10),R=function(){return Object(P.jsxs)("div",{className:"controls",children:[Object(P.jsx)("button",{className:"controls-button_add button",type:"button",onClick:U,children:"Add"}),Object(P.jsx)("button",{className:"controls-button_save button",type:"submit",onClick:E,children:"Save"}),Object(P.jsx)("button",{className:"controls-button_calculate button",type:"button",onClick:E,children:"Calculate"})]})},T=(n(48),function(){return Object(P.jsx)("div",{className:"graph",children:"Graph"})}),M=n(23),G=(n(55),n(11));n(56);function B(t){return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))}var q=function(t){var e=t.index,n=t.requireCssClass,r=Object(M.b)((function(t){return t.users[e]})),c=Object(a.useState)(r.id),i=Object(G.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)(B(r.registration)),l=Object(G.a)(u,2),d=l[0],b=l[1],h=Object(a.useState)(B(r.lastActivity)),j=Object(G.a)(h,2),f=j[0],p=j[1];return r?Object(P.jsxs)("tr",{className:n+" user",children:[Object(P.jsx)("td",{className:"user-item user-item_first",children:Object(P.jsx)("input",{value:s,name:"userId",onChange:function(t){return o(+t.target.value)},type:"number",className:"user-item-input user-item-input_clear",size:s.toString().length+1})}),Object(P.jsx)("td",{className:"user-item",children:Object(P.jsx)("input",{value:d,name:"registration",onChange:function(t){return b(t.target.value)},type:"date",className:"user-item-input"})}),Object(P.jsx)("td",{className:"user-item user-item_last",children:Object(P.jsx)("input",{value:f,name:"lastActivity",onChange:function(t){return p(t.target.value)},type:"date",className:"user-item-input"})})]}):null},z=function(){var t=Object(M.b)((function(t){return t.users}),(function(t,e){return t.length===e.length}));return Object(P.jsxs)("table",{className:"table",children:[Object(P.jsx)("caption",{className:"table-caption",children:"Users activity"}),Object(P.jsx)("thead",{className:"table-head",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{className:"table-head-item",scope:"col",children:"UserID"}),Object(P.jsx)("th",{className:"table-head-item",scope:"col",children:"Date Registration"}),Object(P.jsx)("th",{className:"table-head-item",scope:"col",children:"Date Last Activity"})]})}),Object(P.jsx)("tbody",{className:"table-body",children:t.map((function(t,e){return Object(P.jsx)(q,{requireCssClass:"table-body-item",index:e},"table-".concat(e,"-").concat(t.id))}))})]})},J=function(){return Object(P.jsxs)("div",{className:"app",children:[Object(P.jsxs)("div",{className:"app-data",children:[Object(P.jsx)(z,{}),Object(P.jsx)(T,{})]}),Object(P.jsx)(R,{})]})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};w.init(),i.a.render(Object(P.jsxs)(r.a.StrictMode,{children:[Object(P.jsx)(M.a,{store:D,children:Object(P.jsx)(J,{})}),","]}),document.getElementById("root")),H()}},[[57,1,2]]]);
//# sourceMappingURL=main.59c24afa.chunk.js.map
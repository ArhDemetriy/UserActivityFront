(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},48:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n.n(a),i=n(26),c=n.n(i),o=(n(41),n(42),n(11)),s=(n(43),n(44),n(0)),u=n.n(s),l=n(3),d=n(1),f=n(2),b=n(19),h=n(33),j=Object(h.a)({apiKey:"AIzaSyAy2GjQAfutCFa3toa9WLDFTkMehtj_CNk",authDomain:"useractivity-4c085.firebaseapp.com",projectId:"useractivity-4c085",storageBucket:"useractivity-4c085.appspot.com",messagingSenderId:"1007647890248",appId:"1:1007647890248:web:91e91fec7ca033ae29b17d"}),p=Object(b.getFirestore)(j),v=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"getCollection",value:function(t){return this.collections.has(t)||this.collections.set(t,b.collection(this.selfFirestore,t)),this.collections.get(t)}},{key:"add",value:function(t,e){return b.addDoc(this.getCollection(t),e)}},{key:"getFirestoreDocs",value:function(t){return b.getDocs(b.collectionGroup(this.selfFirestore,this.getCollection(t).id))}},{key:"deleteCollection",value:function(t){return this.getFirestoreDocs(t).then((function(t){return t.docs.map((function(t){return t.ref}))})).then((function(t){return t.forEach((function(t){return b.deleteDoc(t)}))}))}},{key:"getDocs",value:function(t){return this.getFirestoreDocs(t).then((function(t){return t.docs.map((function(t){return t.data()}))}))}}]),t}();v.selfFirestore=p,v.firestore=b,v.collections=new Map;var y="users",g=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"load",value:function(){return v.getDocs(y).then((function(t){return t.sort((function(t,e){return t.id-e.id}))}))}},{key:"saveAll",value:function(t){return v.deleteCollection(y).then((function(){return Promise.all(t.map((function(t){return v.add(y,t)})))}))}}]),t}(),m=n(35),O=n(14),x="REPLACE_HISTOGRAM",N="REPLACE_SPLINE",k="SET_RETENTION";function S(t,e){return e.type===x&&e.payload.histogram?Object(O.a)(Object(O.a)({},t),{},{histogram:e.payload.histogram}):e.type===N&&e.payload.spline?Object(O.a)(Object(O.a)({},t),{},{spline:e.payload.spline}):e.type===k&&void 0!==e.payload.retention?Object(O.a)(Object(O.a)({},t),{},{retention:+e.payload.retention}):t}var A=n(17),D="ADD_USERS",C="REPLACE_USERS";function T(t,e){return e.type===D?t.concat(e.payload.users):e.type===C?Object(A.a)(e.payload.users):t}var R={users:[],graph:{retention:NaN,histogram:[],spline:[]}},F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;return Object(O.a)(Object(O.a)({},t),{},{users:T(t.users,e),graph:S(t.graph,e)})},E=Object(m.a)(F),w=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"addUsers",value:function(t){E.dispatch({type:D,payload:{users:t}})}},{key:"replaceUsers",value:function(t){E.dispatch({type:C,payload:{users:t}})}}]),t}();function I(){return E.getState().users}var L=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"init",value:function(){return this.safetyLoad()}},{key:"validate",value:function(){return!0}},{key:"trySave",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.validate()){t.next=2;break}throw new Error("invalid users data");case 2:return n=I(),e=n.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{registration:t.registration.getTime(),lastActivity:t.lastActivity.getTime()})})),t.abrupt("return",g.saveAll(e));case 4:case"end":return t.stop()}var n}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"tryLoad",value:function(){return g.load().then((function(t){return function(t){return t.map((function(t){return Object(O.a)(Object(O.a)({},t),{},{registration:new Date(t.registration),lastActivity:new Date(t.lastActivity)})}))}(t)})).then((function(t){return w.replaceUsers(t)}))}},{key:"safetyLoad",value:function(){return this.tryLoad().catch((function(t){return console.error(t)}))}}]),t}();var _=0,U=864e5,P=function(t){w.addUsers(function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,n=I();Array.isArray(n)&&n.length>0&&(_=(null===(t=n[n.length-1])||void 0===t?void 0:t.id)||_);for(var a=[],r=0;r<e;r++)a.push({id:++_,registration:new Date(_*U),lastActivity:new Date});return a}())};var M=n(4),B=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"setRetention",value:function(t){E.dispatch({type:k,payload:{retention:t}})}},{key:"replaceHistogram",value:function(t){E.dispatch({type:x,payload:{histogram:t}})}},{key:"pushHistogramBins",value:function(t){var e=E.getState().graph.histogram.concat(t);E.dispatch({type:x,payload:{histogram:e}})}},{key:"replaceSpline",value:function(t){E.dispatch({type:N,payload:{spline:t}})}}]),t}(),Y=function(){function t(){Object(d.a)(this,t)}return Object(f.a)(t,null,[{key:"calcRetention",value:function(){var t=this.getRollingRetention(7);Number.isFinite(t)&&B.setRetention(t)}},{key:"getRollingRetention",value:function(t){if(t<1)return 1;var e,n=this.floorTime(this.getIntervalTime(t)),a=this.floorTime(Date.now()),r=0,i=0,c=I(),o=Object(M.a)(c);try{for(o.s();!(e=o.n()).done;){var s=e.value,u=this.floorTime(s.registration.getTime());a-u>=n&&i++,this.floorTime(s.lastActivity.getTime())-u>=n&&r++}}catch(l){o.e(l)}finally{o.f()}return i?r/i:NaN}},{key:"getIntervalTime",value:function(t){return t*this.DAY}},{key:"floorTime",value:function(t){return t-t%this.DAY}},{key:"getSimpleRollingRetention",value:function(t){if(t<1)return NaN;var e,n=this.getIntervalTime(t),a=I(),r=0,i=0,c=Date.now(),o=Object(M.a)(a);try{for(o.s();!(e=o.n()).done;){var s=e.value,u=s.registration.getTime();c-u<=n?i++:s.lastActivity.getTime()-u>=n&&r++}}catch(l){o.e(l)}finally{o.f()}return i?r/i:NaN}}]),t}();Y.DAY=864e5;var G=function(t){Y.calcRetention()},H=n(8),q=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],r=e[1];return Object(H.jsxs)("div",{className:"controls",children:[Object(H.jsx)("button",{className:"controls-button_add button",disabled:n,type:"button",onClick:P,children:"Add"}),Object(H.jsx)("button",{className:"controls-button_save button",disabled:n,type:"submit",onClick:function(t){r(!0),L.trySave().then((function(){return L.tryLoad()})).catch((function(t){return console.error(t)})).finally((function(){return r(!1)}))},children:"Save"}),Object(H.jsx)("button",{className:"controls-button_calculate button",disabled:n,type:"button",onClick:G,children:"Calculate"})]})},z=(n(48),n(20)),J=(n(55),function(){var t=Object(z.b)((function(t){return t.graph.retention}));return Number.isFinite(t)?Object(H.jsx)("div",{className:"retention",children:"Rolling Retention 7 day: ".concat(t)}):Object(H.jsx)("div",{})}),K=function(){return Object(H.jsx)("div",{className:"graph",children:Object(H.jsx)(J,{})})};n(56),n(57);function Q(t){return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"),"-").concat(t.getDate().toString().padStart(2,"0"))}var W=function(t){var e=t.index,n=t.requireCssClass,r=Object(z.b)((function(t){return t.users[e]})),i=Object(a.useState)(r.id),c=Object(o.a)(i,2),s=c[0],u=c[1],l=Object(a.useState)(Q(r.registration)),d=Object(o.a)(l,2),f=d[0],b=d[1],h=Object(a.useState)(Q(r.lastActivity)),j=Object(o.a)(h,2),p=j[0],v=j[1];return r?Object(H.jsxs)("tr",{className:n+" user",children:[Object(H.jsx)("td",{className:"user-item user-item_first",children:Object(H.jsx)("input",{value:s,name:"userId",onChange:function(t){return u(+t.target.value)},type:"number",className:"user-item-input user-item-input_clear",size:s.toString().length+1})}),Object(H.jsx)("td",{className:"user-item",children:Object(H.jsx)("input",{value:f,name:"registration",onChange:function(t){return b(t.target.value)},type:"date",className:"user-item-input"})}),Object(H.jsx)("td",{className:"user-item user-item_last",children:Object(H.jsx)("input",{value:p,name:"lastActivity",onChange:function(t){return v(t.target.value)},type:"date",className:"user-item-input"})})]}):null},V=function(){var t=Object(z.b)((function(t){return t.users}),(function(t,e){return t.length===e.length}));return Object(H.jsxs)("table",{className:"table",children:[Object(H.jsx)("caption",{className:"table-caption",children:"Users activity"}),Object(H.jsx)("thead",{className:"table-head",children:Object(H.jsxs)("tr",{children:[Object(H.jsx)("th",{className:"table-head-item",scope:"col",children:"UserID"}),Object(H.jsx)("th",{className:"table-head-item",scope:"col",children:"Date Registration"}),Object(H.jsx)("th",{className:"table-head-item",scope:"col",children:"Date Last Activity"})]})}),Object(H.jsx)("tbody",{className:"table-body",children:t.map((function(t,e){return Object(H.jsx)(W,{requireCssClass:"table-body-item",index:e},"table-".concat(e,"-").concat(t.id))}))})]})},X=function(){return Object(H.jsxs)("div",{className:"app",children:[Object(H.jsxs)("div",{className:"app-data",children:[Object(H.jsx)(V,{}),Object(H.jsx)(K,{})]}),Object(H.jsx)(q,{})]})},Z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};L.init(),c.a.render(Object(H.jsxs)(r.a.StrictMode,{children:[Object(H.jsx)(z.a,{store:E,children:Object(H.jsx)(X,{})}),","]}),document.getElementById("root")),Z()}},[[58,1,2]]]);
//# sourceMappingURL=main.3fe910ff.chunk.js.map
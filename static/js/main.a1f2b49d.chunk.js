(this["webpackJsonpreact-omdb"]=this["webpackJsonpreact-omdb"]||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),o=(a(19),a(20),a(2)),m=a(3),s=a.n(m),i=function(e){var t=e.movieInfo,a=e.handleClose;return l.a.createElement("div",{className:"modal display-block"},l.a.createElement("section",{className:"modal-main"},l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"modal-img"},l.a.createElement("img",{src:t.Poster,alt:"Poster"})),l.a.createElement("div",{className:"modal-info"},l.a.createElement("p",null,l.a.createElement("b",null,"Actors:")," ",t.Actors),l.a.createElement("p",null,l.a.createElement("b",null,"Genre:")," ",t.Genre),l.a.createElement("p",null,l.a.createElement("b",null,"Director:")," ",t.Director),l.a.createElement("p",null,l.a.createElement("b",null,"Released:")," ",t.Released),l.a.createElement("p",null,l.a.createElement("b",null,"Plot:")," ",t.Plot))),l.a.createElement("button",{className:"modal-closebtn",onClick:a},"Close")))},u="https://www.omdbapi.com/?",b="apikey=18eaeb4f",d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),m=Object(o.a)(r,2),d=m[0],E=m[1],f=Object(n.useState)(),p=Object(o.a)(f,2),v=p[0],O=p[1],j=Object(n.useState)(""),h=Object(o.a)(j,2),N=h[0],S=h[1],g=Object(n.useState)(!1),k=Object(o.a)(g,2),C=k[0],y=k[1],D=Object(n.useState)(),I=Object(o.a)(D,2),w=I[0],P=I[1],R=Object(n.useState)(),A=Object(o.a)(R,2),B=A[0],T=A[1],x=Object(n.useState)(),G=Object(o.a)(x,2),J=(G[0],G[1],Object(n.useState)("")),M=Object(o.a)(J,2),F=(M[0],M[1],Object(n.useState)()),q=Object(o.a)(F,2),z=q[0],H=q[1],K=function(){y(!1),O()},L=function(e){e?s.a.get(u+b+"&s=".concat(a)+"&type=movie"+"&page=".concat(e)).then((function(e){e&&(E(e.data.Search),P(e.data.totalResults))})):s.a.get(u+b+"&s=".concat(a)+"&type=movie&page=1").then((function(e){e&&(E(e.data.Search),P(e.data.totalResults),H(1))}))},Q=function(e,t){e.preventDefault(),S(t),s.a.get(u+b+"&i=".concat(t)).then((function(e){e&&O(e.data)})),y(!0)};Object(n.useEffect)((function(){!function(){if(w%10>0){var e=parseInt(w/10+1);T(e)}else{var t=parseInt(w/10);T(t)}}()}));for(var U=[],V=function(e){U.push(l.a.createElement("p",{key:e,onClick:function(t){return X(e)}},e))},W=1;W<=B;W++)V(W);var X=function(e){H(e),L(e),window.scrollTo(0,0)};return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"searchBar"},l.a.createElement("label",{htmlFor:"name"}),l.a.createElement("input",{type:"text",name:"name",placeholder:"movie name",onChange:function(e){return c(e.target.value)}}),l.a.createElement("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault(),L()}(e)}},"Search"))),d?l.a.createElement("div",{className:"movies"},d.map((function(e){return l.a.createElement("div",{key:e.imdbID,className:"movie"},l.a.createElement("img",{src:e.Poster,alt:""}),l.a.createElement("div",{className:"movie-title"},l.a.createElement("p",null,e.Title)),l.a.createElement("button",{className:"movie-detailsBtn",onClick:function(t){return Q(t,e.imdbID)}},"Details"),v&&N===e.imdbID&&C?l.a.createElement(i,{movieInfo:v,handleClose:K}):l.a.createElement("div",{className:"modal display-none"}))}))):null,B?l.a.createElement("div",{className:"pages"},z-1===0?null:l.a.createElement("b",{onClick:function(e){return X(z-1)}},z-1),l.a.createElement("b",{onClick:function(e){return X(z)},className:"actualPage"},z),l.a.createElement("b",{onClick:function(e){return X(z+1)}},z+1)):null)};var E=function(){return l.a.createElement("div",{className:"App"},"REACT OMDB",l.a.createElement(d,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a1f2b49d.chunk.js.map
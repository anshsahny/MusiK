(this.webpackJsonpmusik=this.webpackJsonpmusik||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(24),o=c.n(i),r=(c(51),c(7)),l=(c(52),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("6c6b4944b9ba4ce1bf4ed4122d51fd82","&redirect_uri=").concat("https://musik-10ec5.web.app/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var j=function(){return Object(s.jsxs)("div",{className:"login",children:[Object(s.jsx)("img",{src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),Object(s.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"})]})},d=(c(53),c(37)),b=c.n(d);c(54),c(55),c(56);var u=function(e){var t=e.title,c=e.Icon;return Object(s.jsxs)("div",{className:"sidebarOption",children:[c&&Object(s.jsx)(c,{className:"sidebarOption__icon"}),c?Object(s.jsx)("h4",{children:t}):Object(s.jsx)("p",{children:t})]})},O=c(38),h=c.n(O),x=c(41),m=c.n(x),f=c(79),p=Object(n.createContext)(),v=function(e){var t=e.initialState,c=e.reducer,a=e.children;return Object(s.jsx)(p.Provider,{value:Object(n.useReducer)(c,t),children:a})},_=function(){return Object(n.useContext)(p)};var y=function(){var e,t=_(),c=Object(r.a)(t,2),n=c[0].playlists;return c[1],Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("img",{className:"sidebar__logo",src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),Object(s.jsx)(u,{title:"Home",Icon:h.a}),Object(s.jsx)(u,{title:"Search",Icon:m.a}),Object(s.jsx)(u,{title:"Your Library",Icon:f.a}),Object(s.jsx)("br",{}),Object(s.jsx)("strong",{className:"sidebar__title",children:"PLAYLISTS"}),Object(s.jsx)("hr",{}),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return Object(s.jsx)(u,{title:e.name})}))]})},g=(c(62),c(80)),N=(c(63),c(93));var S=function(){var e,t=_(),c=Object(r.a)(t,2),n=c[0].user;return c[1],Object(s.jsxs)("div",{className:"header",children:[Object(s.jsxs)("div",{className:"header__left",children:[Object(s.jsx)(g.a,{}),Object(s.jsx)("input",{placeholder:"Search for Artists, Songs, or Albums",type:"text"})]}),Object(s.jsxs)("div",{className:"header__right",children:[Object(s.jsx)(N.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),Object(s.jsx)("h4",{children:null===n||void 0===n?void 0:n.display_name})]})]})},k=c(81),w=c(82),E=c(83);c(64);var T=function(e){var t=e.track;return Object(s.jsxs)("div",{className:"songRow",children:[Object(s.jsx)("img",{src:t.album.images[0].url,alt:"",className:"songRow__album"}),Object(s.jsxs)("div",{className:"songRow__info",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("p",{children:[t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name]})]})]})};var I=function(e){var t,c=e.spotify,n=_(),a=Object(r.a)(n,2),i=a[0].discover_weekly;return a[1],Object(s.jsxs)("div",{className:"body",children:[Object(s.jsx)(S,{spotify:c}),Object(s.jsxs)("div",{className:"body__info",children:[Object(s.jsx)("img",{src:null===i||void 0===i||null===(t=i.images[0])||void 0===t?void 0:t.url,alt:""}),Object(s.jsxs)("div",{className:"body__infoText",children:[Object(s.jsx)("strong",{children:"PLAYLIST"}),Object(s.jsx)("h2",{children:"Discover Weekly"}),Object(s.jsx)("p",{children:null===i||void 0===i?void 0:i.description})]})]}),Object(s.jsxs)("div",{className:"body__songs",children:[Object(s.jsxs)("div",{className:"body__icons",children:[Object(s.jsx)(k.a,{className:"body__shuffle"}),Object(s.jsx)(w.a,{fontSize:"large"}),Object(s.jsx)(E.a,{})]}),null===i||void 0===i?void 0:i.tracks.items.map((function(e){return Object(s.jsx)(T,{track:e.track})}))]})]})},L=(c(65),c(84)),A=c(85),R=c(86),P=c(87),Y=c(88),W=c(90),z=c(91),C=c(89),U=c(92);var H=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer__left",children:[Object(s.jsx)("img",{src:"https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg",alt:"",className:"footer__albumLogo"}),Object(s.jsxs)("div",{className:"footer__songInfo",children:[Object(s.jsx)("h4",{children:"Test Song"}),Object(s.jsx)("p",{children:"Ansh Sahny"})]})]}),Object(s.jsxs)("div",{className:"footer__center",children:[Object(s.jsx)(L.a,{className:"footer__green"}),Object(s.jsx)(A.a,{className:"footer__icon"}),Object(s.jsx)(R.a,{fontSize:"large",className:"footer__icon"}),Object(s.jsx)(P.a,{className:"footer__icon"}),Object(s.jsx)(Y.a,{className:"footer__green"})]}),Object(s.jsx)("div",{className:"footer__right",children:Object(s.jsxs)(C.a,{container:!0,spacing:2,children:[Object(s.jsx)(C.a,{item:!0,children:Object(s.jsx)(W.a,{})}),Object(s.jsx)(C.a,{item:!0,children:Object(s.jsx)(z.a,{})}),Object(s.jsx)(C.a,{item:!0,xs:!0,children:Object(s.jsx)(U.a,{})})]})})]})};var K=function(e){var t=e.spotify;return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"player__body",children:[Object(s.jsx)(y,{}),Object(s.jsx)(I,{spotify:t})]}),Object(s.jsx)(H,{})]})},D=new b.a;var B=function(){var e=_(),t=Object(r.a)(e,2),c=t[0],a=(c.user,c.token),i=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var c=t.split("=");return e[c[0]]=decodeURIComponent(c[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(i({type:"SET_TOKEN",token:t}),console.log("[token]",a),D.setAccessToken(t),D.getMe().then((function(e){i({type:"SET_USER",user:e})})),D.getUserPlaylists().then((function(e){i({type:"SET_PLAYLISTS",playlists:e})})),D.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((function(e){i({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),Object(s.jsx)("div",{className:"App",children:a?Object(s.jsx)(K,{spotify:D}):Object(s.jsx)(j,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=c(13),J=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(F.a)(Object(F.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(F.a)(Object(F.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(F.a)(Object(F.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(F.a)(Object(F.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{initialState:{user:null,token:null,playlists:[],playing:!1,item:null},reducer:J,children:Object(s.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.f346e060.chunk.js.map
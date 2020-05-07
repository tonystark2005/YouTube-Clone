(this["webpackJsonpyoutube-clone"]=this["webpackJsonpyoutube-clone"]||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(85),a(13)),o=a(15),m=a(140),u=a(143),s=a(144),p=a(145),d=a(147),v=a(34),h=function(e){var t=e.section,a=e.index,n=e.removeSection;return r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:!0},t.title),r.a.createElement(m.a,{item:!0,xs:!0},t.time),r.a.createElement(m.a,null,r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){return n(a)}},"x")))},E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),E=Object(o.a)(c,2),f=E[0],g=E[1],y=Object(n.useState)([{title:"",time:""}]),b=Object(o.a)(y,2),x=b[0],j=b[1],O=function(e){var t=Object(l.a)(x);t.splice(e,1),j(t)};return r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(p.a,{component:"h1",variant:"h5",align:"center"},"Add Section"),r.a.createElement("div",null,x.map((function(e,t){return r.a.createElement(h,{key:t,index:t,section:e,removeSection:O})}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"title",value:f,autoFocus:!0,onChange:function(e){g(e.target.value)}}),r.a.createElement(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"time",label:"Time",id:"time",value:a,className:"time",onChange:function(e){i(e.target.value)}}),r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0,xs:!0,align:"center"},r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){!function(e,t){if(e&&t){var a=[].concat(Object(l.a)(x),[{title:e,time:t}]);j(a),i(""),g("")}}(f,a)}},"Add")),r.a.createElement(m.a,{item:!0,xs:!0,align:"center"},r.a.createElement(u.a,{variant:"contained",component:v.b,to:{pathname:"/"},color:"primary"},"Cancel"))),r.a.createElement(m.a,{item:!0,xs:!0,align:"center"},r.a.createElement(u.a,{type:"submit",component:v.b,to:{pathname:"/",sections:x},align:"center",variant:"contained",color:"primary"},"Save"))))},f=a(150),g=a(146),y=function(e){var t=e.onSubmit,a=Object(n.useState)(""),i=Object(o.a)(a,2),c=i[0],l=i[1];return r.a.createElement(g.a,{elevation:6,style:{padding:"25px"}},r.a.createElement(d.a,{fullWidth:!0,label:"Search...",value:c,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&t(c)}}))},b=a(149),x=function(e){var t=e.video,a=e.player;try{var n,i=[],c=t.snippet.description.match(/.*([\d{1,}]?:?\d{1,2}:\d{2}).*/gi);if(0===c.length)return;for(n=0;n<c.length;n++)i.push({title:c[n].match(/[a-zA-Z ]+/gi),time:c[n].match(/(\d{1,}]?:?\d{1,2}:\d{2})/gim)})}catch(o){}var l=function(e,t){e.current.seekTo(function(e){var t,a=e[0].split(":");return 3===a.length?t=60*+a[0]*60+60*+a[1]+ +a[2]:2===a.length?t=60*+a[0]+ +a[1]:1===a.length&&(t=a[0]),console.log(t),t}(t))};return r.a.createElement(b.a,null,i.map((function(e,t){return r.a.createElement(f.a,{label:e.title,onClick:function(){return l(a,e.time)},display:"flex",color:"primary",key:t})})))},j=a(70),O=a.n(j),S=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading");var a="https://www.youtube.com/embed/".concat(t.id,"?enablejsapi=1"),i=Object(n.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{elevation:6,style:{height:"100%"}},r.a.createElement(O.a,{width:"100%",height:"50%",ref:i,url:a,controls:!0,playing:!0}),r.a.createElement(b.a,{elevation:6,style:{padding:"5px"}},r.a.createElement(p.a,{variant:"h5"},t.snippet.title," - ",t.snippet.channelTitle),r.a.createElement(p.a,{variant:"subtitle1"},t.snippet.channelTitle),r.a.createElement(b.a,null,r.a.createElement(x,{video:t,player:i})))))},k=function(e){var t=e.video,a=e.onVideoSelect,n=e.handleDescription;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{style:{display:"flex",alignItems:"right",cursor:"pointer"},onClick:function(){a(t),n(t)}},r.a.createElement("img",{style:{marginRight:"3px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(p.a,{variant:"subtitle2"},r.a.createElement("b",null,t.snippet.title))))},w=function(e){var t=e.videos,a=e.onVideoSelect,n=e.handleDescription,i=t.map((function(e){return r.a.createElement(k,{onVideoSelect:a,handleDescription:n,key:e.id.videoId,video:e})}));return r.a.createElement(m.a,{container:!0,spacing:10},i)},C=a(35),A=a.n(C),T=a(48),I=a(71),W=a.n(I).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(m.a,{style:{justifyContent:"center"}},r.a.createElement(m.a,{container:!0,spacing:5,style:{justifyContent:"center"}},r.a.createElement(m.a,{item:!0,xs:4,sm:8,md:10,style:{justifyContent:"center"}},r.a.createElement(y,{onSubmit:function(e){return p.apply(this,arguments)}})),r.a.createElement(m.a,{item:!0,xs:4,sm:8,md:8},r.a.createElement(S,{video:u})),r.a.createElement(m.a,{item:!0,xs:2,sm:4,md:4},r.a.createElement(w,{videos:a,onVideoSelect:s,handleDescription:d}))))));function p(){return(p=Object(T.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("search",{params:{part:"snippet",maxResults:6,type:"video",key:"AIzaSyATGhplOMLs0KlePQnIk2t3yYyOpT02euA",q:t}});case 2:a=e.sent,n=a.data.items,i(n),u||s(n[0]),d(n[0]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=Object(T.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("videos",{params:{part:"snippet",id:t.id.videoId,key:"AIzaSyATGhplOMLs0KlePQnIk2t3yYyOpT02euA"}});case 2:a=e.sent,n=a.data.items,s(n[0]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},F=a(25);var L=function(){return r.a.createElement(v.a,{basename:"/YouTube-Clone"},r.a.createElement(F.c,null,r.a.createElement(F.a,{path:"/",exact:!0,component:D}),r.a.createElement(F.a,{path:"/ui",exact:!0,component:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){e.exports=a(114)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.f988ff5f.chunk.js.map
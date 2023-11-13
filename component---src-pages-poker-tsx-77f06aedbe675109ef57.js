"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[586],{4001:function(e,t,a){var n=a(5785),l=a(7294),c=a(4593),r=a(1883);t.Z=e=>{var t,a,o;let{description:i="",lang:s="en",meta:m=[],title:u="jordanrhea.com",image:d}=e;const{site:p}=(0,r.useStaticQuery)("1324386404"),E=i||p.siteMetadata.description,f=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;if(d){const e=d;m=[].concat((0,n.Z)(m),[{property:"og:image",content:e},{name:"twitter:image",content:e}])}return l.createElement(c.q,{htmlAttributes:{lang:s},title:u,titleTemplate:f?`%s | ${f}`:void 0,meta:[{name:"description",content:E},{property:"og:title",content:u},{property:"og:description",content:E},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(o=a.social)||void 0===o?void 0:o.twitter)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:E}].concat((0,n.Z)(m))})}},8724:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(1883),l=a(8032),c=a(7294),r=a(5785);const o=["clubs ♣","diamonds ♦","hearts ♥","spades ♠"],i=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];var s=()=>{const{0:e,1:t}=(0,c.useState)(""),{0:a,1:n}=(0,c.useState)("");return""===e||""===a?c.createElement("div",null,c.createElement("div",null,i.map((e=>c.createElement("button",{onClick:()=>t(e),key:e},e)))),c.createElement("div",null,o.map((e=>c.createElement("button",{onClick:()=>n(e[0]),key:e},e))))):c.createElement("span",{className:"poker-card",onClick:()=>{t(""),n("")}},e,a)};var m=e=>{let{seats:t}=e;const{0:a,1:n}=(0,c.useState)([]);return c.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a)}},c.createElement("div",{className:"pre-flop"},c.createElement("span",null,"Dealt:"),c.createElement(s,null),c.createElement(s,null),c.createElement(u,{seats:t,handleClick:()=>{const e=[].concat((0,r.Z)(a),[{round:"pre-flop",action:"stuff"}]);n(e)}},c.createElement("div",null,a.filter((e=>"pre-flop"===e.round)).map((e=>c.createElement("p",null,e.action)))))),c.createElement("div",{className:"flop"},c.createElement("span",null,"Flop"),c.createElement(s,null),c.createElement(s,null),c.createElement(s,null),c.createElement(u,{seats:t,handleClick:()=>{const e=[].concat((0,r.Z)(a),[{round:"flop",action:"stuff"}]);n(e)}},c.createElement("div",null,a.filter((e=>"flop"===e.round)).map((e=>c.createElement("p",null,e.action)))))),c.createElement("div",{className:"turn"},c.createElement("span",null,"Turn"),c.createElement(s,null),c.createElement(u,{seats:t,handleClick:()=>{const e=[].concat((0,r.Z)(a),[{round:"turn",action:"stuff"}]);n(e)}},c.createElement("div",null,a.filter((e=>"turn"===e.round)).map((e=>c.createElement("p",null,e.action)))))),c.createElement("div",{className:"river"},c.createElement("span",null,"River"),c.createElement(s,null),c.createElement(u,{seats:t,handleClick:()=>{const e=[].concat((0,r.Z)(a),[{round:"river",action:"stuff"}]);n(e)}},c.createElement("div",null,a.filter((e=>"river"===e.round)).map((e=>c.createElement("p",null,e.action)))))),c.createElement("div",{className:"showdown"},c.createElement("button",{type:"submit"},"Save Hand")))};const u=e=>{let{seats:t,handleClick:a,children:n}=e;return c.createElement(c.Fragment,null,c.createElement("div",{className:"poker-action"},c.createElement("select",null,c.createElement("option",{value:"UTG"},"UTG"),c.createElement("option",{value:"UTG+1"},"UTG+1"),c.createElement("option",{value:"MP"},"MP"),c.createElement("option",{value:"HJ"},"HJ"),c.createElement("option",{value:"CO"},"CO"),c.createElement("option",{value:"BTN"},"BTN"),c.createElement("option",{value:"SB"},"SB"),c.createElement("option",{value:"BB"},"BB")),c.createElement("select",null,t.map(((e,t)=>c.createElement("option",{value:e.name,key:"pre-flop-"+t},e.name)))),c.createElement("select",null,c.createElement("option",{value:"check"},"check"),c.createElement("option",{value:"bet"},"bet"),c.createElement("option",{value:"raise"},"raise"),c.createElement("option",{value:"call"},"call"),c.createElement("option",{value:"fold"},"fold")),c.createElement("input",{type:"number"})),c.createElement("button",{onClick:a},"+"),n)};var d=e=>{let{seats:t,handleUpdateSeat:a,handleAddSeat:n}=e;const l=(e,t)=>{if(console.log("on change",e),"checkbox"===t.target.type){let n=t.target.checked;a(e,{[t.target.name]:n})}else a(e,{[t.target.name]:t.target.value})};return c.createElement(c.Fragment,null,t.map(((e,t)=>c.createElement("div",{className:"poker-seat",key:t},c.createElement("input",{name:"hero",type:"checkbox",checked:e.hero,onChange:e=>l(t,e)}),c.createElement("input",{name:"name",value:e.name,onChange:e=>l(t,e)}),c.createElement("input",{name:"in",type:"number",value:e.in,onChange:e=>l(t,e)}),c.createElement("input",{name:"out",type:"number",value:e.out,onChange:e=>l(t,e)})))),c.createElement("button",{onClick:n},"+"))},p=a(4001);const E={name:"",hero:!1,in:0},f={seats:[E],hands:[]},v=(e,t)=>{switch(t.type){case"add_seat":return e.seats.push(E),{...e};case"update_seat":{let a=e.seats[t.payload.seatIdx];return e.seats[t.payload.seatIdx]={...a,...t.payload.update},console.log(e),{...e}}default:return e}},h=e=>{let{title:t,isActive:a,handleClick:n,children:l}=e;return c.createElement(c.Fragment,null,c.createElement("button",{className:"accordion",onClick:n},t),c.createElement("div",{className:`panel ${a&&"active"}`},l))};var g=()=>{const{0:e,1:t}=(0,c.useState)(0),{0:r,1:o}=(0,c.useReducer)(v,f);return c.createElement("div",{className:"poker-page"},c.createElement(p.Z,{title:"Poker Notes"}),c.createElement(h,{title:`Game Seats (${r.seats.length})`,isActive:1===e,handleClick:()=>t((e=>1===e?-1:1))},c.createElement(d,{seats:r.seats,handleAddSeat:()=>o({type:"add_seat"}),handleUpdateSeat:(e,t)=>o({type:"update_seat",payload:{seatIdx:e,update:t}})})),c.createElement(h,{title:"Take Notes",isActive:2===e,handleClick:()=>t((e=>2===e?-1:2))},c.createElement(m,{seats:r.seats})),c.createElement(h,{title:`All Hands (${r.hands.length})`,isActive:3===e,handleClick:()=>t((e=>3===e?-1:3))},c.createElement("h1",null,"all hands")),c.createElement("footer",null,c.createElement("b",null,"Poker Hand Notes"),c.createElement(n.Link,{to:"/"},c.createElement(l.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:a(4363)}))))}},4363:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png","srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/9ddfc/jr-icon.png 72w","sizes":"36px"},"sources":[{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/08e7f/jr-icon.avif 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/3b598/jr-icon.avif 72w","type":"image/avif","sizes":"36px"},{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/206df/jr-icon.webp 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/93966/jr-icon.webp 72w","type":"image/webp","sizes":"36px"}]},"width":36,"height":36}')}}]);
//# sourceMappingURL=component---src-pages-poker-tsx-77f06aedbe675109ef57.js.map
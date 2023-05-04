"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[586],{8724:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(1597),l=n(7059),r=n(7294),c=n(2982),u=["clubs ♣","diamonds ♦","hearts ♥","spades ♠"],o=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],i=function(){var e=(0,r.useState)(""),t=e[0],n=e[1],a=(0,r.useState)(""),l=a[0],c=a[1];return""===t||""===l?r.createElement("div",null,r.createElement("div",null,o.map((function(e){return r.createElement("button",{onClick:function(){return n(e)},key:e},e)}))),r.createElement("div",null,u.map((function(e){return r.createElement("button",{onClick:function(){return c(e[0])},key:e},e)})))):r.createElement("span",{className:"poker-card",onClick:function(){n(""),c("")}},t,l)},m=function(e){var t=e.seats,n=(0,r.useState)([]),a=n[0],l=n[1];return r.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(a)}},r.createElement("div",{className:"pre-flop"},r.createElement("span",null,"Dealt:"),r.createElement(i,null),r.createElement(i,null),r.createElement(s,{seats:t,handleClick:function(){var e=[].concat((0,c.Z)(a),[{round:"pre-flop",action:"stuff"}]);l(e)}},r.createElement("div",null,a.filter((function(e){return"pre-flop"===e.round})).map((function(e){return r.createElement("p",null,e.action)}))))),r.createElement("div",{className:"flop"},r.createElement("span",null,"Flop"),r.createElement(i,null),r.createElement(i,null),r.createElement(i,null),r.createElement(s,{seats:t,handleClick:function(){var e=[].concat((0,c.Z)(a),[{round:"flop",action:"stuff"}]);l(e)}},r.createElement("div",null,a.filter((function(e){return"flop"===e.round})).map((function(e){return r.createElement("p",null,e.action)}))))),r.createElement("div",{className:"turn"},r.createElement("span",null,"Turn"),r.createElement(i,null),r.createElement(s,{seats:t,handleClick:function(){var e=[].concat((0,c.Z)(a),[{round:"turn",action:"stuff"}]);l(e)}},r.createElement("div",null,a.filter((function(e){return"turn"===e.round})).map((function(e){return r.createElement("p",null,e.action)}))))),r.createElement("div",{className:"river"},r.createElement("span",null,"River"),r.createElement(i,null),r.createElement(s,{seats:t,handleClick:function(){var e=[].concat((0,c.Z)(a),[{round:"river",action:"stuff"}]);l(e)}},r.createElement("div",null,a.filter((function(e){return"river"===e.round})).map((function(e){return r.createElement("p",null,e.action)}))))),r.createElement("div",{className:"showdown"},r.createElement("button",{type:"submit"},"Save Hand")))},s=function(e){var t=e.seats,n=e.handleClick,a=e.children;return r.createElement(r.Fragment,null,r.createElement("div",{className:"poker-action"},r.createElement("select",null,r.createElement("option",{value:"UTG"},"UTG"),r.createElement("option",{value:"UTG+1"},"UTG+1"),r.createElement("option",{value:"MP"},"MP"),r.createElement("option",{value:"HJ"},"HJ"),r.createElement("option",{value:"CO"},"CO"),r.createElement("option",{value:"BTN"},"BTN"),r.createElement("option",{value:"SB"},"SB"),r.createElement("option",{value:"BB"},"BB")),r.createElement("select",null,t.map((function(e,t){return r.createElement("option",{value:e.name,key:"pre-flop-"+t},e.name)}))),r.createElement("select",null,r.createElement("option",{value:"check"},"check"),r.createElement("option",{value:"bet"},"bet"),r.createElement("option",{value:"raise"},"raise"),r.createElement("option",{value:"call"},"call"),r.createElement("option",{value:"fold"},"fold")),r.createElement("input",{type:"number"})),r.createElement("button",{onClick:n},"+"),a)},d=function(e){var t=e.seats,n=e.handleUpdateSeat,a=e.handleAddSeat,l=function(e,t){if(console.log("on change",e),"checkbox"===t.target.type){var a,l=t.target.checked;n(e,((a={})[t.target.name]=l,a))}else{var r;n(e,((r={})[t.target.name]=t.target.value,r))}};return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement("div",{className:"poker-seat",key:t},r.createElement("input",{name:"hero",type:"checkbox",checked:e.hero,onChange:function(e){return l(t,e)}}),r.createElement("input",{name:"name",value:e.name,onChange:function(e){return l(t,e)}}),r.createElement("input",{name:"in",type:"number",value:e.in,onChange:function(e){return l(t,e)}}),r.createElement("input",{name:"out",type:"number",value:e.out,onChange:function(e){return l(t,e)}}))})),r.createElement("button",{onClick:a},"+"))},p=n(4001),E={name:"",hero:!1,in:0},f={seats:[E],hands:[]},v=function(e,t){switch(t.type){case"add_seat":return e.seats.push(E),Object.assign({},e);case"update_seat":var n=e.seats[t.payload.seatIdx];return e.seats[t.payload.seatIdx]=Object.assign({},n,t.payload.update),console.log(e),Object.assign({},e);default:return e}},h=function(e){var t=e.title,n=e.isActive,a=e.handleClick,l=e.children;return r.createElement(r.Fragment,null,r.createElement("button",{className:"accordion",onClick:a},t),r.createElement("div",{className:"panel "+(n&&"active")},l))},k=function(){var e=(0,r.useState)(0),t=e[0],c=e[1],u=(0,r.useReducer)(v,f),o=u[0],i=u[1];return r.createElement("div",{className:"poker-page"},r.createElement(p.Z,{title:"Poker Notes"}),r.createElement(h,{title:"Game Seats ("+o.seats.length+")",isActive:1===t,handleClick:function(){return c((function(e){return 1===e?-1:1}))}},r.createElement(d,{seats:o.seats,handleAddSeat:function(){return i({type:"add_seat"})},handleUpdateSeat:function(e,t){return i({type:"update_seat",payload:{seatIdx:e,update:t}})}})),r.createElement(h,{title:"Take Notes",isActive:2===t,handleClick:function(){return c((function(e){return 2===e?-1:2}))}},r.createElement(m,{seats:o.seats})),r.createElement(h,{title:"All Hands ("+o.hands.length+")",isActive:3===t,handleClick:function(){return c((function(e){return 3===e?-1:3}))}},r.createElement("h1",null,"all hands")),r.createElement("footer",null,r.createElement("b",null,"Poker Hand Notes"),r.createElement(a.Link,{to:"/"},r.createElement(l.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:n(439)}))))}}}]);
//# sourceMappingURL=component---src-pages-poker-tsx-a5dace76b036476e85a2.js.map
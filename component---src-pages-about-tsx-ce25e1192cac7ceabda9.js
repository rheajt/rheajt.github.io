"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[49],{1940:function(e,n,t){t.d(n,{Z:function(){return E}});var a=t(1597),o=t(7294),l=t(3935),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},i(e,n)};function r(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var s=function(){return s=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},s.apply(this,arguments)};var c;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(c||(c={}));var d=function(e){var n=e.url,t=e.prefill,a=void 0===t?{}:t,o=e.pageSettings,l=void 0===o?{}:o,i=e.utm,r=void 0===i?{}:i,s=e.embedType,c=l.backgroundColor,d=l.hideEventTypeDetails,m=l.hideLandingPageDetails,f=l.primaryColor,h=l.textColor,y=l.hideGdprBanner,g=a.customAnswers,b=a.date,v=a.email,w=a.firstName,E=a.guests,k=a.lastName,x=a.location,C=a.name,_=r.utmCampaign,N=r.utmContent,S=r.utmMedium,I=r.utmSource,j=r.utmTerm,L=n.indexOf("?"),T=L>-1,O=n.slice(L+1);return(T?n.slice(0,L):n)+"?"+[T?O:null,c?"background_color="+c:null,d?"hide_event_type_details=1":null,m?"hide_landing_page_details=1":null,f?"primary_color="+f:null,h?"text_color="+h:null,y?"hide_gdpr_banner=1":null,C?"name="+encodeURIComponent(C):null,x?"location="+encodeURIComponent(x):null,w?"first_name="+encodeURIComponent(w):null,k?"last_name="+encodeURIComponent(k):null,E?"guests="+E.join(","):null,v?"email="+v:null,b&&b instanceof Date?"date="+p(b):null,_?"utm_campaign="+encodeURIComponent(_):null,N?"utm_content="+encodeURIComponent(N):null,S?"utm_medium="+encodeURIComponent(S):null,I?"utm_source="+encodeURIComponent(I):null,j?"utm_term="+encodeURIComponent(j):null,s?"embed_type="+s:null,"embed_domain=1"].concat(g?u(g):[]).filter((function(e){return null!==e})).join("&")},p=function(e){var n=e.getMonth()+1,t=e.getDate();return[e.getFullYear(),n<10?"0"+n:n,t<10?"0"+t:t].join("-")},m=/^a\d{1,2}$/,u=function(e){var n=Object.keys(e).filter((function(e){return e.match(m)}));return n.length?n.map((function(n){return n+"="+encodeURIComponent(e[n])})):[]},f=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-spinner"},(0,o.createElement)("div",{className:"calendly-bounce1"}),(0,o.createElement)("div",{className:"calendly-bounce2"}),(0,o.createElement)("div",{className:"calendly-bounce3"}))},n}(o.Component),h={minWidth:"320px",height:"630px"},y=(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,o.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||h},this.state.isLoading&&(0,o.createElement)(f,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))}}(o.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,o.createElement)(o.Fragment,null,this.state.isLoading&&(0,o.createElement)(f,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(o.Component)),g=function(e){return e.open?(0,l.createPortal)((0,o.createElement)("div",{className:"calendly-overlay"},(0,o.createElement)("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),(0,o.createElement)("div",{className:"calendly-popup"},(0,o.createElement)("div",{className:"calendly-popup-content"},(0,o.createElement)(y,s({},e)))),(0,o.createElement)("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement):null},b=(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}r(n,e),n.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,o.createElement)(g,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(o.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return r(n,e),n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,o.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,o.createElement)("span",null,"powered by Calendly")),(0,o.createElement)(g,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n}(o.Component));var v=t(8945),w=function(e){var n=e.showLinks,l=void 0===n||n;return o.createElement("header",{className:"header"},o.createElement(a.Link,{to:"/"},o.createElement(v.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:t(439)})),o.createElement("nav",{className:l?"":"is-hidden"},o.createElement("div",{className:"page-links"},o.createElement(a.Link,{className:"sans",to:"/projects"},"Projects"),o.createElement(a.Link,{className:"sans",to:"/blog"},"Blog"),o.createElement(a.Link,{className:"sans",to:"/contact"},"Contact"))))},E=function(e){var n=e.location,t=e.children,l="/"===n.pathname,i="undefined"!=typeof window;return o.createElement("div",{className:"global-wrapper","data-is-root-path":l},o.createElement(w,null),o.createElement("main",null,t),i&&o.createElement(b,{url:"https://calendly.com/jordanrhea/30min",rootElement:document.querySelector("body"),text:"SCHEDULE A MEETING",textColor:"#ffffff",color:"#00a2ff"}),o.createElement("footer",null,o.createElement("div",null,"© ",(new Date).getFullYear()," ",o.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),o.createElement("div",{className:"legals"},o.createElement(a.Link,{to:"/privacy"},"privacy"),o.createElement(a.Link,{to:"/terms"},"terms"))))}},9681:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var a=t(7294),o=t(1940),l={theme:"dark-v10",lat:-77.4469,lng:37.5628,zoom:11.64,token:"pk.eyJ1IjoicmhlYWp0IiwiYSI6ImNqNjR1MWd0YTF2ZTIzM3E3OHVzNXh6YXQifQ.aDdsJcGnpBi5982--JQZVA"};var i=function(e){var n,t=e.location;return a.createElement(o.Z,{location:t,title:"About"},a.createElement("h1",null,"About Page"),a.createElement("section",null,a.createElement("p",null,"I am a solutions developer working with both Google Workspaces and Microsoft 365. I like building tools to make our digital work lives easier."),a.createElement("p",null,"I have lived all over the world in different roles. I was a United States Marine in Okinawa, Japan. I taught middle school English in Richmond, VA. I became a self-taught computer programmer in Izmir, Turkey. Now I am doing development work in Beijing, China."),a.createElement("p",null,a.createElement("figure",{className:"marginnote"},a.createElement("img",{src:(void 0===n&&(n=l),["https://api.mapbox.com/styles/v1/mapbox/",n.theme,"/static/"+n.lat+","+n.lng+","+n.zoom+",0/","500x400?access_token="+n.token].join("")),alt:"map"}))),a.createElement("p",null,"I write code using JavaScript, Typescript, and Google Apps Script. I have built SPFx webparts in Microsoft Sharepoint and written many automations in Google Workspaces. The idea of automating the boring parts of the day is incredible.")))}},439:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png","srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/9ddfc/jr-icon.png 72w","sizes":"36px"},"sources":[{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/08e7f/jr-icon.avif 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/3b598/jr-icon.avif 72w","type":"image/avif","sizes":"36px"},{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/206df/jr-icon.webp 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/93966/jr-icon.webp 72w","type":"image/webp","sizes":"36px"}]},"width":36,"height":36}')}}]);
//# sourceMappingURL=component---src-pages-about-tsx-ce25e1192cac7ceabda9.js.map
"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[49],{6595:function(e,n,t){t.d(n,{KS:function(){return f},kR:function(){return b}});var o=t(7294),a=t(3935),l=function(e,n){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},l(e,n)};function i(e,n){function t(){this.constructor=e}l(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var r=function(){return r=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},r.apply(this,arguments)};var s;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(s||(s={}));var c=function(e){var n=e.url,t=e.prefill,o=void 0===t?{}:t,a=e.pageSettings,l=void 0===a?{}:a,i=e.utm,r=void 0===i?{}:i,s=e.embedType,c=l.backgroundColor,p=l.hideEventTypeDetails,u=l.hideLandingPageDetails,h=l.primaryColor,f=l.textColor,y=l.hideGdprBanner,g=o.customAnswers,b=o.date,v=o.email,E=o.firstName,w=o.guests,k=o.lastName,C=o.location,x=o.name,_=r.utmCampaign,N=r.utmContent,I=r.utmMedium,L=r.utmSource,S=r.utmTerm,j=n.indexOf("?"),T=j>-1,O=n.slice(j+1);return(T?n.slice(0,j):n)+"?"+[T?O:null,c?"background_color="+c:null,p?"hide_event_type_details=1":null,u?"hide_landing_page_details=1":null,h?"primary_color="+h:null,f?"text_color="+f:null,y?"hide_gdpr_banner=1":null,x?"name="+encodeURIComponent(x):null,C?"location="+encodeURIComponent(C):null,E?"first_name="+encodeURIComponent(E):null,k?"last_name="+encodeURIComponent(k):null,w?"guests="+w.map(encodeURIComponent).join(","):null,v?"email="+encodeURIComponent(v):null,b&&b instanceof Date?"date="+d(b):null,_?"utm_campaign="+encodeURIComponent(_):null,N?"utm_content="+encodeURIComponent(N):null,I?"utm_medium="+encodeURIComponent(I):null,L?"utm_source="+encodeURIComponent(L):null,S?"utm_term="+encodeURIComponent(S):null,s?"embed_type="+s:null,"embed_domain=1"].concat(g?m(g):[]).filter((function(e){return null!==e})).join("&")},d=function(e){var n=e.getMonth()+1,t=e.getDate();return[e.getFullYear(),n<10?"0"+n:n,t<10?"0"+t:t].join("-")},p=/^a\d{1,2}$/,m=function(e){var n=Object.keys(e).filter((function(e){return e.match(p)}));return n.length?n.map((function(n){return n+"="+encodeURIComponent(e[n])})):[]},u=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-spinner"},(0,o.createElement)("div",{className:"calendly-bounce1"}),(0,o.createElement)("div",{className:"calendly-bounce2"}),(0,o.createElement)("div",{className:"calendly-bounce3"}))},n}(o.Component),h={minWidth:"320px",height:"630px"},f=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=c({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,o.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||h},this.state.isLoading&&(0,o.createElement)(u,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(o.Component),y=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=c({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,o.createElement)(o.Fragment,null,this.state.isLoading&&(0,o.createElement)(u,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(o.Component),g=function(e){return e.open?(0,a.createPortal)((0,o.createElement)("div",{className:"calendly-overlay"},(0,o.createElement)("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),(0,o.createElement)("div",{className:"calendly-popup"},(0,o.createElement)("div",{className:"calendly-popup-content"},(0,o.createElement)(y,r({},e)))),(0,o.createElement)("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement):null},b=(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}i(n,e),n.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,o.createElement)(g,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(o.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return i(n,e),n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,o.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,o.createElement)("span",null,"powered by Calendly")),(0,o.createElement)(g,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n}(o.Component))},6791:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(1597),a=t(7294),l=t(6595),i=t(7059),r=function(e){var n=e.pathname,l=e.showLinks,r=void 0===l||l;return a.createElement("header",{className:"header"},a.createElement(o.Link,{to:"/"},a.createElement(i.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:t(439)})),a.createElement("nav",{className:r?"":"is-hidden"},a.createElement("div",{className:"page-links"},a.createElement(o.Link,{className:"sans "+(n.includes("projects")&&"active"),to:"/projects"},"Projects"),a.createElement(o.Link,{className:"sans "+(n.includes("blog")&&"active"),to:"/blog"},"Blog"),a.createElement(o.Link,{className:"sans "+(n.includes("contact")&&"active"),to:"/contact"},"Contact"))))},s=function(e){var n=e.location,t=e.children,i="/"===n.pathname;return a.createElement("div",{className:"global-wrapper","data-is-root-path":i},a.createElement(r,{pathname:n.pathname}),a.createElement("main",null,t),a.createElement("footer",null,a.createElement("div",null,"© ",(new Date).getFullYear()," ",a.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),a.createElement(l.kR,{url:"https://calendly.com/jordan-rhea/30min",rootElement:document.getElementById("___gatsby"),text:"Let's talk solutions!",textColor:"#ffffff",color:"#283597"}),a.createElement("div",{className:"legals"},a.createElement(o.Link,{to:"/privacy"},"privacy"),a.createElement(o.Link,{to:"/terms"},"terms"))))}},1394:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var o=t(7294),a=t(6791),l={theme:"dark-v10",lat:-77.4469,lng:37.5628,zoom:11.64,token:"pk.eyJ1IjoicmhlYWp0IiwiYSI6ImNqNjR1MWd0YTF2ZTIzM3E3OHVzNXh6YXQifQ.aDdsJcGnpBi5982--JQZVA"};var i=function(e){var n,t=e.location;return o.createElement(a.Z,{location:t,title:"About"},o.createElement("h1",null,"About Page"),o.createElement("section",null,o.createElement("p",null,"I am a solutions developer working with both Google Workspaces and Microsoft 365. I like building tools to make our digital work lives easier."),o.createElement("p",null,"I have lived all over the world in different roles. I was a United States Marine in Okinawa, Japan. I taught middle school English in Richmond, VA. I became a self-taught computer programmer in Izmir, Turkey. Now I am doing development work in Beijing, China."),o.createElement("p",null,o.createElement("figure",{className:"marginnote"},o.createElement("img",{src:(void 0===n&&(n=l),["https://api.mapbox.com/styles/v1/mapbox/",n.theme,"/static/"+n.lat+","+n.lng+","+n.zoom+",0/","500x400?access_token="+n.token].join("")),alt:"map"}))),o.createElement("p",null,"I write code using JavaScript, Typescript, and Google Apps Script. I have built SPFx webparts in Microsoft Sharepoint and written many automations in Google Workspaces. The idea of automating the boring parts of the day is incredible.")))}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-ce25e7bd1301a4e4ad1e.js.map
"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[153],{6791:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(1597),o=t(7294),l=t(7059),i=function(e){var n=e.pathname,i=e.showLinks,r=void 0===i||i;return o.createElement("header",{className:"header"},o.createElement(a.Link,{to:"/"},o.createElement(l.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:t(439)})),o.createElement("nav",{className:r?"":"is-hidden"},o.createElement("div",{className:"page-links"},o.createElement(a.Link,{className:"sans "+(n.includes("projects")&&"active"),to:"/projects"},"Projects"),o.createElement(a.Link,{className:"sans "+(n.includes("blog")&&"active"),to:"/blog"},"Blog"),o.createElement(a.Link,{className:"sans "+(n.includes("contact")&&"active"),to:"/contact"},"Contact"))))},r=function(e){var n=e.location,t=e.children,l="/"===n.pathname;return o.createElement("div",{className:"global-wrapper","data-is-root-path":l},o.createElement(i,{pathname:n.pathname}),o.createElement("main",null,t),o.createElement("footer",null,o.createElement("div",null,"© ",(new Date).getFullYear()," ",o.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),o.createElement("div",{className:"legals"},o.createElement(a.Link,{to:"/privacy"},"privacy"),o.createElement(a.Link,{to:"/terms"},"terms"))))}},7647:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(7294),o=t(3935),l=function(e,n){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},l(e,n)};function i(e,n){function t(){this.constructor=e}l(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var r=function(){return r=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};var s;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&a.firstChild?a.insertBefore(o,a.firstChild):a.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(s||(s={}));var c=function(e){var n=e.url,t=e.prefill,a=void 0===t?{}:t,o=e.pageSettings,l=void 0===o?{}:o,i=e.utm,r=void 0===i?{}:i,s=e.embedType,c=l.backgroundColor,p=l.hideEventTypeDetails,u=l.hideLandingPageDetails,h=l.primaryColor,f=l.textColor,y=l.hideGdprBanner,g=a.customAnswers,b=a.date,v=a.email,E=a.firstName,C=a.guests,w=a.lastName,x=a.location,k=a.name,_=r.utmCampaign,N=r.utmContent,S=r.utmMedium,L=r.utmSource,j=r.utmTerm,T=n.indexOf("?"),O=T>-1,D=n.slice(T+1);return(O?n.slice(0,T):n)+"?"+[O?D:null,c?"background_color="+c:null,p?"hide_event_type_details=1":null,u?"hide_landing_page_details=1":null,h?"primary_color="+h:null,f?"text_color="+f:null,y?"hide_gdpr_banner=1":null,k?"name="+encodeURIComponent(k):null,x?"location="+encodeURIComponent(x):null,E?"first_name="+encodeURIComponent(E):null,w?"last_name="+encodeURIComponent(w):null,C?"guests="+C.map(encodeURIComponent).join(","):null,v?"email="+encodeURIComponent(v):null,b&&b instanceof Date?"date="+d(b):null,_?"utm_campaign="+encodeURIComponent(_):null,N?"utm_content="+encodeURIComponent(N):null,S?"utm_medium="+encodeURIComponent(S):null,L?"utm_source="+encodeURIComponent(L):null,j?"utm_term="+encodeURIComponent(j):null,s?"embed_type="+s:null,"embed_domain=1"].concat(g?m(g):[]).filter((function(e){return null!==e})).join("&")},d=function(e){var n=e.getMonth()+1,t=e.getDate();return[e.getFullYear(),n<10?"0"+n:n,t<10?"0"+t:t].join("-")},p=/^a\d{1,2}$/,m=function(e){var n=Object.keys(e).filter((function(e){return e.match(p)}));return n.length?n.map((function(n){return n+"="+encodeURIComponent(e[n])})):[]},u=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n.prototype.render=function(){return(0,a.createElement)("div",{className:"calendly-spinner"},(0,a.createElement)("div",{className:"calendly-bounce1"}),(0,a.createElement)("div",{className:"calendly-bounce2"}),(0,a.createElement)("div",{className:"calendly-bounce3"}))},n}(a.Component),h={minWidth:"320px",height:"630px"},f=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=c({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,a.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||h},this.state.isLoading&&(0,a.createElement)(u,null),(0,a.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(a.Component),y=function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=c({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,a.createElement)(a.Fragment,null,this.state.isLoading&&(0,a.createElement)(u,null),(0,a.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(a.Component),g=function(e){return e.open?(0,o.createPortal)((0,a.createElement)("div",{className:"calendly-overlay"},(0,a.createElement)("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),(0,a.createElement)("div",{className:"calendly-popup"},(0,a.createElement)("div",{className:"calendly-popup-content"},(0,a.createElement)(y,r({},e)))),(0,a.createElement)("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement):null};(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}i(n,e),n.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,a.createElement)(a.Fragment,null,(0,a.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,a.createElement)(g,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}})(a.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}i(n,e),n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,a.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,a.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,a.createElement)("span",null,"powered by Calendly")),(0,a.createElement)(g,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(a.Component);var b=t(6791),v=t(4001),E=function(e){var n=e.location;return a.createElement(b.Z,{location:n,title:"jordanrhea.com"},a.createElement(v.Z,{title:"Schedule Page"}),a.createElement(f,{iframeTitle:"Jordan's Scheduling Page",pageSettings:{backgroundColor:"ffffff",hideEventTypeDetails:!1,hideGdprBanner:!0,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"},prefill:{customAnswers:{a1:"a1",a10:"a10",a2:"a2",a3:"a3",a4:"a4",a5:"a5",a6:"a6",a7:"a7",a8:"a8",a9:"a9"},date:new Date,email:"rheajt@gmail.com",firstName:"Jordan",guests:["janedoe@example.com","johndoe@example.com"],lastName:"Rhea",name:"Jordan Rhea"},styles:{height:"1000px"},url:"https://calendly.com/jordanrhea",utm:{utmCampaign:"Spring Sale 2019",utmContent:"Shoe and Shirts",utmMedium:"Ad",utmSource:"Facebook",utmTerm:"Spring"}}))}}}]);
//# sourceMappingURL=component---src-pages-schedule-tsx-371b522105bda8613b52.js.map
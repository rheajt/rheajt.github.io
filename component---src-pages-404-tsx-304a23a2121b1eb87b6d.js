"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[218],{1940:function(e,n,t){t.d(n,{Z:function(){return w}});var o=t(1597),l=t(7294),a=t(3935),i=function(e,n){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},i(e,n)};function r(e,n){function t(){this.constructor=e}i(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var s=function(){return s=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},s.apply(this,arguments)};var c;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(e){e.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",e.EVENT_TYPE_VIEWED="calendly.event_type_viewed",e.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",e.EVENT_SCHEDULED="calendly.event_scheduled"}(c||(c={}));var d=function(e){var n=e.url,t=e.prefill,o=void 0===t?{}:t,l=e.pageSettings,a=void 0===l?{}:l,i=e.utm,r=void 0===i?{}:i,s=e.embedType,c=a.backgroundColor,d=a.hideEventTypeDetails,m=a.hideLandingPageDetails,h=a.primaryColor,y=a.textColor,f=a.hideGdprBanner,g=o.customAnswers,b=o.date,E=o.email,v=o.firstName,w=o.guests,C=o.lastName,x=o.location,k=o.name,_=r.utmCampaign,N=r.utmContent,L=r.utmMedium,S=r.utmSource,j=r.utmTerm,O=n.indexOf("?"),T=O>-1,I=n.slice(O+1);return(T?n.slice(0,O):n)+"?"+[T?I:null,c?"background_color="+c:null,d?"hide_event_type_details=1":null,m?"hide_landing_page_details=1":null,h?"primary_color="+h:null,y?"text_color="+y:null,f?"hide_gdpr_banner=1":null,k?"name="+encodeURIComponent(k):null,x?"location="+encodeURIComponent(x):null,v?"first_name="+encodeURIComponent(v):null,C?"last_name="+encodeURIComponent(C):null,w?"guests="+w.join(","):null,E?"email="+E:null,b&&b instanceof Date?"date="+p(b):null,_?"utm_campaign="+encodeURIComponent(_):null,N?"utm_content="+encodeURIComponent(N):null,L?"utm_medium="+encodeURIComponent(L):null,S?"utm_source="+encodeURIComponent(S):null,j?"utm_term="+encodeURIComponent(j):null,s?"embed_type="+s:null,"embed_domain=1"].concat(g?u(g):[]).filter((function(e){return null!==e})).join("&")},p=function(e){var n=e.getMonth()+1,t=e.getDate();return[e.getFullYear(),n<10?"0"+n:n,t<10?"0"+t:t].join("-")},m=/^a\d{1,2}$/,u=function(e){var n=Object.keys(e).filter((function(e){return e.match(m)}));return n.length?n.map((function(n){return n+"="+encodeURIComponent(e[n])})):[]},h=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.render=function(){return(0,l.createElement)("div",{className:"calendly-spinner"},(0,l.createElement)("div",{className:"calendly-bounce1"}),(0,l.createElement)("div",{className:"calendly-bounce2"}),(0,l.createElement)("div",{className:"calendly-bounce3"}))},n}(l.Component),y={minWidth:"320px",height:"630px"},f=(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,l.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||y},this.state.isLoading&&(0,l.createElement)(h,null),(0,l.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))}}(l.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return r(n,e),n.prototype.onLoad=function(){this.setState({isLoading:!1})},n.prototype.render=function(){var e=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,l.createElement)(l.Fragment,null,this.state.isLoading&&(0,l.createElement)(h,null),(0,l.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:e}))},n}(l.Component)),g=function(e){return e.open?(0,a.createPortal)((0,l.createElement)("div",{className:"calendly-overlay"},(0,l.createElement)("div",{onClick:e.onModalClose,className:"calendly-close-overlay"}),(0,l.createElement)("div",{className:"calendly-popup"},(0,l.createElement)("div",{className:"calendly-popup-content"},(0,l.createElement)(f,s({},e)))),(0,l.createElement)("button",{className:"calendly-popup-close",onClick:e.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),e.rootElement):null},b=(function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}r(n,e),n.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,l.createElement)(g,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(l.Component),function(e){function n(n){var t=e.call(this,n)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return r(n,e),n.prototype.onClick=function(){this.setState({isOpen:!0})},n.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},n.prototype.render=function(){return(0,l.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,l.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,l.createElement)("span",null,"powered by Calendly")),(0,l.createElement)(g,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},n}(l.Component));var E=t(8945),v=function(e){var n=e.showLinks,a=void 0===n||n;return l.createElement("header",{className:"header"},l.createElement(o.Link,{to:"/"},l.createElement(E.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:t(439)})),l.createElement("nav",{className:a?"":"is-hidden"},l.createElement("div",{className:"page-links"},l.createElement(o.Link,{className:"sans",to:"/projects"},"Projects"),l.createElement(o.Link,{className:"sans",to:"/blog"},"Blog"),l.createElement(o.Link,{className:"sans",to:"/contact"},"Contact"))))},w=function(e){var n=e.location,t=e.children,a="/"===n.pathname,i="undefined"!=typeof window;return l.createElement("div",{className:"global-wrapper","data-is-root-path":a},l.createElement(v,null),l.createElement("main",null,t),i&&l.createElement(b,{url:"https://calendly.com/jordanrhea/30min",rootElement:document.querySelector("body"),text:"SCHEDULE A MEETING",textColor:"#ffffff",color:"#00a2ff"}),l.createElement("footer",null,l.createElement("div",null,"© ",(new Date).getFullYear()," ",l.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),l.createElement("div",{className:"legals"},l.createElement(o.Link,{to:"/privacy"},"privacy"),l.createElement(o.Link,{to:"/terms"},"terms"))))}},7735:function(e,n,t){t.r(n);var o=t(7294),l=t(1940),a=t(8320);n.default=function(e){var n=e.data,t=e.location,i=n.site.siteMetadata.title;return o.createElement(l.Z,{location:t,title:i},o.createElement(a.Z,{title:"404: Not Found"}),o.createElement("h1",null,"404: Not Found"),o.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-304a23a2121b1eb87b6d.js.map
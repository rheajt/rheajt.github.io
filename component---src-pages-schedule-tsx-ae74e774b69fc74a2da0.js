"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[153],{9606:function(n,e,t){t.r(e);var o=t(1883),l=t(7294),a=t(761),i=t(4001);const r="undefined"!=typeof window;e.default=n=>{let{location:e}=n;if(!r)return null;const t=e.search.substring(1).split("&").reduce(((n,e)=>{const[t,o]=e.split("=");return n[t]=o,n}),{});t.hasOwnProperty("dts")||(0,o.navigate)("/");const s=function(n){return JSON.parse(decodeURI(n))}(t.dts);return l.createElement(l.Fragment,null,l.createElement(i.Z,{title:"Schedule Page | jordanrhea.com"}),r&&l.createElement(a.KS,{iframeTitle:"Jordan's Scheduling Page",pageSettings:{backgroundColor:"ffffff",hideEventTypeDetails:!1,hideGdprBanner:!0,hideLandingPageDetails:!1,primaryColor:"00a2ff",textColor:"4d5055"},prefill:s,styles:{height:"1000px"},url:"https://calendly.com/jordanrhea/30min",utm:{utmCampaign:"Spring Sale 2019",utmContent:"Shoe and Shirts",utmMedium:"Ad",utmSource:"Facebook",utmTerm:"Spring"}}))}},761:function(n,e,t){t.d(e,{KS:function(){return f},kR:function(){return C}});var o=t(7294),l=t(3935),a=function(n,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},a(n,e)};function i(n,e){function t(){this.constructor=n}a(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var r=function(){return r=Object.assign||function(n){for(var e,t=1,o=arguments.length;t<o;t++)for(var l in e=arguments[t])Object.prototype.hasOwnProperty.call(e,l)&&(n[l]=e[l]);return n},r.apply(this,arguments)};var s;function c(n){return"#"===n.charAt(0)?n.slice(1):n}!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===t&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}("/*\n  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css\n*/\n\n.calendly-inline-widget,\n.calendly-inline-widget *,\n.calendly-badge-widget,\n.calendly-badge-widget *,\n.calendly-overlay,\n.calendly-overlay * {\n    font-size:16px;\n    line-height:1.2em\n}\n\n.calendly-inline-widget iframe,\n.calendly-badge-widget iframe,\n.calendly-overlay iframe {\n    display:inline;\n    width:100%;\n    height:100%\n}\n\n.calendly-popup-content {\n    position:relative\n}\n\n.calendly-popup-content.calendly-mobile {\n    -webkit-overflow-scrolling:touch;\n    overflow-y:auto\n}\n\n.calendly-overlay {\n    position:fixed;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0;\n    overflow:hidden;\n    z-index:9999;\n    background-color:#a5a5a5;\n    background-color:rgba(31,31,31,0.4)\n}\n\n.calendly-overlay .calendly-close-overlay {\n    position:absolute;\n    top:0;\n    left:0;\n    right:0;\n    bottom:0\n}\n\n.calendly-overlay .calendly-popup {\n    box-sizing:border-box;\n    position:absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translateY(-50%) translateX(-50%);\n    transform:translateY(-50%) translateX(-50%);\n    width:80%;\n    min-width:900px;\n    max-width:1000px;\n    height:90%;\n    max-height:680px\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup {\n        position:fixed;\n        top:50px;\n        left:0;\n        right:0;\n        bottom:0;\n        -webkit-transform:none;\n        transform:none;\n        width:100%;\n        height:auto;\n        min-width:0;\n        max-height:none\n    }\n}\n\n.calendly-overlay .calendly-popup .calendly-popup-content {\n    height:100%;\n}\n\n.calendly-overlay .calendly-popup-close {\n    position:absolute;\n    top:25px;\n    right:25px;\n    color:#fff;\n    width:19px;\n    height:19px;\n    cursor:pointer;\n    background:url(https://assets.calendly.com/assets/external/close-icon.svg) no-repeat;\n    background-size:contain\n}\n\n@media (max-width: 975px) {\n    .calendly-overlay .calendly-popup-close {\n        top:15px;\n        right:15px\n    }\n}\n\n.calendly-badge-widget {\n    position:fixed;\n    right:20px;\n    bottom:15px;\n    z-index:9998\n}\n\n.calendly-badge-widget .calendly-badge-content {\n    display:table-cell;\n    width:auto;\n    height:45px;\n    padding:0 30px;\n    border-radius:25px;\n    box-shadow:rgba(0,0,0,0.25) 0 2px 5px;\n    font-family:sans-serif;\n    text-align:center;\n    vertical-align:middle;\n    font-weight:bold;\n    font-size:14px;\n    color:#fff;\n    cursor:pointer\n}\n\n.calendly-badge-widget .calendly-badge-content.calendly-white {\n    color:#666a73\n}\n\n.calendly-badge-widget .calendly-badge-content span {\n    display:block;\n    font-size:12px\n}\n\n.calendly-spinner {\n    position:absolute;\n    top:50%;\n    left:0;\n    right:0;\n    -webkit-transform:translateY(-50%);\n    transform:translateY(-50%);\n    text-align:center;\n    z-index:-1\n}\n\n.calendly-spinner>div {\n    display:inline-block;\n    width:18px;\n    height:18px;\n    background-color:#e1e1e1;\n    border-radius:50%;\n    vertical-align:middle;\n    -webkit-animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    animation:calendly-bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode:both;\n    animation-fill-mode:both\n}\n\n.calendly-spinner .calendly-bounce1 {\n    -webkit-animation-delay:-0.32s;\n    animation-delay:-0.32s\n}\n\n.calendly-spinner .calendly-bounce2 {\n    -webkit-animation-delay:-0.16s;\n    animation-delay:-0.16s\n}\n\n@-webkit-keyframes calendly-bouncedelay {\n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    } \n    \n    40%{\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}\n\n@keyframes calendly-bouncedelay{ \n    0%,80%,100% {\n        -webkit-transform:scale(0);\n        transform:scale(0)\n    }\n    \n    40% {\n        -webkit-transform:scale(1);\n        transform:scale(1)\n    }\n}"),function(n){n.PROFILE_PAGE_VIEWED="calendly.profile_page_viewed",n.EVENT_TYPE_VIEWED="calendly.event_type_viewed",n.DATE_AND_TIME_SELECTED="calendly.date_and_time_selected",n.EVENT_SCHEDULED="calendly.event_scheduled"}(s||(s={}));var d=function(n){var e,t=n.url,o=n.prefill,l=void 0===o?{}:o,a=n.pageSettings,i=void 0===a?{}:a,r=n.utm,s=void 0===r?{}:r,d=n.embedType,u=((null==(e=i)?void 0:e.primaryColor)&&(e.primaryColor=c(e.primaryColor)),(null==e?void 0:e.textColor)&&(e.textColor=c(e.textColor)),(null==e?void 0:e.backgroundColor)&&(e.backgroundColor=c(e.backgroundColor)),e),h=u.backgroundColor,y=u.hideEventTypeDetails,f=u.hideLandingPageDetails,g=u.primaryColor,b=u.textColor,C=u.hideGdprBanner,v=l.customAnswers,w=l.date,x=l.email,E=l.firstName,_=l.guests,k=l.lastName,S=l.location,N=l.name,L=s.utmCampaign,O=s.utmContent,I=s.utmMedium,T=s.utmSource,P=s.utmTerm,R=s.salesforce_uuid,U=t.indexOf("?"),D=U>-1,j=t.slice(U+1);return(D?t.slice(0,U):t)+"?"+[D?j:null,h?"background_color="+h:null,y?"hide_event_type_details=1":null,f?"hide_landing_page_details=1":null,g?"primary_color="+g:null,b?"text_color="+b:null,C?"hide_gdpr_banner=1":null,N?"name="+encodeURIComponent(N):null,S?"location="+encodeURIComponent(S):null,E?"first_name="+encodeURIComponent(E):null,k?"last_name="+encodeURIComponent(k):null,_?"guests="+_.map(encodeURIComponent).join(","):null,x?"email="+encodeURIComponent(x):null,w&&w instanceof Date?"date="+p(w):null,L?"utm_campaign="+encodeURIComponent(L):null,O?"utm_content="+encodeURIComponent(O):null,I?"utm_medium="+encodeURIComponent(I):null,T?"utm_source="+encodeURIComponent(T):null,P?"utm_term="+encodeURIComponent(P):null,R?"salesforce_uuid="+encodeURIComponent(R):null,d?"embed_type="+d:null,"embed_domain=1"].concat(v?m(v):[]).filter((function(n){return null!==n})).join("&")},p=function(n){var e=n.getMonth()+1,t=n.getDate();return[n.getFullYear(),e<10?"0"+e:e,t<10?"0"+t:t].join("-")},u=/^a\d{1,2}$/,m=function(n){var e=Object.keys(n).filter((function(n){return n.match(u)}));return e.length?e.map((function(e){return e+"="+encodeURIComponent(n[e])})):[]},h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return i(e,n),e.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-spinner"},(0,o.createElement)("div",{className:"calendly-bounce1"}),(0,o.createElement)("div",{className:"calendly-bounce2"}),(0,o.createElement)("div",{className:"calendly-bounce3"}))},e}(o.Component),y={minWidth:"320px",height:"630px"},f=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"Inline"});return(0,o.createElement)("div",{className:"calendly-inline-widget",style:this.props.styles||y},this.state.isLoading&&(0,o.createElement)(h,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(o.Component),g=function(n){function e(e){var t=n.call(this,e)||this;return t.state={isLoading:!0},t.onLoad=t.onLoad.bind(t),t}return i(e,n),e.prototype.onLoad=function(){this.setState({isLoading:!1})},e.prototype.render=function(){var n=d({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:"PopupWidget"});return(0,o.createElement)(o.Fragment,null,this.state.isLoading&&(0,o.createElement)(h,null),(0,o.createElement)("iframe",{width:"100%",height:"100%",frameBorder:"0",title:this.props.iframeTitle||"Calendly Scheduling Page",onLoad:this.onLoad,src:n}))},e}(o.Component),b=function(n){if(!n.open)return null;if(!n.rootElement)throw new Error("[react-calendly]: PopupModal rootElement property cannot be undefined");return(0,l.createPortal)((0,o.createElement)("div",{className:"calendly-overlay"},(0,o.createElement)("div",{onClick:n.onModalClose,className:"calendly-close-overlay"}),(0,o.createElement)("div",{className:"calendly-popup"},(0,o.createElement)("div",{className:"calendly-popup-content"},(0,o.createElement)(g,r({},n)))),(0,o.createElement)("button",{className:"calendly-popup-close",onClick:n.onModalClose,"aria-label":"Close modal",style:{display:"block",border:"none",padding:0}})),n.rootElement)},C=(function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}i(e,n),e.prototype.onClick=function(n){n.preventDefault(),this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("button",{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||""},this.props.text),(0,o.createElement)(b,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))}}(o.Component),function(n){function e(e){var t=n.call(this,e)||this;return t.state={isOpen:!1},t.onClick=t.onClick.bind(t),t.onClose=t.onClose.bind(t),t}return i(e,n),e.prototype.onClick=function(){this.setState({isOpen:!0})},e.prototype.onClose=function(n){n.stopPropagation(),this.setState({isOpen:!1})},e.prototype.render=function(){return(0,o.createElement)("div",{className:"calendly-badge-widget",onClick:this.onClick},(0,o.createElement)("div",{className:"calendly-badge-content",style:{background:this.props.color||"#00a2ff",color:this.props.textColor||"#ffffff"}},this.props.text||"Schedule time with me",this.props.branding&&(0,o.createElement)("span",null,"powered by Calendly")),(0,o.createElement)(b,r({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},e}(o.Component))}}]);
//# sourceMappingURL=component---src-pages-schedule-tsx-ae74e774b69fc74a2da0.js.map
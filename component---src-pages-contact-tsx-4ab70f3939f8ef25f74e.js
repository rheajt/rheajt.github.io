/*! For license information please see component---src-pages-contact-tsx-4ab70f3939f8ef25f74e.js.LICENSE.txt */
(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[650],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return r.createElement(u,c({attr:c({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var n,a=e.attr,o=e.size,l=e.title,s=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},6791:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1597),a=n(7294),o=n(7059),c=function(e){var t=e.pathname,c=e.showLinks,i=void 0===c||c;return a.createElement("header",{className:"header"},a.createElement(r.Link,{to:"/"},a.createElement(o.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:n(439)})),a.createElement("nav",{className:i?"":"is-hidden"},a.createElement("div",{className:"page-links"},a.createElement(r.Link,{className:"sans "+(t.includes("projects")&&"active"),to:"/projects"},"Projects"),a.createElement(r.Link,{className:"sans "+(t.includes("blog")&&"active"),to:"/blog"},"Blog"),a.createElement(r.Link,{className:"sans "+(t.includes("contact")&&"active"),to:"/contact"},"Contact"))))},i=function(e){var t=e.location,n=e.children,o="/"===t.pathname;return a.createElement("div",{className:"global-wrapper","data-is-root-path":o},a.createElement(c,{pathname:t.pathname}),a.createElement("main",null,n),a.createElement("footer",null,a.createElement("div",null,"© ",(new Date).getFullYear()," ",a.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),a.createElement("div",{className:"legals"},a.createElement(r.Link,{to:"/privacy"},"privacy"),a.createElement(r.Link,{to:"/terms"},"terms"))))}},357:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var r=n(7294),a=n(5861),o=n(4687),c=n.n(o),i=n(7059),l={your_name:"",your_email:"",service:"",topic:"",message:"",isAnonymous:!0,isNewsletter:!0},s=function(){var e=r.useState(!0),t=e[0],n=e[1],o=r.useState(!1),i=o[0],s=o[1],p=r.useState(0),g=p[0],v=p[1],y=r.useState(l),b=y[0],w=y[1];function E(){return(E=(0,a.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"AKfycbxEjDRw-68mO5RYeaarxwcMxt9QIPiKrXSSXO47ZkbWnXfDJJAPApy7DFGuqH2089kg","https://script.google.com/macros/s/AKfycbxEjDRw-68mO5RYeaarxwcMxt9QIPiKrXSSXO47ZkbWnXfDJJAPApy7DFGuqH2089kg/exec",e.prev=3,e.next=6,fetch("https://script.google.com/macros/s/AKfycbxEjDRw-68mO5RYeaarxwcMxt9QIPiKrXSSXO47ZkbWnXfDJJAPApy7DFGuqH2089kg/exec",{redirect:"follow",method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(b)});case 6:return n=e.sent,e.next=9,n.json();case 9:"done"===(r=e.sent).status&&s(!0),console.log("resp",r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function x(e,t){var n;w(Object.assign({},b,((n={})[e]=t,n)))}return r.useEffect((function(){var e=b.message.split(" ").length,t=b.message.length;v(Math.min(100,Math.max(0,(t/100*100+e/50*100)/2))),100===g&&0!==b.your_name.length&&0!==b.service.length&&0!==b.your_email.length&&0!==b.topic.length?n(!1):n(!0)}),[b]),i?r.createElement("p",null,"Sent!"):r.createElement("form",{className:"contact-form",onSubmit:function(e){return E.apply(this,arguments)}},r.createElement(d,{active:b.service,handleChange:x}),r.createElement(f,{name:"your_name",placeholder:"Name",handleChange:x}),r.createElement(f,{name:"your_email",placeholder:"Email",handleChange:x}),r.createElement(m,{name:"topic",label:"What Can I help you with?",options:["PowerSchool","Managebac","Office 365","Google Workspaces","Google Drive"],handleChange:x}),r.createElement(h,{name:"message",label:"Send me some words",val:g,handleChange:x}),r.createElement(u,{name:"isNewsletter",label:"Subscribe to any mail I might send?",handleChange:x,isChecked:b.isNewsletter}),r.createElement(u,{name:"isAnonymous",label:"Can I use your name to give you credit for video ideas?",handleChange:x,isChecked:b.isAnonymous}),r.createElement("div",{className:"actions"},r.createElement("button",{type:"submit",disabled:t},"Send"),r.createElement("button",{type:"button",onClick:function(){return w(l)}},"Clear")))},u=function(e){var t=e.name,n=e.label,a=e.isChecked,o=e.handleChange;return r.createElement("div",null,r.createElement("input",{type:"checkbox",name:t,onChange:function(e){return o(t,e.target.checked)},checked:a}),r.createElement("label",{htmlFor:t},n))},f=function(e){var t=e.name,n=e.placeholder,a=e.handleChange;return r.createElement("div",{className:"form-input"},r.createElement("label",{htmlFor:t},n),r.createElement("input",{placeholder:n,name:t,onChange:function(e){return a(e.target.name,e.target.value)}}))},m=function(e){var t=e.name,n=e.label,a=e.options,o=e.handleChange;return r.createElement("div",{className:"form-input full-width"},r.createElement("label",{htmlFor:t},n),r.createElement("select",{name:t,onChange:function(e){return o(e.target.name,e.target.value)}},r.createElement("option",{value:""}),a.map((function(e){return r.createElement("option",{key:e,value:e},e)}))))},h=function(e){var t=e.name,n=e.label,a=e.val,o=e.handleChange;return r.createElement("div",{className:"form-input full-width"},r.createElement("label",{htmlFor:t},n),r.createElement("textarea",{className:"full-width",name:t,onChange:function(e){return o(e.target.name,e.target.value)},rows:7}),r.createElement(p,{val:a}))},d=function(e){var t=e.active,a=e.handleChange;return r.createElement("div",{className:"services full-width"},r.createElement("span",{className:"service "+("google"===t&&"active"),onClick:function(){return a("service","google")}},r.createElement(i.S,{src:"../../content/img/google-logo.png",alt:"google logo",height:100,__imageData:n(9398)})),r.createElement("span",{className:"service "+("microsoft"===t&&"active"),onClick:function(){return a("service","microsoft")}},r.createElement(i.S,{src:"../../content/img/microsoft-logo.png",alt:"microsoft logo",height:100,__imageData:n(8285)})))},p=function(e){var t=e.val;return r.createElement("div",{style:{width:"100%",border:"1px solid lightgray"}},r.createElement("div",{style:{backgroundColor:"var(--color-primary)",height:10,width:t+"%"}}))},g=n(3201),v=n(5414),y=function(){return r.createElement(r.Fragment,null,r.createElement(v.q,null,r.createElement("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"})),r.createElement("a",{className:"github-button",href:"https://github.com/rheajt","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Follow @rheajt on GitHub"},"Follow @rheajt"))},b=function(){return r.createElement(r.Fragment,null,r.createElement(v.q,null,r.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})),r.createElement("a",{href:"https://twitter.com/rheajt?ref_src=twsrc%5Etfw",className:"twitter-follow-button","data-size":"large","data-show-count":"false"},"Follow @rheajt"))},w=function(e){var t=e.channelId,n=e.layout,a=e.count,o=(0,r.useRef)(null);return r.createElement(r.Fragment,null,r.createElement(v.q,null,r.createElement("script",{src:"https://apis.google.com/js/platform.js"})),r.createElement("div",{ref:o,className:"g-ytsubscribe","data-channelid":t,"data-layout":n,"data-count":a}))},E=function(){return r.createElement(r.Fragment,null,r.createElement("h3",null,"Social Links"),r.createElement("div",{className:"contact-icons"},r.createElement("a",{className:"icon-container",href:"https://youtube.com/jordanrhea"},r.createElement("div",{className:"icon"},r.createElement(g.V2E,null)),r.createElement("p",null,"I turned my learning into a channel that some people have found useful. Come and join! ",r.createElement("br",null)),r.createElement(w,{channelId:"UCwqNP1r17-2xJFweoACbW8g",layout:"default",count:"default"})),r.createElement("a",{className:"icon-container",href:"https://twitter.com/rheajt"},r.createElement("div",{className:"icon"},r.createElement(g.fWC,null)),r.createElement("p",{className:"description"},"Twitter is a place I go sometimes"),r.createElement(b,null)),r.createElement("a",{className:"icon-container",href:""},r.createElement("div",{className:"icon"},r.createElement(g.hJX,null)),r.createElement("p",{className:"description"},"Github is where I share the code"),r.createElement(y,null)),r.createElement("a",{className:"icon-container",href:""},r.createElement("div",{className:"icon"},r.createElement(g.ltd,null)),r.createElement("p",{className:"description"},"More information about what I do is on LinkedIn"))))},x=n(6791),N=n(4001),k=function(e){var t=e.location;return r.createElement(x.Z,{location:t,title:"jordanrhea.com"},r.createElement(N.Z,{title:"Contact"}),r.createElement(s,null),r.createElement(E,null))}},7061:function(e,t,n){var r=n(8698).default;function a(){"use strict";e.exports=a=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,o=n.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},i=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(L){u=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),c=new S(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=N(c,n);if(i){if(i===h)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=m(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,c),o}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=f;var h={};function d(){}function p(){}function g(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(C([])));b&&b!==n&&o.call(b,i)&&(v=b);var w=g.prototype=d.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(a,c,i,l){var s=m(e[a],e,c);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==r(f)&&o.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,l)}))}l(s.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function N(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=g,u(w,"constructor",g),u(g,"constructor",p),p.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},E(x.prototype),u(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new x(f(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(w),u(w,s,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,n){var r=n(7061)();e.exports=r;try{regeneratorRuntime=r}catch(a){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),l=i.value}catch(s){return void n(s)}i.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,l,"next",e)}function l(e){r(c,a,o,i,l,"throw",e)}i(void 0)}))}}n.d(t,{Z:function(){return a}})},8285:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/50d6bcd443fd23aa0e353a96c2dd9709/15e42/microsoft-logo.png","srcSet":"/static/50d6bcd443fd23aa0e353a96c2dd9709/88208/microsoft-logo.png 25w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/e9fba/microsoft-logo.png 50w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/15e42/microsoft-logo.png 100w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/5aead/microsoft-logo.png 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/50d6bcd443fd23aa0e353a96c2dd9709/2fa99/microsoft-logo.webp 25w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/dbc4a/microsoft-logo.webp 50w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/d8057/microsoft-logo.webp 100w,\\n/static/50d6bcd443fd23aa0e353a96c2dd9709/2e34e/microsoft-logo.webp 200w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')},9398:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ff629c02385f2f3a199b7e0b3065d077/15e42/google-logo.png","srcSet":"/static/ff629c02385f2f3a199b7e0b3065d077/88208/google-logo.png 25w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/e9fba/google-logo.png 50w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/15e42/google-logo.png 100w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/5aead/google-logo.png 200w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/ff629c02385f2f3a199b7e0b3065d077/2fa99/google-logo.webp 25w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/dbc4a/google-logo.webp 50w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/d8057/google-logo.webp 100w,\\n/static/ff629c02385f2f3a199b7e0b3065d077/2e34e/google-logo.webp 200w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=component---src-pages-contact-tsx-4ab70f3939f8ef25f74e.js.map
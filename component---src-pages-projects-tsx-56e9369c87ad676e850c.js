"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[317],{1046:function(e,t,a){a.d(t,{w_:function(){return s}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return n.createElement(m,c({attr:c({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var a,r=e.attr,l=e.size,o=e.title,s=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},7464:function(e,t,a){var n=a(7294),r=a(1597),l=a(7059),c=a(3201);t.Z=function(){var e,t,i=(0,r.useStaticQuery)("1767767760"),o=null===(e=i.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=i.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement(n.Fragment,null,n.createElement("div",{className:"bio"},n.createElement(l.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/avatar-image.png",width:50,height:50,quality:95,alt:"jordan rhea wearing a hoodie",__imageData:a(1549)}),(null==o?void 0:o.name)&&n.createElement("div",null,"Written by ",n.createElement("strong",null,o.name)," ",(null==o?void 0:o.summary)||null," ",n.createElement("div",{className:"social-links"},n.createElement("a",{href:s.twitter},n.createElement(c.fWC,null)),n.createElement("a",{href:s.linkedin},n.createElement(c.ltd,null)),n.createElement("a",{href:s.youtube},n.createElement(c.V2E,null)),n.createElement("a",{href:s.github},n.createElement(c.hJX,null))))))}},6791:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1597),r=a(7294),l=a(7059),c=function(e){var t=e.pathname,c=e.showLinks,i=void 0===c||c;return r.createElement("header",{className:"header"},r.createElement(n.Link,{to:"/"},r.createElement(l.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:a(439)})),r.createElement("nav",{className:i?"":"is-hidden"},r.createElement("div",{className:"page-links"},r.createElement(n.Link,{className:"sans "+(t.includes("projects")&&"active"),to:"/projects"},"Projects"),r.createElement(n.Link,{className:"sans "+(t.includes("blog")&&"active"),to:"/blog"},"Blog"),r.createElement(n.Link,{className:"sans "+(t.includes("contact")&&"active"),to:"/contact"},"Contact"))))},i=function(e){var t=e.location,a=e.children,l="/"===t.pathname;return r.createElement("div",{className:"global-wrapper","data-is-root-path":l},r.createElement(c,{pathname:t.pathname}),r.createElement("main",null,a),r.createElement("footer",null,r.createElement("div",null,"© ",(new Date).getFullYear()," ",r.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),r.createElement("div",{className:"legals"},r.createElement(n.Link,{to:"/privacy"},"privacy"),r.createElement(n.Link,{to:"/terms"},"terms"))))}},2508:function(e,t,a){var n=a(7294),r=a(7059),l=a(1597);t.Z=function(e){var t=e.project,a=(0,r.c)(t.frontmatter.image);return n.createElement(l.Link,{to:"/projects/"+t.fields.slug},n.createElement("div",{className:"project-card"},a&&n.createElement("div",{className:"image"},n.createElement(r.G,{image:a,alt:t.frontmatter.title})),n.createElement("div",{className:"description"},n.createElement("h6",null,t.frontmatter.title),n.createElement("p",null,t.excerpt))))}},7166:function(e,t,a){a.r(t);var n=a(7294),r=a(7464),l=a(6791),c=a(4001),i=a(2508);t.default=function(e){var t,a=e.data,o=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=a.allMarkdownRemark.nodes;return 0===m.length?n.createElement(l.Z,{location:o,title:s},n.createElement(c.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,"No blog posts found.")):n.createElement(l.Z,{location:o,title:s},n.createElement(c.Z,{title:"All Projects"}),n.createElement(r.Z,null),n.createElement("div",{className:"project-cards"},m.map((function(e){return n.createElement(i.Z,{key:e.id,project:e})}))))}},1549:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8eb0feca81ff699043889ebce717ea94/e5610/avatar-image.png","srcSet":"/static/8eb0feca81ff699043889ebce717ea94/e5610/avatar-image.png 50w,\\n/static/8eb0feca81ff699043889ebce717ea94/e9b55/avatar-image.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/8eb0feca81ff699043889ebce717ea94/d4bf4/avatar-image.avif 50w,\\n/static/8eb0feca81ff699043889ebce717ea94/ee81f/avatar-image.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/8eb0feca81ff699043889ebce717ea94/3faea/avatar-image.webp 50w,\\n/static/8eb0feca81ff699043889ebce717ea94/6a679/avatar-image.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-56e9369c87ad676e850c.js.map
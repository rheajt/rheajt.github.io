"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[410],{7883:function(e,t,l){l.r(t);var n=l(7294),a=l(1597),r=l(5046),i=l(1940),u=l(8320),o=l(4807);t.default=function(e){var t,l=e.data,s=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;if(0===m.length)return n.createElement(i.Z,{location:s,title:c},n.createElement(u.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,"No blog posts found."));var d=m.reduce((function(e,t){if(!t.fields.date)return e;var l=(0,o.Z)(new Date(t.fields.date),"MMMM yyyy");return e[l]?e[l].push(t):e[l]=[t],e}),{});return console.log(d),n.createElement(i.Z,{location:s,title:c},n.createElement(u.Z,{title:"All posts"}),n.createElement(r.Z,null),Object.keys(d).map((function(e){return n.createElement("section",{key:e},n.createElement("h3",null,e),d[e].map((function(e){return n.createElement("div",{key:e.fields.slug},n.createElement(a.Link,{key:e.fields.slug,to:"/blog/"+e.fields.slug},n.createElement("b",null,e.frontmatter.title)),n.createElement("p",{key:e.fields.slug},n.createElement("i",null,(0,o.Z)(new Date(e.fields.date),"PPP"))," ","-",e.excerpt),n.createElement("p",null,"Tags in this post:"," ",n.createElement("i",null,e.frontmatter.tags.join(", "))))})))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-fc616296869ce07ef27e.js.map
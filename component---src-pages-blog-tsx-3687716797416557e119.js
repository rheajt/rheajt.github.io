"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[410],{7883:function(e,t,l){l.r(t);var n=l(7294),a=l(1597),r=l(5046),i=l(1940),u=l(8320),c=l(4807);t.default=function(e){var t,l=e.data,o=e.location,s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;if(0===m.length)return n.createElement(i.Z,{location:o,title:s},n.createElement(u.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,"No blog posts found."));var d=m.reduce((function(e,t){if(!t.fields.date)return e;var l=(0,c.Z)(new Date(t.fields.date),"MMMM yyyy");return e[l]?e[l].push(t):e[l]=[t],e}),{});return n.createElement(i.Z,{location:o,title:s},n.createElement(u.Z,{title:"All posts"}),n.createElement(r.Z,null),Object.keys(d).map((function(e){return n.createElement("section",{key:e},n.createElement("h3",null,e),d[e].map((function(t){return n.createElement("div",{key:e+"-"+t.fields.slug},n.createElement(a.Link,{to:"/blog/"+t.fields.slug},n.createElement("b",null,t.frontmatter.title)),n.createElement("p",null,n.createElement("i",null,(0,c.Z)(new Date(t.fields.date),"PPP"))," ","-",t.excerpt),n.createElement("p",null,"Tags in this post:"," ",n.createElement("i",null,t.frontmatter.tags.join(", "))))})))})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-3687716797416557e119.js.map
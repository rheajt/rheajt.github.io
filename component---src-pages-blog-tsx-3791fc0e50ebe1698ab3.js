"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[410],{8645:function(e,t,l){l.r(t);var n=l(7294),a=l(1883),r=l(7464),i=l(6016),s=l(4001),c=l(3013);t.default=e=>{var t;let{data:l,location:o}=e;const u=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;if(0===m.length)return n.createElement(i.Z,{location:o,title:u},n.createElement(s.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,"No blog posts found."));const d=m.reduce(((e,t)=>{if(!t.fields.date)return e;const l=(0,c.Z)(new Date(t.fields.date),"MMMM yyyy");return e[l]?e[l].push(t):e[l]=[t],e}),{});return n.createElement(i.Z,{location:o,title:u},n.createElement(s.Z,{title:"All posts"}),n.createElement(r.Z,null),Object.keys(d).map((e=>n.createElement("section",{key:e},n.createElement("h3",null,e),d[e].map((t=>n.createElement("div",{key:`${e}-${t.fields.slug}`},n.createElement(a.Link,{to:`/blog/${t.fields.slug}`},n.createElement("b",null,t.frontmatter.title)),n.createElement("p",null,n.createElement("i",null,(0,c.Z)(new Date(t.fields.date),"PPP"))," ","-",t.excerpt),n.createElement("p",null,"Tags in this post:"," ",n.createElement("i",null,t.frontmatter.tags.join(", "))))))))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-3791fc0e50ebe1698ab3.js.map
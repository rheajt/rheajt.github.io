"use strict";(self.webpackChunkrheajt_github_io=self.webpackChunkrheajt_github_io||[]).push([[737],{4930:function(e,t,a){a.d(t,{P:function(){return n}});const n=a(5086).default.div.withConfig({displayName:"StyledContainer",componentId:"sc-14g89db-0"})(["margin:0 auto;max-width:800px;padding:3em 0.25em;@media (max-width:768px){padding:2em 0.25em;max-width:var(--maxWidth-sm);}"])},7791:function(e,t,a){a.d(t,{t:function(){return i}});var n=a(7294),r=a(5086);const o={your_name:"",your_email:"",service:"",topic:"",message:"",isAnonymous:!0,isNewsletter:!0},i=e=>{const[t,a]=n.useState(!0),[r,i]=n.useState(!1),[l,m]=n.useState(0),[d,g]=n.useState({...o,...e.data});function h(e,t){console.log(e,t),g({...d,[e]:t})}return n.useEffect((()=>{const e=d.message.split(" ").length,t=d.message.length;m(Math.min(100,Math.max(0,(t/100*100+e/50*100)/2))),100===l&&0!==d.your_name.length&&0!==d.your_email.length?a(!1):a(!0)}),[d]),r?n.createElement("div",{style:{display:"grid",placeItems:"center",width:"100%",height:200}},n.createElement("b",null,"Sent!")):(console.log("topic",d.topic),n.createElement(n.Fragment,null,d.topic?n.createElement(n.Fragment,null,n.createElement("i",null,"Lets talk more about "),n.createElement("b",null,d.topic.split(" ").map((e=>`#${e}`)).join(", "))):null,n.createElement(p,{onSubmit:async function(e){e.preventDefault();try{const e=await fetch("https://script.google.com/macros/s/AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg/exec",{redirect:"follow",method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(d)});"done"===(await e.json()).status&&i(!0)}catch(t){console.log(t)}}},n.createElement(s,{type:"text",name:"your_name",placeholder:"Name",value:d.your_name,handleChange:h}),n.createElement(s,{name:"your_email",type:"email",value:d.your_email,placeholder:"Email",handleChange:h}),n.createElement(s,{type:"textarea",name:"message",label:"Send me a message! I love meeting new people and talking about data systems.",placeholder:d.message,value:d.message,val:l,handleChange:h}),n.createElement("div",{className:"actions full-width"},n.createElement("button",{type:"submit",disabled:t},"Send"),n.createElement(c,{name:"isNewsletter",label:"Newsletter?",handleChange:h,isChecked:d.isNewsletter}),n.createElement(c,{name:"isAnonymous",label:"Stay anonymous?",handleChange:h,isChecked:d.isAnonymous})))))},l=r.styled.div.withConfig({displayName:"contact-form__StyledFormCheckbox",componentId:"sc-11ct5gj-0"})(["label{display:inline-block;padding-left:1em;}"]),c=e=>{let{name:t,label:a,isChecked:r,handleChange:o}=e;return n.createElement(l,null,n.createElement("input",{type:"checkbox",id:t,name:t,onChange:e=>o(t,e.target.checked),checked:r}),n.createElement("label",{htmlFor:t},a))},m=r.styled.div.withConfig({displayName:"contact-form__StyledFormInput",componentId:"sc-11ct5gj-1"})(["&.full-width{grid-column:1 / -1;}label{display:block;}input,select,textarea{padding:8px;width:100%;border-radius:3px;border:1px solid lightgray;&:focus{outline:none;border:1px solid var(--color-primary);}}"]),s=e=>"textarea"===e.type?n.createElement(m,{className:"full-width"},n.createElement("label",{htmlFor:e.name},e.label),n.createElement("textarea",{className:"full-width",name:e.name,value:e.value,onChange:t=>e.handleChange(t.target.name,t.target.value),placeholder:e.placeholder,rows:7}),n.createElement(d,{val:e.val>1?e.val:0})):n.createElement(m,null,n.createElement("label",{htmlFor:e.name},e.placeholder),n.createElement("input",{type:e.type,placeholder:e.placeholder,name:e.name,value:e.value,onChange:t=>e.handleChange(t.target.name,t.target.value)})),d=e=>{let{val:t}=e;return n.createElement("div",{style:{width:"100%",border:"1px solid lightgray"}},n.createElement("div",{style:{backgroundColor:"var(--color-primary)",height:10,width:`${t}%`}}))},p=r.styled.form.withConfig({displayName:"contact-form__StyledForm",componentId:"sc-11ct5gj-2"})(['display:grid;margin-top:1em;margin-bottom:1em;grid-gap:1em;grid-template-columns:1fr 1fr;button{margin-right:1em;padding:4px 1em;&[type="submit"]{background-color:var(--color-primary);color:white;}&:disabled{background-color:gray;}}.actions{display:flex;justify-content:space-between;}'])},6016:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7294),r=a(5086),o=a(1883);const i=()=>n.createElement(l,null,n.createElement("div",{className:"container"},n.createElement("div",null,"© ",(new Date).getFullYear()," ",n.createElement("a",{href:"https://jordanrhea.com"},"jordan rhea")),n.createElement("div",{className:"legals"},n.createElement(o.Link,{to:"/privacy"},"privacy"),n.createElement(o.Link,{to:"/terms"},"terms")))),l=r.styled.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1n7judf-0"})(["background-color:var(--color-primary);padding:3em;color:white;a,a:hover{color:white;text-decoration:none;margin-right:1em;}.container{margin:0 auto;display:flex;align-items:center;justify-content:space-between;max-width:800px;}"]);var c=a(8032);function m(e){return n.createElement(s,null,n.createElement(o.Link,{className:`page-button sans ${e.pathname.includes(e.href)&&"active"}`,to:e.href},e.label))}const s=r.default.div.withConfig({displayName:"link-button__StyledLinkButtons",componentId:"sc-1o9dpm9-0"})([".page-button{background:none;border:none;padding:0.5em 1em;font:inherit;cursor:pointer;outline:inherit;text-decoration:none;color:white;font-size:inherit;font-weight:bold;font-family:inherit;border:1px solid lightgray;border-radius:3px;background-color:var(--color-primary);&:hover{$purple:var(--color-primary);background-color:lighten(#283597,10%);}}"]),d=e=>{let{pathname:t,showLinks:r=!0}=e;return n.createElement(p,null,n.createElement("div",{className:"container"},n.createElement(o.Link,{to:"/"},n.createElement(c.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../../content/img/jr-icon.png",width:36,height:36,quality:95,alt:"jordan rhea header",__imageData:a(1835)})),n.createElement("nav",{className:r?"":"is-hidden"},n.createElement("div",{className:"page-links"},n.createElement(o.Link,{className:`page-link sans ${t.includes("projects")&&"active"}`,to:"/projects"},"Projects")),n.createElement(m,{pathname:t,href:"/contact",label:"Contact"}))))},p=r.default.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-3dh3ut-0"})(["position:absolute;top:0;width:100%;z-index:1;padding:0.25em;.container{max-width:800px;margin:0 auto;display:flex;align-items:center;text-align:center;justify-content:center;}nav.is-hidden{display:none;}a{background:none;text-decoration:none;color:var(--color-text);}nav{display:flex;align-items:center;list-style:none;text-transform:uppercase;justify-content:space-between;width:100%;margin-left:1em;a{padding:0 1em;&:hover{font-style:italic;}&.active{font-weight:bold;}}.page-links{display:flex;}}"]),g=(0,r.createGlobalStyle)(['*,:after,:before{box-sizing:border-box;}html,body{padding:0;margin:0;}html{line-height:var(--lineHeight-normal);font-size:var(--fontSize-root);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}body{font-family:var(--font-body);font-size:var(--fontSize-1);color:var(--color-text);}:root{--maxWidth-none:"none";--maxWidth-xs:20rem;--maxWidth-sm:24rem;--maxWidth-md:28rem;--maxWidth-lg:32rem;--maxWidth-xl:36rem;--maxWidth-2xl:42rem;--maxWidth-3xl:48rem;--maxWidth-4xl:56rem;--maxWidth-full:"100%";--maxWidth-wrapper:var(--maxWidth-2xl);--spacing-px:"1px";--spacing-0:0;--spacing-1:0.25rem;--spacing-2:0.5rem;--spacing-3:0.75rem;--spacing-4:1rem;--spacing-5:1.25rem;--spacing-6:1.5rem;--spacing-8:2rem;--spacing-10:2.5rem;--spacing-12:3rem;--spacing-16:4rem;--spacing-20:5rem;--spacing-24:6rem;--spacing-32:8rem;--fontFamily-cursive:Patrick Hand,cursive;--fontFamily-sans:Work Sans,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--fontFamily-serif:"Merriweather","Georgia",Cambria,"Times New Roman",Times,serif;--font-body:var(--fontFamily-sans);--font-heading:var(--fontFamily-cursive);--fontWeight-normal:400;--fontWeight-medium:500;--fontWeight-semibold:600;--fontWeight-bold:700;--fontWeight-extrabold:800;--fontWeight-black:900;--fontSize-root:16px;--lineHeight-none:1;--lineHeight-tight:1.1;--lineHeight-normal:1.5;--lineHeight-relaxed:1.625;--fontSize-0:0.833rem;--fontSize-1:1rem;--fontSize-2:1.2rem;--fontSize-3:1.44rem;--fontSize-4:1.728rem;--fontSize-5:2.074rem;--fontSize-6:2.488rem;--fontSize-7:2.986rem;--color-primary:#283597;--color-text:#2e353f;--color-text-light:#4f5969;--color-heading:#1a202c;--color-heading-black:black;--color-accent:#d1dce5;}']);var h=e=>{let{location:t,children:a}=e;t.pathname;return n.createElement("div",null,n.createElement(g,null),n.createElement(d,{pathname:t.pathname}),n.createElement("main",null,a),n.createElement(i,null))}},4001:function(e,t,a){var n=a(5785),r=a(7294),o=a(4593),i=a(1883);t.Z=e=>{var t,a,l;let{description:c="",lang:m="en",meta:s=[],title:d="jordanrhea.com",image:p}=e;const{site:g}=(0,i.useStaticQuery)("1324386404"),h=c||g.siteMetadata.description,u=null===(t=g.siteMetadata)||void 0===t?void 0:t.title;if(p){const e=p;s=[].concat((0,n.Z)(s),[{property:"og:image",content:e},{name:"twitter:image",content:e}])}return r.createElement(o.q,{htmlAttributes:{lang:m},title:d,titleTemplate:u?`%s | ${u}`:void 0,meta:[{name:"description",content:h},{property:"og:title",content:d},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=g.siteMetadata)||void 0===a||null===(l=a.social)||void 0===l?void 0:l.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:h}].concat((0,n.Z)(s))})}},4405:function(e,t,a){a.d(t,{w_:function(){return m}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(r),i=function(){return i=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function m(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var a,r=e.attr,o=e.size,c=e.title,m=l(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,m,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(r)}},1835:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png","srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/1d7dd/jr-icon.png 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/9ddfc/jr-icon.png 72w","sizes":"36px"},"sources":[{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/08e7f/jr-icon.avif 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/3b598/jr-icon.avif 72w","type":"image/avif","sizes":"36px"},{"srcSet":"/static/9a2245de7aee2ea3f7fa58253f6b766f/206df/jr-icon.webp 36w,\\n/static/9a2245de7aee2ea3f7fa58253f6b766f/93966/jr-icon.webp 72w","type":"image/webp","sizes":"36px"}]},"width":36,"height":36}')}}]);
//# sourceMappingURL=9550084ef3fb1c74609254cdf080d307f5ed082f-dafd6d90a0020a901bf2.js.map
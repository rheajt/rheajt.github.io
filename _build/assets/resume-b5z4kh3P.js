const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_build/assets/jspdf.es.min-BKQlTP36.js","_build/assets/rolldown-runtime-CbXtAM7H.js","_build/assets/preload-helper-BZ1Pz5am.js"])))=>i.map(i=>d[i]);
import{$ as e,D as t,E as n,K as r,L as i,M as a,N as o,T as s,U as c,V as l,X as u,j as d,k as f}from"./routing-1Zagr2Ci.js";import{a as p,r as m,t as h,u as g}from"./seo-DvJ6QEDt.js";import{t as _}from"./preload-helper-BZ1Pz5am.js";import{t as v}from"./section-CtxWtUEy.js";import{i as y}from"./fa-CCP0LpJz.js";var b=48,x=612,S=516;async function C(e){let{jsPDF:t}=await _(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-BKQlTP36.js`);return{jsPDF:e}},__vite__mapDeps([0,1,2])),n=new t({unit:`pt`,format:`letter`}),r=b,i=e=>{r+e<=744||(n.addPage(),r=b)},a=(e,t,a,o=!1)=>{i(Math.min(e.length*a,696));let s=0;for(;s<e.length;){i(a);let c=Math.min(e.length-s,Math.floor((744-r)/a));o&&s===0&&n.text(`•`,b,r),n.text(e.slice(s,s+c),t,r),r+=c*a,s+=c}},o=(e,t,r={})=>{let{size:i=10,style:o=`normal`,color:s=[35,35,35],maxWidth:c=S,lineHeight:l=i*1.35}=r;n.setFont(`times`,o),n.setFontSize(i),n.setTextColor(...s);let u=n.splitTextToSize(e,c);a(u,t,l)},s=e=>{i(28),r+=8,n.setDrawColor(25,25,25),n.setLineWidth(.75),n.line(b,r,564,r),r+=14,o(e.toUpperCase(),b,{size:10,style:`bold`,color:[25,25,25]})},c=e=>{n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(35,35,35);let t=n.splitTextToSize(e,504);a(t,60,13.5,!0)};n.setProperties({title:`${e.name} Resume`,subject:e.headline,author:e.name}),n.setFont(`times`,`bold`),n.setFontSize(24),n.setTextColor(20,20,20),n.text(e.name,x/2,r,{align:`center`}),r+=20,n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(75,75,75),n.text(e.headline,x/2,r,{align:`center`}),r+=14,(()=>{n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(40,65,150);let t=e.links.map(e=>n.getTextWidth(e.label)),i=n.getTextWidth(` | `),a=t.reduce((e,t)=>e+t,0)+i*Math.max(0,e.links.length-1),o=Math.max(b,(x-a)/2);e.links.forEach((a,s)=>{n.textWithLink(a.label,o,r,{url:a.url}),o+=t[s],s<e.links.length-1&&(n.setTextColor(75,75,75),n.text(` | `,o,r),o+=i,n.setTextColor(40,65,150))}),r+=18})(),s(`Summary`),e.summary.forEach(c),s(`Experience`),e.experience.forEach(e=>{i(42),o(e.role,b,{size:11,style:`bold`,lineHeight:13}),o(`${e.organization} — ${e.location} | ${e.period}`,b,{size:10,style:`italic`,color:[75,75,75],lineHeight:13}),e.highlights.forEach(c),r+=4}),s(`Selected Projects`),o(e.projects.join(` • `),b,{size:10}),s(`Skills`),o(e.skills.join(` • `),b,{size:10}),s(`Background`),e.background.forEach(c),n.save(`${e.name.toLowerCase().replaceAll(` `,`-`)}-resume.pdf`)}var w=i(`<p role=alert>`),T=i(`<header class=resume-hero><button class=download-button type=button><!$><!/><!$><!/></button><!$><!/><p class=eyebrow>Resume</p><h1></h1><p class=headline></p><p class=tagline></p><p class=location></p><div class=links>`),E=i(`<div class=timeline>`),D=i(`<div class=pill-list>`),O=i(`<div class="pill-list compact">`),k=i(`<ul>`),A=i(`<ul class=source-notes>`),j=i(`<a target=_blank rel=noreferrer>`),M=i(`<p>`),N=i(`<article class=job><div><h3></h3><p class=meta><!$><!/> · <!$><!/> · <!$><!/></p></div><ul>`),P=i(`<li>`),F=i(`<span>`),I=i(`<section class=resume-section><h2></h2><!$><!/>`),L=p();function R(){let[i,s]=e(!1),[p,g]=e(``),_=async()=>{if(!i()){s(!0),g(``);try{await C(L)}catch{g(`Could not download the PDF. Please try again.`)}finally{s(!1)}}};return r(m,{get children(){return[r(h,{title:`Resume`}),r(v,{get children(){return r(B,{get children(){return[(()=>{var e=n(T),s=e.firstChild,m=s.firstChild,[h,g]=t(m.nextSibling),v=h.nextSibling,[b,x]=t(v.nextSibling),S=s.nextSibling,[C,E]=t(S.nextSibling),D=C.nextSibling.nextSibling,O=D.nextSibling,k=O.nextSibling,A=k.nextSibling,M=A.nextSibling;return s.$$click=_,f(s,r(y,{"aria-hidden":`true`}),h,g),f(s,()=>i()?`Preparing PDF…`:`Download PDF`,b,x),f(e,r(c,{get when(){return p()},get children(){var e=n(w);return f(e,p),e}}),C,E),f(D,()=>L.name),f(O,()=>L.headline),f(k,()=>L.tagline),f(A,()=>L.location),f(M,r(l,{get each(){return L.links},children:e=>(()=>{var t=n(j);return f(t,()=>e.label),u(()=>a(t,`href`,e.url)),t})()})),u(e=>{var t=i(),n=i();return t!==e.e&&o(s,`disabled`,e.e=t),n!==e.t&&a(s,`aria-busy`,e.t=n),e},{e:void 0,t:void 0}),d(),e})(),r(z,{title:`Summary`,get children(){return r(l,{get each(){return L.summary},children:e=>(()=>{var t=n(M);return f(t,e),t})()})}}),r(z,{title:`Experience`,get children(){var e=n(E);return f(e,r(l,{get each(){return L.experience},children:e=>(()=>{var i=n(N),a=i.firstChild,o=a.firstChild,s=o.nextSibling,c=s.firstChild,[u,d]=t(c.nextSibling),p=u.nextSibling.nextSibling,[m,h]=t(p.nextSibling),g=m.nextSibling.nextSibling,[_,v]=t(g.nextSibling),y=a.nextSibling;return f(o,()=>e.role),f(s,()=>e.organization,u,d),f(s,()=>e.location,m,h),f(s,()=>e.period,_,v),f(y,r(l,{get each(){return e.highlights},children:e=>(()=>{var t=n(P);return f(t,e),t})()})),i})()})),e}}),r(z,{title:`Selected Projects`,get children(){var e=n(D);return f(e,r(l,{get each(){return L.projects},children:e=>(()=>{var t=n(F);return f(t,e),t})()})),e}}),r(z,{title:`Skills`,get children(){var e=n(O);return f(e,r(l,{get each(){return L.skills},children:e=>(()=>{var t=n(F);return f(t,e),t})()})),e}}),r(z,{title:`Background`,get children(){var e=n(k);return f(e,r(l,{get each(){return L.background},children:e=>(()=>{var t=n(P);return f(t,e),t})()})),e}}),r(z,{title:`Source Notes`,get children(){var e=n(A);return f(e,r(l,{get each(){return L.sourceNotes},children:e=>(()=>{var t=n(P);return f(t,e),t})()})),e}})]}})}})]}})}var z=e=>(()=>{var r=n(I),i=r.firstChild,a=i.nextSibling,[o,s]=t(a.nextSibling);return f(i,()=>e.title),f(r,()=>e.children,o,s),r})(),B=g.div`
    .resume-hero {
        position: relative;
        border-left: 3px solid var(--color-primary);
        padding-left: var(--spacing-6);
        margin-bottom: var(--spacing-12);
    }

    .download-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        justify-content: center;
        border: 1px solid var(--color-primary);
        border-radius: 999px;
        background: var(--color-primary);
        color: #fff;
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        padding: 0.5rem 1rem;
        margin-bottom: var(--spacing-4);
        transition:
            background 160ms ease,
            transform 160ms ease;

        &:hover {
            background: #3a4ab0;
            transform: translateY(-1px);
        }
    }

    .eyebrow,
    .meta,
    .location,
    .source-notes {
        color: var(--color-text-light);
    }

    .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.12em;
        font-size: var(--fontSize-0);
        margin-bottom: var(--spacing-2);
    }

    h1 {
        margin-bottom: var(--spacing-3);
    }

    .headline {
        font-family: var(--fontFamily-display);
        font-size: var(--fontSize-3);
        color: var(--color-heading);
        margin-bottom: var(--spacing-3);
    }

    .tagline {
        margin-bottom: var(--spacing-2);
    }

    .links,
    .pill-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-3);
    }

    .links a,
    .pill-list span {
        border: 1px solid var(--color-primary);
        border-radius: 999px;
        padding: 0.35rem 0.75rem;
        text-decoration: none;
    }

    .links a {
        color: var(--color-primary);
    }

    .resume-section {
        margin-bottom: var(--spacing-12);
    }

    .timeline {
        display: grid;
        gap: var(--spacing-8);
    }

    .job {
        border-bottom: 1px solid var(--color-border, rgba(0, 0, 0, 0.1));
        padding-bottom: var(--spacing-6);
    }

    .job:last-child {
        border-bottom: 0;
    }

    .job h3 {
        margin-bottom: var(--spacing-2);
    }

    .compact {
        gap: var(--spacing-2);
    }

    .compact span {
        font-size: var(--fontSize-0);
    }
`;s([`click`]);export{R as default};
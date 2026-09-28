const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_build/assets/jspdf.es.min-BKQlTP36.js","_build/assets/rolldown-runtime-CbXtAM7H.js","_build/assets/preload-helper-BZ1Pz5am.js"])))=>i.map(i=>d[i]);
import{B as e,D as t,E as n,I as r,J as i,M as a,T as o,W as s,j as c,k as l}from"./routing-DP3NAu6Z.js";import{d as u,i as d,r as f,t as p,u as m}from"./seo-CaORYdCz.js";import{t as h}from"./preload-helper-BZ1Pz5am.js";import{t as g}from"./section-BIbz61Lq.js";var _=48,v=612,y=516;async function b(e){let{jsPDF:t}=await h(async()=>{let{jsPDF:e}=await import(`./jspdf.es.min-BKQlTP36.js`);return{jsPDF:e}},__vite__mapDeps([0,1,2])),n=new t({unit:`pt`,format:`letter`}),r=_,i=e=>{r+e<=744||(n.addPage(),r=_)},a=(e,t,a={})=>{let{size:o=10,style:s=`normal`,color:c=[35,35,35],maxWidth:l=y,lineHeight:u=o*1.35}=a;n.setFont(`times`,s),n.setFontSize(o),n.setTextColor(...c);let d=n.splitTextToSize(e,l);i(d.length*u),n.text(d,t,r),r+=d.length*u},o=e=>{i(28),r+=8,n.setDrawColor(25,25,25),n.setLineWidth(.75),n.line(_,r,564,r),r+=14,a(e.toUpperCase(),_,{size:10,style:`bold`,color:[25,25,25]})},s=e=>{let t=n.splitTextToSize(e,504);i(t.length*13.5),n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(35,35,35),n.text(`•`,_,r),n.text(t,60,r),r+=t.length*13.5};n.setProperties({title:`${e.name} Resume`,subject:e.headline,author:e.name}),n.setFont(`times`,`bold`),n.setFontSize(24),n.setTextColor(20,20,20),n.text(e.name,v/2,r,{align:`center`}),r+=20,n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(75,75,75),n.text(e.headline,v/2,r,{align:`center`}),r+=14,(()=>{n.setFont(`times`,`normal`),n.setFontSize(10),n.setTextColor(40,65,150);let t=e.links.map(e=>n.getTextWidth(e.label)),i=n.getTextWidth(` | `),a=t.reduce((e,t)=>e+t,0)+i*Math.max(0,e.links.length-1),o=Math.max(_,(v-a)/2);e.links.forEach((a,s)=>{n.textWithLink(a.label,o,r,{url:a.url}),o+=t[s],s<e.links.length-1&&(n.setTextColor(75,75,75),n.text(` | `,o,r),o+=i,n.setTextColor(40,65,150))}),r+=18})(),o(`Summary`),e.summary.forEach(s),o(`Experience`),e.experience.forEach(e=>{i(42),a(e.role,_,{size:11,style:`bold`,lineHeight:13}),a(`${e.organization} — ${e.location} | ${e.period}`,_,{size:10,style:`italic`,color:[75,75,75],lineHeight:13}),e.highlights.forEach(s),r+=4}),o(`Selected Projects`),a(e.projects.join(` • `),_,{size:10}),o(`Skills`),a(e.skills.join(` • `),_,{size:10}),o(`Background`),e.background.forEach(s),n.save(`${e.name.toLowerCase().replaceAll(` `,`-`)}-resume.pdf`)}var x=r(`<header class=resume-hero><button class=download-button type=button><!$><!/>Download PDF</button><p class=eyebrow>Resume</p><h1></h1><p class=headline></p><p class=tagline></p><p class=location></p><div class=links>`),S=r(`<div class=timeline>`),C=r(`<div class=pill-list>`),w=r(`<div class="pill-list compact">`),T=r(`<ul>`),E=r(`<ul class=source-notes>`),D=r(`<a target=_blank rel=noreferrer>`),O=r(`<p>`),k=r(`<article class=job><div><h3></h3><p class=meta><!$><!/> · <!$><!/> · <!$><!/></p></div><ul>`),A=r(`<li>`),j=r(`<span>`),M=r(`<section class=resume-section><h2></h2><!$><!/>`),N=d();function P(){return s(f,{get children(){return[s(p,{title:`Resume`}),s(g,{get children(){return s(I,{get children(){return[(()=>{var r=n(x),o=r.firstChild,u=o.firstChild,[d,f]=t(u.nextSibling);d.nextSibling;var p=o.nextSibling.nextSibling,h=p.nextSibling,g=h.nextSibling,_=g.nextSibling,v=_.nextSibling;return o.$$click=()=>b(N),l(o,s(m,{"aria-hidden":`true`}),d,f),l(p,()=>N.name),l(h,()=>N.headline),l(g,()=>N.tagline),l(_,()=>N.location),l(v,s(e,{get each(){return N.links},children:e=>(()=>{var t=n(D);return l(t,()=>e.label),i(()=>a(t,`href`,e.url)),t})()})),c(),r})(),s(F,{title:`Summary`,get children(){return s(e,{get each(){return N.summary},children:e=>(()=>{var t=n(O);return l(t,e),t})()})}}),s(F,{title:`Experience`,get children(){var r=n(S);return l(r,s(e,{get each(){return N.experience},children:r=>(()=>{var i=n(k),a=i.firstChild,o=a.firstChild,c=o.nextSibling,u=c.firstChild,[d,f]=t(u.nextSibling),p=d.nextSibling.nextSibling,[m,h]=t(p.nextSibling),g=m.nextSibling.nextSibling,[_,v]=t(g.nextSibling),y=a.nextSibling;return l(o,()=>r.role),l(c,()=>r.organization,d,f),l(c,()=>r.location,m,h),l(c,()=>r.period,_,v),l(y,s(e,{get each(){return r.highlights},children:e=>(()=>{var t=n(A);return l(t,e),t})()})),i})()})),r}}),s(F,{title:`Selected Projects`,get children(){var t=n(C);return l(t,s(e,{get each(){return N.projects},children:e=>(()=>{var t=n(j);return l(t,e),t})()})),t}}),s(F,{title:`Skills`,get children(){var t=n(w);return l(t,s(e,{get each(){return N.skills},children:e=>(()=>{var t=n(j);return l(t,e),t})()})),t}}),s(F,{title:`Background`,get children(){var t=n(T);return l(t,s(e,{get each(){return N.background},children:e=>(()=>{var t=n(A);return l(t,e),t})()})),t}}),s(F,{title:`Source Notes`,get children(){var t=n(E);return l(t,s(e,{get each(){return N.sourceNotes},children:e=>(()=>{var t=n(A);return l(t,e),t})()})),t}})]}})}})]}})}var F=e=>(()=>{var r=n(M),i=r.firstChild,a=i.nextSibling,[o,s]=t(a.nextSibling);return l(i,()=>e.title),l(r,()=>e.children,o,s),r})(),I=u.div`
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
`;o([`click`]);export{P as default};
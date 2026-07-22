const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-Di08oh1D.js","assets/preload-helper-ug3pwPZ1.js"])))=>i.map(i=>d[i]);
import{e as a,p as R,x as o,N as z,B as n,V as f,J as j,H as D,A as H,C as p}from"./routing-BQzf89fU.js";import{s as L,S as N,a as A,e as B,L as M,g as V}from"./section-ChQ-PyK9.js";import{_ as I}from"./preload-helper-ug3pwPZ1.js";const d=48,C=612,J=792,E=C-d*2;async function O(t){const{jsPDF:r}=await I(async()=>{const{jsPDF:i}=await import("./jspdf.es.min-Di08oh1D.js").then(h=>h.j);return{jsPDF:i}},__vite__mapDeps([0,1])),e=new r({unit:"pt",format:"letter"});let l=d;const m=i=>{l+i<=J-d||(e.addPage(),l=d)},s=(i,h,c={})=>{const{size:$=10,style:x="normal",color:_=[35,35,35],maxWidth:v=E,lineHeight:F=$*1.35}=c;e.setFont("times",x),e.setFontSize($),e.setTextColor(..._);const k=e.splitTextToSize(i,v);m(k.length*F),e.text(k,h,l),l+=k.length*F},u=i=>{m(28),l+=8,e.setDrawColor(25,25,25),e.setLineWidth(.75),e.line(d,l,C-d,l),l+=14,s(i.toUpperCase(),d,{size:10,style:"bold",color:[25,25,25]})},b=i=>{const c=e.splitTextToSize(i,E-12);m(c.length*13.5),e.setFont("times","normal"),e.setFontSize(10),e.setTextColor(35,35,35),e.text("•",d,l),e.text(c,d+12,l),l+=c.length*13.5},S=()=>{e.setFont("times","normal"),e.setFontSize(10),e.setTextColor(40,65,150);const h=t.links.map(_=>e.getTextWidth(_.label)),c=e.getTextWidth(" | "),$=h.reduce((_,v)=>_+v,0)+c*Math.max(0,t.links.length-1);let x=Math.max(d,(C-$)/2);t.links.forEach((_,v)=>{e.textWithLink(_.label,x,l,{url:_.url}),x+=h[v],v<t.links.length-1&&(e.setTextColor(75,75,75),e.text(" | ",x,l),x+=c,e.setTextColor(40,65,150))}),l+=18};e.setProperties({title:`${t.name} Resume`,subject:t.headline,author:t.name}),e.setFont("times","bold"),e.setFontSize(24),e.setTextColor(20,20,20),e.text(t.name,C/2,l,{align:"center"}),l+=20,e.setFont("times","normal"),e.setFontSize(10),e.setTextColor(75,75,75),e.text(t.headline,C/2,l,{align:"center"}),l+=14,S(),u("Summary"),t.summary.forEach(b),u("Experience"),t.experience.forEach(i=>{m(42),s(i.role,d,{size:11,style:"bold",lineHeight:13}),s(`${i.organization} — ${i.location} | ${i.period}`,d,{size:10,style:"italic",color:[75,75,75],lineHeight:13}),i.highlights.forEach(b),l+=4}),u("Selected Projects"),s(t.projects.join(" • "),d,{size:10}),u("Skills"),s(t.skills.join(" • "),d,{size:10}),u("Background"),t.background.forEach(b),e.save(`${t.name.toLowerCase().replaceAll(" ","-")}-resume.pdf`)}var U=p("<header class=resume-hero><button class=download-button type=button><!$><!/>Download PDF</button><p class=eyebrow>Resume</p><h1></h1><p class=headline></p><p class=tagline></p><p class=location></p><div class=links>"),Y=p("<div class=timeline>"),q=p("<div class=pill-list>"),G=p('<div class="pill-list compact">'),K=p("<ul>"),Q=p("<ul class=source-notes>"),X=p("<a target=_blank rel=noreferrer>"),Z=p("<p>"),ee=p("<article class=job><div><h3></h3><p class=meta><!$><!/> · <!$><!/> · <!$><!/></p></div><ul>"),w=p("<li>"),W=p("<span>"),te=p("<section class=resume-section><h2></h2><!$><!/>");const g=V();function ae(){return a(M,{get children(){return[a(N,{title:"Resume"}),a(A,{get children(){return a(re,{get children(){return[(()=>{var t=o(U),r=t.firstChild,e=r.firstChild,[l,m]=z(e.nextSibling);l.nextSibling;var s=r.nextSibling,u=s.nextSibling,b=u.nextSibling,S=b.nextSibling,i=S.nextSibling,h=i.nextSibling;return r.$$click=()=>O(g),n(r,a(B,{"aria-hidden":"true"}),l,m),n(u,()=>g.name),n(b,()=>g.headline),n(S,()=>g.tagline),n(i,()=>g.location),n(h,a(f,{get each(){return g.links},children:c=>(()=>{var $=o(X);return n($,()=>c.label),j(()=>D($,"href",c.url)),$})()})),H(),t})(),a(y,{title:"Summary",get children(){return a(f,{get each(){return g.summary},children:t=>(()=>{var r=o(Z);return n(r,t),r})()})}}),a(y,{title:"Experience",get children(){var t=o(Y);return n(t,a(f,{get each(){return g.experience},children:r=>(()=>{var e=o(ee),l=e.firstChild,m=l.firstChild,s=m.nextSibling,u=s.firstChild,[b,S]=z(u.nextSibling),i=b.nextSibling,h=i.nextSibling,[c,$]=z(h.nextSibling),x=c.nextSibling,_=x.nextSibling,[v,F]=z(_.nextSibling),k=l.nextSibling;return n(m,()=>r.role),n(s,()=>r.organization,b,S),n(s,()=>r.location,c,$),n(s,()=>r.period,v,F),n(k,a(f,{get each(){return r.highlights},children:P=>(()=>{var T=o(w);return n(T,P),T})()})),e})()})),t}}),a(y,{title:"Selected Projects",get children(){var t=o(q);return n(t,a(f,{get each(){return g.projects},children:r=>(()=>{var e=o(W);return n(e,r),e})()})),t}}),a(y,{title:"Skills",get children(){var t=o(G);return n(t,a(f,{get each(){return g.skills},children:r=>(()=>{var e=o(W);return n(e,r),e})()})),t}}),a(y,{title:"Background",get children(){var t=o(K);return n(t,a(f,{get each(){return g.background},children:r=>(()=>{var e=o(w);return n(e,r),e})()})),t}}),a(y,{title:"Source Notes",get children(){var t=o(Q);return n(t,a(f,{get each(){return g.sourceNotes},children:r=>(()=>{var e=o(w);return n(e,r),e})()})),t}})]}})}})]}})}const y=t=>(()=>{var r=o(te),e=r.firstChild,l=e.nextSibling,[m,s]=z(l.nextSibling);return n(e,()=>t.title),n(r,()=>t.children,m,s),r})(),re=L.div`
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
`;R(["click"]);export{ae as default};

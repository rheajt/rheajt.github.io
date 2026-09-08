import{U as B,k as L,e as r,p as M,x as a,E as T,S as u,m as W,N as d,B as i,V as A,J as k,H as $,A as C,C as o}from"./routing-CLiSUilp.js";import{s as F,S as G,e as H,L as U}from"./seo-oT5MijD8.js";import{S as j}from"./section-DFmlLx1C.js";import{f as R}from"./sanity-C_0eWEZ_.js";import"./preload-helper-ug3pwPZ1.js";var I=o("<p class=eyebrow>School operations · Data · Development"),J=o('<div class=intro-bottom><div><p class=lead>Practical tools for the work behind the school day.</p><p class=intro-copy>I build tools for school teams working with schedules, imports, and everyday information. Here are examples across PowerSchool, ManageBac, Google Workspace, and Microsoft 365.</p><aside class=aside><span class=eyebrow>A focused starting point</span><p>Start with the task. Work with the systems. Build what’s needed.</p></aside><div class=actions><a class=primary-link href=#project-highlights>Explore projects <span aria-hidden=true>↓</span></a><a class=text-link href=#start-a-conversation>Discuss your school’s needs <span aria-hidden=true>↗</span></a></div></div><div class=hero-heading><img class=brand-logo src=/school-data-solutions-new-logo.png alt="School Data Solutions logo"width=1947 height=808>'),V=o("<p class=eyebrow>Selected work"),q=o("<h2>Tools for school workflows"),K=o("<p>Project highlights from School Data Solutions."),O=o("<p class=project-message role=alert>Projects couldn’t be loaded. Please try again later, or get in touch below."),Q=o("<p class=project-message role=status>No project highlights are available yet. Get in touch below to discuss your school’s needs."),X=o('<div class=filters role=group aria-label="Filter projects by tag"><button type=button aria-controls=project-list>All</button><!$><!/>'),Y=o("<p class=result-count role=status aria-live=polite aria-atomic=true><!$><!/> <!$><!/> · <!$><!/>"),Z=o("<div id=project-list class=project-grid>"),ee=o("<div class=contact-panel><div><p class=eyebrow>Let’s talk</p><h2>What’s taking up your team’s time?</h2><p>Tell me about the task and the systems you use. We can discuss whether a focused tool would help.</p></div><!$><!/>"),te=o("<p class=project-message role=status>Loading projects…"),re=o("<button type=button aria-controls=project-list>"),ae=o("<img class=project-image loading=lazy>",!0,!1,!1),oe=o("<p class=platform-label>"),ie=o("<p>"),le=o("<article class=project-card><!$><!/><!$><!/><h3></h3><!$><!/>");const y=p=>[...new Set((p.tags??[]).map(n=>n?.label?.trim()).filter(n=>!!n))];function me(){const[p]=B(async()=>{try{return{posts:await R(void 0,"schooldata.solutions"),error:!1}}catch{return{posts:[],error:!0}}}),[n,z]=L(null),P=()=>[...new Set((p()?.posts??[]).flatMap(y))].sort(),x=()=>(p()?.posts??[]).filter(e=>n()===null||y(e).includes(n()));return r(U,{get children(){return[r(G,{title:"School Data Solutions",description:"School workflow projects for scheduling, ManageBac imports, staff information, and Google Sheets prototypes."}),r(ne,{get children(){return[r(j,{className:"intro",get children(){return[a(I),a(J)]}}),r(j,{id:"project-highlights",className:"projects",get children(){return[a(V),a(q),a(K),r(T,{get fallback(){return a(te)},get children(){return[r(u,{get when(){return p()?.error},get children(){return a(O)}}),r(u,{get when(){return W(()=>!p()?.error)()&&p()?.posts.length===0},get children(){return a(Q)}}),r(u,{get when(){return(p()?.posts.length??0)>0},get children(){return[r(u,{get when(){return P().length>0},get children(){var e=a(X),t=e.firstChild,l=t.nextSibling,[m,g]=d(l.nextSibling);return t.$$click=()=>z(null),i(e,r(A,{get each(){return P()},children:h=>(()=>{var s=a(re);return s.$$click=()=>z(h),i(s,h),k(()=>$(s,"aria-pressed",n()===h)),C(),s})()}),m,g),k(()=>$(t,"aria-pressed",n()===null)),C(),e}}),(()=>{var e=a(Y),t=e.firstChild,[l,m]=d(t.nextSibling),g=l.nextSibling,h=g.nextSibling,[s,b]=d(h.nextSibling),_=s.nextSibling,v=_.nextSibling,[w,S]=d(v.nextSibling);return i(e,()=>x().length,l,m),i(e,()=>x().length===1?"project":"projects",s,b),i(e,()=>n()??"All projects",w,S),e})(),(()=>{var e=a(Z);return i(e,r(A,{get each(){return x()},children:t=>(()=>{var l=a(le),m=l.firstChild,[g,h]=d(m.nextSibling),s=g.nextSibling,[b,_]=d(s.nextSibling),v=b.nextSibling,w=v.nextSibling,[S,E]=d(w.nextSibling);return i(l,r(u,{get when(){return t.imageUrl},get children(){var c=a(ae);return k(f=>{var D=t.imageUrl,N=t.imageAlt??t.title;return D!==f.e&&$(c,"src",f.e=D),N!==f.t&&$(c,"alt",f.t=N),f},{e:void 0,t:void 0}),c}}),g,h),i(l,r(u,{get when(){return y(t).length>0},get children(){var c=a(oe);return i(c,()=>y(t).join(" / ")),c}}),b,_),i(v,()=>t.title),i(l,r(u,{get when(){return t.summary},get children(){var c=a(ie);return i(c,()=>t.summary),c}}),S,E),l})()})),e})()]}})]}})]}}),r(j,{id:"start-a-conversation",className:"contact-section",get children(){var e=a(ee),t=e.firstChild,l=t.nextSibling,[m,g]=d(l.nextSibling);return i(e,r(H,{href:"/contact",label:"Start a conversation"}),m,g),e}})]}})]}})}const ne=F.div`
    padding-top: var(--spacing-16);

    .intro {
        padding-top: var(--spacing-12);
    }
    .hero-heading {
        min-width: 0;
    }
    .brand-logo {
        display: block;
        width: 100%;
        height: auto;
    }
    .eyebrow,
    .platform-label,
    .result-count {
        font-family: var(--fontFamily-mono);
        font-size: var(--fontSize-0);
    }
    .eyebrow {
        color: var(--color-primary);
        margin-bottom: var(--spacing-3);
    }
    h1 {
        font-size: clamp(3rem, 8vw, 5.5rem);
        line-height: 1.06;
        margin: 0 0 var(--spacing-6);
    }
    h1 span {
        color: var(--color-primary);
    }
    h2 {
        margin-top: 0;
    }
    .intro-bottom {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 40%;
        gap: var(--spacing-8);
        align-items: start;
    }
    .lead {
        font-family: var(--font-heading);
        font-size: var(--fontSize-3);
        line-height: 1.5;
        margin-bottom: var(--spacing-3);
    }
    .intro-copy {
        max-width: 38rem;
    }
    .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-4);
    }
    .primary-link {
        display: inline-flex;
        gap: var(--spacing-4);
        padding: 0.75rem 1rem;
        background: var(--color-primary);
        color: white;
        border-radius: 3px;
        text-decoration: none;
        font-weight: 600;
    }
    .primary-link:hover {
        background: #3a4ab0;
    }
    .text-link {
        color: var(--color-primary);
        text-underline-offset: 4px;
        padding: 0.75rem 0;
    }
    .note {
        border-left: 2px solid var(--color-primary);
        padding: var(--spacing-4);
        background: rgba(255, 255, 255, 0.65);
    }
    .note p {
        font-family: var(--font-heading);
        font-size: var(--fontSize-2);
        margin: var(--spacing-3) 0 0;
    }
    .projects {
        border-top: 1px solid var(--color-accent);
    }
    section[id] {
        scroll-margin-top: var(--spacing-5);
    }
    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-2);
    }
    .filters button {
        min-height: 44px;
        padding: 0.6rem 1rem;
        border: 1px solid var(--color-accent);
        border-radius: 3px;
        background: #fbfbf8;
        color: var(--color-text);
        font: inherit;
        cursor: pointer;
    }
    .filters button:hover {
        border-color: var(--color-primary);
    }
    .filters button[aria-pressed="true"] {
        background: var(--color-primary);
        color: white;
        border-color: var(--color-primary);
    }
    a:focus-visible,
    button:focus-visible {
        outline: 3px solid var(--color-primary);
        outline-offset: 4px;
    }
    .result-count {
        color: var(--color-text-light);
        margin: var(--spacing-4) 0;
    }
    .project-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: var(--spacing-4);
        align-items: start;
    }
    .project-card {
        background: #fbfbf8;
        border: 1px solid var(--color-accent);
        border-top: 3px solid var(--color-primary);
        padding: var(--spacing-4);
    }
    .platform-label {
        color: var(--color-primary);
        margin-bottom: var(--spacing-3);
    }
    .project-card h3 {
        font-size: var(--fontSize-3);
        margin: 0 0 var(--spacing-3);
    }
    .project-card {
        overflow-wrap: anywhere;
    }
    .project-card > :last-child {
        margin-bottom: 0;
    }
    .project-image {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: contain;
        background: #fff;
        margin-bottom: var(--spacing-4);
    }
    .project-message {
        border-left: 2px solid var(--color-primary);
        background: #fbfbf8;
        padding: var(--spacing-4);
    }
    .contact-section {
        padding-top: 0;
    }
    .contact-panel {
        border: 1px solid var(--color-accent);
        background: #eef0f9;
        padding: var(--spacing-6);
        display: flex;
        align-items: center;
        gap: var(--spacing-6);
    }
    .contact-panel > div:first-child {
        flex: 1;
    }
    .contact-panel h2 {
        font-size: var(--fontSize-4);
    }
    .contact-panel p:last-child {
        margin-bottom: 0;
    }
    .contact-panel .page-button {
        display: inline-block;
        text-align: center;
    }
    @media (max-width: 700px) {
        .intro-bottom,
        .project-grid {
            grid-template-columns: 1fr;
        }
        .intro {
            padding-top: var(--spacing-8);
        }
        .brand-logo {
            max-width: 24rem;
            margin-inline: auto;
        }
        .note {
            padding: var(--spacing-3) var(--spacing-4);
        }
        .contact-panel {
            flex-direction: column;
            align-items: flex-start;
            padding: var(--spacing-4);
        }
    }
`;M(["click"]);export{me as default};

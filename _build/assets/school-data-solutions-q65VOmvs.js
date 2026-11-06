import{$ as e,A as t,D as n,E as r,K as i,L as a,M as o,T as s,U as c,V as l,W as u,X as d,Z as f,j as p,k as m,w as h}from"./routing-1Zagr2Ci.js";import{l as g,r as _,t as v,u as y}from"./seo-BWNfLqpV.js";import{t as b}from"./loader-gSDbXzSr.js";import{a as x,i as S,n as C,r as w,t as T}from"./shared-HaDM3B57.js";import{t as E}from"./section-CtxWtUEy.js";import{r as D}from"./formatPublishedDate-Df2GwpgK.js";import{t as O}from"./project-card-ClSkKOu6.js";var k=a(`<a>`);function A(e){let t=()=>e.pathname??``,n=()=>e.href??``,a=()=>e.label??``;return i(c,{get when(){return!n().startsWith(`http`)},get fallback(){return i(j,{get children(){var e=r(k);return m(e,a),d(r=>{var i=`page-button sans ${t().includes(n())?`active`:``}`,a=n();return i!==r.e&&h(e,r.e=i),a!==r.t&&o(e,`href`,r.t=a),r},{e:void 0,t:void 0}),e}})},get children(){return i(j,{get children(){return i(y,{get class(){return`page-button sans ${t().includes(n())?`active`:``}`},get href(){return n()},get children(){return a()}})}})}})}var j=g.div`
    .page-button {
        background: none;
        border: none;
        padding: 0.5em 1em;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        text-decoration: none;
        color: white;
        font-size: inherit;
        font-weight: bold;
        font-family: inherit;
        border: 1px solid lightgray;
        border-radius: 3px;
        background-color: var(--color-primary);

        &:hover {
            background-color: #3a4ab0;
        }
    }
`,M=0;async function N(e,t,n,r){let i=new Request(e,{method:`POST`,...r,headers:{...r.headers,"X-Server-Id":t,"X-Server-Instance":n}});return await fetch(i)}async function P(e,t,n,r,i){if(i.length===0)return N(e,t,n,r);if(i.length===1){let a=i[0],o=S(a);if(o)return N(e,t,n,{...r,body:o.body,headers:{...r.headers,...o.headers}})}return N(e,t,n,{...r,body:await x(i),headers:{...r.headers,"Content-Type":`text/plain`,[T]:C.Seroval}})}async function F(e,t,n,r){let i=`server-fn:${M++}`,a=await P(e,t,i,n,r);if(a.headers.has(`Location`)||a.headers.has(`X-Revalidate`)||a.headers.has(`X-Single-Flight`))return a.body&&(a.customBody=async()=>await w(i,!0,a.clone())),a;let o=await w(i,!0,a.clone());if(a.headers.has(`X-Error`)||a.status>=500)throw o??Error(`Server function call failed with status ${a.status}`);return o}function I(e){let t=`/`;return t.endsWith(`/`)||(t+=`/`),new Proxy((...n)=>F(`${t}_server`,e,{},n),{get(n,r,i){if(r===`url`)return`${t}_server?id=${encodeURIComponent(e)}`;if(r===`GET`)return i.withOptions({method:`GET`});if(r===`withOptions`){let n=`${t}_server?id=${encodeURIComponent(e)}`;return r=>{let i=async(...i)=>{let a=r.method&&r.method.toUpperCase()===`GET`;return F(a?n+(i.length?`&args=${encodeURIComponent(await x(i))}`:``):`${t}_server`,e,r,a?[]:i)};return i.url=n,i}}return n[r]}})}I(`161e7d6e-0`);var L=a(`<h1 class=visually-hidden>School Data Solutions`),R=a(`<p class=eyebrow>School operations · Data · Development`),z=a(`<div class=intro-bottom><div><p class=lead>Practical tools for the work behind the school day.</p><p class=intro-copy>Start with the task. Work with the systems. Build what’s needed.</p><div class=actions><a class=primary-link href=#project-highlights>Explore projects <span aria-hidden=true>↓</span></a><a class=text-link href=#start-a-conversation>Discuss your school’s needs <span aria-hidden=true>↗</span></a></div></div><div class=hero-heading><img class=brand-logo src=/school-data-solutions-new-logo.png alt="School Data Solutions logo"width=1947 height=808>`),B=a(`<p class=eyebrow>School Data Solutions Projects`),V=a(`<p>All of the projects I have been working on for building custom tools for schools.`),H=a(`<p class=project-message role=alert>Projects couldn’t be loaded. Please try again later, or get in touch below.`),U=a(`<p class=project-message role=status>No projects are available yet. Get in touch below to discuss your school’s needs.`),W=a(`<div class=filters role=group aria-label="Filter projects by tag"><button type=button aria-controls=project-list>All</button><!$><!/>`),G=a(`<p class=result-count role=status aria-live=polite aria-atomic=true><!$><!/> <!$><!/> · <!$><!/>`),K=a(`<div id=project-list class=project-grid>`),q=a(`<div class=contact-panel><div><p class=eyebrow>Let’s talk</p><h2>What’s taking up your team’s time?</h2><p>Tell me about the task and the systems you use. We can discuss whether a focused tool would help.</p></div><!$><!/>`),J=a(`<button type=button aria-controls=project-list>`),Y=e=>[...new Set((e.tags??[]).map(e=>e?.label?.trim()).filter(e=>!!e))];function X(){let[a]=f(async()=>{try{return{posts:(await D(void 0,`schooldata.solutions`)).filter(e=>e.category===`schooldata.solutions`),error:!1}}catch{return{posts:[],error:!0}}}),[s,h]=e(null),g=()=>[...new Set((a()?.posts??[]).flatMap(Y))].sort(),y=()=>(a()?.posts??[]).filter(e=>s()===null||Y(e).includes(s()));return i(_,{get children(){return[i(v,{title:`School Data Solutions`,description:`School workflow projects for scheduling, ManageBac imports, staff information, and Google Sheets prototypes.`}),i(Z,{get children(){return[i(E,{className:`intro`,get children(){return[r(L),r(R),r(z)]}}),i(E,{id:`project-highlights`,className:`projects`,get children(){return[r(B),r(V),i(u,{get fallback(){return i(b,{label:`Loading projects…`})},get children(){return[i(c,{get when(){return a()?.error},get children(){return r(H)}}),i(c,{get when(){return t(()=>!a()?.error)()&&a()?.posts.length===0},get children(){return r(U)}}),i(c,{get when(){return(a()?.posts.length??0)>0},get children(){return[i(c,{get when(){return g().length>0},get children(){var e=r(W),t=e.firstChild,a=t.nextSibling,[c,u]=n(a.nextSibling);return t.$$click=()=>h(null),m(e,i(l,{get each(){return g()},children:e=>(()=>{var t=r(J);return t.$$click=()=>h(e),m(t,e),d(()=>o(t,`aria-pressed`,s()===e)),p(),t})()}),c,u),d(()=>o(t,`aria-pressed`,s()===null)),p(),e}}),(()=>{var e=r(G),t=e.firstChild,[i,a]=n(t.nextSibling),o=i.nextSibling.nextSibling,[c,l]=n(o.nextSibling),u=c.nextSibling.nextSibling,[d,f]=n(u.nextSibling);return m(e,()=>y().length,i,a),m(e,()=>y().length===1?`project`:`projects`,c,l),m(e,()=>s()??`All projects`,d,f),e})(),(()=>{var e=r(K);return m(e,i(l,{get each(){return y()},children:e=>i(O,{post:e})})),e})()]}})]}})]}}),i(E,{id:`start-a-conversation`,className:`contact-section`,get children(){var e=r(q),t=e.firstChild.nextSibling,[a,o]=n(t.nextSibling);return m(e,i(A,{href:`/contact`,label:`Start a conversation`}),a,o),e}})]}})]}})}var Z=g.div`
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
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(50%);
        white-space: nowrap;
        border: 0;
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
`;s([`click`]);export{X as default};
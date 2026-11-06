import{$ as e,A as t,E as n,K as r,L as i,M as a,N as o,R as s,T as c,U as l,V as u,X as d,j as f,k as p,w as m}from"./routing-1Zagr2Ci.js";import{c as h,l as g,r as _,t as v}from"./seo-BWNfLqpV.js";var y=i(`<div class=pill>PROTOTYPE`),b=i(`<button>Article View`),x=i(`<button>404 View`),S=i(`<div class=content><h1>Project Not Found</h1><p>The project you're looking for doesn't exist or has been removed.</p><a href=/projects class=btn>View all projects`),C=i(`<div class=metadata><time></time><span class=divider>•</span><span class=category>`),w=i(`<h1 class=title>`),T=i(`<p class=dek>`),E=i(`<div class=placeholder-img>`),D=i(`<figcaption>`),O=i(`<p class=dropcap>Every digital tool claims to save time, but very few ask what we do with the time we save. When starting this project, the primary directive wasn't speed, but intentionality.`),k=i(`<h2>A Shift in Paradigm`),A=i(`<p>Most focus apps use guilt as a motivator—red timers, strict blocking, and aggressive notifications. We wanted to build something that felt like a quiet room instead of a prison cell. This required a completely different approach to the user interface.`),j=i(`<p>To achieve this, we stripped away the typical dashboard metrics. No productivity scores, no streaks. Just the work, and the tools to do it.`),M=i(`<div class=youtube-placeholder><div class=play-btn>▶</div><span>Interaction Demo (YouTube)`),N=i(`<figcaption>A walkthrough of the core focus-session interaction.`),P=i(`<h2>Technical Implementation`),ee=i(`<p>Building a distraction-free environment on the web is inherently paradoxical. The browser is an engine of distraction. We relied heavily on the Fullscreen API and aggressive service worker caching to ensure the environment felt native and unbroken.`),F=i(`<div class=header><span class=lang>typescript</span><button type=button class=copy-btn aria-live=polite>`),I=i(`<p role=alert style=color:#fff;padding:1rem>`),L=i(`<pre><code>async function enterFocusMode(element: HTMLElement) {
    if (!document.fullscreenElement) {
        try {
            await element.requestFullscreen();
            document.body.classList.add('focus-active');
            
            // Lock screen wake state
            if ('wakeLock' in navigator) {
                wakeLock = await navigator.wakeLock.request('screen');
            }
        } catch (err) {
            console.error(\`Error attempting to enable focus mode: \${err.message}\`);
        }
    }
}`),R=i(`<p>The outcome was a tool that users didn't just use to work, but used to <em>prepare</em> to work. The friction we introduced—a deliberate two-second delay before opening external links—proved to be the most loved feature in our beta testing.`),z=i(`<div class=tags>`),B=i(`<span class=tag>`);function V(){let[i,a]=e(`content`),o={title:`The Art of Distraction: Building a Modern Focus Tool`,dek:`An exploration of how intentional friction and bold typography can reshape our relationship with digital workspaces.`,date:`2026-07-22`,formattedDate:`July 22, 2026`,category:`Case Study`,mainImage:{url:`https://via.placeholder.com/1200x630`,caption:`Early wireframes and structural explorations for the Focus Tool dashboard.`},tags:[`UI/UX`,`SolidJS`,`Product Design`]};return r(_,{get children(){return[r(v,{title:`Prototype: Editorial Narrative`,get image(){return t(()=>!!o.mainImage)()?o.mainImage.url:void 0}}),r(W,{get children(){return[n(y),(()=>{var e=n(b);return e.$$click=()=>a(`content`),d(()=>m(e,i()===`content`?`active`:``)),f(),e})(),(()=>{var e=n(x);return e.$$click=()=>a(`404`),d(()=>m(e,i()===`404`?`active`:``)),f(),e})()]}}),r(l,{get when(){return i()===`404`},get children(){return r(H,{})}}),r(l,{get when(){return i()===`content`},get children(){return r(U,{post:o})}})]}})}function H(){return r(G,{get children(){return[r(J,{href:`/projects`,children:`← Back to projects`}),n(S)]}})}function U(t){let{post:i}=t,c,[m,h]=e(`Copy code`),[g,_]=e(``),v=async()=>{if(m()!==`Copying…`){h(`Copying…`),_(``);try{await navigator.clipboard.writeText(c?.textContent??``),h(`Copied`)}catch{h(`Copy code`),_(`Could not copy. Select the code and copy it manually, or try again.`)}}};return r(K,{get children(){return[r(q,{get children(){return r(J,{href:`/projects`,children:`← Back to projects`})}}),r(Y,{get children(){return[(()=>{var e=n(C),t=e.firstChild,r=t.nextSibling.nextSibling;return p(t,()=>i.formattedDate),p(r,()=>i.category),d(()=>a(t,`datetime`,i.date)),e})(),(()=>{var e=n(w);return p(e,()=>i.title),e})(),(()=>{var e=n(T);return p(e,()=>i.dek),e})()]}}),r(l,{get when(){return i.mainImage},get children(){return r(X,{get children(){return[n(E),r(l,{get when(){return i.mainImage.caption},get children(){var e=n(D);return p(e,()=>i.mainImage.caption),e}})]}})}}),r(Z,{get children(){return[n(O),n(k),n(A),n(j),r(Q,{get children(){return[n(M),n(N)]}}),n(P),n(ee),r($,{get children(){return[(()=>{var e=n(F),t=e.firstChild.nextSibling;return t.$$click=v,p(t,m),d(()=>o(t,`disabled`,m()===`Copying…`)),f(),e})(),r(l,{get when(){return g()},get children(){var e=n(I);return p(e,g),e}}),(()=>{var e=n(L),t=e.firstChild,r=c;return typeof r==`function`?s(r,t):c=t,e})()]}}),n(R)]}}),r(te,{get children(){var e=n(z);return p(e,r(u,{get each(){return i.tags},children:e=>(()=>{var t=n(B);return p(t,e),t})()})),e}})]}})}var W=g.div`
    position: fixed;
    bottom: var(--spacing-4);
    right: var(--spacing-4);
    background: #111;
    padding: var(--spacing-2);
    border-radius: 8px;
    display: flex;
    gap: var(--spacing-2);
    align-items: center;
    z-index: 100;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

    .pill {
        color: #ff4785;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 0 var(--spacing-2);
    }

    button {
        background: transparent;
        border: 1px solid #333;
        color: #aaa;
        padding: var(--spacing-1) var(--spacing-3);
        border-radius: 4px;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background: #222;
            color: #fff;
        }

        &.active {
            background: #333;
            color: #fff;
            border-color: #555;
        }
    }
`,G=g.div`
    ${h}
    padding-block: var(--spacing-10);
    min-height: 60vh;
    display: flex;
    flex-direction: column;

    .content {
        margin: auto 0;

        h1 {
            font-size: var(--fontSize-6);
            margin-bottom: var(--spacing-4);
            color: var(--color-heading-black);
        }

        p {
            font-size: var(--fontSize-3);
            color: var(--color-text-light);
            margin-bottom: var(--spacing-8);
        }

        .btn {
            display: inline-block;
            background: var(--color-primary);
            color: #fff;
            padding: var(--spacing-3) var(--spacing-6);
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            transition: transform 0.2s;

            &:hover {
                transform: translateY(-2px);
            }
        }
    }
`,K=g.article`
    ${h}
    padding-block: var(--spacing-8) var(--spacing-20);
`,q=g.nav`
    margin-bottom: var(--spacing-10);
`,J=g.a`
    color: var(--color-text-light);
    text-decoration: none;
    font-size: var(--fontSize-1);
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s;

    &:hover {
        color: var(--color-primary);
    }
`,Y=g.header`
    margin-bottom: var(--spacing-10);

    .metadata {
        display: flex;
        align-items: center;
        gap: var(--spacing-3);
        margin-bottom: var(--spacing-6);
        font-family: var(--font-heading);
        font-size: var(--fontSize-1);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-primary);

        .divider {
            color: var(--color-accent);
        }

        .category {
            color: var(--color-text-light);
        }
    }

    .title {
        font-size: clamp(var(--fontSize-6), 5vw, var(--fontSize-8));
        line-height: 1.1;
        margin-bottom: var(--spacing-6);
        letter-spacing: -0.03em;
        max-width: 20ch;
    }

    .dek {
        font-size: var(--fontSize-3);
        line-height: 1.5;
        color: var(--color-text-light);
        max-width: 35ch;
    }
`,X=g.figure`
    margin: 0 0 var(--spacing-12);

    .placeholder-img {
        width: 100%;
        aspect-ratio: 16/9;
        background: linear-gradient(135deg, #eef6ff 0%, #dbeafe 100%);
        border: 1px solid var(--color-accent);
        border-radius: 8px;
    }

    figcaption {
        padding: var(--spacing-3) 0;
        font-size: var(--fontSize-0);
        color: var(--color-text-light);
        font-style: italic;
    }
`,Z=g.div`
    max-width: 65ch;
    margin: 0 auto;
    font-size: var(--fontSize-2);
    line-height: 1.7;

    p {
        margin-bottom: var(--spacing-6);
    }

    .dropcap::first-letter {
        float: left;
        font-size: 4.5em;
        line-height: 0.8;
        padding: 0.1em 0.1em 0 0;
        font-family: var(--font-heading);
        font-weight: 700;
        color: var(--color-primary);
    }

    h2 {
        font-size: var(--fontSize-5);
        margin-top: var(--spacing-12);
        margin-bottom: var(--spacing-5);
    }
`,Q=g.figure`
    margin: var(--spacing-10) 0;

    .youtube-placeholder {
        width: 100%;
        aspect-ratio: 16/9;
        background: #111;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
        gap: var(--spacing-4);
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
            transform: scale(1.02);
            .play-btn {
                background: #ff0000;
                transform: scale(1.1);
            }
        }

        .play-btn {
            width: 64px;
            height: 64px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-size: 24px;
            transition: all 0.2s;
        }

        span {
            font-family: var(--font-heading);
            font-weight: 500;
            letter-spacing: 0.05em;
        }
    }

    figcaption {
        padding: var(--spacing-3) 0;
        font-size: var(--fontSize-0);
        color: var(--color-text-light);
        text-align: center;
    }
`,$=g.div`
    margin: var(--spacing-8) 0;
    background: #1a1a1a;
    border-radius: 8px;
    overflow: hidden;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-2) var(--spacing-4);
        background: #2a2a2a;
        border-bottom: 1px solid #333;

        .lang {
            color: #888;
            font-size: 0.75rem;
            font-family: monospace;
            text-transform: uppercase;
        }

        .copy-btn {
            background: transparent;
            border: 1px solid #555;
            color: #ccc;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                background: #444;
                color: #fff;
            }
        }
    }

    pre {
        margin: 0;
        padding: var(--spacing-4);
        overflow-x: auto;

        code {
            font-family: "Courier New", Courier, monospace;
            font-size: 0.9rem;
            color: #e6e6e6;
            line-height: 1.5;
        }
    }
`,te=g.footer`
    max-width: 65ch;
    margin: var(--spacing-12) auto 0;
    padding-top: var(--spacing-8);
    border-top: 1px solid var(--color-accent);

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-3);
    }

    .tag {
        font-size: var(--fontSize-0);
        padding: var(--spacing-1) var(--spacing-3);
        background: rgba(40, 53, 151, 0.08);
        color: var(--color-primary);
        border-radius: 20px;
        font-weight: 500;
    }
`;c([`click`]);export{V as default};
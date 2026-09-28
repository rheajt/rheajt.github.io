import{A as e,B as t,E as n,I as r,J as i,M as a,T as o,V as s,W as c,Z as l,j as u,k as d,w as f}from"./routing-DP3NAu6Z.js";import{d as p,r as m,t as h}from"./seo-CaORYdCz.js";var g=r(`<div class=pill>PROTOTYPE`),_=r(`<button>Article View`),v=r(`<button>404 View`),y=r(`<div class=content><h1>Project Not Found</h1><p>The project you're looking for doesn't exist or has been removed.</p><a href=/projects class=btn>View all projects`),b=r(`<div class=metadata><time></time><span class=divider>•</span><span class=category>`),x=r(`<h1 class=title>`),S=r(`<p class=dek>`),C=r(`<div class=placeholder-img>`),w=r(`<figcaption>`),T=r(`<p class=dropcap>Every digital tool claims to save time, but very few ask what we do with the time we save. When starting this project, the primary directive wasn't speed, but intentionality.`),E=r(`<h2>A Shift in Paradigm`),D=r(`<p>Most focus apps use guilt as a motivator—red timers, strict blocking, and aggressive notifications. We wanted to build something that felt like a quiet room instead of a prison cell. This required a completely different approach to the user interface.`),O=r(`<p>To achieve this, we stripped away the typical dashboard metrics. No productivity scores, no streaks. Just the work, and the tools to do it.`),k=r(`<div class=youtube-placeholder><div class=play-btn>▶</div><span>Interaction Demo (YouTube)`),A=r(`<figcaption>A walkthrough of the core focus-session interaction.`),j=r(`<h2>Technical Implementation`),M=r(`<p>Building a distraction-free environment on the web is inherently paradoxical. The browser is an engine of distraction. We relied heavily on the Fullscreen API and aggressive service worker caching to ensure the environment felt native and unbroken.`),N=r(`<div class=header><span class=lang>typescript</span><button class=copy-btn>Copy code`),P=r(`<pre><code>async function enterFocusMode(element: HTMLElement) {
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
}`),F=r(`<p>The outcome was a tool that users didn't just use to work, but used to <em>prepare</em> to work. The friction we introduced—a deliberate two-second delay before opening external links—proved to be the most loved feature in our beta testing.`),I=r(`<div class=tags>`),L=r(`<span class=tag>`);function R(){let[t,r]=l(`content`),a={title:`The Art of Distraction: Building a Modern Focus Tool`,dek:`An exploration of how intentional friction and bold typography can reshape our relationship with digital workspaces.`,date:`2026-07-22`,formattedDate:`July 22, 2026`,category:`Case Study`,mainImage:{url:`https://via.placeholder.com/1200x630`,caption:`Early wireframes and structural explorations for the Focus Tool dashboard.`},tags:[`UI/UX`,`SolidJS`,`Product Design`]};return c(m,{get children(){return[c(h,{title:`Prototype: Editorial Narrative`,get image(){return e(()=>!!a.mainImage)()?a.mainImage.url:void 0}}),c(V,{get children(){return[n(g),(()=>{var e=n(_);return e.$$click=()=>r(`content`),i(()=>f(e,t()===`content`?`active`:``)),u(),e})(),(()=>{var e=n(v);return e.$$click=()=>r(`404`),i(()=>f(e,t()===`404`?`active`:``)),u(),e})()]}}),c(s,{get when(){return t()===`404`},get children(){return c(z,{})}}),c(s,{get when(){return t()===`content`},get children(){return c(B,{post:a})}})]}})}function z(){return c(H,{get children(){return[c(G,{href:`/projects`,children:`← Back to projects`}),n(y)]}})}function B(e){let{post:r}=e;return c(U,{get children(){return[c(W,{get children(){return c(G,{href:`/projects`,children:`← Back to projects`})}}),c(K,{get children(){return[(()=>{var e=n(b),t=e.firstChild,o=t.nextSibling.nextSibling;return d(t,()=>r.formattedDate),d(o,()=>r.category),i(()=>a(t,`datetime`,r.date)),e})(),(()=>{var e=n(x);return d(e,()=>r.title),e})(),(()=>{var e=n(S);return d(e,()=>r.dek),e})()]}}),c(s,{get when(){return r.mainImage},get children(){return c(q,{get children(){return[n(C),c(s,{get when(){return r.mainImage.caption},get children(){var e=n(w);return d(e,()=>r.mainImage.caption),e}})]}})}}),c(J,{get children(){return[n(T),n(E),n(D),n(O),c(Y,{get children(){return[n(k),n(A)]}}),n(j),n(M),c(X,{get children(){return[n(N),n(P)]}}),n(F)]}}),c(Z,{get children(){var e=n(I);return d(e,c(t,{get each(){return r.tags},children:e=>(()=>{var t=n(L);return d(t,e),t})()})),e}})]}})}var V=p.div`
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
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);

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
`,H=p.div`
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--spacing-10) 1em;
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
`,U=p.article`
    max-width: var(--layout-width);
    margin: 0 auto;
    padding: var(--spacing-8) 1em var(--spacing-20);
`,W=p.nav`
    margin-bottom: var(--spacing-10);
`,G=p.a`
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
`,K=p.header`
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
`,q=p.figure`
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
`,J=p.div`
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
`,Y=p.figure`
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
            background: rgba(255,255,255,0.2);
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
`,X=p.div`
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
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.9rem;
            color: #e6e6e6;
            line-height: 1.5;
        }
    }
`,Z=p.footer`
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
`;o([`click`]);export{R as default};
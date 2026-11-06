import{D as e,E as t,K as n,L as r,M as i,U as a,V as o,X as s,k as c}from"./routing-1Zagr2Ci.js";import{l,u}from"./seo-BWNfLqpV.js";import{t as d}from"./formatPublishedDate-Df2GwpgK.js";var f=r(`<div class=card-image><img loading=lazy>`,!0,!1,!1),p=r(`<p>`),m=r(`<div class=tags>`),h=r(`<div class=card-body><!$><!/><h3></h3><!$><!/><!$><!/>`),g=r(`<div class="card-image placeholder"><span>`),_=r(`<time>`),v=r(`<span class=tag>`);function y(r){let l=()=>[n(a,{get when(){return r.post.imageUrl},get fallback(){return(()=>{var e=t(g),n=e.firstChild;return c(n,()=>r.post.title),e})()},get children(){var e=t(f),n=e.firstChild;return s(e=>{var t=r.post.imageUrl,a=r.post.imageAlt??r.post.title;return t!==e.e&&i(n,`src`,e.e=t),a!==e.t&&i(n,`alt`,e.t=a),e},{e:void 0,t:void 0}),e}}),(()=>{var l=t(h),u=l.firstChild,[f,g]=e(u.nextSibling),y=f.nextSibling,b=y.nextSibling,[x,S]=e(b.nextSibling),C=x.nextSibling,[w,T]=e(C.nextSibling);return c(l,n(a,{get when(){return d(r.post.publishedAt)},children:e=>(()=>{var n=t(_);return c(n,e),s(()=>i(n,`datetime`,r.post.publishedAt??void 0)),n})()}),f,g),c(y,()=>r.post.title),c(l,n(a,{get when(){return r.post.summary},get children(){var e=t(p);return c(e,()=>r.post.summary),e}}),x,S),c(l,n(a,{get when(){return r.post.tags?.length},get children(){var e=t(m);return c(e,n(o,{get each(){return r.post.tags},children:e=>(()=>{var n=t(v);return c(n,()=>e.label),n})()})),e}}),w,T),l})()];return n(a,{get when(){return r.href},get fallback(){return n(b,{get children(){return l()}})},children:e=>n(b,{as:u,get href(){return e()},get children(){return l()}})})}var b=l.article`
    background: #fff;
    border: 1px solid var(--color-accent);
    border-radius: 4px;
    overflow: hidden;
    min-width: 0;
    overflow-wrap: anywhere;
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &[href] {
        transition:
            transform 150ms ease,
            box-shadow 150ms ease;
    }
    &[href]:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }
    &[href]:focus-visible {
        outline: 3px solid var(--color-primary);
        outline-offset: 4px;
    }
    .card-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #eef6ff;
        display: grid;
        place-items: center;

        &.placeholder {
            padding: var(--spacing-6);
            color: var(--color-primary);
            font-family: var(--fontFamily-display);
            font-weight: 700;
            text-align: center;
            background-image:
                linear-gradient(
                    to right,
                    rgba(40, 53, 151, 0.08) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    rgba(40, 53, 151, 0.08) 1px,
                    transparent 1px
                );
            background-size: 18px 18px;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }
    &[href] .card-image img {
        transition: transform 0.4s ease;
    }
    &[href] .card-image:hover img {
        transform: scale(1.05);
    }
    .card-body {
        padding: var(--spacing-6);
        flex: 1;
        h3 {
            margin-top: 0;
            margin-bottom: var(--spacing-3);
            font-size: var(--fontSize-3);
        }
        time {
            display: block;
            color: var(--color-text-light);
            font-size: var(--fontSize-0);
            margin-bottom: var(--spacing-2);
        }
        p {
            font-size: var(--fontSize-0);
            color: var(--color-text-light);
            margin-bottom: var(--spacing-4);
        }
    }
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-2);
    }
    .tag {
        font-size: 0.75rem;
        padding: 0.15em 0.5em;
        background: rgba(40, 53, 151, 0.08);
        color: var(--color-primary);
        border-radius: 3px;
        font-weight: 500;
    }
`;export{y as t};
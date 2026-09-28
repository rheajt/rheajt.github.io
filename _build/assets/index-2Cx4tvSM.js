import{A as e,B as t,D as n,E as r,H as i,I as a,J as o,M as s,V as c,W as l,Y as u,k as d}from"./routing-DP3NAu6Z.js";import{d as f,f as p,r as m,t as h}from"./seo-CaORYdCz.js";import{t as g}from"./loader-CP2ZUSmg.js";import{t as _}from"./section-BIbz61Lq.js";import{n as v}from"./sanity-CB7HGe10.js";var y=a(`<h1>Projects`),b=a(`<p>Failed to load projects. Please try again later.`),x=a(`<p>No projects found.`),S=a(`<div class=card-image><img loading=lazy>`,!0,!1,!1),C=a(`<p>`),w=a(`<div class=tags>`),T=a(`<div class=card-body><time></time><h3></h3><!$><!/><!$><!/>`),E=a(`<div class="card-image placeholder"><span>`),D=a(`<span class=tag>`);function O(){let[a]=u(async()=>{try{return{posts:await v(),error:null}}catch(e){return{posts:[],error:e}}}),f=()=>!!a()?.error,p=()=>(a()?.posts??[]).length>0;return l(i,{get fallback(){return l(g,{})},get children(){return l(m,{get children(){return[l(h,{title:`Projects`}),l(_,{get children(){return[r(y),l(c,{get when(){return f()},get children(){return r(b)}}),l(c,{get when(){return p()},get children(){return l(A,{get children(){return l(t,{get each(){return a()?.posts},children:i=>l(j,{get href(){return`/projects/${i.slug.current}`},get children(){return[l(c,{get when(){return i.imageUrl},get fallback(){return(()=>{var e=r(E),t=e.firstChild;return d(t,()=>i.title),e})()},get children(){var e=r(S),t=e.firstChild;return o(e=>{var n=i.imageUrl,r=i.imageAlt??i.title;return n!==e.e&&s(t,`src`,e.e=n),r!==e.t&&s(t,`alt`,e.t=r),e},{e:void 0,t:void 0}),e}}),(()=>{var a=r(T),u=a.firstChild,f=u.nextSibling,p=f.nextSibling,[m,h]=n(p.nextSibling),g=m.nextSibling,[_,v]=n(g.nextSibling);return d(u,()=>k(i.publishedAt)),d(f,()=>i.title),d(a,l(c,{get when(){return i.summary},get children(){var e=r(C);return d(e,()=>i.summary),e}}),m,h),d(a,l(c,{get when(){return e(()=>!!i.tags)()&&i.tags.length>0},get children(){var e=r(w);return d(e,l(t,{get each(){return i.tags},children:e=>(()=>{var t=r(D);return d(t,()=>e.label),t})()})),e}}),_,v),o(()=>s(u,`datetime`,i.publishedAt)),a})()]}})})}})}}),l(c,{get when(){return e(()=>!(a.loading||f()))()&&!p()},get children(){return r(x)}})]}})]}})}})}function k(e){return new Intl.DateTimeFormat(`en`,{month:`long`,day:`numeric`,year:`numeric`}).format(new Date(e))}var A=f.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
`,j=f(p)`
    background: #fff;
    border: 1px solid var(--color-accent);
    border-radius: 4px;
    overflow: hidden;
    color: inherit;
    text-decoration: none;
    transition:
        transform 150ms ease,
        box-shadow 150ms ease;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
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
            transition: transform 0.4s ease;
        }

        &:hover img {
            transform: scale(1.05);
        }
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
`;export{O as default};
import{U as z,e as r,x as a,S as c,V as v,J as b,H as p,B as l,N as x,m as $,E as P,C as n}from"./routing-CLiSUilp.js";import{s as y,A as C,L as A,S as E}from"./seo-Cu1eZUpG.js";import{S as F}from"./section-4fqYtlCS.js";import{f as L}from"./sanity-C_0eWEZ_.js";import{L as N}from"./loader-lQY2ImHl.js";import"./preload-helper-ug3pwPZ1.js";var D=n("<h1>Projects"),U=n("<p>Failed to load projects. Please try again later."),R=n("<p>No projects found."),B=n("<div class=card-image><img loading=lazy>",!0,!1,!1),G=n("<p>"),H=n("<div class=tags>"),I=n("<div class=card-body><time></time><h3></h3><!$><!/><!$><!/>"),J=n('<div class="card-image placeholder"><span>'),M=n("<span class=tag>");function Z(){const[s]=z(async()=>{try{return{posts:await L(),error:null}}catch(e){return{posts:[],error:e}}}),u=()=>!!s()?.error,h=()=>(s()?.posts??[]).length>0;return r(P,{get fallback(){return r(N,{})},get children(){return r(A,{get children(){return[r(E,{title:"Projects"}),r(F,{get children(){return[a(D),r(c,{get when(){return u()},get children(){return a(U)}}),r(c,{get when(){return h()},get children(){return r(V,{get children(){return r(v,{get each(){return s()?.posts},children:e=>r(Y,{get href(){return`/projects/${e.slug.current}`},get children(){return[r(c,{get when(){return e.imageUrl},get fallback(){return(()=>{var t=a(J),i=t.firstChild;return l(i,()=>e.title),t})()},get children(){var t=a(B),i=t.firstChild;return b(o=>{var m=e.imageUrl,g=e.imageAlt??e.title;return m!==o.e&&p(i,"src",o.e=m),g!==o.t&&p(i,"alt",o.t=g),o},{e:void 0,t:void 0}),t}}),(()=>{var t=a(I),i=t.firstChild,o=i.nextSibling,m=o.nextSibling,[g,_]=x(m.nextSibling),w=g.nextSibling,[S,k]=x(w.nextSibling);return l(i,()=>T(e.publishedAt)),l(o,()=>e.title),l(t,r(c,{get when(){return e.summary},get children(){var d=a(G);return l(d,()=>e.summary),d}}),g,_),l(t,r(c,{get when(){return $(()=>!!e.tags)()&&e.tags.length>0},get children(){var d=a(H);return l(d,r(v,{get each(){return e.tags},children:j=>(()=>{var f=a(M);return l(f,()=>j.label),f})()})),d}}),S,k),b(()=>p(i,"datetime",e.publishedAt)),t})()]}})})}})}}),r(c,{get when(){return $(()=>!s.loading&&!u())()&&!h()},get children(){return a(R)}})]}})]}})}})}function T(s){return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(new Date(s))}const V=y.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
`,Y=y(C)`
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
`;export{Z as default};

import{U as P,e as r,x as a,S as c,V as v,J as b,H as p,B as o,N as x,m as $,E as j,C as n}from"./routing-BQzf89fU.js";import{s as y,L as C,S as A,a as E}from"./section-ChQ-PyK9.js";import{f as F,L}from"./sanity-RriOvLF3.js";import"./preload-helper-ug3pwPZ1.js";var N=n("<h1>Projects"),D=n("<p>Failed to load projects. Please try again later."),U=n("<p>No projects found."),R=n("<div class=card-image><img loading=lazy>",!0,!1,!1),B=n("<p>"),G=n("<div class=tags>"),H=n("<div class=card-body><time></time><h3></h3><!$><!/><!$><!/>"),I=n('<div class="card-image placeholder"><span>'),J=n("<span class=tag>");function Q(){const[s]=P(async()=>{try{return{posts:await F(),error:null}}catch(e){return{posts:[],error:e}}}),h=()=>!!s()?.error,u=()=>(s()?.posts??[]).length>0;return r(j,{get fallback(){return r(L,{})},get children(){return r(C,{get children(){return[r(A,{title:"Projects"}),r(E,{get children(){return[a(N),r(c,{get when(){return h()},get children(){return a(D)}}),r(c,{get when(){return u()},get children(){return r(T,{get children(){return r(v,{get each(){return s()?.posts},children:e=>r(V,{get children(){return[r(c,{get when(){return e.imageUrl},get fallback(){return(()=>{var t=a(I),i=t.firstChild;return o(i,()=>e.title),t})()},get children(){var t=a(R),i=t.firstChild;return b(l=>{var m=e.imageUrl,g=e.imageAlt??e.title;return m!==l.e&&p(i,"src",l.e=m),g!==l.t&&p(i,"alt",l.t=g),l},{e:void 0,t:void 0}),t}}),(()=>{var t=a(H),i=t.firstChild,l=i.nextSibling,m=l.nextSibling,[g,_]=x(m.nextSibling),w=g.nextSibling,[S,k]=x(w.nextSibling);return o(i,()=>M(e.publishedAt)),o(l,()=>e.title),o(t,r(c,{get when(){return e.summary},get children(){var d=a(B);return o(d,()=>e.summary),d}}),g,_),o(t,r(c,{get when(){return $(()=>!!e.tags)()&&e.tags.length>0},get children(){var d=a(G);return o(d,r(v,{get each(){return e.tags},children:z=>(()=>{var f=a(J);return o(f,()=>z.label),f})()})),d}}),S,k),b(()=>p(i,"datetime",e.publishedAt)),t})()]}})})}})}}),r(c,{get when(){return $(()=>!s.loading&&!h())()&&!u()},get children(){return a(U)}})]}})]}})}})}function M(s){return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(new Date(s))}const T=y.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: var(--spacing-8);
    margin-top: var(--spacing-8);
`,V=y.div`
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
`;export{Q as default};

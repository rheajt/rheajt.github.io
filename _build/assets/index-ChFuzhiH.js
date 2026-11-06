import{$ as e,D as t,E as n,J as r,K as i,L as a,M as o,P as s,R as c,T as l,U as u,V as d,X as f,Z as p,at as m,it as h,j as g,k as _,w as v}from"./routing-1Zagr2Ci.js";import{c as y,l as b,n as x,o as S,r as C,t as w,u as T}from"./seo-BWNfLqpV.js";import{t as E}from"./loader-gSDbXzSr.js";import{t as D}from"./section-CtxWtUEy.js";import{r as O,t as k}from"./formatPublishedDate-Df2GwpgK.js";function A(){let[t,n]=e(!0);return m(()=>{if(!window.matchMedia){n(!1);return}let e=window.matchMedia(`(prefers-reduced-motion: reduce)`),t=()=>n(e.matches);t(),e.addEventListener(`change`,t),h(()=>e.removeEventListener(`change`,t))}),t}var j=e=>{let t=A(),n,a=[],o=null,s=null,c=1;return r(()=>{let r=t(),i=e.width,l=e.height;if(!i||!l)return;let u=n??document.getElementById(`graph-paper`);if(!u||(n=u,navigator.userAgent.toLowerCase().includes(`jsdom`)))return;let d=u.getContext(`2d`);if(!d)return;let f=window.devicePixelRatio||1;c=f;let p=i,m=l;u.style.width=`${p}px`,u.style.height=`${m}px`,u.width=Math.max(1,Math.floor(p*f)),u.height=Math.max(1,Math.floor(m*f)),d.setTransform(1,0,0,1,0,0),d.scale(f,f),a=[];let g=e=>Math.max(4,Math.floor(e/80)),_=(e=0)=>{let t=g(p),n=Array.from({length:t}).map((e,n)=>({x:12+n/(t-1)*(p-24),y:m-(Math.random()*(m-24)+12)})),r=Math.floor(Math.random()*256),i=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256),s={points:n,color:`rgba(${r}, ${i}, ${o}, 0.95)`,rgb:{r,g:i,b:o},start:performance.now()+e,duration:Math.max(1e3,(n.length-1)*1e3)};return a.push(s),a.length>10&&a.shift(),s},v=_();r&&(v.start-=v.duration+1e3);let y=()=>{s=window.setTimeout(()=>{_(),y()},6e3)};r||y();let b=e=>1-(1-e)**3,x=()=>{let e=performance.now();d.setTransform(1,0,0,1,0,0),d.scale(c,c),d.clearRect(0,0,p,m);for(let t of a){let n=t.points,r=e-t.start,i=12+Math.max(0,Math.min(1,r/t.duration))*(p-24);d.beginPath(),d.moveTo(n[0].x,n[0].y);for(let e=1;e<n.length;e++)if(n[e].x<=i)d.lineTo(n[e].x,n[e].y);else{let t=n[e-1].x,r=n[e-1].y,a=n[e].x,o=n[e].y,s=(i-t)/(a-t);d.lineTo(i,r+s*(o-r));break}d.save(),d.strokeStyle=t.color,d.lineWidth=2,d.lineJoin=`round`,d.lineCap=`round`,d.globalAlpha=.95,d.stroke(),d.restore();for(let r=0;r<n.length;r++){let i=n[r],a=(i.x-12)/(p-24),o=e-(t.start+a*t.duration);if(o<0)break;let s=Math.max(0,Math.min(1,o/1e3)),c=3*.8+3.2*b(s),l=.4+.6*Math.abs(Math.sin((e+r*150)/300)),u=Math.max(0,(1-s)*.8+.12*l),f=c*4,{r:m,g:h,b:g}=t.rgb,_=d.createRadialGradient(i.x,i.y,0,i.x,i.y,f);_.addColorStop(0,`rgba(${m}, ${h}, ${g}, ${Math.min(.7,u)})`),_.addColorStop(.6,`rgba(${m}, ${h}, ${g}, ${Math.min(.18,u*.3)})`),_.addColorStop(1,`rgba(${m}, ${h}, ${g}, 0)`),d.save(),d.globalCompositeOperation=`lighter`,d.fillStyle=_,d.beginPath(),d.arc(i.x,i.y,f,0,Math.PI*2),d.fill(),d.restore(),d.beginPath(),d.fillStyle=t.color,d.arc(i.x,i.y,c,0,Math.PI*2),d.fill();let v=.35*(1-s)+.12*Math.abs(Math.sin(e/200+r));v>.02&&(d.beginPath(),d.fillStyle=`rgba(255,255,255,${Math.min(.6,v)})`,d.arc(i.x-c*.3,i.y-c*.3,Math.max(1,c*.4),0,Math.PI*2),d.fill())}}r||(o=requestAnimationFrame(x))};r?x():o=requestAnimationFrame(x),h(()=>{s&&=(clearTimeout(s),null),o&&=(cancelAnimationFrame(o),null)})}),i(M,{ref(e){var t=n;typeof t==`function`?t(e):n=e},id:`graph-paper`,"aria-hidden":`true`,get width(){return e.width},get height(){return e.height}})},M=b.canvas`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.25;
    background: transparent;
    width: 100vw;
`,ee=a(`<span>`),N=[{name:`Microsoft Office 365`,color:`#01A6F0`},{name:`Google Workspaces`,color:`#EA4335`}],te=()=>{let[t,a]=e(0),[o,c]=e(!0),l=A();r(()=>{if(c(!0),l())return;let e,t=setInterval(()=>{c(!1),e=setTimeout(()=>{a(e=>e+1),c(!0)},300)},6e3);h(()=>{clearInterval(t),clearTimeout(e)})});let u=()=>N[t()%N.length];return i(ne,{get children(){var e=n(ee);return _(e,()=>u().name),f(t=>{var n=o()?`text-visible`:`text-hidden`,r=u().color;return n!==t.e&&v(e,t.e=n),r!==t.t&&s(e,`color`,t.t=r),t},{e:void 0,t:void 0}),e}})},ne=b.span`
    display: flex;
    justify-content: center;
    padding: 0.5em 0;
    font-family: "Space Grotesk", var(--fontFamily-sans);
    font-weight: 600;
    font-size: var(--fontSize-3);

    span {
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
    }
    .text-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .text-hidden {
        opacity: 0;
        transform: translateY(-10px);
    }
    @media (prefers-reduced-motion: reduce) {
        span {
            transition: none;
        }
    }
`,re=a(`<div class=container><div class=columns><div class=image><img src=/content/img/jordan-rhea-header.png width=250 height=250 alt="jordan rhea header"style=max-width:100%;height:auto></div><div class=caption><h1>I am Jordan Rhea</h1><p class=subtitle>and I build software for</p><!$><!/>`),P=()=>{let a,[o,s]=e({width:800,height:300});return r(()=>{let e=a,t=()=>{if(!e){let e=typeof window<`u`?Math.round(window.innerWidth):800;s({width:e,height:300});return}let t=e.getBoundingClientRect(),n=Math.round(typeof window<`u`?window.innerWidth:t.width);s({width:n,height:Math.round(t.height)})};if(t(),typeof window<`u`){if(typeof ResizeObserver<`u`&&e){let n=new ResizeObserver(t);n.observe(e),window.addEventListener(`resize`,t),h(()=>{n.disconnect(),window.removeEventListener(`resize`,t)})}else window.addEventListener(`resize`,t),h(()=>window.removeEventListener(`resize`,t))}}),i(F,{get children(){return[i(j,{get width(){return o().width},get height(){return o().height}}),(()=>{var e=n(re),r=e.firstChild.firstChild;r.firstChild;var o=r.nextSibling,s=o.firstChild.nextSibling.nextSibling,[l,u]=t(s.nextSibling),d=a;return typeof d==`function`?c(d,e):a=e,_(o,i(te,{}),l,u),e})()]}})},F=b.div`
    width: 100%;
    overflow: hidden;
    position: relative;

    .container {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
        border-bottom: 1px solid lightgray;
        padding-bottom: 3em;
        padding-top: 3em;

        .image {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .columns {
        ${y}
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        z-index: 1;
    }

    @media (min-width: 768px) {
        .columns {
            grid-template-columns: 1fr 1fr;
        }
    }

    .caption {
        text-align: center;
        padding-top: var(--spacing-12);
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            font-family: "Space Grotesk", var(--fontFamily-sans);
            font-weight: 700;
            font-size: var(--fontSize-6);
            margin: 0 0 var(--spacing-3) 0;
            letter-spacing: -0.02em;
            line-height: 1.1;
            color: var(--color-heading-black);
        }

        .subtitle {
            font-family: "Space Mono", monospace;
            font-weight: 400;
            font-size: var(--fontSize-1);
            color: var(--color-text-light);
            margin: 0;
            letter-spacing: 0.03em;
            text-transform: uppercase;
        }
    }
`,I=a(`<h2 class=section-title>Latest Projects`),L=a(`<p style=text-align:center>Projects are temporarily unavailable.`),R=a(`<div class=grid>`),z=a(`<div class=cta>`),B=a(`<div class=card-image><img loading=lazy>`,!0,!1,!1),V=a(`<p>`),H=a(`<div class=card-body><!$><!/><h3></h3><!$><!/>`),U=a(`<div class="card-image placeholder"><span>`),W=a(`<time>`),G=4,K=()=>{let[e]=p(async()=>{try{return{posts:await O(G),error:null}}catch(e){return{posts:[],error:e}}}),r=()=>!!e()?.error,a=()=>(e()?.posts??[]).length>0;return i(q,{get children(){return[n(I),i(u,{get when(){return e.loading},get children(){return i(E,{label:`Loading projects…`})}}),i(u,{get when(){return r()},get children(){return n(L)}}),i(u,{get when(){return a()},get children(){return[(()=>{var r=n(R);return _(r,i(d,{get each(){return e()?.posts},children:e=>i(T,{get href(){return`/projects/${e.slug.current}`},class:`card`,get children(){return[i(u,{get when(){return e.imageUrl},get fallback(){return(()=>{var t=n(U),r=t.firstChild;return _(r,()=>e.title),t})()},get children(){var t=n(B),r=t.firstChild;return f(t=>{var n=e.imageUrl,i=e.imageAlt??e.title;return n!==t.e&&o(r,`src`,t.e=n),i!==t.t&&o(r,`alt`,t.t=i),t},{e:void 0,t:void 0}),t}}),(()=>{var r=n(H),a=r.firstChild,[s,c]=t(a.nextSibling),l=s.nextSibling,d=l.nextSibling,[p,m]=t(d.nextSibling);return _(r,i(u,{get when(){return k(e.publishedAt)},children:t=>(()=>{var r=n(W);return _(r,t),f(()=>o(r,`datetime`,e.publishedAt??void 0)),r})()}),s,c),_(l,()=>e.title),_(r,i(u,{get when(){return e.summary},get children(){var t=n(V);return _(t,()=>e.summary),t}}),p,m),r})()]}})})),r})(),(()=>{var e=n(z);return _(e,i(T,{href:`/projects`,class:`view-all`,children:`View All Projects`})),e})()]}})]}})},q=b.section`
    ${y}
    margin-bottom: var(--spacing-16, 4rem);

    .section-title {
        text-align: center;
        font-family: var(--fontFamily-display);
        font-size: var(--fontSize-5, 1.5rem);
        margin-bottom: var(--spacing-10, 2.5rem);
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            background: var(--color-primary);
            margin: var(--spacing-3, 0.75rem) auto 0;
            border-radius: 2px;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
        gap: var(--spacing-8, 2rem);
    }

    .card {
        background: rgba(255, 255, 255, 0.85);
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        height: 100%;
        display: flex;
        flex-direction: column;

        /* graph-paper inset grid */
        background-image:
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        background-size: 24px 24px;

        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            border-color: var(--color-primary);
        }
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: #eef6ff;
        display: grid;
        place-items: center;

        &.placeholder {
            padding: var(--spacing-6, 1.5rem);
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
    }

    .card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-body {
        padding: var(--spacing-6, 1.5rem);
        flex: 1;

        h3 {
            margin: 0 0 var(--spacing-2, 0.5rem) 0;
            font-size: var(--fontSize-2, 1.1rem);
            font-family: var(--fontFamily-display);
            color: var(--color-heading);
        }

        time {
            display: block;
            color: var(--color-text-light, #666);
            font-size: var(--fontSize-0, 0.875rem);
            margin-bottom: var(--spacing-2, 0.5rem);
        }

        p {
            margin: 0;
            font-size: var(--fontSize-0, 0.875rem);
            color: var(--color-text-light, #666);
            line-height: var(--lineHeight-relaxed, 1.65);
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    .cta {
        text-align: center;
        margin-top: var(--spacing-10, 2.5rem);
    }

    .view-all {
        display: inline-block;
        padding: 0.65em 2em;
        font-family: var(--fontFamily-sans);
        font-size: var(--fontSize-1, 1rem);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 4px;
        text-decoration: none;
        transition:
            background 180ms ease,
            color 180ms ease;

        &:hover {
            background: var(--color-primary);
            color: #fff;
        }
    }
`,J=a(`<p>`),Y=a(`<span class=author><b></b> <br><!$><!/>`),ie=e=>i(ae,{get children(){return[(()=>{var t=n(J);return _(t,()=>e.quote.excerpt),t})(),(()=>{var r=n(Y),i=r.firstChild,a=i.nextSibling.nextSibling.nextSibling,[o,s]=t(a.nextSibling);return _(i,()=>e.quote.author),_(r,()=>e.quote.position,o,s),r})()]}}),ae=b.blockquote`
    background: transparent;
    border-left: 0;
    padding: 0.5em 10px 3em;
    max-width: 400px;
    margin: 0 auto;
    color: var(--color-heading);

    &:before {
        color: var(--text-primary);
        content: open-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }
    &:after {
        color: transparent;
        content: close-quote;
        font-size: 4em;
        line-height: 0.1em;
        margin-right: 0.25em;
        vertical-align: -0.4em;
    }
    > p {
        display: inline;
        font-style: normal;
    }
    span.author {
        display: block;
        text-align: right;
    }
    @media (max-width: 368px) {
        max-width: 300px;
    }
`,oe=1e3/30,se=2,X=e=>1-(1-e)**3,Z=(e=.9)=>`rgba(${Math.floor(Math.random()*200)+30}, ${Math.floor(Math.random()*200)+30}, ${Math.floor(Math.random()*200)+30}, ${e})`,ce=e=>{let t=A(),n,a=[],o=null,s=1,c=0,l=!0,u=()=>{o&&cancelAnimationFrame(o),o=null};return r(()=>{let r=t(),i=e.width,d=e.height;if(!i||!d||typeof window>`u`)return;let f=n;if(!f||navigator.userAgent.toLowerCase().includes(`jsdom`))return;let p=null;try{p=f.getContext(`2d`)}catch{return}if(!p)return;let m=p;u();let g=Math.min(window.devicePixelRatio||1,se);s=g;let _=i,v=d;f.style.width=`${_}px`,f.style.height=`${v}px`,f.width=Math.max(1,Math.floor(_*g)),f.height=Math.max(1,Math.floor(v*g)),p.setTransform(1,0,0,1,0,0),p.scale(g,g);let y={left:24,right:24,top:12,bottom:12},b=Math.max(4,Math.floor(_/60)),x=Math.max(6,Math.round(_/200)),S=_-y.left-y.right-x*(b-1),C=Math.max(6,Math.floor(S/b)),w=performance.now(),T=Math.max(1,v-y.top-y.bottom);a=Array.from({length:b}).map((e,t)=>{let n=a[t]?.target??Math.random()*T;return{prev:n,target:n,start:w,duration:1200+Math.random()*800,color:Z(.9)}});let E=[],D=Math.max(20,Math.floor(T/6));for(let e=y.top;e<=v-y.bottom;e+=D)E.push(e+.5);let O=b*C+(b-1)*x,k=y.left+Math.max(0,(_-y.left-y.right-O)/2),A=r?void 0:window.setInterval(()=>{let e=performance.now();for(let t=0;t<a.length;t++){let n=a[t],r=Math.max(0,e-n.start),i=Math.min(1,n.duration>0?r/n.duration:1);n.prev+=(n.target-n.prev)*X(i),n.target=Math.random()*T,n.start=e,n.duration=1800+Math.random()*1200,Math.random()>.6&&(n.color=Z(.9))}},3e3),j=()=>{let e=performance.now();if(r||(o=requestAnimationFrame(j)),(r||l&&document.visibilityState!==`hidden`)&&!(!r&&e-c<oe)){c=e,m.setTransform(1,0,0,1,0,0),m.scale(s,s),m.clearRect(0,0,_,v),m.save(),m.globalAlpha=.06,m.strokeStyle=`#000`,m.lineWidth=1;for(let e of E)m.beginPath(),m.moveTo(y.left,e),m.lineTo(_-y.right,e),m.stroke();m.restore();for(let t=0;t<a.length;t++){let n=a[t],r=Math.max(0,e-n.start),i=Math.min(1,n.duration>0?r/n.duration:1),o=n.prev+(n.target-n.prev)*X(i),s=k+t*(C+x),c=v-y.bottom-o;m.fillStyle=n.color,m.fillRect(s,c,C,o);let l=Math.sin(e/800+t)*.5+.5;m.globalAlpha=.15*l,m.fillStyle=`#ffffff`,m.fillRect(s,c,C*.6,Math.max(2,o*.2)),m.globalAlpha=.6*(1-o/T),m.fillStyle=`rgba(255,255,255,0.6)`,m.fillRect(s,c,C,Math.min(6,o)),m.globalAlpha=1}}},M=typeof IntersectionObserver<`u`?new IntersectionObserver(([e])=>{l=e?.isIntersecting??!0}):null;M?.observe(f),r?j():o=requestAnimationFrame(j),h(()=>{M?.disconnect(),u(),clearInterval(A)})}),i(le,{get id(){return e.id??`bar-canvas`},ref(e){var t=n;typeof t==`function`?t(e):n=e},"aria-hidden":`true`})},le=b.canvas`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.18;
    background: transparent;
    width: 100vw;
`,ue=a(`<div class=carousel-inner>`),de=a(`<button type=button>`),fe=a(`<div class=carousel-controls><button type=button>Next quote</button><!$><!/>`),pe=a(`<div>`),me=a=>{let o,[s,c]=e({width:800,height:240}),[l,p]=e(0),[m,y]=e(!1),b=A();return r(()=>{let e=o;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();c({width:typeof window<`u`?Math.round(window.innerWidth)-15:Math.round(t.width)-15,height:Math.round(t.height)})};if(t(),typeof ResizeObserver<`u`){let n=new ResizeObserver(t);n.observe(e),window.addEventListener(`resize`,t),h(()=>{n.disconnect(),window.removeEventListener(`resize`,t)})}else window.addEventListener(`resize`,t),h(()=>window.removeEventListener(`resize`,t))}),r(()=>{if(b()||m()||a.quotes.length<2)return;let e=setInterval(()=>{p(e=>(e+1)%(a.quotes.length||1))},5e3);h(()=>clearInterval(e))}),i(Q,{ref(e){var t=o;typeof t==`function`?t(e):o=e},get children(){return[i(ce,{get width(){return s().width},get height(){return s().height}}),(()=>{var e=n(ue);return _(e,i(d,{get each(){return a.quotes},children:(e,t)=>(()=>{var r=n(pe);return _(r,i(ie,{quote:e})),f(()=>v(r,l()===t()?`slide active`:`slide`)),r})()})),e})(),i(u,{get when(){return a.quotes.length>1},get children(){var e=n(fe),r=e.firstChild,o=r.nextSibling,[s,c]=t(o.nextSibling);return r.$$click=()=>p(e=>(e+1)%a.quotes.length),_(e,i(u,{get when(){return!b()},get children(){var e=n(de);return e.$$click=()=>y(e=>!e),_(e,()=>m()?`Resume quotes`:`Pause quotes`),g(),e}}),s,c),g(),e}})]}})},Q=b.div`
    position: relative;
    overflow: hidden;
    isolation: isolate;
    min-height: 240px;

    .carousel-controls {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding-bottom: 1rem;
    }
    .carousel-controls button {
        font: inherit;
        font-size: 0.875rem;
        color: var(--color-primary);
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid currentColor;
        border-radius: 999px;
        padding: 0.25rem 0.75rem;
        cursor: pointer;
    }
    .carousel-inner {
        position: relative;
        z-index: 1;
        display: grid;
        place-items: center;
        padding: 2rem 0;
    }

    .slide {
        grid-area: 1 / 1;
        width: 100%;
        display: flex;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transition: opacity 0.5s ease;
        background: transparent;
    }

    .slide.active {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    @media (prefers-reduced-motion: reduce) {
        .slide {
            transition: none;
        }
    }

    blockquote {
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        backdrop-filter: blur(4px);
    }
`;l([`click`]);var he=a(`<p>As a dedicated data software consultant specializing in educational institutions, I bring a unique blend of technical expertise and a profound understanding of the needs of schools and educators.`),ge=a(`<p>My role involves crafting innovative solutions that harness the power of data to optimize school operations. From customization options for PowerSchool SIS to full-service data consulting through School Data Solutions, I help institutions make the most of their systems.`),_e=a(`<p>My ability to bridge the gap between technology and education ensures seamless integration of data software, empowering schools to make informed choices for improved student outcomes.`),ve=a(`<p>Extending the capabilities of <b>Office 365</b> and <b>Google Workspaces</b> so that your team makes the most of your systems.`);function ye(){return i(C,{get children(){return[i(w,{title:`jordanrhea.com`,get image(){return x.siteUrl+`/content/img/jordanrhea-header.png`}}),i(P,{}),i(D,{get children(){return[i($,{children:`Connecting data systems in education — building tools that help schools work smarter with the platforms they already use.`}),n(he),n(ge),n(_e),n(ve),i($,{children:`Background in education with a future in development.`})]}}),i(me,{quotes:S}),i(K,{})]}})}var $=b.p`
    font-family: var(--fontFamily-display);
    font-size: var(--fontSize-3);
    font-weight: 500;
    line-height: var(--lineHeight-normal);
    color: var(--color-heading);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--spacing-6);
    margin-bottom: var(--spacing-10);
`;export{ye as default};
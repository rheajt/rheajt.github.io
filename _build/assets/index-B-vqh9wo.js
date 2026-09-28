import{B as e,D as t,E as n,I as r,J as i,K as a,L as o,M as s,P as c,V as l,W as u,Y as d,Z as f,k as p,nt as m,rt as h,w as g}from"./routing-DP3NAu6Z.js";import{a as _,d as v,f as y,n as b,r as x,t as S}from"./seo-CaORYdCz.js";import{t as C}from"./loader-CP2ZUSmg.js";import{t as w}from"./section-BIbz61Lq.js";import{n as T}from"./sanity-CB7HGe10.js";var E=e=>{let t,n=[],r=null,i=null,o=1;return a(()=>{let a=e.width,s=e.height;if(!a||!s)return;let c=t??document.getElementById(`graph-paper`);if(!c)return;t=c;let l=c.getContext(`2d`);if(!l)return;let u=window.devicePixelRatio||1;o=u;let d=a,f=s;c.style.width=`${d}px`,c.style.height=`${f}px`,c.width=Math.max(1,Math.floor(d*u)),c.height=Math.max(1,Math.floor(f*u)),l.setTransform(1,0,0,1,0,0),l.scale(u,u),n=[];let p=e=>Math.max(4,Math.floor(e/80)),h=(e=0)=>{let t=p(d),r=Array.from({length:t}).map((e,n)=>({x:12+n/(t-1)*(d-24),y:f-(Math.random()*(f-24)+12)})),i=Math.floor(Math.random()*256),a=Math.floor(Math.random()*256),o=Math.floor(Math.random()*256),s={points:r,color:`rgba(${i}, ${a}, ${o}, 0.95)`,rgb:{r:i,g:a,b:o},start:performance.now()+e,duration:Math.max(1e3,(r.length-1)*1e3)};return n.push(s),n.length>10&&n.shift(),s};h();let g=()=>{i=window.setTimeout(()=>{h(),g()},6e3)};g();let _=e=>1-(1-e)**3,v=()=>{let e=performance.now();l.setTransform(1,0,0,1,0,0),l.scale(o,o),l.clearRect(0,0,d,f);for(let t of n){let n=t.points,r=e-t.start,i=12+Math.max(0,Math.min(1,r/t.duration))*(d-24);l.beginPath(),l.moveTo(n[0].x,n[0].y);for(let e=1;e<n.length;e++)if(n[e].x<=i)l.lineTo(n[e].x,n[e].y);else{let t=n[e-1].x,r=n[e-1].y,a=n[e].x,o=n[e].y,s=(i-t)/(a-t);l.lineTo(i,r+s*(o-r));break}l.save(),l.strokeStyle=t.color,l.lineWidth=2,l.lineJoin=`round`,l.lineCap=`round`,l.globalAlpha=.95,l.stroke(),l.restore();for(let r=0;r<n.length;r++){let i=n[r],a=(i.x-12)/(d-24),o=e-(t.start+a*t.duration);if(o<0)break;let s=Math.max(0,Math.min(1,o/1e3)),c=3*.8+3.2*_(s),u=.4+.6*Math.abs(Math.sin((e+r*150)/300)),f=Math.max(0,(1-s)*.8+.12*u),p=c*4,{r:m,g:h,b:g}=t.rgb,v=l.createRadialGradient(i.x,i.y,0,i.x,i.y,p);v.addColorStop(0,`rgba(${m}, ${h}, ${g}, ${Math.min(.7,f)})`),v.addColorStop(.6,`rgba(${m}, ${h}, ${g}, ${Math.min(.18,f*.3)})`),v.addColorStop(1,`rgba(${m}, ${h}, ${g}, 0)`),l.save(),l.globalCompositeOperation=`lighter`,l.fillStyle=v,l.beginPath(),l.arc(i.x,i.y,p,0,Math.PI*2),l.fill(),l.restore(),l.beginPath(),l.fillStyle=t.color,l.arc(i.x,i.y,c,0,Math.PI*2),l.fill();let y=.35*(1-s)+.12*Math.abs(Math.sin(e/200+r));y>.02&&(l.beginPath(),l.fillStyle=`rgba(255,255,255,${Math.min(.6,y)})`,l.arc(i.x-c*.3,i.y-c*.3,Math.max(1,c*.4),0,Math.PI*2),l.fill())}}r=requestAnimationFrame(v)};r=requestAnimationFrame(v),m(()=>{i&&=(clearTimeout(i),null),r&&=(cancelAnimationFrame(r),null)})}),u(D,{ref(e){var n=t;typeof n==`function`?n(e):t=e},id:`graph-paper`,get width(){return e.width},get height(){return e.height}})},D=v.canvas`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.25;
    background: transparent;
    width: 100vw;
`,O=r(`<span>`),k=[{name:`Microsoft Office 365`,color:`#01A6F0`},{name:`Google Workspaces`,color:`#EA4335`}],A=()=>{let[e,t]=f(0),[r,a]=f(!0);h(()=>{let e=setInterval(()=>{a(!1),setTimeout(()=>{t(e=>e+1),a(!0)},300)},6e3);m(()=>clearInterval(e))});let o=()=>k[e()%k.length];return u(j,{get children(){var e=n(O);return p(e,()=>o().name),i(t=>{var n=r()?`text-visible`:`text-hidden`,i=o().color;return n!==t.e&&g(e,t.e=n),i!==t.t&&c(e,`color`,t.t=i),t},{e:void 0,t:void 0}),e}})},j=v.span`
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
`,ee=r(`<div class=container><div class=columns><div class=image><img src=/content/img/jordan-rhea-header.png width=250 height=250 alt="jordan rhea header"style=max-width:100%;height:auto></div><div class=caption><h1>I am Jordan Rhea</h1><p class=subtitle>and I build software for</p><!$><!/>`),te=()=>{let e,[r,i]=f({width:800,height:300});return a(()=>{let t=e,n=()=>{if(!t){let e=typeof window<`u`?Math.round(window.innerWidth):800;i({width:e,height:300});return}let e=t.getBoundingClientRect(),n=Math.round(typeof window<`u`?window.innerWidth:e.width);i({width:n,height:Math.round(e.height)})};if(n(),typeof window<`u`){if(typeof ResizeObserver<`u`&&t){let e=new ResizeObserver(n);e.observe(t),window.addEventListener(`resize`,n),m(()=>{e.disconnect(),window.removeEventListener(`resize`,n)})}else window.addEventListener(`resize`,n),m(()=>window.removeEventListener(`resize`,n))}}),u(ne,{get children(){return[u(E,{get width(){return r().width},get height(){return r().height}}),(()=>{var r=n(ee),i=r.firstChild.firstChild;i.firstChild;var a=i.nextSibling,s=a.firstChild.nextSibling.nextSibling,[c,l]=t(s.nextSibling),d=e;return typeof d==`function`?o(d,r):e=r,p(a,u(A,{}),c,l),r})()]}})},ne=v.div`
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
        margin: 0 auto;
        max-width: var(--layout-width);
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
`,M=r(`<h2 class=section-title>Latest Projects`),N=r(`<p style=text-align:center>Loading...`),P=r(`<p style=text-align:center>Projects are temporarily unavailable.`),F=r(`<div class=grid>`),I=r(`<div class=cta>`),L=r(`<div class=card-image><img loading=lazy>`,!0,!1,!1),R=r(`<p>`),z=r(`<div class=card-body><time></time><h3></h3><!$><!/>`),B=r(`<div class="card-image placeholder"><span>`),V=4,H=()=>{let[r]=d(async()=>{try{return{posts:await T(V),error:null}}catch(e){return{posts:[],error:e}}}),a=()=>!!r()?.error,o=()=>(r()?.posts??[]).length>0;return u(W,{get children(){return[n(M),u(l,{get when(){return r.loading},get children(){return n(N)}}),u(l,{get when(){return a()},get children(){return n(P)}}),u(l,{get when(){return o()},get children(){return[(()=>{var a=n(F);return p(a,u(e,{get each(){return r()?.posts},children:e=>u(y,{get href(){return`/projects/${e.slug.current}`},class:`card`,get children(){return[u(l,{get when(){return e.imageUrl},get fallback(){return(()=>{var t=n(B),r=t.firstChild;return p(r,()=>e.title),t})()},get children(){var t=n(L),r=t.firstChild;return i(t=>{var n=e.imageUrl,i=e.imageAlt??e.title;return n!==t.e&&s(r,`src`,t.e=n),i!==t.t&&s(r,`alt`,t.t=i),t},{e:void 0,t:void 0}),t}}),(()=>{var r=n(z),a=r.firstChild,o=a.nextSibling,c=o.nextSibling,[d,f]=t(c.nextSibling);return p(a,()=>U(e.publishedAt)),p(o,()=>e.title),p(r,u(l,{get when(){return e.summary},get children(){var t=n(R);return p(t,()=>e.summary),t}}),d,f),i(()=>s(a,`datetime`,e.publishedAt)),r})()]}})})),a})(),(()=>{var e=n(I);return p(e,u(y,{href:`/projects`,class:`view-all`,children:`View All Projects`})),e})()]}})]}})};function U(e){return new Intl.DateTimeFormat(`en`,{month:`long`,day:`numeric`,year:`numeric`}).format(new Date(e))}var W=v.section`
    max-width: var(--layout-width);
    margin: 0 auto var(--spacing-16, 4rem) auto;
    padding: 0 var(--spacing-4, 1rem);

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
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
`,G=r(`<p>`),K=r(`<span class=author><b></b> <br><!$><!/>`),q=e=>u(re,{get children(){return[(()=>{var t=n(G);return p(t,()=>e.quote.excerpt),t})(),(()=>{var r=n(K),i=r.firstChild,a=i.nextSibling.nextSibling.nextSibling,[o,s]=t(a.nextSibling);return p(i,()=>e.quote.author),p(r,()=>e.quote.position,o,s),r})()]}}),re=v.blockquote`
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
`,J=1e3/30,Y=2,X=e=>1-(1-e)**3,Z=(e=.9)=>`rgba(${Math.floor(Math.random()*200)+30}, ${Math.floor(Math.random()*200)+30}, ${Math.floor(Math.random()*200)+30}, ${e})`,ie=e=>{let t,n=[],r=null,i=1,o=0,s=!0,c=()=>{r&&cancelAnimationFrame(r),r=null};return a(()=>{let a=e.width,l=e.height;if(!a||!l||typeof window>`u`)return;let u=t;if(!u||navigator.userAgent.toLowerCase().includes(`jsdom`))return;let d=null;try{d=u.getContext(`2d`)}catch{return}if(!d)return;let f=d;c();let p=Math.min(window.devicePixelRatio||1,Y);i=p;let h=a,g=l;u.style.width=`${h}px`,u.style.height=`${g}px`,u.width=Math.max(1,Math.floor(h*p)),u.height=Math.max(1,Math.floor(g*p)),d.setTransform(1,0,0,1,0,0),d.scale(p,p);let _={left:24,right:24,top:12,bottom:12},v=Math.max(4,Math.floor(h/60)),y=Math.max(6,Math.round(h/200)),b=h-_.left-_.right-y*(v-1),x=Math.max(6,Math.floor(b/v)),S=performance.now(),C=Math.max(1,g-_.top-_.bottom);n=Array.from({length:v}).map((e,t)=>{let r=n[t]?.target??Math.random()*C;return{prev:r,target:r,start:S,duration:1200+Math.random()*800,color:Z(.9)}});let w=[],T=Math.max(20,Math.floor(C/6));for(let e=_.top;e<=g-_.bottom;e+=T)w.push(e+.5);let E=v*x+(v-1)*y,D=_.left+Math.max(0,(h-_.left-_.right-E)/2),O=window.setInterval(()=>{let e=performance.now();for(let t=0;t<n.length;t++){let r=n[t],i=Math.max(0,e-r.start),a=Math.min(1,r.duration>0?i/r.duration:1);r.prev+=(r.target-r.prev)*X(a),r.target=Math.random()*C,r.start=e,r.duration=1800+Math.random()*1200,Math.random()>.6&&(r.color=Z(.9))}},3e3),k=()=>{let e=performance.now();if(r=requestAnimationFrame(k),s&&document.visibilityState!==`hidden`&&!(e-o<J)){o=e,f.setTransform(1,0,0,1,0,0),f.scale(i,i),f.clearRect(0,0,h,g),f.save(),f.globalAlpha=.06,f.strokeStyle=`#000`,f.lineWidth=1;for(let e of w)f.beginPath(),f.moveTo(_.left,e),f.lineTo(h-_.right,e),f.stroke();f.restore();for(let t=0;t<n.length;t++){let r=n[t],i=Math.max(0,e-r.start),a=Math.min(1,r.duration>0?i/r.duration:1),o=r.prev+(r.target-r.prev)*X(a),s=D+t*(x+y),c=g-_.bottom-o;f.fillStyle=r.color,f.fillRect(s,c,x,o);let l=Math.sin(e/800+t)*.5+.5;f.globalAlpha=.15*l,f.fillStyle=`#ffffff`,f.fillRect(s,c,x*.6,Math.max(2,o*.2)),f.globalAlpha=.6*(1-o/C),f.fillStyle=`rgba(255,255,255,0.6)`,f.fillRect(s,c,x,Math.min(6,o)),f.globalAlpha=1}}},A=typeof IntersectionObserver<`u`?new IntersectionObserver(([e])=>{s=e?.isIntersecting??!0}):null;A?.observe(u),r=requestAnimationFrame(k),m(()=>{A?.disconnect(),c(),clearInterval(O)})}),u(ae,{get id(){return e.id??`bar-canvas`},ref(e){var n=t;typeof n==`function`?n(e):t=e}})},ae=v.canvas`
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
`,oe=r(`<div class=carousel-inner>`),se=r(`<div>`),Q=t=>{let r,[o,s]=f({width:800,height:240}),[c,l]=f(0);return a(()=>{let e=r;if(!e)return;let t=()=>{let t=e.getBoundingClientRect();s({width:typeof window<`u`?Math.round(window.innerWidth)-15:Math.round(t.width)-15,height:Math.round(t.height)})};if(t(),typeof ResizeObserver<`u`){let n=new ResizeObserver(t);n.observe(e),window.addEventListener(`resize`,t),m(()=>{n.disconnect(),window.removeEventListener(`resize`,t)})}else window.addEventListener(`resize`,t),m(()=>window.removeEventListener(`resize`,t))}),h(()=>{let e=setInterval(()=>{l(e=>(e+1)%(t.quotes.length||1))},5e3);m(()=>clearInterval(e))}),u(ce,{ref(e){var t=r;typeof t==`function`?t(e):r=e},get children(){return[u(ie,{get width(){return o().width},get height(){return o().height}}),(()=>{var r=n(oe);return p(r,u(e,{get each(){return t.quotes},children:(e,t)=>(()=>{var r=n(se);return p(r,u(q,{quote:e})),i(()=>g(r,c()===t()?`slide active`:`slide`)),r})()})),r})()]}})},ce=v.div`
    position: relative;
    overflow: hidden;
    isolation: isolate;
    min-height: 240px;

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

    blockquote {
        background: rgba(255, 255, 255, 0.72);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 1rem;
        box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        backdrop-filter: blur(4px);
    }
`,le=r(`<p>As a dedicated data software consultant specializing in educational institutions, I bring a unique blend of technical expertise and a profound understanding of the needs of schools and educators.`),ue=r(`<p>My role involves crafting innovative solutions that harness the power of data to optimize school operations. From customization options for PowerSchool SIS to full-service data consulting through School Data Solutions, I help institutions make the most of their systems.`),de=r(`<p>My ability to bridge the gap between technology and education ensures seamless integration of data software, empowering schools to make informed choices for improved student outcomes.`),fe=r(`<p>Extending the capabilities of <b>Office 365</b> and <b>Google Workspaces</b> so that your team makes the most of your systems.`);function pe(){return u(x,{get children(){return[u(S,{title:`jordanrhea.com`,get image(){return b.siteUrl+`/content/img/jordanrhea-header.png`}}),u(C,{}),u(te,{}),u(w,{get children(){return[u($,{children:`Connecting data systems in education — building tools that help schools work smarter with the platforms they already use.`}),n(le),n(ue),n(de),n(fe),u($,{children:`Background in education with a future in development.`})]}}),u(Q,{quotes:_}),u(H,{})]}})}var $=v.p`
    font-family: var(--fontFamily-display);
    font-size: var(--fontSize-3);
    font-weight: 500;
    line-height: var(--lineHeight-normal);
    color: var(--color-heading);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--spacing-6);
    margin-bottom: var(--spacing-10);
`;export{pe as default};
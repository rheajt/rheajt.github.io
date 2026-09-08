import{I as Y,l as E,e as c,k as U,O as it,x as p,B as _,J,P as st,L as ct,C as u,N as Z,Q as dt,U as ht,S as V,V as lt,H as K}from"./routing-CLiSUilp.js";import{s as L,A as et,S as mt,c as gt,q as ft,L as pt}from"./seo-oT5MijD8.js";import{L as ut}from"./loader-lQY2ImHl.js";import{S as vt}from"./section-DFmlLx1C.js";import{f as bt}from"./sanity-C_0eWEZ_.js";import"./preload-helper-ug3pwPZ1.js";const xt=i=>{let d,h=[],n=null,a=null,o=1;return Y(()=>{const e=i.width,r=i.height;if(!e||!r)return;const s=d??document.getElementById("graph-paper");if(!s)return;d=s;const t=s.getContext("2d");if(!t)return;const b=window.devicePixelRatio||1;o=b;const v=e,l=r;s.style.width=`${v}px`,s.style.height=`${l}px`,s.width=Math.max(1,Math.floor(v*b)),s.height=Math.max(1,Math.floor(l*b)),t.setTransform(1,0,0,1,0,0),t.scale(b,b),h=[];const S=12,R=k=>Math.max(4,Math.floor(k/80)),I=(k=0)=>{const x=R(v),y=Array.from({length:x}).map((O,W)=>{const F=S+W/(x-1)*(v-S*2),C=l-(Math.random()*(l-S*2)+S);return{x:F,y:C}}),P=Math.floor(Math.random()*256),j=Math.floor(Math.random()*256),T=Math.floor(Math.random()*256),g=`rgba(${P}, ${j}, ${T}, 0.95)`,f={points:y,color:g,rgb:{r:P,g:j,b:T},start:performance.now()+k,duration:Math.max(1e3,(y.length-1)*1e3)};return h.push(f),h.length>10&&h.shift(),f};I();const M=()=>{a=window.setTimeout(()=>{I(),M()},6e3)};M();const q=k=>1-Math.pow(1-k,3),H=()=>{const k=performance.now();t.setTransform(1,0,0,1,0,0),t.scale(o,o),t.clearRect(0,0,v,l);for(const x of h){const y=x.points,P=k-x.start,j=Math.max(0,Math.min(1,P/x.duration)),T=S+j*(v-S*2);t.beginPath(),t.moveTo(y[0].x,y[0].y);for(let g=1;g<y.length;g++)if(y[g].x<=T)t.lineTo(y[g].x,y[g].y);else{const f=y[g-1].x,O=y[g-1].y,W=y[g].x,F=y[g].y,C=(T-f)/(W-f);t.lineTo(T,O+C*(F-O));break}t.save(),t.strokeStyle=x.color,t.lineWidth=2,t.lineJoin="round",t.lineCap="round",t.globalAlpha=.95,t.stroke(),t.restore();for(let g=0;g<y.length;g++){const f=y[g],O=(f.x-S)/(v-S*2),W=x.start+O*x.duration,F=k-W;if(F<0)break;const C=Math.max(0,Math.min(1,F/1e3)),w=.8,$=3*w,m=7*w,z=$+(m-$)*q(C),N=.4+.6*Math.abs(Math.sin((k+g*150)/300)),A=Math.max(0,(1-C)*.8+.12*N),D=z*4,{r:B,g:G,b:Q}=x.rgb,X=t.createRadialGradient(f.x,f.y,0,f.x,f.y,D);X.addColorStop(0,`rgba(${B}, ${G}, ${Q}, ${Math.min(.7,A)})`),X.addColorStop(.6,`rgba(${B}, ${G}, ${Q}, ${Math.min(.18,A*.3)})`),X.addColorStop(1,`rgba(${B}, ${G}, ${Q}, 0)`),t.save(),t.globalCompositeOperation="lighter",t.fillStyle=X,t.beginPath(),t.arc(f.x,f.y,D,0,Math.PI*2),t.fill(),t.restore(),t.beginPath(),t.fillStyle=x.color,t.arc(f.x,f.y,z,0,Math.PI*2),t.fill();const tt=.35*(1-C)+.12*Math.abs(Math.sin(k/200+g));tt>.02&&(t.beginPath(),t.fillStyle=`rgba(255,255,255,${Math.min(.6,tt)})`,t.arc(f.x-z*.3,f.y-z*.3,Math.max(1,z*.4),0,Math.PI*2),t.fill())}}n=requestAnimationFrame(H)};n=requestAnimationFrame(H),E(()=>{a&&(clearTimeout(a),a=null),n&&(cancelAnimationFrame(n),n=null)})}),c(yt,{ref(e){var r=d;typeof r=="function"?r(e):d=e},id:"graph-paper",get width(){return i.width},get height(){return i.height}})},yt=L.canvas`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.25;
    background: transparent;
    width: 100vw;
`;var wt=u("<span>");const rt=[{name:"Microsoft Office 365",color:"#01A6F0"},{name:"Google Workspaces",color:"#EA4335"}],$t=()=>{const[i,d]=U(0),[h,n]=U(!0);it(()=>{const o=setInterval(()=>{n(!1),setTimeout(()=>{d(e=>e+1),n(!0)},300)},6e3);E(()=>clearInterval(o))});const a=()=>rt[i()%rt.length];return c(Mt,{get children(){var o=p(wt);return _(o,()=>a().name),J(e=>{var r=h()?"text-visible":"text-hidden",s=a().color;return r!==e.e&&st(o,e.e=r),s!==e.t&&ct(o,"color",e.t=s),e},{e:void 0,t:void 0}),o}})},Mt=L.span`
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
`;var St=u('<div class=container><div class=columns><div class=image><img src=/content/img/jordan-rhea-header.png width=250 height=250 alt="jordan rhea header"style=max-width:100%;height:auto></div><div class=caption><h1>I am Jordan Rhea</h1><p class=subtitle>and I build software for</p><!$><!/>');const _t=()=>{let i;const[d,h]=U({width:800,height:300});return Y(()=>{const n=i,a=()=>{if(!n){const r=typeof window<"u"?Math.round(window.innerWidth):800;h({width:r,height:300});return}const o=n.getBoundingClientRect(),e=Math.round(typeof window<"u"?window.innerWidth:o.width);h({width:e,height:Math.round(o.height)})};if(a(),typeof window<"u")if(typeof ResizeObserver<"u"&&n){const o=new ResizeObserver(a);o.observe(n),window.addEventListener("resize",a),E(()=>{o.disconnect(),window.removeEventListener("resize",a)})}else window.addEventListener("resize",a),E(()=>window.removeEventListener("resize",a))}),c(kt,{get children(){return[c(xt,{get width(){return d().width},get height(){return d().height}}),(()=>{var n=p(St),a=n.firstChild,o=a.firstChild;o.firstChild;var e=o.nextSibling,r=e.firstChild,s=r.nextSibling,t=s.nextSibling,[b,v]=Z(t.nextSibling),l=i;return typeof l=="function"?dt(l,n):i=n,_(e,c($t,{}),b,v),n})()]}})},kt=L.div`
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
`;var zt=u("<h2 class=section-title>Latest Projects"),Rt=u("<p style=text-align:center>Loading..."),Ct=u("<p style=text-align:center>Projects are temporarily unavailable."),At=u("<div class=grid>"),It=u("<div class=cta>"),Pt=u("<div class=card-image><img loading=lazy>",!0,!1,!1),Ft=u("<p>"),Tt=u("<div class=card-body><time></time><h3></h3><!$><!/>"),Et=u('<div class="card-image placeholder"><span>');const Lt=4,qt=()=>{const[i]=ht(async()=>{try{return{posts:await bt(Lt),error:null}}catch(n){return{posts:[],error:n}}}),d=()=>!!i()?.error,h=()=>(i()?.posts??[]).length>0;return c(Ot,{get children(){return[p(zt),c(V,{get when(){return i.loading},get children(){return p(Rt)}}),c(V,{get when(){return d()},get children(){return p(Ct)}}),c(V,{get when(){return h()},get children(){return[(()=>{var n=p(At);return _(n,c(lt,{get each(){return i()?.posts},children:a=>c(et,{get href(){return`/projects/${a.slug.current}`},class:"card",get children(){return[c(V,{get when(){return a.imageUrl},get fallback(){return(()=>{var o=p(Et),e=o.firstChild;return _(e,()=>a.title),o})()},get children(){var o=p(Pt),e=o.firstChild;return J(r=>{var s=a.imageUrl,t=a.imageAlt??a.title;return s!==r.e&&K(e,"src",r.e=s),t!==r.t&&K(e,"alt",r.t=t),r},{e:void 0,t:void 0}),o}}),(()=>{var o=p(Tt),e=o.firstChild,r=e.nextSibling,s=r.nextSibling,[t,b]=Z(s.nextSibling);return _(e,()=>jt(a.publishedAt)),_(r,()=>a.title),_(o,c(V,{get when(){return a.summary},get children(){var v=p(Ft);return _(v,()=>a.summary),v}}),t,b),J(()=>K(e,"datetime",a.publishedAt)),o})()]}})})),n})(),(()=>{var n=p(It);return _(n,c(et,{href:"/projects",class:"view-all",children:"View All Projects"})),n})()]}})]}})};function jt(i){return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(new Date(i))}const Ot=L.section`
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
`;var Wt=u("<p>"),Bt=u("<span class=author><b></b> <br><!$><!/>");const Ht=i=>c(Dt,{get children(){return[(()=>{var d=p(Wt);return _(d,()=>i.quote.excerpt),d})(),(()=>{var d=p(Bt),h=d.firstChild,n=h.nextSibling,a=n.nextSibling,o=a.nextSibling,[e,r]=Z(o.nextSibling);return _(h,()=>i.quote.author),_(d,()=>i.quote.position,e,r),d})()]}}),Dt=L.blockquote`
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
`,Nt=30,Gt=1e3/Nt,Vt=2,nt=i=>1-Math.pow(1-i,3),at=(i=.9)=>{const d=Math.floor(Math.random()*200)+30,h=Math.floor(Math.random()*200)+30,n=Math.floor(Math.random()*200)+30;return`rgba(${d}, ${h}, ${n}, ${i})`},Ut=i=>{let d,h=[],n=null,a=1,o=0,e=!0;const r=()=>{n&&cancelAnimationFrame(n),n=null};return Y(()=>{const s=i.width,t=i.height;if(!s||!t||typeof window>"u")return;const b=d;if(!b||navigator.userAgent.toLowerCase().includes("jsdom"))return;let v=null;try{v=b.getContext("2d")}catch{return}if(!v)return;const l=v;r();const S=Math.min(window.devicePixelRatio||1,Vt);a=S;const R=s,I=t;b.style.width=`${R}px`,b.style.height=`${I}px`,b.width=Math.max(1,Math.floor(R*S)),b.height=Math.max(1,Math.floor(I*S)),v.setTransform(1,0,0,1,0,0),v.scale(S,S);const M={left:24,right:24,top:12,bottom:12},q=Math.max(4,Math.floor(R/60)),H=Math.max(6,Math.round(R/200)),k=R-M.left-M.right-H*(q-1),x=Math.max(6,Math.floor(k/q)),y=performance.now(),P=Math.max(1,I-M.top-M.bottom);h=Array.from({length:q}).map((w,$)=>{const z=h[$]?.target??Math.random()*P;return{prev:z,target:z,start:y,duration:1200+Math.random()*800,color:at(.9)}});const j=[],T=Math.max(20,Math.floor(P/6));for(let w=M.top;w<=I-M.bottom;w+=T)j.push(w+.5);const g=q*x+(q-1)*H,f=M.left+Math.max(0,(R-M.left-M.right-g)/2),O=()=>{const w=performance.now();for(let $=0;$<h.length;$++){const m=h[$],z=Math.max(0,w-m.start),N=Math.min(1,m.duration>0?z/m.duration:1),A=m.prev+(m.target-m.prev)*nt(N);m.prev=A,m.target=Math.random()*P,m.start=w,m.duration=1800+Math.random()*1200,Math.random()>.6&&(m.color=at(.9))}},W=window.setInterval(O,3e3),F=()=>{const w=performance.now();if(n=requestAnimationFrame(F),!(!e||document.visibilityState==="hidden")&&!(w-o<Gt)){o=w,l.setTransform(1,0,0,1,0,0),l.scale(a,a),l.clearRect(0,0,R,I),l.save(),l.globalAlpha=.06,l.strokeStyle="#000",l.lineWidth=1;for(const $ of j)l.beginPath(),l.moveTo(M.left,$),l.lineTo(R-M.right,$),l.stroke();l.restore();for(let $=0;$<h.length;$++){const m=h[$],z=Math.max(0,w-m.start),N=Math.min(1,m.duration>0?z/m.duration:1),A=m.prev+(m.target-m.prev)*nt(N),D=f+$*(x+H),B=I-M.bottom-A;l.fillStyle=m.color,l.fillRect(D,B,x,A);const G=Math.sin(w/800+$)*.5+.5;l.globalAlpha=.15*G,l.fillStyle="#ffffff",l.fillRect(D,B,x*.6,Math.max(2,A*.2)),l.globalAlpha=.6*(1-A/P),l.fillStyle="rgba(255,255,255,0.6)",l.fillRect(D,B,x,Math.min(6,A)),l.globalAlpha=1}}},C=typeof IntersectionObserver<"u"?new IntersectionObserver(([w])=>{e=w?.isIntersecting??!0}):null;C?.observe(b),n=requestAnimationFrame(F),E(()=>{C?.disconnect(),r(),clearInterval(W)})}),c(Xt,{get id(){return i.id??"bar-canvas"},ref(s){var t=d;typeof t=="function"?t(s):d=s}})},Xt=L.canvas`
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
`;var Jt=u("<div class=carousel-inner>"),Yt=u("<div>");const Qt=i=>{let d;const[h,n]=U({width:800,height:240}),[a,o]=U(0);return Y(()=>{const e=d;if(!e)return;const r=()=>{const s=e.getBoundingClientRect();n({width:typeof window<"u"?Math.round(window.innerWidth)-15:Math.round(s.width)-15,height:Math.round(s.height)})};if(r(),typeof ResizeObserver<"u"){const s=new ResizeObserver(r);s.observe(e),window.addEventListener("resize",r),E(()=>{s.disconnect(),window.removeEventListener("resize",r)})}else window.addEventListener("resize",r),E(()=>window.removeEventListener("resize",r))}),it(()=>{const e=setInterval(()=>{o(r=>(r+1)%(i.quotes.length||1))},5e3);E(()=>clearInterval(e))}),c(Kt,{ref(e){var r=d;typeof r=="function"?r(e):d=e},get children(){return[c(Ut,{get width(){return h().width},get height(){return h().height}}),(()=>{var e=p(Jt);return _(e,c(lt,{get each(){return i.quotes},children:(r,s)=>(()=>{var t=p(Yt);return _(t,c(Ht,{quote:r})),J(()=>st(t,a()===s()?"slide active":"slide")),t})()})),e})()]}})},Kt=L.div`
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
`;var Zt=u("<p>As a dedicated data software consultant specializing in educational institutions, I bring a unique blend of technical expertise and a profound understanding of the needs of schools and educators."),te=u("<p>My role involves crafting innovative solutions that harness the power of data to optimize school operations. From customization options for PowerSchool SIS to full-service data consulting through School Data Solutions, I help institutions make the most of their systems."),ee=u("<p>My ability to bridge the gap between technology and education ensures seamless integration of data software, empowering schools to make informed choices for improved student outcomes."),re=u("<p>Extending the capabilities of <b>Office 365</b> and <b>Google Workspaces</b> so that your team makes the most of your systems.");function ce(){return c(pt,{get children(){return[c(mt,{title:"jordanrhea.com",get image(){return gt.siteUrl+"/content/img/jordanrhea-header.png"}}),c(ut,{}),c(_t,{}),c(vt,{get children(){return[c(ot,{children:"Connecting data systems in education — building tools that help schools work smarter with the platforms they already use."}),p(Zt),p(te),p(ee),p(re),c(ot,{children:"Background in education with a future in development."})]}}),c(Qt,{quotes:ft}),c(qt,{})]}})}const ot=L.p`
    font-family: var(--fontFamily-display);
    font-size: var(--fontSize-3);
    font-weight: 500;
    line-height: var(--lineHeight-normal);
    color: var(--color-heading);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--spacing-6);
    margin-bottom: var(--spacing-10);
`;export{ce as default};

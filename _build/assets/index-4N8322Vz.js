import{I as Q,l as q,e as d,k as U,O as ot,x as v,B as z,J,P as it,L as lt,C as b,N as Y,Q as ct,U as dt,S as V,V as st,H as Z}from"./routing-BQzf89fU.js";import{s as j,A as ht,S as mt,d as gt,a as ft,q as pt,L as ut}from"./section-ChQ-PyK9.js";import{f as vt,L as bt}from"./sanity-RriOvLF3.js";import"./preload-helper-ug3pwPZ1.js";const xt=o=>{let l,h=[],e=null,n=null,s=1;return Q(()=>{const r=o.width,a=o.height;if(!r||!a)return;const c=l??document.getElementById("graph-paper");if(!c)return;l=c;const t=c.getContext("2d");if(!t)return;const f=window.devicePixelRatio||1;s=f;const x=r,i=a;c.style.width=`${x}px`,c.style.height=`${i}px`,c.width=Math.max(1,Math.floor(x*f)),c.height=Math.max(1,Math.floor(i*f)),t.setTransform(1,0,0,1,0,0),t.scale(f,f),h=[];const S=12,R=k=>Math.max(4,Math.floor(k/80)),y=(k=0)=>{const w=R(x),$=Array.from({length:w}).map((W,B)=>{const E=S+B/(w-1)*(x-S*2),I=i-(Math.random()*(i-S*2)+S);return{x:E,y:I}}),T=Math.floor(Math.random()*256),O=Math.floor(Math.random()*256),L=Math.floor(Math.random()*256),p=`rgba(${T}, ${O}, ${L}, 0.95)`,u={points:$,color:p,rgb:{r:T,g:O,b:L},start:performance.now()+k,duration:Math.max(1e3,($.length-1)*1e3)};return h.push(u),h.length>10&&h.shift(),u};y();const g=()=>{n=window.setTimeout(()=>{y(),g()},6e3)};g();const C=k=>1-Math.pow(1-k,3),F=()=>{const k=performance.now();t.setTransform(1,0,0,1,0,0),t.scale(s,s),t.clearRect(0,0,x,i);for(const w of h){const $=w.points,T=k-w.start,O=Math.max(0,Math.min(1,T/w.duration)),L=S+O*(x-S*2);t.beginPath(),t.moveTo($[0].x,$[0].y);for(let p=1;p<$.length;p++)if($[p].x<=L)t.lineTo($[p].x,$[p].y);else{const u=$[p-1].x,W=$[p-1].y,B=$[p].x,E=$[p].y,I=(L-u)/(B-u);t.lineTo(L,W+I*(E-W));break}t.save(),t.strokeStyle=w.color,t.lineWidth=2,t.lineJoin="round",t.lineCap="round",t.globalAlpha=.95,t.stroke(),t.restore();for(let p=0;p<$.length;p++){const u=$[p],W=(u.x-S)/(x-S*2),B=w.start+W*w.duration,E=k-B;if(E<0)break;const I=Math.max(0,Math.min(1,E/1e3)),M=.8,_=3*M,m=7*M,A=_+(m-_)*C(I),N=.4+.6*Math.abs(Math.sin((k+p*150)/300)),P=Math.max(0,(1-I)*.8+.12*N),D=A*4,{r:H,g:G,b:K}=w.rgb,X=t.createRadialGradient(u.x,u.y,0,u.x,u.y,D);X.addColorStop(0,`rgba(${H}, ${G}, ${K}, ${Math.min(.7,P)})`),X.addColorStop(.6,`rgba(${H}, ${G}, ${K}, ${Math.min(.18,P*.3)})`),X.addColorStop(1,`rgba(${H}, ${G}, ${K}, 0)`),t.save(),t.globalCompositeOperation="lighter",t.fillStyle=X,t.beginPath(),t.arc(u.x,u.y,D,0,Math.PI*2),t.fill(),t.restore(),t.beginPath(),t.fillStyle=w.color,t.arc(u.x,u.y,A,0,Math.PI*2),t.fill();const tt=.35*(1-I)+.12*Math.abs(Math.sin(k/200+p));tt>.02&&(t.beginPath(),t.fillStyle=`rgba(255,255,255,${Math.min(.6,tt)})`,t.arc(u.x-A*.3,u.y-A*.3,Math.max(1,A*.4),0,Math.PI*2),t.fill())}}e=requestAnimationFrame(F)};e=requestAnimationFrame(F),q(()=>{n&&(clearTimeout(n),n=null),e&&(cancelAnimationFrame(e),e=null)})}),d(yt,{ref(r){var a=l;typeof a=="function"?a(r):l=r},id:"graph-paper",get width(){return o.width},get height(){return o.height}})},yt=j.canvas`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
    pointer-events: none;
    opacity: 0.25;
    background: transparent;
    width: 100vw;
`;var wt=b("<span>");const et=[{name:"Microsoft Office 365",color:"#01A6F0"},{name:"Google Workspaces",color:"#EA4335"}],$t=()=>{const[o,l]=U(0),[h,e]=U(!0);ot(()=>{const s=setInterval(()=>{e(!1),setTimeout(()=>{l(r=>r+1),e(!0)},300)},6e3);q(()=>clearInterval(s))});const n=()=>et[o()%et.length];return d(Mt,{get children(){var s=v(wt);return z(s,()=>n().name),J(r=>{var a=h()?"text-visible":"text-hidden",c=n().color;return a!==r.e&&it(s,r.e=a),c!==r.t&&lt(s,"color",r.t=c),r},{e:void 0,t:void 0}),s}})},Mt=j.span`
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
`;var _t=b('<div class=container><div class=columns><div class=image><img src=/content/img/jordan-rhea-header.png width=250 height=250 alt="jordan rhea header"style=max-width:100%;height:auto></div><div class=caption><h1>I am Jordan Rhea</h1><p class=subtitle>and I build software for</p><!$><!/>');const St=()=>{let o;const[l,h]=U({width:800,height:300});return Q(()=>{const e=o,n=()=>{if(!e){const a=typeof window<"u"?Math.round(window.innerWidth):800;h({width:a,height:300});return}const s=e.getBoundingClientRect(),r=Math.round(typeof window<"u"?window.innerWidth:s.width);h({width:r,height:Math.round(s.height)})};if(n(),typeof window<"u")if(typeof ResizeObserver<"u"&&e){const s=new ResizeObserver(n);s.observe(e),window.addEventListener("resize",n),q(()=>{s.disconnect(),window.removeEventListener("resize",n)})}else window.addEventListener("resize",n),q(()=>window.removeEventListener("resize",n))}),d(kt,{get children(){return[d(xt,{get width(){return l().width},get height(){return l().height}}),(()=>{var e=v(_t),n=e.firstChild,s=n.firstChild;s.firstChild;var r=s.nextSibling,a=r.firstChild,c=a.nextSibling,t=c.nextSibling,[f,x]=Y(t.nextSibling),i=o;return typeof i=="function"?ct(i,e):o=e,z(r,d($t,{}),f,x),e})()]}})},kt=j.div`
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
`;var zt=b("<h2 class=section-title>Latest Projects"),Ct=b("<p style=text-align:center>Loading..."),Rt=b("<p style=text-align:center>Projects are temporarily unavailable."),At=b("<div class=grid>"),It=b("<div class=cta>"),Pt=b("<div class=card-image><img loading=lazy>",!0,!1,!1),Ft=b("<p>"),Tt=b("<div class=card><!$><!/><div class=card-body><time></time><h3></h3><!$><!/>"),Et=b('<div class="card-image placeholder"><span>');const Lt=4,qt=()=>{const[o]=dt(async()=>{try{return{posts:await vt(Lt),error:null}}catch(e){return{posts:[],error:e}}}),l=()=>!!o()?.error,h=()=>(o()?.posts??[]).length>0;return d(Ot,{get children(){return[v(zt),d(V,{get when(){return o.loading},get children(){return v(Ct)}}),d(V,{get when(){return l()},get children(){return v(Rt)}}),d(V,{get when(){return h()},get children(){return[(()=>{var e=v(At);return z(e,d(st,{get each(){return o()?.posts},children:n=>(()=>{var s=v(Tt),r=s.firstChild,[a,c]=Y(r.nextSibling),t=a.nextSibling,f=t.firstChild,x=f.nextSibling,i=x.nextSibling,[S,R]=Y(i.nextSibling);return z(s,d(V,{get when(){return n.imageUrl},get fallback(){return(()=>{var y=v(Et),g=y.firstChild;return z(g,()=>n.title),y})()},get children(){var y=v(Pt),g=y.firstChild;return J(C=>{var F=n.imageUrl,k=n.imageAlt??n.title;return F!==C.e&&Z(g,"src",C.e=F),k!==C.t&&Z(g,"alt",C.t=k),C},{e:void 0,t:void 0}),y}}),a,c),z(f,()=>jt(n.publishedAt)),z(x,()=>n.title),z(t,d(V,{get when(){return n.summary},get children(){var y=v(Ft);return z(y,()=>n.summary),y}}),S,R),J(()=>Z(f,"datetime",n.publishedAt)),s})()})),e})(),(()=>{var e=v(It);return z(e,d(ht,{href:"/projects",class:"view-all",children:"View All Projects"})),e})()]}})]}})};function jt(o){return new Intl.DateTimeFormat("en",{month:"long",day:"numeric",year:"numeric"}).format(new Date(o))}const Ot=j.section`
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
`;var Wt=b("<p>"),Bt=b("<span class=author><b></b> <br><!$><!/>");const Ht=o=>d(Dt,{get children(){return[(()=>{var l=v(Wt);return z(l,()=>o.quote.excerpt),l})(),(()=>{var l=v(Bt),h=l.firstChild,e=h.nextSibling,n=e.nextSibling,s=n.nextSibling,[r,a]=Y(s.nextSibling);return z(h,()=>o.quote.author),z(l,()=>o.quote.position,r,a),l})()]}}),Dt=j.blockquote`
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
`,Nt=30,Gt=1e3/Nt,Vt=2,rt=o=>1-Math.pow(1-o,3),nt=(o=.9)=>{const l=Math.floor(Math.random()*200)+30,h=Math.floor(Math.random()*200)+30,e=Math.floor(Math.random()*200)+30;return`rgba(${l}, ${h}, ${e}, ${o})`},Ut=o=>{let l,h=[],e=null,n=1,s=0,r=!0;const a=()=>{e&&cancelAnimationFrame(e),e=null};return Q(()=>{const c=o.width,t=o.height;if(!c||!t||typeof window>"u")return;const f=l;if(!f||navigator.userAgent.toLowerCase().includes("jsdom"))return;let x=null;try{x=f.getContext("2d")}catch{return}if(!x)return;const i=x;a();const S=Math.min(window.devicePixelRatio||1,Vt);n=S;const R=c,y=t;f.style.width=`${R}px`,f.style.height=`${y}px`,f.width=Math.max(1,Math.floor(R*S)),f.height=Math.max(1,Math.floor(y*S)),x.setTransform(1,0,0,1,0,0),x.scale(S,S);const g={left:24,right:24,top:12,bottom:12},C=Math.max(4,Math.floor(R/60)),F=Math.max(6,Math.round(R/200)),k=R-g.left-g.right-F*(C-1),w=Math.max(6,Math.floor(k/C)),$=performance.now(),T=Math.max(1,y-g.top-g.bottom);h=Array.from({length:C}).map((M,_)=>{const A=h[_]?.target??Math.random()*T;return{prev:A,target:A,start:$,duration:1200+Math.random()*800,color:nt(.9)}});const O=[],L=Math.max(20,Math.floor(T/6));for(let M=g.top;M<=y-g.bottom;M+=L)O.push(M+.5);const p=C*w+(C-1)*F,u=g.left+Math.max(0,(R-g.left-g.right-p)/2),W=()=>{const M=performance.now();for(let _=0;_<h.length;_++){const m=h[_],A=Math.max(0,M-m.start),N=Math.min(1,m.duration>0?A/m.duration:1),P=m.prev+(m.target-m.prev)*rt(N);m.prev=P,m.target=Math.random()*T,m.start=M,m.duration=1800+Math.random()*1200,Math.random()>.6&&(m.color=nt(.9))}},B=window.setInterval(W,3e3),E=()=>{const M=performance.now();if(e=requestAnimationFrame(E),!(!r||document.visibilityState==="hidden")&&!(M-s<Gt)){s=M,i.setTransform(1,0,0,1,0,0),i.scale(n,n),i.clearRect(0,0,R,y),i.save(),i.globalAlpha=.06,i.strokeStyle="#000",i.lineWidth=1;for(const _ of O)i.beginPath(),i.moveTo(g.left,_),i.lineTo(R-g.right,_),i.stroke();i.restore();for(let _=0;_<h.length;_++){const m=h[_],A=Math.max(0,M-m.start),N=Math.min(1,m.duration>0?A/m.duration:1),P=m.prev+(m.target-m.prev)*rt(N),D=u+_*(w+F),H=y-g.bottom-P;i.fillStyle=m.color,i.fillRect(D,H,w,P);const G=Math.sin(M/800+_)*.5+.5;i.globalAlpha=.15*G,i.fillStyle="#ffffff",i.fillRect(D,H,w*.6,Math.max(2,P*.2)),i.globalAlpha=.6*(1-P/T),i.fillStyle="rgba(255,255,255,0.6)",i.fillRect(D,H,w,Math.min(6,P)),i.globalAlpha=1}}},I=typeof IntersectionObserver<"u"?new IntersectionObserver(([M])=>{r=M?.isIntersecting??!0}):null;I?.observe(f),e=requestAnimationFrame(E),q(()=>{I?.disconnect(),a(),clearInterval(B)})}),d(Xt,{get id(){return o.id??"bar-canvas"},ref(c){var t=l;typeof t=="function"?t(c):l=c}})},Xt=j.canvas`
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
`;var Jt=b("<div class=carousel-inner>"),Yt=b("<div>");const Qt=o=>{let l;const[h,e]=U({width:800,height:240}),[n,s]=U(0);return Q(()=>{const r=l;if(!r)return;const a=()=>{const c=r.getBoundingClientRect();e({width:typeof window<"u"?Math.round(window.innerWidth)-15:Math.round(c.width)-15,height:Math.round(c.height)})};if(a(),typeof ResizeObserver<"u"){const c=new ResizeObserver(a);c.observe(r),window.addEventListener("resize",a),q(()=>{c.disconnect(),window.removeEventListener("resize",a)})}else window.addEventListener("resize",a),q(()=>window.removeEventListener("resize",a))}),ot(()=>{const r=setInterval(()=>{s(a=>(a+1)%(o.quotes.length||1))},5e3);q(()=>clearInterval(r))}),d(Kt,{ref(r){var a=l;typeof a=="function"?a(r):l=r},get children(){return[d(Ut,{get width(){return h().width},get height(){return h().height}}),(()=>{var r=v(Jt);return z(r,d(st,{get each(){return o.quotes},children:(a,c)=>(()=>{var t=v(Yt);return z(t,d(Ht,{quote:a})),J(()=>it(t,n()===c()?"slide active":"slide")),t})()})),r})()]}})},Kt=j.div`
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
`;var Zt=b("<p>As a dedicated data software consultant specializing in educational institutions, I bring a unique blend of technical expertise and a profound understanding of the needs of schools and educators."),te=b("<p>My role involves crafting innovative solutions that harness the power of data to optimize school operations. From customization options for PowerSchool SIS to full-service data consulting through School Data Solutions, I help institutions make the most of their systems."),ee=b("<p>My ability to bridge the gap between technology and education ensures seamless integration of data software, empowering schools to make informed choices for improved student outcomes."),re=b("<p>Extending the capabilities of <b>Office 365</b> and <b>Google Workspaces</b> so that your team makes the most of your systems.");function se(){return d(ut,{get children(){return[d(mt,{title:"jordanrhea.com",get image(){return gt.siteUrl+"/content/img/jordanrhea-header.png"}}),d(bt,{}),d(St,{}),d(ft,{get children(){return[d(at,{children:"Connecting data systems in education — building tools that help schools work smarter with the platforms they already use."}),v(Zt),v(te),v(ee),v(re),d(at,{children:"Background in education with a future in development."})]}}),d(Qt,{quotes:pt}),d(qt,{})]}})}const at=j.p`
    font-family: var(--fontFamily-display);
    font-size: var(--fontSize-3);
    font-weight: 500;
    line-height: var(--lineHeight-normal);
    color: var(--color-heading);
    border-left: 3px solid var(--color-primary);
    padding-left: var(--spacing-6);
    margin-bottom: var(--spacing-10);
`;export{se as default};

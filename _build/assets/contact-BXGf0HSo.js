import{s as b,F as M,a as T,b as D,S as G,L as Y}from"./seo-Cu1eZUpG.js";import{S as O}from"./section-4fqYtlCS.js";import{p as R,k as v,I as z,e as t,S as I,x as a,B as d,J as c,K as h,A as C,H as L,L as J,N,C as i,O as F}from"./routing-CLiSUilp.js";const K=b.div`
    margin: 0 auto;
    max-width: var(--layout-width);
    padding: var(--spacing-12) var(--spacing-4);

    @media (max-width: 768px) {
        padding: var(--spacing-8) var(--spacing-4);
    }
`;var U=i("<i>Lets talk more about "),V=i("<b>"),W=i("<label for=your_name>Name"),q=i("<input type=text name=your_name placeholder=Name>"),X=i("<label for=your_email>Email"),Z=i("<input type=email name=your_email placeholder=Email>"),Q=i("<label for=message>Send me a message! I love meeting new people and talking about data systems."),ee=i("<textarea name=message rows=7>"),te=i('<div style="width:100%;border:1px solid lightgray"><div style=background-color:var(--color-primary);height:10px>'),ne=i("<input type=checkbox id=isNewsletter name=isNewsletter>"),ae=i("<label for=isNewsletter>Newsletter?"),ie=i("<input type=checkbox id=isAnonymous name=isAnonymous>"),re=i("<label for=isAnonymous>Stay anonymous?"),oe=i('<div class="actions full-width"><button type=submit>Send</button><div class=checkbox-group><!$><!/><!$><!/>'),le=i("<div style=display:grid;place-items:center;width:100%;height:200px><b>Sent!");const se={your_name:"",your_email:"",service:"",topic:"",message:"",isAnonymous:!0,isNewsletter:!0},ce=l=>{const[s,g]=v(!0),[x,$]=v(!1),[y,f]=v(0),[r,_]=v({...se,...l.data});z(()=>{const e=r(),n=e.message.split(" ").length,o=e.message.length,p=Math.min(100,Math.max(0,(o/100*100+n/50*100)/2));f(p),p===100&&e.your_name.length!==0&&e.your_email.length!==0?g(!1):g(!0)});async function w(e){e.preventDefault();const o="https://script.google.com/macros/s/AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg/exec";try{(await(await fetch(o,{redirect:"follow",method:"post",headers:{"content-type":"text/plain"},body:JSON.stringify(r())})).json()).status==="done"&&$(!0)}catch(p){console.log(p)}}function m(e,n){_(o=>({...o,[e]:n}))}return t(I,{get when(){return!x()},get fallback(){return a(le)},get children(){return[t(I,{get when(){return r().topic},get children(){return[a(U),(()=>{var e=a(V);return d(e,()=>r().topic.split(" ").map(n=>`#${n}`).join(", ")),e})()]}}),t(de,{onSubmit:w,get children(){return[t(j,{get children(){return[a(W),(()=>{var e=a(q);return e.$$input=n=>m("your_name",n.currentTarget.value),c(()=>h(e,"value",r().your_name)),C(),e})()]}}),t(j,{get children(){return[a(X),(()=>{var e=a(Z);return e.$$input=n=>m("your_email",n.currentTarget.value),c(()=>h(e,"value",r().your_email)),C(),e})()]}}),t(j,{class:"full-width",get children(){return[a(Q),(()=>{var e=a(ee);return e.$$input=n=>m("message",n.currentTarget.value),c(()=>L(e,"placeholder",r().message)),c(()=>h(e,"value",r().message)),C(),e})(),(()=>{var e=a(te),n=e.firstChild;return c(o=>J(n,"width",`${y()>1?y():0}%`)),e})()]}}),(()=>{var e=a(oe),n=e.firstChild,o=n.nextSibling,p=o.firstChild,[S,A]=N(p.nextSibling),P=S.nextSibling,[B,H]=N(P.nextSibling);return d(o,t(E,{get children(){return[(()=>{var u=a(ne);return u.addEventListener("change",k=>m("isNewsletter",k.currentTarget.checked)),c(()=>h(u,"checked",r().isNewsletter)),u})(),a(ae)]}}),S,A),d(o,t(E,{get children(){return[(()=>{var u=a(ie);return u.addEventListener("change",k=>m("isAnonymous",k.currentTarget.checked)),c(()=>h(u,"checked",r().isAnonymous)),u})(),a(re)]}}),B,H),c(()=>h(n,"disabled",s())),e})()]}})]}})},E=b.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    input[type="checkbox"] {
        width: 16px;
        height: 16px;
        margin: 0;
        accent-color: var(--color-primary);
    }
    label {
        display: inline-block;
        padding-left: 0.25rem;
        margin: 0;
        cursor: pointer;
    }
`,j=b.div`
    &.full-width {
        grid-column: 1 / -1;
    }
    label {
        display: block;
    }
    input,
    select,
    textarea {
        padding: 8px;
        width: 100%;
        border-radius: 3px;
        border: 1px solid lightgray;
        &:focus {
            outline: none;
            border: 1px solid var(--color-primary);
        }
    }
`,de=b.form`
    display: grid;
    margin-top: 1em;
    margin-bottom: 1em;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    button {
        padding: 0.5rem 1rem;
        border-radius: 3px;
        border: 1px solid lightgray;
        font-weight: 700;
        cursor: pointer;
        transition:
            transform 120ms ease,
            box-shadow 120ms ease;
        &[type="submit"] {
            background-color: var(--color-primary);
            color: white;
            box-shadow: 0 6px 18px rgba(40, 53, 151, 0.12);
        }
        &:disabled {
            background-color: #ddd;
            color: #777;
            cursor: not-allowed;
            opacity: 0.7;
            box-shadow: none;
            transform: none;
        }
    }
    .actions {
        grid-column: 1 / -1;
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
    .actions > div:first-of-type {
        margin-left: auto;
        display: inline-flex;
        gap: 0.75rem;
        align-items: center;
    }
    @media (max-width: 600px) {
        .actions {
            flex-direction: column;
            align-items: stretch;
        }
        .actions > div:first-of-type {
            margin-left: 0;
            justify-content: flex-start;
        }
        button[type="submit"] {
            width: 100%;
        }
    }
`;R(["input"]);var me=i('<a class=github-button href=https://github.com/rheajt data-color-scheme="no-preference: light; light: light; dark: dark;"data-size=large data-show-count=true aria-label="Follow @rheajt on GitHub">Follow @rheajt');const pe=()=>(F(()=>{const l=document.createElement("script");l.src="https://buttons.github.io/buttons.js",l.async=!0,l.defer=!0,document.head.appendChild(l)}),a(me));var ue=i("<div class=g-ytsubscribe data-layout=default data-count=default>");const he=l=>(F(()=>{const s=document.createElement("script");s.src="https://apis.google.com/js/platform.js",s.async=!0,document.head.appendChild(s)}),(()=>{var s=a(ue);return c(()=>L(s,"data-channelid",l.channelId)),s})());var ge=i("<h3>Social Links"),be=i("<div class=contact-icons><a class=icon-container href=https://youtube.com/jordanrhea data-label=YouTube><div class=icon><span class=label></span></div><p class=description>I turned my learning into a channel that some people have found useful. Come and join!</p><div></div></a><a class=icon-container href=https://github.com/rheajt data-label=GitHub><div class=icon><span class=label></span></div><p class=description>Github is where I share the code</p><div></div></a><a class=icon-container href=https://linkedin.com/in/rheajt data-label=LinkedIn><div class=icon><span class=label></span></div><p class=description>More information about what I do is on LinkedIn");const ye=()=>t(fe,{get children(){return[a(ge),(()=>{var l=a(be),s=l.firstChild,g=s.firstChild,x=g.firstChild,$=g.nextSibling,y=$.nextSibling,f=s.nextSibling,r=f.firstChild,_=r.firstChild,w=r.nextSibling,m=w.nextSibling,e=f.nextSibling,n=e.firstChild,o=n.firstChild;return d(x,t(M,{})),d(y,t(he,{channelId:"UCwqNP1r17-2xJFweoACbW8g"})),d(_,t(T,{})),d(m,t(pe,{})),d(o,t(D,{})),l})()]}}),fe=b.div`
    margin: 0 auto;
    max-width: var(--layout-width);
    padding: 3em 0.25em;
    a {
        color: var(--color-text);
        text-decoration: none;
    }
    @media (max-width: 768px) {
        padding: 2em 0.25em;
    }
    .contact-icons {
        margin-top: 1em;
        margin-bottom: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 1em;
        justify-content: space-between;
        justify-items: center;
    }
    .icon-container {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        max-width: 320px;
        padding: 1em;
        transition: all 300ms;
        text-align: center;
        position: relative;
        &::after {
            content: attr(data-label);
            font-weight: 700;
            visibility: hidden;
            display: block;
            height: 0;
            overflow: hidden;
            pointer-events: none;
        }
        .icon {
            text-align: center;
            font-size: 3em;
        }
        .label {
            font-weight: 400;
            transition: font-weight 0.05s linear;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        &:hover .label {
            font-weight: 700;
        }
        .description {
            flex: 1;
        }
        &:hover {
            background-color: white;
            border: 1px solid lightgray;
        }
    }
`;function _e(){return t(Y,{get children(){return[t(G,{title:"Contact"}),t(O,{get children(){return[t(K,{get children(){return t(ce,{})}}),t(ye,{})]}})]}})}export{_e as default};

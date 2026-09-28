import{D as e,E as t,I as n,J as r,K as i,M as a,N as o,P as s,T as c,V as l,W as u,Z as d,j as f,k as p,rt as m}from"./routing-DP3NAu6Z.js";import{c as h,d as g,l as _,r as v,s as y,t as b}from"./seo-CaORYdCz.js";import{t as x}from"./section-BIbz61Lq.js";var S=g.div`
    margin: 0 auto;
    max-width: var(--layout-width);
    padding: var(--spacing-12) var(--spacing-4);

    @media (max-width: 768px) {
        padding: var(--spacing-8) var(--spacing-4);
    }
`,C=n(`<i>Lets talk more about `),w=n(`<b>`),T=n(`<label for=your_name>Name`),E=n(`<input type=text name=your_name placeholder=Name>`),D=n(`<label for=your_email>Email`),O=n(`<input type=email name=your_email placeholder=Email>`),k=n(`<label for=message>Send me a message! I love meeting new people and talking about data systems.`),A=n(`<textarea name=message rows=7>`),j=n(`<div style="width:100%;border:1px solid lightgray"><div style=background-color:var(--color-primary);height:10px>`),M=n(`<input type=checkbox id=isNewsletter name=isNewsletter>`),N=n(`<label for=isNewsletter>Newsletter?`),P=n(`<input type=checkbox id=isAnonymous name=isAnonymous>`),F=n(`<label for=isAnonymous>Stay anonymous?`),I=n(`<div class="actions full-width"><button type=submit>Send</button><div class=checkbox-group><!$><!/><!$><!/>`),L=n(`<div style=display:grid;place-items:center;width:100%;height:200px><b>Sent!`),R={your_name:``,your_email:``,service:``,topic:``,message:``,isAnonymous:!0,isNewsletter:!0},z=n=>{let[c,m]=d(!0),[h,g]=d(!1),[_,v]=d(0),[y,b]=d({...R,...n.data});i(()=>{let e=y(),t=e.message.split(` `).length,n=e.message.length,r=Math.min(100,Math.max(0,(n/100*100+t/50*100)/2));v(r),r===100&&e.your_name.length!==0&&e.your_email.length!==0?m(!1):m(!0)});async function x(e){e.preventDefault();try{(await(await fetch(`https://script.google.com/macros/s/AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg/exec`,{redirect:`follow`,method:`post`,headers:{"content-type":`text/plain`},body:JSON.stringify(y())})).json()).status===`done`&&g(!0)}catch(e){console.log(e)}}function S(e,t){b(n=>({...n,[e]:t}))}return u(l,{get when(){return!h()},get fallback(){return t(L)},get children(){return[u(l,{get when(){return y().topic},get children(){return[t(C),(()=>{var e=t(w);return p(e,()=>y().topic.split(` `).map(e=>`#${e}`).join(`, `)),e})()]}}),u(H,{onSubmit:x,get children(){return[u(V,{get children(){return[t(T),(()=>{var e=t(E);return e.$$input=e=>S(`your_name`,e.currentTarget.value),r(()=>o(e,`value`,y().your_name)),f(),e})()]}}),u(V,{get children(){return[t(D),(()=>{var e=t(O);return e.$$input=e=>S(`your_email`,e.currentTarget.value),r(()=>o(e,`value`,y().your_email)),f(),e})()]}}),u(V,{class:`full-width`,get children(){return[t(k),(()=>{var e=t(A);return e.$$input=e=>S(`message`,e.currentTarget.value),r(()=>a(e,`placeholder`,y().message)),r(()=>o(e,`value`,y().message)),f(),e})(),(()=>{var e=t(j),n=e.firstChild;return r(e=>s(n,`width`,`${_()>1?_():0}%`)),e})()]}}),(()=>{var n=t(I),i=n.firstChild,a=i.nextSibling,s=a.firstChild,[l,d]=e(s.nextSibling),f=l.nextSibling,[m,h]=e(f.nextSibling);return p(a,u(B,{get children(){return[(()=>{var e=t(M);return e.addEventListener(`change`,e=>S(`isNewsletter`,e.currentTarget.checked)),r(()=>o(e,`checked`,y().isNewsletter)),e})(),t(N)]}}),l,d),p(a,u(B,{get children(){return[(()=>{var e=t(P);return e.addEventListener(`change`,e=>S(`isAnonymous`,e.currentTarget.checked)),r(()=>o(e,`checked`,y().isAnonymous)),e})(),t(F)]}}),m,h),r(()=>o(i,`disabled`,c())),n})()]}})]}})},B=g.div`
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
`,V=g.div`
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
`,H=g.form`
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
`;c([`input`]);var U=n(`<a class=github-button href=https://github.com/rheajt data-color-scheme="no-preference: light; light: light; dark: dark;"data-size=large data-show-count=true aria-label="Follow @rheajt on GitHub">Follow @rheajt`),W=()=>(m(()=>{let e=document.createElement(`script`);e.src=`https://buttons.github.io/buttons.js`,e.async=!0,e.defer=!0,document.head.appendChild(e)}),t(U)),G=n(`<div class=g-ytsubscribe data-layout=default data-count=default>`),K=e=>(m(()=>{let e=document.createElement(`script`);e.src=`https://apis.google.com/js/platform.js`,e.async=!0,document.head.appendChild(e)}),(()=>{var n=t(G);return r(()=>a(n,`data-channelid`,e.channelId)),n})()),q=n(`<h3>Social Links`),J=n(`<div class=contact-icons><a class=icon-container href=https://youtube.com/jordanrhea data-label=YouTube><div class=icon><span class=label></span></div><p class=description>I turned my learning into a channel that some people have found useful. Come and join!</p><div></div></a><a class=icon-container href=https://github.com/rheajt data-label=GitHub><div class=icon><span class=label></span></div><p class=description>Github is where I share the code</p><div></div></a><a class=icon-container href=https://linkedin.com/in/rheajt data-label=LinkedIn><div class=icon><span class=label></span></div><p class=description>More information about what I do is on LinkedIn`),Y=()=>u(X,{get children(){return[t(q),(()=>{var e=t(J),n=e.firstChild,r=n.firstChild,i=r.firstChild,a=r.nextSibling.nextSibling,o=n.nextSibling,s=o.firstChild,c=s.firstChild,l=s.nextSibling.nextSibling,d=o.nextSibling.firstChild.firstChild;return p(i,u(_,{})),p(a,u(K,{channelId:`UCwqNP1r17-2xJFweoACbW8g`})),p(c,u(y,{})),p(l,u(W,{})),p(d,u(h,{})),e})()]}}),X=g.div`
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
`;function Z(){return u(v,{get children(){return[u(b,{title:`Contact`}),u(x,{get children(){return[u(S,{get children(){return u(z,{})}}),u(Y,{})]}})]}})}export{Z as default};
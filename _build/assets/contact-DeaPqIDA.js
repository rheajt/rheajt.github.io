import{$ as e,D as t,E as n,J as r,K as i,L as a,M as o,N as s,P as c,T as l,U as u,X as d,at as f,it as p,j as m,k as h}from"./routing-1Zagr2Ci.js";import{c as g,l as _,r as v,t as y}from"./seo-BWNfLqpV.js";import{t as b}from"./section-CtxWtUEy.js";import{n as x,r as S,t as C}from"./fa-DS4io27x.js";var w=_.div`
    ${g}
    padding-block: var(--spacing-12);

    @media (max-width: 768px) {
        padding-block: var(--spacing-8);
    }
`,T=a(`<i>Lets talk more about `),E=a(`<b>`),D=a(`<label for=your_name>Name`),O=a(`<input type=text id=your_name required autocomplete=name name=your_name placeholder=Name>`),k=a(`<label for=your_email>Email`),A=a(`<input type=email id=your_email required autocomplete=email name=your_email placeholder=Email>`),j=a(`<label for=message>Send me a message! I love meeting new people and talking about data systems.`),M=a(`<textarea id=message required name=message rows=7>`),N=a(`<div role=progressbar aria-label="Message detail"aria-valuemin=0 aria-valuemax=100 style="width:100%;border:1px solid lightgray"><div style=background-color:var(--color-primary);height:10px>`),P=a(`<input type=checkbox id=isNewsletter name=isNewsletter>`),F=a(`<label for=isNewsletter>Newsletter?`),I=a(`<input type=checkbox id=isAnonymous name=isAnonymous>`),L=a(`<label for=isAnonymous>Stay anonymous?`),R=a(`<div class="actions full-width"><button type=submit></button><div class=checkbox-group><!$><!/><!$><!/>`),z=a(`<p class=full-width role=alert>`),B=a(`<div role=status style=display:grid;place-items:center;width:100%;height:200px><b>Sent!`),V={your_name:``,your_email:``,service:``,topic:``,message:``,isAnonymous:!0,isNewsletter:!0},H=a=>{let[l,f]=e(!0),[g,_]=e(!1),[v,y]=e(!1),[b,x]=e(``),S;p(()=>S?.abort());let[C,w]=e(0),[H,K]=e({...V,...a.data});r(()=>{let e=H(),t=e.message.trim(),n=t?t.split(/\s+/).length:0,r=t.length,i=Math.min(100,Math.max(0,(r/100*100+n/50*100)/2));w(i),i===100&&e.your_name.trim().length!==0&&e.your_email.trim().length!==0?f(!1):f(!0)});async function q(e){e.preventDefault();let t=e.currentTarget;if(!(l()||v()||!t.reportValidity())){y(!0),x(``),S=new AbortController;try{let e=await fetch(`https://script.google.com/macros/s/AKfycbyhUP2UI4NOia08Ey5yykiLYERXLRyHF_fBZVBiH9rKYeWDLOmy4AdRtmPuMzS7Dsg/exec`,{signal:S.signal,redirect:`follow`,method:`post`,headers:{"content-type":`text/plain`},body:JSON.stringify(H())});if(!e.ok)throw Error(`Unable to send message`);if((await e.json()).status!==`done`)throw Error(`Message not accepted`);_(!0)}catch{S.signal.aborted||x(`Your message could not be sent. Please try again.`)}finally{y(!1)}}}function J(e,t){K(n=>({...n,[e]:t}))}return i(u,{get when(){return!g()},get fallback(){return n(B)},get children(){return[i(u,{get when(){return H().topic},get children(){return[n(T),(()=>{var e=n(E);return h(e,()=>H().topic.split(` `).map(e=>`#${e}`).join(`, `)),e})()]}}),i(G,{onSubmit:q,get"aria-busy"(){return v()},get children(){return[i(W,{get children(){return[n(D),(()=>{var e=n(O);return e.$$input=e=>J(`your_name`,e.currentTarget.value),d(()=>s(e,`value`,H().your_name)),m(),e})()]}}),i(W,{get children(){return[n(k),(()=>{var e=n(A);return e.$$input=e=>J(`your_email`,e.currentTarget.value),d(()=>s(e,`value`,H().your_email)),m(),e})()]}}),i(W,{class:`full-width`,get children(){return[n(j),(()=>{var e=n(M);return e.$$input=e=>J(`message`,e.currentTarget.value),d(()=>o(e,`placeholder`,H().message)),d(()=>s(e,`value`,H().message)),m(),e})(),(()=>{var e=n(N),t=e.firstChild;return d(n=>{var r=Math.round(C()),i=`${C()>1?C():0}%`;return r!==n.e&&o(e,`aria-valuenow`,n.e=r),i!==n.t&&c(t,`width`,n.t=i),n},{e:void 0,t:void 0}),e})()]}}),(()=>{var e=n(R),r=e.firstChild,a=r.nextSibling,o=a.firstChild,[c,u]=t(o.nextSibling),f=c.nextSibling,[p,m]=t(f.nextSibling);return h(r,()=>v()?`Sending…`:`Send`),h(a,i(U,{get children(){return[(()=>{var e=n(P);return e.addEventListener(`change`,e=>J(`isNewsletter`,e.currentTarget.checked)),d(()=>s(e,`checked`,H().isNewsletter)),e})(),n(F)]}}),c,u),h(a,i(U,{get children(){return[(()=>{var e=n(I);return e.addEventListener(`change`,e=>J(`isAnonymous`,e.currentTarget.checked)),d(()=>s(e,`checked`,H().isAnonymous)),e})(),n(L)]}}),p,m),d(()=>s(r,`disabled`,l()||v())),e})(),i(u,{get when(){return b()},get children(){var e=n(z);return h(e,b),e}})]}})]}})},U=_.div`
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
`,W=_.div`
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
`,G=_.form`
    display: grid;
    margin-top: 1em;
    margin-bottom: 1em;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
    > .full-width {
        grid-column: 1 / -1;
    }
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
`;l([`input`]);var K=a(`<a class=github-button href=https://github.com/rheajt data-color-scheme="no-preference: light; light: light; dark: dark;"data-size=large data-show-count=true aria-label="Follow @rheajt on GitHub">Follow @rheajt`),q=()=>(f(()=>{let e=document.createElement(`script`);e.src=`https://buttons.github.io/buttons.js`,e.async=!0,e.defer=!0,document.head.appendChild(e),p(()=>e.remove())}),n(K)),J=a(`<div class=g-ytsubscribe data-layout=default data-count=default>`),Y=e=>(f(()=>{let e=document.createElement(`script`);e.src=`https://apis.google.com/js/platform.js`,e.async=!0,document.head.appendChild(e),p(()=>e.remove())}),(()=>{var t=n(J);return d(()=>o(t,`data-channelid`,e.channelId)),t})()),X=a(`<h3>Social Links`),Z=a(`<div class=contact-icons><div class=icon-container data-label=YouTube><a class=profile-link href=https://youtube.com/jordanrhea aria-label="Jordan Rhea on YouTube"><div class=icon><span class=label></span></div><p class=description>I turned my learning into a channel that some people have found useful. Come and join!</p></a><div></div></div><div class=icon-container data-label=GitHub><a class=profile-link href=https://github.com/rheajt aria-label="Jordan Rhea on GitHub"><div class=icon><span class=label></span></div><p class=description>Github is where I share the code</p></a><div></div></div><a class=icon-container href=https://linkedin.com/in/rheajt data-label=LinkedIn><div class=icon><span class=label></span></div><p class=description>More information about what I do is on LinkedIn`),Q=()=>i($,{get children(){return[n(X),(()=>{var e=n(Z),t=e.firstChild,r=t.firstChild,a=r.firstChild.firstChild,o=r.nextSibling,s=t.nextSibling,c=s.firstChild,l=c.firstChild.firstChild,u=c.nextSibling,d=s.nextSibling.firstChild.firstChild;return h(a,i(S,{})),h(o,i(Y,{channelId:`UCwqNP1r17-2xJFweoACbW8g`})),h(l,i(C,{})),h(u,i(q,{})),h(d,i(x,{})),e})()]}}),$=_.div`
    margin: 0 auto;
    padding-block: 3em;
    a {
        color: var(--color-text);
        text-decoration: none;
    }
    @media (max-width: 768px) {
        padding-block: 2em;
    }
    .contact-icons {
        margin-top: 1em;
        margin-bottom: 1em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
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
    .profile-link {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
`;function ee(){return i(v,{get children(){return[i(y,{title:`Contact`}),i(b,{get children(){return[i(w,{style:{"padding-inline":`0`},get children(){return i(H,{})}}),i(Q,{})]}})]}})}export{ee as default};
import{B as e,D as t,E as n,I as r,J as i,N as a,P as o,T as s,V as c,W as l,Z as u,j as d,k as f}from"./routing-DP3NAu6Z.js";import{d as p,r as m,t as h}from"./seo-CaORYdCz.js";import{t as g}from"./section-BIbz61Lq.js";var _=r(`<button>Add Seat`),v=r(`<div class=seat><input type=text placeholder=Name><input type=number placeholder=In><input type=number placeholder=Out><label><input type=checkbox> Hero`),y=t=>l(b,{get children(){return[l(e,{get each(){return t.seats},children:(e,r)=>(()=>{var o=n(v),s=o.firstChild,c=s.nextSibling,l=c.nextSibling,u=l.nextSibling.firstChild;return s.$$input=e=>t.handleUpdateSeat(r(),{name:e.currentTarget.value}),c.$$input=e=>t.handleUpdateSeat(r(),{in:Number(e.currentTarget.value)}),l.$$input=e=>t.handleUpdateSeat(r(),{out:Number(e.currentTarget.value)}),u.addEventListener(`change`,e=>t.handleUpdateSeat(r(),{hero:e.currentTarget.checked})),i(()=>a(s,`value`,e.name)),i(()=>a(c,`value`,e.in??0)),i(()=>a(l,`value`,e.out??0)),i(()=>a(u,`checked`,e.hero)),d(),o})()}),(()=>{var e=n(_);return e.$$click=()=>t.handleAddSeat(),d(),e})()]}}),b=p.div`
    .seat {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        align-items: center;
    }
    input[type="text"],
    input[type="number"] {
        padding: 4px 8px;
        border: 1px solid lightgray;
        border-radius: 3px;
    }
    button {
        padding: 0.5rem 1rem;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 0.5rem;
    }
`;s([`click`,`input`]);var x=r(`<button>`),S=r(`<table><thead><tr><th>Player</th><th>Profit/Loss</th></tr></thead><tbody>`),C=r(`<tr><td></td><td><!$><!/><!$><!/>`),w=r=>{let[a,s]=u(!1),p=()=>r.seats.map(e=>({name:e.name||`Unknown`,profit:(e.out??0)-(e.in??0)}));return l(T,{get children(){return[(()=>{var e=n(x);return e.$$click=()=>s(!a()),f(e,()=>a()?`Hide Results`:`Show Results`),d(),e})(),l(c,{get when(){return a()},get children(){var r=n(S),a=r.firstChild.nextSibling;return f(a,l(e,{get each(){return p()},children:e=>(()=>{var r=n(C),a=r.firstChild,s=a.nextSibling,c=s.firstChild,[l,u]=t(c.nextSibling),d=l.nextSibling,[p,m]=t(d.nextSibling);return f(a,()=>e.name),f(s,()=>e.profit>=0?`+`:``,l,u),f(s,()=>e.profit,p,m),i(t=>o(s,`color`,e.profit>=0?`green`:`red`)),r})()})),r}})]}})},T=p.div`
    margin-top: 1rem;
    button {
        padding: 0.5rem 1rem;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    table {
        width: 100%;
        margin-top: 1rem;
        border-collapse: collapse;
    }
    th,
    td {
        padding: 0.5rem;
        border-bottom: 1px solid lightgray;
        text-align: left;
    }
`;s([`click`]);var E=r(`<h1>Poker Tracker`),D={name:``,hero:!1,in:0};function O(){let[e,t]=u([{...D}]);function r(e,n){t(t=>{let r=[...t];return r[e]={...r[e],...n},r})}function i(){t(e=>[...e,{...D}])}return l(m,{get children(){return[l(h,{title:`Poker`}),l(g,{get children(){return[n(E),l(y,{get seats(){return e()},handleUpdateSeat:r,handleAddSeat:i}),l(w,{get seats(){return e()}})]}})]}})}export{O as default};
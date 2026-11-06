import{$ as e,D as t,E as n,H as r,K as i,L as a,M as o,N as s,P as c,T as l,U as u,V as d,X as f,j as p,k as m}from"./routing-1Zagr2Ci.js";import{r as h,t as g,u as _}from"./seo-DvJ6QEDt.js";import{t as v}from"./section-CtxWtUEy.js";var y=a(`<button>Add Seat`),b=a(`<div class=seat><input type=text placeholder=Name><input type=number placeholder=In><input type=number placeholder=Out><label><input type=checkbox> Hero`),x=e=>i(S,{get children(){return[i(r,{get each(){return e.seats},children:(t,r)=>(()=>{var i=n(b),a=i.firstChild,c=a.nextSibling,l=c.nextSibling,u=l.nextSibling.firstChild;return a.$$input=t=>e.handleUpdateSeat(r,{name:t.currentTarget.value}),o(a,`aria-label`,`Player ${r+1} name`),c.$$input=t=>e.handleUpdateSeat(r,{in:Number(t.currentTarget.value)}),o(c,`aria-label`,`Player ${r+1} buy-in`),l.$$input=t=>e.handleUpdateSeat(r,{out:Number(t.currentTarget.value)}),o(l,`aria-label`,`Player ${r+1} cash-out`),u.addEventListener(`change`,t=>e.handleUpdateSeat(r,{hero:t.currentTarget.checked})),o(u,`aria-label`,`Player ${r+1} hero`),f(()=>s(a,`value`,t().name)),f(()=>s(c,`value`,t().in??0)),f(()=>s(l,`value`,t().out??0)),f(()=>s(u,`checked`,t().hero)),p(),i})()}),(()=>{var t=n(y);return t.$$click=()=>e.handleAddSeat(),p(),t})()]}}),S=_.div`
    .seat {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        align-items: center;
    }
    input[type="text"],
    input[type="number"] {
        min-width: 0;
        width: 100%;
        flex: 1 1 8rem;
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
`;l([`click`,`input`]);var C=a(`<button>`),w=a(`<table><thead><tr><th>Player</th><th>Profit/Loss</th></tr></thead><tbody>`),T=a(`<tr><td></td><td><!$><!/><!$><!/>`),E=r=>{let[a,o]=e(!1),s=()=>r.seats.map(e=>({name:e.name||`Unknown`,profit:(e.out??0)-(e.in??0)}));return i(D,{get children(){return[(()=>{var e=n(C);return e.$$click=()=>o(!a()),m(e,()=>a()?`Hide Results`:`Show Results`),p(),e})(),i(u,{get when(){return a()},get children(){var e=n(w),r=e.firstChild.nextSibling;return m(r,i(d,{get each(){return s()},children:e=>(()=>{var r=n(T),i=r.firstChild,a=i.nextSibling,o=a.firstChild,[s,l]=t(o.nextSibling),u=s.nextSibling,[d,p]=t(u.nextSibling);return m(i,()=>e.name),m(a,()=>e.profit>=0?`+`:``,s,l),m(a,()=>e.profit,d,p),f(t=>c(a,`color`,e.profit>=0?`green`:`red`)),r})()})),e}})]}})},D=_.div`
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
`;l([`click`]);var O=a(`<h1>Poker Tracker`),k={name:``,hero:!1,in:0};function A(){let[t,r]=e([{...k}]);function a(e,t){r(n=>{let r=[...n];return r[e]={...r[e],...t},r})}function o(){r(e=>[...e,{...k}])}return i(h,{get children(){return[i(g,{title:`Poker`}),i(v,{get children(){return[n(O),i(x,{get seats(){return t()},handleUpdateSeat:a,handleAddSeat:o}),i(E,{get seats(){return t()}})]}})]}})}export{A as default};
import{p as v,e as l,V as x,x as u,J as m,K as $,A as b,C as c,k as y,B as h,S as E,N as _,L}from"./routing-CLiSUilp.js";import{s as k,S as R,L as T}from"./seo-Cu1eZUpG.js";import{S as A}from"./section-4fqYtlCS.js";var F=c("<button>Add Seat"),H=c("<div class=seat><input type=text placeholder=Name><input type=number placeholder=In><input type=number placeholder=Out><label><input type=checkbox> Hero");const B=r=>l(I,{get children(){return[l(x,{get each(){return r.seats},children:(t,o)=>(()=>{var s=u(H),e=s.firstChild,i=e.nextSibling,d=i.nextSibling,n=d.nextSibling,p=n.firstChild;return e.$$input=a=>r.handleUpdateSeat(o(),{name:a.currentTarget.value}),i.$$input=a=>r.handleUpdateSeat(o(),{in:Number(a.currentTarget.value)}),d.$$input=a=>r.handleUpdateSeat(o(),{out:Number(a.currentTarget.value)}),p.addEventListener("change",a=>r.handleUpdateSeat(o(),{hero:a.currentTarget.checked})),m(()=>$(e,"value",t.name)),m(()=>$(i,"value",t.in??0)),m(()=>$(d,"value",t.out??0)),m(()=>$(p,"checked",t.hero)),b(),s})()}),(()=>{var t=u(F);return t.$$click=()=>r.handleAddSeat(),b(),t})()]}}),I=k.div`
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
`;v(["click","input"]);var J=c("<button>"),K=c("<table><thead><tr><th>Player</th><th>Profit/Loss</th></tr></thead><tbody>"),M=c("<tr><td></td><td><!$><!/><!$><!/>");const O=r=>{const[t,o]=y(!1),s=()=>r.seats.map(e=>({name:e.name||"Unknown",profit:(e.out??0)-(e.in??0)}));return l(V,{get children(){return[(()=>{var e=u(J);return e.$$click=()=>o(!t()),h(e,()=>t()?"Hide Results":"Show Results"),b(),e})(),l(E,{get when(){return t()},get children(){var e=u(K),i=e.firstChild,d=i.nextSibling;return h(d,l(x,{get each(){return s()},children:n=>(()=>{var p=u(M),a=p.firstChild,g=a.nextSibling,P=g.firstChild,[S,w]=_(P.nextSibling),C=S.nextSibling,[N,U]=_(C.nextSibling);return h(a,()=>n.name),h(g,()=>n.profit>=0?"+":"",S,w),h(g,()=>n.profit,N,U),m(q=>L(g,"color",n.profit>=0?"green":"red")),p})()})),e}})]}})},V=k.div`
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
`;v(["click"]);var j=c("<h1>Poker Tracker");const f={name:"",hero:!1,in:0};function Q(){const[r,t]=y([{...f}]);function o(e,i){t(d=>{const n=[...d];return n[e]={...n[e],...i},n})}function s(){t(e=>[...e,{...f}])}return l(T,{get children(){return[l(R,{title:"Poker"}),l(A,{get children(){return[u(j),l(B,{get seats(){return r()},handleUpdateSeat:o,handleAddSeat:s}),l(O,{get seats(){return r()}})]}})]}})}export{Q as default};

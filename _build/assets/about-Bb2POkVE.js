import{A as e,E as t,K as n,L as r,M as i}from"./routing-1Zagr2Ci.js";import{r as a,t as o,u as s}from"./seo-DvJ6QEDt.js";import{t as c}from"./section-CtxWtUEy.js";var l={theme:`dark-v10`,lat:37.5628,lng:-77.4469,zoom:11.64};function u(e=l){let t=e.token??void 0;if(t)return[`https://api.mapbox.com/styles/v1/mapbox/`,e.theme,`/static/${e.lng},${e.lat},${e.zoom},0/`,`500x400?access_token=${t}`].join(``)}var d=r(`<h1>About Page`),f=r(`<p>I am a solutions developer working with both Google Workspaces and Microsoft 365. I like building tools to make our digital work lives easier.`),p=r(`<h3>Working smarter, not harder!`),m=r(`<p>I have lived all over the world in different roles. I was a United States Marine in Okinawa, Japan. I taught middle school English in Richmond, VA. I became a self-taught computer programmer in Izmir, Turkey. Now I am doing development work in Beijing, China.`),h=r(`<p>I write code using JavaScript, Typescript, and Google Apps Script. I have built SPFx webparts in Microsoft Sharepoint and written many automations in Google Workspaces. The idea of automating the boring parts of the day is incredible.`),g=r(`<img alt=map>`);function _(){let r=u();return n(a,{get children(){return[n(o,{title:`About`}),n(c,{get children(){return[t(d),t(f),t(p),t(m),e(()=>r&&n(v,{get children(){var e=t(g);return i(e,`src`,r),e}})),t(h)]}})]}})}var v=s.figure`
    margin: 1.5rem 0;
    width: 100%;
    max-width: var(--layout-width);
    margin-left: auto;
    margin-right: auto;
    display: block;
    img {
        width: 100%;
        max-width: 100%;
        height: auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;export{_ as default};
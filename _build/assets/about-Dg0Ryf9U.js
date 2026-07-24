import{e as o,x as e,m as r,H as n,C as a}from"./routing-CLiSUilp.js";import{s as l,S as m,L as s}from"./seo-Cu1eZUpG.js";import{S as u}from"./section-4fqYtlCS.js";const d={theme:"dark-v10",lat:-77.4469,lng:37.5628,zoom:11.64};function p(t=d){const i=t.token??void 0;return i?["https://api.mapbox.com/styles/v1/mapbox/",t.theme,`/static/${t.lat},${t.lng},${t.zoom},0/`,`500x400?access_token=${i}`].join(""):void 0}var g=a("<h1>About Page"),c=a("<p>I am a solutions developer working with both Google Workspaces and Microsoft 365. I like building tools to make our digital work lives easier."),h=a("<h3>Working smarter, not harder!"),f=a("<p>I have lived all over the world in different roles. I was a United States Marine in Okinawa, Japan. I taught middle school English in Richmond, VA. I became a self-taught computer programmer in Izmir, Turkey. Now I am doing development work in Beijing, China."),b=a("<p>I write code using JavaScript, Typescript, and Google Apps Script. I have built SPFx webparts in Microsoft Sharepoint and written many automations in Google Workspaces. The idea of automating the boring parts of the day is incredible."),k=a("<img alt=map>");function y(){const t=p();return o(s,{get children(){return[o(m,{title:"About"}),o(u,{get children(){return[e(g),e(c),e(h),e(f),r(()=>t&&o(w,{get children(){var i=e(k);return n(i,"src",t),i}})),e(b)]}})]}})}const w=l.figure`
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
`;export{y as default};

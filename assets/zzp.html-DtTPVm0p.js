import{v as h}from"./vod-BPJKCHVC.js";import{h as g}from"./artConst-Cd59JGgx.js";import{_ as y,u as z,h as T,i as b,r as n,c as l,f as s,j as o,w as p,o as i,d as P,F as x,l as k,m as w}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const C={__name:"zzp.html",setup(N){const t=z("vod-zzp",{src:"",vodbf:[],PlayList:[]});T(()=>{b(async()=>{const e=await h.find({name:"bfzy-27"});t.value.vodbf=e.data,c(0)})});const c=e=>{const{vodbf:a}=t.value;t.value.PlayList=a,t.value.src=a[e].url};return(e,a)=>{const m=n("ArtPlayer"),d=n("SiteInfo"),v=n("Tabs");return i(),l("div",null,[s(m,{src:o(t).src,config:o(g)(o(t).PlayList)},null,8,["src","config"]),s(v,{id:"2",data:[{id:"暴风资源"}],active:0},{title0:p(({value:u,isActive:f})=>[P("暴风资源")]),tab0:p(({value:u,isActive:f})=>[(i(!0),l(x,null,k(o(t).vodbf,(r,_)=>(i(),w(d,{name:r.title,desc:"",logo:r.vod_pic,preview:r.vod_pic,url:"",onClick:S=>c(_)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},M=y(C,[["__file","zzp.html.vue"]]),V=JSON.parse('{"path":"/vod/movie/zzp.html","title":"战争片","lang":"zh-CN","frontmatter":{"title":"战争片","icon":"photo-film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["战争"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/movie/zzp.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"战争片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"战争"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"战争片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"vod/movie/zzp.md","localizedDate":"2020年1月1日","excerpt":""}');export{M as comp,V as data};

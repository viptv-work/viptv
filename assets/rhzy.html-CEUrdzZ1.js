import{v as u}from"./vod-BPJKCHVC.js";import{h as w}from"./artConst-Cd59JGgx.js";import{_ as C,u as x,h as A,r as p,c as d,f as y,j as r,w as l,o as n,d as _,F as h,l as f,m as g}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const k={__name:"rhzy.html",setup(N){const t=x("vod-rhzy",{src:"",vodbf:[],vodlz:[],PlayList:[]});A(async()=>{const e=await u.find({name:"bfzy-48"}),o=await u.find({name:"lzzy-27"});t.value.vodbf=e.data,t.value.vodlz=o.data,m(0)});const m=e=>{const{vodbf:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},z=e=>{const{vodlz:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url};return(e,o)=>{const b=p("ArtPlayer"),v=p("SiteInfo"),T=p("Tabs");return n(),d("div",null,[y(b,{src:r(t).src,config:r(w)(r(t).PlayList)},null,8,["src","config"]),y(T,{id:"2",data:[{id:"暴风资源"},{id:"量子资源"}],active:0},{title0:l(({value:i,isActive:c})=>[_("暴风资源")]),title1:l(({value:i,isActive:c})=>[_("量子资源")]),tab0:l(({value:i,isActive:c})=>[(n(!0),d(h,null,f(r(t).vodbf,(a,s)=>(n(),g(v,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>m(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:c})=>[(n(!0),d(h,null,f(r(t).vodlz,(a,s)=>(n(),g(v,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:P=>z(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},M=C(k,[["__file","rhzy.html.vue"]]),V=JSON.parse('{"path":"/vod/zongyi/rhzy.html","title":"日韩综艺","lang":"zh-CN","frontmatter":{"title":"日韩综艺","icon":"star","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["综艺"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/zongyi/rhzy.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"日韩综艺"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"综艺"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日韩综艺\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"vod/zongyi/rhzy.md","localizedDate":"2020年1月1日","excerpt":""}');export{M as comp,V as data};

import{p as C,H as k,a as x}from"./artConst-CzWnV0EE.js";import{v}from"./vod-DsdsJOok.js";import{h as A,u as N,i as Z,r as c,o as r,c as m,f as _,k as p,w as l,d as y,F as f,l as g,m as h}from"./app-BT5VxetQ.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const L=A({__name:"omdm.html",setup(M){const t=N("vod-omdm",{src:"",vodlz:[],vodbf:[],PlayList:[]});Z(async()=>{const e=await v.find({name:"lzzy-31"}),o=await v.find({name:"bfzy-42"});t.value.vodlz=e.data,t.value.vodbf=o.data,d(0)});const d=e=>{const{vodlz:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},b=e=>{const{vodbf:o}=t.value;t.value.PlayList=o[e].play_list,t.value.src=o[e].play_list[0].url},T={poster:C,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:k},plugins:[x({autoNext:!0,playlist:t.value.PlayList})]};return(e,o)=>{const z=c("ArtPlayer"),u=c("SiteInfo"),P=c("Tabs");return r(),m("div",null,[_(z,{src:p(t).src,config:T},null,8,["src"]),_(P,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:n,isActive:i})=>[y("量子资源")]),title1:l(({value:n,isActive:i})=>[y("暴风资源")]),tab0:l(({value:n,isActive:i})=>[(r(!0),m(f,null,g(p(t).vodlz,(a,s)=>(r(),h(u,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:w=>d(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:i})=>[(r(!0),m(f,null,g(p(t).vodbf,(a,s)=>(r(),h(u,{name:a.vod_name,desc:"",logo:a.vod_pic,preview:a.vod_pic,url:"",onClick:w=>b(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),$=H(L,[["__file","omdm.html.vue"]]),D=JSON.parse('{"path":"/vod/dongman/omdm.html","title":"欧美动漫","lang":"zh-CN","frontmatter":{"title":"欧美动漫","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["动漫"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/dongman/omdm.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"欧美动漫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"动漫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欧美动漫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"vod/dongman/omdm.md","localizedDate":"2020年1月1日","excerpt":""}');export{$ as comp,D as data};

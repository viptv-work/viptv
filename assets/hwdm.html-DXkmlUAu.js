import{p as C,H as k,a as x}from"./artConst-CzWnV0EE.js";import{v}from"./vod-DsdsJOok.js";import{h as A,u as N,i as Z,r as c,o as r,c as p,f as _,k as d,w as l,d as y,F as f,l as g,m as h}from"./app-BT5VxetQ.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const L=A({__name:"hwdm.html",setup(M){const t=N("vod-hwdm",{src:"",vodlz:[],vodbf:[],PlayList:[]});Z(async()=>{const e=await v.find({name:"lzzy-33"}),a=await v.find({name:"bfzy-44"});t.value.vodlz=e.data,t.value.vodbf=a.data,m(0)});const m=e=>{const{vodlz:a}=t.value;t.value.PlayList=a[e].play_list,t.value.src=a[e].play_list[0].url},w=e=>{const{vodbf:a}=t.value;t.value.PlayList=a[e].play_list,t.value.src=a[e].play_list[0].url},b={poster:C,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:k},plugins:[x({autoNext:!0,playlist:t.value.PlayList})]};return(e,a)=>{const T=c("ArtPlayer"),u=c("SiteInfo"),z=c("Tabs");return r(),p("div",null,[_(T,{src:d(t).src,config:b},null,8,["src"]),_(z,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:n,isActive:i})=>[y("量子资源")]),title1:l(({value:n,isActive:i})=>[y("暴风资源")]),tab0:l(({value:n,isActive:i})=>[(r(!0),p(f,null,g(d(t).vodlz,(o,s)=>(r(),h(u,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:P=>m(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:i})=>[(r(!0),p(f,null,g(d(t).vodbf,(o,s)=>(r(),h(u,{name:o.vod_name,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:P=>w(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),$=H(L,[["__file","hwdm.html.vue"]]),D=JSON.parse('{"path":"/vod/dongman/hwdm.html","title":"海外动漫","lang":"zh-CN","frontmatter":{"title":"海外动漫","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["动漫"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/dongman/hwdm.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"海外动漫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"动漫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"海外动漫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"vod/dongman/hwdm.md","localizedDate":"2020年1月1日","excerpt":""}');export{$ as comp,D as data};

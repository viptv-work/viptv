import{p as C,H as x,a as A}from"./artConst-CzWnV0EE.js";import{v}from"./vod-DsdsJOok.js";import{h as q,u as L,i as N,j as Z,r as m,o as l,c,f as z,k as u,w as r,d as y,F as f,l as _,m as g}from"./app-BT5VxetQ.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const M=q({__name:"zuqiu.html",setup(S){const e=L("vod-zuqiu",{src:"",vodsn:[],vodyl:[],vodbf:[],PlayList:[]});N(()=>{Z(async()=>{const a=await v.find({name:"snzy-50"}),t=await v.find({name:"ylzy-50"}),p=await v.find({name:"bfzy-54"});e.value.vodsn=a.data,e.value.vodyl=t.data,e.value.vodbf=p.data,h(0)})});const h=a=>{const{vodsn:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url},T=a=>{const{vodyl:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url},w=a=>{const{vodbf:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url},k={poster:C,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:x},plugins:[A({autoNext:!0,playlist:e.value.PlayList})]};return(a,t)=>{const p=m("ArtPlayer"),d=m("SiteInfo"),P=m("Tabs");return l(),c("div",null,[z(p,{src:u(e).src,config:k},null,8,["src"]),z(P,{id:"2",data:[{id:"索尼资源"},{id:"鱼乐资源"},{id:"暴风资源"}],active:0},{title0:r(({value:n,isActive:i})=>[y("索尼资源")]),title1:r(({value:n,isActive:i})=>[y("鱼乐资源")]),title2:r(({value:n,isActive:i})=>[y("暴风资源")]),tab0:r(({value:n,isActive:i})=>[(l(!0),c(f,null,_(u(e).vodsn,(o,s)=>(l(),g(d,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:b=>h(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:r(({value:n,isActive:i})=>[(l(!0),c(f,null,_(u(e).vodyl,(o,s)=>(l(),g(d,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:b=>T(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:r(({value:n,isActive:i})=>[(l(!0),c(f,null,_(u(e).vodbf,(o,s)=>(l(),g(d,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:b=>w(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),D=H(M,[["__file","zuqiu.html.vue"]]),E=JSON.parse('{"path":"/vod/sport/zuqiu.html","title":"足球","lang":"zh-CN","frontmatter":{"title":"足球","icon":"futbol","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["足球"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/sport/zuqiu.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"足球"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"足球"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"足球\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.76,"words":228},"filePathRelative":"vod/sport/zuqiu.md","localizedDate":"2020年1月1日","excerpt":""}');export{D as comp,E as data};

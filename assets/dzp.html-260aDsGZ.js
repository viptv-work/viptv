import{v as u}from"./vod-BPJKCHVC.js";import{h as k}from"./artConst-Cd59JGgx.js";import{_ as C,u as A,h as x,i as L,r as m,c as d,f as b,j as n,w as r,o as l,d as y,F as _,l as f,m as g}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const N={__name:"dzp.html",setup(S){const e=A("vod-dzp",{src:"",vodlz:[],vodyl:[],vodbf:[],PlayList:[]});x(()=>{L(async()=>{const a=await u.find({name:"lzzy-6"}),t=await u.find({name:"ylzy-6"}),p=await u.find({name:"bfzy-21"});e.value.vodlz=a.data,e.value.vodyl=t.data,e.value.vodbf=p.data,h(0)})});const h=a=>{const{vodlz:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url},T=a=>{const{vodyl:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url},w=a=>{const{vodbf:t}=e.value;e.value.PlayList=t,e.value.src=t[a].url};return(a,t)=>{const p=m("ArtPlayer"),v=m("SiteInfo"),P=m("Tabs");return l(),d("div",null,[b(p,{src:n(e).src,config:n(k)(n(e).PlayList)},null,8,["src","config"]),b(P,{id:"2",data:[{id:"量子资源"},{id:"鱼乐资源"},{id:"暴风资源"}],active:0},{title0:r(({value:i,isActive:c})=>[y("量子资源")]),title1:r(({value:i,isActive:c})=>[y("鱼乐资源")]),title2:r(({value:i,isActive:c})=>[y("暴风资源")]),tab0:r(({value:i,isActive:c})=>[(l(!0),d(_,null,f(n(e).vodlz,(o,s)=>(l(),g(v,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:z=>h(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:r(({value:i,isActive:c})=>[(l(!0),d(_,null,f(n(e).vodyl,(o,s)=>(l(),g(v,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:z=>T(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:r(({value:i,isActive:c})=>[(l(!0),d(_,null,f(n(e).vodbf,(o,s)=>(l(),g(v,{name:o.title,desc:"",logo:o.vod_pic,preview:o.vod_pic,url:"",onClick:z=>w(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},j=C(N,[["__file","dzp.html.vue"]]),I=JSON.parse('{"path":"/vod/movie/dzp.html","title":"动作片","lang":"zh-CN","frontmatter":{"title":"动作片","icon":"photo-film","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["篮球"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/movie/dzp.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"动作片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"篮球"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"动作片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"vod/movie/dzp.md","localizedDate":"2020年1月1日","excerpt":""}');export{j as comp,I as data};

import{v as m}from"./vod-BPJKCHVC.js";import{h as P}from"./artConst-Cd59JGgx.js";import{_ as A,u as k,h as x,r as h,c as v,f as z,j as d,w as l,o as n,d as p,F as u,l as g,m as _}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const L={__name:"gcdm.html",setup(N){const e=k("vod-gcdm",{src:"",vodmd:[],vodsn:[],vodlz:[],vodbf:[],PlayList:[]});x(async()=>{const a=await m.find({name:"mdzy-1"}),o=await m.find({name:"snzy-29"}),f=await m.find({name:"lzzy-29"}),s=await m.find({name:"bfzy-40"});e.value.vodmd=a.data,e.value.vodsn=o.data,e.value.vodlz=f.data,e.value.vodbf=s.data,b(0)});const b=a=>{const{vodmd:o}=e.value;e.value.PlayList=o,e.value.src=o[a].url},w=a=>{const{vodsn:o}=e.value;e.value.PlayList=o[a].play_list,e.value.src=o[a].play_list[0].url},T=a=>{const{vodbf:o}=e.value;e.value.PlayList=o[a].play_list,e.value.src=o[a].play_list[0].url};return(a,o)=>{const f=h("ArtPlayer"),s=h("SiteInfo"),C=h("Tabs");return n(),v("div",null,[z(f,{src:d(e).src,config:d(P)(d(e).PlayList)},null,8,["src","config"]),z(C,{id:"2",data:[{id:"魔都资源"},{id:"索尼资源"},{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:i,isActive:r})=>[p("魔都资源")]),title1:l(({value:i,isActive:r})=>[p("索尼资源")]),title2:l(({value:i,isActive:r})=>[p("量子资源")]),title3:l(({value:i,isActive:r})=>[p("暴风资源")]),tab0:l(({value:i,isActive:r})=>[(n(!0),v(u,null,g(d(e).vodmd,(t,c)=>(n(),_(s,{name:t.title,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:y=>b(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:r})=>[(n(!0),v(u,null,g(d(e).vodsn,(t,c)=>(n(),_(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:y=>w(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:l(({value:i,isActive:r})=>[(n(!0),v(u,null,g(d(e).vodlz,(t,c)=>(n(),_(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:y=>w(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab3:l(({value:i,isActive:r})=>[(n(!0),v(u,null,g(d(e).vodbf,(t,c)=>(n(),_(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:y=>T(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},V=A(L,[["__file","gcdm.html.vue"]]),$=JSON.parse('{"path":"/vod/dongman/gcdm.html","title":"国产动漫","lang":"zh-CN","frontmatter":{"title":"国产动漫","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["动漫"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/dongman/gcdm.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"国产动漫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"动漫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国产动漫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.87,"words":260},"filePathRelative":"vod/dongman/gcdm.md","localizedDate":"2020年1月1日","excerpt":""}');export{V as comp,$ as data};

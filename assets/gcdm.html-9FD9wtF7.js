import{p as k,H as A,a as x}from"./artConst-CzWnV0EE.js";import{v as p}from"./vod-DsdsJOok.js";import{h as L,u as N,i as Z,r as h,o as l,c as d,f as z,k as v,w as n,d as u,F as m,l as _,m as g}from"./app-BT5VxetQ.js";import{_ as H}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const M=L({__name:"gcdm.html",setup(S){const e=N("vod-gcdm",{src:"",vodmd:[],vodsn:[],vodlz:[],vodbf:[],PlayList:[]});Z(async()=>{const a=await p.find({name:"mdzy-1"}),o=await p.find({name:"snzy-29"}),y=await p.find({name:"lzzy-29"}),s=await p.find({name:"bfzy-40"});e.value.vodmd=a.data,e.value.vodsn=o.data,e.value.vodlz=y.data,e.value.vodbf=s.data,b(0)});const b=a=>{const{vodmd:o}=e.value;e.value.PlayList=o,e.value.src=o[a].url},w=a=>{const{vodsn:o}=e.value;e.value.PlayList=o[a].play_list,e.value.src=o[a].play_list[0].url},C=a=>{const{vodbf:o}=e.value;e.value.PlayList=o[a].play_list,e.value.src=o[a].play_list[0].url},T={poster:k,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:A},plugins:[x({autoNext:!0,playlist:e.value.PlayList})]};return(a,o)=>{const y=h("ArtPlayer"),s=h("SiteInfo"),P=h("Tabs");return l(),d("div",null,[z(y,{src:v(e).src,config:T},null,8,["src"]),z(P,{id:"2",data:[{id:"魔都资源"},{id:"索尼资源"},{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:n(({value:r,isActive:i})=>[u("魔都资源")]),title1:n(({value:r,isActive:i})=>[u("索尼资源")]),title2:n(({value:r,isActive:i})=>[u("量子资源")]),title3:n(({value:r,isActive:i})=>[u("暴风资源")]),tab0:n(({value:r,isActive:i})=>[(l(!0),d(m,null,_(v(e).vodmd,(t,c)=>(l(),g(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:f=>b(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:n(({value:r,isActive:i})=>[(l(!0),d(m,null,_(v(e).vodsn,(t,c)=>(l(),g(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:f=>w(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab2:n(({value:r,isActive:i})=>[(l(!0),d(m,null,_(v(e).vodlz,(t,c)=>(l(),g(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:f=>w(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab3:n(({value:r,isActive:i})=>[(l(!0),d(m,null,_(v(e).vodbf,(t,c)=>(l(),g(s,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:f=>C(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),D=H(M,[["__file","gcdm.html.vue"]]),E=JSON.parse('{"path":"/vod/dongman/gcdm.html","title":"国产动漫","lang":"zh-CN","frontmatter":{"title":"国产动漫","icon":"person-falling-burst","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["动漫"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/dongman/gcdm.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"国产动漫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"动漫"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国产动漫\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.96,"words":289},"filePathRelative":"vod/dongman/gcdm.md","localizedDate":"2020年1月1日","excerpt":""}');export{D as comp,E as data};

import{p as w,H as P,a as C}from"./artConst-CzWnV0EE.js";import{v}from"./vod-DsdsJOok.js";import{h as j,u as x,i as A,r as s,o as r,c as p,f as y,k as d,w as l,d as _,F as f,l as h,m as g}from"./app-BT5VxetQ.js";import{_ as N}from"./plugin-vue_export-helper-DlAUqK2U.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./hls.min-DFLlIjNj.js";const Z=j({__name:"hkj.html",setup(H){const e=x("vod-hkj",{src:"",vodlz:[],vodbf:[],PlayList:[]});A(async()=>{const o=await v.find({name:"lzzy-14"}),a=await v.find({name:"bfzy-33"});e.value.vodlz=o.data,e.value.vodbf=a.data,m(0)});const m=o=>{const{vodlz:a}=e.value;e.value.PlayList=a[o].play_list,e.value.src=a[o].play_list[0].url},b={poster:w,fullscreen:!0,fullscreenWeb:!0,autoplay:!0,muted:!0,type:"Hls",customType:{Hls:P},plugins:[C({autoNext:!0,playlist:e.value.PlayList})]};return(o,a)=>{const k=s("ArtPlayer"),u=s("SiteInfo"),T=s("Tabs");return r(),p("div",null,[y(k,{src:d(e).src,config:b},null,8,["src"]),y(T,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:n,isActive:i})=>[_("量子资源")]),title1:l(({value:n,isActive:i})=>[_("暴风资源")]),tab0:l(({value:n,isActive:i})=>[(r(!0),p(f,null,h(d(e).vodlz,(t,c)=>(r(),g(u,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>m(c)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:n,isActive:i})=>[(r(!0),p(f,null,h(d(e).vodbf,(t,c)=>(r(),g(u,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>o.vodbf(c)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}}),F=N(Z,[["__file","hkj.html.vue"]]),$=JSON.parse('{"path":"/vod/tvb/hkj.html","title":"香港剧","lang":"zh-CN","frontmatter":{"title":"香港剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["香港剧"],"head":[["meta",{"property":"og:url","content":"https://viptv.work/vod/tvb/hkj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"香港剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T22:04:30.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"香港剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-15T22:04:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"香港剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-15T22:04:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1715810670000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":2}]},"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"vod/tvb/hkj.md","localizedDate":"2020年1月1日","excerpt":""}');export{F as comp,$ as data};

import{v as u}from"./vod-BPJKCHVC.js";import{h as j}from"./artConst-Cd59JGgx.js";import{_ as w,u as P,h as C,r as m,c as p,f as _,j as n,w as l,o as r,d as f,F as g,l as y,m as h}from"./app-DWXjdsEU.js";import"./commonjsHelpers-Cpj98o6Y.js";const k={__name:"omj.html",setup(A){const e=P("vod-omj",{src:"",vodlz:[],vodbf:[],PlayList:[]});C(async()=>{const o=await u.find({name:"lzzy-16"}),a=await u.find({name:"bfzy-32"});e.value.vodlz=o.data,e.value.vodbf=a.data,d(0)});const d=o=>{const{vodlz:a}=e.value;e.value.PlayList=a[o].play_list,e.value.src=a[o].play_list[0].url};return(o,a)=>{const b=m("ArtPlayer"),v=m("SiteInfo"),T=m("Tabs");return r(),p("div",null,[_(b,{src:n(e).src,config:n(j)(n(e).PlayList)},null,8,["src","config"]),_(T,{id:"2",data:[{id:"量子资源"},{id:"暴风资源"}],active:0},{title0:l(({value:i,isActive:c})=>[f("量子资源")]),title1:l(({value:i,isActive:c})=>[f("暴风资源")]),tab0:l(({value:i,isActive:c})=>[(r(!0),p(g,null,y(n(e).vodlz,(t,s)=>(r(),h(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>d(s)},null,8,["name","logo","preview","onClick"]))),256))]),tab1:l(({value:i,isActive:c})=>[(r(!0),p(g,null,y(n(e).vodbf,(t,s)=>(r(),h(v,{name:t.vod_name,desc:"",logo:t.vod_pic,preview:t.vod_pic,url:"",onClick:z=>o.vodbf(s)},null,8,["name","logo","preview","onClick"]))),256))]),_:1})])}}},B=w(k,[["__file","omj.html.vue"]]),L=JSON.parse('{"path":"/vod/tvb/omj.html","title":"欧美剧","lang":"zh-CN","frontmatter":{"title":"欧美剧","icon":"clone","date":"2020-01-01T00:00:00.000Z","order":4,"category":["影视点播"],"tag":["欧美剧"],"head":[["meta",{"property":"og:url","content":"https://DESKTOP-BB2QNSK/vod/tvb/omj.html"}],["meta",{"property":"og:site_name","content":"VIPTV 云视听"}],["meta",{"property":"og:title","content":"欧美剧"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-26T13:24:40.000Z"}],["meta",{"property":"article:author","content":"Mr.Hefung"}],["meta",{"property":"article:tag","content":"欧美剧"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-26T13:24:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"欧美剧\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-26T13:24:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hefung\\",\\"url\\":\\"/\\"}]}"]]},"headers":[],"git":{"createdTime":1714993694000,"updatedTime":1716729880000,"contributors":[{"name":"viptv","email":"mail@viptv.work","commits":7}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"vod/tvb/omj.md","localizedDate":"2020年1月1日","excerpt":""}');export{B as comp,L as data};

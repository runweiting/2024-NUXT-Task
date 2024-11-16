import{_ as D}from"./DdU4FjN9.js";import{m as F,u as $,y as C,q as m,n as s,o as a,c as l,a as t,t as n,b as c,F as u,v as p,s as R}from"./4q_R_4gM.js";import{u as S}from"./Dbs33ik5.js";import"./dIvCUiEA.js";import"./DZC9LRfQ.js";const U={key:0,class:"text-center"},j={key:1},B={key:2,class:"group w-full max-w-sm lg:max-w-full"},E={class:"overflow-hidden rounded-xl"},P=["src","alt"],N={class:"flex flex-col justify-between bg-white p-4 leading-normal"},T={class:"mb-8"},V={class:"mb-2 text-xl font-bold text-stone-900"},W={class:"text-base text-stone-700"},q={class:"mb-4 flex space-x-2"},z={class:"h-[100px] w-[100px] rounded-md border border-stone-300 p-4"},Q={class:"text-stone-700"},G={class:"h-[100px] w-[100px] rounded-md border border-stone-300 p-4"},H={class:"text-stone-700"},J={class:"h-[100px] w-[100px] border border-stone-300 p-4 last:rounded-md"},K={class:"text-stone-700"},M={class:"mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4"},O={class:"text-stone-700"},X={class:"mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4"},Y={class:"text-stone-700"},Z={class:"mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4"},tt={class:"text-stone-700"},et={class:"mb-4 flex justify-between"},st={class:"text-2xl text-stone-500"},ot={class:"flex items-center justify-between text-stone-500"},nt={class:"leading-none"},rt={class:"leading-non"},ut=F({__name:"[id]",setup(at){const f=$(),_=C(),b=f.params.id,h={name:"",description:"",imageUrl:"",imageUrlList:[],areaInfo:"",bedInfo:"",maxPeople:0,price:0,status:0,layoutInfo:[],facilityInfo:[],amenityInfo:[],_id:"",createdAt:"",updatedAt:""},g=R(),{hexSchoolApiUrl:v}=g.public,{data:y,status:w,error:k,refresh:A}=S(`${v}/api/v1/rooms/${b}`,{transform:d=>{const e=d.result;return{...d,result:{...e,price:e.price.toLocaleString("zh-TW",{style:"currency",currency:"TWD",minimumFractionDigits:0,maximumFractionDigits:0}),createdAt:x(e.createdAt),updatedAt:x(e.updatedAt)}}}},"$xEAL11gQhU"),o=m(()=>{var d;return((d=y.value)==null?void 0:d.result)||h}),I=m(()=>k.value!==null),L=m(()=>w.value==="pending"),x=d=>new Date(d).toLocaleDateString();return(d,e)=>{const i=D;return s(L)?(a(),l("div",U,e[2]||(e[2]=[t("p",{class:"text-gray-500"},"Loading rooms...",-1)]))):s(I)?(a(),l("div",j,[e[3]||(e[3]=t("p",{class:"text-red-600"},"Failed to load rooms. Please try again.",-1)),t("button",{type:"button",class:"btn mt-2",onClick:e[0]||(e[0]=r=>s(A)())},"Retry")])):(a(),l("section",B,[t("div",E,[t("img",{src:s(o).imageUrl,alt:s(o).name,class:"h-[600px] w-full object-cover transition-transform duration-300 group-hover:scale-105"},null,8,P)]),t("div",N,[t("div",T,[t("div",V,n(s(o).name),1),t("p",W,n(s(o).description),1)]),e[4]||(e[4]=t("h3",{class:"font-bold text-stone-900"},"房型基本資訊",-1)),t("div",q,[t("div",z,[c(i,{class:"mb-2 h-5 w-5 text-stone-400",name:"mdi:floor-plan"}),t("p",Q,n(s(o).areaInfo),1)]),t("div",G,[c(i,{class:"mb-2 h-5 w-5 text-stone-400",name:"mdi:bed-empty"}),t("p",H,n(s(o).bedInfo),1)]),t("div",J,[c(i,{class:"mb-2 h-5 w-5 text-stone-400",name:"mdi:people"}),t("p",K,"2-"+n(s(o).maxPeople)+"人",1)])]),e[5]||(e[5]=t("h3",{class:"font-bold text-stone-900"},"房間格局",-1)),t("div",M,[(a(!0),l(u,null,p(s(o).layoutInfo,r=>(a(),l("div",{key:r.title,class:"flex items-center"},[c(i,{class:"mr-1 h-5 w-5 text-stone-400",name:"mdi:check"}),t("p",O,n(r.title),1)]))),128))]),e[6]||(e[6]=t("h3",{class:"font-bold text-stone-900"},"房內設備",-1)),t("div",X,[(a(!0),l(u,null,p(s(o).facilityInfo,r=>(a(),l("div",{key:r.title,class:"flex items-center"},[c(i,{class:"mr-1 h-5 w-5 text-stone-400",name:"mdi:check"}),t("p",Y,n(r.title),1)]))),128))]),e[7]||(e[7]=t("h3",{class:"font-bold text-stone-900"},"備品提供",-1)),t("div",Z,[(a(!0),l(u,null,p(s(o).amenityInfo,r=>(a(),l("div",{key:r.title,class:"flex items-center"},[c(i,{class:"mr-1 h-5 w-5 text-stone-400",name:"mdi:check"}),t("p",tt,n(r.title),1)]))),128))]),e[8]||(e[8]=t("div",{class:"my-4 h-0.5 w-full bg-gradient-to-r from-stone-500"},null,-1)),t("div",et,[t("p",st,n(s(o).price),1),t("button",{type:"button",class:"btn",onClick:e[1]||(e[1]=r=>s(_).push("/rooms"))},"回到上一頁")]),t("div",ot,[t("p",nt,"createdAt: "+n(s(o).createdAt),1),t("p",rt,"updatedAt: "+n(s(o).updatedAt),1)])])]))}}});export{ut as default};

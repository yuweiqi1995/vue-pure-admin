import{s as v,a as x}from"./vue-virtual-scroller.esm-02329dda.js";import{j as y,r as m,a as z,a3 as _,k as g,l as w,m as n,C,E as o,y as p,u as i,t as I,D as V}from"./runtime-core.esm-bundler-8baab2e8.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";const b={class:"dynamic-scroller-demo"},B={class:"flex-ac mb-4 shadow-2xl"},N={class:"text-center"},S=y({__name:"horizontal",setup($){const l=m([]),a=m("");for(let e=0;e<800;e++)l.value.push({id:e});const u=z(()=>{if(!a.value)return l.value;const e=a.value;return l.value.filter(s=>s.id==e)});return(e,s)=>{const h=_("el-input"),f=_("IconifyIconOnline");return g(),w("div",b,[n("div",B,[C(" 水平模式 horizontal "),o(h,{class:"mr-2 !w-[1/1.5]",clearable:"",modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=t=>a.value=t),placeholder:"Filter...",style:{width:"300px"}},null,8,["modelValue"])]),o(i(x),{items:i(u),"min-item-size":54,direction:"horizontal",class:"scroller"},{default:p(({item:t,index:c,active:r})=>{var d;return[o(i(v),{item:t,active:r,"size-dependencies":[t.id],"data-index":c,"data-active":r,title:`Click to change message ${c}`,style:I({width:`${Math.max(130,Math.round(((d=t.id)==null?void 0:d.length)/20*20))}px`}),class:"message"},{default:p(()=>[n("div",null,[o(f,{icon:"openmoji:beaming-face-with-smiling-eyes",width:"40"}),n("p",N,V(t.id),1)])]),_:2},1032,["item","active","size-dependencies","data-index","data-active","title","style"])]}),_:1},8,["items"])])}}});const M=k(S,[["__scopeId","data-v-9c1e94e3"]]);export{M as default};

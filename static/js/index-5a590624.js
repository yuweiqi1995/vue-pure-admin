import{useDept as A}from"./hook-e24de012.js";import{R as E,D as F,P as L}from"./refresh-7afb8f37.js";import{u as s}from"./hooks-3bc3f091.js";import{d as N}from"./edit-pen-37b5ced2.js";import{S as P}from"./search-4b9e88d3.js";import{A as j}from"./add-circle-line-5b89a592.js";import{j as h,r as g,a3 as a,k as z,l as I,E as o,y as t,u as e,C as p}from"./runtime-core.esm-bundler-8baab2e8.js";import"./dayjs.min-e0adaab4.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-51e3811e.js";import"./index-4b9f55af.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";import"./vue-i18n.runtime.esm-bundler-3b734191.js";import"./hot-cc9aa47e.js";import"./index-9aff8a28.js";import"./multiTags-23feb6ec.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-3ff981c7.js";import"./index-61e37875.js";import"./system-b11360a2.js";import"./epTheme-22da2988.js";import"./index-2b83f942.js";const O={class:"main"},q=h({name:"Dept"}),be=h({...q,setup(G){const c=g(),u=g(),{form:r,loading:d,columns:y,dataList:C,onSearch:f,resetForm:v,handleUpdate:R,handleDelete:w,handleSelectionChange:x}=A();return(H,n)=>{var b;const V=a("el-input"),m=a("el-form-item"),_=a("el-option"),S=a("el-select"),i=a("el-button"),D=a("el-form"),T=a("el-popconfirm"),B=a("pure-table");return z(),I("div",O,[o(D,{ref_key:"formRef",ref:c,inline:!0,model:e(r),class:"bg-bg_color w-[99/100] pl-8 pt-4"},{default:t(()=>[o(m,{label:"部门名称：",prop:"user"},{default:t(()=>[o(V,{modelValue:e(r).user,"onUpdate:modelValue":n[0]||(n[0]=l=>e(r).user=l),placeholder:"请输入部门名称",clearable:"",class:"!w-[200px]"},null,8,["modelValue"])]),_:1}),o(m,{label:"状态：",prop:"status"},{default:t(()=>[o(S,{modelValue:e(r).status,"onUpdate:modelValue":n[1]||(n[1]=l=>e(r).status=l),placeholder:"请选择状态",clearable:"",class:"!w-[180px]"},{default:t(()=>[o(_,{label:"开启",value:"1"}),o(_,{label:"关闭",value:"0"})]),_:1},8,["modelValue"])]),_:1}),o(m,null,{default:t(()=>[o(i,{type:"primary",icon:e(s)(e(P)),loading:e(d),onClick:e(f)},{default:t(()=>[p(" 搜索 ")]),_:1},8,["icon","loading","onClick"]),o(i,{icon:e(s)(e(E)),onClick:n[2]||(n[2]=l=>e(v)(c.value))},{default:t(()=>[p(" 重置 ")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),o(e(L),{title:"部门列表",tableRef:(b=u.value)==null?void 0:b.getTableRef(),onRefresh:e(f)},{buttons:t(()=>[o(i,{type:"primary",icon:e(s)(e(j))},{default:t(()=>[p(" 新增部门 ")]),_:1},8,["icon"])]),default:t(({size:l,checkList:U})=>[o(B,{ref_key:"tableRef",ref:u,border:"","align-whole":"center","row-key":"id",showOverflowTooltip:"","table-layout":"auto","default-expand-all":"",loading:e(d),size:l,data:e(C),columns:e(y),checkList:U,"header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:e(x)},{operation:t(({row:k})=>[o(i,{class:"reset-margin",link:"",type:"primary",size:l,onClick:$=>e(R)(k),icon:e(s)(e(N))},{default:t(()=>[p(" 修改 ")]),_:2},1032,["size","onClick","icon"]),o(T,{title:"是否确认删除?"},{reference:t(()=>[o(i,{class:"reset-margin",link:"",type:"primary",size:l,icon:e(s)(e(F)),onClick:$=>e(w)(k)},{default:t(()=>[p(" 删除 ")]),_:2},1032,["size","icon","onClick"])]),_:2},1024)]),_:2},1032,["loading","size","data","columns","checkList","header-cell-style","onSelectionChange"])]),_:1},8,["tableRef","onRefresh"])])}}});export{be as default};

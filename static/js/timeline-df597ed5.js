import{u as d}from"./index-e900c289.js";import{u as j}from"./hooks-3bc3f091.js";import{d as k}from"./iphone-bcaa848c.js";import{j as g,a9 as u,a3 as a,k as l,x as b,y as t,m as n,E as i,l as v,X as _,F as f,b6 as x,b4 as w,C,D as B}from"./runtime-core.esm-bundler-8baab2e8.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-2b83f942.js";const y=o=>(x("data-v-54fd6142"),o=o(),w(),o),I=y(()=>n("div",{class:"card-header"},[n("span",{class:"font-medium"},"时间线")],-1)),S={class:"flex"},T=y(()=>n("div",{class:"message"}," vue-pure-admin是基于Vue3.0+TypeScript+Vite2.0+Element-Plus编写的一套后台管理系统 ",-1)),V=g({name:"TimeLine"}),F=g({...V,setup(o){const{lastBuildTime:s}={pkg:{dependencies:{"@amap/amap-jsapi-loader":"^1.0.1","@howdyjs/mouse-menu":"^2.0.5","@logicflow/core":"^1.1.30","@logicflow/extension":"^1.1.30","@pureadmin/descriptions":"^1.1.0","@pureadmin/table":"^2.0.0","@pureadmin/utils":"^1.8.5","@vueuse/core":"^9.12.0","@vueuse/motion":"2.0.0-beta.12","@wangeditor/editor":"^5.1.21","@wangeditor/editor-for-vue":"^5.1.12","animate.css":"^4.1.1",axios:"^1.2.2","china-area-data":"^5.0.1",cropperjs:"^1.5.12",dayjs:"^1.11.7",echarts:"^5.4.1","el-table-infinite-scroll":"^3.0.1","element-plus":"^2.2.30","element-resize-detector":"^1.2.4","intro.js":"^6.0.0","js-cookie":"^3.0.1",jsbarcode:"^3.11.5","md-editor-v3":"^2.7.2",mitt:"^3.0.0",mockjs:"^1.1.0",nprogress:"^0.2.0",path:"^0.12.7",pinia:"^2.0.30",qrcode:"^1.5.1",qs:"^6.11.0","responsive-storage":"^2.1.0",sortablejs:"^1.15.0",swiper:"^9.0.3",typeit:"^8.7.1","v-contextmenu":"3.0.0",vue:"^3.2.45","vue-i18n":"^9.2.2","vue-json-pretty":"^2.2.3","vue-pdf-embed":"^1.1.5","vue-router":"^4.1.6","vue-types":"^4.2.1","vue-virtual-scroller":"2.0.0-beta.7","vue3-danmaku":"^1.2.0",vuedraggable:"^4.1.0",xgplayer:"^2.32.2",xlsx:"^0.18.5"},devDependencies:{"@commitlint/cli":"13.1.0","@commitlint/config-conventional":"13.1.0","@iconify-icons/ep":"^1.2.10","@iconify-icons/ri":"^1.2.4","@iconify/vue":"^4.0.2","@intlify/unplugin-vue-i18n":"^0.8.1","@pureadmin/theme":"^3.0.0","@types/element-resize-detector":"1.1.3","@types/intro.js":"^5.1.0","@types/js-cookie":"^3.0.1","@types/mockjs":"^1.0.7","@types/node":"^18.11.9","@types/nprogress":"0.2.0","@types/qrcode":"^1.4.2","@types/qs":"^6.9.7","@types/sortablejs":"^1.15.0","@typescript-eslint/eslint-plugin":"^5.43.0","@typescript-eslint/parser":"^5.43.0","@vitejs/plugin-vue":"^4.0.0","@vitejs/plugin-vue-jsx":"^3.0.0","@vue/eslint-config-prettier":"^7.0.0","@vue/eslint-config-typescript":"^11.0.2",autoprefixer:"^10.4.13",cloc:"^2.11.0",cssnano:"^5.1.14",eslint:"^8.8.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^9.7.0",husky:"^7.0.4","lint-staged":"11.1.2",picocolors:"^1.0.0",postcss:"^8.4.21","postcss-html":"^1.5.0","postcss-import":"^15.1.0","postcss-scss":"^4.0.6",prettier:"^2.5.1","pretty-quick":"3.1.1",rimraf:"3.0.2","rollup-plugin-visualizer":"^5.9.0",sass:"^1.57.1","sass-loader":"^13.2.0",stylelint:"^14.3.0","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended":"^9.0.0","stylelint-config-standard":"^29.0.0","stylelint-order":"^5.0.0",svgo:"^3.0.2",tailwindcss:"^3.2.4",terser:"^5.16.1",typescript:"^4.9.4","unplugin-vue-define-options":"^1.0.0",vite:"^4.1.1","vite-plugin-cdn-import":"^0.3.5","vite-plugin-compression":"^0.5.1","vite-plugin-mock":"^2.9.6","vite-plugin-remove-console":"^1.3.0","vite-svg-loader":"^4.0.0","vue-eslint-parser":"^9.1.0","vue-tsc":"^1.0.22"},name:"vue-pure-admin",version:"3.9.7"},lastBuildTime:"2023-02-12 15:54:20"},c=[{content:"支持圆点闪动",timestamp:s,icon:u(d())},{content:"支持方形闪动",timestamp:s,icon:u(d({borderRadius:0,background:"#67C23A"}))},{content:"支持默认颜色",timestamp:s},{content:"支持自定义颜色",timestamp:s,color:"#F56C6C"},{content:"支持自定义图标",timestamp:s,color:"transparent",icon:j(k,{color:"#0bbd87"})}];return(R,z)=>{const p=a("el-timeline-item"),m=a("el-timeline"),h=a("el-card");return l(),b(h,{shadow:"never"},{header:t(()=>[I]),default:t(()=>[n("div",S,[i(m,null,{default:t(()=>[(l(),v(f,null,_(c,(e,r)=>i(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp},{default:t(()=>[C(B(e.content),1)]),_:2},1032,["icon","color","timestamp"])),64))]),_:1}),i(m,{class:"pl-40"},{default:t(()=>[(l(),v(f,null,_(c,(e,r)=>i(p,{key:r,icon:e.icon,color:e.color,timestamp:e.timestamp,placement:"bottom"},{default:t(()=>[T]),_:2},1032,["icon","color","timestamp"])),64))]),_:1})])]),_:1})}}});const X=q(F,[["__scopeId","data-v-54fd6142"]]);export{X as default};

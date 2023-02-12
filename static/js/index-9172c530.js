import{R as x,g as _}from"./index-4b9f55af.js";import{c as k}from"./_commonjsHelpers-042e6b4d.js";import{g as C}from"./index-51e3811e.js";import{j as h,J as E,d as S,a0 as P,ad as R,z as B,k as y,l as D,g as J,x as Y,u as j}from"./runtime-core.esm-bundler-8baab2e8.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-411b24f7.js";import"./runtime-dom.esm-bundler-9e945af3.js";import"./vue-i18n.runtime.esm-bundler-3b734191.js";import"./hot-cc9aa47e.js";import"./index-9aff8a28.js";import"./multiTags-23feb6ec.js";import"./index-162fdfcd.js";import"./axios-a900fd7e.js";import"./vue-router-3ff981c7.js";import"./index-61e37875.js";var I={},z={get exports(){return I},set exports(M){I=M}};(function(M,v){(function(p,m){M.exports=m()})(k,function(){function p(e){var u=[];return e.AMapUI&&u.push(m(e.AMapUI)),e.Loca&&u.push(w(e.Loca)),Promise.all(u)}function m(e){return new Promise(function(u,t){var i=[];if(e.plugins)for(var a=0;a<e.plugins.length;a+=1)n.AMapUI.plugins.indexOf(e.plugins[a])==-1&&i.push(e.plugins[a]);if(s.AMapUI===o.failed)t("前次请求 AMapUI 失败");else if(s.AMapUI===o.notload){s.AMapUI=o.loading,n.AMapUI.version=e.version||n.AMapUI.version,a=n.AMapUI.version;var l=document.body||document.head,c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/ui/"+a+"/main.js",c.onerror=function(r){s.AMapUI=o.failed,t("请求 AMapUI 失败")},c.onload=function(){if(s.AMapUI=o.loaded,i.length)window.AMapUI.loadUI(i,function(){for(var r=0,g=i.length;r<g;r++){var U=i[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}for(u();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()});else for(u();d.AMapUI.length;)d.AMapUI.splice(0,1)[0]()},l.appendChild(c)}else s.AMapUI===o.loaded?e.version&&e.version!==n.AMapUI.version?t("不允许多个版本 AMapUI 混用"):i.length?window.AMapUI.loadUI(i,function(){for(var r=0,g=i.length;r<g;r++){var U=i[r].split("/").slice(-1)[0];window.AMapUI[U]=arguments[r]}u()}):u():e.version&&e.version!==n.AMapUI.version?t("不允许多个版本 AMapUI 混用"):d.AMapUI.push(function(r){r?t(r):i.length?window.AMapUI.loadUI(i,function(){for(var g=0,U=i.length;g<U;g++){var b=i[g].split("/").slice(-1)[0];window.AMapUI[b]=arguments[g]}u()}):u()})})}function w(e){return new Promise(function(u,t){if(s.Loca===o.failed)t("前次请求 Loca 失败");else if(s.Loca===o.notload){s.Loca=o.loading,n.Loca.version=e.version||n.Loca.version;var i=n.Loca.version,a=n.AMap.version.startsWith("2"),l=i.startsWith("2");if(a&&!l||!a&&l)t("JSAPI 与 Loca 版本不对应！！");else{a=n.key,l=document.body||document.head;var c=document.createElement("script");c.type="text/javascript",c.src="https://webapi.amap.com/loca?v="+i+"&key="+a,c.onerror=function(r){s.Loca=o.failed,t("请求 AMapUI 失败")},c.onload=function(){for(s.Loca=o.loaded,u();d.Loca.length;)d.Loca.splice(0,1)[0]()},l.appendChild(c)}}else s.Loca===o.loaded?e.version&&e.version!==n.Loca.version?t("不允许多个版本 Loca 混用"):u():e.version&&e.version!==n.Loca.version?t("不允许多个版本 Loca 混用"):d.Loca.push(function(r){r?t(r):t()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var o;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(o||(o={}));var n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},d={AMap:[],AMapUI:[],Loca:[]},A=[],f=function(e){typeof e=="function"&&(s.AMap===o.loaded?e(window.AMap):A.push(e))};return{load:function(e){return new Promise(function(u,t){if(s.AMap==o.failed)t("");else if(s.AMap==o.notload){var i=e.key,a=e.version,l=e.plugins;i?(window.AMap&&location.host!=="lbs.amap.com"&&t("禁止多种API加载方式混用"),n.key=i,n.AMap.version=a||n.AMap.version,n.AMap.plugins=l||n.AMap.plugins,s.AMap=o.loading,a=document.body||document.head,window.___onAPILoaded=function(r){if(delete window.___onAPILoaded,r)s.AMap=o.failed,t(r);else for(s.AMap=o.loaded,p(e).then(function(){u(window.AMap)}).catch(t);A.length;)A.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+n.AMap.version+"&key="+i+"&plugin="+n.AMap.plugins.join(","),l.onerror=function(r){s.AMap=o.failed,t(r)},a.appendChild(l)):t("请填写key")}else if(s.AMap==o.loaded)if(e.key&&e.key!==n.key)t("多个不一致的 key");else if(e.version&&e.version!==n.AMap.version)t("不允许多个版本 JSAPI 混用");else{if(i=[],e.plugins)for(a=0;a<e.plugins.length;a+=1)n.AMap.plugins.indexOf(e.plugins[a])==-1&&i.push(e.plugins[a]);i.length?window.AMap.plugin(i,function(){p(e).then(function(){u(window.AMap)}).catch(t)}):p(e).then(function(){u(window.AMap)}).catch(t)}else if(e.key&&e.key!==n.key)t("多个不一致的 key");else if(e.version&&e.version!==n.AMap.version)t("不允许多个版本 JSAPI 混用");else{var c=[];if(e.plugins)for(a=0;a<e.plugins.length;a+=1)n.AMap.plugins.indexOf(e.plugins[a])==-1&&c.push(e.plugins[a]);f(function(){c.length?window.AMap.plugin(c,function(){p(e).then(function(){u(window.AMap)}).catch(t)}):p(e).then(function(){u(window.AMap)}).catch(t)})}})},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,n={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},s={AMap:o.notload,AMapUI:o.notload,Loca:o.notload},d={AMap:[],AMapUI:[],Loca:[]}}}})})(z);const F=I,W=M=>C.request("get","/getMapInfo",{params:M}),N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAUCAMAAADSpG8HAAAC91BMVEUAAAAAJQskNR8JNS8AAAAHwgAu2CIAZQIDGgccFA8aTDwVvRAtwyUNqQgcZhgsXSUQQQ0BJQcHMwIpJw4BAQCM63sRRDct5xwHswAMOzAv4SAIxAAr3xofuhZWzUwYRTMqnDEvtyRDvjgKMSwBjQCWkJRdxFNnm2A0cy8KLSgknR0hQTEydjNDYzFhjFpocEsXig9wimhcTi45hy0kTy1Vg0hQLx0EPABCSkAYSxwATQc0UjIFCwOU/4mt/6YP7wXI/8Gh/5eK/4CG/3tJfla5/7K3/7Ck/5tL/0Yq/h0ANxDi/9DG/77D/7vA/7jG/7Cz/6yb/5Gd/4WY/4GF/oFrl3Zy9WtTh2Fj319F2kklakMgbjgOSDAx/yoALBgc8RECIQ7N/8bL/7Sx/6m6/6Oq/6Gm/6Cb/5aX/410oYRuln+U/3tklXNZjGtY019Ou15y/1RV/0YlZUUs1j1E/jk8/ysiYisWZiMFUh8CsR0i6hkj/xUd2RMa+hAAPgwK+gDa/8nT/8bW/7/a/73O/7m9/7W//6qLrZyt/5qk/5GY/JB/rI2k/4eK8YeO/3aI/3N6/21w/2Jf/2Jt72Jj5GJNemJLhmBEgVtOxlhR1lZAgVE2aFEzdE0ye0w/5Uk+nkdGzUY1TUVG4EQ+u0ElXzsicTkhZjgsijYsrDI37i0kgiwhSCwAoxsTnBsY0hALgBAAEQgN4gcHowUS/wT/////8PeWt8HI47WlxK/K/6aUuqGm/52f7Zyx/5qt/5XCupS9/5C+pI+U9456m4uI9oSS/4CE/4B+9nqa/3hkjHBVgWxUxWGA/2BNtl5WvFtS4Vll/1hGpFhY2ldd/FRa71Ne+lI6eFJAXlFq/05Ks01U2ExS9EcxTUAldz481zssRDszyDcfWTc9+jAXyzAx2S4PYSwIUiscOSkitygVMSgLwyYCvCEfpiEDyCAAvR4i3xwe1xwQaxoj9xgQShcKaBYKQBYMWBQU7BAMbA8X8A0J1wsFdgsAAABw6AJ/AAAAPXRSTlMAZ1XZBPPiqUM7/v7d04B2aFdSSRb68uzp5+fn5N/e3drT0MzKxsW+vr27tLOysLCrqqmno6CQj4aEd3Ig/fi2ogAAAkNJREFUKM9ioACwmIMIFCEBYz1DU34ODkFLHUYIEORWUpPjkeU1EICp0T1xYGfnpOLKNWveva2sfP3qcfG8eZGXI0J6LhR6+qtCzBPef2by5IiI4yEhR3p7D3U5uqfYrir/5rUh4VZH2MqwLRpgRUbbN62etWR+c1ODNxA0NDa22JbHxdXVbfBysusKu10rBFKkWPD1evjDm82+vr4+Pg4ODokOHeeyor28vP68CT6WHlLKDlLEFrv6pMuyvCY3N9dWPz+gukT/xZk7plXUJfwo9PCYNJEXrKjqTqhLdESLXXJAAEidb2LSglntu7ozD5fVxsbbV0uDFMnULAx1WTrFPy011S4ZqMzVISlyblZOZnd7WY1nvH09K0gRQOLrwIraHN3d01LtgOr8/Bfdzc3NzclCUiS17j7Qukspgenpju670+zsXNsWRU+dPi38VHkVXBHb++c5LssW7LXNCHR0dAwMdHdLufd09pxr02d/9Pz0036zBEgRT2xCePiSxZ1OtrYZGba2Ts62+x48K4qKmhOzvsR+Y221CkiR1o2El1O5lh91dnZ2cnJydp4wsW9FTBFQVRx36aMS+83gcALMbNumz8tXrcgODgrqCQoKDs7O7ltbURETE/e7tOrJrz1hHCBFnAcLPAqvzJyRl3c6/+LZ/PwZM89HFr9Yu/7Lh+8bqydstYCkAv2k/gKPyPnyzJJcc8WYmZmVNbVNFDxWxpZc7RdVZ4KlFSZrPj5+YWAqs2ESgQqxW3EKMTFxArnEAgDLUd+tnLfEzAAAAABJRU5ErkJggg==",T={id:"mapview",ref:"mapview"},O=h({name:"Amap"}),Z=h({...O,setup(M){let v,p;const m=J(),w=E({loading:!x()}),o=()=>{p&&p.on("complete",()=>{w.loading=!1})};return S(()=>{if(!m)return;const{MapConfigure:n}=m.appContext.config.globalProperties.$config,{options:s}=n;F.load({key:n.amapKey,version:"2.0",plugins:["AMap.MarkerCluster"]}).then(d=>{p=new d.Map(m.refs.mapview,s),p.plugin(["AMap.ToolBar","AMap.MapType"],()=>{p.addControl(new d.ToolBar),p.addControl(new d.MapType({defaultType:0}))}),v=new d.MarkerCluster(p,[],{gridSize:80,maxZoom:14,renderMarker(A){const{marker:f,data:e}=A;if(Array.isArray(e)&&e[0]){const{driver:u,plateNumber:t,orientation:i}=e[0],a=`<img style="transform: scale(1) rotate(${360-Number(i)}deg);" src='${N}' />`;f.setContent(a),f.setLabel({direction:"bottom",offset:new d.Pixel(-4,0),content:`<div> ${t}(${u})</div>`}),f.setOffset(new d.Pixel(-18,-10)),f.on("click",({lnglat:l})=>{p.setZoom(13),p.setCenter(l)})}}}),W().then(({data:A})=>{const f=A.map(e=>({lnglat:[e.lng,e.lat],...e}));v&&v.setData(f)}).catch(A=>{}),o()}).catch(()=>{throw w.loading=!1,"地图加载失败，请重新加载"})}),P(()=>{p&&p.destroy()&&p.clearEvents("click")}),(n,s)=>{const d=R("loading");return B((y(),D("div",T,null,512)),[[d,w.loading]])}}});const q=L(Z,[["__scopeId","data-v-16de52f0"]]),K=_(q),Q=h({name:"Map"}),G=h({...Q,setup(M){return(v,p)=>(y(),Y(j(K)))}});const le=L(G,[["__scopeId","data-v-edaf0fec"]]);export{le as default};

import{j as t,c as m,T as l,d as i,p as h,s as _}from"./cva-BfbJScle.js";import{r as s}from"./index-B52nOzfP.js";const T="MODE_SELECT",u="sb-next-ui-mode",S=()=>localStorage==null?void 0:localStorage.getItem(u),x="THEME_SELECT",p="sb-next-ui-theme",M=()=>localStorage==null?void 0:localStorage.getItem(p),{useChannel:O}=__STORYBOOK_MODULE_PREVIEW_API__,D=(o,c)=>{const r=c.viewMode==="story",[a,n]=s.useState(M()),[d,E]=s.useState(S());return O({[x]:({name:e})=>n(e),[T]:e=>E(e)}),t.jsx("div",{className:m(r&&"flex h-dvh w-full items-center justify-center"),children:t.jsx(l,{themes:[i,h,_],theme:a,mode:d,children:t.jsx(o,{})})})},j={parameters:{docs:{source:{type:"dynamic"}}},decorators:[D]};export{j as default};

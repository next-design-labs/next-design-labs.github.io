import{j as s,a as i,t as m}from"./Typography-DP3NEyyk.js";import"./index-B52nOzfP.js";const u=e=>{const a={};return Object.keys(e).forEach(r=>{(typeof e[r]!="object"||e[r]===null||Array.isArray(e[r]))&&(a[r]=e[r])}),a},x=e=>{const a={};return Object.entries(e).forEach(([r,o])=>{const n=r.replace(/([a-z])([A-Z])/g,"$1-$2").split("-")[0];a[n]||(a[n]=[]),a[n].push({name:r,value:o})}),a},h={title:"Theme/Colors",decorators:[e=>s.jsx("div",{className:"flex justify-center m-15",children:s.jsx(e,{})})],parameters:{centerStory:!1}},t={render:()=>{const e=u(m),a=x(e);return s.jsx("div",{className:"space-y-10 max-w-[1024px]",children:Object.entries(a).map(([r,o])=>s.jsxs("div",{className:"border-t border-slate-300 pt-4",children:[s.jsx(i,{variant:"title4",className:"mb-4",children:r}),s.jsx("div",{className:"flex flex-wrap gap-4",children:o.map(({name:n,value:l})=>s.jsxs("div",{className:"flex items-center gap-4 w-70 mb-4",children:[s.jsx("div",{className:"w-20 h-18 border border-slate-300 rounded-round",style:{backgroundColor:l}}),s.jsxs("div",{className:"flex-1",children:[s.jsx(i,{variant:"captionLabel",children:n}),s.jsx(i,{variant:"caption1",className:"text-slate-500 ",children:l})]})]},n))})]},r))})}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const rootLevelTokens = filterTokens(themeVars);
    const tokenGroups = groupTokens(rootLevelTokens);
    return <div className="space-y-10 max-w-[1024px]">
        {Object.entries(tokenGroups).map(([prefix, tokens]) => <div key={prefix} className="border-t border-slate-300 pt-4">
            <NuiTypography variant="title4" className="mb-4">
              {prefix}
            </NuiTypography>
            <div className="flex flex-wrap gap-4">
              {tokens.map(({
            name,
            value
          }) => <div key={name} className="flex items-center gap-4 w-70 mb-4">
                  <div className="w-20 h-18 border border-slate-300 rounded-round" style={{
              backgroundColor: value
            }} />
                  <div className="flex-1">
                    <NuiTypography variant="captionLabel">{name}</NuiTypography>
                    <NuiTypography variant="caption1" className="text-slate-500 ">
                      {value}
                    </NuiTypography>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const N=["Tokens"];export{t as Tokens,N as __namedExportsOrder,h as default};

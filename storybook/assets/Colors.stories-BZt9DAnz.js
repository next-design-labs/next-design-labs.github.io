import{j as e,u as m,a as t}from"./Typography-DP3NEyyk.js";import"./index-B52nOzfP.js";const u={title:"Theme/Colors",decorators:[a=>e.jsx("div",{className:"flex justify-center m-15",children:e.jsx(a,{})})],parameters:{centerStory:!1}},r={render:()=>{const{theme:a}=m();return e.jsx("div",{className:"space-y-10 max-w-[10240px]",children:Object.entries((a==null?void 0:a.colors)??{}).map(([s,d])=>e.jsxs("div",{className:"border-t border-slate-300 pt-4",children:[e.jsx(t,{variant:"title4",className:"mb-2",children:s}),e.jsx("div",{className:"flex flex-wrap gap-4",children:Object.entries(d).map(([n,o])=>e.jsxs("div",{className:"w-20 h-20 mb-10",children:[e.jsx("div",{className:"w-full h-18 border border-slate-300 rounded-round",style:{backgroundColor:o}}),e.jsx(t,{variant:"caption1",className:"mt-2",children:`${s}-${n}`}),e.jsx(t,{variant:"caption1",className:"text-slate-400 text-xs",children:o})]},`${s}-${n}`))})]},s))})}};var l,c,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const {
      theme
    } = useTheme();
    return <div className="space-y-10 max-w-[10240px]">
        {Object.entries(theme?.colors ?? {}).map(([colorName, colorShades]) => <div key={colorName} className="border-t border-slate-300 pt-4">
            <NuiTypography variant="title4" className="mb-2">
              {colorName}
            </NuiTypography>
            <div className="flex flex-wrap gap-4">
              {Object.entries(colorShades).map(([shade, value]) => <div key={\`\${colorName}-\${shade}\`} className="w-20 h-20 mb-10">
                  <div className="w-full h-18 border border-slate-300 rounded-round" style={{
              backgroundColor: value
            }} />
                  <NuiTypography variant="caption1" className="mt-2">{\`\${colorName}-\${shade}\`}</NuiTypography>
                  <NuiTypography variant="caption1" className="text-slate-400 text-xs">
                    {value}
                  </NuiTypography>
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["Palette"];export{r as Palette,h as __namedExportsOrder,u as default};

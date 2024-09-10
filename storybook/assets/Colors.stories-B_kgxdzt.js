import{j as e,u as m,a as t}from"./Typography-Ca6bLljL.js";import"./index-B52nOzfP.js";const h={title:"Foundation/Colors",decorators:[a=>e.jsx("div",{className:"flex justify-center my-10",children:e.jsx(a,{})})],parameters:{centerStory:!1}},r={render:()=>{const{theme:a}=m();return e.jsx("div",{className:"space-y-20",children:Object.entries((a==null?void 0:a.colors)??{}).map(([s,d])=>e.jsxs("div",{className:"border-t border-slate-300 pt-4",children:[e.jsx(t,{variant:"title4",className:"mb-2",children:s}),e.jsx("div",{className:"grid grid-cols-11 gap-2",children:Object.entries(d).map(([n,o])=>e.jsxs("div",{className:"w-20 h-20",children:[e.jsx("div",{className:"w-full h-18 border border-slate-300 rounded-round",style:{backgroundColor:o}}),e.jsx(t,{variant:"caption1",className:"mt-2",children:`${s}-${n}`}),e.jsx(t,{variant:"caption1",className:"text-slate-400 text-xs",children:o})]},`${s}-${n}`))})]},s))})}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const {
      theme
    } = useTheme();
    return <div className="space-y-20">
        {Object.entries(theme?.colors ?? {}).map(([colorName, colorShades]) => <div key={colorName} className="border-t border-slate-300 pt-4">
            <NuiTypography variant="title4" className="mb-2">
              {colorName}
            </NuiTypography>
            <div className="grid grid-cols-11 gap-2">
              {Object.entries(colorShades).map(([shade, value]) => <div key={\`\${colorName}-\${shade}\`} className="w-20 h-20">
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
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["Palette"];export{r as Palette,N as __namedExportsOrder,h as default};

import{a as l,j as a}from"./Typography-DP3NEyyk.js";import"./index-B52nOzfP.js";const m={title:"Theme/Typography",component:l,decorators:[t=>a.jsx("div",{className:"flex-col space-y-4",children:a.jsx(t,{})})]},p=[{label:"display",variant:"display"},{label:"title1",variant:"title1"},{label:"title2",variant:"title2"},{label:"title3",variant:"title3"},{label:"title4",variant:"title4"},{label:"body",variant:"body"},{label:"label",variant:"label",className:"block"},{label:"captionLabel",variant:"captionLabel"},{label:"caption1",variant:"caption1"},{label:"caption2",variant:"caption2"}],e={render:()=>a.jsx(a.Fragment,{children:p.map(({label:t,variant:r,className:o})=>a.jsxs("div",{children:[a.jsx(l,{variant:"label",children:t}),a.jsx(l,{variant:r,className:o,children:"Welcome to NEXT UI"})]},r))})};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <>
      {variants.map(({
      label,
      variant,
      className
    }) => <div key={variant}>
          <NuiTypography variant="label">{label}</NuiTypography>
          <NuiTypography variant={(variant as NuiTypographyProps["variant"])} className={className}>
            Welcome to NEXT UI
          </NuiTypography>
        </div>)}
    </>
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const v=["Variants"];export{e as Variants,v as __namedExportsOrder,m as default};

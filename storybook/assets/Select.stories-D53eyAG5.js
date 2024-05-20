import{S as o,b as l,j as e}from"./SelectOption-fj5-K8gK.js";import"./index-CDs2tPxN.js";import"./extends-CCbyfPlC.js";import"./index-B-yFm4aN.js";const S=a=>e.jsx("div",{className:"w-[300px]",children:a()}),O={title:"Components/Select",component:o,subcomponents:{SelectOption:l},decorators:[S]},t={render:a=>e.jsxs(o,{defaultValue:10,...a,children:[e.jsx(l,{value:10,children:"Documentation"}),e.jsx(l,{value:20,children:"Components"}),e.jsx(l,{value:30,children:"Features"})]})},g=[{value:"ar",label:"Argentina",flag:"🇦🇷"},{value:"bg",label:"Belgium",flag:"🇧🇪"},{value:"pt",label:"Portugal",flag:"🇵🇹"},{value:"pl",label:"Poland",flag:"🇵🇱"},{value:"sp",label:"Spain",flag:"🇪🇸"},{value:"us",label:"United States",flag:"🇺🇸"}],n={render:()=>e.jsx(o,{defaultValue:10,placeholder:"Select countries",children:g.map(({value:a,label:r,flag:m})=>e.jsx(l,{value:a,label:r,children:`${m} ${r}`},a))})};var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: typeof meta) => <Select defaultValue={10} {...args}>
      <SelectOption value={10}>Documentation</SelectOption>
      <SelectOption value={20}>Components</SelectOption>
      <SelectOption value={30}>Features</SelectOption>
    </Select>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Select defaultValue={10} placeholder="Select countries">
      {options.map(({
      value,
      label,
      flag
    }) => <SelectOption key={value} value={value} label={label}>
          {\`\${flag} \${label}\`}
        </SelectOption>)}
    </Select>
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const h=["Main","Other"];export{t as Main,n as Other,h as __namedExportsOrder,O as default};

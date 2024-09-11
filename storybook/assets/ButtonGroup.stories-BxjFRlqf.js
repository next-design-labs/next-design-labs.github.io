import{e as o,j as n,b as t}from"./Typography-DS2q3r84.js";import{r as d}from"./index-B52nOzfP.js";import{R as F,a as U,c as L,b as D,d as V,e as T,f as b,g as C}from"./index-Ky4_bbkc.js";const k={title:"Components/Button Group",component:o,decorators:[e=>n.jsx("div",{className:"flex flex-col gap-4",children:n.jsx(e,{})})]},l={render:e=>n.jsxs(o,{value:"download",...e,children:[n.jsx(t,{value:"email",leftIcon:n.jsx(F,{}),children:"Email"}),n.jsx(t,{value:"download",leftIcon:n.jsx(U,{}),children:"Download"}),n.jsx(t,{value:"settings",leftIcon:n.jsx(L,{}),children:"Settings"}),n.jsx(t,{value:"support",leftIcon:n.jsx(D,{}),children:"Share"})]})},r={parameters:{docs:{description:{story:"Use the `size`, `color` and `radius` props to control the visual style of the button group."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(o,{variant:"solid",color:"primary",size:"sm",value:"option2",children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]}),n.jsxs(o,{variant:"outline",color:"primary",size:"md",value:"option2",children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]}),n.jsxs(o,{variant:"outline",color:"secondary",size:"lg",radius:"lg",value:"option2",children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]})]})},a={parameters:{docs:{description:{story:"Use the `value` and `onChange` props to control the selected state of the button group."}}},render:()=>{const[e,M]=d.useState("option1"),[u,z]=d.useState(["option1","option2"]),A=c=>{const i=c.currentTarget.value;M(i)},w=c=>{const i=c.currentTarget.value,E=u.includes(i)?u.filter(_=>_!==i):u.concat([i]);z(E)};return n.jsxs(n.Fragment,{children:[n.jsxs(o,{value:e,onChange:A,children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]}),n.jsxs(o,{color:"primary",variant:"outline",value:u,onChange:w,children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]})]})}},s={parameters:{docs:{description:{story:"Use the `vertical` prop to control the orientation of the button group."}}},decorators:[e=>n.jsx("div",{className:"flex gap-4",children:n.jsx(e,{})})],render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(o,{value:"option2",vertical:!0,iconOnly:!0,children:[n.jsx(t,{value:"option1",leftIcon:n.jsx(V,{})}),n.jsx(t,{value:"option2",leftIcon:n.jsx(T,{})}),n.jsx(t,{value:"option3",leftIcon:n.jsx(b,{})}),n.jsx(t,{value:"option4",leftIcon:n.jsx(C,{})})]}),n.jsxs(o,{value:"option2",vertical:!0,children:[n.jsx(t,{value:"option1",children:"Option 1"}),n.jsx(t,{value:"option2",children:"Option 2"}),n.jsx(t,{value:"option3",children:"Option 3"}),n.jsx(t,{value:"option4",children:"Option 4"})]})]})},p={parameters:{docs:{description:{story:"You can customize the `Button Group` component by passing custom classes to the component."}}},decorators:[e=>n.jsx("div",{className:"flex gap-4",children:n.jsx(e,{})})],render:()=>n.jsx(n.Fragment,{children:n.jsxs(o,{className:"rounded border-1 border-divider bg-atmo1 p-.5",value:"option2",color:"secondary",size:"lg",spacing:1,iconOnly:!0,children:[n.jsx(t,{value:"option1",leftIcon:n.jsx(V,{})}),n.jsx(t,{value:"option2",leftIcon:n.jsx(T,{})}),n.jsx(t,{value:"option3",leftIcon:n.jsx(b,{})}),n.jsx(t,{value:"option4",leftIcon:n.jsx(C,{})})]})})};var v,x,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <NuiButtonGroup value="download" {...args}>
        <NuiButton value="email" leftIcon={<RxEnvelopeClosed />}>
          Email
        </NuiButton>
        <NuiButton value="download" leftIcon={<RxDownload />}>
          Download
        </NuiButton>
        <NuiButton value="settings" leftIcon={<RxGear />}>
          Settings
        </NuiButton>
        <NuiButton value="support" leftIcon={<RxShare1 />}>
          Share
        </NuiButton>
      </NuiButtonGroup>;
  }
}`,...(N=(x=l.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var B,h,m;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`size\`, \`color\` and \`radius\` props to control the visual style of the button group."
      }
    }
  },
  render: () => {
    return <>
        <NuiButtonGroup variant="solid" color="primary" size="sm" value="option2">
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
        <NuiButtonGroup variant="outline" color="primary" size="md" value="option2">
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
        <NuiButtonGroup variant="outline" color="secondary" size="lg" radius="lg" value="option2">
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
      </>;
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var g,j,O;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`value\` and \`onChange\` props to control the selected state of the button group."
      }
    }
  },
  render: () => {
    const [singleValue, setSingleValue] = useState("option1");
    const [multipleValue, setMultipleValue] = useState(["option1", "option2"]);
    const handleSingle = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const val = evt.currentTarget.value;
      setSingleValue(val);
    };
    const handleMultiple = (evt: React.MouseEvent<HTMLButtonElement>) => {
      const val = evt.currentTarget.value;
      const newValue = multipleValue.includes(val) ? multipleValue.filter(f => f !== val) : multipleValue.concat([val]);
      setMultipleValue(newValue);
    };
    return <>
        <NuiButtonGroup value={singleValue} onChange={handleSingle}>
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
        <NuiButtonGroup color="primary" variant="outline" value={multipleValue} onChange={handleMultiple}>
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
      </>;
  }
}`,...(O=(j=a.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var f,y,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`vertical\` prop to control the orientation of the button group."
      }
    }
  },
  decorators: [(Story: StoryFn) => <div className="flex gap-4">
        <Story />
      </div>],
  render: () => {
    return <>
        <NuiButtonGroup value="option2" vertical iconOnly>
          <NuiButton value="option1" leftIcon={<RxTextAlignLeft />} />
          <NuiButton value="option2" leftIcon={<RxTextAlignCenter />} />
          <NuiButton value="option3" leftIcon={<RxTextAlignRight />} />
          <NuiButton value="option4" leftIcon={<RxTextAlignJustify />} />
        </NuiButtonGroup>
        <NuiButtonGroup value="option2" vertical>
          <NuiButton value="option1">Option 1</NuiButton>
          <NuiButton value="option2">Option 2</NuiButton>
          <NuiButton value="option3">Option 3</NuiButton>
          <NuiButton value="option4">Option 4</NuiButton>
        </NuiButtonGroup>
      </>;
  }
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var R,G,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can customize the \`Button Group\` component by passing custom classes to the component."
      }
    }
  },
  decorators: [(Story: StoryFn) => <div className="flex gap-4">
        <Story />
      </div>],
  render: () => <>
      <NuiButtonGroup className="rounded border-1 border-divider bg-atmo1 p-.5" value="option2" color="secondary" size="lg" spacing={1} iconOnly>
        <NuiButton value="option1" leftIcon={<RxTextAlignLeft />} />
        <NuiButton value="option2" leftIcon={<RxTextAlignCenter />} />
        <NuiButton value="option3" leftIcon={<RxTextAlignRight />} />
        <NuiButton value="option4" leftIcon={<RxTextAlignJustify />} />
      </NuiButtonGroup>
    </>
}`,...(I=(G=p.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const q=["Main","Variants","Single_and_Multi_Selection","Vertical","Custom"];export{p as Custom,l as Main,a as Single_and_Multi_Selection,r as Variants,s as Vertical,q as __namedExportsOrder,k as default};

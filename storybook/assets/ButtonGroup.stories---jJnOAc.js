import{a as o,j as t,B as n}from"./SelectOption-Ba42HNoh.js";import{r as d}from"./index-CDs2tPxN.js";import{R as F,a as U,c as L,b as D,d as T,e as b,f as C,g as M}from"./index-CuB4b2vM.js";import"./extends-CF3RwP-h.js";import"./index-B-yFm4aN.js";const K={title:"Components/Button Group",component:o,decorators:[e=>t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx(e,{})})]},r={render:e=>t.jsxs(o,{value:"download",...e,children:[t.jsx(n,{value:"email",leftIcon:t.jsx(F,{}),children:"Email"}),t.jsx(n,{value:"download",leftIcon:t.jsx(U,{}),children:"Download"}),t.jsx(n,{value:"settings",leftIcon:t.jsx(L,{}),children:"Settings"}),t.jsx(n,{value:"support",leftIcon:t.jsx(D,{}),children:"Share"})]})},i={parameters:{docs:{description:{story:"Use the `size`, `color` and `radius` props to control the visual style of the button group."}}},render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(o,{variant:"solid",color:"primary",size:"sm",value:"option2",children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]}),t.jsxs(o,{variant:"outline",color:"primary",size:"md",value:"option2",children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]}),t.jsxs(o,{variant:"outline",color:"secondary",size:"lg",radius:"lg",value:"option2",children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]})]})},u={parameters:{docs:{description:{story:"Use the `value` and `onChange` props to control the selected state of the button group."}}},render:()=>{const[e,z]=d.useState("option1"),[l,A]=d.useState(["option1","option2"]),w=c=>{const a=c.currentTarget.value;z(a)},E=c=>{const a=c.currentTarget.value,_=l.includes(a)?l.filter(N=>N!==a):l.concat([a]);A(_)};return t.jsxs(t.Fragment,{children:[t.jsxs(o,{value:e,onChange:w,children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]}),t.jsxs(o,{color:"primary",variant:"solid",value:l,onChange:E,children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]})]})}},s={parameters:{docs:{description:{story:"Use the `vertical` prop to control the orientation of the button group."}}},decorators:[e=>t.jsx("div",{className:"flex gap-4",children:t.jsx(e,{})})],render:()=>t.jsxs(t.Fragment,{children:[t.jsxs(o,{value:"option2",vertical:!0,iconOnly:!0,children:[t.jsx(n,{value:"option1",leftIcon:t.jsx(T,{})}),t.jsx(n,{value:"option2",leftIcon:t.jsx(b,{})}),t.jsx(n,{value:"option3",leftIcon:t.jsx(C,{})}),t.jsx(n,{value:"option4",leftIcon:t.jsx(M,{})})]}),t.jsxs(o,{value:"option2",vertical:!0,children:[t.jsx(n,{value:"option1",children:"Option 1"}),t.jsx(n,{value:"option2",children:"Option 2"}),t.jsx(n,{value:"option3",children:"Option 3"}),t.jsx(n,{value:"option4",children:"Option 4"})]})]})},p={parameters:{docs:{description:{story:"You can customize the `Button Group` component by passing custom classes to the component."}}},decorators:[e=>t.jsx("div",{className:"flex gap-4",children:t.jsx(e,{})})],render:()=>t.jsx(t.Fragment,{children:t.jsxs(o,{className:"rounded border-1 border-atmo4 bg-atmo1 p-.5",value:"option2",variant:"ghost",size:"lg",spacing:1,iconOnly:!0,children:[t.jsx(n,{value:"option1",leftIcon:t.jsx(T,{})}),t.jsx(n,{value:"option2",leftIcon:t.jsx(b,{})}),t.jsx(n,{value:"option3",leftIcon:t.jsx(C,{})}),t.jsx(n,{value:"option4",leftIcon:t.jsx(M,{})})]})})};var v,x,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    return <ButtonGroup value="download" {...args}>
        <Button value="email" leftIcon={<RxEnvelopeClosed />}>
          Email
        </Button>
        <Button value="download" leftIcon={<RxDownload />}>
          Download
        </Button>
        <Button value="settings" leftIcon={<RxGear />}>
          Settings
        </Button>
        <Button value="support" leftIcon={<RxShare1 />}>
          Share
        </Button>
      </ButtonGroup>;
  }
}`,...(B=(x=r.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var m,h,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`size\`, \`color\` and \`radius\` props to control the visual style of the button group."
      }
    }
  },
  render: () => {
    return <>
        <ButtonGroup variant="solid" color="primary" size="sm" value="option2">
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
        <ButtonGroup variant="outline" color="primary" size="md" value="option2">
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
        <ButtonGroup variant="outline" color="secondary" size="lg" radius="lg" value="option2">
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
      </>;
  }
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,O,f;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <ButtonGroup value={singleValue} onChange={handleSingle}>
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
        <ButtonGroup color="primary" variant="solid" value={multipleValue} onChange={handleMultiple}>
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
      </>;
  }
}`,...(f=(O=u.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var y,S,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <ButtonGroup value="option2" vertical iconOnly>
          <Button value="option1" leftIcon={<RxTextAlignLeft />} />
          <Button value="option2" leftIcon={<RxTextAlignCenter />} />
          <Button value="option3" leftIcon={<RxTextAlignRight />} />
          <Button value="option4" leftIcon={<RxTextAlignJustify />} />
        </ButtonGroup>
        <ButtonGroup value="option2" vertical>
          <Button value="option1">Option 1</Button>
          <Button value="option2">Option 2</Button>
          <Button value="option3">Option 3</Button>
          <Button value="option4">Option 4</Button>
        </ButtonGroup>
      </>;
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var G,I,V;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
      <ButtonGroup className="rounded border-1 border-atmo4 bg-atmo1 p-.5" value="option2" variant="ghost" size="lg" spacing={1} iconOnly>
        <Button value="option1" leftIcon={<RxTextAlignLeft />} />
        <Button value="option2" leftIcon={<RxTextAlignCenter />} />
        <Button value="option3" leftIcon={<RxTextAlignRight />} />
        <Button value="option4" leftIcon={<RxTextAlignJustify />} />
      </ButtonGroup>
    </>
}`,...(V=(I=p.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};const P=["Main","Variants","Single_and_Multi_Selection","Vertical","Custom"];export{p as Custom,r as Main,u as Single_and_Multi_Selection,i as Variants,s as Vertical,P as __namedExportsOrder,K as default};

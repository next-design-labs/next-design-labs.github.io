import{B as t,j as n,I as G}from"./SelectOption-Ba42HNoh.js";import{R as k,a as W,b as V}from"./index-CuB4b2vM.js";import"./index-CDs2tPxN.js";import"./extends-CF3RwP-h.js";import"./index-B-yFm4aN.js";const K={title:"Components/Button",component:t,decorators:[e=>n.jsx(G.Provider,{value:{style:{verticalAlign:"middle"}},children:n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(e,{})})})]},o={render:e=>n.jsx(t,{...e,children:"Button"})},r={parameters:{docs:{description:{story:"Use the `variant` prop to change the visual style of the Button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{children:"Solid"}),n.jsx(t,{variant:"outline",children:"Outline"}),n.jsx(t,{variant:"ghost",children:"Ghost"}),n.jsx(t,{variant:"link",href:"/",children:"Link"})]})},s={parameters:{docs:{description:{story:"Use the `color` prop to change the color scheme of the Button."}}},decorators:[e=>n.jsx("div",{className:"grid grid-cols-5 gap-4",children:n.jsx(e,{})})],render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{children:"Primary"}),n.jsx(t,{color:"secondary",children:"Secondary"}),n.jsx(t,{color:"positive",children:"Positive"}),n.jsx(t,{color:"warning",children:"Warning"}),n.jsx(t,{color:"negative",children:"Negative"}),n.jsx(t,{variant:"outline",children:"Primary"}),n.jsx(t,{variant:"outline",color:"secondary",children:"Secondary"}),n.jsx(t,{variant:"outline",color:"positive",children:"Positive"}),n.jsx(t,{variant:"outline",color:"warning",children:"Warning"}),n.jsx(t,{variant:"outline",color:"negative",children:"Negative"})]})},a={parameters:{docs:{description:{story:"Use the `size` prop to change the size of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{size:"sm",children:"Small"}),n.jsx(t,{size:"md",children:"Medium"}),n.jsx(t,{variant:"outline",size:"lg",children:"Large"})]})},i={parameters:{docs:{description:{story:"Use the `radius` prop to change the border-radius of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{radius:"sm",children:"Small"}),n.jsx(t,{radius:"md",variant:"outline",children:"Medium"}),n.jsx(t,{radius:"lg",variant:"outline",children:"Large"})]})},c={parameters:{docs:{description:{story:"Pass the `isLoading` prop to show a loader inside the button. "}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{loading:!0}),n.jsx(t,{loading:!0,variant:"outline",color:"secondary",children:"Submitting"})]})},d={parameters:{docs:{description:{story:"You can add icons to the Button component passing the `leftIcon` and `rightIcon` props respectively."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{leftIcon:n.jsx(k,{}),children:"Email"}),n.jsx(t,{rightIcon:n.jsx(W,{}),variant:"outline",children:"Download"})]})},l={parameters:{docs:{description:{story:"You can also display a button without text by passing the `iconOnly` prop and the desired icon as children."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(t,{iconOnly:!0,size:"sm",variant:"outline",radius:"lg",children:n.jsx(k,{})}),n.jsx(t,{iconOnly:!0,children:n.jsx(W,{})}),n.jsx(t,{iconOnly:!0,size:"lg",variant:"outline",color:"negative",radius:"lg",children:n.jsx(V,{})})]})},u={parameters:{docs:{description:{story:"You can customize the `Button` component by passing custom classes to the component."}}},render:()=>n.jsx(n.Fragment,{children:n.jsx(t,{className:"bg-gradient-to-tr from-primary to-negative text-atmo1 shadow-lg",children:"Button"})})};var p,m,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Button {...args}>Button</Button>
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,B,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`variant\` prop to change the visual style of the Button."
      }
    }
  },
  render: () => <>
      <Button>Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link" href="/">
        Link
      </Button>
    </>
}`,...(v=(B=r.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var x,y,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`color\` prop to change the color scheme of the Button."
      }
    }
  },
  decorators: [(Story: StoryFn) => <div className="grid grid-cols-5 gap-4">
        <Story />
      </div>],
  render: () => <>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="positive">Positive</Button>
      <Button color="warning">Warning</Button>
      <Button color="negative">Negative</Button>
      <Button variant="outline">Primary</Button>
      <Button variant="outline" color="secondary">
        Secondary
      </Button>
      <Button variant="outline" color="positive">
        Positive
      </Button>
      <Button variant="outline" color="warning">
        Warning
      </Button>
      <Button variant="outline" color="negative">
        Negative
      </Button>
    </>
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,f,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`size\` prop to change the size of the button."
      }
    }
  },
  render: () => <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button variant="outline" size="lg">
        Large
      </Button>
    </>
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var z,w,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`radius\` prop to change the border-radius of the button."
      }
    }
  },
  render: () => <>
      <Button radius="sm">Small</Button>
      <Button radius="md" variant="outline">
        Medium
      </Button>
      <Button radius="lg" variant="outline">
        Large
      </Button>
    </>
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var O,R,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass the \`isLoading\` prop to show a loader inside the button. "
      }
    }
  },
  render: () => <>
      <Button loading />
      <Button loading variant="outline" color="secondary">
        Submitting
      </Button>
    </>
}`,...(P=(R=c.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var L,C,F;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can add icons to the Button component passing the \`leftIcon\` and \`rightIcon\` props respectively."
      }
    }
  },
  render: () => <>
      <Button leftIcon={<RxEnvelopeClosed />}>Email</Button>
      <Button rightIcon={<RxDownload />} variant="outline">
        Download
      </Button>
    </>
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var N,U,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can also display a button without text by passing the \`iconOnly\` prop and the desired icon as children."
      }
    }
  },
  render: () => <>
      <Button iconOnly size="sm" variant="outline" radius="lg">
        <RxEnvelopeClosed />
      </Button>
      <Button iconOnly>
        <RxDownload />
      </Button>
      <Button iconOnly size="lg" variant="outline" color="negative" radius="lg">
        <RxShare1 />
      </Button>
    </>
}`,...(E=(U=l.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var M,Y,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can customize the \`Button\` component by passing custom classes to the component."
      }
    }
  },
  render: () => <>
      <Button className="bg-gradient-to-tr from-primary to-negative text-atmo1 shadow-lg">
        Button
      </Button>
    </>
}`,...(D=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};const Q=["Main","Variants","Colors","Sizes","Radius","Loading","Icons","IconOnly","Custom"];export{s as Colors,u as Custom,l as IconOnly,d as Icons,c as Loading,o as Main,i as Radius,a as Sizes,r as Variants,Q as __namedExportsOrder,K as default};

import{b as e,j as n}from"./Typography-DS2q3r84.js";import"./index-B52nOzfP.js";import{I as V,R as k,a as G,b as W}from"./index-Ky4_bbkc.js";const H={title:"Components/Button",component:e,decorators:[t=>n.jsx(V.Provider,{value:{style:{verticalAlign:"middle"}},children:n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(t,{})})})]},o={render:t=>n.jsx(e,{...t,children:"Button"})},r={parameters:{docs:{description:{story:"Use the `variant` prop to change the visual style of the Button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{children:"Solid"}),n.jsx(e,{variant:"outline",children:"Outline"}),n.jsx(e,{variant:"ghost",children:"Ghost"}),n.jsx(e,{variant:"link",href:"/",children:"Link"})]})},s={parameters:{docs:{description:{story:"Use the `color` prop to change the color scheme of the Button."}}},decorators:[t=>n.jsx("div",{className:"grid grid-cols-5 gap-4",children:n.jsx(t,{})})],render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{children:"Primary"}),n.jsx(e,{color:"secondary",children:"Secondary"}),n.jsx(e,{color:"positive",children:"Positive"}),n.jsx(e,{color:"warning",children:"Warning"}),n.jsx(e,{color:"negative",children:"Negative"})]})},i={parameters:{docs:{description:{story:"Use the `size` prop to change the size of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{size:"sm",children:"Small"}),n.jsx(e,{size:"md",children:"Medium"}),n.jsx(e,{variant:"outline",size:"lg",children:"Large"})]})},a={parameters:{docs:{description:{story:"Use the `radius` prop to change the border-radius of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{radius:"sm",children:"Small"}),n.jsx(e,{radius:"md",variant:"outline",children:"Medium"}),n.jsx(e,{radius:"lg",variant:"outline",children:"Large"})]})},c={parameters:{docs:{description:{story:"Pass the `isLoading` prop to show a loader inside the button. "}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{loading:!0,radius:"sm"}),n.jsx(e,{loading:!0,variant:"outline",color:"secondary",children:"Submitting"})]})},u={parameters:{docs:{description:{story:"You can add icons to the Button component passing the `leftIcon` and `rightIcon` props respectively."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{leftIcon:n.jsx(k,{}),children:"Email"}),n.jsx(e,{rightIcon:n.jsx(G,{}),variant:"outline",children:"Download"})]})},d={parameters:{docs:{description:{story:"You can also display a button without text by passing the `iconOnly` prop and the desired icon as children."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(e,{iconOnly:!0,size:"sm",variant:"outline",radius:"lg",children:n.jsx(k,{})}),n.jsx(e,{iconOnly:!0,children:n.jsx(G,{})}),n.jsx(e,{iconOnly:!0,size:"lg",variant:"outline",color:"negative",children:n.jsx(W,{})})]})},l={parameters:{docs:{description:{story:"You can customize the `Button` component by passing custom classes to the component."}}},render:()=>n.jsx(n.Fragment,{children:n.jsx(e,{className:"bg-gradient-to-tr from-primary to-error text-white",radius:"none",children:"Custom Button"})})};var p,m,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <NuiButton {...args}>Button</NuiButton>
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,B,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`variant\` prop to change the visual style of the Button."
      }
    }
  },
  render: () => <>
      <NuiButton>Solid</NuiButton>
      <NuiButton variant="outline">Outline</NuiButton>
      <NuiButton variant="ghost">Ghost</NuiButton>
      <NuiButton variant="link" href="/">
        Link
      </NuiButton>
    </>
}`,...(x=(B=r.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var N,y,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      <NuiButton>Primary</NuiButton>
      <NuiButton color="secondary">Secondary</NuiButton>
      <NuiButton color="positive">Positive</NuiButton>
      <NuiButton color="warning">Warning</NuiButton>
      <NuiButton color="negative">Negative</NuiButton>
    </>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,S,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`size\` prop to change the size of the button."
      }
    }
  },
  render: () => <>
      <NuiButton size="sm">Small</NuiButton>
      <NuiButton size="md">Medium</NuiButton>
      <NuiButton variant="outline" size="lg">
        Large
      </NuiButton>
    </>
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var f,z,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Use the \`radius\` prop to change the border-radius of the button."
      }
    }
  },
  render: () => <>
      <NuiButton radius="sm">Small</NuiButton>
      <NuiButton radius="md" variant="outline">
        Medium
      </NuiButton>
      <NuiButton radius="lg" variant="outline">
        Large
      </NuiButton>
    </>
}`,...(I=(z=a.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var w,O,R;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass the \`isLoading\` prop to show a loader inside the button. "
      }
    }
  },
  render: () => <>
      <NuiButton loading radius="sm" />
      <NuiButton loading variant="outline" color="secondary">
        Submitting
      </NuiButton>
    </>
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var C,L,F;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can add icons to the Button component passing the \`leftIcon\` and \`rightIcon\` props respectively."
      }
    }
  },
  render: () => <>
      <NuiButton leftIcon={<RxEnvelopeClosed />}>Email</NuiButton>
      <NuiButton rightIcon={<RxDownload />} variant="outline">
        Download
      </NuiButton>
    </>
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var U,E,P;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can also display a button without text by passing the \`iconOnly\` prop and the desired icon as children."
      }
    }
  },
  render: () => <>
      <NuiButton iconOnly size="sm" variant="outline" radius="lg">
        <RxEnvelopeClosed />
      </NuiButton>
      <NuiButton iconOnly>
        <RxDownload />
      </NuiButton>
      <NuiButton iconOnly size="lg" variant="outline" color="negative">
        <RxShare1 />
      </NuiButton>
    </>
}`,...(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var M,Y,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can customize the \`Button\` component by passing custom classes to the component."
      }
    }
  },
  render: () => <>
      <NuiButton className="bg-gradient-to-tr from-primary to-error text-white" radius="none">
        Custom Button
      </NuiButton>
    </>
}`,...(D=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};const J=["Main","Variants","Colors","Sizes","Radius","Loading","Icons","IconOnly","Custom"];export{s as Colors,l as Custom,d as IconOnly,u as Icons,c as Loading,o as Main,a as Radius,i as Sizes,r as Variants,J as __namedExportsOrder,H as default};

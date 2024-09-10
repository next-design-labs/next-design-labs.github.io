import{b as o,j as e}from"./Typography-Ca6bLljL.js";import{R as s}from"./index-B52nOzfP.js";var X={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=s.createContext&&s.createContext(X),rt=["attr","size","title"];function ot(t,n){if(t==null)return{};var r=it(t,n),i,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)i=c[a],!(n.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function it(t,n){if(t==null)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(n.indexOf(i)>=0)continue;r[i]=t[i]}return r}function x(){return x=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},x.apply(this,arguments)}function b(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,i)}return r}function B(t){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?b(Object(r),!0).forEach(function(i){at(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function at(t,n,r){return n=st(n),n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function st(t){var n=ct(t,"string");return typeof n=="symbol"?n:n+""}function ct(t,n){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,n||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function $(t){return t&&t.map((n,r)=>s.createElement(n.tag,B({key:r},n.attr),$(n.child)))}function j(t){return n=>s.createElement(ut,x({attr:B({},t.attr)},n),$(t.child))}function ut(t){var n=r=>{var{attr:i,size:a,title:c}=t,nt=ot(t,rt),C=a||r.size||"1em",u;return r.className&&(u=r.className),t.className&&(u=(u?u+" ":"")+t.className),s.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,nt,{className:u,style:B(B({color:t.color||r.color},r.style),t.style),height:C,width:C,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),t.children)};return N!==void 0?s.createElement(N.Consumer,null,r=>n(r)):n(X)}function tt(t){return j({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z",fill:"currentColor"},child:[]}]})(t)}function et(t){return j({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z",fill:"currentColor"},child:[]}]})(t)}function lt(t){return j({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",fill:"currentColor"},child:[]}]})(t)}const mt={title:"Components/Button",component:o,decorators:[t=>e.jsx(N.Provider,{value:{style:{verticalAlign:"middle"}},children:e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(t,{})})})]},l={render:t=>e.jsx(o,{...t,children:"Button"})},d={parameters:{docs:{description:{story:"Use the `variant` prop to change the visual style of the Button."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Solid"}),e.jsx(o,{variant:"outline",children:"Outline"}),e.jsx(o,{variant:"ghost",children:"Ghost"}),e.jsx(o,{variant:"link",href:"/",children:"Link"})]})},p={parameters:{docs:{description:{story:"Use the `color` prop to change the color scheme of the Button."}}},decorators:[t=>e.jsx("div",{className:"grid grid-cols-5 gap-4",children:e.jsx(t,{})})],render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Primary"}),e.jsx(o,{color:"secondary",children:"Secondary"}),e.jsx(o,{color:"positive",children:"Positive"}),e.jsx(o,{color:"warning",children:"Warning"}),e.jsx(o,{color:"negative",children:"Negative"}),e.jsx(o,{variant:"outline",children:"Primary"}),e.jsx(o,{variant:"outline",color:"secondary",children:"Secondary"}),e.jsx(o,{variant:"outline",color:"positive",children:"Positive"}),e.jsx(o,{variant:"outline",color:"warning",children:"Warning"}),e.jsx(o,{variant:"outline",color:"negative",children:"Negative"})]})},m={parameters:{docs:{description:{story:"Use the `size` prop to change the size of the button."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"sm",children:"Small"}),e.jsx(o,{size:"md",children:"Medium"}),e.jsx(o,{variant:"outline",size:"lg",children:"Large"})]})},h={parameters:{docs:{description:{story:"Use the `radius` prop to change the border-radius of the button."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{radius:"sm",children:"Small"}),e.jsx(o,{radius:"md",variant:"outline",children:"Medium"}),e.jsx(o,{radius:"lg",variant:"outline",children:"Large"})]})},g={parameters:{docs:{description:{story:"Pass the `isLoading` prop to show a loader inside the button. "}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{loading:!0}),e.jsx(o,{loading:!0,variant:"outline",color:"secondary",children:"Submitting"})]})},v={parameters:{docs:{description:{story:"You can add icons to the Button component passing the `leftIcon` and `rightIcon` props respectively."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{leftIcon:e.jsx(et,{}),children:"Email"}),e.jsx(o,{rightIcon:e.jsx(tt,{}),variant:"outline",children:"Download"})]})},f={parameters:{docs:{description:{story:"You can also display a button without text by passing the `iconOnly` prop and the desired icon as children."}}},render:()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{iconOnly:!0,size:"sm",variant:"outline",radius:"lg",children:e.jsx(et,{})}),e.jsx(o,{iconOnly:!0,children:e.jsx(tt,{})}),e.jsx(o,{iconOnly:!0,size:"lg",variant:"outline",color:"negative",radius:"lg",children:e.jsx(lt,{})})]})},y={parameters:{docs:{description:{story:"You can customize the `Button` component by passing custom classes to the component."}}},render:()=>e.jsx(e.Fragment,{children:e.jsx(o,{className:"bg-gradient-to-tr from-primary to-negative text-atmo1 shadow-lg",children:"Button"})})};var O,w,S;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <NuiButton {...args}>Button</NuiButton>
}`,...(S=(w=l.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var P,L,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var R,E,I;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      <NuiButton variant="outline">Primary</NuiButton>
      <NuiButton variant="outline" color="secondary">
        Secondary
      </NuiButton>
      <NuiButton variant="outline" color="positive">
        Positive
      </NuiButton>
      <NuiButton variant="outline" color="warning">
        Warning
      </NuiButton>
      <NuiButton variant="outline" color="negative">
        Negative
      </NuiButton>
    </>
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var M,V,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(V=m.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var _,F,Z;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(Z=(F=h.parameters)==null?void 0:F.docs)==null?void 0:Z.source}}};var U,W,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass the \`isLoading\` prop to show a loader inside the button. "
      }
    }
  },
  render: () => <>
      <NuiButton loading />
      <NuiButton loading variant="outline" color="secondary">
        Submitting
      </NuiButton>
    </>
}`,...(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var H,G,T;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(T=(G=v.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var A,K,k;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      <NuiButton iconOnly size="lg" variant="outline" color="negative" radius="lg">
        <RxShare1 />
      </NuiButton>
    </>
}`,...(k=(K=f.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var q,J,Q;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can customize the \`Button\` component by passing custom classes to the component."
      }
    }
  },
  render: () => <>
      <NuiButton className="bg-gradient-to-tr from-primary to-negative text-atmo1 shadow-lg">
        Button
      </NuiButton>
    </>
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ht=["Main","Variants","Colors","Sizes","Radius","Loading","Icons","IconOnly","Custom"];export{p as Colors,y as Custom,f as IconOnly,v as Icons,g as Loading,l as Main,h as Radius,m as Sizes,d as Variants,ht as __namedExportsOrder,mt as default};

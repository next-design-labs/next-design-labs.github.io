import{b as o,j as n}from"./Typography-DP3NEyyk.js";import{R as a}from"./index-B52nOzfP.js";var ot={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=a.createContext&&a.createContext(ot),at=["attr","size","title"];function ct(t,e){if(t==null)return{};var r=ut(t,e),i,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(s=0;s<c.length;s++)i=c[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function ut(t,e){if(t==null)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;r[i]=t[i]}return r}function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},B.apply(this,arguments)}function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,i)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?S(Object(r),!0).forEach(function(i){lt(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function lt(t,e,r){return e=dt(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function dt(t){var e=pt(t,"string");return typeof e=="symbol"?e:e+""}function pt(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function it(t){return t&&t.map((e,r)=>a.createElement(e.tag,j({key:r},e.attr),it(e.child)))}function b(t){return e=>a.createElement(mt,B({attr:j({},t.attr)},e),it(t.child))}function mt(t){var e=r=>{var{attr:i,size:s,title:c}=t,st=ct(t,at),w=s||r.size||"1em",u;return r.className&&(u=r.className),t.className&&(u=(u?u+" ":"")+t.className),a.createElement("svg",B({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,st,{className:u,style:j(j({color:t.color||r.color},r.style),t.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),t.children)};return C!==void 0?a.createElement(C.Consumer,null,r=>e(r)):e(ot)}function O(t){return b({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z",fill:"currentColor"},child:[]}]})(t)}function N(t){return b({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z",fill:"currentColor"},child:[]}]})(t)}function ht(t){return b({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",fill:"currentColor"},child:[]}]})(t)}const xt={title:"Components/Button",component:o,decorators:[t=>n.jsx(C.Provider,{value:{style:{verticalAlign:"middle"}},children:n.jsx("div",{className:"flex items-center gap-4",children:n.jsx(t,{})})})]},l={render:t=>n.jsx(o,{...t,children:"Button"})},d={parameters:{docs:{description:{story:"Use the `variant` prop to change the visual style of the Button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Solid"}),n.jsx(o,{variant:"outline",children:"Outline"}),n.jsx(o,{variant:"subtle",children:"Subtle"}),n.jsx(o,{variant:"ghost",children:"Ghost"}),n.jsx(o,{variant:"link",href:"/",children:"Link"})]})},p={parameters:{docs:{description:{story:"Use the `color` prop to change the color scheme of the Button."}}},decorators:[t=>n.jsx("div",{className:"grid grid-cols-5 gap-4",children:n.jsx(t,{})})],render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{children:"Primary"}),n.jsx(o,{color:"secondary",children:"Secondary"}),n.jsx(o,{color:"positive",children:"Positive"}),n.jsx(o,{color:"warning",children:"Warning"}),n.jsx(o,{color:"negative",children:"Negative"})]})},m={parameters:{docs:{description:{story:"Use the `size` prop to change the size of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{size:"sm",children:"Small"}),n.jsx(o,{size:"md",children:"Medium"}),n.jsx(o,{variant:"outline",size:"lg",children:"Large"})]})},h={parameters:{docs:{description:{story:"Use the `radius` prop to change the border-radius of the button."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{radius:"sm",children:"Small"}),n.jsx(o,{radius:"md",variant:"outline",children:"Medium"}),n.jsx(o,{radius:"lg",variant:"outline",children:"Large"})]})},g={parameters:{docs:{description:{story:"Pass the `isLoading` prop to show a loader inside the button. "}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{loading:!0}),n.jsx(o,{loading:!0,variant:"outline",children:"Submitting"})]})},v={parameters:{docs:{description:{story:"You can add icons to the Button component passing the `leftIcon` and `rightIcon` props respectively."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{leftIcon:n.jsx(N,{}),children:"Email"}),n.jsx(o,{rightIcon:n.jsx(O,{}),variant:"outline",children:"Download"})]})},f={parameters:{docs:{description:{story:"You can also display a button without text by passing the `iconOnly` prop and the desired icon as children."}}},render:()=>n.jsxs(n.Fragment,{children:[n.jsx(o,{iconOnly:!0,size:"sm",variant:"outline",radius:"lg",children:n.jsx(N,{})}),n.jsx(o,{iconOnly:!0,children:n.jsx(O,{})}),n.jsx(o,{iconOnly:!0,size:"lg",variant:"outline",children:n.jsx(ht,{})})]})},y={parameters:{docs:{description:{story:"You can customize the `Button` component by passing custom classes to the component."}}},render:()=>n.jsx(n.Fragment,{children:n.jsx(o,{className:"bg-gradient-to-tr from-primary to-error",radius:"none",children:"Custom Button"})})},gt=["solid","outline","subtle","ghost"],vt=["primary","secondary","positive","warning","negative"],x={parameters:{docs:{description:{story:"Story to be used on visual tests."}}},render:()=>n.jsx("div",{className:"flex flex-wrap gap-4 max-w-[400px]",children:vt.map(t=>gt.map(e=>n.jsxs(n.Fragment,{children:[n.jsx(o,{color:t,variant:e,children:"Button"},`${t}-${e}`),n.jsx(o,{color:t,variant:e,leftIcon:n.jsx(N,{}),children:"Button"},`${t}-${e}-leftIcon`),n.jsx(o,{color:t,variant:e,rightIcon:n.jsx(O,{}),children:"Button"},`${t}-${e}-rightIcon`),n.jsx(o,{color:t,variant:e,iconOnly:!0,children:n.jsx(N,{})},`${t}-${e}-iconOnly`)]})))})};var P,I,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <NuiButton {...args}>Button</NuiButton>
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var z,R,E;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      <NuiButton variant="subtle">Subtle</NuiButton>
      <NuiButton variant="ghost">Ghost</NuiButton>
      <NuiButton variant="link" href="/">
        Link
      </NuiButton>
    </>
}`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var $,M,V;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var D,F,_;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var Z,U,Y;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,W,k;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Pass the \`isLoading\` prop to show a loader inside the button. "
      }
    }
  },
  render: () => <>
      <NuiButton loading />
      <NuiButton loading variant="outline">
        Submitting
      </NuiButton>
    </>
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var T,G,A;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(G=v.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var K,q,J;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      <NuiButton iconOnly size="lg" variant="outline">
        <RxShare1 />
      </NuiButton>
    </>
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,tt;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "You can customize the \`Button\` component by passing custom classes to the component."
      }
    }
  },
  render: () => <>
      <NuiButton className="bg-gradient-to-tr from-primary to-error" radius="none">
        Custom Button
      </NuiButton>
    </>
}`,...(tt=(X=y.parameters)==null?void 0:X.docs)==null?void 0:tt.source}}};var nt,et,rt;x.parameters={...x.parameters,docs:{...(nt=x.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Story to be used on visual tests."
      }
    }
  },
  render: () => <div className="flex flex-wrap gap-4 max-w-[400px]">
      {colors.map(color => variants.map(variant => <>
            {/* Standard Button */}
            <NuiButton key={\`\${color}-\${variant}\`} color={color} variant={variant}>
              Button
            </NuiButton>

            {/* Button with left icon */}
            <NuiButton key={\`\${color}-\${variant}-leftIcon\`} color={color} variant={variant} leftIcon={<RxEnvelopeClosed />}>
              Button
            </NuiButton>

            {/* Button with right icon */}
            <NuiButton key={\`\${color}-\${variant}-rightIcon\`} color={color} variant={variant} rightIcon={<RxDownload />}>
              Button
            </NuiButton>

            {/* Icon only button */}
            <NuiButton key={\`\${color}-\${variant}-iconOnly\`} color={color} variant={variant} iconOnly>
              <RxEnvelopeClosed />
            </NuiButton>
          </>))}
    </div>
}`,...(rt=(et=x.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};const Bt=["Main","Variants","Colors","Sizes","Radius","Loading","Icons","IconOnly","Custom","Tests"];export{p as Colors,y as Custom,f as IconOnly,v as Icons,g as Loading,l as Main,h as Radius,m as Sizes,x as Tests,d as Variants,Bt as __namedExportsOrder,xt as default};

try{
(()=>{var me=Object.defineProperty;var w=(e,t)=>{for(var r in t)me(e,r,{get:t[r],enumerable:!0})};var dt=__STORYBOOK_API__,{ActiveTabs:gt,Consumer:ut,ManagerContext:pt,Provider:ft,RequestResponseError:Ft,addons:D,combineParameters:bt,controlOrMetaKey:yt,controlOrMetaSymbol:Et,eventMatchesShortcut:ht,eventToShortcut:xt,experimental_requestResponse:Dt,isMacLike:At,isShortcutTaken:St,keyToSymbol:Ct,merge:Tt,mockChannel:Bt,optionOrAltSymbol:Mt,shortcutMatchesShortcut:Ot,shortcutToHumanString:kt,types:$,useAddonState:It,useArgTypes:vt,useArgs:_t,useChannel:Rt,useGlobalTypes:Pt,useGlobals:Ht,useParameter:Lt,useSharedState:wt,useStoryPrepared:Vt,useStorybookApi:Nt,useStorybookState:Wt}=__STORYBOOK_API__;var b=__REACT__,{Children:Yt,Component:Kt,Fragment:qt,Profiler:Gt,PureComponent:Zt,StrictMode:Jt,Suspense:Qt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Xt,cloneElement:er,createContext:tr,createElement:rr,createFactory:nr,createRef:or,forwardRef:sr,isValidElement:ir,lazy:ar,memo:cr,startTransition:lr,unstable_act:mr,useCallback:dr,useContext:gr,useDebugValue:ur,useDeferredValue:pr,useEffect:fr,useId:Fr,useImperativeHandle:br,useInsertionEffect:yr,useLayoutEffect:Er,useMemo:hr,useReducer:xr,useRef:Dr,useState:z,useSyncExternalStore:Ar,useTransition:Sr,version:Cr}=__REACT__;var y={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")},kr={defaultMerge:y.defaultMerge};function de(e,t){return t}function ge(e,t){return e.filter(r=>r!==void 0)}var j;(function(e){e[e.NOT=0]="NOT",e[e.RECORD=1]="RECORD",e[e.ARRAY=2]="ARRAY",e[e.SET=3]="SET",e[e.MAP=4]="MAP",e[e.OTHER=5]="OTHER"})(j||(j={}));function U(e){return typeof e!="object"||e===null?0:Array.isArray(e)?2:fe(e)?1:e instanceof Set?3:e instanceof Map?4:5}function ue(e){let t=new Set;for(let r of e)for(let n of[...Object.keys(r),...Object.getOwnPropertySymbols(r)])t.add(n);return t}function pe(e,t){return typeof e=="object"&&Object.prototype.propertyIsEnumerable.call(e,t)}function K(e){return{*[Symbol.iterator](){for(let t of e)for(let r of t)yield r}}}var Y=new Set(["[object Object]","[object Module]"]);function fe(e){if(!Y.has(Object.prototype.toString.call(e)))return!1;let{constructor:t}=e;if(t===void 0)return!0;let r=t.prototype;return!(r===null||typeof r!="object"||!Y.has(Object.prototype.toString.call(r))||!r.hasOwnProperty("isPrototypeOf"))}function Fe(e,t,r){let n={};for(let a of ue(e)){let F=[];for(let W of e)pe(W,a)&&F.push(W[a]);if(F.length===0)continue;let f=t.metaDataUpdater(r,{key:a,parents:e}),L=G(F,t,f);L!==y.skip&&(a==="__proto__"?Object.defineProperty(n,a,{value:L,configurable:!0,enumerable:!0,writable:!0}):n[a]=L)}return n}function be(e){return e.flat()}function ye(e){return new Set(K(e))}function Ee(e){return new Map(K(e))}function he(e){return e.at(-1)}var C={mergeRecords:Fe,mergeArrays:be,mergeSets:ye,mergeMaps:Ee,mergeOthers:he};function q(...e){return xe({})(...e)}function xe(e,t){let r=De(e,n);function n(...a){return G(a,r,t)}return n}function De(e,t){return{defaultMergeFunctions:C,mergeFunctions:{...C,...Object.fromEntries(Object.entries(e).filter(([r,n])=>Object.hasOwn(C,r)).map(([r,n])=>n===!1?[r,C.mergeOthers]:[r,n]))},metaDataUpdater:e.metaDataUpdater??de,deepmerge:t,useImplicitDefaultMerging:e.enableImplicitDefaultMerging??!1,filterValues:e.filterValues===!1?void 0:e.filterValues??ge,actions:y}}function G(e,t,r){let n=t.filterValues?.(e,r)??e;if(n.length===0)return;if(n.length===1)return V(n,t,r);let a=U(n[0]);if(a!==0&&a!==5){for(let F=1;F<n.length;F++)if(U(n[F])!==a)return V(n,t,r)}switch(a){case 1:return Ae(n,t,r);case 2:return Se(n,t,r);case 3:return Ce(n,t,r);case 4:return Te(n,t,r);default:return V(n,t,r)}}function Ae(e,t,r){let n=t.mergeFunctions.mergeRecords(e,t,r);return n===y.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeRecords!==t.defaultMergeFunctions.mergeRecords?t.defaultMergeFunctions.mergeRecords(e,t,r):n}function Se(e,t,r){let n=t.mergeFunctions.mergeArrays(e,t,r);return n===y.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeArrays!==t.defaultMergeFunctions.mergeArrays?t.defaultMergeFunctions.mergeArrays(e):n}function Ce(e,t,r){let n=t.mergeFunctions.mergeSets(e,t,r);return n===y.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeSets!==t.defaultMergeFunctions.mergeSets?t.defaultMergeFunctions.mergeSets(e):n}function Te(e,t,r){let n=t.mergeFunctions.mergeMaps(e,t,r);return n===y.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeMaps!==t.defaultMergeFunctions.mergeMaps?t.defaultMergeFunctions.mergeMaps(e):n}function V(e,t,r){let n=t.mergeFunctions.mergeOthers(e,t,r);return n===y.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeOthers!==t.defaultMergeFunctions.mergeOthers?t.defaultMergeFunctions.mergeOthers(e):n}var T={};w(T,{breakpoints:()=>Be,colors:()=>A,fontFamily:()=>Ze,fontSize:()=>m,fontWeight:()=>d,lineHeight:()=>g,radii:()=>Ke,sizes:()=>qe,spacing:()=>Ge,zIndex:()=>Je});var Be={xs:0,sm:600,md:960,lg:1270,xl:1920};var Me={50:"#F8FAFC",100:"#F1F5F9",200:"#E2E8F0",300:"#CBD5E1",400:"#94A3B8",500:"#64748B",600:"#475569",700:"#334155",800:"#1E293B",900:"#0F172A",950:"#020617"},Oe={50:"#FAFAFA",100:"#F5F5F5",200:"#E5E5E5",300:"#D4D4D4",400:"#A3A3A3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0A0A0A"},ke={50:"#FEF2F2",100:"#FEE2E2",200:"#FECACA",300:"#FCA5A5",400:"#F87171",500:"#EF4444",600:"#DC2626",700:"#B91C1C",800:"#991B1B",900:"#7F1D1D",950:"#450A0A"},Ie={50:"#FFF7ED",100:"#FFEDD5",200:"#FED7AA",300:"#FDBA74",400:"#FB923C",500:"#F97316",600:"#EA580C",700:"#C2410C",800:"#9A3412",900:"#7C2D12",950:"#431407"},ve={50:"#FFFBEB",100:"#FEF3C7",200:"#FDE68A",300:"#FCD34D",400:"#FBBF24",500:"#F59E0B",600:"#D97706",700:"#B45309",800:"#92400E",900:"#78350F",950:"#451A03"},_e={50:"#F7FEE7",100:"#ECFCCB",200:"#D9F99D",300:"#BEF264",400:"#A3E635",500:"#84CC16",600:"#65A30D",700:"#4D7C0F",800:"#3F6212",900:"#365314",950:"#1A2E05"},Re={50:"#FEFCE8",100:"#FEF9C3",200:"#FEF08A",300:"#FDE047",400:"#FACC15",500:"#EAB308",600:"#CA8A04",700:"#A16207",800:"#854D0E",900:"#713F12",950:"#422006"},Pe={50:"#F0FDF4",100:"#DCFCE7",200:"#BBF7D0",300:"#86EFAC",400:"#4ADE80",500:"#22C55E",600:"#16A34A",700:"#15803D",800:"#166534",900:"#14532D",950:"#052E16"},He={50:"#ECFDF5",100:"#D1FAE5",200:"#A7F3D0",300:"#6EE7B7",400:"#34D399",500:"#10B981",600:"#059669",700:"#047857",800:"#065F46",900:"#064E3B",950:"#022C22"},Le={50:"#F0FDFA",100:"#CCFBF1",200:"#99F6E4",300:"#5EEAD4",400:"#2DD4BF",500:"#14B8A6",600:"#0D9488",700:"#0F766E",800:"#115E59",900:"#134E4A",950:"#042F2E"},we={50:"#ECFEFF",100:"#CFFAFE",200:"#A5F3FC",300:"#67E8F9",400:"#22D3EE",500:"#06B6D4",600:"#0891B2",700:"#0E7490",800:"#155E75",900:"#164E63",950:"#083344"},Ve={50:"#F0F9FF",100:"#E0F2FE",200:"#BAE6FD",300:"#7DD3FC",400:"#38BDF8",500:"#0EA5E9",600:"#0284C7",700:"#0369A1",800:"#075985",900:"#0C4A6E",950:"#082F49"},Ne={50:"#EFF6FF",100:"#DBEAFE",200:"#BFDBFE",300:"#93C5FD",400:"#60A5FA",500:"#3B82F6",600:"#2563EB",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A",950:"#172554"},We={50:"#EEF2FF",100:"#E0E7FF",200:"#C7D2FE",300:"#A5B4FC",400:"#818CF8",500:"#6366F1",600:"#4F46E5",700:"#4338CA",800:"#3730A3",900:"#312E81",950:"#1E1B4B"},$e={50:"#F5F3FF",100:"#EDE9FE",200:"#DDD6FE",300:"#C4B5FD",400:"#A78BFA",500:"#8B5CF6",600:"#7C3AED",700:"#6D28D9",800:"#5B21B6",900:"#4C1D95",950:"#2E1065"},ze={50:"#FAF5FF",100:"#F3E8FF",200:"#E9D5FF",300:"#D8B4FE",400:"#C084FC",500:"#A855F7",600:"#9333EA",700:"#7E22CE",800:"#6B21A8",900:"#581C87",950:"#3B0764"},je={50:"#FDF4FF",100:"#FAE8FF",200:"#F5D0FE",300:"#F0ABFC",400:"#E879F9",500:"#D946EF",600:"#C026D3",700:"#A21CAF",800:"#86198F",900:"#701A75",950:"#4A044E"},Ue={50:"#FDF2F8",100:"#FCE7F3",200:"#FBCFE8",300:"#F9A8D4",400:"#F472B6",500:"#EC4899",600:"#DB2777",700:"#BE185D",800:"#9D174D",900:"#831843",950:"#500724"},Ye={50:"#FFF1F2",100:"#FFE4E6",200:"#FECDD3",300:"#FDA4AF",400:"#FB7185",500:"#F43F5E",600:"#E11D48",700:"#BE123C",800:"#9F1239",900:"#881337",950:"#4C0519"},A={slate:Me,neutral:Oe,red:ke,orange:Ie,amber:ve,lime:_e,yellow:Re,green:Pe,emerald:He,teal:Le,cyan:we,sky:Ve,blue:Ne,indigo:We,violet:$e,purple:ze,fuchsia:je,pink:Ue,rose:Ye};var Ke={none:"0px",base:"2px",round:"6px",circle:"50%",full:"9999px"};var qe={xs:"28px",sm:"32px",md:"36px",lg:"40px",xl:"44px"};var Ge={base:8,xs:"8px",sm:"16px",md:"24px",lg:"48px",xl:"80px"};var Ze={body:"'Inter', sans-serif"},m={xs:"10px",sm:"12px",base:"14px",lg:"16px",xl:"20px",xl2:"24px",xl3:"32px",xl4:"42px"},d={hairline:"100",thin:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},g={none:"21px",xs:"16px",sm:"18px",base:"21px",lg:"24px",xl:"30px",xl2:"36px",xl3:"48px",xl4:"63px"};var Je={hide:-1,base:0,docked:10,sticky:1e3,fab:1050,banner:1100,overlay:1200,modal:1300,dropdown:1400,popover:1500,tooltip:1600,skipLink:1700,toast:1800};var N=(e,t="--nui")=>Object.entries(e).reduce((r,[n,a])=>(typeof a=="object"&&a!==null?r[n]=N(a,`${t}-${n}`):r[n]=`var(${t}-${n})`,r),{});var B={};w(B,{typography:()=>Qe});var Qe={display:{fontWeight:d.semibold,fontSize:m.xl4,lineHeight:g.xl4},title1:{fontWeight:d.semibold,fontSize:m.xl3,lineHeight:g.xl3},title2:{fontWeight:d.semibold,fontSize:m.xl2,lineHeight:g.xl2},title3:{fontWeight:d.semibold,fontSize:m.xl,lineHeight:g.xl},title4:{fontWeight:d.semibold,fontSize:m.lg,lineHeight:g.lg},label:{fontWeight:d.semibold,fontSize:m.base,lineHeight:g.base},body:{fontWeight:d.normal,fontSize:m.base,lineHeight:g.base},captionLabel:{fontWeight:d.semibold,fontSize:m.sm,lineHeight:g.sm},caption1:{fontWeight:d.normal,fontSize:m.sm,lineHeight:g.sm},caption2:{fontWeight:d.normal,fontSize:m.xs,lineHeight:g.xs}};var H={};w(H,{dark:()=>et,light:()=>Xe});var{blue:u,cyan:M,green:O,neutral:E,red:k,slate:c,amber:I}=A,Xe={background:{primary:c[100],secondary:c[200],tertiary:c[300],surface:c[50],surfaceSecondary:c[100],disabled:E[200],overlay:"#0F172A99",dimmer:"#FFFFFFCC",selected:u[600],selectedDimmed:u[50]},text:{primary:c[800],secondary:c[600],white:c[50],linkHover:u[800],disabled:E[400],primaryLink:u[600]},border:{divider:c[300],subtle:c[200],disabled:E[400],strong:c[400],hoverSelected:u[600]},button:{primary:{bg:u[600],bgHover:u[700],bgPressed:u[800],label:"#FFFFFF",subtleBg:c[50],subtleBorder:u[300],subtleBgHover:u[100],subtleBgPressed:u[200],subtleLabel:u[600]},secondary:{bg:c[50],bgHover:c[100],bgPressed:c[200],border:c[300],label:c[800]},disabled:{bg:E[200],label:E[400],border:E[300]}},status:{error:{primary:k[600],secondary:k[700],tertiary:k[800],dimmed:k[50]},warning:{primary:I[600],secondary:I[700],tertiary:I[50],dimmed:I[600]},success:{primary:O[600],secondary:O[700],tertiary:O[800],dimmed:O[50]},neutral:{primary:M[500],secondary:M[600],tertiary:M[700],dimmed:M[50]}}};var{blue:p,cyan:v,green:_,neutral:h,red:R,slate:l,yellow:P}=A,et={background:{primary:l[950],secondary:l[900],tertiary:l[800],surface:l[900],surfaceSecondary:l[700],disabled:h[900],overlay:"#0F172A66",dimmer:"#00000099",selected:p[600],selectedDimmed:p[950]},text:{primary:l[50],secondary:l[200],white:l[50],linkHover:p[300],disabled:h[500],primaryLink:p[400]},border:{divider:l[700],subtle:l[700],disabled:h[700],strong:l[500],hoverSelected:p[500]},button:{primary:{bg:p[600],bgHover:p[700],bgPressed:p[800],label:"#FFFFFF",subtleBg:l[800],subtleBorder:p[950],subtleBgHover:p[900],subtleBgPressed:p[950],subtleLabel:p[400]},secondary:{bg:l[800],bgHover:l[900],bgPressed:l[950],border:l[700],label:l[50]},disabled:{bg:h[900],label:h[500],border:h[700]}},status:{error:{primary:R[600],secondary:R[500],tertiary:R[300],dimmed:R[950]},warning:{primary:P[500],secondary:P[400],tertiary:P[300],dimmed:P[950]},success:{primary:_[600],secondary:_[500],tertiary:_[300],dimmed:_[950]},neutral:{primary:v[500],secondary:v[400],tertiary:v[300],dimmed:v[950]}}};var Z={name:"base",mode:"light",...T,components:B,modes:H},Zn=N({...T,...B,...Object.values(H)[0]}),x=e=>{let t=typeof e=="function"?e(Z):e;return q(Z,t)};var J=x(({colors:e})=>({name:"DS",modes:{light:{background:{primary:e.slate[200]},text:{primary:e.slate[700]}},dark:{background:{primary:e.slate[800]},text:{primary:e.slate[100]}}}}));var Q=x(()=>({name:"Pentaho"}));var X=x(({colors:e})=>({name:"Shadcn",modes:{light:{background:{primary:e.slate[300]},text:{primary:e.slate[600]}},dark:{background:{primary:e.slate[700]},text:{primary:e.slate[200]}}}}));var Ho=__STORYBOOK_COMPONENTS__,{A:Lo,ActionBar:wo,AddonPanel:Vo,Badge:No,Bar:Wo,Blockquote:$o,Button:zo,ClipboardCode:jo,Code:Uo,DL:Yo,Div:Ko,DocumentWrapper:qo,EmptyTabContent:Go,ErrorFormatter:Zo,FlexBar:Jo,Form:Qo,H1:Xo,H2:e0,H3:t0,H4:r0,H5:n0,H6:o0,HR:s0,IconButton:ee,IconButtonSkeleton:i0,Icons:a0,Img:c0,LI:l0,Link:m0,ListItem:d0,Loader:g0,Modal:u0,OL:p0,P:f0,Placeholder:F0,Pre:b0,ResetWrapper:y0,ScrollArea:E0,Separator:h0,Spaced:x0,Span:D0,StorybookIcon:A0,StorybookLogo:S0,Symbols:C0,SyntaxHighlighter:T0,TT:B0,TabBar:M0,TabButton:O0,TabWrapper:k0,Table:I0,Tabs:v0,TabsState:_0,TooltipLinkList:te,TooltipMessage:R0,TooltipNote:P0,UL:H0,WithTooltip:re,WithTooltipPure:L0,Zoom:w0,codeCommon:V0,components:N0,createCopyToClipboardFunction:W0,getStoryHref:$0,icons:z0,interleaveSeparators:j0,nameSpaceClassNames:U0,resetComponents:Y0,withReset:K0}=__STORYBOOK_COMPONENTS__;var S="storybook/addon-theme-selector",ne="Theme Selector",oe="THEME_SELECT";var se="sb-next-ui-theme",ie=e=>{localStorage?.setItem(se,e)},tt=()=>localStorage?.getItem(se),ae=e=>{let t=tt();return e.find(r=>r.name===t)||e[0]},rt=e=>e.replace(/\w\S*/g,t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()),ce=e=>e.map(r=>({name:`${r.name}`,label:`${rt(r.name)}`}));var nt=()=>{let e=ce([J,X,Q]),t=ae(e),[r,n]=z(t),a=f=>{ie(f.name),n(f),D.getChannel().emit(oe,f)},F=e.map(f=>({id:f.name,title:f.label,active:f.label===r?.label,onClick:()=>a(f)}));return b.createElement(b.Fragment,null,b.createElement(re,{placement:"top",trigger:"click",tooltip:b.createElement(te,{links:F})},b.createElement(ee,{key:S,active:!1,title:"Select theme",style:{display:"flex",width:110,justifyContent:"flex-start"}},"Theme: ",r?.label)))},le=nt;D.register(S,()=>{D.add(S,{title:ne,type:$.TOOL,match:({viewMode:e})=>!!e?.match(/^(story|docs)$/),render:()=>b.createElement(le,null)})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }

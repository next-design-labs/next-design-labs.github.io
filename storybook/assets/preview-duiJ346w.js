import{p as le,m as be,e as ge,j as L,d as he,s as ye}from"./shadcn-45nzGUP4.js";import{r as T}from"./index-CZlPm10g.js";const ve=e=>Array.isArray(e)?e.filter((r,n,i)=>i.findIndex(o=>o.name===r.name)===n):[le],F=(e,t,r)=>{const n=e.find(d=>d.name===t)||e[0],i=Object.keys(n.modes),o=i.includes(r??"")?r:i[0],{modes:s,components:l,...c}=n;return be({...c,mode:o},n.modes[o])},xe=e=>{const t="next-ui-theme";if(typeof window>"u")return;let r=document.querySelector(`style#${t}`);r||(r=document.createElement("style"),r.id=t,document.head.appendChild(r)),r.innerHTML=ke(e)},we=(e,t)=>{const{name:r,mode:n,fontFamily:i,background:o}=e,s=t?document.getElementById(t):document.body;s&&(s.setAttribute("data-theme",r),s.setAttribute("data-mode",n),s.style.colorScheme=n,s.style.backgroundColor=o.primary,s.style.fontFamily=i.body)},ke=e=>{const{name:t,mode:r,...n}=e,i=`[data-theme="${t}"][data-mode="${r}"]`,o=ge(n);return Object.entries(o).reduce((l,[c,d])=>`${l}  ${c}: ${d};
`,`${i} {
`)},Ce=T.createContext({themes:[],selected:void 0,changeTheme:()=>{}}),ae=({rootId:e,themes:t,theme:r,mode:n,children:i})=>{const o=T.useMemo(()=>ve(t),[t]),[s,l]=T.useState(F(o,r,n));xe(s),we(s,e),T.useEffect(()=>{l(F(o,r,n))},[o,r,n]);const c=T.useCallback((u,b)=>{l(F(o,u,b))},[o]),d=T.useMemo(()=>({themes:o,selected:s,changeTheme:c}),[o,s,c]);return L.jsx(Ce.Provider,{value:d,children:i})};ae.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{rootId:{required:!1,tsType:{name:"string"},description:`Id of the DOM element where the theme will be applied.
- If invalid or no value is provided, the theme will be applied to body element.`},themes:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`typeof baseTheme & {
  name: string;
}`,elements:[{name:"baseTheme"},{name:"signature",type:"object",raw:`{
  name: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}}]}],raw:"Theme[]"},description:`The themes to be used.
- If multiple themes are provided, the first theme will be used as the default theme.
- If no themes are provided, the default theme will be used.`},theme:{required:!1,tsType:{name:"string"},description:`The active theme name.
- If invalid or no value is provided, the default theme will be used.`},mode:{required:!1,tsType:{name:"string"},description:`The active color mode.
- If invalid or no value is provided, the default color mode will be used.`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children to be rendered."}}};function ce(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=ce(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function K(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=ce(e))&&(n&&(n+=" "),n+=t);return n}const re=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Se=e=>{const t=function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];var l,c;return typeof(e==null||(l=e.hooks)===null||l===void 0?void 0:l["cx:done"])<"u"?e==null?void 0:e.hooks["cx:done"](K(o)):typeof(e==null||(c=e.hooks)===null||c===void 0?void 0:c.onComplete)<"u"?e==null?void 0:e.hooks.onComplete(K(o)):K(o)};return{compose:function(){for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return l=>{const c=Object.fromEntries(Object.entries(l||{}).filter(d=>{let[u]=d;return!["class","className"].includes(u)}));return t(o.map(d=>d(c)),l==null?void 0:l.class,l==null?void 0:l.className)}},cva:i=>o=>{var s;if((i==null?void 0:i.variants)==null)return t(i==null?void 0:i.base,o==null?void 0:o.class,o==null?void 0:o.className);const{variants:l,defaultVariants:c}=i,d=Object.keys(l).map(g=>{const y=o==null?void 0:o[g],v=c==null?void 0:c[g],p=re(y)||re(v);return l[g][p]}),u={...c,...o&&Object.entries(o).reduce((g,y)=>{let[v,p]=y;return typeof p>"u"?g:{...g,[v]:p}},{})},b=i==null||(s=i.compoundVariants)===null||s===void 0?void 0:s.reduce((g,y)=>{let{class:v,className:p,...h}=y;return Object.entries(h).every(w=>{let[x,M]=w;const z=u[x];return Array.isArray(M)?M.includes(z):z===M})?[...g,v,p]:g},[]);return t(i==null?void 0:i.base,d,b,o==null?void 0:o.class,o==null?void 0:o.className)},cx:t}},H="-";function Te(e){const t=Me(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;function i(s){const l=s.split(H);return l[0]===""&&l.length!==1&&l.shift(),de(l,t)||Ae(s)}function o(s,l){const c=r[s]||[];return l&&n[s]?[...c,...n[s]]:c}return{getClassGroupId:i,getConflictingClassGroupIds:o}}function de(e,t){var s;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),i=n?de(e.slice(1),n):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(H);return(s=t.validators.find(({validator:l})=>l(o)))==null?void 0:s.classGroupId}const oe=/^\[(.+)\]$/;function Ae(e){if(oe.test(e)){const t=oe.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Me(e){const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Ee(Object.entries(e.classGroups),r).forEach(([o,s])=>{U(s,n,o,t)}),n}function U(e,t,r,n){e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:ne(t,i);o.classGroupId=r;return}if(typeof i=="function"){if(ze(i)){U(i(n),t,r,n);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([o,s])=>{U(s,ne(t,o),r,n)})})}function ne(e,t){let r=e;return t.split(H).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r}function ze(e){return e.isThemeGetter}function Ee(e,t){return t?e.map(([r,n])=>{const i=n.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,l])=>[t+s,l])):o);return[r,i]}):e}function Ie(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;function i(o,s){r.set(o,s),t++,t>e&&(t=0,n=r,r=new Map)}return{get(o){let s=r.get(o);if(s!==void 0)return s;if((s=n.get(o))!==void 0)return i(o,s),s},set(o,s){r.has(o)?r.set(o,s):i(o,s)}}}const ue="!";function Re(e){const t=e.separator,r=t.length===1,n=t[0],i=t.length;return function(s){const l=[];let c=0,d=0,u;for(let p=0;p<s.length;p++){let h=s[p];if(c===0){if(h===n&&(r||s.slice(p,p+i)===t)){l.push(s.slice(d,p)),d=p+i;continue}if(h==="/"){u=p;continue}}h==="["?c++:h==="]"&&c--}const b=l.length===0?s:s.substring(d),g=b.startsWith(ue),y=g?b.substring(1):b,v=u&&u>d?u-d:void 0;return{modifiers:l,hasImportantModifier:g,baseClassName:y,maybePostfixModifierPosition:v}}}function Pe(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t}function je(e){return{cache:Ie(e.cacheSize),splitModifiers:Re(e),...Te(e)}}const Ge=/\s+/;function Ne(e,t){const{splitModifiers:r,getClassGroupId:n,getConflictingClassGroupIds:i}=t,o=new Set;return e.trim().split(Ge).map(s=>{const{modifiers:l,hasImportantModifier:c,baseClassName:d,maybePostfixModifierPosition:u}=r(s);let b=n(u?d.substring(0,u):d),g=!!u;if(!b){if(!u)return{isTailwindClass:!1,originalClassName:s};if(b=n(d),!b)return{isTailwindClass:!1,originalClassName:s};g=!1}const y=Pe(l).join(":");return{isTailwindClass:!0,modifierId:c?y+ue:y,classGroupId:b,originalClassName:s,hasPostfixModifier:g}}).reverse().filter(s=>{if(!s.isTailwindClass)return!0;const{modifierId:l,classGroupId:c,hasPostfixModifier:d}=s,u=l+c;return o.has(u)?!1:(o.add(u),i(c,d).forEach(b=>o.add(l+b)),!0)}).reverse().map(s=>s.originalClassName).join(" ")}function Ve(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=pe(t))&&(n&&(n+=" "),n+=r);return n}function pe(e){if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=pe(e[n]))&&(r&&(r+=" "),r+=t);return r}function se(e,...t){let r,n,i,o=s;function s(c){const d=t.reduce((u,b)=>b(u),e());return r=je(d),n=r.cache.get,i=r.cache.set,o=l,l(c)}function l(c){const d=n(c);if(d)return d;const u=Ne(c,r);return i(c,u),u}return function(){return o(Ve.apply(null,arguments))}}function f(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,Oe=/^\d+\/\d+$/,Le=new Set(["px","full","screen"]),_e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$e=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,qe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Be=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function k(e){return A(e)||Le.has(e)||Oe.test(e)}function C(e){return E(e,"length",Ze)}function A(e){return!!e&&!Number.isNaN(Number(e))}function O(e){return E(e,"number",A)}function P(e){return!!e&&Number.isInteger(Number(e))}function Fe(e){return e.endsWith("%")&&A(e.slice(0,-1))}function a(e){return fe.test(e)}function S(e){return _e.test(e)}const Ke=new Set(["length","size","percentage"]);function Ue(e){return E(e,Ke,me)}function He(e){return E(e,"position",me)}const Ye=new Set(["image","url"]);function Je(e){return E(e,Ye,Qe)}function Xe(e){return E(e,"",De)}function j(){return!0}function E(e,t,r){const n=fe.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1}function Ze(e){return $e.test(e)&&!We.test(e)}function me(){return!1}function De(e){return qe.test(e)}function Qe(e){return Be.test(e)}function ie(){const e=f("colors"),t=f("spacing"),r=f("blur"),n=f("brightness"),i=f("borderColor"),o=f("borderRadius"),s=f("borderSpacing"),l=f("borderWidth"),c=f("contrast"),d=f("grayscale"),u=f("hueRotate"),b=f("invert"),g=f("gap"),y=f("gradientColorStops"),v=f("gradientColorStopPositions"),p=f("inset"),h=f("margin"),w=f("opacity"),x=f("padding"),M=f("saturate"),z=f("scale"),Y=f("sepia"),J=f("skew"),X=f("space"),Z=f("translate"),$=()=>["auto","contain","none"],W=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",a,t],m=()=>[a,t],D=()=>["",k,C],G=()=>["auto",A,a],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],N=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",a],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[A,O],V=()=>[A,a];return{cacheSize:500,separator:":",theme:{colors:[j],spacing:[k,C],blur:["none","",S,a],brightness:R(),borderColor:[e],borderRadius:["none","","full",S,a],borderSpacing:m(),borderWidth:D(),contrast:R(),grayscale:I(),hueRotate:V(),invert:I(),gap:m(),gradientColorStops:[e],gradientColorStopPositions:[Fe,C],inset:q(),margin:q(),opacity:R(),padding:m(),saturate:R(),scale:R(),sepia:I(),skew:V(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),a]}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[p]}],"inset-x":[{"inset-x":[p]}],"inset-y":[{"inset-y":[p]}],start:[{start:[p]}],end:[{end:[p]}],top:[{top:[p]}],right:[{right:[p]}],bottom:[{bottom:[p]}],left:[{left:[p]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,a]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",P,a]}],"grid-cols":[{"grid-cols":[j]}],"col-start-end":[{col:["auto",{span:["full",P,a]},a]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[j]}],"row-start-end":[{row:["auto",{span:[P,a]},a]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[X]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[X]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,t]}],"min-w":[{"min-w":[a,t,"min","max","fit"]}],"max-w":[{"max-w":[a,t,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[a,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,t,"auto","min","max","fit"]}],"font-size":[{text:["base",S,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[j]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",A,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...N(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",k,C]}],"underline-offset":[{"underline-offset":["auto",k,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),He]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ue]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Je]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...N(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:N()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...N()]}],"outline-offset":[{"outline-offset":[k,a]}],"outline-w":[{outline:[k,C]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[k,C]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Xe]}],"shadow-color":[{shadow:[j]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",S,a]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[b]}],saturate:[{saturate:[M]}],sepia:[{sepia:[Y]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[Y]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[z]}],"scale-x":[{"scale-x":[z]}],"scale-y":[{"scale-y":[z]}],rotate:[{rotate:[P,a]}],"translate-x":[{"translate-x":[Z]}],"translate-y":[{"translate-y":[Z]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[k,C,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function et(e,{cacheSize:t,prefix:r,separator:n,extend:i={},override:o={}}){_(e,"cacheSize",t),_(e,"prefix",r),_(e,"separator",n);for(const s in o)tt(e[s],o[s]);for(const s in i)rt(e[s],i[s]);return e}function _(e,t,r){r!==void 0&&(e[t]=r)}function tt(e,t){if(t)for(const r in t)_(e,r,t[r])}function rt(e,t){if(t)for(const r in t){const n=t[r];n!==void 0&&(e[r]=(e[r]||[]).concat(n))}}function ot(e,...t){return typeof e=="function"?se(ie,e,...t):se(()=>et(ie(),e),...t)}const nt=ot({extend:{}}),{cva:gt,cx:st,compose:ht}=Se({hooks:{onComplete:e=>nt(e)}}),it="MODE_SELECT",lt="sb-next-ui-mode",at=()=>localStorage==null?void 0:localStorage.getItem(lt),ct="THEME_SELECT",dt="sb-next-ui-theme",ut=()=>localStorage==null?void 0:localStorage.getItem(dt),{useChannel:pt}=__STORYBOOK_MODULE_PREVIEW_API__,ft=(e,t)=>{const r=t.viewMode==="story",[n,i]=T.useState(ut()),[o,s]=T.useState(at());return pt({[ct]:({name:l})=>i(l),[it]:l=>s(l)}),L.jsx("div",{className:st(r&&"flex h-dvh w-full items-center justify-center"),children:L.jsx(ae,{themes:[he,le,ye],theme:n,mode:o,children:L.jsx(e,{})})})},yt={parameters:{docs:{source:{type:"dynamic"}}},decorators:[ft]};export{yt as default};
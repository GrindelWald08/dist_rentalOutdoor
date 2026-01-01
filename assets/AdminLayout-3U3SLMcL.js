import{c as r,o as u,b as f,v as b,r as p,j as e,L as i,e as g}from"./index-Dp5V46W7.js";import{a as j,b as N,B as y,S as v}from"./useAdmin-BxB2P_tw.js";import{P as k}from"./package-kCUf3xtc.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=r("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=r("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),C=[{href:"/admin",label:"Dashboard",icon:A},{href:"/admin/products",label:"Produk",icon:k},{href:"/admin/orders",label:"Pesanan",icon:v},{href:"/admin/testimonials",label:"Testimoni",icon:w},{href:"/admin/audit-logs",label:"Audit Log",icon:M}],V=({children:d,title:l})=>{const{isAdmin:t,isLoading:n}=j(),{user:o,loading:c}=u(),s=f(),m=b();return p.useEffect(()=>{!c&&!o?s("/auth"):!n&&!t&&o&&s("/")},[t,n,o,c,s]),c||n?e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary"})}):t?e.jsxs("div",{className:"min-h-screen bg-background flex",children:[e.jsxs("aside",{className:"w-64 bg-card border-r border-border p-4 flex flex-col",children:[e.jsxs("div",{className:"mb-8",children:[e.jsxs(i,{to:"/",className:"flex items-center gap-2 mb-6",children:[e.jsx("div",{className:"w-10 h-10 rounded-lg bg-accent flex items-center justify-center",children:e.jsx("span",{className:"text-accent-foreground font-bold text-xl",children:"R"})}),e.jsxs("span",{className:"font-bold text-xl text-foreground",children:["Rental",e.jsx("span",{className:"text-accent",children:"Gear"})]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-muted-foreground text-sm",children:[e.jsx(N,{className:"w-4 h-4"}),e.jsx("span",{children:"Admin Dashboard"})]})]}),e.jsx("nav",{className:"flex-1 space-y-1",children:C.map(a=>{const h=a.icon,x=m.pathname===a.href;return e.jsxs(i,{to:a.href,className:g("flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",x?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-muted hover:text-foreground"),children:[e.jsx(h,{className:"w-5 h-5"}),a.label]},a.href)})}),e.jsxs(y,{variant:"ghost",className:"justify-start gap-2 mt-auto",onClick:()=>s("/"),children:[e.jsx(L,{className:"w-4 h-4"}),"Kembali ke Website"]})]}),e.jsxs("main",{className:"flex-1 overflow-auto",children:[e.jsx("header",{className:"bg-card border-b border-border px-6 py-4",children:e.jsx("h1",{className:"text-2xl font-bold text-foreground",children:l})}),e.jsx("div",{className:"p-6",children:d})]})]}):null};export{V as A,M as S};

import{R as e}from"./iframe-B6BB7SE7.js";import{D as l}from"./data-editor-all-Bo3JCWIw.js";import{B as s,D as a,u as n,d as i}from"./utils-Bp6Jia9o.js";import{S as m}from"./story-utils-D5TzgPCe.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DkdLdcZn.js";import"./throttle-ClvAx-m_.js";import"./marked.esm-JH4R6def.js";import"./flatten-xp5kEhqg.js";import"./scrolling-data-grid-BiQNnq5H.js";import"./isArray-Qc_lD31Y.js";import"./useResizeDetector-CoEKsWyI.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(m,null,e.createElement(s,{title:"Ten Million Cells",description:e.createElement(a,null,"Data grid supports over 10 million cells. Go nuts with it.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o}=n(100);return e.createElement(l,{...i,rowMarkers:"number",getCellContent:o,columns:r,rows:1e5})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...t.parameters?.docs?.source}}};const T=["TenMillionCells"];export{t as TenMillionCells,T as __namedExportsOrder,k as default};

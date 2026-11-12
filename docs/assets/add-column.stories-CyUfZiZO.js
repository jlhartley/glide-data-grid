import{R as e}from"./iframe-B6BB7SE7.js";import{D as a}from"./data-editor-all-Bo3JCWIw.js";import{B as s,D as l,M as m,u as c,d as u}from"./utils-Bp6Jia9o.js";import{S as i}from"./story-utils-D5TzgPCe.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DkdLdcZn.js";import"./throttle-ClvAx-m_.js";import"./marked.esm-JH4R6def.js";import"./flatten-xp5kEhqg.js";import"./scrolling-data-grid-BiQNnq5H.js";import"./isArray-Qc_lD31Y.js";import"./useResizeDetector-CoEKsWyI.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(i,null,e.createElement(s,{title:"Add and remove columns",description:e.createElement(e.Fragment,null,e.createElement(l,null,"You can add and remove columns at your disposal"),e.createElement(m,null,"Use the story's controls to change the number of columns"))},e.createElement(r,null)))]},t=r=>{const{cols:o,getCellContent:n}=c(r.columnsCount);return e.createElement(a,{...u,rowMarkers:"number",getCellContent:n,experimental:{strict:!0},columns:o,rows:1e4})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={cols} rows={10_000} />;
}`,...t.parameters?.docs?.source}}};const A=["AddColumns"];export{t as AddColumns,A as __namedExportsOrder,y as default};

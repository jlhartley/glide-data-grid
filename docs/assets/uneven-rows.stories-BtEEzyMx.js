import{R as e}from"./iframe-CIssbtkb.js";import{D as a}from"./data-editor-all-C-qBUU8N.js";import{B as s,D as l,P as i,u as m,d as c}from"./utils-jIM3OMih.js";import{S as p}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-CG_9cDKv.js";import"./throttle-CS-8w14I.js";import"./marked.esm-XxaRhz0v.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(p,null,e.createElement(s,{title:"Uneven Rows",description:e.createElement(l,null,"Rows can be made uneven by passing a callback to the ",e.createElement(i,null,"rowHeight")," prop")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:n}=m(6);return e.createElement(a,{...c,rowHeight:o=>o%3===0?30:o%2?50:60,getCellContent:n,columns:r,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => {
    if (r % 3 === 0) return 30;
    return r % 2 ? 50 : 60;
  }} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const b=["UnevenRows"];export{t as UnevenRows,b as __namedExportsOrder,P as default};

import{R as e}from"./iframe-CIssbtkb.js";import{D as s}from"./data-editor-all-C-qBUU8N.js";import{B as a,D as n,u as l,d as i}from"./utils-jIM3OMih.js";import{S as m}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-CG_9cDKv.js";import"./throttle-CS-8w14I.js";import"./marked.esm-XxaRhz0v.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(a,{title:"One Million Rows",description:e.createElement(n,null,"Data grid supports over 1 million rows. Your limit is mostly RAM.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=l(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const k=["OneMillionRows"];export{r as OneMillionRows,k as __namedExportsOrder,_ as default};

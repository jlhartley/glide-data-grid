import{R as e}from"./iframe-Dm2sTaU0.js";import{D as s}from"./data-editor-all-D8fhf72B.js";import{B as a,D as n,u as l,d as i}from"./utils-0xoxKcOj.js";import{S as m}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(a,{title:"One Million Rows",description:e.createElement(n,null,"Data grid supports over 1 million rows. Your limit is mostly RAM.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=l(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const k=["OneMillionRows"];export{r as OneMillionRows,k as __namedExportsOrder,_ as default};

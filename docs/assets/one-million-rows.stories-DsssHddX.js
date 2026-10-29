import{R as e}from"./iframe-BynEneiI.js";import{D as s}from"./data-editor-all-B_BNdl63.js";import{B as a,D as n,u as l,d as i}from"./utils-By-9wJ6Q.js";import{S as m}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(a,{title:"One Million Rows",description:e.createElement(n,null,"Data grid supports over 1 million rows. Your limit is mostly RAM.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=l(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const k=["OneMillionRows"];export{r as OneMillionRows,k as __namedExportsOrder,_ as default};

import{R as e}from"./iframe-Dbp73MOp.js";import{D as s}from"./data-editor-all-HHvPOna4.js";import{B as a,D as n,u as l,d as i}from"./utils-Cf1D58ZQ.js";import{S as m}from"./story-utils-BIPBpbW3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Be_7MNeG.js";import"./throttle-CLRnT4mA.js";import"./marked.esm-DAaUEZN-.js";import"./flatten-4Eqg-Qh7.js";import"./scrolling-data-grid-X3BJYkAb.js";import"./isArray-Bu1qskEf.js";import"./useResizeDetector-OsRWTDor.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(a,{title:"One Million Rows",description:e.createElement(n,null,"Data grid supports over 1 million rows. Your limit is mostly RAM.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=l(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e6,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={1_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const k=["OneMillionRows"];export{r as OneMillionRows,k as __namedExportsOrder,_ as default};

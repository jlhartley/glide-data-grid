import{R as e}from"./iframe-DgBdMeKd.js";import{D as n}from"./data-editor-all-hSSLvTLU.js";import{B as s,D as a,u as l,d as m}from"./utils-DbfSqIKT.js";import{S as i}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const G={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(i,null,e.createElement(s,{title:"One Hundred Thousand Columns",description:e.createElement(a,null,"Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important.")},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r}=l(1e5);return e.createElement(n,{...m,getCellContent:r,columns:o,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100_000);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const H=["OneHundredThousandCols"];export{t as OneHundredThousandCols,H as __namedExportsOrder,G as default};

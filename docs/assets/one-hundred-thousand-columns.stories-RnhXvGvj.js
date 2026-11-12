import{R as e}from"./iframe-CGacQk3t.js";import{D as n}from"./data-editor-all-GW1XoTNe.js";import{B as s,D as a,u as l,d as m}from"./utils-BrIUS6OF.js";import{S as i}from"./story-utils-ChZpZSIP.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DYf7-dJA.js";import"./throttle-z4P8_AJB.js";import"./marked.esm-NNTbNMT3.js";import"./flatten-D-asroPf.js";import"./scrolling-data-grid-IyLHUpxh.js";import"./isArray-c_-2aBH6.js";import"./useResizeDetector-CX_KSo4l.js";const G={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(i,null,e.createElement(s,{title:"One Hundred Thousand Columns",description:e.createElement(a,null,"Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important.")},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r}=l(1e5);return e.createElement(n,{...m,getCellContent:r,columns:o,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100_000);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const H=["OneHundredThousandCols"];export{t as OneHundredThousandCols,H as __namedExportsOrder,G as default};

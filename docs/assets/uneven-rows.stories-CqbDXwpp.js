import{R as e}from"./iframe-CGacQk3t.js";import{D as a}from"./data-editor-all-GW1XoTNe.js";import{B as s,D as l,P as i,u as m,d as c}from"./utils-BrIUS6OF.js";import{S as p}from"./story-utils-ChZpZSIP.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DYf7-dJA.js";import"./throttle-z4P8_AJB.js";import"./marked.esm-NNTbNMT3.js";import"./flatten-D-asroPf.js";import"./scrolling-data-grid-IyLHUpxh.js";import"./isArray-c_-2aBH6.js";import"./useResizeDetector-CX_KSo4l.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(p,null,e.createElement(s,{title:"Uneven Rows",description:e.createElement(l,null,"Rows can be made uneven by passing a callback to the ",e.createElement(i,null,"rowHeight")," prop")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:n}=m(6);return e.createElement(a,{...c,rowHeight:o=>o%3===0?30:o%2?50:60,getCellContent:n,columns:r,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => {
    if (r % 3 === 0) return 30;
    return r % 2 ? 50 : 60;
  }} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const b=["UnevenRows"];export{t as UnevenRows,b as __namedExportsOrder,P as default};

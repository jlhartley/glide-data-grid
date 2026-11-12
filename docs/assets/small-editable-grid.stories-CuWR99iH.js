import{R as e}from"./iframe-B6BB7SE7.js";import{D as l}from"./data-editor-all-Bo3JCWIw.js";import{B as s,D as n,u as i,d as m}from"./utils-Bp6Jia9o.js";import{S as d}from"./story-utils-D5TzgPCe.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DkdLdcZn.js";import"./throttle-ClvAx-m_.js";import"./marked.esm-JH4R6def.js";import"./flatten-xp5kEhqg.js";import"./scrolling-data-grid-BiQNnq5H.js";import"./isArray-Qc_lD31Y.js";import"./useResizeDetector-CoEKsWyI.js";const h={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(d,null,e.createElement(s,{title:"Editable Grid",description:e.createElement(n,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o,setCellValue:a}=i(6,!1);return e.createElement(l,{...m,getCellContent:o,columns:r,rows:20,onCellEdited:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...t.parameters?.docs?.source}}};const w=["SmallEditableGrid"];export{t as SmallEditableGrid,w as __namedExportsOrder,h as default};

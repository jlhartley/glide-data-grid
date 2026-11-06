import{R as e}from"./iframe-Dbp73MOp.js";import{D as l}from"./data-editor-all-HHvPOna4.js";import{B as s,D as n,u as i,d as m}from"./utils-Cf1D58ZQ.js";import{S as d}from"./story-utils-BIPBpbW3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Be_7MNeG.js";import"./throttle-CLRnT4mA.js";import"./marked.esm-DAaUEZN-.js";import"./flatten-4Eqg-Qh7.js";import"./scrolling-data-grid-X3BJYkAb.js";import"./isArray-Bu1qskEf.js";import"./useResizeDetector-OsRWTDor.js";const h={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(d,null,e.createElement(s,{title:"Editable Grid",description:e.createElement(n,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o,setCellValue:a}=i(6,!1);return e.createElement(l,{...m,getCellContent:o,columns:r,rows:20,onCellEdited:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...t.parameters?.docs?.source}}};const w=["SmallEditableGrid"];export{t as SmallEditableGrid,w as __namedExportsOrder,h as default};

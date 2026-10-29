import{R as e}from"./iframe-Dm2sTaU0.js";import{D as l}from"./data-editor-all-D8fhf72B.js";import{B as s,D as n,u as i,d as m}from"./utils-0xoxKcOj.js";import{S as d}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const h={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(d,null,e.createElement(s,{title:"Editable Grid",description:e.createElement(n,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o,setCellValue:a}=i(6,!1);return e.createElement(l,{...m,getCellContent:o,columns:r,rows:20,onCellEdited:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...t.parameters?.docs?.source}}};const w=["SmallEditableGrid"];export{t as SmallEditableGrid,w as __namedExportsOrder,h as default};

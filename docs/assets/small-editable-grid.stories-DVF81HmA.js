import{R as e}from"./iframe-BynEneiI.js";import{D as l}from"./data-editor-all-B_BNdl63.js";import{B as s,D as n,u as i,d as m}from"./utils-By-9wJ6Q.js";import{S as d}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const h={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(d,null,e.createElement(s,{title:"Editable Grid",description:e.createElement(n,null,"Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o,setCellValue:a}=i(6,!1);return e.createElement(l,{...m,getCellContent:o,columns:r,rows:20,onCellEdited:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={setCellValue} />;
}`,...t.parameters?.docs?.source}}};const w=["SmallEditableGrid"];export{t as SmallEditableGrid,w as __namedExportsOrder,h as default};

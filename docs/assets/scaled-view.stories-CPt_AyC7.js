import{R as e}from"./iframe-C1-HlzKK.js";import{D as s}from"./data-editor-all-dl81PPU5.js";import{B as n,D as l,u as i,d as m}from"./utils-C0A3aDn0.js";import{S as c}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(c,null,e.createElement(n,{title:"Scaled view",description:e.createElement(l,null,"The data editor supports being scaled."),scale:"0.5"},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r,onColumnResize:a}=i(60);return e.createElement(s,{...m,getCellContent:r,columns:o,rowMarkers:"both",rows:500,onColumnResize:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...t.parameters?.docs?.source}}};const z=["ScaledView"];export{t as ScaledView,z as __namedExportsOrder,k as default};

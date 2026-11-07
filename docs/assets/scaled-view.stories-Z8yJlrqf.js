import{R as e}from"./iframe-B0S1gjT9.js";import{D as s}from"./data-editor-all-BWrHhPq-.js";import{B as n,D as l,u as i,d as m}from"./utils-BLNZp51M.js";import{S as c}from"./story-utils-NeWIluy3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(c,null,e.createElement(n,{title:"Scaled view",description:e.createElement(l,null,"The data editor supports being scaled."),scale:"0.5"},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r,onColumnResize:a}=i(60);return e.createElement(s,{...m,getCellContent:r,columns:o,rowMarkers:"both",rows:500,onColumnResize:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...t.parameters?.docs?.source}}};const z=["ScaledView"];export{t as ScaledView,z as __namedExportsOrder,k as default};

import{R as e}from"./iframe-BynEneiI.js";import{D as s}from"./data-editor-all-B_BNdl63.js";import{B as n,D as l,u as i,d as m}from"./utils-By-9wJ6Q.js";import{S as c}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(c,null,e.createElement(n,{title:"Scaled view",description:e.createElement(l,null,"The data editor supports being scaled."),scale:"0.5"},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r,onColumnResize:a}=i(60);return e.createElement(s,{...m,getCellContent:r,columns:o,rowMarkers:"both",rows:500,onColumnResize:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...t.parameters?.docs?.source}}};const z=["ScaledView"];export{t as ScaledView,z as __namedExportsOrder,k as default};

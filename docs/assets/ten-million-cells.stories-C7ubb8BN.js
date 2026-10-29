import{R as e}from"./iframe-BynEneiI.js";import{D as l}from"./data-editor-all-B_BNdl63.js";import{B as s,D as a,u as n,d as i}from"./utils-By-9wJ6Q.js";import{S as m}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(m,null,e.createElement(s,{title:"Ten Million Cells",description:e.createElement(a,null,"Data grid supports over 10 million cells. Go nuts with it.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o}=n(100);return e.createElement(l,{...i,rowMarkers:"number",getCellContent:o,columns:r,rows:1e5})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...t.parameters?.docs?.source}}};const T=["TenMillionCells"];export{t as TenMillionCells,T as __namedExportsOrder,k as default};

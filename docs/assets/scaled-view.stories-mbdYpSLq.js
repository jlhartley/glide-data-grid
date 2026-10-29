import{R as e}from"./iframe-Dm2sTaU0.js";import{D as s}from"./data-editor-all-D8fhf72B.js";import{B as n,D as l,u as i,d as m}from"./utils-0xoxKcOj.js";import{S as c}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(c,null,e.createElement(n,{title:"Scaled view",description:e.createElement(l,null,"The data editor supports being scaled."),scale:"0.5"},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r,onColumnResize:a}=i(60);return e.createElement(s,{...m,getCellContent:r,columns:o,rowMarkers:"both",rows:500,onColumnResize:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...t.parameters?.docs?.source}}};const z=["ScaledView"];export{t as ScaledView,z as __namedExportsOrder,k as default};

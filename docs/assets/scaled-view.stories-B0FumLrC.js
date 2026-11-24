import{R as e}from"./iframe-8J4cXWcv.js";import{D as s}from"./data-editor-all-DTDYO8Iw.js";import{B as n,D as l,u as i,d as m}from"./utils-COrtLQMp.js";import{S as c}from"./story-utils-CLwK7f6H.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-gjKS9iZw.js";import"./throttle-C81o-Tu7.js";import"./marked.esm-BKoIpwcY.js";import"./flatten-CQGy__pz.js";import"./scrolling-data-grid-DGRCmykM.js";import"./isArray-YMb5690H.js";import"./useResizeDetector-D8f9th5l.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(c,null,e.createElement(n,{title:"Scaled view",description:e.createElement(l,null,"The data editor supports being scaled."),scale:"0.5"},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r,onColumnResize:a}=i(60);return e.createElement(s,{...m,getCellContent:r,columns:o,rowMarkers:"both",rows:500,onColumnResize:a})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={500} onColumnResize={onColumnResize} />;
}`,...t.parameters?.docs?.source}}};const z=["ScaledView"];export{t as ScaledView,z as __namedExportsOrder,k as default};

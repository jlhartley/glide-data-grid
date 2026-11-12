import{R as e}from"./iframe-CGacQk3t.js";import{D as s}from"./data-editor-all-GW1XoTNe.js";import{B as a,D as l,P as n,u as c,d as m}from"./utils-BrIUS6OF.js";import{S as i}from"./story-utils-ChZpZSIP.js";import"./lodash-D6GxEOrh.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DYf7-dJA.js";import"./throttle-z4P8_AJB.js";import"./marked.esm-NNTbNMT3.js";import"./flatten-D-asroPf.js";import"./scrolling-data-grid-IyLHUpxh.js";import"./isArray-c_-2aBH6.js";import"./useResizeDetector-CX_KSo4l.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(a,{title:"Scroll Offset",description:e.createElement(l,null,"The ",e.createElement(n,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=c(100);return e.createElement(s,{...m,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:o,columns:t,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...r.parameters?.docs?.source}}};const P=["ScrollOffset"];export{r as ScrollOffset,P as __namedExportsOrder,M as default};

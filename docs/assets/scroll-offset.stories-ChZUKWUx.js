import{R as e}from"./iframe-BynEneiI.js";import{D as s}from"./data-editor-all-B_BNdl63.js";import{B as a,D as l,P as n,u as c,d as m}from"./utils-By-9wJ6Q.js";import{S as i}from"./story-utils-q8CUafD6.js";import"./lodash-dWVUTNUE.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(a,{title:"Scroll Offset",description:e.createElement(l,null,"The ",e.createElement(n,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=c(100);return e.createElement(s,{...m,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:o,columns:t,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...r.parameters?.docs?.source}}};const P=["ScrollOffset"];export{r as ScrollOffset,P as __namedExportsOrder,M as default};

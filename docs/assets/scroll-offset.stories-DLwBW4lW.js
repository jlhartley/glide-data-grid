import{R as e}from"./iframe-B0S1gjT9.js";import{D as s}from"./data-editor-all-BWrHhPq-.js";import{B as a,D as l,P as n,u as c,d as m}from"./utils-BLNZp51M.js";import{S as i}from"./story-utils-NeWIluy3.js";import"./lodash-JcxmCzvL.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(a,{title:"Scroll Offset",description:e.createElement(l,null,"The ",e.createElement(n,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=c(100);return e.createElement(s,{...m,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:o,columns:t,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...r.parameters?.docs?.source}}};const P=["ScrollOffset"];export{r as ScrollOffset,P as __namedExportsOrder,M as default};

import{R as e}from"./iframe-Dm2sTaU0.js";import{D as s}from"./data-editor-all-D8fhf72B.js";import{B as a,D as l,P as n,u as c,d as m}from"./utils-0xoxKcOj.js";import{S as i}from"./story-utils-Ql6G6nq_.js";import"./lodash-h4T8gnaP.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(a,{title:"Scroll Offset",description:e.createElement(l,null,"The ",e.createElement(n,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=c(100);return e.createElement(s,{...m,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:o,columns:t,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...r.parameters?.docs?.source}}};const P=["ScrollOffset"];export{r as ScrollOffset,P as __namedExportsOrder,M as default};

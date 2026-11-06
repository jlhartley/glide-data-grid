import{R as e}from"./iframe-Dbp73MOp.js";import{D as s}from"./data-editor-all-HHvPOna4.js";import{B as a,D as l,P as n,u as c,d as m}from"./utils-Cf1D58ZQ.js";import{S as i}from"./story-utils-BIPBpbW3.js";import"./lodash-19MFyK5D.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Be_7MNeG.js";import"./throttle-CLRnT4mA.js";import"./marked.esm-DAaUEZN-.js";import"./flatten-4Eqg-Qh7.js";import"./scrolling-data-grid-X3BJYkAb.js";import"./isArray-Bu1qskEf.js";import"./useResizeDetector-OsRWTDor.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(a,{title:"Scroll Offset",description:e.createElement(l,null,"The ",e.createElement(n,null,"rowGrouping")," prop can be used to group and even fold rows.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=c(100);return e.createElement(s,{...m,height:"100%",rowMarkers:"both",scrollOffsetY:400,getCellContent:o,columns:t,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 1000;
  return <DataEditor {...defaultProps} height="100%" rowMarkers="both" scrollOffsetY={400} getCellContent={getCellContent} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...r.parameters?.docs?.source}}};const P=["ScrollOffset"];export{r as ScrollOffset,P as __namedExportsOrder,M as default};

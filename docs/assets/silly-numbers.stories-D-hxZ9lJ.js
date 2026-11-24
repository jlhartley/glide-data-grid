import{R as e}from"./iframe-8J4cXWcv.js";import{D as s}from"./data-editor-all-DTDYO8Iw.js";import{B as l,D as a,u as n,d as i}from"./utils-COrtLQMp.js";import{S as m}from"./story-utils-CLwK7f6H.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-gjKS9iZw.js";import"./throttle-C81o-Tu7.js";import"./marked.esm-BKoIpwcY.js";import"./flatten-CQGy__pz.js";import"./scrolling-data-grid-DGRCmykM.js";import"./isArray-YMb5690H.js";import"./useResizeDetector-D8f9th5l.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(l,{title:"100 Million Rows",description:e.createElement(a,null,"100 million rows is silly. Once we cross about 33 million pixels in height we can no longer trust the browser to scroll accurately.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=n(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e8,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={100_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const M=["SillyNumbers"];export{r as SillyNumbers,M as __namedExportsOrder,y as default};

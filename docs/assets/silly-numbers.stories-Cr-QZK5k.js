import{R as e}from"./iframe-B0S1gjT9.js";import{D as s}from"./data-editor-all-BWrHhPq-.js";import{B as l,D as a,u as n,d as i}from"./utils-BLNZp51M.js";import{S as m}from"./story-utils-NeWIluy3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(l,{title:"100 Million Rows",description:e.createElement(a,null,"100 million rows is silly. Once we cross about 33 million pixels in height we can no longer trust the browser to scroll accurately.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=n(6);return e.createElement(s,{...i,getCellContent:o,columns:t,rowHeight:31,rows:1e8,rowMarkers:"number"})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowHeight={31} rows={100_000_000} rowMarkers="number" />;
}`,...r.parameters?.docs?.source}}};const M=["SillyNumbers"];export{r as SillyNumbers,M as __namedExportsOrder,y as default};

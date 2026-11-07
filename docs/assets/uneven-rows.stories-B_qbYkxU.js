import{R as e}from"./iframe-B0S1gjT9.js";import{D as a}from"./data-editor-all-BWrHhPq-.js";import{B as s,D as l,P as i,u as m,d as c}from"./utils-BLNZp51M.js";import{S as p}from"./story-utils-NeWIluy3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(p,null,e.createElement(s,{title:"Uneven Rows",description:e.createElement(l,null,"Rows can be made uneven by passing a callback to the ",e.createElement(i,null,"rowHeight")," prop")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:n}=m(6);return e.createElement(a,{...c,rowHeight:o=>o%3===0?30:o%2?50:60,getCellContent:n,columns:r,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => {
    if (r % 3 === 0) return 30;
    return r % 2 ? 50 : 60;
  }} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const b=["UnevenRows"];export{t as UnevenRows,b as __namedExportsOrder,P as default};

import{R as e}from"./iframe-nea0cPhn.js";import{D as l}from"./data-editor-all-BTagn7nc.js";import{B as s,D as a,u as n,d as i}from"./utils-DKGYjL2t.js";import{S as m}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(m,null,e.createElement(s,{title:"Ten Million Cells",description:e.createElement(a,null,"Data grid supports over 10 million cells. Go nuts with it.")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:o}=n(100);return e.createElement(l,{...i,rowMarkers:"number",getCellContent:o,columns:r,rows:1e5})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} columns={cols} rows={100_000} />;
}`,...t.parameters?.docs?.source}}};const T=["TenMillionCells"];export{t as TenMillionCells,T as __namedExportsOrder,k as default};

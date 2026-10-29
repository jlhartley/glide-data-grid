import{R as e}from"./iframe-BynEneiI.js";import{D as n}from"./data-editor-all-B_BNdl63.js";import{B as s,D as l,P as m,u as i,d as c}from"./utils-By-9wJ6Q.js";import{S as p}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(p,null,e.createElement(s,{title:"Uneven Rows",description:e.createElement(l,null,"Rows can be made uneven by passing a callback to the ",e.createElement(m,null,"rowHeight")," prop")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:a}=i(6);return e.createElement(n,{...c,rowHeight:o=>o%3===0?30:o%2?50:60,getCellContent:a,columns:r,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => r % 3 === 0 ? 30 : r % 2 ? 50 : 60} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const b=["UnevenRows"];export{t as UnevenRows,b as __namedExportsOrder,P as default};

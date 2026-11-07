import{R as e}from"./iframe-yAdxwnIh.js";import{D as a}from"./data-editor-all-DA4mpUuT.js";import{B as s,D as l,P as i,u as m,d as c}from"./utils-BW6xFMNx.js";import{S as p}from"./story-utils-C_mOain-.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-C-Ae0dnz.js";import"./throttle-CKzIBAcK.js";import"./marked.esm-CYFYFW9k.js";import"./flatten-HEP_MXza.js";import"./scrolling-data-grid-Ckor_nMY.js";import"./isArray-HtNTO0sg.js";import"./useResizeDetector-wJHMEN9Q.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(p,null,e.createElement(s,{title:"Uneven Rows",description:e.createElement(l,null,"Rows can be made uneven by passing a callback to the ",e.createElement(i,null,"rowHeight")," prop")},e.createElement(r,null)))]},t=()=>{const{cols:r,getCellContent:n}=m(6);return e.createElement(a,{...c,rowHeight:o=>o%3===0?30:o%2?50:60,getCellContent:n,columns:r,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  return <DataEditor {...defaultProps} rowHeight={r => {
    if (r % 3 === 0) return 30;
    return r % 2 ? 50 : 60;
  }} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const b=["UnevenRows"];export{t as UnevenRows,b as __namedExportsOrder,P as default};

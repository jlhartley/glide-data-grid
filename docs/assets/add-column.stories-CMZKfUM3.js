import{R as e}from"./iframe-8J4cXWcv.js";import{D as a}from"./data-editor-all-DTDYO8Iw.js";import{B as s,D as l,M as m,u as c,d as u}from"./utils-COrtLQMp.js";import{S as i}from"./story-utils-CLwK7f6H.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-gjKS9iZw.js";import"./throttle-C81o-Tu7.js";import"./marked.esm-BKoIpwcY.js";import"./flatten-CQGy__pz.js";import"./scrolling-data-grid-DGRCmykM.js";import"./isArray-YMb5690H.js";import"./useResizeDetector-D8f9th5l.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(i,null,e.createElement(s,{title:"Add and remove columns",description:e.createElement(e.Fragment,null,e.createElement(l,null,"You can add and remove columns at your disposal"),e.createElement(m,null,"Use the story's controls to change the number of columns"))},e.createElement(r,null)))]},t=r=>{const{cols:o,getCellContent:n}=c(r.columnsCount);return e.createElement(a,{...u,rowMarkers:"number",getCellContent:n,experimental:{strict:!0},columns:o,rows:1e4})};t.args={columnsCount:10};t.argTypes={columnsCount:{control:{type:"range",min:2,max:200}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(p.columnsCount);
  return <DataEditor {...defaultProps} rowMarkers="number" getCellContent={getCellContent} experimental={{
    strict: true
  }} columns={cols} rows={10_000} />;
}`,...t.parameters?.docs?.source}}};const A=["AddColumns"];export{t as AddColumns,A as __namedExportsOrder,y as default};

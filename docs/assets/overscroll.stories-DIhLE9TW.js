import{R as e}from"./iframe-DgBdMeKd.js";import{D as c}from"./data-editor-all-hSSLvTLU.js";import{B as m,D as p,P as t,u as i,d as u}from"./utils-DbfSqIKT.js";import{S as d}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(d,null,e.createElement(m,{title:"Overscroll",description:e.createElement(e.Fragment,null,e.createElement(p,null,"You can allocate extra space at the ends of the grid by setting the"," ",e.createElement(t,null,"overscrollX")," and ",e.createElement(t,null,"overscrollY")," props"))},e.createElement(o,null)))]},r=o=>{const{overscrollX:l,overscrollY:s}=o,{cols:a,getCellContent:n}=i(20);return e.createElement(c,{...u,getCellContent:n,columns:a,overscrollX:l,overscrollY:s,rows:50})};r.argTypes={overscrollX:{control:{type:"range",min:0,max:600}},overscrollY:{control:{type:"range",min:0,max:600}}};r.args={overscrollX:200,overscrollY:200};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`p => {
  const {
    overscrollX,
    overscrollY
  } = p;
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} overscrollX={overscrollX} overscrollY={overscrollY} rows={50} />;
}`,...r.parameters?.docs?.source}}};const P=["Overscroll"];export{r as Overscroll,P as __namedExportsOrder,O as default};

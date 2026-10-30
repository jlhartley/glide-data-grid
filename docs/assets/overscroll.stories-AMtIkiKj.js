import{R as e}from"./iframe-nea0cPhn.js";import{D as c}from"./data-editor-all-BTagn7nc.js";import{B as m,D as p,P as t,u as i,d as u}from"./utils-DKGYjL2t.js";import{S as d}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(d,null,e.createElement(m,{title:"Overscroll",description:e.createElement(e.Fragment,null,e.createElement(p,null,"You can allocate extra space at the ends of the grid by setting the"," ",e.createElement(t,null,"overscrollX")," and ",e.createElement(t,null,"overscrollY")," props"))},e.createElement(o,null)))]},r=o=>{const{overscrollX:l,overscrollY:s}=o,{cols:a,getCellContent:n}=i(20);return e.createElement(c,{...u,getCellContent:n,columns:a,overscrollX:l,overscrollY:s,rows:50})};r.argTypes={overscrollX:{control:{type:"range",min:0,max:600}},overscrollY:{control:{type:"range",min:0,max:600}}};r.args={overscrollX:200,overscrollY:200};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`p => {
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

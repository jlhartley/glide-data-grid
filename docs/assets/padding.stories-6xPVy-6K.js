import{R as t}from"./iframe-nea0cPhn.js";import{D as p}from"./data-editor-all-BTagn7nc.js";import{B as s,D as l,P as a,u as m,d as c}from"./utils-DKGYjL2t.js";import{S as g}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t.createElement(g,null,t.createElement(s,{title:"Padding",description:t.createElement(t.Fragment,null,t.createElement(l,null,"You can add padding at the ends of the grid by setting the"," ",t.createElement(a,null,"paddingRight")," and ",t.createElement(a,null,"paddingBottom")," props"))},t.createElement(r,null)))]},e=r=>{const{paddingRight:n,paddingBottom:o}=r,{cols:i,getCellContent:d}=m(20);return t.createElement(p,{...c,getCellContent:d,columns:i,rowMarkers:"both",experimental:{paddingRight:n,paddingBottom:o},rows:50})};e.argTypes={paddingRight:{control:{type:"range",min:0,max:600}},paddingBottom:{control:{type:"range",min:0,max:600}}};e.args={paddingRight:200,paddingBottom:200};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`p => {
  const {
    paddingRight,
    paddingBottom
  } = p;
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} experimental={{
    paddingRight,
    paddingBottom
  }} rows={50} />;
}`,...e.parameters?.docs?.source}}};const G=["Padding"];export{e as Padding,G as __namedExportsOrder,y as default};

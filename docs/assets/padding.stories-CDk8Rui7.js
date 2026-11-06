import{R as t}from"./iframe-Dbp73MOp.js";import{D as p}from"./data-editor-all-HHvPOna4.js";import{B as s,D as l,P as a,u as m,d as c}from"./utils-Cf1D58ZQ.js";import{S as g}from"./story-utils-BIPBpbW3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Be_7MNeG.js";import"./throttle-CLRnT4mA.js";import"./marked.esm-DAaUEZN-.js";import"./flatten-4Eqg-Qh7.js";import"./scrolling-data-grid-X3BJYkAb.js";import"./isArray-Bu1qskEf.js";import"./useResizeDetector-OsRWTDor.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>t.createElement(g,null,t.createElement(s,{title:"Padding",description:t.createElement(t.Fragment,null,t.createElement(l,null,"You can add padding at the ends of the grid by setting the"," ",t.createElement(a,null,"paddingRight")," and ",t.createElement(a,null,"paddingBottom")," props"))},t.createElement(r,null)))]},e=r=>{const{paddingRight:n,paddingBottom:o}=r,{cols:i,getCellContent:d}=m(20);return t.createElement(p,{...c,getCellContent:d,columns:i,rowMarkers:"both",experimental:{paddingRight:n,paddingBottom:o},rows:50})};e.argTypes={paddingRight:{control:{type:"range",min:0,max:600}},paddingBottom:{control:{type:"range",min:0,max:600}}};e.args={paddingRight:200,paddingBottom:200};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`p => {
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

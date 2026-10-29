import{R as e}from"./iframe-C1-HlzKK.js";import{D as n}from"./data-editor-all-dl81PPU5.js";import{B as s,D as l,P as m,u,d as c}from"./utils-C0A3aDn0.js";import{S as i}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(i,null,e.createElement(s,{title:"Freeze columns",description:e.createElement(l,null,"Columns at the start of your grid can be frozen in place by settings"," ",e.createElement(m,null,"freezeColumns")," to a number greater than 0.")},e.createElement(t,null)))]},r=t=>{const{cols:o,getCellContent:a}=u(100);return e.createElement(n,{...c,rowMarkers:"both",freezeColumns:t.freezeColumns,getCellContent:a,columns:o,verticalBorder:!1,rows:1e3})};r.argTypes={freezeColumns:{control:{type:"range",min:0,max:10}}};r.args={freezeColumns:1};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={p.freezeColumns} getCellContent={getCellContent} columns={cols} verticalBorder={false} rows={1000} />;
}`,...r.parameters?.docs?.source}}};const B=["FreezeColumns"];export{r as FreezeColumns,B as __namedExportsOrder,y as default};

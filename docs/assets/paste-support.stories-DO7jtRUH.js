import{R as e}from"./iframe-BynEneiI.js";import{D as l}from"./data-editor-all-B_BNdl63.js";import{B as n,D as m,P as p,M as i,u,d as c}from"./utils-By-9wJ6Q.js";import{S as d}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const R={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(d,null,e.createElement(n,{title:"Paste support",description:e.createElement(e.Fragment,null,e.createElement(m,null,"The data grid can handle paste automatically by returning true from"," ",e.createElement(p,null,"onPaste"),". You can also return false and handle paste yourself. If paste is undefined the DataEditor will do its best to paste to the current cell."),e.createElement(i,null,"Paste supports the copy format of Google Sheets and Excel. Below is an example of data copied from excel with some escaped text."),e.createElement("textarea",{value:`Sunday	Dogs	https://google.com
Monday	Cats	https://google.com
Tuesday	Turtles	https://google.com
Wednesday	Bears	https://google.com
Thursday	"L  ions"	https://google.com
Friday	Pigs	https://google.com
Saturday	"Turkeys and some ""quotes"" and
a new line char ""more quotes"" plus a tab  ."	https://google.com`,style:{width:"100%",marginBottom:20,borderRadius:9,minHeight:200,padding:10}}))},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:a,onColumnResize:r,setCellValue:s}=u(50,!1);return e.createElement(l,{...c,getCellContent:a,rowMarkers:"both",columns:o,onCellEdited:s,onColumnResize:r,onPaste:!0,rows:400})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(50, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} rowMarkers="both" columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} onPaste={true} rows={400} />;
}`,...t.parameters?.docs?.source}}};const b=["PasteSupport"];export{t as PasteSupport,b as __namedExportsOrder,R as default};

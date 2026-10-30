import{R as e}from"./iframe-DgBdMeKd.js";import{D as a}from"./data-editor-all-hSSLvTLU.js";import{B as s,D as m,P as r,M as i,u as c,d as u}from"./utils-DbfSqIKT.js";import{S as p}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const M={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(p,null,e.createElement(s,{title:"Resizable columns",description:e.createElement(e.Fragment,null,e.createElement(m,null,"You can resize columns by dragging their edges, as long as you respond to the"," ",e.createElement(r,null,"onColumnResize")," prop."),e.createElement(i,null,"By setting the ",e.createElement(r,null,"overscrollX")," property extra space can be allocated at the end of the grid to allow for easier resizing of the final column. You can highlight multiple columns to resize them all at once."))},e.createElement(t,null)))]},o=()=>{const{cols:t,getCellContent:l,onColumnResize:n}=c(60);return e.createElement(a,{...u,getCellContent:l,columns:t,rowMarkers:"both",overscrollX:200,overscrollY:200,maxColumnAutoWidth:500,maxColumnWidth:2e3,rows:50,scaleToRem:!0,theme:e.useMemo(()=>({baseFontStyle:"0.8125rem",headerFontStyle:"600 0.8125rem",editorFontSize:"0.8125rem"}),[]),onColumnResize:n})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(60);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers="both" overscrollX={200} overscrollY={200} maxColumnAutoWidth={500} maxColumnWidth={2000} rows={50} scaleToRem={true} theme={React.useMemo(() => ({
    baseFontStyle: "0.8125rem",
    headerFontStyle: "600 0.8125rem",
    editorFontSize: "0.8125rem"
  }), [])} onColumnResize={onColumnResize} />;
}`,...o.parameters?.docs?.source}}};const x=["ResizableColumns"];export{o as ResizableColumns,x as __namedExportsOrder,M as default};

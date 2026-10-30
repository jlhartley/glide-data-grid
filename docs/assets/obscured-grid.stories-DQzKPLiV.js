import{R as t}from"./iframe-DgBdMeKd.js";import{D as a}from"./data-editor-all-hSSLvTLU.js";import{B as s,D as i,M as c,u as d,d as u}from"./utils-DbfSqIKT.js";import{S as m}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const f={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>t.createElement(m,null,t.createElement(s,{title:"Obscured Data Grid",description:t.createElement(t.Fragment,null,t.createElement(i,null,"The data grid should respect being obscured by other elements"),t.createElement(c,null,"This is mostly a test area because its hard to test with unit tests."))},t.createElement(n,null),t.createElement("div",{style:{position:"absolute",top:0,left:"50%",width:"50%",height:"100%",background:"rgba(0,0,0,0.5)",zIndex:100}})))]},o=()=>{const{cols:n,getCellContent:l,setCellValue:r}=d(60,!1);return t.createElement(a,{...u,getCellContent:l,onItemHovered:e=>console.log("onItemHovered",e),onCellClicked:e=>console.log("onCellClicked",e),onHeaderClicked:e=>console.log("onHeaderClicked",e),onCellContextMenu:e=>console.log("onCellContextMenu",e),onHeaderContextMenu:e=>console.log("onHeaderContextMenu",e),columns:n,rowMarkers:"both",onPaste:!0,onCellEdited:r,trailingRowOptions:{sticky:!0,tint:!0,hint:"New row..."},rows:1e4})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onItemHovered={x => console.log("onItemHovered", x)} onCellClicked={x => console.log("onCellClicked", x)} onHeaderClicked={x => console.log("onHeaderClicked", x)} onCellContextMenu={x => console.log("onCellContextMenu", x)} onHeaderContextMenu={x => console.log("onHeaderContextMenu", x)} columns={cols} rowMarkers={"both"} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={10_000} />;
}`,...o.parameters?.docs?.source}}};const G=["ObscuredDataGrid"];export{o as ObscuredDataGrid,G as __namedExportsOrder,f as default};

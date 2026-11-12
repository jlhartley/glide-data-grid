import{R as e}from"./iframe-CGacQk3t.js";import{D as o}from"./data-editor-all-GW1XoTNe.js";import{B as i,D as s,P as d,M as u,u as c,d as m}from"./utils-BrIUS6OF.js";import{a as p}from"./image-window-loader-DYf7-dJA.js";import{S as f}from"./story-utils-ChZpZSIP.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-z4P8_AJB.js";import"./flatten-D-asroPf.js";import"./scrolling-data-grid-IyLHUpxh.js";import"./marked.esm-NNTbNMT3.js";import"./isArray-c_-2aBH6.js";import"./useResizeDetector-CX_KSo4l.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[l=>e.createElement(f,null,e.createElement(i,{title:"Validate data",description:e.createElement(e.Fragment,null,e.createElement(s,null,"Data can be validated using the ",e.createElement(d,null,"validateCell")," callback"),e.createElement(u,null,'This example only allows the word "Valid" inside text cells.'))},e.createElement(l,null)))]},a=()=>{const{cols:l,getCellContent:r,setCellValue:n}=c(60,!1);return e.createElement(o,{...m,getCellContent:r,columns:l,rowMarkers:"both",onPaste:!0,onCellEdited:n,rows:100,validateCell:(C,t)=>t.kind!==p.Text||t.data==="Valid"?!0:t.data.toLowerCase()==="valid"?{...t,data:"Valid",selectionRange:[0,3]}:!1})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(60, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onPaste={true} onCellEdited={setCellValue} rows={100} validateCell={(_cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text) return true;
    if (newValue.data === "Valid") return true;
    if (newValue.data.toLowerCase() === "valid") {
      return {
        ...newValue,
        data: "Valid",
        selectionRange: [0, 3]
      };
    }
    return false;
  }} />;
}`,...a.parameters?.docs?.source}}};const b=["ValidateData"];export{a as ValidateData,b as __namedExportsOrder,_ as default};

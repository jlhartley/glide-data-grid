import{R as e}from"./iframe-DvUF06nB.js";import{D as d}from"./data-editor-all-F9INubhy.js";import{B as m,D as c,P as u,u as p,d as E}from"./utils-dagUfxOK.js";import{S as C}from"./story-utils-C0tNhMi0.js";import{a as f}from"./image-window-loader-DuBPEUkH.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Bs_Dyz9i.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./marked.esm-D9UvuHxz.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const V={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(C,null,e.createElement(m,{title:"Custom Editors",description:e.createElement(c,null,"The ",e.createElement(u,null,"provideEditor")," callback allows you to provide a custom editor for a cell. In this example, cells in the first column get a custom editor.")},e.createElement(t,null)))]},n=t=>{const{value:o,onFinishedEditing:i}=t,[l,a]=e.useState(o.data);return e.createElement("div",{style:{width:"100%",height:"100%"}},"Type something:",e.createElement("input",{style:{width:"100%",height:"100%",boxSizing:"border-box",border:"2px solid #666",background:"#333",color:"white",padding:"0 8px"},value:l,onChange:s=>a(s.target.value),onBlur:()=>i({...o,data:l})}))};n.displayName="CustomEditor";const g=t=>{if(t.location?.[0]===0)return o=>e.createElement(n,{...o})},r=()=>{const{cols:t,getCellContent:o,setCellValue:i}=p(10,!1);return e.createElement(d,{...E,getCellContent:o,columns:t,rows:20,onCellEdited:(l,a)=>{a.kind===f.Text&&i(l,a)},provideEditor:g})};r.displayName="CustomEditors";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={20} onCellEdited={(cell, newValue) => {
    if (newValue.kind !== GridCellKind.Text) return;
    setCellValue(cell, newValue);
  }} provideEditor={provideEditor as ProvideEditorCallback<any>} />;
}`,...r.parameters?.docs?.source}}};const B=["CustomEditors"];export{r as CustomEditors,B as __namedExportsOrder,V as default};

import{R as e}from"./iframe-Dm2sTaU0.js";import{D as d}from"./data-editor-all-D8fhf72B.js";import{B as m,D as c,P as u,u as p,d as E}from"./utils-0xoxKcOj.js";import{S as C}from"./story-utils-Ql6G6nq_.js";import{a as f}from"./image-window-loader-qCvk1D9s.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DgHjLOvN.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./marked.esm-CqBPueJW.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const V={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(C,null,e.createElement(m,{title:"Custom Editors",description:e.createElement(c,null,"The ",e.createElement(u,null,"provideEditor")," callback allows you to provide a custom editor for a cell. In this example, cells in the first column get a custom editor.")},e.createElement(t,null)))]},n=t=>{const{value:o,onFinishedEditing:i}=t,[l,a]=e.useState(o.data);return e.createElement("div",{style:{width:"100%",height:"100%"}},"Type something:",e.createElement("input",{style:{width:"100%",height:"100%",boxSizing:"border-box",border:"2px solid #666",background:"#333",color:"white",padding:"0 8px"},value:l,onChange:s=>a(s.target.value),onBlur:()=>i({...o,data:l})}))};n.displayName="CustomEditor";const g=t=>{if(t.location?.[0]===0)return o=>e.createElement(n,{...o})},r=()=>{const{cols:t,getCellContent:o,setCellValue:i}=p(10,!1);return e.createElement(d,{...E,getCellContent:o,columns:t,rows:20,onCellEdited:(l,a)=>{a.kind===f.Text&&i(l,a)},provideEditor:g})};r.displayName="CustomEditors";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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

import{R as t}from"./iframe-B0S1gjT9.js";import{D as a}from"./data-editor-all-BWrHhPq-.js";import{B as s,D as m,P as c,u,d as i,C as p}from"./utils-BLNZp51M.js";import{S as d}from"./story-utils-NeWIluy3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>t.createElement(d,null,t.createElement(s,{title:"New column button",description:t.createElement(m,null,"A new column button can be created using the ",t.createElement(c,null,"rightElement"),".")},t.createElement(e,null)))]},o=()=>{const{cols:e,getCellContent:n}=u(10,!0),r=t.useMemo(()=>e.map(l=>({...l,grow:1})),[e]);return t.createElement(a,{...i,getCellContent:n,columns:r,rightElement:t.createElement(p,null,t.createElement("button",{onClick:()=>window.alert("Add a column!")},"+")),rightElementProps:{fill:!1,sticky:!1},rows:3e3,rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, true);
  const columns = React.useMemo(() => cols.map(c => ({
    ...c,
    grow: 1
  })), [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rightElement={<ColumnAddButton>
                    <button onClick={() => window.alert("Add a column!")}>+</button>
                </ColumnAddButton>} rightElementProps={{
    fill: false,
    sticky: false
  }} rows={3000} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const G=["NewColumnButton"];export{o as NewColumnButton,G as __namedExportsOrder,P as default};

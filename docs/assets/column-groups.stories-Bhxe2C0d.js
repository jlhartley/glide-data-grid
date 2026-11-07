import{R as e}from"./iframe-CJTmT-AG.js";import{D as s}from"./data-editor-all-CERZFqHP.js";import{B as l,D as m,P as i,u,d as p}from"./utils-Ch69kIzC.js";import{G as d}from"./image-window-loader-CZc12hyi.js";import{S as c}from"./story-utils-tPy_bUfK.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-CVK-HSGa.js";import"./flatten-DPpkBAPa.js";import"./scrolling-data-grid-8M8RBQJh.js";import"./marked.esm-KrToXkRs.js";import"./isArray-Df33zTZY.js";import"./useResizeDetector-BpIT3axn.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(c,null,e.createElement(l,{title:"Column Grouping",description:e.createElement(m,null,"Columns in the data grid may be grouped by setting their ",e.createElement(i,null,"group")," ","property.")},e.createElement(t,null)))]},o=()=>{const{cols:t,getCellContent:a}=u(20,!0,!0);return e.createElement(s,{...p,getCellContent:a,onGroupHeaderRenamed:(r,n)=>window.alert(`Please rename group ${r} to ${n}`),columns:t,rows:1e3,getGroupDetails:r=>({name:r,icon:r===""?void 0:d.HeaderCode}),rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20, true, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onGroupHeaderRenamed={(x, y) => window.alert(\`Please rename group \${x} to \${y}\`)} columns={cols} rows={1000} getGroupDetails={g => ({
    name: g,
    icon: g === "" ? undefined : GridColumnIcon.HeaderCode
  })} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const H=["ColumnGroups"];export{o as ColumnGroups,H as __namedExportsOrder,x as default};

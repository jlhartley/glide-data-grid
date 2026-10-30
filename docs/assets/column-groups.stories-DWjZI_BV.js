import{R as e}from"./iframe-CIssbtkb.js";import{D as s}from"./data-editor-all-C-qBUU8N.js";import{B as l,D as m,P as i,u,d as p}from"./utils-jIM3OMih.js";import{G as d}from"./image-window-loader-CG_9cDKv.js";import{S as c}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-CS-8w14I.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./marked.esm-XxaRhz0v.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(c,null,e.createElement(l,{title:"Column Grouping",description:e.createElement(m,null,"Columns in the data grid may be grouped by setting their ",e.createElement(i,null,"group")," ","property.")},e.createElement(t,null)))]},o=()=>{const{cols:t,getCellContent:a}=u(20,!0,!0);return e.createElement(s,{...p,getCellContent:a,onGroupHeaderRenamed:(r,n)=>window.alert(`Please rename group ${r} to ${n}`),columns:t,rows:1e3,getGroupDetails:r=>({name:r,icon:r===""?void 0:d.HeaderCode}),rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(20, true, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} onGroupHeaderRenamed={(x, y) => window.alert(\`Please rename group \${x} to \${y}\`)} columns={cols} rows={1000} getGroupDetails={g => ({
    name: g,
    icon: g === "" ? undefined : GridColumnIcon.HeaderCode
  })} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const H=["ColumnGroups"];export{o as ColumnGroups,H as __namedExportsOrder,x as default};

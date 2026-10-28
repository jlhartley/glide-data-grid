import{R as l}from"./iframe-DvUF06nB.js";import{D as r}from"./data-editor-all-F9INubhy.js";import{B as i,D as c,u,d as a}from"./utils-dagUfxOK.js";import{S as s}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[e=>l.createElement(s,null,l.createElement(i,{title:"Input blending",description:l.createElement(c,null,"Input blending can be enabled or disable between row, column, and range selections. Multi-selections can also be enabled or disabled with the same level of granularity.")},l.createElement(e,null)))]},t=e=>{const{cols:n,getCellContent:o}=u(30);return l.createElement(r,{...a,rowMarkers:e.rowMultiSelect==="none"?"number":"both",keybindings:{clear:!0,copy:!0,downFill:!0,rightFill:!0,pageDown:!0,pageUp:!0,paste:!0,search:!0,selectAll:!0,selectColumn:!0,selectRow:!0},getCellsForSelection:!0,rangeSelect:e.rangeMultiSelect,columnSelect:e.columnMultiSelect,rowSelect:e.rowMultiSelect,rangeSelectionBlending:e.rangeBlending,columnSelectionBlending:e.columnBlending,rowSelectionBlending:e.rowBlending,rowSelectionMode:e.rowSelectionMode,columnSelectionMode:e.columnSelectionMode,getCellContent:o,columns:n,rows:1e4})};t.args={rangeBlending:"mixed",columnBlending:"mixed",rowBlending:"mixed",rangeMultiSelect:"rect",columnMultiSelect:"multi",rowMultiSelect:"multi",rowSelectionMode:"auto",columnSelectionMode:"auto"};t.argTypes={rangeBlending:{control:{type:"select"},options:["mixed","exclusive","additive"]},columnBlending:{control:{type:"select"},options:["mixed","exclusive","additive"]},rowBlending:{control:{type:"select"},options:["mixed","exclusive","additive"]},rangeMultiSelect:{control:{type:"select"},options:["none","cell","rect","multi-cell","multi-rect"]},columnMultiSelect:{control:{type:"select"},options:["none","single","multi"]},rowMultiSelect:{control:{type:"select"},options:["none","single","multi"]},rowSelectionMode:{control:{type:"select"},options:["auto","multi"]},columnSelectionMode:{control:{type:"select"},options:["auto","multi"]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30);
  return <DataEditor {...defaultProps} rowMarkers={p.rowMultiSelect === "none" ? "number" : "both"} keybindings={{
    clear: true,
    copy: true,
    downFill: true,
    rightFill: true,
    pageDown: true,
    pageUp: true,
    paste: true,
    search: true,
    selectAll: true,
    selectColumn: true,
    selectRow: true
  }} getCellsForSelection={true} rangeSelect={p.rangeMultiSelect} columnSelect={p.columnMultiSelect} rowSelect={p.rowMultiSelect} rangeSelectionBlending={p.rangeBlending} columnSelectionBlending={p.columnBlending} rowSelectionBlending={p.rowBlending} rowSelectionMode={p.rowSelectionMode} columnSelectionMode={p.columnSelectionMode} getCellContent={getCellContent} columns={cols} rows={10_000} />;
}`,...t.parameters?.docs?.source}}};const f=["InputBlending"];export{t as InputBlending,f as __namedExportsOrder,x as default};

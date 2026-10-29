import{R as e}from"./iframe-C1-HlzKK.js";import{D as n}from"./data-editor-all-dl81PPU5.js";import{B as s,D as a,u as l,d as m}from"./utils-C0A3aDn0.js";import{S as i}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const G={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(i,null,e.createElement(s,{title:"One Hundred Thousand Columns",description:e.createElement(a,null,"Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important.")},e.createElement(o,null)))]},t=()=>{const{cols:o,getCellContent:r}=l(1e5);return e.createElement(n,{...m,getCellContent:r,columns:o,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100_000);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const H=["OneHundredThousandCols"];export{t as OneHundredThousandCols,H as __namedExportsOrder,G as default};

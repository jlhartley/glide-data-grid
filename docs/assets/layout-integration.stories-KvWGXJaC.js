import{R as e}from"./iframe-B6BB7SE7.js";import{D as n}from"./data-editor-all-Bo3JCWIw.js";import{b as l,D as s,u as i,d as a}from"./utils-Bp6Jia9o.js";import{S as m}from"./story-utils-D5TzgPCe.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DkdLdcZn.js";import"./throttle-ClvAx-m_.js";import"./marked.esm-JH4R6def.js";import"./flatten-xp5kEhqg.js";import"./scrolling-data-grid-BiQNnq5H.js";import"./isArray-Qc_lD31Y.js";import"./useResizeDetector-CoEKsWyI.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(m,null,e.createElement(l,null,e.createElement("h1",null,"Layout Integration"),e.createElement(s,null,"Trying the grid in different situations"),e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:o}=i(1e3,!0,!0);return e.createElement(e.Fragment,null,e.createElement(n,{...a,getCellContent:o,columns:t,rows:10,rowMarkers:"both",height:200}),e.createElement(n,{...a,getCellContent:o,columns:t,rows:10,rowMarkers:"both"}),e.createElement("div",{style:{display:"flex",height:"300px"}},e.createElement(n,{...a,getCellContent:o,columns:t,rows:10,rowMarkers:"both"}),e.createElement("div",{style:{flexShrink:0}},"This is some text what happens here?")))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(1000, true, true);
  return <>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" height={200} />
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
            <div style={{
      display: "flex",
      height: "300px"
    }}>
                <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={10} rowMarkers="both" />
                <div style={{
        flexShrink: 0
      }}>This is some text what happens here?</div>
            </div>
        </>;
}`,...r.parameters?.docs?.source}}};const x=["LayoutIntegration"];export{r as LayoutIntegration,x as __namedExportsOrder,k as default};

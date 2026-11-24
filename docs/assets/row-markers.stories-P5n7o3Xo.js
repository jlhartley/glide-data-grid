import{R as e}from"./iframe-DkB1__q6.js";import{D as s}from"./data-editor-all-Dry_cisF.js";import{B as l,D as n,P as i,u as c,d as m}from"./utils-CF9FeL2P.js";import{S as d}from"./story-utils-CLcQchUW.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DzIoTW7e.js";import"./throttle-D5W36Fz2.js";import"./marked.esm-CzgVW7Pi.js";import"./flatten-DMPNlKFP.js";import"./scrolling-data-grid-EAtytre0.js";import"./isArray-C7w9PDCd.js";import"./useResizeDetector-DdvuOYGN.js";const y={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(d,null,e.createElement(l,{title:"Row markers",description:e.createElement(e.Fragment,null,e.createElement(n,null,"Row Markers can be controlled by setting the ",e.createElement(i,null,"rowMarkers")," prop."))},e.createElement(t,null)))]},r=t=>{const{cols:a,getCellContent:o}=c(10,!1);return e.createElement(s,{...m,getCellContent:o,verticalBorder:!1,rowMarkers:{kind:t.markers,checkboxStyle:"square",headerAlwaysVisible:!0,headerDisabled:t.headerDisabled,headerTheme:{textMedium:"rgba(51, 51, 51, 0.50)"}},columns:a,rows:400})};r.args={markers:"both",headerDisabled:!1};r.argTypes={markers:{control:{type:"select"},options:["both","checkbox","number","none","clickable-number","checkbox-visible"]},headerDisabled:{control:{type:"boolean"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(10, false);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} verticalBorder={false} rowMarkers={{
    kind: p.markers,
    checkboxStyle: "square",
    headerAlwaysVisible: true,
    headerDisabled: p.headerDisabled,
    headerTheme: {
      textMedium: "rgba(51, 51, 51, 0.50)"
    }
  }} columns={cols} rows={400} />;
}`,...r.parameters?.docs?.source}}};const C=["RowMarkers"];export{r as RowMarkers,C as __namedExportsOrder,y as default};

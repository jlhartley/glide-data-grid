import{R as e}from"./iframe-8J4cXWcv.js";import{D as i}from"./data-editor-all-DTDYO8Iw.js";import{B as s,D as a,P as c,a as d,d as m}from"./utils-COrtLQMp.js";import{S as p}from"./story-utils-CLwK7f6H.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-gjKS9iZw.js";import"./throttle-C81o-Tu7.js";import"./marked.esm-BKoIpwcY.js";import"./flatten-CQGy__pz.js";import"./scrolling-data-grid-DGRCmykM.js";import"./isArray-YMb5690H.js";import"./useResizeDetector-D8f9th5l.js";const K={title:"Glide-Data-Grid/DataEditor Demos",decorators:[l=>e.createElement(p,null,e.createElement(s,{title:"Lotsa cell kinds",description:e.createElement(a,null,"Data grid supports plenty cell kinds. Anything under ",e.createElement(c,null,"GridCellKind"),".")},e.createElement(l,null)))]},t=()=>{const{cols:l,getCellContent:o,onColumnResize:n,setCellValue:r}=d();return e.createElement(i,{...m,getCellContent:o,columns:l,onCellEdited:r,onPaste:!0,rowHeight:44,onColumnResize:n,highlightRegions:[{color:"#ff00ff33",range:{x:1,y:1,width:3,height:3}}],cellActivationBehavior:"single-click",editorBloom:[-4,-4],drawFocusRing:!1,rows:1e3})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onPaste={true} rowHeight={44} onColumnResize={onColumnResize} highlightRegions={[{
    color: "#ff00ff33",
    range: {
      x: 1,
      y: 1,
      width: 3,
      height: 3
    }
  }]} cellActivationBehavior="single-click" editorBloom={[-4, -4]} drawFocusRing={false} rows={1000} />;
}`,...t.parameters?.docs?.source}}};const P=["AllCellKinds"];export{t as AllCellKinds,P as __namedExportsOrder,K as default};

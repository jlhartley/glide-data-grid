import{R as e}from"./iframe-DgBdMeKd.js";import{D as i}from"./data-editor-all-hSSLvTLU.js";import{B as s,D as m,P as l,a as u,d as C}from"./utils-DbfSqIKT.js";import{S as g}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(g,null,e.createElement(s,{title:"Content Alignment",description:e.createElement(m,null,"You can customize the content alignment by setting ",e.createElement(l,null,"contentAlign")," of a cell to ",e.createElement(l,null,"left"),", ",e.createElement(l,null,"right")," or ",e.createElement(l,null,"center"),".")},e.createElement(r,null)))]},o=()=>{const{cols:r,getCellContent:t}=u(),a=e.useCallback(n=>{const[c]=n;return c===3?{...t(n),contentAlign:"center"}:c===4?{...t(n),contentAlign:"right"}:c===5?{...t(n),contentAlign:"left"}:t(n)},[t]);return e.createElement(i,{...C,getCellContent:a,columns:r,rows:300})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(cell => {
    const [col] = cell;
    if (col === 3) {
      return {
        ...getCellContent(cell),
        contentAlign: "center"
      };
    }
    if (col === 4) {
      return {
        ...getCellContent(cell),
        contentAlign: "right"
      };
    }
    if (col === 5) {
      return {
        ...getCellContent(cell),
        contentAlign: "left"
      };
    }
    return getCellContent(cell);
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={mangledGetCellContent} columns={cols} rows={300} />;
}`,...o.parameters?.docs?.source}}};const _=["ContentAlignment"];export{o as ContentAlignment,_ as __namedExportsOrder,S as default};

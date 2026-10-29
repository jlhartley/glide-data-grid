import{R as e}from"./iframe-Dm2sTaU0.js";import{D as i}from"./data-editor-all-D8fhf72B.js";import{B as m,D as c,P as d,u,d as p}from"./utils-0xoxKcOj.js";import{S as C}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(C,null,e.createElement(m,{title:"Theme per row",description:e.createElement(e.Fragment,null,e.createElement(c,null,"Each row can provide theme overrides for rendering that row using the"," ",e.createElement(d,null,"getRowThemeOverride")," callback."))},e.createElement(r,null)))]},o=()=>{const{cols:r,getCellContent:n,onColumnResize:l,setCellValue:a}=u(5),s=e.useMemo(()=>{const t=[...r];return t[3]={...t[3],themeOverride:{bgCell:"#d6fafd"}},t},[r]);return e.createElement(i,{...p,getCellContent:n,columns:s,height:"100%",getRowThemeOverride:t=>t%2===0?void 0:{bgCell:"#e0f0ff88"},onCellEdited:a,onColumnResize:l,rows:10})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useMockDataGenerator(5);
  const realCols = React.useMemo(() => {
    const c = [...cols];
    c[3] = {
      ...c[3],
      themeOverride: {
        bgCell: "#d6fafd"
      }
    };
    return c;
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={realCols} height="100%"
  // trailingRowOptions={{
  //     sticky: true,
  //     tint: true,
  // }}
  // onRowAppended={() => undefined}
  getRowThemeOverride={i => i % 2 === 0 ? undefined : {
    bgCell: "#e0f0ff88"
    //   borderColor: "#3f90e0",
  }} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10} />;
}`,...o.parameters?.docs?.source}}};const z=["ThemePerRow"];export{o as ThemePerRow,z as __namedExportsOrder,k as default};

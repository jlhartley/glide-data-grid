import{R as e}from"./iframe-BynEneiI.js";import{D as i}from"./data-editor-all-B_BNdl63.js";import{B as m,D as c,P as d,u,d as p}from"./utils-By-9wJ6Q.js";import{S as C}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const k={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(C,null,e.createElement(m,{title:"Theme per row",description:e.createElement(e.Fragment,null,e.createElement(c,null,"Each row can provide theme overrides for rendering that row using the"," ",e.createElement(d,null,"getRowThemeOverride")," callback."))},e.createElement(r,null)))]},o=()=>{const{cols:r,getCellContent:n,onColumnResize:l,setCellValue:a}=u(5),s=e.useMemo(()=>{const t=[...r];return t[3]={...t[3],themeOverride:{bgCell:"#d6fafd"}},t},[r]);return e.createElement(i,{...p,getCellContent:n,columns:s,height:"100%",getRowThemeOverride:t=>t%2===0?void 0:{bgCell:"#e0f0ff88"},onCellEdited:a,onColumnResize:l,rows:10})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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

import{R as e}from"./iframe-Dm2sTaU0.js";import{D as u}from"./data-editor-all-D8fhf72B.js";import{B as p,D as d,P as C,u as w,d as h}from"./utils-0xoxKcOj.js";import{S as z}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(z,null,e.createElement(p,{title:"Column Grow",description:e.createElement(d,null,"Columns in the data grid may be set to grow to fill space by setting the"," ",e.createElement(C,null,"grow")," prop.")},e.createElement(t,null)))]},o=()=>{const{cols:t,getCellContent:a,onColumnResize:l}=w(5,!0,!0),s=e.useRef(new Set),i=e.useMemo(()=>t.map((r,n)=>({...r,grow:s.current.has(n)?void 0:(5+n)/5})),[t]);return e.createElement(u,{...h,getCellContent:a,columns:i,rows:1e3,onColumnResize:(r,n,m,c)=>{s.current.add(m),l(r,c)},rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(5, true, true);
  const hasResized = React.useRef(new Set<number>());
  const columns = React.useMemo(() => {
    return cols.map((x, i) => ({
      ...x,
      grow: hasResized.current.has(i) ? undefined : (5 + i) / 5
    }));
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rows={1000} onColumnResize={(col, _newSize, colIndex, newSizeWithGrow) => {
    hasResized.current.add(colIndex);
    onColumnResize(col, newSizeWithGrow);
  }} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const W=["StretchColumnSize"];export{o as StretchColumnSize,W as __namedExportsOrder,P as default};

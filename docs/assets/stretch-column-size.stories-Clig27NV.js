import{R as e}from"./iframe-B0S1gjT9.js";import{D as d}from"./data-editor-all-BWrHhPq-.js";import{B as w,D as z,P as C,u as S,d as h}from"./utils-BLNZp51M.js";import{S as R}from"./story-utils-NeWIluy3.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DasUm_rG.js";import"./throttle-B2xvqvaw.js";import"./marked.esm-Bfn4Z7oE.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(R,null,e.createElement(w,{title:"Column Grow",description:e.createElement(z,null,"Columns in the data grid may be set to grow to fill space by setting the"," ",e.createElement(C,null,"grow")," prop.")},e.createElement(t,null)))]},o=()=>{const{cols:t,getCellContent:a,onColumnResize:i}=S(5,!0,!0),[s,l]=e.useState(()=>new Set),m=e.useMemo(()=>t.map((r,n)=>({...r,grow:s.has(n)?void 0:(5+n)/5})),[t,s]);return e.createElement(d,{...h,getCellContent:a,columns:m,rows:1e3,onColumnResize:(r,n,c,u)=>{l(p=>new Set(p).add(c)),i(r,u)},rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(5, true, true);
  const [hasResized, setHasResized] = React.useState(() => new Set<number>());
  const columns = React.useMemo(() => {
    return cols.map((x, i) => ({
      ...x,
      grow: hasResized.has(i) ? undefined : (5 + i) / 5
    }));
  }, [cols, hasResized]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rows={1000} onColumnResize={(col, _newSize, colIndex, newSizeWithGrow) => {
    setHasResized(previous => new Set(previous).add(colIndex));
    onColumnResize(col, newSizeWithGrow);
  }} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const H=["StretchColumnSize"];export{o as StretchColumnSize,H as __namedExportsOrder,v as default};

import{R as e}from"./iframe-Dm2sTaU0.js";import{D as m}from"./data-editor-all-D8fhf72B.js";import{B as C,D as g,P as p,M as h,u as y,d as f}from"./utils-0xoxKcOj.js";import{a as d}from"./image-window-loader-qCvk1D9s.js";import{S as w}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DgHjLOvN.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./marked.esm-CqBPueJW.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(w,null,e.createElement(C,{title:"Spans",description:e.createElement(g,null,"By setting the ",e.createElement(p,null,"span")," of a cell you can create spans in your grid. All cells within a span must return consistent data for defined behavior.",e.createElement(h,null,"Spans will always be split if they span frozen and non-frozen columns. By default selections are always expanded to include a span. This can be disabled using the"," ",e.createElement(p,null,"spanRangeBehavior")," prop."))},e.createElement(r,null)))]},a=()=>{const{cols:r,getCellContent:i}=y(100,!0,!0),o=e.useCallback(l=>{const[n,t]=l;return t===6&&n>=3&&n<=4?{kind:d.Text,allowOverlay:!1,data:"Span Cell that is very long and will go past the cell limits",span:[3,4],displayData:"Span Cell that is very long and will go past the cell limits"}:t===5?{kind:d.Text,allowOverlay:!1,data:"Span Cell that is very long and will go past the cell limits",span:[0,99],displayData:"Span Cell that is very long and will go past the cell limits"}:i(l)},[i]),u=e.useCallback(l=>{const n=[];for(let t=l.y;t<l.y+l.height;t++){const c=[];for(let s=l.x;s<l.x+l.width;s++)c.push(o([s,t]));n.push(c)}return n},[o]);return e.createElement(m,{...f,getCellContent:o,getCellsForSelection:u,columns:r,freezeColumns:2,rows:300,rowMarkers:"both"})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(cell => {
    const [col, row] = cell;
    if (row === 6 && col >= 3 && col <= 4) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        data: "Span Cell that is very long and will go past the cell limits",
        span: [3, 4],
        displayData: "Span Cell that is very long and will go past the cell limits"
      };
    }
    if (row === 5) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: false,
        data: "Span Cell that is very long and will go past the cell limits",
        span: [0, 99],
        displayData: "Span Cell that is very long and will go past the cell limits"
      };
    }
    return getCellContent(cell);
  }, [getCellContent]);
  const getCellsForSelection = React.useCallback((selection: Rectangle): CellArray => {
    const result: GridCell[][] = [];
    for (let y = selection.y; y < selection.y + selection.height; y++) {
      const row: GridCell[] = [];
      for (let x = selection.x; x < selection.x + selection.width; x++) {
        row.push(mangledGetCellContent([x, y]));
      }
      result.push(row);
    }
    return result;
  }, [mangledGetCellContent]);
  return <DataEditor {...defaultProps} getCellContent={mangledGetCellContent} getCellsForSelection={getCellsForSelection} columns={cols} freezeColumns={2} rows={300} rowMarkers="both" />;
}`,...a.parameters?.docs?.source}}};const z=["SpanCell"];export{a as SpanCell,z as __namedExportsOrder,O as default};

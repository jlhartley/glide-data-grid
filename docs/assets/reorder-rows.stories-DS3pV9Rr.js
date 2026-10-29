import{l as p}from"./lodash-dWVUTNUE.js";import{R as e}from"./iframe-BynEneiI.js";import{D as u}from"./data-editor-all-B_BNdl63.js";import{B as w,D as R,P as C,d as D}from"./utils-By-9wJ6Q.js";import{a as f}from"./image-window-loader-Cz4WZa9y.js";import{S as E}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Db8i-HAC.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./marked.esm-DeOFW1d8.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const $={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e.createElement(E,null,e.createElement(w,{title:"Reorder Rows",description:e.createElement(e.Fragment,null,e.createElement(R,null,"Rows can be re-arranged by using the ",e.createElement(C,null,"onRowMoved")," callback. When set the first row can be used to drag and drop."))},e.createElement(a,null)))]},o=()=>{const a=e.useMemo(()=>[{title:"Col A",width:150},{title:"Col B",width:150}],[]),[n,l]=e.useState(()=>p.range(0,50).map(t=>[`A: ${t}`,`B: ${t}`])),c=e.useCallback(([t,r])=>({kind:f.Text,allowOverlay:!1,data:n[r][t],displayData:n[r][t]}),[n]),d=e.useCallback((t,r)=>{l(i=>{const s=[...i],m=s.splice(t,1);return s.splice(r,0,...m),s})},[]);return e.createElement(u,{...D,rowMarkers:"both",onRowMoved:d,getCellContent:c,columns:a,rows:50})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const cols = React.useMemo<GridColumn[]>(() => [{
    title: "Col A",
    width: 150
  }, {
    title: "Col B",
    width: 150
  }], []);
  const [rowData, setRowData] = React.useState(() => {
    return range(0, 50).map(x => [\`A: \${x}\`, \`B: \${x}\`]);
  });
  const getCellContent = React.useCallback<DataEditorProps["getCellContent"]>(([col, row]) => {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      data: rowData[row][col],
      displayData: rowData[row][col]
    };
  }, [rowData]);
  const reorderRows = React.useCallback((from: number, to: number) => {
    setRowData(cv => {
      const d = [...cv];
      const removed = d.splice(from, 1);
      d.splice(to, 0, ...removed);
      return d;
    });
  }, []);
  return <DataEditor {...defaultProps} rowMarkers={"both"} onRowMoved={reorderRows} getCellContent={getCellContent} columns={cols} rows={50} />;
}`,...o.parameters?.docs?.source}}};const O=["ReorderRows"];export{o as ReorderRows,O as __namedExportsOrder,$ as default};

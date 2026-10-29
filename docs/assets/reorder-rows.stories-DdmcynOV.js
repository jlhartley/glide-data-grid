import{l as p}from"./lodash-C_OqKf2f.js";import{R as e}from"./iframe-C1-HlzKK.js";import{D as u}from"./data-editor-all-dl81PPU5.js";import{B as w,D as R,P as C,d as D}from"./utils-C0A3aDn0.js";import{a as f}from"./image-window-loader-BXYRWeEN.js";import{S as E}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./marked.esm-CMDovIh-.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const $={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e.createElement(E,null,e.createElement(w,{title:"Reorder Rows",description:e.createElement(e.Fragment,null,e.createElement(R,null,"Rows can be re-arranged by using the ",e.createElement(C,null,"onRowMoved")," callback. When set the first row can be used to drag and drop."))},e.createElement(a,null)))]},o=()=>{const a=e.useMemo(()=>[{title:"Col A",width:150},{title:"Col B",width:150}],[]),[n,l]=e.useState(()=>p.range(0,50).map(t=>[`A: ${t}`,`B: ${t}`])),c=e.useCallback(([t,r])=>({kind:f.Text,allowOverlay:!1,data:n[r][t],displayData:n[r][t]}),[n]),d=e.useCallback((t,r)=>{l(i=>{const s=[...i],m=s.splice(t,1);return s.splice(r,0,...m),s})},[]);return e.createElement(u,{...D,rowMarkers:"both",onRowMoved:d,getCellContent:c,columns:a,rows:50})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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

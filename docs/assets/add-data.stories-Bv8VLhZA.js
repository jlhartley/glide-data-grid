import{R as e}from"./iframe-Dm2sTaU0.js";import{D as m}from"./data-editor-all-D8fhf72B.js";import{B as p,D as w,M as C,K as g,u as R,c as h,d as f}from"./utils-0xoxKcOj.js";import{S as E}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(E,null,e.createElement(p,{title:"Add data",description:e.createElement(e.Fragment,null,e.createElement(w,null,"Data can be added by clicking on the trailing row."),e.createElement(C,null,"Keyboard is also supported, just navigate past the last row and press"," ",e.createElement(g,null,"Enter")))},e.createElement(o,null)))]},n=()=>{const{cols:o,getCellContent:l,setCellValueRaw:s,setCellValue:c}=R(60,!1),[a,i]=e.useState(50),u=e.useCallback(()=>{const r=a;for(let t=0;t<o.length;t++){const d=l([t,r]);s([t,r],h(d))}i(t=>t+1)},[o.length,l,a,s]);return e.createElement(m,{...f,getCellContent:l,columns:o,rangeSelectionColumnSpanning:!1,rowMarkers:"both",onPaste:!0,onCellEdited:c,trailingRowOptions:{sticky:!1,tint:!0,hint:"New row..."},rows:a,onRowAppended:u})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    // our data source is a mock source that pre-fills data, so we are just clearing this here. You should not
    // need to do this.
    for (let c = 0; c < cols.length; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    // Tell the data grid there is another row
    setNumRows(cv => cv + 1);
  }, [cols.length, getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rangeSelectionColumnSpanning={false} rowMarkers={"both"} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: false,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...n.parameters?.docs?.source}}};const K=["AddData"];export{n as AddData,K as __namedExportsOrder,v as default};

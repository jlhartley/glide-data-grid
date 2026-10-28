import{R as e}from"./iframe-DvUF06nB.js";import{D as m}from"./data-editor-all-F9INubhy.js";import{B as p,D as d,u as R,c as C,d as h}from"./utils-dagUfxOK.js";import{S as g}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const F={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(g,null,e.createElement(p,{title:"Freeze rows",description:e.createElement(e.Fragment,null,e.createElement(d,null,"Rows can be frozen to make sure the user always sees them."))},e.createElement(o,null)))]},n=()=>{const{cols:o,getCellContent:l,setCellValueRaw:s,setCellValue:c}=R(60,!1),[r,i]=e.useState(50),u=e.useCallback(()=>{const a=r;for(let t=0;t<o.length;t++){const w=l([t,a]);s([t,a],C(w))}i(t=>t+1)},[o.length,l,r,s]);return e.createElement(m,{...h,getCellContent:l,columns:o,rowMarkers:"both",freezeTrailingRows:2,experimental:{kineticScrollPerfHack:!0},onPaste:!0,onCellEdited:c,trailingRowOptions:{sticky:!0,tint:!0,hint:"New row..."},rows:r,onRowAppended:u})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} freezeTrailingRows={2} experimental={{
    kineticScrollPerfHack: true
  }} onPaste={true} // we want to allow paste to just call onCellEdited
  onCellEdited={setCellValue} // Sets the mock cell content
  trailingRowOptions={{
    // How to get the trailing row to look right
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...n.parameters?.docs?.source}}};const G=["FreezeRows"];export{n as FreezeRows,G as __namedExportsOrder,F as default};

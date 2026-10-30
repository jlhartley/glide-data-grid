import{R as e}from"./iframe-DgBdMeKd.js";import{C as a,u as d}from"./image-window-loader-BujOuo6D.js";import{D as h}from"./data-editor-all-hSSLvTLU.js";import{B as C,D as f,P as w,M as y,K as l,a as E,d as g}from"./utils-DbfSqIKT.js";import{S as D}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-D-uVZwiM.js";import"./marked.esm-k5lC70d3.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(D,null,e.createElement(C,{title:"Search is easy",description:e.createElement(e.Fragment,null,e.createElement(f,null,"Search for any data in your grid by setting ",e.createElement(w,null,"showSearch"),"."),e.createElement(y,null,"In this story, ",e.createElement(l,null,"Ctrl")," (",e.createElement(l,null,"⌘")," on Mac) +"," ",e.createElement(l,null,"f")," toggles the search bar. Make sure you're focused on the Data Grid!"))},e.createElement(n,null)))]},o=()=>{const{cols:n,getCellContent:s,onColumnResize:c,setCellValue:i}=E(),[m,r]=e.useState(!1),[u,p]=e.useState({rows:a.empty(),columns:a.empty()});return d("keydown",e.useCallback(t=>{(t.ctrlKey||t.metaKey)&&t.code==="KeyF"&&(r(S=>!S),t.stopPropagation(),t.preventDefault())},[]),window,!1,!0),e.createElement(h,{...g,getCellContent:s,getCellsForSelection:!0,gridSelection:u,onGridSelectionChange:p,columns:n,onCellEdited:i,onColumnResize:c,showSearch:m,onSearchClose:()=>r(!1),rows:1e4})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [showSearch, setShowSearch] = React.useState(false);
  const [selection, setSelection] = React.useState<GridSelection>({
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  });
  useEventListener("keydown", React.useCallback(event => {
    if ((event.ctrlKey || event.metaKey) && event.code === "KeyF") {
      setShowSearch(cv => !cv);
      event.stopPropagation();
      event.preventDefault();
    }
  }, []), window, false, true);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} showSearch={showSearch} onSearchClose={() => setShowSearch(false)} rows={10_000} />;
}`,...o.parameters?.docs?.source}}};const A=["BuiltInSearch"];export{o as BuiltInSearch,A as __namedExportsOrder,_ as default};

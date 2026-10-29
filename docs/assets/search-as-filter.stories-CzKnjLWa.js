import{R as e}from"./iframe-BynEneiI.js";import{C as r,u as d}from"./image-window-loader-Cz4WZa9y.js";import{D as C}from"./data-editor-all-B_BNdl63.js";import{B as g,D as w,a as f,d as V}from"./utils-By-9wJ6Q.js";import{S as y}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const b={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e.createElement(y,null,e.createElement(g,{title:"Filtering down to search results",description:e.createElement(e.Fragment,null,e.createElement(w,null,"You can update your grid however you want based on search inputs."))},e.createElement(a,null)))]},o=()=>{const{cols:a,getCellContent:c,onColumnResize:i,setCellValue:u}=f(),[m,s]=e.useState(!1),[h,S]=e.useState({rows:r.empty(),columns:r.empty()});d("keydown",e.useCallback(t=>{(t.ctrlKey||t.metaKey)&&t.code==="KeyF"&&(s(p=>!p),t.stopPropagation(),t.preventDefault())},[]),window,!1,!0);const[n,l]=e.useState("");return e.createElement(C,{...V,searchResults:[],getCellContent:c,getCellsForSelection:!0,gridSelection:h,onGridSelectionChange:S,columns:a,onCellEdited:u,onColumnResize:i,searchValue:n,onSearchValueChange:l,showSearch:m,onSearchClose:()=>{s(!1),l("")},rows:n.length===0?1e4:n.length})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
  const [searchValue, setSearchValue] = React.useState("");
  return <DataEditor {...defaultProps} searchResults={[]} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={searchValue.length === 0 ? 10_000 : searchValue.length} />;
}`,...o.parameters?.docs?.source}}};const x=["SearchAsFilter"];export{o as SearchAsFilter,x as __namedExportsOrder,b as default};

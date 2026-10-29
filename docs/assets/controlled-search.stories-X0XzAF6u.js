import{R as e}from"./iframe-C1-HlzKK.js";import{C as c,u as C}from"./image-window-loader-BXYRWeEN.js";import{D as g}from"./data-editor-all-dl81PPU5.js";import{B as f,D as w,P as R,a as y,d as E}from"./utils-C0A3aDn0.js";import{S as V}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const x={title:"Glide-Data-Grid/DataEditor Demos",decorators:[s=>e.createElement(V,null,e.createElement(f,{title:"Controlling search results",description:e.createElement(e.Fragment,null,e.createElement(w,null,"Search results can be controlled via ",e.createElement(R,null,"searchResults"),". You can implement any search algorithm you want, even a silly one."))},e.createElement(s,null)))]},o=()=>{const{cols:s,getCellContent:u,onColumnResize:i,setCellValue:m}=y(),[h,a]=e.useState(!1),[S,p]=e.useState({rows:c.empty(),columns:c.empty()});C("keydown",e.useCallback(t=>{(t.ctrlKey||t.metaKey)&&t.code==="KeyF"&&(a(n=>!n),t.stopPropagation(),t.preventDefault())},[]),window,!1,!0);const[l,r]=e.useState(""),d=e.useMemo(()=>{const t=[];for(let n=0;n<l.length;n++)t.push([3,n]);return t},[l.length]);return e.createElement(g,{...E,searchResults:d,getCellContent:u,getCellsForSelection:!0,gridSelection:S,onGridSelectionChange:p,columns:s,onCellEdited:m,onColumnResize:i,searchValue:l,onSearchValueChange:r,showSearch:h,onSearchClose:()=>{a(!1),r("")},rows:1e4})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
  const searchResults = React.useMemo(() => {
    const result: Item[] = [];
    for (let i = 0; i < searchValue.length; i++) {
      result.push([3, i]);
    }
    return result;
  }, [searchValue.length]);
  return <DataEditor {...defaultProps} searchResults={searchResults} getCellContent={getCellContent} getCellsForSelection={true} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} searchValue={searchValue} onSearchValueChange={setSearchValue} showSearch={showSearch} onSearchClose={() => {
    setShowSearch(false);
    setSearchValue("");
  }} rows={10_000} />;
}`,...o.parameters?.docs?.source}}};const B=["ControlledSearch"];export{o as ControlledSearch,B as __namedExportsOrder,x as default};

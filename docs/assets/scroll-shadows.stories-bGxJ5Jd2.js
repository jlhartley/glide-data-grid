import{R as e}from"./iframe-BynEneiI.js";import{D as u}from"./data-editor-all-B_BNdl63.js";import{B as w,D as f,u as g,d as p}from"./utils-By-9wJ6Q.js";import{C as l}from"./image-window-loader-Cz4WZa9y.js";import{S}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Db8i-HAC.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./marked.esm-DeOFW1d8.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const T={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(S,null,e.createElement(w,{title:"Scroll Shadows",description:e.createElement(e.Fragment,null,e.createElement(f,null,"You can enable and disable the horizontal/vertical scroll shadows."))},e.createElement(n,null)))]},r=()=>{const{cols:n,getCellContent:s}=g(6),[c,i]=e.useState({rows:l.empty(),columns:l.empty()}),d=e.useCallback(t=>{let o=l.empty();t.current!==void 0&&(o=o.add([t.current.range.y,t.current.range.y+t.current.range.height]));for(const a of t.current?.rangeStack??[])o=o.add([a.y,a.y+a.height]);i({...t,rows:o})},[]),m=e.useMemo(()=>({accentLight:"#b1f6ff",horizontalBorderColor:"transparent",headerBottomBorderColor:"rgba(115, 116, 131, 0.16)"}),[]),h=e.useCallback(t=>t%2===0?void 0:{bgCell:"#f5f5f6"},[]);return e.createElement(u,{...p,rowMarkers:"number",gridSelection:c,onGridSelectionChange:d,fixedShadowX:!1,headerHeight:26,drawFocusRing:!1,rowHeight:22,fixedShadowY:!1,getRowThemeOverride:h,verticalBorder:!1,getCellContent:s,columns:n,rows:1e3,theme:m})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const [selection, setSelection] = React.useState<GridSelection>({
    rows: CompactSelection.empty(),
    columns: CompactSelection.empty()
  });
  const onSelectionChange = React.useCallback((newSel: GridSelection) => {
    let newRows = CompactSelection.empty();
    if (newSel.current !== undefined) {
      newRows = newRows.add([newSel.current.range.y, newSel.current.range.y + newSel.current.range.height]);
    }
    for (const b of newSel.current?.rangeStack ?? []) {
      newRows = newRows.add([b.y, b.y + b.height]);
    }
    setSelection({
      ...newSel,
      rows: newRows
    });
  }, []);
  const theme = React.useMemo<Partial<Theme>>(() => ({
    accentLight: "#b1f6ff",
    horizontalBorderColor: "transparent",
    headerBottomBorderColor: "rgba(115, 116, 131, 0.16)"
  }), []);
  const getRowThemeOverride = React.useCallback(row => row % 2 === 0 ? undefined : {
    bgCell: "#f5f5f6"
  }, []);
  return <DataEditor {...defaultProps} rowMarkers={"number"} gridSelection={selection} onGridSelectionChange={onSelectionChange} fixedShadowX={false} headerHeight={26} drawFocusRing={false} rowHeight={22} fixedShadowY={false} getRowThemeOverride={getRowThemeOverride} verticalBorder={false} getCellContent={getCellContent} columns={cols} rows={1000} theme={theme} />;
}`,...r.parameters?.docs?.source}}};const O=["ScrollShadows"];export{r as ScrollShadows,O as __namedExportsOrder,T as default};

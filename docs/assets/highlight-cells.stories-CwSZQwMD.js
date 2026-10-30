import{R as e}from"./iframe-CIssbtkb.js";import{D as h}from"./data-editor-all-C-qBUU8N.js";import{B as g,D as d,P as m,u as p,d as u}from"./utils-jIM3OMih.js";import{C as l}from"./image-window-loader-CG_9cDKv.js";import{S}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-CS-8w14I.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./marked.esm-XxaRhz0v.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(S,null,e.createElement(g,{title:"HighlightCells",description:e.createElement(d,null,"The ",e.createElement(m,null,"highlightRegions")," prop can be set to provide additional hinting or context for the current selection.")},e.createElement(n,null)))]},r=()=>{const{cols:n,getCellContent:s}=p(100),[t,c]=e.useState({columns:l.empty(),rows:l.empty()}),a=e.useMemo(()=>{if(t.current===void 0)return;const[o,i]=t.current.cell;return[{color:"#44BB0022",range:{x:o+2,y:i,width:10,height:10},style:"solid"},{color:"#b000b021",range:{x:o,y:i+2,width:1,height:1}}]},[t]);return e.createElement(h,{...u,rowMarkers:"both",freezeColumns:1,highlightRegions:a,gridSelection:t,onGridSelectionChange:c,getCellContent:s,columns:n,verticalBorder:o=>o>0,rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const [gridSelection, setGridSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const highlights = React.useMemo<DataEditorProps["highlightRegions"]>(() => {
    if (gridSelection.current === undefined) return undefined;
    const [col, row] = gridSelection.current.cell;
    return [{
      color: "#44BB0022",
      range: {
        x: col + 2,
        y: row,
        width: 10,
        height: 10
      },
      style: "solid"
    }, {
      color: "#b000b021",
      range: {
        x: col,
        y: row + 2,
        width: 1,
        height: 1
      }
    }];
  }, [gridSelection]);
  return <DataEditor {...defaultProps} rowMarkers="both" freezeColumns={1} highlightRegions={highlights} gridSelection={gridSelection} onGridSelectionChange={setGridSelection} getCellContent={getCellContent} columns={cols} verticalBorder={c => c > 0} rows={1000} />;
}`,...r.parameters?.docs?.source}}};const P=["HighlightCells"];export{r as HighlightCells,P as __namedExportsOrder,v as default};

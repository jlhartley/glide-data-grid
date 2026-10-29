import{R as e}from"./iframe-BynEneiI.js";import{D as m}from"./data-editor-all-B_BNdl63.js";import{u as p,B as d,D as g,P as i,d as S}from"./utils-By-9wJ6Q.js";import{C as s}from"./image-window-loader-Cz4WZa9y.js";import{S as C}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Db8i-HAC.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./marked.esm-DeOFW1d8.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(C,null,e.createElement(o,null))]},r=()=>{const{cols:o,getCellContent:u}=p(30,!0,!0),[l,c]=e.useState({columns:s.empty(),rows:s.empty()});return e.createElement(d,{title:"Controlled Selection",description:e.createElement(g,null,"The selection of the grid can be controlled via ",e.createElement(i,null,"GridSelection")," and"," ",e.createElement(i,null,"onGridSelectionChange"),".",e.createElement("input",{type:"range",min:0,max:29,value:l.current?.cell[0]??0,onChange:a=>{const n=a.target.valueAsNumber;c(t=>({...t,current:{cell:[n,t.current?.cell[1]??0],range:{x:n,y:t.current?.cell[1]??0,width:1,height:1},rangeStack:[]}}))}}),e.createElement("input",{type:"range",min:0,max:99,value:l.current?.cell[1]??0,onChange:a=>{const n=a.target.valueAsNumber;c(t=>({...t,current:{cell:[t.current?.cell[0]??0,n],range:{x:t.current?.cell[0]??0,y:n,width:1,height:1},rangeStack:[]}}))}}))},e.createElement(m,{...S,getCellContent:u,gridSelection:l,onGridSelectionChange:c,columns:o,rows:100,rowMarkers:"both"}))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(30, true, true);
  const [selection, setSelection] = React.useState<GridSelection>({
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  return <BeautifulWrapper title="Controlled Selection" description={<Description>
                    The selection of the grid can be controlled via <PropName>GridSelection</PropName> and{" "}
                    <PropName>onGridSelectionChange</PropName>.
                    <input type="range" min={0} max={29} value={selection.current?.cell[0] ?? 0} onChange={e => {
      const newCol = e.target.valueAsNumber;
      setSelection(cv => ({
        ...cv,
        current: {
          cell: [newCol, cv.current?.cell[1] ?? 0],
          range: {
            x: newCol,
            y: cv.current?.cell[1] ?? 0,
            width: 1,
            height: 1
          },
          rangeStack: []
        }
      }));
    }} />
                    <input type="range" min={0} max={99} value={selection.current?.cell[1] ?? 0} onChange={e => {
      const newRow = e.target.valueAsNumber;
      setSelection(cv => ({
        ...cv,
        current: {
          cell: [cv.current?.cell[0] ?? 0, newRow],
          range: {
            x: cv.current?.cell[0] ?? 0,
            y: newRow,
            width: 1,
            height: 1
          },
          rangeStack: []
        }
      }));
    }} />
                </Description>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} gridSelection={selection} onGridSelectionChange={setSelection} columns={cols} rows={100} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...r.parameters?.docs?.source}}};const R=["ControlledSelection"];export{r as ControlledSelection,R as __namedExportsOrder,P as default};

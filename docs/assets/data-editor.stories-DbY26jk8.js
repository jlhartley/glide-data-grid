import{r as s}from"./iframe-DgBdMeKd.js";import{B as Y}from"./story-utils-BnEqV050.js";import{C as g,a}from"./image-window-loader-BujOuo6D.js";import{D as d}from"./data-editor-all-hSSLvTLU.js";import"./preload-helper-PPVm8Dsz.js";import"./marked.esm-k5lC70d3.js";import"./throttle-D-uVZwiM.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";const{useState:c,useCallback:m,useMemo:h}=__STORYBOOK_MODULE_PREVIEW_API__,ne={title:"Tests/TestCases",decorators:[e=>s.createElement(Y,{width:1e3,height:800},s.createElement(e,null))]};function w([e,t]){return e===0?{kind:a.RowID,data:`RowID ${e}, ${t}`,allowOverlay:!1}:e===1?{kind:a.Bubble,data:[`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`,`Bub ${e}`,`Bub ${t}`],allowOverlay:!0}:e===2?{kind:a.Image,data:["https://i.imgur.com/5J0BftG.jpg","https://preview.redd.it/7jlqkp2cyap51.jpg?width=575&auto=webp&s=26fa9ed15b16fb450ee08ed1f2f0ccb5e0223581"],allowOverlay:!0,readonly:!1}:e===3?{kind:a.Markdown,data:`## Markdown has titles

And supports newline chars and automatic wrapping text that just needs to be long enough to trigger it.


[Google](https://google.com)

- with
- lists
- that
- can
- be
- pretty
- long
                    `,allowOverlay:!0}:e===4?{kind:a.Number,displayData:"$10,352",allowOverlay:!0,data:10352,readonly:!0}:e===5?{kind:a.Uri,data:"https://www.google.com",allowOverlay:!0}:e===6?{kind:a.Boolean,data:t%3===0||t%5===0,readonly:!0,allowOverlay:!1}:e===7?{kind:a.Text,displayData:"הרפתקה חדשה",data:"הרפתקה חדשה",allowOverlay:!0,readonly:!0}:e===8?{kind:a.Drilldown,data:[{text:"Test",img:"https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg"},{text:"No Image"}],allowOverlay:!0}:{kind:a.Text,displayData:`${e}, ${t} 🦝`,data:`${e}, ${t} 🦝`,allowOverlay:!0}}function S(){return[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(e=>({title:e.toString()+" is the longest header in the world",width:120+e%4*10,icon:"headerString",hasMenu:!0}))}function y(){const[e,t]=c(S),n=m((o,i)=>{const l=e.indexOf(o),r=[...e];r[l]={...r[l],width:i},t(r)},[e]);return s.createElement(d,{width:"100%",getCellContent:w,getCellsForSelection:!0,columns:e,rows:1e3,onColumnResize:n})}function K(){return[{title:"Relation",width:360,icon:"headerString",hasMenu:!0}]}function X([e,t]){return{kind:a.Drilldown,data:[{text:`Image ${e}-${t}`,img:"https://allthatsinteresting.com/wordpress/wp-content/uploads/2012/06/iconic-photos-1950-einstein.jpg"},{text:`Text ${e}-${t}`},{text:`More text ${e}-${t}`}],allowOverlay:!0}}function D(){const[e,t]=c(K),n=m((o,i)=>{const l=e.indexOf(o),r=[...e];r[l]={...r[l],width:i},t(r)},[e]);return s.createElement(d,{width:"100%",getCellContent:X,columns:e,rows:1e3,onColumnResize:n,smoothScrollX:!0,smoothScrollY:!0})}const N=[{title:"Number",width:100,icon:"headerArray",overlayIcon:"rowOwnerOverlay"},{title:"Square",width:100}];function f([e,t]){const n=Math.pow(t,e+1);return{kind:a.Number,data:n,displayData:n.toString(),allowOverlay:!1}}function b(){return s.createElement(d,{width:"100%",getCellContent:f,columns:N,rows:1e3})}function v(){const[e,t]=c(S),n=m((o,i)=>{const l=e.indexOf(o);if(l!==-1){const r={...o,width:i},u=[...e];u.splice(l,1,r),t(u)}},[e]);return s.createElement(d,{width:"100%",getCellContent:w,onColumnResize:n,columns:e,rows:1e3,smoothScrollY:!0,smoothScrollX:!0})}function k(){const[e,t]=c(void 0),n=o=>{(o.current?.cell[0]??0)%2===0&&t(o)};return s.createElement(d,{width:"100%",gridSelection:e,onGridSelectionChange:n,getCellContent:f,columns:N,rows:1e3})}function G(){return s.createElement(d,{width:"100%",isDraggable:!0,onDragStart:e=>{e.setData("text","testing")},getCellContent:f,columns:N,rows:1e3})}function E(){const e=[{title:"Number",width:250},{title:"Square",width:250}];return s.createElement("div",{style:{width:500,height:500,position:"relative"}},s.createElement(d,{width:500,height:500,isDraggable:!0,onDragStart:t=>{t.setData("text","testing")},getCellContent:f,columns:e,smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9}))}function p({columnCount:e}){const t=[{title:"Number",width:250},{title:"Square",width:250}];for(let n=2;n<e;n++)t.push({title:"Foo",width:250});return s.createElement(d,{width:"100%",isDraggable:!0,getCellContent:f,columns:t,smoothScrollX:!0,smoothScrollY:!0,rowHeight:50,headerHeight:50,rows:9})}p.args={columnCount:2};function R(){const e=h(()=>S().map(r=>({...r,width:300,title:"Making column smaller used to crash!"})),[]),[t,n]=c({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:g.empty(),rows:g.empty()}),[o,i]=c(e),l=m(r=>{n(r)},[]);return s.createElement(d,{width:"100%",getCellContent:w,columns:o,rows:1e3,onGridSelectionChange:l,gridSelection:t,onColumnResize:(r,u)=>{u>300?i(e):i([])}})}function j(){return{"resize me 0":120,"resize me 1":120,"resize me 2":120,"resize me 3":120,"resize me 4":120,"resize me 5":120,"resize me 6":120,"resize me 7":120}}function q(e){return Object.entries(e).map(([t,n])=>({title:t,width:n,icon:"headerString",hasMenu:!0}))}function x(){const[e,t]=c(j),n=h(()=>q(e),[e]),o=m((i,l)=>{t(r=>({...r,[i.title]:l}))},[]);return s.createElement(d,{width:"100%",getCellContent:w,columns:n,rows:20,isDraggable:!1,smoothScrollX:!0,smoothScrollY:!0,onColumnResize:o})}function z(){const e=h(()=>S().map(r=>({...r,width:300,title:"Making column smaller used to crash!"})),[]),[t,n]=c({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:g.empty(),rows:g.empty()}),[o,i]=c(e),l=m(r=>{n(r)},[]);return s.createElement(d,{width:"100%",getCellContent:w,columns:o,rows:1e3,onGridSelectionChange:l,gridSelection:t,onColumnResize:(r,u)=>{u>300?i(e):i([e[0]])}})}function O(){const e=h(S,[]),[t,n]=c(10),o=m(()=>{n(u=>u+1)},[]),[i,l]=c(void 0),r=m(u=>{l(u)},[]);return s.createElement(d,{width:"100%",getCellContent:w,columns:e,rows:t,onRowAppended:o,onGridSelectionChange:r,gridSelection:i})}function M(){const e=h(S,[]),[t,n]=c(void 0),o=m(i=>{n(i)},[]);return s.createElement(d,{width:"100%",getCellContent:w,columns:e,rows:100,onGridSelectionChange:o,gridSelection:t})}function B(){const e=h(()=>[{title:"MD short",width:50},{title:"MD long",width:50}],[]),t=m(([l,r])=>l===0?{data:"text",allowOverlay:!0,kind:a.Markdown}:l===1?{data:`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                `,allowOverlay:!0,kind:a.Markdown}:{data:"text",allowOverlay:!0,kind:a.Markdown},[]),[n,o]=c({current:{cell:[2,8],range:{width:1,height:1,x:2,y:8},rangeStack:[]},columns:g.empty(),rows:g.empty()}),i=m(l=>{o(l)},[]);return s.createElement(d,{width:"100%",getCellContent:t,columns:e,rows:1e3,onGridSelectionChange:i,gridSelection:n})}const A=()=>{const[e,t]=c([!1,!1]);return s.createElement(d,{width:"100%",columns:[{title:"Editable",width:100},{title:"Readonly",width:100}],rows:1,getCellContent:([n])=>({kind:a.Boolean,readonly:n!==0,allowOverlay:!1,data:e[n]}),onCellEdited:([n],o)=>{o.kind===a.Boolean&&t(i=>{const l=[...i];return l.splice(n,1,o.data),l})}})},$=()=>{const[e,t]=c(()=>{const n=[];for(let o=0;o<2e3;o++)n.push(["Edit","Me"]);return n});return s.createElement(d,{width:"100%",columns:[{title:"Column A",width:250},{title:"Column B",width:250}],rows:e.length,getCellContent:([n,o])=>({kind:a.Text,allowOverlay:!0,data:e[o][n],displayData:e[o][n]}),onCellEdited:([n,o],i)=>{const l=[...e],r=[...l[o]];typeof i.data=="string"&&(r[n]=i.data),l[o]=r,t(l)}})};function V(){const e=[{title:"Col1",width:100,grow:1,group:"Group"}],[t,n]=c(0);return s.createElement("div",null,s.createElement("h3",null,"Click count: ",t),s.createElement(d,{width:500,height:500,rows:0,columns:e,getCellContent:()=>({kind:a.Text,data:"",displayData:"",allowOverlay:!1}),getGroupDetails:o=>({name:o,actions:[{icon:"headerString",title:"Action",onClick:i=>n(l=>l+1)}]})}))}function _(){const[e,t]=c(["col-a","col-b"]),n=e.map(C=>({id:C,title:C,width:100})),o=s.useCallback(()=>({kind:a.Loading,allowOverlay:!1}),[]),i=()=>{const C=Math.random().toString(36).slice(2,8);t(H=>[...H,C])},l=C=>{t(H=>H.filter((L,I)=>!C.includes(I)))},[r,u]=c(void 0),T=C=>C.columns.length>0?(u(void 0),l(C.columns.toArray()),!1):!0;return s.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%"}},s.createElement("div",{style:{marginBottom:8}},s.createElement("button",{onClick:i},"Add")),s.createElement("div",{style:{flex:1,position:"relative"}},s.createElement(d,{width:"100%",height:"100%",columns:n,rows:0,getCellContent:o,gridSelection:r,onGridSelectionChange:u,onDelete:T})))}y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`function Simplenotest() {
  const [cols, setColumns] = useState(getDummyCols);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} getCellsForSelection={true} columns={cols} rows={1000} onColumnResize={onColumnResize} />;
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`function RelationColumn() {
  const [cols, setColumns] = useState(getDummyRelationColumn);
  const onColumnResize = useCallback((col: GridColumn, newSize: number) => {
    const index = cols.indexOf(col);
    const newCols = [...cols];
    newCols[index] = {
      ...newCols[index],
      width: newSize
    };
    setColumns(newCols);
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyRelationData} columns={cols} rows={1000} onColumnResize={onColumnResize} smoothScrollX={true} smoothScrollY={true} />;
}`,...D.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`function Minimal() {
  return <DataEditor width="100%" getCellContent={getData} columns={columns} rows={1000} />;
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`function Smooth() {
  const [cols, setCols] = useState(getDummyCols);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    const index = cols.indexOf(column);
    if (index !== -1) {
      const newCol: GridColumn = {
        ...column,
        width: newSize
      };
      const newCols = [...cols];
      newCols.splice(index, 1, newCol);
      setCols(newCols);
    }
  }, [cols]);
  return <DataEditor width="100%" getCellContent={getDummyData} onColumnResize={onColumnResize} columns={cols} rows={1000} smoothScrollY={true} smoothScrollX={true} />;
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`function ManualControl() {
  const [gridSelection, setGridSelection] = useState<GridSelection | undefined>(undefined);
  const cb = (newVal: GridSelection) => {
    if ((newVal.current?.cell[0] ?? 0) % 2 === 0) {
      setGridSelection(newVal);
    }
  };
  return <DataEditor width="100%" gridSelection={gridSelection} onGridSelectionChange={cb} getCellContent={getData} columns={columns} rows={1000} />;
}`,...k.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`function Draggable() {
  return <DataEditor width="100%" isDraggable={true} onDragStart={args => {
    args.setData("text", "testing");
  }} getCellContent={getData} columns={columns} rows={1000} />;
}`,...G.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`function IdealSize() {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  return <div style={{
    width: 500,
    height: 500,
    position: "relative"
  }}>
            <DataEditor width={500} height={500} isDraggable={true} onDragStart={args => {
      args.setData("text", "testing");
    }} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />
        </div>;
}`,...E.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`function DynamicAddRemoveColumns({
  columnCount
}: {
  columnCount: number;
}) {
  // trying to be 500x500
  const cols: GridColumn[] = [{
    title: "Number",
    width: 250
  }, {
    title: "Square",
    width: 250
  }];
  for (let i = 2; i < columnCount; i++) {
    cols.push({
      title: "Foo",
      width: 250
    });
  }
  return <DataEditor width="100%" isDraggable={true} getCellContent={getData} columns={cols} smoothScrollX={true} smoothScrollY={true} rowHeight={50} headerHeight={50} rows={9} />;
}`,...p.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`function GridSelectionOutOfRangeNoColumns() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([]);
    }
  }} />;
}`,...R.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`function ResizableColumns() {
  const [colSizes, setColSizes] = useState(getResizableColumnsInitSize);
  const cols = useMemo(() => {
    return getResizableColumns(colSizes);
  }, [colSizes]);
  const onColumnResize = useCallback((column: GridColumn, newSize: number) => {
    setColSizes(prevColSizes => {
      return {
        ...prevColSizes,
        [column.title]: newSize
      };
    });
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={20} isDraggable={false} smoothScrollX={true} smoothScrollY={true} onColumnResize={onColumnResize} />;
}`,...x.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`function GridSelectionOutOfRangeLessColumnsThanSelection() {
  const dummyCols = useMemo(() => getDummyCols().map(v => ({
    ...v,
    width: 300,
    title: "Making column smaller used to crash!"
  })), []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const [cols, setCols] = useState(dummyCols);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} onColumnResize={(_col, newSize) => {
    if (newSize > 300) {
      setCols(dummyCols);
    } else {
      setCols([dummyCols[0]]);
    }
  }} />;
}`,...z.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`function GridAddNewRows() {
  const cols = useMemo(getDummyCols, []);
  const [rowsCount, setRowsCount] = useState(10);
  const onRowAppended = useCallback(() => {
    setRowsCount(r => r + 1);
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={rowsCount} onRowAppended={onRowAppended} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`function GridNoTrailingBlankRow() {
  const cols = useMemo(getDummyCols, []);
  const [selected, setSelected] = useState<GridSelection | undefined>(undefined);
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={getDummyData} columns={cols} rows={100} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...M.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`function MarkdownEdits() {
  const dummyCols: GridColumn[] = useMemo(() => {
    return [{
      title: "MD short",
      width: 50
    }, {
      title: "MD long",
      width: 50
    }];
  }, []);
  const dummyCells = useCallback(([col, _row]: Item) => {
    if (col === 0) {
      const editable: EditableGridCell = {
        data: "text",
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    } else if (col === 1) {
      const editable: EditableGridCell = {
        data: \`text really really really long
## H1

- this
- is
- a
- longer
- example
- to
- test
- scroll
- of
- preview
                \`,
        allowOverlay: true,
        kind: GridCellKind.Markdown
      };
      return editable;
    }
    const editable: EditableGridCell = {
      data: "text",
      allowOverlay: true,
      kind: GridCellKind.Markdown
    };
    return editable;
  }, []);
  const [selected, setSelected] = useState<GridSelection | undefined>({
    current: {
      cell: [2, 8],
      range: {
        width: 1,
        height: 1,
        x: 2,
        y: 8
      },
      rangeStack: []
    },
    columns: CompactSelection.empty(),
    rows: CompactSelection.empty()
  });
  const onSelected = useCallback((newSel?: GridSelection) => {
    setSelected(newSel);
  }, []);
  return <DataEditor width="100%" getCellContent={dummyCells} columns={dummyCols} rows={1000} onGridSelectionChange={onSelected} gridSelection={selected} />;
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[boolean | null | undefined, boolean | null | undefined]>([false, false]);
  return <DataEditor width="100%" columns={[{
    title: "Editable",
    width: 100
  }, {
    title: "Readonly",
    width: 100
  }]} rows={1} getCellContent={([col]) => {
    return {
      kind: GridCellKind.Boolean,
      readonly: col !== 0,
      allowOverlay: false,
      data: vals[col]
    };
  }} onCellEdited={([col], newVal) => {
    if (newVal.kind === GridCellKind.Boolean) {
      setVals(cv => {
        const f = [...cv];
        f.splice(col, 1, newVal.data);
        return f as [boolean, boolean];
      });
    }
  }} />;
}`,...A.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const [vals, setVals] = useState<[string, string][]>(() => {
    const result: [string, string][] = [];
    for (let i = 0; i < 2000; i++) {
      result.push(["Edit", "Me"]);
    }
    return result;
  });
  return <DataEditor width="100%" columns={[{
    title: "Column A",
    width: 250
  }, {
    title: "Column B",
    width: 250
  }]} rows={vals.length} getCellContent={([col, row]) => ({
    kind: GridCellKind.Text,
    allowOverlay: true,
    data: vals[row][col],
    displayData: vals[row][col]
  })} onCellEdited={([col, row], newVal) => {
    const newVals = [...vals];
    const newRow: [string, string] = [...newVals[row]];
    if (typeof newVal.data === "string") {
      newRow[col] = newVal.data;
    }
    newVals[row] = newRow;
    setVals(newVals);
  }} />;
}`,...$.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`function GroupHeaderActionClick() {
  const cols = [{
    title: "Col1",
    width: 100,
    grow: 1,
    group: "Group"
  }];
  const [clickCount, setClickCount] = useState(0);
  return <div>
            <h3>Click count: {clickCount}</h3>
            <DataEditor width={500} height={500} rows={0} columns={cols} getCellContent={() => ({
      kind: GridCellKind.Text,
      data: "",
      displayData: "",
      allowOverlay: false
    })} getGroupDetails={name => ({
      name,
      actions: [{
        icon: "headerString",
        title: "Action",
        onClick: _e => setClickCount(c => c + 1)
      }]
    })} />
        </div>;
}`,...V.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`function DeleteColumnsViaOnDelete() {
  const [headers, setHeaders] = useState<string[]>(["col-a", "col-b"]);
  const dynColumns: GridColumn[] = headers.map(value => ({
    id: value,
    title: value,
    width: 100
  }));
  const renderCell = React.useCallback((): GridCell => {
    return {
      kind: GridCellKind.Loading,
      allowOverlay: false
    };
  }, []);
  const addColumn = () => {
    const str = Math.random().toString(36).slice(2, 8);
    setHeaders(prev => [...prev, str]);
  };
  const removeColumns = (indices: number[]) => {
    setHeaders(prev => prev.filter((_, i) => !indices.includes(i)));
  };
  const [selection, setSelection] = useState<GridSelection | undefined>(undefined);
  const onDelete = (sel: GridSelection) => {
    if (sel.columns.length > 0) {
      setSelection(undefined);
      removeColumns(sel.columns.toArray());
      return false;
    }
    return true;
  };
  return <div style={{
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }}>
            <div style={{
      marginBottom: 8
    }}>
                <button onClick={addColumn}>Add</button>
            </div>
            <div style={{
      flex: 1,
      position: "relative"
    }}>
                <DataEditor width="100%" height="100%" columns={dynColumns} rows={0} getCellContent={renderCell} gridSelection={selection} onGridSelectionChange={setSelection} onDelete={onDelete} />
            </div>
        </div>;
}`,..._.parameters?.docs?.source}}};const oe=["Simplenotest","RelationColumn","Minimal","Smooth","ManualControl","Draggable","IdealSize","DynamicAddRemoveColumns","GridSelectionOutOfRangeNoColumns","ResizableColumns","GridSelectionOutOfRangeLessColumnsThanSelection","GridAddNewRows","GridNoTrailingBlankRow","MarkdownEdits","CanEditBoolean","SimpleEditable","GroupHeaderActionClick","DeleteColumnsViaOnDelete"];export{A as CanEditBoolean,_ as DeleteColumnsViaOnDelete,G as Draggable,p as DynamicAddRemoveColumns,O as GridAddNewRows,M as GridNoTrailingBlankRow,z as GridSelectionOutOfRangeLessColumnsThanSelection,R as GridSelectionOutOfRangeNoColumns,V as GroupHeaderActionClick,E as IdealSize,k as ManualControl,B as MarkdownEdits,b as Minimal,D as RelationColumn,x as ResizableColumns,$ as SimpleEditable,y as Simplenotest,v as Smooth,oe as __namedExportsOrder,ne as default};

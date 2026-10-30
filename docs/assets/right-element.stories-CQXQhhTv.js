import{R as e}from"./iframe-nea0cPhn.js";import{D as m}from"./data-editor-all-BTagn7nc.js";import{B as u,D as d,P as w,u as g,d as h}from"./utils-DKGYjL2t.js";import{S as R}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const N={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(R,null,e.createElement(u,{title:"Right Element",description:e.createElement(d,null,"A DOM element may be added as a trailer to the grid by using the"," ",e.createElement(w,null,"rightElement")," prop.")},e.createElement(n,null)))]},o=()=>{const{cols:n,getCellContent:l,setCellValue:a}=g(8,!1),i=e.useMemo(()=>n.map(s=>({...s,grow:1})),[n]),[r,c]=e.useState(300),p=e.useCallback(()=>{const s=r;c(t=>t+1);for(let t=0;t<6;t++)a([t,s],{displayData:"",data:""})},[r,a]);return e.createElement(m,{...h,getCellContent:l,columns:i,rowMarkers:"both",onCellEdited:a,trailingRowOptions:{hint:"New row...",sticky:!0,tint:!0},rows:r,onRowAppended:p,rightElementProps:{sticky:!0},rightElement:e.createElement("div",{style:{height:"100%",padding:"20px 20px 40px 20px",width:200,color:"black",whiteSpace:"pre-wrap",backgroundColor:"rgba(240, 240, 250, 0.2)",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 10px rgba(0, 0, 0, 0.15)",backdropFilter:"blur(12px)"}},"This is a real DOM element. You can put whatever you want here. You can also size it as big as you want. ",`

`,"It also does not have to be sticky.")})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(8, false);
  const columns = React.useMemo(() => cols.map(c => ({
    ...c,
    grow: 1
  })), [cols]);
  const [numRows, setNumRows] = React.useState(300);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    setNumRows(cv => cv + 1);
    for (let c = 0; c < 6; c++) {
      setCellValue([c, newRow], {
        displayData: "",
        data: ""
      } as any);
    }
  }, [numRows, setCellValue]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columns} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} rightElementProps={{
    sticky: true
  }} rightElement={<div style={{
    height: "100%",
    padding: "20px 20px 40px 20px",
    width: 200,
    color: "black",
    whiteSpace: "pre-wrap",
    backgroundColor: "rgba(240, 240, 250, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(12px)"
  }}>
                    This is a real DOM element. You can put whatever you want here. You can also size it as big as you
                    want. {"\\n\\n"}It also does not have to be sticky.
                </div>} />;
}`,...o.parameters?.docs?.source}}};const O=["RightElement"];export{o as RightElement,O as __namedExportsOrder,N as default};

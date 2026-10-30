import{R as t}from"./iframe-CIssbtkb.js";import{D as p}from"./data-editor-all-C-qBUU8N.js";import{B as m,D as d,u as w,c as C,d as R}from"./utils-jIM3OMih.js";import{S as f}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-CG_9cDKv.js";import"./throttle-CS-8w14I.js";import"./marked.esm-XxaRhz0v.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const b={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>t.createElement(f,null,t.createElement(m,{title:"Add data",description:t.createElement(t.Fragment,null,t.createElement(d,null,"You can return a different location to have the new row append take place."))},t.createElement(a,null)))]},l=()=>{const{cols:a,getCellContent:n,setCellValueRaw:r,setCellValue:c}=w(60,!1),[s,i]=t.useState(50),u=t.useCallback(async()=>{for(let e=s;e>0;e--)for(let o=0;o<6;o++)r([o,e],n([o,e-1]));for(let e=0;e<6;e++){const o=n([e,0]);r([e,0],C(o))}return i(e=>e+1),"top"},[n,s,r]);return t.createElement(p,{...R,getCellContent:n,columns:a,rowMarkers:"both",onCellEdited:c,trailingRowOptions:{hint:"New row...",sticky:!0,tint:!0},rows:s,onRowAppended:u})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(async () => {
    // shift all of the existing cells down
    for (let y = numRows; y > 0; y--) {
      for (let x = 0; x < 6; x++) {
        setCellValueRaw([x, y], getCellContent([x, y - 1]));
      }
    }
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, 0]);
      setCellValueRaw([c, 0], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
    return "top" as const;
  }, [getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...l.parameters?.docs?.source}}};const G=["AddDataToTop"];export{l as AddDataToTop,G as __namedExportsOrder,b as default};

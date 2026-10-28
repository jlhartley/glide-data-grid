import{R as t}from"./iframe-DvUF06nB.js";import{D as p}from"./data-editor-all-F9INubhy.js";import{B as w,D as C,M as x,K as R,u as f,c as g,d as E}from"./utils-dagUfxOK.js";import{S as h}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>t.createElement(h,null,t.createElement(w,{title:"Add data to middle",description:t.createElement(t.Fragment,null,t.createElement(C,null,"You can return a different location to have the new row append take place."),t.createElement(x,null,"Note that ",t.createElement(R,null,"insertIndex"),' is zero-based while the number column on the left side of the grid is one-based, so inserting at index "4" creates a new row at "5"'))},t.createElement(a,null)))]},o=a=>{const{cols:c,getCellContent:r,setCellValueRaw:s,setCellValue:d}=f(60,!1),[i,u]=t.useState(50),l=a.insertIndex,m=t.useCallback(async()=>{for(let e=i;e>l;e--)for(let n=0;n<6;n++)s([n,e],r([n,e-1]));for(let e=0;e<6;e++){const n=r([e,l]);s([e,l],g(n))}return u(e=>e+1),l},[r,i,s,l]);return t.createElement(p,{...E,getCellContent:r,columns:c,rowMarkers:"both",onCellEdited:d,trailingRowOptions:{hint:"New row...",sticky:!0,tint:!0},rows:i,onRowAppended:m})};o.args={insertIndex:10};o.argTypes={insertIndex:{control:{type:"range",min:1,max:48}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const index = p.insertIndex;
  const onRowAppended = React.useCallback(async () => {
    // shift rows below index down
    for (let y = numRows; y > index; y--) {
      for (let x = 0; x < 6; x++) {
        setCellValueRaw([x, y], getCellContent([x, y - 1]));
      }
    }
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, index]);
      setCellValueRaw([c, index], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
    return index;
  }, [getCellContent, numRows, setCellValueRaw, index]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    hint: "New row...",
    sticky: true,
    tint: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...o.parameters?.docs?.source}}};const O=["AddDataToMiddle"];export{o as AddDataToMiddle,O as __namedExportsOrder,v as default};

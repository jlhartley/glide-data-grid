import{R as e}from"./iframe-DgBdMeKd.js";import{D as h}from"./data-editor-all-hSSLvTLU.js";import{B as E,D,M as k,P as y,u as F,c as H,d as v}from"./utils-DbfSqIKT.js";import{a as M}from"./image-window-loader-BujOuo6D.js";import{S as V}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-D-uVZwiM.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./marked.esm-k5lC70d3.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const q={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e.createElement(V,null,e.createElement(E,{title:"Fill handle",description:e.createElement(e.Fragment,null,e.createElement(D,null,"Fill handles can be used to downfill data with the mouse."),e.createElement(k,null,"Just click and drag, the top row will be copied down. Enable using the"," ",e.createElement(y,null,"fillHandle")," prop."))},e.createElement(a,null)))],argTypes:{fillHandleEnabled:{control:"boolean",name:"fillHandle enabled"},shape:{control:{type:"inline-radio"},options:["square","circle"],name:"shape"},size:{control:{type:"number"},name:"size"},offsetX:{control:{type:"number"},name:"offsetX"},offsetY:{control:{type:"number"},name:"offsetY"},outline:{control:{type:"number"},name:"outline"},allowedFillDirections:{control:{type:"inline-radio"},options:["horizontal","vertical","orthogonal","any"],name:"allowedFillDirections"}},args:{fillHandleEnabled:!0,shape:"square",size:4,offsetX:-2,offsetY:-2,outline:0,allowedFillDirections:"orthogonal"}},o=({fillHandleEnabled:a,shape:i,size:c,offsetX:d,offsetY:u,outline:m,allowedFillDirections:p})=>{const{cols:f,getCellContent:t,setCellValueRaw:s,setCellValue:w}=F(60,!1),[r,C]=e.useState(50),g=e.useCallback(n=>{let l=t(n);return n[0]===1&&l.kind===M.Text&&(l={...l,readonly:!0}),l},[t]),R=e.useCallback(()=>{const n=r;for(let l=0;l<6;l++){const b=t([l,n]);s([l,n],H(b))}C(l=>l+1)},[t,r,s]);return e.createElement(h,{...v,getCellContent:g,columns:f,rowMarkers:"both",onPaste:!0,fillHandle:a?{shape:i,size:c,offsetX:d,offsetY:u,outline:m}:!1,allowedFillDirections:p,keybindings:{downFill:!0,rightFill:!0},onCellEdited:w,trailingRowOptions:{sticky:!0,tint:!0,hint:"New row..."},rows:r,onRowAppended:R})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  fillHandleEnabled,
  shape,
  size,
  offsetX,
  offsetY,
  outline,
  allowedFillDirections
}) => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const getCellContentMangled = React.useCallback<typeof getCellContent>(i => {
    let val = getCellContent(i);
    if (i[0] === 1 && val.kind === GridCellKind.Text) {
      val = {
        ...val,
        readonly: true
      };
    }
    return val;
  }, [getCellContent]);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  return <DataEditor {...defaultProps} getCellContent={getCellContentMangled} columns={cols} rowMarkers={"both"} onPaste={true} fillHandle={fillHandleEnabled ? {
    shape,
    size,
    offsetX,
    offsetY,
    outline
  } : false} allowedFillDirections={allowedFillDirections} keybindings={{
    downFill: true,
    rightFill: true
  }} onCellEdited={setCellValue} trailingRowOptions={{
    sticky: true,
    tint: true,
    hint: "New row..."
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...o.parameters?.docs?.source}}};const B=["FillHandle"];export{o as FillHandle,B as __namedExportsOrder,q as default};

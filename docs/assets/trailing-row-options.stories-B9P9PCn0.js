import{R as n}from"./iframe-C1-HlzKK.js";import{D as w}from"./data-editor-all-dl81PPU5.js";import{B as R,D as C,P as g,u as O,c as x,d as I}from"./utils-C0A3aDn0.js";import{G as i}from"./image-window-loader-BXYRWeEN.js";import{S as h}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./marked.esm-CMDovIh-.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>n.createElement(h,null,n.createElement(R,{title:"Trailing row options",description:n.createElement(C,null,"You can customize the trailing row in each column by setting a"," ",n.createElement(g,null,"trailingRowOptions")," in your columns.")},n.createElement(t,null)))]},f={2:"Smol text",3:"Add",5:"New"},E={2:i.HeaderArray,3:i.HeaderEmoji,5:i.HeaderNumber},D={2:0,3:0,5:0},b={3:!0},k={2:{baseFontStyle:"10px"}},l=()=>{const{cols:t,getCellContent:s,setCellValueRaw:a,setCellValue:c}=O(60,!1),[r,m]=n.useState(50),u=n.useCallback(()=>{const o=r;for(let e=0;e<6;e++){const d=s([e,o]);a([e,o],x(d))}m(e=>e+1)},[s,r,a]),p=n.useMemo(()=>t.map((o,e)=>({...o,trailingRowOptions:{hint:f[e],addIcon:E[e],targetColumn:D[e],disabled:b[e],themeOverride:k[e]}})),[t]);return n.createElement(w,{...I,getCellContent:s,columns:p,rowMarkers:"both",onCellEdited:c,trailingRowOptions:{tint:!0,sticky:!0},rows:r,onRowAppended:u})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  const columnsWithRowOptions: GridColumn[] = React.useMemo(() => {
    return cols.map((c, idx) => ({
      ...c,
      trailingRowOptions: {
        hint: trailingRowOptionsColumnIndexesHint[idx],
        addIcon: trailingRowOptionsColumnIndexesIcon[idx],
        targetColumn: trailingRowOptionsColumnIndexesTarget[idx],
        disabled: trailingRowOptionsColumnIndexesDisabled[idx],
        themeOverride: trailingRowOptionsColumnIndexesTheme[idx]
      }
    }));
  }, [cols]);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={columnsWithRowOptions} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
    tint: true,
    sticky: true
  }} rows={numRows} onRowAppended={onRowAppended} />;
}`,...l.parameters?.docs?.source}}};const B=["TrailingRowOptions"];export{l as TrailingRowOptions,B as __namedExportsOrder,_ as default};

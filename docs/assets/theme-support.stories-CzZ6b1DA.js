import{R as e}from"./iframe-DvUF06nB.js";import{D as p}from"./data-editor-all-F9INubhy.js";import{a as b,B as f,D as g,P as h,M as C,d as R}from"./utils-dagUfxOK.js";import{S}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(S,null,e.createElement(n,null))]},k={accentColor:"#8c96ff",accentLight:"rgba(202, 206, 255, 0.253)",textDark:"#ffffff",textMedium:"#b8b8b8",textLight:"#a0a0a0",textBubble:"#ffffff",bgIconHeader:"#b8b8b8",fgIconHeader:"#000000",textHeader:"#a1a1a1",textHeaderSelected:"#000000",bgCell:"#16161b",bgCellMedium:"#202027",bgHeader:"#212121",bgHeaderHasFocus:"#474747",bgHeaderHovered:"#404040",bgBubble:"#212121",bgBubbleSelected:"#000000",bgSearchResult:"#423c24",borderColor:"rgba(225,225,225,0.2)",drilldownBorder:"rgba(225,225,225,0.4)",linkColor:"#4F5DFF",headerFontStyle:"bold 14px",baseFontStyle:"13px",fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",checkboxMaxSize:18},w={accentColor:"#8c96ff",accentLight:"rgba(202, 206, 255, 0.253)",textDark:"#ffffff",textMedium:"rgba(255, 255, 255, 0.9)",textLight:"rgba(255, 255, 255, 0.7)",textBubble:"#000000",bgIconHeader:"#880000",fgIconHeader:"#ff5555",textHeader:"rgba(0, 0, 0, 0.9)",textHeaderSelected:"#000000",bgCell:"#ff0000",bgCellMedium:"#ff4d4d",bgHeader:"#f3f300",bgHeaderHasFocus:"#eeee00",bgHeaderHovered:"#e0e000",bgBubble:"#ffff00",bgBubbleSelected:"#ffff00",bgSearchResult:"#423c24",borderColor:"#ffff00",drilldownBorder:"#ffff00",linkColor:"#4F5DFF",headerFontStyle:"bold 14px",baseFontStyle:"13px",fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",roundingRadius:6,checkboxMaxSize:40},o=()=>{const{cols:n,getCellContent:s,onColumnResize:i,setCellValue:a}=b(),[c,r]=e.useState({}),[l,d]=e.useState(1e3),u=e.useCallback(()=>{const m=l;d(t=>t+1);for(let t=0;t<6;t++)a([t,m],{displayData:"",data:""})},[l,a]);return e.createElement(f,{title:"Theme support",description:e.createElement(e.Fragment,null,e.createElement(g,null,"DataGrid respects the theme provided by the ",e.createElement(h,null,"theme")," prop."),e.createElement(C,null,e.createElement("button",{onClick:()=>r({})},"Light")," or"," ",e.createElement("button",{onClick:()=>r(k)},"Dark")," even"," ",e.createElement("button",{onClick:()=>r(w)},"Hotdog Stand")))},e.createElement(p,{...R,theme:c,getCellContent:s,columns:n,onRowAppended:u,trailingRowOptions:{tint:!0,sticky:!0},onCellEdited:a,onColumnResize:i,rows:l}))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [theme, setTheme] = React.useState<Partial<Theme>>({});
  const [numRows, setNumRows] = React.useState(1000);
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
  return <BeautifulWrapper title="Theme support" description={<>
                    <Description>
                        DataGrid respects the theme provided by the <PropName>theme</PropName> prop.
                    </Description>
                    <MoreInfo>
                        <button onClick={() => setTheme({})}>Light</button> or{" "}
                        <button onClick={() => setTheme(darkTheme)}>Dark</button> even{" "}
                        <button onClick={() => setTheme(hotdogStand)}>Hotdog Stand</button>
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} theme={theme} getCellContent={getCellContent} columns={cols} onRowAppended={onRowAppended} trailingRowOptions={{
      tint: true,
      sticky: true
    }} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={numRows} />
        </BeautifulWrapper>;
}`,...o.parameters?.docs?.source}}};const z=["ThemeSupport"];export{o as ThemeSupport,z as __namedExportsOrder,P as default};

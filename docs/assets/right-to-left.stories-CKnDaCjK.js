import{R as e}from"./iframe-nea0cPhn.js";import{D as c}from"./data-editor-all-BTagn7nc.js";import{B as m,D as C,u as d,d as p}from"./utils-DKGYjL2t.js";import{a as g}from"./image-window-loader-DtnyhauW.js";import{S as f}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-lT1Iy0oz.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./marked.esm-Z3ZLYBno.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[l=>e.createElement(f,null,e.createElement(m,{title:"Right to Left support",description:e.createElement(e.Fragment,null,e.createElement(C,null,"The data editor automatically detects RTL in text cells and respects it."))},e.createElement(l,null)))]},n=()=>{const{cols:l,getCellContent:r,setCellValue:o,onColumnResize:a}=d(60,!1),s=e.useMemo(()=>{const t=[...l];return t[0]={...t[0],title:"גלייד",hasMenu:!0},t},[l]),i=e.useCallback(t=>{const[u]=t;return u!==0?r(t):{kind:g.Text,allowOverlay:!0,data:"אני גדעון, מומחה לאפליקציות גלייד.",displayData:"אני גדעון, מומחה לאפליקציות גלייד.",allowWrapping:!0}},[r]);return e.createElement(c,{...p,getCellContent:i,columns:s,onColumnResize:a,getCellsForSelection:!0,rowMarkers:"both",onHeaderMenuClick:()=>alert("menu click"),onPaste:!0,onCellEdited:o,rows:1e3})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValue,
    onColumnResize
  } = useMockDataGenerator(60, false);
  const realCols = React.useMemo(() => {
    const result = [...cols];
    result[0] = {
      ...result[0],
      title: "גלייד",
      hasMenu: true
    };
    return result;
  }, [cols]);
  const getCellContentMangled = React.useCallback<typeof getCellContent>(item => {
    const [col] = item;
    if (col !== 0) return getCellContent(item);
    return {
      kind: GridCellKind.Text,
      allowOverlay: true,
      data: "אני גדעון, מומחה לאפליקציות גלייד.",
      displayData: "אני גדעון, מומחה לאפליקציות גלייד.",
      allowWrapping: true
    };
  }, [getCellContent]);
  return <DataEditor {...defaultProps} getCellContent={getCellContentMangled} columns={realCols} onColumnResize={onColumnResize} getCellsForSelection={true} rowMarkers={"both"} onHeaderMenuClick={() => alert("menu click")} onPaste={true} onCellEdited={setCellValue} rows={1000} />;
}`,...n.parameters?.docs?.source}}};const b=["RightToLeft"];export{n as RightToLeft,b as __namedExportsOrder,S as default};

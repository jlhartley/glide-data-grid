import{R as e}from"./iframe-nea0cPhn.js";import{D as m}from"./data-editor-all-BTagn7nc.js";import{B as d,D as u,P as f,a as p,d as w}from"./utils-DKGYjL2t.js";import{S as v}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(v,null,e.createElement(d,{title:"Row Hover Effect",description:e.createElement(u,null,"Through careful usage of the ",e.createElement(f,null,"onItemHovered")," callback it is possible to easily create a row hover effect.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:a}=p(),[n,l]=e.useState(void 0),s=e.useCallback(o=>{const[,i]=o.location;l(o.kind!=="cell"?void 0:i)},[]),c=e.useCallback(o=>{if(o===n)return{bgCell:"#f7f7f7",bgCellMedium:"#f0f0f0"}},[n]);return e.createElement(m,{...w,rowMarkers:"both",onItemHovered:s,getCellContent:a,getRowThemeOverride:c,columns:t,rows:300})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useAllMockedKinds();
  const [hoverRow, setHoverRow] = React.useState<number | undefined>(undefined);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    const [, row] = args.location;
    setHoverRow(args.kind !== "cell" ? undefined : row);
  }, []);
  const getRowThemeOverride = React.useCallback<GetRowThemeCallback>(row => {
    if (row !== hoverRow) return undefined;
    return {
      bgCell: "#f7f7f7",
      bgCellMedium: "#f0f0f0"
    };
  }, [hoverRow]);
  return <DataEditor {...defaultProps} rowMarkers="both" onItemHovered={onItemHovered} getCellContent={getCellContent} getRowThemeOverride={getRowThemeOverride} columns={cols} rows={300} />;
}`,...r.parameters?.docs?.source}}};const S=["RowHover"];export{r as RowHover,S as __namedExportsOrder,O as default};

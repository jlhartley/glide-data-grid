import{R as e}from"./iframe-DkB1__q6.js";import{D as m}from"./data-editor-all-Dry_cisF.js";import{B as d,D as u,P as f,a as p,d as w}from"./utils-CF9FeL2P.js";import{S as v}from"./story-utils-CLcQchUW.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DzIoTW7e.js";import"./throttle-D5W36Fz2.js";import"./marked.esm-CzgVW7Pi.js";import"./flatten-DMPNlKFP.js";import"./scrolling-data-grid-EAtytre0.js";import"./isArray-C7w9PDCd.js";import"./useResizeDetector-DdvuOYGN.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(v,null,e.createElement(d,{title:"Row Hover Effect",description:e.createElement(u,null,"Through careful usage of the ",e.createElement(f,null,"onItemHovered")," callback it is possible to easily create a row hover effect.")},e.createElement(t,null)))]},r=()=>{const{cols:t,getCellContent:a}=p(),[n,l]=e.useState(void 0),s=e.useCallback(o=>{const[,i]=o.location;l(o.kind!=="cell"?void 0:i)},[]),c=e.useCallback(o=>{if(o===n)return{bgCell:"#f7f7f7",bgCellMedium:"#f0f0f0"}},[n]);return e.createElement(m,{...w,rowMarkers:"both",onItemHovered:s,getCellContent:a,getRowThemeOverride:c,columns:t,rows:300})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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

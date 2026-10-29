import{R as e}from"./iframe-C1-HlzKK.js";import{D as p}from"./data-editor-all-dl81PPU5.js";import{B as g,D as b,P as M,u as x,d as v}from"./utils-C0A3aDn0.js";import{S as k}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(k,null,e.createElement(g,{title:"Rearrange Columns",description:e.createElement(b,null,"Columns can be rearranged by drag and dropping, as long as you respond to the"," ",e.createElement(M,null,"onColumnMoved")," callback.")},e.createElement(o,null)))]},r=()=>{const{cols:o,getCellContent:c}=x(60),[s,d]=e.useState(o),m=e.useCallback((l,t)=>{d(a=>{const n=[...a],[u]=n.splice(l,1);return n.splice(t,0,u),n})},[]),i=e.useCallback((l,t)=>t!==3,[]),C=e.useCallback(([l,t])=>{const a=o.findIndex(n=>n.title===s[l].title);return c([a,t])},[o,c,s]);return e.createElement(p,{...v,freezeColumns:1,rowMarkers:"both",getCellContent:C,onColumnProposeMove:i,columns:s,onColumnMoved:m,columnSelectionBlending:"mixed",rangeSelectionBlending:"mixed",rows:1e3})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(60);

  // This is a dirty hack because the mock generator doesn't really support changing this. In a real data source
  // you should track indexes properly
  const [sortableCols, setSortableCols] = React.useState(cols);
  const onColMoved = React.useCallback((startIndex: number, endIndex: number): void => {
    setSortableCols(old => {
      const newCols = [...old];
      const [toMove] = newCols.splice(startIndex, 1);
      newCols.splice(endIndex, 0, toMove);
      return newCols;
    });
  }, []);
  const onColProposeMove = React.useCallback((_startIndex: number, endIndex: number): boolean => {
    return endIndex !== 3;
  }, []);
  const getCellContentMangled = React.useCallback(([col, row]: Item): GridCell => {
    const remappedCol = cols.findIndex(c => c.title === sortableCols[col].title);
    return getCellContent([remappedCol, row]);
  }, [cols, getCellContent, sortableCols]);
  return <DataEditor {...defaultProps} freezeColumns={1} rowMarkers="both" getCellContent={getCellContentMangled} onColumnProposeMove={onColProposeMove} columns={sortableCols} onColumnMoved={onColMoved} columnSelectionBlending="mixed" rangeSelectionBlending="mixed" rows={1000} />;
}`,...r.parameters?.docs?.source}}};const z=["RearrangeColumns"];export{r as RearrangeColumns,z as __namedExportsOrder,_ as default};

import{R as e}from"./iframe-B6BB7SE7.js";import{D as i}from"./data-editor-all-Bo3JCWIw.js";import{B as m,D as p,P as u,u as f,d as C}from"./utils-Bp6Jia9o.js";import{S as R}from"./story-utils-D5TzgPCe.js";import{A as g,m as a}from"./image-window-loader-DkdLdcZn.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-ClvAx-m_.js";import"./flatten-xp5kEhqg.js";import"./scrolling-data-grid-BiQNnq5H.js";import"./marked.esm-JH4R6def.js";import"./isArray-Qc_lD31Y.js";import"./useResizeDetector-CoEKsWyI.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(R,null,e.createElement(m,{title:"Custom renderers",description:e.createElement(p,null,"Override internal cell renderers by passing the "," ",e.createElement(u,null,"renderers")," prop.")},e.createElement(n,null)))]},t=()=>{const{cols:n,getCellContent:s}=f(100,!0,!0),c=e.useMemo(()=>[...g,{...a,draw:(l,d)=>{const{ctx:o,rect:r}=l;o.fillStyle="#ffe0e0",o.fillRect(r.x,r.y,r.width,r.height),a.draw(l,d)}}],[]);return e.createElement(i,{...C,getCellContent:s,columns:n,rows:200,rowMarkers:"both",renderers:c})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const renderers = React.useMemo<readonly InternalCellRenderer<InnerGridCell>[]>(() => {
    return [...AllCellRenderers, {
      ...markerCellRenderer,
      draw: (args, cell) => {
        const {
          ctx,
          rect
        } = args;
        ctx.fillStyle = "#ffe0e0";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        markerCellRenderer.draw(args, cell);
      }
    } satisfies typeof markerCellRenderer as InternalCellRenderer<InnerGridCell>];
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={200} rowMarkers="both" renderers={renderers} />;
}`,...t.parameters?.docs?.source}}};const P=["OverrideMarkerRenderer"];export{t as OverrideMarkerRenderer,P as __namedExportsOrder,O as default};

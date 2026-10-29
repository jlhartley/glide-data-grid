import{R as e}from"./iframe-C1-HlzKK.js";import{D as d}from"./data-editor-all-dl81PPU5.js";import{B as i,D as m,P as p,u,d as C}from"./utils-C0A3aDn0.js";import{S as f}from"./story-utils-B8gHKxtk.js";import{A as R,m as o}from"./image-window-loader-BXYRWeEN.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./marked.esm-CMDovIh-.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const I={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(f,null,e.createElement(i,{title:"Custom renderers",description:e.createElement(m,null,"Override internal cell renderers by passing the "," ",e.createElement(p,null,"renderers")," prop.")},e.createElement(n,null)))]},t=()=>{const{cols:n,getCellContent:s}=u(100,!0,!0),c=e.useMemo(()=>[...R,{...o,draw:l=>{const{ctx:a,rect:r}=l;a.fillStyle="#ffe0e0",a.fillRect(r.x,r.y,r.width,r.height),o.draw(l)}}],[]);return e.createElement(d,{...C,getCellContent:s,columns:n,rows:200,rowMarkers:"both",renderers:c})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100, true, true);
  const renderers = React.useMemo<readonly InternalCellRenderer<InnerGridCell>[]>(() => {
    return [...AllCellRenderers, {
      ...markerCellRenderer,
      draw: args => {
        const {
          ctx,
          rect
        } = args;
        ctx.fillStyle = "#ffe0e0";
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
        markerCellRenderer.draw(args as any);
      }
    } as InternalCellRenderer<InnerGridCell>];
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={200} rowMarkers="both" renderers={renderers} />;
}`,...t.parameters?.docs?.source}}};const O=["OverrideMarkerRenderer"];export{t as OverrideMarkerRenderer,O as __namedExportsOrder,I as default};

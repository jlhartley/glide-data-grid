import{R as e}from"./iframe-B0S1gjT9.js";import{D as i}from"./data-editor-all-BWrHhPq-.js";import{B as m,D as p,P as u,u as f,d as C}from"./utils-BLNZp51M.js";import{S as R}from"./story-utils-NeWIluy3.js";import{A as g,m as a}from"./image-window-loader-DasUm_rG.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-B2xvqvaw.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./marked.esm-Bfn4Z7oE.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";const O={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(R,null,e.createElement(m,{title:"Custom renderers",description:e.createElement(p,null,"Override internal cell renderers by passing the "," ",e.createElement(u,null,"renderers")," prop.")},e.createElement(n,null)))]},t=()=>{const{cols:n,getCellContent:s}=f(100,!0,!0),c=e.useMemo(()=>[...g,{...a,draw:(l,d)=>{const{ctx:o,rect:r}=l;o.fillStyle="#ffe0e0",o.fillRect(r.x,r.y,r.width,r.height),a.draw(l,d)}}],[]);return e.createElement(i,{...C,getCellContent:s,columns:n,rows:200,rowMarkers:"both",renderers:c})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
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

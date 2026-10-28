import{R as r}from"./iframe-DvUF06nB.js";import{D as m}from"./data-editor-all-F9INubhy.js";import{B as u,D as w,u as p,d as f}from"./utils-dagUfxOK.js";import{S as h}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const G={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>r.createElement(h,null,r.createElement(u,{title:"Custom Drawing",description:r.createElement(w,null,"You can draw over or under most objects in the grid.")},r.createElement(n,null)))]},o=()=>{const{cols:n,getCellContent:s}=p(1e3,!0,!0),i=r.useCallback((c,l)=>{const{ctx:e,rect:t}=c;e.beginPath(),e.rect(t.x,t.y,t.width,t.height);const a=e.createLinearGradient(0,t.y,0,t.y+t.height);a.addColorStop(0,"#ff00d934"),a.addColorStop(1,"#00a2ff34"),e.fillStyle=a,e.fill(),l()},[]),d=r.useCallback((c,l)=>{l();const{ctx:e,rect:t}=c,a=7;e.beginPath(),e.moveTo(t.x+t.width-a,t.y+1),e.lineTo(t.x+t.width,t.y+a+1),e.lineTo(t.x+t.width,t.y+1),e.closePath(),e.save(),e.fillStyle="#ff0000",e.fill(),e.restore()},[]);return r.createElement(m,{...f,getCellContent:s,columns:n,drawHeader:i,drawCell:d,rows:3e3,rowMarkers:"both"})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(1000, true, true);
  const drawHeader: DrawHeaderCallback = React.useCallback((args, draw) => {
    const {
      ctx,
      rect
    } = args;
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    const lg = ctx.createLinearGradient(0, rect.y, 0, rect.y + rect.height);
    lg.addColorStop(0, "#ff00d934");
    lg.addColorStop(1, "#00a2ff34");
    ctx.fillStyle = lg;
    ctx.fill();
    draw(); // draw at end to draw under the header
  }, []);
  const drawCell: DrawCellCallback = React.useCallback((args, draw) => {
    draw(); // draw up front to draw over the cell
    const {
      ctx,
      rect
    } = args;
    const size = 7;
    ctx.beginPath();
    ctx.moveTo(rect.x + rect.width - size, rect.y + 1);
    ctx.lineTo(rect.x + rect.width, rect.y + size + 1);
    ctx.lineTo(rect.x + rect.width, rect.y + 1);
    ctx.closePath();
    ctx.save();
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.restore();
  }, []);
  return <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} drawHeader={drawHeader} drawCell={drawCell} rows={3000} rowMarkers="both" />;
}`,...o.parameters?.docs?.source}}};const H=["CustomDrawing"];export{o as CustomDrawing,H as __namedExportsOrder,G as default};

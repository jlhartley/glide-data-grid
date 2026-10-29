import{R as e}from"./iframe-Dm2sTaU0.js";import{D as c}from"./data-editor-all-D8fhf72B.js";import{B as g,D as u,P as f,u as d,d as C}from"./utils-0xoxKcOj.js";import{a as h}from"./image-window-loader-qCvk1D9s.js";import{S as x}from"./story-utils-Ql6G6nq_.js";import{r as w}from"./throttle-DgHjLOvN.js";import{y}from"./isArray-D4UdyBJF.js";import"./preload-helper-PPVm8Dsz.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./marked.esm-CqBPueJW.js";import"./useResizeDetector-CtMIXcRD.js";const v={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(x,null,e.createElement(g,{title:"Wrapping Text",description:e.createElement(u,null,"Text cells can have wrapping text by setting the ",e.createElement(f,null,"allowWrapping")," prop to true.")},e.createElement(t,null)))]},n=t=>{const{cols:i,getCellContent:l,onColumnResize:s}=d(6),r=e.useMemo(()=>w(0,100).map(()=>y.lorem.sentence(t.length)),[t.length]),p=e.useCallback(o=>{const[m,a]=o;return m===0?{kind:h.Text,allowOverlay:!0,displayData:`${a},
${r[a%r.length]}`,data:`${a}, 
${r}`,allowWrapping:!0,contentAlign:t.alignment}:l(o)},[l,t.alignment,r]);return e.createElement(c,{...C,rowHeight:80,getCellContent:p,columns:i,rows:1e3,onColumnResize:s,experimental:{hyperWrapping:t.hyperWrapping}})};n.args={alignment:"left",length:20,hyperWrapping:!1};n.argTypes={alignment:{control:{type:"select"},options:["left","center","right"]},length:{control:{type:"range",min:2,max:200}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize
  } = useMockDataGenerator(6);
  const suffix = React.useMemo(() => {
    return range(0, 100).map(() => faker.lorem.sentence(p.length));
  }, [p.length]);
  const mangledGetCellContent = React.useCallback<typeof getCellContent>(i => {
    const [col, row] = i;
    if (col === 0) {
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        displayData: \`\${row},\\n\${suffix[row % suffix.length]}\`,
        data: \`\${row}, \\n\${suffix}\`,
        allowWrapping: true,
        contentAlign: p.alignment
      };
    }
    return getCellContent(i);
  }, [getCellContent, p.alignment, suffix]);
  return <DataEditor {...defaultProps} rowHeight={80} getCellContent={mangledGetCellContent} columns={cols} rows={1000} onColumnResize={onColumnResize} experimental={{
    hyperWrapping: p.hyperWrapping
  }} />;
}`,...n.parameters?.docs?.source}}};const A=["WrappingText"];export{n as WrappingText,A as __namedExportsOrder,v as default};

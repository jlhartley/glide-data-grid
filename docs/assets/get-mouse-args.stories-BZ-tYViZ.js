import{R as e}from"./iframe-Dm2sTaU0.js";import{D as u}from"./data-editor-all-D8fhf72B.js";import{u as m,B as d,D as p,P as g,d as f}from"./utils-0xoxKcOj.js";import{S as M}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(M,null,e.createElement(n,null))]},o=()=>{const{cols:n,getCellContent:a}=m(6),i=e.useRef(null),[l,r]=e.useState("Move the mouse over the grid"),c=e.useCallback(s=>{const t=i.current?.getMouseArgsForPosition(s.clientX,s.clientY,s);t===void 0?r("Outside grid"):t.kind==="cell"?r(`Cell ${t.location[0]}, ${t.location[1]}`):r(t.kind)},[]);return e.createElement(d,{title:"getMouseArgsForPosition",description:e.createElement(p,null,"Use ",e.createElement(g,null,"getMouseArgsForPosition")," to translate pointer coordinates into grid locations.")},e.createElement("div",{onMouseMove:c},e.createElement(u,{...f,ref:i,columns:n,getCellContent:a,rows:1e3})),e.createElement("div",{style:{marginTop:8}},l))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const ref = React.useRef<DataEditorRef>(null);
  const [info, setInfo] = React.useState<string>("Move the mouse over the grid");
  const onMouseMove = React.useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    const args = ref.current?.getMouseArgsForPosition(ev.clientX, ev.clientY, ev);
    if (args === undefined) {
      setInfo("Outside grid");
    } else if (args.kind === "cell") {
      setInfo(\`Cell \${args.location[0]}, \${args.location[1]}\`);
    } else {
      setInfo(args.kind);
    }
  }, []);
  return <BeautifulWrapper title="getMouseArgsForPosition" description={<Description>
                    Use <PropName>getMouseArgsForPosition</PropName> to translate
                    pointer coordinates into grid locations.
                </Description>}>
            <div onMouseMove={onMouseMove}>
                <DataEditor {...defaultProps} ref={ref} columns={cols} getCellContent={getCellContent} rows={1000} />
            </div>
            <div style={{
      marginTop: 8
    }}>{info}</div>
        </BeautifulWrapper>;
}`,...o.parameters?.docs?.source}}};const B=["GetMouseArgsForPosition"];export{o as GetMouseArgsForPosition,B as __namedExportsOrder,S as default};

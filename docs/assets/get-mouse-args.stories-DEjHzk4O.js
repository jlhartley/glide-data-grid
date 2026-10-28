import{R as e}from"./iframe-DvUF06nB.js";import{D as u}from"./data-editor-all-F9INubhy.js";import{u as m,B as d,D as p,P as g,d as f}from"./utils-dagUfxOK.js";import{S as M}from"./story-utils-C0tNhMi0.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DuBPEUkH.js";import"./throttle-Bs_Dyz9i.js";import"./marked.esm-D9UvuHxz.js";import"./flatten-CcDO8UxA.js";import"./scrolling-data-grid-CFVe1qLW.js";import"./isArray-D4lTv9al.js";import"./useResizeDetector-DbHCegZU.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(M,null,e.createElement(n,null))]},o=()=>{const{cols:n,getCellContent:a}=m(6),i=e.useRef(null),[l,r]=e.useState("Move the mouse over the grid"),c=e.useCallback(s=>{const t=i.current?.getMouseArgsForPosition(s.clientX,s.clientY,s);t===void 0?r("Outside grid"):t.kind==="cell"?r(`Cell ${t.location[0]}, ${t.location[1]}`):r(t.kind)},[]);return e.createElement(d,{title:"getMouseArgsForPosition",description:e.createElement(p,null,"Use ",e.createElement(g,null,"getMouseArgsForPosition")," to translate pointer coordinates into grid locations.")},e.createElement("div",{onMouseMove:c},e.createElement(u,{...f,ref:i,columns:n,getCellContent:a,rows:1e3})),e.createElement("div",{style:{marginTop:8}},l))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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

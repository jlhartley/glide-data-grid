import{R as e}from"./iframe-DkB1__q6.js";import{D as u}from"./data-editor-all-Dry_cisF.js";import{u as m,B as d,D as p,P as g,d as f}from"./utils-CF9FeL2P.js";import{S as v}from"./story-utils-CLcQchUW.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DzIoTW7e.js";import"./throttle-D5W36Fz2.js";import"./marked.esm-CzgVW7Pi.js";import"./flatten-DMPNlKFP.js";import"./scrolling-data-grid-EAtytre0.js";import"./isArray-C7w9PDCd.js";import"./useResizeDetector-DdvuOYGN.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(v,null,e.createElement(n,null))]},o=()=>{const{cols:n,getCellContent:a}=m(6),i=e.useRef(null),[l,r]=e.useState("Move the mouse over the grid"),c=e.useCallback(s=>{const t=i.current?.getMouseArgsForPosition(s.clientX,s.clientY,s.nativeEvent);t===void 0?r("Outside grid"):t.kind==="cell"?r(`Cell ${t.location[0]}, ${t.location[1]}`):r(t.kind)},[]);return e.createElement(d,{title:"getMouseArgsForPosition",description:e.createElement(p,null,"Use ",e.createElement(g,null,"getMouseArgsForPosition")," to translate pointer coordinates into grid locations.")},e.createElement("div",{onMouseMove:c},e.createElement(u,{...f,ref:i,columns:n,getCellContent:a,rows:1e3})),e.createElement("div",{style:{marginTop:8}},l))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const ref = React.useRef<DataEditorRef>(null);
  const [info, setInfo] = React.useState<string>("Move the mouse over the grid");
  const onMouseMove = React.useCallback((ev: React.MouseEvent<HTMLDivElement>) => {
    const args = ref.current?.getMouseArgsForPosition(ev.clientX, ev.clientY, ev.nativeEvent);
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

import{R as e,r as u}from"./iframe-Dm2sTaU0.js";import{k as m,D as b}from"./data-editor-all-D8fhf72B.js";import{u as k,B as f,D as h,d as C}from"./utils-0xoxKcOj.js";import{S as x}from"./story-utils-Ql6G6nq_.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-qCvk1D9s.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";const A={title:"Glide-Data-Grid/DataEditor Demos",decorators:[i=>e.createElement(x,null,e.createElement(i,null))]},s=()=>{const{getCellContent:i,cols:l,setCellValue:d}=k(30,!1),p={display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gridColumnGap:"32px",gridRowGap:"10px",marginBottom:"10px",marginTop:"20px",font:"13px sans-serif"},c={display:"flex",justifyContent:"space-between",alignItems:"center"},{copy:E,cut:K,paste:v,pageDown:w,pageUp:D,first:S,last:G,...o}=m,[a,y]=u.useState(o),r=(n,t)=>{y(g=>({...g,[n]:t}))};return e.createElement(f,{title:"Custom Keybindings",description:e.createElement(h,null,"This demo showcases custom keybindings. Modify the keybindings using the controls below.",e.createElement("div",{style:p},Object.keys(o).map(n=>e.createElement("div",{key:n,style:c},e.createElement("label",null,n,": "),e.createElement("div",null,e.createElement("input",{type:"checkbox",checked:a[n]===!0,onChange:t=>r(n,!!t.target.checked)}),e.createElement("input",{type:"text",style:{width:"100px"},value:a[n]||"",onChange:t=>r(n,t.target.value)}))))))},e.createElement(b,{...C,getCellContent:i,onCellEdited:d,keybindings:a,columns:l,rangeSelect:"multi-rect",rows:100,rowMarkers:"both"}))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    getCellContent,
    cols,
    setCellValue
  } = useMockDataGenerator(30, false);
  const keybindingStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "32px",
    gridRowGap: "10px",
    marginBottom: "10px",
    marginTop: "20px",
    font: "13px sans-serif"
  };
  const controlGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const {
    copy,
    cut,
    paste,
    pageDown,
    pageUp,
    first,
    last,
    ...rest
  } = keybindingDefaults;
  const [keybindings, setKeybindings] = useState<Partial<Keybinds>>(rest);
  const handleKeybindingChange = (key: keyof Keybinds, value: Keybind) => {
    setKeybindings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  return <BeautifulWrapper title="Custom Keybindings" description={<Description>
                    This demo showcases custom keybindings. Modify the keybindings using the controls below.
                    <div style={keybindingStyle}>
                        {Object.keys(rest).map(key => <div key={key} style={controlGroupStyle}>
                                <label>{key}: </label>
                                <div>
                                    <input type="checkbox" checked={keybindings[key as keyof Keybinds] === true} onChange={e => handleKeybindingChange(key as keyof Keybinds, e.target.checked ? true : false)} />
                                    <input type="text" style={{
            width: "100px"
          }} value={keybindings[key as keyof Keybinds] as string || ""} onChange={e => handleKeybindingChange(key as keyof Keybinds, e.target.value)} />
                                </div>
                            </div>)}
                    </div>
                </Description>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} onCellEdited={setCellValue} keybindings={keybindings} columns={cols} rangeSelect="multi-rect" rows={100} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...s.parameters?.docs?.source}}};const q=["CustomKeybindings"];export{s as CustomKeybindings,q as __namedExportsOrder,A as default};

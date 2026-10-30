import{R as e}from"./iframe-nea0cPhn.js";import{D as R}from"./data-editor-all-BTagn7nc.js";import{u as f,c as C,B as g,D as E,P as s,M as k,K as D,d as N}from"./utils-DKGYjL2t.js";import{S as h}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const H={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(h,null,e.createElement(o,null))]},n=()=>{const{cols:o,getCellContent:a,setCellValueRaw:c,setCellValue:i}=f(60,!1),[r,u]=e.useState(50),l=e.useRef(null),d=e.useCallback(()=>{l.current?.appendRow(3,!1)},[l]),m=e.useCallback(()=>{const p=r;for(let t=0;t<6;t++){const w=a([t,p]);c([t,p],C(w))}u(t=>t+1)},[a,r,c]);return e.createElement(g,{title:"appendRow Ref",description:e.createElement(e.Fragment,null,e.createElement(E,null,"Adding data can also be triggered from outside of ",e.createElement(s,null,"DataEditor")),e.createElement(k,null,"By calling ",e.createElement(s,null,"appendRow")," on a ",e.createElement(s,null,"ref")," to your grid, you can trigger the append elsewhere, like this ",e.createElement(D,{onClick:d},"Append")," button"))},e.createElement(R,{...N,ref:l,getCellContent:a,columns:o,rowMarkers:"both",onCellEdited:i,trailingRowOptions:{hint:"New row...",sticky:!0,tint:!0},rows:r,onRowAppended:m}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw,
    setCellValue
  } = useMockDataGenerator(60, false);
  const [numRows, setNumRows] = React.useState(50);
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = React.useCallback(() => {
    void ref.current?.appendRow(3, false);
  }, [ref]);
  const onRowAppended = React.useCallback(() => {
    const newRow = numRows;
    for (let c = 0; c < 6; c++) {
      const cell = getCellContent([c, newRow]);
      setCellValueRaw([c, newRow], clearCell(cell));
    }
    setNumRows(cv => cv + 1);
  }, [getCellContent, numRows, setCellValueRaw]);
  return <BeautifulWrapper title="appendRow Ref" description={<>
                    <Description>
                        Adding data can also be triggered from outside of <PropName>DataEditor</PropName>
                    </Description>
                    <MoreInfo>
                        By calling <PropName>appendRow</PropName> on a <PropName>ref</PropName> to your grid, you can
                        trigger the append elsewhere, like this <KeyName onClick={onClick}>Append</KeyName> button
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} getCellContent={getCellContent} columns={cols} rowMarkers={"both"} onCellEdited={setCellValue} trailingRowOptions={{
      hint: "New row...",
      sticky: true,
      tint: true
    }} rows={numRows} onRowAppended={onRowAppended} />
        </BeautifulWrapper>;
}`,...n.parameters?.docs?.source}}};const I=["AppendRowHandle"];export{n as AppendRowHandle,I as __namedExportsOrder,H as default};

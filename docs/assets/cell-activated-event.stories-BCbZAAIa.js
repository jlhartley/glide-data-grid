import{R as e}from"./iframe-nea0cPhn.js";import{D as p}from"./data-editor-all-BTagn7nc.js";import{a as C,B as A,D as f,K as c,P as g,M as E,d as h}from"./utils-DKGYjL2t.js";import{S as k}from"./story-utils-QaWVL2bK.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-DtnyhauW.js";import"./throttle-lT1Iy0oz.js";import"./marked.esm-Z3ZLYBno.js";import"./flatten-razd9CSk.js";import"./scrolling-data-grid-C0CjvEKY.js";import"./isArray-C22DTADT.js";import"./useResizeDetector-DO9q-r-T.js";const z={title:"Glide-Data-Grid/DataEditor Demos",decorators:[n=>e.createElement(k,null,e.createElement(n,null))]},t=n=>{const{cols:r,getCellContent:o,onColumnResize:s,setCellValue:d}=C(),u=e.useCallback(l=>{const i=o(l);return l[0]===3?{...i,activationBehaviorOverride:"single-click",hoverEffect:!0}:i},[o]),[a,m]=e.useState(void 0),v=e.useCallback(l=>{m(l)},[]);return e.createElement(A,{title:"Cell Activated event",description:e.createElement(e.Fragment,null,e.createElement(f,null,"When you tap ",e.createElement(c,null,"Enter"),", ",e.createElement(c,null,"Space"),", start typing, or double click a cell, that cell is activated. You can track this with ",e.createElement(g,null,"onCellActivated"),"."),e.createElement(E,null,"Last activated cell:"," ",a===void 0?"none":`(${a[0]}, ${a[1]})`))},e.createElement(p,{...h,cellActivationBehavior:n.cellActivationBehavior,getCellContent:u,getCellsForSelection:!0,columns:r,onCellEdited:d,onColumnResize:s,onCellActivated:v,rows:1e4}))};t.argTypes={cellActivationBehavior:{control:{type:"select"},options:["double-click","single-click","second-click"]}};t.args={cellActivationBehavior:"second-click"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const getCellContentMangled = React.useCallback((item: Item): GridCell => {
    const result = getCellContent(item);
    if (item[0] === 3) {
      return {
        ...result,
        activationBehaviorOverride: "single-click",
        hoverEffect: true
      } as any;
    }
    return result;
  }, [getCellContent]);
  const [lastActivated, setLastActivated] = React.useState<Item | undefined>(undefined);
  const onCellActivated = React.useCallback((cell: Item) => {
    setLastActivated(cell);
  }, []);
  return <BeautifulWrapper title="Cell Activated event" description={<>
                    <Description>
                        When you tap <KeyName>Enter</KeyName>, <KeyName>Space</KeyName>, start typing, or double click a cell,
                        that cell is activated. You can track this with <PropName>onCellActivated</PropName>.
                    </Description>
                    <MoreInfo>
                        Last activated cell:{" "}
                        {lastActivated === undefined ? "none" : \`(\${lastActivated[0]}, \${lastActivated[1]})\`}
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps}
    // editorBloom={[-1, -4]}
    cellActivationBehavior={p.cellActivationBehavior} getCellContent={getCellContentMangled}
    //initialSize={[849, 967]}
    //scrollOffsetY={10_000}
    getCellsForSelection={true} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} onCellActivated={onCellActivated} rows={10_000} />
        </BeautifulWrapper>;
}`,...t.parameters?.docs?.source}}};const L=["CellActivatedEvent"];export{t as CellActivatedEvent,L as __namedExportsOrder,z as default};

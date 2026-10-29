import{R as e}from"./iframe-C1-HlzKK.js";import{D as c}from"./data-editor-all-dl81PPU5.js";import{a as p,B as m,D as d,P as u,M as g,d as f}from"./utils-C0A3aDn0.js";import{S as C}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const P={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(C,null,e.createElement(o,null))]},t=o=>{const{cols:l,getCellContent:r,onColumnResize:a,setCellValue:i}=p(),n=e.useRef(null),s=()=>{n.current?.scrollTo(4,99,"both",o.paddingX,o.paddingY,{vAlign:o.vAlign,hAlign:o.hAlign,behavior:o.behavior})};return e.createElement(m,{title:"Imperative scrolling",description:e.createElement(e.Fragment,null,e.createElement(d,null,"You can imperatively scroll to a cell by calling ",e.createElement(u,null,"scrollTo")," on a DataEditor ref."),e.createElement(g,null,"Click ",e.createElement("button",{onClick:s},"Here")," to scroll to column 4 row 100"))},e.createElement(c,{...f,ref:n,rowMarkers:"clickable-number",getCellContent:r,columns:l,onCellEdited:i,onColumnResize:a,rows:1e4}))};t.args={paddingY:0,paddingX:0,vAlign:"start",hAlign:"start",behavior:"auto"};t.argTypes={paddingY:0,paddingX:0,vAlign:{control:{type:"select"},options:["start","center","end",void 0]},hAlign:{control:{type:"select"},options:["start","center","end",void 0]},behavior:{control:{type:"select"},options:["smooth","instant","auto",void 0]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`p => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const ref = React.useRef<DataEditorRef>(null);
  const onClick = () => {
    ref.current?.scrollTo(4, 99, "both", p.paddingX, p.paddingY, {
      vAlign: p.vAlign,
      hAlign: p.hAlign,
      behavior: p.behavior
    });
  };
  return <BeautifulWrapper title="Imperative scrolling" description={<>
                    <Description>
                        You can imperatively scroll to a cell by calling <PropName>scrollTo</PropName> on a DataEditor
                        ref.
                    </Description>
                    <MoreInfo>
                        Click <button onClick={onClick}>Here</button> to scroll to column 4 row 100
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} ref={ref} rowMarkers="clickable-number" getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={10_000} />
        </BeautifulWrapper>;
}`,...t.parameters?.docs?.source}}};const S=["ImperativeScroll"];export{t as ImperativeScroll,S as __namedExportsOrder,P as default};

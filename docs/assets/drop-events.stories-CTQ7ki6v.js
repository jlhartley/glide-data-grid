import{R as e}from"./iframe-C1-HlzKK.js";import{D as P}from"./data-editor-all-dl81PPU5.js";import{a as O,B as S,D as I,P as p,M as g,d as T}from"./utils-C0A3aDn0.js";import{a as d}from"./image-window-loader-BXYRWeEN.js";import{S as k}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./marked.esm-CMDovIh-.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const K={title:"Glide-Data-Grid/DataEditor Demos",decorators:[s=>e.createElement(k,null,e.createElement(s,null))]},f=new Set(["image/png","image/gif","image/bmp","image/jpeg"]),a=()=>{const{cols:s,getCellContent:i,onColumnResize:h,setCellValue:c}=O(),[C,r]=e.useState([]),[m,D]=e.useState(),E=e.useCallback((n,t)=>{if(r([]),t===null)return;const{files:l}=t;if(l.length!==1)return;const[o]=l;if(!f.has(o.type))return;const u=URL.createObjectURL(o);c(n,{kind:d.Image,data:[u],allowOverlay:!0,readonly:!0},!0,!0),D(n)},[c]),v=e.useCallback((n,t)=>{if(t===null)return;const{items:l}=t;if(l.length!==1)return;const[o]=l;if(!f.has(o.type))return;const[u,y]=n;i(n).kind===d.Image?r([{color:"#44BB0022",range:{x:u,y,width:1,height:1}}]):r([])},[i]),R=e.useCallback(()=>{r([])},[]);return e.createElement(S,{title:"Drop events",description:e.createElement(e.Fragment,null,e.createElement(I,null,"You can drag and drop into cells by using ",e.createElement(p,null,"onDragOverCell")," and"," ",e.createElement(p,null,"onDrop"),"."),e.createElement("div",null,m===void 0?e.createElement(g,null,"Nothing dropped, yet"):e.createElement(e.Fragment,null,e.createElement(g,null,"You last dropped in cell ",e.createElement(p,null,JSON.stringify(m))))))},e.createElement(P,{...T,getCellContent:i,columns:s,onCellEdited:c,onColumnResize:h,rows:1e3,onDrop:E,onDragOverCell:v,onDragLeave:R,highlightRegions:C,rowMarkers:"none"}))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const [highlights, setHighlights] = React.useState<DataEditorProps["highlightRegions"]>([]);
  const [lastDropCell, setLastDropCell] = React.useState<Item | undefined>();
  const onDrop = React.useCallback((cell: Item, dataTransfer: DataTransfer | null) => {
    setHighlights([]);
    if (dataTransfer === null) {
      return;
    }
    const {
      files
    } = dataTransfer;
    // This only supports one image, for simplicity.
    if (files.length !== 1) {
      return;
    }
    const [file] = files;
    if (!SUPPORTED_IMAGE_TYPES.has(file.type)) {
      return;
    }
    const imgUrl = URL.createObjectURL(file);
    setCellValue(cell, {
      kind: GridCellKind.Image,
      data: [imgUrl],
      allowOverlay: true,
      readonly: true
    }, true, true);
    setLastDropCell(cell);
  }, [setCellValue]);
  const onDragOverCell = React.useCallback((cell: Item, dataTransfer: DataTransfer | null) => {
    if (dataTransfer === null) {
      return;
    }
    const {
      items
    } = dataTransfer;
    // This only supports one image, for simplicity.
    if (items.length !== 1) {
      return;
    }
    const [item] = items;
    if (!SUPPORTED_IMAGE_TYPES.has(item.type)) {
      return;
    }
    const [col, row] = cell;
    if (getCellContent(cell).kind === GridCellKind.Image) {
      setHighlights([{
        color: "#44BB0022",
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }]);
    } else {
      setHighlights([]);
    }
  }, [getCellContent]);
  const onDragLeave = React.useCallback(() => {
    setHighlights([]);
  }, []);
  return <BeautifulWrapper title="Drop events" description={<>
                    <Description>
                        You can drag and drop into cells by using <PropName>onDragOverCell</PropName> and{" "}
                        <PropName>onDrop</PropName>.
                    </Description>

                    <div>
                        {lastDropCell === undefined ? <MoreInfo>Nothing dropped, yet</MoreInfo> : <>
                                <MoreInfo>
                                    You last dropped in cell <PropName>{JSON.stringify(lastDropCell)}</PropName>
                                </MoreInfo>
                            </>}
                    </div>
                </>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={1000} onDrop={onDrop} onDragOverCell={onDragOverCell} onDragLeave={onDragLeave} highlightRegions={highlights} rowMarkers="none" />
        </BeautifulWrapper>;
}`,...a.parameters?.docs?.source}}};const V=["DropEvents"];export{a as DropEvents,V as __namedExportsOrder,K as default};

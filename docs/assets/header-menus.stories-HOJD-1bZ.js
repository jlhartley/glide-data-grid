import{s as g}from"./marked.esm-k5lC70d3.js";import{R as e}from"./iframe-DgBdMeKd.js";import{u as f}from"./react-laag.esm-C5FumBkR.js";import{D as b}from"./data-editor-all-hSSLvTLU.js";import{B as M,D as v,P as k,a as E,d as y}from"./utils-DbfSqIKT.js";import{S as H}from"./story-utils-BnEqV050.js";import"./preload-helper-PPVm8Dsz.js";import"./index-9qgAY3N1.js";import"./index-tO-FnYBB.js";import"./image-window-loader-BujOuo6D.js";import"./throttle-D-uVZwiM.js";import"./flatten-BWkdkEKy.js";import"./scrolling-data-grid-CbqNlde-.js";import"./isArray-_6-sBPQI.js";import"./useResizeDetector-CcJPuRFQ.js";const W={title:"Glide-Data-Grid/DataEditor Demos",decorators:[s=>e.createElement(H,null,e.createElement(M,{title:"Header menus",description:e.createElement(e.Fragment,null,e.createElement(v,null,"Headers on the data grid can be configured to support menus. We provide the events and the menu icon, you provide the menu. The menu icon can be modified via the"," ",e.createElement(k,null,"menuIcon")," prop."))},e.createElement(s,null)))]},O=g("div")({name:"SimpleMenu",class:"s7szcfi",propsAsIs:!1}),l=()=>{const{cols:s,getCellContent:d,onColumnResize:i,setCellValue:a}=E(),c=e.useMemo(()=>s.map((o,r)=>r===2?{...o,hasMenu:!0,menuIcon:"dots",overlayIcon:"rowOwnerOverlay"}:r===3?{...o,hasMenu:!0,menuIcon:"headerUri"}:{...o,hasMenu:!0}),[s]),[n,t]=e.useState(),u=n!==void 0,{layerProps:m,renderLayer:p}=f({isOpen:u,auto:!0,placement:"bottom-end",triggerOffset:2,onOutsideClick:()=>t(void 0),trigger:{getBounds:()=>({left:n?.bounds.x??0,top:n?.bounds.y??0,width:n?.bounds.width??0,height:n?.bounds.height??0,right:(n?.bounds.x??0)+(n?.bounds.width??0),bottom:(n?.bounds.y??0)+(n?.bounds.height??0)})}}),C=e.useCallback((o,r)=>{t({col:o,bounds:r})},[]),h=e.useCallback(()=>{console.log("Header clicked")},[]);return e.createElement(e.Fragment,null,e.createElement(b,{...y,getCellContent:d,onHeaderMenuClick:C,onHeaderClicked:h,columns:c,onCellContextMenu:(o,r)=>r.preventDefault(),onCellEdited:a,onColumnResize:i,rows:1e3}),u&&p(e.createElement(O,{...m},e.createElement("div",{onClick:()=>t(void 0)},"These do nothing"),e.createElement("div",{onClick:()=>t(void 0)},"Add column right"),e.createElement("div",{onClick:()=>t(void 0)},"Add column left"),e.createElement("div",{className:"danger",onClick:()=>t(void 0)},"Delete"))))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    onColumnResize,
    setCellValue
  } = useAllMockedKinds();
  const realCols = React.useMemo(() => {
    return cols.map((c, index) => {
      if (index === 2) {
        return {
          ...c,
          hasMenu: true,
          menuIcon: "dots",
          overlayIcon: "rowOwnerOverlay"
        };
      } else if (index === 3) {
        return {
          ...c,
          hasMenu: true,
          menuIcon: "headerUri"
        };
      }
      return {
        ...c,
        hasMenu: true
      };
    });
  }, [cols]);
  const [menu, setMenu] = React.useState<{
    col: number;
    bounds: Rectangle;
  }>();
  const isOpen = menu !== undefined;
  const {
    layerProps,
    renderLayer
  } = useLayer({
    isOpen,
    auto: true,
    placement: "bottom-end",
    triggerOffset: 2,
    onOutsideClick: () => setMenu(undefined),
    trigger: {
      getBounds: () => ({
        left: menu?.bounds.x ?? 0,
        top: menu?.bounds.y ?? 0,
        width: menu?.bounds.width ?? 0,
        height: menu?.bounds.height ?? 0,
        right: (menu?.bounds.x ?? 0) + (menu?.bounds.width ?? 0),
        bottom: (menu?.bounds.y ?? 0) + (menu?.bounds.height ?? 0)
      })
    }
  });
  const onHeaderMenuClick = React.useCallback((col: number, bounds: Rectangle) => {
    setMenu({
      col,
      bounds
    });
  }, []);
  const onHeaderClicked = React.useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Header clicked");
  }, []);
  return <>
            <DataEditor {...defaultProps} getCellContent={getCellContent} onHeaderMenuClick={onHeaderMenuClick} onHeaderClicked={onHeaderClicked} columns={realCols} onCellContextMenu={(_, e) => e.preventDefault()} onCellEdited={setCellValue} onColumnResize={onColumnResize} rows={1000} />
            {isOpen && renderLayer(<SimpleMenu {...layerProps}>
                        <div onClick={() => setMenu(undefined)}>These do nothing</div>
                        <div onClick={() => setMenu(undefined)}>Add column right</div>
                        <div onClick={() => setMenu(undefined)}>Add column left</div>
                        <div className="danger" onClick={() => setMenu(undefined)}>
                            Delete
                        </div>
                    </SimpleMenu>)}
        </>;
}`,...l.parameters?.docs?.source}}};const F=["HeaderMenus"];export{l as HeaderMenus,F as __namedExportsOrder,W as default};

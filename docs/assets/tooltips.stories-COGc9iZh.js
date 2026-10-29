import{R as e}from"./iframe-C1-HlzKK.js";import{u as p}from"./react-laag.esm-CYp1IRaZ.js";import{D as m}from"./data-editor-all-dl81PPU5.js";import{B as f,D as g,P as b,u as h,d as w}from"./utils-C0A3aDn0.js";import{S as y}from"./story-utils-B8gHKxtk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DN6qKYzA.js";import"./index-Ds8NxSt3.js";import"./image-window-loader-BXYRWeEN.js";import"./throttle-DLX4JYJo.js";import"./marked.esm-CMDovIh-.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";import"./isArray-DmGphG26.js";import"./useResizeDetector-BoM0AR6j.js";const S={title:"Glide-Data-Grid/DataEditor Demos",decorators:[r=>e.createElement(y,null,e.createElement(f,{title:"Tooltips",className:"double",description:e.createElement(g,null,"Using the ",e.createElement(b,null,"onItemHovered")," event makes it easy to create tooltips. This story is intentionally forced to scroll vertically so layout in scrolling documents can be confirmed.")},e.createElement(r,null)))]},T={left:0,top:0,width:0,height:0,bottom:0,right:0},n=()=>{const{cols:r,getCellContent:u}=h(6),[s,i]=e.useState(),o=e.useRef(0),d=e.useCallback(t=>{t.kind==="cell"?(window.clearTimeout(o.current),i(void 0),o.current=window.setTimeout(()=>{i({val:`Tooltip for ${t.location[0]}, ${t.location[1]}`,bounds:{left:t.bounds.x,top:t.bounds.y,width:t.bounds.width,height:t.bounds.height,right:t.bounds.x+t.bounds.width,bottom:t.bounds.y+t.bounds.height}})},1e3)):(window.clearTimeout(o.current),o.current=0,i(void 0))},[]);e.useEffect(()=>()=>window.clearTimeout(o.current),[]);const a=s!==void 0,{renderLayer:c,layerProps:l}=p({isOpen:a,triggerOffset:4,auto:!0,container:"portal",trigger:{getBounds:()=>s?.bounds??T}});return e.createElement(e.Fragment,null,e.createElement(m,{...w,onItemHovered:d,getCellContent:u,columns:r,rowMarkers:"both",rows:1e3}),a&&c(e.createElement("div",{...l,style:{...l.style,padding:"8px 12px",color:"white",font:"500 13px Inter",backgroundColor:"rgba(0, 0, 0, 0.85)",borderRadius:9}},s.val)))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const [tooltip, setTooltip] = React.useState<{
    val: string;
    bounds: IBounds;
  } | undefined>();
  const timeoutRef = React.useRef(0);
  const onItemHovered = React.useCallback((args: GridMouseEventArgs) => {
    if (args.kind === "cell") {
      window.clearTimeout(timeoutRef.current);
      setTooltip(undefined);
      timeoutRef.current = window.setTimeout(() => {
        setTooltip({
          val: \`Tooltip for \${args.location[0]}, \${args.location[1]}\`,
          bounds: {
            // translate to react-laag types
            left: args.bounds.x,
            top: args.bounds.y,
            width: args.bounds.width,
            height: args.bounds.height,
            right: args.bounds.x + args.bounds.width,
            bottom: args.bounds.y + args.bounds.height
          }
        });
      }, 1000);
    } else {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
      setTooltip(undefined);
    }
  }, []);
  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const isOpen = tooltip !== undefined;
  const {
    renderLayer,
    layerProps
  } = useLayer({
    isOpen,
    triggerOffset: 4,
    auto: true,
    container: "portal",
    trigger: {
      getBounds: () => tooltip?.bounds ?? zeroBounds
    }
  });
  return <>
            <DataEditor {...defaultProps} onItemHovered={onItemHovered} getCellContent={getCellContent} columns={cols} rowMarkers="both" rows={1000} />
            {isOpen && renderLayer(<div {...layerProps} style={{
      ...layerProps.style,
      padding: "8px 12px",
      color: "white",
      font: "500 13px Inter",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      borderRadius: 9
    }}>
                        {tooltip.val}
                    </div>)}
        </>;
}`,...n.parameters?.docs?.source}}};const $=["Tooltips"];export{n as Tooltips,$ as __namedExportsOrder,S as default};

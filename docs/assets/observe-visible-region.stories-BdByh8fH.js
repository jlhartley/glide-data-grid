import{R as e}from"./iframe-BynEneiI.js";import{D as a}from"./data-editor-all-B_BNdl63.js";import{u as l,B as m,D as c,P as g,M as p,K as t,d as u}from"./utils-By-9wJ6Q.js";import{S as b}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const w={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(b,null,e.createElement(o,null))]},n=()=>{const{cols:o,getCellContent:r}=l(100),[i,s]=e.useState({x:0,y:0,width:0,height:0});return e.createElement(m,{title:"Observe Visible Region",description:e.createElement(e.Fragment,null,e.createElement(c,null,"The visible region can be observed using ",e.createElement(g,null,"onVisibleRegionChanged")),e.createElement(p,null,"Then current visible region is x:",e.createElement(t,null,i.x)," y:",e.createElement(t,null,i.y)," width:",e.createElement(t,null,i.width)," height:",e.createElement(t,null,i.height)))},e.createElement(a,{...u,getCellContent:r,columns:o,rows:1e3,onVisibleRegionChanged:s}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const [visibleRegion, setVisibleRegion] = React.useState<Rectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });
  return <BeautifulWrapper title="Observe Visible Region" description={<>
                    <Description>
                        The visible region can be observed using <PropName>onVisibleRegionChanged</PropName>
                    </Description>
                    <MoreInfo>
                        Then current visible region is x:<KeyName>{visibleRegion.x}</KeyName> y:
                        <KeyName>{visibleRegion.y}</KeyName> width:
                        <KeyName>{visibleRegion.width}</KeyName> height:<KeyName>{visibleRegion.height}</KeyName>
                    </MoreInfo>
                </>}>
            <DataEditor {...defaultProps} getCellContent={getCellContent} columns={cols} rows={1000} onVisibleRegionChanged={setVisibleRegion} />
        </BeautifulWrapper>;
}`,...n.parameters?.docs?.source}}};const x=["ObserveVisibleRegion"];export{n as ObserveVisibleRegion,x as __namedExportsOrder,w as default};

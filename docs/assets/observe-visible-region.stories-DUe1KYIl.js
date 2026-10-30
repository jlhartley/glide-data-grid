import{R as e}from"./iframe-CIssbtkb.js";import{D as a}from"./data-editor-all-C-qBUU8N.js";import{u as l,B as m,D as c,P as g,M as p,K as t,d as u}from"./utils-jIM3OMih.js";import{S as b}from"./story-utils-BI8SnVr2.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-CG_9cDKv.js";import"./throttle-CS-8w14I.js";import"./marked.esm-XxaRhz0v.js";import"./flatten-rvethmbq.js";import"./scrolling-data-grid-BjoeTi-u.js";import"./isArray-4tl_5V1F.js";import"./useResizeDetector-D29WLS1j.js";const w={title:"Glide-Data-Grid/DataEditor Demos",decorators:[o=>e.createElement(b,null,e.createElement(o,null))]},n=()=>{const{cols:o,getCellContent:r}=l(100),[i,s]=e.useState({x:0,y:0,width:0,height:0});return e.createElement(m,{title:"Observe Visible Region",description:e.createElement(e.Fragment,null,e.createElement(c,null,"The visible region can be observed using ",e.createElement(g,null,"onVisibleRegionChanged")),e.createElement(p,null,"Then current visible region is x:",e.createElement(t,null,i.x)," y:",e.createElement(t,null,i.y)," width:",e.createElement(t,null,i.width)," height:",e.createElement(t,null,i.height)))},e.createElement(a,{...u,getCellContent:r,columns:o,rows:1e3,onVisibleRegionChanged:s}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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

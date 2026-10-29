import{R as e}from"./iframe-BynEneiI.js";import{D as s}from"./data-editor-all-B_BNdl63.js";import{u as l,B as i,D as c,P as m,M as p,K as o,d as u}from"./utils-By-9wJ6Q.js";import{S as d}from"./story-utils-q8CUafD6.js";import"./preload-helper-PPVm8Dsz.js";import"./image-window-loader-Cz4WZa9y.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const K={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>e.createElement(d,null,e.createElement(t,null))]},r=()=>{const{cols:t,getCellContent:a}=l(6),n=e.createElement(s,{...u,rowMarkers:"checkbox-visible",getCellContent:a,columns:t,rows:1e3});return e.createElement(i,{title:"Automatic Row Markers",description:e.createElement(e.Fragment,null,e.createElement(c,null,"You can enable row markers with rich selection behavior using the"," ",e.createElement(m,null,"rowMarkers")," prop."),e.createElement(p,null,"Use ",e.createElement(o,null,"⇧")," + click to make range selections, and ",e.createElement(o,null,"Ctrl")," (",e.createElement(o,null,"⌘")," on Mac) + click to add/remove individual rows."))},n)};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(6);
  const dataEditor = <DataEditor {...defaultProps} rowMarkers={"checkbox-visible"} getCellContent={getCellContent} columns={cols} rows={1000} />;
  return <BeautifulWrapper title="Automatic Row Markers" description={<>
                    <Description>
                        You can enable row markers with rich selection behavior using the{" "}
                        <PropName>rowMarkers</PropName> prop.
                    </Description>
                    <MoreInfo>
                        Use <KeyName>⇧</KeyName> + click to make range selections, and <KeyName>Ctrl</KeyName> (
                        <KeyName>⌘</KeyName> on Mac) + click to add/remove individual rows.
                    </MoreInfo>
                </>}>
            {dataEditor}
        </BeautifulWrapper>;
}`,...r.parameters?.docs?.source}}};const y=["AutomaticRowMarkers"];export{r as AutomaticRowMarkers,y as __namedExportsOrder,K as default};

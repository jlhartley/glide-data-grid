import{R as e}from"./iframe-BynEneiI.js";import{u as R,B as C,D as g,M as y,K as D,d as x}from"./utils-By-9wJ6Q.js";import{a as E}from"./image-window-loader-Cz4WZa9y.js";import{S as k}from"./story-utils-q8CUafD6.js";import{D as U}from"./data-editor-all-B_BNdl63.js";import"./preload-helper-PPVm8Dsz.js";import"./isArray-D3Yi875v.js";import"./throttle-Db8i-HAC.js";import"./marked.esm-DeOFW1d8.js";import"./flatten-DQVfVO4k.js";import"./useResizeDetector-DIuHoR9_.js";import"./scrolling-data-grid-g_p87fl-.js";const _={title:"Glide-Data-Grid/DataEditor Demos",decorators:[a=>e.createElement(k,null,e.createElement(a,null))]};let f=1;function m(){return f=f*16807%2147483647}const n=()=>{const{cols:a,getCellContent:w,setCellValueRaw:o}=R(100),l=e.useRef(null),s=e.useRef(0),r=e.useRef(null);return e.useEffect(()=>{let d=0;const c=()=>{const i=[],h=performance.now();for(let t=0;t<5e3;t++){const u=Math.max(10,m()%100),p=m()%1e4;o([u,p],{kind:E.Text,data:t.toString(),displayData:`${t}k`,themeOverride:t%5!==0?{bgCell:"#f2fff4",textDark:"#00d41c"}:{bgCell:"#fff6f6",textDark:"#d40000"},allowOverlay:!0,lastUpdated:h}),i.push({cell:[u,p]})}s.current+=5e3,r.current!==null&&(r.current.textContent=`${s.current}`),l.current?.updateCells(i),d=window.requestAnimationFrame(c)};return c(),()=>{cancelAnimationFrame(d)}},[o]),e.createElement(C,{title:"Rapid updating",description:e.createElement(e.Fragment,null,e.createElement(g,null,"Data grid can support many thousands of updates per seconds. The data grid can easily update data faster than a human can read it, more importantly the faster the data grid can update, the more time your code can spend doing more valuable work."),e.createElement(y,null,"Updates processed: ",e.createElement(D,{ref:r})," We could do this faster but we wrote a really crappy data store for this demo which is actually slowing down the data grid."))},e.createElement(U,{...x,ref:l,getCellContent:w,columns:a,rows:1e4}))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    cols,
    getCellContent,
    setCellValueRaw
  } = useMockDataGenerator(100);
  const ref = React.useRef<DataEditorRef>(null);
  const countRef = React.useRef(0);
  const displayCountRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    let rafID = 0;
    const sendUpdate = () => {
      const cells: {
        cell: Item;
      }[] = [];
      const now = performance.now();
      for (let x = 0; x < 5000; x++) {
        const col = Math.max(10, rand() % 100);
        const row = rand() % 10_000;
        setCellValueRaw([col, row], {
          kind: GridCellKind.Text,
          data: x.toString(),
          displayData: \`\${x}k\`,
          themeOverride: x % 5 !== 0 ? {
            bgCell: "#f2fff4",
            textDark: "#00d41c"
          } : {
            bgCell: "#fff6f6",
            textDark: "#d40000"
          },
          allowOverlay: true,
          lastUpdated: now
        });
        cells.push({
          cell: [col, row]
        });
      }
      countRef.current += 5000;
      if (displayCountRef.current !== null) {
        displayCountRef.current.textContent = \`\${countRef.current}\`;
      }
      ref.current?.updateCells(cells);
      rafID = window.requestAnimationFrame(sendUpdate);
    };
    sendUpdate();
    return () => {
      cancelAnimationFrame(rafID);
    };
  }, [setCellValueRaw]);
  return <BeautifulWrapper title="Rapid updating" description={<>
                    <Description>
                        Data grid can support many thousands of updates per seconds. The data grid can easily update
                        data faster than a human can read it, more importantly the faster the data grid can update, the
                        more time your code can spend doing more valuable work.
                    </Description>
                    <MoreInfo>
                        Updates processed: <KeyName ref={displayCountRef} /> We could do this faster but we wrote a
                        really crappy data store for this demo which is actually slowing down the data grid.
                    </MoreInfo>
                </>}>
            <DataEditorAll {...defaultProps} ref={ref} getCellContent={getCellContent} columns={cols} rows={10_000} />
        </BeautifulWrapper>;
}`,...n.parameters?.docs?.source}}};const B=["RapidUpdates"];export{n as RapidUpdates,B as __namedExportsOrder,_ as default};

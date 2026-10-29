import{g as A,R as a}from"./iframe-Dm2sTaU0.js";import{a as M,C as B}from"./image-window-loader-qCvk1D9s.js";import{S as W}from"./story-utils-Ql6G6nq_.js";import{D as F}from"./data-editor-all-D8fhf72B.js";import{n as O,o as V,r as E}from"./throttle-DgHjLOvN.js";import{B as $}from"./utils-0xoxKcOj.js";import{D as K}from"./doc-wrapper-dABYatlG.js";import"./preload-helper-PPVm8Dsz.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";import"./isArray-D4UdyBJF.js";import"./useResizeDetector-CtMIXcRD.js";var R,P;function L(){if(P)return R;P=1;function t(d,s,n){var o=-1,r=d.length;s<0&&(s=-s>r?0:r+s),n=n>r?r:n,n<0&&(n+=r),r=s>n?0:n-s>>>0,s>>>=0;for(var c=Array(r);++o<r;)c[o]=d[o+s];return c}return R=t,R}var b,T;function j(){if(T)return b;T=1;var t=O();function d(s){var n=t(s),o=n%1;return n===n?o?n-o:n:0}return b=d,b}var I,S;function H(){if(S)return I;S=1;var t=L(),d=V(),s=j(),n=Math.ceil,o=Math.max;function r(c,l,m){(m?d(c,l,m):l===void 0)?l=1:l=o(s(l),0);var v=c==null?0:c.length;if(!v||l<1)return[];for(var w=0,D=0,p=Array(n(v/l));w<v;)p[D++]=t(c,w,w+=l);return p}return I=r,I}var J=H();const N=A(J),le={title:"Glide-Data-Grid/DataEditor Demos",decorators:[t=>a.createElement(W,null,a.createElement(t,null))]};function Q(t,d,s,n,o,r){t=Math.max(t,1);const c=a.useRef(B.empty()),l=a.useRef([]),[m,v]=a.useState({x:0,y:0,width:0,height:0}),w=a.useRef(m);w.current=m;const D=a.useCallback(e=>{v(i=>e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height?i:e)},[]),p=a.useCallback(e=>{const[i,h]=e,u=l.current[h];return u!==void 0?n(u,i):{kind:M.Loading,allowOverlay:!1}},[n]),C=a.useCallback(async e=>{c.current=c.current.add(e);const i=e*t,h=await s([i,(e+1)*t]),u=w.current,f=[],g=l.current;for(const[k,G]of h.entries()){g[k+i]=G;for(let y=u.x;y<=u.x+u.width;y++)f.push({cell:[y,k+i]})}r.current?.updateCells(f)},[s,r,t]),_=a.useCallback(e=>async()=>{const i=Math.max(0,Math.floor(e.y/t)),h=Math.floor((e.y+e.height)/t);for(const f of N(E(i,h+1).filter(g=>!c.current.hasIndex(g)),d))await Promise.allSettled(f.map(C));const u=[];for(let f=e.y;f<e.y+e.height;f++){const g=[];for(let k=e.x;k<e.x+e.width;k++)g.push(p([k,f]));u.push(g)}return u},[p,C,d,t]);a.useEffect(()=>{const e=m,i=Math.max(0,Math.floor((e.y-t/2)/t)),h=Math.floor((e.y+e.height+t/2)/t);for(const u of E(i,h+1))c.current.hasIndex(u)||C(u)},[C,t,m]);const q=a.useCallback((e,i)=>{const[,h]=e,u=l.current[h];if(u===void 0)return;const f=o(e,i,u);f!==void 0&&(l.current[h]=f)},[o]);return{getCellContent:p,onVisibleRegionChanged:D,onCellEdited:q,getCellsForSelection:_}}const x=()=>{const t=a.useRef(null),d=a.useCallback(async o=>(await new Promise(r=>setTimeout(r,300)),E(o[0],o[1]).map(r=>[`1, ${r}`,`2, ${r}`])),[]),s=a.useMemo(()=>[{title:"A",width:150},{title:"B",width:200}],[]),n=Q(50,5,d,a.useCallback((o,r)=>({kind:M.Text,data:o[r],allowOverlay:!0,displayData:o[r]}),[]),a.useCallback((o,r,c)=>{const[l]=o;if(r.kind!==M.Text)return;const m=[...c];return m[l]=r.data,m},[]),t);return a.createElement($,{title:"Server Side Data",description:a.createElement(K,null,"Glide data grid is fully ready to handle your server side data needs. This example condenses the implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but network transactions should work the same.")},a.createElement(F,{ref:t,...n,width:"100%",columns:s,rows:3e3,rowMarkers:"both"}))};x.parameters={options:{showPanel:!1}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const ref = React.useRef<DataEditorRef | null>(null);
  const getRowData = React.useCallback(async (r: Item) => {
    await new Promise(res => setTimeout(res, 300));
    return range(r[0], r[1]).map(rowIndex => [\`1, \${rowIndex}\`, \`2, \${rowIndex}\`]);
  }, []);
  const columns = React.useMemo<readonly GridColumn[]>(() => {
    return [{
      title: "A",
      width: 150
    }, {
      title: "B",
      width: 200
    }];
  }, []);
  const args = useAsyncData<string[]>(50, 5, getRowData, React.useCallback((rowData, col) => ({
    kind: GridCellKind.Text,
    data: rowData[col],
    allowOverlay: true,
    displayData: rowData[col]
  }), []), React.useCallback((cell, newVal, rowData) => {
    const [col] = cell;
    if (newVal.kind !== GridCellKind.Text) return undefined;
    const newRow: string[] = [...rowData];
    newRow[col] = newVal.data;
    return newRow;
  }, []), ref);
  return <BeautifulWrapper title="Server Side Data" description={<Description>
                    Glide data grid is fully ready to handle your server side data needs. This example condenses the
                    implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but
                    network transactions should work the same.
                </Description>}>
            <DataEditor ref={ref} {...args} width="100%" columns={columns} rows={3000} rowMarkers="both" />
        </BeautifulWrapper>;
}`,...x.parameters?.docs?.source}}};const ue=["ServerSideData"];export{x as ServerSideData,ue as __namedExportsOrder,le as default};

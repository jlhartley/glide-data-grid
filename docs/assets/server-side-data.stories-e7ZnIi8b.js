import{a as M,C as B,d as W}from"./image-window-loader-DasUm_rG.js";import{g as F,R as o}from"./iframe-B0S1gjT9.js";import{S as O}from"./story-utils-NeWIluy3.js";import{D as V}from"./data-editor-all-BWrHhPq-.js";import{n as $,o as K,r as E}from"./throttle-B2xvqvaw.js";import{B as L}from"./utils-BLNZp51M.js";import{D as j}from"./doc-wrapper-CL7SCA4Z.js";import"./marked.esm-Bfn4Z7oE.js";import"./preload-helper-PPVm8Dsz.js";import"./flatten-CWx8ZKgi.js";import"./scrolling-data-grid-CgrqE7KL.js";import"./isArray-oVtnH141.js";import"./useResizeDetector-CuOHD37q.js";var b,P;function H(){if(P)return b;P=1;function u(d,s,n){var a=-1,t=d.length;s<0&&(s=-s>t?0:t+s),n=n>t?t:n,n<0&&(n+=t),t=s>n?0:n-s>>>0,s>>>=0;for(var r=Array(t);++a<t;)r[a]=d[a+s];return r}return b=u,b}var S,T;function J(){if(T)return S;T=1;var u=$();function d(s){var n=u(s),a=n%1;return n===n?a?n-a:n:0}return S=d,S}var I,_;function N(){if(_)return I;_=1;var u=H(),d=K(),s=J(),n=Math.ceil,a=Math.max;function t(r,l,f){(f?d(r,l,f):l===void 0)?l=1:l=a(s(l),0);var p=r==null?0:r.length;if(!p||l<1)return[];for(var k=0,x=0,C=Array(n(p/l));k<p;)C[x++]=u(r,k,k+=l);return C}return I=t,I}var Q=N();const U=F(Q),ue={title:"Glide-Data-Grid/DataEditor Demos",decorators:[u=>o.createElement(O,null,o.createElement(u,null))]};function X(u,d,s,n,a,t){const r=Math.max(u,1),l=o.useRef(B.empty()),f=o.useRef([]),[p,k]=o.useState({x:0,y:0,width:0,height:0}),x=W(p),C=o.useCallback(e=>{k(i=>e.x===i.x&&e.y===i.y&&e.width===i.width&&e.height===i.height?i:e)},[]),y=o.useCallback(e=>{const[i,h]=e,c=f.current[h];return c!==void 0?n(c,i):{kind:M.Loading,allowOverlay:!1}},[n]),D=o.useCallback(async e=>{l.current=l.current.add(e);const i=e*r,h=await s([i,(e+1)*r]),c=x.current,m=[],w=f.current;for(const[g,A]of h.entries()){w[g+i]=A;for(let R=c.x;R<=c.x+c.width;R++)m.push({cell:[R,g+i]})}t.current?.updateCells(m)},[s,t,r,x]),q=o.useCallback(e=>async()=>{const i=Math.max(0,Math.floor(e.y/r)),h=Math.floor((e.y+e.height)/r);for(const m of U(E(i,h+1).filter(w=>!l.current.hasIndex(w)),d))await Promise.allSettled(m.map(D));const c=[];for(let m=e.y;m<e.y+e.height;m++){const w=[];for(let g=e.x;g<e.x+e.width;g++)w.push(y([g,m]));c.push(w)}return c},[y,D,d,r]);o.useEffect(()=>{const e=p,i=Math.max(0,Math.floor((e.y-r/2)/r)),h=Math.floor((e.y+e.height+r/2)/r);for(const c of E(i,h+1))l.current.hasIndex(c)||D(c)},[D,r,p]);const G=o.useCallback((e,i)=>{const[,h]=e,c=f.current[h];if(c===void 0)return;const m=a(e,i,c);m!==void 0&&(f.current[h]=m)},[a]);return{getCellContent:y,onVisibleRegionChanged:C,onCellEdited:G,getCellsForSelection:q}}const v=()=>{const u=o.useRef(null),d=o.useCallback(async a=>(await new Promise(t=>setTimeout(t,300)),E(a[0],a[1]).map(t=>[`1, ${t}`,`2, ${t}`])),[]),s=o.useMemo(()=>[{title:"A",width:150},{title:"B",width:200}],[]),n=X(50,5,d,o.useCallback((a,t)=>({kind:M.Text,data:a[t],allowOverlay:!0,displayData:a[t]}),[]),o.useCallback((a,t,r)=>{const[l]=a;if(t.kind!==M.Text)return;const f=[...r];return f[l]=t.data,f},[]),u);return o.createElement(L,{title:"Server Side Data",description:o.createElement(j,null,"Glide data grid is fully ready to handle your server side data needs. This example condenses the implementation into a single custom hook and loads in pages of 50. We are using 300ms sleeps, but network transactions should work the same.")},o.createElement(V,{ref:u,...n,width:"100%",columns:s,rows:3e3,rowMarkers:"both"}))};v.parameters={options:{showPanel:!1}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};const de=["ServerSideData"];export{v as ServerSideData,de as __namedExportsOrder,ue as default};

import{s as U}from"./marked.esm-DeOFW1d8.js";import{R as A,g as ae,r as s}from"./iframe-BynEneiI.js";import{y as R,i as B}from"./isArray-D3Yi875v.js";import{G as b,f as se,h as $,j as F,D as ee}from"./data-editor-all-Du3elqmW.js";import{q as ie,s as le,u as ue,w as ce,x as de,y as pe,a as ne,z as fe,A as me,r as ge}from"./throttle-Db8i-HAC.js";import{u as Ce}from"./useResizeDetector-DIuHoR9_.js";import"./preload-helper-PPVm8Dsz.js";import"./flatten-DQVfVO4k.js";function ye(e){const[n,t]=A.useState([]),[o,a]=A.useState(void 0),{columns:r,onGroupHeaderClicked:l,onGridSelectionChange:C,getGroupDetails:y,gridSelection:c,freezeColumns:u=0,theme:i}=e,k=c??o,d=A.useMemo(()=>{const m=[];let h=[-1,-1],S;for(let w=u;w<r.length;w++){const G=r[w].group??"",N=n.includes(G);S!==G&&h[0]!==-1&&(m.push(h),h=[-1,-1]),N&&h[0]!==-1?h[1]+=1:N?h=[w,1]:h[0]!==-1&&(m.push(h),h=[-1,-1]),S=G}return h[0]!==-1&&m.push(h),m},[n,r,u]),f=A.useMemo(()=>d.length===0?r:r.map((m,h)=>{for(const[S,w]of d)if(h>=S&&h<S+w){let M=8;return h===S+w-1&&(M=36),{...m,width:M,themeOverride:{bgCell:i.bgCellMedium}}}return m}),[r,d,i.bgCellMedium]),p=A.useCallback((m,h)=>{l?.(m,h);const S=f[m]?.group??"";S!==""&&(h.preventDefault(),t(w=>w.includes(S)?w.filter(M=>M!==S):[...w,S]))},[f,l]),v=A.useCallback(m=>{if(m.current!==void 0){const h=m.current.cell[0],S=f[h];t(w=>w.includes(S?.group??"")?w.filter(M=>M!==S.group):w)}C!==void 0?C(m):a(m)},[f,C]),g=A.useCallback(m=>({...y?.(m),name:m,overrideTheme:n.includes(m??"")?{bgHeader:i.bgHeaderHasFocus}:void 0}),[n,y,i.bgHeaderHasFocus]);return{columns:f,onGroupHeaderClicked:p,onGridSelectionChange:v,getGroupDetails:g,gridSelection:k}}var I,L;function he(){if(L)return I;L=1;var e=ie(),n=le();function t(o,a){var r=-1,l=n(o)?Array(o.length):[];return e(o,function(C,y,c){l[++r]=a(C,y,c)}),l}return I=t,I}var T,K;function be(){if(K)return T;K=1;function e(n,t){var o=n.length;for(n.sort(t);o--;)n[o]=n[o].value;return n}return T=e,T}var _,P;function ve(){if(P)return _;P=1;var e=ue();function n(t,o){if(t!==o){var a=t!==void 0,r=t===null,l=t===t,C=e(t),y=o!==void 0,c=o===null,u=o===o,i=e(o);if(!c&&!i&&!C&&t>o||C&&y&&u&&!c&&!i||r&&y&&u||!a&&u||!l)return 1;if(!r&&!C&&!i&&t<o||i&&a&&l&&!r&&!C||c&&a&&l||!y&&l||!u)return-1}return 0}return _=n,_}var O,V;function ke(){if(V)return O;V=1;var e=ve();function n(t,o,a){for(var r=-1,l=t.criteria,C=o.criteria,y=l.length,c=a.length;++r<y;){var u=e(l[r],C[r]);if(u){if(r>=c)return u;var i=a[r];return u*(i=="desc"?-1:1)}}return t.index-o.index}return O=n,O}var q,W;function Se(){if(W)return q;W=1;var e=pe(),n=ce(),t=de(),o=he(),a=be(),r=me(),l=ke(),C=fe(),y=ne();function c(u,i,k){i.length?i=e(i,function(p){return y(p)?function(v){return n(v,p.length===1?p[0]:p)}:p}):i=[C];var d=-1;i=e(i,r(t));var f=o(u,function(p,v,g){var m=e(i,function(h){return h(p)});return{criteria:m,index:++d,value:p}});return a(f,function(p,v){return l(p,v,k)})}return q=c,q}var z,Z;function we(){if(Z)return z;Z=1;var e=Se(),n=ne();function t(o,a,r,l){return o==null?[]:(n(a)||(a=a==null?[]:[a]),r=l?void 0:r,n(r)||(r=r==null?[]:[r]),e(o,a,r))}return z=t,z}var Re=we();const j=ae(Re);function D(e){return e.id??`${e.group??""}/${e.title}`}function Y(e,n){return typeof n=="string"?D(e)===n:D(e)===D(n)}function X(e,n,t){const o=n.indexOf(e);if(o===-1)return Number.MAX_SAFE_INTEGER;const a=t.findIndex(r=>Y(e,r));if(a!==-1)return a;for(let r=o;r>=0;r--){const l=t.findIndex(C=>Y(n[r],C));if(l!==-1)return l+.5}return-1}function Me(e){const{columns:n,getCellContent:t,onColumnMoved:o}=e,[a,r]=s.useState(()=>n.map(D)),l=s.useMemo(()=>j(n,u=>X(u,n,a)),[a,n]),C=s.useRef(o);C.current=o;const y=s.useCallback((u,i)=>{r(k=>{const d=[...k],[f]=d.splice(u,1);return d.splice(i,0,f),d}),C.current?.(u,i)},[]);s.useEffect(()=>{r(u=>j(n,i=>X(i,n,u)).map(D))},[n]);const c=s.useCallback(u=>{const[i,k]=u,d=l[i],f=n.indexOf(d);return t([f,k])},[l,n,t]);return{columns:l,onColumnMoved:y,getCellContent:c}}function Ae(e){switch(e.kind){case b.Number:return e.data?.toString()??"";case b.Boolean:return e.data?.toString()??"";case b.Markdown:case b.RowID:case b.Text:case b.Uri:return e.data??"";case b.Bubble:case b.Image:return e.data.join("");case b.Drilldown:return e.data.map(n=>n.text).join("");case b.Protected:case b.Loading:return"";case b.Custom:return e.copyData}}function J(e){if(typeof e=="number")return e;if(e.length>0){const n=Number(e);isNaN(n)||(e=n)}return e}function Fe(e,n){return e=J(e),n=J(n),typeof e=="string"&&typeof n=="string"?e.localeCompare(n):typeof e=="number"&&typeof n=="number"?e===n?0:e>n?1:-1:e==n?0:e>n?1:-1}function xe(e,n){return e>n?1:e===n?0:-1}function Ee(e){const{sort:n,rows:t,getCellContent:o}=e,a=s.useMemo(()=>n===void 0?[]:Array.isArray(n)?n:[n],[n]),r=s.useMemo(()=>a.map(c=>{const u=e.columns.findIndex(i=>c.column===i||i.id!==void 0&&c.column.id===i.id);return u===-1?void 0:u}),[a,e.columns]),l=s.useMemo(()=>{const c=a.map((i,k)=>({sort:i,col:r[k]})).filter(i=>i.col!==void 0);if(c.length===0)return;const u=c.map(()=>new Array(t));for(let i=0;i<c.length;i++){const{col:k}=c[i],d=[k,0];for(let f=0;f<t;f++)d[1]=f,u[i][f]=Ae(o(d))}return ge(t).sort((i,k)=>{for(let d=0;d<c.length;d++){const{sort:f}=c[d],p=u[d][i],v=u[d][k];let g;if(f.mode==="raw"?g=xe(p,v):f.mode==="smart"?g=Fe(p,v):g=p.localeCompare(v),g!==0)return(f.direction??"asc")==="desc"&&(g=-g),g}return 0})},[o,t,a,r]),C=s.useCallback(c=>l===void 0?c:l[c],[l]),y=s.useCallback(([c,u])=>l===void 0?o([c,u]):(u=l[u],o([c,u])),[o,l]);return l===void 0?{getCellContent:e.getCellContent,getOriginalIndex:C}:{getOriginalIndex:C,getCellContent:y}}const He={undoHistory:[],redoHistory:[],canUndo:!1,canRedo:!1,isApplyingUndo:!1,isApplyingRedo:!1};function De(e,n){const t={...e};switch(n.type){case"undo":if(e.canUndo){t.undoHistory=[...e.undoHistory];const o=t.undoHistory.pop();return t.operation=o,t.canUndo=t.undoHistory.length>0,t.isApplyingUndo=!0,t}return e;case"redo":if(e.canRedo){t.redoHistory=[...e.redoHistory];const o=t.redoHistory.pop();return t.operation=o,t.canRedo=t.redoHistory.length>0,t.isApplyingRedo=!0,t}return e;case"operationApplied":return t.operation=void 0,t.isApplyingRedo=!1,t.isApplyingUndo=!1,t;case"edit":return!e.isApplyingRedo&&!e.isApplyingUndo&&(t.undoHistory=[...e.undoHistory,n.batch],t.redoHistory=[],t.canUndo=!0,t.canRedo=!1),e.isApplyingUndo&&(t.redoHistory=[...e.redoHistory,n.batch],t.canRedo=!0),e.isApplyingRedo&&(t.undoHistory=[...e.undoHistory,n.batch],t.canUndo=!0),t;default:throw new Error("Invalid action")}}function Be(e,n,t,o){const[a,r]=s.useReducer(De,He),l=s.useRef(null),C=s.useRef(null),y=s.useRef(!1),c=s.useRef(!1);s.useEffect(()=>{y.current=a.isApplyingUndo,c.current=a.isApplyingRedo},[a.isApplyingUndo,a.isApplyingRedo]);const[u,i]=s.useState(null),k=s.useRef(null),d=s.useCallback(g=>{i(g),k.current=g},[o]),f=s.useCallback((g,m)=>{if(!(y.current||c.current)&&k.current){clearTimeout(C.current);const S=n(g);l.current===null&&(l.current={edits:[],selection:k.current}),l.current.edits.push({cell:g,newValue:S}),C.current=setTimeout(()=>{l.current&&(r({type:"edit",batch:l.current}),l.current=null)},0)}t(g,m)},[t,n]),p=s.useCallback(()=>{r({type:"undo"})},[r]),v=s.useCallback(()=>{r({type:"redo"})},[r]);return s.useEffect(()=>{if(a.operation&&k.current&&e.current){const g=[],m={edits:[],selection:k.current};for(const h of a.operation.edits){const S=n(h.cell);m.edits.push({cell:h.cell,newValue:S}),t(h.cell,h.newValue),g.push({cell:h.cell})}i(a.operation.selection),k.current=a.operation.selection,e.current.updateCells(g),r({type:"edit",batch:m}),r({type:"operationApplied"})}},[a.operation,e,t,i,n]),s.useEffect(()=>{const g=m=>{m.key==="z"&&(m.metaKey||m.ctrlKey)&&(m.shiftKey?v():p()),m.key==="y"&&(m.metaKey||m.ctrlKey)&&v()};return window.addEventListener("keydown",g),()=>{window.removeEventListener("keydown",g)}},[p,v]),s.useMemo(()=>({undo:p,redo:v,canUndo:a.canUndo,canRedo:a.canRedo,onCellEdited:f,onGridSelectionChange:d,gridSelection:u}),[p,v,f,a.canUndo,a.canRedo,d,u])}R.seed(1337);function Ue(e){return!!e}function Ge(e,n){const t=e.data;if(typeof t==typeof n.data)return{...n,data:t};switch(n.kind){case b.Uri:return B(t)?{...n,data:t[0]}:{...n,data:t?.toString()??""};case b.Boolean:return B(t)?{...n,data:t[0]!==void 0}:e.kind===b.Boolean?{...n,data:e.data}:{...n,data:!!Ue(t)};case b.Image:return B(t)?{...n,data:[t[0]]}:{...n,data:[t?.toString()??""]};case b.Number:return{...n,data:0};case b.Text:case b.Markdown:return B(t)?{...n,data:t[0].toString()??""}:{...n,data:e.data?.toString()??""};case b.Custom:return n}ze()}function Ie(e){const{getContent:n,...t}=e;return t}function Q(e,n){const t=[{title:"First name",id:"First name",group:n?"Name":void 0,icon:F.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.firstName();return{kind:b.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Last name",id:"Last name",group:n?"Name":void 0,icon:F.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.lastName();return{kind:b.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Avatar",id:"Avatar",group:n?"Info":void 0,icon:F.HeaderImage,hasMenu:!1,getContent:()=>{const r=Math.round(Math.random()*100);return{kind:b.Image,data:[`https://picsum.photos/id/${r}/900/900`],displayData:[`https://picsum.photos/id/${r}/40/40`],allowOverlay:!0,readonly:!0}}},{title:"Email",id:"Email",group:n?"Info":void 0,icon:F.HeaderString,hasMenu:!1,getContent:()=>{const r=R.internet.email();return{kind:b.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Title",id:"Title",group:n?"Info":void 0,icon:F.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.jobTitle();return{kind:b.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"More Info",id:"More Info",group:n?"Info":void 0,icon:F.HeaderUri,hasMenu:!1,getContent:()=>{const r=R.internet.url();return{kind:b.Uri,displayData:r,data:r,allowOverlay:!0,readonly:!0}}}];if(e<t.length)return t.slice(0,e);const o=e-t.length,a=[...new Array(o)].map((r,l)=>Te(l+t.length,n));return[...t,...a]}function Te(e,n){return{title:`Column ${e}`,id:`Column ${e}`,group:n?`Group ${Math.round(e/3)}`:void 0,icon:F.HeaderString,hasMenu:!1,getContent:()=>{const t=R.lorem.word();return{kind:b.Text,data:t,displayData:t,allowOverlay:!0,readonly:!0}}}}class _e{cachedContent=new Map;get(n,t){const o=this.cachedContent.get(n);if(o!==void 0)return o[t]}set(n,t,o){let a=this.cachedContent.get(n);a===void 0&&this.cachedContent.set(n,a=[]),a[t]=o}}function Oe(e,n=!0,t=!1){const o=s.useRef(new _e),[a,r]=s.useState(()=>Q(e,t));s.useEffect(()=>{r(Q(e,t))},[t,e]);const l=s.useCallback((d,f)=>{r(p=>{const v=p.findIndex(m=>m.title===d.title),g=[...p];return g.splice(v,1,{...p[v],width:f}),g})},[]),C=s.useMemo(()=>a.map(Ie),[a]),y=s.useRef(a);y.current=a;const c=s.useCallback(([d,f])=>{let p=o.current.get(d,f);return p===void 0&&(p=y.current[d].getContent(),!n&&se(p)&&(p={...p,readonly:n}),o.current.set(d,f,p)),p},[n]),u=s.useCallback(d=>{const f=[];for(let p=d.y;p<d.y+d.height;p++){const v=[];for(let g=d.x;g<d.x+d.width;g++)v.push(c([g,p]));f.push(v)}return f},[c]),i=s.useCallback(([d,f],p)=>{o.current.set(d,f,p)},[]),k=s.useCallback(([d,f],p)=>{let v=o.current.get(d,f);if(v===void 0&&(v=a[d].getContent()),$(p)&&$(v)){const g=Ge(p,v);o.current.set(d,f,{...g,displayData:typeof g.data=="string"?g.data:g.displayData,lastUpdated:performance.now()})}},[a]);return{cols:C,getCellContent:c,onColumnResize:l,setCellValue:k,getCellsForSelection:u,setCellValueRaw:i}}function qe(e="This should not happen"){throw new Error(e)}function ze(e){return qe("Hell froze over")}R.seed(1337);const Ne=U("div")({name:"SimpleWrapper",class:"ss4kmn3",propsAsIs:!1}),$e=e=>s.createElement(Ne,null,s.createElement("div",{className:"content"},e.children)),en={title:"Extra Packages/Source",decorators:[e=>s.createElement($e,null,s.createElement(e,null))]},Le=U("div")({name:"BeautifulStyle",class:"bkh67gx",propsAsIs:!1}),te=e=>{const{title:n,children:t,description:o}=e,{ref:a,width:r,height:l}=Ce();return s.createElement(Le,null,s.createElement("h1",null,n),o,s.createElement("div",{className:"sizer"},s.createElement("div",{className:"sizer-clip",ref:a},s.createElement("div",{style:{position:"relative",width:r??100,height:l??100}},t))))},re=U("p")({name:"Description",class:"d1deot3s",propsAsIs:!1}),x=U("p")({name:"MoreInfo",class:"m1ml0sw1",propsAsIs:!1}),oe={smoothScrollX:!0,smoothScrollY:!0,isDraggable:!1,rowMarkers:"none",width:"100%"},Ke={accentColor:"#4F5DFF",accentFg:"#FFFFFF",accentLight:"rgba(62, 116, 253, 0.1)",textDark:"#313139",textMedium:"#737383",textLight:"#B2B2C0",textBubble:"#313139",bgIconHeader:"#737383",fgIconHeader:"#FFFFFF",textHeader:"#313139",textGroupHeader:"#313139BB",textHeaderSelected:"#FFFFFF",bgCell:"#FFFFFF",bgCellMedium:"#FAFAFB",bgHeader:"#F7F7F8",bgHeaderHasFocus:"#E9E9EB",bgHeaderHovered:"#EFEFF1",bgBubble:"#EDEDF3",bgBubbleSelected:"#FFFFFF",bubbleHeight:20,bubblePadding:6,bubbleMargin:4,headerIconSize:20,markerFontStyle:"13px",bgSearchResult:"#fff9e3",borderColor:"rgba(115, 116, 131, 0.16)",horizontalBorderColor:"rgba(115, 116, 131, 0.16)",drilldownBorder:"rgba(0, 0, 0, 0)",linkColor:"#4F5DFF",cellHorizontalPadding:8,cellVerticalPadding:3,headerFontStyle:"600 13px",baseFontStyle:"13px",editorFontSize:"13px",lineHeight:1.4,fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif"},Pe=[{title:"A",width:200,group:"Group 1"},{title:"B",width:200,group:"Group 1"},{title:"C",width:200,group:"Group 2"},{title:"D",width:200,group:"Group 2"},{title:"E",width:200,group:"Group 2"}],E=()=>{const e=s.useRef({}),n=1e5,t=Me({columns:Pe,getCellContent:s.useCallback(([y,c])=>{if(y===0)return{kind:b.Text,allowOverlay:!0,data:`${c}`,displayData:`${c}`};const u=`${y},${c}`;e.current[u]===void 0&&(e.current[u]=R.name.firstName()+" "+R.name.lastName());const i=e.current[u];return{kind:b.Text,allowOverlay:!0,data:i,displayData:i}},[])}),[o,a]=s.useState(),r=Ee({columns:t.columns,getCellContent:t.getCellContent,rows:n,sort:o===void 0?void 0:{column:t.columns[o],direction:"desc",mode:"smart"}}),l=ye({columns:t.columns,theme:Ke,freezeColumns:0}),C=s.useCallback(y=>{a(y)},[]);return s.createElement(te,{title:"Custom source extensions",description:s.createElement(re,null,"Fixme.")},s.createElement(ee,{...oe,...t,...r,...l,rows:n,onColumnMoved:t.onColumnMoved,onHeaderClicked:C}))};E.parameters={options:{showPanel:!1}};const H=()=>{const{cols:e,getCellContent:n,setCellValue:t}=Oe(6),o=s.useRef(null),{gridSelection:a,onCellEdited:r,onGridSelectionChange:l,undo:C,canRedo:y,canUndo:c,redo:u}=Be(o,n,t);return s.createElement(te,{title:"Undo / Redo Support",description:s.createElement(re,null,"A simple undo/redo implementation",s.createElement(x,null,"Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:",s.createElement("button",{onClick:C,disabled:!c,style:{opacity:c?1:.4}},"Undo"),s.createElement("button",{onClick:u,disabled:!y,style:{opacity:y?1:.4}},"Redo")),s.createElement(x,null,"It works by taking a snapshot of the content of a cell before it is edited and replaying any edits back."))},s.createElement(ee,{...oe,ref:o,onCellEdited:r,getCellContent:n,gridSelection:a??void 0,onGridSelectionChange:l,columns:e,rows:1e3}))};H.parameters={options:{showPanel:!1}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`styled.p\`
    font-size: 14px;
    flex-shrink: 0;
    margin: 0 0 20px 0;

    button {
        background-color: #f4f4f4;
        color: #2b2b2b;
        padding: 2px 6px;
        font-family: monospace;
        font-size: 14px;
        border-radius: 4px;
        box-shadow: 0px 1px 2px #00000040;
        margin: 0 0.1em;
        border: none;
        cursor: pointer;
    }
\``,...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const cache = React.useRef<Record<string, string>>({});
  const rows = 100_000;
  const moveArgs = useMoveableColumns({
    columns: cols,
    getCellContent: React.useCallback(([col, row]) => {
      if (col === 0) {
        return {
          kind: GridCellKind.Text,
          allowOverlay: true,
          data: \`\${row}\`,
          displayData: \`\${row}\`
        };
      }
      const key = \`\${col},\${row}\`;
      if (cache.current[key] === undefined) {
        cache.current[key] = faker.name.firstName() + " " + faker.name.lastName();
      }
      const d = cache.current[key];
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        data: d,
        displayData: d
      };
    }, [])
  });
  const [sort, setSort] = React.useState<number>();
  const sortArgs = useColumnSort({
    columns: moveArgs.columns,
    getCellContent: moveArgs.getCellContent,
    rows,
    sort: sort === undefined ? undefined : {
      column: moveArgs.columns[sort],
      direction: "desc",
      mode: "smart"
    }
  });
  const collapseArgs = useCollapsingGroups({
    columns: moveArgs.columns,
    theme: testTheme,
    freezeColumns: 0
  });
  const onHeaderClick = React.useCallback((index: number) => {
    setSort(index);
  }, []);
  return <BeautifulWrapper title="Custom source extensions" description={<Description>Fixme.</Description>}>
            <DataEditor {...defaultProps} {...moveArgs} {...sortArgs} {...collapseArgs} rows={rows} onColumnMoved={moveArgs.onColumnMoved} onHeaderClicked={onHeaderClick} />
        </BeautifulWrapper>;
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const {
    cols: columns,
    getCellContent,
    setCellValue
  } = useMockDataGenerator(6);
  const gridRef = React.useRef<DataEditorRef>(null);
  const {
    gridSelection,
    onCellEdited,
    onGridSelectionChange,
    undo,
    canRedo,
    canUndo,
    redo
  } = useUndoRedo(gridRef, getCellContent, setCellValue);
  return <BeautifulWrapper title="Undo / Redo Support" description={<Description>
                    A simple undo/redo implementation
                    <MoreInfo>
                        Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:
                        <button onClick={undo} disabled={!canUndo} style={{
        opacity: canUndo ? 1 : 0.4
      }}>
                            Undo
                        </button>
                        <button onClick={redo} disabled={!canRedo} style={{
        opacity: canRedo ? 1 : 0.4
      }}>
                            Redo
                        </button>
                    </MoreInfo>
                    <MoreInfo>
                        It works by taking a snapshot of the content of a cell before it is edited and replaying any
                        edits back.
                    </MoreInfo>
                </Description>}>
            <DataEditor {...defaultProps} ref={gridRef} onCellEdited={onCellEdited} getCellContent={getCellContent} gridSelection={gridSelection ?? undefined} onGridSelectionChange={onGridSelectionChange} columns={columns} rows={1000} />
        </BeautifulWrapper>;
}`,...H.parameters?.docs?.source}}};const nn=["MoreInfo","UseDataSource","UndoRedo"];export{x as MoreInfo,H as UndoRedo,E as UseDataSource,nn as __namedExportsOrder,en as default};

import{s as U}from"./marked.esm-JH4R6def.js";import{R as A,g as ae,r as s}from"./iframe-B6BB7SE7.js";import{y as M,i as B}from"./isArray-Qc_lD31Y.js";import{G as h,f as se,h as $,j as x,D as ee}from"./data-editor-all-C3-7q0Cr.js";import{q as ie,s as le,u as ce,w as ue,x as de,y as pe,a as ne,z as fe,A as me,r as ge}from"./throttle-ClvAx-m_.js";import{u as Ce}from"./useResizeDetector-CoEKsWyI.js";import"./preload-helper-PPVm8Dsz.js";import"./flatten-xp5kEhqg.js";function ye(e){const[n,t]=A.useState([]),[o,a]=A.useState(void 0),{columns:r,onGroupHeaderClicked:i,onGridSelectionChange:C,getGroupDetails:y,gridSelection:d,freezeColumns:l=0,theme:c}=e,m=d??o,f=A.useMemo(()=>{const b=[];let S=[-1,-1],w;for(let k=l;k<r.length;k++){const G=r[k].group??"",N=n.includes(G);w!==G&&S[0]!==-1&&(b.push(S),S=[-1,-1]),N&&S[0]!==-1?S[1]+=1:N?S=[k,1]:S[0]!==-1&&(b.push(S),S=[-1,-1]),w=G}return S[0]!==-1&&b.push(S),b},[n,r,l]),u=A.useMemo(()=>f.length===0?r:r.map((b,S)=>{for(const[w,k]of f)if(S>=w&&S<w+k){let R=8;return S===w+k-1&&(R=36),{...b,width:R,themeOverride:{bgCell:c.bgCellMedium}}}return b}),[r,f,c.bgCellMedium]),p=A.useCallback((b,S)=>{i?.(b,S);const w=u[b]?.group??"";w!==""&&(S.preventDefault(),t(k=>k.includes(w)?k.filter(R=>R!==w):[...k,w]))},[u,i]),g=A.useCallback(b=>{if(b.current!==void 0){const S=b.current.cell[0],w=u[S];t(k=>k.includes(w?.group??"")?k.filter(R=>R!==w.group):k)}C!==void 0?C(b):a(b)},[u,C]),v=A.useCallback(b=>({...y?.(b),name:b,overrideTheme:n.includes(b??"")?{bgHeader:c.bgHeaderHasFocus}:void 0}),[n,y,c.bgHeaderHasFocus]);return{columns:u,onGroupHeaderClicked:p,onGridSelectionChange:g,getGroupDetails:v,gridSelection:m}}var I,L;function he(){if(L)return I;L=1;var e=ie(),n=le();function t(o,a){var r=-1,i=n(o)?Array(o.length):[];return e(o,function(C,y,d){i[++r]=a(C,y,d)}),i}return I=t,I}var T,K;function be(){if(K)return T;K=1;function e(n,t){var o=n.length;for(n.sort(t);o--;)n[o]=n[o].value;return n}return T=e,T}var _,P;function Se(){if(P)return _;P=1;var e=ce();function n(t,o){if(t!==o){var a=t!==void 0,r=t===null,i=t===t,C=e(t),y=o!==void 0,d=o===null,l=o===o,c=e(o);if(!d&&!c&&!C&&t>o||C&&y&&l&&!d&&!c||r&&y&&l||!a&&l||!i)return 1;if(!r&&!C&&!c&&t<o||c&&a&&i&&!r&&!C||d&&a&&i||!y&&i||!l)return-1}return 0}return _=n,_}var O,V;function ve(){if(V)return O;V=1;var e=Se();function n(t,o,a){for(var r=-1,i=t.criteria,C=o.criteria,y=i.length,d=a.length;++r<y;){var l=e(i[r],C[r]);if(l){if(r>=d)return l;var c=a[r];return l*(c=="desc"?-1:1)}}return t.index-o.index}return O=n,O}var q,W;function ke(){if(W)return q;W=1;var e=pe(),n=ue(),t=de(),o=he(),a=be(),r=me(),i=ve(),C=fe(),y=ne();function d(l,c,m){c.length?c=e(c,function(p){return y(p)?function(g){return n(g,p.length===1?p[0]:p)}:p}):c=[C];var f=-1;c=e(c,r(t));var u=o(l,function(p,g,v){var b=e(c,function(S){return S(p)});return{criteria:b,index:++f,value:p}});return a(u,function(p,g){return i(p,g,m)})}return q=d,q}var z,Z;function we(){if(Z)return z;Z=1;var e=ke(),n=ne();function t(o,a,r,i){return o==null?[]:(n(a)||(a=a==null?[]:[a]),r=i?void 0:r,n(r)||(r=r==null?[]:[r]),e(o,a,r))}return z=t,z}var Me=we();const j=ae(Me);function D(e){return e.id??`${e.group??""}/${e.title}`}function Y(e,n){return typeof n=="string"?D(e)===n:D(e)===D(n)}function X(e,n,t){const o=n.indexOf(e);if(o===-1)return Number.MAX_SAFE_INTEGER;const a=t.findIndex(r=>Y(e,r));if(a!==-1)return a;for(let r=o;r>=0;r--){const i=t.findIndex(C=>Y(n[r],C));if(i!==-1)return i+.5}return-1}function Re(e){const{columns:n,getCellContent:t,onColumnMoved:o}=e,[a,r]=s.useState(()=>n.map(D)),i=s.useMemo(()=>j(n,l=>X(l,n,a)),[a,n]),C=s.useRef(o);s.useInsertionEffect(()=>{C.current=o},[o]);const y=s.useCallback((l,c)=>{r(m=>{const f=[...m],[u]=f.splice(l,1);return f.splice(c,0,u),f}),C.current?.(l,c)},[]);s.useEffect(()=>{r(l=>j(n,c=>X(c,n,l)).map(D))},[n]);const d=s.useCallback(l=>{const[c,m]=l,f=i[c],u=n.indexOf(f);return t([u,m])},[i,n,t]);return{columns:i,onColumnMoved:y,getCellContent:d}}function Ae(e){switch(e.kind){case h.Number:return e.data?.toString()??"";case h.Boolean:return e.data?.toString()??"";case h.Markdown:case h.RowID:case h.Text:case h.Uri:return e.data??"";case h.Bubble:case h.Image:return e.data.join("");case h.Drilldown:return e.data.map(n=>n.text).join("");case h.Protected:case h.Loading:return"";case h.Custom:return e.copyData}}function J(e){if(typeof e=="number")return e;if(e.length>0){const n=Number(e);isNaN(n)||(e=n)}return e}function xe(e,n){return e=J(e),n=J(n),typeof e=="string"&&typeof n=="string"?e.localeCompare(n):typeof e=="number"&&typeof n=="number"?e===n?0:e>n?1:-1:e==n?0:e>n?1:-1}function Fe(e,n){return e>n?1:e===n?0:-1}function Ee(e){const{sort:n,rows:t,getCellContent:o}=e,a=s.useMemo(()=>n===void 0?[]:Array.isArray(n)?n:[n],[n]),r=s.useMemo(()=>a.map(d=>{const l=e.columns.findIndex(c=>d.column===c||c.id!==void 0&&d.column.id===c.id);return l===-1?void 0:l}),[a,e.columns]),i=s.useMemo(()=>{const d=a.map((c,m)=>({sort:c,col:r[m]})).filter(c=>c.col!==void 0);if(d.length===0)return;const l=d.map(()=>new Array(t));for(let c=0;c<d.length;c++){const{col:m}=d[c],f=[m,0];for(let u=0;u<t;u++)f[1]=u,l[c][u]=Ae(o(f))}return ge(t).sort((c,m)=>{for(let f=0;f<d.length;f++){const{sort:u}=d[f],p=l[f][c],g=l[f][m];let v;if(u.mode==="raw"?v=Fe(p,g):u.mode==="smart"?v=xe(p,g):v=p.localeCompare(g),v!==0)return(u.direction??"asc")==="desc"&&(v=-v),v}return 0})},[o,t,a,r]),C=s.useCallback(d=>i===void 0?d:i[d],[i]),y=s.useCallback(([d,l])=>i===void 0?o([d,l]):(l=i[l],o([d,l])),[o,i]);return i===void 0?{getCellContent:e.getCellContent,getOriginalIndex:C}:{getOriginalIndex:C,getCellContent:y}}const He={undoHistory:[],redoHistory:[],canUndo:!1,canRedo:!1,isApplyingUndo:!1,isApplyingRedo:!1,gridSelection:null};function De(e,n){const t={...e};switch(n.type){case"undo":if(e.canUndo){t.undoHistory=[...e.undoHistory];const o=t.undoHistory.pop();return t.operation=o,t.canUndo=t.undoHistory.length>0,t.isApplyingUndo=!0,t}return e;case"redo":if(e.canRedo){t.redoHistory=[...e.redoHistory];const o=t.redoHistory.pop();return t.operation=o,t.canRedo=t.redoHistory.length>0,t.isApplyingRedo=!0,t}return e;case"selectionChanged":return e.gridSelection===n.selection?e:{...e,gridSelection:n.selection};case"operationApplied":return e.operation!==void 0&&(t.gridSelection=e.operation.selection),t.operation=void 0,t.isApplyingRedo=!1,t.isApplyingUndo=!1,t;case"edit":return!e.isApplyingRedo&&!e.isApplyingUndo&&(t.undoHistory=[...e.undoHistory,n.batch],t.redoHistory=[],t.canUndo=!0,t.canRedo=!1),e.isApplyingUndo&&(t.redoHistory=[...e.redoHistory,n.batch],t.canRedo=!0),e.isApplyingRedo&&(t.undoHistory=[...e.undoHistory,n.batch],t.canUndo=!0),t;default:throw new Error("Invalid action")}}function Be(e,n,t,o){const[a,r]=s.useReducer(De,He),i=s.useRef(null),C=s.useRef(null),y=s.useRef(!1),d=s.useRef(!1);s.useEffect(()=>{y.current=a.isApplyingUndo,d.current=a.isApplyingRedo},[a.isApplyingUndo,a.isApplyingRedo]);const l=s.useRef(null),c=s.useCallback(p=>{r({type:"selectionChanged",selection:p}),l.current=p},[o]),m=s.useCallback((p,g)=>{if(!(y.current||d.current)&&l.current){clearTimeout(C.current);const b=n(p);i.current===null&&(i.current={edits:[],selection:l.current}),i.current.edits.push({cell:p,newValue:b}),C.current=setTimeout(()=>{i.current&&(r({type:"edit",batch:i.current}),i.current=null)},0)}t(p,g)},[t,n]),f=s.useCallback(()=>{r({type:"undo"})},[r]),u=s.useCallback(()=>{r({type:"redo"})},[r]);return s.useEffect(()=>{if(a.operation&&l.current&&e.current){const p=[],g={edits:[],selection:l.current};for(const v of a.operation.edits){const b=n(v.cell);g.edits.push({cell:v.cell,newValue:b}),t(v.cell,v.newValue),p.push({cell:v.cell})}l.current=a.operation.selection,e.current.updateCells(p),r({type:"edit",batch:g}),r({type:"operationApplied"})}},[a.operation,e,t,n]),s.useEffect(()=>{const p=g=>{g.key==="z"&&(g.metaKey||g.ctrlKey)&&(g.shiftKey?u():f()),g.key==="y"&&(g.metaKey||g.ctrlKey)&&u()};return window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}},[f,u]),s.useMemo(()=>({undo:f,redo:u,canUndo:a.canUndo,canRedo:a.canRedo,onCellEdited:m,onGridSelectionChange:c,gridSelection:a.gridSelection}),[f,u,m,a.canUndo,a.canRedo,c,a.gridSelection])}M.seed(1337);function Ue(e){return!!e}function Ge(e,n){const t=e.data;if(typeof t==typeof n.data)return{...n,data:t};switch(n.kind){case h.Uri:return B(t)?{...n,data:t[0]}:{...n,data:t?.toString()??""};case h.Boolean:return B(t)?{...n,data:t[0]!==void 0}:e.kind===h.Boolean?{...n,data:e.data}:{...n,data:!!Ue(t)};case h.Image:return B(t)?{...n,data:[t[0]]}:{...n,data:[t?.toString()??""]};case h.Number:return{...n,data:0};case h.Text:case h.Markdown:return B(t)?{...n,data:t[0].toString()??""}:{...n,data:e.data?.toString()??""};case h.Custom:return n}ze()}function Ie(e){const{getContent:n,...t}=e;return t}function Q(e,n){const t=[{title:"First name",id:"First name",group:n?"Name":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=M.name.firstName();return{kind:h.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Last name",id:"Last name",group:n?"Name":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=M.name.lastName();return{kind:h.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Avatar",id:"Avatar",group:n?"Info":void 0,icon:x.HeaderImage,hasMenu:!1,getContent:()=>{const r=Math.round(Math.random()*100);return{kind:h.Image,data:[`https://picsum.photos/id/${r}/900/900`],displayData:[`https://picsum.photos/id/${r}/40/40`],allowOverlay:!0,readonly:!0}}},{title:"Email",id:"Email",group:n?"Info":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=M.internet.email();return{kind:h.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Title",id:"Title",group:n?"Info":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=M.name.jobTitle();return{kind:h.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"More Info",id:"More Info",group:n?"Info":void 0,icon:x.HeaderUri,hasMenu:!1,getContent:()=>{const r=M.internet.url();return{kind:h.Uri,displayData:r,data:r,allowOverlay:!0,readonly:!0}}}];if(e<t.length)return t.slice(0,e);const o=e-t.length,a=[...new Array(o)].map((r,i)=>Te(i+t.length,n));return[...t,...a]}function Te(e,n){return{title:`Column ${e}`,id:`Column ${e}`,group:n?`Group ${Math.round(e/3)}`:void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const t=M.lorem.word();return{kind:h.Text,data:t,displayData:t,allowOverlay:!0,readonly:!0}}}}class _e{cachedContent=new Map;get(n,t){const o=this.cachedContent.get(n);if(o!==void 0)return o[t]}set(n,t,o){let a=this.cachedContent.get(n);a===void 0&&this.cachedContent.set(n,a=[]),a[t]=o}}function Oe(e,n=!0,t=!1){const o=s.useRef(new _e),[a,r]=s.useState(()=>Q(e,t));s.useEffect(()=>{r(Q(e,t))},[t,e]);const i=s.useCallback((m,f)=>{r(u=>{const p=u.findIndex(v=>v.title===m.title),g=[...u];return g.splice(p,1,{...u[p],width:f}),g})},[]),C=s.useMemo(()=>a.map(Ie),[a]),y=s.useCallback(([m,f])=>{let u=o.current.get(m,f);return u===void 0&&(u=a[m].getContent(),!n&&se(u)&&(u={...u,readonly:n}),o.current.set(m,f,u)),u},[a,n]),d=s.useCallback(m=>{const f=[];for(let u=m.y;u<m.y+m.height;u++){const p=[];for(let g=m.x;g<m.x+m.width;g++)p.push(y([g,u]));f.push(p)}return f},[y]),l=s.useCallback(([m,f],u)=>{o.current.set(m,f,u)},[]),c=s.useCallback(([m,f],u)=>{let p=o.current.get(m,f);if(p===void 0&&(p=a[m].getContent()),$(u)&&$(p)){const g=Ge(u,p);o.current.set(m,f,{...g,displayData:typeof g.data=="string"?g.data:g.displayData,lastUpdated:performance.now()})}},[a]);return{cols:C,getCellContent:y,onColumnResize:i,setCellValue:c,getCellsForSelection:d,setCellValueRaw:l}}function qe(e="This should not happen"){throw new Error(e)}function ze(e){return qe("Hell froze over")}M.seed(1337);const Ne=U("div")({name:"SimpleWrapper",class:"ss4kmn3",propsAsIs:!1}),$e=e=>s.createElement(Ne,null,s.createElement("div",{className:"content"},e.children)),en={title:"Extra Packages/Source",decorators:[e=>s.createElement($e,null,s.createElement(e,null))]},Le=U("div")({name:"BeautifulStyle",class:"bkh67gx",propsAsIs:!1}),te=e=>{const{title:n,children:t,description:o}=e,{ref:a,width:r,height:i}=Ce();return s.createElement(Le,null,s.createElement("h1",null,n),o,s.createElement("div",{className:"sizer"},s.createElement("div",{className:"sizer-clip",ref:a},s.createElement("div",{style:{position:"relative",width:r??100,height:i??100}},t))))},re=U("p")({name:"Description",class:"d1deot3s",propsAsIs:!1}),F=U("p")({name:"MoreInfo",class:"m1ml0sw1",propsAsIs:!1}),oe={smoothScrollX:!0,smoothScrollY:!0,isDraggable:!1,rowMarkers:"none",width:"100%"},Ke={accentColor:"#4F5DFF",accentFg:"#FFFFFF",accentLight:"rgba(62, 116, 253, 0.1)",textDark:"#313139",textMedium:"#737383",textLight:"#B2B2C0",textBubble:"#313139",bgIconHeader:"#737383",fgIconHeader:"#FFFFFF",textHeader:"#313139",textGroupHeader:"#313139BB",textHeaderSelected:"#FFFFFF",bgCell:"#FFFFFF",bgCellMedium:"#FAFAFB",bgHeader:"#F7F7F8",bgHeaderHasFocus:"#E9E9EB",bgHeaderHovered:"#EFEFF1",bgBubble:"#EDEDF3",bgBubbleSelected:"#FFFFFF",bubbleHeight:20,bubblePadding:6,bubbleMargin:4,headerIconSize:20,markerFontStyle:"13px",bgSearchResult:"#fff9e3",borderColor:"rgba(115, 116, 131, 0.16)",horizontalBorderColor:"rgba(115, 116, 131, 0.16)",drilldownBorder:"rgba(0, 0, 0, 0)",linkColor:"#4F5DFF",cellHorizontalPadding:8,cellVerticalPadding:3,checkboxMaxSize:18,headerFontStyle:"600 13px",baseFontStyle:"13px",editorFontSize:"13px",lineHeight:1.4,fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif"},Pe=[{title:"A",width:200,group:"Group 1"},{title:"B",width:200,group:"Group 1"},{title:"C",width:200,group:"Group 2"},{title:"D",width:200,group:"Group 2"},{title:"E",width:200,group:"Group 2"}],E=()=>{const e=s.useRef({}),n=1e5,t=Re({columns:Pe,getCellContent:s.useCallback(([y,d])=>{if(y===0)return{kind:h.Text,allowOverlay:!0,data:`${d}`,displayData:`${d}`};const l=`${y},${d}`;e.current[l]===void 0&&(e.current[l]=M.name.firstName()+" "+M.name.lastName());const c=e.current[l];return{kind:h.Text,allowOverlay:!0,data:c,displayData:c}},[])}),[o,a]=s.useState(),r=Ee({columns:t.columns,getCellContent:t.getCellContent,rows:n,sort:o===void 0?void 0:{column:t.columns[o],direction:"desc",mode:"smart"}}),i=ye({columns:t.columns,theme:Ke,freezeColumns:0}),C=s.useCallback(y=>{a(y)},[]);return s.createElement(te,{title:"Custom source extensions",description:s.createElement(re,null,"Fixme.")},s.createElement(ee,{...oe,...t,...r,...i,rows:n,onColumnMoved:t.onColumnMoved,onHeaderClicked:C}))};E.parameters={options:{showPanel:!1}};const H=()=>{const{cols:e,getCellContent:n,setCellValue:t}=Oe(6),o=s.useRef(null),{gridSelection:a,onCellEdited:r,onGridSelectionChange:i,undo:C,canRedo:y,canUndo:d,redo:l}=Be(o,n,t);return s.createElement(te,{title:"Undo / Redo Support",description:s.createElement(re,null,"A simple undo/redo implementation",s.createElement(F,null,"Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:",s.createElement("button",{onClick:C,disabled:!d,style:{opacity:d?1:.4}},"Undo"),s.createElement("button",{onClick:l,disabled:!y,style:{opacity:y?1:.4}},"Redo")),s.createElement(F,null,"It works by taking a snapshot of the content of a cell before it is edited and replaying any edits back."))},s.createElement(ee,{...oe,ref:o,onCellEdited:r,getCellContent:n,gridSelection:a??void 0,onGridSelectionChange:i,columns:e,rows:1e3}))};H.parameters={options:{showPanel:!1}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`styled.p\`
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
\``,...F.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}};const nn=["MoreInfo","UseDataSource","UndoRedo"];export{F as MoreInfo,H as UndoRedo,E as UseDataSource,nn as __namedExportsOrder,en as default};

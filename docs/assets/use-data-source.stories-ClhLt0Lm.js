import{c as P,i as G}from"./marked.esm-D9UvuHxz.js";import{r as s,R as M,g as le}from"./iframe-DvUF06nB.js";import{y as R,i as U}from"./isArray-D4lTv9al.js";import{G as v,f as ce,h as K,j as x,D as te}from"./data-editor-all-DUCVtwTd.js";import{q as ue,s as de,u as pe,w as fe,x as me,y as ge,a as re,z as ye,A as Ce,r as he}from"./throttle-Bs_Dyz9i.js";import{u as be}from"./useResizeDetector-DbHCegZU.js";import"./preload-helper-PPVm8Dsz.js";import"./flatten-CcDO8UxA.js";var ve=e=>e.toUpperCase()===e,ke=e=>n=>e.indexOf(n)===-1,oe=(e,n)=>{const t={};return Object.keys(e).filter(ke(n)).forEach(o=>{t[o]=e[o]}),t};function Se(e,n,t){const o=oe(n,t);if(!e){const a=typeof G=="function"?{default:G}:G;Object.keys(o).forEach(r=>{a.default(r)||delete o[r]})}return o}var we=(e,n)=>{};function Re(e){let n="";return t=>{const o=(r,c)=>{const{as:g=e,class:C=n}=r,d=t.propsAsIs===void 0?!(typeof g=="string"&&g.indexOf("-")===-1&&!ve(g[0])):t.propsAsIs,i=Se(d,r,["as","class"]);i.ref=c,i.className=t.atomic?P(t.class,i.className||C):P(i.className||C,t.class);const{vars:l}=t;if(l){const k={};for(const u in l){const b=l[u],m=b[0],y=b[1]||"",h=typeof m=="function"?m(r):m;we(h,t.name),k[`--${u}`]=`${h}${y}`}const p=i.style||{},f=Object.keys(p);f.length>0&&f.forEach(u=>{k[u]=p[u]}),i.style=k}return e.__wyw_meta&&e!==g?(i.as=g,s.createElement(e,i)):s.createElement(g,i)},a=s.forwardRef?s.forwardRef(o):(r=>{const c=oe(r,["innerRef"]);return o(c,r.innerRef)});return a.displayName=t.name,a.__wyw_meta={className:t.class||n,extends:e},a}}var B=Re;function Ae(e){const[n,t]=M.useState([]),[o,a]=M.useState(void 0),{columns:r,onGroupHeaderClicked:c,onGridSelectionChange:g,getGroupDetails:C,gridSelection:d,freezeColumns:i=0,theme:l}=e,k=d??o,p=M.useMemo(()=>{const y=[];let h=[-1,-1],S;for(let w=i;w<r.length;w++){const I=r[w].group??"",z=n.includes(I);S!==I&&h[0]!==-1&&(y.push(h),h=[-1,-1]),z&&h[0]!==-1?h[1]+=1:z?h=[w,1]:h[0]!==-1&&(y.push(h),h=[-1,-1]),S=I}return h[0]!==-1&&y.push(h),y},[n,r,i]),f=M.useMemo(()=>p.length===0?r:r.map((y,h)=>{for(const[S,w]of p)if(h>=S&&h<S+w){let A=8;return h===S+w-1&&(A=36),{...y,width:A,themeOverride:{bgCell:l.bgCellMedium}}}return y}),[r,p,l.bgCellMedium]),u=M.useCallback((y,h)=>{c?.(y,h);const S=f[y]?.group??"";S!==""&&(h.preventDefault(),t(w=>w.includes(S)?w.filter(A=>A!==S):[...w,S]))},[f,c]),b=M.useCallback(y=>{if(y.current!==void 0){const h=y.current.cell[0],S=f[h];t(w=>w.includes(S?.group??"")?w.filter(A=>A!==S.group):w)}g!==void 0?g(y):a(y)},[f,g]),m=M.useCallback(y=>({...C?.(y),name:y,overrideTheme:n.includes(y??"")?{bgHeader:l.bgHeaderHasFocus}:void 0}),[n,C,l.bgHeaderHasFocus]);return{columns:f,onGroupHeaderClicked:u,onGridSelectionChange:b,getGroupDetails:m,gridSelection:k}}var _,L;function Me(){if(L)return _;L=1;var e=ue(),n=de();function t(o,a){var r=-1,c=n(o)?Array(o.length):[];return e(o,function(g,C,d){c[++r]=a(g,C,d)}),c}return _=t,_}var T,V;function xe(){if(V)return T;V=1;function e(n,t){var o=n.length;for(n.sort(t);o--;)n[o]=n[o].value;return n}return T=e,T}var O,W;function Fe(){if(W)return O;W=1;var e=pe();function n(t,o){if(t!==o){var a=t!==void 0,r=t===null,c=t===t,g=e(t),C=o!==void 0,d=o===null,i=o===o,l=e(o);if(!d&&!l&&!g&&t>o||g&&C&&i&&!d&&!l||r&&C&&i||!a&&i||!c)return 1;if(!r&&!g&&!l&&t<o||l&&a&&c&&!r&&!g||d&&a&&c||!C&&c||!i)return-1}return 0}return O=n,O}var N,j;function Ee(){if(j)return N;j=1;var e=Fe();function n(t,o,a){for(var r=-1,c=t.criteria,g=o.criteria,C=c.length,d=a.length;++r<C;){var i=e(c[r],g[r]);if(i){if(r>=d)return i;var l=a[r];return i*(l=="desc"?-1:1)}}return t.index-o.index}return N=n,N}var q,Z;function He(){if(Z)return q;Z=1;var e=ge(),n=fe(),t=me(),o=Me(),a=xe(),r=Ce(),c=Ee(),g=ye(),C=re();function d(i,l,k){l.length?l=e(l,function(u){return C(u)?function(b){return n(b,u.length===1?u[0]:u)}:u}):l=[g];var p=-1;l=e(l,r(t));var f=o(i,function(u,b,m){var y=e(l,function(h){return h(u)});return{criteria:y,index:++p,value:u}});return a(f,function(u,b){return c(u,b,k)})}return q=d,q}var $,Y;function De(){if(Y)return $;Y=1;var e=He(),n=re();function t(o,a,r,c){return o==null?[]:(n(a)||(a=a==null?[]:[a]),r=c?void 0:r,n(r)||(r=r==null?[]:[r]),e(o,a,r))}return $=t,$}var Ue=De();const X=le(Ue);function D(e){return e.id??`${e.group??""}/${e.title}`}function J(e,n){return typeof n=="string"?D(e)===n:D(e)===D(n)}function Q(e,n,t){const o=n.indexOf(e);if(o===-1)return Number.MAX_SAFE_INTEGER;const a=t.findIndex(r=>J(e,r));if(a!==-1)return a;for(let r=o;r>=0;r--){const c=t.findIndex(g=>J(n[r],g));if(c!==-1)return c+.5}return-1}function Be(e){const{columns:n,getCellContent:t,onColumnMoved:o}=e,[a,r]=s.useState(()=>n.map(D)),c=s.useMemo(()=>X(n,i=>Q(i,n,a)),[a,n]),g=s.useRef(o);g.current=o;const C=s.useCallback((i,l)=>{r(k=>{const p=[...k],[f]=p.splice(i,1);return p.splice(l,0,f),p}),g.current?.(i,l)},[]);s.useEffect(()=>{r(i=>X(n,l=>Q(l,n,i)).map(D))},[n]);const d=s.useCallback(i=>{const[l,k]=i,p=c[l],f=n.indexOf(p);return t([f,k])},[c,n,t]);return{columns:c,onColumnMoved:C,getCellContent:d}}function Ie(e){switch(e.kind){case v.Number:return e.data?.toString()??"";case v.Boolean:return e.data?.toString()??"";case v.Markdown:case v.RowID:case v.Text:case v.Uri:return e.data??"";case v.Bubble:case v.Image:return e.data.join("");case v.Drilldown:return e.data.map(n=>n.text).join("");case v.Protected:case v.Loading:return"";case v.Custom:return e.copyData}}function ee(e){if(typeof e=="number")return e;if(e.length>0){const n=Number(e);isNaN(n)||(e=n)}return e}function Ge(e,n){return e=ee(e),n=ee(n),typeof e=="string"&&typeof n=="string"?e.localeCompare(n):typeof e=="number"&&typeof n=="number"?e===n?0:e>n?1:-1:e==n?0:e>n?1:-1}function _e(e,n){return e>n?1:e===n?0:-1}function Te(e){const{sort:n,rows:t,getCellContent:o}=e,a=s.useMemo(()=>n===void 0?[]:Array.isArray(n)?n:[n],[n]),r=s.useMemo(()=>a.map(d=>{const i=e.columns.findIndex(l=>d.column===l||l.id!==void 0&&d.column.id===l.id);return i===-1?void 0:i}),[a,e.columns]),c=s.useMemo(()=>{const d=a.map((l,k)=>({sort:l,col:r[k]})).filter(l=>l.col!==void 0);if(d.length===0)return;const i=d.map(()=>new Array(t));for(let l=0;l<d.length;l++){const{col:k}=d[l],p=[k,0];for(let f=0;f<t;f++)p[1]=f,i[l][f]=Ie(o(p))}return he(t).sort((l,k)=>{for(let p=0;p<d.length;p++){const{sort:f}=d[p],u=i[p][l],b=i[p][k];let m;if(f.mode==="raw"?m=_e(u,b):f.mode==="smart"?m=Ge(u,b):m=u.localeCompare(b),m!==0)return(f.direction??"asc")==="desc"&&(m=-m),m}return 0})},[o,t,a,r]),g=s.useCallback(d=>c===void 0?d:c[d],[c]),C=s.useCallback(([d,i])=>c===void 0?o([d,i]):(i=c[i],o([d,i])),[o,c]);return c===void 0?{getCellContent:e.getCellContent,getOriginalIndex:g}:{getOriginalIndex:g,getCellContent:C}}const Oe={undoHistory:[],redoHistory:[],canUndo:!1,canRedo:!1,isApplyingUndo:!1,isApplyingRedo:!1};function Ne(e,n){const t={...e};switch(n.type){case"undo":if(e.canUndo){t.undoHistory=[...e.undoHistory];const o=t.undoHistory.pop();return t.operation=o,t.canUndo=t.undoHistory.length>0,t.isApplyingUndo=!0,t}return e;case"redo":if(e.canRedo){t.redoHistory=[...e.redoHistory];const o=t.redoHistory.pop();return t.operation=o,t.canRedo=t.redoHistory.length>0,t.isApplyingRedo=!0,t}return e;case"operationApplied":return t.operation=void 0,t.isApplyingRedo=!1,t.isApplyingUndo=!1,t;case"edit":return!e.isApplyingRedo&&!e.isApplyingUndo&&(t.undoHistory=[...e.undoHistory,n.batch],t.redoHistory=[],t.canUndo=!0,t.canRedo=!1),e.isApplyingUndo&&(t.redoHistory=[...e.redoHistory,n.batch],t.canRedo=!0),e.isApplyingRedo&&(t.undoHistory=[...e.undoHistory,n.batch],t.canUndo=!0),t;default:throw new Error("Invalid action")}}function qe(e,n,t,o){const[a,r]=s.useReducer(Ne,Oe),c=s.useRef(null),g=s.useRef(null),C=s.useRef(!1),d=s.useRef(!1);s.useEffect(()=>{C.current=a.isApplyingUndo,d.current=a.isApplyingRedo},[a.isApplyingUndo,a.isApplyingRedo]);const[i,l]=s.useState(null),k=s.useRef(null),p=s.useCallback(m=>{l(m),k.current=m},[o]),f=s.useCallback((m,y)=>{if(!(C.current||d.current)&&k.current){clearTimeout(g.current);const S=n(m);c.current===null&&(c.current={edits:[],selection:k.current}),c.current.edits.push({cell:m,newValue:S}),g.current=setTimeout(()=>{c.current&&(r({type:"edit",batch:c.current}),c.current=null)},0)}t(m,y)},[t,n]),u=s.useCallback(()=>{r({type:"undo"})},[r]),b=s.useCallback(()=>{r({type:"redo"})},[r]);return s.useEffect(()=>{if(a.operation&&k.current&&e.current){const m=[],y={edits:[],selection:k.current};for(const h of a.operation.edits){const S=n(h.cell);y.edits.push({cell:h.cell,newValue:S}),t(h.cell,h.newValue),m.push({cell:h.cell})}l(a.operation.selection),k.current=a.operation.selection,e.current.updateCells(m),r({type:"edit",batch:y}),r({type:"operationApplied"})}},[a.operation,e,t,l,n]),s.useEffect(()=>{const m=y=>{y.key==="z"&&(y.metaKey||y.ctrlKey)&&(y.shiftKey?b():u()),y.key==="y"&&(y.metaKey||y.ctrlKey)&&b()};return window.addEventListener("keydown",m),()=>{window.removeEventListener("keydown",m)}},[u,b]),s.useMemo(()=>({undo:u,redo:b,canUndo:a.canUndo,canRedo:a.canRedo,onCellEdited:f,onGridSelectionChange:p,gridSelection:i}),[u,b,f,a.canUndo,a.canRedo,p,i])}R.seed(1337);function $e(e){return!!e}function ze(e,n){const t=e.data;if(typeof t==typeof n.data)return{...n,data:t};switch(n.kind){case v.Uri:return U(t)?{...n,data:t[0]}:{...n,data:t?.toString()??""};case v.Boolean:return U(t)?{...n,data:t[0]!==void 0}:e.kind===v.Boolean?{...n,data:e.data}:{...n,data:!!$e(t)};case v.Image:return U(t)?{...n,data:[t[0]]}:{...n,data:[t?.toString()??""]};case v.Number:return{...n,data:0};case v.Text:case v.Markdown:return U(t)?{...n,data:t[0].toString()??""}:{...n,data:e.data?.toString()??""};case v.Custom:return n}je()}function Pe(e){const{getContent:n,...t}=e;return t}function ne(e,n){const t=[{title:"First name",id:"First name",group:n?"Name":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.firstName();return{kind:v.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Last name",id:"Last name",group:n?"Name":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.lastName();return{kind:v.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Avatar",id:"Avatar",group:n?"Info":void 0,icon:x.HeaderImage,hasMenu:!1,getContent:()=>{const r=Math.round(Math.random()*100);return{kind:v.Image,data:[`https://picsum.photos/id/${r}/900/900`],displayData:[`https://picsum.photos/id/${r}/40/40`],allowOverlay:!0,readonly:!0}}},{title:"Email",id:"Email",group:n?"Info":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=R.internet.email();return{kind:v.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"Title",id:"Title",group:n?"Info":void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const r=R.name.jobTitle();return{kind:v.Text,displayData:r,data:r,allowOverlay:!0,readonly:!0}}},{title:"More Info",id:"More Info",group:n?"Info":void 0,icon:x.HeaderUri,hasMenu:!1,getContent:()=>{const r=R.internet.url();return{kind:v.Uri,displayData:r,data:r,allowOverlay:!0,readonly:!0}}}];if(e<t.length)return t.slice(0,e);const o=e-t.length,a=[...new Array(o)].map((r,c)=>Ke(c+t.length,n));return[...t,...a]}function Ke(e,n){return{title:`Column ${e}`,id:`Column ${e}`,group:n?`Group ${Math.round(e/3)}`:void 0,icon:x.HeaderString,hasMenu:!1,getContent:()=>{const t=R.lorem.word();return{kind:v.Text,data:t,displayData:t,allowOverlay:!0,readonly:!0}}}}class Le{cachedContent=new Map;get(n,t){const o=this.cachedContent.get(n);if(o!==void 0)return o[t]}set(n,t,o){let a=this.cachedContent.get(n);a===void 0&&this.cachedContent.set(n,a=[]),a[t]=o}}function Ve(e,n=!0,t=!1){const o=s.useRef(new Le),[a,r]=s.useState(()=>ne(e,t));s.useEffect(()=>{r(ne(e,t))},[t,e]);const c=s.useCallback((p,f)=>{r(u=>{const b=u.findIndex(y=>y.title===p.title),m=[...u];return m.splice(b,1,{...u[b],width:f}),m})},[]),g=s.useMemo(()=>a.map(Pe),[a]),C=s.useRef(a);C.current=a;const d=s.useCallback(([p,f])=>{let u=o.current.get(p,f);return u===void 0&&(u=C.current[p].getContent(),!n&&ce(u)&&(u={...u,readonly:n}),o.current.set(p,f,u)),u},[n]),i=s.useCallback(p=>{const f=[];for(let u=p.y;u<p.y+p.height;u++){const b=[];for(let m=p.x;m<p.x+p.width;m++)b.push(d([m,u]));f.push(b)}return f},[d]),l=s.useCallback(([p,f],u)=>{o.current.set(p,f,u)},[]),k=s.useCallback(([p,f],u)=>{let b=o.current.get(p,f);if(b===void 0&&(b=a[p].getContent()),K(u)&&K(b)){const m=ze(u,b);o.current.set(p,f,{...m,displayData:typeof m.data=="string"?m.data:m.displayData,lastUpdated:performance.now()})}},[a]);return{cols:g,getCellContent:d,onColumnResize:c,setCellValue:k,getCellsForSelection:i,setCellValueRaw:l}}function We(e="This should not happen"){throw new Error(e)}function je(e){return We("Hell froze over")}R.seed(1337);const Ze=B("div")({name:"SimpleWrapper",class:"ss4kmn3",propsAsIs:!1}),Ye=e=>s.createElement(Ze,null,s.createElement("div",{className:"content"},e.children)),cn={title:"Extra Packages/Source",decorators:[e=>s.createElement(Ye,null,s.createElement(e,null))]},Xe=B("div")({name:"BeautifulStyle",class:"bkh67gx",propsAsIs:!1}),ae=e=>{const{title:n,children:t,description:o}=e,{ref:a,width:r,height:c}=be();return s.createElement(Xe,null,s.createElement("h1",null,n),o,s.createElement("div",{className:"sizer"},s.createElement("div",{className:"sizer-clip",ref:a},s.createElement("div",{style:{position:"relative",width:r??100,height:c??100}},t))))},se=B("p")({name:"Description",class:"d1deot3s",propsAsIs:!1}),F=B("p")({name:"MoreInfo",class:"m1ml0sw1",propsAsIs:!1}),ie={smoothScrollX:!0,smoothScrollY:!0,isDraggable:!1,rowMarkers:"none",width:"100%"},Je={accentColor:"#4F5DFF",accentFg:"#FFFFFF",accentLight:"rgba(62, 116, 253, 0.1)",textDark:"#313139",textMedium:"#737383",textLight:"#B2B2C0",textBubble:"#313139",bgIconHeader:"#737383",fgIconHeader:"#FFFFFF",textHeader:"#313139",textGroupHeader:"#313139BB",textHeaderSelected:"#FFFFFF",bgCell:"#FFFFFF",bgCellMedium:"#FAFAFB",bgHeader:"#F7F7F8",bgHeaderHasFocus:"#E9E9EB",bgHeaderHovered:"#EFEFF1",bgBubble:"#EDEDF3",bgBubbleSelected:"#FFFFFF",bubbleHeight:20,bubblePadding:6,bubbleMargin:4,headerIconSize:20,markerFontStyle:"13px",bgSearchResult:"#fff9e3",borderColor:"rgba(115, 116, 131, 0.16)",horizontalBorderColor:"rgba(115, 116, 131, 0.16)",drilldownBorder:"rgba(0, 0, 0, 0)",linkColor:"#4F5DFF",cellHorizontalPadding:8,cellVerticalPadding:3,headerFontStyle:"600 13px",baseFontStyle:"13px",editorFontSize:"13px",lineHeight:1.4,fontFamily:"Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif"},Qe=[{title:"A",width:200,group:"Group 1"},{title:"B",width:200,group:"Group 1"},{title:"C",width:200,group:"Group 2"},{title:"D",width:200,group:"Group 2"},{title:"E",width:200,group:"Group 2"}],E=()=>{const e=s.useRef({}),n=1e5,t=Be({columns:Qe,getCellContent:s.useCallback(([C,d])=>{if(C===0)return{kind:v.Text,allowOverlay:!0,data:`${d}`,displayData:`${d}`};const i=`${C},${d}`;e.current[i]===void 0&&(e.current[i]=R.name.firstName()+" "+R.name.lastName());const l=e.current[i];return{kind:v.Text,allowOverlay:!0,data:l,displayData:l}},[])}),[o,a]=s.useState(),r=Te({columns:t.columns,getCellContent:t.getCellContent,rows:n,sort:o===void 0?void 0:{column:t.columns[o],direction:"desc",mode:"smart"}}),c=Ae({columns:t.columns,theme:Je,freezeColumns:0}),g=s.useCallback(C=>{a(C)},[]);return s.createElement(ae,{title:"Custom source extensions",description:s.createElement(se,null,"Fixme.")},s.createElement(te,{...ie,...t,...r,...c,rows:n,onColumnMoved:t.onColumnMoved,onHeaderClicked:g}))};E.parameters={options:{showPanel:!1}};const H=()=>{const{cols:e,getCellContent:n,setCellValue:t}=Ve(6),o=s.useRef(null),{gridSelection:a,onCellEdited:r,onGridSelectionChange:c,undo:g,canRedo:C,canUndo:d,redo:i}=qe(o,n,t);return s.createElement(ae,{title:"Undo / Redo Support",description:s.createElement(se,null,"A simple undo/redo implementation",s.createElement(F,null,"Use keyboard shortcuts CMD+Z and CMD+SHIFT+Z / CTRL+Z and CTRL+Y. Or click these buttons:",s.createElement("button",{onClick:g,disabled:!d,style:{opacity:d?1:.4}},"Undo"),s.createElement("button",{onClick:i,disabled:!C,style:{opacity:C?1:.4}},"Redo")),s.createElement(F,null,"It works by taking a snapshot of the content of a cell before it is edited and replaying any edits back."))},s.createElement(te,{...ie,ref:o,onCellEdited:r,getCellContent:n,gridSelection:a??void 0,onGridSelectionChange:c,columns:e,rows:1e3}))};H.parameters={options:{showPanel:!1}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`styled.p\`
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
}`,...H.parameters?.docs?.source}}};const un=["MoreInfo","UseDataSource","UndoRedo"];export{F as MoreInfo,H as UndoRedo,E as UseDataSource,un as __namedExportsOrder,cn as default};

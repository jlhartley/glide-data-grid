import{R as n}from"./iframe-BynEneiI.js";import{u as G,D as R}from"./data-editor-all-B_BNdl63.js";import{B as b,D as v,P as k,u as x,d as y}from"./utils-By-9wJ6Q.js";import{S as O}from"./story-utils-q8CUafD6.js";import{a as m}from"./image-window-loader-Cz4WZa9y.js";import"./lodash-dWVUTNUE.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-Db8i-HAC.js";import"./flatten-DQVfVO4k.js";import"./scrolling-data-grid-g_p87fl-.js";import"./marked.esm-DeOFW1d8.js";import"./isArray-D3Yi875v.js";import"./useResizeDetector-DIuHoR9_.js";const J={title:"Glide-Data-Grid/DataEditor Demos",decorators:[s=>n.createElement(O,null,n.createElement(b,{title:"Row Grouping",description:n.createElement(v,null,"The ",n.createElement(k,null,"rowGrouping")," prop can be used to group and even fold rows.")},n.createElement(s,null)))]},l=s=>{const{cols:C,getCellContent:u}=x(100),i=1e5,[o,w]=n.useState(()=>({groups:[{headerIndex:10,isCollapsed:!0,subGroups:[{headerIndex:15,isCollapsed:!1},{headerIndex:20,isCollapsed:!1}]},{headerIndex:30,isCollapsed:!1},...Array.from({length:100},(r,e)=>({headerIndex:i/100*e,isCollapsed:!1}))],height:55,navigationBehavior:"block",selectionBehavior:"block-spanning",themeOverride:{bgCell:"rgba(0, 100, 255, 0.1)"}})),{mapper:t,getRowGroupingForPath:d,updateRowGroupingByPath:g}=G(o,i),h=n.useCallback(r=>{const{path:e,isGroupHeader:a}=t(r);if(a&&r[0]===0){const p=d(o.groups,e);w(c=>({...c,groups:g(c.groups,e,{isCollapsed:!p.isCollapsed})}))}},[d,t,o.groups,g]),f=n.useCallback(r=>{const{path:e,isGroupHeader:a,originalIndex:p}=t(r);return r[0]===0?{kind:m.Text,data:`Row ${JSON.stringify(e)}`,displayData:`Row ${JSON.stringify(e)}`,allowOverlay:!1}:a?{kind:m.Loading,allowOverlay:!1}:u(p)},[u,t]);return n.createElement(R,{...y,rowGrouping:o,height:"100%",rowMarkers:"both",freezeColumns:s.freezeColumns,getRowThemeOverride:(r,e,a)=>{if(e%2===0)return{bgCell:"rgba(0, 0, 0, 0.1)"}},onCellClicked:h,getCellContent:f,columns:C,rows:i})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(p: {
  freezeColumns: number;
}) => {
  const {
    cols,
    getCellContent
  } = useMockDataGenerator(100);
  const rows = 100_000;
  const [rowGrouping, setRowGrouping] = React.useState<RowGroupingOptions>(() => ({
    groups: [{
      headerIndex: 10,
      isCollapsed: true,
      subGroups: [{
        headerIndex: 15,
        isCollapsed: false
      }, {
        headerIndex: 20,
        isCollapsed: false
      }]
    }, {
      headerIndex: 30,
      isCollapsed: false
    }, ...Array.from({
      length: 100
    }, (_value, i): RowGroupingOptions["groups"][number] => {
      return {
        headerIndex: rows / 100 * i,
        isCollapsed: false
      };
    })],
    height: 55,
    navigationBehavior: "block",
    selectionBehavior: "block-spanning",
    themeOverride: {
      bgCell: "rgba(0, 100, 255, 0.1)"
    }
  }));
  const {
    mapper,
    getRowGroupingForPath,
    updateRowGroupingByPath
  } = useRowGrouping(rowGrouping, rows);
  const onCellClicked = React.useCallback((item: Item) => {
    const {
      path,
      isGroupHeader
    } = mapper(item);
    if (isGroupHeader && item[0] === 0) {
      const group = getRowGroupingForPath(rowGrouping.groups, path);
      setRowGrouping(prev => {
        const result: RowGroupingOptions = {
          ...prev,
          groups: updateRowGroupingByPath(prev.groups, path, {
            isCollapsed: !group.isCollapsed
          })
        };
        return result;
      });
    }
  }, [getRowGroupingForPath, mapper, rowGrouping.groups, updateRowGroupingByPath]);
  const getCellContentMangled = React.useCallback<DataEditorAllProps["getCellContent"]>(item => {
    const {
      path,
      isGroupHeader,
      originalIndex
    } = mapper(item);
    if (item[0] === 0) {
      return {
        kind: GridCellKind.Text,
        data: \`Row \${JSON.stringify(path)}\`,
        displayData: \`Row \${JSON.stringify(path)}\`,
        allowOverlay: false
      };
    } else if (isGroupHeader) {
      return {
        kind: GridCellKind.Loading,
        allowOverlay: false
        // span: [1, cols.length - 1],
      };
    }
    return getCellContent(originalIndex);
  }, [getCellContent, mapper]);
  return <DataEditor {...defaultProps} rowGrouping={rowGrouping} height="100%" rowMarkers="both" freezeColumns={p.freezeColumns} getRowThemeOverride={(_row, groupRow, _contentRow) => {
    if (groupRow % 2 === 0) {
      return {
        bgCell: "rgba(0, 0, 0, 0.1)"
      };
    }
    return undefined;
  }} onCellClicked={onCellClicked} getCellContent={getCellContentMangled} columns={cols}
  // verticalBorder={false}
  rows={rows} />;
}`,...l.parameters?.docs?.source}}};const $=["RowGrouping"];export{l as RowGrouping,$ as __namedExportsOrder,J as default};

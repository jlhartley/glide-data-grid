import{r as e}from"./iframe-Dm2sTaU0.js";import{a as s,G as n}from"./image-window-loader-qCvk1D9s.js";import{D as i}from"./data-editor-all-D8fhf72B.js";import{S as m}from"./story-utils-Ql6G6nq_.js";import{a as h,M as a,H as o,W as d}from"./doc-wrapper-dABYatlG.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DgHjLOvN.js";import"./marked.esm-CqBPueJW.js";import"./flatten-tVkekezh.js";import"./scrolling-data-grid-BAa2w2xA.js";const y={title:"Glide-Data-Grid/Docs",decorators:[t=>e.createElement(m,null,e.createElement(t,null))]},r=()=>{const t=e.useCallback(l=>({kind:s.Text,allowOverlay:!1,displayData:l.toString(),data:l.toString()}),[]),c=e.useMemo(()=>[{title:"First",width:150},{title:"Second",width:150}],[]);return e.createElement(h,null,e.createElement(a,null,"\n# Basic usage\n\n> The `GridColumn[]` passed to the `DataEditor` in the `columns` property should be memoized to avoid excessive re-rendering. These samples may not do this for the sake of brevity.\n\nThere are only two mandatory properties for each `GridColumn`: `title` and `id`. The id should be a stable id and not the index of the column. Additionally a `width` property can be provided which represents the width of the column in pixels. If a width is provided the id may be omited. This may change in a future version."),e.createElement(o,null,`
const columns: GridColumn[] = [
    { title: "First", id: "first", width: 150 },
    { title: "Second", id: "second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
`),e.createElement(d,{height:200},e.createElement(i,{getCellContent:t,columns:c,rows:50})),e.createElement(a,null,`
# Header icons

Default header icons are available. They can also be reaplced by passing a new map to the \`headerIcons\` property.`),e.createElement(o,null,`
const columns: GridColumn[] = [
    { title: "Name", id: "name", width: 250, icon: GridColumnIcon.HeaderString, 
      overlayIcon: GridColumnIcon.RowOwnerOverlay 
    },
    { title: "Age", id: "age", width: 100, icon: GridColumnIcon.HeaderNumber },
    { title: "Avatar", id: "avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
`),e.createElement(d,{height:200},e.createElement(i,{getCellContent:t,columns:[{title:"Name",width:250,icon:n.HeaderString,overlayIcon:n.RowOwnerOverlay},{title:"Age",width:120,icon:n.HeaderNumber},{title:"Avatar",width:100,icon:n.HeaderImage}],rows:50})),e.createElement(a,null,`
# Header theming

Headers can be provided with individual theme overrides which themes both the header and its column cells.`),e.createElement(o,null,`
const columns: GridColumn[] = [
    { title: "Name", id="name", width: 250, icon: GridColumnIcon.HeaderString },
    { title: "Age", id="age", width: 100, icon: GridColumnIcon.HeaderNumber, themeOverride: {
        bgIconHeader: "#00967d",
        textDark: "#00c5a4",
        textHeader: "#00c5a4",
    } },
    { title: "Avatar", id="avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
`),e.createElement(d,{height:200},e.createElement(i,{getCellContent:t,columns:[{title:"Name",width:250,icon:n.HeaderString},{title:"Age",width:100,icon:n.HeaderNumber,themeOverride:{bgIconHeader:"#00967d",textDark:"#00c5a4",textHeader:"#00c5a4"}},{title:"Avatar",width:80,icon:n.HeaderImage}],rows:50})))};r.storyName="03. Grid Columns";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const basicGetCellContent = React.useCallback((cell: Item): GridCell => {
    return {
      kind: GridCellKind.Text,
      allowOverlay: false,
      displayData: cell.toString(),
      data: cell.toString()
    };
  }, []);
  const cols = React.useMemo(() => {
    return [{
      title: "First",
      width: 150
    }, {
      title: "Second",
      width: 150
    }];
  }, []);
  return <DocWrapper>
            <Marked>
                {\`
# Basic usage

> The \\\`GridColumn[]\\\` passed to the \\\`DataEditor\\\` in the \\\`columns\\\` property should be memoized to avoid excessive re-rendering. These samples may not do this for the sake of brevity.

There are only two mandatory properties for each \\\`GridColumn\\\`: \\\`title\\\` and \\\`id\\\`. The id should be a stable id and not the index of the column. Additionally a \\\`width\\\` property can be provided which represents the width of the column in pixels. If a width is provided the id may be omited. This may change in a future version.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "First", id: "first", width: 150 },
    { title: "Second", id: "second", width: 150 }
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={cols} rows={50} />
            </Wrapper>

            <Marked>
                {\`
# Header icons

Default header icons are available. They can also be reaplced by passing a new map to the \\\`headerIcons\\\` property.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "Name", id: "name", width: 250, icon: GridColumnIcon.HeaderString, 
      overlayIcon: GridColumnIcon.RowOwnerOverlay 
    },
    { title: "Age", id: "age", width: 100, icon: GridColumnIcon.HeaderNumber },
    { title: "Avatar", id: "avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={[{
        title: "Name",
        width: 250,
        icon: GridColumnIcon.HeaderString,
        overlayIcon: GridColumnIcon.RowOwnerOverlay
      }, {
        title: "Age",
        width: 120,
        icon: GridColumnIcon.HeaderNumber
      }, {
        title: "Avatar",
        width: 100,
        icon: GridColumnIcon.HeaderImage
      }]} rows={50} />
            </Wrapper>

            <Marked>
                {\`
# Header theming

Headers can be provided with individual theme overrides which themes both the header and its column cells.\`}
            </Marked>
            <Highlight>
                {\`
const columns: GridColumn[] = [
    { title: "Name", id="name", width: 250, icon: GridColumnIcon.HeaderString },
    { title: "Age", id="age", width: 100, icon: GridColumnIcon.HeaderNumber, themeOverride: {
        bgIconHeader: "#00967d",
        textDark: "#00c5a4",
        textHeader: "#00c5a4",
    } },
    { title: "Avatar", id="avatar", width: 80, icon: GridColumnIcon.HeaderImage },
];

<DataEditor {...rest} columns={columns} />
\`}
            </Highlight>
            <Wrapper height={200}>
                <DataEditor getCellContent={basicGetCellContent} columns={[{
        title: "Name",
        width: 250,
        icon: GridColumnIcon.HeaderString
      }, {
        title: "Age",
        width: 100,
        icon: GridColumnIcon.HeaderNumber,
        themeOverride: {
          bgIconHeader: "#00967d",
          textDark: "#00c5a4",
          textHeader: "#00c5a4"
        }
      }, {
        title: "Avatar",
        width: 80,
        icon: GridColumnIcon.HeaderImage
      }]} rows={50} />
            </Wrapper>
        </DocWrapper>;
}`,...r.parameters?.docs?.source}}};const E=["GridColumns"];export{r as GridColumns,E as __namedExportsOrder,y as default};

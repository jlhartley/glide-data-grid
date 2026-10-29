import{r as t}from"./iframe-C1-HlzKK.js";import{B as d}from"./story-utils-B8gHKxtk.js";import{a}from"./image-window-loader-BXYRWeEN.js";import{D as i}from"./data-editor-all-dl81PPU5.js";import{s as m}from"./marked.esm-CMDovIh-.js";import"./preload-helper-PPVm8Dsz.js";import"./throttle-DLX4JYJo.js";import"./flatten-xF85pKUo.js";import"./scrolling-data-grid-BpJdqRDI.js";const{useState:h,useMemo:p}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Tests/TestCases/Bugs",decorators:[e=>t.createElement(d,{width:1e3,height:800},t.createElement(e,null))]},g=([,e])=>({allowOverlay:!0,kind:a.Number,data:e,displayData:e.toString()}),C=()=>{},w=m("div")({name:"Bug70Style",class:"b1nvh7n2",propsAsIs:!1});function n(){const e=[{title:"Col1",width:100},{title:"Col2",width:100}];return t.createElement(w,{className:"App"},t.createElement("p",null,"To cause error: scroll down at least one row, edit a cell in Col2, and hit Tab"),t.createElement("a",{href:"https://github.com/glideapps/glide-data-grid/issues/70",target:"_blank",rel:"noreferrer"},"Original report"),t.createElement(i,{width:500,height:500,rows:100,columns:e,getCellContent:g,onCellEdited:C}))}const f=([e,r])=>({allowOverlay:!0,kind:a.Text,data:`${e} - ${r}`,displayData:`${e} - ${r}`}),s=[{title:"Col AAAA",width:120},{title:"Col AAA",width:120},{title:"Col AA",width:120},{title:"Col A",width:120},{title:"Col",width:120}];function o(){const[e,r]=h(""),c=p(()=>e===""?s:s.filter(l=>l.title.toLowerCase().includes(e.toLowerCase())),[e]),u=l=>{r(l.target.value)};return t.createElement("div",null,t.createElement("input",{value:e,onChange:u}),t.createElement(i,{width:1e3,height:500,rows:100,columns:c,getCellContent:f,smoothScrollX:!0,smoothScrollY:!0}))}n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`function Bug70() {
  const cols = [{
    title: "Col1",
    width: 100
  }, {
    title: "Col2",
    width: 100
  }];
  return <Bug70Style className="App">
            <p>To cause error: scroll down at least one row, edit a cell in Col2, and hit Tab</p>
            <a href="https://github.com/glideapps/glide-data-grid/issues/70" target="_blank" rel="noreferrer">
                Original report
            </a>
            <DataEditor width={500} height={500} rows={100} columns={cols} getCellContent={bug70Gen} onCellEdited={ignore} />
        </Bug70Style>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`function FilterColumns() {
  const [searchText, setSearchText] = useState("");
  const cols = useMemo(() => {
    if (searchText === "") {
      return filteringColumns;
    }
    return filteringColumns.filter(c => c.title.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText]);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return <div>
            <input value={searchText} onChange={onInputChange} />
            <DataEditor width={1000} height={500} rows={100} columns={cols} getCellContent={filterColumnsGen} smoothScrollX={true} smoothScrollY={true} />
        </div>;
}`,...o.parameters?.docs?.source}}};const O=["Bug70","FilterColumns"];export{n as Bug70,o as FilterColumns,O as __namedExportsOrder,y as default};

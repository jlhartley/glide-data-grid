import{r as t}from"./iframe-DvUF06nB.js";import{S as r}from"./story-utils-C0tNhMi0.js";import{a as o,M as n}from"./doc-wrapper-BlwXXU2J.js";import"./preload-helper-PPVm8Dsz.js";import"./marked.esm-D9UvuHxz.js";const h={title:"Glide-Data-Grid/Docs",decorators:[a=>t.createElement(r,null,t.createElement(a,null))]},e=()=>t.createElement(o,null,t.createElement(n,null,`
# FAQ

### Nothing shows up? It crashes when I edit a cell?

Please read the [Prerequisites section in the docs](https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md).

### Does it work with screen readers and other a11y tools?

Yes. Unfortunately none of the primary developers are accessibility users so there are likely flaws in the implementation we are not aware of. Bug reports welcome!

### Does it support my data source?

Yes.

Data Grid is agnostic about the way you load/store/generate/mutate your data. What it requires is that you tell it which columns you have, how many rows, and to give it a function it can call to get the data for a cell in a specific row and column.

### Does it do sorting?

Yes through the [glide-data-grid-source](https://www.npmjs.com/package/@glideapps/glide-data-grid-source) package.

### Does it do search?

Yes, built in! There are examples in the storybook.

### Can it filter?

Nothing built in yet. It is planned for the \`glide-data-grid-source\`.

### Can it do frozen columns?

Yes

### Can I render my own cells?

Yes

`));e.storyName="00. FAQ";e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return <DocWrapper>
            <Marked>
                {\`
# FAQ

### Nothing shows up? It crashes when I edit a cell?

Please read the [Prerequisites section in the docs](https://github.com/glideapps/glide-data-grid/blob/main/packages/core/API.md).

### Does it work with screen readers and other a11y tools?

Yes. Unfortunately none of the primary developers are accessibility users so there are likely flaws in the implementation we are not aware of. Bug reports welcome!

### Does it support my data source?

Yes.

Data Grid is agnostic about the way you load/store/generate/mutate your data. What it requires is that you tell it which columns you have, how many rows, and to give it a function it can call to get the data for a cell in a specific row and column.

### Does it do sorting?

Yes through the [glide-data-grid-source](https://www.npmjs.com/package/@glideapps/glide-data-grid-source) package.

### Does it do search?

Yes, built in! There are examples in the storybook.

### Can it filter?

Nothing built in yet. It is planned for the \\\`glide-data-grid-source\\\`.

### Can it do frozen columns?

Yes

### Can I render my own cells?

Yes

\`}
            </Marked>
        </DocWrapper>;
}`,...e.parameters?.docs?.source}}};const p=["FAQ"];export{e as FAQ,p as __namedExportsOrder,h as default};

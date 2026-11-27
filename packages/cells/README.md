<h1 align="center">
  <img src="https://raw.githubusercontent.com/glideapps/glide-data-grid/master/icon.png" width="224px"/><br/>
  <b>Glide Data Grid Cells</b>
</h1>
<p align="center">Additional cells and features for Glide Data Grid</p>

[![Upstream version](https://img.shields.io/npm/v/@glideapps/glide-data-grid-cells?color=blue&label=upstream&style=for-the-badge)](https://github.com/glideapps/glide-data-grid/releases)
[![React 19](https://img.shields.io/badge/React-19-00ADD8?style=for-the-badge&logo=react)](https://reactjs.org)
[![Upstream npm bundle size](https://img.shields.io/bundlephobia/minzip/@glideapps/glide-data-grid-cells?color=success&label=upstream_bundle&style=for-the-badge)](https://bundlephobia.com/package/@glideapps/glide-data-grid-cells)
[![License](https://img.shields.io/github/license/glideapps/glide-data-grid?color=red&style=for-the-badge)](https://github.com/glideapps/glide-data-grid/blob/main/LICENSE)
[![Made By Glide](https://img.shields.io/badge/❤_Made_by-Glide-11CCE5?style=for-the-badge&logo=none)](https://www.glideapps.com/jobs)

This fork requires React 19 and React DOM 19. Packages are distributed through GitHub Packages.

Follow the [fork installation instructions](https://github.com/jlhartley/glide-data-grid#-quick-start) for authentication, pinned package versions, and optional npm aliases.

The `@glideapps` imports in the examples below assume you installed the corresponding npm aliases.

![Data Grid](https://raw.githubusercontent.com/glideapps/glide-data-grid/master/data-grid.jpg)

Current cells

-   Star (Rating) Cell
-   Sparklines
-   Article
-   Dropdown
-   Range
-   User profile
-   Tags

# Usage

Step 1: Import the cell renderers you want to use and pass them to the grid.

```tsx
import { allCells } from "@glideapps/glide-data-grid-cells";

const Grid = () => {
    return <DataEditor customRenderers={allCells} {...rest} />;
};
```

Step 2: Use the cells in your `getCellContent` callback

```ts
import type { StarCell } from "@glideapps/glide-data-grid-cells";

const getCellContent = React.useCallback(() => {
    const starCell: StarCell = {
        kind: GridCellKind.Custom,
        allowOverlay: true,
        copyData: "4 out of 5",
        data: {
            kind: "star-cell",
            label: "Test",
            rating: 4,
        },
    };

    return starCell;
}, []);
```

This fork requires React 19 and React DOM 19.

## ArticleCell: planned removal

This fork intends to remove ArticleCell as a feature, including its renderer, exported types, entry in `allCells`, and TOAST UI dependencies. TOAST UI Editor is [no longer maintained](https://github.com/nhn/tui.editor), and maintaining a rich document editor is outside this fork's intended scope. There are no plans to replace it with another editor library.

ArticleCell remains available for now; no removal release or date has been set. Avoid new dependencies on this cell. Existing consumers should plan to provide their own custom renderer and editor if they need this functionality. Removing ArticleCell will be a breaking change and should be announced in the release notes.

### Current usage

The ArticleCell uses `@toast-ui/editor` to provide its editor. To make sure it works correctly your project will need to import the css file it depends on.

```
import "@toast-ui/editor/dist/toastui-editor.css";
```

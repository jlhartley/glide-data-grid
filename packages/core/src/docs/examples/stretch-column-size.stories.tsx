import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import {
    BeautifulWrapper,
    Description,
    PropName,
    useMockDataGenerator,
    defaultProps,
} from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Column Grow"
                    description={
                        <Description>
                            Columns in the data grid may be set to grow to fill space by setting the{" "}
                            <PropName>grow</PropName> prop.
                        </Description>
                    }>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

export const StretchColumnSize: React.VFC = () => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(5, true, true);

    const [hasResized, setHasResized] = React.useState(() => new Set<number>());

    const columns = React.useMemo(() => {
        return cols.map((x, i) => ({ ...x, grow: hasResized.has(i) ? undefined : (5 + i) / 5 }));
    }, [cols, hasResized]);

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={getCellContent}
            columns={columns}
            rows={1000}
            onColumnResize={(col, _newSize, colIndex, newSizeWithGrow) => {
                setHasResized(previous => new Set(previous).add(colIndex));
                onColumnResize(col, newSizeWithGrow);
            }}
            rowMarkers="both"
        />
    );
};

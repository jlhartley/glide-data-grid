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
                    title="Uneven Rows"
                    description={
                        <Description>
                            Rows can be made uneven by passing a callback to the <PropName>rowHeight</PropName> prop
                        </Description>
                    }>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

export const UnevenRows: React.VFC = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);

    return (
        <DataEditor
            {...defaultProps}
            rowHeight={r => {
                if (r % 3 === 0) return 30;
                return r % 2 ? 50 : 60;
            }}
            getCellContent={getCellContent}
            columns={cols}
            rows={1000}
        />
    );
};

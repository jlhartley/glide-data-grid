import * as React from "react";
import { DocWrapper, Highlight, Marked } from "../src/docs/doc-wrapper.js";
import { StreamingData } from "../src/docs/04-streaming-data.stories.js";
import { CellActivatedEvent } from "../src/docs/examples/cell-activated-event.stories.js";
import { Context } from "./test-utils.js";

// Compile against the actual components: children are explicit, and story props
// remain checked rather than becoming any when a component annotation is lost.
export const validComponents = (
    <Context>
        <DocWrapper>
            <Highlight>code</Highlight>
            <Marked>documentation</Marked>
            <StreamingData />
            <CellActivatedEvent cellActivationBehavior="single-click" />
        </DocWrapper>
    </Context>
);

// @ts-expect-error A story without children props must not acquire implicit children.
export const invalidStoryChildren = <StreamingData>unexpected</StreamingData>;
// @ts-expect-error Highlight requires string children.
export const invalidHighlightChildren = <Highlight>{123}</Highlight>;
// @ts-expect-error Marked requires children.
export const missingMarkedChildren = <Marked />;
// @ts-expect-error The existing activation option union must remain enforced.
export const invalidActivation = <CellActivatedEvent cellActivationBehavior="invalid" />;

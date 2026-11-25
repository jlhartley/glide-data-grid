import * as React from "react";
import { createRoot } from "react-dom/client";
import DataEditor, { GridCellKind } from "../../packages/core/dist/esm/index.js";
import "../../packages/core/dist/index.css";
const number = new URLSearchParams(location.search).has("number");
window.results = { latency: null, saved: null, react: React.version, events: [], activations: [] };
let start;
document.addEventListener(
    "keydown",
    e => {
        start ??= performance.now();
        window.results.events.push({
            type: "keydown",
            key: e.key,
            time: performance.now(),
            target: e.target instanceof Element ? e.target.tagName : null,
        });
    },
    true
);
document.addEventListener("focusin", e => {
    window.results.events.push({
        type: "focusin",
        time: performance.now(),
        target: e.target instanceof Element ? e.target.tagName : null,
    });
    if (start && ["INPUT", "TEXTAREA"].includes(e.target.tagName)) window.results.latency ??= performance.now() - start;
});
function App() {
    const [value, setValue] = React.useState(number ? 0 : "original");
    return (
        <DataEditor
            width={700}
            height={400}
            columns={[{ title: number ? "Number" : "Text", width: 200 }]}
            rows={5}
            onCellActivated={(_, event) => {
                window.results.activations.push({ ...event, time: performance.now() });
            }}
            getCellContent={() =>
                number
                    ? { kind: GridCellKind.Number, data: Number(value), displayData: String(value), allowOverlay: true }
                    : { kind: GridCellKind.Text, data: String(value), displayData: String(value), allowOverlay: true }
            }
            onCellEdited={(_, cell) => {
                window.results.saved = cell.data;
                setValue(cell.data);
            }}
        />
    );
}
createRoot(document.getElementById("root")).render(<App />);

import * as React from "react";
import { createRoot } from "react-dom/client";
import DataEditor, { GridCellKind } from "../../packages/core/dist/esm/index.js";
import "../../packages/core/dist/index.css";
const number = new URLSearchParams(location.search).has("number");
window.results = { latency: null, saved: null, react: React.version };
let start;
document.addEventListener(
    "keydown",
    () => {
        start ??= performance.now();
    },
    true
);
document.addEventListener("focusin", e => {
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

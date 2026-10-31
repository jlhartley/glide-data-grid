const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
exports.createServer = () =>
    http.createServer((req, res) => {
        const url = new URL(req.url, "http://127.0.0.1");
        if (url.pathname === "/cells") {
            const h = Math.min(20, Number(url.searchParams.get("height")) || 1),
                w = Math.min(10, Number(url.searchParams.get("width")) || 1);
            setTimeout(() => {
                res.writeHead(200, { "content-type": "application/json", "cache-control": "no-store" });
                res.end(
                    JSON.stringify(
                        Array.from({ length: h }, () =>
                            Array.from({ length: w }, () => ({
                                kind: "text",
                                allowOverlay: true,
                                data: "Fetched student with a longer name",
                                displayData: "Fetched student with a longer name",
                            }))
                        )
                    )
                );
            }, 50);
            return;
        }
        const root = path.join(__dirname, "out");
        let dest = path.resolve(root, "." + url.pathname);
        if (!dest.startsWith(root + path.sep)) {
            res.writeHead(404);
            res.end();
            return;
        }
        if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) dest = path.join(dest, "index.html");
        if (!fs.existsSync(dest)) {
            res.writeHead(404);
            res.end();
            return;
        }
        res.writeHead(200, {
            "content-type": dest.endsWith(".js") ? "text/javascript" : dest.endsWith(".css") ? "text/css" : "text/html",
            "cache-control": "no-store",
        });
        fs.createReadStream(dest).pipe(res);
    });

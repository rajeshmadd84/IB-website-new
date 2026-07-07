module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/components/ib/flowchart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   <Flowchart> — reusable animated diagram (pure SVG + CSS).
   No hooks, no client JS — renders as a server component.
   Pulses flow along edges via CSS offset-path; reduced-motion
   hides them. Feed it nodes + edges; positions are in viewBox
   units (default canvas width 1000).
   ============================================================ */ __turbopack_context__.s([
    "Flowchart",
    ()=>Flowchart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const NODE_W = 170;
const NODE_H = 62;
function anchor(n, side) {
    const w = n.w ?? NODE_W;
    const h = n.h ?? NODE_H;
    switch(side){
        case "left":
            return [
                n.x,
                n.y + h / 2
            ];
        case "right":
            return [
                n.x + w,
                n.y + h / 2
            ];
        case "top":
            return [
                n.x + w / 2,
                n.y
            ];
        case "bottom":
            return [
                n.x + w / 2,
                n.y + h
            ];
    }
}
function Flowchart({ nodes, edges, width = 1000, height, title, caption, legend }) {
    const byId = new Map(nodes.map((n)=>[
            n.id,
            n
        ]));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ib-fc",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ib-fc-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ib/flowchart.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "live",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            "LIVE"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/flowchart.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ib/flowchart.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ib-fc-canvas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${width} ${height}`,
                    role: "img",
                    "aria-label": title || caption || "Process flow diagram",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                id: "ib-arrow",
                                markerWidth: "9",
                                markerHeight: "9",
                                refX: "7",
                                refY: "4.5",
                                orient: "auto",
                                markerUnits: "userSpaceOnUse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1 L8 4.5 L1 8 Z",
                                    fill: "var(--ib-line-2)"
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/flowchart.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ib/flowchart.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        edges.map((e, i)=>{
                            const a = byId.get(e.from);
                            const b = byId.get(e.to);
                            if (!a || !b) return null;
                            const [x1, y1] = anchor(a, e.fromSide ?? "right");
                            const [x2, y2] = anchor(b, e.toSide ?? "left");
                            const dx = x2 - x1;
                            const dy = y2 - y1;
                            const len = Math.hypot(dx, dy) || 1;
                            const ux = dx / len;
                            const uy = dy / len;
                            const sx = x1 + ux * 6;
                            const sy = y1 + uy * 6;
                            const ex = x2 - ux * 13;
                            const ey = y2 - uy * 13;
                            const d = `M ${sx.toFixed(1)} ${sy.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`;
                            const dur = Math.min(3.4, Math.max(1.1, len / 130));
                            const count = e.pulses ?? 2;
                            const pathStr = `path('${d}')`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: `ib-fc-edge${e.dashed ? " dash" : ""}`,
                                        d: d,
                                        markerEnd: e.arrow === false ? undefined : "url(#ib-arrow)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/flowchart.tsx",
                                        lineNumber: 106,
                                        columnNumber: 17
                                    }, this),
                                    Array.from({
                                        length: count
                                    }).map((_, p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "ib-fc-pulse",
                                            r: 3.6,
                                            fill: "var(--ib-cyan)",
                                            style: {
                                                offsetPath: pathStr,
                                                animationDuration: `${dur}s`,
                                                animationDelay: `${(dur / count * p).toFixed(2)}s`
                                            }
                                        }, p, false, {
                                            fileName: "[project]/components/ib/flowchart.tsx",
                                            lineNumber: 108,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, `e${i}`, true, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this);
                        }),
                        nodes.map((n)=>{
                            const w = n.w ?? NODE_W;
                            const h = n.h ?? NODE_H;
                            const kind = n.kind ?? "default";
                            const glow = n.glow || kind === "twin";
                            const twoLine = !!n.sub;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: `ib-fc-node ib-fc-${kind}${glow ? " ib-fc-glow" : ""}`,
                                transform: `translate(${n.x} ${n.y})`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: w,
                                        height: h,
                                        rx: 11
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/flowchart.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        className: "lbl",
                                        x: w / 2,
                                        y: twoLine ? h / 2 - 4 : h / 2 + 6,
                                        textAnchor: "middle",
                                        children: n.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/flowchart.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    n.sub && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        className: "sub",
                                        x: w / 2,
                                        y: h / 2 + 14,
                                        textAnchor: "middle",
                                        children: n.sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/flowchart.tsx",
                                        lineNumber: 134,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/flowchart.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/flowchart.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            legend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ib-fc-legend",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ag"
                            }, void 0, false, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            "AI agent"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/flowchart.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "ph"
                            }, void 0, false, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            "Physical / site"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/flowchart.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "tw"
                            }, void 0, false, {
                                fileName: "[project]/components/ib/flowchart.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            "Digital twin"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/flowchart.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ib/flowchart.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ib-fc-cap",
                children: caption
            }, void 0, false, {
                fileName: "[project]/components/ib/flowchart.tsx",
                lineNumber: 160,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/flowchart.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ib/icons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Inline stroke icons. Paths omit `stroke` so it inherits from the
   parent <svg>'s CSS stroke (stroke is an inherited SVG property). */ __turbopack_context__.s([
    "IconBlocks",
    ()=>IconBlocks,
    "IconBot",
    ()=>IconBot,
    "IconBriefcase",
    ()=>IconBriefcase,
    "IconCheck",
    ()=>IconCheck,
    "IconClock",
    ()=>IconClock,
    "IconCpu",
    ()=>IconCpu,
    "IconGear",
    ()=>IconGear,
    "IconInfo",
    ()=>IconInfo,
    "IconLayers",
    ()=>IconLayers,
    "IconLeaf",
    ()=>IconLeaf,
    "IconLink",
    ()=>IconLink,
    "IconMail",
    ()=>IconMail,
    "IconPlay",
    ()=>IconPlay,
    "IconPlug",
    ()=>IconPlug,
    "IconQuestion",
    ()=>IconQuestion,
    "IconRadar",
    ()=>IconRadar,
    "IconRocket",
    ()=>IconRocket,
    "IconRoute",
    ()=>IconRoute,
    "IconShare",
    ()=>IconShare,
    "IconShield",
    ()=>IconShield,
    "IconSwap",
    ()=>IconSwap,
    "IconTarget",
    ()=>IconTarget,
    "IconTrendingUp",
    ()=>IconTrendingUp,
    "IconTruck",
    ()=>IconTruck,
    "IconUsers",
    ()=>IconUsers,
    "IconWorkflow",
    ()=>IconWorkflow,
    "IconZap",
    ()=>IconZap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const base = (props)=>({
        width: 22,
        height: 22,
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props
    });
const IconCpu = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "7",
                y: "7",
                width: "10",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 9.5h5v5h-5z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconLayers = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l9 5-9 5-9-5 9-5z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 13l9 5 9-5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 17l9 4 9-4",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 28,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconBot = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "5",
                y: "8",
                width: "14",
                height: "11",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 8V4M9 4h6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9.5",
                cy: "13",
                r: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "14.5",
                cy: "13",
                r: "1.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 13v3M22 13v3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconRadar = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1.4"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 46,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12l6-3.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconShield = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 53,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 12l2 2 4-4"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconRoute = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "18",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 60,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "6",
                r: "2.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 18H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 59,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconLeaf = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 19c0-7 5-12 14-12 0 9-5 14-12 14-2 0-2-2-2-2z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 68,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 15c2-3 5-5 8-6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 67,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconTruck = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 7h11v8H3zM14 10h4l3 3v2h-7z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7",
                cy: "18",
                r: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 76,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "18",
                r: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconClock = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 7v5l3.5 2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 82,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconZap = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        }, void 0, false, {
            fileName: "[project]/components/ib/icons.tsx",
            lineNumber: 90,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 89,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconBlocks = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "4",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 96,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "4",
                width: "7",
                height: "7",
                rx: "1",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 97,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "13",
                width: "7",
                height: "7",
                rx: "1",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 98,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "13",
                width: "7",
                height: "7",
                rx: "1"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 99,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconCheck = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base({
            width: 20,
            height: 20,
            ...p
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 105,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 12l2.5 2.5L16 9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 104,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconLink = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 14a4 4 0 0 0 5.6 0l3-3a4 4 0 0 0-5.6-5.6l-1.5 1.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 10a4 4 0 0 0-5.6 0l-3 3a4 4 0 0 0 5.6 5.6l1.5-1.5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 113,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconInfo = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 119,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 10.5v6M12 7.5h.01"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 120,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconTarget = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 127,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "1.3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 128,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 125,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconUsers = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "9",
                cy: "8",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 134,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17",
                cy: "9",
                r: "2.4",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 136,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.5 14.2c2.5.4 4.5 2.5 4.5 5.8",
                opacity: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 137,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconPlug = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 3v5M16 3v5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 143,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "8",
                width: "12",
                height: "6",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 144,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14v7"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 142,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconPlay = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 151,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 8.5l6 3.5-6 3.5z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 152,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 150,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconQuestion = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 158,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 9.2a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .9-1 1.5v.3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 159,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 17h.01"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 157,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconRocket = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2c2.5 2 4 5 4 8.5 0 2.5-.8 4.8-2 6.5h-4c-1.2-1.7-2-4-2-6.5C8 7 9.5 4 12 2z"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 166,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 16l-2.5 4M15 16l2.5 4"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 167,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "9",
                r: "1.3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 168,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 165,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconWorkflow = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "6",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 174,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "6",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 175,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "18",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 176,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7l4 9M17 7l-4 9"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 173,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconShare = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "12",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 183,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "6",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 184,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "18",
                r: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 185,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 11l8-4M8 13l8 4"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 186,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 182,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconTrendingUp = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 17l6-6 4 4 6-8"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 192,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 7h5v5"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 193,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 191,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconGear = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3.2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 199,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 200,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 198,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconSwap = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7h11l-3-3M7 7l3 3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 206,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 17H6l3-3M17 17l-3 3"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 207,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 205,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconBriefcase = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "7",
                width: "18",
                height: "12",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 213,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 214,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12h18"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 215,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 212,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconMail = (p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...base(p),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 221,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 7l8 6 8-6"
            }, void 0, false, {
                fileName: "[project]/components/ib/icons.tsx",
                lineNumber: 222,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/icons.tsx",
        lineNumber: 220,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/components/ib/detail-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DETAILS",
    ()=>DETAILS,
    "agentSlugs",
    ()=>agentSlugs,
    "getDetail",
    ()=>getDetail,
    "useCaseSlugs",
    ()=>useCaseSlugs
]);
/* ------------------------------------------------------------ USE CASES */ const supplierDelay = {
    slug: "supplier-delay-neutralization",
    group: "use-cases",
    eyebrow: "Use Case",
    kicker: "USE CASE · 01",
    title: "Neutralize supplier delays before they hit the site",
    cy: "delays",
    lead: "A late shipment used to mean a scramble of phone calls and a slipped pour. IntelliByld catches the slip the moment it appears, and models the schedule impact often before anyone on site would have noticed.",
    metaDescription: "IntelliByld detects supplier delays the moment they appear, models the schedule impact, and autonomously resources from ranked vendors neutralizing slips before they reach the site.",
    flow: {
        title: "Delay Neutralization - live",
        caption: "Detected, analyzed, re-sourced, rerouted without waiting for a status call.",
        height: 290,
        legend: true,
        nodes: [
            {
                id: "sig",
                label: "Delay Signal",
                sub: "ETA slip",
                x: 24,
                y: 44,
                w: 156,
                kind: "physical"
            },
            {
                id: "imp",
                label: "Impact Analysis",
                sub: "critical path",
                x: 232,
                y: 44,
                w: 172,
                kind: "agent"
            },
            {
                id: "alt",
                label: "Alt Vendors",
                sub: "ranked",
                x: 436,
                y: 44,
                w: 150
            },
            {
                id: "rfq",
                label: "RFQ Sent",
                sub: "auto-dispatch",
                x: 618,
                y: 44,
                w: 158,
                kind: "agent"
            },
            {
                id: "fix",
                label: "Rerouted",
                sub: "back on schedule",
                x: 808,
                y: 44,
                w: 168,
                kind: "physical"
            },
            {
                id: "twin",
                label: "Digital Twin",
                sub: "updated",
                x: 300,
                y: 206,
                w: 420,
                h: 60,
                kind: "twin"
            }
        ],
        edges: [
            {
                from: "sig",
                to: "imp"
            },
            {
                from: "imp",
                to: "alt"
            },
            {
                from: "alt",
                to: "rfq"
            },
            {
                from: "rfq",
                to: "fix"
            },
            {
                from: "imp",
                to: "twin",
                fromSide: "bottom",
                toSide: "top",
                dashed: true,
                arrow: false,
                pulses: 1
            },
            {
                from: "rfq",
                to: "twin",
                fromSide: "bottom",
                toSide: "top",
                dashed: true,
                arrow: false,
                pulses: 1
            }
        ]
    },
    splitHead: "From three day fire-drill to three minute reroute",
    splitBody: "The cost of a delay isn't the delay: it's the hours lost discovering it, the idle crew, and the panic-priced replacement order. IntelliByld compresses all of that into an automatic loop that runs the moment an ETA moves.",
    checks: [
        {
            b: "Caught at the source.",
            rest: "A supplier's own ETA update is enough to trigger analysis no waiting for the missed delivery."
        },
        {
            b: "Priced with leverage.",
            rest: "RFQs go to ranked alternatives in parallel, so you're not negotiating from a position of desperation."
        },
        {
            b: "Crew stays productive.",
            rest: "Because the schedule re-plans around the slip, the next ready task surfaces instead of an idle day."
        }
    ],
    outcomesHead: "What changes on site",
    outcomes: [
        {
            h: "Hours, not days",
            p: "Detection-to-reroute collapses from a multi-day scramble to an automated loop measured in minutes."
        },
        {
            h: "Fewer idle crews",
            p: "Re-planning around the delay keeps people working on what's actually unblocked."
        },
        {
            h: "Better replacement pricing",
            p: "Parallel RFQs to ranked vendors mean you're choosing, not begging."
        }
    ],
    faqs: [
        {
            q: "How early can a delay be detected?",
            a: "As soon as a signal exists i.e. a supplier ETA change, a tracking update, or a missed milestone. The earlier the signal, the more room the agents have to neutralize it before it reaches the critical path."
        },
        {
            q: "Does it reorder without my approval?",
            a: "You set the guardrails. Within them, the agents can dispatch RFQs and surface ranked options automatically; awarding can require a human approval where you want one. Every step is logged."
        }
    ],
    ctaTitle: "Stop discovering delays on site",
    ctaCy: "delays"
};
const multiSite = {
    slug: "multi-site-coordination",
    group: "use-cases",
    eyebrow: "Use Case",
    kicker: "USE CASE · 02",
    title: "One control tower for every site",
    cy: "control tower",
    lead: "Running five projects means five supply chains, five sets of fires, and no single view. IntelliByld puts every site into one live control tower so materials, risk, and capacity can be balanced across the portfolio, not just within one job.",
    metaDescription: "IntelliByld coordinates multi-site construction supply chains from a single live control tower balancing materials, risk, and capacity across the whole portfolio in real time.",
    flow: {
        title: "Multi-Site Control Tower - live",
        caption: "Every site reports to one twin; the tower rebalances across the portfolio.",
        height: 320,
        legend: true,
        nodes: [
            {
                id: "s1",
                label: "Site A",
                sub: "tower block",
                x: 26,
                y: 26,
                w: 150,
                h: 56,
                kind: "physical"
            },
            {
                id: "s2",
                label: "Site B",
                sub: "podium",
                x: 26,
                y: 132,
                w: 150,
                h: 56,
                kind: "physical"
            },
            {
                id: "s3",
                label: "Site C",
                sub: "infra",
                x: 26,
                y: 238,
                w: 150,
                h: 56,
                kind: "physical"
            },
            {
                id: "twin",
                label: "Control Tower",
                sub: "portfolio twin",
                x: 410,
                y: 110,
                w: 200,
                h: 96,
                kind: "twin"
            },
            {
                id: "bal",
                label: "Rebalance",
                sub: "shift stock / crews",
                x: 812,
                y: 86,
                w: 166,
                h: 56,
                kind: "agent"
            },
            {
                id: "rep",
                label: "Portfolio View",
                sub: "one dashboard",
                x: 812,
                y: 192,
                w: 166,
                h: 56
            }
        ],
        edges: [
            {
                from: "s1",
                to: "twin",
                pulses: 1
            },
            {
                from: "s2",
                to: "twin",
                pulses: 1
            },
            {
                from: "s3",
                to: "twin",
                pulses: 1
            },
            {
                from: "twin",
                to: "bal",
                pulses: 2
            },
            {
                from: "twin",
                to: "rep",
                pulses: 1
            }
        ]
    },
    splitHead: "Balance the portfolio, not just the project",
    splitBody: "When one site is short on rebar and another is sitting on a surplus, the answer is obvious but only if someone can see both at once. A shared twin makes cross-site moves visible and actionable instead of accidental.",
    checks: [
        {
            b: "One source of truth.",
            rest: "Every site's materials, schedule, and risk live in the same model, at the same freshness."
        },
        {
            b: "Cross-site moves.",
            rest: "Surplus on one job can cover a shortfall on another before either becomes an emergency order."
        },
        {
            b: "Portfolio-level risk.",
            rest: "A supplier wobble that touches three sites is seen as one risk, not three disconnected surprises."
        }
    ],
    outcomesHead: "What changes across the portfolio",
    outcomes: [
        {
            h: "Less duplicate buying",
            p: "Shared visibility means surplus gets used, not re-ordered site by site."
        },
        {
            h: "One pane of glass",
            p: "Executives see every project's supply chain health in a single live view."
        },
        {
            h: "Coordinated response",
            p: "A shared-supplier risk triggers one coordinated plan across all affected sites."
        }
    ],
    faqs: [
        {
            q: "Do all sites need to be on the same systems?",
            a: "No. The control tower sits above whatever each site already runs and normalizes the picture. New sites are added by connecting their BOMs and channels just like the same lightweight pilot path."
        },
        {
            q: "Can teams still operate independently?",
            a: "Yes. Each site keeps its own workflow; the tower adds a portfolio layer on top for visibility and cross-site moves, without forcing every project into one process."
        }
    ],
    ctaTitle: "Give every site one control tower",
    ctaCy: "control tower"
};
const embodiedCarbon = {
    slug: "embodied-carbon",
    group: "use-cases",
    eyebrow: "Use Case",
    kicker: "USE CASE · 03",
    title: "Embodied carbon from real delivery data",
    cy: "real delivery data",
    lead: "Estimate-based carbon never survives an audit, because it never reflects what actually arrived. IntelliByld builds the embodied-carbon ledger from real deliveries, every movement logged with its footprint, every report generated automatically.",
    metaDescription: "IntelliByld tracks embodied carbon from actual material deliveries, not estimates, logging each movement's footprint and generating audit-ready reports automatically.",
    flow: {
        title: "Carbon Ledger - live",
        caption: "Each delivery is weighed against emission factors and logged automatically.",
        height: 290,
        legend: true,
        nodes: [
            {
                id: "del",
                label: "Material Delivery",
                sub: "actual quantity",
                x: 24,
                y: 52,
                w: 178,
                kind: "physical"
            },
            {
                id: "eng",
                label: "Carbon Engine",
                sub: "EC per item",
                x: 262,
                y: 52,
                w: 168,
                kind: "agent"
            },
            {
                id: "led",
                label: "Carbon Ledger",
                sub: "kgCO₂e",
                x: 492,
                y: 52,
                w: 168
            },
            {
                id: "rep",
                label: "Report",
                sub: "auto-generated",
                x: 722,
                y: 52,
                w: 168
            },
            {
                id: "epd",
                label: "EPD / EC3 Data",
                sub: "factors",
                x: 262,
                y: 206,
                w: 168,
                kind: "source"
            }
        ],
        edges: [
            {
                from: "del",
                to: "eng"
            },
            {
                from: "eng",
                to: "led"
            },
            {
                from: "led",
                to: "rep"
            },
            {
                from: "epd",
                to: "eng",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            }
        ]
    },
    splitHead: "A footprint you can actually defend",
    splitBody: "Because the ledger is built from delivery data, it reflects substitutions, reorders, and what truly showed up. That's the difference between a number you present nervously and one that holds up to an auditor or a client.",
    checks: [
        {
            b: "Audit ready.",
            rest: "Every kilogram of CO₂e traces back to a specific logged delivery."
        },
        {
            b: "Live, not annual.",
            rest: "Watch the footprint accumulate as you build, with time to course-correct."
        },
        {
            b: "Zero double entry.",
            rest: "The same delivery record drives logistics, schedule, and carbon at once."
        }
    ],
    outcomesHead: "What changes for reporting",
    outcomes: [
        {
            h: "Defensible numbers",
            p: "Actual delivery data stands up to scrutiny in a way estimates never do."
        },
        {
            h: "Effortless reports",
            p: "Reporting aligned to green building requirements generates on its own."
        },
        {
            h: "In-flight visibility",
            p: "See the carbon impact of a substitution at decision time, not year-end."
        }
    ],
    faqs: [
        {
            q: "Where do the emission factors come from?",
            a: "From EPD / EC3-style datasets, matched to each delivered material and multiplied by actual quantity. The factor sources are configurable, so the same engine works across jurisdictions and standards."
        },
        {
            q: "Is this extra work for the team?",
            a: "No. carbon is a field on the deliveries the platform already tracks for logistics. Once deliveries flow through the twin, the ledger and reports populate themselves."
        }
    ],
    ctaTitle: "Make carbon a measurement, not a guess",
    ctaCy: "measurement"
};
/* ------------------------------------------------------------ AGENTS (teams) */ const procurement = {
    slug: "procurement",
    group: "agents",
    eyebrow: "Agentic AI · Team",
    kicker: "TEAM · SOURCING",
    title: "The Procurement team",
    cy: "Procurement",
    lead: "Five agents that turn a material requirement into a confirmed supplier drafting RFQs, evaluating bids, scoring supplier risk, and negotiating terms. The sourcing team runs end-to-end and surfaces a recommended award for your sign-off.",
    intro2: "Rather than one monolithic AI, a supervising orchestrator coordinates the team and owns every human-in-the-loop checkpoint, so the agents do the analytical heavy lifting while procurement managers keep authority over each commercial decision.",
    metaDescription: "IntelliByld's Procurement team (Orchestrator, RFQ, Bid Evaluation, Supplier Intelligence and Negotiation agents) runs construction sourcing end-to-end, from BoQ to a recommended award, with humans in the loop.",
    flow: {
        title: "Sourcing - RFQ to award",
        caption: "The orchestrator routes work; the award is always a human sign-off.",
        height: 318,
        legend: true,
        nodes: [
            {
                id: "req",
                label: "Requirement",
                sub: "BoQ · specs",
                x: 24,
                y: 46,
                w: 150,
                kind: "source"
            },
            {
                id: "rfq",
                label: "RFQ Agent",
                sub: "dispatch",
                x: 210,
                y: 46,
                w: 158,
                kind: "agent"
            },
            {
                id: "bid",
                label: "Bid Evaluation",
                sub: "normalise · score",
                x: 404,
                y: 46,
                w: 172,
                kind: "agent"
            },
            {
                id: "neg",
                label: "Negotiation",
                sub: "price · terms",
                x: 612,
                y: 46,
                w: 152,
                kind: "agent"
            },
            {
                id: "award",
                label: "Award",
                sub: "human sign-off",
                x: 800,
                y: 46,
                w: 176,
                h: 60,
                kind: "twin"
            },
            {
                id: "intel",
                label: "Supplier Intelligence",
                sub: "ESG · finance · history",
                x: 404,
                y: 158,
                w: 210,
                kind: "agent"
            },
            {
                id: "orch",
                label: "Procurement Orchestrator",
                sub: "routes work · approval gates · audit trail",
                x: 24,
                y: 250,
                w: 952,
                h: 56,
                kind: "twin"
            }
        ],
        edges: [
            {
                from: "req",
                to: "rfq"
            },
            {
                from: "rfq",
                to: "bid"
            },
            {
                from: "bid",
                to: "neg"
            },
            {
                from: "neg",
                to: "award"
            },
            {
                from: "intel",
                to: "bid",
                fromSide: "top",
                toSide: "bottom",
                pulses: 1
            },
            {
                from: "orch",
                to: "req",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            },
            {
                from: "orch",
                to: "award",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            }
        ]
    },
    agentsHead: "Five agents, one sourcing team",
    agents: [
        {
            ref: "00",
            name: "Procurement Orchestrator",
            tag: "Orchestrator · both phases",
            role: "The conductor of the team: owns workflow state, routes tasks, and manages every approval gate.",
            duties: [
                "Maintains the master state of each procurement case",
                "Routes tasks to the right specialist at each step",
                "Surfaces decisions to managers at defined gates",
                "Keeps a full audit trail of actions and approvals"
            ]
        },
        {
            ref: "01",
            name: "RFQ Agent",
            tag: "Phase 1",
            role: "Owns the outbound RFQ process, from bill of materials to structured quotations.",
            duties: [
                "Drafts RFQs from the BoQ and project specifications",
                "Shortlists suppliers by category, geography and history",
                "Dispatches RFQs and handles clarifications inline",
                "Parses inbound quotations for evaluation"
            ]
        },
        {
            ref: "02",
            name: "Bid Evaluation Agent",
            tag: "Phase 1",
            role: "Compares quotations head-to-head on a common baseline.",
            duties: [
                "Normalises bids for currency, units and scope",
                "Scores landed price, technical compliance, lead time, warranty",
                "Flags non-conformities and unusual variances",
                "Combines with the supplier score for a final ranking"
            ]
        },
        {
            ref: "03",
            name: "Supplier Intelligence Agent",
            tag: "Phase 1",
            role: "Builds a 360° view of each bidder beyond the quotation.",
            duties: [
                "Analyses ESG and sustainability disclosures",
                "Reviews financial health and credit signals",
                "Mines historical performance from past projects",
                "Checks compliance, certifications and sanction flags"
            ]
        },
        {
            ref: "04",
            name: "Negotiation Agent",
            tag: "Phase 1",
            role: "Runs the commercial negotiation within boundaries the team sets.",
            duties: [
                "Engages suppliers on price, terms, lead time and warranty",
                "Operates strictly within negotiation guardrails",
                "Logs every offer and counter-offer",
                "Drafts revised terms for human approval"
            ]
        }
    ],
    workflowHead: "From requirement to recommended award",
    workflow: [
        {
            n: "01",
            title: "Requirement intake",
            desc: "The orchestrator opens a procurement case from a new material requirement and hands it to the RFQ Agent."
        },
        {
            n: "02",
            title: "RFQ generation & dispatch",
            desc: "RFQs are drafted from the BoQ, suppliers shortlisted, and once the shortlist is confirmed, dispatched.",
            gate: true
        },
        {
            n: "03",
            title: "Quotation intake",
            desc: "Incoming quotations are parsed and structured; bid normalisation begins in parallel."
        },
        {
            n: "04",
            title: "Evaluation & scoring",
            desc: "Commercial and technical scores combine with the ESG, financial and performance scorecard into one ranking."
        },
        {
            n: "05",
            title: "Team review",
            desc: "The team reviews the ranked recommendation and, if worth pushing, sets a negotiation mandate.",
            gate: true
        },
        {
            n: "06",
            title: "Award recommendation",
            desc: "Negotiated terms come back for the final award decision, always a human sign-off.",
            gate: true
        }
    ],
    gatesHead: "Human in the loop",
    gatesNote: "Outside these gates the agents work autonomously, drafting, parsing, scoring and clarifying. Inside them, authority stays with your team.",
    gates: [
        "RFQ dispatch: the supplier shortlist is confirmed before RFQs go out.",
        "Bid award recommendation: the team reviews the ranking before any award.",
        "Negotiation mandate: the team sets the boundaries; the agent works within them.",
        "Final award & PO issuance: always a human decision, never automatic."
    ],
    outcomesHead: "What the sourcing team delivers",
    outcomes: [
        {
            h: "Faster sourcing cycles",
            p: "RFQs go out the same day; quotations are evaluated the moment they arrive."
        },
        {
            h: "Better awards",
            p: "Decisions weigh ESG, financial health and execution history, not just price."
        },
        {
            h: "Full traceability",
            p: "Every recommendation and negotiation move is logged and auditable."
        }
    ],
    faqs: [
        {
            q: "Does it replace my procurement team?",
            a: "No. It removes the busywork. Buyers set strategy, mandates and approvals; the agents handle RFQ drafting, parsing, scoring and negotiation logistics, so the team spends time on judgement, not data entry."
        },
        {
            q: "How are suppliers scored?",
            a: "On a configurable blend of commercial terms (price, lead time, warranty) and a supplier scorecard covering ESG, financial health and past performance. You control the weighting, and every score is explainable."
        },
        {
            q: "Where do pilots begin?",
            a: "From your BoMs. BIM-native ingestion comes later; sourcing starts from the bill of materials and project specs you already have."
        }
    ],
    ctaTitle: "Turn requirements into confirmed suppliers",
    ctaCy: "confirmed suppliers"
};
const logistics = {
    slug: "logistics",
    group: "agents",
    eyebrow: "Agentic AI · Team",
    kicker: "TEAM · LOGISTICS",
    title: "The Logistics team",
    cy: "Logistics",
    lead: "Three agents that turn a confirmed supplier into a received delivery by confirming POs, watching for disruption, tracking shipments, and aligning arrivals with site readiness. Phase 2 picks up where sourcing ends and runs to goods receipt.",
    intro2: "The Logistics team shares the Procurement Orchestrator, so the handoff from award to execution carries full context, with no dropped balls between sourcing and the site.",
    metaDescription: "IntelliByld's Logistics team (Order Coordination, Disruption & Risk and Logistics & Site Sync agents) runs construction order execution from PO confirmation to goods receipt, syncing deliveries with site readiness.",
    flow: {
        title: "Execution - PO to goods receipt",
        caption: "Coordinate, watch for disruption, then sync the last mile.",
        height: 318,
        legend: true,
        nodes: [
            {
                id: "po",
                label: "Confirmed PO",
                sub: "from sourcing",
                x: 24,
                y: 46,
                w: 152,
                kind: "source"
            },
            {
                id: "oca",
                label: "Order Coordination",
                sub: "status ledger",
                x: 212,
                y: 46,
                w: 182,
                kind: "agent"
            },
            {
                id: "log",
                label: "Logistics & Site Sync",
                sub: "track · align",
                x: 430,
                y: 46,
                w: 192,
                kind: "agent"
            },
            {
                id: "site",
                label: "Site Delivery",
                sub: "in sync",
                x: 658,
                y: 46,
                w: 148,
                kind: "physical"
            },
            {
                id: "grn",
                label: "Goods Receipt",
                sub: "closed",
                x: 842,
                y: 46,
                w: 134,
                kind: "physical"
            },
            {
                id: "disr",
                label: "Disruption & Risk",
                sub: "monitors · forecasts",
                x: 300,
                y: 158,
                w: 196,
                kind: "agent"
            },
            {
                id: "orch",
                label: "Procurement Orchestrator",
                sub: "shared with sourcing · approval gates",
                x: 24,
                y: 250,
                w: 952,
                h: 56,
                kind: "twin"
            }
        ],
        edges: [
            {
                from: "po",
                to: "oca"
            },
            {
                from: "oca",
                to: "log"
            },
            {
                from: "log",
                to: "site"
            },
            {
                from: "site",
                to: "grn"
            },
            {
                from: "oca",
                to: "disr",
                fromSide: "bottom",
                toSide: "top",
                pulses: 1
            },
            {
                from: "disr",
                to: "log",
                fromSide: "right",
                toSide: "bottom",
                pulses: 1
            },
            {
                from: "orch",
                to: "po",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            },
            {
                from: "orch",
                to: "grn",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            }
        ]
    },
    agentsHead: "Three agents for execution & site logistics",
    agents: [
        {
            ref: "05",
            name: "Order Coordination Agent",
            tag: "Phase 2",
            role: "The day-to-day point of contact for every confirmed order.",
            duties: [
                "Confirms POs and validates delivery schedules",
                "Runs scheduled status check-ins with suppliers",
                "Captures milestones: production, inspection, dispatch",
                "Maintains a live order ledger and raises early warnings"
            ]
        },
        {
            ref: "06",
            name: "Disruption & Risk Agent",
            tag: "Phase 2",
            role: "The early-warning system for the supply chain.",
            duties: [
                "Monitors weather, port congestion, geopolitics, strikes",
                "Detects missed milestones, quality issues, supplier silence",
                "Predicts downstream impact on critical-path activities",
                "Recommends mitigation and escalates high-impact events"
            ]
        },
        {
            ref: "07",
            name: "Logistics & Site Sync Agent",
            tag: "Phase 2",
            role: "The last-mile agent that lands materials when the site is ready.",
            duties: [
                "Coordinates carriers for pickup, in-transit and ETA",
                "Tracks shipments across road, sea, rail and air",
                "Aligns deliveries with manpower and equipment",
                "Closes the loop with goods-receipt confirmation"
            ]
        }
    ],
    workflowHead: "From PO to goods receipt",
    workflow: [
        {
            n: "01",
            title: "Award & PO issuance",
            desc: "On approval, the Order Coordination Agent confirms the PO, aligns the schedule, and begins supplier check-ins."
        },
        {
            n: "02",
            title: "Order tracking & risk monitoring",
            desc: "Through production and dispatch, the order ledger stays live while the Disruption Agent watches for adverse signals."
        },
        {
            n: "03",
            title: "Disruption response",
            desc: "High-impact events are forecast against the critical path and surfaced with a proposed mitigation plan.",
            gate: true
        },
        {
            n: "04",
            title: "Shipment & site sync",
            desc: "On dispatch, shipments are tracked across modes and arrivals are aligned with site readiness."
        },
        {
            n: "05",
            title: "Receipt & closure",
            desc: "On arrival, receipt is confirmed against the PO, the case is closed, and the experience feeds supplier history."
        }
    ],
    gatesHead: "Human in the loop",
    gatesNote: "Routine follow-ups, tracking and exception handling run autonomously. The decisions that carry schedule or commercial weight are surfaced for approval.",
    gates: [
        "Disruption response: high-impact mitigation actions are surfaced before they run.",
        "Schedule re-sequencing: material changes to the delivery plan are confirmed.",
        "Goods receipt & exceptions: discrepancies are escalated, not silently absorbed."
    ],
    outcomesHead: "What the logistics team delivers",
    outcomes: [
        {
            h: "Early warning",
            p: "Disruptions are detected and forecast before they hit the critical path."
        },
        {
            h: "Site efficiency",
            p: "Deliveries arrive in sync with manpower and equipment, cutting idle time."
        },
        {
            h: "Closed-loop receipt",
            p: "Goods receipt is confirmed against the PO, with exceptions handled, not lost."
        }
    ],
    faqs: [
        {
            q: "How does it catch disruptions early?",
            a: "It watches both external signals (weather, port congestion, strikes) and internal ones (missed milestones, supplier silence), then forecasts the impact on your critical path before the delay reaches the gate."
        },
        {
            q: "Does it share context with sourcing?",
            a: "Yes. It runs on the same Procurement Orchestrator, so award terms, supplier commitments and schedule context carry straight into execution without re-keying."
        }
    ],
    ctaTitle: "Turn confirmed orders into on-time deliveries",
    ctaCy: "on-time deliveries"
};
const scope3 = {
    slug: "scope3",
    group: "agents",
    eyebrow: "Agentic AI · Team",
    kicker: "TEAM · SCOPE 3",
    title: "The Scope 3 team",
    cy: "Scope 3",
    lead: "Six agents that quantify, disclose and reduce value-chain emissions by mapping every transaction to a GHG Protocol category, calculating CO₂e at the right data-quality tier, engaging suppliers for primary data, and generating audit-ready disclosures. Carbon becomes a real input to procurement, not a number reported six months late.",
    intro2: "The Scope 3 agents share data with the procurement team, drawing on the same RFQ, supplier and shipment records, so emissions are calculated the moment an order is placed, with no separate carbon data entry.",
    metaDescription: "IntelliByld's Scope 3 team (Orchestrator, Category Mapping, Emissions Calculation, Supplier Data Engagement, Disclosure & Reporting and Reduction Strategy agents) quantifies, discloses and reduces construction value-chain emissions, integrated with procurement.",
    flow: {
        title: "Carbon - PO to disclosure",
        caption: "Map, calculate, collect primary data, then disclose.",
        height: 318,
        legend: true,
        nodes: [
            {
                id: "po",
                label: "Confirmed PO",
                sub: "from procurement",
                x: 24,
                y: 46,
                w: 158,
                kind: "source"
            },
            {
                id: "cat",
                label: "Category Mapping",
                sub: "GHG cat 1–15",
                x: 218,
                y: 46,
                w: 176,
                kind: "agent"
            },
            {
                id: "calc",
                label: "Emissions Calc",
                sub: "CO₂e · tier",
                x: 430,
                y: 46,
                w: 166,
                kind: "agent"
            },
            {
                id: "led",
                label: "Carbon Ledger",
                sub: "by line",
                x: 632,
                y: 46,
                w: 150
            },
            {
                id: "disc",
                label: "Disclosure",
                sub: "CSRD · CDP · ISSB",
                x: 818,
                y: 46,
                w: 158,
                kind: "agent"
            },
            {
                id: "sup",
                label: "Supplier Data",
                sub: "EPDs · primary",
                x: 430,
                y: 158,
                w: 166,
                kind: "agent"
            },
            {
                id: "red",
                label: "Reduction Strategy",
                sub: "hotspots · alternatives",
                x: 618,
                y: 158,
                w: 182,
                kind: "agent"
            },
            {
                id: "orch",
                label: "Scope 3 Orchestrator",
                sub: "carbon budgets · disclosure sign-off",
                x: 24,
                y: 250,
                w: 952,
                h: 56,
                kind: "twin"
            }
        ],
        edges: [
            {
                from: "po",
                to: "cat"
            },
            {
                from: "cat",
                to: "calc"
            },
            {
                from: "calc",
                to: "led"
            },
            {
                from: "led",
                to: "disc"
            },
            {
                from: "sup",
                to: "calc",
                fromSide: "top",
                toSide: "bottom",
                pulses: 1
            },
            {
                from: "led",
                to: "red",
                fromSide: "bottom",
                toSide: "top",
                pulses: 1
            },
            {
                from: "orch",
                to: "sup",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            },
            {
                from: "orch",
                to: "red",
                fromSide: "top",
                toSide: "bottom",
                dashed: true,
                arrow: false,
                pulses: 1
            }
        ]
    },
    agentsHead: "Six agents across the Scope 3 lifecycle",
    agents: [
        {
            ref: "00",
            name: "Scope 3 Orchestrator",
            tag: "Orchestrator",
            role: "Manages the lifecycle of every emissions case and routes work between specialists.",
            duties: [
                "Maintains state across the emissions lifecycle",
                "Tracks emissions against project and corporate budgets",
                "Manages approvals for disclosures and reductions",
                "Keeps one audit trail of every factor and figure"
            ]
        },
        {
            ref: "01",
            name: "Category Mapping Agent",
            tag: "Map",
            role: "Classifies every transaction into the correct GHG Protocol category.",
            duties: [
                "Maps line items to the 15 Scope 3 categories",
                "Handles leased assets, mixed-scope, capex vs opex",
                "Aligns with CSRD, SEC and ISSB requirements",
                "Flags ambiguous items for review, never guesses"
            ]
        },
        {
            ref: "02",
            name: "Emissions Calculation Agent",
            tag: "Calculate",
            role: "Applies the right emission factor at the right data-quality tier.",
            duties: [
                "Uses the GHG hierarchy: supplier-specific → average → spend",
                "Sources factors from DEFRA, EPA, ecoinvent, EXIOBASE",
                "Adjusts for geography, material grade and process",
                "Records the data-quality tier and uncertainty range"
            ]
        },
        {
            ref: "03",
            name: "Supplier Data Engagement Agent",
            tag: "Collect",
            role: "Collects primary data from suppliers and upgrades quality over time.",
            duties: [
                "Requests emissions data alongside RFQs and POs",
                "Collects EPDs, product carbon footprints, ISO 14067",
                "Validates supplier data against benchmarks",
                "Tracks each supplier's data maturity"
            ]
        },
        {
            ref: "04",
            name: "Disclosure & Reporting Agent",
            tag: "Report",
            role: "Turns line-by-line data into the reports you actually file.",
            duties: [
                "Produces CSRD ESRS E1 disclosures by category",
                "Generates GHG Protocol inventory reports",
                "Prepares CDP and ISSB IFRS S2 submissions",
                "Builds audit packs with full lineage to source"
            ]
        },
        {
            ref: "05",
            name: "Reduction Strategy Agent",
            tag: "Reduce",
            role: "Surfaces the biggest reductions at the moment of decision.",
            duties: [
                "Identifies hotspot materials, suppliers and routes",
                "Models material, supplier and transport switches",
                "Recommends low-carbon alternatives during RFQ evaluation",
                "Tracks commitments against science-based targets"
            ]
        }
    ],
    workflowHead: "From purchase order to disclosure",
    workflow: [
        {
            n: "01",
            title: "Transaction capture",
            desc: "A confirmed PO opens an emissions case; the order is handed to category mapping."
        },
        {
            n: "02",
            title: "Category mapping",
            desc: "The order is classified (e.g. Scope 3 Category 1, purchased goods) and passed to calculation."
        },
        {
            n: "03",
            title: "Initial calculation",
            desc: "A regional average factor produces an initial CO₂e value, tagged tier 3 (industry average)."
        },
        {
            n: "04",
            title: "Supplier engagement & refinement",
            desc: "The supplier's EPD replaces the average factor, upgrading the figure to tier 1; the variance is logged."
        },
        {
            n: "05",
            title: "Transport & reduction",
            desc: "Shipment data adds Category 4 transport emissions; a low-carbon alternative is surfaced for the next RFQ."
        },
        {
            n: "06",
            title: "Disclosure & audit",
            desc: "At reporting time the ledger flows into CSRD, CDP or ISSB templates, with every figure tracing back to source.",
            gate: true
        }
    ],
    gatesHead: "Human in the loop",
    gatesNote: "The agents ingest, calculate, chase data and draft disclosures autonomously. The decisions that carry regulatory weight stay with the sustainability and finance teams.",
    gates: [
        "Categorisation exceptions: ambiguous mappings are escalated, not guessed.",
        "Emission-factor changes: material updates to the factor library need approval.",
        "Disclosure sign-off: every regulatory submission is reviewed before release.",
        "Reduction commitments: material targets and supplier switches go to the team."
    ],
    outcomesHead: "What the Scope 3 team delivers",
    outcomes: [
        {
            h: "Disclosure-ready by default",
            p: "CSRD, GHG Protocol, CDP and ISSB reports generate from one ledger."
        },
        {
            h: "Carbon at the point of decision",
            p: "Procurement sees CO₂e during bid evaluation, not after the award."
        },
        {
            h: "Audit-ready traceability",
            p: "Every reported tonne traces back to a transaction, a factor and an approver."
        }
    ],
    faqs: [
        {
            q: "Does carbon tracking mean extra data entry?",
            a: "No. The Scope 3 agents draw on the same RFQ, PO and shipment records the procurement agents already produce, so emissions are quantified automatically the moment an order is placed."
        },
        {
            q: "Which frameworks are supported?",
            a: "CSRD ESRS E1, the GHG Protocol, CDP and ISSB IFRS S2, all generated from the same underlying ledger, so there's no recalculation between frameworks."
        },
        {
            q: "How does data quality improve over time?",
            a: "Spend-based and average factors are systematically replaced with primary supplier data (EPDs and verified product carbon footprints), moving figures from tier 3 toward tier 1, with every change logged."
        }
    ],
    ctaTitle: "Know your footprint at line-item resolution",
    ctaCy: "line-item resolution"
};
const DETAILS = [
    supplierDelay,
    multiSite,
    embodiedCarbon,
    procurement,
    logistics,
    scope3
];
const useCaseSlugs = DETAILS.filter((d)=>d.group === "use-cases").map((d)=>d.slug);
const agentSlugs = DETAILS.filter((d)=>d.group === "agents").map((d)=>d.slug);
function getDetail(group, slug) {
    return DETAILS.find((d)=>d.group === group && d.slug === slug);
}
}),
"[project]/components/ib/detail-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$flowchart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ib/flowchart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ib/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ib/detail-data.ts [app-rsc] (ecmascript)");
;
;
;
;
const OUT_ICONS = [
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconZap"], {}, "z", false, {
        fileName: "[project]/components/ib/detail-page.tsx",
        lineNumber: 5,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconShield"], {}, "s", false, {
        fileName: "[project]/components/ib/detail-page.tsx",
        lineNumber: 5,
        columnNumber: 41
    }, ("TURBOPACK compile-time value", void 0)),
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconRoute"], {}, "r", false, {
        fileName: "[project]/components/ib/detail-page.tsx",
        lineNumber: 5,
        columnNumber: 65
    }, ("TURBOPACK compile-time value", void 0))
];
function highlight(title, cy) {
    const i = title.indexOf(cy);
    if (i < 0) return title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            title.slice(0, i),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cy",
                children: cy
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            title.slice(i + cy.length)
        ]
    }, void 0, true);
}
function DetailPage({ d }) {
    const siblings = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DETAILS"].filter((x)=>x.group === d.group && x.slug !== d.slug);
    const groupHref = d.group === "agents" ? "/agents" : "/use-cases";
    const isTeam = !!d.agents;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-phero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ib-grid-bg"
                    }, void 0, false, {
                        fileName: "[project]/components/ib/detail-page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ib-wrap",
                        style: {
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ib-eyebrow",
                                children: [
                                    d.eyebrow === "Use Case" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconBriefcase"], {}, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 41
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconBot"], {}, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 61
                                    }, this),
                                    " ",
                                    d.eyebrow
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: highlight(d.title, d.cy)
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: d.lead
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            d.intro2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "1.1rem",
                                    color: "var(--ib-text-muted)",
                                    fontSize: "1rem",
                                    maxWidth: "660px"
                                },
                                children: d.intro2
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 34,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/detail-page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconGear"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        " How it runs"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: d.flow.title.replace(/ [-—].*/, "")
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-reveal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$flowchart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Flowchart"], {
                                nodes: d.flow.nodes,
                                edges: d.flow.edges,
                                height: d.flow.height,
                                title: d.flow.title,
                                caption: d.flow.caption,
                                legend: d.flow.legend
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            d.agents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconUsers"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        " The team"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: d.agentsHead
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-roster",
                            children: d.agents.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ib-agent ib-reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ref",
                                                    children: a.ref
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: a.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 21
                                                }, this),
                                                a.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "atag",
                                                    children: a.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "role",
                                            children: a.role
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 71,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            children: a.duties.map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: x
                                                }, i, false, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, a.ref, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            d.workflow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconRoute"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        " End to end"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: d.workflowHead
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-flowsteps ib-reveal",
                            children: d.workflow.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ib-step",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sn",
                                            children: s.n
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    children: [
                                                        s.title,
                                                        s.gate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ib-gate-pill",
                                                            children: "human gate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ib/detail-page.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: s.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ib/detail-page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.n, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this),
            d.gates && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconShield"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        " Authority stays human"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: d.gatesHead
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-gates ib-reveal",
                            children: d.gates.map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ib-gate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconCheck"], {
                                            width: 18,
                                            height: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: g
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        d.gatesNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "ib-gatenote ib-reveal",
                            children: d.gatesNote
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 130,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            d.splitHead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ib-split",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ib-reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ib-eyebrow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconSwap"], {}, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            " The shift"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: d.splitHead
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: d.splitBody
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "ib-checks",
                                        children: d.checks?.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconCheck"], {}, void 0, false, {
                                                        fileName: "[project]/components/ib/detail-page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: c.b
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            c.rest
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ib/detail-page.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/pilot",
                                        className: "ib-btn ib-btn-primary",
                                        style: {
                                            marginTop: "1.8rem"
                                        },
                                        children: [
                                            "Run it on a live project ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arw",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 44
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ib-cards ib-reveal",
                                style: {
                                    transitionDelay: "100ms"
                                },
                                children: d.outcomes.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ib-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ib-ic",
                                                children: OUT_ICONS[i % OUT_ICONS.length]
                                            }, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: o.h
                                            }, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: o.p
                                            }, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/detail-page.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            !d.splitHead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head center ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconTrendingUp"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        " Outcomes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: d.outcomesHead
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-cards c3",
                            children: d.outcomes.map((o, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ib-card ib-reveal",
                                    style: {
                                        transitionDelay: `${i * 70}ms`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ib-ic",
                                            children: OUT_ICONS[i % OUT_ICONS.length]
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: o.h
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: o.p
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 177,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-sec" + (isTeam ? " alt" : ""),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ib-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-head ib-reveal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-eyebrow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconQuestion"], {}, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        " FAQs"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: isTeam ? "Questions, answered" : `${d.outcomesHead}, answered`
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ib-faq ib-reveal",
                            children: d.faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    open: i === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            children: f.q
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: f.a
                                        }, void 0, false, {
                                            fileName: "[project]/components/ib/detail-page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "3rem",
                                display: "flex",
                                gap: ".8rem",
                                flexWrap: "wrap",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ib-strip-label",
                                    style: {
                                        marginRight: ".4rem"
                                    },
                                    children: isTeam ? "Other teams" : "More use cases"
                                }, void 0, false, {
                                    fileName: "[project]/components/ib/detail-page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                siblings.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `${groupHref}/${s.slug}`,
                                        className: "ib-btn ib-btn-ghost",
                                        style: {
                                            padding: ".55em 1.1em",
                                            fontSize: ".85rem"
                                        },
                                        children: s.title.replace("The ", "").replace(" team", "")
                                    }, s.slug, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ib/detail-page.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ib/detail-page.tsx",
                    lineNumber: 199,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "ib-cta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ib-cta-bg"
                    }, void 0, false, {
                        fileName: "[project]/components/ib/detail-page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ib-wrap ib-cta-inner ib-reveal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: highlight(d.ctaTitle, d.ctaCy)
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Connect one site and see it run in your own data within three weeks."
                            }, void 0, false, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ib-cta-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/pilot",
                                        className: "ib-btn ib-btn-primary",
                                        children: [
                                            "Join Pilot ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "arw",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ib/detail-page.tsx",
                                                lineNumber: 235,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/contact-us",
                                        className: "ib-btn ib-btn-ghost",
                                        children: "Talk to us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ib/detail-page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ib/detail-page.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ib/detail-page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ib/detail-page.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ib/detail-page.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/agents/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Agent,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ib/detail-page.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ib/detail-data.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["agentSlugs"].map((slug)=>({
            slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDetail"])("agents", slug);
    if (!d) return {};
    return {
        title: d.title,
        description: d.metaDescription
    };
}
async function Agent({ params }) {
    const { slug } = await params;
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDetail"])("agents", slug);
    if (!d) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ib$2f$detail$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        d: d
    }, void 0, false, {
        fileName: "[project]/app/agents/[slug]/page.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/agents/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/agents/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1_ug4no._.js.map
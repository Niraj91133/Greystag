(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-client] (ecmascript)"); // Using next/navigation for router in app directory
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function Header({ variant = 'home', backLink, hideBack = false }) {
    _s();
    const { cartCount, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { user, openLogin, openUserMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (backLink) {
            router.push(backLink);
        } else {
            router.back();
        }
    };
    // ... rest of render ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "unified-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action left",
                children: (variant === 'pdp' || variant === 'plp') && !hideBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "header-back-btn",
                    "aria-label": "Go Back",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "19",
                                y1: "12",
                                x2: "5",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 19 5 12 12 5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                    lineNumber: 25,
                    columnNumber: 74
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 2,
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "header-brand",
                    children: "THE GREY STAG"
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action right",
                style: {
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: user ? openUserMenu : openLogin,
                        className: "header-cart-btn",
                        "aria-label": "User Account",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 44,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "7",
                                    r: "4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 45,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                            lineNumber: 43,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>user ? router.push('/wishlist') : openLogin(),
                        className: "header-cart-btn",
                        "aria-label": "Favorites",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "7",
                                    y: "9",
                                    width: "10",
                                    height: "11",
                                    rx: "2",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 52,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "10",
                                    y: "4",
                                    width: "4",
                                    height: "5",
                                    rx: "1",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 53,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "14",
                                    r: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 54,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                            lineNumber: 51,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCart,
                        className: "header-cart-btn",
                        "aria-label": "Open Cart",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 6H21"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 61,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 62,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 59,
                                columnNumber: 17
                            }, this),
                            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cart-badge",
                                children: cartCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 64,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
        lineNumber: 21,
        columnNumber: 13
    }, this);
}
_s(Header, "RH2EDfy+X9X0X8H+MAY7SIiNTE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Hero() {
    _s();
    const { hero } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "Hero.useEffect": (entries)=>{
                    entries.forEach({
                        "Hero.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                const elements = entry.target.querySelectorAll('.fade-in-up');
                                elements.forEach({
                                    "Hero.useEffect": (el)=>{
                                        el.style.animation = 'none';
                                        el.offsetHeight; /* trigger reflow */ 
                                        el.style.animation = '';
                                        el.classList.add('animate-active');
                                    }
                                }["Hero.useEffect"]);
                            }
                        }
                    }["Hero.useEffect"]);
                }
            }["Hero.useEffect"], {
                threshold: 0.1
            });
            if (contentRef.current) {
                observer.observe(contentRef.current);
            }
            return ({
                "Hero.useEffect": ()=>observer.disconnect()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Helper to render newlines in title
    const renderTitle = ()=>{
        return {
            __html: hero.title.replace(/\n/g, '<br />')
        };
    };
    // Force display of Hero, ignoring isEnabled flag
    // if (!hero.isEnabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "hero-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-bg",
                children: [
                    hero.mediaType === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: hero.mediaUrl,
                        muted: true,
                        loop: true,
                        autoPlay: true,
                        playsInline: true,
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 35,
                        columnNumber: 44
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: hero.mediaUrl || "/assets/hero_bg.png",
                        alt: hero.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 35,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-overlay"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-content",
                ref: contentRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "fade-in-up",
                        dangerouslySetInnerHTML: renderTitle()
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-subtext fade-in-up delay-1",
                        children: hero.subtitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-actions fade-in-up delay-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: hero.ctaLink || "/category/all",
                                className: "btn-primary",
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textDecoration: 'none'
                                },
                                children: hero.ctaText
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#promo",
                                className: "btn-text",
                                children: "Watch the Craft"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/HeroSection.jsx",
        lineNumber: 33,
        columnNumber: 13
    }, this);
}
_s(Hero, "o+CDDSzftVG3NirngoBJ1OwM80I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryMosaic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CategoryMosaic() {
    _s();
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const enabledCategories = categories; // Show all to ensure visibility
    if (enabledCategories.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "category-mosaic",
        children: enabledCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/category/${cat.name.toLowerCase()}`,
                className: "mosaic-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: cat.imageUrl || "/assets/product_1.png",
                        className: "mosaic-img",
                        alt: cat.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mosaic-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mosaic-title",
                            children: cat.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
                            lineNumber: 14,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, this)
                ]
            }, cat.id, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
                lineNumber: 11,
                columnNumber: 40
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
        lineNumber: 10,
        columnNumber: 13
    }, this);
}
_s(CategoryMosaic, "s7NyKpbe1U/LjypiuR6fsQSuwXU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = CategoryMosaic;
var _c;
__turbopack_context__.k.register(_c, "CategoryMosaic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Promo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Promo() {
    _s();
    const { videoSection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "promo-section",
        id: "promo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "promo-bg",
                children: videoSection.content.endsWith('.mp4') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    src: videoSection.content,
                    muted: true,
                    loop: true,
                    autoPlay: true,
                    playsInline: true,
                    style: {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                    lineNumber: 9,
                    columnNumber: 55
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/assets/atelier.png",
                    alt: videoSection.title
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                    lineNumber: 9,
                    columnNumber: 190
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                lineNumber: 7,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "promo-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "promo-tag",
                        children: "Featured"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "promo-title serif",
                        children: videoSection.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "promo-desc",
                        children: "Discover the craftsmanship behind our collection."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this),
                    videoSection.content.includes('instagram') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: videoSection.content,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "btn-primary",
                        style: {
                            display: 'inline-flex',
                            textDecoration: 'none'
                        },
                        children: "Watch on Instagram"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                        lineNumber: 19,
                        columnNumber: 60
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/category/all",
                        className: "btn-primary",
                        style: {
                            display: 'inline-flex',
                            textDecoration: 'none'
                        },
                        children: "Explore Collection"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                        lineNumber: 21,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FeaturedPromo.jsx",
        lineNumber: 6,
        columnNumber: 13
    }, this);
}
_s(Promo, "ssHT+/YNkexmD9gCgnf2HWXUK+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Promo;
var _c;
__turbopack_context__.k.register(_c, "Promo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Helper Component for Individual Video
function VideoCard({ item, index, registerRef, onPlay }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { getProduct } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"])();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showButton, setShowButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [videoError, setVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get linked product
    const product = getProduct(item.linkedProductId) || {
        name: 'Exclusive Product',
        price: 'Check Price',
        id: item.linkedProductId,
        category: 'Unknown',
        images: []
    };
    // Autoplay logic using IntersectionObserver
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoCard.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "VideoCard.useEffect": (entries)=>{
                    entries.forEach({
                        "VideoCard.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                // Play if visible and no error
                                videoRef.current?.play().catch({
                                    "VideoCard.useEffect": ()=>{
                                    // Autoplay might fail (e.g. low power mode), ignoring
                                    }
                                }["VideoCard.useEffect"]);
                            } else {
                                // Pause if not visible
                                videoRef.current?.pause();
                            }
                        }
                    }["VideoCard.useEffect"]);
                }
            }["VideoCard.useEffect"], {
                threshold: 0.5
            } // 50% visible
            );
            if (videoRef.current) {
                observer.observe(videoRef.current);
            }
            return ({
                "VideoCard.useEffect": ()=>observer.disconnect()
            })["VideoCard.useEffect"];
        }
    }["VideoCard.useEffect"], []);
    // Control visibility logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoCard.useEffect": ()=>{
            let timer;
            if (isPlaying) {
                // If playing, hide after 2s of inactivity (though we use mouse movements to trigger this actually)
                // Requirement: "Fades out after 2 seconds of inactivity"
                // We'll reset this timer on interaction
                timer = setTimeout({
                    "VideoCard.useEffect": ()=>{
                        setShowButton(false);
                    }
                }["VideoCard.useEffect"], 2000);
            } else {
                // If paused, button always visible (Play icon)
                setShowButton(true);
            }
            return ({
                "VideoCard.useEffect": ()=>clearTimeout(timer)
            })["VideoCard.useEffect"];
        }
    }["VideoCard.useEffect"], [
        isPlaying,
        showButton
    ]); // Depend on showButton to allow re-triggering
    const handleInteraction = ()=>{
        if (isPlaying) {
            setShowButton(true);
        // logic to hide again is in the effect above, but we need to debounce it.
        // Simplified: just showing it relies on the effect to hide it again.
        // Actually, we need to clear the existing timeout if we were implementing checking for "inactivity".
        // For now, simpler approach: On hover/tap -> show. Effect hides if playing.
        }
    };
    const togglePlay = ()=>{
        const vid = videoRef.current;
        if (!vid) return;
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
            // Explicit pause
            setShowButton(true);
        }
    };
    const handleVideoPlay = ()=>{
        setIsPlaying(true);
        onPlay();
        // Hide button shortly after playing starts if no interaction
        setTimeout(()=>setShowButton(false), 2000);
    };
    const handleVideoPause = ()=>{
        setIsPlaying(false);
        setShowButton(true);
    };
    const handleCardClick = ()=>{
    // If clicked on product card specifically (handled there), or generic click?
    // User said: "video and the product card in small rectangle box".
    // Maybe clicking video toggles play, and clicking card goes to product?
    // Let's make entire card clickable to product if playing, or separate controls.
    // Current requirement: "Click on video -> Show video + product card". 
    // This suggests the product card might be HIDDEN until clicked/played?
    // But videoScroll usually shows thumbnails.
    // Let's auto-show product card when playing.
    };
    // Product Link Handler
    const handleProductClick = (e)=>{
        e.stopPropagation();
        router.push(`/product/${product.id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-card",
        onClick: ()=>{
            if (!isPlaying) togglePlay();
        // If playing, maybe pause? Or do nothing?
        },
        onMouseEnter: ()=>setShowButton(true),
        onMouseMove: ()=>setShowButton(true),
        onMouseLeave: ()=>isPlaying && setShowButton(false),
        style: {
            cursor: 'pointer',
            position: 'relative'
        },
        children: [
            !videoError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: (el)=>{
                    videoRef.current = el;
                    registerRef(el);
                },
                poster: "/assets/video_thumb.png",
                muted: true,
                loop: true,
                playsInline: true,
                onPlay: handleVideoPlay,
                onPause: handleVideoPause,
                onError: ()=>setVideoError(true),
                src: item.videoUrl
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 107,
                columnNumber: 29
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: '100%',
                    background: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666'
                },
                children: "Video Unavailable"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 108,
                columnNumber: 147
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleProductClick,
                style: {
                    position: 'absolute',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '90%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    padding: '12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    opacity: 1,
                    // User said "IF we click on the video THAN first it show the video and the product card".
                    // This implies it might be hidden initially?
                    // Let's show it always for better conversion, or fade in on play.
                    // Let's fade in on play/hover.
                    // Actually, "Shop from Video" usually has the product always visible or easily accessible.
                    zIndex: 20
                },
                children: [
                    product.images && product.images[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.images[0],
                        style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '4px',
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 135,
                        columnNumber: 60
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    color: '#000',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                },
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.8rem',
                                    color: '#d4af37'
                                },
                                children: typeof product.price === 'number' ? `₹${product.price}` : product.price.toString().startsWith('$') ? product.price.replace('$', '₹') : product.price
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#000',
                            color: '#fff',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase'
                        },
                        children: "Shop"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            !videoError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-controls",
                style: {
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    padding: '16px',
                    opacity: showButton ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 10,
                    pointerEvents: 'none' // Let clicks pass through to card unless on button
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pause-btn",
                    onClick: (e)=>{
                        e.stopPropagation();
                        togglePlay();
                    },
                    style: {
                        pointerEvents: 'auto',
                        background: 'rgba(0,0,0,0.4)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        cursor: 'pointer',
                        backdropFilter: 'blur(4px)'
                    },
                    children: isPlaying ? // Pause Icon
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                            lineNumber: 177,
                            columnNumber: 81
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this) : // Play Icon
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8 5v14l11-7z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                            lineNumber: 179,
                            columnNumber: 81
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                    lineNumber: 158,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 148,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
        lineNumber: 102,
        columnNumber: 13
    }, this);
}
_s(VideoCard, "2e6CKZYXg3KSzRfc7U2rCbH3eCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"]
    ];
});
_c = VideoCard;
function VideoScroll() {
    _s1();
    const { videoScrollItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const videoRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handlePlay = (index)=>{
        videoRefs.current.forEach((vid, i)=>{
            if (vid && i !== index && !vid.paused) {
                vid.pause();
            }
        });
    };
    if (!videoScrollItems || videoScrollItems.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "video-scroll-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Shop from Video"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 198,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-scroller",
                children: videoScrollItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoCard, {
                        item: item,
                        index: i,
                        registerRef: (el)=>{
                            videoRefs.current[i] = el;
                        },
                        onPlay: ()=>handlePlay(i)
                    }, item.id, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                        lineNumber: 200,
                        columnNumber: 53
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
                lineNumber: 199,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/VideoShowcase.jsx",
        lineNumber: 197,
        columnNumber: 13
    }, this);
}
_s1(VideoScroll, "X5NplsOiUor5Wa0zYlIPFP+1ybU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c1 = VideoScroll;
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoCard");
__turbopack_context__.k.register(_c1, "VideoScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Collection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Collection() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { openCart, addToCart, openCheckout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"])();
    const { categories, essentialsConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const { user, openLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // 1. Filter Check: Is Module Enabled?
    if (!essentialsConfig.isEnabled) return null;
    // 2. Base Filter: Get products marked for "Essential Collection"
    const essentialProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Collection.useMemo[essentialProducts]": ()=>{
            let filtered = products.filter({
                "Collection.useMemo[essentialProducts].filtered": (p)=>p.displayLocations?.includes('Essential Collection') && p.isActive
            }["Collection.useMemo[essentialProducts].filtered"]);
            // 3. Sort Logic
            if (essentialsConfig.sortOrder === 'newest') {
                filtered = [
                    ...filtered
                ].reverse();
            } else if (essentialsConfig.sortOrder === 'manual' && essentialsConfig.orderedProductIds) {
                filtered.sort({
                    "Collection.useMemo[essentialProducts]": (a, b)=>{
                        const indexA = essentialsConfig.orderedProductIds.indexOf(a.id);
                        const indexB = essentialsConfig.orderedProductIds.indexOf(b.id);
                        // If not in manual list, push to end (or keep relative order? Let's push to end)
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;
                        return indexA - indexB;
                    }
                }["Collection.useMemo[essentialProducts]"]);
            }
            // 4. Count Limit - Temporarily removed to ensure all added products show
            // return filtered.slice(0, essentialsConfig.count);
            return filtered;
        }
    }["Collection.useMemo[essentialProducts]"], [
        products,
        essentialsConfig
    ]);
    // 5. Tab Categories: "All" + Categories extracted from the Essential Products (or all categories)
    // Using filtered products to determine available categories for this collection makes sense, 
    // but sometimes you want all categories visible even if empty. Let's stick to ContentContext categories.
    const categoryTabs = [
        "All",
        ...categories.map((c)=>c.name)
    ];
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    // 6. View Filter: Filter the displayed essentials by selected tab
    const displayedProducts = activeFilter === "All" ? essentialProducts : essentialProducts.filter((p)=>p.category === activeFilter);
    // if (essentialProducts.length === 0) return null; // Don't show empty section
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "featured-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
                .cta-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: flex-end;
                    padding: 16px;
                    background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                }
                .product-image:hover .cta-overlay {
                    opacity: 1;
                    pointer-events: auto;
                }
                .product-image {
                    position: relative; /* Ensure relative positioning for absolute overlay */
                }
            `
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Essential Collection"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-tabs",
                style: {
                    marginBottom: 24,
                    overflowX: 'auto',
                    display: 'flex',
                    gap: 16
                },
                children: categoryTabs.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `filter-btn btn-outline-gold ${activeFilter === cat ? 'active' : ''}`,
                        onClick: ()=>setActiveFilter(cat),
                        children: cat
                    }, cat, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                        lineNumber: 82,
                        columnNumber: 39
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "trust-marquee-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "trust-marquee-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Premium Fabric"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 91,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Tailored Fit"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 92,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Made in India"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 93,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Sustainable Sourcing"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 94,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Hand-finished Details"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 95,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Breathable Material"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 96,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Premium Fabric"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 99,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Tailored Fit"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Made in India"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 101,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Sustainable Sourcing"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 102,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Hand-finished Details"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 103,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "✦ Breathable Material"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-grid",
                id: "collection-grid",
                children: [
                    displayedProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            gridColumn: '1 / -1',
                            textAlign: 'center',
                            padding: '40px',
                            opacity: 0.6
                        },
                        children: 'No products found in this collection. Add products via Admin Dashboard and check "Essential Collection".'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                        lineNumber: 109,
                        columnNumber: 49
                    }, this),
                    displayedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "product-card",
                            "data-category": product.category,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-image",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${product._id || product.id}`,
                                            className: "img-link-wrapper",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.images && product.images.length > 0 ? product.images[0] : 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
                                                alt: product.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                lineNumber: 115,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                            lineNumber: 114,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cta-overlay",
                                            onClick: ()=>router.push(`/products/${product._id || product.id}`),
                                            style: {
                                                cursor: 'pointer'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    width: '100%',
                                                    gap: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-card-cta",
                                                        style: {
                                                            flex: 1,
                                                            fontSize: '0.85rem',
                                                            padding: '12px 0',
                                                            borderRadius: '2px',
                                                            border: '1px solid rgba(255,255,255,0.8)',
                                                            background: 'rgba(0,0,0,0.8)',
                                                            color: '#fff'
                                                        },
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            // Quick Add Logic (Default 'M' or first size)
                                                            const defaultSize = product.sizes?.includes('M') ? 'M' : product.sizes?.[0];
                                                            addToCart({
                                                                id: product._id || product.id,
                                                                name: product.name,
                                                                price: product.price.toString(),
                                                                image: product.images && product.images.length > 0 ? product.images[0] : product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
                                                                size: defaultSize,
                                                                color: product.colors?.[0] || 'Midnight Black'
                                                            });
                                                            showToast("Added to Bag");
                                                            openCart();
                                                        },
                                                        children: "Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "btn-card-cta",
                                                        style: {
                                                            flex: 1,
                                                            fontSize: '0.85rem',
                                                            padding: '12px 0',
                                                            borderRadius: '2px',
                                                            backgroundColor: '#fff',
                                                            color: '#000',
                                                            border: '1px solid #fff'
                                                        },
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            // "Buy It Now" implies Checkout. Using PDP pattern: Don't add default item, just open checkout.
                                                            if (user) {
                                                                openCheckout();
                                                            } else {
                                                                openLogin();
                                                            }
                                                        },
                                                        children: "Buy It Now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                        lineNumber: 137,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                lineNumber: 118,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                            lineNumber: 117,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-info",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/products/${product._id || product.id}`,
                                        style: {
                                            textDecoration: 'none',
                                            color: 'inherit'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "product-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "serif",
                                                    children: product.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "price",
                                                    children: product.price.toString().startsWith('₹') ? product.price : `₹${product.price}`
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                            lineNumber: 155,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                        lineNumber: 154,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, product._id || product.id, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                            lineNumber: 112,
                            columnNumber: 48
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 108,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "view-all-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: activeFilter === 'All' ? '/category/all' : `/category/${activeFilter.toLowerCase()}`,
                    className: "link-arrow",
                    children: [
                        "View All ",
                        activeFilter === 'All' ? 'Products' : activeFilter,
                        " →"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                    lineNumber: 165,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CollectionPreview.jsx",
        lineNumber: 53,
        columnNumber: 13
    }, this);
}
_s(Collection, "aZ922QS8/hU6g8tZmS4wRGMjPSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Collection;
var _c;
__turbopack_context__.k.register(_c, "Collection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Journal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Journal() {
    _s();
    const { journal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    const publishedPosts = journal.filter((post)=>post.status === 'published');
    if (publishedPosts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "journal-section fade-in-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "The Journal"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "journal-grid",
                children: publishedPosts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/journal/${post.id}`,
                        className: "journal-card",
                        style: {
                            textDecoration: 'none',
                            color: 'inherit'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: post.imageUrl,
                                    alt: post.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "journal-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-cat",
                                            children: [
                                                "Editorial • ",
                                                post.author || 'Editor'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                                            lineNumber: 16,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                                            lineNumber: 17,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                                    lineNumber: 15,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                            lineNumber: 13,
                            columnNumber: 25
                        }, this)
                    }, post.id, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                        lineNumber: 12,
                        columnNumber: 46
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/JournalHighlights.jsx",
        lineNumber: 9,
        columnNumber: 13
    }, this);
}
_s(Journal, "DlYJUgpFSqEcy2SLp9sUqP3QbP4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Journal;
var _c;
__turbopack_context__.k.register(_c, "Journal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Handpicked
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Helper to get slug from title if not explicitly defined, but explicit is safer
const HANDPICKED_ITEMS = [
    {
        title: "Meetings",
        image: "/assets/product_1.png",
        slug: "meetings"
    },
    {
        title: "Office Essentials",
        image: "/assets/product_2.png",
        slug: "office-essentials"
    },
    {
        title: "Students",
        image: "/assets/journal_1.png",
        slug: "students"
    },
    {
        title: "Events",
        image: "/assets/journal_2.png",
        slug: "events"
    }
];
function Handpicked() {
    _s();
    const { handpickedItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "handpicked-section animate-on-scroll",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "section-title",
                children: "Handpicked For"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "handpicked-grid",
                children: handpickedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/category/${item.slug}`,
                        className: "handpicked-card",
                        style: {
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'block'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "handpicked-image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.imageUrl,
                                    alt: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                                    lineNumber: 20,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "handpicked-overlay",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                        lineNumber: 18,
                        columnNumber: 49
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CuratedSelections.jsx",
        lineNumber: 14,
        columnNumber: 13
    }, this);
}
_s(Handpicked, "Is6fFHn3yvkIe18EOOrhbe0cKno=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContent"]
    ];
});
_c = Handpicked;
var _c;
__turbopack_context__.k.register(_c, "Handpicked");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const FAQ_ITEMS = [
    {
        q: "What material is used for the shirts?",
        a: "We use 100% Giza Cotton, sourced ethically and woven in small batches to ensure maximum breathability and durability."
    },
    {
        q: "Do you offer custom tailoring?",
        a: "Currently we offer standard premium sizing. However, we do undertake bespoke commissions for select clients."
    },
    {
        q: "Shipping and Delivery timelines?",
        a: "All metropolitan orders are delivered within 3-5 business days. International shipping takes 7-10 days."
    }
];
function FAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggle = (i)=>{
        setOpenIndex(openIndex === i ? null : i);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "faq-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "serif",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            FAQ_ITEMS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `faq-item ${openIndex === i ? 'active' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "faq-question",
                            onClick: ()=>toggle(i),
                            style: {
                                width: '100%',
                                textAlign: 'left',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.q
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-icon",
                                    style: {
                                        transform: openIndex === i ? 'rotate(45deg)' : 'none',
                                        transition: 'transform 0.3s ease'
                                    },
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-answer-wrapper",
                            style: {
                                display: 'grid',
                                gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                                transition: 'grid-template-rows 0.3s ease-out'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "faq-answer",
                                style: {
                                    overflow: 'hidden'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        paddingBottom: '24px'
                                    },
                                    children: item.a
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                                    lineNumber: 33,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
                    lineNumber: 19,
                    columnNumber: 42
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/FAQSection.jsx",
        lineNumber: 13,
        columnNumber: 13
    }, this);
}
_s(FAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Newsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Newsletter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "newsletter-section",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "newsletter-wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "serif",
                    children: "Join the Inner Circle"
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
                    lineNumber: 5,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Early access to collections and exclusive editorial content."
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
                    lineNumber: 6,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "newsletter-form",
                    onSubmit: (e)=>e.preventDefault(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "Your email address",
                            "aria-label": "Email"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
                            lineNumber: 8,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "btn-secondary",
                            children: "Subscribe"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/NewsletterSignup.jsx",
        lineNumber: 3,
        columnNumber: 13
    }, this);
}
_c = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_menx-next_frontend_src_components_34899bee._.js.map
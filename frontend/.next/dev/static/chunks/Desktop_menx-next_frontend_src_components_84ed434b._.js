(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/navigation.js [app-client] (ecmascript)"); // Using next/navigation for router in app directory
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (backLink) {
            router.push(backLink);
        } else {
            router.back();
        }
    };
    // ... rest of render ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "unified-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action left",
                children: (variant === 'pdp' || variant === 'plp') && !hideBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "header-back-btn",
                    "aria-label": "Go Back",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "19",
                                y1: "12",
                                x2: "5",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 2,
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action right",
                style: {
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: user ? openUserMenu : openLogin,
                        className: "header-cart-btn",
                        "aria-label": "User Account",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 44,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>user ? router.push('/wishlist') : openLogin(),
                        className: "header-cart-btn",
                        "aria-label": "Favorites",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCart,
                        className: "header-cart-btn",
                        "aria-label": "Open Cart",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 6H21"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 61,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CUSTOMIZATION_OPTIONS",
    ()=>CUSTOMIZATION_OPTIONS
]);
const CUSTOMIZATION_OPTIONS = {
    Shirt: [
        {
            id: 'collar',
            label: 'Collar',
            type: 'card',
            choices: [
                {
                    id: 'classic',
                    label: 'Classic',
                    recommended: true
                },
                {
                    id: 'spread',
                    label: 'Spread'
                },
                {
                    id: 'button-down',
                    label: 'Button-down'
                }
            ]
        },
        {
            id: 'cuffs',
            label: 'Cuffs',
            type: 'toggle',
            choices: [
                {
                    id: 'single',
                    label: 'Single',
                    recommended: true
                },
                {
                    id: 'double',
                    label: 'Double'
                },
                {
                    id: 'french',
                    label: 'French'
                }
            ]
        },
        {
            id: 'fit',
            label: 'Fit',
            type: 'toggle',
            choices: [
                {
                    id: 'regular',
                    label: 'Regular',
                    recommended: true
                },
                {
                    id: 'slim',
                    label: 'Slim'
                },
                {
                    id: 'relaxed',
                    label: 'Relaxed'
                }
            ]
        },
        {
            id: 'pockets',
            label: 'Pockets',
            type: 'toggle',
            choices: [
                {
                    id: 'none',
                    label: 'None',
                    recommended: true
                },
                {
                    id: 'single',
                    label: 'Single'
                }
            ]
        },
        {
            id: 'fabric',
            label: 'Fabric',
            type: 'card',
            choices: [
                {
                    id: 'egyptian',
                    label: 'Egyptian Cotton'
                },
                {
                    id: 'linen',
                    label: 'Italian Linen'
                },
                {
                    id: 'oxford',
                    label: 'Oxford'
                }
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                {
                    id: 'white',
                    label: 'White',
                    color: '#ffffff'
                },
                {
                    id: 'blue',
                    label: 'Blue',
                    color: '#87CEEB'
                },
                {
                    id: 'black',
                    label: 'Black',
                    color: '#000000'
                },
                {
                    id: 'pink',
                    label: 'Pink',
                    color: '#FFC0CB'
                },
                {
                    id: 'navy',
                    label: 'Navy',
                    color: '#000080'
                }
            ]
        }
    ],
    Pant: [
        {
            id: 'fit',
            label: 'Fit',
            type: 'toggle',
            choices: [
                {
                    id: 'regular',
                    label: 'Regular',
                    recommended: true
                },
                {
                    id: 'slim',
                    label: 'Slim'
                }
            ]
        },
        {
            id: 'pleats',
            label: 'Pleats',
            type: 'toggle',
            choices: [
                {
                    id: 'no',
                    label: 'No Pleats',
                    recommended: true
                },
                {
                    id: 'yes',
                    label: 'Pleated'
                }
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                {
                    id: 'black',
                    label: 'Black',
                    color: '#000000'
                },
                {
                    id: 'grey',
                    label: 'Grey',
                    color: '#808080'
                },
                {
                    id: 'navy',
                    label: 'Navy',
                    color: '#000080'
                },
                {
                    id: 'beige',
                    label: 'Beige',
                    color: '#f5f5dc'
                }
            ]
        }
    ],
    Blazer: [
        {
            id: 'lapel',
            label: 'Lapel Style',
            type: 'card',
            choices: [
                {
                    id: 'classic',
                    label: 'Classic Notch',
                    recommended: true
                },
                {
                    id: 'peak',
                    label: 'Peak Lapel'
                }
            ]
        },
        {
            id: 'buttons',
            label: 'Button Config',
            type: 'toggle',
            choices: [
                {
                    id: 'single',
                    label: 'Single Breasted',
                    recommended: true
                },
                {
                    id: 'double',
                    label: 'Double Breasted'
                }
            ]
        },
        {
            id: 'color',
            label: 'Color',
            type: 'swatch',
            choices: [
                {
                    id: 'navy',
                    label: 'Navy',
                    color: '#000080'
                },
                {
                    id: 'black',
                    label: 'Black',
                    color: '#000000'
                },
                {
                    id: 'charcoal',
                    label: 'Charcoal',
                    color: '#36454f'
                }
            ]
        }
    ]
};
// Fallback for types not explicitly defined
CUSTOMIZATION_OPTIONS['T-shirt'] = [
    {
        id: 'neck',
        label: 'Neckline',
        type: 'card',
        choices: [
            {
                id: 'crew',
                label: 'Crew Neck',
                recommended: true
            },
            {
                id: 'polo',
                label: 'Polo'
            }
        ]
    },
    {
        id: 'sleeve',
        label: 'Sleeve Length',
        type: 'toggle',
        choices: [
            {
                id: 'half',
                label: 'Half Sleeve',
                recommended: true
            },
            {
                id: 'full',
                label: 'Full Sleeve'
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomizationOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$CustomizationData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationData.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function CustomizationOverlay({ productType, productImage, productName, productPrice, onClose, onComplete }) {
    _s();
    const [activeGuide, setActiveGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Determine the safe key for options (fallback to 'Default' or 'Shirt' if not found)
    const optionsKey = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$CustomizationData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOMIZATION_OPTIONS"][productType] ? productType : 'Shirt';
    const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$CustomizationData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CUSTOMIZATION_OPTIONS"][optionsKey];
    // Initialize state with defaults
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CustomizationOverlay.useState": ()=>{
            const init = {};
            options.forEach({
                "CustomizationOverlay.useState": (opt)=>{
                    const defaultChoice = opt.choices.find({
                        "CustomizationOverlay.useState": (c)=>c.recommended
                    }["CustomizationOverlay.useState"]) || opt.choices[0];
                    init[opt.id] = defaultChoice.id;
                }
            }["CustomizationOverlay.useState"]);
            return init;
        }
    }["CustomizationOverlay.useState"]);
    const handleSelect = (optionId, choiceId)=>{
        setSelections((prev)=>({
                ...prev,
                [optionId]: choiceId
            }));
    };
    const handleDone = ()=>{
        onComplete(selections);
    };
    const renderGuideContent = ()=>{
        switch(activeGuide){
            case 'Collar':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Classic is versatile. Spread is modern for wider ties. Button-down is casual."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 33,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                    lineNumber: 33,
                    columnNumber: 24
                }, this);
            case 'Cuffs':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Single is standard. Double (French) requires cufflinks for formal wear."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 35,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                    lineNumber: 35,
                    columnNumber: 24
                }, this);
            case 'Fabric':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Egyptian Cotton is breathable. Italian Linen is perfect for summer. Oxford is durable."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 37,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                    lineNumber: 37,
                    columnNumber: 24
                }, this);
            case 'Fit':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Regular for comfort. Slim for a modern silhouette. Relaxed for maximum ease."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 39,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                    lineNumber: 39,
                    columnNumber: 24
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Selection guide for ",
                            activeGuide,
                            ". Choose the option that best fits your style."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 41,
                        columnNumber: 51
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                    lineNumber: 41,
                    columnNumber: 24
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "customizer-overlay",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "customizer-visual",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: productImage,
                        alt: "Product Visualization",
                        className: "visual-product-img"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visual-annotation",
                        style: {
                            top: '20%',
                            right: '20%'
                        },
                        children: options.find((o)=>o.id === 'collar')?.choices.find((c)=>c.id === selections['collar'])?.label || 'Custom Fit'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "visual-annotation",
                        style: {
                            bottom: '20%',
                            left: '20%'
                        },
                        children: options.find((o)=>o.id === 'fabric')?.choices.find((c)=>c.id === selections['fabric'])?.label || 'Premium Fabric'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "customizer-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sidebar-title",
                                children: [
                                    "Design Your ",
                                    productType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "close-btn",
                                onClick: onClose,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-content",
                        children: [
                            activeGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-guide-overlay",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "guide-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    activeGuide,
                                                    " Info"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveGuide(null),
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                lineNumber: 73,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    renderGuideContent()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this),
                            options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "customization-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginBottom: '12px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "group-label",
                                                    style: {
                                                        marginBottom: 0
                                                    },
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide(option.label),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                            lineNumber: 81,
                                            columnNumber: 29
                                        }, this),
                                        option.type === 'toggle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "toggle-wrapper",
                                            children: option.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `toggle-option ${selections[option.id] === choice.id ? 'selected' : ''}`,
                                                    onClick: ()=>handleSelect(option.id, choice.id),
                                                    children: choice.label
                                                }, choice.id, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                    lineNumber: 90,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this),
                                        option.type === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "options-grid",
                                            children: option.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `option-card ${selections[option.id] === choice.id ? 'selected' : ''}`,
                                                    onClick: ()=>handleSelect(option.id, choice.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "option-label",
                                                            children: choice.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 45
                                                        }, this),
                                                        choice.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "recommended-tag",
                                                            children: "Recommended"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                            lineNumber: 102,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, choice.id, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, this),
                                        option.type === 'swatch' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "swatch-grid",
                                            children: option.choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `swatch ${selections[option.id] === choice.id ? 'selected' : ''}`,
                                                    style: {
                                                        backgroundColor: choice.color
                                                    },
                                                    title: choice.label,
                                                    onClick: ()=>handleSelect(option.id, choice.id)
                                                }, choice.id, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                                    lineNumber: 111,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                            lineNumber: 109,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, option.id, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                    lineNumber: 80,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "price-summary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                        lineNumber: 121,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: productPrice
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cust-action-btn",
                                onClick: handleDone,
                                children: "Save & Continue"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    marginTop: '12px',
                                    color: '#666',
                                    fontSize: '0.8rem'
                                },
                                children: "Visuals are for reference. Actual product may vary slightly."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
                lineNumber: 61,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_s(CustomizationOverlay, "AasmdFg5DzBI8pdklpZpOwZ9tIY=");
_c = CustomizationOverlay;
var _c;
__turbopack_context__.k.register(_c, "CustomizationOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FitConfirmationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function FitConfirmationModal({ onConfirm, onClose, initialData }) {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeGuide, setActiveGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // STEP 1 STATE
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.height || '5\'10"');
    const [shirtSize, setShirtSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.shirtSize || '40');
    const [shoulderType, setShoulderType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.shoulderType || null);
    const [preferredFit, setPreferredFit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.preferredFit || null);
    // STEP 2 STATE
    const [selectedUpperBody, setSelectedUpperBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.upperBody || null);
    const [selectedLowerBody, setSelectedLowerBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.lowerBody || null);
    // Navigation Logic
    const isStep1Ready = height && shirtSize && shoulderType && preferredFit;
    const isStep2Ready = selectedUpperBody && selectedLowerBody;
    const handleNext = ()=>{
        if (step === 1 && isStep1Ready) setStep(2);
    };
    const handleCalculate = ()=>{
        if (!isStep2Ready) return;
        onConfirm({
            height,
            shirtSize,
            shoulderType,
            preferredFit,
            upperBody: selectedUpperBody,
            lowerBody: selectedLowerBody,
            calculatedSize: 'Custom'
        });
    };
    // Guide Content Generator
    const renderGuideContent = ()=>{
        switch(activeGuide){
            case 'Shirt Size':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Shirt Size Guide"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Measure around the fullest part of your chest, keeping the tape horizontal."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "guide-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Size"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                lineNumber: 51,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Chest (in)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                lineNumber: 51,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Waist (in)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                lineNumber: 51,
                                                columnNumber: 69
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                        lineNumber: 51,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "38"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "38-39"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "32-33"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 54,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "40"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "40-41"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "34-35"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 55,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "42"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "42-43"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 48
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: "36-37"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 62
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 46,
                    columnNumber: 21
                }, this);
            case 'Shoulder Type':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Shoulder Types"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Average:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 65,
                                    columnNumber: 28
                                }, this),
                                " Shoulders with a standard 15-20 degree slope."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Sloping:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 66,
                                    columnNumber: 28
                                }, this),
                                " Shoulders that drop more significantly from the neck base."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 63,
                    columnNumber: 21
                }, this);
            case 'Preferred Fit':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Fit Guide"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Super Slim:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 73,
                                    columnNumber: 28
                                }, this),
                                " Extremely close to the body, minimal ease."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Tailored:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 74,
                                    columnNumber: 28
                                }, this),
                                " Structured look with comfortable movement."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 74,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Regular:"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 75,
                                    columnNumber: 28
                                }, this),
                                " Relaxed fit with classic proportions."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 71,
                    columnNumber: 21
                }, this);
            case 'Body Shape':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "guide-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Body Shape Guide"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Identify your silhouette for the most accurate pattern adjustments."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 82,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "We use these shapes to adjust the taper of the garment through the chest, waist, and seat."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 80,
                    columnNumber: 21
                }, this);
            default:
                return null;
        }
    };
    // Helper to generate range
    const heights = [
        '5\'0',
        '5\'1',
        '5\'2',
        '5\'3',
        '5\'4',
        '5\'5',
        '5\'6',
        '5\'7',
        '5\'8',
        '5\'9',
        '5\'10',
        '5\'11',
        '6\'0',
        '6\'1',
        '6\'2',
        '6\'3',
        '6\'4',
        '6\'5',
        '6\'6'
    ];
    const sizes = [
        '36',
        '38',
        '40',
        '42',
        '44',
        '46',
        '48',
        '50',
        '52',
        '54',
        '56'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fit-drawer-overlay",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fit-drawer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fit-drawer-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fit-header-title",
                            children: [
                                "Find Your",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Perfect Fit"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close-fit-btn",
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fit-drawer-content",
                    children: [
                        activeGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-guide-overlay",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "guide-header",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                activeGuide,
                                                " Info"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveGuide(null),
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 118,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this),
                                renderGuideContent()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 115,
                            columnNumber: 25
                        }, this),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fit-step-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "fit-section-title",
                                                children: "Select Height"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                lineNumber: 128,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 127,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "circle-grid",
                                            children: heights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `circle-btn ${height === h ? 'selected' : ''}`,
                                                    onClick: ()=>setHeight(h),
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 52
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fit-section-title",
                                                    children: "Select Shirt Size"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide('Shirt Size'),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "circle-grid",
                                            children: sizes.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `circle-btn ${shirtSize === s ? 'selected' : ''}`,
                                                    onClick: ()=>setShirtSize(s),
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 50
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fit-section-title",
                                                    children: "Select Shoulder Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide('Shoulder Type'),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 150,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid-2-col",
                                            children: [
                                                {
                                                    id: 'average',
                                                    label: 'Average',
                                                    image: '/assets/fit-guide/shoulder_average.png'
                                                },
                                                {
                                                    id: 'sloping',
                                                    label: 'Sloping',
                                                    image: '/assets/fit-guide/shoulder_sloping.png'
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shape-card ${shoulderType === item.id ? 'selected' : ''}`,
                                                    onClick: ()=>setShoulderType(item.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shape-illustration-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: item.image,
                                                                alt: item.label,
                                                                className: "shape-image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shape-label",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 161,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 48
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 154,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 149,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fit-section-title",
                                                    children: "Select Preferred Fit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide('Preferred Fit'),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid-3-col",
                                            children: [
                                                {
                                                    id: 'super_slim',
                                                    label: 'Super Slim',
                                                    image: '/assets/fit-guide/fit_super_slim.png'
                                                },
                                                {
                                                    id: 'tailored',
                                                    label: 'Tailored',
                                                    image: '/assets/fit-guide/fit_tailored.png'
                                                },
                                                {
                                                    id: 'regular',
                                                    label: 'Regular',
                                                    image: '/assets/fit-guide/fit_regular.png'
                                                }
                                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shape-card ${preferredFit === item.id ? 'selected' : ''}`,
                                                    onClick: ()=>setPreferredFit(item.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shape-illustration-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: item.image,
                                                                alt: item.label,
                                                                className: "shape-image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                                lineNumber: 178,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 177,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shape-label",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 180,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 48
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 171,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 166,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 125,
                            columnNumber: 37
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fit-step-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fit-section-title",
                                                    children: "Select Upper Body Shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 192,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide('Body Shape'),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 191,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shape-grid",
                                            children: [
                                                {
                                                    id: 'athletic',
                                                    label: 'Athletic',
                                                    image: '/assets/fit-guide/upper_athletic.png'
                                                },
                                                {
                                                    id: 'slight-belly',
                                                    label: 'Slight Belly',
                                                    image: '/assets/fit-guide/upper_slight_belly.png'
                                                },
                                                {
                                                    id: 'significant-belly',
                                                    label: 'Significant Belly',
                                                    image: '/assets/fit-guide/upper_big_belly.png'
                                                }
                                            ].map((shape)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shape-card ${selectedUpperBody === shape.id ? 'selected' : ''}`,
                                                    onClick: ()=>setSelectedUpperBody(shape.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shape-illustration-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: shape.image,
                                                                alt: shape.label,
                                                                className: "shape-image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 201,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shape-label",
                                                            children: shape.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 204,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, shape.id, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 51
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 195,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 190,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fit-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fit-section-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "fit-section-title",
                                                    children: "Select Lower Body Shape"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fit-guide-link",
                                                    onClick: ()=>setActiveGuide('Body Shape'),
                                                    children: "Guide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 212,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 210,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shape-grid",
                                            children: [
                                                {
                                                    id: 'flat',
                                                    label: 'Flat',
                                                    image: '/assets/fit-guide/lower_flat.png'
                                                },
                                                {
                                                    id: 'standard',
                                                    label: 'Standard',
                                                    image: '/assets/fit-guide/lower_standard.png'
                                                },
                                                {
                                                    id: 'heavy',
                                                    label: 'Heavy',
                                                    image: '/assets/fit-guide/lower_heavy.png'
                                                }
                                            ].map((shape)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shape-card ${selectedLowerBody === shape.id ? 'selected' : ''}`,
                                                    onClick: ()=>setSelectedLowerBody(shape.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "shape-illustration-wrapper",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: shape.image,
                                                                alt: shape.label,
                                                                className: "shape-image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                                lineNumber: 221,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shape-label",
                                                            children: shape.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                            lineNumber: 223,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, shape.id, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 51
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                            lineNumber: 214,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 187,
                            columnNumber: 37
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fit-drawer-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-info",
                            children: step === 1 ? 'Step 1 of 2: Details' : 'Step 2 of 2: Shape'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-bar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "progress-fill",
                                style: {
                                    width: step === 1 ? '50%' : '100%'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                                lineNumber: 236,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 235,
                            columnNumber: 21
                        }, this),
                        step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `calc-size-btn ${isStep1Ready ? 'active' : ''}`,
                            onClick: handleNext,
                            disabled: !isStep1Ready,
                            children: "Next Step"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 239,
                            columnNumber: 36
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `calc-size-btn ${isStep2Ready ? 'active' : ''}`,
                            onClick: handleCalculate,
                            disabled: !isStep2Ready,
                            children: "Calculate Size"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                            lineNumber: 241,
                            columnNumber: 35
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
            lineNumber: 100,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
_s(FitConfirmationModal, "VFMG8SybJmf7bWLXXK2aEypzFH4=");
_c = FitConfirmationModal;
var _c;
__turbopack_context__.k.register(_c, "FitConfirmationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-client] (ecmascript)"); // Import context
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/WishlistContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$CustomizationOverlay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/CustomizationOverlay.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$FitConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Product/Customizer/FitConfirmationModal.jsx [app-client] (ecmascript)");
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
;
;
;
function ProductDetailClient({ product: initialProduct }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { openCart, addToCart, openCheckout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { getProduct, products } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"])();
    const { toggleWishlist, isInWishlist } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { user, openLogin, saveMeasurements } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const contextProduct = getProduct(initialProduct?.id?.toString() || '');
    // Map Context Product to UI Product if found
    const product = contextProduct ? {
        id: contextProduct.id,
        name: contextProduct.name,
        price: `₹${contextProduct.price}`,
        image: contextProduct.images && contextProduct.images.length > 0 ? contextProduct.images[0] : '/images/placeholder.jpg',
        images: contextProduct.images || [],
        category: typeof contextProduct.category === 'object' ? contextProduct.category?.name : contextProduct.category,
        size: contextProduct.sizes,
        color: contextProduct.colors?.[0],
        tags: contextProduct.occasions,
        fit: 'Regular'
    } : {
        ...initialProduct,
        category: typeof initialProduct?.category === 'object' ? initialProduct?.category?.name : initialProduct?.category
    };
    // Handle case where neither exists (should be handled by page, but safety first)
    if (!product) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pdp-main",
        style: {
            padding: '100px',
            textAlign: 'center'
        },
        children: "Product Not Found"
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
        lineNumber: 41,
        columnNumber: 16
    }, this);
    // STATE
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sizeError, setSizeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Midnight Black');
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [openAccordion, setOpenAccordion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('description');
    const [showBuyBar, setShowBuyBar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCustomizer, setShowCustomizer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFitModal, setShowFitModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingAction, setPendingAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [customizationData, setCustomizationData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // REFS
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // EFFECT: Sticky Buy Bar Visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailClient.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "ProductDetailClient.useEffect": ([entry])=>{
                    // Show bar when hero moves OUT of view (scrolling down)
                    setShowBuyBar(!entry.isIntersecting);
                }
            }["ProductDetailClient.useEffect"], {
                threshold: 0
            });
            if (heroRef.current) {
                observer.observe(heroRef.current);
            }
            return ({
                "ProductDetailClient.useEffect": ()=>observer.disconnect()
            })["ProductDetailClient.useEffect"];
        }
    }["ProductDetailClient.useEffect"], []);
    // HANDLERS
    const toggleAccordion = (id)=>{
        setOpenAccordion((prev)=>prev === id ? null : id);
    };
    // LOAD SAVED FIT PROFILE (User-Specific)
    const [savedFitProfile, setSavedFitProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductDetailClient.useEffect": ()=>{
            // Priority 1: Use database measurements if user is logged in
            if (user && user.measurement) {
                setSavedFitProfile({
                    ...user.measurement,
                    calculatedSize: 'Custom' // Force custom flow if measurements exist
                });
                return;
            }
            // Priority 2: Use local storage (Guest or fallback)
            const storageKey = user ? `menx_fit_profile_${user.phone}` : 'menx_fit_profile_guest';
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    setSavedFitProfile(JSON.parse(saved));
                } catch (e) {
                    console.error("Error parsing fit profile", e);
                    setSavedFitProfile(null);
                }
            } else {
                setSavedFitProfile(null);
            }
        }
    }["ProductDetailClient.useEffect"], [
        user,
        user?.measurement
    ]); // Reload when user or their measurements change
    const galleryImages = product.images && product.images.length > 0 ? product.images : [
        product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000'
    ];
    const handleAddToCart = ()=>{
        setPendingAction('CART');
        // If we already have a profile, skip modal and add directly
        if (savedFitProfile) {
            const finalProductData = {
                id: product.id?.toString() || product._id?.toString(),
                name: product.name,
                price: product.price,
                image: galleryImages[0],
                size: savedFitProfile.calculatedSize || selectedSize || 'Custom',
                color: selectedColor || undefined,
                customization: customizationData,
                fitProfile: savedFitProfile
            };
            addToCart(finalProductData);
        } else {
            setShowFitModal(true);
        }
    };
    const handleBuyNow = ()=>{
        if (!user) {
            setPendingAction('BUY_NOW'); // Queue the action
            openLogin();
            return;
        }
        const finalProductData = {
            id: product.id?.toString() || product._id?.toString(),
            name: product.name,
            price: product.price,
            image: galleryImages[0],
            size: savedFitProfile?.calculatedSize || selectedSize || 'Custom',
            color: selectedColor || undefined,
            customization: customizationData,
            fitProfile: savedFitProfile
        };
        setPendingAction('BUY_NOW');
        // If we already have a profile, skip modal and buy directly
        if (savedFitProfile) {
            // Add to cart but don't auto-open the cart sidebar, then go straight to checkout
            addToCart(finalProductData, false);
            openCheckout();
        } else {
            setShowFitModal(true);
        }
    };
    // MOCK DATA GENERATION (Enhancing data as per plan)
    const fabricText = "100% Premium Egyptian Cotton. Hand-harvested to ensure length and softness. Breathable weave structure tailored for tropical climates.";
    const careText = "Machine wash cold on gentle cycle. Hang dry in shade. Do not bleach. Steam iron for best finish.";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pdp-main",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "pdp",
                backLink: "/category/all"
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            showCustomizer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$CustomizationOverlay$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                productType: product.category || 'Shirt',
                productImage: product.image,
                productName: product.name,
                productPrice: product.price,
                onClose: ()=>setShowCustomizer(false),
                onComplete: (data)=>{
                    setCustomizationData(data);
                    setShowCustomizer(false);
                    setShowFitModal(true);
                    setPendingAction('CART');
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 155,
                columnNumber: 33
            }, this),
            showFitModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Product$2f$Customizer$2f$FitConfirmationModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                initialData: savedFitProfile,
                onClose: ()=>setShowFitModal(false),
                onConfirm: async (fitData)=>{
                    setShowFitModal(false);
                    // 1. SAVE TO DATABASE if logged in
                    if (user) {
                        const measurements = {
                            chest: fitData.shirtSize || '40',
                            waist: '34',
                            shoulder: '18',
                            neck: '16',
                            sleeve: '25',
                            inseam: '32',
                            height: fitData.height || '',
                            shoulderType: fitData.shoulderType || '',
                            preferredFit: fitData.preferredFit || '',
                            upperBodyShape: fitData.upperBody || '',
                            lowerBodyShape: fitData.lowerBody || ''
                        };
                        await saveMeasurements(measurements);
                    }
                    // 2. SAVE TO LOCAL STORAGE (Synced with useEffect key logic)
                    const storageKey = user ? `menx_fit_profile_${user.phone}` : 'menx_fit_profile_guest';
                    localStorage.setItem(storageKey, JSON.stringify(fitData));
                    setSavedFitProfile(fitData);
                    const finalProductData = {
                        id: product.id?.toString() || product._id?.toString(),
                        name: product.name,
                        price: product.price,
                        image: galleryImages[0],
                        size: fitData.calculatedSize || fitData.shirtSize || selectedSize || 'Custom',
                        color: selectedColor || undefined,
                        customization: customizationData,
                        fitProfile: fitData
                    };
                    if (pendingAction === 'BUY_NOW') {
                        addToCart(finalProductData, false);
                        openCheckout();
                    } else if (pendingAction === 'CART') {
                        addToCart(finalProductData);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 162,
                columnNumber: 31
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pdp-main-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pdp-gallery-container",
                        ref: heroRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdp-main-image",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: galleryImages[activeImage],
                                    alt: `${product.name} view ${activeImage + 1}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                    lineNumber: 212,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 211,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdp-thumbnails",
                                children: galleryImages.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `pdp-thumbnail ${activeImage === idx ? 'active' : ''}`,
                                        onClick: ()=>setActiveImage(idx),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: `Thumbnail ${idx + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 218,
                                            columnNumber: 29
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 217,
                                        columnNumber: 59
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 216,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 210,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pdp-content-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "serif",
                                        style: {
                                            fontSize: '2.5rem',
                                            lineHeight: '1.1',
                                            color: '#fff',
                                            margin: 0,
                                            flex: 1
                                        },
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 227,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleWishlist(product.id),
                                        className: "btn-icon",
                                        style: {
                                            background: 'transparent',
                                            border: 'none',
                                            color: isInWishlist(product.id) ? '#d4af37' : '#fff',
                                            cursor: 'pointer',
                                            padding: '4px',
                                            transition: 'all 0.3s ease'
                                        },
                                        title: isInWishlist(product.id) ? "Remove from Favorites" : "Add to Favorites",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: isInWishlist(product.id) ? "currentColor" : "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "7",
                                                    y: "9",
                                                    width: "10",
                                                    height: "11",
                                                    rx: "2",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "10",
                                                    y: "4",
                                                    width: "4",
                                                    height: "5",
                                                    rx: "1",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "14",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1rem',
                                    color: '#ccc',
                                    marginBottom: '16px',
                                    letterSpacing: '0.05em'
                                },
                                children: "The Grey Stag"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pdp-price-final",
                                style: {
                                    fontSize: '1.5rem',
                                    fontWeight: '400',
                                    color: '#fff',
                                    marginBottom: '4px'
                                },
                                children: product.price
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 251,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    color: '#888',
                                    marginBottom: '24px'
                                },
                                children: "MRP incl. of all taxes"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.75rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '0.1em',
                                    color: '#fff',
                                    marginBottom: '32px',
                                    textTransform: 'uppercase'
                                },
                                children: "TRENDING"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "variant-section",
                                style: {
                                    marginBottom: '32px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-label",
                                        style: {
                                            marginBottom: '12px',
                                            fontSize: '0.9rem',
                                            color: '#bbb'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                style: {
                                                    color: '#fff'
                                                },
                                                children: "COLOR:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 263,
                                                columnNumber: 29
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#fff'
                                                },
                                                children: selectedColor
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 263,
                                                columnNumber: 79
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "color-grid",
                                        style: {
                                            display: 'flex',
                                            gap: '12px'
                                        },
                                        children: (contextProduct?.colors || [
                                            'Midnight Black',
                                            'Deep Navy',
                                            'Charcoal',
                                            'Beige',
                                            'White'
                                        ]).map((color)=>{
                                            const hexMap = {
                                                'Midnight Black': '#1a1a1a',
                                                'Deep Navy': '#1e293b',
                                                'Charcoal': '#3f3f46',
                                                'White': '#f0f0f0',
                                                'Beige': '#d2b48c',
                                                'Olive': '#556b2f'
                                            };
                                            const colorName = typeof color === 'string' ? color : color.name || color;
                                            const bg = hexMap[colorName] || '#000';
                                            const isSelected = selectedColor === colorName;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedColor(colorName),
                                                title: colorName,
                                                style: {
                                                    width: '40px',
                                                    height: '40px',
                                                    backgroundColor: bg,
                                                    border: isSelected ? '1px solid #fff' : '1px solid #333',
                                                    borderRadius: '4px',
                                                    outline: isSelected ? '2px solid #1a1a1a' : 'none',
                                                    outlineOffset: isSelected ? '-3px' : '0',
                                                    cursor: 'pointer',
                                                    boxShadow: isSelected ? '0 0 0 1px #fff' : 'none',
                                                    transition: 'all 0.2s'
                                                }
                                            }, colorName, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 273,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 265,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 261,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "variant-section",
                                style: {
                                    marginBottom: '40px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-label",
                                                style: {
                                                    fontSize: '0.9rem',
                                                    color: '#fff'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: product.size ? 'SELECT SIZE:' : 'INDIVIDUAL FIT:'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 299,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 298,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>setShowFitModal(true),
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    cursor: 'pointer',
                                                    color: '#d4af37',
                                                    fontSize: '0.85rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "18",
                                                        height: "18",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                            lineNumber: 305,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            textDecoration: 'underline',
                                                            fontWeight: '500'
                                                        },
                                                        children: savedFitProfile ? 'Edit Tailoring Fit' : 'Find Your Perfect Fit'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 303,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 297,
                                        columnNumber: 25
                                    }, this),
                                    product.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-grid",
                                        style: {
                                            display: 'flex',
                                            gap: '10px',
                                            flexWrap: 'wrap'
                                        },
                                        children: product.size.map((size)=>{
                                            const isSelected = selectedSize === size;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedSize(size);
                                                    setSizeError(false);
                                                },
                                                className: isSelected ? 'size-btn active' : 'size-btn',
                                                style: {
                                                    minWidth: '60px',
                                                    height: '40px',
                                                    background: isSelected ? '#fff' : 'transparent',
                                                    border: isSelected ? '1px solid #fff' : '1px solid #444',
                                                    borderRadius: '4px',
                                                    color: isSelected ? '#000' : '#888',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem',
                                                    transition: 'all 0.2s'
                                                },
                                                children: size
                                            }, size, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 316,
                                                columnNumber: 41
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 312,
                                        columnNumber: 29
                                    }, this),
                                    sizeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#ef4444',
                                            fontSize: '0.85rem',
                                            marginTop: '8px'
                                        },
                                        children: "Please select a size to continue"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 341,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 296,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "action-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        marginTop: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-primary",
                                            onClick: handleAddToCart,
                                            style: {
                                                flex: 1,
                                                height: '50px',
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                letterSpacing: '0.05em',
                                                borderRadius: '0'
                                            },
                                            children: "Add to Bag"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 347,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn-secondary",
                                            onClick: handleBuyNow,
                                            style: {
                                                flex: 1,
                                                backgroundColor: 'transparent',
                                                border: '1px solid #d4af37',
                                                color: '#d4af37',
                                                textTransform: 'uppercase',
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                height: '50px',
                                                borderRadius: '0'
                                            },
                                            children: "Buy it Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 357,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                    lineNumber: 346,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 345,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "trust-microcopy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Free 15-day returns"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 374,
                                        columnNumber: 25
                                    }, this),
                                    " • ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Ships in 2 business days"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 374,
                                        columnNumber: 60
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "accordion-wrapper",
                                style: {
                                    marginTop: '32px'
                                },
                                children: [
                                    {
                                        id: 'description',
                                        label: 'Description',
                                        content: contextProduct?.description || "Combined with minimal aesthetics and maximum comfort, this piece defines the new standard of luxury."
                                    },
                                    {
                                        id: 'fabric',
                                        label: 'Fabric & Care',
                                        content: contextProduct?.fabric || `${fabricText} <br/> <br/> ${careText}`
                                    },
                                    {
                                        id: 'shipping',
                                        label: 'Delivery & Returns',
                                        content: "Free shipping on all prepaid orders. Returns accepted within 15 days of delivery."
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "accordion-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `accordion-header ${openAccordion === item.id ? 'open' : ''}`,
                                                onClick: ()=>toggleAccordion(item.id),
                                                children: [
                                                    item.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "accordion-icon",
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 12 12",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M6 1V11M1 6H11",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                            lineNumber: 387,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 384,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `accordion-content ${openAccordion === item.id ? 'open' : ''}`,
                                                dangerouslySetInnerHTML: {
                                                    __html: item.content
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 390,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                        lineNumber: 383,
                                        columnNumber: 42
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 378,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 208,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `sticky-buy-bar ${showBuyBar ? 'visible' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sbb-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sbb-title",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 400,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sbb-price",
                                children: product.price
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 401,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 399,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "sbb-btn",
                        onClick: handleAddToCart,
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 403,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 398,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pdp-suggestions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "suggestions-title",
                        children: "You May Also Like"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 410,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "suggestions-grid",
                        children: (products || []).filter((p)=>p.id?.toString() !== product.id?.toString() && p._id?.toString() !== product.id?.toString()).slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products/${item.id || item._id}`,
                                className: "suggestion-link",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "suggestion-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-image-wrap",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.images && item.images.length > 0 && item.images[0] !== "[]" ? item.images[0] : item.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
                                                alt: item.name,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                lineNumber: 416,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 415,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "suggestion-name",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "suggestion-price",
                                                    children: [
                                                        "₹",
                                                        item.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                                    lineNumber: 420,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                            lineNumber: 418,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                    lineNumber: 414,
                                    columnNumber: 29
                                }, this)
                            }, item.id || item._id, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                                lineNumber: 413,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                        lineNumber: 411,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
                lineNumber: 409,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Product/ProductDetailView.jsx",
        lineNumber: 152,
        columnNumber: 9
    }, this);
}
_s(ProductDetailClient, "zYz2bVnSzxOOzGIy3WYDet2Lln4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProductDetailClient;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_menx-next_frontend_src_components_84ed434b._.js.map
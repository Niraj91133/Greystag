module.exports = [
"[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)"); // Using next/navigation for router in app directory
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Header({ variant = 'home', backLink, hideBack = false }) {
    const { cartCount, openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { user, openLogin, openUserMenu } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleBack = ()=>{
        if (backLink) {
            router.push(backLink);
        } else {
            router.back();
        }
    };
    // ... rest of render ...
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "unified-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action left",
                children: (variant === 'pdp' || variant === 'plp') && !hideBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBack,
                    className: "header-back-btn",
                    "aria-label": "Go Back",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "19",
                                y1: "12",
                                x2: "5",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 2,
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-action right",
                style: {
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: user ? openUserMenu : openLogin,
                        className: "header-cart-btn",
                        "aria-label": "User Account",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                    lineNumber: 44,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>user ? router.push('/wishlist') : openLogin(),
                        className: "header-cart-btn",
                        "aria-label": "Favorites",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: openCart,
                        className: "header-cart-btn",
                        "aria-label": "Open Cart",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 2L3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6L18 2H6Z"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 60,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 6H21"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx",
                                        lineNumber: 61,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const FILTERS = {
    Size: [
        'S',
        'M',
        'L',
        'XL'
    ],
    Color: [
        'Black',
        'White',
        'Navy',
        'Beige'
    ],
    Fit: [
        'Slim',
        'Regular',
        'Relaxed'
    ]
};
const SORT_OPTIONS = [
    {
        label: 'Price: Low to High',
        value: 'price_asc'
    },
    {
        label: 'Price: High to Low',
        value: 'price_desc'
    }
];
function FilterBar({ activeFilters, onFilterChange, onSort }) {
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleDropdown = (type)=>{
        setOpenDropdown((prev)=>prev === type ? null : type);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "filter-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-group",
                children: Object.entries(FILTERS).map(([key, options])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `filter-btn ${openDropdown === key ? 'active' : ''}`,
                                onClick: ()=>toggleDropdown(key),
                                children: [
                                    key,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '10px'
                                        },
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 23,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, this),
                            openDropdown === key && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    left: 0,
                                    background: '#0f0f0f',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '12px',
                                    minWidth: '160px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    zIndex: 1000,
                                    /* Ensure high z-index */ borderRadius: '4px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                },
                                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            cursor: 'pointer',
                                            color: '#fff',
                                            fontSize: '14px',
                                            whiteSpace: 'nowrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: activeFilters?.[key]?.includes(option) || false,
                                                onChange: ()=>{
                                                    onFilterChange?.(key, option);
                                                    setOpenDropdown(null); // Auto-close as requested
                                                },
                                                style: {
                                                    accentColor: '#ffffffff'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                                lineNumber: 43,
                                                columnNumber: 41
                                            }, this),
                                            option
                                        ]
                                    }, option, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 42,
                                        columnNumber: 57
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 27,
                                columnNumber: 51
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 21,
                        columnNumber: 67
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    marginLeft: 'auto'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "filter-btn sort-btn",
                        onClick: ()=>toggleDropdown('Sort'),
                        children: [
                            "Sort ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '10px'
                                },
                                children: "▼"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 56,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    openDropdown === 'Sort' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 'calc(100% + 8px)',
                            right: 0,
                            background: '#0f0f0f',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '12px',
                            minWidth: '180px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            zIndex: 1000,
                            borderRadius: '4px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                        },
                        children: SORT_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onSort?.(opt.value);
                                    toggleDropdown('Sort');
                                },
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    padding: '4px 0',
                                    opacity: 0.8
                                },
                                children: opt.label
                            }, opt.value, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 74,
                                columnNumber: 51
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 59,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-filter-pills",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mobile-filter-box",
                        onClick: ()=>setOpenDropdown('MobileFilter'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginRight: '8px'
                                },
                                children: "Filter"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            Object.values(activeFilters || {}).flat().length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "filter-count",
                                children: Object.values(activeFilters || {}).flat().length
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 94,
                                columnNumber: 79
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "6 9 12 15 18 9"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mobile-sort-btn",
                                onClick: ()=>toggleDropdown('MobileSort'),
                                children: [
                                    "Sort ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '10px',
                                            marginLeft: '4px'
                                        },
                                        children: "▼"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 105,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            openDropdown === 'MobileSort' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 'calc(100% + 8px)',
                                    right: 0,
                                    background: '#1a1a1a',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '12px',
                                    minWidth: '160px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    zIndex: 1000,
                                    borderRadius: '4px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                                },
                                children: SORT_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onSort?.(opt.value);
                                            setOpenDropdown(null);
                                        },
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#fff',
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            padding: '8px',
                                            opacity: 0.9,
                                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                                        },
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 124,
                                        columnNumber: 55
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 109,
                                columnNumber: 56
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            openDropdown === 'MobileFilter' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.6)',
                            zIndex: 200,
                            backdropFilter: 'blur(4px)'
                        },
                        onClick: ()=>setOpenDropdown(null)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: '#1a1a1a',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px',
                            padding: '24px',
                            zIndex: 201,
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.3s ease-out'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '24px',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '1.25rem',
                                            margin: 0
                                        },
                                        children: "Filters"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 171,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenDropdown(null),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#fff',
                                            fontSize: '1.5rem',
                                            cursor: 'pointer'
                                        },
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 172,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 170,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                },
                                children: Object.entries(FILTERS).map(([key, options])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontSize: '0.9rem',
                                                    opacity: 0.8,
                                                    marginBottom: '12px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                },
                                                children: key
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                                lineNumber: 177,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '8px'
                                                },
                                                children: options.map((option)=>{
                                                    const isActive = activeFilters?.[key]?.includes(option);
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onFilterChange?.(key, option),
                                                        style: {
                                                            padding: '8px 16px',
                                                            borderRadius: '99px',
                                                            border: isActive ? '1px solid #d4af37' : '1px solid rgba(255,255,255,0.2)',
                                                            background: isActive ? '#d4af37' : 'transparent',
                                                            color: isActive ? '#000' : '#fff',
                                                            fontSize: '0.85rem',
                                                            cursor: 'pointer'
                                                        },
                                                        children: option
                                                    }, option, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                                        lineNumber: 181,
                                                        columnNumber: 29
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                                lineNumber: 178,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, key, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                        lineNumber: 176,
                                        columnNumber: 79
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 175,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenDropdown(null),
                                style: {
                                    width: '100%',
                                    marginTop: '32px',
                                    padding: '16px',
                                    background: '#f4f2ee',
                                    color: '#000',
                                    border: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 600
                                },
                                children: "Show Results"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
                        lineNumber: 155,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx",
        lineNumber: 16,
        columnNumber: 13
    }, this);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PLPGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-ssr] (ecmascript)");
;
;
;
;
function PLPGrid({ products: propProducts }) {
    // We should ONLY use propProducts if provided, as the parent (ShopLayout) 
    // handles the filtering, sorting, and mapping.
    const displayProducts = propProducts || [];
    // Function to render grid with injected trust strips
    const renderContent = ()=>{
        const items = [];
        let productChunk = [];
        displayProducts.forEach((product, index)=>{
            const productId = product.id || product._id;
            productChunk.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/products/${productId}`,
                style: {
                    textDecoration: 'none',
                    display: 'block'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "plp-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plp-image-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: product.images && product.images.length > 0 && product.images[0] !== "[]" ? product.images[0] : product.image || 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
                                alt: product.name,
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "plp-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "plp-name",
                                    children: product.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "plp-price",
                                    children: product.price.toString().startsWith('₹') ? product.price : `₹${product.price}`
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                                    lineNumber: 23,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            }, productId, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                lineNumber: 15,
                columnNumber: 31
            }, this));
            // Inject Trust Strip after every 4 items
            if ((index + 1) % 4 === 0 && index !== displayProducts.length - 1) {
                items.push(...productChunk);
                items.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "micro-trust-strip",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "trust-text",
                        children: "Premium Fabric • Tailored Fit • Made in India"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, `trust-${index}`, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
                    lineNumber: 30,
                    columnNumber: 28
                }, this));
                productChunk = [];
            }
        });
        // Push remaining
        if (productChunk.length > 0) {
            items.push(...productChunk);
        }
        return items;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "plp-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "plp-grid",
            children: renderContent()
        }, void 0, false, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
            lineNumber: 43,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx",
        lineNumber: 42,
        columnNumber: 13
    }, this);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Layout/Footer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "final-cta",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "footer-bottom",
            children: [
                "© ",
                new Date().getFullYear(),
                " THE GREY STAG."
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Footer.jsx",
            lineNumber: 3,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Layout/Footer.jsx",
        lineNumber: 2,
        columnNumber: 13
    }, this);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Shop/CategoryTabs.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const CATEGORIES = [
    "All",
    "Shirts",
    "Trousers",
    "Chinos",
    "Blazers",
    "Accessories"
];
function CategoryTabs({ activeCategory, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "category-nav-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "category-nav",
            children: CATEGORIES.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: activeCategory === cat ? 'active' : '',
                    onClick: ()=>onSelect(cat),
                    children: cat
                }, cat, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/CategoryTabs.jsx",
                    lineNumber: 6,
                    columnNumber: 43
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/CategoryTabs.jsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/CategoryTabs.jsx",
        lineNumber: 4,
        columnNumber: 13
    }, this);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryLayoutClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Layout/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$FilterPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Shop/FilterPanel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$ProductGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Shop/ProductGrid.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Layout/Footer.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$CategoryTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Shop/CategoryTabs.jsx [app-ssr] (ecmascript)"); // User deleted this but I just recreated it
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-ssr] (ecmascript)"); // Import context
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
function CategoryLayoutClient({ initialCategory, pageTitle }) {
    // State
    const { products: contextProducts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProduct"])(); // Get products from context
    const { openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    // Map Context Products to UI Products (fixing type mismatch)
    const mappedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return contextProducts.map((p)=>({
                id: p.id || p._id,
                name: p.name,
                price: `₹${p.price}`,
                image: p.images && p.images.length > 0 ? p.images[0] : 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000',
                category: typeof p.category === 'object' ? p.category?.name : p.category,
                size: p.sizes,
                color: p.colors?.[0],
                tags: p.occasions,
                fit: 'Regular' // Default
            }));
    }, [
        contextProducts
    ]);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialCategory);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeFilters, setActiveFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        Size: [],
        Color: [],
        Fit: []
    });
    const [sortType, setSortType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    // Initial scroll reset on mount or category change
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, [
        activeCategory
    ]);
    // --- LOGIC: Filter & Sort ---
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // 1. Base Filter determined by Page Title (Intent)
        let baseProducts = mappedProducts;
        // This is a heuristic based on implementation in page.tsx where pageTitle = Occasion Name
        if (pageTitle && pageTitle !== 'All' && ![
            'Shirts',
            'Pants',
            'Trousers',
            'Chinos',
            'Blazers',
            'Accessories'
        ].includes(pageTitle)) {
            const occasionMap = {
                'Meetings': 'Meeting',
                'Office Essentials': 'Office',
                'Students': 'Student',
                'Events': 'Event'
            };
            const tag = occasionMap[pageTitle] || pageTitle.replace(/s$/, ''); // naive singularize
            // Check tags (mapped from occasions)
            baseProducts = mappedProducts.filter((p)=>p.tags?.includes(tag));
        }
        // 2. Category Filter (Active Tab)
        let result = activeCategory === 'All' ? [
            ...baseProducts
        ] : baseProducts.filter((p)=>p.category?.toLowerCase() === activeCategory.toLowerCase());
        // Filters
        if (activeFilters.Size.length > 0) result = result.filter((p)=>p.size?.some((s)=>activeFilters.Size.includes(s)));
        if (activeFilters.Color.length > 0) result = result.filter((p)=>p.color && activeFilters.Color.includes(p.color));
        if (activeFilters.Fit.length > 0) result = result.filter((p)=>p.fit && activeFilters.Fit.includes(p.fit));
        // Sort
        if (sortType === 'price_asc') {
            result.sort((a, b)=>parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        } else if (sortType === 'price_desc') {
            result.sort((a, b)=>parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        }
        return result;
    }, [
        mappedProducts,
        activeCategory,
        activeFilters,
        sortType,
        pageTitle
    ]);
    // Grouped View for 'All'
    const groupedView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (activeCategory !== 'All') return null;
        const categories = [
            "Shirts",
            "Trousers",
            "Chinos",
            "Blazers",
            "Suits",
            "Accessories"
        ];
        const groups = {};
        categories.forEach((cat)=>{
            const catProducts = filteredProducts.filter((p)=>p.category?.toLowerCase() === cat.toLowerCase());
            if (catProducts.length > 0) groups[cat] = catProducts;
        });
        return groups;
    }, [
        activeCategory,
        filteredProducts
    ]);
    // Handlers
    const handleCategoryChange = (category)=>{
        if (category === activeCategory) return;
        // Scroll to top immediately or smoothly preference
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsTransitioning(true);
        setTimeout(()=>{
            setActiveCategory(category);
            setIsTransitioning(false);
            const slug = category === 'All' ? 'all' : category.toLowerCase();
            window.history.pushState(null, '', `/category/${slug}`);
        }, 120);
    };
    const handleFilterChange = (type, value)=>{
        setActiveFilters((prev)=>{
            const current = prev[type];
            return {
                ...prev,
                [type]: current.includes(value) ? current.filter((i)=>i !== value) : [
                    ...current,
                    value
                ]
            };
        });
    };
    const handleSort = (type)=>setSortType(type);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "plp-main-frame",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flexShrink: 0,
                    zIndex: 100,
                    background: '#0f0f0f'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "plp"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "category-row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        minWidth: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$CategoryTabs$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        activeCategory: activeCategory,
                                        onSelect: handleCategoryChange
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                    lineNumber: 128,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                lineNumber: 126,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-bar-row",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$FilterPanel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    activeFilters: activeFilters,
                                    onFilterChange: handleFilterChange,
                                    onSort: handleSort
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                    lineNumber: 135,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                lineNumber: 134,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                lineNumber: 120,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: "plp-scroll-area",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "plp-container",
                        style: {
                            opacity: isTransitioning ? 0 : 1,
                            transition: 'opacity 120ms ease-out'
                        },
                        children: groupedView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '48px'
                            },
                            children: Object.entries(groupedView).map(([cat, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '1.5rem',
                                                marginBottom: '24px',
                                                color: 'rgba(255,255,255,0.8)'
                                            },
                                            children: cat
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                            lineNumber: 148,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$ProductGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            products: items
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                            lineNumber: 154,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                                    lineNumber: 147,
                                    columnNumber: 73
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                            lineNumber: 146,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Shop$2f$ProductGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            products: filteredProducts
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                            lineNumber: 156,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Layout$2f$Footer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Shop/ShopLayout.jsx",
        lineNumber: 118,
        columnNumber: 13
    }, this);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryMosaic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CategoryMosaic() {
    const { categories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContent"])();
    const enabledCategories = categories; // Show all to ensure visibility
    if (enabledCategories.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "category-mosaic",
        children: enabledCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: `/category/${cat.name.toLowerCase()}`,
                className: "mosaic-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: cat.imageUrl || "/assets/product_1.png",
                        className: "mosaic-img",
                        alt: cat.name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Home/CategoryGrid.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mosaic-overlay",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
}),
];

//# sourceMappingURL=Desktop_menx-next_frontend_src_components_791e439a._.js.map
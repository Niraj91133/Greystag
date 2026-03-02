(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (message, type = 'success')=>{
            const id = Math.random().toString(36).substring(2, 9);
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        {
                            id,
                            message,
                            type
                        }
                    ]
            }["ToastProvider.useCallback[showToast]"]);
            setTimeout({
                "ToastProvider.useCallback[showToast]": ()=>{
                    setToasts({
                        "ToastProvider.useCallback[showToast]": (prev)=>prev.filter({
                                "ToastProvider.useCallback[showToast]": (t)=>t.id !== id
                            }["ToastProvider.useCallback[showToast]"])
                    }["ToastProvider.useCallback[showToast]"]);
                }
            }["ToastProvider.useCallback[showToast]"], 3000);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    // Responsive positioning (Bottom on mobile, Top-Right on desktop)
                    right: '24px'
                },
                className: "toast-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        dangerouslySetInnerHTML: {
                            __html: `
                    .toast-container {
                        bottom: 24px;
                        left: 50%;
                        transform: translateX(-50%);
                        align-items: center;
                    }
                    @media (min-width: 768px) {
                        .toast-container {
                            top: 24px;
                            bottom: auto;
                            left: auto;
                            right: 24px;
                            transform: none;
                            align-items: flex-end;
                        }
                    }
                    .toast-enter {
                        animation: slideIn 0.3s ease-out forwards;
                    }
                    @keyframes slideIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toast-enter",
                            style: {
                                backgroundColor: toast.type === 'error' ? '#ef4444' : '#1a1a1a',
                                color: '#fff',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-sans)',
                                letterSpacing: '0.5px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            },
                            children: [
                                toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#d4af37'
                                    },
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
                                    lineNumber: 78,
                                    columnNumber: 54
                                }, this),
                                toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
                                    lineNumber: 79,
                                    columnNumber: 52
                                }, this),
                                toast.message
                            ]
                        }, toast.id, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
                            lineNumber: 64,
                            columnNumber: 39
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx",
        lineNumber: 13,
        columnNumber: 13
    }, this);
}
_s(ToastProvider, "bva7iOXLAgwOJBzZ6Hx6GD8IQA4=");
_c = ToastProvider;
function useToast() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) throw new Error('useToast must be used within ToastProvider');
    return context;
}
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Enterprise Grade API Client
 * Features:
 * - Auto base URL normalization
 * - Access token retry handling
 * - Timeout protection
 * - Structured error handling
 * - Cookie session support
 */ const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8888/api/v1") || "http://localhost:8888/api/v1";
const DEFAULT_TIMEOUT = 60000; // 60s (To handle Render cold-starts)
let isRefreshing = false;
let failedQueue = [];
/* ------------------------------
   Utility: Build Full URL
------------------------------ */ const getFullUrl = (endpoint)=>{
    const base = API_BASE_URL.replace(/\/$/, "");
    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    return `${base}${path}`;
};
/* ------------------------------
   Custom Error Class
------------------------------ */ class StagAppError extends Error {
    constructor(message, status, data){
        super(message);
        this.name = "StagAppError";
        this.status = status;
        this.data = data;
    }
}
/* ------------------------------
   Process Failed Queue (Refresh)
------------------------------ */ const processQueue = (error)=>{
    failedQueue.forEach((prom)=>{
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });
    failedQueue = [];
};
/* ------------------------------
   Token Refresh Handler
------------------------------ */ const refreshToken = async ()=>{
    try {
        const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include"
        });
        if (!response.ok) {
            throw new Error("Refresh failed");
        }
        return true;
    } catch (err) {
        return false;
    }
};
/* ------------------------------
   Main Request Handler
------------------------------ */ const apiRequest = async (endpoint, options = {})=>{
    const url = getFullUrl(endpoint);
    const { timeout = DEFAULT_TIMEOUT, retries = 0, ...fetchOptions } = options;
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), timeout);
    const headers = {
        Accept: "application/json",
        ...fetchOptions.headers
    };
    if (!(fetchOptions.body instanceof FormData) && !headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
    }
    const config = {
        ...fetchOptions,
        headers,
        signal: controller.signal,
        credentials: "include"
    };
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            console.debug(`🚀 ${config.method || "GET"} ${url}`);
        }
        const response = await fetch(url, config);
        clearTimeout(timeoutId);
        const contentType = response.headers.get("content-type");
        let data = null;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            const text = await response.text();
            if (!response.ok) {
                throw new StagAppError(`Server Error: ${response.status}`, response.status, text);
            }
            return text;
        }
        /* ------------------------------
           Handle Unauthorized (401)
        ------------------------------ */ if (response.status === 401 && !url.includes("/auth/refresh") && !url.includes("/auth/login") && !url.includes("/auth/verify-otp")) {
            if (!isRefreshing) {
                isRefreshing = true;
                const success = await refreshToken();
                isRefreshing = false;
                if (!success) {
                    processQueue(new Error("Unauthorized"));
                    // Return the error data silently so callers can handle it (e.g. skipping setUser)
                    return data || {
                        success: false,
                        message: "Unauthorized",
                        statusCode: 401
                    };
                }
                processQueue(null);
            }
            return new Promise((resolve, reject)=>{
                failedQueue.push({
                    resolve: ()=>resolve(apiRequest(endpoint, options)),
                    reject
                });
            });
        }
        if (!response.ok) {
            const message = data?.message || data?.error || `Request failed with status ${response.status}`;
            throw new StagAppError(message, response.status, data);
        }
        return data;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === "AbortError") {
            throw new StagAppError("Request timed out. Please check your connection.", 408);
        }
        if (error.message === "Failed to fetch") {
            throw new StagAppError(`Network error. Unable to connect to server at ${url}. Please ensure the backend is running.`, 503);
        }
        throw error;
    }
};
const api = {
    get: (endpoint, options)=>apiRequest(endpoint, {
            ...options,
            method: "GET"
        }),
    post: (endpoint, body, options)=>apiRequest(endpoint, {
            ...options,
            method: "POST",
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
    put: (endpoint, body, options)=>apiRequest(endpoint, {
            ...options,
            method: "PUT",
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
    patch: (endpoint, body, options)=>apiRequest(endpoint, {
            ...options,
            method: "PATCH",
            body: body instanceof FormData ? body : JSON.stringify(body)
        }),
    delete: (endpoint, options)=>apiRequest(endpoint, {
            ...options,
            method: "DELETE"
        })
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI States
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showUserMenu, setShowUserMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Verify session on app mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const checkAuth = {
                "AuthProvider.useEffect.checkAuth": async ()=>{
                    try {
                        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/auth/me');
                        if (json.success) {
                            setUser(json.data);
                        }
                    } catch (err) {
                        console.log("No active session");
                    } finally{
                        setIsLoaded(true);
                    }
                }
            }["AuthProvider.useEffect.checkAuth"];
            checkAuth();
        }
    }["AuthProvider.useEffect"], []);
    const sendOTP = async (email)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/send-otp', {
                email
            });
            showToast('OTP sent to your email', 'success');
            return true;
        } catch (err) {
            showToast(err.message || 'Failed to send OTP', 'error');
            return false;
        }
    };
    const verifyOTP = async (email, otp)=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/verify-otp', {
                email,
                otp
            });
            if (!json.success || !json.data) {
                showToast(json.message || 'Verification failed', 'error');
                return {
                    success: false
                };
            }
            const userData = json.data.user;
            // Add safety arrays
            userData.addresses = userData.addresses || [];
            userData.orders = userData.orders || [];
            userData.payments = userData.payments || [];
            setUser(userData);
            return {
                success: true,
                needsProfileUpdate: json.data.needsProfileUpdate
            };
        } catch (err) {
            showToast(err.message || 'Invalid OTP', 'error');
            return {
                success: false
            };
        }
    };
    const completeProfile = async (phone, name)=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/complete-profile', {
                phone,
                name
            });
            setUser(json.data);
            showToast('Profile updated!', 'success');
            setShowLogin(false);
            return true;
        } catch (err) {
            showToast(err.message || 'Update failed', 'error');
            return false;
        }
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/logout');
            setUser(null);
            setShowUserMenu(false);
            showToast('Logged out successfully', 'info');
            // Dispatch custom event for other contexts to clear state
            window.dispatchEvent(new CustomEvent('auth:logout'));
            router.push('/');
        } catch (err) {
            showToast('Logout failed', 'error');
        }
    };
    // --- Address Management ---
    const addAddress = async (addressData)=>{
        try {
            // Address data usually has label and detail (formatted string)
            // Backend expects structured fields. We'll try to map or adjust context.
            // For now, let's map 'detail' into 'line1' if it's a string.
            const payload = {
                label: addressData.label,
                line1: addressData.detail || addressData.address,
                city: addressData.city || 'Unknown',
                state: addressData.state || 'Unknown',
                pincode: addressData.pincode || '000000',
                isDefault: addressData.default || false
            };
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/addresses', payload);
            setUser((prev)=>({
                    ...prev,
                    addresses: [
                        ...prev.addresses || [],
                        json.data
                    ]
                }));
            showToast('Address added', 'success');
            return true;
        } catch (err) {
            showToast('Failed to add address', 'error');
            return false;
        }
    };
    const removeAddress = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/addresses/${id}`);
            setUser((prev)=>({
                    ...prev,
                    addresses: prev.addresses.filter((a)=>a.id !== id)
                }));
            showToast('Address removed', 'success');
            return true;
        } catch (err) {
            showToast('Failed to remove address', 'error');
            return false;
        }
    };
    const saveMeasurements = async (measurements)=>{
        try {
            console.log('[CRM] Saving measurements...', measurements);
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/auth/measurements', measurements);
            console.log('[CRM] Save result:', json);
            setUser(json.data);
            showToast('Tailoring profile updated!', 'success');
            return true;
        } catch (err) {
            console.error('[CRM] Save failed:', err);
            showToast(err.message || 'Failed to save measurements', 'error');
            return false;
        }
    };
    // --- Placeholder/Mock for UI Completeness ---
    const addPayment = async (cardData)=>{
        showToast('Payment methods are currently managed during checkout', 'info');
    };
    const deactivateAccount = async ()=>{
        showToast('Please contact support to deactivate your account', 'info');
    };
    const openLogin = ()=>setShowLogin(true);
    const closeLogin = ()=>setShowLogin(false);
    const openUserMenu = ()=>setShowUserMenu(true);
    const closeUserMenu = ()=>setShowUserMenu(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isLoaded,
            sendOTP,
            verifyOTP,
            completeProfile,
            logout,
            addAddress,
            removeAddress,
            addPayment,
            deactivateAccount,
            saveMeasurements,
            showLogin,
            openLogin,
            closeLogin,
            showUserMenu,
            openUserMenu,
            closeUserMenu
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx",
        lineNumber: 174,
        columnNumber: 9
    }, this);
}
_s(AuthProvider, "nzPFbNINeX775G5yhFwJ/YVPsZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/lib/gtag.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GA_TRACKING_ID",
    ()=>GA_TRACKING_ID,
    "addToCart",
    ()=>addToCart,
    "event",
    ()=>event,
    "pageview",
    ()=>pageview,
    "purchase",
    ()=>purchase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const GA_TRACKING_ID = ("TURBOPACK compile-time value", "G-JJBMT442CR");
const pageview = (url)=>{
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url
    });
};
const event = ({ action, category, label, value, ...rest })=>{
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest
    });
};
const addToCart = (product)=>{
    event({
        action: 'add_to_cart',
        category: 'ecommerce',
        currency: 'INR',
        value: product.price,
        items: [
            {
                item_id: product.id,
                item_name: product.name,
                price: product.price,
                quantity: 1
            }
        ]
    });
};
const purchase = (order)=>{
    event({
        action: 'purchase',
        category: 'ecommerce',
        transaction_id: order.id,
        value: order.total,
        currency: 'INR',
        items: order.orderItems.map((item)=>({
                item_id: item.productId,
                item_name: item.product?.name || 'Product',
                price: item.price,
                quantity: item.quantity
            }))
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$gtag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/gtag.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartItems, setCartItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Load from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const savedCart = localStorage.getItem('menx_cart');
            if (savedCart) {
                try {
                    setCartItems(JSON.parse(savedCart));
                } catch (error) {
                    console.error('Failed to parse cart from localStorage:', error);
                }
            }
        }
    }["CartProvider.useEffect"], []);
    // Save to localStorage whenever cartItems changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            localStorage.setItem('menx_cart', JSON.stringify(cartItems));
        }
    }["CartProvider.useEffect"], [
        cartItems
    ]);
    // Listen for Logout to clear cart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartProvider.useEffect": ()=>{
            const handleLogout = {
                "CartProvider.useEffect.handleLogout": ()=>{
                    setCartItems([]);
                    localStorage.removeItem('menx_cart');
                }
            }["CartProvider.useEffect.handleLogout"];
            window.addEventListener('auth:logout', handleLogout);
            return ({
                "CartProvider.useEffect": ()=>window.removeEventListener('auth:logout', handleLogout)
            })["CartProvider.useEffect"];
        }
    }["CartProvider.useEffect"], []);
    const openCart = ()=>{
        setIsCheckoutOpen(false);
        setIsOpen(true);
    };
    const closeCart = ()=>setIsOpen(false);
    const openCheckout = ()=>{
        setIsOpen(false);
        setIsCheckoutOpen(true);
    };
    const closeCheckout = ()=>setIsCheckoutOpen(false);
    const addToCart = (newItem, autoOpenCart = true, skipIfExists = false)=>{
        const normalizedItem = {
            ...newItem,
            id: newItem.id || newItem._id // Normalize ID
        };
        // GA Tracking
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$gtag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"]({
            id: normalizedItem.id,
            name: normalizedItem.name,
            price: typeof normalizedItem.price === 'string' ? parseFloat(normalizedItem.price.replace(/[^0-9.]/g, '')) : normalizedItem.price
        });
        setCartItems((prev)=>{
            const existingIndex = prev.findIndex((item)=>(item.id === normalizedItem.id || item._id === normalizedItem.id) && item.size === normalizedItem.size && item.color === normalizedItem.color);
            if (existingIndex > -1) {
                if (skipIfExists) return prev;
                const updated = [
                    ...prev
                ];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + 1
                };
                return updated;
            } else {
                return [
                    ...prev,
                    {
                        ...normalizedItem,
                        quantity: 1
                    }
                ];
            }
        });
        if (autoOpenCart) openCart();
    };
    const removeFromCart = (itemId, size, color)=>{
        setCartItems((prev)=>prev.filter((item)=>!((item.id === itemId || item._id === itemId) && item.size === size && item.color === color)));
    };
    const updateQuantity = (itemId, size, color, delta)=>{
        setCartItems((prev)=>{
            return prev.map((item)=>{
                if ((item.id === itemId || item._id === itemId) && item.size === size && item.color === color) {
                    const newQty = Math.max(1, item.quantity + delta);
                    return {
                        ...item,
                        quantity: newQty
                    };
                }
                return item;
            });
        });
    };
    const clearCart = ()=>{
        setCartItems([]);
    };
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[cartCount]": ()=>{
            return cartItems.reduce({
                "CartProvider.useMemo[cartCount]": (total, item)=>total + item.quantity
            }["CartProvider.useMemo[cartCount]"], 0);
        }
    }["CartProvider.useMemo[cartCount]"], [
        cartItems
    ]);
    const cartTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartProvider.useMemo[cartTotal]": ()=>{
            return cartItems.reduce({
                "CartProvider.useMemo[cartTotal]": (total, item)=>{
                    if (!item.price) return total;
                    // Handle if price is already a number
                    if (typeof item.price === 'number') {
                        return total + item.price * item.quantity;
                    }
                    // Basic parsing: remove non-numeric except dot for valid strings
                    const priceString = String(item.price);
                    const priceValue = parseFloat(priceString.replace(/[^0-9.]/g, '')) || 0;
                    return total + priceValue * item.quantity;
                }
            }["CartProvider.useMemo[cartTotal]"], 0);
        }
    }["CartProvider.useMemo[cartTotal]"], [
        cartItems
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            isOpen,
            isCheckoutOpen,
            openCart,
            closeCart,
            openCheckout,
            closeCheckout,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartCount,
            cartItems,
            cartTotal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx",
        lineNumber: 114,
        columnNumber: 13
    }, this);
}
_s(CartProvider, "GL4oUYZoRRnv7z7NvOr72thg3uE=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentProvider",
    ()=>ContentProvider,
    "useContent",
    ()=>useContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const DEFAULT_VIDEO_SCROLL = [
    {
        id: 'v1',
        videoUrl: 'https://cdn.pixabay.com/video/2021/04/12/70914-536968846_tiny.mp4',
        linkedProductId: 'seed_prod_1',
        title: 'Midnight Suit'
    },
    {
        id: 'v2',
        videoUrl: 'https://cdn.pixabay.com/video/2021/04/12/70915-536968847_tiny.mp4',
        linkedProductId: 'seed_prod_2',
        title: 'Summer Collection'
    },
    {
        id: 'v3',
        videoUrl: 'https://cdn.pixabay.com/video/2021/04/12/70916-536968848_tiny.mp4',
        linkedProductId: 'seed_prod_3',
        title: 'Royal Ethnic'
    }
];
const DEFAULT_HANDPICKED = [
    {
        id: '1',
        title: "Meetings",
        slug: "meetings",
        imageUrl: "/assets/product_1.png"
    },
    {
        id: '2',
        title: "Office Essentials",
        slug: "office-essentials",
        imageUrl: "/assets/product_2.png"
    },
    {
        id: '3',
        title: "Students",
        slug: "students",
        imageUrl: "/assets/journal_1.png"
    },
    {
        id: '4',
        title: "Events",
        slug: "events",
        imageUrl: "/assets/journal_2.png"
    }
];
const DEFAULT_HERO = {
    isEnabled: true,
    title: 'THE GREY STAG',
    subtitle: 'Redefining Modern Luxury. Precision Tailoring for the Contemporary Gentleman.',
    mediaUrl: 'https://v.ftcdn.net/05/60/05/65/700_F_560056525_N3Q3c3c3c3c3c3c3c3c3c3c3c3c3c3c3.mp4',
    mediaType: 'video',
    ctaText: 'Shop the Collection',
    ctaLink: '/category/all'
};
const DEFAULT_VIDEO_SECTION = {
    id: 'promo-video',
    title: 'Behind the Seams',
    content: 'https://www.instagram.com/reel/example'
};
const DEFAULT_CATEGORIES = [
    {
        id: 'shirts',
        name: 'Shirts',
        description: 'Crisp cottons and linens.',
        imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2940&auto=format&fit=crop',
        isEnabled: true
    },
    {
        id: 'trousers',
        name: 'Trousers',
        description: 'Tailored fit for every occasion.',
        imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&w=2787&auto=format&fit=crop',
        isEnabled: true
    },
    {
        id: 'blazers',
        name: 'Blazers',
        description: 'The cornerstone of a modern wardrobe.',
        imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000&auto=format&fit=crop',
        isEnabled: true
    },
    {
        id: 'chinos',
        name: 'Chinos',
        description: 'Relaxed elegance.',
        imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2787&auto=format&fit=crop',
        isEnabled: true
    }
];
const DEFAULT_JOURNAL = [
    {
        id: '1',
        title: 'The Art of the Long Weekend',
        date: 'Oct 12, 2023',
        author: 'Editor',
        category: 'Travel',
        status: 'published',
        imageUrl: 'https://images.unsplash.com/photo-1470246231908-0125c1b69382?q=80&w=2836&auto=format&fit=crop',
        content: 'Discover how to pack efficiently without sacrificing style.'
    },
    {
        id: '2',
        title: 'Minimalism in Modern Metros',
        date: 'Sep 28, 2023',
        author: 'Editor',
        category: 'Design',
        status: 'published',
        imageUrl: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2950&auto=format&fit=crop',
        content: 'Navigating the city with a refined palette.'
    }
];
const DEFAULT_ESSENTIALS_CONFIG = {
    isEnabled: true,
    count: 8,
    sortOrder: 'newest',
    orderedProductIds: []
};
const ContentContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
;
function ContentProvider({ children }) {
    _s();
    const [hero, setHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_HERO);
    const [videoSection, setVideoSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_VIDEO_SECTION);
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_CATEGORIES);
    const [videoScrollItems, setVideoScrollItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_VIDEO_SCROLL);
    const [handpickedItems, setHandpickedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_HANDPICKED);
    const [journal, setJournal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_JOURNAL);
    const [essentialsConfig, setEssentialsConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_ESSENTIALS_CONFIG);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hydrate from Server API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentProvider.useEffect": ()=>{
            const fetchContent = {
                "ContentProvider.useEffect.fetchContent": async ()=>{
                    try {
                        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/cms?key=global-cms');
                        const data = json.data;
                        if (data) {
                            if (data.hero) setHero(data.hero);
                            if (data.videoSection) setVideoSection(data.videoSection);
                            if (data.categories) setCategories(data.categories);
                            if (data.videoScrollItems) setVideoScrollItems(data.videoScrollItems);
                            if (data.handpickedItems) setHandpickedItems(data.handpickedItems);
                            if (data.journal) setJournal(data.journal);
                            if (data.essentialsConfig) setEssentialsConfig(data.essentialsConfig);
                        }
                    } catch (error) {
                        console.error('Failed to load CMS content:', error);
                    } finally{
                        setIsLoaded(true);
                    }
                }
            }["ContentProvider.useEffect.fetchContent"];
            fetchContent();
        }
    }["ContentProvider.useEffect"], []);
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Persist changes to Server API - ADMIN ONLY
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentProvider.useEffect": ()=>{
            if (!isLoaded || user?.role !== 'ADMIN') return;
            const saveContent = {
                "ContentProvider.useEffect.saveContent": async ()=>{
                    try {
                        const payload = {
                            hero,
                            videoSection,
                            categories,
                            videoScrollItems,
                            handpickedItems,
                            journal,
                            essentialsConfig
                        };
                        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/cms', {
                            key: 'global-cms',
                            data: payload
                        });
                    } catch (error) {
                        console.error('Failed to auto-save CMS content:', error);
                    }
                }
            }["ContentProvider.useEffect.saveContent"];
            // Debounce slightly to avoid rapid-fire saves if multiple updates happen
            const timeoutId = setTimeout(saveContent, 5000);
            return ({
                "ContentProvider.useEffect": ()=>clearTimeout(timeoutId)
            })["ContentProvider.useEffect"];
        }
    }["ContentProvider.useEffect"], [
        hero,
        videoSection,
        categories,
        videoScrollItems,
        handpickedItems,
        journal,
        essentialsConfig,
        isLoaded,
        user
    ]);
    const updateHero = (data)=>{
        setHero((prev)=>({
                ...prev,
                ...data
            }));
    };
    const updateVideoSection = (data)=>{
        setVideoSection((prev)=>({
                ...prev,
                ...data
            }));
    };
    const updateCategory = (id, data)=>{
        setCategories((prev)=>prev.map((cat)=>cat.id === id ? {
                    ...cat,
                    ...data
                } : cat));
    };
    const addCategory = (name)=>{
        const id = name.toLowerCase().replace(/\s+/g, '-');
        const newCat = {
            id,
            name,
            description: '',
            imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2940&auto=format&fit=crop',
            isEnabled: true
        };
        setCategories((prev)=>[
                ...prev,
                newCat
            ]);
    };
    const deleteCategory = (id)=>{
        setCategories((prev)=>prev.filter((cat)=>cat.id !== id));
    };
    const addVideoScrollItem = (item)=>{
        const newItem = {
            ...item,
            id: Date.now().toString()
        };
        setVideoScrollItems((prev)=>[
                ...prev,
                newItem
            ]);
    };
    const deleteVideoScrollItem = (id)=>{
        setVideoScrollItems((prev)=>prev.filter((item)=>item.id !== id));
    };
    const updateHandpickedItem = (id, data)=>{
        setHandpickedItems((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...data
                } : item));
    };
    const addJournalEntry = (entry)=>{
        const newEntry = {
            ...entry,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        };
        setJournal((prev)=>[
                newEntry,
                ...prev
            ]);
    };
    const updateJournalEntry = (id, data)=>{
        setJournal((prev)=>prev.map((post)=>post.id === id ? {
                    ...post,
                    ...data
                } : post));
    };
    const deleteJournalEntry = (id)=>{
        setJournal((prev)=>prev.filter((post)=>post.id !== id));
    };
    const updateEssentialsConfig = (data)=>{
        setEssentialsConfig((prev)=>({
                ...prev,
                ...data
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentContext.Provider, {
        value: {
            hero,
            videoSection,
            categories,
            videoScrollItems,
            journal,
            essentialsConfig,
            handpickedItems,
            updateHero,
            updateVideoSection,
            updateCategory,
            addCategory,
            deleteCategory,
            addVideoScrollItem,
            deleteVideoScrollItem,
            addJournalEntry,
            updateJournalEntry,
            deleteJournalEntry,
            updateEssentialsConfig,
            updateHandpickedItem
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx",
        lineNumber: 202,
        columnNumber: 13
    }, this);
}
_s(ContentProvider, "0dBgfq0Mkceuz/WjWWvCUQpTZQU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ContentProvider;
function useContent() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
}
_s1(useContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ContentProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductProvider",
    ()=>ProductProvider,
    "useProduct",
    ()=>useProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// ProductContext with MERN Stack Integration
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ProductContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ProductProvider({ children }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch Products from Backend via API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductProvider.useEffect": ()=>{
            const fetchProducts = {
                "ProductProvider.useEffect.fetchProducts": async ()=>{
                    try {
                        const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/products');
                        const productsArray = Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [];
                        setProducts(productsArray);
                    } catch (error) {
                        console.error('Failed to fetch products:', error);
                    } finally{
                        setIsLoaded(true);
                    }
                }
            }["ProductProvider.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["ProductProvider.useEffect"], []);
    const addProduct = async (product)=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/products', product);
            const newProduct = json.data || json;
            setProducts((prev)=>[
                    newProduct,
                    ...prev
                ]);
            return true;
        } catch (error) {
            console.error('Failed to add product:', error);
            return false;
        }
    };
    const updateProduct = async (id, data)=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/products/${id}`, data);
            const updatedProduct = json.data || json;
            setProducts((prev)=>prev.map((p)=>p._id === id || p.id === id ? updatedProduct : p));
            return true;
        } catch (error) {
            console.error('Failed to update product:', error);
            return false;
        }
    };
    const deleteProduct = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/products/${id}`);
            setProducts((prev)=>prev.filter((p)=>p._id !== id && p.id !== id));
            return true;
        } catch (error) {
            console.error('Failed to delete product:', error);
            return false;
        }
    };
    const uploadImages = async (formData)=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/products/upload', formData);
            return json.data; // Array of URLs
        } catch (error) {
            console.error('Failed to upload images:', error);
            return null;
        }
    };
    const getProduct = (id)=>products.find((p)=>p._id === id || p.id === id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductContext.Provider, {
        value: {
            products,
            addProduct,
            updateProduct,
            deleteProduct,
            getProduct,
            uploadImages,
            isLoaded
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
_s(ProductProvider, "/+skiyqM65XssRbAbrj2E2owI7Q=");
_c = ProductProvider;
function useProduct() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ProductContext);
    if (context === undefined) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}
_s1(useProduct, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ProductProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/context/WishlistContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WishlistProvider({ children }) {
    _s();
    const { user, openLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchWishlist = async ()=>{
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/wishlist');
            setWishlist(json.data || []);
        } catch (error) {
            console.error('Failed to fetch wishlist:', error);
        } finally{
            setIsLoaded(true);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WishlistProvider.useEffect": ()=>{
            if (user) {
                fetchWishlist();
            } else {
                setWishlist([]);
                setIsLoaded(true);
            }
        }
    }["WishlistProvider.useEffect"], [
        user
    ]);
    const toggleWishlist = async (productId)=>{
        if (!user) {
            openLogin();
            return false;
        }
        try {
            const json = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/wishlist/toggle`, {
                productId
            });
            setWishlist(json.data || []);
            const isNowIn = (json.data || []).some((item)=>item.productId === productId);
            showToast(isNowIn ? 'Added to favorites' : 'Removed from favorites', 'success');
            return true;
        } catch (error) {
            console.error('Failed to toggle wishlist:', error);
            showToast('Failed to update favorites', 'error');
            return false;
        }
    };
    const isInWishlist = (productId)=>{
        return wishlist.some((item)=>item.productId === productId || item.product?.id === productId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext.Provider, {
        value: {
            wishlist,
            toggleWishlist,
            isInWishlist,
            isLoaded
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/context/WishlistContext.jsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_s(WishlistProvider, "+pE5IzPiX6oVxd1jQgN3R+HJ73c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = WishlistProvider;
function useWishlist() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
_s1(useWishlist, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WishlistProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CartDrawer() {
    _s();
    const { isOpen, closeCart, cartItems, cartTotal, removeFromCart, updateQuantity, openCheckout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { user, openLogin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Prevent body scroll when cart is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartDrawer.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return ({
                "CartDrawer.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["CartDrawer.useEffect"];
        }
    }["CartDrawer.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closeCart,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 9998,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '480px',
                    backgroundColor: '#0f0f0f',
                    zIndex: 9999,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.25rem',
                                    color: '#f4f2ee'
                                },
                                children: [
                                    "Your Bag (",
                                    cartItems.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                lineNumber: 61,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeCart,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#f4f2ee',
                                    padding: '8px',
                                    cursor: 'pointer',
                                    opacity: 0.7
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                            lineNumber: 73,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                            lineNumber: 74,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                    lineNumber: 72,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                lineNumber: 64,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '24px',
                            color: '#f4f2ee'
                        },
                        children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: 'var(--font-serif)',
                                        fontSize: '1.5rem',
                                        marginBottom: '16px',
                                        fontWeight: 400
                                    },
                                    children: "Your bag is empty"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                    lineNumber: 94,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '0.9rem'
                                    },
                                    children: "Start your collection with our essentials."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                    lineNumber: 100,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeCart,
                                    style: {
                                        marginTop: '24px',
                                        padding: '12px 24px',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        background: 'transparent',
                                        color: '#fff',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        fontSize: '0.8rem',
                                        letterSpacing: '1px'
                                    },
                                    children: "Continue Shopping"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                    lineNumber: 101,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                            lineNumber: 86,
                            columnNumber: 44
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px'
                            },
                            children: cartItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '16px',
                                        paddingBottom: '24px',
                                        borderBottom: '1px solid rgba(255,255,255,0.06)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '80px',
                                                aspectRatio: '3/4',
                                                position: 'relative',
                                                flexShrink: 0
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image || '/images/placeholder.jpg',
                                                alt: item.name,
                                                onError: (e)=>{
                                                    if (e.target.src.includes('placeholder.jpg')) return;
                                                    e.target.src = '/images/placeholder.jpg';
                                                },
                                                style: {
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    borderRadius: '4px',
                                                    backgroundColor: '#1a1a1a'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                            lineNumber: 122,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                flex: 1,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                justifyContent: 'space-between',
                                                                alignItems: 'flex-start'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontSize: '0.95rem',
                                                                        fontWeight: 500,
                                                                        fontFamily: 'var(--font-serif)',
                                                                        margin: 0
                                                                    },
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeFromCart(item.id, item.size, item.color),
                                                                    style: {
                                                                        background: 'none',
                                                                        border: 'none',
                                                                        color: '#fff',
                                                                        opacity: 0.4,
                                                                        cursor: 'pointer',
                                                                        padding: 0
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "16",
                                                                        height: "16",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "1.5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                x1: "18",
                                                                                y1: "6",
                                                                                x2: "6",
                                                                                y2: "18"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                                lineNumber: 141,
                                                                                columnNumber: 45
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                x1: "6",
                                                                                y1: "6",
                                                                                x2: "18",
                                                                                y2: "18"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                                lineNumber: 142,
                                                                                columnNumber: 45
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                            lineNumber: 137,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '0.85rem',
                                                                opacity: 0.6,
                                                                marginTop: '4px'
                                                            },
                                                            children: [
                                                                item.color,
                                                                " ",
                                                                item.size && ` / ${item.size}`
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '12px',
                                                                marginTop: '12px'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.size, item.color, -1),
                                                                    style: {
                                                                        width: '24px',
                                                                        height: '24px',
                                                                        borderRadius: '50%',
                                                                        border: '1px solid rgba(255,255,255,0.2)',
                                                                        background: 'none',
                                                                        color: '#fff',
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontSize: '1.2rem'
                                                                    },
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '0.9rem',
                                                                        width: '20px',
                                                                        textAlign: 'center'
                                                                    },
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                    lineNumber: 157,
                                                                    columnNumber: 37
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.size, item.color, 1),
                                                                    style: {
                                                                        width: '24px',
                                                                        height: '24px',
                                                                        borderRadius: '50%',
                                                                        border: '1px solid rgba(255,255,255,0.2)',
                                                                        background: 'none',
                                                                        color: '#fff',
                                                                        cursor: 'pointer',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        fontSize: '1rem'
                                                                    },
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                            lineNumber: 152,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                    lineNumber: 136,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: '#d4af37',
                                                        fontSize: '1rem'
                                                    },
                                                    children: item.price
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                                    lineNumber: 165,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                            lineNumber: 135,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, `${item.id}-${item.size}-${item.color}-${index}`, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                    lineNumber: 115,
                                    columnNumber: 54
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                            lineNumber: 114,
                            columnNumber: 28
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                            backgroundColor: '#0f0f0f'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '24px',
                                    fontSize: '1rem',
                                    color: '#f4f2ee',
                                    fontFamily: 'var(--font-serif)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                        lineNumber: 187,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "₹",
                                            cartTotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                        lineNumber: 188,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                lineNumber: 179,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    closeCart();
                                    if (user) {
                                        openCheckout();
                                    } else {
                                        openLogin();
                                    }
                                },
                                style: {
                                    display: 'block',
                                    width: '100%',
                                    padding: '16px',
                                    backgroundColor: '#f4f2ee',
                                    color: '#0f0f0f',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    fontSize: '0.85rem',
                                    textAlign: 'center',
                                    border: 'none',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                },
                                children: "Proceed to Checkout"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                                lineNumber: 191,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                        lineNumber: 174,
                        columnNumber: 39
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(CartDrawer, "+r9bC/SzBRArEqP6yzEj6E5RDbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckoutDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$gtag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/lib/gtag.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CheckoutDrawer() {
    _s();
    const { isCheckoutOpen, closeCheckout, cartItems, cartTotal, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const { user, addAddress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('upi');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedAddressId, setSavedAddressId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutDrawer.useEffect": ()=>{
            if (user && isCheckoutOpen) {
                setFormData({
                    "CheckoutDrawer.useEffect": (prev)=>({
                            ...prev,
                            name: prev.name || user.name || '',
                            phone: prev.phone || user.phone || ''
                        })
                }["CheckoutDrawer.useEffect"]);
                // Auto-select default address if available and no address is currently selected
                if (!savedAddressId) {
                    const defaultAddr = user.addresses?.find({
                        "CheckoutDrawer.useEffect": (a)=>a.isDefault
                    }["CheckoutDrawer.useEffect"]);
                    if (defaultAddr) {
                        setSavedAddressId(defaultAddr.id || defaultAddr._id);
                        setFormData({
                            "CheckoutDrawer.useEffect": (prev)=>({
                                    ...prev,
                                    address: defaultAddr.line1 || defaultAddr.detail || '',
                                    city: defaultAddr.city || '',
                                    state: defaultAddr.state || '',
                                    pincode: defaultAddr.pincode || ''
                                })
                        }["CheckoutDrawer.useEffect"]);
                    }
                }
            }
        }
    }["CheckoutDrawer.useEffect"], [
        user,
        isCheckoutOpen
    ]);
    const validateForm = ()=>{
        const newErrors = {};
        // Sanitize phone for validation (strip non-digits)
        const cleanPhone = formData.phone.replace(/\D/g, '');
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (cleanPhone.length < 10) newErrors.phone = 'Enter valid 10-digit number';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = '6-digit pincode required';
        if (!formData.city.trim()) newErrors.city = 'City required';
        if (!formData.state.trim()) newErrors.state = 'State required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSaveAddress = async ()=>{
        if (!validateForm()) {
            showToast('Please fill all details to save', 'error');
            return;
        }
        const label = `${formData.city} Address`;
        const detail = `${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
        await addAddress({
            label,
            detail,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            default: false
        });
    };
    const handleSelectAddress = (e)=>{
        const addrId = e.target.value;
        setSavedAddressId(addrId);
        if (!addrId) {
            // "New Address" selected - clear form
            setFormData((prev)=>({
                    ...prev,
                    address: '',
                    pincode: '',
                    city: '',
                    state: ''
                }));
            return;
        }
        if (user) {
            const selected = user.addresses.find((a)=>a.id === addrId || a._id === addrId);
            if (selected) {
                setFormData((prev)=>({
                        ...prev,
                        address: selected.line1 || selected.detail || '',
                        city: selected.city || '',
                        state: selected.state || '',
                        pincode: selected.pincode || ''
                    }));
                setErrors({}); // Clear errors when a valid address is selected
            }
        }
    };
    const loadRazorpay = ()=>{
        return new Promise((resolve)=>{
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = ()=>resolve(true);
            script.onerror = ()=>resolve(false);
            document.body.appendChild(script);
        });
    };
    const handlePlaceOrder = async ()=>{
        if (!validateForm()) {
            showToast('Please fix errors in the form', 'error');
            return;
        }
        setIsLoading(true);
        try {
            const isRPayLoaded = await loadRazorpay();
            if (!isRPayLoaded) {
                showToast('Failed to load payment gateway', 'error');
                setIsLoading(false);
                return;
            }
            const orderItems = cartItems.map((item)=>({
                    productId: item.id || item._id,
                    quantity: item.quantity,
                    size: item.size,
                    color: item.color,
                    customization: item.customization
                }));
            const orderJson = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/orders', {
                items: orderItems,
                shippingAddressId: savedAddressId || null
            });
            const paymentJson = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/payments/create-order', {
                orderId: orderJson.data.id || orderJson.data._id
            });
            const options = {
                key: paymentJson.data.key,
                amount: paymentJson.data.amount,
                currency: paymentJson.data.currency,
                name: "The Grey Stag",
                description: `Order #${orderJson.data.id.substring(0, 8)}`,
                image: "/assets/logo.png",
                order_id: paymentJson.data.id,
                prefill: {
                    name: formData.name,
                    contact: formData.phone,
                    email: user?.email || ""
                },
                handler: async function(response) {
                    setIsLoading(true);
                    try {
                        const verifyJson = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/payments/verify-payment', {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            orderId: orderJson.data.id || orderJson.data._id
                        });
                        if (verifyJson.success) {
                            setIsSuccess(true);
                            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$lib$2f$gtag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["purchase"]({
                                id: orderJson.data.id,
                                total: orderJson.data.total,
                                orderItems: orderItems
                            });
                            clearCart();
                            showToast('Order Placed Successfully!', 'success');
                        }
                    } catch (err) {
                        showToast('Payment verification failed', 'error');
                    } finally{
                        setIsLoading(false);
                    }
                },
                modal: {
                    ondismiss: ()=>setIsLoading(false)
                },
                theme: {
                    color: "#d4af37"
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            showToast(error.message || 'Payment failed', 'error');
            setIsLoading(false);
        }
    };
    const handleClose = ()=>{
        closeCheckout();
        setTimeout(()=>{
            setIsSuccess(false);
            setFormData({
                name: '',
                phone: '',
                address: '',
                pincode: '',
                city: '',
                state: ''
            });
        }, 500);
    };
    const inputStyle = (hasError)=>({
            width: '100%',
            padding: '12px 16px',
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: `1px solid ${hasError ? '#ef4444' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '4px',
            color: '#fff',
            fontSize: '0.95rem',
            outline: 'none',
            marginBottom: hasError ? '4px' : '16px'
        });
    if (!isCheckoutOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleClose,
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 1001
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '500px',
                    backgroundColor: '#0f0f0f',
                    zIndex: 1002,
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    color: '#f4f2ee'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.25rem'
                                },
                                children: isSuccess ? 'Confirmed' : 'Checkout'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                lineNumber: 246,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    cursor: 'pointer'
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                        lineNumber: 245,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '24px'
                        },
                        children: isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '3rem',
                                        color: '#d4af37',
                                        marginBottom: '20px'
                                    },
                                    children: "✓"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 253,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: '2rem',
                                        marginBottom: '10px'
                                    },
                                    children: "Thank You"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 254,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Your order has been placed."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 255,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleClose,
                                    className: "btn-primary",
                                    style: {
                                        marginTop: '30px'
                                    },
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 256,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                            lineNumber: 252,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '30px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '16px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '0.9rem',
                                                        textTransform: 'uppercase',
                                                        opacity: 0.7
                                                    },
                                                    children: "Shipping"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 37
                                                }, this),
                                                user?.addresses?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: savedAddressId,
                                                    onChange: handleSelectAddress,
                                                    style: {
                                                        background: '#222',
                                                        color: '#d4af37',
                                                        border: '1px solid #333',
                                                        borderRadius: '4px',
                                                        fontSize: '0.8rem',
                                                        padding: '4px 8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "+ Use a New Address"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 45
                                                        }, this),
                                                        user.addresses.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: a.id || a._id,
                                                                children: [
                                                                    "Deliver to: ",
                                                                    a.label
                                                                ]
                                                            }, a.id || a._id, true, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                                lineNumber: 270,
                                                                columnNumber: 70
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 261,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            value: formData.name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                }),
                                            style: inputStyle(!!errors.name)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 274,
                                            columnNumber: 33
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#ef4444',
                                                fontSize: '0.7rem',
                                                marginBottom: '8px',
                                                marginTop: '-12px'
                                            },
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 275,
                                            columnNumber: 49
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Phone",
                                                            value: formData.phone,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    phone: e.target.value
                                                                }),
                                                            style: inputStyle(!!errors.phone)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 279,
                                                            columnNumber: 41
                                                        }, this),
                                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#ef4444',
                                                                fontSize: '0.7rem',
                                                                marginBottom: '8px',
                                                                marginTop: '-12px'
                                                            },
                                                            children: errors.phone
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 280,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Pincode",
                                                            value: formData.pincode,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    pincode: e.target.value
                                                                }),
                                                            style: inputStyle(!!errors.pincode)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 283,
                                                            columnNumber: 41
                                                        }, this),
                                                        errors.pincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#ef4444',
                                                                fontSize: '0.7rem',
                                                                marginBottom: '8px',
                                                                marginTop: '-12px'
                                                            },
                                                            children: errors.pincode
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 284,
                                                            columnNumber: 60
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 277,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            placeholder: "Address",
                                            value: formData.address,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    address: e.target.value
                                                }),
                                            rows: 3,
                                            style: {
                                                ...inputStyle(!!errors.address),
                                                height: 'auto'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 288,
                                            columnNumber: 33
                                        }, this),
                                        errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#ef4444',
                                                fontSize: '0.7rem',
                                                marginBottom: '8px',
                                                marginTop: '-12px'
                                            },
                                            children: errors.address
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 289,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "City",
                                                            value: formData.city,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    city: e.target.value
                                                                }),
                                                            style: inputStyle(!!errors.city)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 293,
                                                            columnNumber: 41
                                                        }, this),
                                                        errors.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#ef4444',
                                                                fontSize: '0.7rem',
                                                                marginBottom: '8px',
                                                                marginTop: '-12px'
                                                            },
                                                            children: errors.city
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 294,
                                                            columnNumber: 57
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 292,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "State",
                                                            value: formData.state,
                                                            onChange: (e)=>setFormData({
                                                                    ...formData,
                                                                    state: e.target.value
                                                                }),
                                                            style: inputStyle(!!errors.state)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 41
                                                        }, this),
                                                        errors.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#ef4444',
                                                                fontSize: '0.7rem',
                                                                marginBottom: '8px',
                                                                marginTop: '-12px'
                                                            },
                                                            children: errors.state
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                            lineNumber: 298,
                                                            columnNumber: 58
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 296,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 291,
                                            columnNumber: 33
                                        }, this),
                                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveAddress,
                                            style: {
                                                background: 'none',
                                                border: '1px solid #d4af37',
                                                color: '#d4af37',
                                                padding: '6px 12px',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem',
                                                cursor: 'pointer'
                                            },
                                            children: "Save Address"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 301,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 260,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        borderTop: '1px solid #222',
                                        paddingTop: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '0.9rem',
                                                textTransform: 'uppercase',
                                                opacity: 0.7,
                                                marginBottom: '15px'
                                            },
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 305,
                                            columnNumber: 33
                                        }, this),
                                        cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginBottom: '10px',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            item.quantity,
                                                            "x ",
                                                            item.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                        lineNumber: 308,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "₹",
                                                            item.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                lineNumber: 307,
                                                columnNumber: 37
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginTop: '20px',
                                                color: '#d4af37',
                                                fontWeight: 'bold'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "₹",
                                                        cartTotal.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                                    lineNumber: 314,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                            lineNumber: 312,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                                    lineNumber: 304,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                        lineNumber: 250,
                        columnNumber: 17
                    }, this),
                    !isSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            borderTop: '1px solid #222'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePlaceOrder,
                            disabled: isLoading,
                            style: {
                                width: '100%',
                                padding: '16px',
                                backgroundColor: '#d4af37',
                                color: '#000',
                                border: 'none',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                cursor: isLoading ? 'not-allowed' : 'pointer'
                            },
                            children: isLoading ? 'Processing...' : `Pay ₹${cartTotal.toFixed(2)}`
                        }, void 0, false, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                            lineNumber: 323,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                        lineNumber: 322,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx",
                lineNumber: 240,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(CheckoutDrawer, "3eOjVoQ4MKC9Whsf9QCZjhsMr5E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = CheckoutDrawer;
var _c;
__turbopack_context__.k.register(_c, "CheckoutDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LoginDrawer() {
    _s();
    const { showLogin, closeLogin, sendOTP, verifyOTP, completeProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('email'); // email, otp, profile
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset state when modal opens
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "LoginDrawer.useEffect": ()=>{
            if (showLogin) {
                setStep('email');
                setEmail('');
                setOtp('');
                setPhone('');
                setName('');
            }
        }
    }["LoginDrawer.useEffect"], [
        showLogin
    ]);
    const handleEmailSubmit = async (e)=>{
        e.preventDefault();
        if (!email.includes('@')) {
            showToast('Enter a valid email', 'error');
            return;
        }
        setLoading(true);
        const success = await sendOTP(email);
        setLoading(false);
        if (success) setStep('otp');
    };
    const handleOtpSubmit = async (e)=>{
        e.preventDefault();
        if (otp.length !== 6) {
            showToast('Enter 6-digit OTP', 'error');
            return;
        }
        setLoading(true);
        const result = await verifyOTP(email, otp);
        setLoading(false);
        if (result.success) {
            if (result.needsProfileUpdate) {
                setStep('profile');
            } else {
                closeLogin();
            }
        }
    };
    const handleProfileSubmit = async (e)=>{
        e.preventDefault();
        if (phone.length < 10 || !name) {
            showToast('Please fill all details correctly', 'error');
            return;
        }
        setLoading(true);
        const success = await completeProfile(phone, name);
        setLoading(false);
        if (success) closeLogin();
    };
    const handleClose = ()=>{
        closeLogin();
        setTimeout(()=>{
            setStep('email');
            setEmail('');
            setOtp('');
            setPhone('');
            setName('');
        }, 400);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleClose,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 9998,
                    opacity: showLogin ? 1 : 0,
                    pointerEvents: showLogin ? 'auto' : 'none',
                    transition: 'opacity 0.3s'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: '#0f0f0f',
                    zIndex: 9999,
                    transform: showLogin ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: '1px solid rgba(255,255,255,0.1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px',
                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-serif)',
                                    color: '#f4f2ee',
                                    margin: 0
                                },
                                children: step === 'email' ? 'Welcome' : step === 'otp' ? 'Verify' : 'Setup Profile'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: '#fff',
                                    cursor: 'pointer'
                                },
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                        lineNumber: 98,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '32px 24px'
                        },
                        children: [
                            step === 'email' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleEmailSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.6)',
                                            marginBottom: '24px'
                                        },
                                        children: "Enter your email to receive a login code."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        placeholder: "email@example.com",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        style: btnStyle,
                                        children: loading ? 'Sending...' : 'Get OTP'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 110,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this),
                            step === 'otp' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleOtpSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.6)',
                                            marginBottom: '24px'
                                        },
                                        children: [
                                            "Code sent to ",
                                            email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 118,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        maxLength: 6,
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value),
                                        placeholder: "000000",
                                        style: {
                                            ...inputStyle,
                                            textAlign: 'center',
                                            letterSpacing: '8px',
                                            fontSize: '1.5rem'
                                        },
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        style: btnStyle,
                                        children: loading ? 'Verifying...' : 'Verify & Continue'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStep('email'),
                                        style: {
                                            width: '100%',
                                            marginTop: '16px',
                                            background: 'none',
                                            border: 'none',
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: '0.9rem',
                                            cursor: 'pointer',
                                            textDecoration: 'underline'
                                        },
                                        children: "← Change Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            step === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleProfileSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.6)',
                                            marginBottom: '24px'
                                        },
                                        children: "Complete your luxury profile."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        placeholder: "Full Name",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        value: phone,
                                        onChange: (e)=>setPhone(e.target.value),
                                        placeholder: "Phone Number",
                                        style: inputStyle,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        style: btnStyle,
                                        children: loading ? 'Saving...' : 'Complete Setup'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(LoginDrawer, "L89Zpye0gKHXoXAghxERAgCx0Y0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = LoginDrawer;
const inputStyle = {
    width: '100%',
    padding: '16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
    marginBottom: '20px',
    outline: 'none'
};
const btnStyle = {
    width: '100%',
    padding: '16px',
    background: '#f4f2ee',
    color: '#0f0f0f',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase'
};
var _c;
__turbopack_context__.k.register(_c, "LoginDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function UserDrawer() {
    _s();
    const { user, showUserMenu, closeUserMenu, logout, addAddress, removeAddress, addPayment, deactivateAccount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    // Local state for forms
    const [newAddr, setNewAddr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        label: '',
        address: '',
        pincode: '',
        city: '',
        state: ''
    });
    const [isAddingAddr, setIsAddingAddr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCard, setNewCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        number: '',
        expiry: ''
    });
    const [isAddingCard, setIsAddingCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helpers
    const inputStyle = {
        width: '100%',
        padding: '12px',
        background: 'rgba(255,255,255,0.05)',
        border: 'none',
        color: '#fff',
        marginBottom: '12px',
        fontSize: '0.9rem',
        borderRadius: '4px'
    };
    // Safety check
    if (!user) return null;
    const handleClose = ()=>{
        closeUserMenu();
        setTimeout(()=>setView('home'), 400); // Reset after animation
    };
    const handlePincodeChange = async (val)=>{
        setNewAddr((prev)=>({
                ...prev,
                pincode: val
            }));
        if (val.length === 6) {
            try {
                const response = await fetch(`https://api.postalpincode.in/pincode/${val}`);
                const data = await response.json();
                if (data && data[0].Status === 'Success') {
                    const postOffice = data[0].PostOffice[0];
                    setNewAddr((prev)=>({
                            ...prev,
                            city: postOffice.District,
                            state: postOffice.State
                        }));
                }
            } catch (error) {
                console.error("Failed to fetch location", error);
            }
        }
    };
    const handleAddAddress = async (e)=>{
        e.preventDefault();
        const success = await addAddress({
            label: newAddr.label,
            address: newAddr.address,
            city: newAddr.city,
            state: newAddr.state,
            pincode: newAddr.pincode,
            isDefault: (user.addresses || []).length === 0
        });
        if (success) {
            setNewAddr({
                label: '',
                address: '',
                pincode: '',
                city: '',
                state: ''
            });
            setIsAddingAddr(false);
        }
    };
    const handleAddCard = (e)=>{
        e.preventDefault();
        // Mock card connection
        addPayment({
            type: 'Visa',
            last4: newCard.number.slice(-4) || '0000',
            expiry: newCard.expiry,
            default: (user.payments || []).length === 0
        });
        setNewCard({
            number: '',
            expiry: ''
        });
        setIsAddingCard(false);
    };
    const ViewHeader = ({ title, showBack = true })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: '24px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
            },
            children: [
                showBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setView('home'),
                    style: {
                        background: 'none',
                        border: 'none',
                        color: '#f4f2ee',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center'
                    },
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
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "12 19 5 12 12 5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                        lineNumber: 102,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                    lineNumber: 93,
                    columnNumber: 23
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.25rem',
                        color: '#f4f2ee',
                        margin: 0
                    },
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginLeft: 'auto'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        style: {
                            background: 'none',
                            border: 'none',
                            color: '#f4f2ee',
                            padding: '4px',
                            cursor: 'pointer',
                            opacity: 0.7
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 120,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 121,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                            lineNumber: 119,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
            lineNumber: 86,
            columnNumber: 57
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: handleClose,
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 9998,
                    opacity: showUserMenu ? 1 : 0,
                    pointerEvents: showUserMenu ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    maxWidth: '400px',
                    backgroundColor: '#0f0f0f',
                    zIndex: 9999,
                    transform: showUserMenu ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    flexDirection: 'column',
                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                },
                children: [
                    view === 'home' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '32px 24px',
                                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: '#d4af37',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px'
                                                },
                                                children: "Welcome Back"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 164,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleClose,
                                                style: {
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#f4f2ee',
                                                    padding: '4px',
                                                    cursor: 'pointer',
                                                    opacity: 0.7,
                                                    transform: 'translate(8px, -8px)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "18",
                                                            y1: "6",
                                                            x2: "6",
                                                            y2: "18"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                            x1: "6",
                                                            y1: "6",
                                                            x2: "18",
                                                            y2: "18"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 168,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 167,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 163,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '2rem',
                                            color: '#f4f2ee',
                                            margin: '8px 0 0 0'
                                        },
                                        children: [
                                            user.title,
                                            " ",
                                            user.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 174,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: '0.9rem',
                                            marginTop: '4px'
                                        },
                                        children: user.phone
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 177,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 162,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '24px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setView('orders'),
                                            style: {
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                padding: '20px 0',
                                                background: 'transparent',
                                                border: 'none',
                                                borderBottom: '1px solid rgba(255,255,255,0.06)',
                                                color: '#f4f2ee',
                                                fontSize: '1.1rem',
                                                cursor: 'pointer',
                                                textAlign: 'left'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'var(--font-serif)'
                                                    },
                                                    children: "Orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 197,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.85rem',
                                                                background: '#d4af37',
                                                                color: '#000',
                                                                padding: '2px 8px',
                                                                borderRadius: '100px'
                                                            },
                                                            children: user.orders?.length || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 199,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '1.2rem',
                                                                opacity: 0.5
                                                            },
                                                            children: "›"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 198,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                            lineNumber: 183,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: '24px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        textTransform: 'uppercase',
                                                        color: '#666',
                                                        marginBottom: '8px',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 206,
                                                    columnNumber: 29
                                                }, this),
                                                user.role === 'ADMIN' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        router.push('/admin');
                                                        closeUserMenu();
                                                    },
                                                    style: {
                                                        width: '100%',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        padding: '16px 0',
                                                        background: 'rgba(212, 175, 55, 0.1)',
                                                        border: 'none',
                                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                                        color: '#d4af37',
                                                        fontSize: '1rem',
                                                        cursor: 'pointer',
                                                        textAlign: 'left',
                                                        paddingLeft: '12px',
                                                        paddingRight: '12px',
                                                        borderRadius: '4px',
                                                        marginBottom: '12px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "👑 Admin Dashboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 226,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '1.2rem',
                                                                opacity: 0.5
                                                            },
                                                            children: "›"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 33
                                                }, this),
                                                [
                                                    {
                                                        label: 'My Addresses',
                                                        view: 'addresses'
                                                    },
                                                    {
                                                        label: 'Payment Methods',
                                                        view: 'payments'
                                                    },
                                                    {
                                                        label: 'Privacy & Security',
                                                        view: 'privacy'
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setView(item.view),
                                                        style: {
                                                            width: '100%',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            padding: '16px 0',
                                                            background: 'transparent',
                                                            border: 'none',
                                                            color: '#ccc',
                                                            fontSize: '1rem',
                                                            cursor: 'pointer',
                                                            textAlign: 'left'
                                                        },
                                                        children: [
                                                            item.label,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: '1.2rem',
                                                                    opacity: 0.3
                                                                },
                                                                children: "›"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                                lineNumber: 248,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, item.label, true, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 234,
                                                        columnNumber: 46
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                            lineNumber: 205,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 181,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 180,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                    backgroundColor: '#0f0f0f'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: logout,
                                    style: {
                                        width: '100%',
                                        padding: '16px',
                                        background: '#f4f2ee',
                                        color: '#0f0f0f',
                                        border: 'none',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 255,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 254,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    view === 'orders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewHeader, {
                                title: "My Orders"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 263,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '24px'
                                },
                                children: user.orders?.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '16px'
                                    },
                                    children: user.orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'rgba(255,255,255,0.03)',
                                                padding: '16px',
                                                border: '1px solid rgba(255,255,255,0.05)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        marginBottom: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontWeight: 600,
                                                                color: '#f4f2ee'
                                                            },
                                                            children: order.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 272,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '0.75rem',
                                                                padding: '2px 8px',
                                                                background: order.status === 'Delivered' ? 'rgba(76, 175, 80, 0.2)' : 'rgba(255, 152, 0, 0.2)',
                                                                color: order.status === 'Delivered' ? '#81c784' : '#ffb74d',
                                                                borderRadius: '100px'
                                                            },
                                                            children: order.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 273,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 271,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: '#aaa',
                                                        marginBottom: '8px'
                                                    },
                                                    children: [
                                                        order.date,
                                                        " · ",
                                                        order.total
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontSize: '0.85rem',
                                                        color: '#eee',
                                                        marginBottom: '12px'
                                                    },
                                                    children: order.items.join(', ')
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    style: {
                                                        width: '100%',
                                                        padding: '8px',
                                                        background: 'rgba(255,255,255,0.1)',
                                                        border: 'none',
                                                        color: '#fff',
                                                        fontSize: '0.8rem',
                                                        cursor: 'pointer'
                                                    },
                                                    children: "View Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, order.id, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                            lineNumber: 266,
                                            columnNumber: 52
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 265,
                                    columnNumber: 49
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#aaa',
                                        textAlign: 'center',
                                        marginTop: '40px'
                                    },
                                    children: "No orders yet."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                    lineNumber: 301,
                                    columnNumber: 32
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    view === 'addresses' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewHeader, {
                                title: "Addresses"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 307,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '24px'
                                },
                                children: [
                                    user.addresses && user.addresses.length > 0 ? user.addresses.map((addr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '16px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                marginBottom: '16px',
                                                position: 'relative'
                                            },
                                            children: [
                                                addr.isDefault && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        position: 'absolute',
                                                        top: '16px',
                                                        right: '16px',
                                                        fontSize: '0.7rem',
                                                        color: '#d4af37',
                                                        border: '1px solid #d4af37',
                                                        padding: '2px 6px'
                                                    },
                                                    children: "DEFAULT"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 44
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        margin: '0 0 8px 0',
                                                        fontSize: '1rem',
                                                        color: '#fff'
                                                    },
                                                    children: addr.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        color: '#aaa',
                                                        fontSize: '0.9rem',
                                                        lineHeight: '1.4'
                                                    },
                                                    children: addr.detail
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        gap: '16px',
                                                        marginTop: '16px'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeAddress(addr.id),
                                                        style: {
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#e57373',
                                                            textDecoration: 'underline',
                                                            cursor: 'pointer',
                                                            fontSize: '0.85rem',
                                                            padding: 0
                                                        },
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 319,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, addr.id, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                            lineNumber: 309,
                                            columnNumber: 98
                                        }, this)) : !isAddingAddr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#aaa',
                                            textAlign: 'center',
                                            marginBottom: '24px'
                                        },
                                        children: "No addresses saved."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 321,
                                        columnNumber: 50
                                    }, this),
                                    isAddingAddr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleAddAddress,
                                        style: {
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '16px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Label (e.g. Home, Work)",
                                                value: newAddr.label,
                                                onChange: (e)=>setNewAddr({
                                                        ...newAddr,
                                                        label: e.target.value
                                                    }),
                                                style: inputStyle,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 325,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Pincode",
                                                        value: newAddr.pincode,
                                                        maxLength: 6,
                                                        onChange: (e)=>handlePincodeChange(e.target.value),
                                                        style: {
                                                            ...inputStyle,
                                                            flex: 1
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 328,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "City",
                                                        value: newAddr.city,
                                                        onChange: (e)=>setNewAddr({
                                                                ...newAddr,
                                                                city: e.target.value
                                                            }),
                                                        style: {
                                                            ...inputStyle,
                                                            flex: 1.5
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 327,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "State",
                                                value: newAddr.state,
                                                onChange: (e)=>setNewAddr({
                                                        ...newAddr,
                                                        state: e.target.value
                                                    }),
                                                style: inputStyle,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 333,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                placeholder: "Address Details (House No, Street, Landmark)",
                                                value: newAddr.address,
                                                onChange: (e)=>setNewAddr({
                                                        ...newAddr,
                                                        address: e.target.value
                                                    }),
                                                style: {
                                                    ...inputStyle,
                                                    minHeight: '80px',
                                                    resize: 'none'
                                                },
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 335,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px',
                                                    marginTop: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        style: {
                                                            flex: 1,
                                                            padding: '12px',
                                                            background: '#f4f2ee',
                                                            color: '#0f0f0f',
                                                            border: 'none',
                                                            fontWeight: 600,
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Save Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 338,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsAddingAddr(false),
                                                        style: {
                                                            flex: 1,
                                                            padding: '12px',
                                                            background: 'transparent',
                                                            color: '#fff',
                                                            border: '1px solid rgba(255,255,255,0.2)',
                                                            cursor: 'pointer'
                                                        },
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 337,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 323,
                                        columnNumber: 38
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAddingAddr(true),
                                        style: {
                                            width: '100%',
                                            padding: '16px',
                                            border: '1px dashed rgba(255,255,255,0.3)',
                                            background: 'transparent',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            marginTop: '8px'
                                        },
                                        children: "+ Add New Address"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 341,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 308,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    view === 'payments' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewHeader, {
                                title: "Payment Methods"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 349,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '24px'
                                },
                                children: [
                                    user.payments && user.payments.length > 0 ? user.payments.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '16px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                marginBottom: '16px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#fff',
                                                                fontWeight: 600
                                                            },
                                                            children: [
                                                                card.type,
                                                                " •••• ",
                                                                card.last4
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 360,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#aaa',
                                                                fontSize: '0.85rem',
                                                                marginTop: '4px'
                                                            },
                                                            children: [
                                                                "Expires ",
                                                                card.expiry
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                            lineNumber: 361,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 359,
                                                    columnNumber: 25
                                                }, this),
                                                card.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '1.2rem',
                                                        color: '#81c784'
                                                    },
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                    lineNumber: 363,
                                                    columnNumber: 42
                                                }, this)
                                            ]
                                        }, card.id, true, {
                                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                            lineNumber: 351,
                                            columnNumber: 95
                                        }, this)) : !isAddingCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#aaa',
                                            textAlign: 'center',
                                            marginBottom: '24px'
                                        },
                                        children: "No payment methods saved."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 364,
                                        columnNumber: 50
                                    }, this),
                                    isAddingCard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleAddCard,
                                        style: {
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '16px',
                                            border: '1px solid rgba(255,255,255,0.1)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Card Number",
                                                value: newCard.number,
                                                maxLength: 19,
                                                onChange: (e)=>setNewCard({
                                                        ...newCard,
                                                        number: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '12px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: 'none',
                                                    color: '#fff',
                                                    marginBottom: '8px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 367,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "MM/YY",
                                                value: newCard.expiry,
                                                maxLength: 5,
                                                onChange: (e)=>setNewCard({
                                                        ...newCard,
                                                        expiry: e.target.value
                                                    }),
                                                style: {
                                                    width: '100%',
                                                    padding: '12px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: 'none',
                                                    color: '#fff',
                                                    marginBottom: '16px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 368,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        style: {
                                                            flex: 1,
                                                            padding: '12px',
                                                            background: '#f4f2ee',
                                                            color: '#0f0f0f',
                                                            border: 'none',
                                                            fontWeight: 600
                                                        },
                                                        children: "Save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 370,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setIsAddingCard(false),
                                                        style: {
                                                            flex: 1,
                                                            padding: '12px',
                                                            background: 'transparent',
                                                            color: '#fff',
                                                            border: '1px solid rgba(255,255,255,0.2)'
                                                        },
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 371,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 369,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 366,
                                        columnNumber: 38
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsAddingCard(true),
                                        style: {
                                            width: '100%',
                                            padding: '16px',
                                            border: '1px dashed rgba(255,255,255,0.3)',
                                            background: 'transparent',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            marginTop: '8px'
                                        },
                                        children: "+ Add New Card"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 373,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 350,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true),
                    view === 'privacy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewHeader, {
                                title: "Privacy & Security"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 381,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: 'auto',
                                    padding: '24px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginBottom: '32px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    color: '#fff',
                                                    fontSize: '1rem',
                                                    marginBottom: '16px'
                                                },
                                                children: "Data Permissions"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 384,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '16px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#ccc',
                                                            fontSize: '0.9rem'
                                                        },
                                                        children: "Marketing Emails"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 386,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        defaultChecked: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 387,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 385,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#ccc',
                                                            fontSize: '0.9rem'
                                                        },
                                                        children: "Share Analytics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 390,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                        lineNumber: 391,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 389,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 383,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderTop: '1px solid rgba(255,255,255,0.1)',
                                            paddingTop: '24px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    color: '#e57373',
                                                    fontSize: '1rem',
                                                    marginBottom: '16px'
                                                },
                                                children: "Danger Zone"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 396,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#aaa',
                                                    fontSize: '0.85rem',
                                                    marginBottom: '16px',
                                                    lineHeight: '1.5'
                                                },
                                                children: "Once you deactivate your account, there is no going back. Please be certain."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 397,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: deactivateAccount,
                                                style: {
                                                    background: 'rgba(244, 67, 54, 0.1)',
                                                    border: '1px solid rgba(244, 67, 54, 0.3)',
                                                    color: '#e57373',
                                                    padding: '16px',
                                                    width: '100%',
                                                    cursor: 'pointer',
                                                    fontSize: '0.9rem',
                                                    fontWeight: 600
                                                },
                                                children: "Deactivate Account"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                                lineNumber: 400,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                        lineNumber: 395,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                                lineNumber: 382,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx",
                lineNumber: 143,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(UserDrawer, "Sd11ZBPN4yB/GQLCoj0ic2YpzxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserDrawer;
var _c;
__turbopack_context__.k.register(_c, "UserDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/menx-next/frontend/src/components/Providers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/AuthContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/CartContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ToastContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/ProductContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/context/WishlistContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Cart$2f$CartSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Cart/CartSidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Checkout$2f$CheckoutSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Checkout/CheckoutSidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Authentication$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Authentication/LoginModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Authentication$2f$UserSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/menx-next/frontend/src/components/Authentication/UserSidebar.jsx [app-client] (ecmascript)");
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
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$CartContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$WishlistContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WishlistProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$context$2f$ProductContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductProvider"], {
                            children: [
                                children,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Cart$2f$CartSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Checkout$2f$CheckoutSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Authentication$2f$LoginModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$menx$2d$next$2f$frontend$2f$src$2f$components$2f$Authentication$2f$UserSidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                                    lineNumber: 24,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                            lineNumber: 19,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                        lineNumber: 18,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
                lineNumber: 16,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
            lineNumber: 15,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/menx-next/frontend/src/components/Providers.jsx",
        lineNumber: 14,
        columnNumber: 13
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_menx-next_frontend_src_1309d927._.js.map
/**
 * Enterprise Grade API Client
 * Features:
 * - Auto base URL normalization
 * - Access token retry handling
 * - Timeout protection
 * - Structured error handling
 * - Cookie session support
 */

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8888/api/v1";

const DEFAULT_TIMEOUT = 60000; // 60s (To handle Render cold-starts)
let isRefreshing = false;
let failedQueue = [];

/* ------------------------------
   Utility: Build Full URL
------------------------------ */
const getFullUrl = (endpoint) => {
    const base = API_BASE_URL.replace(/\/$/, "");
    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    return `${base}${path}`;
};

/* ------------------------------
   Custom Error Class
------------------------------ */
class StagAppError extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = "StagAppError";
        this.status = status;
        this.data = data;
    }
}

/* ------------------------------
   Process Failed Queue (Refresh)
------------------------------ */
const processQueue = (error) => {
    failedQueue.forEach((prom) => {
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
------------------------------ */
const refreshToken = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
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
------------------------------ */
const apiRequest = async (endpoint, options = {}) => {
    const url = getFullUrl(endpoint);
    const { timeout = DEFAULT_TIMEOUT, retries = 0, ...fetchOptions } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const headers = {
        Accept: "application/json",
        ...fetchOptions.headers,
    };

    if (
        !(fetchOptions.body instanceof FormData) &&
        !headers["Content-Type"]
    ) {
        headers["Content-Type"] = "application/json";
    }

    const config = {
        ...fetchOptions,
        headers,
        signal: controller.signal,
        credentials: "include",
    };

    try {
        if (process.env.NODE_ENV === "development") {
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
                throw new StagAppError(
                    `Server Error: ${response.status}`,
                    response.status,
                    text
                );
            }
            return text;
        }

        /* ------------------------------
           Handle Unauthorized (401)
        ------------------------------ */
        if (response.status === 401 && !url.includes("/auth/refresh") && !url.includes("/auth/login") && !url.includes("/auth/verify-otp")) {
            if (!isRefreshing) {
                isRefreshing = true;
                const success = await refreshToken();
                isRefreshing = false;

                if (!success) {
                    processQueue(new Error("Unauthorized"));
                    // Return the error data silently so callers can handle it (e.g. skipping setUser)
                    return data || { success: false, message: "Unauthorized", statusCode: 401 };
                }

                processQueue(null);
            }




            return new Promise((resolve, reject) => {
                failedQueue.push({
                    resolve: () => resolve(apiRequest(endpoint, options)),
                    reject,
                });
            });
        }

        if (!response.ok) {
            const message =
                data?.message ||
                data?.error ||
                `Request failed with status ${response.status}`;
            throw new StagAppError(message, response.status, data);
        }

        return data;

    } catch (error) {
        clearTimeout(timeoutId);

        if (error.name === "AbortError") {
            throw new StagAppError(
                "Request timed out. Please check your connection.",
                408
            );
        }

        if (error.message === "Failed to fetch") {
            throw new StagAppError(
                `Network error. Unable to connect to server at ${url}. Please ensure the backend is running.`,
                503
            );
        }


        throw error;
    }
};

/* ------------------------------
   API Methods
------------------------------ */
export const api = {
    get: (endpoint, options) =>
        apiRequest(endpoint, { ...options, method: "GET" }),

    post: (endpoint, body, options) =>
        apiRequest(endpoint, {
            ...options,
            method: "POST",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    put: (endpoint, body, options) =>
        apiRequest(endpoint, {
            ...options,
            method: "PUT",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    patch: (endpoint, body, options) =>
        apiRequest(endpoint, {
            ...options,
            method: "PATCH",
            body: body instanceof FormData ? body : JSON.stringify(body),
        }),

    delete: (endpoint, options) =>
        apiRequest(endpoint, { ...options, method: "DELETE" }),
};

export default api;

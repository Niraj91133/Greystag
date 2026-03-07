'use client';
import React, { useState, useRef } from 'react';
import { uploadFile } from '@/utils/supabase';
import { useToast } from '@/context/ToastContext';
import { api } from '@/lib/api';
import styles from './MediaUploader.module.css';

/**
 * Global Media Uploader Component
 * Features:
 * - Backend-first upload (via server API)
 * - Frontend fallback (direct to Supabase)
 * - Image/Video detection
 * - Integrated Toasts
 */
export default function MediaUploader({
    value,
    onChange,
    label = "Media",
    accept = "image/*,video/*",
    folder = "cms"
}) {
    const { showToast } = useToast();
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        showToast('Uploading...', 'info');
        console.log(`[MediaUploader] Starting upload for ${file.name} (${file.type})`);

        try {
            // Determine media type
            const mediaType = file.type.startsWith('video') ? 'video' : 'image';

            // 1. Try Backend Upload First (More reliable, uses service key)
            // Use specific endpoint for CMS vs Products
            const isProduct = folder === 'products';
            const endpoint = isProduct ? '/products/upload' : '/cms/upload';

            console.log(`[MediaUploader] Attempting backend upload via ${endpoint}...`);
            const formData = new FormData();
            formData.append('images', file);
            formData.append('folder', folder);

            let publicUrl = null;
            let backendErrorMsg = null;

            try {
                const response = await api.post(endpoint, formData);
                // response should be ApiResponse { data: string | [url1, url2...], ... }
                // For CMS upload, it returns a single string. For Products, an array.
                const data = response.data;
                publicUrl = Array.isArray(data) ? data[0] : (typeof data === 'string' ? data : (data?.url || null));

                if (!publicUrl) {
                    console.warn("[MediaUploader] Backend returned success but no URL in data:", response);
                    backendErrorMsg = "No URL returned from server";
                } else {
                    console.log("[MediaUploader] Backend upload success:", publicUrl);
                }
            } catch (err) {
                backendErrorMsg = err.message || "Network Error";
                console.warn("[MediaUploader] Backend upload failed:", backendErrorMsg, err);
            }

            // 2. Fallback to direct frontend upload if backend failed
            if (!publicUrl) {
                console.log("[MediaUploader] Trying frontend fallback (direct to Supabase)...");
                publicUrl = await uploadFile(file, folder);
                console.log("[MediaUploader] Frontend fallback result:", publicUrl ? "SUCCESS" : "FAILED");
            }

            if (publicUrl) {
                onChange(publicUrl, mediaType);
                showToast('Upload successful', 'success');
            } else {
                throw new Error(backendErrorMsg || "All upload attempts failed.");
            }
        } catch (error) {
            console.error('[MediaUploader Error]:', error);
            const msg = error.message?.includes('401') ? 'Unauthorized (Please login as admin)' :
                error.message?.includes('413') ? 'File too large' :
                    error.message;
            showToast(`Upload failed: ${msg}`, 'error');
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const handleRemove = () => {
        onChange('', '');
        showToast('Media removed', 'info');
    };

    const isVideo = value?.toLowerCase().match(/\.(mp4|webm|ogg|mov)$/) || value?.includes('video');

    return (
        <div className={styles.uploaderContainer}>
            <label className={styles.label}>{label}</label>

            <div className={styles.uploaderBox}>
                {value ? (
                    <div className={styles.previewContainer}>
                        {isVideo ? (
                            <video src={value} muted loop autoPlay playsInline className={styles.previewMedia} />
                        ) : (
                            <img src={value} alt="Preview" className={styles.previewMedia} />
                        )}
                        <div className={styles.overlay}>
                            <button
                                type="button"
                                className={styles.replaceBtn}
                                onClick={() => fileInputRef.current?.click()}
                                disabled={isUploading}
                            >
                                {isUploading ? 'Uploading...' : 'Replace'}
                            </button>
                            <button
                                type="button"
                                className={styles.removeBtn}
                                onClick={handleRemove}
                                disabled={isUploading}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className={styles.emptyBox}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        {isUploading ? (
                            <div className={styles.spinner}>Uploading...</div>
                        ) : (
                            <div className={styles.placeholder}>
                                <span className={styles.icon}>+</span>
                                <span>Choose from Device</span>
                                <small>{accept.replace(/\*/g, '')}</small>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <input
                type="file"
                ref={fileInputRef}
                accept={accept}
                onChange={handleUpload}
                className={styles.hiddenInput}
                hidden
            />
        </div>
    );
}

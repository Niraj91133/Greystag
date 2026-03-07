'use client';
import React, { useState, useRef } from 'react';
import { uploadFile } from '@/utils/supabase';
import { useToast } from '@/context/ToastContext';
import styles from './MediaUploader.module.css';

/**
 * Global Media Uploader Component
 * Features:
 * - Direct upload to Supabase Storage
 * - Image/Video detection
 * - Instant Preview
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

        try {
            // Determine media type
            const mediaType = file.type.startsWith('video') ? 'video' : 'image';

            // Direct frontend upload to Supabase for better reliability
            const publicUrl = await uploadFile(file, folder);

            if (publicUrl) {
                onChange(publicUrl, mediaType);
                showToast('Upload successful', 'success');
            } else {
                throw new Error("Failed to get public URL");
            }
        } catch (error) {
            console.error('Media upload error:', error);
            showToast('Failed to upload media', 'error');
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

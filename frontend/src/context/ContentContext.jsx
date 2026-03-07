'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
const DEFAULT_VIDEO_SCROLL = [
    {
        id: 'v1',
        videoUrl: 'https://cdn.pixabay.com/video/2021/04/12/70914-536968846_tiny.mp4',
        linkedProductId: 'seed_prod_1', // We will map these in VideoCard fallback
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
    { id: '1', title: "Meetings", slug: "meetings", imageUrl: "/assets/product_1.png" },
    { id: '2', title: "Office Essentials", slug: "office-essentials", imageUrl: "/assets/product_2.png" },
    { id: '3', title: "Students", slug: "students", imageUrl: "/assets/journal_1.png" },
    { id: '4', title: "Events", slug: "events", imageUrl: "/assets/journal_2.png" },
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
    { id: 'shirts', name: 'Shirts', description: 'Crisp cottons and linens.', imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2940&auto=format&fit=crop', isEnabled: true },
    { id: 'trousers', name: 'Trousers', description: 'Tailored fit for every occasion.', imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2787&auto=format&fit=crop', isEnabled: true },
    { id: 'blazers', name: 'Blazers', description: 'The cornerstone of a modern wardrobe.', imageUrl: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2000&auto=format&fit=crop', isEnabled: true },
    { id: 'chinos', name: 'Chinos', description: 'Relaxed elegance.', imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2787&auto=format&fit=crop', isEnabled: true }
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
const DEFAULT_BEHIND_SEAMS = {
    isEnabled: true,
    title: 'Behind The Seams',
    description: 'Discover the craftsmanship and attention to detail that goes into every piece we create.',
    mediaType: 'image',
    mediaUrl: '',
    ctaText: 'Explore the Story',
    ctaLink: '/story'
};

const ContentContext = createContext(undefined);
import { api } from '@/lib/api';

export function ContentProvider({ children }) {
    const [hero, setHero] = useState(DEFAULT_HERO);
    const [videoSection, setVideoSection] = useState(DEFAULT_VIDEO_SECTION);
    const [behindSeams, setBehindSeams] = useState(DEFAULT_BEHIND_SEAMS);
    const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
    const [videoScrollItems, setVideoScrollItems] = useState(DEFAULT_VIDEO_SCROLL);
    const [handpickedItems, setHandpickedItems] = useState(DEFAULT_HANDPICKED);
    const [journal, setJournal] = useState(DEFAULT_JOURNAL);
    const [essentialsConfig, setEssentialsConfig] = useState(DEFAULT_ESSENTIALS_CONFIG);
    const [isLoaded, setIsLoaded] = useState(false);

    // Hydrate from Server API
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const [globalJson, behindSeamsJson] = await Promise.all([
                    api.get('/cms?key=global-cms'),
                    api.get('/cms/behind-seams')
                ]);

                const data = globalJson.data;
                const behindData = behindSeamsJson.data;

                if (data) {
                    if (data.hero) setHero(data.hero);
                    if (data.videoSection) setVideoSection(data.videoSection);
                    if (data.categories) setCategories(data.categories);
                    if (data.videoScrollItems) setVideoScrollItems(data.videoScrollItems);
                    if (data.handpickedItems) setHandpickedItems(data.handpickedItems);
                    if (data.journal) setJournal(data.journal);
                    if (data.essentialsConfig) setEssentialsConfig(data.essentialsConfig);
                }

                if (behindData && Object.keys(behindData).length > 0) {
                    setBehindSeams(behindData);
                }
            }
            catch (error) {
                console.error('Failed to load CMS content:', error);
            }
            finally {
                setIsLoaded(true);
            }
        };
        fetchContent();
    }, []);

    const { user } = useAuth();

    // Persist changes to Server API - ADMIN ONLY
    const [isSaving, setIsSaving] = useState(false);

    const triggerRevalidate = async () => {
        try {
            await fetch('/api/revalidate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ path: '/' })
            });
            console.log('Revalidation triggered for /');
        } catch (error) {
            console.error('Failed to trigger revalidation:', error);
        }
    };

    useEffect(() => {
        if (!isLoaded || user?.role !== 'ADMIN')
            return;

        const saveContent = async () => {
            try {
                setIsSaving(true);
                const payload = {
                    hero,
                    videoSection,
                    categories,
                    videoScrollItems,
                    handpickedItems,
                    journal,
                    essentialsConfig
                };

                await Promise.all([
                    api.post('/cms', { key: 'global-cms', data: payload }),
                    api.put('/cms/behind-seams', { data: behindSeams })
                ]);

                // Trigger Next.js revalidation
                await triggerRevalidate();

                setIsSaving(false);
            }
            catch (error) {
                console.error('Failed to auto-save CMS content:', error);
                setIsSaving(false);
            }
        };
        // Debounce slightly to avoid rapid-fire saves if multiple updates happen
        const timeoutId = setTimeout(saveContent, 3000);
        return () => clearTimeout(timeoutId);
    }, [hero, videoSection, behindSeams, categories, videoScrollItems, handpickedItems, journal, essentialsConfig, isLoaded, user]);


    const updateHero = (data) => {
        setHero(prev => ({ ...prev, ...data }));
    };
    const updateVideoSection = (data) => {
        setVideoSection(prev => ({ ...prev, ...data }));
    };
    const updateBehindSeams = (data) => {
        setBehindSeams(prev => ({ ...prev, ...data }));
    };
    const updateCategory = (id, data) => {
        setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, ...data } : cat));
    };
    const addCategory = (name) => {
        const id = name.toLowerCase().replace(/\s+/g, '-');
        const newCat = {
            id,
            name,
            description: '',
            imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2940&auto=format&fit=crop',
            isEnabled: true
        };
        setCategories(prev => [...prev, newCat]);
    };
    const deleteCategory = (id) => {
        setCategories(prev => prev.filter(cat => cat.id !== id));
    };

    const addVideoScrollItem = (item) => {
        const newItem = {
            ...item,
            id: Date.now().toString()
        };
        setVideoScrollItems(prev => [...prev, newItem]);
    };
    const deleteVideoScrollItem = (id) => {
        setVideoScrollItems(prev => prev.filter(item => item.id !== id));
    };
    const updateHandpickedItem = (id, data) => {
        setHandpickedItems(prev => prev.map(item => item.id === id ? { ...item, ...data } : item));
    };
    const addJournalEntry = (entry) => {
        const newEntry = {
            ...entry,
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
        };
        setJournal(prev => [newEntry, ...prev]);
    };
    const updateJournalEntry = (id, data) => {
        setJournal(prev => prev.map(post => post.id === id ? { ...post, ...data } : post));
    };
    const deleteJournalEntry = (id) => {
        setJournal(prev => prev.filter(post => post.id !== id));
    };
    const updateEssentialsConfig = (data) => {
        setEssentialsConfig(prev => ({ ...prev, ...data }));
    };
    return (<ContentContext.Provider value={{
        hero, videoSection, behindSeams, categories, videoScrollItems, journal, essentialsConfig, handpickedItems,
        updateHero, updateVideoSection, updateBehindSeams, updateCategory, addCategory, deleteCategory,
        addVideoScrollItem, deleteVideoScrollItem,

        addJournalEntry, updateJournalEntry, deleteJournalEntry, updateEssentialsConfig, updateHandpickedItem
    }}>
        {children}
    </ContentContext.Provider>);
}
export function useContent() {
    const context = useContext(ContentContext);
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
}

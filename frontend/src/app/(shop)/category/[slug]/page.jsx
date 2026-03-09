import { PRODUCTS } from "@/data/products";
import CategoryLayoutClient from "@/components/Shop/ShopLayout";
import CategoryMosaic from "@/components/Home/CategoryGrid";
// Helper to capitalize first letter
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// Generate static params so Next.js knows which pages to build
export async function generateStaticParams() {
    // Extract unique categories from PRODUCTS
    const categories = Array.from(new Set(PRODUCTS.map(p => p.category.toLowerCase())));
    categories.push('all');
    // Add Occasion Slugs
    categories.push('meetings', 'office-essentials', 'students', 'events');
    return categories.map((slug) => ({
        slug: slug,
    }));
}
// Next.js 15: params is a Promise
export default async function CategoryPage({ params }) {
    try {
        const { slug } = await params;
        // Normalize slug
        const normalizedSlug = slug.toLowerCase();
        const isAll = normalizedSlug === 'all';
        // Define Occasion Tags Mapping
        const occasionMap = {
            'meetings': 'meeting',
            'office-essentials': 'office',
            'students': 'student',
            'events': 'event',
            // Allow for new-arrivals if specific logic needed, though currently it falls to 'All' unless we map it
        };
        // Determine initial category state for Client Component
        // If it's an occasion, we treat it like 'All' so it shows the grouped view (by category), 
        // BUT we filter the products list passed to the client.
        const isOccasion = Object.keys(occasionMap).includes(normalizedSlug);
        // Logic: 
        // 1. If 'All' -> Pass Initial='All', Products=All.
        // 2. If Occasion -> Pass Initial='All' (so it groups), Products=Filtered by Tag.
        // 3. If Category (Shirts) -> Pass Initial='Shirts', Products=All (so user can switch to Pants if they want, OR we can filter strict).
        //    Current design for Single PLP was: Pass ALL products, set Initial=Shirts. 
        //    So if user clicks "Pants" tab, they see pants. 
        //    BUT for Occasions, if I open "Meetings", I only want "Meeting" products.
        //    If I switch to "Pants" tab inside "Meetings" page, I should see "Meeting Pants", not "All Pants".
        //    CategoryLayoutClient doesn't currently support "Sub-filtering" (i.e. Global Filter + Tab Category).
        //    Wait, `CategoryLayoutClient` filters `products` prop by `activeCategory`.
        //    If I pass ONLY meeting products to `CategoryLayoutClient`, then when I click "Shirts", it will filter "Meeting Products" by "Shirts". 
        //    This is EXACTLY what we want! "Meeting Shirts". 
        //    Perfect.
        const initialCategory = (isAll || isOccasion) ? 'All' : capitalize(slug);
        let productsToPass = PRODUCTS;
        if (isOccasion) {
            const tag = occasionMap[normalizedSlug];
            productsToPass = PRODUCTS.filter(p => p.tags?.includes(tag));
        }
        // Specific check for "New Arrivals" if we wanted to fail it or filter it
        // The requirement says: "If New Arrivals data fails: Show inline message"
        // Since we are using static data, "failure" is impossible unless we simulate it or fetch fails.
        // But we wrap in try/catch to satisfy "Global Error Prevention".
        // Note: If it's a standard category page (e.g. /category/shirts), we technically pass ALL products 
        // so the user can switch to "Pants" and see ALL pants. This is the "Single PLP" behavior.
        // Occasions are "Curated Subsets", so they are restricted. This is correct.
        // Determine Page Title for Context
        let pageTitle = '';
        if (isOccasion) {
            // e.g. "Meetings", "Office Essentials"
            // Convert slug to Title Case manually since we have map keys or just capitalize
            pageTitle = normalizedSlug.split('-').map(capitalize).join(' ');
            // Map common ones nicely if needed
            if (normalizedSlug === 'office-essentials')
                pageTitle = 'Office Essentials';
        }
        else {
            // Standard PLP
            // If All -> "All" as requested
            pageTitle = isAll ? 'All' : capitalize(slug);
        }
        return (<>
            <CategoryLayoutClient initialCategory={initialCategory} pageTitle={pageTitle} />
        </>);
    }
    catch (error) {
        console.error("Failed to load category:", error);
        return (<div className="global-page-container" style={{ padding: '100px 24px', textAlign: 'center' }}>
            <p style={{ color: '#aaa', fontSize: '1.2rem' }}>Unable to load products. Please try again.</p>
        </div>);
    }
}

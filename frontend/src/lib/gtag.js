export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, ...rest }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        ...rest
    });
};

// Ecommerce events
export const addToCart = (product) => {
    event({
        action: 'add_to_cart',
        category: 'ecommerce',
        currency: 'INR',
        value: product.price,
        items: [{
            item_id: product.id,
            item_name: product.name,
            price: product.price,
            quantity: 1
        }]
    });
};

export const purchase = (order) => {
    event({
        action: 'purchase',
        category: 'ecommerce',
        transaction_id: order.id,
        value: order.total,
        currency: 'INR',
        items: order.orderItems.map(item => ({
            item_id: item.productId,
            item_name: item.product?.name || 'Product',
            price: item.price,
            quantity: item.quantity
        }))
    });
};

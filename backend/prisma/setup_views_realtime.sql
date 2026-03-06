-- ==========================================================
-- STEP 0: Rename Tables (Safe Rename)
-- ==========================================================
ALTER TABLE IF EXISTS "User" RENAME TO "users";
ALTER TABLE IF EXISTS "Address" RENAME TO "user_addresses";
ALTER TABLE IF EXISTS "Measurement" RENAME TO "user_measurements";
ALTER TABLE IF EXISTS "RefreshToken" RENAME TO "user_sessions";
ALTER TABLE IF EXISTS "LoginHistory" RENAME TO "user_login_history";
ALTER TABLE IF EXISTS "UserActivity" RENAME TO "user_activity";
ALTER TABLE IF EXISTS "Product" RENAME TO "products";
ALTER TABLE IF EXISTS "Category" RENAME TO "categories";
ALTER TABLE IF EXISTS "Wishlist" RENAME TO "wishlists";
ALTER TABLE IF EXISTS "Review" RENAME TO "product_reviews";
ALTER TABLE IF EXISTS "Cart" RENAME TO "carts";
ALTER TABLE IF EXISTS "Order" RENAME TO "orders";
ALTER TABLE IF EXISTS "OrderItem" RENAME TO "order_items";
ALTER TABLE IF EXISTS "PromoCode" RENAME TO "promo_codes";
ALTER TABLE IF EXISTS "GlobalCMS" RENAME TO "cms_pages";

-- ==========================================================
-- STEP 1: Rename Columns to match Snake Case (Crucial for Views)
-- ==========================================================

-- users table
ALTER TABLE IF EXISTS "users" RENAME COLUMN "isVerified" TO "is_verified";
ALTER TABLE IF EXISTS "users" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE IF EXISTS "users" RENAME COLUMN "updatedAt" TO "updated_at";
ALTER TABLE IF EXISTS "users" RENAME COLUMN "lastLogin" TO "last_login";
ALTER TABLE IF EXISTS "users" RENAME COLUMN "otpExpires" TO "otp_expires";
ALTER TABLE IF EXISTS "users" RENAME COLUMN "isActive" TO "is_active";

-- user_addresses table
ALTER TABLE IF EXISTS "user_addresses" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE IF EXISTS "user_addresses" RENAME COLUMN "isDefault" TO "is_default";
ALTER TABLE IF EXISTS "user_addresses" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE IF EXISTS "user_addresses" RENAME COLUMN "updatedAt" TO "updated_at";

-- orders table
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "userId" TO "user_id";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "razorpayOrderId" TO "razorpay_order_id";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "razorpayPaymentId" TO "razorpay_payment_id";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "shippingAddressId" TO "shipping_address_id";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "trackingId" TO "tracking_id";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "courierPartner" TO "courier_partner";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "invoiceUrl" TO "invoice_url";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "shippedAt" TO "shipped_at";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "deliveredAt" TO "delivered_at";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE IF EXISTS "orders" RENAME COLUMN "updatedAt" TO "updated_at";

-- products table
ALTER TABLE IF EXISTS "products" RENAME COLUMN "categoryId" TO "category_id";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "displayLocations" TO "display_locations";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "videoUrl" TO "video_url";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "externalLink" TO "external_link";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "isActive" TO "is_active";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "inStock" TO "in_stock";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "createdAt" TO "created_at";
ALTER TABLE IF EXISTS "products" RENAME COLUMN "updatedAt" TO "updated_at";

-- ==========================================================
-- STEP 2: Create user_full_profile_view (Now with correct columns)
-- ==========================================================
CREATE OR REPLACE VIEW user_full_profile_view AS
SELECT 
    u.id, 
    u.name, 
    u.email, 
    u.phone, 
    u.role, 
    u.is_verified, 
    u.created_at, 
    u.last_login
FROM users u;

-- ==========================================================
-- STEP 3: Realtime Enablement
-- ==========================================================
ALTER PUBLICATION supabase_realtime ADD TABLE users;
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
ALTER PUBLICATION supabase_realtime ADD TABLE products;

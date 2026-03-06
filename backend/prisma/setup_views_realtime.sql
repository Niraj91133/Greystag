-- ==========================================================
-- STEP 0: Rename existing tables to match new schema
-- ==========================================================

-- User Domain
ALTER TABLE IF EXISTS "User" RENAME TO "users";
ALTER TABLE IF EXISTS "Address" RENAME TO "user_addresses";
ALTER TABLE IF EXISTS "Measurement" RENAME TO "user_measurements";
ALTER TABLE IF EXISTS "RefreshToken" RENAME TO "user_sessions";
ALTER TABLE IF EXISTS "LoginHistory" RENAME TO "user_login_history";
ALTER TABLE IF EXISTS "UserActivity" RENAME TO "user_activity";

-- Commerce Domain
ALTER TABLE IF EXISTS "Product" RENAME TO "products";
ALTER TABLE IF EXISTS "Category" RENAME TO "categories";
ALTER TABLE IF EXISTS "Wishlist" RENAME TO "wishlists";
ALTER TABLE IF EXISTS "Review" RENAME TO "product_reviews";
ALTER TABLE IF EXISTS "Cart" RENAME TO "carts";

-- Orders Domain
ALTER TABLE IF EXISTS "Order" RENAME TO "orders";
ALTER TABLE IF EXISTS "OrderItem" RENAME TO "order_items";
ALTER TABLE IF EXISTS "PromoCode" RENAME TO "promo_codes";

-- CMS
ALTER TABLE IF EXISTS "GlobalCMS" RENAME TO "cms_pages";

-- ==========================================================
-- STEP 1: Enable Realtime for all core tables
-- ==========================================================
ALTER PUBLICATION supabase_realtime ADD TABLE users;
ALTER PUBLICATION supabase_realtime ADD TABLE orders;
ALTER PUBLICATION supabase_realtime ADD TABLE products;
ALTER PUBLICATION supabase_realtime ADD TABLE categories;
ALTER PUBLICATION supabase_realtime ADD TABLE user_measurements;
ALTER PUBLICATION supabase_realtime ADD TABLE carts;
ALTER PUBLICATION supabase_realtime ADD TABLE wishlists;

-- ==========================================================
-- STEP 2: Create user_full_profile_view
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
    u.last_login,
    -- Aggregate Addresses
    (SELECT json_agg(a) FROM user_addresses a WHERE a.user_id = u.id) as addresses,
    -- Aggregate Orders
    (SELECT json_agg(o) FROM orders o WHERE o.user_id = u.id) as orders,
    -- Aggregate Measurements
    (SELECT json_agg(m) FROM user_measurements m WHERE m.user_id = u.id) as measurements,
    -- Aggregate Recent Activity
    (SELECT json_agg(act) FROM (
        SELECT * FROM user_activity 
        WHERE user_id = u.id 
        ORDER BY created_at DESC 
        LIMIT 10
    ) act) as recent_activity
FROM users u;

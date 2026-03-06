-- ==========================================================
-- STEP 1: Enable Realtime for all core tables
-- ==========================================================

-- Enable realtime for the specific publication 'supabase_realtime'
-- Run these one by one or as a block in Supabase SQL Editor
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

-- ==========================================================
-- STEP 3: Setup Performance Indexes (Redundant if using Prisma Migrate, but safe)
-- ==========================================================
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_orders_user ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_carts_user ON carts(user_id);
CREATE INDEX IF NOT EXISTS idx_wishlists_user ON wishlists(user_id);

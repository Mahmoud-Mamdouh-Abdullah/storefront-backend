CREATE TABLE products_orders (
    id SERIAL PRIMARY KEY,
    qty INTEGER,
    product_id SERIAL REFERENCES products(id) ON DELETE CASCADE,
    order_id SERIAL REFERENCES orders(id) ON DELETE CASCADE
);
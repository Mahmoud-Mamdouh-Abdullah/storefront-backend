CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC,
    category_id SERIAL,
    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
            REFERENCES categories(id)
            ON DELETE SET NULL
);
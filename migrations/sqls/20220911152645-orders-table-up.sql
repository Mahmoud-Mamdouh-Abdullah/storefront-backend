CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100),
    user_id SERIAL,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);
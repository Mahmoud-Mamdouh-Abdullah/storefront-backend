# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index (GET `/api/products`)
- Show (GET `/api/products/:id`)
- Create [token required] (POST `/api/products`)
- Products by category (args: product category) (GET `/api/products/category/:category`)

#### Users
- Index [token required] (GET `/api/users`)
- Show [token required] (GET `/api/users/:id`)
- Create N[token required] (POST `/api/users`)
- Login (POST `/api/users/login`)

#### Orders
- Index [token required] (GET `/api/orders`)
- Show [token required] (GET `/api/orders/:user_id`)
- Create [token required] (POST `/api/orders`)
- Update [token required] (PUT `/api/orders/:id`)
- Delete [token required] (DELETE `/api/orders/:id`)
- Current Order by user (args: user id)[token required] (GET `/api/users/:id/active_order`)
- Completed Orders by user (args: user id)[token required] (GET `/api/users/:id/complete_orders`)

## Data Shapes
#### Product
-  id
- name
- price
- category
```
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price NUMERIC,
    category VARCHAR(100),
);
```

#### User
- id
- firstName
- lastName
- email
- password
```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(150),
    password text
) ;
```
#### Orders
- id
- status (acive/complete)
- user_id
```
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(100),
    user_id SERIAL,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);
```

#### products_orders
- id
- product_id
- order_id
- qty
```
CREATE TABLE products_orders (
    id SERIAL PRIMARY KEY,
    qty INTEGER,
    product_id SERIAL REFERENCES products(id) ON DELETE CASCADE,
    order_id SERIAL REFERENCES orders(id) ON DELETE CASCADE
);
```
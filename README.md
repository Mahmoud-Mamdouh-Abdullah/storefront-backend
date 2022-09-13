# storefront-backend
Simple E-Commerce Backend API0
## Technologies Used
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
 
## Steps to Setup the Project
### 1- Packages Installation
```
npm install
```
### 2- Create .env file and put the following in it:
```
PGHOST=localhost
PGDATABASE=##
PGUSER=postgres
PGPASSWORD=##
BCRYPT_PASSWORD=##
SALT_ROUNDS=10
JWT_SECRET=##
API_PORT=3000
DATABASE_PORT=5432
```
`add your own database name, postgres password, bcrypt passowrd and jwt secret.`

### 3- Database Installation : Run this command
```
db-migrate up
```

### 4- Start the API Server
```
npm start
```
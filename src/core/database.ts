import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
    PGHOST,
    PGDATABASE,
    PG_TEST_DATABASE,
    PGUSER,
    PGPASSWORD,
    DATABASE_PORT,
    ENV,
} = process.env;
console.log(ENV);
let client: any;

if (ENV === 'test') {
    console.log(`mode ${ENV}`);
    client = new Pool({
        host: PGHOST,
        database: PGDATABASE,
        user: PGUSER,
        password: PGPASSWORD,
        port: parseInt(DATABASE_PORT || ''),
    });
}

if (ENV === 'dev') {
    console.log(`mode ${ENV}`);
    client = new Pool({
        host: PGHOST,
        database: PG_TEST_DATABASE,
        user: PGUSER,
        password: PGPASSWORD,
        port: parseInt(DATABASE_PORT || ''),
    });
}

export default client;

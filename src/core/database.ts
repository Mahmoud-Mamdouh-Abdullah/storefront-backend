import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, DATABASE_PORT } = process.env;

const client = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  port: parseInt(DATABASE_PORT || ""),
});

export default client;

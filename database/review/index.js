import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL;
const NODE_ENV = process.env.NODE_ENV;
const sql = postgres(
  DATABASE_URL, 
  NODE_ENV === "production"
    ? { ssl: { rejectUnauthorized: false }, idle_timeout: 60 }
    : { idle_timeout: 60 }
);
export default sql;
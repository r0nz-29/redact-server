import pg from 'pg';
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({connectionString});

export default pool;
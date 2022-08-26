import pg from "pg";
import {config} from "dotenv";

config();

const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
	connectionString,
	/*ssl: {
		rejectUnauthorized: false
	}*/
});

export default pool;

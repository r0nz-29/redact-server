import pg from "pg";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL+"?sslmode=require";

const pool = new pg.Pool({
	connectionString: connectionString
	// ssl: {
	// 	rejectUnauthorized: false
	// }
});

console.log(connectionString);

export default pool;
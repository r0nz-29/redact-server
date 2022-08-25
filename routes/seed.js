import express from "express";
import pool from "../db.js";

const router = express.Router();

router.get("/usersTable", (req, res) => {
	const query = `
    CREATE TABLE users (
    	id SERIAL PRIMARY KEY,
    	name text NOT NULL,
      email text UNIQUE NOT NULL,
      password text NOT NULL
    );
  `;

	pool
		.query(query)
		.then(result => res.json(result));
});

router.get("/questionsTable", (req, res) => {
	const query = `
    CREATE TABLE questions (
			id SERIAL PRIMARY KEY,
			name text NOT NULL,
			link text,
			submissions integer DEFAULT 1,
			solution text NOT NULL,
			list integer NOT NULL,
			created_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
			updated_at timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
	);
  `;

	pool
		.query(query)
		.then(result => res.json(result));
});

router.get("/listsTable", (req, res) => {
	const query = `
    CREATE TABLE lists (
			id SERIAL PRIMARY KEY,
			name text NOT NULL,
			description text NOT NULL,
			owner integer NOT NULL
		)
  `;

	pool
		.query(query)
		.then(result => res.json(result));
});

router.post("/executeQuery", (req, res) => {
	const {query} = req.body;

	if (!!query) {
		pool
			.query(query)
			.then(result => {
				res.json(result);
			})
			.catch(err => {
				res.status(400).json({err});
			});
	} else {
		res.status(400).json({msg: "bad query"});
	}
});

export default router;
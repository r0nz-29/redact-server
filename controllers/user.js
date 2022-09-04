import jwt from 'jsonwebtoken';
import pool from "../db.js";
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  const {username: name, email, password} = req.body;

  if (!name || !email || !password) {
    res.status(400).json({msg: "bad input"})
  }

  // Check if user exists
  pool
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then(result => {
      if (result.rows.length > 0) res.json({msg: "email already registered, please login"});

      // Hash password
      bcrypt.genSalt(10).then(salt => {
        bcrypt.hash(password, salt).then(hashedPassword => {
          pool
            .query("INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id", [name, email, hashedPassword])
            .then(result => {
              const {id} = result.rows[0];
              res.status(201).json({id, name, email, token: generateToken(id)});
            });
        });
      });
    });
};

export const loginUser = (req, res) => {
  const {email, password} = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check for user email
  pool
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then(async result => {
      if (result.rows.length > 0) {
        const user = result.rows[0];
        if (await bcrypt.compare(password, user.password)) {
          res.json({
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
          });
        } else {
          res.status(400).json({msg: "wrong password"});
        }
      } else {
        res.status(400).json({msg: "user doesn't exist"});
      }
    });
};

export const guestLogin = async (req, res) => {
  pool
    .query("SELECT * FROM users WHERE email = 'guest@redact.in'")
    .then(result => {
      const {name, email, id} = result.rows[0];
      res.json({name, email, id, token: generateToken(id)});
    });
};

export const getMe = async (req, res) => {
  if (!!req.user)
    res.status(200).json(req.user);
  else res.status(400).json({msg: "not authorized"});
};

export const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
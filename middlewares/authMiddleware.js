import jwt from 'jsonwebtoken';
import pool from "../db.js";

export const PROTECTED = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      pool
        .query("SELECT name, email, id FROM users WHERE id = $1", [decoded.id])
        .then(result => {
          if (result.rows.length > 0) {
            req.user = {...result.rows[0]};
            next();
          } else {
            res.status(400).json({msg: "user not found"});
          }
        });
    } catch (error) {
      console.log(error);
      res.json({msg: "something went wrong"});
    }
  }

  if (!token) {
    res.status(401).json({msg: 'Not authorized, no token'});
  }
};
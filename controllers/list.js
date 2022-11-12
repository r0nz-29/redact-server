import pool from "../db.js";
import {intervalToDuration} from "date-fns";

export function addList(req, res, next) {
  const {name, description} = req.body;
  const owner = req.user.id;

  if (!!name && !!owner && !!description) {
    pool
      .query("INSERT INTO lists(name, description, owner) VALUES($1, $2, $3)", [name, description, owner])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "bad title or board id"});
  }
}

export function deleteList(req, res, next) {
  const {id} = req.params;
  if (!!id) {
    pool
      .query("DELETE FROM lists WHERE id = $1", [id])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "Bad list id"});
  }
}

export function editList(req, res, next) {

}

export function getLists(req, res) {
  pool
    .query("SELECT * FROM lists WHERE owner = $1", [req.user.id])
    .then(result => {
      res.json(result.rows);
    });
}

export function addCardToList(req, res, next) {
  const {listId} = req.params;
  const {title, details} = req.body;

  if (!!listId && !!title) {
    pool
      .query("INSERT INTO cards(title, details, list) VALUES($1, $2, $3) RETURNING *", [title, details, listId])
      .then(result => {
        res.json(result.rows);
      });
  } else {
    res.status(400).json({msg: "bad inputs"});
  }
}

export function getPopulatedLists(req, res) {
  if (!!req.user.id) {
    pool
      .query("SELECT * FROM lists WHERE owner = $1", [req.user.id])
      .then(async result => {
        for (const row of result.rows) {
          pool
            .query("SELECT * FROM questions WHERE list = $1", [row.id])
            .then(result => {
              row.questions = result.rows;
              res.json(row);
            });
        }
      });
  } else {
    res.status(400).json({msg: "Bad user id"});
  }
}

export function getPopulatedList(req, res) {
  const {listId} = req.params;

  if (!!listId) {
    pool
      .query("SELECT * FROM lists where id = $1", [listId])
      .then(result => {
        const list = result.rows[0];

        pool
          .query("SELECT * FROM questions WHERE list = $1 ORDER BY id DESC", [listId])
          .then(result => {
            list.questions = result.rows;
            res.json(list);
          });
      });
  } else {
    res.status(400).json({msg: "bad list id"});
  }
}

export function addQuestionToList(req, res, next) {
  const {name, link, solution, listId} = req.body;

  if (!!name && !!link && !!solution && !!listId) {
    pool
      .query("INSERT INTO questions(name, link, solution, list) VALUES($1, $2, $3, $4)", [name, link, solution, listId])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "bad input"});
  }
}

export function getBacklogs(req, res) {
  console.log(req.user);
  pool
    .query("SELECT * FROM questions ORDER BY updated_at ASC LIMIT 5")
    .then(result => {
      const questions = result.rows;

      const backlogs = questions.filter((question) => {
        const duration = intervalToDuration({start: question.updated_at, end: new Date()});
        // console.log("backlogs: " + duration);
        // re-attempt
        return (duration.days >= 4) || duration.months !== 0;
      });

      res.status(200).json(backlogs);
    });
}

export function getRecents(req, res) {
  pool
    .query("SELECT * FROM questions ORDER BY updated_at DESC")
    .then(result => {
      const questions = result.rows;

      const recents = questions.filter((question) => {
        const duration = intervalToDuration({start: question.updated_at, end: new Date()});
        // console.log("new : " + duration);
        // new
        return (duration.hours <= 24 && duration.days === 0 && duration.months === 0 && question.submissions === 1);
      });
      res.status(200).json(recents);
    });
}

export function getResults(req, res) {
  let {term} = req.params;

  if (!!term) {
    pool
      .query("SELECT * FROM questions WHERE LOWER(name) LIKE LOWER($1)", [`%${term}%`])
      .then(result => {
        res.status(200).json(result.rows);
      });
  } else {
    res.status(400).json({msg: "bad search term"});
  }
}
import pool from "../db.js";
import board from "../routes/board.js";

export function createBoard(req, res, next) {
  const {name} = req.body;

  if (!!name) {

    // check if board already exists for current user
    pool
      .query("SELECT * FROM boards WHERE owner = $1 AND name = $2", [req.user._id, name])
      .then(result => {
        if (result.rows.length > 0) {
          res.status(400).json({msg: "board with same name already exists"});
        } else {
          pool
            .query("INSERT INTO boards(name, owner) VALUES($1, $2) RETURNING *", [name, req.user._id])
            .then(result => {
              if (result.rows.length > 0) {
                next();
              } else {
                res.status(400).json({msg: "unable to add board"});
              }
            });
        }
      });
  } else {
    res.status(400).json({msg: "bad name"});
  }
}

export function getUserBoards(req, res) {
  if (!!req.user._id) {
    pool
      .query("SELECT * FROM boards WHERE owner = $1", [req.user._id])
      .then(result => {
        res.json(result.rows);
      });
  } else {
    res.status(400).json({msg: "Bad user id"});
  }
}

export function getPopulatedUserBoards(req, res) {
  if (!!req.user._id) {
    pool
      .query("SELECT id FROM boards WHERE owner = $1", [req.user._id])
      .then(async result => {
        const boards = [];

        for (const row of result.rows) {
          boards.push(await _populateBoard(row.id));
        }

        res.json(boards);
      });
  } else {
    res.status(400).json({msg: "Bad user id"});
  }
}

export function deleteBoard(req, res, next) {
  const {id} = req.params;
  if (!!id) {
    pool
      .query("DELETE FROM boards WHERE id = $1", [id])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "Bad board id"});
  }
}

export function editBoard(req, res, next) {
  const {name, id} = req.body;

  if (!!name) {
    pool
      .query("UPDATE boards SET name = $1 WHERE id = $2", [name, id])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "bad name"});
  }
}

export function addListToBoard(req, res, next) {
  const {boardId} = req.params;
  const {title} = req.body;

  if (!!boardId && !!title) {
    pool
      .query("INSERT INTO lists(title, board) VALUES($1, $2)", [title, boardId])
      .then(result => {
        next();
      });
  } else {
    res.status(400).json({msg: "Bad board id"});
  }
}

export function getAllListsFromBoard(req, res) {
  const {boardId} = req.params;

  if (!!boardId) {
    pool
      .query("SELECT * FROM lists WHERE board = $1", [boardId])
      .then(result => {
        res.json(result.rows);
      });
  } else {
    res.status(400).json({msg: "Bad board id"});
  }
}

export async function getPopulatedBoard(req, res) {
  const {boardId} = req.params || req.query;

  const board = await _populateBoard(boardId);

  if (!!board) {
    res.json(board);
  } else {
    res.status(400).json({msg: "bad id"});
  }
}

function _populateBoard(boardId) {
  let lists = [];

  if (!!boardId) {

    // get all lists
    return pool
      .query("SELECT * FROM lists WHERE board = $1", [boardId])
      .then(result => {
        lists = result.rows;

        // fill each list with corresponding cards
        for (const list of lists) {
          pool
            .query("SELECT * FROM cards WHERE list = $1", [list.id])
            .then(result => {
              list.cards = result.rows;
            });
        }

        // get board info
        return pool
          .query("SELECT name, visibility FROM boards WHERE id = $1", [boardId])
          .then(result => {
            if (result.rows.length > 0) {
              return {
                id: boardId,
                name: result.rows[0].name || "",
                visibility: result.rows[0].visibility || "private",
                columns: lists || undefined,
              };
            }
          });
      });
  }
}

export function updateQuestion(req, res, next) {
  const {questionId} = req.params;

  if (!!questionId) {
    pool
      .query("UPDATE questions SET submissions = submissions + 1, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING list", [questionId])
      .then(result => {
        req.params.listId = result.rows[0].list;
        next();
      })
  } else {
    res.status(400).json({msg: "bad question id"})
  }
}
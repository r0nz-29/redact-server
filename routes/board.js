import {Router} from "express";
import {
  addListToBoard,
  createBoard,
  deleteBoard,
  editBoard,
  getAllListsFromBoard, getPopulatedBoard, getPopulatedUserBoards,
  getUserBoards, updateQuestion
} from "../controllers/question.js";
import {getLists, getPopulatedList} from "../controllers/list.js";

const router = Router();

router.get("/:questionId/update", updateQuestion, getPopulatedList);
//
// router.get("/list", getPopulatedUserBoards);
// router.get("/:boardId", getPopulatedBoard);
// router.get("/:boardId/getLists", getLists);
//
// router.post("/create", createBoard, getUserBoards);
// router.post("/:boardId/addList", addListToBoard, getAllListsFromBoard);
//
// router.patch("/edit", editBoard, getUserBoards);
// router.delete("/delete/:id", deleteBoard, getUserBoards);

export default router;
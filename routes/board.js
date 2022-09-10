import {Router} from "express";
import {
  addListToBoard,
  createBoard,
  deleteBoard,
  editBoard,
  getAllListsFromBoard, getPopulatedBoard, getPopulatedUserBoards,
  getUserBoards, updateQuestion
} from "../controllers/question.js";
import {getBacklogs, getLists, getPopulatedList, getRecents} from "../controllers/list.js";

const router = Router();

router.get("/:questionId/update", updateQuestion, getPopulatedList);
router.get("/backlogs", getBacklogs);
router.get("/recentSubmissions", getRecents);

export default router;
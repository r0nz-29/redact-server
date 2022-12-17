import {Router} from "express";
import {
  addListToBoard,
  createBoard,
  deleteBoard,
  editBoard,
  getAllListsFromBoard, getPopulatedBoard, getPopulatedUserBoards,
  getUserBoards, updateQuestion
} from "../controllers/question.js";
import {
  getBacklogs,
  getLists,
  getPopulatedList,
  getRecents,
  getResults,
  getTotalCount,
  getTotalLeetcodeCount,
} from "../controllers/list.js";

const router = Router();

router.get("/:questionId/update", updateQuestion, getPopulatedList);
router.get("/backlogs", getBacklogs);
router.get("/recentSubmissions", getRecents);
router.get("/search/:term", getResults);
router.get("/totalCount", getTotalCount);
router.get("/totalLeetcodeCount", getTotalLeetcodeCount);

export default router;
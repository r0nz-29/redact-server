import {Router} from "express";
import {
	addListToBoard,
	createBoard,
	deleteBoard,
	editBoard,
	getAllListsFromBoard, getPopulatedBoard, getPopulatedUserBoards,
	getUserBoards
} from "../controllers/question.js";
import {getLists} from "../controllers/list.js";

const router = Router();


export default router;
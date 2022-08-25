import express from "express";
import {
	addCardToList,
	addList,
	addQuestionToList,
	deleteList,
	getLists,
	getPopulatedList
} from "../controllers/list.js";

const router = express.Router();

router.get("/getLists", getLists);

router.get("/:listId", getPopulatedList);

router.post("/:listId/addQuestion", addQuestionToList, getPopulatedList);

router.post("/addList", addList, getLists);

// router.patch("/editList/:listId", getLists);

// router.delete("/deleteList/:listId", deleteList, getLists);

// router.post("/:listId/addCard", addCardToList);

export default router;
import express from "express";
import CommentController from "../controllers/comment.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

const commentController = new CommentController();

router.get("/", asyncHandler(commentController.getComments));
router.get("/:id", asyncHandler(commentController.getComment));
router.put("/:id", asyncHandler(commentController.updateComment));
router.post("/", asyncHandler(commentController.createComment));
router.delete("/:id", asyncHandler(commentController.deleteComment));

export default router;

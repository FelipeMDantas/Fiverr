import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../controllers/middleware/jwt.js";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);

export default router;

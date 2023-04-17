import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import { getOrders, createOrders } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:gigId", verifyToken, createOrders);
router.get("/", verifyToken, getOrders);

export default router;

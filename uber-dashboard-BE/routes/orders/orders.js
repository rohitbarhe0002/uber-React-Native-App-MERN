import express from "express";
import { createOrder,deleteOrder,getAllOrders,getOrdersById } from "../../Controller/orders/order.js";
import { verifyUser } from "../../verifyAuth/verifyToken.js";
const router = express.Router();

router.get("/",verifyUser, getAllOrders)
router.get("/:id", verifyUser, getOrdersById);
router.delete("/:id", verifyUser, deleteOrder);
router.post("/orders", verifyUser, createOrder);

export default router;
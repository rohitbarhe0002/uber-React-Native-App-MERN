import express from "express";
import { createOrder,deleteOrder,getAllOrders,getOrdersById } from "../../Controller/orders/order.js";
const router = express.Router();
router.get("/",getAllOrders)
router.get("/:id",getOrdersById)
router.delete("/:id",deleteOrder)

router.post("/orders",createOrder)

export default router;
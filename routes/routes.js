const express = require("express");
const {createOrder,updateOrder,getOrders,findOrder,deleteOrder} = require('../controllers/controller')
const router = express.Router();

router.post("/create",createOrder);
router.post("/update",updateOrder);
router.post("/list",getOrders);
router.get("/search/:orderId",findOrder);
router.delete("/delete/:orderId",deleteOrder);

module.exports = router;
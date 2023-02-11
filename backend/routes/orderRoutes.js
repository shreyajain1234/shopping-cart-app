const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controllers/orderController");
const { isAuthenticateUser} = require("../middlewares/auth");
const router = express.Router();

//getUserOrder
router.route("/myorders").get( getMyOrders);
//get order by id
router.route("/:id").get( getOrderById);
//craete new order
router.route("/order").post( addOrderItem);
//update order
router.route("/:id/pay").put(updateOrderToPaid);
module.exports = router;
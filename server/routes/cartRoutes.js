const express=require("express");
const {addToCart, getUserCart, updateCartItem, removeCartItem}=require("../controllers/cartController");

const authMiddleware=require("../middleware/authMiddleware");

const router=express.Router();

router.post("/", authMiddleware, addToCart);

router.get("/", authMiddleware, getUserCart);

router.put("/:productId", authMiddleware, updateCartItem);

router.delete("/:productId", authMiddleware, removeCartItem);

module.exports=router;
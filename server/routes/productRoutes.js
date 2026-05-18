const express = require("express");

const {
    createProduct,
    getProducts,
    getSingleProduct, 
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();


// CREATE PRODUCT (Protected)
router.post("/", authMiddleware, adminMiddleware, createProduct);


// GET ALL PRODUCTS (Public)
router.get("/",  getProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", authMiddleware, adminMiddleware, updateProduct);

router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
const Cart = require("../models/Cart");

const Product = require("../models/Product");

const CustomError = require("../utils/customError");
// ADD TO CART
const addToCart = async (req, res, next) => {

    try {

        const { productId, quantity } = req.body;

        const product = await Product.findOne({ productId });

        if (!product) {

            throw new CustomError(
                "Product Not Found",
                404
            );

        }

        const existingCart = await Cart.findOne({
            user: req.user.id,
            product: product._id
        });

        if (existingCart) {

            existingCart.quantity += quantity || 1;

            await existingCart.save();

            return res.status(200).json({
                success: true,
                message: "Cart Updated Successfully",
                data: existingCart
            });

        }

        const cart = new Cart({
            user: req.user.id,
            product: product._id,
            quantity: quantity || 1
        });

        await cart.save();

        res.status(201).json({
            success: true,
            message: "Product Added To Cart",
            data: cart
        });

    } catch (error) {

        next(error);

    }

};
// GET USER CART
const getUserCart = async (req, res, next) => {

    try {

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        res.status(200).json({
            success: true,
            message: "Cart Fetched Successfully",
            data: cartItems
        });

    } catch (error) {

        next(error);

    }

};
// UPDATE CART ITEM
const updateCartItem = async (req, res, next) => {

    try {

        const { quantity } = req.body;

        const updatedCart = await Cart.findOneAndUpdate(
            {
                user: req.user.id,
                product: req.params.productId
            },
            {
                quantity
            },
            {
                new: true
            }
        ).populate("product");

        if (!updatedCart) {

            throw new CustomError(
                "Cart Item Not Found",
                404
            );

        }

        res.status(200).json({
            success: true,
            message: "Cart Updated Successfully",
            data: updatedCart
        });

    } catch (error) {

        next(error);

    }

};
// REMOVE CART ITEM
const removeCartItem = async (req, res, next) => {

    try {

        const deletedCart = await Cart.findOneAndDelete({
            user: req.user.id,
            product: req.params.productId
        });

        if (!deletedCart) {

            throw new CustomError(
                "Cart Item Not Found",
                404
            );

        }

        res.status(200).json({
            success: true,
            message: "Item Removed From Cart"
        });

    } catch (error) {

        next(error);

    }

};
module.exports = {
    addToCart,
    getUserCart,
    updateCartItem,
    removeCartItem
};
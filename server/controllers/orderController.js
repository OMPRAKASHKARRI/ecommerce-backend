const Order = require("../models/Order");

const Cart = require("../models/Cart");

const CustomError = require("../utils/customError");
// PLACE ORDER
const placeOrder = async (req, res, next) => {

    try {

        const cartItems = await Cart.find({
            user: req.user.id
        }).populate("product");

        if (cartItems.length === 0) {

            throw new CustomError(
                "Cart Is Empty",
                400
            );

        }

        let totalAmount = 0;

        const products = cartItems.map((item) => {

            totalAmount += item.product.price * item.quantity;

            return {
                product: item.product._id,
                quantity: item.quantity
            };

        });

        const order = new Order({
            user: req.user.id,
            products,
            totalAmount
        });

        await order.save();

        await Cart.deleteMany({
            user: req.user.id
        });

        res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            data: order
        });

    } catch (error) {

        next(error);

    }

};
// GET USER ORDERS
const getUserOrders = async (req, res, next) => {

    try {

        const orders = await Order.find({
            user: req.user.id
        })
        .populate("products.product")
        .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Orders Fetched Successfully",
            data: orders
        });

    } catch (error) {

        next(error);

    }

};
module.exports = {
    placeOrder,
    getUserOrders
};
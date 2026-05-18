const Product = require("../models/Product");

const CustomError = require("../utils/customError");
// CREATE PRODUCT
const createProduct = async (req, res, next) => {

    try {

        const {
            productId,
            title,
            description,
            price,
            category,
            discount
        } = req.body;

        if (
            !productId ||
            !title ||
            !description ||
            !price ||
            !category
        ) {

            throw new CustomError(
                "All Fields Are Required",
                400
            );

        }

        if (price <= 0) {

            throw new CustomError(
                "Price Must Be Greater Than 0",
                400
            );

        }

        const product = new Product({
            productId,
            title,
            description,
            price,
            category,
            discount
        });

        await product.save();

        res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: product
        });

    } catch (error) {

        next(error);

    }

};
// GET PRODUCTS
const getProducts = async (req, res, next) => {

    try {

        const search = req.query.search || "";

        const category = req.query.category || "";

        const page = Number(req.query.page) || 1;

        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        let sortOption = {};

        if (req.query.sort === "asc") {
            sortOption.price = 1;
        }

        if (req.query.sort === "desc") {
            sortOption.price = -1;
        }

        let filter = {};

        if (search) {

            filter.title = {
                $regex: search,
                $options: "i"
            };

        }

        if (category) {
            filter.category = category;
        }

        const products = await Product.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        const totalProducts = await Product.countDocuments(filter);

        res.status(200).json({
            success: true,
            message: "Products Fetched Successfully",
            data: {
                totalProducts,
                currentPage: page,
                totalPages: Math.ceil(totalProducts / limit),
                products
            }
        });

    } catch (error) {

        next(error);

    }

};
// GET SINGLE PRODUCT
const getSingleProduct = async (req, res, next) => {

    try {

        const product = await Product.findOne({
            productId: req.params.id
        });

        if (!product) {

            throw new CustomError(
                "Product Not Found",
                404
            );

        }

        res.status(200).json({
            success: true,
            message: "Product Fetched Successfully",
            data: product
        });

    } catch (error) {

        next(error);

    }

};
// UPDATE PRODUCT
const updateProduct = async (req, res, next) => {

    try {

        const updatedProduct = await Product.findOneAndUpdate(
            {
                productId: req.params.id
            },
            req.body,
            {
                new: true
            }
        );

        if (!updatedProduct) {

            throw new CustomError(
                "Product Not Found",
                404
            );

        }

        res.status(200).json({
            success: true,
            message: "Product Updated Successfully",
            data: updatedProduct
        });

    } catch (error) {

        next(error);

    }

};
// DELETE PRODUCT
const deleteProduct = async (req, res, next) => {

    try {

        const deletedProduct = await Product.findOneAndDelete({
            productId: req.params.id
        });

        if (!deletedProduct) {

            throw new CustomError(
                "Product Not Found",
                404
            );

        }

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });

    } catch (error) {

        next(error);

    }

};
module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};
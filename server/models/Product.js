const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    productId: {
        type: Number,
        unique: true,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    discount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Product", productSchema);
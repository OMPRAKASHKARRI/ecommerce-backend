const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const User = require("../models/User");
const Product = require("../models/Product");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));


// ================= USERS =================

const seedUsers = async () => {

    try {

        await User.deleteMany();

        const users = [];

        for (let i = 1; i <= 20; i++) {

            const hashedPassword = await bcrypt.hash("123456", 10);

            users.push({
                name: `User${i}`,
                email: `user${i}@gmail.com`,
                password: hashedPassword
            });

        }

        await User.insertMany(users);

        console.log("20 Users Inserted Successfully");

    } catch (error) {

        console.log(error);

    }

};


// ================= PRODUCTS =================

const seedProducts = async () => {

    try {

        await Product.deleteMany();

        const products = [

            {
                productId: 1,
                title: "iPhone 15",
                description: "Apple flagship mobile",
                price: 80000,
                category: "Electronics",
                discount: 10
            },

            {
                productId: 2,
                title: "Samsung S25",
                description: "Samsung premium mobile",
                price: 75000,
                category: "Electronics",
                discount: 15
            },

            {
                productId: 3,
                title: "MacBook Pro",
                description: "Apple laptop",
                price: 150000,
                category: "Laptop",
                discount: 5
            },

            {
                productId: 4,
                title: "Dell XPS",
                description: "Dell premium laptop",
                price: 120000,
                category: "Laptop",
                discount: 8
            },

            {
                productId: 5,
                title: "Boat Headphones",
                description: "Wireless headphones",
                price: 3000,
                category: "Accessories",
                discount: 20
            },

            {
                productId: 6,
                title: "Nike Shoes",
                description: "Running shoes",
                price: 5000,
                category: "Fashion",
                discount: 12
            },

            {
                productId: 7,
                title: "Puma Shoes",
                description: "Sports shoes",
                price: 4500,
                category: "Fashion",
                discount: 10
            },

            {
                productId: 8,
                title: "HP Pavilion",
                description: "HP laptop",
                price: 70000,
                category: "Laptop",
                discount: 6
            },

            {
                productId: 9,
                title: "Realme Narzo",
                description: "Budget smartphone",
                price: 18000,
                category: "Electronics",
                discount: 7
            },

            {
                productId: 10,
                title: "OnePlus 13",
                description: "Flagship killer",
                price: 65000,
                category: "Electronics",
                discount: 11
            },

            {
                productId: 11,
                title: "Sony Earbuds",
                description: "Noise cancellation earbuds",
                price: 9000,
                category: "Accessories",
                discount: 18
            },

            {
                productId: 12,
                title: "LG Monitor",
                description: "4K monitor",
                price: 25000,
                category: "Electronics",
                discount: 9
            },

            {
                productId: 13,
                title: "Asus ROG",
                description: "Gaming laptop",
                price: 160000,
                category: "Laptop",
                discount: 4
            },

            {
                productId: 14,
                title: "Mi Band",
                description: "Fitness tracker",
                price: 2500,
                category: "Accessories",
                discount: 13
            },

            {
                productId: 15,
                title: "Canon Camera",
                description: "Professional DSLR",
                price: 90000,
                category: "Electronics",
                discount: 6
            },

            {
                productId: 16,
                title: "Levis Jacket",
                description: "Winter jacket",
                price: 6000,
                category: "Fashion",
                discount: 14
            },

            {
                productId: 17,
                title: "Adidas T-Shirt",
                description: "Sports wear",
                price: 2000,
                category: "Fashion",
                discount: 5
            },

            {
                productId: 18,
                title: "Apple Watch",
                description: "Smart watch",
                price: 45000,
                category: "Accessories",
                discount: 10
            },

            {
                productId: 19,
                title: "Acer Nitro",
                description: "Gaming laptop",
                price: 85000,
                category: "Laptop",
                discount: 7
            },

            {
                productId: 20,
                title: "Nothing Phone",
                description: "Transparent design smartphone",
                price: 40000,
                category: "Electronics",
                discount: 8
            }

        ];

        await Product.insertMany(products);

        console.log("20 Products Inserted Successfully");

    } catch (error) {

        console.log(error);

    }

};


// ================= IMPORT DATA =================

const importData = async () => {

    await seedUsers();

    await seedProducts();

    process.exit();

};

importData();
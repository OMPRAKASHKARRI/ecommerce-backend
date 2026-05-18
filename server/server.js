const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet=require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// database connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
const limiter = rateLimit({

    windowMs: 15 * 60 * 1000,

    max: 100,

    message: {
        success: false,
        message: "Too Many Requests. Try Again Later"
    }

});

app.use(limiter);

// routes
app.use("/api/auth", authRoutes);
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const cartRoutes=require("./routes/cartRoutes");
app.use("/api/cart", cartRoutes);


const orderRoutes=require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);


const errorMiddleware = require("./middleware/errorMiddleware");
app.use(errorMiddleware);
// default route
app.get("/", (req, res) => {
    res.send("Ecommerce API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
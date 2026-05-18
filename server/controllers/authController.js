const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const CustomError = require("../utils/customError");


// ================= REGISTER USER =================

const registerUser = async (req, res, next) => {

    try {

        const { name, email, password } = req.body;

        // validation
        if (!name || !email || !password) {

            throw new CustomError(
                "All Fields Are Required",
                400
            );

        }

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            throw new CustomError(
                "Invalid Email Format",
                400
            );

        }

        // password validation
        if (password.length < 6) {

            throw new CustomError(
                "Password Must Be At Least 6 Characters",
                400
            );

        }

        // existing user check
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            throw new CustomError(
                "User Already Exists",
                400
            );

        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User Registered Successfully"
        });

    } catch (error) {

        next(error);

    }

};


// ================= LOGIN USER =================

const loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        // validation
        if (!email || !password) {

            throw new CustomError(
                "Email And Password Required",
                400
            );

        }

        // find user
        const user = await User.findOne({ email });

        if (!user) {

            throw new CustomError(
                "Invalid User",
                400
            );

        }

        // compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            throw new CustomError(
                "Invalid Password",
                400
            );

        }

        // generate token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: {
                token
            }
        });

    } catch (error) {

        next(error);

    }

};


// ================= CHANGE PASSWORD =================

const changePassword = async (req, res, next) => {

    try {

        const { oldPassword, newPassword } = req.body;

        // validation
        if (!oldPassword || !newPassword) {

            throw new CustomError(
                "All Fields Are Required",
                400
            );

        }

        // new password validation
        if (newPassword.length < 6) {

            throw new CustomError(
                "New Password Must Be At Least 6 Characters",
                400
            );

        }

        // find logged in user
        const user = await User.findById(req.user.id);

        if (!user) {

            throw new CustomError(
                "User Not Found",
                404
            );

        }

        // compare old password
        const isMatch = await bcrypt.compare(
            oldPassword,
            user.password
        );

        if (!isMatch) {

            throw new CustomError(
                "Old Password Incorrect",
                400
            );

        }

        // hash new password
        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );

        // update password
        user.password = hashedPassword;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password Changed Successfully"
        });

    } catch (error) {

        next(error);

    }

};


module.exports = {
    registerUser,
    loginUser,
    changePassword
};
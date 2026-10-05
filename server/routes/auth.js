const express = require('express');
const router = express.Router();
const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// SIGNUP
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "username and password required" });
        }

        const existingUser = await user.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({ username, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(201).json({ token, message: "user created successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "username and password required" });
        }

        const existingUser = await user.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: "invalid username or password" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "invalid username or password" });
        }

        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.status(200).json({ token, message: "login successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
});

module.exports = router;
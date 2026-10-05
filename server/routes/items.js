const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.post("/", async (req, res) => {
    try {
        const { type, itemName, description, location, date } = req.body;
        const newItem = new Item({ type, itemName, description, location, date });
        await newItem.save();
        res.status(201).json({ message: "Item reported successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
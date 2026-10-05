const express = require('express');
const cors = require('cors');
require("dotenv").config();

const connectDB = require("./config/db");
const app = express();

connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// routes
const authRoute = require("./routes/auth");
const itemsRoute = require("./routes/items");

app.use("/api/auth", authRoute);
app.use("/api/items", itemsRoute);

app.get("/", (req, res) => {
    res.send("API running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
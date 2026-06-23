const express = require("express")

const cors = require("cors");

const app = express();

const userRoutes = require("./routes/userRoutes");

app.use(cors());

app.use(express.json());

app.use(userRoutes);

module.exports = app;
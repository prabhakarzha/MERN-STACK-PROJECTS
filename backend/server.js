const express = require("express");
// const colors = require("colors");
const mongoose = require("mongoose");

const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
// connectDB();
require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));

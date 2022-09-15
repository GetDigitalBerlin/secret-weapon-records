const express = require("express");
const app = express();
const cors = require("cors");
const recordRouter = require("./records/record.router");

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/records", recordRouter);

module.exports = app;

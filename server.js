require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 27017;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const DB = mongoose.connection;

DB.on("Error: ", (error) => console.log("😭 =>", error));
DB.once("Open: ", () => console.log("✅ Connected to the DB"));

app.use(express.json());

const ticketRouter = require("./routes/tickets");

app.use("/tickets", ticketRouter);

// Server started
app.listen(PORT, () => console.log("🚀 Server Started 🚀 "));

const express = require('express');

const router = require("./routes.js");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser")
const cors = require('cors');
const {authentication} = require("../middlewares/authMiddleware")

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static("uploads"))
app.use(cookieParser());
app.use(authentication)
app.use(router)

mongoose.set({"strictQuery": false})
mongoose.connect("mongodb://localhost:27017/Kuzmagram") // <---------- add name of database connection

app.listen(7070, console.log("Server is listening on port 7070..."))
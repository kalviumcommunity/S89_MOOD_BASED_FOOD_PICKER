const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const moodRouter = require("./router");
app.use('/mood',moodRouter);

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});

app.get("/", (req, res) => {
    try {
        res.status(200).send({ msg: "mongoDB connected" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});


app.listen(3000, async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully")
    }catch(error){
        console.log("Error")
    }
    
});
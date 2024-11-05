const express = require("express");
const dotenv = require("dotenv").config();
const connectDB  = require('./connect/database');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/notes",require("./routes/noteRoutes"))




app.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}...`)
})
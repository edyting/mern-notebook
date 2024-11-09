const express = require("express");
const dotenv = require("dotenv").config();
const connectDB  = require('./connect/database');
const {errorHandler} = require('./middlewares/errorHandler')

connectDB();

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api/notes",require("./routes/noteRoutes"))




// errorHandler
app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}...`)
})
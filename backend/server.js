const express = require("express");
const dotenv = require("dotenv").config();

const app = express();


app.use("/api/notes",require("./routes/noteRoutes"))




app.listen(process.env.PORT,()=>{
    console.log(`listening on port: ${process.env.PORT}...`)
})
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require('express-async-handler');


const protect = asyncHandler(async (req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(" ")[1];
            let decoded = jwt.verify(token,process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select("-password")
            
            next()
        } catch (error) {
            console.log(`${error} error message...`);
            res.status(401)
            throw new Error("You are not authorized");
        }
    }

    if(!token){
        res.status(401)
        throw new Error("You are not authorized, No token found")
    }
   
});

module.exports = {protect};
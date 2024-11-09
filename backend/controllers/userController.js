const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please all fields are required")
    }

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400)
        throw new Error("Please a user with this email exists in our database")
    }

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({name,email,password:hashedPassword});

    if(user){
        res.status(201).json({_id:user._id,name:user.name,email:user.email,password:user.password, token: generateJWTtoken(user._id)})
    }else{
        res.status(400).json({msg:"Invalid Data"})
    }
   
})

const login = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("Please all fields are required")
    }
    const user = await User.findOne({email});
    const passwordMatch = await bcrypt.compare(password,user.password);
    if(user && passwordMatch){
        res.status(200).json({_id:user._id,name:user.name,email:user.email,token: generateJWTtoken(user._id)})
    }
    else{
        res.status(400)
        throw new Error("User with this email is not found");
    }
    
})

const current = asyncHandler(async (req,res)=>{
    res.status(200).json({msg:"You are the current user"})
})


// generating jwt token
const generateJWTtoken = (id)=>{return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:60*60*60})}

module.exports = {register,login,current}
const express = require("express");
const {register,login,current } = require('../controllers/userController');
const {protect}= require("../middlewares/authMiddleware")

const router = express.Router();


router.get('/current',protect,current);
router.post("/login",login);
router.post("/register",register);




module.exports= router
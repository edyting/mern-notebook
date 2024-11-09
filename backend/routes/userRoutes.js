const express = require("express");
const {register,login,current } = require('../controllers/userController')

const router = express.Router();


router.get('/current',current)
router.post("/login",login)
router.post("/register",register)




module.exports= router
const express = require("express");
const {protect}= require("../middlewares/authMiddleware");

const router = express.Router();
const {getNotes,addNote,updateNote,deleteNote} = require('../controllers/notesController')


router.get("/",protect,getNotes);

router.post("/",protect,addNote);

router.put("/:id",protect,updateNote);

router.delete("/:id",protect,deleteNote);

module.exports = router;
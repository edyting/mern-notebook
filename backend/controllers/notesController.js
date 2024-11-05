const Note = require('../models/noteModels');
const asyncHandler = require('express-async-handler');


const getNotes =asyncHandler(async (req,res)=>{
    const notes = await Note.find();
        res.status(200).json(notes)
    
})

const addNote =asyncHandler(async (req,res) =>{
    const note = await Note.create({
        title:req.body.title,body:req.body.body
    })
    res.status(200).json(note);
})

const updateNote =asyncHandler(async (req,res) =>{
    const id = req.params.id;
    res.json({msg:`update note with id ...${id}`+id})
})

const deleteNote =asyncHandler(async (req,res) =>{
    const id = req.params.id;
    res.json({msg:`delete note with id ...${id}`})
})


module.exports = {getNotes,addNote,updateNote,deleteNote}
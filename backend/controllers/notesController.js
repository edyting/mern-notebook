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

    const note = await Note.findById(req.params.id);

    if(!note){
        res.status(400)
        throw new Error("No note found with that Id")
    } 

    const updatedNote = await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});    
    res.json(updatedNote)
})

const deleteNote =asyncHandler(async (req,res) =>{
   

    const note = await Note.findById(req.params.id);

    if(!note){
        res.status(400)

        throw new Error("No note found with that id")
    }

    await Note.findByIdAndDelete(req.params.id)

    res.json({msg:`delete note with id ...${req.params.id}`})
})


module.exports = {getNotes,addNote,updateNote,deleteNote}
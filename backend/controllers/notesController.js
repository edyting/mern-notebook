const getNotes = (req,res)=>{

        res.json({new:"get all note"})
    
} 

const addNote = (req,res) =>{
    
    res.json({msg:"add new note"})
}

const updateNote = (req,res) =>{
    const id = req.params.id;
    res.json({msg:`update note with id ...${id}`+id})
}

const deleteNote = (req,res) =>{
    const id = req.params.id;
    res.json({msg:`delete note with id ...${id}`})
}


module.exports = {getNotes,addNote,updateNote,deleteNote}
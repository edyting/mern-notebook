const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{type:String,required:[true,"Please enter title"]},
    body:{type:String,required:[true,"Please enter data in body"]}
},{
    timestamps: true
});

module.exports = mongoose.model('Note',noteSchema);
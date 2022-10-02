const mongoose = require("mongoose");

const diseaseformSchema = new mongoose.Schema({
    desillness : {
        type:String,
        required:true
    },
    date : {
        type:Date,
        required:true
    },
    hlybs : {
        type: Number,
        required:true
    },
    surgery : {
        type:String,
        required:true
    },
    hopi: {
        type:String,
        required:true
    },
    diagnosis: {
        type:String,
        required:true
    },
    allergies: {
        type:String,
        required:true
    },
    mediaction: {
        type:String,
        required:true
    },
    image: String
})

const Diseaseform = new mongoose.model("Diseaseform" ,diseaseformSchema);

module.exports= Diseaseform;
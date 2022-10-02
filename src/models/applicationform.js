const mongoose = require("mongoose");

const applicationformSchema = new mongoose.Schema({
    fullname : {
        type:String,
        required:true
    },
    bloodgroup : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    address : {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    dob: {
        type:Date,
        required:true
    },
    contact: {
        type:Number,
        required:true
    },
    econtact: {
        type:Number,
        required:true
    },
    mstatus: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    religion: {
        type:String,
        required:true
    },
    occupation: {
        type:String,
        required:true
    }
})

const Applicationform = new mongoose.model("Applicationform" ,applicationformSchema);

module.exports= Applicationform;
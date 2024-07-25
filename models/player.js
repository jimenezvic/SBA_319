const mongoose = require('mongoose')

const completeFormSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    birth:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
    },
    position:{
        type: String,
        required: true
    },
    consent:{
        type: Boolean,
        required: true
    },
    medicalWaiver:{
        type: Boolean,
        required: true
        }, 
    liabilityWaiver:{
        type: Boolean,
        required: true
    },
    health:{
        emergencyContact: String,
        relationship: String,
        phone: String
    },
})


const CompletePlayer = mongoose.model("CompletePlayer", completeFormSchema)


module.exports = CompletePlayer;
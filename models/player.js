const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    quickForm:{
        name:{
            type: String
        },
        positions:{
            type: String
        },
        age:{
            type: String
        },
        consent:{
            type: Boolean,
            required: true
        },
        mediacalWaiver:{
            type: Boolean,
            required: true
        },

        liabilityWaiver:{
            type: Boolean,
            required: true
        }
    },
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
        health:{
            emergencyContact: String,
            relationship: String,
            phone: String
        },
        consent: String,
        mediacalWaiver: String,
        liabilityWaiver: String

})
const Player = mongoose.model("Player", playerSchema)

module.exports = Player;
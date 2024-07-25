const mongoose = require('mongoose')

const quickFormSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        position:{
            type: String,
            required: true
        },
        age:{
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
        }

});

const QuickPlayer = mongoose.model("QuickPlayer", quickFormSchema)
module.exports = QuickPlayer;
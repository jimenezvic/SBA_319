const mongoose = require('mongoose')

const config =() =>{
    try{
        mongoose.connect(process.env.mongo_uri);
        mongoose.connection.once("open", () =>{
            console.log("Connected to the Data Base program")
        })
    } catch (err){
        console.log(`You\'re having the following errors: ${err}`)
    }
}

module.exports = config;
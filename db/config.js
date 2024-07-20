const mongoose = require('mongoose')

const config = () =>{
    try{
          mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.connection.once('open', () =>{
            console.log("Connected to the Data Base program")
        });
    } catch (err){
        console.log(`Youre having the following errors: ${err}`)
    }
};

module.exports = config;
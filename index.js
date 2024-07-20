require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const config = require('./db/config')
config()

const playersRoutes = require('./routes/players')
const Player =  require('./models/player')
const initializeForms = require('./db/form')


//Midlleware
app.use(express.json())
app.use('/players', playersRoutes)

app.get('/', (req,res)=>{
    res.send('HOME PAGE')
})

app.get('/form', async(req,res)=>{
    try{
        await Player.deleteMany({})
        await Player.create(initializeForms)
        res.json(initializeForms)
    }catch(err){
        res.status(500).json ({message: err.message})
    }
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

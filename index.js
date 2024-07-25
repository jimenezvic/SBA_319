require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT
const config = require('./db/config')
config();

const playersRoutes = require('./routes/players');
const Player =  require('./models/player');

const playerRegistrationComplete = require('./db/form');
const playerRegistrationQuick =  require('./db/form')

const router = require('./routes/players');


//Midlleware
app.use(express.json());
app.use('/players', playersRoutes)

app.get('/', (req,res)=>{
    res.send('HOME PAGE')
})

app.get('/form', async (req, res) => {
    try {
        console.log('Deleting existing documents...');
        await Player.deleteMany({});
        console.log('Inserting initial data...');
        const result = await Player.create(initialPlayerData);
        console.log('Data inserted:', result);
        res.json(result);
    } catch (err) {
        console.error(`Error loading form data: ${err.message}`);
        res.status(500).json({ message: err.message });
    }
});


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

const express = require('express')
const router = express.Router()
const QuickPlayer = require('../models/quickPlayer')
const CompletePlayer = require('../models/player')

//Index get all 
router.get('/', async (req,res)=>{
    const allPlayers = await CompletePlayer.find({})
    res.json(allPlayers)
})

//Getting a single player
router.get('/player/:name', async (req,res)=>{
    try{

        const onePlayer = await CompletePlayer.findOne({name: req.params.name});
        console.log(onePlayer)
        if(!onePlayer){
            return res.status(404).json({message: 'CompletePlayer not found'})

        }
        res.json(onePlayer)
    } catch(err){
        res.status(500).json({message: err.message})
    }
  
})
//Get the Quick form
router.get('/quick', async (req, res)=>{
    try{
        const theQuick = await QuickPlayer.find({})
        res.json(theQuick)
    }catch(err){
        res.status(500).json({message:err.message})
    }
})


//Get specific data
router.get('/:position' , async (req, res)=>{
    try{
        const position = req.params.position;
        const playersPosition = await CompletePlayer.aggregate([
            {$match:{position: position}},
            {$project:{_id: 0, name:1,gender:1}}
        ]);
        
        res.json(playersPosition)
    }catch(error){
        res.status(500).json({message: 'Position not found'})
    }
})



//Creating a new CompletePlayer
router.post('/', async (req,res)=>{
    try{
        const newPlayer = await CompletePlayer.create(req.body)
        res.json(newPlayer)
        // res.status(201).json(newPlayer)
    } catch(err){
        res.status(500).json({message:err.message});
    }
    
})

//Creating a new Form
router.post('/quickform', async (req,res)=>{
    try{
        const quickForm = await QuickPlayer.create(req.body)
        res.json(quickForm)
    }catch(err){
        res.status(500).json({message:err.message});

    }
})

//Update -PUT/PATCH
router.put('/:name', async (req,res)=>{
    try{
        const updatePlayer = await CompletePlayer.findOneAndUpdate({name:req.params.name},
            req.body,
            {new: true}
        );
        if(!updatePlayer){
            return res.status(404).json({message: 'CompletePlayer not found'})
        }
        res.json(updatePlayer)
    }catch(err){
        res.status(500).json({message:err.message})

    }
})

//Delete a player
router.delete('/:name', async(req,res)=>{
    try{
        const deletePlayer =  await findOne(req.params.name)
        res.json(deletePlayer)
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

})

module.exports = router
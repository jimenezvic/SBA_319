const express = require('express')
const router = express.Router()
const Player = require('../models/player')
//Index get all 
router.get('/', async (req,res)=>{
    const allPlayers = await Player.find({})
    res.json(allPlayers)
})

//Getting a single player
router.get('/:name', async (req,res)=>{
    try{
        const onePlayer = await Player.findOne({name: req.params.name});
        if(!onePlayer){
            return res.status(404).json({message: 'Player not found'})

        }
        res.json(onePlayer);
    } catch(err){
        res.status(500).json({message: err.message});
    }
  
})

//Creating a new Player
router.post('/', async (req,res)=>{
    try{
        const newPlayer = await Player.create(req.body)
        res.json(newPlayer)
    } catch(err){
        res.status(500).json({message:err.message});
    }
    
})

//Update -PUT/PATCH
router.put('/:name', async (req,res)=>{
    try{
        const updatePlayer = await Player.findOneAndUpdate({name:req.params.name},
            req.body,
            {new: true}
        );
        if(!updatePlayer){
            return res.status(404).json({message: 'Player not found'})
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
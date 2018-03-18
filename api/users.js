const express = require('express')
const usr = require('./models/User')
const router = express.Router()

router.get('',async (req,res) =>{
	var users = await usr.find({}, '-pwd -__v')
	res.status(200).send(users)
})
router.get('/profile/:id', async (req,res) =>{
	var user = await usr.findOne({_id: req.params.id})
	if(!user)
		return res.sendStatus(400).send({message:"User Id couldn't found"})
	res.status(200).send(user)
})
module.exports = router
const express = require('express')
const postModel = require('./models/Post')
const router = express.Router()

router.get('', async (req,res) =>{
	var posts = await postModel.find({}, '-__v')
	res.status(200).send(posts)
})

router.post('',(req,res)=>{
	var postData = req.body
	var pst = new postModel(postData)
	pst.save((err, result) => {
		if (err){
			console.error(err)
			res.statusCode(500)
		}
		res.sendStatus(200)
	})
})

router.get('/:id', async (req,res)=>{
	var post = await postModel.findOne({_id:req.params.id})
	if(!post)
		return res.sendStatus(400).send({message: 'Requested Post could not found!'})
	return status(200).send(post)
})

module.exports = router;
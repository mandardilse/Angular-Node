const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jwt = require('jwt-simple')
const usr = require("./models/User")

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/register',(req,res)=>{
	var usrData = req.body
	var u = new usr(usrData)
	u.save((err,result)=>{
		if(err)
			console.log(err)
		res.sendStatus(200)
	})
})

app.post('/login', async (req,res)=>{
	var usrData = req.body
	var u = await usr.findOne({email: usrData.email})
	if(!u)
		return res.sendStatus(401).send({message:'Email or Password invalid'})

	if(usrData.pwd != u.pwd)
		return res.sendStatus(401).send({message:'Email or Password invalid'})

	var payload = {}
	var token = jwt.encode(payload,'123')
	console.log(token)
	res.status(200).send({token})
})
mongoose.connect("mongodb://Test:Test@ds039427.mlab.com:39427/empdb", (err)=>{
	if(!err)
		console.log("Connected!....")
	else
		console.log(err)
})

app.listen(3000)
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const auth = require('./auth')
const users = require('./users')
const posts = require('./posts')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/auth',auth)

app.use('/users', users)

app.use('/posts',posts)

mongoose.connect("mongodb://Test:Test@ds039427.mlab.com:39427/empdb", (err)=>{
	if(!err)
		console.log("Connected!....")
	else
		console.log(err)
})

app.listen(3000)
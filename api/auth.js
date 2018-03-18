const express = require('express')
const usr = require('./models/User')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jwt-simple')
const router = express.Router()

/* Register User */
router.post('/register', (req, res) => {
	var usrData = req.body
	var u = new usr(usrData)
	u.save((err, result) => {
		if (err)
			console.log(err)
		res.sendStatus(200)
	})
})
/* Login User */
router.post('/login',async (req, res) => {
	var usrData = req.body
	var u = await usr.findOne({ email: usrData.email })
	if (!u)
		return res.sendStatus(401).send({ message: 'Email or Password invalid' })

	bcrypt.compare(usrData.pwd, u.pwd, (err, isMatch) => {
		if (!isMatch)
			return res.sendStatus(401).send({ message: 'Email or Password invalid' })

		var payload = {}
		var token = jwt.encode(payload, '123')
		console.log(token)
		res.status(200).send({ token })
	})
})

module.exports = router
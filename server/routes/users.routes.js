const express = require('express')
const { Login, Signup } = require('../controller/users.controller')
const router = express.Router()

router.post('/login',Login)
router.post('/signup',Signup)

module.exports = router;
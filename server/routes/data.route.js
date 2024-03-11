const express = require('express')
const { Create, getFiles } = require('../controller/data.controller')
const router = express.Router()

router.post('/doctor',Create)
router.post('/patient',Create)
router.get('/doctor',getFiles)
router.get('/patient',getFiles)

module.exports = router;
const express = require('express')
const { Create, getDoctors, getPatients } = require('../controller/data.controller')
const router = express.Router()

router.post('/doctor',Create)
router.post('/patient',Create)
router.get('/doctor',getDoctors)
router.get('/patient',getPatients)

module.exports = router;
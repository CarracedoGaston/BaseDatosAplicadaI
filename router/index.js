const express = require('express')
const cliente = require('./cliente')
const escribano = require('./escribano')
const escritura = require('./escritura')
const localidad = require('./localidad')

const router = express.Router()


router.use('/cliente', cliente)
router.use('/escribano', escribano)
router.use('/escritura', escritura)
router.use('/localidad', localidad)

module.exports = router
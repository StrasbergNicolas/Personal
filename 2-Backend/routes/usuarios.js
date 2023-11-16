const express = require('express')
const router = express.Router()
const productoController = require('../controllers/usuarioController')

router.post('/', productoController.crearUsuario)
router.get('/', productoController.obtenerUsuarios)

module.exports = router
const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')

router.post('/', productoController.crearProducto)
router.get('/', productoController.obtenerProductos)
router.delete('/:id', productoController.eliminarProducto)

module.exports = router
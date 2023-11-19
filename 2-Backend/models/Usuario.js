const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: false
    }
}) 

module.exports = mongoose.model('Usuario', usuarioSchema)
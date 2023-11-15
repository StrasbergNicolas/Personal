const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: 'variables.env'})

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO)
        console.log("Base de datos conectada exitosamente")
    } catch (error) {
        console.log(error)
    }
}

module.exports = conectarDB;
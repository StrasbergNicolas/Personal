const Usuario = require('../models/Usuario')

exports.crearUsuario = async (req, res) => {
    try{
        let usuario
        usuario = new Usuario(req.body)
        await usuario.save()
        res.send(usuario)
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error")
    }
}

exports.obtenerUsuarios = async (req,res) => {
    try{
        let usuario
        usuario = await Usuario.find()
        res.json(usuario)
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error...")
    }
}

/* esto funciona pero si o si es por parámetro que se lo debe pasar
exports.obtenerUsuario = async (req, res) => {
    try{
        let usuario = await Usuario.findOne({mail: req.params.mail}, '-password')
        if(!usuario){
            return res.status(500).send("Usuario no encontrado")
        }
        res.json(usuario)
    } catch(error){
        console.log(error)
        res.status(500).send("Hubo un error...")
    }
}
*/

exports.obtenerUsuario = async (req, res) => {
    try {
        const {mail, password} = req.body
        if (!mail || !password){
            return res.status(400).json("No se encuentran")
        }
        const usuario = await Usuario.findOne({mail,password})

        if(!usuario){
            return res.status(400).json({mensaje: "Credenciales inválidas"} )
        }

        res.json({mail: usuario.mail, rol: usuario.rol})
    } catch (error){
        console.log(error)
        res.status(500).json({mensaje: "Error en autenticacion"})
    }
}
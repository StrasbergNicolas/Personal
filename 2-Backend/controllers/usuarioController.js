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


exports.obtenerUsuario = async (req, res) => {
    try {
        const { mail } = req.body;
        const {password} = req.body

        if (!mail) {
            return res.status(400).json({ mensaje: "Falta Correo electrónico" });
        }

        if (!password) {
            return res.status(400).json({ mensaje: "Falta Contraseña" });
        }

        // Realizar la búsqueda del usuario por correo electrónico
        const usuario = await Usuario.findOne({ mail, password });

        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        // Devolver los datos del usuario (excepto la contraseña) en la respuesta
        const { contraseña, ...usuarioSinPassword } = usuario.toObject();

        res.json(usuarioSinPassword);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensaje: "Error en la búsqueda de usuario" });
    }
}
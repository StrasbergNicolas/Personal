const Producto = require('../models/Producto')

exports.crearProducto = async (req, res) => {
    try {
        let producto
        producto = new Producto(req.body)
        await producto.save()
        res.send(producto)
    } catch(error){
        console.log(error)  
        res.status(500).send("Hubo un error")
    }
}

exports.eliminarProducto = async(req, res) =>{
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.json("No existe el producto...")
        }
        await Producto.findOneAndRemove({_id: req.params.id}) //este metodo busca el producto de "Producto" y lo elimina
        res.json("Producto eliminado con éxito")
        console.log(producto)
    }catch (error){
        console.log(error);
    }
}

exports.obtenerProductos = async(req,res) => {
    try{
        let productos;
        productos = await Producto.find();
        res.json(productos)
    }catch(error){
        console.log(error)
        res.status(500).send("Hubo un error...")
    }
}


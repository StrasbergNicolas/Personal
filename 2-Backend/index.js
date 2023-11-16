
const express = require('express')
const app = express()

//evitar error de html
const cors = require('cors');

//conexión a base de datos
const PORT = 3000
const conectarBD = require('./config/db')
conectarBD();

app.use(cors());
app.use(express.json())

//lineas para conectarse a los productos
const RouterProducto = require('./routes/producto')
app.use('/api/productos', RouterProducto)

//lineas para conectarse a los usuarios
const RouterUsuario = require('./routes/usuarios')
app.use('/api/usuarios', RouterUsuario)

app.get('/', (req,res) => res.send("Buenas!"))

app.listen(PORT, () => {
    console.log(`Server en puerto: ${PORT} `)
})
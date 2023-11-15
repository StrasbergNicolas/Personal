
const express = require('express')
const app = express()

const cors = require('cors');

const PORT = 3000
const conectarBD = require('./config/db')
conectarBD();

app.use(cors());
app.use(express.json())

const Router = require('./routes/producto')
app.use('/api/productos', Router)

app.get('/', (req,res) => res.send("Buenas!"))

app.listen(PORT, () => {
    console.log(`Server en puerto: ${PORT} `)
})
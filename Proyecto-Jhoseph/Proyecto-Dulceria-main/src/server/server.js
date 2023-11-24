const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const colors = require('colors')
const mongoose = require('mongoose');

const app = express();
const puerto = process.env.EXPRESS_PORT || 8888;

app.use(cors());

const mongoURL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/MiDulceriaOnline';
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('Conectado a la db'.bgCyan.black))
    .catch(error => console.error('Error al conectar con la base de datos:', error.message));

app.use(express.json());

const Image = mongoose.model('Image', { data: Buffer });

const vendedoresRouter = require('./rutas/RutaVendedores');
app.use('/api/v1/devcamps/users', vendedoresRouter);

const productosRouter = require('./rutas/RutaProductos');
app.use('/api/v1/devcamps/productos', productosRouter);


app.listen(puerto, () => {
    console.log(`El servidor se ha iniciado en el puerto ${puerto}`.bgMagenta.white)
})


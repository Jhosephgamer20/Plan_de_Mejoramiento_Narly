const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema(
    {   
        nombre:{
            type:String,
        },
        tipoProducto:{
            type:String,
        },
        imagenProducto:{
            name:String,
            data:Buffer,
            contentType:String
        },
        descripcion:{
            type:String,
        },
        precio:{
            type:String,
        },
        cantidadContenido:{
            type:String,
        },
        tipoContenido:{
            type:String,
            enum:[
                "g",
                "Kg",
                "mL",
                "L"
            ]
        },
        region:{
            type:String,
        }
    }
)

const Producto = 
module.exports = mongoose.model('Producto',productoSchema)
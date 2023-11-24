const express = require("express")
const productosModel = require('../modelos/ModeloProductos')
const moongose = require('mongoose')
const router = express.Router()



router.post('/registerP', 
            async(request, response)=>{
                try {
                    const productos = await productosModel.create(request.body)

                    response.status(201).json({
                        "success": true,
                        msg:"producto creado con exito"
                    })
                } catch (error) {
                    response.status(500).json({
                        success: false,
                        msg: error.message
                    })
                    
                }
})



module.exports = router

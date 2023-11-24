const express = require('express')
const router = express.Router()
const ModeloVendedor = require('../modelos/ModeloVendedores.js')
const { v4: uuidv4 } = require('uuid'); // Utilizamos uuid para generar nombres únicos para las imágenes
const { createReadStream, existsSync, mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');

router.post('/registerE', async (req, res) => {
    const {
        nombreContacto,
        cargo,
        telefonoContacto,
        nombreEmpresa,
        NIT,
        logoEmpresa,
        correo,
        usuario,
        contrasena
    } = req.body;

    try {
        let logoEmpresaFileName = null;

        // Verificar si se proporcionó una imagen
        if (req.files && req.files.logoEmpresa) {
            const logoEmpresa = req.files.logoEmpresa;

            // Crear un directorio temporal para guardar la imagen (asegúrate de que este directorio exista)
            const tempDir = join(__dirname, './img/', 'temp');
            if (!existsSync(tempDir)) {
                ensureDirSync(tempDir);
                console.log(`Directorio temporal creado en: ${tempDir}`);
            } else {
                console.log(`El directorio temporal ya existe en: ${tempDir}`);
            }

            // Generar un nombre único para la imagen
            logoEmpresaFileName = uuidv4() + '.png';
            const logoEmpresaPath = join(tempDir, logoEmpresaFileName);

            // Guardar la imagen en el sistema de archivos
            logoEmpresa.mv(logoEmpresaPath, (err) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: 'Error al guardar la imagen',
                    });
                }
            });
        }

        const nombreImagen = logoEmpresa ? logoEmpresa.name : null;

        // Crear el usuario en la base de datos
        const user = await ModeloVendedor.create({
            nombreContacto,
            cargo,
            telefonoContacto,
            nombreEmpresa,
            NIT,
            logoEmpresa: nombreImagen,// Guardar el nombre de la imagen en la base de datos
            correo,
            usuario,
            contrasena,  
        });

        res.status(201).json({
            success: true,
            msg: 'Usuario creado exitosamente',
            token: user.ObtenerTokenJWT(),
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
});




router.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;

    if (!usuario || !contrasena) {
        res.status(400).json({
            sucess: false,
            message: "Ingrese el nombre de usuario o la contraseña"
        })
    }
    else {
        try {
            const user = await ModeloVendedor.findOne({ usuario }).select("+contrasena")

            if (!user) {
                res.status(400).json({
                    sucess: false,
                    msg: "No se encuentra el usuario en el sistema"
                })
            }
            else {
                const isMatch = await user.comparacionContrasena(contrasena)
                if (!isMatch) {
                    res.status(400).json({
                        success: false,
                        msg: "contraseña incorrecta"
                    })
                }
                else {
                    res.status(200).json({
                        success: true,
                        msg: "La contraseña es correcta",
                        token: user.ObtenerTokenJWT()
                    })
                }
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    }
})

module.exports = router
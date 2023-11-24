import React, { useState} from "react";
import { Link } from "react-router-dom";
import { mostrarImagenSeleccionada } from '../../js/imagenRegistroE';
import axios from 'axios';

const RegistroE = () => {
    const [user, setUsuario] = useState({
        nombreContacto: '',
        telefonoContacto: '',
        nombreEmpresa: '',
        logoEmpresa: '',
        correo: '',
        usuario: '',
        contrasena: ''
    })

    const { nombreContacto,  telefonoContacto, nombreEmpresa,  logoEmpresa, correo, usuario, contrasena } = user;
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    

    const handleRegister = async () => {
        try {

            const response = await axios.post('http://localhost:8888/api/v1/devcamps/users/registerE', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setSuccessMessage('Usuario creado con éxito');
            setError('');
        } catch (error) {
            if (error.response) {
                console.log('Respuesta del servidor:', error.response);
                if (error.response.data && error.response.data.message) {
                    setError('Error: ' + error.response.data.message);
                } else {
                    setError('Error en el registro: ' + error.message);
                }
            } else {
                setError('Error en el registro: ' + error.message);
            }
        }
    };
    const onChange = (e) => {
        setUsuario({
            ...user,
            [e.target.name]: e.target.value
        });

        mostrarImagenSeleccionada();
    }



    const onSubmit = (e) => {
        e.preventDefault();
        handleRegister()
    };


    return (
        <div>
                    <div>
        <meta charSet="utf-8" />
        <title>MI DULCE ONLINE</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        {/* Libraries Stylesheet */}
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Customized Bootstrap Stylesheet */}
        <link rel="stylesheet" type="text/css" href="css/home_cliente.css" />
        {/* Topbar Start */}
        <div className="container-fluid bg-dark">
          <div className="row py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center text-white">
                <small>MI DULCE ONLINE</small>
                <small className="px-3">|</small>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              {/*<div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-white pl-2" href="">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>*/}
            </div>
          </div>
        </div>
        {/* Topbar End */}{/* Navbar Start */}
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a className="navbar-brand ml-lg-3">
              <h1 className="m-0 display-5 text-uppercase text-primary"><img width={80} height={80} src='./img/dulce.png'  />MiDulceOnline</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            </div>
          </nav></div>
        {/* Navbar End */}

            {successMessage && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <strong></strong>{successMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                </div>
            )}
            {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong></strong>{error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                </div>
            )}

            <div className='fondoRegistro'>
                <div className='register_C'>
                    <div className='tituloRE'>
                    </div>
                    <form method='post' onSubmit={onSubmit}>
                        <div className='"form-group col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={nombreContacto} name='nombreContacto' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange} />
                                        <label htmlFor="floatingInput">Nombre de contacto</label>
                                    </div>
                                </div>
                                <div className='col-sm-6'>

                                </div>
                            </div>
                        </div>


                        <div className='"form-group col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className="form-floating mb-3">
                                        <input type="number" value={telefonoContacto} name='telefonoContacto' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange} />
                                        <label htmlFor="floatingInput">Telefono de contacto</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={nombreEmpresa} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange} />
                                        <label htmlFor="floatingInput">Nombre de la Empresa</label>
                                    </div>

                                </div>
                                <div className='col-sm-6'>
                                    <div id="contenedorImg" className='contenedorImg'>
                                        <div className='textoImg'>
                                            <p>Logo Empresa</p>
                                            <p className='blue'><u>Opcional</u></p>
                                        </div>
                                        <img id="imagenSeleccionada" className='imgR' src="#" width={150} />
                                    </div>
                                    <div className="input-group mt-3">
                                        <input type="file" value={logoEmpresa} name='logoEmpresa' className='form-control' id="archivoInput" onChange={onChange}/>
                                    </div> 
                                </div>
                            </div>
                        </div>


                        <div className='"form-group col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className="form-floating mb-3">
                                        <input type="email" value={correo} name='correo' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange} />
                                        <label htmlFor="floatingInput">Correo</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='"form-group col-sm-12 lineaR'>
                            <div className='row'>
                                <div className='col-sm-4'>
                                    <div className="form-floating mb-3">
                                        <input type="text" value={usuario} name='usuario' className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={onChange} />
                                        <label htmlFor="floatingInput">Usuario Nuevo</label>
                                    </div>
                                </div>
                                <div className='col-sm-4'>
                                    <div className="form-floating">
                                        <input type="password" value={contrasena} name='contrasena' className="form-control" id="floatingPassword" placeholder="Password" required onChange={onChange} />
                                        <label htmlFor="floatingPassword">Contraseña</label>
                                    </div>
                                </div>
                                <div className='col-sm-4 B'>
                                    <input type="submit" className='boton_R' value="Registrarse"></input>
                                    <Link className='text_decoration' to={'/login'}>| Atras</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
         {/* About Start */}
         <div style={{backgroundColor: '#1F1F2E'}} className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-5">
                <img className="img-fluid rounded" src="./img/2.jpg" width="500px" height="500px" />
              </div>
              <div className="col-lg-7 mt-1 mt-lg-8">
                <h6 style={{color: 'white'}} className="mb-2 text-uppercase">APRENDA SOBRE NOSOTROS</h6>
                <h1 style={{color: 'white'}} className="mb-4">Brindamos servicios legales confiables y efectivos</h1>
                <p style={{color: 'white'}}>Te brindamos todos y los exclusivos dulces colombianos. Tienen el mejor sabor, no te quedes con las ganas de pobrar uno te quedaras con ams ganas.</p>
                <a style={{backgroundColor: 'blue'}} href='../HomeclienteC' className="btn btn-primary mt-7">Ver Mas.</a>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
    </div>
    );
}

export default RegistroE;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [usuario, setName] = useState('');
    const [contrasena, setPass] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const parseToken = (token) => {
        const decodedToken = token.split('.')[1];
        const decodedData = JSON.parse(atob(decodedToken));
        return decodedData;
    };

    const datosLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8888/api/v1/devcamps/users/login', {
                usuario,
                contrasena: contrasena,
            });
            console.log('Después de la solicitud')

            if (response.data && response.data.token) {
                const tokenPayload = parseToken(response.data.token);
                if (tokenPayload) {
                    const { nombreEmpresa, token } = tokenPayload;
                    localStorage.setItem('token', token);
                    localStorage.setItem('nombreEmpresa', nombreEmpresa)
                    navigate('/InterVende');
                }
            }
            setError('');
        }
        catch (error) {
            console.error('Error en el inicio de sesión:', error);

            if (error.response && error.response.data && error.response.data.msg) {
                setError('Error: ' + error.response.data.msg);
            } else {
                setError('Error en el inicio de sesión: ' + error.message);
            }
        }
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
        <div className="fondoPagina">
            <div className="fondo">
                <div className="margin">

                    {error && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong></strong>{error}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                        </div>
                    )}

                    <div className="login">
                        <div className="titulo">
                            <h3 style={{textAlign: 'center'}}>Iniciar Sesion</h3>
                        </div>

                        <form method="post" onSubmit={datosLogin}>
                            <div class="field" className="loginBody">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        required
                                        name="usuario"
                                        value={usuario}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Nombre Usuario</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        required
                                        name="contrasena"
                                        value={contrasena}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>
                                <br />
                                <br />
                                <input type="submit" className="btn btn-primary" value={'Ingresar'}></input>
                                <Link className="text_b" to={"/"}>
                                    Atras
                                </Link>
                                <br />
                            </div>

                            <div className="buttonR">
                                <i className="bi bi-person-add"></i>
                                <Link className="text_A" to="/registerE">Registrarse</Link>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Login;

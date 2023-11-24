import React from 'react';
import { Link } from 'react-router-dom';

const Ventas = () => {
    return (
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
            <div className="navbar-nav">
              <a href="../InterVende" className="btn btn-primary py-2 d-none d-lg-block">Mis Productos</a>
            </div>
            <div className="navbar-nav">
              <a href="../ventas" className="btn btn-primary py-2 d-none d-lg-block">Ventas.</a>
            </div>
            <div className="navbar-nav">
              <a href="../registrarP" className="btn btn-primary py-2 d-none d-lg-block">Registrar Producto.</a>
            </div>
          </nav></div>
        {/* Navbar End */}
                {/* Header Start */}
                <div style={{backgroundColor: '#1F1F2E'}} className="jumbotron jumbotron-fluid mb-5">
          <div className="container text-center py-5">
            <h1 className="text-white display-3 mb-5">Los Mejores Dulces de Colombia.</h1>
            <div className="mx-auto" style={{width: '100%', maxWidth: 600}}>
            </div>
          </div>
        </div>
        {/* Header End */}

        <div className='interfazVendedor'>
            <meta charSet="UTF-8"/>
            <nav>
            </nav>
            <input type='checkbox' id='btn-menu'></input>
            <div className='container-menu'>
                <div className='cont-menu'>
                    <label for='btn-menu'>×</label>
                </div>
            </div>
        <div className='interfazVendedor'>
            <div className='buscarV'>
                {/*<div className='catalogo'>
                    <h3><b>Mis Ventas</b></h3>
                </div>
                <div>
                    <select className='buscarSelect' name='buscar'>
                        <option value='categoria'>Fecha</option>
                        <option value='region'>Hora</option>
                        <option value='precios'>Producto</option>
                    </select>
                    <input type='text' className='buscarInput' name='search' placeholder='Buscar' required></input>
                    <button className='buscarBotonV'>Buscar</button>
                </div>*/}
            </div>


            <div className='containerV'>
                <table class="table table-striped tablaV">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Tipo de Documento</th>
                            <th scope="col">Numero de Documento</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Unidades</th>
                            <th scope="col">Metodo de Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
       </div> 
    );
}

export default Ventas;
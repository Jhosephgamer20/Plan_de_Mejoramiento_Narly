import React from 'react';
import { Link } from 'react-router-dom';

const Compra = () => {
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
            <div className="navbar-nav">
              <a href="../InterVende" className="btn btn-primary py-2 d-none d-lg-block">Mis Productos</a>
            </div>
            <div className="navbar-nav">
              <a href="../ventas" className="btn btn-primary py-2 d-none d-lg-block">Ventas.</a>
            </div>
            <div className="navbar-nav">
              <a href="../registrarP" className="btn btn-primary py-2 d-none d-lg-block">Registrar Producto.</a>
            </div>
            <div className="navbar-nav">
              <a href="../compra" className="btn btn-primary py-2 d-none d-lg-block">Comprar.</a>
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

            <div className='BodyCompra'>
                <div className='descripcionP'>
                </div>
                <div className='box_compra'>
                    <div className='imgCompra'>
                        <img src='/img/achiras.jpg' width={390}></img>
                    </div>
                    <div className='contenidoC'>
                        <div className='logoC'>
                            <img src='/img/Ramo.png' className='imgV' width={89}></img>
                        </div>
                        <div className='nombreVende'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tags etiqueta" viewBox="0 0 16 16">
                                <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                                <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
                            </svg>
                            <p><b>Vendedor:</b> Ramo</p>
                            <p>Paquete de achiras - El Gran tolima </p>
                        </div>
                        <p className='descriP'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex similique quod, libero, ea iste excepturi earum omnis, vel autem officiis sapiente.
                        </p>
                        <div className='precioC'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-dollar dolar" viewBox="0 0 16 16">
                                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                            </svg>
                            <p><b>2.000 COP</b></p>
                        </div>
                        <div className='botonesCompra'>
                            <div class="d-grid gap-2 col-6 ">
                                <input type='submit' className='btn btn-success letraCompra' value={'Comprar'} data-bs-toggle="modal" data-bs-target="#exampleModal"></input>
                            </div>
                            <Link className='atrasCompra' to={"/"}>| Atras</Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel"><p className='textoC'><b>Comprar Producto</b></p></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className='registrarCompra'>
                                <p className='textoC'><b>Te pediremos algunos datos antes de validar tu compra</b></p>
                                <div className='form-group col-sm-12'>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="text" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Nombre</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="text" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Apellido</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"><i class="bi bi-person-vcard"></i></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Tipo de documento</option>
                                                    <option value="cc">Cedula de ciudadania</option>
                                                    <option value="ce">Cedula de extrangeria</option>
                                                    <option value="pa">Pasaporte</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Numero de documento</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="email" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Correo</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Telefono</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <p className='textoC'><b>Detalles del pedido</b></p>
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className="form-floating mb-3">
                                                <input type="number" value={''} name='nombreEmpresa' className="form-control" id="floatingInput" placeholder="name@example.com" required />
                                                <label htmlFor="floatingInput">Numero de Unidades</label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupSelect01"><i class="bi bi-currency-dollar"></i></label>
                                                <select class="form-select" id="inputGroupSelect01">
                                                    <option selected>Metodo de pago</option>
                                                    <option value="cc">Efectivo</option>
                                                    <option value="ce">Targeta</option>
                                                    <option value="pa">Billetera digital</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Comprar</button>
                        </div>
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
    </div>
    );
}

export default Compra;
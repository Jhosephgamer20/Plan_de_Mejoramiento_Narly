import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
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
              <a href="../login" className="btn btn-primary py-2 d-none d-lg-block">Iniciar Sesión.</a>
            </div>
            <div className="navbar-nav">
              <a href="../login" className="btn btn-primary py-2 d-none d-lg-block">Catalogo.</a>
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


         { /*   <div className='buscar'>
                <div className='catalogo'>
                    <h3><b>Catalogo</b></h3>
                </div>
                <div className='BotonesC'>
                    <select className='buscarSelect' name='buscar'>
                        <option value='categoria'>Categoria</option>
                        <option value='region'>Region</option>
                        <option value='precios'>Precios</option>
                    </select>
                    <input type='text' className='buscarInput' name='search' placeholder='Buscar' required></input>
                    <button className='buscarBoton'>Buscar</button>
                </div>
            </div>

            */ }
{/* Primer Producto */}
            <div className='contenedorCards'>
                <div className="containerCards">
                    <div className="producto">
                        <div className='img'>
                            <img src='/img/chocorramo.jpg' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Chocorramo</p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 3.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p style={{textAlign: 'center'}}>Ramo</p>
                                    </div>
                                </div>
                            </div>     
                        </div>
                    </div>
                    {/* Segundo Producto */}

                    <div className="producto">
                        <div className='img'>
                            <img src='/img/gansito.png' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Gansito</p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 2.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p style={{textAlign: 'center'}}>Ramo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Tercer Producto */}
                    <div className="producto">
                        <div className='img'>
                            <img src="/img/trulu.jpg" width={230} height={270} />
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Trululu Gusanos</p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 1.500</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p style={{textAlign: 'center'}}>TruLuLu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Cuarto Producto */}
                    <div className="producto">
                        <div className='img'>
                            <img src="/img/gomitas.jpg" width={230} height={270} />
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>TruLuLu Gomitas</p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 1.500</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p>Mis dulces Artesanales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quinto Producto */}

                    <div className="producto">
                        <div className='img'>
                            <img src='/img/achiras.jpg' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Paquete de achiras </p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 2.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p style={{textAlign: 'center'}}>El Gran Tolima</p>
                                    </div>
                                </div>
                            </div>     
                        </div>
                    </div>


                        {/* Sexto Producto */}

                        <div className="producto">
                        <div className='img'>
                            <img src='/img/mentas.jpg' width={230} height={270}></img>
                        </div>
                        <div className='cardBody'>
                            <p className='tituloCard'>Paquete de achiras el gran tolima 50gr</p>
                            <p style={{textAlign: 'center'}} className='precio'><b>$ 1.000</b></p>
                            <div className='form-group col-sm-12'>
                                <div className='row'>
                                    <div className='col-sm-7'>
                                        <p style={{textAlign: 'center'}}>Mentas</p>
                                    </div>
                                </div>
                            </div>     
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
        
    );
}

export default Catalogo;
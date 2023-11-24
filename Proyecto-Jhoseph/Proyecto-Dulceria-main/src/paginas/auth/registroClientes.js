
import { Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';  
import axios from 'axios';

const Register = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        numeroDoc: '',
        password: '',
        tipoDoc: ''
      });
    
      const { name, email, numeroDoc, password, tipoDoc } = usuario;
      const [error, setError] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleRegister = async () => {
        try {
          // Establecer la disponibilidad en función del rol seleccionado
    
          const response = await axios.post(
            'http://localhost:8888/api/v1/devcamps/users/register',
            {
              ...usuario,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
    
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
          ...usuario,
          [e.target.name]: e.target.value,
        });
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        handleRegister();
      };
  return (
    <div>
    <title></title>
      {successMessage && (
          <div className='mensajeExito'>
              {successMessage}
          </div>
          )}
          {error && (
              <div className='mensajeE'>
              {error}
              </div>
          )}
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="css/register.css" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
    <form autoComplete='off' onSubmit={onSubmit}>
      <div className="container">
        <div className="contact-box">
          <div className="left" />
          <div className="right">
            <h2>Registro de Usuario.</h2>
            <input class='field' type='text' name='name' id='name' placeholder='Nombre.' onChange={onChange} value={name} required />
            <input class='field' type='text' name='email' id='email' placeholder='Correo Electronico.' onChange={onChange} value={email} required />
            <input class='field' type='text' name='numeroDoc' id='doc' placeholder='Numero de Documento.' onChange={onChange} value={numeroDoc} required />
            <input class='field' type='password' name='password' id='pass' placeholder='Contraseña' onChange={onChange} value={password} required />
            <select class='field' name="tipoDoc" value={tipoDoc} onChange={onChange}>
                      <option value="" selected hidden>Tipo De Documento</option>
                      <option value="ti">Tarjeta de identidad</option>
                      <option value="cc">cedula de ciudadania</option>
                      <option value="pp">pasaporte</option>
                  </select>
                  <input class='field' type='submit' value='Registrarse' />
                  <Link to={"/"}>Iniciar Sesion</Link>
          </div>
        </div>
      </div>
    </form>      
  </div>
  );
}

export default Register;
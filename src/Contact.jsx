import React, { useState } from 'react';
import './Contact.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function Contact() {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [numero, setNumero] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [avisos, setAvisos] = useState('');
  const [colorAviso, setColorAviso] = useState('');

  // Expresiones regulares para la validación
  const regexNombre = /^[a-zA-Z\s?]{3,20}$/;
  const regexEmail = /^(.+@[a-zA-Z]{3,}\.[a-zA-Z]+)$/;
  const regexNumero = /^([0-9]{9})$/;
  const regexMensaje = /^.{10,500}$/; // Mensaje entre 10 y 500 caracteres

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto

    let errores = false;
    let mensajeAviso = '';
    let color = '';

    // Validación de los campos
    if (numero === '') {
      mensajeAviso = 'Please complete your phone number';
      color = 'red';
      errores = true;
    } else if (!regexNumero.test(numero)) {
      mensajeAviso = 'Invalid phone';
      color = 'red';
      errores = true;
    }

    if (correo === '') {
      mensajeAviso = 'Please complete the email';
      color = 'red';
      errores = true;
    } else if (!regexEmail.test(correo)) {
      mensajeAviso = 'Invalid email';
      color = 'red';
      errores = true;
    }

    if (nombre === '') {
      mensajeAviso = 'Please complete your name';
      color = 'red';
      errores = true;
    } else if (!regexNombre.test(nombre)) {
      mensajeAviso = 'Invalid name';
      color = 'red';
      errores = true;
    }

    if (mensaje === '') {
      mensajeAviso = 'Please write a message';
      color = 'red';
      errores = true;
    } else if (!regexMensaje.test(mensaje)) {
      mensajeAviso = 'Message must be between 10 and 500 characters';
      color = 'red';
      errores = true;
    }

    // Si no hubo errores, mostrar mensaje de éxito
    if (!errores) {
      mensajeAviso = 'Form submitted successfully!';
      color = 'green';
    }

    // Actualizar los avisos con el mensaje y color adecuado
    setAvisos(mensajeAviso);
    setColorAviso(color);
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
        <span id="blueText">Contact</span> Me
      </h1>

      <fieldset>
        <form action= "mailto:germanmelguizo@gmail.com?subject=asunto" enctype ="text/plain" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="firstLabel">
            <span id="blueText">Name</span> <br />
            <input type="text" name="nombre" id="nombre" placeholder="Enter your first name" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </label>
          <br />

          <label htmlFor="correo">
            <span id="blueText">Email</span><br />
            <input type="text" name="correo" id="correo" placeholder="Enter your email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </label>
          <br />

          <label htmlFor="numero">
            <span id="blueText">Phone Number</span><br />
            <input type="text" name="numero" id="numero" placeholder="+34 " value={numero} onChange={(e) => setNumero(e.target.value)} />
          </label>
          <br />

          <label htmlFor="mensaje">
            <span id="blueText">Message</span><br />
            <textarea name="mensaje" id="mensaje" placeholder="Write your message here..." value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows="5" cols="30" />
          </label>
          <br />

          <input type="submit" name="enviar" id="enviar" />
          <p id="avisos" style={{ color: colorAviso }}>{avisos}</p>
        </form>
      </fieldset>

      <FooterComponent></FooterComponent>
      
    </div>
  );
}

export default Contact;

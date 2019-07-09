import React, {Component} from 'react';
import './Login.css';
import Icono from './ComponentesLogin/Icono';
import Formulario from './ComponentesLogin/Formulario';

function Login() {
  return (
        <div className="wrapper">
            <Icono />
            <Formulario />
        </div>

  );
}

export default Login;

import React, {Component} from 'react';
import './Login.css';
import Icono from './ComponentesLogin/Icono';
import Formulario from './ComponentesLogin/Formulario';

function Login() {
  return (
      <React.Fragment>
        <div className="wrapper">
            <Icono />
            <Formulario />
        </div>
       </React.Fragment>
  );
}

export default Login;

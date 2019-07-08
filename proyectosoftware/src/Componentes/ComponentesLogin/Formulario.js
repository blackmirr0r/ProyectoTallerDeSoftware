import React, {Component} from 'react';
import '../Login.css';
import NombreUsuario from './NombreUsuario';
import Contraseña from './Contraseña';
import BotonLogin from './BotonLogin';

function Formulario() {
  return (
    <div className="form-wrapper">
        <form>
            <NombreUsuario />
            <Contraseña />
            <BotonLogin />

        </form>
    </div>
  );
}

export default Formulario;

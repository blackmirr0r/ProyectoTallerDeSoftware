import React from 'react';

function Navbar() {
  return (
    <div className="container-fluid morado">
        <nav className="navbar navbar-expand-lg text-white navbar-dark morado container ">
            <div className="collapse navbar-collapse">
                <a className="navbar-brand mr-4" href="/">NombreApp</a>
                <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <div className="nav-item active ml-4">
                        <a className="nav-link" href="/">Malla Curricular<span className="sr-only">(current)</span></a>
                    </div>
                    <div className="nav-item ml-2">
                        <a className="nav-link" href="/armatuhorario">Arma tú horario</a>
                    </div>
                    <div className="d-flex justify-content-end nav-item ml-4">
                        <button href="/usuario" className="text-decoration-none btn fas fa-user-circle fa-code fa-2x"></button>
                    </div>
                </div>

            </div>
        </nav>
    </div>
  );
}

export default Navbar;

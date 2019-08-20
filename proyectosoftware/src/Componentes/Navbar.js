import React from 'react';
import SearchStudents from './ComponentesNavbar/SearchStudents';


function Navbar() {
    return (
      <div className="container-fluid bg-dark mb-4">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
          <div className="mr-5">
            <a className="navbar-brand" href="#">MierdApp</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"   aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex justify-content-end mr-5">
              <li className="nav-item active mr-3">
                <a className="nav-link" href="#">Malla <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="#">Horario</a>
              </li>


            </ul>
          </div>
          <div className="ml-5"> <SearchStudents /> </div>
        </nav>
      </div>
    );
  }

export default Navbar;

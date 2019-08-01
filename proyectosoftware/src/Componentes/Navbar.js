import React from 'react';
import SearchStudents from './ComponentesNavbar/SearchStudents'; 
import { OverlayTrigger, Button } from 'react-bootstrap';

function Navbar() {
    return (
      <div className="container-fluid bg-dark">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
          <div className="mr-5">
            <a class="navbar-brand" href="#">MierdApp</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"   aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav d-flex justify-content-end mr-5">
              <li class="nav-item active mr-3">
                <a class="nav-link" href="#">Malla <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#">Horario</a>
              </li>
              <li class="nav-item mr-3">
                <a class="nav-link" href="#">Información</a>
              </li>

            </ul>
          </div>
          <div>
              <SearchStudents />
          </div>
        </nav>
      </div>
    );
  }

export default Navbar;

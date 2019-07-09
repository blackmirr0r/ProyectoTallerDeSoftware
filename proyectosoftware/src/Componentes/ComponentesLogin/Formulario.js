import React, {Component} from 'react';
import '../Login.css';
import dataEstudiantes from '../Data/dataEstudiante';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';



function isFound(name, pass){
  for(let i = 0; i < dataEstudiantes.length; ++i){

      if (name === dataEstudiantes[i].estudiante && pass === dataEstudiantes[i].pass) {
          return true;
      }
  }
  return false;
}

class Formulario extends Component {

    constructor(props){
      super(props);

      this.state = {
          name_user: '',
          pass: ''
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    };
    static contextTypes = {
      router: PropTypes.object,
    }
    handleSubmit = e => {
        e.preventDefault();
        const name_user = this.state.name_user;
        const pass = this.state.pass;
        const found = isFound(name_user, pass);
        if (!found) {
            console.log("Estudiante no registrado");
        }
        else{
            console.log("Bienvenido ", name_user);
            //Need redirect to malla page with the info
            //react is boring

        }
    }

    handleChange = e => {
          e.preventDefault();
          const valor = e.target.value;
          const nombre = e.target.name;
          this.setState({
              [nombre]: valor
          }, () => console.log(this.state));
    }

    render(){
      return (

          <React.Fragment>

              <div className="form-wrapper">
                  <form onSubmit={this.handleSubmit}>
                        <div class="form-group ml-3">
                          <label className="d-flex justify-content-start">Nombre usuario</label>
                          <input
                              type="text"
                              onChange={this.handleChange}
                              class="form-control"
                              name="name_user"
                              placeholder="Nombre usuario">
                          </input>
                        </div>
                        <div class="form-group ml-3">
                            <label className="d-flex justify-content-start">Contraseña</label>
                            <input
                                  type="password"
                                  class="form-control"
                                  name="pass"
                                  onChange={this.handleChange}
                                  placeholder="Contraseña">
                            </input>
                        </div>
                        <div class="form-group col d-flex mt-2">
                              <button type="submit" class="btn text-white btn-block">Ingresar</button>
                        </div>
                  </form>
              </div>

          </React.Fragment>
      );
    }
  }

export default Formulario;

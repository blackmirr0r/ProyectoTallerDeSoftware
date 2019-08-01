import React, {Component} from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import Help from './Help';
import Data from '../Data/dataEstudiante';

function isFound(code)
{
    let size_code = Data[0].codigo_estudiante.length;

    if(code.length !== size_code){ return false; }

    for(let i = 0; i < Data.length; ++i){
        if(code === Data[i].codigo_estudiante){
            return true;
        }
    }
    return false;
}

class SearchStudents extends Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            code: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const code = this.state.code;
        isFound(code) ? console.log("Bienvenido ", code) : console.log("Estudiante no registrado");
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
        <div>
            <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input
                       class="form-control mr-sm-2"
                       type="text"
                       placeholder="Ingresar codigo"
                       onChange={this.handleChange}
                       name="code">

                </input>

                <button
                      class="ml-3 btn btn-danger my-2 my-sm-0"
                      type="submit">
                      Buscar
                </button>

                <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={Help}>
                    <button class="ml-3 btn btn-danger my-2 my-sm-0">?</button>
                </OverlayTrigger>
            </form>
        </div>
      );
    }

 }

export default SearchStudents;

import React, {Component} from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import Data from '../Data/dataEstudiante';
import swal from 'sweetalert';



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
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            code: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const code = this.state.code;
        isFound(code) ? swal("Bienvenido", "Ahora accede a tus datos personales", "success")
                        : swal("Estudiante no registrado", "", "error");
    }

    handleChange = e => {
          e.preventDefault();
          const valor = e.target.value;
          const nombre = e.target.name;
          this.setState({
              [nombre]: valor
          }, () => console.log(this.state));
    }

    handleClick = () => {
        swal("Consejo!", "Puedes ingresar tu codigo estudiantil para acceder a datos personalizados");

    }

    render(){
      return (
        <div class="d-flex">
            <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input
                       class="form-control mr-sm-2"
                       type="text"
                       placeholder="Ingresar codigo"
                       onChange={this.handleChange}
                       name="code">

                </input>

                <button
                      class="ml-3 btn orange text-white my-2 my-sm-0"
                      type="submit">
                      Buscar
                </button>
            </form>
            <button class="ml-3 btn orange text-white my-2 my-sm-0" onClick={this.handleClick}>?</button>
        </div>

      );
    }

 }

export default SearchStudents;

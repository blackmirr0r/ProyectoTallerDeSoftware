import React from 'react';
import Data17 from '../Data/dataMalla17';
import Data08 from '../Data/dataMalla08';
import Semestre from './Semestre';
import Navbar from '../Navbar';
import SeleccionarMalla from './SeleccionarMalla';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../Login.css';

class Malla extends React.Component {

    constructor(){
        super();

        this.state = {
            value: '2017'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
        console.log(this.state.value)
    }



    render(){
        let nro_semestres = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
        let data_actual;
        const malla_actual = this.state.value;

        if(malla_actual === '2017')
        {
            data_actual = Data17;
        }
        else
        {
            data_actual = Data08;
        }
        return(

              <React.Fragment>
                    <Navbar />
                    <div className="d-flex justify-content-center mt-4 mb-3">
                          <select value={this.state.value} onChange={this.handleChange}>
                              <option value="2008"> Malla Ingeniería civil Informática 2008</option>
                              <option value="2017"> Malla Ingeniería civil Informática 2017</option>
                          </select>
                    </div>
                    <div className="row d-flex justify-content-center mt-1">

                                {data_actual.map((semestre, index) =>
                                    <Semestre
                                        key={index}
                                        posSem={nro_semestres[index]}
                                        numSem={semestre.num_sem}
                                        ramos={semestre.ramos}
                                    />
                                )}
                    </div>

              </React.Fragment>

        );
      }
}

export default Malla;

import React from 'react';
import Data17 from '../Data/dataMalla17';
import Data08 from '../Data/dataMalla08';
import DataObras from '../Data/dataMallaObras';
import Semestre from './Semestre';
import Navbar from '../Navbar';
import '../Login.css';
import SearchStudents from '../ComponentesNavbar/SearchStudents';

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

        if(malla_actual === '2017'){
            data_actual = Data17;
        }

        else if(malla_actual === '2008'){
            data_actual = Data08;
        }

        else
        {
            data_actual = DataObras
        }
        return(

              <React.Fragment>
                    <Navbar />
                    <div className="d-flex justify-content-center mt-4 mb-5 mt-4">
                          <div className="mr-5">
                            <select value={this.state.value} className="btn btn-light" onChange={this.handleChange}>
                                <option value="2008"> Malla Ingeniería civil Informática 2008</option>
                                <option value="2017"> Malla Ingeniería civil Informática 2017</option>
                                <option value="Obras"> Malla Ingeniería civil en Obras Civiles</option>

                            </select>
                          </div>

                          

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

import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Asignatura from './Asignatura';

function Semestre(props) {
    return (
      <div>
        <div className="list-group border my-4 mx-4">
            <li href="#" class="list-group-item list-group-item-action active mb-3"><b>{props.posSem} Semestre </b></li>
            {props.ramos.map((ramo, index) =>
                  <Asignatura
                      ramo={ramo}
                  />
            )}


        </div>

      </div>
    );
}

export default Semestre;

import React from 'react';
import BotonAsignatura from './BotonAsignatura';


function Asignatura(props) {
  return (
      <div className="Asignatura">
            <BotonAsignatura ramo={props.ramo} />
      </div>
  );
}

export default Asignatura;

import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function Requisitos(props)  {

        let largo_requisitos = props.requisitos.length;
        return (
            <div className="Requisitos">
                <DropdownButton variant="light" size="sm">
                    {
                      largo_requisitos ?
                      (props.requisitos.map( ramo  => <Dropdown.Item key={ramo}> {ramo}</Dropdown.Item>)) : <Dropdown.Item>Ninguno</Dropdown.Item>
                    }
                </DropdownButton>
            </div>
        );


}

export default Requisitos;

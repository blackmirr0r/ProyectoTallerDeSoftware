import React, {Component} from 'react';
import Navbar from './Componentes/Navbar';
import Malla from './Componentes/ComponentesMalla/Malla';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Malla />
    </div>
  );
}

export default App;

/*<Navbar />
<Router>
          <Route path='/' exact component={ Semestres } />
          <Route path='/armatuhorario' component={ ArmarHorario } />
          <Route path='/usuario' component={ SeccionUsuario } />

</Router>
*/

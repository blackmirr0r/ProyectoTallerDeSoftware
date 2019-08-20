import React from 'react';
import Malla from './Componentes/ComponentesMalla/Malla';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Route path='/' exact component={ Malla } />
          </Router>

      </div>

  );
}

export default App;

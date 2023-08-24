import React from 'react';
import Home from './Components/Home/Home';
import CharacterDetails from './Components/Characters-Cards/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      {/* Aqui rendericé el componente Home que es nuestra pagina principal  de la aplicación */}
      <div className='App'>
        <div className='shinny'>
            {/* Aqui puse las rutas que nos dirigen a Home y a los detalles de los personajes*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:_id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
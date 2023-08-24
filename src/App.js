import React from 'react';
import Home from './Components/Home/Home';
import CharacterDetails from './Components/Characters-Cards/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='shinny'>
          <Home/>
          <Routes >           
            <Route path="/details/:_id" component={CharacterDetails} />
          </Routes >
        </div>
      </div>
    </Router>
  );
}

export default App

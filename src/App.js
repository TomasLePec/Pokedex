import React from 'react'
import Pokemons from "./components/Pokemons";
import Header from './components/Header';
/* import Buscador from './components/Buscador' */
import './components/styles/app.css'

function App() {
  return (
    <div>
      <Header/>
      {/* <Buscador/> */}
      <div className="miniCard-container">
        
        <Pokemons />
      </div>
    </div>
  )
}

export default App;

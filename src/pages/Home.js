import React from 'react'
import Pokemons from "../components/Pokemons";
import Header from '../components/Header';
/* import Buscador from './components/Buscador' */
import '../components/styles/app.css'

function Home() {
  return (
    <div>
      <Header/>
      <div className="miniCard-container">
        
        <Pokemons />
      </div>
    </div>
  )
}

export default Home;
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import PokemonPage from './pages/PokemonPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pokemon" component={PokemonPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

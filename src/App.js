import React from 'react';
import Pokemon from './components/Pokemon'
import Pokedex from './components/Pokedex'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route exact path='/' render={props => <Pokedex {...props} />} />
      <Route exact path='/:pokemonId' render={props => {
        console.log('from app', props)
        return (
          <Pokemon {...props} />
        )
      }} />
    </Switch>
  );
}


export default App;

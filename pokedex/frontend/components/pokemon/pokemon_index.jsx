import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link } from 'react-router-dom';

export default class PokemonIndex extends React.Component {
  
  componentDidMount () {
    this.props.requestAllPokemon();
  }
  
  render () {
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return(
      <div>
        <Link to='/'>Home</Link>
        <div className="index-view">
          <section className="pokedex">
            <ul className="poke-idx">
              {pokemonItems}
            </ul>
          </section>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </div>
      </div>
    );
  }
}

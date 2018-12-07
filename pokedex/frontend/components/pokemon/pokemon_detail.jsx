import React from 'react';
import { Route } from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import Item from '../items/item';
import { selectPokemonItem } from '../../reducers/selectors';

export default class PokemonDetail extends React.Component {
  
  componentDidMount() {
    const pokeId = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(pokeId);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }
  
  render() {
    const currentPoke = this.props.pokemon;
    if (!this.props.pokemon) return null;
    if (!this.props.items[0]) return null;
    return(
      <div className="pokemon-view">
        <h1>{currentPoke.name}</h1>
        <ul className="stats">
          <li>Attack: {currentPoke.attack}</li>
          <li>Defense: {currentPoke.defense}</li>
          <li>Type: {currentPoke.poke_type}</li>
          <li>Moves: {currentPoke.moves.join(", ")}</li>
        </ul>
        <div className="pokemon-img">
          <img src={currentPoke.image_url} />
        </div>
        <h1>Items:</h1>
        <section className="pokemon-items">
          {this.props.items.map(item => <Item key={item.name} item={item} /> )}
        </section>
        <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }  
}
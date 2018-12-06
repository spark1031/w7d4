import React from 'react';

export default class PokemonIndex extends React.Component {
  
  componentDidMount () {
    this.props.requestAllPokemon();
  }
  
  render () {
    return (
      <ul>
        {this.props.pokemon.map((poke) => (
            <li key={poke.id}>
              <img src={poke.image_url}/>
              <p>{poke.name}</p>
            </li>
        )
      )}
      </ul>
    );
  }
}
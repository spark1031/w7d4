import React from 'react';

export default class PokemonIndex extends React.Component {
  
  componentDidMount () {
    this.props.requestAllPokemon();
  }
  
  render () {
    return (
      <div>
        <h1 className="header">Gotta catch 'em all!</h1>
        <ul className="poke-idx">
          {this.props.pokemon.map((poke) => (
              <li key={poke.id}>
                <img src={poke.image_url}/>
                <p>{poke.name}</p>
              </li>
          )
        )}
        </ul>
      </div>
    );
  }
}
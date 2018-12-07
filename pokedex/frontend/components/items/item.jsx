import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => (
  <div className="poke-item">
    <Link to={`/pokemon/${item.pokemon_id}/items/${item.id}`}>
      <img src={item.image_url} />
    </Link>
    <p><strong>{item.name}</strong></p>
  </div>
);

export default Item;
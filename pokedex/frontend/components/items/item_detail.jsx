import React from 'react';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-view">
      <ul>
        <p><strong>{item.name} stats:</strong></p>
        <li>Price: ${item.price}.00</li>
        <li>Happiness: {item.happiness}/100</li>
      </ul>
    </div>
  );
} 

export default ItemDetail;
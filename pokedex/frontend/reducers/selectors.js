export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
};

export const selectPokemonItems = (state, poke) => {
  return poke ? poke.item_ids.map(id => state.entities.items[id]) : [];
};
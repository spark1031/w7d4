json.pokemon do
  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    json.image_url asset_path(@pokemon.image_url)
  end
end

@pokemon.items.each do |item|
  json.items do
    json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness
        json.image_url asset_path(item.image_url)
    end
  end
end
  

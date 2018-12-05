json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
end

@pokemon.items.each do |item|
  json.items do
    json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
  

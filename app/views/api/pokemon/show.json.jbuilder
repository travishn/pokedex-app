
  json.set! 'pokemon' do
    json.set! @pokemon.id do
      json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url
      json.item_ids @pokemon.items.pluck(:id)
    end
  end

  json.items do
    @pokemon.items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
      end
    end
  end

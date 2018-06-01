
  json.set! 'pokemon' do
    # json.set! @pokemon.id do  #don't need for a single pokemon
      json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type
      json.image_url asset_path(@pokemon.image_url)
      json.item_ids @pokemon.item_ids
    # end
  end

  json.items do
    @pokemon.items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
      end
    end
  end

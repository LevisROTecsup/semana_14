import { useEffect, useState } from "react";

import { getData } from "../../services";
import { CardComponent } from "../../components";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const handlePokemons = async () => {
    const pokemonReponse = await getData("pokemon");
    setPokemons(pokemonReponse.results);
  };

  useEffect(() => {
    handlePokemons();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Pokemones</h1>
      <div className="grid grid-cols-4 gap-4">
        {pokemons.length > 0 &&
          pokemons.map((pokemon, index) => (
            <CardComponent key={`pokemon-${index}`} name={pokemon.name} url={pokemon.url} index={index + 1} />
          ))}
      </div>
    </>
  );
};

export default Pokemons;

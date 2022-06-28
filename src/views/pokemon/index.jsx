import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getData } from "../../services";
import { setFirstLetterCapitalize } from "../../libs";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  const handlePokemon = async (name) => {
    const pokemonReponse = await getData(`pokemon/${name}`);
    setPokemon(pokemonReponse);
  };

  useEffect(() => {
    handlePokemon(name);
  }, []);

  return (
    <>
      <h5 className="text-sm font-semibold mb-4">
        <Link to="/pokemones">Regresar a lista de pokemones</Link>
      </h5>
      <div className="flex justify-center items-start flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-2/5 max-w-4xl rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              Pokemon: <span className="font-normal">{setFirstLetterCapitalize(pokemon.name)}</span>
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <h4 className="text-lg font-bold pt-8 lg:pt-0 mt-3">Peso:</h4>
            <ul className="list-disc">
              <li className="ml-10 pt-1 text-base lg:justify-start">{pokemon.weight}</li>
            </ul>
            <h4 className="text-lg font-bold pt-8 lg:pt-0 mt-3">Altura:</h4>
            <ul className="list-disc">
              <li className="ml-10 pt-1 text-base lg:justify-start">{pokemon.height}</li>
            </ul>
            <h4 className="text-lg font-bold pt-8 lg:pt-0 mt-3">Estadísticas:</h4>
            <ul className="list-disc">
              {pokemon.stats?.map((stat, index) => (
                <li key={`stat-${index}`} className="ml-10 pt-1 text-base lg:justify-start">
                  <span className="font-semibold">{stat.stat.name}: </span> <span>{stat.base_stat}</span>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-bold pt-8 lg:pt-0 mt-3">Habilidades:</h4>
            <ul className="list-disc">
              {pokemon.abilities?.map((ability, index) => (
                <li key={`ability-${index}`} className="ml-10 pt-1 text-base lg:justify-start">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-bold pt-8 lg:pt-0 mt-3">Movimientos:</h4>
            <ul className="list-disc">
              {pokemon.moves?.map((move, index) => (
                <li key={`move-${index}`} className="ml-10 pt-1 text-base lg:justify-start">
                  {move.move.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ml-5 rounded-none lg:rounded-lg shadow-2xl hidden lg:block p-4 h-auto">
          <img width={500} src={pokemon.sprites?.other?.dream_world?.front_default} />
        </div>
      </div>
    </>
  );
};

export default Pokemon;

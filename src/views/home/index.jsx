import { useEffect, useState } from "react";

import { getData } from "../../services";
import { SecondaryCardComponent } from "../../components";

const BASE_API_RICK = "https://rickandmortyapi.com/api";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const handleCharacters = async () => {
    const charcterReponse = await getData("character", { baseUrl: BASE_API_RICK });
    setCharacters(charcterReponse.results);
  };

  useEffect(() => {
    handleCharacters();
  }, []);
  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Rick y Morty</h1>
      <div className="grid grid-cols-4 gap-4">
        {characters.length > 0 &&
          characters.map((character, index) => (
            <SecondaryCardComponent key={`pokemon-${index}`} {...character} index={index + 1} />
          ))}
      </div>
    </>
  );
};

export default Home;

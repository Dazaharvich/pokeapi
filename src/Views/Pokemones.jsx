import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Pokemones() {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState("");
    const navigate = useNavigate();
    const endpoint = "https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0";

  const getPokemonNames = async () => {
    const response = await fetch(endpoint);
    const {results} = await response.json();
   
    setPokemonNames(results);
     console.log(results);
  };


  const irADetallePokemon = async () => {
    if (pokemonDetail) navigate(`/pokemones/${pokemonDetail}`);
    else alert("Debes Seleccionar un pokemon");
  };


  useEffect(() => {
    getPokemonNames();  
  }, []);



  return (
    <>
      <div className="container mt-5 text-center">
        <h2>Seleciona tu Pokémon</h2>
        <div>
          <select
            value={pokemonDetail}
            className="form-select text-center"
            onChange={(e) => setPokemonDetail(e.target.value)}
          >
            <option value="" disabled>
              Pokémons
            </option>
            
            {pokemonNames?.map((elem, i) => (
              <option key={i} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </select>
          <Button className="mt-4" onClick={irADetallePokemon}>Ver Detalles</Button>
        </div>
      </div>
      </>
  );
}

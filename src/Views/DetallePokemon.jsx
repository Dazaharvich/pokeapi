import { useState, useEffect, React } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../Components/PokemonCard';


export default function DetallePokemon() {
    const [pokemon, setPokemon] = useState({});
    const baseUrl = "https://pokeapi.co/api/v2/pokemon";
    const { name } = useParams();


    const getPokemon = async (name) =>{
        const response = await fetch(`${baseUrl}/${name}`);
        const data = await response.json();
        const src = data.sprites.other.dream_world.front_default;
        const stats = data.stats.map((stat) =>({
            name: stat.stat.name,
            base: stat.base_stat
        }));

    const types = data.types.map((elem) => elem.type.name);
    setPokemon({ name, stats, src, types });
    };

    useEffect(() =>{
        getPokemon(name);
    },[name]);

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

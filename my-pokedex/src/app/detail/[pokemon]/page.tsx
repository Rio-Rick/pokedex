import { Pokedex } from "@/app/types/pokemonDetail.type";

async function fetchPokemon(name: string): Promise<Pokedex> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  const data = await response.json();
  return data;
}

export default async function Pokemon({
  params,
}: {
  params: { pokemon: string };
}) {
  const pokemon = await fetchPokemon(params.pokemon);

  return (
    <div>
      <h1 className=" text-3xl">{pokemon.name}</h1>
      <p>{pokemon.height * 0.1} m</p>
      <p>{pokemon.weight * 0.1} Kg</p>
      <img
        className=" w-56"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      {pokemon.stats.map((stat) => (
        <p>{(stat.stat.name).replaceAll('-', ' ')} : {stat.base_stat}</p>       
      ))}
      <p>{pokemon.held_items}</p>
    </div>
  );
}

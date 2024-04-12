import { Pokedex } from "@/app/types/pokemonDetail.type";
import CardPokemon from "@/components/CardPokemon";

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
    <>
      <CardPokemon pokemon={pokemon}/>
    </>
  );
}

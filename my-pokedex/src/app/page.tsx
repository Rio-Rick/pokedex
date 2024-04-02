import Link from "next/link";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonList = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

type PokemonDetail = {};

async function fetchPokemon(): Promise<PokemonList> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=0"
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const pokedex = await fetchPokemon();
  return (
    <>
      <div className=" grid grid-cols-5 gap-2">
        {pokedex.results.map((pokemon) => (
          <Link href={`/detail/${pokemon.name}`} key={pokemon.name}>
            <div key={pokemon.name}>
              <img
                width={250}
                height={250}
                className="ml-4 w-64 h-64 rounded-md"
                src={
                  "https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"
                }
                alt={pokemon.name}
              />
              <p className="ml-4">{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* {pokedex.results.map((pokemon) => (
        <div key={pokemon.name}>
          <p>{pokemon.name}</p>
          <img src={pokemon.url} alt={pokemon.name} />
        </div>
      ))} */}
    </>
  );
}

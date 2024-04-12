"use client";

import { Pokedex } from "@/app/types/pokemonDetail.type";

export default function CardPokemon({ pokemon }: { pokemon: Pokedex }) {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-3xl">{pokemon.name}</h1>
        <p>{(pokemon.height * 0.1).toString().slice(0, 4)} m</p>
        <p>{(pokemon.weight * 0.1).toString().slice(0, 4)} Kg</p>
        <img
          className={`w-56 rounded-md border-4 ${
            pokemon.types[0].type.name === "fire"
              ? "border-red-500"
              : pokemon.types[0].type.name === "water"
              ? "border-blue-500"
              : pokemon.types[0].type.name === "grass"
              ? "border-green-500"
              : pokemon.types[0].type.name === "electric"
              ? "border-yellow-500"
              : pokemon.types[0].type.name === "ground"
              ? "border-yellow-900"
              : pokemon.types[0].type.name === "poison"
              ? "border-purple-700"
              : ""
          } `}
          src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"}
          alt={pokemon.name}
        />
        {pokemon.stats.map((stat, id) => (
          <p key={id + stat.base_stat}>
            {stat.stat.name.replaceAll("-", " ")} : {stat.base_stat}
          </p>
        ))}
        {pokemon.types.map((ele, id) => (
          <div key={id}>
            <p>{ele.type.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

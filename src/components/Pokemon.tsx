import React from "react";
import { usePokemon } from "@/PokemonProvider";

export default function Pokemon() {
  const { pokemon, setTerm } = usePokemon();
  return (
    <>
      <label>
        Search
        <input
          type='text'
          placeholder='Search'
          onChange={({ target: { value } }) => setTerm(value)}
        />
      </label>
      <ul>
        {pokemon.map((p) => (
          <li key={p.id}>
            {p.name} type is: ({p.typeList.join(", ")})
          </li>
        ))}
      </ul>
    </>
  );
}

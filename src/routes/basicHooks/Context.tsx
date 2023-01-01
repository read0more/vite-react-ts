import PokemonProvider from "/src/PokemonProvider";
import React from "react";
import Pokemon from "/src/components/Pokemon";

export default function Context() {
  return (
    <PokemonProvider>
      <Pokemon />
    </PokemonProvider>
  );
}

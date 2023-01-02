import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

interface Pokemon {
  id: number;
  name: string;
  typeList: string[];
}

interface Context {
  pokemon: Pokemon[];
  term: string;
  setTerm: (term: string) => void;
}

interface State {
  pokemon: Pokemon[];
  term: string; 
}

type Action =
  | {
      type: "SET_TERM";
      payload: string;
    }
  | {
      type: "SET_POKEMON";
      payload: Pokemon[];
    };

const PokemonContext = createContext({} as Context);

function usePokemonSource() {
  const [{ pokemon, term }, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case "SET_POKEMON":
          return { ...state, pokemon: action.payload };
        case "SET_TERM":
          return { ...state, term: action.payload };
        default:
          return state;
      }
    },
    {
      pokemon: [],
      term: "",
    } as State
  );

  useEffect(() => {
    fetch("/src/fakePokemon.json")
      .then((res) => res.json())
      .then((data: Pokemon[]) => {
        dispatch({ type: "SET_POKEMON", payload: data });
      });
  }, []);

  const setTerm = useCallback((term: string) =>
  dispatch({ type: "SET_TERM", payload: term }), [])

  const filteredPokemon = useMemo(
    () => pokemon.filter((p) => p.name.toLowerCase().includes(term.toLowerCase())),
    [pokemon, term]
  );

  return { pokemon: filteredPokemon, term, setTerm };
}

export function usePokemon() {
  return useContext(PokemonContext);
}

export default function PokemonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
  );
}

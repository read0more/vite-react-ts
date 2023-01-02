import { render, screen, waitFor } from "@testing-library/react";
import PokemonProvider, { usePokemon } from "@/PokemonProvider";
import fakePokemon from "@/fakePokemon.json";
import { useEffect } from "react";

describe("PokemonProvider", () => {
  test("PokemonProvider 자식 컴포넌트 렌더링", () => {
    render(
      <PokemonProvider>
        <div>자식 컴포넌트</div>
      </PokemonProvider>
    );
    expect(screen.getByText("자식 컴포넌트")).toBeInTheDocument();
  });

  test("usePokemon통해 데이터 받음", async () => {
    let result: unknown = [];

    const TestComponent = () => {
      const { pokemon } = usePokemon();
      result = pokemon;
      return <></>
    };

    render(
      <PokemonProvider>
        <TestComponent />
      </PokemonProvider>
    );

    await waitFor(() => {
      expect(result).toStrictEqual(fakePokemon);
    })
  });

  test("검색창에 입력한 단어를 포함한 포켓몬들 출력", async () => {
    let result: unknown = [];
    
    const TestComponent = () => {
      const { pokemon, setTerm } = usePokemon();
      result = pokemon;
      
      useEffect(() => {
        setTerm('pika');
      }, [])
      
      return <>{pokemon.map((p) => <li>{p.name}</li>)}</>
    };

    render(
      <PokemonProvider>
        <TestComponent />
      </PokemonProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
    })
  });

  test("검색창에 입력한 단어를 case insensitive한지 확인", async () => {
    let result: unknown = [];
    
    const TestComponent = () => {
      const { pokemon, setTerm } = usePokemon();
      result = pokemon;
      
      useEffect(() => {
        setTerm('PiKa');
      }, [])
      
      return <>{pokemon.map((p) => <li>{p.name}</li>)}</>
    };

    render(
      <PokemonProvider>
        <TestComponent />
      </PokemonProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
    })
  });
});

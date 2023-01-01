import { render, screen, waitFor } from "@testing-library/react";
import PokemonProvider, { usePokemon } from "@/PokemonProvider";
import fakePokemon from "@/fakePokemon.json";

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
      const { pokemon } = usePokemon();
      result = pokemon;
      return <></>
    };

    render(
      <PokemonProvider>
        <TestComponent />
      </PokemonProvider>
    );
    
  });
});

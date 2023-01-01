import { rest } from "msw";
import fakePokemon from "/src/fakePokemon.json";

export const handlers = [
  rest.get("/src/fakePokemon.json", (req, res, ctx) => {
    return res(ctx.json(fakePokemon));
  }),
];

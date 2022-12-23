import { useReducer } from "react";

interface names {
  first: string;
  last: string;
}

export default () => {
  const [state, dispatch] = useReducer(
    (state: names, action: names) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    } as names
  );

  return (
    <div>
      <input
        type={"text"}
        value={state.first}
        onChange={(e) =>
          dispatch({
            ...state,
            first: e.target.value,
          })
        }
      />
      <input
        type={"text"}
        value={state.last}
        onChange={(e) =>
          dispatch({
            ...state,
            last: e.target.value,
          })
        }
      />
      <b>
        HI {state.first} {state.last}
      </b>
    </div>
  );
};

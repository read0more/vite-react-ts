import React, { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/routes/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

export default function Redux() {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(incrementByAmount(incrementAmount));
  }

  return (
    <div>
      <h1>Redux</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <form onSubmit={handleSubmit}>
          <label>
            increment by:
            <input
              type='number'
              onChange={({ target: { value } }) => setIncrementAmount(+value)}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
        <span>{count}</span>
      </div>
    </div>
  );
}

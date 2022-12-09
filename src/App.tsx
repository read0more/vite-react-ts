import { useCallback, useMemo, useReducer, useState } from "react";
import Register from "./components/register/Register";
import Names from "./Names";
import SortedList from "./SortedList";

function App() {
  const [numbers] = useState([10, 20, 30]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [key, setKey] = useState(1);

  const total = useMemo(() => numbers.reduce((acc, number) => acc + number, 0), [numbers]);
  const countTotal = count1 + count2;
  const [list] = useState(["QW", "ER", "AB", "BC"]);
  const sortFunc = useCallback((a: string, b: string) => a.localeCompare(b) * key, [key]);

  return (
    <div className='App'>
      {/* 
      part 1. about useReducer
      <Names /> 
      */}

      {/* 
      part 2. about useCallback, useMemo
      <Names /> 
      */}

      {/* 
      <div>total: {total}</div>
      <div>countTotal: {countTotal}</div>
      <div>names: {list.join(', ')}</div>
      <SortedList list={list} sortFunc={sortFunc} />
      <button onClick={() => setKey(key * -1)}>reverse</button>
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button> */}

      <Register />
    </div>
  );
}

export default App;

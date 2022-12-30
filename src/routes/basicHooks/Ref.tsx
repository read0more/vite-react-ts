import React, { useEffect, useRef, useState } from "react";

export default function Ref() {
  const idRef = useRef(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const [names, setNames] = useState([
    {
      id: idRef.current,
      name: "John",
    },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputRef.current?.value;
    if (!name) return;

    idRef.current += 1;
    console.log(idRef.current);
    setNames([
      ...names,
      {
        id: idRef.current,
        name,
      },
    ]);
    inputRef.current!.value = "";
  };

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            id: {name.id} / name: {name.name}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' ref={inputRef} />
        </label>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

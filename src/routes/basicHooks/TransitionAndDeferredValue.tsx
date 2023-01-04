import React, {
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

interface User {
  id: number;
  name: string;
}

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Paul" },
  { id: 3, name: "George" },
  { id: 4, name: "Ringo" },
  { id: 5, name: "Pete" },
  { id: 6, name: "Mike" },
  { id: 7, name: "Dave" },
  { id: 8, name: "Park" },
  { id: 9, name: "Kim" },
  { id: 10, name: "Yun" },
];

const filteredUsers = (term: string) => {
  for (let i = 0; i < 800000000; i++) {}
  return users.filter((user) =>
    user.name.toLowerCase().includes(term.toLocaleLowerCase())
  );
};

function Deferred() {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);
  const list = useMemo(() => {
    return filteredUsers(name);
  }, [deferredName]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <>
      <input type='text' value={name} onChange={handleChange} />
      {list.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </>
  );
}

function Transition() {
  const [name, setName] = useState("");
  const [list, setList] = useState<User[]>(users);
  const [isPending, startTransition] = useTransition();

  function handleChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setName(value);
    startTransition(() => {
      setList(() => {
        return filteredUsers(value);
      });
    });
    // setList(filteredUsers(value));
  }

  return (
    <>
      <input type='text' value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item) => <li key={item.id}>{item.name}</li>)
      )}
    </>
  );
}

export default function TransitionAndDeferredValue() {
  return (
    <>
      <h1>useDeferred</h1>
      <Deferred />
      <h1>useTransition</h1>
      <Transition />
    </>
  );
}

import React, { useState } from "react";

type Fields = {
  firstName: string;
  lastName: string;
  term: boolean;
}

function useForm<T>() {
  const [values, setValues] = useState<T>({} as T);

  function register(name: keyof T) {
    return {
      name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = e.target;
        setValues((prev) => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value,
        }));
      },
    };
  }

  function handleSubmit(onSuccess: (data: any) => void) {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSuccess(values);
    };
  }

  return {
    register,
    handleSubmit,
  };
}

export default function UseForm() {
  const { register, handleSubmit } = useForm<Fields>();
  return <form onSubmit={handleSubmit(console.log)}>
    <input type="text" {...register('firstName')} />
    <input type="text" {...register('lastName')} />
    <input type="checkbox" {...register('term')} />
    <button>submit</button>
  </form>;
}

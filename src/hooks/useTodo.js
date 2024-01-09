import { useEffect, useState } from "react";

export function useTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      setTodos(data);
    };

    fetchTodos();
  }, []);

  return todos;
}

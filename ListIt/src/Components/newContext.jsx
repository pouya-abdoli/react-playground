import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const newContext = createContext();

import React from "react";

const AppDataProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: "Eating breakfast", status: false },
    { id: uuidv4(), name: "Going to gym", status: true },
    { id: uuidv4(), name: "Watching movie at 10", status: false },
  ]);

  // console.log(todos);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    if (event.key !== "Enter") return;
    if (input.trim() === "") return;

    const newTodo = {
      id: uuidv4(),
      name: input,
      status: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (todoId) => {
    const updated = todos.map((item) =>
      item.id === todoId ? { ...item, status: !item.status } : item,
    );
    setTodos(updated);
  };

  const deleteTodo = (todoId) => {
    const remained = todos.filter((item) => item.id !== todoId);
    setTodos(remained);
  };

  const renameTodo = (todoId, newName) => {
    const updated = todos.map((item) =>
      item.id === todoId ? { ...item, name: newName } : item,
    );
    setTodos(updated);
  };
  return (
    // prettier-ignore
    <newContext.Provider value={{ todos, input, setInput, addTodo, toggleTodo, deleteTodo, renameTodo }}>
        {children}
    </newContext.Provider>
  );
};

export default AppDataProvider;

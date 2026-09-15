import React, { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
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

  const statusHandler = (todoId) => {
    // console.log("status was changed")
    // console.log(todoId)
    const updateTodos = todos.map((item) =>
      item.id === todoId ? { ...item, status: !item.status } : item,
    );
    setTodos(updateTodos);
  };

  const todoRemoveHandler = (todoId) => {
    // console.log("Todo was removed")
    // console.log(todoId)
    const updateTodos2 = todos.filter((item) => item.id !== todoId);
    setTodos(updateTodos2);
  };

  const changeHandler = (todoId, newName) => {
    const Updatedtodos3 = todos.map((item) =>
      item.id === todoId ? { ...item, name: newName } : item,
    );
    setTodos(Updatedtodos3);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
            <div className="flex items-center mb-6">
              <h1 className="mr-6 text-4xl font-bold text-blue-600">
                To-Do Project | Saeed Sharifi Academy
              </h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="What needs to be done today?"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                value={input}
                onKeyDown={addTodo}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <TodoList
              todos={todos}
              statusHandler={statusHandler}
              todoRemoveHandler={todoRemoveHandler}
              changeHandler={changeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

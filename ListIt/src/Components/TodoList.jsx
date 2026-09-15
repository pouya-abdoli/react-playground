import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  statusHandler,
  todoRemoveHandler,
  changeHandler,
}) => {
  return (
    <div>
      <ul className="list-reset">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            statusHandler={statusHandler}
            todoRemoveHandler={todoRemoveHandler}
            changeHandler={changeHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

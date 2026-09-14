import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, statusHandler, todoRemoveHandler}) => {
  return (
    <div>
      <ul className="list-reset">
        {todos.map(
            (todo, index) => <TodoItem key={index} todo={todo} statusHandler={statusHandler} todoRemoveHandler={todoRemoveHandler}/>
        )}
      </ul>
    </div>
  );
};

export default TodoList;

import { useContext } from "react";
import TodoItem from "./TodoItem";
import { newContext } from "./newContext";

const TodoList = ({}) => {
  const { todos } = useContext(newContext);

  return (
    <div>
      <ul className="list-reset">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

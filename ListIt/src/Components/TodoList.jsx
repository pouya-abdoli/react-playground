import TodoItem from "./TodoItem";
import { useAppData } from "./newContext";

const TodoList = ({}) => {
  const { todos } = useAppData();

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

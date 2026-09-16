import { useContext, useState } from "react";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { newContext } from "./newContext";

const TodoItem = ({ todo }) => {
  const { renameTodo, setTodoStatus } = useContext(newContext);

  const [editMode, setEditMode] = useState(false);

  const closeInput = (event) => {
    if (event.key === "Enter") {
      renameTodo(todo.id, event.target.value);
      setEditMode(false);
    }
  };

  return (
    <>
      {editMode ? (
        <input
          onKeyDown={closeInput}
          defaultValue={todo.name}
          className="w-full px-2 py-3 border rounded outline-none border-gray-600"
          type="text"
        />
      ) : (
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
          <div>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => setTodoStatus(todo.id)}
            />
            <p
              className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status ? "line-through" : ""}`}
            >
              {todo.name}
            </p>
          </div>
          <button
            type="button"
            className="absolute right-0 flex items-center space-x-1"
          >
            <EditTodo setEditMode={setEditMode} />
            <DeleteTodo todo={todo} />
          </button>
        </li>
      )}
    </>
  );
};

export default TodoItem;

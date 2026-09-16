import { useContext } from "react";
import { newContext } from "./newContext";

const DeleteTodo = ({ todo }) => {
  const { todoRemoveHandler } = useContext(newContext);

  return (
    <div>
      <svg
        onClick={() => {
          todoRemoveHandler(todo.id);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-red-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default DeleteTodo;

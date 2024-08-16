import React from "react";
import TodoApp from "../../Day08-Todo-CRUD-Json-Server/TodoApp";
import { useNavigate } from "react-router-dom";

const NewAppTodo: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back one step in the history stack
  };
  return (
    <div>
      <TodoApp />
      <button
        onClick={handleBackClick}
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Go Back
      </button>
    </div>
  );
};

export default NewAppTodo;

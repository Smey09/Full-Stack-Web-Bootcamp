// NevBar.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodoContext } from "../../functions/TodoContext";

const NevBar: React.FC = () => {
  const navigate = useNavigate();
  const { total, completed } = useTodoContext();

  const handleClick = () => {
    navigate("/todoApp");
  };

  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-blue-700">
          <div>Total: {total}</div>
          <h1>Completed: {completed}</h1>
          <button
            className="bg-lime-500 text-white rounded-lg px-5 py-1 text-center"
            onClick={handleClick}
          >
            Todo
          </button>
        </div>
      </footer>
    </div>
  );
};

export default NevBar;

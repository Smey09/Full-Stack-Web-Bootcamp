import React from "react";
import { useNavigate } from "react-router-dom";

const AppBar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todoApp");
  };
  return (
    <div>
      <nav className="bg-gray-400 dark:bg-gray-900 h-16 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://cdn-icons-png.freepik.com/512/8539/8539336.png"
              className="h-8"
              alt="#"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Todo App
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={handleClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              +
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

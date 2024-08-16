import React from "react";

const AppBar: React.FC = () => {
  return (
    <div>
      <nav className="bg-gray-400 dark:bg-gray-900 h-16 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="relative flex items-center">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="text-slate-400 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="pl-10 py-2 w-full bg-gray-100 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">
              Todo App
            </span>
          </a>
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:order-2">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Todo +
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AppBar;

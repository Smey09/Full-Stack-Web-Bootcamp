import React from "react";

const NevBar_v2: React.FC = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-blue-700">
          <div>Total: </div>
          <h1>Completed: </h1>
          <button className="bg-lime-500 text-white rounded-lg px-5 py-1 text-center">
            Todo
          </button>
        </div>
      </footer>
    </div>
  );
};

export default NevBar_v2;

import React from "react";
import CardDisplay from "../../Components/CardDisplay";
import TodoApp from "../../functions/AppTodo";

const BodyApp: React.FC = () => {
  return (
    <div className="bg-blue-300 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div>
        <CardDisplay />
      </div>
      <div>
        <TodoApp />
      </div>
    </div>
  );
};

export default BodyApp;

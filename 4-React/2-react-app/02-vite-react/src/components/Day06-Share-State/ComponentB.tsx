import React from "react";

interface ComponentBProps {
  count: number;
  decrementCount: () => void;
}

const ComponentB: React.FC<ComponentBProps> = ({ count, decrementCount }) => {
  return (
    <div className="bg-white m-2 p-1">
      <h2>Component B</h2>
      <p>Count: {count}</p>
      <button
        onClick={decrementCount}
        className="bg-red-500 hover:bg-red-700 text-white rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentB;

import React from "react";

interface ComponentAProps {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

const ComponentA: React.FC<ComponentAProps> = ({
  count,
  incrementCount,
  decrementCount,
}) => {
  return (
    <div className="bg-white m-2 p-1">
      <h2>Component A</h2>
      <p>Count: {count}</p>
      <button
        onClick={incrementCount}
        className="bg-blue-500 hover:bg-blue-700 text-white rounded"
      >
        Increment
      </button>
      <button
        onClick={decrementCount}
        className="bg-red-500 hover:bg-red-700 text-white rounded"
      >
        Decrement
      </button>
    </div>
  );
};

export default ComponentA;

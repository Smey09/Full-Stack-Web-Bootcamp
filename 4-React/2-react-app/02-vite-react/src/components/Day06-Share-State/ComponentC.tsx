import React from "react";

interface ComponentCProps {
  count: number;
}

const ComponentC: React.FC<ComponentCProps> = ({ count }) => {
  return (
    <div className="bg-white m-2 p-1">
      <h2>Component C</h2>
      <p className="text-red-600 font-bold text-lg">Count: {count}</p>
    </div>
  );
};

export default ComponentC;

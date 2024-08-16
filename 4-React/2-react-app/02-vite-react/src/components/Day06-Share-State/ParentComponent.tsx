import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-blue-500 p-1 w-80">
      <h1 className="m-2 text-white">Parent Component</h1>
      <ComponentA
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
      <ComponentB count={count} decrementCount={decrementCount} />
      <ComponentC count={count} />
    </div>
  );
};

export default ParentComponent;

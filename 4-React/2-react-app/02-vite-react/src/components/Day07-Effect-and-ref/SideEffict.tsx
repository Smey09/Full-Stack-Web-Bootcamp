import React, { useState, useEffect } from "react";

const TitleUpdater: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Update the document title
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array: Effect runs when `count` changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default TitleUpdater;

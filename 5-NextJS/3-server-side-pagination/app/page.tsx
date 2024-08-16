import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <span>Go To</span>
      <a
        href="http://localhost:3000/products"
        className="text-blue-500 bg-orange-400 p-2 rounded-lg m-2"
      >
        Show products
      </a>
    </div>
  );
};

export default Home;

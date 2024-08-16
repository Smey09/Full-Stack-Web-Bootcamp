// shop/products/page.tsx
import React from "react";

export default function Products() {
  return (
    <div className="flex min-h-screen items-center justify-center p-10 flex-col space-y-5">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Products Page
      </h1>
      <img
        className="w-[70%] h-auto"
        src="https://www.intelligenthq.com/wp-content/uploads/2019/08/tech-gadgets.jpg"
      />
    </div>
  );
}

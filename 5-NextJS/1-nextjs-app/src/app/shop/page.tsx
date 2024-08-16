// shop/page.tsx
import React from "react";

export default function Shop() {
  return (
    <div className="flex min-h-screen items-center justify-center p-10 flex-col space-y-5">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to SAICODE-SHOP
      </h1>
      <img
        className="w-[70%] h-auto"
        src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/How-can-I-register-my-shop-and-establishment-online.jpg"
        alt="Shop"
      />
    </div>
  );
}

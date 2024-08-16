"use client";
import Pagination from "@/app/components/Organisms/Paginations";
import React from "react";
import NevBar from "../NevBar";
import Footer from "../Footer";
import CartProduct from "@/app/components/CardProduct";
import { LoginForm } from "@/app/components/LoginForm";
import YukForm from "@/app/components/SingUpForm";

const mockProducts = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    model: "A2988",
    brand: "Apple",
    price: 1199.99,
    description:
      "Apple's flagship smartphone with advanced A17 Bionic chip and ProMotion display.",
    about:
      "The iPhone 16 Pro Max delivers top-tier performance, enhanced camera capabilities, and a stunning Super Retina XDR display.",
    image: "https://tech.news.am/static/news/b/2024/01/2786.jpg",
  },
];

const Doc = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-200">
      <div className="bg-gray-500 p-4 rounded-xl text-black m-2">
        <p>NevBar</p>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
          <NevBar />
        </div>
      </div>
      <div className="bg-gray-500 p-4 rounded-xl text-black m-2">
        <p>Footer Page</p>
        <div className="transform transition-transform duration-300 ease-in-out hover:scale-105">
          <Footer />
        </div>
      </div>
      <div className="h-[700px] flex mb-4 justify-between text-white">
        <div className="w-full md:w-[48%] bg-gray-500 p-5 rounded-xl hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-500">
          <h2 className="text-xl font-bold mb-2 py-5">Card Products</h2>
          <ul>
            {mockProducts.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[48%] flex flex-col gap-4">
          <div className="h-[50%] bg-gray-500 p-5 rounded-xl hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-500">
            <h1 className="text-xl font-bold">Button Paginations</h1>
            <Pagination total={1} limit={1} />
          </div>
          <div className="h-[50%] bg-gray-500 p-5 rounded-xl hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-500">
            <h1 className="text-xl font-bold">Login Form</h1>
            <div className="bg-gray-100 hover:bg-gray-200 rounded-lg border-double border-4 border-indigo-600">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Sign UP Form</h1>
        <YukForm />
      </div>
    </div>
  );
};

export default Doc;

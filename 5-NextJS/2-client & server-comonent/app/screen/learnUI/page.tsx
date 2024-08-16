"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Paginations from "@/app/components/Organisms/Paginations";

interface Product {
  id: string;
  name: string;
  image: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  about: string;
}

const limit = 6;

const Page: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data-1.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const page = Number(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const displayedProducts = products.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedProducts.map((product) => (
            <li
              key={product.id}
              className="text-black mb-4 p-4 border rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
            >
              <Link href={`/screen/learnUI/${product.id}`}>
                <div className="flex justify-center mb-4">
                  <img
                    className="h-60 w-auto rounded transform transition-transform duration-300 ease-in-out hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p>
                  <strong>Model:</strong> {product.model}
                </p>
                <p>
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-blue-600">
                  <strong>Price:</strong> ${product.price.toFixed(2)}
                </p>
                <p>
                  <strong>Description:</strong> {product.description}
                </p>
                <p>
                  <strong>About:</strong> {product.about}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      <Paginations total={products.length} limit={limit} />
    </div>
  );
};

export default Page;

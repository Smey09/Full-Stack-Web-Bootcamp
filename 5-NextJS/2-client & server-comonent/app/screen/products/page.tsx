"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Pagination from "../../components/Organisms/Paginations";
import { useSearchParams } from "next/navigation";

interface Product {
  thumbnail: string;
  id: number;
  title: string;
  description: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const limit = 9;
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          (page - 1) * limit
        }`
      );
      setProducts(response.data.products);
      setTotal(response.data.total);
    } catch (error) {
      setError("Error fetching products. Please try again later.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className="border p-4 rounded-lg cursor-pointer hover:shadow-lg">
                <img src={product.thumbnail} alt={product.title} />
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p>{product.description}</p>
                <p className="font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      <Pagination total={total} limit={limit} />
    </div>
  );
};

export default ProductsPage;

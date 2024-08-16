"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchProduct(id as string);
    }
  }, [id]);

  const fetchProduct = async (productId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      setProduct(response.data);
    } catch (error) {
      setError("Error fetching product details. Please try again later.");
      console.error("Error fetching product details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.thumbnail} alt={product.title} className="w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

// Add this line at the top to indicate a Client Component
"use client";

import React, { useEffect, useState } from "react";

// Define a type for your product data
interface Product {
  id: string;
  title: string;
  descriptions: string;
  price: string;
  image: string; // Add the image field
}

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: PageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch the JSON file from the public directory
        const response = await fetch(`/data.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        const productData = data.find((product) => product.id === params.id);
        setProduct(productData || null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-lg font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="text-lg font-semibold text-gray-600">
          Product not found
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover p-2 border border-blue-300 rounded-lg"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">
            <strong className="font-semibold">ID:</strong> {product.id}
          </p>
          <p className="text-gray-600 mb-4">
            <strong className="font-semibold">Descriptions:</strong>{" "}
            {product.descriptions}
          </p>
          <p className="text-xl font-semibold text-gray-900">
            <strong>Price:</strong> {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

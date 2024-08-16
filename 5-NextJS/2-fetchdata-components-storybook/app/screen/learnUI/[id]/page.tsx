"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

interface Product {
  id: number; // ID is a number
  name: string;
  image: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  about: string;
}

const LearnUIDetail: React.FC = () => {
  const params = useParams();
  const id = params.id as string; // Extract id as string
  const [detail, setDetail] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch("/data-1.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Product[] = await response.json();
        const detailData = data.find((item) => item.id.toString() === id);
        if (detailData) {
          setDetail(detailData);
        } else {
          setError("Detail not found");
        }
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4">Error: {error}</div>;
  }

  if (!detail) {
    return <div className="text-center p-4">No detail available</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container text-black mx-auto p-4 bg-gray-100 rounded-lg shadow-lg m-2 hover:bg-white"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
      >
        {detail.name}
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-4"
      >
        <img
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-125"
          src={detail.image}
          alt={detail.name}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg"
      >
        <p className="mb-2">
          <strong>Model:</strong> {detail.model}
        </p>
        <p className="mb-2">
          <strong>Brand:</strong> {detail.brand}
        </p>
        <p className="mb-2 text-blue-600">
          <strong>Price:</strong> ${detail.price.toFixed(2)}
        </p>
        <p className="mb-2">
          <strong>Description:</strong> {detail.description}
        </p>
        <p>
          <strong>About:</strong> {detail.about}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LearnUIDetail;

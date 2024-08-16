import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Product {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  id: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      className="text-black mb-4 p-4 border rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/products/${product.id}`}>
        <div className="flex justify-center mb-4">
          <img
            className="h-60 w-auto rounded transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {product.tags.map((tag) => (
            <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

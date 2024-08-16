import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
  id: string;
}

const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

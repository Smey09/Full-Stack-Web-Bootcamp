import React from "react";

export interface ProductDetailsProps {
  thumbnail: string;
  title: string;
  price: number;
  description: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  thumbnail,
  title,
  price,
  description,
}) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={thumbnail} alt={title} className="w-full" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-700 mb-4">${price}</p>
          <p className="mb-4">{description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

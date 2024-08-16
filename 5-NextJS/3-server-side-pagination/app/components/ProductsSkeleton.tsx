const ProductsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[...Array(24)].map((_, index) => (
        <div className="skeleton w-96 h-[452px] mx-auto" key={index}></div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;

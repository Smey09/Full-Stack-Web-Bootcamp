interface Product {
  thumbnail: string;
  title: string;
  description: string;
  tags: string[];
}

interface ProductCardProps {
  item: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  return (
    <div className="card bg-base-200 w-96">
      <figure>
        <img src={item.thumbnail} alt={item.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <p className="truncate">{item.title}</p>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="truncate">{item.description}</p>
        <div className="card-actions justify-end">
          {item.tags.map((tag, index) => (
            <div className="badge badge-outline" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

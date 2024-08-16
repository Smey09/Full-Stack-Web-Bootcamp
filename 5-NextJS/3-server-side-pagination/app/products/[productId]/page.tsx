import { getProductById } from "@/app/utils";

interface Params {
  params: {
    productId: string;
  };
}

const ProductDetail: React.FC<Params> = async ({ params }) => {
  const { productId } = params;

  const product = await getProductById({ productId });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex gap-5 items-center mb-4">
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="badge badge-secondary">NEW</div>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <div className="badge badge-outline" key={index}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

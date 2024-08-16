import Pagination from "../components/Pagination";
import ProductList from "../components/ProductsList";
import { Suspense } from "react";
import ProductsSkeleton from "../components/ProductsSkeleton";

const Products: React.FC = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: number;
  };
}) => {
  const currentPage = searchParams?.page;
  const limit = 24;

  return (
    <div className="flex flex-col gap-20">
      <Suspense key={currentPage} fallback={<ProductsSkeleton />}>
        <ProductList currentPage={currentPage} limit={limit} />
      </Suspense>
      <div className="flex justify-center">
        <Pagination total={194} limit={limit} />
      </div>
    </div>
  );
};
export default Products;

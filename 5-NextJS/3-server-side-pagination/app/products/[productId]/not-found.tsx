import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-red-500">
          404 - Not Found
        </h2>
        <p className="text-lg mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/products"
          className="text-blue-600 hover:underline text-lg"
        >
          Return to Product List
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

"use client";

import { fetchPaginatedMovies } from "@/app/api/Amazonpro/amazonpro";
import { useState, useEffect } from "react";

interface Data {
  _id: number;
  title: string;
  price: number;
  previousPrice: number;
  description: string;
  category: string;
  image: string;
  isNew: boolean;
  brand: string;
  quantity: number;
}

const MoviesPage: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Data[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [movieDetails, setMovieDetails] = useState<Data | null>(null);
  const [moviesError, setMoviesError] = useState<string | null>(null);
  const [detailsError, setDetailsError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchPaginatedMovies(page);
        console.log("Fetched Movies:", data); // Add this line to inspect the data
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setMoviesError("Error fetching movies");
      }
    };
    loadMovies();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Popular Phone</h1>
      {moviesError && <p className="text-red-500">{moviesError}</p>}
      {detailsError && <p className="text-red-500">{detailsError}</p>}

      {movieDetails && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Featured Phone</h2>
          <img
            src={movieDetails.image}
            alt={movieDetails.title}
            className="w-full h-64 object-cover"
          />
          <h3 className="text-lg font-semibold">{movieDetails.title}</h3>
          <p>{movieDetails.description}</p>
          <p className="text-yellow-500 font-semibold">
            Brand: {movieDetails.brand}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((data: Data) => (
          <div
            key={data._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-orange-500 mb-2">
                {data.title}
              </h2>
              <p className="text-gray-700 mb-2">Brand: {data.brand}</p>
              <p className="text-gray-600 text-sm mb-2">
                {data.description.length > 100
                  ? data.description.substring(0, 100) + "..."
                  : data.description}
              </p>
              <p className="text-yellow-500 font-semibold">
                Price: {data.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span className="text-lg">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesPage;

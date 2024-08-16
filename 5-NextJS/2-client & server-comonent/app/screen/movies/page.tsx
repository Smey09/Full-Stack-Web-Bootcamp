"use client";

import { useState } from "react";
import {
  useFetchPaginatedMovies,
  useFetchMovieDetails,
} from "../../api/Movies/MoviesAPI";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date?: string;
  overview?: string;
  vote_average?: number;
}

interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

// Utility function to truncate text
const truncateText = (text: string, maxLength: number) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const MovieTMDB: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const {
    movies,
    totalPages,
    error: moviesError,
  } = useFetchPaginatedMovies(page);
  const { movieDetails, error: detailsError } = useFetchMovieDetails();

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Extract the first video if available
  const firstVideo = movieDetails?.videos.results[0];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      {moviesError && <p className="text-red-500">{moviesError}</p>}
      {detailsError && <p className="text-red-500">{detailsError}</p>}

      {/* Display video information in a card */}
      {firstVideo && (
        <div className="mb-4 p-2 rounded transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200">
          <img
            src={`https://img.youtube.com/vi/${firstVideo.key}/hqdefault.jpg`}
            alt={firstVideo.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{firstVideo.name}</h2>
            <a
              href={`https://www.youtube.com/watch?v=${firstVideo.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Watch Video
            </a>
          </div>
        </div>
      )}

      {/* Display movies with additional details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie: Movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 transition"
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-orange-500 mb-2">
                  {movie.title}
                </h2>
                <p className="text-gray-700 mb-2">
                  Release Date: {movie.release_date || "N/A"}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  {truncateText(
                    movie.overview || "No overview available.",
                    100
                  )}
                </p>
                <p className="text-blue-500 font-semibold">
                  Rating:{" "}
                  {movie.vote_average ? `${movie.vote_average}/10` : "N/A"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>

      {/* Pagination Controls */}
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

export default MovieTMDB;

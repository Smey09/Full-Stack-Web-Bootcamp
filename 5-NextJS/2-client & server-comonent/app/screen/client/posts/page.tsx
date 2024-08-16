"use client";

import { useState } from "react";
import { useFetchData } from "@/app/api/client/FetchClientData";

export default function Posts() {
  const [page, setPage] = useState(1);
  const LIMIT = 10; // Set the number of posts per page
  const { posts, error } = useFetchData(page, LIMIT);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1)); // Prevent going below page 1
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts Client</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

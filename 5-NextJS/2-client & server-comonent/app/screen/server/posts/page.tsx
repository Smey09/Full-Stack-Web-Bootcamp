"use client";

import { fetchPosts } from "@/app/api/server/FetchServerData";
import React, { useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of posts per page
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts(page, limit);
        setPosts(data);
      } catch (error) {
        setError("Error fetching posts");
        console.error("Error fetching posts:", error);
      }
    };
    fetchData();
  }, [page, limit]);

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  if (error) {
    return (
      <div className="p-6 bg-red-100 min-h-screen text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Posts Server</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: Post) => (
          <div
            className="bg-white hover:bg-gray-200 p-6 rounded text-white shadow-lg"
            key={post.id}
          >
            <h2 className="text-2xl font-bold text-blue-600">{post.title}</h2>
            <p className="text-lg text-black">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

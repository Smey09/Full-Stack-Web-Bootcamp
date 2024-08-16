"use client";

import { useState } from "react";
import { useFetchData } from "@/app/api/client/FetchClientData";

export default function Users() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of users per page
  const { users, error } = useFetchData(page, limit);

  if (error) {
    return (
      <div className="p-6 bg-red-100 min-h-screen text-red-600">{error}</div>
    );
  }

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">User Client</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            className="bg-yellow-700 p-6 rounded text-white shadow-lg"
            key={user.id}
          >
            <p className="text-sm font-semibold">ID: {user.id}</p>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg">Username: @{user.username}</p>
            <p className="text-lg">Email: {user.email}</p>
            <h3 className="mt-4 text-xl font-semibold">User Address</h3>
            <p className="text-sm">{user.address.street}</p>
            <p className="text-sm">{user.address.suite}</p>
            <p className="text-sm">{user.address.city}</p>
            <p className="text-sm">{user.address.zipcode}</p>
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

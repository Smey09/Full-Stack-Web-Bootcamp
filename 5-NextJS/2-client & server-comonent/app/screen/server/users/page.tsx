"use client";

import { fetchUsers } from "@/app/api/server/FetchServerData";
import React, { useState, useEffect } from "react";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}

export default function UsersPage() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // Number of users per page
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsers(page, limit);
        setUsers(data);
      } catch (error) {
        setError("Error fetching users");
        console.error("Error fetching users:", error);
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
      <h1 className="text-4xl font-bold text-center mb-8">User Server</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: User) => (
          <div
            className="bg-white hover:bg-gray-200 p-6 rounded text-blue-700 shadow-lg"
            key={user.id}
          >
            <p className="text-sm font-semibold">ID: {user.id}</p>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg">Username: @{user.username}</p>
            <p className="text-lg">Email: {user.email}</p>
            <h3 className="mt-4 text-xl font-semibold">User Address</h3>
            <p className="text-sm">
              st.{user.address.street}, {user.address.suite}
            </p>
            <p className="text-sm">City: {user.address.city}</p>
            <p className="text-sm">Zipcode: {user.address.zipcode}</p>
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

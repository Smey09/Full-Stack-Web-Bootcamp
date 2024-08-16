"use client";

import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export function useFetchData(page: number, limit: number) {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResponse, usersResponse] = await Promise.all([
          fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`).then((res) =>
            res.json()
          ),
          fetch(`${BASE_URL}/users?_page=${page}&_limit=${limit}`).then((res) =>
            res.json()
          ),
        ]);
        setPosts(postsResponse);
        setUsers(usersResponse);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page, limit]);

  return { users, posts, error };
}

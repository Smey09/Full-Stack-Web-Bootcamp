// // lib/fetchData.ts

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// export async function fetchUsers() {
//   try {
//     const response = await fetch(`${BASE_URL}/users`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// }

// export async function fetchPosts() {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch posts");
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return [];
//   }
// }

const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchUsers(page: number, limit: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/users?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export async function fetchPosts(page: number, limit: number) {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

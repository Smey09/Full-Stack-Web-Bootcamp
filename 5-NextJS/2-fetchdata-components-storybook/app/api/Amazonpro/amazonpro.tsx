const BASE_URL = "https://jsonserver.reactbd.com";
const FILE_NAME = "amazonpro";
const MAIN_URL = `${BASE_URL}/${FILE_NAME}`;

interface Movie {
  id: number;
  title: string;
  // Add other movie properties here
}

interface PaginatedMovies {
  results: Movie[];
  total_pages: number;
}

export const fetchPaginatedMovies = async (page: number) => {
  try {
    const response = await fetch(`${MAIN_URL}?_page=${page}&_limit=10`);
    if (!response.ok) {
      throw new Error("Failed to fetch paginated movies");
    }
    const totalCount = response.headers.get("X-Total-Count");
    const data = await response.json();
    console.log("API Response Data:", data); // Add this line to inspect the data
    return {
      results: data,
      total_pages: totalCount ? Math.ceil(Number(totalCount) / 10) : 0,
    };
  } catch (error) {
    console.error("Error fetching paginated movies:", error);
    throw error;
  }
};

// export const fetchMovieDetails = async (movieId: number) => {
//   try {
//     const response = await fetch(MAIN_URL);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data details");
//     }
//     const data = await response.json();
//     console.log("API Response Data Details:", data); // Add this line to inspect the data
//     const movie = data.movies.find((m: any) => m.id === movieId);
//     console.log("Found Movie:", movie); // Add this line to inspect the found movie
//     return movie || null;
//   } catch (error) {
//     console.error("Error fetching data details:", error);
//     throw error;
//   }
// };

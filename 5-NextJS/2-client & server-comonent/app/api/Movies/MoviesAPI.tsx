import { useEffect, useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a7068ed44eb33ca910b091f8659bb581";
const MOVIE_ID = "157336"; // Example movie ID for details

// Define interfaces for movie data
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

interface Image {
  file_path: string;
  height: number;
  width: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
}

interface MovieDetails {
  videos: {
    results: Video[];
  };
  images: {
    backdrops: Image[];
    posters: Image[];
  };
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export function useFetchMovieDetails() {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${MOVIE_ID}?api_key=${API_KEY}&append_to_response=videos,images`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        setError("Error fetching movie details");
        console.error("Error fetching movie details:", error);
      }
    };
    fetchData();
  }, []);

  return { movieDetails, error };
}

export function useFetchPaginatedMovies(page: number) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError("Error fetching movies");
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [page]);

  return { movies, totalPages, error };
}

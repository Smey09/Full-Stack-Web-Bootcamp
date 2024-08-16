"use client";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center text-red-500 p-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h2>
        <p className="text-lg mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <p className="hover:underline text-lg" onClick={() => reset()}>
          Try Again
        </p>
      </div>
    </div>
  );
};

export default Error;

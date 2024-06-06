"use client";
import { MovieReview } from "@/types";
import Movie, { MovieSkeleton } from "./movie";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Props = {
  movies: MovieReview[];
};

function MovieReviews({ movies }: Props) {
  // const { data :movieReviewData } = useGetMoviesRevies({ movies }); //remeber to pass movies as the initial data
  const {
    data: movieReviews,
    isLoading,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["movie-reviews"],
    queryFn: async () => {
      const response = await axios.get("/api/movie-reviews");
      return response.data;
    },
  });

  if (isLoading || isPending)
    return (
      <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array.from({ length: 20 }, (_, idx) => idx + 1).map((index) => (
          <MovieSkeleton key={index} />
        ))}
      </div>
    );

  if (isError) return <div>Error</div>;

  return (
    <div className="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {(movies || movieReviews).map((movie) => (
        <Movie key={movie.reviewid} movie={movie} />
      ))}
    </div>
  );
}

export default MovieReviews;

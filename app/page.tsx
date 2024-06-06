import {db} from "@/lib/db";
import {MovieReview} from "@/types";
import React from "react";
import MovieReviews from "./movie-reviews";

async function Home() {
  const collection = await db.collection<MovieReview>("movie_reviews");
  // get some data
  const movies = await collection.find({}, {limit: 30}).toArray();

  return (
    <div className="max-w-screen-lg mx-auto flex flex-col">
      <h3 className="text-center text-balance font-bold mt-4 tracking-widest">
        Your movies
      </h3>

      <div className="mt-10 w-full ">
        <MovieReviews movies={movies} />
      </div>
    </div>
  );
}

export default Home;

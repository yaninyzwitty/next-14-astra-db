import { db } from "@/lib/db";
import { MovieReview } from "@/types";
import React from "react";
import BackButton from "./back-button";

type Props = {
  params: {
    title: string;
  };
};

async function TitlePage({ params }: Props) {
  const originalTitle = params.title.replaceAll("_", " ");
  const collection = await db.collection<MovieReview>("movie_reviews");
  const movie = await collection.findOne({ title: originalTitle });

  return (
    <div>
      <div className="mx-auto mt-4 flex max-w-screen-lg items-center justify-between">
        <BackButton />

        <h3 className="text-center font-bold">{originalTitle}</h3>
        <div />
      </div>
      <div className="mx-5 mt-4 max-w-screen-lg lg:mx-auto">
        <h2 className="font-semibold">
          Reviwed by{" "}
          <span className="text-sm font-bold italic text-gray-700">
            {movie?.criticname} on{" "}
            {new Date(movie?.creationdate!).toDateString()}
          </span>
        </h2>

        <h3 className="mt-2 text-sm font-medium leading-6">
          {movie?.reviewtext}
        </h3>
        <div className="flex items-center gap-x-2 text-sm font-semibold">
          Rating:
          <div className="flex h-14 w-14 items-center justify-center rounded-lg border shadow-sm">
            {movie?.originalscore}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitlePage;

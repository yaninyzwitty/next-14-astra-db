"use client";
import { Card } from "@/components/ui/card";
import { MovieReview } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type Props = {
  movie: MovieReview;
};

function Movie({ movie }: Props) {
  return (
    <Card className="aspect-[110/127]">
      <Link href={movie.title.replaceAll(" ", "_")}>
        <div className="flex items-center justify-between px-4 text-xs italic text-neutral-700">
          <h3 className="p-4 font-bold">{movie.title}</h3>
          {new Date(movie.creationdate).toLocaleDateString()}
        </div>
        <div className="mt-4 px-1.5">
          <h3 className="line-clamp-4 text-balance text-center text-sm font-medium leading-6">
            {movie.reviewtext}
          </h3>
        </div>
        <div className="flex items-center justify-between px-4 text-xs italic text-neutral-700">
          <h3 className="p-4 font-bold">{movie.criticname}</h3>
          {movie.originalscore ? movie.originalscore : "No review rating"}
        </div>
      </Link>
    </Card>
  );
}

export default Movie;

export const MovieSkeleton = () => {
  return (
    <Card className="aspect-[110/127]">
      <div className="mt-2 flex items-center justify-between px-4">
        <Skeleton className="h-8 w-[80px] rounded-sm" />
        <Skeleton className="h-8 w-[40px] rounded-sm" />
      </div>
      <div className="mt-4 px-1.5">
        <Skeleton className="h-[125px] w-full rounded-sm lg:w-[200px]" />
      </div>
      <div className="mt-4 flex items-center justify-between px-4">
        <Skeleton className="h-8 w-[100px] rounded-sm" />
        <Skeleton className="h-8 w-8 rounded-sm" />
      </div>
    </Card>
  );
};

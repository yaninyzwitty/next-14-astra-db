import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { MovieReview } from "@/types";

export async function GET (request:Request) {
    try {

        const collection = await db.collection<MovieReview>("movie_reviews");
        // get some data
        const movies = await collection.find({}, {limit: 30}).toArray();

        return NextResponse.json(movies);
      

        
    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Server Error', { status: 500 });
        
    }
}
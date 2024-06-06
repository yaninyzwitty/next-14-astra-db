import { VectorDoc  } from "@datastax/astra-db-ts";

export interface MovieReview extends VectorDoc {
    title: string;
    reviewid: number;
    creationdate: Date ;
    criticname: string;
    originalscore: number | string;
    reviewstate: string;
    reviewtext: string;

  }
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetMovieReviews = () => {
    const query = useQuery({
        queryKey: ['movie-reviews'],
        
        queryFn: async () => {
            const res = await axios.get("/api/movie-reviews");
            if(res.status !== 200) throw new Error("Error fetching movie reviews");
            return res.data;
        }
    })


}
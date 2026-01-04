import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useRecipeSearch(query: string) {
    const { data, isPending, error } = useQuery({ 
        queryKey: [query], 
        queryFn: async () => {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/${query}`)
            return data
        }
    })
    return { data, isPending, error }
}
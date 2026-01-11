import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type Meal } from "../utils/types";

export type RecipeApiResponse = {
  meals: Meal[] | null;
};

export function useRecipeSearch(query: string) {
  const { data, isPending, error } = useQuery({
    queryKey: [query],
    queryFn: async () => {
      const data = await axios.get<RecipeApiResponse>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      return data.data?.meals;
    },
  });
  return { data, isPending, error };
}

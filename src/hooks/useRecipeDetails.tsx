import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type Meal } from "../utils/types";

export type RecipeDetailsApiResponse = {
  meals: Meal[] | null;
};

export function useRecipeDetails(id: string) {
  const { data, isPending, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const data = await axios.get<RecipeDetailsApiResponse>(
        `https://www.themealdb.com/api/json/v1/1//lookup.php?i=${id}`
      );
      return data.data?.meals;
    },
  });
  return { data, isPending, error };
}

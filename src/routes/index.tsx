import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useRecipeSearch } from "../hooks/useRecipeSearch";
import { RecipeCard } from "../components/PecipeCard";
import { type Meal } from "../utils/types";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isPending, error } = useRecipeSearch(searchValue);
  const meals = data ?? [];

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search meals..."
        style={{
          width: "100%",
          maxWidth: "360px",
          padding: "10px 12px",
          borderRadius: "8px",
          border: "1px solid #d0d5dd",
          color: "#0f172a",
          fontSize: "14px",
          marginBottom: "10px",
          marginRight: "5px",
        }}
      ></input>
      {isPending && <span>Loading…</span>}
      {error && <span>{error.message}</span>}
      {meals.map((meal: Meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

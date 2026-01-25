import type { Meal, Ingredient } from "./types";

export function getIngredients(m: Meal): Ingredient[] {
    const ingredients: Ingredient[] = []
    for (let i = 1; i <= 20; i++) {
        const name = m[`strIngredient${i}`]
        const measure = m[`strMeasure${i}`]
        if (!name || !measure) continue;
        const ingredient: Ingredient = {
            name,
            measure
        }
        ingredients.push(ingredient)
    }
    return ingredients
}
import { createFileRoute } from "@tanstack/react-router";
import { useRecipeDetails } from "../../hooks/useRecipeDetails";
import { getIngredients } from "../../utils/util";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const Route = createFileRoute("/recipe/$id")({
  component: RouteComponent,
});

const formSchema = z.object({
  personalRating: z
    .number()
    .min(1, "must be at least 1")
    .max(5, "cannot be more than 5"),
  notes: z.string(),
  tags: z.array(z.string()),
});

type FormSchema = z.Infer<typeof formSchema>;

function RouteComponent() {
  const [isFormOpen, setFormOpen] = useState(false);
  const { id } = Route.useParams();
  const { data, isPending, error } = useRecipeDetails(id);
  const recipe = data?.[0];

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      personalRating: 1,
      notes: "",
      tags: [],
    },
  });

  // const tagsField = useFieldArray({
  //   control: form.control,
  //   name: "tags",
  // });

  if (isPending) return <>Loading...</>;
  if (error) return <>{error.message}</>;
  if (!recipe) return <>Recipe not found</>;

  const ingredients = getIngredients(recipe);
  const video = recipe.strYoutube;

  const handleForm = () => {};
  return (
    <>
      <h2>{recipe.strMeal}</h2>
      <p>{recipe.strCategory}</p>
      <p>{recipe.strInstructions}</p>

      <ul>
        {ingredients.map((ingredient, i) => {
          return (
            <li key={i}>
              {ingredient.name} - {ingredient.measure}
            </li>
          );
        })}
      </ul>
      <button
        style={{ border: "1px solid black" }}
        onClick={() => setFormOpen(!isFormOpen)}
      >
        Save
      </button>
      {isFormOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleForm();
          }}
        >
          <label>
            Personal Rating:
            <input
              required
              type="number"
              {...form.register("personalRating")}
            />
            <span>{form.formState.errors.personalRating?.message}</span>
          </label>
          <label>
            Notes:
            <input type="text" {...form.register("notes")} />
          </label>
          <label>
            Tags:
            <input type="text" {...form.register("tags")} />
          </label>
        </form>
      )}
      {video && (
        <iframe
          width="560"
          height="315"
          src={video.replace("watch?v=", "embed/")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}

import { type Meal } from "../utils/types";

type RecipeCardProps = { meal: Meal };

export function RecipeCard({ meal }: RecipeCardProps) {
  const thumb = meal.strMealThumb ?? "";
  const title = meal.strMeal ?? "Unknown meal";

  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "12px",
        border: "1px solid #d0d5dd",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      {thumb ? (
        <a
          href={thumb}
          target="_blank"
          rel="noreferrer"
          style={{ display: "block", width: "100%", overflow: "hidden" }}
        >
          <img
            src={thumb}
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "120px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </a>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "120px",
            background: "#f2f4f7",
            borderRadius: "6px",
          }}
        />
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h2 style={{ margin: 0, fontWeight: 600, fontSize: "18px" }}>
          {title}
        </h2>
        <div style={{ color: "#475467", fontSize: "14px" }}>
          {meal.strCategory ?? "Unknown category"} ·{" "}
          {meal.strArea ?? "Unknown area"}
        </div>
        {meal.strTags && (
          <div style={{ color: "#6941c6", fontSize: "13px" }}>
            {meal.strTags}
          </div>
        )}
      </div>
    </article>
  );
}

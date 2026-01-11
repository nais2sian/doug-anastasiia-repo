type NullableString = string | null;

export type Meal = {
  idMeal: string;
  strMeal: string;
  strMealAlternate: NullableString;

  strCategory: NullableString;
  strArea: NullableString;
  strInstructions: NullableString;
  strMealThumb: NullableString;
  strTags: NullableString;
  strYoutube: NullableString;

  strSource: NullableString;
  strImageSource: NullableString;
  strCreativeCommonsConfirmed: NullableString;
  dateModified: NullableString;

  [key: string]: NullableString;
};

export type RecipeApiResponse = {
  meals: Meal[] | null;
};

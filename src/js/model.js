export const state = {
  recipe: {},
};

export const loadRECIPE = async function () {
  const data = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
  );

  const dataJSON = await data.json();

  const loadRecipe = dataJSON.data.recipe;

  recipe = {
    id: loadRecipe.id,
    title: loadRecipe.title,
    publisher: loadRecipe.publisher,
    sourceURL: loadRecipe.source_url,
    image: loadRecipe.image_url,
    servings: loadRecipe.servings,
    cookingTime: loadRecipe.cooking_time,
    ingredients: loadRecipe.ingredients,
  };
  console.log(loadOBJ);
};

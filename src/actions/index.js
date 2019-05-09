export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPE = 'FAVOURITE_RECIPE';

export const setRecipes = items => {
  return {
    type: SET_RECIPES,
    items,
  };
};

export const favouriteRecipe = recipe => {
  return {
    type: FAVOURITE_RECIPE,
    recipe,
  };
};

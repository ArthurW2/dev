const KEY = "foodflow_recipes_v1";

export function loadRecipes() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function loadRecipesById(recipeIds) {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : [];
    return data.filter(element => recipeIds.includes(element.id));
  } catch {
    return [];
  }
}

export function saveRecipes(recipes) {
  localStorage.setItem(KEY, JSON.stringify(recipes));
}
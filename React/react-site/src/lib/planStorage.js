const KEY = "foodflow_plan_v1";
import {loadRecipesById} from "./storage.js"

export function loadPlan() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : null;

    if(!data) return null;

    if(!Array.isArray(data.days)) return null;

    // Expecting an array of day objects
    return data;
  } catch {
    return null;
  }
}

export function getPlanRecipes(plan) {
  const recipes = [];
  plan.days.map((item) => {
    item.recipeIds.forEach(element => {
      recipes.push(element);
    });
  });
  return loadRecipesById(recipes);
}

export function savePlan(plan) {
  localStorage.setItem(KEY, JSON.stringify(plan));
}
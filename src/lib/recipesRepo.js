import { loadRecipes, saveRecipes } from "./storage";
import { seedRecipes } from "../data/seedRecipes";

export function getOrSeedRecipes() {
  const existing = loadRecipes();
  if (existing.length > 0) return existing;

  saveRecipes(seedRecipes);
  return seedRecipes;
}
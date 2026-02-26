import { normalizeIngredientName } from "../lib/normalize";

function rec(id, title, servings, ingredients, tags = []) {
  return {
    id,
    title,
    servings,
    tags,
    instructions: "",
    ingredients: ingredients.map(({ name, quantity, unit, category }) => ({
      name,
      normalizedName: normalizeIngredientName(name),
      quantity,
      unit,
      category,
    })),
  };
}

export const seedRecipes = [
  rec(
    "rec_tacos",
    "Chicken Tacos",
    4,
    [
      { name: "Chicken breast", quantity: 1, unit: "lb", category: "meat" },
      { name: "Tortillas", quantity: 8, unit: "ea", category: "pantry" },
      { name: "Red onion", quantity: 1, unit: "ea", category: "produce" },
      { name: "Fresh cilantro", quantity: 1, unit: "bunch", category: "produce" },
      { name: "Lime", quantity: 2, unit: "ea", category: "produce" },
    ],
    ["quick"]
  ),
  rec(
    "rec_salsa",
    "Fresh Salsa",
    4,
    [
      { name: "Tomatoes", quantity: 4, unit: "ea", category: "produce" },
      { name: "Red onion", quantity: 1, unit: "ea", category: "produce" },
      { name: "Cilantro", quantity: 1, unit: "bunch", category: "produce" },
      { name: "Lime", quantity: 1, unit: "ea", category: "produce" },
    ],
    ["no-cook"]
  ),
];
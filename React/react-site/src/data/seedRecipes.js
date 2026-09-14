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
  
  rec(
  "rec_guac",
  "Guacamole",
  4,
  [
    { name: "Avocado", quantity: 3, unit: "ea", category: "produce" },
    { name: "Lime", quantity: 1, unit: "ea", category: "produce" },
    { name: "Red onion", quantity: 0.5, unit: "ea", category: "produce" },
    { name: "Fresh cilantro", quantity: 0.5, unit: "bunch", category: "produce" },
    { name: "Salt", quantity: 1, unit: "tsp", category: "spices" },
  ],
  ["dip"]
),

rec(
  "rec_burrito_bowl",
  "Chicken Burrito Bowl",
  4,
  [
    { name: "Chicken breast", quantity: 1, unit: "lb", category: "meat" },
    { name: "Rice", quantity: 1, unit: "cup", category: "pantry" },
    { name: "Black beans", quantity: 1, unit: "cup", category: "pantry" },
    { name: "Tomatoes", quantity: 2, unit: "ea", category: "produce" },
    { name: "Fresh cilantro", quantity: 0.5, unit: "bunch", category: "produce" },
  ],
  ["quick"]
),

rec(
  "rec_pasta_marinara",
  "Pasta Marinara",
  4,
  [
    { name: "Spaghetti", quantity: 12, unit: "oz", category: "pantry" },
    { name: "Tomatoes", quantity: 5, unit: "ea", category: "produce" },
    { name: "Garlic", quantity: 3, unit: "clove", category: "produce" },
    { name: "Olive oil", quantity: 2, unit: "tbsp", category: "pantry" },
    { name: "Basil", quantity: 0.25, unit: "bunch", category: "produce" },
  ],
  ["vegetarian"]
),

rec(
  "rec_stir_fry",
  "Chicken Stir Fry",
  4,
  [
    { name: "Chicken breast", quantity: 1, unit: "lb", category: "meat" },
    { name: "Broccoli", quantity: 1, unit: "head", category: "produce" },
    { name: "Carrot", quantity: 2, unit: "ea", category: "produce" },
    { name: "Soy sauce", quantity: 2, unit: "tbsp", category: "pantry" },
    { name: "Garlic", quantity: 2, unit: "clove", category: "produce" },
  ],
  ["quick"]
),

rec(
  "rec_fried_rice",
  "Vegetable Fried Rice",
  4,
  [
    { name: "Rice", quantity: 2, unit: "cup", category: "pantry" },
    { name: "Egg", quantity: 2, unit: "ea", category: "dairy" },
    { name: "Green onion", quantity: 2, unit: "ea", category: "produce" },
    { name: "Carrot", quantity: 1, unit: "ea", category: "produce" },
    { name: "Soy sauce", quantity: 2, unit: "tbsp", category: "pantry" },
  ],
  ["quick"]
),

rec(
  "rec_tomato_soup",
  "Tomato Soup",
  4,
  [
    { name: "Tomatoes", quantity: 6, unit: "ea", category: "produce" },
    { name: "Garlic", quantity: 2, unit: "clove", category: "produce" },
    { name: "Onion", quantity: 1, unit: "ea", category: "produce" },
    { name: "Vegetable broth", quantity: 2, unit: "cup", category: "pantry" },
    { name: "Cream", quantity: 0.5, unit: "cup", category: "dairy" },
  ],
  ["soup"]
),

rec(
  "rec_salad",
  "Garden Salad",
  2,
  [
    { name: "Lettuce", quantity: 1, unit: "head", category: "produce" },
    { name: "Tomatoes", quantity: 2, unit: "ea", category: "produce" },
    { name: "Cucumber", quantity: 1, unit: "ea", category: "produce" },
    { name: "Red onion", quantity: 0.25, unit: "ea", category: "produce" },
    { name: "Olive oil", quantity: 1, unit: "tbsp", category: "pantry" },
  ],
  ["vegetarian"]
),

rec(
  "rec_quesadilla",
  "Chicken Quesadilla",
  2,
  [
    { name: "Chicken breast", quantity: 0.5, unit: "lb", category: "meat" },
    { name: "Tortillas", quantity: 4, unit: "ea", category: "pantry" },
    { name: "Cheddar cheese", quantity: 1, unit: "cup", category: "dairy" },
    { name: "Red onion", quantity: 0.25, unit: "ea", category: "produce" },
    { name: "Lime", quantity: 1, unit: "ea", category: "produce" },
  ],
  ["quick"]
),

rec(
  "rec_omelette",
  "Vegetable Omelette",
  1,
  [
    { name: "Egg", quantity: 3, unit: "ea", category: "dairy" },
    { name: "Spinach", quantity: 1, unit: "cup", category: "produce" },
    { name: "Tomatoes", quantity: 1, unit: "ea", category: "produce" },
    { name: "Cheddar cheese", quantity: 0.25, unit: "cup", category: "dairy" },
    { name: "Salt", quantity: 0.5, unit: "tsp", category: "spices" },
  ],
  ["breakfast"]
),

rec(
  "rec_garlic_bread",
  "Garlic Bread",
  4,
  [
    { name: "Bread", quantity: 1, unit: "loaf", category: "bakery" },
    { name: "Garlic", quantity: 3, unit: "clove", category: "produce" },
    { name: "Butter", quantity: 3, unit: "tbsp", category: "dairy" },
    { name: "Parsley", quantity: 0.25, unit: "bunch", category: "produce" },
    { name: "Salt", quantity: 0.5, unit: "tsp", category: "spices" },
  ],
  ["side"]
)
];
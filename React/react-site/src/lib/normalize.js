const SAFE_PREFIXES = [
  "fresh",
  "dried",
  "chopped",
  "minced",
  "large",
  "small",
];

export function normalizeIngredientName(input) {
  if (!input) return "";

  let s = input.toLowerCase().trim();

  // remove punctuation
  s = s.replace(/[^\w\s]/g, "");

  // convert whitespace to _
  s = s.replace(/\s+/g, "_");

  // basic plural handling
  if (s.endsWith("ies")) s = s.slice(0, -3) + "y";      // berries -> berry
  else if (s.endsWith("es")) s = s.slice(0, -2);        // tomatoes -> tomato (rough)
  else if (s.endsWith("s") && s.length > 3) s = s.slice(0, -1); // onions -> onion

  return s;
}

export function getBaseIngredient(normalizedName) {
  const parts = normalizedName.split("_");

  // remove safe prefixes
  while (SAFE_PREFIXES.includes(parts[0])) {
    parts.shift();
  }

  return parts.join("_");
}

export function ingredientsMatch(a, b) {
  if (!a || !b) return false;

  const baseA = getBaseIngredient(a);
  const baseB = getBaseIngredient(b);

  return baseA === baseB;
}
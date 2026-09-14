const KEY = "foodflow_pantry_v1";



export function loadPantry() {
  try {
    const raw = localStorage.getItem(KEY);
    const data = raw ? JSON.parse(raw) : null;

    if(!data) return null;

    if(!Array.isArray(data)) return null;

    // Expecting an array of day objects
    return data;
  } catch {
    return null;
  }
}


export function savePantry(pantry) {
  localStorage.setItem(KEY, JSON.stringify(pantry));
}
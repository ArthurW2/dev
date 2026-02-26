const PLAN_KEY = "foodflow_plan_v1";

export function loadPlan() {
  try {
    const raw = localStorage.getItem(PLAN_KEY);
    const data = raw ? JSON.parse(raw) : null;

    if(!data) return null;

    if(!Array.isArray(data.days)) return null;

    // Expecting an array of day objects
    return data;
  } catch {
    return null;
  }
}

export function savePlan(plan) {
  localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
}
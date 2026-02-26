import { useEffect, useMemo, useState } from "react";
import { getOrSeedRecipes } from "../lib/recipesRepo";
import "./PlanPage.css"

function makeDay(label) {
  return {
    id: crypto.randomUUID(),
    label,
    recipeIds: []
  };
}

export default function PlanPage() {
  const [recipes, setRecipes] = useState([]);
  const [days, setDays] = useState([makeDay("Day 1"), makeDay("Day 2"), makeDay("Day 3")]);

  useEffect(() => {
  setRecipes(getOrSeedRecipes());
  }, []);

  const recipeById = useMemo(() => {
    const map = new Map();
    for (const r of recipes) map.set(r.id, r);
    return map;
  },[recipes]);

  function handleDragStart(e, recipeId) {
    e.dataTransfer.setData("text/plain", recipeId);
    e.dataTransfer.effectAllowed = "copy";
  }

  function handleDropOnDay(e, dayId) {
    e.preventDefault();
    const recipeId = e.dataTransfer.getData("text/plain");
    if(!recipeId) return;

    setDays((prev) =>
      prev.map((d) => {
        if(d.id !== dayId) return d;
        if(d.recipeIds.includes(recipeId)) return d;
        return { ...d, recipeIds: [...d.recipeIds, recipeId]};
      }));
  }

  function handleRemoveFromDay(dayId, recipeId) {
    setDays((prev) =>
      prev.map((d) => {
        if (d.id !== dayId) return d;
        return { ...d, recipeIds: d.recipeIds.filter((id) => id !== recipeId) };
      })
    );
  }
  function addDay() {
    setDays((prev) => [...prev, makeDay('Day ${prev.length + 1}')]);
  }

  return (
    <div className="plan-layout">
      <aside className="plan-sidebar">
        <div className="plan-sidebar__title">Plan</div>

        <div className="day-list">
          {days.map((day) => (
            <DayCard
              key={day.id}
              day={day}
              recipeById={recipeById}
              onDrop={(e) => handleDropOnDay(e, day.id)}
              onRemove={(recipeId)=> handleRemoveFromDay(day.id, recipeId)}
            />
          ))}
        </div>
        <button type="button" className="day-add" onClick={addDay} aria-label="Add day">
          +
        </button>
      </aside>

      <section className="plan-main">
        <div className="plan-main__header">
          <h1 className="plan-main__title">Recipes</h1>
          <div className="plan-main__hint">Drag a recipe onto a day.</div>
        </div>

        <div className="recipe-compact-grid">
          {recipes.map((r) => (
            <CompactRecipeCard key={r.id} recipe={r} onDragStart={handleDragStart} />
          ))}
        </div>
      </section>
    </div>
  );

  function DayCard({day, recipeById, onDrop, onRemove}) {
    return (
      <div
        className="day-card"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <div className="day-dcard__header">
          <div className="day-card__label">{day.label}</div>
          <div className="day-card__count">{day.recipeIds.length}</div> 
        </div>
      {day.recipeIds.length=== 0 ? (
        <div className="day-card__empty">Drop recipes here</div>
      ) : (
        <ul className="day-card__items">
        {day.recipeIds.map((id) => {
          const r = recipeById.get(id);
          if(!r) return null;

          return (
            <li key={id} className="day-card__item">
            <span className="day-card__item-title">{r.title}</span>
            <button 
            type="button"
            className="day-card__remove"
            onClick={() => onRemove(id)}
            aria-label={'Remove ${r.title}'}
            >✕</button>
            </li>
          );
        })}
          </ul>
      )}
      </div>
    );
  }

  function CompactRecipeCard({recipe, onDragStart }) {
    return (
      <div
        className="recipe-compact-card"
        draggable
        onDragStart={(e) => onDragStart(e, recipe.id)}
        role="button"
        tabIndex={0}
        title="Drag onto a day"
      >
        <div className="recipe-compact-card__title">{recipe.title}</div>
        <div className="recipe-compact-card__meta">
          {recipe.ingredients.length} ingredients • {recipe.servings} servings
        </div>
      </div>
    );
  }

}
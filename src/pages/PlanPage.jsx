import { useEffect, useMemo, useState } from "react";
import { getOrSeedRecipes } from "../lib/recipesRepo";
import { loadPlan, savePlan } from "../lib/planStorage";
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


  const [plan, setPlan] = useState(() => {
    const saved = loadPlan();
    return (
       saved ?? {
        startDate: getTodaysDate(),
        days: [makeDay("Day 1"), makeDay("Day 2"), makeDay("Day 3")]}
      );
  });

  const days = plan.days;

  useEffect(() => {
    savePlan(plan);
  }, [plan]);
  
  useEffect(() => {
    setRecipes(getOrSeedRecipes());
  }, []);

  const recipeById = useMemo(() => {
    const map = new Map();
    for (const r of recipes) map.set(r.id, r);
    return map;
  },[recipes]);

  function getTodaysDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function handleDragStart(e, recipeId) {
    e.dataTransfer.setData("text/plain", recipeId);
    e.dataTransfer.effectAllowed = "copy";
  }

  function handleDropOnDay(e, dayId) {
    e.preventDefault();
    const recipeId = e.dataTransfer.getData("text/plain");
    if(!recipeId) return;

    setPlan((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if(d.id !== dayId) return d;
      
        if(d.recipeIds.includes(recipeId)) return d;
        
        return {
          ...d,
          recipeIds:[...d.recipeIds, recipeId]
        };
      })
    }));

    setDays((prev) =>
      prev.map((d) => {
        if(d.id !== dayId) return d;
        if(d.recipeIds.includes(recipeId)) return d;
        return { ...d, recipeIds: [...d.recipeIds, recipeId]};
      }));
  }

  function handleRemoveFromDay(dayId, recipeId) {
    setPlan((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if (d.id !== dayId) return d;

        return {
          ...d,
          recipeIds: d.recipeIds.filter((id) => id !== recipeId),
        };
      }),
    }));
  }

  function handleClearPlan() {
    setPlan((prev) => ({
      ...prev,
      startDate: getTodaysDate(),
      days: []
    }));


  }
  
  function addDay() {
    setPlan((prev) => ({
      ...prev,
      days: [
        ...prev.days,
        makeDay('Day ${prev.length + 1}')
      ]
    }));
  }

  function removeDay(dayId) {
    setPlan((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d.id !== dayId)
    }))
  }

  function addDaysISO(isoDate, daysToAdd) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, m - 1, d);      // local date (no timezone shift issues)
    dt.setDate(dt.getDate() + daysToAdd);

    const yy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, "0");
    const dd = String(dt.getDate()).padStart(2, "0");
    return `${yy}-${mm}-${dd}`;
  }

  function formatDayLabel(isoDate) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(y, m - 1, d);

    return dt.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="plan-layout">
      <div>
        <aside className="plan-sidebar">
        <div className="plan-day-picker">
          {/* <button type="button" className="plan-day-change" onClick={addDay} aria-label="Select Plan Start Date">Select Plan Start Date</button> */}

          <button
            type="button"
            className="plan-day-change"
            onClick={() => {
              const el = document.getElementById("plan-start-date");
              if (!el) return;

              // Preferred: opens the native calendar UI (supported in many Chromium browsers)
              if (typeof el.showPicker === "function") {
                el.showPicker();
              } else {
                el.focus();
                el.click();
              }
            }}
          >
            {plan.startDate ? `Start: ${plan.startDate}` : "Select Plan Start Date"}
          </button>

          <button type="button" className="plan-clear" onClick={(e, plan) => handleClearPlan(e, plan)} title="Clear Plan and Restart">X</button>

          <input
            id="plan-start-date"
            type="date"
            className="plan-date-input"
            value={plan.startDate ?? ""}   
            onChange={(e) => {
              const value = e.target.value; // YYYY-MM-DD
              setPlan((prev) => ({ ...prev, startDate: value }));
            }}
          />
        </div>

          <div className="day-list">
            {plan.days.map((day, index) => {
              const iso = plan.startDate ? addDaysISO(plan.startDate, index) : null;

              return (
                <DayCard
                  key={day.id}
                  day={day}
                  dateISO={iso}
                  dateLabel={iso ? formatDayLabel(iso) : null}
                  recipeById={recipeById}
                  onDrop={(e) => handleDropOnDay(e, day.id)}
                  onRemove={(recipeId) => handleRemoveFromDay(day.id, recipeId)}
                  onRemoveDay={() => removeDay(day.id)}
                />
              );
            })}
            {/* {days.map((day) => (
              <DayCard
                key={day.id}
                day={day}
                recipeById={recipeById}
                onDrop={(e) => handleDropOnDay(e, day.id)}
                onRemove={(recipeId)=> handleRemoveFromDay(day.id, recipeId)}
                onRemoveDay={() => removeDay(day.id)}
              />
            ))} */}
          </div>
          <button type="button" className="day-add" onClick={addDay} aria-label="Add day">
            +
          </button>
        </aside>
  </div>
      <section className="plan-main">
        <div className="plan-main-header">
          <h1 className="plan-main-title">Recipes</h1>
          <div className="plan-main-hint">Drag a recipe onto a day.</div>
        </div>

        <div className="recipe-compact-grid">
          {recipes.map((r) => (
            <CompactRecipeCard key={r.id} recipe={r} onDragStart={handleDragStart} />
          ))}
        </div>
      </section>
    </div>
  );

  function DayCard({day, dateLabel, recipeById, onDrop, onRemove, onRemoveDay}) {
    return (
      <div
        className="day-card"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <div className="day-card-header">
          {/* <div className="day-card__label">{day.label}</div> */}
          {dateLabel && <div className="day-card-label">{dateLabel}</div>}
          {/* <div className="day-card__count">{day.recipeIds.length}</div> I don't need the recipe length for each day */}

          <button
            type="button"
            className="day-card-delete"
            onClick={onRemoveDay}
            aria-label={`Remove ${day.label}`}
          >
            ✕
          </button>
        </div>
        {day.recipeIds.length=== 0 ? (
          <div className="day-card-empty">Drop recipes here</div>
        ) : (
          <ul className="day-card-items">
          {day.recipeIds.map((id) => {
            const r = recipeById.get(id);
            if(!r) return null;

            return (
              <li key={id} className="day-card-item">
              <span className="day-card-item-title">{r.title}</span>
              <button 
              type="button"
              className="day-card-remove"
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
        <div className="recipe-compact-card-title">{recipe.title}</div>
        <div className="recipe-compact-card-meta">
          {recipe.ingredients.length} ingredients • {recipe.servings} servings
        </div>
      </div>
    );
  }

}
import { useState, useMemo } from "react";

import "./ShoppingPage.css"
import RecipeCard from "../components/RecipeCard";
import { getPlanRecipes, loadPlan } from "../lib/planStorage";
import "./RecipesPage.css";

export default function ShoppingPage() { 
  //need new storage object for ingredients, {plan: x, list: y}

  const planRecipes = useMemo(() => {
    return getPlanRecipes(loadPlan());
  },[]);
  
  return (
    <div className="shopping-layout">
      <div>
        <aside className="shopping-sidebar">
          <div className="shopping-pantry">
            pantry
          </div>
        </aside>
        </div><div>
        <aside className="shopping-sidebar">
          <div className="shopping-list">
            shopping list
          </div>
        </aside>
      </div>
      
      <section className="plan-main">
        <div className="plan-main-header">
          <h1 className="plan-main-title">Recipes</h1>
          <div className="plan-main-hint">Drag a recipe onto a day.</div>
        </div>
        <div className="recipe-compact-grid">
          {/*add disable delete btn to recipe card and hide from shopping page */}
          {planRecipes.map((r) => (
                    <RecipeCard 
                        key={r.id}
                        recipe={r}
                        />
          ))}
        </div>
      </section>
    </div>
  )
}
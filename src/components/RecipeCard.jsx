import "../pages/RecipesPage.css"

export default function RecipeCard({ recipe, onDelete }) {
  return (
    <article className="recipe-card">
      <div className="recipe-card-header">
        <div>
          <h3 className="recipe-card-title">{recipe.title}</h3>
          <div className="recipe-card-servings">{recipe.servings} servings</div>
        </div>

        <button
          type="button"
          className="recipe-card-delete"
          onClick={() => onDelete(recipe.id)}
          aria-label={`Delete ${recipe.title}`}
        >
          ✕
        </button>
      </div>

      <div className="recipe-card-content">
        <div className="recipe-card-column">
          <div className="recipe-card-section-title">Instructions</div>
          <p className="recipe-card-instructions">
            {recipe.instructions?.trim() || "No instructions added yet."}
          </p>
        </div>

        <div className="recipe-card-column">
          <div className="recipe-card-section-title">Ingredients</div>

          {recipe.ingredients?.length > 0 ? (
            <ul className="recipe-card-ingredients">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={`${recipe.id}-${ingredient.normalizedName}-${index}`}
                  className="recipe-card-ingredient"
                >
                  <span className="recipe-card-ingredient-name">
                    {ingredient.name}
                  </span>
                  <span className="recipe-card-ingredient-meta">
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="recipe-card-empty">No ingredients added yet.</p>
          )}
        </div>
      </div>
    </article>
  );
}
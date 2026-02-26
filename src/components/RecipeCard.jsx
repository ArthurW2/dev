import "./RecipeCard.css";

export default function RecipeCard({recipe, onClick}) {
    return (
        <article
        className="recipe-card"
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={(e) => {
            if(!onClick) return;
            if(e.key==="Enter" || e.key === " ") onClick();
        }}
        >
            <div className="recipe-card__top">
                <h3 className="recipe-card__title">
                    {recipe.title} 
                </h3>

                <span className="recipe-card__servings">
                    {recipe.servings} servings
                </span>
            </div>
            <p className="recipe-card__meta">
                {recipe.ingredients.length} ingredients
            </p>

            {recipe.tags?.length > 0 && (
                <div className="recipe-card__tags">
                    {recipe.tags.slice(0,3).map((t)=> (
                        <span key={t} className="recipe-card__tag">
                            {t}
                        </span>
                    ))}
                </div>
            )}

        </article>
    )
}
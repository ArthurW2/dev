import { useEffect, useState } from "react";
import { getOrSeedRecipes } from "../lib/recipesRepo";
import RecipeCard from "../components/RecipeCard";
import AddRecipeModal from "../components/AddRecipeModal";

export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);

    const[isAddOpen, setIsAddOpen] = useState(false);
    
    useEffect(() => {
        const data = getOrSeedRecipes();
        setRecipes(data);
    }, []);
    
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Recipes</h1>

                <button
                    type="button" // Prevent form submit behaviors
                    className="btn btn--primary"
                    onClick={() => setIsAddOpen(!isAddOpen)} // Open the modal
                >
                + Add Recipe
                </button>
            </div>
            <div className="recipe-grid">
                {recipes.map((r) => (
                    <RecipeCard 
                        key={r.id}
                        recipe={r}
                        onClick={() => console.log("Clicked recipe:", r.id)}
                    />
                ))}
            </div>

            <AddRecipeModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSave={(newRecipe) => {
                    const next = [newRecipe, ...recipies];
                    setRecipes(next);
                    saveRecipes(next);
                }}
            />
        </div>
    );
}
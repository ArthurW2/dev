import { useEffect, useState } from "react";
import { getOrSeedRecipes, saveNewRecipeList } from "../lib/recipesRepo";
import RecipeCard from "../components/RecipeCard";
import AddRecipeModal from "../components/AddRecipeModal";
import "./RecipesPage.css";


export default function RecipesPage() {
    const [recipes, setRecipes] = useState([]);

    const[isAddOpen, setIsAddOpen] = useState(false);
    
    useEffect(() => {
        const data = getOrSeedRecipes();
        setRecipes(data);
    }, []);
        
    function handleDeleteRecipe(recipeId) {
        const recipeToDelete = recipes.find((recipe) => recipe.id === recipeId);
        if (!recipeToDelete) return;

        const confirmed = window.confirm(
            `Delete "${recipeToDelete.title}"? This can't be undone.`
        );

        if (!confirmed) return;

        const next = recipes.filter((recipe) => recipe.id !== recipeId);
        setRecipes(next);
        saveNewRecipeList(next);
    }
    
    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Recipes</h1>

                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setIsAddOpen(!isAddOpen)}
                >
                + Add Recipe
                </button>
            </div>
            <div className="recipe-grid">
                {recipes.map((r) => (
                    <RecipeCard 
                        key={r.id}
                        recipe={r}
                        onDelete={handleDeleteRecipe}
                    />
                ))}
            </div>

            <AddRecipeModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSave={(newRecipe) => {
                    const next = [newRecipe, ...recipes];
                    setRecipes(next);
                    saveNewRecipeList(next);
                    setIsAddOpen(false);
                }}
            />
        </div>
    );
}
import { useMemo, useState } from "react"; 
import IngredientEditor from "./IngredientEditor"; 
import { normalizeIngredientName } from "../lib/normalize"; 

export default function AddRecipeModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [servings, setServings] = useState("1");

  const [ingredients, setIngredients] = useState([
    { rowId: crypto.randomUUID(), name: "", quantity: "", unit: "ea", category: "produce" }, 
  ]);

  const unitOptions = useMemo(
    () => ["ea", "bunch", "tsp", "tbsp", "cup", "oz", "lb", "g", "kg", "ml", "l"],
    []
  );
  
  const categoryOptions = useMemo(
    () => ["produce", "meat", "dairy", "pantry", "spices", "frozen", "bakery", "other"],
    []
  );
  
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">Add Recipe</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault(); 

            const servingsNum = Math.max(1, Number(servings) || 1);

            // Build a clean ingredient array (remove completely empty rows)
            const cleanedIngredients = ingredients
              .filter((ing) => ing.name.trim() !== "") 
              .map((ing) => ({
                name: ing.name.trim(),
                normalizedName: normalizeIngredientName(ing.name), 
                quantity: ing.quantity, 
                unit: ing.unit, 
                category: ing.category
              }));

            if (title.trim() === "") return;

            onSave({
              id: crypto.randomUUID(),
              title: title.trim(), 
              servings: servingsNum, 
              tags: [], 
              instructions: instructions.trim(), 
              ingredients: cleanedIngredients, 
            });

            // Reset modal state after saving
            setTitle("");
            setInstructions("");
            setServings("1");
            setIngredients([{ rowId: crypto.randomUUID(), name: "", quantity: "", unit: "ea", category: "produce" }]);
            
            onClose();
          }}
        >
          <label className="field">
            <span className="field__label">Title</span>
            <input
              className="input"
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Fresh Salsa" 
              required 
            />
          </label>

          <label className="field">
            <span className="field__label">Servings</span>
            <input
              className="input"
              type="number" 
              min="1" 
              step="1" 
              value={servings} 
              onChange={(e) => setServings(e.target.value)}
            />
          </label>

          <label className="field">
            <span className="field__label">Instructions</span> 
            <textarea
              className="textarea"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)} 
              placeholder="Write the steps..." 
              rows={5} 
            />
          </label>

          <div className="field">
            <span className="field__label">Ingredients</span>
            <IngredientEditor
              ingredients={ingredients}
              setIngredients={setIngredients}
              unitOptions={unitOptions}
              categoryOptions={categoryOptions}
            />
          </div>

          <div className="modal__footer">
            <button type="button" className="btn btn--secondary" onClick={onClose}>
              Cancel
            </button>

            <button type="submit" className="btn btn--primary">
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
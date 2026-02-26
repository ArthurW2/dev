import "./IngredientEditor.css"
// Export a reusable ingredient editor component
export default function IngredientEditor({ ingredients, setIngredients, unitOptions, categoryOptions }) {
  return (
    <div className="ingredient-editor">
      {/* Header row labels */}
      <div className="ingredient-grid ingredient-grid--header">
        <div>Name</div>
        <div>Qty</div> 
        <div>Unit</div> 
        <div>Category</div>
        <div /> {/* Empty column for actions */}
      </div>

      {/* Render each ingredient row */}
      {ingredients.map((ing, index) => (
        <IngredientRow
          key={ing.rowId} // Unique key for React list rendering
          ingredient={ing} // Row data
          index={index} // Row index for update/delete
          ingredients={ingredients} // Full list for updating
          setIngredients={setIngredients} // Setter to update list
          unitOptions={unitOptions} // Unit dropdown options
          categoryOptions={categoryOptions}
        />
      ))}

      {/* Button to add a new blank ingredient row */}
      <button
        type="button" // Prevents form submission
        className="btn btn--secondary"
        onClick={() => {
          // Add a new ingredient row to the list
          setIngredients([
            ...ingredients,
            { rowId: crypto.randomUUID(), name: "", quantity: "", unit: "ea", category: "produce" },
          ]);
        }}
      >
        + Add ingredient line
      </button>
    </div>
  );
}

// A single ingredient row component (kept inside this file)
function IngredientRow({ ingredient, index, ingredients, setIngredients, unitOptions, categoryOptions }) {
  return (
    <div className="ingredient-grid">
      {/* Ingredient name input */}
      <input
        className="input"
        placeholder="e.g., Fresh cilantro" // Placeholder example
        value={ingredient.name} // Controlled input value
        onChange={(e) => {
          // Create a copy of the array
          const next = [...ingredients];

          // Update the ingredient name for this row
          next[index] = { ...next[index], name: e.target.value };

          // Save updated array back to state
          setIngredients(next);
        }}
      />

      {/* Quantity input */}
      <input
        className="input"
        placeholder="e.g., 2" // Placeholder example
        value={ingredient.quantity} // Controlled input value
        onChange={(e) => {
          // Create a copy of the array
          const next = [...ingredients];

          // Update the quantity for this row
          next[index] = { ...next[index], quantity: e.target.value };

          // Save updated array back to state
          setIngredients(next);
        }}
      />

      {/* Unit dropdown */}
      <select
        className="select"
        value={ingredient.unit} // Controlled select value
        onChange={(e) => {
          // Create a copy of the array
          const next = [...ingredients];

          // Update the unit for this row
          next[index] = { ...next[index], unit: e.target.value };

          // Save updated array back to state
          setIngredients(next);
        }}
      >
        {/* Render unit options */}
        {unitOptions.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={ingredient.category} // Controlled select value
        onChange={(e) => {
          // Copy the ingredients array
          const next = [...ingredients];

          // Update this row's category
          next[index] = { ...next[index], category: e.target.value };

          // Save updated array
          setIngredients(next);
        }}
      >
        {/* Render category options */}
        {categoryOptions.map((c) => (
          <option key={c} value={c}>
            {c} {/* Show category text */}
          </option>
        ))}
      </select>

      {/* Remove row button */}
      <button
        type="button" // Prevents form submission
        className="btn btn--danger"
        onClick={() => {
          // Remove this row by filtering it out
          setIngredients(ingredients.filter((_, i) => i !== index));
        }}
        aria-label="Remove ingredient line" // Accessibility label
      >
        ✕
      </button>
    </div>
  );
}
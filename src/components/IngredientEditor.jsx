import "./IngredientEditor.css"
import {useRef, useEffect} from "react";

export default function IngredientEditor({ ingredients, setIngredients, unitOptions, categoryOptions }) {

  const listRef = useRef(null);
  const prevLength = useRef(ingredients.length);

  useEffect(() => {
    if( !listRef.current) return;

    if(ingredients.length > prevLength.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }

    prevLength.current = ingredients.length;
  }, [ingredients]);

  return (
    <div>
      <div className="ingredient-editor" ref={listRef}>
        <div className="ingredient-grid ingredient-grid-header">
          <div>Name</div>
          <div>Qty</div> 
          <div>Unit</div> 
          <div>Category</div>
          <div />
        </div>

        {ingredients.map((ing, index) => (
          <IngredientRow
            key={ing.rowId} 
            ingredient={ing}
            index={index} 
            ingredients={ingredients} 
            setIngredients={setIngredients} 
            unitOptions={unitOptions} 
            categoryOptions={categoryOptions}
          />
        ))}

      </div>
    </div>
  );
}

function IngredientRow({ ingredient, index, ingredients, setIngredients, unitOptions, categoryOptions }) {
  return (
    <div className="ingredient-grid">
      <input
        className="input"
        placeholder="e.g., Fresh cilantro" 
        value={ingredient.name} 
        onChange={(e) => {
          const next = [...ingredients];

          next[index] = { ...next[index], name: e.target.value };

          setIngredients(next);
        }}
      />

      <input
        className="input"
        placeholder="e.g., 2" 
        value={ingredient.quantity} 
        onChange={(e) => {
          const next = [...ingredients];

          next[index] = { ...next[index], quantity: e.target.value };

          setIngredients(next);
        }}
      />

      <select
        className="select"
        value={ingredient.unit}
        onChange={(e) => {
          const next = [...ingredients];

          next[index] = { ...next[index], unit: e.target.value };

          setIngredients(next);
        }}
      >
        {unitOptions.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={ingredient.category}
        onChange={(e) => {
          const next = [...ingredients];

          next[index] = { ...next[index], category: e.target.value };

          setIngredients(next);
        }}
      >
        {categoryOptions.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        type="button" 
        className="btn btn-danger"
        onClick={() => {
          setIngredients(ingredients.filter((_, i) => i !== index));
        }}
        aria-label="Remove ingredient line" 
      >
        ✕
      </button>
    </div>
  );
}
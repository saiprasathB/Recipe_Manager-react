import React, { useState } from 'react';
import { updateRecipe } from '../firebase';

const EditRecipe = ({ recipe, onCancel }) => {
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleUpdate = () => {
    const updatedRecipe = { name, ingredients, instructions };
    updateRecipe(recipe.id, updatedRecipe);
    onCancel();
  };

  return (
    <div className="edit-recipe">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRecipe;

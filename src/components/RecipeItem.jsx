import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { deleteRecipe } from '../firebase';

const RecipeItem = ({ recipe, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    onDelete(recipe.id);
  };

  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <li className="recipe-item" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      {/* Dish Name with clickable effect */}
      <Typography
        variant="h6"
        onClick={toggleDetails}
        style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          color: '#3f51b5',
          marginBottom: '10px',
          transition: 'color 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.color = '#1e3b8f'}
        onMouseOut={(e) => e.target.style.color = '#3f51b5'}
      >
        {recipe.name}
      </Typography>

      {/* Conditionally rendered details */}
      {showDetails && (
        <div>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '10px' }}>
            <strong>Ingredients:</strong> {recipe.ingredients}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <strong>Instructions:</strong> {recipe.instructions}
          </Typography>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ marginTop: '15px' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDelete}
          style={{ marginRight: '10px', textTransform: 'none' }}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => alert('Edit functionality to be added!')}
          style={{ textTransform: 'none' }}
        >
          Edit
        </Button>
      </div>
    </li>
  );
};

export default RecipeItem;

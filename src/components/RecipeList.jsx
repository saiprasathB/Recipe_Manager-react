import React, { useState, useEffect } from 'react';
import { TextField, Container, Typography, List } from '@mui/material';
import { getRecipes } from '../firebase'; // Assuming this fetches recipes from Firebase
import RecipeItem from './RecipeItem'; // Import the RecipeItem component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchedRecipes = await getRecipes();
      console.log("Fetched Recipes: ", fetchedRecipes);
      setRecipes(fetchedRecipes);
      setFilteredRecipes(fetchedRecipes);
    };
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredRecipes(
      recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query)
      )
    );
  };

  const handleDelete = (id) => {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    setFilteredRecipes(prevFilteredRecipes => prevFilteredRecipes.filter(recipe => recipe.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recipe List
      </Typography>
      <TextField
        label="Search Recipe"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '20px' }}
      />
      <List>
        {filteredRecipes.length === 0 ? (
          <Typography variant="body1">No recipes found.</Typography>
        ) : (
          filteredRecipes
            .sort((a, b) => a.name.localeCompare(b.name)) // Sort recipes alphabetically
            .map((recipe) => (
              <RecipeItem
                key={recipe.id}
                recipe={recipe}
                onDelete={handleDelete}
              />
            ))
        )}
      </List>
    </Container>
  );
};

export default RecipeList;

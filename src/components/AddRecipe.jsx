// src/components/AddRecipe.jsx
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import { createRecipe } from '../firebase'; // Ensure this path is correct



const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe({ name, ingredients, instructions });
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Recipe
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Recipe Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ingredients"
              fullWidth
              multiline
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Instructions"
              fullWidth
              multiline
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Add Recipe
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddRecipe;

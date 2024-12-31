// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/start-cooking" element={<RecipeList />} />
      </Routes>
    </Router>
  );
};

export default App;

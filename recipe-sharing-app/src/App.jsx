import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import { useRecipeStore } from './store/recipeStore';
import './App.css';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  // Initialize with sample recipes
  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: 'Classic Pancakes',
        description: 'Fluffy and delicious breakfast pancakes',
        ingredients: ['1 cup flour', '2 tbsp sugar', '1 tsp baking powder', '1 cup milk', '1 egg', '2 tbsp butter'],
        instructions: '1. Mix dry ingredients in a bowl.\n2. Add wet ingredients and whisk until smooth.\n3. Heat a griddle over medium heat.\n4. Pour batter and cook until bubbles form.\n5. Flip and cook until golden brown.'
      },
      {
        id: 2,
        title: 'Vegetable Stir Fry',
        description: 'Quick and healthy vegetable stir fry',
        ingredients: ['2 cups mixed vegetables', '2 tbsp soy sauce', '1 tbsp oil', '2 cloves garlic', '1 tsp ginger'],
        instructions: '1. Heat oil in a wok.\n2. Add minced garlic and ginger, stir for 30 seconds.\n3. Add vegetables and stir-fry for 5-7 minutes.\n4. Add soy sauce and cook for 1 more minute.\n5. Serve hot with rice.'
      },
      {
        id: 3,
        title: 'Chocolate Chip Cookies',
        description: 'Classic homemade cookies',
        ingredients: ['2 1/4 cups flour', '1 tsp baking soda', '1 tsp salt', '1 cup butter', '3/4 cup sugar', '2 eggs', '2 cups chocolate chips'],
        instructions: '1. Preheat oven to 375°F (190°C).\n2. Mix dry ingredients in a bowl.\n3. Cream butter and sugars, then add eggs.\n4. Combine wet and dry ingredients, add chocolate chips.\n5. Drop spoonfuls onto baking sheet and bake for 9-11 minutes.'
      }
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>🍳 Recipe Sharing App</h1>
          <p>Share, edit, and manage your favorite recipes</p>
        </header>
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={
              <div className="container">
                <div className="left-panel">
                  <AddRecipeForm />
                </div>
                <div className="right-panel">
                  <RecipeList />
                </div>
              </div>
            } />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>Built with React, Zustand & React Router | Recipe Sharing Application</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;